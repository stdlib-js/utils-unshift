"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=v(function(l,g){
function A(r,e){var t;for(t=e.length-1;t>=0;t--)r.unshift(e[t]);return r}g.exports=A
});var q=v(function(F,E){
function x(r,e){var t,u,n;for(t=r.length,u=e.length,n=t-1;n>=0;n--)r[n+u]=r[n];for(n=0;n<u;n++)r[n]=e[n];return r.length=t+u,r}E.exports=x
});var T=v(function(I,m){
var d=require('@stdlib/array-buffer/dist'),o=require('@stdlib/math-base-special-ceil2/dist');function L(r,e){var t,u,n,y,i,h,s,f,a;if(i=r.length,s=e.length,u=s*r.BYTES_PER_ELEMENT,n=r.byteOffset,n<u)for(t=i*r.BYTES_PER_ELEMENT,y=t+u+n,h=new d(o(y+1)),n=h.byteLength-t-u,f=new r.constructor(h,n,i+s),a=0;a<i;a++)f[a+s]=r[a];else n-=u,f=new r.constructor(r.buffer,n,i+s);for(a=0;a<s;a++)f[a]=e[a];return f}m.exports=L
});var w=v(function(V,b){
var _=require('@stdlib/assert-is-array/dist'),B=require('@stdlib/assert-is-typed-array-like/dist'),k=require('@stdlib/assert-is-integer/dist'),M=require('@stdlib/error-tools-fmtprodmsg/dist'),N=p(),O=q(),P=T();function R(r){var e,t;for(e=new Array(arguments.length-1),t=0;t<arguments.length-1;t++)e[t]=arguments[t+1];if(_(r))return N(r,e);if(B(r))return P(r,e);if(r!==null&&typeof r=="object"&&typeof r.length=="number"&&k(r.length)&&r.length>=0)return O(r,e);throw new TypeError(M('1Y9Ai',r))}b.exports=R
});var S=w();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
