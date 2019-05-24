const { src, dest, parallel, watch } = require('gulp');
const scss = require('gulp-sass');
const ts = require('gulp-typescript');
const bs = require('browserify');
const fs = require('fs');
const nunjucks = require('gulp-nunjucks');

function css() {
    return src('src/scss/*.scss')
        .pipe(scss({
            "includePaths": [
                './node_modules'
            ]
        }))
        .pipe(dest('dist/css'))
}

function js() {
    return src('src/js/*.ts')
        .pipe(ts())
        .pipe(dest('dist/js'))
}

function bwjs() {
    return bs({
        entries: 'src/js/index.js',
        debug: true
    })
        .bundle()
        .pipe(fs.createWriteStream('dist/js/main.js'));
}

function html() {
    return src('src/**.html')
        .pipe(nunjucks.compile())
        .pipe(dest('dist'))
}

function watcher() {
    watch(['src/scss/*.scss', 'src/*html'], parallel(css, html))
}

exports.js = js;
exports.css = css;
exports.bwjs = bwjs;
exports.html = html;
exports.default = parallel(css, html, watcher);
