"use strict";var w=function(u,a){return function(){try{return a||u((a={exports:{}}).exports,a),a.exports}catch(s){throw (a=0, s)}};};var I=w(function(N,M){
var D=require('@stdlib/strided-base-reinterpret-complex64/dist'),F=require('@stdlib/complex-float32-real/dist'),K=require('@stdlib/complex-float32-imag/dist'),p=require('@stdlib/math-base-special-powf/dist'),G=require('@stdlib/math-base-special-lnf/dist'),t=require('@stdlib/number-float64-base-to-float32/dist'),H=require('@stdlib/array-float32/dist'),m=require('@stdlib/math-base-special-sincosf/dist').assign,e=new H([0,0]);function J(u,a,s,g,f,n,y,B){var o,c,R,d,E,O,r,v,q,_,C,x,i,j,l;if(u<=0)return n;if(o=F(s),c=K(s),R=F(g),d=K(g),q=G(a),v=D(n,0),x=y*2,i=B*2,u===1)return f?(r=p(a,R),m(d*q,e,1,0),v[i]=r*e[1],v[i+1]=r*e[0]):(r=p(a,o),m(c*q,e,1,0),v[i]=r*e[1],v[i+1]=r*e[0]),n;for(r=p(a,o),m(c*q,e,1,0),v[i]=r*e[1],v[i+1]=r*e[0],i+=x,f&&(u-=1),j=t(u),_=t(t(R-o)/j),C=t(t(d-c)/j),l=1;l<u;l++)E=t(o+t(_*l)),O=t(c+t(C*l)),r=p(a,E),m(O*q,e,1,0),v[i]=r*e[1],v[i+1]=r*e[0],i+=x;return f&&(r=p(a,R),m(d*q,e,1,0),v[i]=r*e[1],v[i+1]=r*e[0]),n}M.exports=J
});var S=w(function(rr,P){
var L=require('@stdlib/strided-base-stride2offset/dist'),Q=I();function T(u,a,s,g,f,n,y){return Q(u,a,s,g,f,n,y,L(u,y))}P.exports=T
});var k=w(function(er,h){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),W=S(),V=I();U(W,"ndarray",V);h.exports=W
});var Y=require("path").join,Z=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),X=k(),A,z=Z(Y(__dirname,"./native.js"));$(z)?A=X:A=z;module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
