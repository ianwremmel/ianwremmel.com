# This Makefile has been written according to guidelines at
# https://tech.davis-hansson.com/p/make/

# I've turned off .RECIPEPREFIX because WebStorm can't parse it. See YouTrack
# https://youtrack.jetbrains.com/issue/CPP-23329/Support-RECIPEPREFIX-in-newer-Make-versions-to-avoid-TAB-charact
## Use ">" instead of "\t" for blocks to avoid surprising whitespace issues
#ifeq ($(origin .RECIPEPREFIX), undefined)
#  $(error "This Make does not support .RECIPEPREFIX. Please use GNU Make 4.0 or later. If you've installed an up-to-date Make with homebrew, you maye need to invoke 'gmake' instead of 'make'.")
#endif
#.RECIPEPREFIX = >

# Make sure we use actual bash instead of zsh or sh
SHELL := bash

# Enforce bash "strict mode"
# http://redsymbol.net/articles/unofficial-bash-strict-mode/
.SHELLFLAGS := -euo pipefail -c

# Use one shell session per rule instead of one shell session per line
.ONESHELL:

# Indicate this Makefile is portable
.POSIX:

# Delete the target of a Make rule if the rule fails
.DELETE_ON_ERROR:

# Warn on undefined variables
MAKEFLAGS += --warn-undefined-variables

# Disable all the magical-but-unreadable bits of Make
MAKEFLAGS += --no-builtin-rules


###############################################################################
## Constants
###############################################################################

# Wrap npx so it only uses local dependencies
NPX := npx --no-install

TMP                         := .tmp
SENTINEL_DIR				:= $(TMP)/sentinel

REMIX_OUTPUT                := .netlify/functions-internal/server.js $(shell find public/build -type f)
REMIX_INPUT                 := app/root.css $(filter-out $(REMIX_OUTPUT), $(shell find app -type f) $(shell find public -type f)) remix.config.js server.js tsconfig.json package.json package-lock.json

SASS                        := $(shell find app/styles -name '*.scss')
SASS_OUTPUT                 := app/root.css app/root.css.map

STORYBOOK_STATIC_DIR        := storybook-static
STORYBOOK_STATIC_INPUT      := app/root.css $(shell find app -name '*.tsx')
STORYBOOK_STATIC_OUTPUT     := $(STORYBOOK_STATIC_DIR)/project.json build-storybook.log

ALL                         := $(REMIX_OUTPUT) app/root.css README.md

###############################################################################
## Public Targets
###############################################################################

all: $(ALL)
.PHONY: all

chromatic: $(SENTINEL_DIR)/chromatic | $(SENTINEL_DIR)
.PHONY: chromatic

clean:
	rm -rf $(REMIX_OUTPUT) $(SASS_OUTPUT)  $(TMP) $(STORYBOOK_STATIC_DIR) .netlify
.PHONY: clean

storybook-static: $(SENTINEL_DIR)/storybook-static
.PHONY: .storybook-static

###############################################################################
## Utility Targets
###############################################################################

$(SENTINEL_DIR):
	@mkdir -p $@

###############################################################################
## Deploy Targets
###############################################################################

$(SENTINEL_DIR)/chromatic: $(STORYBOOK_STATIC_OUTPUT) $(SASS_OUTPUT) | $(SENTINEL_DIR)
ifdef CI
	$(NPX) chromatic --exit-zero-on-changes --storybook-build-dir "$(STORYBOOK_STATIC_DIR)"
else
	$(NPX) chromatic --storybook-build-dir "$(STORYBOOK_STATIC_DIR)"
endif

###############################################################################
## Helpers
###############################################################################

# Print any Makefile variable
# Usage: make print-USER
print-%:
	@echo $* = $($*)
.PHONY: print-%

###############################################################################
## Rules
###############################################################################

$(REMIX_OUTPUT) &: $(REMIX_INPUT)
	$(NPX) remix build

###############################################################################
## Targets
###############################################################################

$(SASS_OUTPUT) &: app/styles/index.scss $(SASS)
	$(NPX) sass --load-path . $< $@

README.md:
	$(NPX) markdown-toc -i --bullets='-' --maxdepth=3 README.md
	$(NPX) prettier --write README.md
.PHONY: README.md

$(STORYBOOK_STATIC_OUTPUT) &: $(STORYBOOK_STATIC_INPUT) | $(SENTINEL_DIR)
	$(NPX) build-storybook --output-dir "$(STORYBOOK_STATIC_DIR)"
