# relayhook.io

relayhook.io is stateless webhook middleware.

...

What the hell does that mean?

Well, think of [ifttt](), but make it easier to customize but less shiny. ifttt
(and zapier, built.io, and many others, I'm sure) depends on specific
integrations for each third-party it works with. relayhook, on the other hand,
just needs a url. With the basic version, you encode a [mustache]() template and
the real destination url into the url that you add to a given service.
