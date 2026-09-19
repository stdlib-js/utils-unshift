"use strict";var v=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var p=v(function(F,g){
function x(r,e){var t;for(t=e.length-1;t>=0;t--)r.unshift(e[t]);return r}g.exports=x
});var q=v(function(I,E){
function A(r,e){var t,n,u;for(t=r.length,n=e.length,u=t-1;u>=0;u--)r[u+n]=r[u];for(u=0;u<n;u++)r[u]=e[u];return r.length=t+n,r}E.exports=A
});var b=v(function(V,T){
var d=require('@stdlib/array-buffer/dist'),o=require('@stdlib/math-base-special-ceil2/dist');function L(r,e){var t,n,u,y,i,h,s,f,a;if(i=r.length,s=e.length,n=s*r.BYTES_PER_ELEMENT,u=r.byteOffset,u<n)for(t=i*r.BYTES_PER_ELEMENT,y=t+n+u,h=new d(o(y+1)),u=h.byteLength-t-n,f=new r.constructor(h,u,i+s),a=0;a<i;a++)f[a+s]=r[a];else u-=n,f=new r.constructor(r.buffer,u,i+s);for(a=0;a<s;a++)f[a]=e[a];return f}T.exports=L
});var w=v(function(l,m){
var _=require('@stdlib/assert-is-array/dist'),B=require('@stdlib/assert-is-typed-array-like/dist'),k=require('@stdlib/assert-is-integer/dist'),M=require('@stdlib/error-tools-fmtprodmsg/dist'),N=p(),O=q(),P=b();function R(r){var e,t;for(e=[],t=0;t<arguments.length-1;t++)e.push(arguments[t+1]);if(_(r))return N(r,e);if(B(r))return P(r,e);if(r!==null&&typeof r=="object"&&typeof r.length=="number"&&k(r.length)&&r.length>=0)return O(r,e);throw new TypeError(M('1Y9Ai',r))}m.exports=R
});var S=w();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
