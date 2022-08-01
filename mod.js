// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,a=e.__defineSetter__,i=e.__lookupGetter__,u=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(i.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),y="get"in l,p="set"in l,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,l.get),p&&a&&a.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var s=p()?function(t){var r,e,n,o,a;if(null==t)return b.call(t);e=t[_],a=_,r=null!=(o=t)&&v.call(o,a);try{t[_]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[_]=e:delete t[_],n}:function(t){return b.call(t)},m=Number,d=m.prototype.toString;var j=p();function g(t){return"object"==typeof t&&(t instanceof m||(j?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function h(t){return f(t)||g(t)}c(h,"isPrimitive",f),c(h,"isObject",g);var w=Number.POSITIVE_INFINITY,N=m.NEGATIVE_INFINITY,O=Math.floor;function S(t){return t<w&&t>N&&O(r=t)===r;var r}function T(t){return f(t)&&S(t)}function A(t){return g(t)&&S(t.valueOf())}function F(t){return T(t)||A(t)}function I(t){return T(t)&&t>0}function P(t){return A(t)&&t.valueOf()>0}function E(t){return I(t)||P(t)}function V(t){return t!=t}c(F,"isPrimitive",T),c(F,"isObject",A),c(E,"isPrimitive",I),c(E,"isObject",P);var k="function"==typeof Float64Array;var G="function"==typeof Float64Array?Float64Array:null;var x="function"==typeof Float64Array?Float64Array:void 0;var C=function(){var t,r,e;if("function"!=typeof G)return!1;try{r=new G([1,3.14,-3.14,NaN]),e=r,t=(k&&e instanceof Float64Array||"[object Float64Array]"===s(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?x:function(){throw new Error("not implemented")};function Y(t){var r,e,n,o;if(!I(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("0eT8T",t));return r=new C(t),e=0,o=-1,n=0,function(a){var i;if(0===arguments.length)return 0===n?null:e;if(o=(o+1)%t,V(a))n=t,e=NaN;else if(n<t)n+=1,e+=a;else if(V(r[o])){for(n=1,e=a,i=0;i<t;i++)if(i!==o){if(V(r[i])){n=t,e=NaN;break}n+=1,e+=r[i]}}else!1===V(e)&&(e+=a-r[o]);return r[o]=a,e}}export{Y as default};
//# sourceMappingURL=mod.js.map
