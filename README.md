# bundle-collapser-extended

[![Build Status][ci-img]][ci]

Extended version of [bundle-collapser][bundle-collapser], providing support for custom collapsing and presets.

For all original information regarding this package, visit [bundle-collapser][bundle-collapser] homepage.

## Installation

```sh
npm install bundle-collapser-extended --save
```

## API

API is the same as in original package, except it adds additional option of providing custom collapsing and presets.

### var stream = collapse(src, opts)

`opts.custom` takes array of replacement objects, with properties:

* `replacement`: replacement for found node, where `%s` is used as placeholder for replacement module ID
* `value`: original module ID
* `check`: provides argument `node` which is currently traversed node. It should return boolean to indicate that this is the node you want to replace.

`opts.preset` takes array of strings or replacement objects. If defined as string, it will look inside `lib/preset` directory for predefined preset. Preset should return object in same format as replacement object for `opts.custom`.

If it’s not defined as string, it will use replacement object in the same format as `opts.custom`.

## Presets

* [nunjucksify][nunjucksify]
* [browserify-require-async][browserify-require-async]

## License

MIT, original package by [substack][], modifications by Ivan Nikolić

[ci]: https://travis-ci.org/niksy/bundle-collapser-extended
[ci-img]: https://img.shields.io/travis/niksy/bundle-collapser-extended/extended.svg
[substack]: [https://github.com/substack]
[bundle-collapser]: https://github.com/substack/bundle-collapser
[nunjucksify]: https://github.com/rotundasoftware/nunjucksify
[browserify-require-async]: https://github.com/niksy/browserify-require-async
