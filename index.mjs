// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function i(i){var n,o,m,d;if(!e(i))throw new TypeError(r("1J98B,Hs",i));return n=new t(i),o=0,d=-1,m=0,function(e){var t;if(0===arguments.length)return 0===m?null:o;if(d=(d+1)%i,s(e))m=i,o=NaN;else if(m<i)m+=1,o+=e;else if(s(n[d])){for(m=1,o=e,t=0;t<i;t++)if(t!==d){if(s(n[t])){m=i,o=NaN;break}m+=1,o+=n[t]}}else!1===s(o)&&(o+=e-n[d]);return n[d]=e,o}}export{i as default};
//# sourceMappingURL=index.mjs.map
