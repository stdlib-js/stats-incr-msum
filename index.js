// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(u.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),y="get"in a,p="set"in a,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,a.get),p&&i&&i.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",_=p()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[m],i=m,e=null!=(o=t)&&s.call(o,i);try{t[m]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[m]=r:delete t[m],n}:function(t){return b.call(t)},d=Number,v=d.prototype.toString,g=p();function j(t){return"object"==typeof t&&(t instanceof d||(g?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function h(t){return f(t)||j(t)}c(h,"isPrimitive",f),c(h,"isObject",j);var w=Number.POSITIVE_INFINITY,N=d.NEGATIVE_INFINITY,O=Math.floor;function S(t){return t<w&&t>N&&O(e=t)===e;var e}function T(t){return f(t)&&S(t)}function A(t){return j(t)&&S(t.valueOf())}function F(t){return T(t)||A(t)}function I(t){return T(t)&&t>0}function P(t){return A(t)&&t.valueOf()>0}function E(t){return I(t)||P(t)}function V(t){return t!=t}c(F,"isPrimitive",T),c(F,"isObject",A),c(E,"isPrimitive",I),c(E,"isObject",P);var k="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0,C=function(){var t,e,r;if("function"!=typeof x)return!1;try{e=new x([1,3.14,-3.14,NaN]),r=e,t=(k&&r instanceof Float64Array||"[object Float64Array]"===_(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?G:function(){throw new Error("not implemented")};return function(t){var e,r,n,o;if(!I(t))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("0eT8T",t));return e=new C(t),r=0,o=-1,n=0,function(i){var u;if(0===arguments.length)return 0===n?null:r;if(o=(o+1)%t,V(i))n=t,r=NaN;else if(n<t)n+=1,r+=i;else if(V(e[o])){for(n=1,r=i,u=0;u<t;u++)if(u!==o){if(V(e[u])){n=t,r=NaN;break}n+=1,r+=e[u]}}else!1===V(r)&&(r+=i-e[o]);return e[o]=i,r}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmsum=e();
//# sourceMappingURL=index.js.map
