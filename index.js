var path    = require('path');
var through = require('through2');
var gutil   = require('gulp-util');
var _       = require('lodash');

function posixFormat(link) {
    //FIXME path.posix.normalize(link) https://github.com/tjfontaine/node-path-platform/issues/2
    return link.replace(new RegExp('\\' + path.sep,'g'), '/');
}

function gulpAddImportedStyles(styles, params) {
    params = params || {};

    function transform(file, enc, callback) {

        callback(null, file);
    }

    function flush(callback) {
        if (styles) {
            var stream = this;
            var extMap = {};

            _.forEach(styles, function(link) {
                var ext = path.extname(link);

                extMap[ext] = extMap[ext] || [];
                extMap[ext].push(link);
            });

            _.forEach(extMap, function(files, ext) {
                var content = '';

                _.forEach(files, function(link) {
                    link = path.resolve(params.cwd, link);
                    link = posixFormat(link);
                    content += "@import '" + link + "';\n";
                });

                var file = new gutil.File({
                    cwd: params.cwd,
                    path: (params.basename || 'compiled') + ext,
                    contents: new Buffer(content)
                });
                stream.push(file);
            });
        }

        callback();
    }

    return through.obj(transform, flush);
}

module.exports = gulpAddImportedStyles;