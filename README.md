<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# unshift

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Add one or more elements to the beginning of a collection.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import unshift from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-unshift@v0.0.8-esm/index.mjs';
```

#### unshift( collection, ...items )

Adds one or more elements to the beginning of a `collection`. A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (i.e., an [`Object`][mdn-object] having a valid writable `length` property). 

```javascript
var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];

var out = unshift( arr, 6.0, 7.0 );
// returns [ 6.0, 7.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

var bool = ( out === arr );
// returns true
```

In contrast to [`Array.prototype.unshift`][mdn-array-unshift], the function returns the extended collection, rather than the collection length. For [typed arrays][mdn-typed-array], the returned value is a new [typed array][mdn-typed-array] view whose underlying [`ArrayBuffer`][mdn-arraybuffer] may **not** equal the underlying [`ArrayBuffer`][mdn-arraybuffer] for the input `collection`.

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var buf = new ArrayBuffer( 3*8 ); // 8 bytes per double

var arr = new Float64Array( buf, 8, 2 );
arr[ 0 ] = 1.0;
arr[ 1 ] = 2.0;

var out = unshift( arr, 3.0 );
// returns <Float64Array>[ 3.0, 1.0, 2.0 ]

var bool = ( out === arr );
// returns false

bool = ( out.buffer === arr.buffer );
// returns true

out = unshift( out, 4.0 );
// returns <Float64Array>[ 4.0, 3.0, 1.0, 2.0 ]

bool = ( out.buffer === arr.buffer );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function adds one or more elements to a [typed array][mdn-typed-array] by setting values in the underlying [`ArrayBuffer`][mdn-arraybuffer]. If an [`ArrayBuffer`][mdn-arraybuffer] does not have enough bytes in which to store all elements, the function allocates a new [`ArrayBuffer`][mdn-arraybuffer] capable of holding `2^n` elements, where `n` is the next power of `2`. This procedure is similar to how environments internally handle dynamic memory allocation for [`Arrays`][mdn-array].
-   Beware when providing [typed arrays][mdn-typed-array] which are views pointing to a shared (or pooled) [`ArrayBuffer`][mdn-arraybuffer]. Because the function sets [`ArrayBuffer`][mdn-arraybuffer] bytes outside of a provided [view][mdn-typed-array], the function may overwrite bytes belonging to one or more external views. This could be a potential **security vulnerability**. Prefer providing [typed arrays][mdn-typed-array] which have an exclusive [`ArrayBuffer`][mdn-arraybuffer]; otherwise, be sure to plan for and guard against mutated state.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import unshift from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-unshift@v0.0.8-esm/index.mjs';

var arr;
var i;

arr = new Float64Array();
for ( i = 0; i < 100; i++ ) {
    arr = unshift( arr, i );
}
console.log( arr );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/pop`][@stdlib/utils/pop]</span><span class="delimiter">: </span><span class="description">remove and return the last element of a collection.</span>
-   <span class="package-name">[`@stdlib/utils/push`][@stdlib/utils/push]</span><span class="delimiter">: </span><span class="description">add one or more elements to the end of a collection.</span>
-   <span class="package-name">[`@stdlib/utils/shift`][@stdlib/utils/shift]</span><span class="delimiter">: </span><span class="description">remove and return the first element of a collection.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-unshift.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-unshift

[test-image]: https://github.com/stdlib-js/utils-unshift/actions/workflows/test.yml/badge.svg?branch=v0.0.8
[test-url]: https://github.com/stdlib-js/utils-unshift/actions/workflows/test.yml?query=branch:v0.0.8

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-unshift/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-unshift?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-unshift.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-unshift/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-unshift/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-unshift/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-unshift/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-unshift/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-unshift/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-array-unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/pop]: https://github.com/stdlib-js/utils-pop/tree/esm

[@stdlib/utils/push]: https://github.com/stdlib-js/utils-push/tree/esm

[@stdlib/utils/shift]: https://github.com/stdlib-js/utils-shift/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
