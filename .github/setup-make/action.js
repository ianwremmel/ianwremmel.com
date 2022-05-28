const core = require('@actions/core');
const exec = require('@actions/exec');
const io = require('@actions/io');
const tc = require('@actions/tool-cache');

async function setup() {
    // Get version of tool to be installed
    const version = core.getInput('version');

    // Download the specific version of the tool, e.g. as a tarball
    const pathToTarball = await tc.downloadTool(`http://ftp.gnu.org/gnu/make/make-${version}.tar.gz`);

    // Extract the tarball onto the runner
    const pathToFolder = await tc.extractTar(pathToTarball);

    await io.rmRF(pathToTarball);

    await exec.exec('./configure prefix=/usr/local', {cwd: pathToFolder});
    await exec.exec('make', {cwd: pathToFolder});
    await exec.exec('make install', {cwd: pathToFolder});


    // Expose the tool by adding it to the PATH
    core.addPath('/usr/local')
}

module.exports = setup