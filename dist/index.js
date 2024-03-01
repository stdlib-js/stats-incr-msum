"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=l(function(w,f){
var m=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,s=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/array-float64/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e){var r,i,a,t;if(!m(e))throw new TypeError(g('1J98B',e));return r=new c(e),i=0,t=-1,a=0,o;function o(n){var u;if(arguments.length===0)return a===0?null:i;if(t=(t+1)%e,s(n))a=e,i=NaN;else if(a<e)a+=1,i+=n;else if(s(r[t])){for(a=1,i=n,u=0;u<e;u++)if(u!==t){if(s(r[u])){a=e,i=NaN;break}a+=1,i+=r[u]}}else s(i)===!1&&(i+=n-r[t]);return r[t]=n,i}}f.exports=p
});var q=v();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
