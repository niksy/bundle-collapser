var through = require('through2');
var handleCustomOptions = require('./lib/handle-custom-options');
var replace = require('./lib/replace.js');

module.exports = function apply (b, opts) {
    var custom = handleCustomOptions(opts);
    b.pipeline.get('label').push(through.obj(function (row, enc, next) {
        row.source = replace(row.source, row.deps, custom);
        var deps = {};
		for (var key in row.deps) {
			deps[row.deps[key]] = row.deps[key];
		}
        row.deps = deps;
        this.push(row);
        next();
    }));
    b.once('reset', function () { apply(b, opts) });
};
