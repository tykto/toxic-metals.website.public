import path from 'path';
import shell from 'shelljs';
import url from 'url';

// __dirname hack: https://stackoverflow.com/a/64383997
export const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const pkgDir = path.resolve(__dirname, '..').split(path.sep).join(path.posix.sep);
const rootDir = path.resolve(__dirname, '..').split(path.sep).join(path.posix.sep);

shell.rm('-rf', `${pkgDir}/static/cdn`);
shell.mkdir('-p', `${pkgDir}/static/cdn/@fortawesome/fontawesome-free/js`);
shell.mkdir('-p', `${pkgDir}/static/cdn/fonts`);
shell.cp(`${rootDir}/node_modules/@fortawesome/fontawesome-free/js/all.min.js`, `${pkgDir}/static/cdn/@fortawesome/fontawesome-free/js`);
shell.cp(`${rootDir}/__artefacts/fonts/*`, `${pkgDir}/static/cdn/fonts`);
