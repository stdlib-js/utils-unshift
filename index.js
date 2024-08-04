// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"",a=e()?function(r){var e,i,a,u,f;if(null==r)return n.call(r);i=r[o],f=o,e=null!=(u=r)&&t.call(u,f);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=i:delete r[o],a}:function(r){return n.call(r)},u=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)},f="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function s(r){return"number"==typeof r}function l(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function p(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+l(i):l(i)+r,t&&(r="-"+r)),r}var y=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function h(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!s(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===g.call(r.specifier)?g.call(n):y.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var d=Math.abs,v=String.prototype.toLowerCase,b=String.prototype.toUpperCase,w=String.prototype.replace,m=/e\+(\d)$/,A=/e-(\d)$/,E=/^(\d+)$/,_=/^(\d+)e/,j=/\.0$/,S=/\.0*e/,U=/(\..*[^0])0*e/;function T(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":d(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=w.call(n,U,"$1e"),n=w.call(n,S,"e"),n=w.call(n,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=w.call(n,m,"e+0$1"),n=w.call(n,A,"e-0$1"),r.alternate&&(n=w.call(n,E,"$1."),n=w.call(n,_,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===b.call(r.specifier)?b.call(n):v.call(n)}function I(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var x=String.fromCharCode,O=Array.isArray;function N(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,n,t,i,o,a,u,f,c,s,l,y,g;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))a+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,N(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=h(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=T(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=p(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,y=t.padRight,g=void 0,(g=l-s.length)<0?s:s=y?s+I(g):I(g)+s)),a+=t.arg||"",u+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,n,t,i;for(n=[],i=0,t=V.exec(r);t;)(e=r.slice(i,V.lastIndex-t[0].length)).length&&n.push(e),n.push(L(t)),i=V.lastIndex,t=V.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function B(r){var e,n;if("string"!=typeof r)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return F.apply(null,e)}var R=Object.prototype,$=R.toString,G=R.__defineGetter__,C=R.__defineSetter__,H=R.__lookupGetter__,M=R.__lookupSetter__,W=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===$.call(n))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||M.call(r,e)?(t=r.__proto__,r.__proto__=R,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,n.get),a&&C&&C.call(r,e,n.set),r};function Y(r,e,n){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Z(r){return"number"==typeof r}var X=Number,q=X.prototype.toString,z=e();function D(r){return"object"==typeof r&&(r instanceof X||(z?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===a(r)))}function J(r){return Z(r)||D(r)}Y(J,"isPrimitive",Z),Y(J,"isObject",D);var K=Number.POSITIVE_INFINITY,Q=X.NEGATIVE_INFINITY,rr=Math.floor;function er(r){return rr(r)===r}function nr(r){return r<K&&r>Q&&er(r)}function tr(r){return Z(r)&&nr(r)}function ir(r){return D(r)&&nr(r.valueOf())}function or(r){return tr(r)||ir(r)}function ar(r){return tr(r)&&r>=0}function ur(r){return ir(r)&&r.valueOf()>=0}function fr(r){return ar(r)||ur(r)}Y(or,"isPrimitive",tr),Y(or,"isObject",ir),Y(fr,"isPrimitive",ar),Y(fr,"isObject",ur);var cr,sr=9007199254740991,lr="function"==typeof ArrayBuffer,pr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),n=e,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var hr,dr=cr,vr="function"==typeof ArrayBuffer?ArrayBuffer:null,br="function"==typeof ArrayBuffer?ArrayBuffer:void 0;hr=function(){var r,e,n,t;if("function"!=typeof vr)return!1;try{n=new vr(16),t=n,(r=(lr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===a(t))&&"function"==typeof vr.isView)&&((e=new dr(n))[0]=-3.14,e[1]=NaN,r=r&&vr.isView(e)&&16===n.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var wr=hr;function mr(r){return r!=r}function Ar(r){return r===K||r===Q}function Er(r){return er(r/2)}function _r(r){return Er(r>0?r-1:r+1)}var jr=Math.sqrt;function Sr(r){return Math.abs(r)}var Ur,Tr="function"==typeof Uint32Array,Ir="function"==typeof Uint32Array?Uint32Array:null,xr="function"==typeof Uint32Array?Uint32Array:void 0;Ur=function(){var r,e,n;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Tr&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?xr:function(){throw new Error("not implemented")};var Or,Nr=Ur,kr="function"==typeof Uint8Array,Fr="function"==typeof Uint8Array?Uint8Array:null,Vr="function"==typeof Uint8Array?Uint8Array:void 0;Or=function(){var r,e,n;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,256,257]),n=e,r=(kr&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Lr,Pr=Or,Br="function"==typeof Uint16Array,Rr="function"==typeof Uint16Array?Uint16Array:null,$r="function"==typeof Uint16Array?Uint16Array:void 0;Lr=function(){var r,e,n;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Br&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Gr,Cr={uint16:Lr,uint8:Pr};(Gr=new Cr.uint16(1))[0]=4660;var Hr,Mr,Wr=52===new Cr.uint8(Gr.buffer)[0];!0===Wr?(Hr=1,Mr=0):(Hr=0,Mr=1);var Yr={HIGH:Hr,LOW:Mr},Zr=new dr(1),Xr=new Nr(Zr.buffer),qr=Yr.HIGH,zr=Yr.LOW;function Dr(r,e,n,t){return Zr[0]=r,e[t]=Xr[qr],e[t+n]=Xr[zr],e}function Jr(r){return Dr(r,[0,0],1,0)}Y(Jr,"assign",Dr);var Kr=!0===Wr?0:1,Qr=new dr(1),re=new Nr(Qr.buffer);function ee(r,e){return Qr[0]=r,re[Kr]=e>>>0,Qr[0]}function ne(r){return 0|r}var te,ie,oe=2147483647,ae=2147483648,ue=!0===Wr?1:0,fe=new dr(1),ce=new Nr(fe.buffer);function se(r){return fe[0]=r,ce[ue]}!0===Wr?(te=1,ie=0):(te=0,ie=1);var le={HIGH:te,LOW:ie},pe=new dr(1),ye=new Nr(pe.buffer),ge=le.HIGH,he=le.LOW;function de(r,e){return ye[ge]=r,ye[he]=e,pe[0]}var ve=[0,0];function be(r,e){var n,t;return Jr.assign(r,ve,1,0),n=ve[0],n&=oe,t=se(e),de(n|=t&=ae,ve[1])}var we=1072693247,me=1e300,Ae=1e-300,Ee=!0===Wr?1:0,_e=new dr(1),je=new Nr(_e.buffer);function Se(r,e){return _e[0]=r,je[Ee]=e>>>0,_e[0]}var Ue=1023,Te=1048575,Ie=1048576,xe=1072693248,Oe=536870912,Ne=524288,ke=20,Fe=9007199254740992,Ve=.9617966939259756,Le=.9617967009544373,Pe=-7.028461650952758e-9,Be=[1,1.5],Re=[0,.5849624872207642],$e=[0,1.350039202129749e-8],Ge=1.4426950408889634,Ce=1.4426950216293335,He=1.9259629911266175e-8,Me=1023,We=-1023,Ye=-1074,Ze=22250738585072014e-324,Xe=4503599627370496;function qe(r,e,n,t){return mr(r)||Ar(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Sr(r)<Ze?(e[t]=r*Xe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Y((function(r){return qe(r,[0,0],1,0)}),"assign",qe);var ze=2146435072,De=2220446049250313e-31,Je=2148532223,Ke=[0,0],Qe=[0,0];function rn(r,e){var n,t;return 0===e||0===r||mr(r)||Ar(r)?r:(qe(r,Ke,1,0),r=Ke[0],e+=Ke[1],e+=function(r){var e=se(r);return(e=(e&ze)>>>20)-Ue|0}(r),e<Ye?be(0,r):e>Me?r<0?Q:K:(e<=We?(e+=52,t=De):t=1,Jr.assign(r,Qe,1,0),n=Qe[0],n&=Je,t*de(n|=e+Ue<<20,Qe[1])))}var en=.6931471805599453,nn=1048575,tn=1048576,on=1071644672,an=20,un=.6931471824645996,fn=-1.904654299957768e-9,cn=1072693247,sn=1105199104,ln=1139802112,pn=1083179008,yn=1072693248,gn=1083231232,hn=3230714880,dn=31,vn=1e300,bn=1e-300,wn=8008566259537294e-32,mn=[0,0],An=[0,0];function En(r,e){var n,t,i,o,a,u,f,c,s,l,p,y,g,h;if(mr(r)||mr(e))return NaN;if(Jr.assign(e,mn,1,0),a=mn[0],0===mn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return jr(r);if(-.5===e)return 1/jr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Ar(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Sr(r)<1==(e===K)?0:K}(r,e)}if(Jr.assign(r,mn,1,0),o=mn[0],0===mn[1]){if(0===o)return function(r,e){return e===Q?K:e===K?0:e>0?_r(e)?r:0:_r(e)?be(K,r):K}(r,e);if(1===r)return 1;if(-1===r&&_r(e))return-1;if(Ar(r))return r===Q?En(-0,-e):e<0?0:K}if(r<0&&!1===er(e))return(r-r)/(r-r);if(i=Sr(r),n=o&oe|0,t=a&oe|0,f=a>>>dn|0,u=(u=o>>>dn|0)&&_r(e)?-1:1,t>sn){if(t>ln)return function(r,e){return(se(r)&oe)<=we?e<0?me*me:Ae*Ae:e>0?me*me:Ae*Ae}(r,e);if(n<cn)return 1===f?u*vn*vn:u*bn*bn;if(n>yn)return 0===f?u*vn*vn:u*bn*bn;p=function(r,e){var n,t,i,o,a,u,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*He-o*Ge)-((t=ee(t=(a=Ce*i)+u,0))-a),r[0]=t,r[1]=n,r}(An,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,s,l,p,y,g,h,d,v,b,w,m,A,E,_;return m=0,n<Ie&&(m-=53,n=se(e*=Fe)),m+=(n>>ke)-Ue|0,n=(A=n&Te|0)|xe|0,A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=Ie),a=ee(i=(b=(e=Se(e,n))-(c=Be[E]))*(w=1/(e+c)),0),t=(n>>1|Oe)+Ne,f=Se(0,t+=E<<18),v=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ee(f=3+(o=a*a)+(v+=(u=w*(b-a*f-a*(e-(f-c))))*(a+i)),0),l=ee(l=(b=a*f)+(w=u*f+(v-(f-3-o))*i),0),p=Le*l,h=(y=Pe*l+(w-(l-b))*Ve+$e[E])-((g=ee(g=p+y+(s=Re[E])+(d=m),0))-d-s-p),r[0]=g,r[1]=h,r}(An,i,n);if(y=(l=(e-(c=ee(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Jr.assign(y,mn,1,0),g=ne(mn[0]),h=ne(mn[1]),g>=pn){if(0!=(g-pn|h))return u*vn*vn;if(l+wn>y-s)return u*vn*vn}else if((g&oe)>=gn){if(0!=(g-hn|h))return u*bn*bn;if(l<=y-s)return u*bn*bn}return y=function(r,e,n){var t,i,o,a,u,f,c,s,l,p;return l=((s=r&oe|0)>>an)-Ue|0,c=0,s>on&&(i=Se(0,((c=r+(tn>>l+1)>>>0)&~(nn>>(l=((c&oe)>>an)-Ue|0)))>>>0),c=(c&nn|tn)>>an-l>>>0,r<0&&(c=-c),e-=i),r=ne(r=se(f=1-((f=(o=(i=ee(i=n+e,0))*un)+(a=(n-(i-e))*en+i*fn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<an>>>0)>>an<=0?rn(f,c):Se(f,r)}(g,s,l),u*y}var _n=Math.ceil,jn=0x40000000000000,Sn=1.4426950407214463,Un=1.6751713164886512e-10,Tn=2146435072,In=1048576,xn=1072693248,On=[0,0];function Nn(r){var e,n;return mr(r)||Ar(r)||0===r?r:(r<0?(r=-r,e=-1):e=1,n=function(r){var e,n,t,i,o,a,u,f,c,s,l,p,y;if(mr(r)||r<0)return NaN;if(Jr.assign(r,On,1,0),i=On[0],o=On[1],y=0,i<In){if(0==(i&oe|o))return Q;y-=54,i=se(r*=jn)}return i>=Tn?r+r:i===xn&&0===o?0:(y+=(i>>20)-Ue|0,l=y+=(p=614244+(i&=nn)&In|0)>>20|0,t=.5*(f=(r=Se(r,i|p^xn))-1)*f,c=function(r){var e,n,t,i,o,a;return e=(o=(i=(t=r/(2+r))*t)*i)*(0===(a=o)?.3999999999940942:.3999999999940942+a*(.22222198432149784+.15313837699209373*a)),n=i*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(o),t*(.5*r*r+(n+e))}(f),n=((u=f-(a=ee(a=f-t,0))-t+c)+a)*Un+u*Sn,(n+=l-(s=l+(e=a*Sn))+e)+(e=s))}(r),n===Ye?r:(n=-1===e?rr(n):_n(n))>Me?K:e*En(2,n))}return function(r){var e,n,t;for(e=new Array(arguments.length-1),n=0;n<arguments.length-1;n++)e[n]=arguments[n+1];if(u(r))return function(r,e){var n;for(n=e.length-1;n>=0;n--)r.unshift(e[n]);return r}(r,e);if(null!==(t=r)&&"object"==typeof t&&ar(t.length)&&t.length<=sr&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength)return function(r,e){var n,t,i,o,a,u,f,c;if(o=r.length,t=(u=e.length)*r.BYTES_PER_ELEMENT,(i=r.byteOffset)<t)for(n=o*r.BYTES_PER_ELEMENT,i=(a=new wr(Nn(n+t+i+1))).byteLength-n-t,f=new r.constructor(a,i,o+u),c=0;c<o;c++)f[c+u]=r[c];else i-=t,f=new r.constructor(r.buffer,i,o+u);for(c=0;c<u;c++)f[c]=e[c];return f}(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&or(r.length)&&r.length>=0)return function(r,e){var n,t,i;for(n=r.length,t=e.length,i=n-1;i>=0;i--)r[i+t]=r[i];for(i=0;i<t;i++)r[i]=e[i];return r.length=n+t,r}(r,e);throw new TypeError(function(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}("1Y9Ai",r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).unshift=e();
//# sourceMappingURL=index.js.map
