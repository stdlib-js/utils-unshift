// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",u=n()?function(r){var n,u,i,f,a;if(null==r)return t.call(r);u=r[o],a=o,n=null!=(f=r)&&e.call(f,a);try{r[o]=void 0}catch(n){return t.call(r)}return i=t.call(r),n?r[o]=u:delete r[o],i}:function(r){return t.call(r)},i=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)},f="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty,c=Object.prototype,y=c.toString,l=c.__defineGetter__,p=c.__defineSetter__,b=c.__lookupGetter__,v=c.__lookupSetter__,s=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?a:function(r,n,t){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(b.call(r,n)||v.call(r,n)?(e=r.__proto__,r.__proto__=c,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,i="set"in t,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&l&&l.call(r,n,t.get),i&&p&&p.call(r,n,t.set),r};function h(r,n,t){s(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function w(r){return"number"==typeof r}var A=Number,m=A.prototype.toString,d=n();function g(r){return"object"==typeof r&&(r instanceof A||(d?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function _(r){return w(r)||g(r)}h(_,"isPrimitive",w),h(_,"isObject",g);var j=Number.POSITIVE_INFINITY,E=A.NEGATIVE_INFINITY,U=Math.floor;function N(r){return U(r)===r}function O(r){return r<j&&r>E&&N(r)}function T(r){return w(r)&&O(r)}function S(r){return g(r)&&O(r.valueOf())}function I(r){return T(r)||S(r)}function P(r){return T(r)&&r>=0}function F(r){return S(r)&&r.valueOf()>=0}function B(r){return P(r)||F(r)}function L(r){return null!==r&&"object"==typeof r&&P(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function H(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function G(r,n){var t;for(t=n.length-1;t>=0;t--)r.unshift(n[t]);return r}function M(r,n){var t,e,o;for(t=r.length,e=n.length,o=t-1;o>=0;o--)r[o+e]=r[o];for(o=0;o<e;o++)r[o]=n[o];return r.length=t+e,r}h(I,"isPrimitive",T),h(I,"isObject",S),h(B,"isPrimitive",P),h(B,"isObject",F);var V,Y="function"==typeof ArrayBuffer,x="function"==typeof Float64Array,R="function"==typeof Float64Array?Float64Array:null,W="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R([1,3.14,-3.14,NaN]),t=n,r=(x&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,C=V,q="function"==typeof ArrayBuffer?ArrayBuffer:null,z="function"==typeof ArrayBuffer?ArrayBuffer:void 0;k=function(){var r,n,t,e;if("function"!=typeof q)return!1;try{t=new q(16),e=t,(r=(Y&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e))&&"function"==typeof q.isView)&&((n=new C(t))[0]=-3.14,n[1]=NaN,r=r&&q.isView(n)&&16===t.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var D=k;function J(r){return r!=r}function K(r){return r===j||r===E}function Q(r){return N(r/2)}function X(r){return Q(r>0?r-1:r+1)}var Z=Math.sqrt;function $(r){return Math.abs(r)}var rr,nr="function"==typeof Uint32Array,tr="function"==typeof Uint32Array?Uint32Array:null,er="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,n,t;if("function"!=typeof tr)return!1;try{n=new tr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(nr&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or,ur=rr,ir="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,ar="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,n,t;if("function"!=typeof fr)return!1;try{n=new fr(n=[1,3.14,-3.14,256,257]),t=n,r=(ir&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr,yr=or,lr="function"==typeof Uint16Array,pr="function"==typeof Uint16Array?Uint16Array:null,br="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(lr&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?br:function(){throw new Error("not implemented")};var vr,sr={uint16:cr,uint8:yr};(vr=new sr.uint16(1))[0]=4660;var hr,wr,Ar=52===new sr.uint8(vr.buffer)[0];!0===Ar?(hr=1,wr=0):(hr=0,wr=1);var mr={HIGH:hr,LOW:wr},dr=new C(1),gr=new ur(dr.buffer),_r=mr.HIGH,jr=mr.LOW;function Er(r,n){return dr[0]=n,r[0]=gr[_r],r[1]=gr[jr],r}function Ur(r,n){return 1===arguments.length?Er([0,0],r):Er(r,n)}var Nr=!0===Ar?0:1,Or=new C(1),Tr=new ur(Or.buffer);function Sr(r,n){return Or[0]=r,Tr[Nr]=n>>>0,Or[0]}function Ir(r){return 0|r}var Pr,Fr,Br=!0===Ar?1:0,Lr=new C(1),Hr=new ur(Lr.buffer);function Gr(r){return Lr[0]=r,Hr[Br]}!0===Ar?(Pr=1,Fr=0):(Pr=0,Fr=1);var Mr={HIGH:Pr,LOW:Fr},Vr=new C(1),Yr=new ur(Vr.buffer),xr=Mr.HIGH,Rr=Mr.LOW;function Wr(r,n){return Yr[xr]=r,Yr[Rr]=n,Vr[0]}var kr=[0,0];function Cr(r,n){var t,e;return Ur(kr,r),t=kr[0],t&=2147483647,e=Gr(n),Wr(t|=e&=2147483648,kr[1])}var qr=!0===Ar?1:0,zr=new C(1),Dr=new ur(zr.buffer);function Jr(r,n){return zr[0]=r,Dr[qr]=n>>>0,zr[0]}var Kr=1023,Qr=1048576,Xr=[1,1.5],Zr=[0,.5849624872207642],$r=[0,1.350039202129749e-8];function rn(r,n,t,e){return J(r)||K(r)?(n[e]=r,n[e+t]=0,n):0!==r&&$(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}h((function(r){return rn(r,[0,0],1,0)}),"assign",rn);var nn=[0,0],tn=[0,0];function en(r,n){var t,e;return 0===n||0===r||J(r)||K(r)?r:(rn(r,nn,1,0),n+=nn[1],n+=function(r){var n=Gr(r);return(n=(2146435072&n)>>>20)-Kr|0}(r=nn[0]),n<-1074?Cr(0,r):n>1023?r<0?E:j:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ur(tn,r),t=tn[0],t&=2148532223,e*Wr(t|=n+Kr<<20,tn[1])))}var on=2147483647,un=1048575,fn=1048576,an=2147483647,cn=1083179008,yn=1e300,ln=1e-300,pn=[0,0],bn=[0,0];function vn(r,n){var t,e,o,u,i,f,a,c,y,l,p,b,v,s;if(J(r)||J(n))return NaN;if(Ur(pn,n),i=pn[0],0===pn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Z(r);if(-.5===n)return 1/Z(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(K(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:$(r)<1==(n===j)?0:j}(r,n)}if(Ur(pn,r),u=pn[0],0===pn[1]){if(0===u)return function(r,n){return n===E?j:n===j?0:n>0?X(n)?r:0:X(n)?Cr(j,r):j}(r,n);if(1===r)return 1;if(-1===r&&X(n))return-1;if(K(r))return r===E?vn(-0,-n):n<0?0:j}if(r<0&&!1===N(n))return(r-r)/(r-r);if(o=$(r),t=u&an|0,e=i&an|0,a=i>>>31|0,f=(f=u>>>31|0)&&X(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Gr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*yn*yn:f*ln*ln;if(t>1072693248)return 0===a?f*yn*yn:f*ln*ln;p=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Sr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(bn,o)}else p=function(r,n,t){var e,o,u,i,f,a,c,y,l,p,b,v,s,h,w,A,m,d,g,_,j;return d=0,t<Qr&&(d-=53,t=Gr(n*=9007199254740992)),d+=(t>>20)-Kr|0,t=1072693248|(g=1048575&t|0),g<=235662?_=0:g<767610?_=1:(_=0,d+=1,t-=Qr),i=Sr(o=(A=(n=Jr(n,t))-(c=Xr[_]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Jr(0,e+=_<<18),w=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Sr(a=3+(u=i*i)+(w+=(f=m*(A-i*a-i*(n-(a-c))))*(i+o)),0),s=(b=-7.028461650952758e-9*(l=Sr(l=(A=i*a)+(m=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(m-(l-A))+$r[_])-((v=Sr(v=(p=.9617967009544373*l)+b+(y=Zr[_])+(h=d),0))-h-y-p),r[0]=v,r[1]=s,r}(bn,o,t);if(l=(n-(c=Sr(n,0)))*p[0]+n*p[1],y=c*p[0],Ur(pn,b=l+y),v=Ir(pn[0]),s=Ir(pn[1]),v>=cn){if(0!=(v-cn|s))return f*yn*yn;if(l+8008566259537294e-32>b-y)return f*yn*yn}else if((v&an)>=1083231232){if(0!=(v-3230714880|s))return f*ln*ln;if(l<=b-y)return f*ln*ln}return b=function(r,n,t){var e,o,u,i,f,a,c,y,l,p;return l=((y=r&on|0)>>20)-Kr|0,c=0,y>1071644672&&(o=Jr(0,((c=r+(fn>>l+1)>>>0)&~(un>>(l=((c&on)>>20)-Kr|0)))>>>0),c=(c&un|fn)>>20-l>>>0,r<0&&(c=-c),n-=o),r=Ir(r=Gr(a=1-((a=(u=.6931471824645996*(o=Sr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?en(a,c):Jr(a,r)}(v,y,l),f*b}var sn=Math.ceil,hn=1048575,wn=1.4426950407214463,An=[0,0];function mn(r){var n,t,e,o,u;if(J(r)||r<0)return NaN;if(Ur(An,r),u=0,(t=An[0])<1048576){if(0==(2147483647&t|An[1]))return E;u-=54,t=Gr(r*=0x40000000000000)}return t>=2146435072?r+r:(u+=(t>>20)-Kr|0,u+=(o=614244+(t&=1048575)&1048576|0)>>20|0,e=function(r){var n,t,e,o,u,i,f,a,c,y,l;return o=Gr(r),u=r-1,(hn&2+o)<3?0===u?0:u*u*(.3333333333333333*u-.5):(y=(o&=hn)-398458|0,l=440401-o|0,t=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(y|=l)>0?i*((n=.5*u*u)+a)-n:i*(a-u))}(r=Jr(r,t|1072693248^o)),1.6751713164886512e-10*((r-=1)+e)+(r-(n=Sr(r,0))+e)*wn+n*wn+u)}function dn(r,n){var t,e,o,u,i,f,a,c,y,l,p;if(u=r.length,e=(f=n.length)*r.BYTES_PER_ELEMENT,(o=r.byteOffset)<e)for(t=u*r.BYTES_PER_ELEMENT,o=(i=new D(J(y=t+e+o+1)||K(y)||0===y?y:(y<0?(y=-y,l=-1):l=1,-1074===(p=mn(y))?y:(p=-1===l?U(p):sn(p))>1023?j:l*vn(2,p)))).byteLength-t-e,a=new r.constructor(i,o,u+f),c=0;c<u;c++)a[c+f]=r[c];else o-=e,a=new r.constructor(r.buffer,o,u+f);for(c=0;c<f;c++)a[c]=n[c];return a}return function(r){var n,t;for(n=new Array(arguments.length-1),t=0;t<arguments.length-1;t++)n[t]=arguments[t+1];if(i(r))return G(r,n);if(L(r))return dn(r,n);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&I(r.length)&&r.length>=0)return M(r,n);throw new TypeError(H("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).unshift=n();
//# sourceMappingURL=index.js.map
