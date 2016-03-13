var collapse = require('../');
var concat = require('concat-stream');
var test = require('tape');
var fs = require('fs');
var vm = require('vm');
var unpack = require('browser-unpack');
var expected = require('./preset/expected.json');

test('preset', function (t) {
    t.plan(1 + expected.length);

    var src = fs.readFileSync(__dirname + '/preset/bundle.js', 'utf8');
    collapse(src, { preset: ['nunjucksify'] }).pipe(concat(function (body) {
        vm.runInNewContext(body, { console: { log: log } });
        function log (msg) { t.equal(msg, 300) }

        var rows = unpack(body.toString('utf8'));
        rows.forEach(function (row) {
            t.deepEqual(trim(row), trim(expected.shift()));
        });
    }));
});

function trim (a) {
  a.source = a.source.trim();
  return a;
}
