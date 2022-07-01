// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@esm/index.mjs";function o(e,t){var r;for(r=t.length-1;r>=0;r--)e.unshift(t[r]);return e}function l(e,t){var r,n,s;for(r=e.length,n=t.length,s=r-1;s>=0;s--)e[s+n]=e[s];for(s=0;s<n;s++)e[s]=t[s];return e.length=r+n,e}function a(e,t){var r,n,o,l,a,f,m,d;if(l=e.length,n=(f=t.length)*e.BYTES_PER_ELEMENT,(o=e.byteOffset)<n)for(r=l*e.BYTES_PER_ELEMENT,o=(a=new s(i(r+n+o+1))).byteLength-r-n,m=new e.constructor(a,o,l+f),d=0;d<l;d++)m[d+f]=e[d];else o-=n,m=new e.constructor(e.buffer,o,l+f);for(d=0;d<f;d++)m[d]=t[d];return m}function f(s){var i,f;for(i=new Array(arguments.length-1),f=0;f<arguments.length-1;f++)i[f]=arguments[f+1];if(e(s))return o(s,i);if(t(s))return a(s,i);if(null!==s&&"object"==typeof s&&"number"==typeof s.length&&r(s.length)&&s.length>=0)return l(s,i);throw new TypeError(n("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",s))}export{f as default};
//# sourceMappingURL=index.mjs.map
