"use strict";var l=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=l(function(w,f){
var m=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,s=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/array-float64/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function p(i){var r,e,a,t;if(!m(i))throw new TypeError(g('1J98B',i));return r=new c(i),e=0,t=-1,a=0,o;function o(n){var u;if(arguments.length===0)return a===0?null:e;if(t=(t+1)%i,s(n))a=i,e=NaN;else if(a<i)a+=1,e+=n;else if(s(r[t])){for(a=1,e=n,u=0;u<i;u++)if(u!==t){if(s(r[u])){a=i,e=NaN;break}a+=1,e+=r[u]}}else s(e)===!1&&(e+=n-r[t]);return r[t]=n,e}}f.exports=p
});var q=v();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
