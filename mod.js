// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var o=t()?function(r){var t,i,o,f,u;if(null==r)return n.call(r);i=r[a],u=a,t=null!=(f=r)&&e.call(f,u);try{r[a]=void 0}catch(t){return n.call(r)}return o=n.call(r),t?r[a]=i:delete r[a],o}:function(r){return n.call(r)};var f=Array.isArray?Array.isArray:function(r){return"[object Array]"===o(r)},u="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function l(r){return"number"==typeof r}function y(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function p(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+y(i):y(i)+r,e&&(r="-"+r)),r}var s=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function h(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!l(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===v.call(r.specifier)?v.call(n):s.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function g(r){return"string"==typeof r}var w=Math.abs,A=String.prototype.toLowerCase,d=String.prototype.toUpperCase,b=String.prototype.replace,m=/e\+(\d)$/,F=/e-(\d)$/,E=/^(\d+)$/,U=/^(\d+)e/,N=/\.0$/,I=/\.0*e/,_=/(\..*[^0])0*e/;function j(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!l(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":w(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=b.call(n,_,"$1e"),n=b.call(n,I,"e"),n=b.call(n,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=b.call(n,m,"e+0$1"),n=b.call(n,F,"e-0$1"),r.alternate&&(n=b.call(n,E,"$1."),n=b.call(n,U,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===d.call(r.specifier)?d.call(n):A.call(n)}function S(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function T(r,t,n){var e=t-r.length;return e<0?r:r=n?r+S(e):S(e)+r}var O=String.fromCharCode,V=isNaN,k=Array.isArray;function x(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function P(r){var t,n,e,i,a,o,f,u,c;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",f=1,u=0;u<r.length;u++)if(g(e=r[u]))o+=e;else{if(t=void 0!==e.precision,!(e=x(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,V(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,V(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=h(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!V(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=V(a)?String(e.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=j(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=p(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=T(e.arg,e.width,e.padRight)),o+=e.arg||"",f+=1}return o}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function $(r){var t,n,e,i;for(n=[],i=0,e=L.exec(r);e;)(t=r.slice(i,L.lastIndex-e[0].length)).length&&n.push(t),n.push(B(e)),i=L.lastIndex,e=L.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function G(r){return"string"==typeof r}function R(r){var t,n;if(!G(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[$(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return P.apply(null,t)}var Y=Object.prototype,H=Y.toString,M=Y.__defineGetter__,W=Y.__defineSetter__,C=Y.__lookupGetter__,Z=Y.__lookupSetter__;var X=function(){try{return u({},"x",{}),!0}catch(r){return!1}}()?c:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===H.call(n))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(C.call(r,t)||Z.call(r,t)?(e=r.__proto__,r.__proto__=Y,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&M&&M.call(r,t,n.get),o&&W&&W.call(r,t,n.set),r};function q(r,t,n){X(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function z(r){return"number"==typeof r}var D=Number,J=D.prototype.toString;var K=t();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===o(r)))}function rr(r){return z(r)||Q(r)}q(rr,"isPrimitive",z),q(rr,"isObject",Q);var tr=Number.POSITIVE_INFINITY,nr=D.NEGATIVE_INFINITY,er=Math.floor;function ir(r){return er(r)===r}function ar(r){return r<tr&&r>nr&&ir(r)}function or(r){return z(r)&&ar(r)}function fr(r){return Q(r)&&ar(r.valueOf())}function ur(r){return or(r)||fr(r)}function cr(r){return or(r)&&r>=0}function lr(r){return fr(r)&&r.valueOf()>=0}function yr(r){return cr(r)||lr(r)}q(ur,"isPrimitive",or),q(ur,"isObject",fr),q(yr,"isPrimitive",cr),q(yr,"isObject",lr);function pr(r){return null!==r&&"object"==typeof r&&cr(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function sr(r,t){var n;for(n=t.length-1;n>=0;n--)r.unshift(t[n]);return r}function vr(r,t){var n,e,i;for(n=r.length,e=t.length,i=n-1;i>=0;i--)r[i+e]=r[i];for(i=0;i<e;i++)r[i]=t[i];return r.length=n+e,r}var hr="function"==typeof ArrayBuffer;var gr="function"==typeof Float64Array;var wr="function"==typeof Float64Array?Float64Array:null;var Ar,dr="function"==typeof Float64Array?Float64Array:void 0;Ar=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr([1,3.14,-3.14,NaN]),n=t,r=(gr&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var br=Ar,mr="function"==typeof ArrayBuffer?ArrayBuffer:null;var Fr,Er="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Fr=function(){var r,t,n,e;if("function"!=typeof mr)return!1;try{n=new mr(16),e=n,(r=(hr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===o(e))&&"function"==typeof mr.isView)&&((t=new br(n))[0]=-3.14,t[1]=NaN,r=r&&mr.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Ur=Fr;function Nr(r){return r!=r}var Ir=Number.POSITIVE_INFINITY;function _r(r){return r===Ir||r===nr}function jr(r){return ir(r/2)}function Sr(r){return jr(r>0?r-1:r+1)}var Tr=Math.sqrt;function Or(r){return Math.abs(r)}var Vr="function"==typeof Uint32Array;var kr="function"==typeof Uint32Array?Uint32Array:null;var xr,Pr="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,t,n;if("function"!=typeof kr)return!1;try{t=new kr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Vr&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Lr=xr,Br="function"==typeof Float64Array;var $r="function"==typeof Float64Array?Float64Array:null;var Gr,Rr="function"==typeof Float64Array?Float64Array:void 0;Gr=function(){var r,t,n;if("function"!=typeof $r)return!1;try{t=new $r([1,3.14,-3.14,NaN]),n=t,r=(Br&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Yr=Gr,Hr="function"==typeof Uint8Array;var Mr="function"==typeof Uint8Array?Uint8Array:null;var Wr,Cr="function"==typeof Uint8Array?Uint8Array:void 0;Wr=function(){var r,t,n;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,256,257]),n=t,r=(Hr&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Zr=Wr,Xr="function"==typeof Uint16Array;var qr="function"==typeof Uint16Array?Uint16Array:null;var zr,Dr="function"==typeof Uint16Array?Uint16Array:void 0;zr=function(){var r,t,n;if("function"!=typeof qr)return!1;try{t=new qr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Xr&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Jr,Kr={uint16:zr,uint8:Zr};(Jr=new Kr.uint16(1))[0]=4660;var Qr,rt,tt=52===new Kr.uint8(Jr.buffer)[0];!0===tt?(Qr=1,rt=0):(Qr=0,rt=1);var nt={HIGH:Qr,LOW:rt},et=new Yr(1),it=new Lr(et.buffer),at=nt.HIGH,ot=nt.LOW;function ft(r,t,n,e){return et[0]=r,t[e]=it[at],t[e+n]=it[ot],t}function ut(r){return ft(r,[0,0],1,0)}q(ut,"assign",ft);var ct="function"==typeof Uint32Array;var lt="function"==typeof Uint32Array?Uint32Array:null;var yt,pt="function"==typeof Uint32Array?Uint32Array:void 0;yt=function(){var r,t,n;if("function"!=typeof lt)return!1;try{t=new lt(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ct&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pt:function(){throw new Error("not implemented")};var st=yt,vt="function"==typeof Float64Array;var ht="function"==typeof Float64Array?Float64Array:null;var gt,wt="function"==typeof Float64Array?Float64Array:void 0;gt=function(){var r,t,n;if("function"!=typeof ht)return!1;try{t=new ht([1,3.14,-3.14,NaN]),n=t,r=(vt&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?wt:function(){throw new Error("not implemented")};var At=!0===tt?0:1,dt=new gt(1),bt=new st(dt.buffer);function mt(r,t){return dt[0]=r,bt[At]=t>>>0,dt[0]}function Ft(r){return 0|r}var Et=Number.POSITIVE_INFINITY,Ut="function"==typeof Uint32Array;var Nt="function"==typeof Uint32Array?Uint32Array:null;var It,_t="function"==typeof Uint32Array?Uint32Array:void 0;It=function(){var r,t,n;if("function"!=typeof Nt)return!1;try{t=new Nt(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Ut&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_t:function(){throw new Error("not implemented")};var jt=It,St="function"==typeof Float64Array;var Tt="function"==typeof Float64Array?Float64Array:null;var Ot,Vt="function"==typeof Float64Array?Float64Array:void 0;Ot=function(){var r,t,n;if("function"!=typeof Tt)return!1;try{t=new Tt([1,3.14,-3.14,NaN]),n=t,r=(St&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Vt:function(){throw new Error("not implemented")};var kt=!0===tt?1:0,xt=new Ot(1),Pt=new jt(xt.buffer);function Lt(r){return xt[0]=r,Pt[kt]}var Bt="function"==typeof Uint32Array;var $t="function"==typeof Uint32Array?Uint32Array:null;var Gt,Rt="function"==typeof Uint32Array?Uint32Array:void 0;Gt=function(){var r,t,n;if("function"!=typeof $t)return!1;try{t=new $t(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Bt&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Rt:function(){throw new Error("not implemented")};var Yt=Gt,Ht="function"==typeof Float64Array;var Mt="function"==typeof Float64Array?Float64Array:null;var Wt,Ct,Zt,Xt="function"==typeof Float64Array?Float64Array:void 0;Wt=function(){var r,t,n;if("function"!=typeof Mt)return!1;try{t=new Mt([1,3.14,-3.14,NaN]),n=t,r=(Ht&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xt:function(){throw new Error("not implemented")},!0===tt?(Ct=1,Zt=0):(Ct=0,Zt=1);var qt={HIGH:Ct,LOW:Zt},zt=new Wt(1),Dt=new Yt(zt.buffer),Jt=qt.HIGH,Kt=qt.LOW;function Qt(r,t){return Dt[Jt]=r,Dt[Kt]=t,zt[0]}var rn=[0,0];function tn(r,t){var n,e;return ut.assign(r,rn,1,0),n=rn[0],n&=2147483647,e=Lt(t),Qt(n|=e&=2147483648,rn[1])}var nn="function"==typeof Uint32Array;var en="function"==typeof Uint32Array?Uint32Array:null;var an,on="function"==typeof Uint32Array?Uint32Array:void 0;an=function(){var r,t,n;if("function"!=typeof en)return!1;try{t=new en(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(nn&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var fn=an,un="function"==typeof Float64Array;var cn="function"==typeof Float64Array?Float64Array:null;var ln,yn="function"==typeof Float64Array?Float64Array:void 0;ln=function(){var r,t,n;if("function"!=typeof cn)return!1;try{t=new cn([1,3.14,-3.14,NaN]),n=t,r=(un&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yn:function(){throw new Error("not implemented")};var pn=!0===tt?1:0,sn=new ln(1),vn=new fn(sn.buffer);function hn(r,t){return sn[0]=r,vn[pn]=t>>>0,sn[0]}var gn=[1,1.5],wn=[0,.5849624872207642],An=[0,1.350039202129749e-8];var dn=Number.POSITIVE_INFINITY;function bn(r,t,n,e){return Nr(r)||_r(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Or(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}q((function(r){return bn(r,[0,0],1,0)}),"assign",bn);var mn=[0,0],Fn=[0,0];function En(r,t){var n,e;return 0===t||0===r||Nr(r)||_r(r)?r:(bn(r,mn,1,0),t+=mn[1],t+=function(r){var t=Lt(r);return(t=(2146435072&t)>>>20)-1023|0}(r=mn[0]),t<-1074?tn(0,r):t>1023?r<0?nr:dn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ut.assign(r,Fn,1,0),n=Fn[0],n&=2148532223,e*Qt(n|=t+1023<<20,Fn[1])))}var Un=1e300,Nn=1e-300,In=[0,0],_n=[0,0];function jn(r,t){var n,e,i,a,o,f,u,c,l,y,p,s,v,h;if(Nr(r)||Nr(t))return NaN;if(ut.assign(t,In,1,0),o=In[0],0===In[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Tr(r);if(-.5===t)return 1/Tr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(_r(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Or(r)<1==(t===Et)?0:Et}(r,t)}if(ut.assign(r,In,1,0),a=In[0],0===In[1]){if(0===a)return function(r,t){return t===nr?Et:t===Et?0:t>0?Sr(t)?r:0:Sr(t)?tn(Et,r):Et}(r,t);if(1===r)return 1;if(-1===r&&Sr(t))return-1;if(_r(r))return r===nr?jn(-0,-t):t<0?0:Et}if(r<0&&!1===ir(t))return(r-r)/(r-r);if(i=Or(r),n=2147483647&a|0,e=2147483647&o|0,u=o>>>31|0,f=(f=a>>>31|0)&&Sr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Lt(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===u?f*Un*Un:f*Nn*Nn;if(n>1072693248)return 0===u?f*Un*Un:f*Nn*Nn;p=function(r,t){var n,e,i,a,o,f;return n=(o=1.9259629911266175e-8*(i=t-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=mt(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=n,r}(_n,i)}else p=function(r,t,n){var e,i,a,o,f,u,c,l,y,p,s,v,h,g,w,A,d,b,m,F,E;return b=0,n<1048576&&(b-=53,n=Lt(t*=9007199254740992)),b+=(n>>20)-1023|0,n=1072693248|(m=1048575&n|0),m<=235662?F=0:m<767610?F=1:(F=0,b+=1,n-=1048576),o=mt(i=(A=(t=hn(t,n))-(c=gn[F]))*(d=1/(t+c)),0),e=524288+(n>>1|536870912),u=hn(0,e+=F<<18),w=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),u=mt(u=3+(a=o*o)+(w+=(f=d*(A-o*u-o*(t-(u-c))))*(o+i)),0),h=(s=-7.028461650952758e-9*(y=mt(y=(A=o*u)+(d=f*u+(w-(u-3-a))*i),0))+.9617966939259756*(d-(y-A))+An[F])-((v=mt(v=(p=.9617967009544373*y)+s+(l=wn[F])+(g=b),0))-g-l-p),r[0]=v,r[1]=h,r}(_n,i,n);if(s=(y=(t-(c=mt(t,0)))*p[0]+t*p[1])+(l=c*p[0]),ut.assign(s,In,1,0),v=Ft(In[0]),h=Ft(In[1]),v>=1083179008){if(0!=(v-1083179008|h))return f*Un*Un;if(y+8008566259537294e-32>s-l)return f*Un*Un}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|h))return f*Nn*Nn;if(y<=s-l)return f*Nn*Nn}return s=function(r,t,n){var e,i,a,o,f,u,c,l,y,p,s;return p=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),t-=a=hn(0,e)),r=Ft(r=Lt(c=1-((c=(o=.6931471824645996*(a=mt(a=n+t,0)))+(f=.6931471805599453*(n-(a-t))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(s=a)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((u=f-(c-o))+c*u)-c))),(r+=l<<20>>>0)>>20<=0?En(c,l):hn(c,r)}(v,l,y),f*s}var Sn=Math.ceil;var Tn=[0,0];function On(r){var t,n,e,i,a;if(Nr(r)||r<0)return NaN;if(ut.assign(r,Tn,1,0),a=0,(n=Tn[0])<1048576){if(0==(2147483647&n|Tn[1]))return nr;a-=54,n=Lt(r*=0x40000000000000)}return n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(i=(n&=1048575)+614244&1048576|0)>>20|0,e=function(r){var t,n,e,i,a,o,f,u,c,l,y;return a=r-1,(1048575&2+(i=Lt(r)))<3?0===a?0:a*a*(.3333333333333333*a-.5):(l=(i&=1048575)-398458|0,y=440401-i|0,n=(c=(f=(o=a/(2+a))*o)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),u=e+n,(l|=y)>0?o*((t=.5*a*a)+u)-t:o*(u-a))}(r=hn(r,n|1072693248^i)),1.6751713164886512e-10*((r-=1)+e)+1.4426950407214463*(r-(t=mt(r,0))+e)+1.4426950407214463*t+a)}var Vn=Number.POSITIVE_INFINITY;function kn(r,t){var n,e,i,a,o,f,u,c,l,y,p;if(a=r.length,e=(f=t.length)*r.BYTES_PER_ELEMENT,(i=r.byteOffset)<e)for(n=a*r.BYTES_PER_ELEMENT,i=(o=new Ur(Nr(l=n+e+i+1)||_r(l)||0===l?l:(l<0?(l=-l,y=-1):y=1,-1074===(p=On(l))?l:(p=-1===y?er(p):Sn(p))>1023?Vn:y*jn(2,p)))).byteLength-n-e,u=new r.constructor(o,i,a+f),c=0;c<a;c++)u[c+f]=r[c];else i-=e,u=new r.constructor(r.buffer,i,a+f);for(c=0;c<f;c++)u[c]=t[c];return u}function xn(r){var t,n;for(t=new Array(arguments.length-1),n=0;n<arguments.length-1;n++)t[n]=arguments[n+1];if(f(r))return sr(r,t);if(pr(r))return kn(r,t);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&ur(r.length)&&r.length>=0)return vr(r,t);throw new TypeError(R("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}export{xn as default};
//# sourceMappingURL=mod.js.map