"use strict";var y=function(v,a){return function(){try{return a||v((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var j=y(function($,K){
var D=require('@stdlib/strided-base-reinterpret-complex64/dist'),A=require('@stdlib/complex-float32-real/dist'),C=require('@stdlib/complex-float32-imag/dist'),p=require('@stdlib/math-base-special-powf/dist'),F=require('@stdlib/math-base-special-lnf/dist'),l=require('@stdlib/math-base-special-sincosf/dist').assign,e=[0,0];function G(v,a,u,m,c,s,g,B){var f,o,R,d,w,E,r,t,n,O,_,x,i,q;if(v<=0)return s;if(f=A(u),o=C(u),R=A(m),d=C(m),n=F(a),t=D(s,0),x=g*2,i=B*2,v===1)return c?(r=p(a,R),l(d*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0]):(r=p(a,f),l(o*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0]),s;for(r=p(a,f),l(o*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0],i+=x,c&&(v-=1),O=(R-f)/v,_=(d-o)/v,q=1;q<v;q++)w=f+O*q,E=o+_*q,r=p(a,w),l(E*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0],i+=x;return c&&(r=p(a,R),l(d*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0]),s}K.exports=G
});var S=y(function(X,P){
var H=require('@stdlib/strided-base-stride2offset/dist'),J=j();function L(v,a,u,m,c,s,g){return J(v,a,u,m,c,s,g,H(v,g))}P.exports=L
});var k=y(function(b,h){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),W=S(),Q=j();M(W,"ndarray",Q);h.exports=W
});var T=require("path").join,U=require('@stdlib/utils-try-require/dist'),V=require('@stdlib/assert-is-error/dist'),Y=k(),I,z=U(T(__dirname,"./native.js"));V(z)?I=Y:I=z;module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
