// https://d3js.org Version 4.1.1. Copyright 2016 Mike Bostock.
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})}(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){return 1===t.length&&(t=r(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}function r(t){return function(e,r){return n(t(e),r)}}function i(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function o(t){return null===t?NaN:+t}function u(t,n){var e,r,i=t.length,u=0,a=0,c=-1,s=0;if(null==n)for(;++c<i;)isNaN(e=o(t[c]))||(r=e-u,u+=r/++s,a+=r*(e-u));else for(;++c<i;)isNaN(e=o(n(t[c],c,t)))||(r=e-u,u+=r/++s,a+=r*(e-u));if(s>1)return a/(s-1)}function a(t,n){var e=u(t,n);return e?Math.sqrt(e):e}function c(t,n){var e,r,i,o=-1,u=t.length;if(null==n){for(;++o<u;)if(null!=(r=t[o])&&r>=r){e=i=r;break}for(;++o<u;)null!=(r=t[o])&&(e>r&&(e=r),i<r&&(i=r))}else{for(;++o<u;)if(null!=(r=n(t[o],o,t))&&r>=r){e=i=r;break}for(;++o<u;)null!=(r=n(t[o],o,t))&&(e>r&&(e=r),i<r&&(i=r))}return[e,i]}function s(t){return function(){return t}}function f(t){return t}function l(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}function h(t,n,e){var r=p(t,n,e);return l(Math.ceil(t/r)*r,Math.floor(n/r)*r+r/2,r)}function p(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=Pd?i*=10:o>=qd?i*=5:o>=Ld&&(i*=2),n<t?-i:i}function d(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function v(){function t(t){var i,o,u=t.length,a=new Array(u);for(i=0;i<u;++i)a[i]=n(t[i],i,t);var c=e(a),s=c[0],f=c[1],l=r(a,s,f);Array.isArray(l)||(l=h(s,f,l));for(var p=l.length;l[0]<=s;)l.shift(),--p;for(;l[p-1]>=f;)l.pop(),--p;var d,v=new Array(p+1);for(i=0;i<=p;++i)d=v[i]=[],d.x0=i>0?l[i-1]:s,d.x1=i<p?l[i]:f;for(i=0;i<u;++i)o=a[i],s<=o&&o<=f&&v[Sd(l,o,0,p)].push(t[i]);return v}var n=f,e=c,r=d;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:s(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:s([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:s(Array.isArray(n)?Cd.call(n):n),t):r},t}function _(t,n,e){if(null==e&&(e=o),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,u=Math.floor(i),a=+e(t[u],u,t),c=+e(t[u+1],u+1,t);return a+(c-a)*(i-u)}}function y(t,e,r){return t=zd.call(t,o).sort(n),Math.ceil((r-e)/(2*(_(t,.75)-_(t,.25))*Math.pow(t.length,-1/3)))}function g(t,n,e){return Math.ceil((e-n)/(3.5*a(t)*Math.pow(t.length,-1/3)))}function m(t,n){var e,r,i=-1,o=t.length;if(null==n){for(;++i<o;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<o;)null!=(r=t[i])&&r>e&&(e=r)}else{for(;++i<o;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<o;)null!=(r=n(t[i],i,t))&&r>e&&(e=r)}return e}function x(t,n){var e,r=0,i=t.length,u=-1,a=i;if(null==n)for(;++u<i;)isNaN(e=o(t[u]))?--a:r+=e;else for(;++u<i;)isNaN(e=o(n(t[u],u,t)))?--a:r+=e;if(a)return r/a}function b(t,e){var r,i=[],u=t.length,a=-1;if(null==e)for(;++a<u;)isNaN(r=o(t[a]))||i.push(r);else for(;++a<u;)isNaN(r=o(e(t[a],a,t)))||i.push(r);return _(i.sort(n),.5)}function w(t){for(var n,e,r,i=t.length,o=-1,u=0;++o<i;)u+=t[o].length;for(e=new Array(u);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--u]=r[n];return e}function M(t,n){var e,r,i=-1,o=t.length;if(null==n){for(;++i<o;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<o;)null!=(r=t[i])&&e>r&&(e=r)}else{for(;++i<o;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<o;)null!=(r=n(t[i],i,t))&&e>r&&(e=r)}return e}function T(t){for(var n=0,e=t.length-1,r=t[0],i=new Array(e<0?0:e);n<e;)i[n]=[r,r=t[++n]];return i}function k(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r}function N(t,e){if(r=t.length){var r,i,o=0,u=0,a=t[u];for(e||(e=n);++o<r;)(e(i=t[o],a)<0||0!==e(a,a))&&(a=i,u=o);return 0===e(a,a)?u:void 0}}function S(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t}function A(t,n){var e,r=0,i=t.length,o=-1;if(null==n)for(;++o<i;)(e=+t[o])&&(r+=e);else for(;++o<i;)(e=+n(t[o],o,t))&&(r+=e);return r}function E(t){if(!(i=t.length))return[];for(var n=-1,e=M(t,C),r=new Array(e);++n<e;)for(var i,o=-1,u=r[n]=new Array(i);++o<i;)u[o]=t[o][n];return r}function C(t){return t.length}function z(){return E(arguments)}function P(){}function q(t,n){var e=new P;if(t instanceof P)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var u in t)e.set(u,t[u]);return e}function L(){function t(n,i,u,a){if(i>=o.length)return null!=r?r(n):null!=e?n.sort(e):n;for(var c,s,f,l=-1,h=n.length,p=o[i++],d=q(),v=u();++l<h;)(f=d.get(c=p(s=n[l])+""))?f.push(s):d.set(c,[s]);return d.each(function(n,e){a(v,e,t(n,i,u,a))}),v}function n(t,e){if(++e>o.length)return t;var i,a=u[e-1];return null!=r&&e>=o.length?i=t.entries():(i=[],t.each(function(t,r){i.push({key:r,values:n(t,e)})})),null!=a?i.sort(function(t,n){return a(t.key,n.key)}):i}var e,r,i,o=[],u=[];return i={object:function(n){return t(n,0,R,U)},map:function(n){return t(n,0,D,O)},entries:function(e){return n(t(e,0,D,O),0)},key:function(t){return o.push(t),i},sortKeys:function(t){return u[o.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}}function R(){return{}}function U(t,n,e){t[n]=e}function D(){return q()}function O(t,n,e){t.set(n,e)}function F(){}function I(t,n){var e=new F;if(t instanceof F)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}function Y(t){var n=[];for(var e in t)n.push(e);return n}function B(t){var n=[];for(var e in t)n.push(t[e]);return n}function j(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n}function H(t,n){return t=null==t?0:+t,n=null==n?1:+n,1===arguments.length?(n=t,t=0):n-=t,function(){return Math.random()*n+t}}function X(t,n){var e,r;return t=null==t?0:+t,n=null==n?1:+n,function(){var i;if(null!=e)i=e,e=null;else do e=2*Math.random()-1,i=2*Math.random()-1,r=e*e+i*i;while(!r||r>1);return t+n*i*Math.sqrt(-2*Math.log(r)/r)}}function V(){var t=X.apply(this,arguments);return function(){return Math.exp(t())}}function W(t){return function(){for(var n=0,e=0;e<t;++e)n+=Math.random();return n}}function $(t){var n=W(t);return function(){return n()/t}}function Z(t){return function(){return-Math.log(1-Math.random())/t}}function G(t){return+t}function J(t){return t*t}function Q(t){return t*(2-t)}function K(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function tt(t){return t*t*t}function nt(t){return--t*t*t+1}function et(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function rt(t){return 1-Math.cos(t*Bd)}function it(t){return Math.sin(t*Bd)}function ot(t){return(1-Math.cos(Yd*t))/2}function ut(t){return Math.pow(2,10*t-10)}function at(t){return 1-Math.pow(2,-10*t)}function ct(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function st(t){return 1-Math.sqrt(1-t*t)}function ft(t){return Math.sqrt(1- --t*t)}function lt(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function ht(t){return 1-pt(1-t)}function pt(t){return(t=+t)<jd?Qd*t*t:t<Xd?Qd*(t-=Hd)*t+Vd:t<$d?Qd*(t-=Wd)*t+Zd:Qd*(t-=Gd)*t+Jd}function dt(t){return((t*=2)<=1?1-pt(1-t):pt(t-1)+1)/2}function vt(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2}function _t(t){for(var n,e,r=-1,i=t.length,o=0,u=0,a=t[i-1],c=0;++r<i;)n=a,a=t[r],c+=e=n[0]*a[1]-a[0]*n[1],o+=(n[0]+a[0])*e,u+=(n[1]+a[1])*e;return c*=3,[o/c,u/c]}function yt(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function gt(t,n){return t[0]-n[0]||t[1]-n[1]}function mt(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&yt(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function xt(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(gt),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=mt(r),u=mt(i),a=u[0]===o[0],c=u[u.length-1]===o[o.length-1],s=[];for(n=o.length-1;n>=0;--n)s.push(t[r[o[n]][2]]);for(n=+a;n<u.length-c;++n)s.push(t[r[u[n]][2]]);return s}function bt(t,n){for(var e,r,i=t.length,o=t[i-1],u=n[0],a=n[1],c=o[0],s=o[1],f=!1,l=0;l<i;++l)o=t[l],e=o[0],r=o[1],r>a!=s>a&&u<(c-e)*(a-r)/(s-r)+e&&(f=!f),c=e,s=r;return f}function wt(t){for(var n,e,r=-1,i=t.length,o=t[i-1],u=o[0],a=o[1],c=0;++r<i;)n=u,e=a,o=t[r],u=o[0],a=o[1],n-=u,e-=a,c+=Math.sqrt(n*n+e*e);return c}function Mt(){this._x0=this._y0=this._x1=this._y1=null,this._=[]}function Tt(){return new Mt}function kt(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return Nt(this.cover(n,e),n,e,t)}function Nt(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,u,a,c,s,f,l,h,p=t._root,d={data:r},v=t._x0,_=t._y0,y=t._x1,g=t._y1;if(!p)return t._root=d,t;for(;p.length;)if((s=n>=(o=(v+y)/2))?v=o:y=o,(f=e>=(u=(_+g)/2))?_=u:g=u,i=p,!(p=p[l=f<<1|s]))return i[l]=d,t;if(a=+t._x.call(null,p.data),c=+t._y.call(null,p.data),n===a&&e===c)return d.next=p,i?i[l]=d:t._root=d,t;do i=i?i[l]=new Array(4):t._root=new Array(4),(s=n>=(o=(v+y)/2))?v=o:y=o,(f=e>=(u=(_+g)/2))?_=u:g=u;while((l=f<<1|s)===(h=(c>=u)<<1|a>=o));return i[h]=p,i[l]=d,t}function St(t){var n,e,r,i,o=t.length,u=new Array(o),a=new Array(o),c=1/0,s=1/0,f=-(1/0),l=-(1/0);for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(u[e]=r,a[e]=i,r<c&&(c=r),r>f&&(f=r),i<s&&(s=i),i>l&&(l=i));for(f<c&&(c=this._x0,f=this._x1),l<s&&(s=this._y0,l=this._y1),this.cover(c,s).cover(f,l),e=0;e<o;++e)Nt(this,u[e],a[e],t[e]);return this}function At(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var u,a,c=i-e,s=this._root;switch(a=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do u=new Array(4),u[a]=s,s=u;while(c*=2,i=e+c,o=r+c,t>i||n>o);break;case 1:do u=new Array(4),u[a]=s,s=u;while(c*=2,e=i-c,o=r+c,e>t||n>o);break;case 2:do u=new Array(4),u[a]=s,s=u;while(c*=2,i=e+c,r=o-c,t>i||r>n);break;case 3:do u=new Array(4),u[a]=s,s=u;while(c*=2,e=i-c,r=o-c,e>t||r>n)}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this}function Et(){var t=[];return this.visit(function(n){if(!n.length)do t.push(n.data);while(n=n.next)}),t}function Ct(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function zt(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function Pt(t,n,e){var r,i,o,u,a,c,s,f=this._x0,l=this._y0,h=this._x1,p=this._y1,d=[],v=this._root;for(v&&d.push(new zt(v,f,l,h,p)),null==e?e=1/0:(f=t-e,l=n-e,h=t+e,p=n+e,e*=e);c=d.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>p||(u=c.x1)<f||(a=c.y1)<l))if(v.length){var _=(i+u)/2,y=(o+a)/2;d.push(new zt(v[3],_,y,u,a),new zt(v[2],i,y,_,a),new zt(v[1],_,o,u,y),new zt(v[0],i,o,_,y)),(s=(n>=y)<<1|t>=_)&&(c=d[d.length-1],d[d.length-1]=d[d.length-1-s],d[d.length-1-s]=c)}else{var g=t-+this._x.call(null,v.data),m=n-+this._y.call(null,v.data),x=g*g+m*m;if(x<e){var b=Math.sqrt(e=x);f=t-b,l=n-b,h=t+b,p=n+b,r=v.data}}return r}function qt(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,e,r,i,o,u,a,c,s,f,l,h,p=this._root,d=this._x0,v=this._y0,_=this._x1,y=this._y1;if(!p)return this;if(p.length)for(;;){if((s=o>=(a=(d+_)/2))?d=a:_=a,(f=u>=(c=(v+y)/2))?v=c:y=c,n=p,!(p=p[l=f<<1|s]))return this;if(!p.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;p.data!==t;)if(r=p,!(p=p.next))return this;return(i=p.next)&&delete p.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(p=n[0]||n[1]||n[2]||n[3])&&p===(n[3]||n[2]||n[1]||n[0])&&!p.length&&(e?e[h]=p:this._root=p),this):(this._root=i,this)}function Lt(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}function Rt(){return this._root}function Ut(){var t=0;return this.visit(function(n){if(!n.length)do++t;while(n=n.next)}),t}function Dt(t){var n,e,r,i,o,u,a=[],c=this._root;for(c&&a.push(new zt(c,this._x0,this._y0,this._x1,this._y1));n=a.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,u=n.y1)&&c.length){var s=(r+o)/2,f=(i+u)/2;(e=c[3])&&a.push(new zt(e,s,f,o,u)),(e=c[2])&&a.push(new zt(e,r,f,s,u)),(e=c[1])&&a.push(new zt(e,s,i,o,f)),(e=c[0])&&a.push(new zt(e,r,i,s,f))}return this}function Ot(t){var n,e=[],r=[];for(this._root&&e.push(new zt(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,u=n.x0,a=n.y0,c=n.x1,s=n.y1,f=(u+c)/2,l=(a+s)/2;(o=i[0])&&e.push(new zt(o,u,a,f,l)),(o=i[1])&&e.push(new zt(o,f,a,c,l)),(o=i[2])&&e.push(new zt(o,u,l,f,s)),(o=i[3])&&e.push(new zt(o,f,l,c,s))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this}function Ft(t){return t[0]}function It(t){return arguments.length?(this._x=t,this):this._x}function Yt(t){return t[1]}function Bt(t){return arguments.length?(this._y=t,this):this._y}function jt(t,n,e){var r=new Ht(null==n?Ft:n,null==e?Yt:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function Ht(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Xt(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}function Vt(t){if(!(t>=1))throw new Error;this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function Wt(t){if(!t._start)try{$t(t)}catch(n){t._tasks[t._ended+t._active-1]&&Gt(t,n)}}function $t(t){for(;t._start=t._waiting&&t._active<t._size;){var n=t._ended+t._active,e=t._tasks[n],r=e.length-1,i=e[r];e[r]=Zt(t,n),--t._waiting,++t._active,e=i.apply(null,e),t._tasks[n]&&(t._tasks[n]=e||vv)}}function Zt(t,n){return function(e,r){t._tasks[n]&&(--t._active,++t._ended,t._tasks[n]=null,null==t._error&&(null!=e?Gt(t,e):(t._data[n]=r,t._waiting?Wt(t):Jt(t))))}}function Gt(t,n){var e,r=t._tasks.length;for(t._error=n,t._data=void 0,t._waiting=NaN;--r>=0;)if((e=t._tasks[r])&&(t._tasks[r]=null,e.abort))try{e.abort()}catch(t){}t._active=NaN,Jt(t)}function Jt(t){!t._active&&t._call&&t._call(t._error,t._data)}function Qt(t){return new Vt(arguments.length?+t:1/0)}function Kt(t){return function(){return t}}function tn(t){return t.innerRadius}function nn(t){return t.outerRadius}function en(t){return t.startAngle}function rn(t){return t.endAngle}function on(t){return t&&t.padAngle}function un(t){return t>=1?gv:t<=-1?-gv:Math.asin(t)}function an(t,n,e,r,i,o,u,a){var c=e-t,s=r-n,f=u-i,l=a-o,h=(f*(n-o)-l*(t-i))/(l*c-f*s);return[t+h*c,n+h*s]}function cn(t,n,e,r,i,o,u){var a=t-e,c=n-r,s=(u?o:-o)/Math.sqrt(a*a+c*c),f=s*c,l=-s*a,h=t+f,p=n+l,d=e+f,v=r+l,_=(h+d)/2,y=(p+v)/2,g=d-h,m=v-p,x=g*g+m*m,b=i-o,w=h*v-d*p,M=(m<0?-1:1)*Math.sqrt(Math.max(0,b*b*x-w*w)),T=(w*m-g*M)/x,k=(-w*g-m*M)/x,N=(w*m+g*M)/x,S=(-w*g+m*M)/x,A=T-_,E=k-y,C=N-_,z=S-y;return A*A+E*E>C*C+z*z&&(T=N,k=S),{cx:T,cy:k,x01:-f,y01:-l,x11:T*(i/b-1),y11:k*(i/b-1)}}function sn(){function t(){var t,s,f=+n.apply(this,arguments),l=+e.apply(this,arguments),h=o.apply(this,arguments)-gv,p=u.apply(this,arguments)-gv,d=Math.abs(p-h),v=p>h;if(c||(c=t=Tt()),l<f&&(s=l,l=f,f=s),l>_v)if(d>mv-_v)c.moveTo(l*Math.cos(h),l*Math.sin(h)),c.arc(0,0,l,h,p,!v),f>_v&&(c.moveTo(f*Math.cos(p),f*Math.sin(p)),c.arc(0,0,f,p,h,v));else{var _,y,g=h,m=p,x=h,b=p,w=d,M=d,T=a.apply(this,arguments)/2,k=T>_v&&(i?+i.apply(this,arguments):Math.sqrt(f*f+l*l)),N=Math.min(Math.abs(l-f)/2,+r.apply(this,arguments)),S=N,A=N;if(k>_v){var E=un(k/f*Math.sin(T)),C=un(k/l*Math.sin(T));(w-=2*E)>_v?(E*=v?1:-1,x+=E,b-=E):(w=0,x=b=(h+p)/2),(M-=2*C)>_v?(C*=v?1:-1,g+=C,m-=C):(M=0,g=m=(h+p)/2)}var z=l*Math.cos(g),P=l*Math.sin(g),q=f*Math.cos(b),L=f*Math.sin(b);if(N>_v){var R=l*Math.cos(m),U=l*Math.sin(m),D=f*Math.cos(x),O=f*Math.sin(x);if(d<yv){var F=w>_v?an(z,P,D,O,R,U,q,L):[q,L],I=z-F[0],Y=P-F[1],B=R-F[0],j=U-F[1],H=1/Math.sin(Math.acos((I*B+Y*j)/(Math.sqrt(I*I+Y*Y)*Math.sqrt(B*B+j*j)))/2),X=Math.sqrt(F[0]*F[0]+F[1]*F[1]);S=Math.min(N,(f-X)/(H-1)),A=Math.min(N,(l-X)/(H+1))}}M>_v?A>_v?(_=cn(D,O,z,P,l,A,v),y=cn(R,U,q,L,l,A,v),c.moveTo(_.cx+_.x01,_.cy+_.y01),A<N?c.arc(_.cx,_.cy,A,Math.atan2(_.y01,_.x01),Math.atan2(y.y01,y.x01),!v):(c.arc(_.cx,_.cy,A,Math.atan2(_.y01,_.x01),Math.atan2(_.y11,_.x11),!v),c.arc(0,0,l,Math.atan2(_.cy+_.y11,_.cx+_.x11),Math.atan2(y.cy+y.y11,y.cx+y.x11),!v),c.arc(y.cx,y.cy,A,Math.atan2(y.y11,y.x11),Math.atan2(y.y01,y.x01),!v))):(c.moveTo(z,P),c.arc(0,0,l,g,m,!v)):c.moveTo(z,P),f>_v&&w>_v?S>_v?(_=cn(q,L,R,U,f,-S,v),y=cn(z,P,D,O,f,-S,v),c.lineTo(_.cx+_.x01,_.cy+_.y01),S<N?c.arc(_.cx,_.cy,S,Math.atan2(_.y01,_.x01),Math.atan2(y.y01,y.x01),!v):(c.arc(_.cx,_.cy,S,Math.atan2(_.y01,_.x01),Math.atan2(_.y11,_.x11),!v),c.arc(0,0,f,Math.atan2(_.cy+_.y11,_.cx+_.x11),Math.atan2(y.cy+y.y11,y.cx+y.x11),v),c.arc(y.cx,y.cy,S,Math.atan2(y.y11,y.x11),Math.atan2(y.y01,y.x01),!v))):c.arc(0,0,f,b,x,v):c.lineTo(q,L)}else c.moveTo(0,0);if(c.closePath(),t)return c=null,t+""||null}var n=tn,e=nn,r=Kt(0),i=null,o=en,u=rn,a=on,c=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+o.apply(this,arguments)+ +u.apply(this,arguments))/2-yv/2;return[Math.cos(r)*t,Math.sin(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:Kt(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:Kt(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:Kt(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:Kt(+n),t):i},t.startAngle=function(n){return arguments.length?(o="function"==typeof n?n:Kt(+n),t):o},t.endAngle=function(n){return arguments.length?(u="function"==typeof n?n:Kt(+n),t):u},t.padAngle=function(n){return arguments.length?(a="function"==typeof n?n:Kt(+n),t):a},t.context=function(n){return arguments.length?(c=null==n?null:n,t):c},t}function fn(t){this._context=t}function ln(t){return new fn(t)}function hn(t){return t[0]}function pn(t){return t[1]}function dn(){function t(t){var a,c,s,f=t.length,l=!1;for(null==i&&(u=o(s=Tt())),a=0;a<=f;++a)!(a<f&&r(c=t[a],a,t))===l&&((l=!l)?u.lineStart():u.lineEnd()),l&&u.point(+n(c,a,t),+e(c,a,t));if(s)return u=null,s+""||null}var n=hn,e=pn,r=Kt(!0),i=null,o=ln,u=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:Kt(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:Kt(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:Kt(!!n),t):r},t.curve=function(n){return arguments.length?(o=n,null!=i&&(u=o(i)),t):o},t.context=function(n){return arguments.length?(null==n?i=u=null:u=o(i=n),t):i},t}function vn(){function t(t){var n,f,l,h,p,d=t.length,v=!1,_=new Array(d),y=new Array(d);for(null==a&&(s=c(p=Tt())),n=0;n<=d;++n){if(!(n<d&&u(h=t[n],n,t))===v)if(v=!v)f=n,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),l=n-1;l>=f;--l)s.point(_[l],y[l]);s.lineEnd(),s.areaEnd()}v&&(_[n]=+e(h,n,t),y[n]=+i(h,n,t),s.point(r?+r(h,n,t):_[n],o?+o(h,n,t):y[n]))}if(p)return s=null,p+""||null}function n(){return dn().defined(u).curve(c).context(a)}var e=hn,r=null,i=Kt(0),o=pn,u=Kt(!0),a=null,c=ln,s=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:Kt(+n),r=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:Kt(+n),t):e},t.x1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:Kt(+n),t):r},t.y=function(n){return arguments.length?(i="function"==typeof n?n:Kt(+n),o=null,t):i},t.y0=function(n){return arguments.length?(i="function"==typeof n?n:Kt(+n),t):i},t.y1=function(n){return arguments.length?(o=null==n?null:"function"==typeof n?n:Kt(+n),t):o},t.lineX0=t.lineY0=function(){return n().x(e).y(i)},t.lineY1=function(){return n().x(e).y(o)},t.lineX1=function(){return n().x(r).y(i)},t.defined=function(n){return arguments.length?(u="function"==typeof n?n:Kt(!!n),t):u},t.curve=function(n){return arguments.length?(c=n,null!=a&&(s=c(a)),t):c},t.context=function(n){return arguments.length?(null==n?a=s=null:s=c(a=n),t):a},t}function _n(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function yn(t){return t}function gn(){function t(t){var a,c,s,f,l,h=t.length,p=0,d=new Array(h),v=new Array(h),_=+i.apply(this,arguments),y=Math.min(mv,Math.max(-mv,o.apply(this,arguments)-_)),g=Math.min(Math.abs(y)/h,u.apply(this,arguments)),m=g*(y<0?-1:1);for(a=0;a<h;++a)(l=v[d[a]=a]=+n(t[a],a,t))>0&&(p+=l);for(null!=e?d.sort(function(t,n){return e(v[t],v[n])}):null!=r&&d.sort(function(n,e){return r(t[n],t[e])}),a=0,s=p?(y-h*m)/p:0;a<h;++a,_=f)c=d[a],l=v[c],f=_+(l>0?l*s:0)+m,v[c]={data:t[c],index:a,value:l,startAngle:_,endAngle:f,padAngle:g};return v}var n=yn,e=_n,r=null,i=Kt(0),o=Kt(mv),u=Kt(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:Kt(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:Kt(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:Kt(+n),t):o},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:Kt(+n),t):u},t}function mn(t){this._curve=t}function xn(t){function n(n){return new mn(t(n))}return n._curve=t,n}function bn(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(xn(t)):n()._curve},t}function wn(){return bn(dn().curve(xv))}function Mn(){var t=vn().curve(xv),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return bn(e())},delete t.lineX0,t.lineEndAngle=function(){return bn(r())},delete t.lineX1,t.lineInnerRadius=function(){return bn(i())},delete t.lineY0,t.lineOuterRadius=function(){return bn(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(xn(t)):n()._curve},t}function Tn(){function t(){var t;if(r||(r=t=Tt()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t)return r=null,t+""||null}var n=Kt(bv),e=Kt(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:Kt(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:Kt(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t}function kn(){}function Nn(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function Sn(t){this._context=t}function An(t){return new Sn(t)}function En(t){this._context=t}function Cn(t){return new En(t)}function zn(t){this._context=t}function Pn(t){return new zn(t)}function qn(t,n){this._basis=new Sn(t),this._beta=n}function Ln(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function Rn(t,n){this._context=t,this._k=(1-n)/6}function Un(t,n){this._context=t,this._k=(1-n)/6}function Dn(t,n){this._context=t,this._k=(1-n)/6}function On(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2;if(t._l01_a>_v){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>_v){var s=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*s+t._x1*t._l23_2a-n*t._l12_2a)/f,u=(u*s+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function Fn(t,n){this._context=t,this._alpha=n}function In(t,n){this._context=t,this._alpha=n}function Yn(t,n){this._context=t,this._alpha=n}function Bn(t){this._context=t}function jn(t){return new Bn(t)}function Hn(t){return t<0?-1:1}function Xn(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),u=(e-t._y1)/(i||r<0&&-0),a=(o*i+u*r)/(r+i);return(Hn(o)+Hn(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(a))||0}function Vn(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function Wn(t,n,e){var r=t._x0,i=t._y0,o=t._x1,u=t._y1,a=(o-r)/3;t._context.bezierCurveTo(r+a,i+a*n,o-a,u-a*e,o,u)}function $n(t){this._context=t}function Zn(t){this._context=new Gn(t)}function Gn(t){this._context=t}function Jn(t){return new $n(t)}function Qn(t){return new Zn(t)}function Kn(t){this._context=t}function te(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),u=new Array(r);for(i[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,u[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,u[n]-=e*u[n-1];for(i[r-1]=u[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(u[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function ne(t){return new Kn(t)}function ee(t,n){this._context=t,this._t=n}function re(t){return new ee(t,.5)}function ie(t){return new ee(t,0)}function oe(t){return new ee(t,1)}function ue(t,n){if((r=t.length)>1)for(var e,r,i=1,o=t[n[0]],u=o.length;i<r;++i){e=o,o=t[n[i]];for(var a=0;a<u;++a)o[a][1]+=o[a][0]=isNaN(e[a][1])?e[a][0]:e[a][1]}}function ae(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function ce(t,n){return t[n]}function se(){function t(t){var o,u,a=n.apply(this,arguments),c=t.length,s=a.length,f=new Array(s);for(o=0;o<s;++o){for(var l,h=a[o],p=f[o]=new Array(c),d=0;d<c;++d)p[d]=l=[0,+i(t[d],h,d,t)],l.data=t[d];p.key=h}for(o=0,u=e(f);o<s;++o)f[u[o]].index=o;return r(f,u),f}var n=Kt([]),e=ae,r=ue,i=ce;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:Kt(Wv.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:Kt(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?ae:"function"==typeof n?n:Kt(Wv.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?ue:n,t):r},t}function fe(t,n){if((r=t.length)>0){for(var e,r,i,o=0,u=t[0].length;o<u;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}ue(t,n)}}function le(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var u=0,a=0;u<e;++u)a+=t[u][r][1]||0;i[r][1]+=i[r][0]=-a/2}ue(t,n)}}function he(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,u=1;u<r;++u){for(var a=0,c=0,s=0;a<i;++a){for(var f=t[n[a]],l=f[u][1]||0,h=f[u-1][1]||0,p=(l-h)/2,d=0;d<a;++d){var v=t[n[d]],_=v[u][1]||0,y=v[u-1][1]||0;p+=_-y}c+=l,s+=p*l}e[u-1][1]+=e[u-1][0]=o,c&&(o-=s/c)}e[u-1][1]+=e[u-1][0]=o,ue(t,n)}}function pe(t){var n=t.map(de);return ae(t).sort(function(t,e){return n[t]-n[e]})}function de(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function ve(t){return pe(t).reverse()}function _e(t){var n,e,r=t.length,i=t.map(de),o=ae(t).sort(function(t,n){return i[n]-i[t]}),u=0,a=0,c=[],s=[];for(n=0;n<r;++n)e=o[n],u<a?(u+=i[e],c.push(e)):(a+=i[e],s.push(e));return s.reverse().concat(c)}function ye(t){return ae(t).reverse()}function ge(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function me(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function xe(){}function be(t){var n;return t=(t+"").trim().toLowerCase(),(n=Gv.exec(t))?(n=parseInt(n[1],16),new Ne(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=Jv.exec(t))?we(parseInt(n[1],16)):(n=Qv.exec(t))?new Ne(n[1],n[2],n[3],1):(n=Kv.exec(t))?new Ne(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=t_.exec(t))?Me(n[1],n[2],n[3],n[4]):(n=n_.exec(t))?Me(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=e_.exec(t))?Se(n[1],n[2]/100,n[3]/100,1):(n=r_.exec(t))?Se(n[1],n[2]/100,n[3]/100,n[4]):i_.hasOwnProperty(t)?we(i_[t]):"transparent"===t?new Ne(NaN,NaN,NaN,0):null}function we(t){return new Ne(t>>16&255,t>>8&255,255&t,1)}function Me(t,n,e,r){return r<=0&&(t=n=e=NaN),new Ne(t,n,e,r)}function Te(t){return t instanceof xe||(t=be(t)),t?(t=t.rgb(),new Ne(t.r,t.g,t.b,t.opacity)):new Ne}function ke(t,n,e,r){return 1===arguments.length?Te(t):new Ne(t,n,e,null==r?1:r)}function Ne(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Se(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Ce(t,n,e,r)}function Ae(t){if(t instanceof Ce)return new Ce(t.h,t.s,t.l,t.opacity);if(t instanceof xe||(t=be(t)),!t)return new Ce;if(t instanceof Ce)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,c=(o+i)/2;return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=c<.5?o+i:2-o-i,u*=60):a=c>0&&c<1?0:u,new Ce(u,a,c,t.opacity)}function Ee(t,n,e,r){return 1===arguments.length?Ae(t):new Ce(t,n,e,null==r?1:r)}function Ce(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function ze(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function Pe(t){if(t instanceof Le)return new Le(t.l,t.a,t.b,t.opacity);if(t instanceof Ye){var n=t.h*o_;return new Le(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof Ne||(t=Te(t));var e=Oe(t.r),r=Oe(t.g),i=Oe(t.b),o=Re((.4124564*e+.3575761*r+.1804375*i)/c_),u=Re((.2126729*e+.7151522*r+.072175*i)/s_),a=Re((.0193339*e+.119192*r+.9503041*i)/f_);return new Le(116*u-16,500*(o-u),200*(u-a),t.opacity)}function qe(t,n,e,r){return 1===arguments.length?Pe(t):new Le(t,n,e,null==r?1:r)}function Le(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Re(t){return t>d_?Math.pow(t,1/3):t/p_+l_}function Ue(t){return t>h_?t*t*t:p_*(t-l_)}function De(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Oe(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Fe(t){if(t instanceof Ye)return new Ye(t.h,t.c,t.l,t.opacity);t instanceof Le||(t=Pe(t));var n=Math.atan2(t.b,t.a)*u_;return new Ye(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Ie(t,n,e,r){return 1===arguments.length?Fe(t):new Ye(t,n,e,null==r?1:r)}function Ye(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Be(t){if(t instanceof He)return new He(t.h,t.s,t.l,t.opacity);t instanceof Ne||(t=Te(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(w_*r+x_*n-b_*e)/(w_+x_-b_),o=r-i,u=(m_*(e-i)-y_*o)/g_,a=Math.sqrt(u*u+o*o)/(m_*i*(1-i)),c=a?Math.atan2(u,o)*u_-120:NaN;return new He(c<0?c+360:c,a,i,t.opacity)}function je(t,n,e,r){return 1===arguments.length?Be(t):new He(t,n,e,null==r?1:r)}function He(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Xe(t,n,e,r,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}function Ve(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],u=r>0?t[r-1]:2*i-o,a=r<n-1?t[r+2]:2*o-i;return Xe((e-r/n)*n,u,i,o,a)}}function We(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],u=t[(r+1)%n],a=t[(r+2)%n];return Xe((e-r/n)*n,i,o,u,a)}}function $e(t){return function(){return t}}function Ze(t,n){return function(e){return t+e*n}}function Ge(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function Je(t,n){var e=n-t;return e?Ze(t,e>180||e<-180?e-360*Math.round(e/360):e):$e(isNaN(t)?n:t)}function Qe(t){return 1===(t=+t)?Ke:function(n,e){return e-n?Ge(n,e,t):$e(isNaN(n)?e:n)}}function Ke(t,n){var e=n-t;return e?Ze(t,e):$e(isNaN(t)?n:t)}function tr(t){return function(n){var e,r,i=n.length,o=new Array(i),u=new Array(i),a=new Array(i);for(e=0;e<i;++e)r=ke(n[e]),o[e]=r.r||0,u[e]=r.g||0,a[e]=r.b||0;return o=t(o),u=t(u),a=t(a),r.opacity=1,function(t){return r.r=o(t),r.g=u(t),r.b=a(t),r+""}}}function nr(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(r),u=new Array(r);for(e=0;e<i;++e)o[e]=cr(t[e],n[e]);
for(;e<r;++e)u[e]=n[e];return function(t){for(e=0;e<i;++e)u[e]=o[e](t);return u}}function er(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}}function rr(t,n){return t=+t,n-=t,function(e){return t+n*e}}function ir(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=cr(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}function or(t){return function(){return t}}function ur(t){return function(n){return t(n)+""}}function ar(t,n){var e,r,i,o=C_.lastIndex=z_.lastIndex=0,u=-1,a=[],c=[];for(t+="",n+="";(e=C_.exec(t))&&(r=z_.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,c.push({i:u,x:rr(e,r)})),o=z_.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?c[0]?ur(c[0].x):or(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)a[(e=c[r]).i]=e.x(t);return a.join("")})}function cr(t,n){var e,r=typeof n;return null==n||"boolean"===r?$e(n):("number"===r?rr:"string"===r?(e=be(n))?(n=e,S_):ar:n instanceof be?S_:n instanceof Date?er:Array.isArray(n)?nr:isNaN(n)?ir:rr)(t,n)}function sr(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}}function fr(t,n,e,r,i,o){var u,a,c;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,c/=a),t*r<n*e&&(t=-t,n=-n,c=-c,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*P_,skewX:Math.atan(c)*P_,scaleX:u,scaleY:a}}function lr(t){return"none"===t?q_:(M_||(M_=document.createElement("DIV"),T_=document.documentElement,k_=document.defaultView),M_.style.transform=t,t=k_.getComputedStyle(T_.appendChild(M_),null).getPropertyValue("transform"),T_.removeChild(M_),t=t.slice(7,-1).split(","),fr(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function hr(t){return null==t?q_:(N_||(N_=document.createElementNS("http://www.w3.org/2000/svg","g")),N_.setAttribute("transform",t),(t=N_.transform.baseVal.consolidate())?(t=t.matrix,fr(t.a,t.b,t.c,t.d,t.e,t.f)):q_)}function pr(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}function o(t,r,i,o,u,a){if(t!==i||r!==o){var c=u.push("translate(",null,n,null,e);a.push({i:c-4,x:rr(t,i)},{i:c-2,x:rr(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}function u(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:rr(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}function a(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:rr(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}function c(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:rr(t,e)},{i:a-2,x:rr(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}return function(n,e){var r=[],i=[];return n=t(n),e=t(e),o(n.translateX,n.translateY,e.translateX,e.translateY,r,i),u(n.rotate,e.rotate,r,i),a(n.skewX,e.skewX,r,i),c(n.scaleX,n.scaleY,e.scaleX,e.scaleY,r,i),n=e=null,function(t){for(var n,e=-1,o=i.length;++e<o;)r[(n=i[e]).i]=n.x(t);return r.join("")}}}function dr(t){return((t=Math.exp(t))+1/t)/2}function vr(t){return((t=Math.exp(t))-1/t)/2}function _r(t){return((t=Math.exp(2*t))-1)/(t+1)}function yr(t,n){var e,r,i=t[0],o=t[1],u=t[2],a=n[0],c=n[1],s=n[2],f=a-i,l=c-o,h=f*f+l*l;if(h<F_)r=Math.log(s/u)/U_,e=function(t){return[i+t*f,o+t*l,u*Math.exp(U_*t*r)]};else{var p=Math.sqrt(h),d=(s*s-u*u+O_*h)/(2*u*D_*p),v=(s*s-u*u-O_*h)/(2*s*D_*p),_=Math.log(Math.sqrt(d*d+1)-d),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-_)/U_,e=function(t){var n=t*r,e=dr(_),a=u/(D_*p)*(e*_r(U_*n+_)-vr(_));return[i+a*f,o+a*l,u*e/dr(U_*n+_)]}}return e.duration=1e3*r,e}function gr(t){return function(n,e){var r=t((n=Ee(n)).h,(e=Ee(e)).h),i=Ke(n.s,e.s),o=Ke(n.l,e.l),u=Ke(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function mr(t,n){var e=Ke((t=qe(t)).l,(n=qe(n)).l),r=Ke(t.a,n.a),i=Ke(t.b,n.b),o=Ke(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}}function xr(t){return function(n,e){var r=t((n=Ie(n)).h,(e=Ie(e)).h),i=Ke(n.c,e.c),o=Ke(n.l,e.l),u=Ke(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function br(t){return function n(e){function r(n,r){var i=t((n=je(n)).h,(r=je(r)).h),o=Ke(n.s,r.s),u=Ke(n.l,r.l),a=Ke(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=u(Math.pow(t,e)),n.opacity=a(t),n+""}}return e=+e,r.gamma=n,r}(1)}function wr(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e}function Mr(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new Tr(r)}function Tr(t){this._=t}function kr(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function Nr(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function Sr(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=V_,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function Ar(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function Er(t,n){var e=Ar(t);return function(r,i){return n(e(r),i,t)}}function Cr(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function zr(t){function n(t,n){var r,i,o=e(t,function(t,e){return r?r(t,e-1):(i=t,void(r=n?Er(t,n):Ar(t)))});return o.columns=i,o}function e(t,n){function e(){if(f>=s)return u;if(i)return i=!1,o;var n,e=f;if(34===t.charCodeAt(e)){for(var r=e;r++<s;)if(34===t.charCodeAt(r)){if(34!==t.charCodeAt(r+1))break;++r}return f=r+2,n=t.charCodeAt(r+1),13===n?(i=!0,10===t.charCodeAt(r+2)&&++f):10===n&&(i=!0),t.slice(e+1,r).replace(/""/g,'"')}for(;f<s;){var a=1;if(n=t.charCodeAt(f++),10===n)i=!0;else if(13===n)i=!0,10===t.charCodeAt(f)&&(++f,++a);else if(n!==c)continue;return t.slice(e,f-a)}return t.slice(e)}for(var r,i,o={},u={},a=[],s=t.length,f=0,l=0;(r=e())!==u;){for(var h=[];r!==o&&r!==u;)h.push(r),r=e();n&&null==(h=n(h,l++))||a.push(h)}return a}function r(n,e){return null==e&&(e=Cr(n)),[e.map(u).join(t)].concat(n.map(function(n){return e.map(function(t){return u(n[t])}).join(t)})).join("\n")}function i(t){return t.map(o).join("\n")}function o(n){return n.map(u).join(t)}function u(t){return null==t?"":a.test(t+="")?'"'+t.replace(/\"/g,'""')+'"':t}var a=new RegExp('["'+t+"\n]"),c=t.charCodeAt(0);return{parse:n,parseRows:e,format:r,formatRows:i}}function Pr(t,n){function e(t){var n,e=s.status;if(!e&&Lr(s)||e>=200&&e<300||304===e){if(o)try{n=o.call(r,s)}catch(t){return void a.call("error",r,t)}else n=s;a.call("load",r,n)}else a.call("error",r,t)}var r,i,o,u,a=Mr("beforesend","progress","load","error"),c=q(),s=new XMLHttpRequest,f=null,l=null,h=0;if("undefined"==typeof XDomainRequest||"withCredentials"in s||!/^(http(s)?:)?\/\//.test(t)||(s=new XDomainRequest),"onload"in s?s.onload=s.onerror=s.ontimeout=e:s.onreadystatechange=function(t){s.readyState>3&&e(t)},s.onprogress=function(t){a.call("progress",r,t)},r={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?c.get(t):(null==n?c.remove(t):c.set(t,n+""),r)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",r):i},responseType:function(t){return arguments.length?(u=t,r):u},timeout:function(t){return arguments.length?(h=+t,r):h},user:function(t){return arguments.length<1?f:(f=null==t?null:t+"",r)},password:function(t){return arguments.length<1?l:(l=null==t?null:t+"",r)},response:function(t){return o=t,r},get:function(t,n){return r.send("GET",t,n)},post:function(t,n){return r.send("POST",t,n)},send:function(n,e,o){return s.open(n,t,!0,f,l),null==i||c.has("accept")||c.set("accept",i+",*/*"),s.setRequestHeader&&c.each(function(t,n){s.setRequestHeader(n,t)}),null!=i&&s.overrideMimeType&&s.overrideMimeType(i),null!=u&&(s.responseType=u),h>0&&(s.timeout=h),null==o&&"function"==typeof e&&(o=e,e=null),null!=o&&1===o.length&&(o=qr(o)),null!=o&&r.on("error",o).on("load",function(t){o(null,t)}),a.call("beforesend",r,s),s.send(null==e?null:e),r},abort:function(){return s.abort(),r},on:function(){var t=a.on.apply(a,arguments);return t===a?r:t}},null!=n){if("function"!=typeof n)throw new Error("invalid callback: "+n);return r.get(n)}return r}function qr(t){return function(n,e){t(null==n?e:null)}}function Lr(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}function Rr(t,n){return function(e,r){var i=Pr(e).mimeType(t).response(n);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return i.get(r)}return i}}function Ur(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var o=Pr(e).mimeType(t);return o.row=function(t){return arguments.length?o.response(Dr(n,r=t)):r},o.row(r),i?o.get(i):o}}function Dr(t,n){return function(e){return t(e.responseText,n)}}function Or(){return _y||(my(Fr),_y=gy.now()+yy)}function Fr(){_y=0}function Ir(){this._call=this._time=this._next=null}function Yr(t,n,e){var r=new Ir;return r.restart(t,n,e),r}function Br(){Or(),++ly;for(var t,n=W_;n;)(t=_y-n._time)>=0&&n._call.call(null,t),n=n._next;--ly}function jr(t){_y=(vy=t||gy.now())+yy,ly=hy=0;try{Br()}finally{ly=0,Xr(),_y=0}}function Hr(){var t=gy.now(),n=t-vy;n>dy&&(yy-=n,vy=t)}function Xr(){for(var t,n,e=W_,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:W_=n);$_=t,Vr(r)}function Vr(t){if(!ly){hy&&(hy=clearTimeout(hy));var n=t-_y;n>24?(t<1/0&&(hy=setTimeout(jr,n)),py&&(py=clearInterval(py))):(py||(py=setInterval(Hr,dy)),ly=1,my(jr))}}function Wr(t,n,e){var r=new Ir;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r}function $r(t,n,e){var r=new Ir,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?Or():+e,r.restart(function o(u){u+=i,r.restart(o,i+=n,e),t(u)},n,e),r)}function Zr(t,n,e,r){function i(n){return t(n=new Date((+n))),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date((+t)),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do u.push(new Date((+e)));while(n(e,o),t(e),e<r);return u},i.filter=function(e){return Zr(function(n){for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return xy.setTime(+n),by.setTime(+r),t(xy),t(by),Math.floor(e(xy,by))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t===0}:function(n){return i.count(0,n)%t===0}):i:null}),i}function Gr(t){return Zr(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ky)/Ay})}function Jr(t){return Zr(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/Ay})}function Qr(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function Kr(t){return t=Qr(Math.abs(t)),t?t[1]:NaN}function ti(t,n){return function(e,r){for(var i=e.length,o=[],u=0,a=t[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),o.push(e.substring(i-=a,i+a)),!((c+=a+1)>r));)a=t[u=(u+1)%t.length];return o.reverse().join(n)}}function ni(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,o=-1;i<r;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;case"e":break t;default:o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t}function ei(t,n){var e=Qr(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(Tg=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,u=r.length;return o===u?r:o>u?r+new Array(o-u+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Qr(t,Math.max(0,n+o-1))[0]}function ri(t,n){var e=Qr(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array((-i)).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}function ii(t){return new oi(t)}function oi(t){if(!(n=Sg.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",o=n[4]||"",u=!!n[5],a=n[6]&&+n[6],c=!!n[7],s=n[8]&&+n[8].slice(1),f=n[9]||"";"n"===f?(c=!0,f="g"):Ng[f]||(f=""),(u||"0"===e&&"="===r)&&(u=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=o,this.zero=u,this.width=a,this.comma=c,this.precision=s,this.type=f}function ui(t){return t}function ai(t){function n(t){function n(t){var n,i,c,g=d,m=v;if("c"===p)m=_(t)+m,t="";else{t=+t;var x=(t<0||1/t<0)&&(t*=-1,!0);if(t=_(t,h),x)for(n=-1,i=t.length,x=!1;++n<i;)if(c=t.charCodeAt(n),48<c&&c<58||"x"===p&&96<c&&c<103||"X"===p&&64<c&&c<71){x=!0;break}if(g=(x?"("===a?a:"-":"-"===a||"("===a?"":a)+g,m=m+("s"===p?Eg[8+Tg/3]:"")+(x&&"("===a?")":""),y)for(n=-1,i=t.length;++n<i;)if(c=t.charCodeAt(n),48>c||c>57){m=(46===c?o+t.slice(n+1):t.slice(n))+m,t=t.slice(0,n);break}}l&&!s&&(t=r(t,1/0));var b=g.length+t.length+m.length,w=b<f?new Array(f-b+1).join(e):"";switch(l&&s&&(t=r(w+t,w.length?f-m.length:1/0),w=""),u){case"<":return g+t+m+w;case"=":return g+w+t+m;case"^":return w.slice(0,b=w.length>>1)+g+t+m+w.slice(b)}return w+g+t+m}t=ii(t);var e=t.fill,u=t.align,a=t.sign,c=t.symbol,s=t.zero,f=t.width,l=t.comma,h=t.precision,p=t.type,d="$"===c?i[0]:"#"===c&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",v="$"===c?i[1]:/[%p]/.test(p)?"%":"",_=Ng[p],y=!p||/[defgprs%]/.test(p);return h=null==h?p?6:12:/[gprs]/.test(p)?Math.max(1,Math.min(21,h)):Math.max(0,Math.min(20,h)),n.toString=function(){return t+""},n}function e(t,e){var r=n((t=ii(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(Kr(e)/3))),o=Math.pow(10,-i),u=Eg[8+i/3];return function(t){return r(o*t)+u}}var r=t.grouping&&t.thousands?ti(t.grouping,t.thousands):ui,i=t.currency,o=t.decimal;return{format:n,formatPrefix:e}}function ci(n){return Ag=ai(n),t.format=Ag.format,t.formatPrefix=Ag.formatPrefix,Ag}function si(t){return Math.max(0,-Kr(Math.abs(t)))}function fi(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Kr(n)/3)))-Kr(Math.abs(t)))}function li(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Kr(n)-Kr(t))+1}function hi(t){if(0<=t.y&&t.y<100){var n=new Date((-1),t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function pi(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function di(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function vi(t){function n(t,n){return function(e){var r,i,o,u=[],a=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date((+e)));++a<s;)37===t.charCodeAt(a)&&(u.push(t.slice(c,a)),null!=(i=zg[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),u.push(r),c=a+1);return u.push(t.slice(c,a)),u.join("")}}function e(t,n){return function(e){var i=di(1900),o=r(i,t,e+="",0);if(o!=e.length)return null;if("p"in i&&(i.H=i.H%12+12*i.p),"W"in i||"U"in i){"w"in i||(i.w="W"in i?1:0);var u="Z"in i?pi(di(i.y)).getUTCDay():n(di(i.y)).getDay();i.m=0,i.d="W"in i?(i.w+6)%7+7*i.W-(u+5)%7:i.w+7*i.U-(u+6)%7}return"Z"in i?(i.H+=i.Z/100|0,i.M+=i.Z%100,pi(i)):n(i)}}function r(t,n,e,r){for(var i,o,u=0,a=n.length,c=e.length;u<a;){if(r>=c)return-1;if(i=n.charCodeAt(u++),37===i){if(i=n.charAt(u++),o=B[i in zg?n.charAt(u++):i],!o||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function i(t,n,e){var r=C.exec(n.slice(e));return r?(t.p=z[r[0].toLowerCase()],e+r[0].length):-1}function o(t,n,e){var r=L.exec(n.slice(e));return r?(t.w=R[r[0].toLowerCase()],e+r[0].length):-1}function u(t,n,e){var r=P.exec(n.slice(e));return r?(t.w=q[r[0].toLowerCase()],e+r[0].length):-1}function a(t,n,e){var r=O.exec(n.slice(e));return r?(t.m=F[r[0].toLowerCase()],e+r[0].length):-1}function c(t,n,e){var r=U.exec(n.slice(e));return r?(t.m=D[r[0].toLowerCase()],e+r[0].length):-1}function s(t,n,e){return r(t,w,n,e)}function f(t,n,e){return r(t,M,n,e)}function l(t,n,e){return r(t,T,n,e)}function h(t){return S[t.getDay()]}function p(t){return N[t.getDay()]}function d(t){return E[t.getMonth()]}function v(t){return A[t.getMonth()]}function _(t){return k[+(t.getHours()>=12)]}function y(t){return S[t.getUTCDay()]}function g(t){return N[t.getUTCDay()]}function m(t){return E[t.getUTCMonth()]}function x(t){return A[t.getUTCMonth()]}function b(t){return k[+(t.getUTCHours()>=12)]}var w=t.dateTime,M=t.date,T=t.time,k=t.periods,N=t.days,S=t.shortDays,A=t.months,E=t.shortMonths,C=gi(k),z=mi(k),P=gi(N),q=mi(N),L=gi(S),R=mi(S),U=gi(A),D=mi(A),O=gi(E),F=mi(E),I={a:h,A:p,b:d,B:v,c:null,d:Li,e:Li,H:Ri,I:Ui,j:Di,L:Oi,m:Fi,M:Ii,p:_,S:Yi,U:Bi,w:ji,W:Hi,x:null,X:null,y:Xi,Y:Vi,Z:Wi,"%":co},Y={a:y,A:g,b:m,B:x,c:null,d:$i,e:$i,H:Zi,I:Gi,j:Ji,L:Qi,m:Ki,M:to,p:b,S:no,U:eo,w:ro,W:io,x:null,X:null,y:oo,Y:uo,Z:ao,"%":co},B={a:o,A:u,b:a,B:c,c:s,d:Si,e:Si,H:Ei,I:Ei,j:Ai,L:Pi,m:Ni,M:Ci,p:i,S:zi,U:bi,w:xi,W:wi,x:f,X:l,y:Ti,Y:Mi,Z:ki,"%":qi};return I.x=n(M,I),I.X=n(T,I),I.c=n(w,I),Y.x=n(M,Y),Y.X=n(T,Y),Y.c=n(w,Y),{format:function(t){var e=n(t+="",I);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",hi);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",Y);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,pi);return n.toString=function(){return t},n}}}function _i(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function yi(t){return t.replace(Lg,"\\$&")}function gi(t){return new RegExp("^(?:"+t.map(yi).join("|")+")","i")}function mi(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function xi(t,n,e){var r=Pg.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function bi(t,n,e){var r=Pg.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function wi(t,n,e){var r=Pg.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function Mi(t,n,e){var r=Pg.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function Ti(t,n,e){var r=Pg.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function ki(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function Ni(t,n,e){var r=Pg.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function Si(t,n,e){var r=Pg.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function Ai(t,n,e){var r=Pg.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Ei(t,n,e){var r=Pg.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function Ci(t,n,e){var r=Pg.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function zi(t,n,e){var r=Pg.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function Pi(t,n,e){var r=Pg.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function qi(t,n,e){var r=qg.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function Li(t,n){return _i(t.getDate(),n,2)}function Ri(t,n){return _i(t.getHours(),n,2)}function Ui(t,n){return _i(t.getHours()%12||12,n,2)}function Di(t,n){return _i(1+Ry.count(Ky(t),t),n,3)}function Oi(t,n){return _i(t.getMilliseconds(),n,3)}function Fi(t,n){return _i(t.getMonth()+1,n,2)}function Ii(t,n){return _i(t.getMinutes(),n,2)}function Yi(t,n){return _i(t.getSeconds(),n,2)}function Bi(t,n){return _i(Dy.count(Ky(t),t),n,2)}function ji(t){return t.getDay()}function Hi(t,n){return _i(Oy.count(Ky(t),t),n,2)}function Xi(t,n){return _i(t.getFullYear()%100,n,2)}function Vi(t,n){return _i(t.getFullYear()%1e4,n,4)}function Wi(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+_i(n/60|0,"0",2)+_i(n%60,"0",2)}function $i(t,n){return _i(t.getUTCDate(),n,2)}function Zi(t,n){return _i(t.getUTCHours(),n,2)}function Gi(t,n){return _i(t.getUTCHours()%12||12,n,2)}function Ji(t,n){return _i(1+og.count(Mg(t),t),n,3)}function Qi(t,n){return _i(t.getUTCMilliseconds(),n,3)}function Ki(t,n){return _i(t.getUTCMonth()+1,n,2)}function to(t,n){return _i(t.getUTCMinutes(),n,2)}function no(t,n){return _i(t.getUTCSeconds(),n,2)}function eo(t,n){return _i(ag.count(Mg(t),t),n,2)}function ro(t){return t.getUTCDay()}function io(t,n){return _i(cg.count(Mg(t),t),n,2)}function oo(t,n){return _i(t.getUTCFullYear()%100,n,2)}function uo(t,n){return _i(t.getUTCFullYear()%1e4,n,4)}function ao(){return"+0000"}function co(){return"%"}function so(n){return Cg=vi(n),t.timeFormat=Cg.format,t.timeParse=Cg.parse,t.utcFormat=Cg.utcFormat,t.utcParse=Cg.utcParse,Cg}function fo(t){return t.toISOString()}function lo(t){var n=new Date(t);return isNaN(n)?null:n}function ho(t){function n(n){var o=n+"",u=e.get(o);if(!u){if(i!==Yg)return i;e.set(o,u=r.push(n))}return t[(u-1)%t.length]}var e=q(),r=[],i=Yg;return t=null==t?[]:Ig.call(t),n.domain=function(t){if(!arguments.length)return r.slice();r=[],e=q();for(var i,o,u=-1,a=t.length;++u<a;)e.has(o=(i=t[u])+"")||e.set(o,r.push(i));return n},n.range=function(e){return arguments.length?(t=Ig.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(i=t,n):i},n.copy=function(){return ho().domain(r).range(t).unknown(i)},n}function po(){function t(){var t=i().length,r=u[1]<u[0],h=u[r-0],p=u[1-r];n=(p-h)/Math.max(1,t-c+2*s),a&&(n=Math.floor(n)),h+=(p-h-n*(t-c))*f,e=n*(1-c),a&&(h=Math.round(h),e=Math.round(e));var d=l(t).map(function(t){return h+n*t});return o(r?d.reverse():d)}var n,e,r=ho().unknown(void 0),i=r.domain,o=r.range,u=[0,1],a=!1,c=0,s=0,f=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(u=[+n[0],+n[1]],t()):u.slice()},r.rangeRound=function(n){return u=[+n[0],+n[1]],a=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(a=!!n,t()):a},r.padding=function(n){return arguments.length?(c=s=Math.max(0,Math.min(1,n)),t()):c},r.paddingInner=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.paddingOuter=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s},r.align=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},r.copy=function(){return po().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f)},t()}function vo(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return vo(n())},t}function _o(){return vo(po().paddingInner(1))}function yo(t){return function(){return t}}function go(t){return+t}function mo(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:yo(n)}function xo(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}function bo(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}function wo(t,n,e,r){var i=t[0],o=t[1],u=n[0],a=n[1];return o<i?(i=e(o,i),u=r(a,u)):(i=e(i,o),u=r(u,a)),function(t){return u(i(t))}}function Mo(t,n,e,r){var i=Math.min(t.length,n.length)-1,o=new Array(i),u=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<i;)o[a]=e(t[a],t[a+1]),u[a]=r(n[a],n[a+1]);return function(n){var e=Sd(t,n,1,i)-1;return u[e](o[e](n))}}function To(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function ko(t,n){function e(){return i=Math.min(a.length,c.length)>2?Mo:wo,o=u=null,r}function r(n){return(o||(o=i(a,c,f?xo(t):t,s)))(+n)}var i,o,u,a=Bg,c=Bg,s=cr,f=!1;return r.invert=function(t){return(u||(u=i(c,a,mo,f?bo(n):n)))(+t)},r.domain=function(t){return arguments.length?(a=Fg.call(t,go),e()):a.slice()},r.range=function(t){return arguments.length?(c=Ig.call(t),e()):c.slice()},r.rangeRound=function(t){return c=Ig.call(t),s=sr,e()},r.clamp=function(t){return arguments.length?(f=!!t,e()):f},r.interpolate=function(t){return arguments.length?(s=t,e()):s},e()}function No(n,e,r){var i,o=n[0],u=n[n.length-1],a=p(o,u,null==e?10:e);switch(r=ii(null==r?",f":r),r.type){case"s":var c=Math.max(Math.abs(o),Math.abs(u));return null!=r.precision||isNaN(i=fi(a,c))||(r.precision=i),t.formatPrefix(r,c);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=li(a,Math.max(Math.abs(o),Math.abs(u))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=si(a))||(r.precision=i-2*("%"===r.type))}return t.format(r)}function So(t){var n=t.domain;return t.ticks=function(t){var e=n();return h(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return No(n(),t,e)},t.nice=function(e){var r=n(),i=r.length-1,o=null==e?10:e,u=r[0],a=r[i],c=p(u,a,o);return c&&(c=p(Math.floor(u/c)*c,Math.ceil(a/c)*c,o),r[0]=Math.floor(u/c)*c,r[i]=Math.ceil(a/c)*c,n(r)),t},t}function Ao(){var t=ko(mo,rr);return t.copy=function(){return To(t,Ao())},So(t)}function Eo(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=Fg.call(e,go),t):n.slice()},t.copy=function(){return Eo().domain(n)},So(t)}function Co(t,n){t=t.slice();var e,r=0,i=t.length-1,o=t[r],u=t[i];return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t}function zo(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:yo(n)}function Po(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function qo(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Lo(t){return 10===t?qo:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function Ro(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Uo(t){return function(n){return-t(-n)}}function Do(){function n(){return o=Ro(i),u=Lo(i),r()[0]<0&&(o=Uo(o),u=Uo(u)),e}var e=ko(zo,Po).domain([1,10]),r=e.domain,i=10,o=Ro(10),u=Lo(10);return e.base=function(t){return arguments.length?(i=+t,n()):i},e.domain=function(t){return arguments.length?(r(t),n()):r()},e.ticks=function(t){var n,e=r(),a=e[0],c=e[e.length-1];(n=c<a)&&(p=a,a=c,c=p);var s,f,l,p=o(a),d=o(c),v=null==t?10:+t,_=[];if(!(i%1)&&d-p<v){if(p=Math.round(p)-1,d=Math.round(d)+1,a>0){for(;p<d;++p)for(f=1,s=u(p);f<i;++f)if(l=s*f,!(l<a)){if(l>c)break;_.push(l)}}else for(;p<d;++p)for(f=i-1,s=u(p);f>=1;--f)if(l=s*f,!(l<a)){if(l>c)break;_.push(l)}}else _=h(p,d,Math.min(d-p,v)).map(u);return n?_.reverse():_},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var a=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/u(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=a?r(t):""}},e.nice=function(){return r(Co(r(),{floor:function(t){return u(Math.floor(o(t)))},ceil:function(t){return u(Math.ceil(o(t)))}}))},e.copy=function(){return To(e,Do().base(i))},e}function Oo(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function Fo(){function t(t,n){return(n=Oo(n,e)-(t=Oo(t,e)))?function(r){return(Oo(r,e)-t)/n}:yo(n)}function n(t,n){return n=Oo(n,e)-(t=Oo(t,e)),function(r){return Oo(t+n*r,1/e)}}var e=1,r=ko(t,n),i=r.domain;return r.exponent=function(t){return arguments.length?(e=+t,i(i())):e},r.copy=function(){return To(r,Fo().exponent(e))},So(r)}function Io(){return Fo().exponent(.5)}function Yo(){function t(){var t=0,n=Math.max(1,i.length);for(o=new Array(n-1);++t<n;)o[t-1]=_(r,t/n);return e}function e(t){if(!isNaN(t=+t))return i[Sd(o,t)]}var r=[],i=[],o=[];return e.invertExtent=function(t){var n=i.indexOf(t);return n<0?[NaN,NaN]:[n>0?o[n-1]:r[0],n<o.length?o[n]:r[r.length-1]]},e.domain=function(e){if(!arguments.length)return r.slice();r=[];for(var i,o=0,u=e.length;o<u;++o)i=e[o],null==i||isNaN(i=+i)||r.push(i);return r.sort(n),t()},e.range=function(n){return arguments.length?(i=Ig.call(n),t()):i.slice()},e.quantiles=function(){return o.slice()},e.copy=function(){return Yo().domain(r).range(i)},e}function Bo(){function t(t){if(t<=t)return u[Sd(o,t,0,i)]}function n(){var n=-1;for(o=new Array(i);++n<i;)o[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,o=[.5],u=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(u=Ig.call(t)).length-1,n()):u.slice()},t.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,o[0]]:n>=i?[o[i-1],r]:[o[n-1],o[n]]},t.copy=function(){return Bo().domain([e,r]).range(u)},So(t)}function jo(){function t(t){if(t<=t)return e[Sd(n,t,0,r)]}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=Ig.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=Ig.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return jo().domain(n).range(e)},t}function Ho(t){return new Date(t)}function Xo(t){return t instanceof Date?+t:+new Date((+t))}function Vo(t,n,r,i,o,u,a,c,s){function f(e){return(a(e)<e?_:u(e)<e?y:o(e)<e?g:i(e)<e?m:n(e)<e?r(e)<e?x:b:t(e)<e?w:M)(e)}function l(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var u=Math.abs(i-r)/n,a=e(function(t){return t[2]}).right(T,u);a===T.length?(o=p(r/Zg,i/Zg,n),n=t):a?(a=T[u/T[a-1][2]<T[a][2]/u?a-1:a],o=a[1],n=a[0]):(o=p(r,i,n),n=c)}return null==o?n:n.every(o)}var h=ko(mo,rr),d=h.invert,v=h.domain,_=s(".%L"),y=s(":%S"),g=s("%I:%M"),m=s("%I %p"),x=s("%a %d"),b=s("%b %d"),w=s("%B"),M=s("%Y"),T=[[a,1,jg],[a,5,5*jg],[a,15,15*jg],[a,30,30*jg],[u,1,Hg],[u,5,5*Hg],[u,15,15*Hg],[u,30,30*Hg],[o,1,Xg],[o,3,3*Xg],[o,6,6*Xg],[o,12,12*Xg],[i,1,Vg],[i,2,2*Vg],[r,1,Wg],[n,1,$g],[n,3,3*$g],[t,1,Zg]];return h.invert=function(t){return new Date(d(t))},h.domain=function(t){return arguments.length?v(Fg.call(t,Xo)):v().map(Ho)},h.ticks=function(t,n){var e,r=v(),i=r[0],o=r[r.length-1],u=o<i;return u&&(e=i,i=o,o=e),e=l(t,i,o,n),e=e?e.range(i,o+1):[],u?e.reverse():e},h.tickFormat=function(t,n){return null==n?f:s(n)},h.nice=function(t,n){var e=v();return(t=l(t,e[0],e[e.length-1],n))?v(Co(e,t)):h},h.copy=function(){return To(h,Vo(t,n,r,i,o,u,a,c,s))},h}function Wo(){return Vo(Ky,Jy,Dy,Ry,qy,zy,Ey,wy,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])}function $o(){return Vo(Mg,bg,ag,og,rg,ng,Ey,wy,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])}function Zo(t){return t.match(/.{6}/g).map(function(t){return"#"+t})}function Go(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return rm.h=360*t-100,rm.s=1.5-1.5*n,rm.l=.8-.9*n,rm+""}function Jo(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function Qo(t){function n(n){var o=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,o)):o)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return Qo(t).domain([e,r]).clamp(i)},So(n)}function Ko(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),sm.hasOwnProperty(n)?{space:sm[n],local:t}:t}function tu(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===cm&&n.documentElement.namespaceURI===cm?n.createElement(t):n.createElementNS(e,t)}}function nu(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function eu(t){var n=Ko(t);return(n.local?nu:tu)(n)}function ru(){return new iu}function iu(){this._="@"+(++fm).toString(36)}function ou(t,n,e){return t=uu(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function uu(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function au(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),
t=t.slice(0,e)),{type:t,name:n}})}function cu(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function su(t,n,e){var r=vm.hasOwnProperty(t.type)?ou:uu;return function(i,o,u){var a,c=this.__on,s=r(n,o,u);if(c)for(var f=0,l=c.length;f<l;++f)if((a=c[f]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=s,a.capture=e),void(a.value=n);this.addEventListener(t.type,s,e),a={type:t.type,name:t.name,value:n,listener:s,capture:e},c?c.push(a):this.__on=[a]}}function fu(t,n,e){var r,i,o=au(t+""),u=o.length;{if(!(arguments.length<2)){for(a=n?su:cu,null==e&&(e=!1),r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var c,s=0,f=a.length;s<f;++s)for(r=0,c=a[s];r<u;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value}}function lu(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function hu(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function pu(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function du(t){var n=hu();return n.changedTouches&&(n=n.changedTouches[0]),pu(t,n)}function vu(){}function _u(t){return null==t?vu:function(){return this.querySelector(t)}}function yu(t){"function"!=typeof t&&(t=_u(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],c=a.length,s=r[i]=new Array(c),f=0;f<c;++f)(o=a[f])&&(u=t.call(o,o.__data__,f,a))&&("__data__"in o&&(u.__data__=o.__data__),s[f]=u);return new qa(r,this._parents)}function gu(){return[]}function mu(t){return null==t?gu:function(){return this.querySelectorAll(t)}}function xu(t){"function"!=typeof t&&(t=mu(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],c=a.length,s=0;s<c;++s)(u=a[s])&&(r.push(t.call(u,u.__data__,s,a)),i.push(u));return new qa(r,i)}function bu(t){"function"!=typeof t&&(t=dm(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new qa(r,this._parents)}function wu(t){return new Array(t.length)}function Mu(){return new qa(this._enter||this._groups.map(wu),this._parents)}function Tu(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function ku(t){return function(){return t}}function Nu(t,n,e,r,i,o){for(var u,a=0,c=n.length,s=o.length;a<s;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new Tu(t,o[a]);for(;a<c;++a)(u=n[a])&&(i[a]=u)}function Su(t,n,e,r,i,o,u){var a,c,s,f={},l=n.length,h=o.length,p=new Array(l);for(a=0;a<l;++a)(c=n[a])&&(p[a]=s=ym+u.call(c,c.__data__,a,n),s in f?i[a]=c:f[s]=c);for(a=0;a<h;++a)s=ym+u.call(t,o[a],a,o),(c=f[s])?(r[a]=c,c.__data__=o[a],f[s]=null):e[a]=new Tu(t,o[a]);for(a=0;a<l;++a)(c=n[a])&&f[p[a]]===c&&(i[a]=c)}function Au(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e=n?Su:Nu,r=this._parents,i=this._groups;"function"!=typeof t&&(t=ku(t));for(var o=i.length,u=new Array(o),a=new Array(o),c=new Array(o),s=0;s<o;++s){var f=r[s],l=i[s],h=l.length,p=t.call(f,f&&f.__data__,s,r),d=p.length,v=a[s]=new Array(d),_=u[s]=new Array(d),y=c[s]=new Array(h);e(f,l,v,_,y,p,n);for(var g,m,x=0,b=0;x<d;++x)if(g=v[x]){for(x>=b&&(b=x+1);!(m=_[b])&&++b<d;);g._next=m||null}}return u=new qa(u,r),u._enter=a,u._exit=c,u}function Eu(){return new qa(this._exit||this._groups.map(wu),this._parents)}function Cu(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new qa(u,this._parents)}function zu(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this}function Pu(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=qu);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],c=a.length,s=i[o]=new Array(c),f=0;f<c;++f)(u=a[f])&&(s[f]=u);s.sort(n)}return new qa(i,this._parents).order()}function qu(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function Lu(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Ru(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t}function Uu(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null}function Du(){var t=0;return this.each(function(){++t}),t}function Ou(){return!this.node()}function Fu(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this}function Iu(t){return function(){this.removeAttribute(t)}}function Yu(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Bu(t,n){return function(){this.setAttribute(t,n)}}function ju(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function Hu(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function Xu(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Vu(t,n){var e=Ko(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?Yu:Iu:"function"==typeof n?e.local?Xu:Hu:e.local?ju:Bu)(e,n))}function Wu(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function $u(t){return function(){this.style.removeProperty(t)}}function Zu(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Gu(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Ju(t,n,e){var r;return arguments.length>1?this.each((null==n?$u:"function"==typeof n?Gu:Zu)(t,n,null==e?"":e)):Wu(r=this.node()).getComputedStyle(r,null).getPropertyValue(t)}function Qu(t){return function(){delete this[t]}}function Ku(t,n){return function(){this[t]=n}}function ta(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function na(t,n){return arguments.length>1?this.each((null==n?Qu:"function"==typeof n?ta:Ku)(t,n)):this.node()[t]}function ea(t){return t.trim().split(/^|\s+/)}function ra(t){return t.classList||new ia(t)}function ia(t){this._node=t,this._names=ea(t.getAttribute("class")||"")}function oa(t,n){for(var e=ra(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function ua(t,n){for(var e=ra(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function aa(t){return function(){oa(this,t)}}function ca(t){return function(){ua(this,t)}}function sa(t,n){return function(){(n.apply(this,arguments)?oa:ua)(this,t)}}function fa(t,n){var e=ea(t+"");if(arguments.length<2){for(var r=ra(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?sa:n?aa:ca)(e,n))}function la(){this.textContent=""}function ha(t){return function(){this.textContent=t}}function pa(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function da(t){return arguments.length?this.each(null==t?la:("function"==typeof t?pa:ha)(t)):this.node().textContent}function va(){this.innerHTML=""}function _a(t){return function(){this.innerHTML=t}}function ya(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function ga(t){return arguments.length?this.each(null==t?va:("function"==typeof t?ya:_a)(t)):this.node().innerHTML}function ma(){this.nextSibling&&this.parentNode.appendChild(this)}function xa(){return this.each(ma)}function ba(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function wa(){return this.each(ba)}function Ma(t){var n="function"==typeof t?t:eu(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Ta(){return null}function ka(t,n){var e="function"==typeof t?t:eu(t),r=null==n?Ta:"function"==typeof n?n:_u(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function Na(){var t=this.parentNode;t&&t.removeChild(this)}function Sa(){return this.each(Na)}function Aa(t){return arguments.length?this.property("__data__",t):this.node().__data__}function Ea(t,n,e){var r=Wu(t),i=r.CustomEvent;i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function Ca(t,n){return function(){return Ea(this,t,n)}}function za(t,n){return function(){return Ea(this,t,n.apply(this,arguments))}}function Pa(t,n){return this.each(("function"==typeof n?za:Ca)(t,n))}function qa(t,n){this._groups=t,this._parents=n}function La(){return new qa([[document.documentElement]],gm)}function Ra(t){return"string"==typeof t?new qa([[document.querySelector(t)]],[document.documentElement]):new qa([[t]],gm)}function Ua(t){return"string"==typeof t?new qa([document.querySelectorAll(t)],[document.documentElement]):new qa([null==t?[]:t],gm)}function Da(t,n,e){arguments.length<3&&(e=n,n=hu().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return pu(t,r);return null}function Oa(t,n){null==n&&(n=hu().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=pu(t,n[e]);return i}function Fa(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};ja(t,e,{name:n,index:r,group:i,on:mm,tween:xm,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:bm})}function Ia(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>bm)throw new Error("too late");return e}function Ya(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>Mm)throw new Error("too late");return e}function Ba(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("too late");return e}function ja(t,n,e){function r(t){e.state=wm,e.delay<=t?i(t-e.delay):e.timer.restart(i,e.delay,e.time)}function i(r){var i,c,s,f;for(i in a)f=a[i],f.name===e.name&&(f.state===Tm?(f.state=Nm,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete a[i]):+i<n&&(f.state=Nm,f.timer.stop(),delete a[i]));if(Wr(function(){e.state===Tm&&(e.timer.restart(o,e.delay,e.time),o(r))}),e.state=Mm,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Mm){for(e.state=Tm,u=new Array(s=e.tween.length),i=0,c=-1;i<s;++i)(f=e.tween[i].value.call(t,t.__data__,e.index,e.group))&&(u[++c]=f);u.length=c+1}}function o(r){for(var i=r<e.duration?e.ease.call(null,r/e.duration):(e.state=km,1),o=-1,c=u.length;++o<c;)u[o].call(null,i);if(e.state===km){e.state=Nm,e.timer.stop(),e.on.call("end",t,t.__data__,e.index,e.group);for(o in a)if(+o!==n)return void delete a[n];delete t.__transition}}var u,a=t.__transition;a[n]=e,e.timer=Yr(r,0,e.time)}function Ha(t,n){var e,r,i,o=t.__transition,u=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state===Tm,e.state=Nm,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}}function Xa(t){return this.each(function(){Ha(this,t)})}function Va(t,n){var e,r;return function(){var i=Ya(this,t),o=i.tween;if(o!==e){r=e=o;for(var u=0,a=r.length;u<a;++u)if(r[u].name===n){r=r.slice(),r.splice(u,1);break}}i.tween=r}}function Wa(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Ya(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},c=0,s=i.length;c<s;++c)if(i[c].name===n){i[c]=a;break}c===s&&i.push(a)}o.tween=i}}function $a(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Ba(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?Va:Wa)(e,t,n))}function Za(t,n,e){var r=t._id;return t.each(function(){var t=Ya(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Ba(t,r).value[n]}}function Ga(t,n){var e;return("number"==typeof n?rr:n instanceof be?S_:(e=be(n))?(n=e,S_):ar)(t,n)}function Ja(t){return function(){this.removeAttribute(t)}}function Qa(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ka(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}}function tc(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}function nc(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttribute(t):(u=this.getAttribute(t),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function ec(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttributeNS(t.space,t.local):(u=this.getAttributeNS(t.space,t.local),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function rc(t,n){var e=Ko(t),r="transform"===e?R_:Ga;return this.attrTween(t,"function"==typeof n?(e.local?ec:nc)(e,r,Za(this,"attr."+t,n)):null==n?(e.local?Qa:Ja)(e):(e.local?tc:Ka)(e,r,n))}function ic(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}function oc(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e}function uc(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=Ko(t);return this.tween(e,(r.local?ic:oc)(r,n))}function ac(t,n){return function(){Ia(this,t).delay=+n.apply(this,arguments)}}function cc(t,n){return n=+n,function(){Ia(this,t).delay=n}}function sc(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?ac:cc)(n,t)):Ba(this.node(),n).delay}function fc(t,n){return function(){Ya(this,t).duration=+n.apply(this,arguments)}}function lc(t,n){return n=+n,function(){Ya(this,t).duration=n}}function hc(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?fc:lc)(n,t)):Ba(this.node(),n).duration}function pc(t,n){if("function"!=typeof n)throw new Error;return function(){Ya(this,t).ease=n}}function dc(t){var n=this._id;return arguments.length?this.each(pc(n,t)):Ba(this.node(),n).ease}function vc(t){"function"!=typeof t&&(t=dm(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new Uc(r,this._parents,this._name,this._id)}function _c(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new Uc(u,this._parents,this._name,this._id)}function yc(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}function gc(t,n,e){var r,i,o=yc(n)?Ia:Ya;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}function mc(t,n){var e=this._id;return arguments.length<2?Ba(this.node(),e).on.on(t):this.each(gc(e,t,n))}function xc(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function bc(){return this.on("end.remove",xc(this._id))}function wc(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=_u(t));for(var r=this._groups,i=r.length,o=new Array(i),u=0;u<i;++u)for(var a,c,s=r[u],f=s.length,l=o[u]=new Array(f),h=0;h<f;++h)(a=s[h])&&(c=t.call(a,a.__data__,h,s))&&("__data__"in a&&(c.__data__=a.__data__),l[h]=c,Fa(l[h],n,e,h,l,Ba(a,e)));return new Uc(o,this._parents,n,e)}function Mc(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=mu(t));for(var r=this._groups,i=r.length,o=[],u=[],a=0;a<i;++a)for(var c,s=r[a],f=s.length,l=0;l<f;++l)if(c=s[l]){for(var h,p=t.call(c,c.__data__,l,s),d=Ba(c,e),v=0,_=p.length;v<_;++v)(h=p[v])&&Fa(h,n,e,v,p,d);o.push(p),u.push(c)}return new Uc(o,u,n,e)}function Tc(){return new Sm(this._groups,this._parents)}function kc(t,n){var e,r,i;return function(){var o=Wu(this).getComputedStyle(this,null),u=o.getPropertyValue(t),a=(this.style.removeProperty(t),o.getPropertyValue(t));return u===a?null:u===e&&a===r?i:i=n(e=u,r=a)}}function Nc(t){return function(){this.style.removeProperty(t)}}function Sc(t,n,e){var r,i;return function(){var o=Wu(this).getComputedStyle(this,null).getPropertyValue(t);return o===e?null:o===r?i:i=n(r=o,e)}}function Ac(t,n,e){var r,i,o;return function(){var u=Wu(this).getComputedStyle(this,null),a=u.getPropertyValue(t),c=e(this);return null==c&&(this.style.removeProperty(t),c=u.getPropertyValue(t)),a===c?null:a===r&&c===i?o:o=n(r=a,i=c)}}function Ec(t,n,e){var r="transform"==(t+="")?L_:Ga;return null==n?this.styleTween(t,kc(t,r)).on("end.style."+t,Nc(t)):this.styleTween(t,"function"==typeof n?Ac(t,r,Za(this,"style."+t,n)):Sc(t,r,n),e)}function Cc(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}function zc(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,Cc(t,n,null==e?"":e))}function Pc(t){return function(){this.textContent=t}}function qc(t){return function(){var n=t(this);this.textContent=null==n?"":n}}function Lc(t){return this.tween("text","function"==typeof t?qc(Za(this,"text",t)):Pc(null==t?"":t+""))}function Rc(){for(var t=this._name,n=this._id,e=Oc(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)if(u=a[s]){var f=Ba(u,n);Fa(u,t,e,s,a,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new Uc(r,this._parents,t,e)}function Uc(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Dc(t){return La().transition(t)}function Oc(){return++Am}function Fc(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return Cm.time=Or(),Cm;return e}function Ic(t){var n,e;t instanceof Uc?(n=t._id,t=t._name):(n=Oc(),(e=Cm).time=Or(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)(u=a[s])&&Fa(u,t,n,s,a,e||Fc(u,n));return new Uc(r,this._parents,t,n)}function Yc(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>wm&&e.name===n)return new Uc([[t]],zm,n,(+r))}return null}function Bc(t){return t}function jc(t,n,e){var r=t(e);return"translate("+(isFinite(r)?r:n(e))+",0)"}function Hc(t,n,e){var r=t(e);return"translate(0,"+(isFinite(r)?r:n(e))+")"}function Xc(t){var n=t.bandwidth()/2;return function(e){return t(e)+n}}function Vc(){return!this.__axis}function Wc(t,n){function e(e){var s,f=null==i?n.ticks?n.ticks.apply(n,r):n.domain():i,l=null==o?n.tickFormat?n.tickFormat.apply(n,r):Bc:o,h=Math.max(u,0)+c,p=t===qm||t===Rm?jc:Hc,d=n.range(),v=d[0]+.5,_=d[d.length-1]+.5,y=(n.bandwidth?Xc:Bc)(n.copy()),g=e.selection?e.selection():e,m=g.selectAll(".domain").data([null]),x=g.selectAll(".tick").data(f,n).order(),b=x.exit(),w=x.enter().append("g").attr("class","tick"),M=x.select("line"),T=x.select("text"),k=t===qm||t===Um?-1:1,N=t===Um||t===Lm?(s="x","y"):(s="y","x");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),x=x.merge(w),M=M.merge(w.append("line").attr("stroke","#000").attr(s+"2",k*u).attr(N+"1",.5).attr(N+"2",.5)),T=T.merge(w.append("text").attr("fill","#000").attr(s,k*h).attr(N,.5).attr("dy",t===qm?"0em":t===Rm?".71em":".32em")),e!==g&&(m=m.transition(e),x=x.transition(e),M=M.transition(e),T=T.transition(e),b=b.transition(e).attr("opacity",Dm).attr("transform",function(t){return p(y,this.parentNode.__axis||y,t)}),w.attr("opacity",Dm).attr("transform",function(t){return p(this.parentNode.__axis||y,y,t)})),b.remove(),m.attr("d",t===Um||t==Lm?"M"+k*a+","+v+"H0.5V"+_+"H"+k*a:"M"+v+","+k*a+"V0.5H"+_+"V"+k*a),x.attr("opacity",1).attr("transform",function(t){return p(y,y,t)}),M.attr(s+"2",k*u),T.attr(s,k*h).text(l),g.filter(Vc).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Lm?"start":t===Um?"end":"middle"),g.each(function(){this.__axis=y})}var r=[],i=null,o=null,u=6,a=6,c=3;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return r=Pm.call(arguments),e},e.tickArguments=function(t){return arguments.length?(r=null==t?[]:Pm.call(t),e):r.slice()},e.tickValues=function(t){return arguments.length?(i=null==t?null:Pm.call(t),e):i&&i.slice()},e.tickFormat=function(t){return arguments.length?(o=t,e):o},e.tickSize=function(t){return arguments.length?(u=a=+t,e):u},e.tickSizeInner=function(t){return arguments.length?(u=+t,e):u},e.tickSizeOuter=function(t){return arguments.length?(a=+t,e):a},e.tickPadding=function(t){return arguments.length?(c=+t,e):c},e}function $c(t){return Wc(qm,t)}function Zc(t){return Wc(Lm,t)}function Gc(t){return Wc(Rm,t)}function Jc(t){return Wc(Um,t)}function Qc(t,n){return t.parent===n.parent?1:2}function Kc(t){return t.reduce(ts,0)/t.length}function ts(t,n){return t+n.x}function ns(t){return 1+t.reduce(es,0)}function es(t,n){return Math.max(t,n.y)}function rs(t){for(var n;n=t.children;)t=n[0];return t}function is(t){for(var n;n=t.children;)t=n[n.length-1];return t}function os(){function t(t){var o,u=0;t.eachAfter(function(t){var e=t.children;e?(t.x=Kc(e),t.y=ns(e)):(t.x=o?u+=n(t,o):0,t.y=0,o=t)});var a=rs(t),c=is(t),s=a.x-n(a,c)/2,f=c.x+n(c,a)/2;return t.eachAfter(i?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*r}:function(n){n.x=(n.x-s)/(f-s)*e,n.y=(1-(t.y?n.y/t.y:1))*r})}var n=Qc,e=1,r=1,i=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(i=!1,e=+n[0],r=+n[1],t):i?null:[e,r]},t.nodeSize=function(n){return arguments.length?(i=!0,e=+n[0],r=+n[1],t):i?[e,r]:null},t}function us(t){var n,e,r,i,o=this,u=[o];do for(n=u.reverse(),u=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)u.push(e[r]);while(u.length);return this}function as(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this}function cs(t){for(var n,e,r,i=this,o=[i],u=[];i=o.pop();)if(u.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=u.pop();)t(i);return this}function ss(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})}function fs(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})}function ls(t){for(var n=this,e=hs(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r}function hs(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}function ps(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n}function ds(){var t=[];return this.each(function(n){t.push(n)}),t}function vs(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t}function _s(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n}function ys(t,n){var e,r,i,o,u,a=new ws(t),c=+t.value&&(a.value=t.value),s=[a];for(null==n&&(n=ms);e=s.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(u=i.length))for(e.children=new Array(u),o=u-1;o>=0;--o)s.push(r=e.children[o]=new ws(i[o])),r.parent=e,r.depth=e.depth+1;return a.eachBefore(bs)}function gs(){return ys(this).eachBefore(xs)}function ms(t){return t.children}function xs(t){t.data=t.data.data}function bs(t){var n=0;do t.height=n;while((t=t.parent)&&t.height<++n)}function ws(t){this.data=t,this.depth=this.height=0,this.parent=null}function Ms(t){this._=t,this.next=null}function Ts(t){for(var n,e=(t=t.slice()).length,r=null,i=r;e;){var o=new Ms(t[e-1]);i=i?i.next=o:r=o,t[n]=t[--e]}return{head:r,tail:i}}function ks(t){return Ss(Ts(t),[])}function Ns(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r-n.r;return i*i+1e-6>e*e+r*r}function Ss(t,n){var e,r,i,o=null,u=t.head;switch(n.length){case 1:e=As(n[0]);break;case 2:e=Es(n[0],n[1]);break;case 3:e=Cs(n[0],n[1],n[2])}for(;u;)i=u._,r=u.next,e&&Ns(e,i)?o=u:(o?(t.tail=o,o.next=null):t.head=t.tail=null,n.push(i),e=Ss(t,n),n.pop(),t.head?(u.next=t.head,t.head=u):(u.next=null,t.head=t.tail=u),o=t.tail,o.next=r),u=r;return t.tail=o,e}function As(t){return{x:t.x,y:t.y,r:t.r}}function Es(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,u=n.y,a=n.r,c=o-e,s=u-r,f=a-i,l=Math.sqrt(c*c+s*s);return{x:(e+o+c/l*f)/2,y:(r+u+s/l*f)/2,r:(l+i+a)/2}}function Cs(t,n,e){var r=t.x,i=t.y,o=t.r,u=n.x,a=n.y,c=n.r,s=e.x,f=e.y,l=e.r,h=2*(r-u),p=2*(i-a),d=2*(c-o),v=r*r+i*i-o*o-u*u-a*a+c*c,_=2*(r-s),y=2*(i-f),g=2*(l-o),m=r*r+i*i-o*o-s*s-f*f+l*l,x=_*p-h*y,b=(p*m-y*v)/x-r,w=(y*d-p*g)/x,M=(_*v-h*m)/x-i,T=(h*g-_*d)/x,k=w*w+T*T-1,N=2*(b*w+M*T+o),S=b*b+M*M-o*o,A=(-N-Math.sqrt(N*N-4*k*S))/(2*k);return{x:b+w*A+r,y:M+T*A+i,r:A}}function zs(t,n,e){var r=t.x,i=t.y,o=n.r+e.r,u=t.r+e.r,a=n.x-r,c=n.y-i,s=a*a+c*c;if(s){var f=.5+((u*=u)-(o*=o))/(2*s),l=Math.sqrt(Math.max(0,2*o*(u+s)-(u-=s)*u-o*o))/(2*s);e.x=r+f*a+l*c,e.y=i+f*c-l*a}else e.x=r+u,e.y=i}function Ps(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r+n.r;return i*i>e*e+r*r}function qs(t,n,e){var r=t.x-n,i=t.y-e;return r*r+i*i}function Ls(t){this._=t,this.next=null,this.previous=null}function Rs(t){if(!(i=t.length))return 0;var n,e,r,i;if(n=t[0],n.x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;zs(e,n,r=t[2]);var o,u,a,c,s,f,l,h=n.r*n.r,p=e.r*e.r,d=r.r*r.r,v=h+p+d,_=h*n.x+p*e.x+d*r.x,y=h*n.y+p*e.y+d*r.y;n=new Ls(n),e=new Ls(e),r=new Ls(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(a=3;a<i;++a){if(zs(n._,e._,r=t[a]),r=new Ls(r),(s=n.previous)===(c=e.next)){if(Ps(c._,r._)){n=e,e=c,--a;continue t}}else{f=c._.r,l=s._.r;do if(f<=l){if(Ps(c._,r._)){e=c,n.next=e,e.previous=n,--a;continue t}c=c.next,f+=c._.r}else{if(Ps(s._,r._)){n=s,n.next=e,e.previous=n,--a;continue t}s=s.previous,l+=s._.r}while(c!==s.next)}for(r.previous=n,r.next=e,n.next=e.previous=e=r,v+=d=r._.r*r._.r,_+=d*r._.x,y+=d*r._.y,h=qs(n._,o=_/v,u=y/v);(r=r.next)!==e;)(d=qs(r._,o,u))<h&&(n=r,h=d);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=ks(n),a=0;a<i;++a)n=t[a],n.x-=r.x,n.y-=r.y;return r.r}function Us(t){return Rs(t),t}function Ds(t){return null==t?null:Os(t)}function Os(t){if("function"!=typeof t)throw new Error;return t}function Fs(){return 0}function Is(t){return function(){return t}}function Ys(t){return Math.sqrt(t.value)}function Bs(){function t(t){return t.x=e/2,t.y=r/2,n?t.eachBefore(js(n)).eachAfter(Hs(i,.5)).eachBefore(Xs(1)):t.eachBefore(js(Ys)).eachAfter(Hs(Fs,1)).eachAfter(Hs(i,t.r/Math.min(e,r))).eachBefore(Xs(Math.min(e,r)/(2*t.r))),t}var n=null,e=1,r=1,i=Fs;return t.radius=function(e){return arguments.length?(n=Ds(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i="function"==typeof n?n:Is(+n),t):i},t}function js(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Hs(t,n){return function(e){if(r=e.children){var r,i,o,u=r.length,a=t(e)*n||0;if(a)for(i=0;i<u;++i)r[i].r+=a;if(o=Rs(r),a)for(i=0;i<u;++i)r[i].r-=a;e.r=o+a}}}function Xs(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function Vs(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function Ws(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(r-n)/t.value;++a<c;)o=u[a],o.y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*s}function $s(){function t(t){var u=t.height+1;return t.x0=t.y0=i,t.x1=e,t.y1=r/u,t.eachBefore(n(r,u)),o&&t.eachBefore(Vs),t}function n(t,n){return function(e){e.children&&Ws(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var r=e.x0,o=e.y0,u=e.x1-i,a=e.y1-i;u<r&&(r=u=(r+u)/2),a<o&&(o=a=(o+a)/2),e.x0=r,e.y0=o,e.x1=u,e.y1=a}}var e=1,r=1,i=0,o=!1;return t.round=function(n){return arguments.length?(o=!!n,t):o},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i=+n,t):i},t}function Zs(t){return t.id}function Gs(t){return t.parentId}function Js(){function t(t){var r,i,o,u,a,c,s,f=t.length,l=new Array(f),h={};for(i=0;i<f;++i)r=t[i],a=l[i]=new ws(r),null!=(c=n(r,i,t))&&(c+="")&&(s=Om+(a.id=c),h[s]=s in h?Im:a);for(i=0;i<f;++i)if(a=l[i],c=e(t[i],i,t),null!=c&&(c+="")){if(u=h[Om+c],!u)throw new Error("missing: "+c);if(u===Im)throw new Error("ambiguous: "+c);u.children?u.children.push(a):u.children=[a],a.parent=u}else{if(o)throw new Error("multiple roots");o=a}if(!o)throw new Error("no root");if(o.parent=Fm,o.eachBefore(function(t){t.depth=t.parent.depth+1,--f}).eachBefore(bs),o.parent=null,f>0)throw new Error("cycle");return o}var n=Zs,e=Gs;return t.id=function(e){return arguments.length?(n=Os(e),t):n},t.parentId=function(n){return arguments.length?(e=Os(n),t):e},t}function Qs(t,n){return t.parent===n.parent?1:2}function Ks(t){var n=t.children;return n?n[0]:t.t}function tf(t){var n=t.children;return n?n[n.length-1]:t.t}function nf(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function ef(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)n=i[o],n.z+=e,n.m+=e,e+=n.s+(r+=n.c)}function rf(t,n,e){return t.a.parent===n.parent?t.a:e}function of(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function uf(t){for(var n,e,r,i,o,u=new of(t,0),a=[u];n=a.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)a.push(e=n.children[i]=new of(r[i],i)),e.parent=n;return(u.parent=new of(null,0)).children=[u],u}function af(){function t(t){var r=uf(t);if(r.eachAfter(n),r.parent.m=-r.z,r.eachBefore(e),c)t.eachBefore(i);else{var s=t,f=t,l=t;t.eachBefore(function(t){t.x<s.x&&(s=t),t.x>f.x&&(f=t),t.depth>l.depth&&(l=t)});var h=s===f?1:o(s,f)/2,p=h-s.x,d=u/(f.x+h+p),v=a/(l.depth||1);t.eachBefore(function(t){t.x=(t.x+p)*d,t.y=t.depth*v})}return t}function n(t){var n=t.children,e=t.parent.children,i=t.i?e[t.i-1]:null;if(n){ef(t);var u=(n[0].z+n[n.length-1].z)/2;i?(t.z=i.z+o(t._,i._),t.m=t.z-u):t.z=u}else i&&(t.z=i.z+o(t._,i._));t.parent.A=r(t,i,t.parent.A||e[0])}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function r(t,n,e){if(n){for(var r,i=t,u=t,a=n,c=i.parent.children[0],s=i.m,f=u.m,l=a.m,h=c.m;a=tf(a),i=Ks(i),a&&i;)c=Ks(c),u=tf(u),u.a=t,r=a.z+l-i.z-s+o(a._,i._),r>0&&(nf(rf(a,t,e),t,r),s+=r,f+=r),l+=a.m,s+=i.m,h+=c.m,f+=u.m;a&&!tf(u)&&(u.t=a,u.m+=l-f),i&&!Ks(c)&&(c.t=i,c.m+=s-h,e=t)}return e}function i(t){t.x*=u,t.y=t.depth*a}var o=Qs,u=1,a=1,c=null;return t.separation=function(n){return arguments.length?(o=n,t):o},t.size=function(n){return arguments.length?(c=!1,u=+n[0],a=+n[1],t):c?null:[u,a]},t.nodeSize=function(n){return arguments.length?(c=!0,u=+n[0],a=+n[1],t):c?[u,a]:null},t}function cf(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(i-e)/t.value;++a<c;)o=u[a],o.x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*s}function sf(t,n,e,r,i,o){for(var u,a,c,s,f,l,h,p,d,v,_,y,g=[],m=n.children,x=0,b=m.length,w=n.value;x<b;){for(s=i-e,f=o-r,h=p=l=m[x].value,_=Math.max(f/s,s/f)/(w*t),y=l*l*_,v=Math.max(p/y,y/h),c=x+1;c<b;++c){if(l+=a=m[c].value,a<h&&(h=a),a>p&&(p=a),y=l*l*_,d=Math.max(p/y,y/h),d>v){l-=a;break}v=d}g.push(u={value:l,dice:s<f,children:m.slice(x,c)}),u.dice?Ws(u,e,r,i,w?r+=f*l/w:o):cf(u,e,r,w?e+=s*l/w:i,o),w-=l,x=c}return g}function ff(){function t(t){return t.x0=t.y0=0,t.x1=i,t.y1=o,t.eachBefore(n),u=[0],r&&t.eachBefore(Vs),t}function n(t){var n=u[t.depth],r=t.x0+n,i=t.y0+n,o=t.x1-n,h=t.y1-n;
o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),t.x0=r,t.y0=i,t.x1=o,t.y1=h,t.children&&(n=u[t.depth+1]=a(t)/2,r+=l(t)-n,i+=c(t)-n,o-=s(t)-n,h-=f(t)-n,o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),e(t,r,i,o,h))}var e=Bm,r=!1,i=1,o=1,u=[0],a=Fs,c=Fs,s=Fs,f=Fs,l=Fs;return t.round=function(n){return arguments.length?(r=!!n,t):r},t.size=function(n){return arguments.length?(i=+n[0],o=+n[1],t):[i,o]},t.tile=function(n){return arguments.length?(e=Os(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(a="function"==typeof n?n:Is(+n),t):a},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(c="function"==typeof n?n:Is(+n),t):c},t.paddingRight=function(n){return arguments.length?(s="function"==typeof n?n:Is(+n),t):s},t.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:Is(+n),t):f},t.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:Is(+n),t):l},t}function lf(t,n,e,r,i){function o(t,n,e,r,i,u,a){if(t>=n-1){var s=c[t];return s.x0=r,s.y0=i,s.x1=u,s.y1=a,void 0}for(var l=f[t],h=e/2+l,p=t+1,d=n-1;p<d;){var v=p+d>>>1;f[v]<h?p=v+1:d=v}var _=f[p]-l,y=e-_;if(a-i>u-r){var g=(i*y+a*_)/e;o(t,p,_,r,i,u,g),o(p,n,y,r,g,u,a)}else{var m=(r*y+u*_)/e;o(t,p,_,r,i,m,a),o(p,n,y,m,i,u,a)}}var u,a,c=t.children,s=c.length,f=new Array(s+1);for(f[0]=a=u=0;u<s;++u)f[u+1]=a+=c[u].value;o(0,s,t.value,n,e,r,i)}function hf(t,n,e,r,i){(1&t.depth?cf:Ws)(t,n,e,r,i)}function pf(t,n){function e(){var e,i,o=r.length,u=0,a=0;for(e=0;e<o;++e)i=r[e],u+=i.x,a+=i.y;for(u=u/o-t,a=a/o-n,e=0;e<o;++e)i=r[e],i.x-=u,i.y-=a}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e}function df(t){return function(){return t}}function vf(){return 1e-6*(Math.random()-.5)}function _f(t){return t.x+t.vx}function yf(t){return t.y+t.vy}function gf(t){function n(){function t(t,e,r,i,u){var a=t.data,p=t.r,d=l+p;{if(!a)return e>s+d||i<s-d||r>f+d||u<f-d;if(a.index>n){var v=s-a.x-a.vx,_=f-a.y-a.vy,y=v*v+_*_;y<d*d&&(0===v&&(v=vf(),y+=v*v),0===_&&(_=vf(),y+=_*_),y=(d-(y=Math.sqrt(y)))/y*o,c.vx+=(v*=y)*(d=(p*=p)/(h+p)),c.vy+=(_*=y)*d,a.vx-=v*(d=1-d),a.vy-=_*d)}}}for(var n,a,c,s,f,l,h,p=r.length,d=0;d<u;++d)for(a=jt(r,_f,yf).visitAfter(e),n=0;n<p;++n)c=r[n],l=i[n],h=l*l,s=c.x+c.vx,f=c.y+c.vy,a.visit(t)}function e(t){if(t.data)return t.r=i[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}var r,i,o=1,u=1;return"function"!=typeof t&&(t=df(null==t?1:+t)),n.initialize=function(n){var e,o=(r=n).length;for(i=new Array(o),e=0;e<o;++e)i[e]=+t(r[e],e,r)},n.iterations=function(t){return arguments.length?(u=+t,n):u},n.strength=function(t){return arguments.length?(o=+t,n):o},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:df(+e),n):t},n}function mf(t,n){return n}function xf(t){function n(t){return 1/Math.min(s[t.source.index],s[t.target.index])}function e(n){for(var e=0,r=t.length;e<d;++e)for(var i,o,c,s,l,h,p,v=0;v<r;++v)i=t[v],o=i.source,c=i.target,s=c.x+c.vx-o.x-o.vx||vf(),l=c.y+c.vy-o.y-o.vy||vf(),h=Math.sqrt(s*s+l*l),h=(h-a[v])/h*n*u[v],s*=h,l*=h,c.vx-=s*(p=f[v]),c.vy-=l*p,o.vx+=s*(p=1-p),o.vy+=l*p}function r(){if(c){var n,e,r=c.length,h=t.length,p=q(c,l);for(n=0,s=new Array(r);n<r;++n)s[n]=0;for(n=0;n<h;++n)e=t[n],e.index=n,"object"!=typeof e.source&&(e.source=p.get(e.source)),"object"!=typeof e.target&&(e.target=p.get(e.target)),++s[e.source.index],++s[e.target.index];for(n=0,f=new Array(h);n<h;++n)e=t[n],f[n]=s[e.source.index]/(s[e.source.index]+s[e.target.index]);u=new Array(h),i(),a=new Array(h),o()}}function i(){if(c)for(var n=0,e=t.length;n<e;++n)u[n]=+h(t[n],n,t)}function o(){if(c)for(var n=0,e=t.length;n<e;++n)a[n]=+p(t[n],n,t)}var u,a,c,s,f,l=mf,h=n,p=df(30),d=1;return null==t&&(t=[]),e.initialize=function(t){c=t,r()},e.links=function(n){return arguments.length?(t=n,r(),e):t},e.id=function(t){return arguments.length?(l=t,e):l},e.iterations=function(t){return arguments.length?(d=+t,e):d},e.strength=function(t){return arguments.length?(h="function"==typeof t?t:df(+t),i(),e):h},e.distance=function(t){return arguments.length?(p="function"==typeof t?t:df(+t),o(),e):p},e}function bf(t){return t.x}function wf(t){return t.y}function Mf(t){function n(){e(),p.call("tick",o),u<a&&(h.stop(),p.call("end",o))}function e(){var n,e,r=t.length;for(u+=(s-u)*c,l.each(function(t){t(u)}),n=0;n<r;++n)e=t[n],null==e.fx?e.x+=e.vx*=f:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=f:(e.y=e.fy,e.vy=0)}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=Hm*Math.sqrt(e),o=e*Xm;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function i(n){return n.initialize&&n.initialize(t),n}var o,u=1,a=.001,c=1-Math.pow(a,1/300),s=0,f=.6,l=q(),h=Yr(n),p=Mr("tick","end");return null==t&&(t=[]),r(),o={tick:e,restart:function(){return h.restart(n),o},stop:function(){return h.stop(),o},nodes:function(n){return arguments.length?(t=n,r(),l.each(i),o):t},alpha:function(t){return arguments.length?(u=+t,o):u},alphaMin:function(t){return arguments.length?(a=+t,o):a},alphaDecay:function(t){return arguments.length?(c=+t,o):+c},alphaTarget:function(t){return arguments.length?(s=+t,o):s},velocityDecay:function(t){return arguments.length?(f=1-t,o):1-f},force:function(t,n){return arguments.length>1?(null==n?l.remove(t):l.set(t,i(n)),o):l.get(t)},find:function(n,e,r){var i,o,u,a,c,s=0,f=t.length;for(null==r?r=1/0:r*=r,s=0;s<f;++s)a=t[s],i=n-a.x,o=e-a.y,u=i*i+o*o,u<r&&(c=a,r=u);return c},on:function(t,n){return arguments.length>1?(p.on(t,n),o):p.on(t)}}}function Tf(){function t(t){var n,a=i.length,c=jt(i,bf,wf).visitAfter(e);for(u=t,n=0;n<a;++n)o=i[n],c.visit(r)}function n(){if(i){var t,n=i.length;for(a=new Array(n),t=0;t<n;++t)a[t]=+c(i[t],t,i)}}function e(t){var n,e,r,i,o,u=0;if(t.length){for(r=i=o=0;o<4;++o)(n=t[o])&&(e=n.value)&&(u+=e,r+=e*n.x,i+=e*n.y);t.x=r/u,t.y=i/u}else{n=t,n.x=n.data.x,n.y=n.data.y;do u+=a[n.data.index];while(n=n.next)}t.value=u}function r(t,n,e,r){if(!t.value)return!0;var i=t.x-o.x,c=t.y-o.y,h=r-n,p=i*i+c*c;if(h*h/l<p)return p<f&&(0===i&&(i=vf(),p+=i*i),0===c&&(c=vf(),p+=c*c),p<s&&(p=Math.sqrt(s*p)),o.vx+=i*t.value*u/p,o.vy+=c*t.value*u/p),!0;if(!(t.length||p>=f)){(t.data!==o||t.next)&&(0===i&&(i=vf(),p+=i*i),0===c&&(c=vf(),p+=c*c),p<s&&(p=Math.sqrt(s*p)));do t.data!==o&&(h=a[t.data.index]*u/p,o.vx+=i*h,o.vy+=c*h);while(t=t.next)}}var i,o,u,a,c=df(-30),s=1,f=1/0,l=.81;return t.initialize=function(t){i=t,n()},t.strength=function(e){return arguments.length?(c="function"==typeof e?e:df(+e),n(),t):c},t.distanceMin=function(n){return arguments.length?(s=n*n,t):Math.sqrt(s)},t.distanceMax=function(n){return arguments.length?(f=n*n,t):Math.sqrt(f)},t.theta=function(n){return arguments.length?(l=n*n,t):Math.sqrt(l)},t}function kf(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vx+=(o[e]-n.x)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=df(.1);return"function"!=typeof t&&(t=df(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:df(+t),e(),n):u},n.x=function(r){return arguments.length?(t="function"==typeof r?r:df(+r),e(),n):t},n}function Nf(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vy+=(o[e]-n.y)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=df(.1);return"function"!=typeof t&&(t=df(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:df(+t),e(),n):u},n.y=function(r){return arguments.length?(t="function"==typeof r?r:df(+r),e(),n):t},n}function Sf(){t.event.stopImmediatePropagation()}function Af(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Ef(t){var n=t.document.documentElement,e=Ra(t).on("dragstart.drag",Af,!0);"onselectstart"in n?e.on("selectstart.drag",Af,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function Cf(t,n){var e=t.document.documentElement,r=Ra(t).on("dragstart.drag",null);n&&(r.on("click.drag",Af,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function zf(t){return function(){return t}}function Pf(t,n,e,r,i,o,u,a,c,s){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=u,this.dx=a,this.dy=c,this._=s}function qf(){return!t.event.button}function Lf(){return this.parentNode}function Rf(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Uf(){function n(t){t.on("mousedown.drag",e).on("touchstart.drag",o).on("touchmove.drag",u).on("touchend.drag touchcancel.drag",a).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(){if(!f&&l.apply(this,arguments)){var n=c("mouse",h.apply(this,arguments),du,this,arguments);n&&(Ra(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",i,!0),Ef(t.event.view),Sf(),s=!1,n("start"))}}function r(){Af(),s=!0,d.mouse("drag")}function i(){Ra(t.event.view).on("mousemove.drag mouseup.drag",null),Cf(t.event.view,s),Af(),d.mouse("end")}function o(){if(l.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=h.apply(this,arguments),o=r.length;for(n=0;n<o;++n)(e=c(r[n].identifier,i,Da,this,arguments))&&(Sf(),e("start"))}}function u(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=d[r[n].identifier])&&(Af(),e("drag"))}function a(){var n,e,r=t.event.changedTouches,i=r.length;for(f&&clearTimeout(f),f=setTimeout(function(){f=null},500),n=0;n<i;++n)(e=d[r[n].identifier])&&(Sf(),e("end"))}function c(e,r,i,o,u){var a,c,s,f=i(r,e),l=v.copy();if(lu(new Pf(n,"beforestart",a,e,_,f[0],f[1],0,0,l),function(){return null!=(t.event.subject=a=p.apply(o,u))&&(c=a.x-f[0]||0,s=a.y-f[1]||0,!0)}))return function t(h){var p,v=f;switch(h){case"start":d[e]=t,p=_++;break;case"end":delete d[e],--_;case"drag":f=i(r,e),p=_}lu(new Pf(n,h,a,e,p,f[0]+c,f[1]+s,f[0]-v[0],f[1]-v[1],l),l.apply,l,[h,o,u])}}var s,f,l=qf,h=Lf,p=Rf,d={},v=Mr("start","drag","end"),_=0;return n.filter=function(t){return arguments.length?(l="function"==typeof t?t:zf(!!t),n):l},n.container=function(t){return arguments.length?(h="function"==typeof t?t:zf(t),n):h},n.subject=function(t){return arguments.length?(p="function"==typeof t?t:zf(t),n):p},n.on=function(){var t=v.on.apply(v,arguments);return t===v?n:t},n}function Df(t){return function(){return t}}function Of(t){return t[0]}function Ff(t){return t[1]}function If(){this._=null}function Yf(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function Bf(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function jf(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Hf(t){for(;t.L;)t=t.L;return t}function Xf(t,n,e,r){var i=[null,null],o=Gm.push(i)-1;return i.left=t,i.right=n,e&&Wf(i,t,n,e),r&&Wf(i,n,t,r),$m[t.index].halfedges.push(o),$m[n.index].halfedges.push(o),i}function Vf(t,n,e){var r=[n,e];return r.left=t,r}function Wf(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function $f(t,n,e,r,i){var o,u=t[0],a=t[1],c=u[0],s=u[1],f=a[0],l=a[1],h=0,p=1,d=f-c,v=l-s;if(o=n-c,d||!(o>0)){if(o/=d,d<0){if(o<h)return;o<p&&(p=o)}else if(d>0){if(o>p)return;o>h&&(h=o)}if(o=r-c,d||!(o<0)){if(o/=d,d<0){if(o>p)return;o>h&&(h=o)}else if(d>0){if(o<h)return;o<p&&(p=o)}if(o=e-s,v||!(o>0)){if(o/=v,v<0){if(o<h)return;o<p&&(p=o)}else if(v>0){if(o>p)return;o>h&&(h=o)}if(o=i-s,v||!(o<0)){if(o/=v,v<0){if(o>p)return;o>h&&(h=o)}else if(v>0){if(o<h)return;o<p&&(p=o)}return!(h>0||p<1)||(h>0&&(t[0]=[c+h*d,s+h*v]),p<1&&(t[1]=[c+p*d,s+p*v]),!0)}}}}}function Zf(t,n,e,r,i){var o=t[1];if(o)return!0;var u,a,c=t[0],s=t.left,f=t.right,l=s[0],h=s[1],p=f[0],d=f[1],v=(l+p)/2,_=(h+d)/2;if(d===h){if(v<n||v>=r)return;if(l>p){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=(l-p)/(d-h),a=_-u*v,u<-1||u>1)if(l>p){if(c){if(c[1]>=i)return}else c=[(e-a)/u,e];o=[(i-a)/u,i]}else{if(c){if(c[1]<e)return}else c=[(i-a)/u,i];o=[(e-a)/u,e]}else if(h<d){if(c){if(c[0]>=r)return}else c=[n,u*n+a];o=[r,u*r+a]}else{if(c){if(c[0]<n)return}else c=[r,u*r+a];o=[n,u*n+a]}return t[0]=c,t[1]=o,!0}function Gf(t,n,e,r){for(var i,o=Gm.length;o--;)Zf(i=Gm[o],t,n,e,r)&&$f(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>Km||Math.abs(i[0][1]-i[1][1])>Km)||delete Gm[o]}function Jf(t){return $m[t.index]={site:t,halfedges:[]}}function Qf(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function Kf(t,n){return n[+(n.left!==t.site)]}function tl(t,n){return n[+(n.left===t.site)]}function nl(){for(var t,n,e,r,i=0,o=$m.length;i<o;++i)if((t=$m[i])&&(r=(n=t.halfedges).length)){var u=new Array(r),a=new Array(r);for(e=0;e<r;++e)u[e]=e,a[e]=Qf(t,Gm[n[e]]);for(u.sort(function(t,n){return a[n]-a[t]}),e=0;e<r;++e)a[e]=n[u[e]];for(e=0;e<r;++e)n[e]=a[e]}}function el(t,n,e,r){var i,o,u,a,c,s,f,l,h,p,d,v,_=$m.length,y=!0;for(i=0;i<_;++i)if(o=$m[i]){for(u=o.site,c=o.halfedges,a=c.length;a--;)Gm[c[a]]||c.splice(a,1);for(a=0,s=c.length;a<s;)p=tl(o,Gm[c[a]]),d=p[0],v=p[1],f=Kf(o,Gm[c[++a%s]]),l=f[0],h=f[1],(Math.abs(d-l)>Km||Math.abs(v-h)>Km)&&(c.splice(a,0,Gm.push(Vf(u,p,Math.abs(d-t)<Km&&r-v>Km?[t,Math.abs(l-t)<Km?h:r]:Math.abs(v-r)<Km&&e-d>Km?[Math.abs(h-r)<Km?l:e,r]:Math.abs(d-e)<Km&&v-n>Km?[e,Math.abs(l-e)<Km?h:n]:Math.abs(v-n)<Km&&d-t>Km?[Math.abs(h-n)<Km?l:t,n]:null))-1),++s);s&&(y=!1)}if(y){var g,m,x,b=1/0;for(i=0,y=null;i<_;++i)(o=$m[i])&&(u=o.site,g=u[0]-t,m=u[1]-n,x=g*g+m*m,x<b&&(b=x,y=o));if(y){var w=[t,n],M=[t,r],T=[e,r],k=[e,n];y.halfedges.push(Gm.push(Vf(u=y.site,w,M))-1,Gm.push(Vf(u,M,T))-1,Gm.push(Vf(u,T,k))-1,Gm.push(Vf(u,k,w))-1)}}for(i=0;i<_;++i)(o=$m[i])&&(o.halfedges.length||delete $m[i])}function rl(){Yf(this),this.x=this.y=this.arc=this.site=this.cy=null}function il(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var u=i[0],a=i[1],c=r[0]-u,s=r[1]-a,f=o[0]-u,l=o[1]-a,h=2*(c*l-s*f);if(!(h>=-tx)){var p=c*c+s*s,d=f*f+l*l,v=(l*p-s*d)/h,_=(c*d-f*p)/h,y=Jm.pop()||new rl;y.arc=t,y.site=i,y.x=v+u,y.y=(y.cy=_+a)+Math.sqrt(v*v+_*_),t.circle=y;for(var g=null,m=Zm._;m;)if(y.y<m.y||y.y===m.y&&y.x<=m.x){if(!m.L){g=m.P;break}m=m.L}else{if(!m.R){g=m;break}m=m.R}Zm.insert(g,y),g||(Vm=y)}}}}function ol(t){var n=t.circle;n&&(n.P||(Vm=n.N),Zm.remove(n),Jm.push(n),Yf(n),t.circle=null)}function ul(){Yf(this),this.edge=this.site=this.circle=null}function al(t){var n=Qm.pop()||new ul;return n.site=t,n}function cl(t){ol(t),Wm.remove(t),Qm.push(t),Yf(t)}function sl(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,u=t.N,a=[t];cl(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<Km&&Math.abs(r-c.circle.cy)<Km;)o=c.P,a.unshift(c),cl(c),c=o;a.unshift(c),ol(c);for(var s=u;s.circle&&Math.abs(e-s.circle.x)<Km&&Math.abs(r-s.circle.cy)<Km;)u=s.N,a.push(s),cl(s),s=u;a.push(s),ol(s);var f,l=a.length;for(f=1;f<l;++f)s=a[f],c=a[f-1],Wf(s.edge,c.site,s.site,i);c=a[0],s=a[l-1],s.edge=Xf(c.site,s.site,null,i),il(c),il(s)}function fl(t){for(var n,e,r,i,o=t[0],u=t[1],a=Wm._;a;)if(r=ll(a,u)-o,r>Km)a=a.L;else{if(i=o-hl(a,u),!(i>Km)){r>-Km?(n=a.P,e=a):i>-Km?(n=a,e=a.N):n=e=a;break}if(!a.R){n=a;break}a=a.R}Jf(t);var c=al(t);if(Wm.insert(n,c),n||e){if(n===e)return ol(n),e=al(n.site),Wm.insert(c,e),c.edge=e.edge=Xf(n.site,c.site),il(n),void il(e);if(!e)return void(c.edge=Xf(n.site,c.site));ol(n),ol(e);var s=n.site,f=s[0],l=s[1],h=t[0]-f,p=t[1]-l,d=e.site,v=d[0]-f,_=d[1]-l,y=2*(h*_-p*v),g=h*h+p*p,m=v*v+_*_,x=[(_*g-p*m)/y+f,(h*m-v*g)/y+l];Wf(e.edge,s,d,x),c.edge=Xf(s,t,null,x),e.edge=Xf(t,d,null,x),il(n),il(e)}}function ll(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var u=t.P;if(!u)return-(1/0);e=u.site;var a=e[0],c=e[1],s=c-n;if(!s)return a;var f=a-r,l=1/o-1/s,h=f/s;return l?(-h+Math.sqrt(h*h-2*l*(f*f/(-2*s)-c+s/2+i-o/2)))/l+r:(r+a)/2}function hl(t,n){var e=t.N;if(e)return ll(e,n);var r=t.site;return r[1]===n?r[0]:1/0}function pl(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function dl(t,n){return n[1]-t[1]||n[0]-t[0]}function vl(t,n){var e,r,i,o=t.sort(dl).pop();for(Gm=[],$m=new Array(t.length),Wm=new If,Zm=new If;;)if(i=Vm,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(fl(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;sl(i.arc)}if(nl(),n){var u=+n[0][0],a=+n[0][1],c=+n[1][0],s=+n[1][1];Gf(u,a,c,s),el(u,a,c,s)}this.edges=Gm,this.cells=$m,Wm=Zm=Gm=$m=null}function _l(){function t(t){return new vl(t.map(function(r,i){var o=[Math.round(n(r,i,t)/Km)*Km,Math.round(e(r,i,t)/Km)*Km];return o.index=i,o.data=r,o}),r)}var n=Of,e=Ff,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:Df(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:Df(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t}function yl(t){return function(){return t}}function gl(t,n,e){this.target=t,this.type=n,this.transform=e}function ml(t,n,e){this.k=t,this.x=n,this.y=e}function xl(t){return t.__zoom||nx}function bl(){t.event.stopImmediatePropagation()}function wl(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Ml(){return!t.event.button}function Tl(){var t,n,e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,t=e.width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function kl(){return this.__zoom||nx}function Nl(){function n(t){t.on("wheel.zoom",s).on("mousedown.zoom",f).on("dblclick.zoom",l).on("touchstart.zoom",h).on("touchmove.zoom",p).on("touchend.zoom touchcancel.zoom",d).style("-webkit-tap-highlight-color","rgba(0,0,0,0)").property("__zoom",kl)}function e(t,n){return n=Math.max(m,Math.min(x,n)),n===t.k?t:new ml(n,t.x,t.y)}function r(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new ml(t.k,r,i)}function i(t,n){var e=Math.min(0,t.invertX(n[0][0])-b)||Math.max(0,t.invertX(n[1][0])-w),r=Math.min(0,t.invertY(n[0][1])-M)||Math.max(0,t.invertY(n[1][1])-T);return e||r?t.translate(e,r):t}function o(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function u(t,n,e){t.on("start.zoom",function(){a(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){a(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,i=a(t,r),u=g.apply(t,r),c=e||o(u),s=Math.max(u[1][0]-u[0][0],u[1][1]-u[0][1]),f=t.__zoom,l="function"==typeof n?n.apply(t,r):n,h=yr(f.invert(c).concat(s/f.k),l.invert(c).concat(s/l.k));return function(t){if(1===t)t=l;else{var n=h(t),e=s/n[2];t=new ml(e,c[0]-n[0]*e,c[1]-n[1]*e)}i.zoom(null,t)}})}function a(t,n){for(var e,r=0,i=N.length;r<i;++r)if((e=N[r]).that===t)return e;return new c(t,n)}function c(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=g.apply(t,n)}function s(){function n(){o.wheel=null,o.end()}if(y.apply(this,arguments)){var o=a(this,arguments),u=this.__zoom,c=Math.max(m,Math.min(x,u.k*Math.pow(2,-t.event.deltaY*(t.event.deltaMode?120:1)/500))),s=du(this);if(o.wheel)o.mouse[0][0]===s[0]&&o.mouse[0][1]===s[1]||(o.mouse[1]=u.invert(o.mouse[0]=s)),clearTimeout(o.wheel);else{if(u.k===c)return;o.mouse=[s,u.invert(s)],Ha(this),o.start()}wl(),o.wheel=setTimeout(n,E),o.zoom("mouse",i(r(e(u,c),o.mouse[0],o.mouse[1]),o.extent))}}function f(){function n(){wl(),o.moved=!0,o.zoom("mouse",i(r(o.that.__zoom,o.mouse[0]=du(o.that),o.mouse[1]),o.extent))}function e(){u.on("mousemove.zoom mouseup.zoom",null),Cf(t.event.view,o.moved),wl(),o.end()}if(!_&&y.apply(this,arguments)){var o=a(this,arguments),u=Ra(t.event.view).on("mousemove.zoom",n,!0).on("mouseup.zoom",e,!0),c=du(this);Ef(t.event.view),bl(),o.mouse=[c,this.__zoom.invert(c)],Ha(this),o.start()}}function l(){if(y.apply(this,arguments)){var o=this.__zoom,a=du(this),c=o.invert(a),s=o.k*(t.event.shiftKey?.5:2),f=i(r(e(o,s),a,c),g.apply(this,arguments));wl(),k>0?Ra(this).transition().duration(k).call(u,f,a):Ra(this).call(n.transform,f)}}function h(){if(y.apply(this,arguments)){var n,e,r,i=a(this,arguments),o=t.event.changedTouches,u=o.length;for(bl(),n=0;n<u;++n)e=o[n],r=Da(this,o,e.identifier),r=[r,this.__zoom.invert(r),e.identifier],i.touch0?i.touch1||(i.touch1=r):i.touch0=r;return v&&(v=clearTimeout(v),!i.touch1)?(i.end(),l.apply(this,arguments)):void(t.event.touches.length===u&&(v=setTimeout(function(){v=null},A),Ha(this),i.start()))}}function p(){var n,o,u,c,s=a(this,arguments),f=t.event.changedTouches,l=f.length;for(wl(),v&&(v=clearTimeout(v)),n=0;n<l;++n)o=f[n],u=Da(this,f,o.identifier),s.touch0&&s.touch0[2]===o.identifier?s.touch0[0]=u:s.touch1&&s.touch1[2]===o.identifier&&(s.touch1[0]=u);if(o=s.that.__zoom,s.touch1){var h=s.touch0[0],p=s.touch0[1],d=s.touch1[0],_=s.touch1[1],y=(y=d[0]-h[0])*y+(y=d[1]-h[1])*y,g=(g=_[0]-p[0])*g+(g=_[1]-p[1])*g;o=e(o,Math.sqrt(y/g)),u=[(h[0]+d[0])/2,(h[1]+d[1])/2],c=[(p[0]+_[0])/2,(p[1]+_[1])/2]}else{if(!s.touch0)return;u=s.touch0[0],c=s.touch0[1]}s.zoom("touch",i(r(o,u,c),s.extent))}function d(){var n,e,r=a(this,arguments),i=t.event.changedTouches,o=i.length;for(bl(),_&&clearTimeout(_),_=setTimeout(function(){_=null},A),n=0;n<o;++n)e=i[n],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0||r.end()}var v,_,y=Ml,g=Tl,m=0,x=1/0,b=-x,w=x,M=b,T=w,k=250,N=[],S=Mr("start","zoom","end"),A=500,E=150;return n.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",kl),t!==e?u(t,n):e.interrupt().each(function(){a(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},n.scaleBy=function(t,e){n.scaleTo(t,function(){var t=this.__zoom.k,n="function"==typeof e?e.apply(this,arguments):e;return t*n})},n.scaleTo=function(t,u){n.transform(t,function(){var t=g.apply(this,arguments),n=this.__zoom,a=o(t),c=n.invert(a),s="function"==typeof u?u.apply(this,arguments):u;return i(r(e(n,s),a,c),t)})},n.translateBy=function(t,e,r){n.transform(t,function(){return i(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),g.apply(this,arguments))})},c.prototype={start:function(){return 1===++this.active&&(this.index=N.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0===--this.active&&(N.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){lu(new gl(n,t,this.that.__zoom),S.apply,S,[t,this.that,this.args])}},n.filter=function(t){return arguments.length?(y="function"==typeof t?t:yl(!!t),n):y},n.extent=function(t){return arguments.length?(g="function"==typeof t?t:yl([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):g},n.scaleExtent=function(t){return arguments.length?(m=+t[0],x=+t[1],n):[m,x]},n.translateExtent=function(t){return arguments.length?(b=+t[0][0],w=+t[1][0],M=+t[0][1],T=+t[1][1],n):[[b,M],[w,T]]},n.duration=function(t){return arguments.length?(k=+t,n):k},n.on=function(){var t=S.on.apply(S,arguments);return t===S?n:t},n}function Sl(t){return function(){return t}}function Al(t,n,e){this.target=t,this.type=n,this.selection=e}function El(){t.event.stopImmediatePropagation()}function Cl(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function zl(t){return{type:t}}function Pl(){return!t.event.button}function ql(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Ll(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Rl(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Ul(t){var n=t.__brush;return n?n.dim.output(n.selection):null}function Dl(){return Il(ux)}function Ol(){return Il(ax)}function Fl(){return Il(cx)}function Il(n){function e(t){var e=t.property("__brush",a).selectAll(".overlay").data([zl("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",sx.overlay).merge(e).each(function(){var t=Ll(this).extent;Ra(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([zl("selection")]).enter().append("rect").attr("class","selection").attr("cursor",sx.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var i=t.selectAll(".handle").data(n.handles,function(t){return t.type});i.exit().remove(),i.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return sx[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",u)}function r(){var t=Ra(this),n=Ll(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-h/2:n[0][0]-h/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-h/2:n[0][1]-h/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+h:h}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+h:h})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function i(t,n){return t.__brush.emitter||new o(t,n)}function o(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function u(){function e(){var t=du(T);!U||w||M||(Math.abs(t[0]-O[0])>Math.abs(t[1]-O[1])?M=!0:w=!0),O=t,b=!0,Cl(),o()}function o(){var t;switch(m=O[0]-D[0],x=O[1]-D[1],N){case rx:case ex:S&&(m=Math.max(P-l,Math.min(L-v,m)),h=l+m,_=v+m),A&&(x=Math.max(q-p,Math.min(R-y,x)),d=p+x,g=y+x);break;case ix:S<0?(m=Math.max(P-l,Math.min(L-l,m)),h=l+m,_=v):S>0&&(m=Math.max(P-v,Math.min(L-v,m)),h=l,_=v+m),A<0?(x=Math.max(q-p,Math.min(R-p,x)),d=p+x,g=y):A>0&&(x=Math.max(q-y,Math.min(R-y,x)),d=p,g=y+x);break;case ox:S&&(h=Math.max(P,Math.min(L,l-m*S)),_=Math.max(P,Math.min(L,v+m*S))),A&&(d=Math.max(q,Math.min(R,p-x*A)),g=Math.max(q,Math.min(R,y+x*A)))}_<h&&(S*=-1,t=l,l=v,v=t,t=h,h=_,_=t,k in fx&&Y.attr("cursor",sx[k=fx[k]])),g<d&&(A*=-1,t=p,p=y,y=t,t=d,d=g,g=t,k in lx&&Y.attr("cursor",sx[k=lx[k]])),z=E.selection,w&&(h=z[0][0],_=z[1][0]),M&&(d=z[0][1],g=z[1][1]),z[0][0]===h&&z[0][1]===d&&z[1][0]===_&&z[1][1]===g||(E.selection=[[h,d],[_,g]],r.call(T),F.brush())}function u(){if(El(),t.event.touches){if(t.event.touches.length)return;c&&clearTimeout(c),c=setTimeout(function(){c=null},500),I.on("touchmove.brush touchend.brush touchcancel.brush",null)}else Cf(t.event.view,b),B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);I.attr("pointer-events","all"),Y.attr("cursor",sx.overlay),Rl(z)&&(E.selection=null,r.call(T)),F.end()}function a(){switch(t.event.keyCode){case 16:U=S&&A;break;case 18:N===ix&&(S&&(v=_-m*S,l=h+m*S),A&&(y=g-x*A,p=d+x*A),N=ox,o());break;case 32:N!==ix&&N!==ox||(S<0?v=_-m:S>0&&(l=h-m),A<0?y=g-x:A>0&&(p=d-x),N=rx,Y.attr("cursor",sx.selection),o());break;default:return}Cl()}function s(){switch(t.event.keyCode){case 16:U&&(w=M=U=!1,o());break;case 18:N===ox&&(S<0?v=_:S>0&&(l=h),A<0?y=g:A>0&&(p=d),N=ix,o());break;case 32:N===rx&&(t.event.altKey?(S&&(v=_-m*S,l=h+m*S),A&&(y=g-x*A,p=d+x*A),N=ox):(S<0?v=_:S>0&&(l=h),A<0?y=g:A>0&&(p=d),N=ix),Y.attr("cursor",sx[k]),o());break;default:return}Cl()}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return Cl()}else if(c)return;if(f.apply(this,arguments)){var l,h,p,d,v,_,y,g,m,x,b,w,M,T=this,k=t.event.target.__data__.type,N="selection"===(t.event.metaKey?k="overlay":k)?ex:t.event.altKey?ox:ix,S=n===ax?null:hx[k],A=n===ux?null:px[k],E=Ll(T),C=E.extent,z=E.selection,P=C[0][0],q=C[0][1],L=C[1][0],R=C[1][1],U=S&&A&&t.event.shiftKey,D=du(T),O=D,F=i(T,arguments).beforestart();"overlay"===k?E.selection=z=[[l=n===ax?P:D[0],p=n===ux?q:D[1]],[v=n===ax?L:l,y=n===ux?R:p]]:(l=z[0][0],p=z[0][1],v=z[1][0],y=z[1][1]),h=l,d=p,_=v,g=y;var I=Ra(T).attr("pointer-events","none"),Y=I.selectAll(".overlay").attr("cursor",sx[k]);if(t.event.touches)I.on("touchmove.brush",e,!0).on("touchend.brush touchcancel.brush",u,!0);else{var B=Ra(t.event.view).on("keydown.brush",a,!0).on("keyup.brush",s,!0).on("mousemove.brush",e,!0).on("mouseup.brush",u,!0);Ef(t.event.view)}El(),Ha(T),r.call(T),F.start()}}function a(){var t=this.__brush||{selection:null};return t.extent=s.apply(this,arguments),t.dim=n,t}var c,s=ql,f=Pl,l=Mr(e,"start","brush","end"),h=6;return e.move=function(t,e){t.selection?t.on("start.brush",function(){i(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){i(this,arguments).end()}).tween("brush",function(){function t(t){u.selection=1===t&&Rl(s)?null:f(t),r.call(o),a.brush()}var o=this,u=o.__brush,a=i(o,arguments),c=u.selection,s=n.input("function"==typeof e?e.apply(this,arguments):e,u.extent),f=cr(c,s);return c&&s?t:t(1)}):t.each(function(){var t=this,o=arguments,u=t.__brush,a=n.input("function"==typeof e?e.apply(t,o):e,u.extent),c=i(t,o).beforestart();Ha(t),u.selection=null==a||Rl(a)?null:a,r.call(t),c.start().brush().end()})},o.prototype={beforestart:function(){return 1===++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0===--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){lu(new Al(e,t,n.output(this.state.selection)),l.apply,l,[t,this.that,this.args])}},e.extent=function(t){return arguments.length?(s="function"==typeof t?t:Sl([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):s},e.filter=function(t){return arguments.length?(f="function"==typeof t?t:Sl(!!t),e):f},e.handleSize=function(t){return arguments.length?(h=+t,e):h},e.on=function(){var t=l.on.apply(l,arguments);return t===l?e:t},e}function Yl(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}function Bl(){function t(t){var o,u,a,c,s,f,h=t.length,p=[],d=l(h),v=[],_=[],y=_.groups=new Array(h),g=new Array(h*h);for(o=0,s=-1;++s<h;){for(u=0,f=-1;++f<h;)u+=t[s][f];p.push(u),v.push(l(h)),o+=u}for(e&&d.sort(function(t,n){return e(p[t],p[n])}),r&&v.forEach(function(n,e){n.sort(function(n,i){return r(t[e][n],t[e][i])})}),o=mx(0,gx-n*h)/o,c=o?n:gx/h,u=0,s=-1;++s<h;){for(a=u,f=-1;++f<h;){var m=d[s],x=v[m][f],b=t[m][x],w=u,M=u+=b*o;g[x*h+m]={index:m,subindex:x,startAngle:w,endAngle:M,value:b}}y[m]={index:m,startAngle:a,endAngle:u,value:p[m]},u+=c}for(s=-1;++s<h;)for(f=s-1;++f<h;){var T=g[f*h+s],k=g[s*h+f];(T.value||k.value)&&_.push(T.value<k.value?{source:k,target:T}:{source:T,target:k})}return i?_.sort(i):_}var n=0,e=null,r=null,i=null;return t.padAngle=function(e){return arguments.length?(n=mx(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(r=n,t):r},t.sortChords=function(n){return arguments.length?(null==n?i=null:(i=Yl(n))._=n,
t):i&&i._},t}function jl(t){return function(){return t}}function Hl(t){return t.source}function Xl(t){return t.target}function Vl(t){return t.radius}function Wl(t){return t.startAngle}function $l(t){return t.endAngle}function Zl(){function t(){var t,a=xx.call(arguments),c=n.apply(this,a),s=e.apply(this,a),f=+r.apply(this,(a[0]=c,a)),l=i.apply(this,a)-yx,h=o.apply(this,a)-yx,p=f*dx(l),d=f*vx(l),v=+r.apply(this,(a[0]=s,a)),_=i.apply(this,a)-yx,y=o.apply(this,a)-yx;if(u||(u=t=Tt()),u.moveTo(p,d),u.arc(0,0,f,l,h),l===_&&h===y||(u.quadraticCurveTo(0,0,v*dx(_),v*vx(_)),u.arc(0,0,v,_,y)),u.quadraticCurveTo(0,0,p,d),u.closePath(),t)return u=null,t+""||null}var n=Hl,e=Xl,r=Vl,i=Wl,o=$l,u=null;return t.radius=function(n){return arguments.length?(r="function"==typeof n?n:jl(+n),t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:jl(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:jl(+n),t):o},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(u=null==n?null:n,t):u},t}function Gl(){return new Jl}function Jl(){this.reset()}function Ql(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}function Kl(t){return t>1?0:t<-1?ib:Math.acos(t)}function th(t){return t>1?ob:t<-1?-ob:Math.asin(t)}function nh(t){return(t=gb(t/2))*t}function eh(){}function rh(t,n){t&&Mb.hasOwnProperty(t.type)&&Mb[t.type](t,n)}function ih(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function oh(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)ih(t[e],n,1);n.polygonEnd()}function uh(t,n){t&&wb.hasOwnProperty(t.type)?wb[t.type](t,n):rh(t,n)}function ah(){Tb.point=sh}function ch(){fh(Mx,Tx)}function sh(t,n){Tb.point=fh,Mx=t,Tx=n,t*=sb,n*=sb,kx=t,Nx=pb(n=n/2+ub),Sx=gb(n)}function fh(t,n){t*=sb,n*=sb,n=n/2+ub;var e=t-kx,r=e>=0?1:-1,i=r*e,o=pb(n),u=gb(n),a=Sx*u,c=Nx*o+a*pb(i),s=a*r*gb(i);bx.add(hb(s,c)),kx=t,Nx=o,Sx=u}function lh(t){return wx?wx.reset():(wx=Gl(),bx=Gl()),uh(t,Tb),2*wx}function hh(t){return[hb(t[1],t[0]),th(t[2])]}function ph(t){var n=t[0],e=t[1],r=pb(e);return[r*pb(n),r*gb(n),gb(e)]}function dh(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function vh(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function _h(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function yh(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function gh(t){var n=xb(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function mh(t,n){Dx.push(Ox=[Ax=t,Cx=t]),n<Ex&&(Ex=n),n>zx&&(zx=n)}function xh(t,n){var e=ph([t*sb,n*sb]);if(Rx){var r=vh(Rx,e),i=[r[1],-r[0],0],o=vh(i,r);gh(o),o=hh(o);var u,a=t-Px,c=a>0?1:-1,s=o[0]*cb*c,f=fb(a)>180;f^(c*Px<s&&s<c*t)?(u=o[1]*cb,u>zx&&(zx=u)):(s=(s+360)%360-180,f^(c*Px<s&&s<c*t)?(u=-o[1]*cb,u<Ex&&(Ex=u)):(n<Ex&&(Ex=n),n>zx&&(zx=n))),f?t<Px?Nh(Ax,t)>Nh(Ax,Cx)&&(Cx=t):Nh(t,Cx)>Nh(Ax,Cx)&&(Ax=t):Cx>=Ax?(t<Ax&&(Ax=t),t>Cx&&(Cx=t)):t>Px?Nh(Ax,t)>Nh(Ax,Cx)&&(Cx=t):Nh(t,Cx)>Nh(Ax,Cx)&&(Ax=t)}else mh(t,n);Rx=e,Px=t}function bh(){kb.point=xh}function wh(){Ox[0]=Ax,Ox[1]=Cx,kb.point=mh,Rx=null}function Mh(t,n){if(Rx){var e=t-Px;Ux.add(fb(e)>180?e+(e>0?360:-360):e)}else qx=t,Lx=n;Tb.point(t,n),xh(t,n)}function Th(){Tb.lineStart()}function kh(){Mh(qx,Lx),Tb.lineEnd(),fb(Ux)>eb&&(Ax=-(Cx=180)),Ox[0]=Ax,Ox[1]=Cx,Rx=null}function Nh(t,n){return(n-=t)<0?n+360:n}function Sh(t,n){return t[0]-n[0]}function Ah(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function Eh(t){var n,e,r,i,o,u,a;if(Ux?Ux.reset():Ux=Gl(),zx=Cx=-(Ax=Ex=1/0),Dx=[],uh(t,kb),e=Dx.length){for(Dx.sort(Sh),n=1,r=Dx[0],o=[r];n<e;++n)i=Dx[n],Ah(r,i[0])||Ah(r,i[1])?(Nh(r[0],i[1])>Nh(r[0],r[1])&&(r[1]=i[1]),Nh(i[0],r[1])>Nh(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(u=-(1/0),e=o.length-1,n=0,r=o[e];n<=e;r=i,++n)i=o[n],(a=Nh(r[1],i[0]))>u&&(u=a,Ax=i[0],Cx=r[1])}return Dx=Ox=null,Ax===1/0||Ex===1/0?[[NaN,NaN],[NaN,NaN]]:[[Ax,Ex],[Cx,zx]]}function Ch(t,n){t*=sb,n*=sb;var e=pb(n);zh(e*pb(t),e*gb(t),gb(n))}function zh(t,n,e){++Fx,Yx+=(t-Yx)/Fx,Bx+=(n-Bx)/Fx,jx+=(e-jx)/Fx}function Ph(){Nb.point=qh}function qh(t,n){t*=sb,n*=sb;var e=pb(n);Qx=e*pb(t),Kx=e*gb(t),tb=gb(n),Nb.point=Lh,zh(Qx,Kx,tb)}function Lh(t,n){t*=sb,n*=sb;var e=pb(n),r=e*pb(t),i=e*gb(t),o=gb(n),u=hb(xb((u=Kx*o-tb*i)*u+(u=tb*r-Qx*o)*u+(u=Qx*i-Kx*r)*u),Qx*r+Kx*i+tb*o);Ix+=u,Hx+=u*(Qx+(Qx=r)),Xx+=u*(Kx+(Kx=i)),Vx+=u*(tb+(tb=o)),zh(Qx,Kx,tb)}function Rh(){Nb.point=Ch}function Uh(){Nb.point=Oh}function Dh(){Fh(Gx,Jx),Nb.point=Ch}function Oh(t,n){Gx=t,Jx=n,t*=sb,n*=sb,Nb.point=Fh;var e=pb(n);Qx=e*pb(t),Kx=e*gb(t),tb=gb(n),zh(Qx,Kx,tb)}function Fh(t,n){t*=sb,n*=sb;var e=pb(n),r=e*pb(t),i=e*gb(t),o=gb(n),u=Kx*o-tb*i,a=tb*r-Qx*o,c=Qx*i-Kx*r,s=xb(u*u+a*a+c*c),f=Qx*r+Kx*i+tb*o,l=s&&-Kl(f)/s,h=hb(s,f);Wx+=l*u,$x+=l*a,Zx+=l*c,Ix+=h,Hx+=h*(Qx+(Qx=r)),Xx+=h*(Kx+(Kx=i)),Vx+=h*(tb+(tb=o)),zh(Qx,Kx,tb)}function Ih(t){Fx=Ix=Yx=Bx=jx=Hx=Xx=Vx=Wx=$x=Zx=0,uh(t,Nb);var n=Wx,e=$x,r=Zx,i=n*n+e*e+r*r;return i<rb&&(n=Hx,e=Xx,r=Vx,Ix<eb&&(n=Yx,e=Bx,r=jx),i=n*n+e*e+r*r,i<rb)?[NaN,NaN]:[hb(e,n)*cb,th(r/xb(i))*cb]}function Yh(t){return function(){return t}}function Bh(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return e=n.invert(e,r),e&&t.invert(e[0],e[1])}),e}function jh(t,n){return[t>ib?t-ab:t<-ib?t+ab:t,n]}function Hh(t,n,e){return(t%=ab)?n||e?Bh(Vh(t),Wh(n,e)):Vh(t):n||e?Wh(n,e):jh}function Xh(t){return function(n,e){return n+=t,[n>ib?n-ab:n<-ib?n+ab:n,e]}}function Vh(t){var n=Xh(t);return n.invert=Xh(-t),n}function Wh(t,n){function e(t,n){var e=pb(n),a=pb(t)*e,c=gb(t)*e,s=gb(n),f=s*r+a*i;return[hb(c*o-f*u,a*r-s*i),th(f*o+c*u)]}var r=pb(t),i=gb(t),o=pb(n),u=gb(n);return e.invert=function(t,n){var e=pb(n),a=pb(t)*e,c=gb(t)*e,s=gb(n),f=s*o-c*u;return[hb(c*o+s*u,a*r+f*i),th(f*r-a*i)]},e}function $h(t){function n(n){return n=t(n[0]*sb,n[1]*sb),n[0]*=cb,n[1]*=cb,n}return t=Hh(t[0]*sb,t[1]*sb,t.length>2?t[2]*sb:0),n.invert=function(n){return n=t.invert(n[0]*sb,n[1]*sb),n[0]*=cb,n[1]*=cb,n},n}function Zh(t,n,e,r,i,o){if(e){var u=pb(n),a=gb(n),c=r*e;null==i?(i=n+r*ab,o=n-c/2):(i=Gh(u,i),o=Gh(u,o),(r>0?i<o:i>o)&&(i+=r*ab));for(var s,f=i;r>0?f>o:f<o;f-=c)s=hh([u,-a*pb(f),-a*gb(f)]),t.point(s[0],s[1])}}function Gh(t,n){n=ph(n),n[0]-=t,gh(n);var e=Kl(-n[1]);return((-n[2]<0?-e:e)+ab-eb)%ab}function Jh(){function t(t,n){e.push(t=r(t,n)),t[0]*=cb,t[1]*=cb}function n(){var t=i.apply(this,arguments),n=o.apply(this,arguments)*sb,c=u.apply(this,arguments)*sb;return e=[],r=Hh(-t[0]*sb,-t[1]*sb,0).invert,Zh(a,n,c,1),t={type:"Polygon",coordinates:[e]},e=r=null,t}var e,r,i=Yh([0,0]),o=Yh(90),u=Yh(6),a={point:t};return n.center=function(t){return arguments.length?(i="function"==typeof t?t:Yh([+t[0],+t[1]]),n):i},n.radius=function(t){return arguments.length?(o="function"==typeof t?t:Yh(+t),n):o},n.precision=function(t){return arguments.length?(u="function"==typeof t?t:Yh(+t),n):u},n}function Qh(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:eh,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function Kh(t,n,e,r,i,o){var u,a=t[0],c=t[1],s=n[0],f=n[1],l=0,h=1,p=s-a,d=f-c;if(u=e-a,p||!(u>0)){if(u/=p,p<0){if(u<l)return;u<h&&(h=u)}else if(p>0){if(u>h)return;u>l&&(l=u)}if(u=i-a,p||!(u<0)){if(u/=p,p<0){if(u>h)return;u>l&&(l=u)}else if(p>0){if(u<l)return;u<h&&(h=u)}if(u=r-c,d||!(u>0)){if(u/=d,d<0){if(u<l)return;u<h&&(h=u)}else if(d>0){if(u>h)return;u>l&&(l=u)}if(u=o-c,d||!(u<0)){if(u/=d,d<0){if(u>h)return;u>l&&(l=u)}else if(d>0){if(u<l)return;u<h&&(h=u)}return l>0&&(t[0]=a+l*p,t[1]=c+l*d),h<1&&(n[0]=a+h*p,n[1]=c+h*d),!0}}}}}function tp(t,n){return fb(t[0]-n[0])<eb&&fb(t[1]-n[1])<eb}function np(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function ep(t,n,e,r,i){var o,u,a=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],u=t[n];if(tp(r,u)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);return void i.lineEnd()}a.push(e=new np(r,t,null,(!0))),c.push(e.o=new np(r,null,e,(!1))),a.push(e=new np(u,t,null,(!1))),c.push(e.o=new np(u,null,e,(!0)))}}),a.length){for(c.sort(n),rp(a),rp(c),o=0,u=c.length;o<u;++o)c[o].e=e=!e;for(var s,f,l=a[0];;){for(var h=l,p=!0;h.v;)if((h=h.n)===l)return;s=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(p)for(o=0,u=s.length;o<u;++o)i.point((f=s[o])[0],f[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(p)for(s=h.p.z,o=s.length-1;o>=0;--o)i.point((f=s[o])[0],f[1]);else r(h.x,h.p.x,-1,i);h=h.p}h=h.o,s=h.z,p=!p}while(!h.v);i.lineEnd()}}}function rp(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}function ip(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,a,s){var f=0,l=0;if(null==i||(f=u(i,a))!==(l=u(o,a))||c(i,o)<0^a>0){do s.point(0===f||3===f?t:e,f>1?r:n);while((f=(f+a+4)%4)!==l)}else s.point(o[0],o[1])}function u(r,i){return fb(r[0]-t)<eb?i>0?0:3:fb(r[0]-e)<eb?i>0?2:1:fb(r[1]-n)<eb?i>0?1:0:i>0?3:2}function a(t,n){return c(t.x,n.x)}function c(t,n){var e=u(t,1),r=u(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(u){function c(t,n){i(t,n)&&S.point(t,n)}function s(){for(var n=0,e=0,i=_.length;e<i;++e)for(var o,u,a=_[e],c=1,s=a.length,f=a[0],l=f[0],h=f[1];c<s;++c)o=l,u=h,f=a[c],l=f[0],h=f[1],u<=r?h>r&&(l-o)*(r-u)>(h-u)*(t-o)&&++n:h<=r&&(l-o)*(r-u)<(h-u)*(t-o)&&--n;return n}function f(){S=A,v=[],_=[],N=!0}function l(){var t=s(),n=N&&t,e=(v=w(v)).length;(n||e)&&(u.polygonStart(),n&&(u.lineStart(),o(null,null,1,u),u.lineEnd()),e&&ep(v,a,t,o,u),u.polygonEnd()),S=u,v=_=y=null}function h(){E.point=d,_&&_.push(y=[]),k=!0,T=!1,b=M=NaN}function p(){v&&(d(g,m),x&&T&&A.rejoin(),v.push(A.result())),E.point=c,T&&S.lineEnd()}function d(o,u){var a=i(o,u);if(_&&y.push([o,u]),k)g=o,m=u,x=a,k=!1,a&&(S.lineStart(),S.point(o,u));else if(a&&T)S.point(o,u);else{var c=[b=Math.max(Ib,Math.min(Fb,b)),M=Math.max(Ib,Math.min(Fb,M))],s=[o=Math.max(Ib,Math.min(Fb,o)),u=Math.max(Ib,Math.min(Fb,u))];Kh(c,s,t,n,e,r)?(T||(S.lineStart(),S.point(c[0],c[1])),S.point(s[0],s[1]),a||S.lineEnd(),N=!1):a&&(S.lineStart(),S.point(o,u),N=!1)}b=o,M=u,T=a}var v,_,y,g,m,x,b,M,T,k,N,S=u,A=Qh(),E={point:c,lineStart:h,lineEnd:p,polygonStart:f,polygonEnd:l};return E}}function op(){var t,n,e,r=0,i=0,o=960,u=500;return e={stream:function(e){return t&&n===e?t:t=ip(r,i,o,u)(n=e)},extent:function(a){return arguments.length?(r=+a[0][0],i=+a[0][1],o=+a[1][0],u=+a[1][1],t=n=null,e):[[r,i],[o,u]]}}}function up(){Yb.point=cp,Yb.lineEnd=ap}function ap(){Yb.point=Yb.lineEnd=eh}function cp(t,n){t*=sb,n*=sb,Ab=t,Eb=gb(n),Cb=pb(n),Yb.point=sp}function sp(t,n){t*=sb,n*=sb;var e=gb(n),r=pb(n),i=fb(t-Ab),o=pb(i),u=gb(i),a=r*u,c=Cb*e-Eb*r*o,s=Eb*e+Cb*r*o;Sb.add(hb(xb(a*a+c*c),s)),Ab=t,Eb=e,Cb=r}function fp(t){return Sb?Sb.reset():Sb=Gl(),uh(t,Yb),+Sb}function lp(t,n){return Bb[0]=t,Bb[1]=n,fp(jb)}function hp(t,n,e){var r=l(t,n-eb,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function pp(t,n,e){var r=l(t,n-eb,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function dp(){function t(){return{type:"MultiLineString",coordinates:n()}}function n(){return l(db(o/y)*y,i,y).map(p).concat(l(db(s/g)*g,c,g).map(d)).concat(l(db(r/v)*v,e,v).filter(function(t){return fb(t%y)>eb}).map(f)).concat(l(db(a/_)*_,u,_).filter(function(t){return fb(t%g)>eb}).map(h))}var e,r,i,o,u,a,c,s,f,h,p,d,v=10,_=v,y=90,g=360,m=2.5;return t.lines=function(){return n().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[p(o).concat(d(c).slice(1),p(i).reverse().slice(1),d(s).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],s=+n[0][1],c=+n[1][1],o>i&&(n=o,o=i,i=n),s>c&&(n=s,s=c,c=n),t.precision(m)):[[o,s],[i,c]]},t.extentMinor=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],a=+n[0][1],u=+n[1][1],r>e&&(n=r,r=e,e=n),a>u&&(n=a,a=u,u=n),t.precision(m)):[[r,a],[e,u]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(y=+n[0],g=+n[1],t):[y,g]},t.stepMinor=function(n){return arguments.length?(v=+n[0],_=+n[1],t):[v,_]},t.precision=function(n){return arguments.length?(m=+n,f=hp(a,u,90),h=pp(r,e,m),p=hp(s,c,90),d=pp(o,i,m),t):m},t.extentMajor([[-180,-90+eb],[180,90-eb]]).extentMinor([[-180,-80-eb],[180,80+eb]])}function vp(t,n){var e=t[0]*sb,r=t[1]*sb,i=n[0]*sb,o=n[1]*sb,u=pb(r),a=gb(r),c=pb(o),s=gb(o),f=u*pb(e),l=u*gb(e),h=c*pb(i),p=c*gb(i),d=2*th(xb(nh(o-r)+u*c*nh(i-e))),v=gb(d),_=d?function(t){var n=gb(t*=d)/v,e=gb(d-t)/v,r=e*f+n*h,i=e*l+n*p,o=e*a+n*s;return[hb(i,r)*cb,hb(o,xb(r*r+i*i))*cb]}:function(){return[e*cb,r*cb]};return _.distance=d,_}function _p(t){return t}function yp(){Vb.point=gp}function gp(t,n){Vb.point=mp,zb=qb=t,Pb=Lb=n}function mp(t,n){Xb.add(Lb*t-qb*n),qb=t,Lb=n}function xp(){mp(zb,Pb)}function bp(t,n){t<Wb&&(Wb=t),t>Zb&&(Zb=t),n<$b&&($b=n),n>Gb&&(Gb=n)}function wp(t,n){Qb+=t,Kb+=n,++tw}function Mp(){aw.point=Tp}function Tp(t,n){aw.point=kp,wp(Db=t,Ob=n)}function kp(t,n){var e=t-Db,r=n-Ob,i=xb(e*e+r*r);nw+=i*(Db+t)/2,ew+=i*(Ob+n)/2,rw+=i,wp(Db=t,Ob=n)}function Np(){aw.point=wp}function Sp(){aw.point=Ep}function Ap(){Cp(Rb,Ub)}function Ep(t,n){aw.point=Cp,wp(Rb=Db=t,Ub=Ob=n)}function Cp(t,n){var e=t-Db,r=n-Ob,i=xb(e*e+r*r);nw+=i*(Db+t)/2,ew+=i*(Ob+n)/2,rw+=i,i=Ob*t-Db*n,iw+=i*(Db+t),ow+=i*(Ob+n),uw+=3*i,wp(Db=t,Ob=n)}function zp(t){function n(n,e){t.moveTo(n+u,e),t.arc(n,e,u,0,ab)}function e(n,e){t.moveTo(n,e),a.point=r}function r(n,e){t.lineTo(n,e)}function i(){a.point=n}function o(){t.closePath()}var u=4.5,a={point:n,lineStart:function(){a.point=e},lineEnd:i,polygonStart:function(){a.lineEnd=o},polygonEnd:function(){a.lineEnd=i,a.point=n},pointRadius:function(t){return u=t,a},result:eh};return a}function Pp(){function t(t,n){a.push("M",t,",",n,u)}function n(t,n){a.push("M",t,",",n),c.point=e}function e(t,n){a.push("L",t,",",n)}function r(){c.point=n}function i(){c.point=t}function o(){a.push("Z")}var u=qp(4.5),a=[],c={point:t,lineStart:r,lineEnd:i,polygonStart:function(){c.lineEnd=o},polygonEnd:function(){c.lineEnd=i,c.point=t},pointRadius:function(t){return u=qp(t),c},result:function(){if(a.length){var t=a.join("");return a=[],t}}};return c}function qp(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Lp(){function t(t){return t&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),uh(t,e(i))),i.result()}var n,e,r,i,o=4.5;return t.area=function(t){return uh(t,e(Vb)),Vb.result()},t.bounds=function(t){return uh(t,e(Jb)),Jb.result()},t.centroid=function(t){return uh(t,e(aw)),aw.result()},t.projection=function(r){return arguments.length?(e=null==(n=r)?_p:r.stream,t):n},t.context=function(n){return arguments.length?(i=null==(r=n)?new Pp:new zp(n),"function"!=typeof o&&i.pointRadius(o),t):r},t.pointRadius=function(n){return arguments.length?(o="function"==typeof n?n:(i.pointRadius(+n),+n),t):o},t.projection(null).context(null)}function Rp(t,n){for(var e=n[0],r=n[1],i=[gb(e),-pb(e),0],o=0,u=0,a=0,c=t.length;a<c;++a)if(f=(s=t[a]).length)for(var s,f,l=s[f-1],h=l[0],p=l[1]/2+ub,d=gb(p),v=pb(p),_=0;_<f;++_,h=g,d=x,v=b,l=y){var y=s[_],g=y[0],m=y[1]/2+ub,x=gb(m),b=pb(m),w=g-h,M=w>=0?1:-1,T=M*w,k=T>ib,N=d*x;if(cw.add(hb(N*M*gb(T),v*b+N*pb(T))),o+=k?w+M*ab:w,k^h>=e^g>=e){var S=vh(ph(l),ph(y));gh(S);var A=vh(i,S);gh(A);var E=(k^w>=0?-1:1)*th(A[2]);(r>E||r===E&&(S[0]||S[1]))&&(u+=k^w>=0?1:-1)}}var C=(o<-eb||o<eb&&cw<-eb)^1&u;return cw.reset(),C}function Up(t,n,e,r){return function(i,o){function u(n,e){var r=i(n,e);t(n=r[0],e=r[1])&&o.point(n,e)}function a(t,n){var e=i(t,n);_.point(e[0],e[1])}function c(){b.point=a,_.lineStart()}function s(){b.point=u,_.lineEnd()}function f(t,n){v.push([t,n]);var e=i(t,n);m.point(e[0],e[1])}function l(){m.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),m.lineEnd();var t,n,e,r,i=m.clean(),u=g.result(),a=u.length;if(v.pop(),p.push(v),v=null,a)if(1&i){if(e=u[0],(n=e.length-1)>0){for(x||(o.polygonStart(),x=!0),o.lineStart(),t=0;t<n;++t)o.point((r=e[t])[0],r[1]);o.lineEnd()}}else a>1&&2&i&&u.push(u.pop().concat(u.shift())),d.push(u.filter(Dp))}var p,d,v,_=n(o),y=i.invert(r[0],r[1]),g=Qh(),m=n(g),x=!1,b={point:u,lineStart:c,lineEnd:s,polygonStart:function(){b.point=f,b.lineStart=l,b.lineEnd=h,d=[],p=[]},polygonEnd:function(){b.point=u,b.lineStart=c,b.lineEnd=s,d=w(d);var t=Rp(p,y);d.length?(x||(o.polygonStart(),x=!0),ep(d,Op,t,e,o)):t&&(x||(o.polygonStart(),x=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),x&&(o.polygonEnd(),x=!1),d=p=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}};return b}}function Dp(t){return t.length>1}function Op(t,n){return((t=t.x)[0]<0?t[1]-ob-eb:ob-t[1])-((n=n.x)[0]<0?n[1]-ob-eb:ob-n[1])}function Fp(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,u){var a=o>0?ib:-ib,c=fb(o-e);fb(c-ib)<eb?(t.point(e,r=(r+u)/2>0?ob:-ob),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),t.point(o,r),n=0):i!==a&&c>=ib&&(fb(e-i)<eb&&(e-=i*eb),fb(o-a)<eb&&(o-=a*eb),r=Ip(e,r,o,u),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),n=0),t.point(e=o,r=u),i=a},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}function Ip(t,n,e,r){var i,o,u=gb(t-e);return fb(u)>eb?lb((gb(n)*(o=pb(r))*gb(e)-gb(r)*(i=pb(n))*gb(t))/(i*o*u)):(n+r)/2}function Yp(t,n,e,r){var i;if(null==t)i=e*ob,r.point(-ib,i),r.point(0,i),r.point(ib,i),r.point(ib,0),r.point(ib,-i),r.point(0,-i),r.point(-ib,-i),r.point(-ib,0),r.point(-ib,i);else if(fb(t[0]-n[0])>eb){var o=t[0]<n[0]?ib:-ib;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])}function Bp(t,n){function e(e,r,i,o){Zh(o,t,n,i,e,r)}function r(t,n){return pb(t)*pb(n)>a}function i(t){var n,e,i,a,f;return{lineStart:function(){a=i=!1,f=1},point:function(l,h){var p,d=[l,h],v=r(l,h),_=c?v?0:u(l,h):v?u(l+(l<0?ib:-ib),h):0;if(!n&&(a=i=v)&&t.lineStart(),v!==i&&(p=o(n,d),(tp(n,p)||tp(d,p))&&(d[0]+=eb,d[1]+=eb,v=r(d[0],d[1]))),v!==i)f=0,v?(t.lineStart(),p=o(d,n),t.point(p[0],p[1])):(p=o(n,d),t.point(p[0],p[1]),t.lineEnd()),n=p;else if(s&&n&&c^v){var y;_&e||!(y=o(d,n,!0))||(f=0,c?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&tp(n,d)||t.point(d[0],d[1]),n=d,i=v,e=_},lineEnd:function(){i&&t.lineEnd(),n=null},clean:function(){return f|(a&&i)<<1}}}function o(t,n,e){var r=ph(t),i=ph(n),o=[1,0,0],u=vh(r,i),c=dh(u,u),s=u[0],f=c-s*s;if(!f)return!e&&t;var l=a*c/f,h=-a*s/f,p=vh(o,u),d=yh(o,l),v=yh(u,h);_h(d,v);var _=p,y=dh(d,_),g=dh(_,_),m=y*y-g*(dh(d,d)-1);if(!(m<0)){var x=xb(m),b=yh(_,(-y-x)/g);if(_h(b,d),b=hh(b),!e)return b;var w,M=t[0],T=n[0],k=t[1],N=n[1];T<M&&(w=M,M=T,T=w);var S=T-M,A=fb(S-ib)<eb,E=A||S<eb;if(!A&&N<k&&(w=k,k=N,N=w),E?A?k+N>0^b[1]<(fb(b[0]-M)<eb?k:N):k<=b[1]&&b[1]<=N:S>ib^(M<=b[0]&&b[0]<=T)){var C=yh(_,(-y+x)/g);return _h(C,d),[b,hh(C)]}}}function u(n,e){var r=c?t:ib-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var a=pb(t),c=a>0,s=fb(a)>eb;return Up(r,i,e,c?[0,-t]:[-ib,t-ib])}function jp(t){return{stream:Hp(t)}}function Hp(t){function n(){}var e=n.prototype=Object.create(Xp.prototype);for(var r in t)e[r]=t[r];return function(t){var e=new n;return e.stream=t,e}}function Xp(){}function Vp(t,n){return+n?$p(t,n):Wp(t)}function Wp(t){return Hp({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}function $p(t,n){function e(r,i,o,u,a,c,s,f,l,h,p,d,v,_){var y=s-r,g=f-i,m=y*y+g*g;if(m>4*n&&v--){var x=u+h,b=a+p,w=c+d,M=xb(x*x+b*b+w*w),T=th(w/=M),k=fb(fb(w)-1)<eb||fb(o-l)<eb?(o+l)/2:hb(b,x),N=t(k,T),S=N[0],A=N[1],E=S-r,C=A-i,z=g*E-y*C;(z*z/m>n||fb((y*E+g*C)/m-.5)>.3||u*h+a*p+c*d<lw)&&(e(r,i,o,u,a,c,S,A,k,x/=M,b/=M,w,v,_),_.point(S,A),e(S,A,k,x,b,w,s,f,l,h,p,d,v,_))}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1])}function i(){y=NaN,w.point=o,n.lineStart()}function o(r,i){var o=ph([r,i]),u=t(r,i);e(y,g,_,m,x,b,y=u[0],g=u[1],_=r,m=o[0],x=o[1],b=o[2],fw,n),n.point(y,g)}function u(){w.point=r,n.lineEnd()}function a(){i(),w.point=c,w.lineEnd=s}function c(t,n){o(f=t,n),l=y,h=g,p=m,d=x,v=b,w.point=o}function s(){e(y,g,_,m,x,b,l,h,f,p,d,v,fw,n),w.lineEnd=u,u()}var f,l,h,p,d,v,_,y,g,m,x,b,w={point:r,lineStart:i,lineEnd:u,polygonStart:function(){n.polygonStart(),w.lineStart=a},polygonEnd:function(){n.polygonEnd(),w.lineStart=i}};return w}}function Zp(t){return Gp(function(){return t})()}function Gp(t){function n(t){return t=f(t[0]*sb,t[1]*sb),[t[0]*_+a,c-t[1]*_]}function e(t){return t=f.invert((t[0]-a)/_,(c-t[1])/_),t&&[t[0]*cb,t[1]*cb]}function r(t,n){return t=u(t,n),[t[0]*_+a,c-t[1]*_]}function i(){f=Bh(s=Hh(b,w,M),u);var t=u(m,x);return a=y-t[0]*_,c=g+t[1]*_,o()}function o(){return d=v=null,n}var u,a,c,s,f,l,h,p,d,v,_=150,y=480,g=250,m=0,x=0,b=0,w=0,M=0,T=null,k=sw,N=null,S=_p,A=.5,E=Vp(r,A);return n.stream=function(t){return d&&v===t?d:d=hw(k(s,E(S(v=t))))},n.clipAngle=function(t){return arguments.length?(k=+t?Bp(T=t*sb,6*sb):(T=null,sw),o()):T*cb},n.clipExtent=function(t){return arguments.length?(S=null==t?(N=l=h=p=null,_p):ip(N=+t[0][0],l=+t[0][1],h=+t[1][0],p=+t[1][1]),o()):null==N?null:[[N,l],[h,p]]},n.scale=function(t){return arguments.length?(_=+t,i()):_},n.translate=function(t){return arguments.length?(y=+t[0],g=+t[1],i()):[y,g]},n.center=function(t){return arguments.length?(m=t[0]%360*sb,x=t[1]%360*sb,i()):[m*cb,x*cb]},n.rotate=function(t){return arguments.length?(b=t[0]%360*sb,w=t[1]%360*sb,M=t.length>2?t[2]%360*sb:0,i()):[b*cb,w*cb,M*cb]},n.precision=function(t){return arguments.length?(E=Vp(r,A=t*t),o()):xb(A)},function(){return u=t.apply(this,arguments),n.invert=u.invert&&e,i()}}function Jp(t){var n=0,e=ib/3,r=Gp(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*sb,e=t[1]*sb):[n*cb,e*cb]},i}function Qp(t,n){function e(t,n){var e=xb(o-2*i*gb(n))/i;return[e*gb(t*=i),u-e*pb(t)]}var r=gb(t),i=(r+gb(n))/2,o=1+r*(2*i-r),u=xb(o)/i;return e.invert=function(t,n){var e=u-n;return[hb(t,e)/i,th((o-(t*t+e*e)*i*i)/(2*i))]},e}function Kp(){return Jp(Qp).scale(155.424).center([0,33.6442])}function td(){return Kp().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function nd(t){var n=t.length;return{point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r)},sphere:function(){for(var e=-1;++e<n;)t[e].sphere()},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart()},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd()}}}function ed(){function t(t){var n=t[0],e=t[1];return u=null,r.point(n,e),u||(i.point(n,e),u)||(o.point(n,e),u)}var n,e,r,i,o,u,a=td(),c=Kp().rotate([154,0]).center([-2,58.5]).parallels([55,65]),s=Kp().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(t,n){u=[t,n]}};return t.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?c:i>=.166&&i<.234&&r>=-.214&&r<-.115?s:a).invert(t)},t.stream=function(t){return n&&e===t?n:n=nd([a.stream(e=t),c.stream(t),s.stream(t)])},t.precision=function(n){return arguments.length?(a.precision(n),c.precision(n),s.precision(n),t):a.precision()},t.scale=function(n){return arguments.length?(a.scale(n),c.scale(.35*n),s.scale(n),t.translate(a.translate())):a.scale()},t.translate=function(n){if(!arguments.length)return a.translate();var e=a.scale(),u=+n[0],l=+n[1];return r=a.translate(n).clipExtent([[u-.455*e,l-.238*e],[u+.455*e,l+.238*e]]).stream(f),i=c.translate([u-.307*e,l+.201*e]).clipExtent([[u-.425*e+eb,l+.12*e+eb],[u-.214*e-eb,l+.234*e-eb]]).stream(f),o=s.translate([u-.205*e,l+.212*e]).clipExtent([[u-.214*e+eb,l+.166*e+eb],[u-.115*e-eb,l+.234*e-eb]]).stream(f),t},t.scale(1070)}function rd(t){return function(n,e){var r=pb(n),i=pb(e),o=t(r*i);return[o*i*gb(n),o*gb(e)]}}function id(t){return function(n,e){var r=xb(n*n+e*e),i=t(r),o=gb(i),u=pb(i);return[hb(n*o,r*u),th(r&&e*o/r)]}}function od(){return Zp(pw).scale(124.75).clipAngle(179.999)}function ud(){return Zp(dw).scale(79.4188).clipAngle(179.999)}function ad(t,n){return[t,_b(bb((ob+n)/2))]}function cd(){return sd(ad).scale(961/ab)}function sd(t){var n,e=Zp(t),r=e.scale,i=e.translate,o=e.clipExtent;return e.scale=function(t){return arguments.length?(r(t),n&&e.clipExtent(null),e):r()},e.translate=function(t){return arguments.length?(i(t),n&&e.clipExtent(null),e):i()},e.clipExtent=function(t){if(!arguments.length)return n?null:o();if(n=null==t){var u=ib*r(),a=i();t=[[a[0]-u,a[1]-u],[a[0]+u,a[1]+u]]}return o(t),e},e.clipExtent(null)}function fd(t){return bb((ob+t)/2)}function ld(t,n){function e(t,n){o>0?n<-ob+eb&&(n=-ob+eb):n>ob-eb&&(n=ob-eb);var e=o/yb(fd(n),i);return[e*gb(i*t),o-e*pb(i*t)]}var r=pb(t),i=t===n?gb(t):_b(r/pb(n))/_b(fd(n)/fd(t)),o=r*yb(fd(t),i)/i;return i?(e.invert=function(t,n){var e=o-n,r=mb(i)*xb(t*t+e*e);return[hb(t,e)/i,2*lb(yb(o/r,1/i))-ob]},e):ad}function hd(){return Jp(ld).scale(109.5).parallels([30,30])}function pd(t,n){return[t,n]}function dd(){return Zp(pd).scale(152.63)}function vd(t,n){function e(t,n){var e=o-n,r=i*t;return[e*gb(r),o-e*pb(r)]}var r=pb(t),i=t===n?gb(t):(r-pb(n))/(n-t),o=r/i+t;return fb(i)<eb?pd:(e.invert=function(t,n){var e=o-n;return[hb(t,e)/i,o-mb(i)*xb(t*t+e*e)]},e)}function _d(){return Jp(vd).scale(131.154).center([0,13.9389])}function yd(t,n){var e=pb(n),r=pb(t)*e;return[e*gb(t)/r,gb(n)/r]}function gd(){return Zp(yd).scale(144.049).clipAngle(60)}function md(t,n){return[pb(n)*gb(t),gb(n)]}function xd(){return Zp(md).scale(249.5).clipAngle(90+eb)}function bd(t,n){var e=pb(n),r=1+pb(t)*e;return[e*gb(t)/r,gb(n)/r]}function wd(){return Zp(bd).scale(250).clipAngle(142)}function Md(t,n){return[_b(bb((ob+n)/2)),-t]}function Td(){var t=sd(Md),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)}var kd="4.1.1",Nd=e(n),Sd=Nd.right,Ad=Nd.left,Ed=Array.prototype,Cd=Ed.slice,zd=Ed.map,Pd=Math.sqrt(50),qd=Math.sqrt(10),Ld=Math.sqrt(2),Rd="$";P.prototype=q.prototype={constructor:P,has:function(t){return Rd+t in this},get:function(t){return this[Rd+t]},set:function(t,n){return this[Rd+t]=n,this},remove:function(t){var n=Rd+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===Rd&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===Rd&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===Rd&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===Rd&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===Rd&&++t;return t},empty:function(){for(var t in this)if(t[0]===Rd)return!1;return!0},each:function(t){for(var n in this)n[0]===Rd&&t(this[n],n.slice(1),this)}};var Ud=q.prototype;F.prototype=I.prototype={constructor:F,has:Ud.has,add:function(t){return t+="",this[Rd+t]=t,this},remove:Ud.remove,clear:Ud.clear,values:Ud.keys,size:Ud.size,empty:Ud.empty,each:Ud.each};var Dd=3,Od=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(Dd),Fd=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(Dd),Id=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(Dd),Yd=Math.PI,Bd=Yd/2,jd=4/11,Hd=6/11,Xd=8/11,Vd=.75,Wd=9/11,$d=10/11,Zd=.9375,Gd=21/22,Jd=63/64,Qd=1/jd/jd,Kd=1.70158,tv=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(Kd),nv=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(Kd),ev=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(Kd),rv=2*Math.PI,iv=1,ov=.3,uv=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=rv);return r.amplitude=function(n){return t(n,e*rv)},r.period=function(e){return t(n,e)},r}(iv,ov),av=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=rv);return r.amplitude=function(n){return t(n,e*rv)},r.period=function(e){return t(n,e)},r}(iv,ov),cv=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=rv);return r.amplitude=function(n){return t(n,e*rv)},r.period=function(e){return t(n,e)},r}(iv,ov),sv=Math.PI,fv=2*sv,lv=1e-6,hv=fv-lv;Mt.prototype=Tt.prototype={constructor:Mt,moveTo:function(t,n){this._.push("M",this._x0=this._x1=+t,",",this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._.push("Z"))},lineTo:function(t,n){this._.push("L",this._x1=+t,",",this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._.push("Q",+t,",",+n,",",this._x1=+e,",",this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._.push("C",+t,",",+n,",",+e,",",+r,",",this._x1=+i,",",this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,u=this._y1,a=e-t,c=r-n,s=o-t,f=u-n,l=s*s+f*f;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._.push("M",this._x1=t,",",this._y1=n);else if(l>lv)if(Math.abs(f*a-c*s)>lv&&i){var h=e-o,p=r-u,d=a*a+c*c,v=h*h+p*p,_=Math.sqrt(d),y=Math.sqrt(l),g=i*Math.tan((sv-Math.acos((d+l-v)/(2*_*y)))/2),m=g/y,x=g/_;Math.abs(m-1)>lv&&this._.push("L",t+m*s,",",n+m*f),this._.push("A",i,",",i,",0,0,",+(f*h>s*p),",",this._x1=t+x*a,",",this._y1=n+x*c)}else this._.push("L",this._x1=t,",",this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,e=+e;var u=e*Math.cos(r),a=e*Math.sin(r),c=t+u,s=n+a,f=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._.push("M",c,",",s):(Math.abs(this._x1-c)>lv||Math.abs(this._y1-s)>lv)&&this._.push("L",c,",",s),e&&(l>hv?this._.push("A",e,",",e,",0,1,",f,",",t-u,",",n-a,"A",e,",",e,",0,1,",f,",",this._x1=c,",",this._y1=s):(l<0&&(l=l%fv+fv),this._.push("A",e,",",e,",0,",+(l>=sv),",",f,",",this._x1=t+e*Math.cos(i),",",this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._.push("M",this._x0=this._x1=+t,",",this._y0=this._y1=+n,"h",+e,"v",+r,"h",-e,"Z")},toString:function(){return this._.join("")}};var pv=jt.prototype=Ht.prototype;pv.copy=function(){var t,n,e=new Ht(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=Xt(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Xt(n));return e},pv.add=kt,pv.addAll=St,pv.cover=At,pv.data=Et,pv.extent=Ct,pv.find=Pt,pv.remove=qt,pv.removeAll=Lt,pv.root=Rt,pv.size=Ut,pv.visit=Dt,pv.visitAfter=Ot,pv.x=It,pv.y=Bt;var dv=[].slice,vv={};Vt.prototype=Qt.prototype={constructor:Vt,defer:function(t){if("function"!=typeof t||this._call)throw new Error;if(null!=this._error)return this;var n=dv.call(arguments,1);return n.push(t),++this._waiting,this._tasks.push(n),Wt(this),this},abort:function(){return null==this._error&&Gt(this,new Error("abort")),this},await:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=function(n,e){t.apply(null,[n].concat(e))},Jt(this),this},awaitAll:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=t,Jt(this),this}};var _v=1e-12,yv=Math.PI,gv=yv/2,mv=2*yv;fn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;
},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var xv=xn(ln);mn.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var bv={draw:function(t,n){var e=Math.sqrt(n/yv);t.moveTo(e,0),t.arc(0,0,e,0,mv)}},wv={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},Mv=Math.sqrt(1/3),Tv=2*Mv,kv={draw:function(t,n){var e=Math.sqrt(n/Tv),r=e*Mv;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},Nv=.8908130915292852,Sv=Math.sin(yv/10)/Math.sin(7*yv/10),Av=Math.sin(mv/10)*Sv,Ev=-Math.cos(mv/10)*Sv,Cv={draw:function(t,n){var e=Math.sqrt(n*Nv),r=Av*e,i=Ev*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var u=mv*o/5,a=Math.cos(u),c=Math.sin(u);t.lineTo(c*e,-a*e),t.lineTo(a*r-c*i,c*r+a*i)}t.closePath()}},zv={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},Pv=Math.sqrt(3),qv={draw:function(t,n){var e=-Math.sqrt(n/(3*Pv));t.moveTo(0,2*e),t.lineTo(-Pv*e,-e),t.lineTo(Pv*e,-e),t.closePath()}},Lv=-.5,Rv=Math.sqrt(3)/2,Uv=1/Math.sqrt(12),Dv=3*(Uv/2+1),Ov={draw:function(t,n){var e=Math.sqrt(n/Dv),r=e/2,i=e*Uv,o=r,u=e*Uv+e,a=-o,c=u;t.moveTo(r,i),t.lineTo(o,u),t.lineTo(a,c),t.lineTo(Lv*r-Rv*i,Rv*r+Lv*i),t.lineTo(Lv*o-Rv*u,Rv*o+Lv*u),t.lineTo(Lv*a-Rv*c,Rv*a+Lv*c),t.lineTo(Lv*r+Rv*i,Lv*i-Rv*r),t.lineTo(Lv*o+Rv*u,Lv*u-Rv*o),t.lineTo(Lv*a+Rv*c,Lv*c-Rv*a),t.closePath()}},Fv=[bv,wv,kv,zv,Cv,qv,Ov];Sn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Nn(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Nn(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},En.prototype={areaStart:kn,areaEnd:kn,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Nn(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},zn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Nn(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},qn.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],u=t[e]-i,a=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*u),this._beta*n[c]+(1-this._beta)*(o+r*a));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var Iv=function t(n){function e(t){return 1===n?new Sn(t):new qn(t,n)}return e.beta=function(n){return t(+n)},e}(.85);Rn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Ln(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Ln(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Yv=function t(n){function e(t){return new Rn(t,n)}return e.tension=function(n){return t(+n)},e}(0);Un.prototype={areaStart:kn,areaEnd:kn,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Ln(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Bv=function t(n){function e(t){return new Un(t,n)}return e.tension=function(n){return t(+n)},e}(0);Dn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Ln(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var jv=function t(n){function e(t){return new Dn(t,n)}return e.tension=function(n){return t(+n)},e}(0);Fn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this,this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:On(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Hv=function t(n){function e(t){return n?new Fn(t,n):new Rn(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);In.prototype={areaStart:kn,areaEnd:kn,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:On(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Xv=function t(n){function e(t){return n?new In(t,n):new Un(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Yn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:On(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Vv=function t(n){function e(t){return n?new Yn(t,n):new Dn(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Bn.prototype={areaStart:kn,areaEnd:kn,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},$n.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Wn(this,this._t0,Vn(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,Wn(this,Vn(this,e=Xn(this,t,n)),e);break;default:Wn(this,this._t0,e=Xn(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Zn.prototype=Object.create($n.prototype)).point=function(t,n){$n.prototype.point.call(this,n,t)},Gn.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},Kn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=te(t),i=te(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},ee.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var Wv=Array.prototype.slice,$v=.7,Zv=1/$v,Gv=/^#([0-9a-f]{3})$/,Jv=/^#([0-9a-f]{6})$/,Qv=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Kv=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,t_=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,n_=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,e_=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,r_=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ge(xe,be,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),ge(Ne,ke,me(xe,{brighter:function(t){return t=null==t?Zv:Math.pow(Zv,t),new Ne(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?$v:Math.pow($v,t),new Ne(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),ge(Ce,Ee,me(xe,{brighter:function(t){return t=null==t?Zv:Math.pow(Zv,t),new Ce(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?$v:Math.pow($v,t),new Ce(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new Ne(ze(t>=240?t-240:t+120,i,r),ze(t,i,r),ze(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var o_=Math.PI/180,u_=180/Math.PI,a_=18,c_=.95047,s_=1,f_=1.08883,l_=4/29,h_=6/29,p_=3*h_*h_,d_=h_*h_*h_;ge(Le,qe,me(xe,{brighter:function(t){return new Le(this.l+a_*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Le(this.l-a_*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=s_*Ue(t),n=c_*Ue(n),e=f_*Ue(e),new Ne(De(3.2404542*n-1.5371385*t-.4985314*e),De(-.969266*n+1.8760108*t+.041556*e),De(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),ge(Ye,Ie,me(xe,{brighter:function(t){return new Ye(this.h,this.c,this.l+a_*(null==t?1:t),this.opacity)},darker:function(t){return new Ye(this.h,this.c,this.l-a_*(null==t?1:t),this.opacity)},rgb:function(){return Pe(this).rgb()}}));var v_=-.14861,__=1.78277,y_=-.29227,g_=-.90649,m_=1.97294,x_=m_*g_,b_=m_*__,w_=__*y_-g_*v_;ge(He,je,me(xe,{brighter:function(t){return t=null==t?Zv:Math.pow(Zv,t),new He(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?$v:Math.pow($v,t),new He(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*o_,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new Ne(255*(n+e*(v_*r+__*i)),255*(n+e*(y_*r+g_*i)),255*(n+e*(m_*r)),this.opacity)}}));var M_,T_,k_,N_,S_=function t(n){function e(t,n){var e=r((t=ke(t)).r,(n=ke(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),u=r(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}var r=Qe(n);return e.gamma=t,e}(1),A_=tr(Ve),E_=tr(We),C_=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,z_=new RegExp(C_.source,"g"),P_=180/Math.PI,q_={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},L_=pr(lr,"px, ","px)","deg)"),R_=pr(hr,", ",")",")"),U_=Math.SQRT2,D_=2,O_=4,F_=1e-12,I_=gr(Je),Y_=gr(Ke),B_=xr(Je),j_=xr(Ke),H_=br(Je),X_=br(Ke),V_={value:function(){}};Tr.prototype=Mr.prototype={constructor:Tr,on:function(t,n){var e,r=this._,i=kr(t+"",r),o=-1,u=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<u;)if(e=(t=i[o]).type)r[e]=Sr(r[e],t.name,n);else if(null==n)for(e in r)r[e]=Sr(r[e],t.name,null);return this}for(;++o<u;)if((e=(t=i[o]).type)&&(e=Nr(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new Tr(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],o=0,e=r.length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var W_,$_,Z_=zr(","),G_=Z_.parse,J_=Z_.parseRows,Q_=Z_.format,K_=Z_.formatRows,ty=zr("\t"),ny=ty.parse,ey=ty.parseRows,ry=ty.format,iy=ty.formatRows,oy=Rr("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)}),uy=Rr("application/json",function(t){return JSON.parse(t.responseText)}),ay=Rr("text/plain",function(t){return t.responseText}),cy=Rr("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n}),sy=Ur("text/csv",G_),fy=Ur("text/tab-separated-values",ny),ly=0,hy=0,py=0,dy=1e3,vy=0,_y=0,yy=0,gy="object"==typeof performance&&performance.now?performance:Date,my="function"==typeof requestAnimationFrame?gy===Date?function(t){requestAnimationFrame(function(){t(gy.now())})}:requestAnimationFrame:function(t){setTimeout(t,17)};Ir.prototype=Yr.prototype={constructor:Ir,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?Or():+e)+(null==n?0:+n),this._next||$_===this||($_?$_._next=this:W_=this,$_=this),this._call=t,this._time=e,Vr()},stop:function(){this._call&&(this._call=null,this._time=1/0,Vr())}};var xy=new Date,by=new Date,wy=Zr(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});wy.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Zr(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):wy:null};var My=wy.range,Ty=1e3,ky=6e4,Ny=36e5,Sy=864e5,Ay=6048e5,Ey=Zr(function(t){t.setTime(Math.floor(t/Ty)*Ty)},function(t,n){t.setTime(+t+n*Ty)},function(t,n){return(n-t)/Ty},function(t){return t.getUTCSeconds()}),Cy=Ey.range,zy=Zr(function(t){t.setTime(Math.floor(t/ky)*ky)},function(t,n){t.setTime(+t+n*ky)},function(t,n){return(n-t)/ky},function(t){return t.getMinutes()}),Py=zy.range,qy=Zr(function(t){var n=t.getTimezoneOffset()*ky%Ny;n<0&&(n+=Ny),t.setTime(Math.floor((+t-n)/Ny)*Ny+n)},function(t,n){t.setTime(+t+n*Ny)},function(t,n){return(n-t)/Ny},function(t){return t.getHours()}),Ly=qy.range,Ry=Zr(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ky)/Sy},function(t){return t.getDate()-1}),Uy=Ry.range,Dy=Gr(0),Oy=Gr(1),Fy=Gr(2),Iy=Gr(3),Yy=Gr(4),By=Gr(5),jy=Gr(6),Hy=Dy.range,Xy=Oy.range,Vy=Fy.range,Wy=Iy.range,$y=Yy.range,Zy=By.range,Gy=jy.range,Jy=Zr(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),Qy=Jy.range,Ky=Zr(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});Ky.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Zr(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var tg=Ky.range,ng=Zr(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*ky)},function(t,n){return(n-t)/ky},function(t){return t.getUTCMinutes()}),eg=ng.range,rg=Zr(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+n*Ny)},function(t,n){return(n-t)/Ny},function(t){return t.getUTCHours()}),ig=rg.range,og=Zr(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/Sy},function(t){return t.getUTCDate()-1}),ug=og.range,ag=Jr(0),cg=Jr(1),sg=Jr(2),fg=Jr(3),lg=Jr(4),hg=Jr(5),pg=Jr(6),dg=ag.range,vg=cg.range,_g=sg.range,yg=fg.range,gg=lg.range,mg=hg.range,xg=pg.range,bg=Zr(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),wg=bg.range,Mg=Zr(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});Mg.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Zr(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var Tg,kg=Mg.range,Ng={"":ni,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return ri(100*t,n)},r:ri,s:ei,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},Sg=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;oi.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var Ag,Eg=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];t.format,t.formatPrefix,ci({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var Cg,zg={"-":"",_:" ",0:"0"},Pg=/^\s*\d+/,qg=/^%/,Lg=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;t.timeFormat,t.timeParse,t.utcFormat,t.utcParse,so({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Rg="%Y-%m-%dT%H:%M:%S.%LZ",Ug=Date.prototype.toISOString?fo:t.utcFormat(Rg),Dg=+new Date("2000-01-01T00:00:00.000Z")?lo:t.utcParse(Rg),Og=Array.prototype,Fg=Og.map,Ig=Og.slice,Yg={name:"implicit"},Bg=[0,1],jg=1e3,Hg=60*jg,Xg=60*Hg,Vg=24*Xg,Wg=7*Vg,$g=30*Vg,Zg=365*Vg,Gg=Zo("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Jg=Zo("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),Qg=Zo("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),Kg=Zo("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),tm=X_(je(300,.5,0),je(-240,.5,1)),nm=X_(je(-100,.75,.35),je(80,1.5,.8)),em=X_(je(260,.75,.35),je(80,1.5,.8)),rm=je(),im=Jo(Zo("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),om=Jo(Zo("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),um=Jo(Zo("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),am=Jo(Zo("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),cm="http://www.w3.org/1999/xhtml",sm={
svg:"http://www.w3.org/2000/svg",xhtml:cm,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},fm=0;iu.prototype=ru.prototype={constructor:iu,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var lm=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var hm=document.documentElement;if(!hm.matches){var pm=hm.webkitMatchesSelector||hm.msMatchesSelector||hm.mozMatchesSelector||hm.oMatchesSelector;lm=function(t){return function(){return pm.call(this,t)}}}}var dm=lm,vm={};if(t.event=null,"undefined"!=typeof document){var _m=document.documentElement;"onmouseenter"in _m||(vm={mouseenter:"mouseover",mouseleave:"mouseout"})}Tu.prototype={constructor:Tu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var ym="$";ia.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var gm=[null];qa.prototype=La.prototype={constructor:qa,select:yu,selectAll:xu,filter:bu,data:Au,enter:Mu,exit:Eu,merge:Cu,order:zu,sort:Pu,call:Lu,nodes:Ru,node:Uu,size:Du,empty:Ou,each:Fu,attr:Vu,style:Ju,property:na,classed:fa,text:da,html:ga,raise:xa,lower:wa,append:Ma,insert:ka,remove:Sa,datum:Aa,on:fu,dispatch:Pa};var mm=Mr("start","end","interrupt"),xm=[],bm=0,wm=1,Mm=2,Tm=3,km=4,Nm=5,Sm=La.prototype.constructor,Am=0,Em=La.prototype;Uc.prototype=Dc.prototype={constructor:Uc,select:wc,selectAll:Mc,filter:vc,merge:_c,selection:Tc,transition:Rc,call:Em.call,nodes:Em.nodes,node:Em.node,size:Em.size,empty:Em.empty,each:Em.each,on:mc,attr:rc,attrTween:uc,style:Ec,styleTween:zc,text:Lc,remove:bc,tween:$a,delay:sc,duration:hc,ease:dc};var Cm={time:null,delay:0,duration:250,ease:et};La.prototype.interrupt=Xa,La.prototype.transition=Ic;var zm=[null],Pm=Array.prototype.slice,qm=1,Lm=2,Rm=3,Um=4,Dm=1e-6;ws.prototype=ys.prototype={constructor:ws,each:us,eachAfter:cs,eachBefore:as,sum:ss,sort:fs,path:ls,ancestors:ps,descendants:ds,leaves:vs,links:_s,copy:gs};var Om="$",Fm={depth:-1},Im={};of.prototype=Object.create(ws.prototype);var Ym=(1+Math.sqrt(5))/2,Bm=function t(n){function e(t,e,r,i,o){sf(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Ym),jm=function t(n){function e(t,e,r,i,o){if((u=t._squarify)&&u.ratio===n)for(var u,a,c,s,f,l=-1,h=u.length,p=t.value;++l<h;){for(a=u[l],c=a.children,s=a.value=0,f=c.length;s<f;++s)a.value+=c[s].value;a.dice?Ws(a,e,r,i,r+=(o-r)*a.value/p):cf(a,e,r,e+=(i-e)*a.value/p,o),p-=a.value}else t._squarify=u=sf(n,t,e,r,i,o),u.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Ym),Hm=10,Xm=Math.PI*(3-Math.sqrt(5));Pf.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t},If.prototype={constructor:If,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=Hf(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(Bf(this,e),t=e,e=t.U),e.C=!1,r.C=!0,jf(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(jf(this,e),t=e,e=t.U),e.C=!1,r.C=!0,Bf(this,r))),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,u=t.R;if(e=o?u?Hf(u):o:u,i?i.L===t?i.L=e:i.R=e:this._=e,o&&u?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==u?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=u,u.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r){if(t&&t.C)return void(t.C=!1);do{if(t===this._)break;if(t===i.L){if(n=i.R,n.C&&(n.C=!1,i.C=!0,Bf(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,jf(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,Bf(this,i),t=this._;break}}else if(n=i.L,n.C&&(n.C=!1,i.C=!0,jf(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,Bf(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,jf(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var Vm,Wm,$m,Zm,Gm,Jm=[],Qm=[],Km=1e-6,tx=1e-12;vl.prototype={constructor:vl,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return Kf(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){for(var i,o=e.site,u=e.halfedges,a=-1,c=u.length,s=n[u[c-1]],f=s.left===o?s.right:s.left;++a<c;)i=f,s=n[u[a]],f=s.left===o?s.right:s.left,r<i.index&&r<f.index&&pl(o,i,f)<0&&t.push([o.data,i.data,f.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})}},ml.prototype={constructor:ml,scale:function(t){return 1===t?this:new ml(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new ml(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var nx=new ml(1,0,0);xl.prototype=ml.prototype;var ex={name:"drag"},rx={name:"space"},ix={name:"handle"},ox={name:"center"},ux={name:"x",handles:["e","w"].map(zl),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},ax={name:"y",handles:["n","s"].map(zl),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},cx={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(zl),input:function(t){return t},output:function(t){return t}},sx={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},fx={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},lx={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},hx={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},px={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},dx=Math.cos,vx=Math.sin,_x=Math.PI,yx=_x/2,gx=2*_x,mx=Math.max,xx=Array.prototype.slice;Jl.prototype={constructor:Jl,reset:function(){this.s=this.t=0},add:function(t){Ql(nb,t,this.t),Ql(this,nb.s,this.s),this.s?this.t+=nb.t:this.s=nb.t},valueOf:function(){return this.s}};var bx,wx,Mx,Tx,kx,Nx,Sx,Ax,Ex,Cx,zx,Px,qx,Lx,Rx,Ux,Dx,Ox,Fx,Ix,Yx,Bx,jx,Hx,Xx,Vx,Wx,$x,Zx,Gx,Jx,Qx,Kx,tb,nb=new Jl,eb=1e-6,rb=1e-12,ib=Math.PI,ob=ib/2,ub=ib/4,ab=2*ib,cb=180/ib,sb=ib/180,fb=Math.abs,lb=Math.atan,hb=Math.atan2,pb=Math.cos,db=Math.ceil,vb=Math.exp,_b=Math.log,yb=Math.pow,gb=Math.sin,mb=Math.sign||function(t){return t>0?1:t<0?-1:0},xb=Math.sqrt,bb=Math.tan,wb={Feature:function(t,n){rh(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)rh(e[r].geometry,n)}},Mb={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){ih(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)ih(e[r],n,0)},Polygon:function(t,n){oh(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)oh(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)rh(e[r],n)}},Tb={point:eh,lineStart:eh,lineEnd:eh,polygonStart:function(){bx.reset(),Tb.lineStart=ah,Tb.lineEnd=ch},polygonEnd:function(){var t=+bx;wx.add(t<0?ab+t:t),this.lineStart=this.lineEnd=this.point=eh},sphere:function(){wx.add(ab)}},kb={point:mh,lineStart:bh,lineEnd:wh,polygonStart:function(){kb.point=Mh,kb.lineStart=Th,kb.lineEnd=kh,Ux.reset(),Tb.polygonStart()},polygonEnd:function(){Tb.polygonEnd(),kb.point=mh,kb.lineStart=bh,kb.lineEnd=wh,bx<0?(Ax=-(Cx=180),Ex=-(zx=90)):Ux>eb?zx=90:Ux<-eb&&(Ex=-90),Ox[0]=Ax,Ox[1]=Cx}},Nb={sphere:eh,point:Ch,lineStart:Ph,lineEnd:Rh,polygonStart:function(){Nb.lineStart=Uh,Nb.lineEnd=Dh},polygonEnd:function(){Nb.lineStart=Ph,Nb.lineEnd=Rh}};jh.invert=jh;var Sb,Ab,Eb,Cb,zb,Pb,qb,Lb,Rb,Ub,Db,Ob,Fb=1e9,Ib=-Fb,Yb={sphere:eh,point:eh,lineStart:up,lineEnd:eh,polygonStart:eh,polygonEnd:eh},Bb=[null,null],jb={type:"LineString",coordinates:Bb},Hb=Gl(),Xb=Gl(),Vb={point:eh,lineStart:eh,lineEnd:eh,polygonStart:function(){Vb.lineStart=yp,Vb.lineEnd=xp},polygonEnd:function(){Vb.lineStart=Vb.lineEnd=Vb.point=eh,Hb.add(fb(Xb)),Xb.reset()},result:function(){var t=Hb/2;return Hb.reset(),t}},Wb=1/0,$b=Wb,Zb=-Wb,Gb=Zb,Jb={point:bp,lineStart:eh,lineEnd:eh,polygonStart:eh,polygonEnd:eh,result:function(){var t=[[Wb,$b],[Zb,Gb]];return Zb=Gb=-($b=Wb=1/0),t}},Qb=0,Kb=0,tw=0,nw=0,ew=0,rw=0,iw=0,ow=0,uw=0,aw={point:wp,lineStart:Mp,lineEnd:Np,polygonStart:function(){aw.lineStart=Sp,aw.lineEnd=Ap},polygonEnd:function(){aw.point=wp,aw.lineStart=Mp,aw.lineEnd=Np},result:function(){var t=uw?[iw/uw,ow/uw]:rw?[nw/rw,ew/rw]:tw?[Qb/tw,Kb/tw]:[NaN,NaN];return Qb=Kb=tw=nw=ew=rw=iw=ow=uw=0,t}},cw=Gl(),sw=Up(function(){return!0},Fp,Yp,[-ib,-ob]);Xp.prototype={point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var fw=16,lw=pb(30*sb),hw=Hp({point:function(t,n){this.stream.point(t*sb,n*sb)}}),pw=rd(function(t){return xb(2/(1+t))});pw.invert=id(function(t){return 2*th(t/2)});var dw=rd(function(t){return(t=Kl(t))&&t/gb(t)});dw.invert=id(function(t){return t}),ad.invert=function(t,n){return[t,2*lb(vb(n))-ob]},pd.invert=pd,yd.invert=id(lb),md.invert=id(th),bd.invert=id(function(t){return 2+lb(t)}),Md.invert=function(t,n){return[-n,2*lb(vb(t))-ob]},t.version=kd,t.bisect=Sd,t.bisectRight=Sd,t.bisectLeft=Ad,t.ascending=n,t.bisector=e,t.descending=i,t.deviation=a,t.extent=c,t.histogram=v,t.thresholdFreedmanDiaconis=y,t.thresholdScott=g,t.thresholdSturges=d,t.max=m,t.mean=x,t.median=b,t.merge=w,t.min=M,t.pairs=T,t.permute=k,t.quantile=_,t.range=l,t.scan=N,t.shuffle=S,t.sum=A,t.ticks=h,t.tickStep=p,t.transpose=E,t.variance=u,t.zip=z,t.entries=j,t.keys=Y,t.values=B,t.map=q,t.set=I,t.nest=L,t.randomUniform=H,t.randomNormal=X,t.randomLogNormal=V,t.randomBates=$,t.randomIrwinHall=W,t.randomExponential=Z,t.easeLinear=G,t.easeQuad=K,t.easeQuadIn=J,t.easeQuadOut=Q,t.easeQuadInOut=K,t.easeCubic=et,t.easeCubicIn=tt,t.easeCubicOut=nt,t.easeCubicInOut=et,t.easePoly=Id,t.easePolyIn=Od,t.easePolyOut=Fd,t.easePolyInOut=Id,t.easeSin=ot,t.easeSinIn=rt,t.easeSinOut=it,t.easeSinInOut=ot,t.easeExp=ct,t.easeExpIn=ut,t.easeExpOut=at,t.easeExpInOut=ct,t.easeCircle=lt,t.easeCircleIn=st,t.easeCircleOut=ft,t.easeCircleInOut=lt,t.easeBounce=pt,t.easeBounceIn=ht,t.easeBounceOut=pt,t.easeBounceInOut=dt,t.easeBack=ev,t.easeBackIn=tv,t.easeBackOut=nv,t.easeBackInOut=ev,t.easeElastic=av,t.easeElasticIn=uv,t.easeElasticOut=av,t.easeElasticInOut=cv,t.polygonArea=vt,t.polygonCentroid=_t,t.polygonHull=xt,t.polygonContains=bt,t.polygonLength=wt,t.path=Tt,t.quadtree=jt,t.queue=Qt,t.arc=sn,t.area=vn,t.line=dn,t.pie=gn,t.radialArea=Mn,t.radialLine=wn,t.symbol=Tn,t.symbols=Fv,t.symbolCircle=bv,t.symbolCross=wv,t.symbolDiamond=kv,t.symbolSquare=zv,t.symbolStar=Cv,t.symbolTriangle=qv,t.symbolWye=Ov,t.curveBasisClosed=Cn,t.curveBasisOpen=Pn,t.curveBasis=An,t.curveBundle=Iv,t.curveCardinalClosed=Bv,t.curveCardinalOpen=jv,t.curveCardinal=Yv,t.curveCatmullRomClosed=Xv,t.curveCatmullRomOpen=Vv,t.curveCatmullRom=Hv,t.curveLinearClosed=jn,t.curveLinear=ln,t.curveMonotoneX=Jn,t.curveMonotoneY=Qn,t.curveNatural=ne,t.curveStep=re,t.curveStepAfter=oe,t.curveStepBefore=ie,t.stack=se,t.stackOffsetExpand=fe,t.stackOffsetNone=ue,t.stackOffsetSilhouette=le,t.stackOffsetWiggle=he,t.stackOrderAscending=pe,t.stackOrderDescending=ve,t.stackOrderInsideOut=_e,t.stackOrderNone=ae,t.stackOrderReverse=ye,t.color=be,t.rgb=ke,t.hsl=Ee,t.lab=qe,t.hcl=Ie,t.cubehelix=je,t.interpolate=cr,t.interpolateArray=nr,t.interpolateDate=er,t.interpolateNumber=rr,t.interpolateObject=ir,t.interpolateRound=sr,t.interpolateString=ar,t.interpolateTransformCss=L_,t.interpolateTransformSvg=R_,t.interpolateZoom=yr,t.interpolateRgb=S_,t.interpolateRgbBasis=A_,t.interpolateRgbBasisClosed=E_,t.interpolateHsl=I_,t.interpolateHslLong=Y_,t.interpolateLab=mr,t.interpolateHcl=B_,t.interpolateHclLong=j_,t.interpolateCubehelix=H_,t.interpolateCubehelixLong=X_,t.interpolateBasis=Ve,t.interpolateBasisClosed=We,t.quantize=wr,t.dispatch=Mr,t.dsvFormat=zr,t.csvParse=G_,t.csvParseRows=J_,t.csvFormat=Q_,t.csvFormatRows=K_,t.tsvParse=ny,t.tsvParseRows=ey,t.tsvFormat=ry,t.tsvFormatRows=iy,t.request=Pr,t.html=oy,t.json=uy,t.text=ay,t.xml=cy,t.csv=sy,t.tsv=fy,t.now=Or,t.timer=Yr,t.timerFlush=Br,t.timeout=Wr,t.interval=$r,t.timeInterval=Zr,t.timeMillisecond=wy,t.timeMilliseconds=My,t.timeSecond=Ey,t.timeSeconds=Cy,t.timeMinute=zy,t.timeMinutes=Py,t.timeHour=qy,t.timeHours=Ly,t.timeDay=Ry,t.timeDays=Uy,t.timeWeek=Dy;t.timeWeeks=Hy;t.timeSunday=Dy,t.timeSundays=Hy,t.timeMonday=Oy,t.timeMondays=Xy,t.timeTuesday=Fy,t.timeTuesdays=Vy,t.timeWednesday=Iy,t.timeWednesdays=Wy,t.timeThursday=Yy,t.timeThursdays=$y,t.timeFriday=By,t.timeFridays=Zy,t.timeSaturday=jy,t.timeSaturdays=Gy,t.timeMonth=Jy,t.timeMonths=Qy,t.timeYear=Ky,t.timeYears=tg,t.utcMillisecond=wy,t.utcMilliseconds=My,t.utcSecond=Ey,t.utcSeconds=Cy,t.utcMinute=ng,t.utcMinutes=eg,t.utcHour=rg,t.utcHours=ig,t.utcDay=og,t.utcDays=ug,t.utcWeek=ag,t.utcWeeks=dg,t.utcSunday=ag,t.utcSundays=dg,t.utcMonday=cg,t.utcMondays=vg,t.utcTuesday=sg,t.utcTuesdays=_g,t.utcWednesday=fg,t.utcWednesdays=yg,t.utcThursday=lg,t.utcThursdays=gg,t.utcFriday=hg,t.utcFridays=mg,t.utcSaturday=pg,t.utcSaturdays=xg,t.utcMonth=bg,t.utcMonths=wg,t.utcYear=Mg,t.utcYears=kg,t.formatLocale=ai,t.formatDefaultLocale=ci,t.formatSpecifier=ii,t.precisionFixed=si,t.precisionPrefix=fi,t.precisionRound=li,t.isoFormat=Ug,t.isoParse=Dg,t.timeFormatLocale=vi,t.timeFormatDefaultLocale=so,t.scaleBand=po,t.scalePoint=_o,t.scaleIdentity=Eo,t.scaleLinear=Ao,t.scaleLog=Do,t.scaleOrdinal=ho,t.scaleImplicit=Yg,t.scalePow=Fo,t.scaleSqrt=Io,t.scaleQuantile=Yo,t.scaleQuantize=Bo,t.scaleThreshold=jo,t.scaleTime=Wo,t.scaleUtc=$o,t.schemeCategory10=Gg,t.schemeCategory20b=Jg,t.schemeCategory20c=Qg,t.schemeCategory20=Kg,t.scaleSequential=Qo,t.interpolateCubehelixDefault=tm,t.interpolateRainbow=Go,t.interpolateWarm=nm,t.interpolateCool=em,t.interpolateViridis=im,t.interpolateMagma=om,t.interpolateInferno=um,t.interpolatePlasma=am,t.creator=eu,t.customEvent=lu,t.local=ru,t.matcher=dm,t.mouse=du,t.namespace=Ko,t.namespaces=sm,t.select=Ra,t.selectAll=Ua,t.selection=La,t.selector=_u,t.selectorAll=mu,t.touch=Da,t.touches=Oa,t.window=Wu,t.active=Yc,t.interrupt=Ha,t.transition=Dc,t.axisTop=$c,t.axisRight=Zc,t.axisBottom=Gc,t.axisLeft=Jc,t.cluster=os,t.hierarchy=ys,t.pack=Bs,t.packSiblings=Us,t.packEnclose=ks,t.partition=$s,t.stratify=Js,t.tree=af,t.treemap=ff,t.treemapBinary=lf,t.treemapDice=Ws,t.treemapSlice=cf,t.treemapSliceDice=hf,t.treemapSquarify=Bm,t.treemapResquarify=jm,t.forceCenter=pf,t.forceCollide=gf,t.forceLink=xf,t.forceManyBody=Tf,t.forceSimulation=Mf,t.forceX=kf,t.forceY=Nf,t.drag=Uf,t.dragDisable=Ef,t.dragEnable=Cf,t.voronoi=_l,t.zoom=Nl,t.zoomIdentity=nx,t.zoomTransform=xl,t.brush=Fl,t.brushX=Dl,t.brushY=Ol,t.brushSelection=Ul,t.chord=Bl,t.ribbon=Zl,t.geoAlbers=td,t.geoAlbersUsa=ed,t.geoArea=lh,t.geoAzimuthalEqualArea=od,t.geoAzimuthalEqualAreaRaw=pw,t.geoAzimuthalEquidistant=ud,t.geoAzimuthalEquidistantRaw=dw,t.geoBounds=Eh,t.geoCentroid=Ih,t.geoCircle=Jh,t.geoClipExtent=op,t.geoConicConformal=hd,t.geoConicConformalRaw=ld,t.geoConicEqualArea=Kp,t.geoConicEqualAreaRaw=Qp,t.geoConicEquidistant=_d,t.geoConicEquidistantRaw=vd,t.geoDistance=lp,t.geoEquirectangular=dd,t.geoEquirectangularRaw=pd,t.geoGnomonic=gd,t.geoGnomonicRaw=yd,t.geoGraticule=dp,t.geoInterpolate=vp,t.geoLength=fp,t.geoMercator=cd,t.geoMercatorRaw=ad,t.geoOrthographic=xd,t.geoOrthographicRaw=md,t.geoPath=Lp,t.geoProjection=Zp,t.geoProjectionMutator=Gp,t.geoRotation=$h,t.geoStereographic=wd,t.geoStereographicRaw=bd,t.geoStream=uh,t.geoTransform=jp,t.geoTransverseMercator=Td,t.geoTransverseMercatorRaw=Md,Object.defineProperty(t,"__esModule",{value:!0})});
/* nvd3 version 1.8.4-dev (https://github.com/novus/nvd3) 2016-07-03 */
(function(){

// set up main nv object
var nv = {};

// the major global objects under the nv namespace
nv.dev = false; //set false when in production
nv.tooltip = nv.tooltip || {}; // For the tooltip system
nv.utils = nv.utils || {}; // Utility subsystem
nv.models = nv.models || {}; //stores all the possible models/components
nv.charts = {}; //stores all the ready to use charts
nv.logs = {}; //stores some statistics and potential error messages
nv.dom = {}; //DOM manipulation functions

// Node/CommonJS - require D3
if (typeof(module) !== 'undefined' && typeof(exports) !== 'undefined' && typeof(d3) == 'undefined') {
    d3 = require('d3');
}

nv.dispatch = d3.dispatch('render_start', 'render_end');

// Function bind polyfill
// Needed ONLY for phantomJS as it's missing until version 2.0 which is unreleased as of this comment
// https://github.com/ariya/phantomjs/issues/10522
// http://kangax.github.io/compat-table/es5/#Function.prototype.bind
// phantomJS is used for running the test suite
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    };
}

//  Development render timers - disabled if dev = false
if (nv.dev) {
    nv.dispatch.on('render_start', function(e) {
        nv.logs.startTime = +new Date();
    });

    nv.dispatch.on('render_end', function(e) {
        nv.logs.endTime = +new Date();
        nv.logs.totalTime = nv.logs.endTime - nv.logs.startTime;
        nv.log('total', nv.logs.totalTime); // used for development, to keep track of graph generation times
    });
}

// Logs all arguments, and returns the last so you can test things in place
// Note: in IE8 console.log is an object not a function, and if modernizr is used
// then calling Function.prototype.bind with with anything other than a function
// causes a TypeError to be thrown.
nv.log = function() {
    if (nv.dev && window.console && console.log && console.log.apply)
        console.log.apply(console, arguments);
    else if (nv.dev && window.console && typeof console.log == "function" && Function.prototype.bind) {
        var log = Function.prototype.bind.call(console.log, console);
        log.apply(console, arguments);
    }
    return arguments[arguments.length - 1];
};

// print console warning, should be used by deprecated functions
nv.deprecated = function(name, info) {
    if (console && console.warn) {
        console.warn('nvd3 warning: `' + name + '` has been deprecated. ', info || '');
    }
};

// The nv.render function is used to queue up chart rendering
// in non-blocking async functions.
// When all queued charts are done rendering, nv.dispatch.render_end is invoked.
nv.render = function render(step) {
    // number of graphs to generate in each timeout loop
    step = step || 1;

    nv.render.active = true;
    nv.dispatch.render_start();

    var renderLoop = function() {
        var chart, graph;

        for (var i = 0; i < step && (graph = nv.render.queue[i]); i++) {
            chart = graph.generate();
            if (typeof graph.callback == typeof(Function)) graph.callback(chart);
        }

        nv.render.queue.splice(0, i);

        if (nv.render.queue.length) {
            setTimeout(renderLoop);
        }
        else {
            nv.dispatch.render_end();
            nv.render.active = false;
        }
    };

    setTimeout(renderLoop);
};

nv.render.active = false;
nv.render.queue = [];

/*
Adds a chart to the async rendering queue. This method can take arguments in two forms:
nv.addGraph({
    generate: <Function>
    callback: <Function>
})

or

nv.addGraph(<generate Function>, <callback Function>)

The generate function should contain code that creates the NVD3 model, sets options
on it, adds data to an SVG element, and invokes the chart model. The generate function
should return the chart model.  See examples/lineChart.html for a usage example.

The callback function is optional, and it is called when the generate function completes.
*/
nv.addGraph = function(obj) {
    if (typeof arguments[0] === typeof(Function)) {
        obj = {generate: arguments[0], callback: arguments[1]};
    }

    nv.render.queue.push(obj);

    if (!nv.render.active) {
        nv.render();
    }
};

// Node/CommonJS exports
if (typeof(module) !== 'undefined' && typeof(exports) !== 'undefined') {
  module.exports = nv;
}

if (typeof(window) !== 'undefined') {
  window.nv = nv;
}
/* Facade for queueing DOM write operations
 * with Fastdom (https://github.com/wilsonpage/fastdom)
 * if available.
 * This could easily be extended to support alternate
 * implementations in the future.
 */
nv.dom.write = function(callback) {
	if (window.fastdom !== undefined) {
		return fastdom.mutate(callback);
	}
	return callback();
};

/* Facade for queueing DOM read operations
 * with Fastdom (https://github.com/wilsonpage/fastdom)
 * if available.
 * This could easily be extended to support alternate
 * implementations in the future.
 */
nv.dom.read = function(callback) {
	if (window.fastdom !== undefined) {
		return fastdom.measure(callback);
	}
	return callback();
};
/* Utility class to handle creation of an interactive layer.
 This places a rectangle on top of the chart. When you mouse move over it, it sends a dispatch
 containing the X-coordinate. It can also render a vertical line where the mouse is located.

 dispatch.elementMousemove is the important event to latch onto.  It is fired whenever the mouse moves over
 the rectangle. The dispatch is given one object which contains the mouseX/Y location.
 It also has 'pointXValue', which is the conversion of mouseX to the x-axis scale.
 */
nv.interactiveGuideline = function() {
    "use strict";

    var margin = { left: 0, top: 0 } //Pass the chart's top and left magins. Used to calculate the mouseX/Y.
        ,   width = null
        ,   height = null
        ,   xScale = d3.scale.linear()
        ,   dispatch = d3.dispatch('elementMousemove', 'elementMouseout', 'elementClick', 'elementDblclick', 'elementMouseDown', 'elementMouseUp')
        ,   showGuideLine = true
        ,   svgContainer = null // Must pass the chart's svg, we'll use its mousemove event.
        ,   tooltip = nv.models.tooltip()
        ,   isMSIE =  window.ActiveXObject// Checkt if IE by looking for activeX. (excludes IE11)
    ;

    tooltip
        .duration(0)
        .hideDelay(0)
        .hidden(false);

    function layer(selection) {
        selection.each(function(data) {
            var container = d3.select(this);
            var availableWidth = (width || 960), availableHeight = (height || 400);
            var wrap = container.selectAll("g.nv-wrap.nv-interactiveLineLayer")
                .data([data]);
            var wrapEnter = wrap.enter()
                .append("g").attr("class", " nv-wrap nv-interactiveLineLayer");
            wrapEnter.append("g").attr("class","nv-interactiveGuideLine");

            if (!svgContainer) {
                return;
            }

            function mouseHandler() {
                var d3mouse = d3.mouse(this);
                var mouseX = d3mouse[0];
                var mouseY = d3mouse[1];
                var subtractMargin = true;
                var mouseOutAnyReason = false;
                if (isMSIE) {
                    /*
                     D3.js (or maybe SVG.getScreenCTM) has a nasty bug in Internet Explorer 10.
                     d3.mouse() returns incorrect X,Y mouse coordinates when mouse moving
                     over a rect in IE 10.
                     However, d3.event.offsetX/Y also returns the mouse coordinates
                     relative to the triggering <rect>. So we use offsetX/Y on IE.
                     */
                    mouseX = d3.event.offsetX;
                    mouseY = d3.event.offsetY;

                    /*
                     On IE, if you attach a mouse event listener to the <svg> container,
                     it will actually trigger it for all the child elements (like <path>, <circle>, etc).
                     When this happens on IE, the offsetX/Y is set to where ever the child element
                     is located.
                     As a result, we do NOT need to subtract margins to figure out the mouse X/Y
                     position under this scenario. Removing the line below *will* cause
                     the interactive layer to not work right on IE.
                     */
                    if(d3.event.target.tagName !== "svg") {
                        subtractMargin = false;
                    }

                    if (d3.event.target.className.baseVal.match("nv-legend")) {
                        mouseOutAnyReason = true;
                    }

                }

                if(subtractMargin) {
                    mouseX -= margin.left;
                    mouseY -= margin.top;
                }

                /* If mouseX/Y is outside of the chart's bounds,
                 trigger a mouseOut event.
                 */
                if (d3.event.type === 'mouseout'
                    || mouseX < 0 || mouseY < 0
                    || mouseX > availableWidth || mouseY > availableHeight
                    || (d3.event.relatedTarget && d3.event.relatedTarget.ownerSVGElement === undefined)
                    || mouseOutAnyReason
                    ) {

                    if (isMSIE) {
                        if (d3.event.relatedTarget
                            && d3.event.relatedTarget.ownerSVGElement === undefined
                            && (d3.event.relatedTarget.className === undefined
                                || d3.event.relatedTarget.className.match(tooltip.nvPointerEventsClass))) {

                            return;
                        }
                    }
                    dispatch.elementMouseout({
                        mouseX: mouseX,
                        mouseY: mouseY
                    });
                    layer.renderGuideLine(null); //hide the guideline
                    tooltip.hidden(true);
                    return;
                } else {
                    tooltip.hidden(false);
                }


                var scaleIsOrdinal = typeof xScale.rangeBands === 'function';
                var pointXValue = undefined;

                // Ordinal scale has no invert method
                if (scaleIsOrdinal) {
                    var elementIndex = d3.bisect(xScale.range(), mouseX) - 1;
                    // Check if mouseX is in the range band
                    if (xScale.range()[elementIndex] + xScale.rangeBand() >= mouseX) {
                        pointXValue = xScale.domain()[d3.bisect(xScale.range(), mouseX) - 1];
                    }
                    else {
                        dispatch.elementMouseout({
                            mouseX: mouseX,
                            mouseY: mouseY
                        });
                        layer.renderGuideLine(null); //hide the guideline
                        tooltip.hidden(true);
                        return;
                    }
                }
                else {
                    pointXValue = xScale.invert(mouseX);
                }

                dispatch.elementMousemove({
                    mouseX: mouseX,
                    mouseY: mouseY,
                    pointXValue: pointXValue
                });

                //If user double clicks the layer, fire a elementDblclick
                if (d3.event.type === "dblclick") {
                    dispatch.elementDblclick({
                        mouseX: mouseX,
                        mouseY: mouseY,
                        pointXValue: pointXValue
                    });
                }

                // if user single clicks the layer, fire elementClick
                if (d3.event.type === 'click') {
                    dispatch.elementClick({
                        mouseX: mouseX,
                        mouseY: mouseY,
                        pointXValue: pointXValue
                    });
                }

                // if user presses mouse down the layer, fire elementMouseDown
                if (d3.event.type === 'mousedown') {
                	dispatch.elementMouseDown({
                		mouseX: mouseX,
                		mouseY: mouseY,
                		pointXValue: pointXValue
                	});
                }

                // if user presses mouse down the layer, fire elementMouseUp
                if (d3.event.type === 'mouseup') {
                	dispatch.elementMouseUp({
                		mouseX: mouseX,
                		mouseY: mouseY,
                		pointXValue: pointXValue
                	});
                }
            }

            svgContainer
                .on("touchmove",mouseHandler)
                .on("mousemove",mouseHandler, true)
                .on("mouseout" ,mouseHandler,true)
                .on("mousedown" ,mouseHandler,true)
                .on("mouseup" ,mouseHandler,true)
                .on("dblclick" ,mouseHandler)
                .on("click", mouseHandler)
            ;

            layer.guideLine = null;
            //Draws a vertical guideline at the given X postion.
            layer.renderGuideLine = function(x) {
                if (!showGuideLine) return;
                if (layer.guideLine && layer.guideLine.attr("x1") === x) return;
                nv.dom.write(function() {
                    var line = wrap.select(".nv-interactiveGuideLine")
                        .selectAll("line")
                        .data((x != null) ? [nv.utils.NaNtoZero(x)] : [], String);
                    line.enter()
                        .append("line")
                        .attr("class", "nv-guideline")
                        .attr("x1", function(d) { return d;})
                        .attr("x2", function(d) { return d;})
                        .attr("y1", availableHeight)
                        .attr("y2",0);
                    line.exit().remove();
                });
            }
        });
    }

    layer.dispatch = dispatch;
    layer.tooltip = tooltip;

    layer.margin = function(_) {
        if (!arguments.length) return margin;
        margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
        margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
        return layer;
    };

    layer.width = function(_) {
        if (!arguments.length) return width;
        width = _;
        return layer;
    };

    layer.height = function(_) {
        if (!arguments.length) return height;
        height = _;
        return layer;
    };

    layer.xScale = function(_) {
        if (!arguments.length) return xScale;
        xScale = _;
        return layer;
    };

    layer.showGuideLine = function(_) {
        if (!arguments.length) return showGuideLine;
        showGuideLine = _;
        return layer;
    };

    layer.svgContainer = function(_) {
        if (!arguments.length) return svgContainer;
        svgContainer = _;
        return layer;
    };

    return layer;
};

/* Utility class that uses d3.bisect to find the index in a given array, where a search value can be inserted.
 This is different from normal bisectLeft; this function finds the nearest index to insert the search value.

 For instance, lets say your array is [1,2,3,5,10,30], and you search for 28.
 Normal d3.bisectLeft will return 4, because 28 is inserted after the number 10.  But interactiveBisect will return 5
 because 28 is closer to 30 than 10.

 Unit tests can be found in: interactiveBisectTest.html

 Has the following known issues:
 * Will not work if the data points move backwards (ie, 10,9,8,7, etc) or if the data points are in random order.
 * Won't work if there are duplicate x coordinate values.
 */
nv.interactiveBisect = function (values, searchVal, xAccessor) {
    "use strict";
    if (! (values instanceof Array)) {
        return null;
    }
    var _xAccessor;
    if (typeof xAccessor !== 'function') {
        _xAccessor = function(d) {
            return d.x;
        }
    } else {
        _xAccessor = xAccessor;
    }
    var _cmp = function(d, v) {
        // Accessors are no longer passed the index of the element along with
        // the element itself when invoked by d3.bisector.
        //
        // Starting at D3 v3.4.4, d3.bisector() started inspecting the
        // function passed to determine if it should consider it an accessor
        // or a comparator. This meant that accessors that take two arguments
        // (expecting an index as the second parameter) are treated as
        // comparators where the second argument is the search value against
        // which the first argument is compared.
        return _xAccessor(d) - v;
    };

    var bisect = d3.bisector(_cmp).left;
    var index = d3.max([0, bisect(values,searchVal) - 1]);
    var currentValue = _xAccessor(values[index]);

    if (typeof currentValue === 'undefined') {
        currentValue = index;
    }

    if (currentValue === searchVal) {
        return index; //found exact match
    }

    var nextIndex = d3.min([index+1, values.length - 1]);
    var nextValue = _xAccessor(values[nextIndex]);

    if (typeof nextValue === 'undefined') {
        nextValue = nextIndex;
    }

    if (Math.abs(nextValue - searchVal) >= Math.abs(currentValue - searchVal)) {
        return index;
    } else {
        return nextIndex
    }
};

/*
 Returns the index in the array "values" that is closest to searchVal.
 Only returns an index if searchVal is within some "threshold".
 Otherwise, returns null.
 */
nv.nearestValueIndex = function (values, searchVal, threshold) {
    "use strict";
    var yDistMax = Infinity, indexToHighlight = null;
    values.forEach(function(d,i) {
        var delta = Math.abs(searchVal - d);
        if ( d != null && delta <= yDistMax && delta < threshold) {
            yDistMax = delta;
            indexToHighlight = i;
        }
    });
    return indexToHighlight;
};

/* Model which can be instantiated to handle tooltip rendering.
 Example usage:
 var tip = nv.models.tooltip().gravity('w').distance(23)
 .data(myDataObject);

 tip();    //just invoke the returned function to render tooltip.
 */
nv.models.tooltip = function() {
    "use strict";

    /*
    Tooltip data. If data is given in the proper format, a consistent tooltip is generated.
    Example Format of data:
    {
        key: "Date",
        value: "August 2009",
        series: [
            {key: "Series 1", value: "Value 1", color: "#000"},
            {key: "Series 2", value: "Value 2", color: "#00f"}
        ]
    }
    */
    var id = "nvtooltip-" + Math.floor(Math.random() * 100000) // Generates a unique id when you create a new tooltip() object.
        ,   data = null
        ,   gravity = 'w'   // Can be 'n','s','e','w'. Determines how tooltip is positioned.
        ,   distance = 25 // Distance to offset tooltip from the mouse location.
        ,   snapDistance = 0   // Tolerance allowed before tooltip is moved from its current position (creates 'snapping' effect)
        ,   classes = null  // Attaches additional CSS classes to the tooltip DIV that is created.
        ,   hidden = true  // Start off hidden, toggle with hide/show functions below.
        ,   hideDelay = 200  // Delay (in ms) before the tooltip hides after calling hide().
        ,   tooltip = null // d3 select of the tooltip div.
        ,   lastPosition = { left: null, top: null } // Last position the tooltip was in.
        ,   enabled = true  // True -> tooltips are rendered. False -> don't render tooltips.
        ,   duration = 100 // Tooltip movement duration, in ms.
        ,   headerEnabled = true // If is to show the tooltip header.
        ,   nvPointerEventsClass = "nv-pointer-events-none" // CSS class to specify whether element should not have mouse events.
    ;

    // Format function for the tooltip values column.
    var valueFormatter = function(d, i) {
        return d;
    };

    // Format function for the tooltip header value.
    var headerFormatter = function(d) {
        return d;
    };

    var keyFormatter = function(d, i) {
        return d;
    };

    // By default, the tooltip model renders a beautiful table inside a DIV.
    // You can override this function if a custom tooltip is desired.
    var contentGenerator = function(d) {
        if (d === null) {
            return '';
        }

        var table = d3.select(document.createElement("table"));
        if (headerEnabled) {
            var theadEnter = table.selectAll("thead")
                .data([d])
                .enter().append("thead");

            theadEnter.append("tr")
                .append("td")
                .attr("colspan", 3)
                .append("strong")
                .classed("x-value", true)
                .html(headerFormatter(d.value));
        }

        var tbodyEnter = table.selectAll("tbody")
            .data([d])
            .enter().append("tbody");

        var trowEnter = tbodyEnter.selectAll("tr")
                .data(function(p) { return p.series})
                .enter()
                .append("tr")
                .classed("highlight", function(p) { return p.highlight});

        trowEnter.append("td")
            .classed("legend-color-guide",true)
            .append("div")
            .style("background-color", function(p) { return p.color});

        trowEnter.append("td")
            .classed("key",true)
            .classed("total",function(p) { return !!p.total})
            .html(function(p, i) { return keyFormatter(p.key, i)});

        trowEnter.append("td")
            .classed("value",true)
            .html(function(p, i) { return valueFormatter(p.value, i) });

        trowEnter.filter(function (p,i) { return p.percent !== undefined }).append("td")
            .classed("percent", true)
            .html(function(p, i) { return "(" + d3.format('%')(p.percent) + ")" });

        trowEnter.selectAll("td").each(function(p) {
            if (p.highlight) {
                var opacityScale = d3.scale.linear().domain([0,1]).range(["#fff",p.color]);
                var opacity = 0.6;
                d3.select(this)
                    .style("border-bottom-color", opacityScale(opacity))
                    .style("border-top-color", opacityScale(opacity))
                ;
            }
        });

        var html = table.node().outerHTML;
        if (d.footer !== undefined)
            html += "<div class='footer'>" + d.footer + "</div>";
        return html;

    };

    /*
     Function that returns the position (relative to the viewport/document.body)
     the tooltip should be placed in.
     Should return: {
        left: <leftPos>,
        top: <topPos>
     }
     */
    var position = function() {
        var pos = {
            left: d3.event !== null ? d3.event.clientX : 0,
            top: d3.event !== null ? d3.event.clientY : 0
        };

        if(getComputedStyle(document.body).transform != 'none') {
            // Take the offset into account, as now the tooltip is relative
            // to document.body.
            var client = document.body.getBoundingClientRect();
            pos.left -= client.left;
            pos.top -= client.top;
        }

        return pos;
    };

    var dataSeriesExists = function(d) {
        if (d && d.series) {
            if (nv.utils.isArray(d.series)) {
                return true;
            }
            // if object, it's okay just convert to array of the object
            if (nv.utils.isObject(d.series)) {
                d.series = [d.series];
                return true;
            }
        }
        return false;
    };

    // Calculates the gravity offset of the tooltip. Parameter is position of tooltip
    // relative to the viewport.
    var calcGravityOffset = function(pos) {
        var height = tooltip.node().offsetHeight,
            width = tooltip.node().offsetWidth,
            clientWidth = document.documentElement.clientWidth, // Don't want scrollbars.
            clientHeight = document.documentElement.clientHeight, // Don't want scrollbars.
            left, top, tmp;

        // calculate position based on gravity
        switch (gravity) {
            case 'e':
                left = - width - distance;
                top = - (height / 2);
                if(pos.left + left < 0) left = distance;
                if((tmp = pos.top + top) < 0) top -= tmp;
                if((tmp = pos.top + top + height) > clientHeight) top -= tmp - clientHeight;
                break;
            case 'w':
                left = distance;
                top = - (height / 2);
                if (pos.left + left + width > clientWidth) left = - width - distance;
                if ((tmp = pos.top + top) < 0) top -= tmp;
                if ((tmp = pos.top + top + height) > clientHeight) top -= tmp - clientHeight;
                break;
            case 'n':
                left = - (width / 2) - 5; // - 5 is an approximation of the mouse's height.
                top = distance;
                if (pos.top + top + height > clientHeight) top = - height - distance;
                if ((tmp = pos.left + left) < 0) left -= tmp;
                if ((tmp = pos.left + left + width) > clientWidth) left -= tmp - clientWidth;
                break;
            case 's':
                left = - (width / 2);
                top = - height - distance;
                if (pos.top + top < 0) top = distance;
                if ((tmp = pos.left + left) < 0) left -= tmp;
                if ((tmp = pos.left + left + width) > clientWidth) left -= tmp - clientWidth;
                break;
            case 'center':
                left = - (width / 2);
                top = - (height / 2);
                break;
            default:
                left = 0;
                top = 0;
                break;
        }

        return { 'left': left, 'top': top };
    };

    /*
     Positions the tooltip in the correct place, as given by the position() function.
     */
    var positionTooltip = function() {
        nv.dom.read(function() {
            var pos = position(),
                gravityOffset = calcGravityOffset(pos),
                left = pos.left + gravityOffset.left,
                top = pos.top + gravityOffset.top;

            // delay hiding a bit to avoid flickering
            if (hidden) {
                tooltip
                    .interrupt()
                    .transition()
                    .delay(hideDelay)
                    .duration(0)
                    .style('opacity', 0);
            } else {
                // using tooltip.style('transform') returns values un-usable for tween
                var old_translate = 'translate(' + lastPosition.left + 'px, ' + lastPosition.top + 'px)';
                var new_translate = 'translate(' + Math.round(left) + 'px, ' + Math.round(top) + 'px)';
                var translateInterpolator = d3.interpolateString(old_translate, new_translate);
                var is_hidden = tooltip.style('opacity') < 0.1;

                tooltip
                    .interrupt() // cancel running transitions
                    .transition()
                    .duration(is_hidden ? 0 : duration)
                    // using tween since some versions of d3 can't auto-tween a translate on a div
                    .styleTween('transform', function (d) {
                        return translateInterpolator;
                    }, 'important')
                    // Safari has its own `-webkit-transform` and does not support `transform`
                    .styleTween('-webkit-transform', function (d) {
                        return translateInterpolator;
                    })
                    .style('-ms-transform', new_translate)
                    .style('opacity', 1);
            }

            lastPosition.left = left;
            lastPosition.top = top;
        });
    };

    // Creates new tooltip container, or uses existing one on DOM.
    function initTooltip() {
        if (!tooltip || !tooltip.node()) {
            // Create new tooltip div if it doesn't exist on DOM.

            var data = [1];
            tooltip = d3.select(document.body).selectAll('.nvtooltip').data(data);

            tooltip.enter().append('div')
                   .attr("class", "nvtooltip " + (classes ? classes : "xy-tooltip"))
                   .attr("id", id)
                   .style("top", 0).style("left", 0)
                   .style('opacity', 0)
                   .style('position', 'fixed')
                   .selectAll("div, table, td, tr").classed(nvPointerEventsClass, true)
                   .classed(nvPointerEventsClass, true);

            tooltip.exit().remove()
        }
    }

    // Draw the tooltip onto the DOM.
    function nvtooltip() {
        if (!enabled) return;
        if (!dataSeriesExists(data)) return;

        nv.dom.write(function () {
            initTooltip();
            // Generate data and set it into tooltip.
            // Bonus - If you override contentGenerator and return falsey you can use something like
            //         React or Knockout to bind the data for your tooltip.
            var newContent = contentGenerator(data);
            if (newContent) {
                tooltip.node().innerHTML = newContent;
            }

            positionTooltip();
        });

        return nvtooltip;
    }

    nvtooltip.nvPointerEventsClass = nvPointerEventsClass;
    nvtooltip.options = nv.utils.optionsFunc.bind(nvtooltip);

    nvtooltip._options = Object.create({}, {
        // simple read/write options
        duration: {get: function(){return duration;}, set: function(_){duration=_;}},
        gravity: {get: function(){return gravity;}, set: function(_){gravity=_;}},
        distance: {get: function(){return distance;}, set: function(_){distance=_;}},
        snapDistance: {get: function(){return snapDistance;}, set: function(_){snapDistance=_;}},
        classes: {get: function(){return classes;}, set: function(_){classes=_;}},
        enabled: {get: function(){return enabled;}, set: function(_){enabled=_;}},
        hideDelay: {get: function(){return hideDelay;}, set: function(_){hideDelay=_;}},
        contentGenerator: {get: function(){return contentGenerator;}, set: function(_){contentGenerator=_;}},
        valueFormatter: {get: function(){return valueFormatter;}, set: function(_){valueFormatter=_;}},
        headerFormatter: {get: function(){return headerFormatter;}, set: function(_){headerFormatter=_;}},
        keyFormatter: {get: function(){return keyFormatter;}, set: function(_){keyFormatter=_;}},
        headerEnabled: {get: function(){return headerEnabled;}, set: function(_){headerEnabled=_;}},
        position: {get: function(){return position;}, set: function(_){position=_;}},

        // Deprecated options
        chartContainer: {get: function(){return document.body;}, set: function(_){
            // deprecated after 1.8.3
            nv.deprecated('chartContainer', 'feature removed after 1.8.3');
        }},
        fixedTop: {get: function(){return null;}, set: function(_){
            // deprecated after 1.8.1
            nv.deprecated('fixedTop', 'feature removed after 1.8.1');
        }},
        offset: {get: function(){return {left: 0, top: 0};}, set: function(_){
            // deprecated after 1.8.1
            nv.deprecated('offset', 'use chart.tooltip.distance() instead');
        }},

        // options with extra logic
        hidden: {get: function(){return hidden;}, set: function(_){
            if (hidden != _) {
                hidden = !!_;
                nvtooltip();
            }
        }},
        data: {get: function(){return data;}, set: function(_){
            // if showing a single data point, adjust data format with that
            if (_.point) {
                _.value = _.point.x;
                _.series = _.series || {};
                _.series.value = _.point.y;
                _.series.color = _.point.color || _.series.color;
            }
            data = _;
        }},

        // read only properties
        node: {get: function(){return tooltip.node();}, set: function(_){}},
        id: {get: function(){return id;}, set: function(_){}}
    });

    nv.utils.initOptions(nvtooltip);
    return nvtooltip;
};


/*
Gets the browser window size

Returns object with height and width properties
 */
nv.utils.windowSize = function() {
    // Sane defaults
    var size = {width: 640, height: 480};

    // Most recent browsers use
    if (window.innerWidth && window.innerHeight) {
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        return (size);
    }

    // IE can use depending on mode it is in
    if (document.compatMode=='CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth ) {

        size.width = document.documentElement.offsetWidth;
        size.height = document.documentElement.offsetHeight;
        return (size);
    }

    // Earlier IE uses Doc.body
    if (document.body && document.body.offsetWidth) {
        size.width = document.body.offsetWidth;
        size.height = document.body.offsetHeight;
        return (size);
    }

    return (size);
};


/* handle dumb browser quirks...  isinstance breaks if you use frames
typeof returns 'object' for null, NaN is a number, etc.
 */
nv.utils.isArray = Array.isArray;
nv.utils.isObject = function(a) {
    return a !== null && typeof a === 'object';
};
nv.utils.isFunction = function(a) {
    return typeof a === 'function';
};
nv.utils.isDate = function(a) {
    return toString.call(a) === '[object Date]';
};
nv.utils.isNumber = function(a) {
    return !isNaN(a) && typeof a === 'number';
};


/*
Binds callback function to run when window is resized
 */
nv.utils.windowResize = function(handler) {
    if (window.addEventListener) {
        window.addEventListener('resize', handler);
    } else {
        nv.log("ERROR: Failed to bind to window.resize with: ", handler);
    }
    // return object with clear function to remove the single added callback.
    return {
        callback: handler,
        clear: function() {
            window.removeEventListener('resize', handler);
        }
    }
};


/*
Backwards compatible way to implement more d3-like coloring of graphs.
Can take in nothing, an array, or a function/scale
To use a normal scale, get the range and pass that because we must be able
to take two arguments and use the index to keep backward compatibility
*/
nv.utils.getColor = function(color) {
    //if you pass in nothing, get default colors back
    if (color === undefined) {
        return nv.utils.defaultColor();

    //if passed an array, turn it into a color scale
    } else if(nv.utils.isArray(color)) {
        var color_scale = d3.scale.ordinal().range(color);
        return function(d, i) {
            var key = i === undefined ? d : i;
            return d.color || color_scale(key);
        };

    //if passed a function or scale, return it, or whatever it may be
    //external libs, such as angularjs-nvd3-directives use this
    } else {
        //can't really help it if someone passes rubbish as color
        return color;
    }
};


/*
Default color chooser uses a color scale of 20 colors from D3
 https://github.com/mbostock/d3/wiki/Ordinal-Scales#categorical-colors
 */
nv.utils.defaultColor = function() {
    // get range of the scale so we'll turn it into our own function.
    return nv.utils.getColor(d3.scale.category20().range());
};


/*
Returns a color function that takes the result of 'getKey' for each series and
looks for a corresponding color from the dictionary
*/
nv.utils.customTheme = function(dictionary, getKey, defaultColors) {
    // use default series.key if getKey is undefined
    getKey = getKey || function(series) { return series.key };
    defaultColors = defaultColors || d3.scale.category20().range();

    // start at end of default color list and walk back to index 0
    var defIndex = defaultColors.length;

    return function(series, index) {
        var key = getKey(series);
        if (nv.utils.isFunction(dictionary[key])) {
            return dictionary[key]();
        } else if (dictionary[key] !== undefined) {
            return dictionary[key];
        } else {
            // no match in dictionary, use a default color
            if (!defIndex) {
                // used all the default colors, start over
                defIndex = defaultColors.length;
            }
            defIndex = defIndex - 1;
            return defaultColors[defIndex];
        }
    };
};


/*
From the PJAX example on d3js.org, while this is not really directly needed
it's a very cool method for doing pjax, I may expand upon it a little bit,
open to suggestions on anything that may be useful
*/
nv.utils.pjax = function(links, content) {

    var load = function(href) {
        d3.html(href, function(fragment) {
            var target = d3.select(content).node();
            target.parentNode.replaceChild(
                d3.select(fragment).select(content).node(),
                target);
            nv.utils.pjax(links, content);
        });
    };

    d3.selectAll(links).on("click", function() {
        history.pushState(this.href, this.textContent, this.href);
        load(this.href);
        d3.event.preventDefault();
    });

    d3.select(window).on("popstate", function() {
        if (d3.event.state) {
            load(d3.event.state);
        }
    });
};


/*
For when we want to approximate the width in pixels for an SVG:text element.
Most common instance is when the element is in a display:none; container.
Forumla is : text.length * font-size * constant_factor
*/
nv.utils.calcApproxTextWidth = function (svgTextElem) {
    if (nv.utils.isFunction(svgTextElem.style) && nv.utils.isFunction(svgTextElem.text)) {
        var fontSize = parseInt(svgTextElem.style("font-size").replace("px",""), 10);
        var textLength = svgTextElem.text().length;
        return nv.utils.NaNtoZero(textLength * fontSize * 0.5);
    }
    return 0;
};


/*
Numbers that are undefined, null or NaN, convert them to zeros.
*/
nv.utils.NaNtoZero = function(n) {
    if (!nv.utils.isNumber(n)
        || isNaN(n)
        || n === null
        || n === Infinity
        || n === -Infinity) {

        return 0;
    }
    return n;
};

/*
Add a way to watch for d3 transition ends to d3
*/
d3.selection.prototype.watchTransition = function(renderWatch){
    var args = [this].concat([].slice.call(arguments, 1));
    return renderWatch.transition.apply(renderWatch, args);
};


/*
Helper object to watch when d3 has rendered something
*/
nv.utils.renderWatch = function(dispatch, duration) {
    if (!(this instanceof nv.utils.renderWatch)) {
        return new nv.utils.renderWatch(dispatch, duration);
    }

    var _duration = duration !== undefined ? duration : 250;
    var renderStack = [];
    var self = this;

    this.models = function(models) {
        models = [].slice.call(arguments, 0);
        models.forEach(function(model){
            model.__rendered = false;
            (function(m){
                m.dispatch.on('renderEnd', function(arg){
                    m.__rendered = true;
                    self.renderEnd('model');
                });
            })(model);

            if (renderStack.indexOf(model) < 0) {
                renderStack.push(model);
            }
        });
    return this;
    };

    this.reset = function(duration) {
        if (duration !== undefined) {
            _duration = duration;
        }
        renderStack = [];
    };

    this.transition = function(selection, args, duration) {
        args = arguments.length > 1 ? [].slice.call(arguments, 1) : [];

        if (args.length > 1) {
            duration = args.pop();
        } else {
            duration = _duration !== undefined ? _duration : 250;
        }
        selection.__rendered = false;

        if (renderStack.indexOf(selection) < 0) {
            renderStack.push(selection);
        }

        if (duration === 0) {
            selection.__rendered = true;
            selection.delay = function() { return this; };
            selection.duration = function() { return this; };
            return selection;
        } else {
            if (selection.length === 0) {
                selection.__rendered = true;
            } else if (selection.every( function(d){ return !d.length; } )) {
                selection.__rendered = true;
            } else {
                selection.__rendered = false;
            }

            var n = 0;
            return selection
                .transition()
                .duration(duration)
                .each(function(){ ++n; })
                .each('end', function(d, i) {
                    if (--n === 0) {
                        selection.__rendered = true;
                        self.renderEnd.apply(this, args);
                    }
                });
        }
    };

    this.renderEnd = function() {
        if (renderStack.every( function(d){ return d.__rendered; } )) {
            renderStack.forEach( function(d){ d.__rendered = false; });
            dispatch.renderEnd.apply(this, arguments);
        }
    }

};


/*
Takes multiple objects and combines them into the first one (dst)
example:  nv.utils.deepExtend({a: 1}, {a: 2, b: 3}, {c: 4});
gives:  {a: 2, b: 3, c: 4}
*/
nv.utils.deepExtend = function(dst){
    var sources = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
    sources.forEach(function(source) {
        for (var key in source) {
            var isArray = nv.utils.isArray(dst[key]);
            var isObject = nv.utils.isObject(dst[key]);
            var srcObj = nv.utils.isObject(source[key]);

            if (isObject && !isArray && srcObj) {
                nv.utils.deepExtend(dst[key], source[key]);
            } else {
                dst[key] = source[key];
            }
        }
    });
};


/*
state utility object, used to track d3 states in the models
*/
nv.utils.state = function(){
    if (!(this instanceof nv.utils.state)) {
        return new nv.utils.state();
    }
    var state = {};
    var _self = this;
    var _setState = function(){};
    var _getState = function(){ return {}; };
    var init = null;
    var changed = null;

    this.dispatch = d3.dispatch('change', 'set');

    this.dispatch.on('set', function(state){
        _setState(state, true);
    });

    this.getter = function(fn){
        _getState = fn;
        return this;
    };

    this.setter = function(fn, callback) {
        if (!callback) {
            callback = function(){};
        }
        _setState = function(state, update){
            fn(state);
            if (update) {
                callback();
            }
        };
        return this;
    };

    this.init = function(state){
        init = init || {};
        nv.utils.deepExtend(init, state);
    };

    var _set = function(){
        var settings = _getState();

        if (JSON.stringify(settings) === JSON.stringify(state)) {
            return false;
        }

        for (var key in settings) {
            if (state[key] === undefined) {
                state[key] = {};
            }
            state[key] = settings[key];
            changed = true;
        }
        return true;
    };

    this.update = function(){
        if (init) {
            _setState(init, false);
            init = null;
        }
        if (_set.call(this)) {
            this.dispatch.change(state);
        }
    };

};


/*
Snippet of code you can insert into each nv.models.* to give you the ability to
do things like:
chart.options({
  showXAxis: true,
  tooltips: true
});

To enable in the chart:
chart.options = nv.utils.optionsFunc.bind(chart);
*/
nv.utils.optionsFunc = function(args) {
    if (args) {
        d3.map(args).forEach((function(key,value) {
            if (nv.utils.isFunction(this[key])) {
                this[key](value);
            }
        }).bind(this));
    }
    return this;
};


/*
numTicks:  requested number of ticks
data:  the chart data

returns the number of ticks to actually use on X axis, based on chart data
to avoid duplicate ticks with the same value
*/
nv.utils.calcTicksX = function(numTicks, data) {
    // find max number of values from all data streams
    var numValues = 1;
    var i = 0;
    for (i; i < data.length; i += 1) {
        var stream_len = data[i] && data[i].values ? data[i].values.length : 0;
        numValues = stream_len > numValues ? stream_len : numValues;
    }
    nv.log("Requested number of ticks: ", numTicks);
    nv.log("Calculated max values to be: ", numValues);
    // make sure we don't have more ticks than values to avoid duplicates
    numTicks = numTicks > numValues ? numTicks = numValues - 1 : numTicks;
    // make sure we have at least one tick
    numTicks = numTicks < 1 ? 1 : numTicks;
    // make sure it's an integer
    numTicks = Math.floor(numTicks);
    nv.log("Calculating tick count as: ", numTicks);
    return numTicks;
};


/*
returns number of ticks to actually use on Y axis, based on chart data
*/
nv.utils.calcTicksY = function(numTicks, data) {
    // currently uses the same logic but we can adjust here if needed later
    return nv.utils.calcTicksX(numTicks, data);
};


/*
Add a particular option from an options object onto chart
Options exposed on a chart are a getter/setter function that returns chart
on set to mimic typical d3 option chaining, e.g. svg.option1('a').option2('b');

option objects should be generated via Object.create() to provide
the option of manipulating data via get/set functions.
*/
nv.utils.initOption = function(chart, name) {
    // if it's a call option, just call it directly, otherwise do get/set
    if (chart._calls && chart._calls[name]) {
        chart[name] = chart._calls[name];
    } else {
        chart[name] = function (_) {
            if (!arguments.length) return chart._options[name];
            chart._overrides[name] = true;
            chart._options[name] = _;
            return chart;
        };
        // calling the option as _option will ignore if set by option already
        // so nvd3 can set options internally but the stop if set manually
        chart['_' + name] = function(_) {
            if (!arguments.length) return chart._options[name];
            if (!chart._overrides[name]) {
                chart._options[name] = _;
            }
            return chart;
        }
    }
};


/*
Add all options in an options object to the chart
*/
nv.utils.initOptions = function(chart) {
    chart._overrides = chart._overrides || {};
    var ops = Object.getOwnPropertyNames(chart._options || {});
    var calls = Object.getOwnPropertyNames(chart._calls || {});
    ops = ops.concat(calls);
    for (var i in ops) {
        nv.utils.initOption(chart, ops[i]);
    }
};


/*
Inherit options from a D3 object
d3.rebind makes calling the function on target actually call it on source
Also use _d3options so we can track what we inherit for documentation and chained inheritance
*/
nv.utils.inheritOptionsD3 = function(target, d3_source, oplist) {
    target._d3options = oplist.concat(target._d3options || []);
    oplist.unshift(d3_source);
    oplist.unshift(target);
    d3.rebind.apply(this, oplist);
};


/*
Remove duplicates from an array
*/
nv.utils.arrayUnique = function(a) {
    return a.sort().filter(function(item, pos) {
        return !pos || item != a[pos - 1];
    });
};


/*
Keeps a list of custom symbols to draw from in addition to d3.svg.symbol
Necessary since d3 doesn't let you extend its list -_-
Add new symbols by doing nv.utils.symbols.set('name', function(size){...});
*/
nv.utils.symbolMap = d3.map();


/*
Replaces d3.svg.symbol so that we can look both there and our own map
 */
nv.utils.symbol = function() {
    var type,
        size = 64;
    function symbol(d,i) {
        var t = type.call(this,d,i);
        var s = size.call(this,d,i);
        if (d3.svg.symbolTypes.indexOf(t) !== -1) {
            return d3.svg.symbol().type(t).size(s)();
        } else {
            return nv.utils.symbolMap.get(t)(s);
        }
    }
    symbol.type = function(_) {
        if (!arguments.length) return type;
        type = d3.functor(_);
        return symbol;
    };
    symbol.size = function(_) {
        if (!arguments.length) return size;
        size = d3.functor(_);
        return symbol;
    };
    return symbol;
};


/*
Inherit option getter/setter functions from source to target
d3.rebind makes calling the function on target actually call it on source
Also track via _inherited and _d3options so we can track what we inherit
for documentation generation purposes and chained inheritance
*/
nv.utils.inheritOptions = function(target, source) {
    // inherit all the things
    var ops = Object.getOwnPropertyNames(source._options || {});
    var calls = Object.getOwnPropertyNames(source._calls || {});
    var inherited = source._inherited || [];
    var d3ops = source._d3options || [];
    var args = ops.concat(calls).concat(inherited).concat(d3ops);
    args.unshift(source);
    args.unshift(target);
    d3.rebind.apply(this, args);
    // pass along the lists to keep track of them, don't allow duplicates
    target._inherited = nv.utils.arrayUnique(ops.concat(calls).concat(inherited).concat(ops).concat(target._inherited || []));
    target._d3options = nv.utils.arrayUnique(d3ops.concat(target._d3options || []));
};


/*
Runs common initialize code on the svg before the chart builds
*/
nv.utils.initSVG = function(svg) {
    svg.classed({'nvd3-svg':true});
};


/*
Sanitize and provide default for the container height.
*/
nv.utils.sanitizeHeight = function(height, container) {
    return (height || parseInt(container.style('height'), 10) || 400);
};


/*
Sanitize and provide default for the container width.
*/
nv.utils.sanitizeWidth = function(width, container) {
    return (width || parseInt(container.style('width'), 10) || 960);
};


/*
Calculate the available height for a chart.
*/
nv.utils.availableHeight = function(height, container, margin) {
    return Math.max(0,nv.utils.sanitizeHeight(height, container) - margin.top - margin.bottom);
};

/*
Calculate the available width for a chart.
*/
nv.utils.availableWidth = function(width, container, margin) {
    return Math.max(0,nv.utils.sanitizeWidth(width, container) - margin.left - margin.right);
};

/*
Clear any rendered chart components and display a chart's 'noData' message
*/
nv.utils.noData = function(chart, container) {
    var opt = chart.options(),
        margin = opt.margin(),
        noData = opt.noData(),
        data = (noData == null) ? ["No Data Available."] : [noData],
        height = nv.utils.availableHeight(null, container, margin),
        width = nv.utils.availableWidth(null, container, margin),
        x = margin.left + width/2,
        y = margin.top + height/2;

    //Remove any previously created chart components
    container.selectAll('g').remove();

    var noDataText = container.selectAll('.nv-noData').data(data);

    noDataText.enter().append('text')
        .attr('class', 'nvd3 nv-noData')
        .attr('dy', '-.7em')
        .style('text-anchor', 'middle');

    noDataText
        .attr('x', x)
        .attr('y', y)
        .text(function(t){ return t; });
};

/*
 Wrap long labels.
 */
nv.utils.wrapTicks = function (text, width) {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1,
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
        }
    });
};

/*
Check equality of 2 array
*/
nv.utils.arrayEquals = function (array1, array2) {
    if (array1 === array2)
        return true;

    if (!array1 || !array2)
        return false;

    // compare lengths - can save a lot of time
    if (array1.length != array2.length)
        return false;

    for (var i = 0,
        l = array1.length; i < l; i++) {
        // Check if we have nested arrays
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            // recurse into the nested arrays
            if (!nv.arrayEquals(array1[i], array2[i]))
                return false;
        } else if (array1[i] != array2[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};
nv.models.axis = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var axis = d3.svg.axis();
    var scale = d3.scale.linear();

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = 75 //only used for tickLabel currently
        , height = 60 //only used for tickLabel currently
        , axisLabelText = null
        , showMaxMin = true //TODO: showMaxMin should be disabled on all ordinal scaled axes
        , rotateLabels = 0
        , rotateYLabel = true
        , staggerLabels = false
        , isOrdinal = false
        , ticks = null
        , axisLabelDistance = 0
        , fontSize = undefined
        , duration = 250
        , dispatch = d3.dispatch('renderEnd')
        ;
    axis
        .scale(scale)
        .orient('bottom')
        .tickFormat(function(d) { return d })
    ;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var scale0;
    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-axis').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-axis');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            if (ticks !== null)
                axis.ticks(ticks);
            else if (axis.orient() == 'top' || axis.orient() == 'bottom')
                axis.ticks(Math.abs(scale.range()[1] - scale.range()[0]) / 100);

            //TODO: consider calculating width/height based on whether or not label is added, for reference in charts using this component
            g.watchTransition(renderWatch, 'axis').call(axis);

            scale0 = scale0 || axis.scale();

            var fmt = axis.tickFormat();
            if (fmt == null) {
                fmt = scale0.tickFormat();
            }

            var axisLabel = g.selectAll('text.nv-axislabel')
                .data([axisLabelText || null]);
            axisLabel.exit().remove();

            //only skip when fontSize is undefined so it can be cleared with a null or blank string
            if (fontSize !== undefined) {
                g.selectAll('g').select("text").style('font-size', fontSize);
            }

            var xLabelMargin;
            var axisMaxMin;
            var w;
            switch (axis.orient()) {
                case 'top':
                    axisLabel.enter().append('text').attr('class', 'nv-axislabel');
                  w = 0;
                  if (scale.range().length === 1) {
                    w = isOrdinal ? scale.range()[0] * 2 + scale.rangeBand() : 0;
                  } else if (scale.range().length === 2) {
                    w = isOrdinal ? scale.range()[0] + scale.range()[1] + scale.rangeBand() : scale.range()[1];
                  } else if ( scale.range().length > 2){
                    w = scale.range()[scale.range().length-1]+(scale.range()[1]-scale.range()[0]);
                  };
                    axisLabel
                        .attr('text-anchor', 'middle')
                        .attr('y', 0)
                        .attr('x', w/2);
                    if (showMaxMin) {
                        axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
                            .data(scale.domain());
                        axisMaxMin.enter().append('g').attr('class',function(d,i){
                                return ['nv-axisMaxMin','nv-axisMaxMin-x',(i == 0 ? 'nv-axisMin-x':'nv-axisMax-x')].join(' ')
                        }).append('text');
                        axisMaxMin.exit().remove();
                        axisMaxMin
                            .attr('transform', function(d,i) {
                                return 'translate(' + nv.utils.NaNtoZero(scale(d)) + ',0)'
                            })
                            .select('text')
                            .attr('dy', '-0.5em')
                            .attr('y', -axis.tickPadding())
                            .attr('text-anchor', 'middle')
                            .text(function(d,i) {
                                var v = fmt(d);
                                return ('' + v).match('NaN') ? '' : v;
                            });
                        axisMaxMin.watchTransition(renderWatch, 'min-max top')
                            .attr('transform', function(d,i) {
                                return 'translate(' + nv.utils.NaNtoZero(scale.range()[i]) + ',0)'
                            });
                    }
                    break;
                case 'bottom':
                    xLabelMargin = axisLabelDistance + 36;
                    var maxTextWidth = 30;
                    var textHeight = 0;
                    var xTicks = g.selectAll('g').select("text");
                    var rotateLabelsRule = '';
                    if (rotateLabels%360) {
                        //Reset transform on ticks so textHeight can be calculated correctly
                        xTicks.attr('transform', ''); 
                        //Calculate the longest xTick width
                        xTicks.each(function(d,i){
                            var box = this.getBoundingClientRect();
                            var width = box.width;
                            textHeight = box.height;
                            if(width > maxTextWidth) maxTextWidth = width;
                        });
                        rotateLabelsRule = 'rotate(' + rotateLabels + ' 0,' + (textHeight/2 + axis.tickPadding()) + ')';
                        //Convert to radians before calculating sin. Add 30 to margin for healthy padding.
                        var sin = Math.abs(Math.sin(rotateLabels*Math.PI/180));
                        xLabelMargin = (sin ? sin*maxTextWidth : maxTextWidth)+30;
                        //Rotate all xTicks
                        xTicks
                            .attr('transform', rotateLabelsRule)
                            .style('text-anchor', rotateLabels%360 > 0 ? 'start' : 'end');
                    } else {
                        if (staggerLabels) {
                            xTicks
                                .attr('transform', function(d,i) {
                                    return 'translate(0,' + (i % 2 == 0 ? '0' : '12') + ')'
                                });
                        } else {
                            xTicks.attr('transform', "translate(0,0)");
                        }
                    }
                    axisLabel.enter().append('text').attr('class', 'nv-axislabel');
                    w = 0;
                    if (scale.range().length === 1) {
                        w = isOrdinal ? scale.range()[0] * 2 + scale.rangeBand() : 0;
                    } else if (scale.range().length === 2) {
                        w = isOrdinal ? scale.range()[0] + scale.range()[1] + scale.rangeBand() : scale.range()[1];
                    } else if ( scale.range().length > 2){
                        w = scale.range()[scale.range().length-1]+(scale.range()[1]-scale.range()[0]);
                    };
                    axisLabel
                        .attr('text-anchor', 'middle')
                        .attr('y', xLabelMargin)
                        .attr('x', w/2);
                    if (showMaxMin) {
                        //if (showMaxMin && !isOrdinal) {
                        axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
                            //.data(scale.domain())
                            .data([scale.domain()[0], scale.domain()[scale.domain().length - 1]]);
                        axisMaxMin.enter().append('g').attr('class',function(d,i){
                                return ['nv-axisMaxMin','nv-axisMaxMin-x',(i == 0 ? 'nv-axisMin-x':'nv-axisMax-x')].join(' ')
                        }).append('text');
                        axisMaxMin.exit().remove();
                        axisMaxMin
                            .attr('transform', function(d,i) {
                                return 'translate(' + nv.utils.NaNtoZero((scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0))) + ',0)'
                            })
                            .select('text')
                            .attr('dy', '.71em')
                            .attr('y', axis.tickPadding())
                            .attr('transform', rotateLabelsRule)
                            .style('text-anchor', rotateLabels ? (rotateLabels%360 > 0 ? 'start' : 'end') : 'middle')
                            .text(function(d,i) {
                                var v = fmt(d);
                                return ('' + v).match('NaN') ? '' : v;
                            });
                        axisMaxMin.watchTransition(renderWatch, 'min-max bottom')
                            .attr('transform', function(d,i) {
                                return 'translate(' + nv.utils.NaNtoZero((scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0))) + ',0)'
                            });
                    }

                    break;
                case 'right':
                    axisLabel.enter().append('text').attr('class', 'nv-axislabel');
                    axisLabel
                        .style('text-anchor', rotateYLabel ? 'middle' : 'begin')
                        .attr('transform', rotateYLabel ? 'rotate(90)' : '')
                        .attr('y', rotateYLabel ? (-Math.max(margin.right, width) + 12 - (axisLabelDistance || 0)) : -10) //TODO: consider calculating this based on largest tick width... OR at least expose this on chart
                        .attr('x', rotateYLabel ? (d3.max(scale.range()) / 2) : axis.tickPadding());
                    if (showMaxMin) {
                        axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
                            .data(scale.domain());
                       	axisMaxMin.enter().append('g').attr('class',function(d,i){
                                return ['nv-axisMaxMin','nv-axisMaxMin-y',(i == 0 ? 'nv-axisMin-y':'nv-axisMax-y')].join(' ')
                        }).append('text')
                            .style('opacity', 0);
                        axisMaxMin.exit().remove();
                        axisMaxMin
                            .attr('transform', function(d,i) {
                                return 'translate(0,' + nv.utils.NaNtoZero(scale(d)) + ')'
                            })
                            .select('text')
                            .attr('dy', '.32em')
                            .attr('y', 0)
                            .attr('x', axis.tickPadding())
                            .style('text-anchor', 'start')
                            .text(function(d, i) {
                                var v = fmt(d);
                                return ('' + v).match('NaN') ? '' : v;
                            });
                        axisMaxMin.watchTransition(renderWatch, 'min-max right')
                            .attr('transform', function(d,i) {
                                return 'translate(0,' + nv.utils.NaNtoZero(scale.range()[i]) + ')'
                            })
                            .select('text')
                            .style('opacity', 1);
                    }
                    break;
                case 'left':
                    /*
                     //For dynamically placing the label. Can be used with dynamically-sized chart axis margins
                     var yTicks = g.selectAll('g').select("text");
                     yTicks.each(function(d,i){
                     var labelPadding = this.getBoundingClientRect().width + axis.tickPadding() + 16;
                     if(labelPadding > width) width = labelPadding;
                     });
                     */
                    axisLabel.enter().append('text').attr('class', 'nv-axislabel');
                    axisLabel
                        .style('text-anchor', rotateYLabel ? 'middle' : 'end')
                        .attr('transform', rotateYLabel ? 'rotate(-90)' : '')
                        .attr('y', rotateYLabel ? (-Math.max(margin.left, width) + 25 - (axisLabelDistance || 0)) : -10)
                        .attr('x', rotateYLabel ? (-d3.max(scale.range()) / 2) : -axis.tickPadding());
                    if (showMaxMin) {
                        axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
                            .data(scale.domain());
                        axisMaxMin.enter().append('g').attr('class',function(d,i){
                                return ['nv-axisMaxMin','nv-axisMaxMin-y',(i == 0 ? 'nv-axisMin-y':'nv-axisMax-y')].join(' ')
                        }).append('text')
                            .style('opacity', 0);
                        axisMaxMin.exit().remove();
                        axisMaxMin
                            .attr('transform', function(d,i) {
                                return 'translate(0,' + nv.utils.NaNtoZero(scale0(d)) + ')'
                            })
                            .select('text')
                            .attr('dy', '.32em')
                            .attr('y', 0)
                            .attr('x', -axis.tickPadding())
                            .attr('text-anchor', 'end')
                            .text(function(d,i) {
                                var v = fmt(d);
                                return ('' + v).match('NaN') ? '' : v;
                            });
                        axisMaxMin.watchTransition(renderWatch, 'min-max right')
                            .attr('transform', function(d,i) {
                                return 'translate(0,' + nv.utils.NaNtoZero(scale.range()[i]) + ')'
                            })
                            .select('text')
                            .style('opacity', 1);
                    }
                    break;
            }
            axisLabel.text(function(d) { return d });

            if (showMaxMin && (axis.orient() === 'left' || axis.orient() === 'right')) {
                //check if max and min overlap other values, if so, hide the values that overlap
                g.selectAll('g') // the g's wrapping each tick
                    .each(function(d,i) {
                        d3.select(this).select('text').attr('opacity', 1);
                        if (scale(d) < scale.range()[1] + 10 || scale(d) > scale.range()[0] - 10) { // 10 is assuming text height is 16... if d is 0, leave it!
                            if (d > 1e-10 || d < -1e-10) // accounts for minor floating point errors... though could be problematic if the scale is EXTREMELY SMALL
                                d3.select(this).attr('opacity', 0);

                            d3.select(this).select('text').attr('opacity', 0); // Don't remove the ZERO line!!
                        }
                    });

                //if Max and Min = 0 only show min, Issue #281
                if (scale.domain()[0] == scale.domain()[1] && scale.domain()[0] == 0) {
                    wrap.selectAll('g.nv-axisMaxMin').style('opacity', function (d, i) {
                        return !i ? 1 : 0
                    });
                }
            }

            if (showMaxMin && (axis.orient() === 'top' || axis.orient() === 'bottom')) {
                var maxMinRange = [];
                wrap.selectAll('g.nv-axisMaxMin')
                    .each(function(d,i) {
                        try {
                            if (i) // i== 1, max position
                                maxMinRange.push(scale(d) - this.getBoundingClientRect().width - 4);  //assuming the max and min labels are as wide as the next tick (with an extra 4 pixels just in case)
                            else // i==0, min position
                                maxMinRange.push(scale(d) + this.getBoundingClientRect().width + 4)
                        }catch (err) {
                            if (i) // i== 1, max position
                                maxMinRange.push(scale(d) - 4);  //assuming the max and min labels are as wide as the next tick (with an extra 4 pixels just in case)
                            else // i==0, min position
                                maxMinRange.push(scale(d) + 4);
                        }
                    });
                // the g's wrapping each tick
                g.selectAll('g').each(function(d, i) {
                    if (scale(d) < maxMinRange[0] || scale(d) > maxMinRange[1]) {
                        if (d > 1e-10 || d < -1e-10) // accounts for minor floating point errors... though could be problematic if the scale is EXTREMELY SMALL
                            d3.select(this).remove();
                        else
                            d3.select(this).select('text').remove(); // Don't remove the ZERO line!!
                    }
                });
            }

            //Highlight zero tick line
            g.selectAll('.tick')
                .filter(function (d) {
                    /*
                    The filter needs to return only ticks at or near zero.
                    Numbers like 0.00001 need to count as zero as well,
                    and the arithmetic trick below solves that.
                    */
                    return !parseFloat(Math.round(d * 100000) / 1000000) && (d !== undefined)
                }) 
                .classed('zero', true);
            
            //store old scales for use in transitions on update
            scale0 = scale.copy();

        });

        renderWatch.renderEnd('axis immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.axis = axis;
    chart.dispatch = dispatch;

    chart.options = nv.utils.optionsFunc.bind(chart);
    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        axisLabelDistance: {get: function(){return axisLabelDistance;}, set: function(_){axisLabelDistance=_;}},
        staggerLabels:     {get: function(){return staggerLabels;}, set: function(_){staggerLabels=_;}},
        rotateLabels:      {get: function(){return rotateLabels;}, set: function(_){rotateLabels=_;}},
        rotateYLabel:      {get: function(){return rotateYLabel;}, set: function(_){rotateYLabel=_;}},
        showMaxMin:        {get: function(){return showMaxMin;}, set: function(_){showMaxMin=_;}},
        axisLabel:         {get: function(){return axisLabelText;}, set: function(_){axisLabelText=_;}},
        height:            {get: function(){return height;}, set: function(_){height=_;}},
        ticks:             {get: function(){return ticks;}, set: function(_){ticks=_;}},
        width:             {get: function(){return width;}, set: function(_){width=_;}},
        fontSize:          {get: function(){return fontSize;}, set: function(_){fontSize=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top !== undefined    ? _.top    : margin.top;
            margin.right  = _.right !== undefined  ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left !== undefined   ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration=_;
            renderWatch.reset(duration);
        }},
        scale: {get: function(){return scale;}, set: function(_){
            scale = _;
            axis.scale(scale);
            isOrdinal = typeof scale.rangeBands === 'function';
            nv.utils.inheritOptionsD3(chart, scale, ['domain', 'range', 'rangeBand', 'rangeBands']);
        }}
    });

    nv.utils.initOptions(chart);
    nv.utils.inheritOptionsD3(chart, axis, ['orient', 'tickValues', 'tickSubdivide', 'tickSize', 'tickPadding', 'tickFormat']);
    nv.utils.inheritOptionsD3(chart, scale, ['domain', 'range', 'rangeBand', 'rangeBands']);

    return chart;
};
nv.models.boxPlot = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0},
        width = 960,
        height = 500,
        id = Math.floor(Math.random() * 10000), // Create semi-unique ID in case user doesn't select one
        xScale = d3.scale.ordinal(),
        yScale = d3.scale.linear(),
        getX  = function(d) { return d.label }, // Default data model selectors.
        getQ1 = function(d) { return d.values.Q1 },
        getQ2 = function(d) { return d.values.Q2 },
        getQ3 = function(d) { return d.values.Q3 },
        getWl = function(d) { return d.values.whisker_low },
        getWh = function(d) { return d.values.whisker_high },
        getColor = function(d) { return d.color },
        getOlItems  = function(d) { return d.values.outliers },
        getOlValue = function(d, i, j) { return d },
        getOlLabel = function(d, i, j) { return d },
        getOlColor = function(d, i, j) { return undefined },
        color = nv.utils.defaultColor(),
        container = null,
        xDomain, xRange,
        yDomain, yRange,
        dispatch = d3.dispatch('elementMouseover', 'elementMouseout', 'elementMousemove', 'renderEnd'),
        duration = 250,
        maxBoxWidth = null;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var xScale0, yScale0;
    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom;

            container = d3.select(this);
            nv.utils.initSVG(container);

            // Setup Scales
            xScale.domain(xDomain || data.map(function(d,i) { return getX(d,i); }))
                .rangeBands(xRange || [0, availableWidth], 0.1);

            // if we know yDomain, no need to calculate
            var yData = []
            if (!yDomain) {
                // (y-range is based on quartiles, whiskers and outliers)
                var values = [], yMin, yMax;
                data.forEach(function (d, i) {
                    var q1 = getQ1(d), q3 = getQ3(d), wl = getWl(d), wh = getWh(d);
                    var olItems = getOlItems(d);
                    if (olItems) {
                        olItems.forEach(function (e, i) {
                            values.push(getOlValue(e, i, undefined));
                        });
                    }
                    if (wl) { values.push(wl) }
                    if (q1) { values.push(q1) }
                    if (q3) { values.push(q3) }
                    if (wh) { values.push(wh) }
                });
                yMin = d3.min(values);
                yMax = d3.max(values);
                yData = [ yMin, yMax ] ;
            }

            yScale.domain(yDomain || yData);
            yScale.range(yRange || [availableHeight, 0]);

            //store old scales if they exist
            xScale0 = xScale0 || xScale;
            yScale0 = yScale0 || yScale.copy().range([yScale(0),yScale(0)]);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            var boxplots = wrap.selectAll('.nv-boxplot').data(function(d) { return d });
            var boxEnter = boxplots.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
            boxplots
                .attr('class', 'nv-boxplot')
                .attr('transform', function(d,i,j) { return 'translate(' + (xScale(getX(d,i)) + xScale.rangeBand() * 0.05) + ', 0)'; })
                .classed('hover', function(d) { return d.hover });
            boxplots
                .watchTransition(renderWatch, 'nv-boxplot: boxplots')
                .style('stroke-opacity', 1)
                .style('fill-opacity', 0.75)
                .delay(function(d,i) { return i * duration / data.length })
                .attr('transform', function(d,i) {
                    return 'translate(' + (xScale(getX(d,i)) + xScale.rangeBand() * 0.05) + ', 0)';
                });
            boxplots.exit().remove();

            // ----- add the SVG elements for each boxPlot -----

            // conditionally append whisker lines
            boxEnter.each(function(d,i) {
                var box = d3.select(this);
                [getWl, getWh].forEach(function (f) {
                    if (f(d)) {
                        var key = (f === getWl) ? 'low' : 'high';
                        box.append('line')
                          .style('stroke', getColor(d) || color(d,i))
                          .attr('class', 'nv-boxplot-whisker nv-boxplot-' + key);
                        box.append('line')
                          .style('stroke', getColor(d) || color(d,i))
                          .attr('class', 'nv-boxplot-tick nv-boxplot-' + key);
                    }
                });
            });

            var box_width = function() { return (maxBoxWidth === null ? xScale.rangeBand() * 0.9 : Math.min(75, xScale.rangeBand() * 0.9)); };
            var box_left  = function() { return xScale.rangeBand() * 0.45 - box_width()/2; };
            var box_right = function() { return xScale.rangeBand() * 0.45 + box_width()/2; };

            // update whisker lines and ticks
            [getWl, getWh].forEach(function (f) {
                var key = (f === getWl) ? 'low' : 'high';
                var endpoint = (f === getWl) ? getQ1 : getQ3;
                boxplots.select('line.nv-boxplot-whisker.nv-boxplot-' + key)
                  .watchTransition(renderWatch, 'nv-boxplot: boxplots')
                    .attr('x1', xScale.rangeBand() * 0.45 )
                    .attr('y1', function(d,i) { return yScale(f(d)); })
                    .attr('x2', xScale.rangeBand() * 0.45 )
                    .attr('y2', function(d,i) { return yScale(endpoint(d)); });
                boxplots.select('line.nv-boxplot-tick.nv-boxplot-' + key)
                  .watchTransition(renderWatch, 'nv-boxplot: boxplots')
                    .attr('x1', box_left )
                    .attr('y1', function(d,i) { return yScale(f(d)); })
                    .attr('x2', box_right )
                    .attr('y2', function(d,i) { return yScale(f(d)); });
            });

            [getWl, getWh].forEach(function (f) {
                var key = (f === getWl) ? 'low' : 'high';
                boxEnter.selectAll('.nv-boxplot-' + key)
                  .on('mouseover', function(d,i,j) {
                      d3.select(this).classed('hover', true);
                      dispatch.elementMouseover({
                          series: { key: f(d), color: getColor(d) || color(d,j) },
                          e: d3.event
                      });
                  })
                  .on('mouseout', function(d,i,j) {
                      d3.select(this).classed('hover', false);
                      dispatch.elementMouseout({
                          series: { key: f(d), color: getColor(d) || color(d,j) },
                          e: d3.event
                      });
                  })
                  .on('mousemove', function(d,i) {
                      dispatch.elementMousemove({e: d3.event});
                  });
            });

            // boxes
            boxEnter.append('rect')
                .attr('class', 'nv-boxplot-box')
                // tooltip events
                .on('mouseover', function(d,i) {
                    d3.select(this).classed('hover', true);
                    dispatch.elementMouseover({
                        key: getX(d),
                        value: getX(d),
                        series: [
                            { key: 'Q3', value: getQ3(d), color: getColor(d) || color(d,i) },
                            { key: 'Q2', value: getQ2(d), color: getColor(d) || color(d,i) },
                            { key: 'Q1', value: getQ1(d), color: getColor(d) || color(d,i) }
                        ],
                        data: d,
                        index: i,
                        e: d3.event
                    });
                })
                .on('mouseout', function(d,i) {
                    d3.select(this).classed('hover', false);
                    dispatch.elementMouseout({
                        key: getX(d),
                        value: getX(d),
                        series: [
                            { key: 'Q3', value: getQ3(d), color: getColor(d) || color(d,i) },
                            { key: 'Q2', value: getQ2(d), color: getColor(d) || color(d,i) },
                            { key: 'Q1', value: getQ1(d), color: getColor(d) || color(d,i) }
                        ],
                        data: d,
                        index: i,
                        e: d3.event
                    });
                })
                .on('mousemove', function(d,i) {
                    dispatch.elementMousemove({e: d3.event});
                });

            // box transitions
            boxplots.select('rect.nv-boxplot-box')
              .watchTransition(renderWatch, 'nv-boxplot: boxes')
                .attr('y', function(d,i) { return yScale(getQ3(d)); })
                .attr('width', box_width)
                .attr('x', box_left )
                .attr('height', function(d,i) { return Math.abs(yScale(getQ3(d)) - yScale(getQ1(d))) || 1 })
                .style('fill', function(d,i) { return getColor(d) || color(d,i) })
                .style('stroke', function(d,i) { return getColor(d) || color(d,i) });

            // median line
            boxEnter.append('line').attr('class', 'nv-boxplot-median');

            boxplots.select('line.nv-boxplot-median')
              .watchTransition(renderWatch, 'nv-boxplot: boxplots line')
                .attr('x1', box_left)
                .attr('y1', function(d,i) { return yScale(getQ2(d)); })
                .attr('x2', box_right)
                .attr('y2', function(d,i) { return yScale(getQ2(d)); });

            // outliers
            var outliers = boxplots.selectAll('.nv-boxplot-outlier').data(function(d) {
                return getOlItems(d) || [];
            });
            outliers.enter().append('circle')
                .style('fill', function(d,i,j) { return getOlColor(d,i,j) || color(d,j) })
                .style('stroke', function(d,i,j) { return getOlColor(d,i,j) || color(d,j) })
                .style('z-index', 9000)
                .on('mouseover', function(d,i,j) {
                    d3.select(this).classed('hover', true);
                    dispatch.elementMouseover({
                        series: { key: getOlLabel(d,i,j), color: getOlColor(d,i,j) || color(d,j) },
                        e: d3.event
                    });
                })
                .on('mouseout', function(d,i,j) {
                    d3.select(this).classed('hover', false);
                    dispatch.elementMouseout({
                        series: { key: getOlLabel(d,i,j), color: getOlColor(d,i,j) || color(d,j) },
                        e: d3.event
                    });
                })
                .on('mousemove', function(d,i) {
                    dispatch.elementMousemove({e: d3.event});
                });
            outliers.attr('class', 'nv-boxplot-outlier');
            outliers
              .watchTransition(renderWatch, 'nv-boxplot: nv-boxplot-outlier')
                .attr('cx', xScale.rangeBand() * 0.45)
                .attr('cy', function(d,i,j) { return yScale(getOlValue(d,i,j)); })
                .attr('r', '3');
            outliers.exit().remove();

            //store old scales for use in transitions on update
            xScale0 = xScale.copy();
            yScale0 = yScale.copy();
        });

        renderWatch.renderEnd('nv-boxplot immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:       {get: function(){return width;}, set: function(_){width=_;}},
        height:      {get: function(){return height;}, set: function(_){height=_;}},
        maxBoxWidth: {get: function(){return maxBoxWidth;}, set: function(_){maxBoxWidth=_;}},
        x:           {get: function(){return getX;}, set: function(_){getX=_;}},
        q1: {get: function(){return getQ1;}, set: function(_){getQ1=_;}},
        q2: {get: function(){return getQ2;}, set: function(_){getQ2=_;}},
        q3: {get: function(){return getQ3;}, set: function(_){getQ3=_;}},
        wl: {get: function(){return getWl;}, set: function(_){getWl=_;}},
        wh: {get: function(){return getWh;}, set: function(_){getWh=_;}},
        itemColor:    {get: function(){return getColor;}, set: function(_){getColor=_;}},
        outliers:     {get: function(){return getOlItems;}, set: function(_){getOlItems=_;}},
        outlierValue: {get: function(){return getOlValue;}, set: function(_){getOlValue=_;}},
        outlierLabel: {get: function(){return getOlLabel;}, set: function(_){getOlLabel=_;}},
        outlierColor: {get: function(){return getOlColor;}, set: function(_){getOlColor=_;}},
        xScale:  {get: function(){return xScale;}, set: function(_){xScale=_;}},
        yScale:  {get: function(){return yScale;}, set: function(_){yScale=_;}},
        xDomain: {get: function(){return xDomain;}, set: function(_){xDomain=_;}},
        yDomain: {get: function(){return yDomain;}, set: function(_){yDomain=_;}},
        xRange:  {get: function(){return xRange;}, set: function(_){xRange=_;}},
        yRange:  {get: function(){return yRange;}, set: function(_){yRange=_;}},
        id:          {get: function(){return id;}, set: function(_){id=_;}},
        // rectClass: {get: function(){return rectClass;}, set: function(_){rectClass=_;}},
        y: {
            get: function() {
                console.warn('BoxPlot \'y\' chart option is deprecated. Please use model overrides instead.');
                return {};
            },
            set: function(_) {
                console.warn('BoxPlot \'y\' chart option is deprecated. Please use model overrides instead.');
            }
        },
        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
        }}
    });

    nv.utils.initOptions(chart);

    return chart;
};
nv.models.boxPlotChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var boxplot = nv.models.boxPlot(),
        xAxis = nv.models.axis(),
        yAxis = nv.models.axis();

    var margin = {top: 15, right: 10, bottom: 50, left: 60},
        width = null,
        height = null,
        color = nv.utils.getColor(),
        showXAxis = true,
        showYAxis = true,
        rightAlignYAxis = false,
        staggerLabels = false,
        tooltip = nv.models.tooltip(),
        x, y,
        noData = 'No Data Available.',
        dispatch = d3.dispatch('beforeUpdate', 'renderEnd'),
        duration = 250;

    xAxis
        .orient('bottom')
        .showMaxMin(false)
        .tickFormat(function(d) { return d })
    ;
    yAxis
        .orient((rightAlignYAxis) ? 'right' : 'left')
        .tickFormat(d3.format(',.1f'))
    ;

    tooltip.duration(0);

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(boxplot);
        if (showXAxis) renderWatch.models(xAxis);
        if (showYAxis) renderWatch.models(yAxis);

        selection.each(function(data) {
            var container = d3.select(this), that = this;
            nv.utils.initSVG(container);
            var availableWidth = (width  || parseInt(container.style('width')) || 960) - margin.left - margin.right;
            var availableHeight = (height || parseInt(container.style('height')) || 400) - margin.top - margin.bottom;

            chart.update = function() {
                dispatch.beforeUpdate();
                container.transition().duration(duration).call(chart);
            };
            chart.container = this;

            // TODO still need to find a way to validate quartile data presence using boxPlot callbacks.
            // Display No Data message if there's nothing to show. (quartiles required at minimum).
            if (!data || !data.length) {
                var noDataText = container.selectAll('.nv-noData').data([noData]);

                noDataText.enter().append('text')
                    .attr('class', 'nvd3 nv-noData')
                    .attr('dy', '-.7em')
                    .style('text-anchor', 'middle');

                noDataText
                    .attr('x', margin.left + availableWidth / 2)
                    .attr('y', margin.top + availableHeight / 2)
                    .text(function(d) { return d });

                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            // Setup Scales
            x = boxplot.xScale();
            y = boxplot.yScale().clamp(true);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-boxPlotWithAxes').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-boxPlotWithAxes').append('g');
            var defsEnter = gEnter.append('defs');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis')
                .append('g').attr('class', 'nv-zeroLine')
                .append('line');

            gEnter.append('g').attr('class', 'nv-barsWrap');
            g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            if (rightAlignYAxis) {
                g.select('.nv-y.nv-axis')
                    .attr('transform', 'translate(' + availableWidth + ',0)');
            }

            // Main Chart Component(s)
            boxplot.width(availableWidth).height(availableHeight);

            var barsWrap = g.select('.nv-barsWrap')
                .datum(data.filter(function(d) { return !d.disabled }))

            barsWrap.transition().call(boxplot);

            defsEnter.append('clipPath')
                .attr('id', 'nv-x-label-clip-' + boxplot.id())
                .append('rect');

            g.select('#nv-x-label-clip-' + boxplot.id() + ' rect')
                .attr('width', x.rangeBand() * (staggerLabels ? 2 : 1))
                .attr('height', 16)
                .attr('x', -x.rangeBand() / (staggerLabels ? 1 : 2 ));

            // Setup Axes
            if (showXAxis) {
                xAxis
                    .scale(x)
                    .ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize(-availableHeight, 0);

                g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
                g.select('.nv-x.nv-axis').call(xAxis);

                var xTicks = g.select('.nv-x.nv-axis').selectAll('g');
                if (staggerLabels) {
                    xTicks
                        .selectAll('text')
                        .attr('transform', function(d,i,j) { return 'translate(0,' + (j % 2 === 0 ? '5' : '17') + ')' })
                }
            }

            if (showYAxis) {
                yAxis
                    .scale(y)
                    .ticks( Math.floor(availableHeight/36) ) // can't use nv.utils.calcTicksY with Object data
                    .tickSize( -availableWidth, 0);

                g.select('.nv-y.nv-axis').call(yAxis);
            }

            // Zero line
            g.select('.nv-zeroLine line')
                .attr('x1',0)
                .attr('x2',availableWidth)
                .attr('y1', y(0))
                .attr('y2', y(0))
            ;

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------
        });

        renderWatch.renderEnd('nv-boxplot chart immediate');
        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    boxplot.dispatch.on('elementMouseover.tooltip', function(evt) {
        tooltip.data(evt).hidden(false);
    });

    boxplot.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.data(evt).hidden(true);
    });

    boxplot.dispatch.on('elementMousemove.tooltip', function(evt) {
        tooltip();
    });

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.boxplot = boxplot;
    chart.xAxis = xAxis;
    chart.yAxis = yAxis;
    chart.tooltip = tooltip;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        staggerLabels: {get: function(){return staggerLabels;}, set: function(_){staggerLabels=_;}},
        showXAxis: {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis: {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        tooltipContent:    {get: function(){return tooltip;}, set: function(_){tooltip=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            boxplot.duration(duration);
            xAxis.duration(duration);
            yAxis.duration(duration);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            boxplot.color(color);
        }},
        rightAlignYAxis: {get: function(){return rightAlignYAxis;}, set: function(_){
            rightAlignYAxis = _;
            yAxis.orient( (_) ? 'right' : 'left');
        }}
    });

    nv.utils.inheritOptions(chart, boxplot);
    nv.utils.initOptions(chart);

    return chart;
}

// Chart design based on the recommendations of Stephen Few. Implementation
// based on the work of Clint Ivy, Jamie Love, and Jason Davies.
// http://projects.instantcognition.com/protovis/bulletchart/

nv.models.bullet = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , orient = 'left' // TODO top & bottom
        , reverse = false
        , ranges = function(d) { return d.ranges }
        , markers = function(d) { return d.markers ? d.markers : [] }
        , markerLines = function(d) { return d.markerLines ? d.markerLines : [0] }
        , measures = function(d) { return d.measures }
        , rangeLabels = function(d) { return d.rangeLabels ? d.rangeLabels : [] }
        , markerLabels = function(d) { return d.markerLabels ? d.markerLabels : []  }
        , markerLineLabels = function(d) { return d.markerLineLabels ? d.markerLineLabels : []  }
        , measureLabels = function(d) { return d.measureLabels ? d.measureLabels : []  }
        , forceX = [0] // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
        , width = 380
        , height = 30
        , container = null
        , tickFormat = null
        , color = nv.utils.getColor(['#1f77b4'])
        , dispatch = d3.dispatch('elementMouseover', 'elementMouseout', 'elementMousemove')
        , defaultRangeLabels = ["Maximum", "Mean", "Minimum"]
        , legacyRangeClassNames = ["Max", "Avg", "Min"]
        ;

    function sortLabels(labels, values){
        var lz = labels.slice();
        labels.sort(function(a, b){
            var iA = lz.indexOf(a);
            var iB = lz.indexOf(b);
            return d3.descending(values[iA], values[iB]);
        });
    };

    function chart(selection) {
        selection.each(function(d, i) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom;

            container = d3.select(this);
            nv.utils.initSVG(container);

            var rangez = ranges.call(this, d, i).slice(),
                markerz = markers.call(this, d, i).slice(),
                markerLinez = markerLines.call(this, d, i).slice().sort(d3.descending),
                measurez = measures.call(this, d, i).slice(),
                rangeLabelz = rangeLabels.call(this, d, i).slice(),
                markerLabelz = markerLabels.call(this, d, i).slice(),
                markerLineLabelz = markerLineLabels.call(this, d, i).slice(),
                measureLabelz = measureLabels.call(this, d, i).slice();

            // Sort labels according to their sorted values
            sortLabels(rangeLabelz, rangez);
            sortLabels(markerLabelz, markerz);
            sortLabels(markerLineLabelz, markerLinez);
            sortLabels(measureLabelz, measurez);

            // sort values descending
            rangez.sort(d3.descending);
            markerz.sort(d3.descending);
            measurez.sort(d3.descending);

            // Setup Scales
            // Compute the new x-scale.
            var x1 = d3.scale.linear()
                .domain( d3.extent(d3.merge([forceX, rangez])) )
                .range(reverse ? [availableWidth, 0] : [0, availableWidth]);

            // Retrieve the old x-scale, if this is an update.
            var x0 = this.__chart__ || d3.scale.linear()
                .domain([0, Infinity])
                .range(x1.range());

            // Stash the new scale.
            this.__chart__ = x1;

            var rangeMin = d3.min(rangez), //rangez[2]
                rangeMax = d3.max(rangez), //rangez[0]
                rangeAvg = rangez[1];

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-bullet').data([d]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bullet');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            for(var i=0,il=rangez.length; i<il; i++){
                var rangeClassNames = 'nv-range nv-range'+i;
                if(i <= 2){
                    rangeClassNames = rangeClassNames + ' nv-range'+legacyRangeClassNames[i];
                }
                gEnter.append('rect').attr('class', rangeClassNames);
            }

            gEnter.append('rect').attr('class', 'nv-measure');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            var w0 = function(d) { return Math.abs(x0(d) - x0(0)) }, // TODO: could optimize by precalculating x0(0) and x1(0)
                w1 = function(d) { return Math.abs(x1(d) - x1(0)) };
            var xp0 = function(d) { return d < 0 ? x0(d) : x0(0) },
                xp1 = function(d) { return d < 0 ? x1(d) : x1(0) };

            for(var i=0,il=rangez.length; i<il; i++){
                var range = rangez[i];
                g.select('rect.nv-range'+i)
                    .attr('height', availableHeight)
                    .attr('width', w1(range))
                    .attr('x', xp1(range))
                    .datum(range)
            }

            g.select('rect.nv-measure')
                .style('fill', color)
                .attr('height', availableHeight / 3)
                .attr('y', availableHeight / 3)
                .attr('width', measurez < 0 ?
                    x1(0) - x1(measurez[0])
                    : x1(measurez[0]) - x1(0))
                .attr('x', xp1(measurez))
                .on('mouseover', function() {
                    dispatch.elementMouseover({
                        value: measurez[0],
                        label: measureLabelz[0] || 'Current',
                        color: d3.select(this).style("fill")
                    })
                })
                .on('mousemove', function() {
                    dispatch.elementMousemove({
                        value: measurez[0],
                        label: measureLabelz[0] || 'Current',
                        color: d3.select(this).style("fill")
                    })
                })
                .on('mouseout', function() {
                    dispatch.elementMouseout({
                        value: measurez[0],
                        label: measureLabelz[0] || 'Current',
                        color: d3.select(this).style("fill")
                    })
                });

            var h3 =  availableHeight / 6;

            var markerData = markerz.map( function(marker, index) {
                return {value: marker, label: markerLabelz[index]}
            });
            gEnter
              .selectAll("path.nv-markerTriangle")
              .data(markerData)
              .enter()
              .append('path')
              .attr('class', 'nv-markerTriangle')
              .attr('d', 'M0,' + h3 + 'L' + h3 + ',' + (-h3) + ' ' + (-h3) + ',' + (-h3) + 'Z')
              .on('mouseover', function(d) {
                dispatch.elementMouseover({
                  value: d.value,
                  label: d.label || 'Previous',
                  color: d3.select(this).style("fill"),
                  pos: [x1(d.value), availableHeight/2]
                })

              })
              .on('mousemove', function(d) {
                  dispatch.elementMousemove({
                      value: d.value,
                      label: d.label || 'Previous',
                      color: d3.select(this).style("fill")
                  })
              })
              .on('mouseout', function(d, i) {
                  dispatch.elementMouseout({
                      value: d.value,
                      label: d.label || 'Previous',
                      color: d3.select(this).style("fill")
                  })
              });

            g.selectAll("path.nv-markerTriangle")
              .data(markerData)
              .attr('transform', function(d) { return 'translate(' + x1(d.value) + ',' + (availableHeight / 2) + ')' });

            var markerLinesData = markerLinez.map( function(marker, index) {
                return {value: marker, label: markerLineLabelz[index]}
            });
            gEnter
              .selectAll("path.nv-markerLine")
              .data(markerLinesData)
              .enter()
              .append('line')
              .attr('cursor', '')
              .attr('class', 'nv-markerLine')
              .attr('x1', function(d) { return x1(d.value) })
              .attr('y1', '2')
              .attr('x2', function(d) { return x1(d.value) })
              .attr('y2', availableHeight - 2)
              .on('mouseover', function(d) {
                dispatch.elementMouseover({
                  value: d.value,
                  label: d.label || 'Previous',
                  color: d3.select(this).style("fill"),
                  pos: [x1(d.value), availableHeight/2]
                })

              })
              .on('mousemove', function(d) {
                  dispatch.elementMousemove({
                      value: d.value,
                      label: d.label || 'Previous',
                      color: d3.select(this).style("fill")
                  })
              })
              .on('mouseout', function(d, i) {
                  dispatch.elementMouseout({
                      value: d.value,
                      label: d.label || 'Previous',
                      color: d3.select(this).style("fill")
                  })
              });

            g.selectAll("path.nv-markerLines")
              .data(markerLinesData)
              .attr('transform', function(d) { return 'translate(' + x1(d.value) + ',' + (availableHeight / 2) + ')' });

            wrap.selectAll('.nv-range')
                .on('mouseover', function(d,i) {
                    var label = rangeLabelz[i] || defaultRangeLabels[i];
                    dispatch.elementMouseover({
                        value: d,
                        label: label,
                        color: d3.select(this).style("fill")
                    })
                })
                .on('mousemove', function() {
                    dispatch.elementMousemove({
                        value: measurez[0],
                        label: measureLabelz[0] || 'Previous',
                        color: d3.select(this).style("fill")
                    })
                })
                .on('mouseout', function(d,i) {
                    var label = rangeLabelz[i] || defaultRangeLabels[i];
                    dispatch.elementMouseout({
                        value: d,
                        label: label,
                        color: d3.select(this).style("fill")
                    })
                });
        });

        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        ranges:      {get: function(){return ranges;}, set: function(_){ranges=_;}}, // ranges (bad, satisfactory, good)
        markers:     {get: function(){return markers;}, set: function(_){markers=_;}}, // markers (previous, goal)
        measures: {get: function(){return measures;}, set: function(_){measures=_;}}, // measures (actual, forecast)
        forceX:      {get: function(){return forceX;}, set: function(_){forceX=_;}},
        width:    {get: function(){return width;}, set: function(_){width=_;}},
        height:    {get: function(){return height;}, set: function(_){height=_;}},
        tickFormat:    {get: function(){return tickFormat;}, set: function(_){tickFormat=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        orient: {get: function(){return orient;}, set: function(_){ // left, right, top, bottom
            orient = _;
            reverse = orient == 'right' || orient == 'bottom';
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }}
    });

    nv.utils.initOptions(chart);
    return chart;
};



// Chart design based on the recommendations of Stephen Few. Implementation
// based on the work of Clint Ivy, Jamie Love, and Jason Davies.
// http://projects.instantcognition.com/protovis/bulletchart/
nv.models.bulletChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var bullet = nv.models.bullet();
    var tooltip = nv.models.tooltip();

    var orient = 'left' // TODO top & bottom
        , reverse = false
        , margin = {top: 5, right: 40, bottom: 20, left: 120}
        , ranges = function(d) { return d.ranges }
        , markers = function(d) { return d.markers ? d.markers : [] }
        , measures = function(d) { return d.measures }
        , width = null
        , height = 55
        , tickFormat = null
	, ticks = null
        , noData = null
        , dispatch = d3.dispatch()
        ;

    tooltip
        .duration(0)
        .headerEnabled(false);

    function chart(selection) {
        selection.each(function(d, i) {
            var container = d3.select(this);
            nv.utils.initSVG(container);

            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = height - margin.top - margin.bottom,
                that = this;

            chart.update = function() { chart(selection) };
            chart.container = this;

            // Display No Data message if there's nothing to show.
            if (!d || !ranges.call(this, d, i)) {
                nv.utils.noData(chart, container)
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            var rangez = ranges.call(this, d, i).slice().sort(d3.descending),
                markerz = markers.call(this, d, i).slice().sort(d3.descending),
                measurez = measures.call(this, d, i).slice().sort(d3.descending);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-bulletChart').data([d]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bulletChart');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-bulletWrap');
            gEnter.append('g').attr('class', 'nv-titles');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            // Compute the new x-scale.
            var x1 = d3.scale.linear()
                .domain([0, Math.max(rangez[0], (markerz[0] || 0), measurez[0])])  // TODO: need to allow forceX and forceY, and xDomain, yDomain
                .range(reverse ? [availableWidth, 0] : [0, availableWidth]);

            // Retrieve the old x-scale, if this is an update.
            var x0 = this.__chart__ || d3.scale.linear()
                .domain([0, Infinity])
                .range(x1.range());

            // Stash the new scale.
            this.__chart__ = x1;

            var w0 = function(d) { return Math.abs(x0(d) - x0(0)) }, // TODO: could optimize by precalculating x0(0) and x1(0)
                w1 = function(d) { return Math.abs(x1(d) - x1(0)) };

            var title = gEnter.select('.nv-titles').append('g')
                .attr('text-anchor', 'end')
                .attr('transform', 'translate(-6,' + (height - margin.top - margin.bottom) / 2 + ')');
            title.append('text')
                .attr('class', 'nv-title')
                .text(function(d) { return d.title; });

            title.append('text')
                .attr('class', 'nv-subtitle')
                .attr('dy', '1em')
                .text(function(d) { return d.subtitle; });

            bullet
                .width(availableWidth)
                .height(availableHeight)

            var bulletWrap = g.select('.nv-bulletWrap');
            d3.transition(bulletWrap).call(bullet);

            // Compute the tick format.
            var format = tickFormat || x1.tickFormat( availableWidth / 100 );

            // Update the tick groups.
            var tick = g.selectAll('g.nv-tick')
                .data(x1.ticks( ticks ? ticks : (availableWidth / 50) ), function(d) {
                    return this.textContent || format(d);
                });

            // Initialize the ticks with the old scale, x0.
            var tickEnter = tick.enter().append('g')
                .attr('class', 'nv-tick')
                .attr('transform', function(d) { return 'translate(' + x0(d) + ',0)' })
                .style('opacity', 1e-6);

            tickEnter.append('line')
                .attr('y1', availableHeight)
                .attr('y2', availableHeight * 7 / 6);

            tickEnter.append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', '1em')
                .attr('y', availableHeight * 7 / 6)
                .text(format);

            // Transition the updating ticks to the new scale, x1.
            var tickUpdate = d3.transition(tick)
                .attr('transform', function(d) { return 'translate(' + x1(d) + ',0)' })
                .style('opacity', 1);

            tickUpdate.select('line')
                .attr('y1', availableHeight)
                .attr('y2', availableHeight * 7 / 6);

            tickUpdate.select('text')
                .attr('y', availableHeight * 7 / 6);

            // Transition the exiting ticks to the new scale, x1.
            d3.transition(tick.exit())
                .attr('transform', function(d) { return 'translate(' + x1(d) + ',0)' })
                .style('opacity', 1e-6)
                .remove();
        });

        d3.timer.flush();
        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    bullet.dispatch.on('elementMouseover.tooltip', function(evt) {
        evt['series'] = {
            key: evt.label,
            value: evt.value,
            color: evt.color
        };
        tooltip.data(evt).hidden(false);
    });

    bullet.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true);
    });

    bullet.dispatch.on('elementMousemove.tooltip', function(evt) {
        tooltip();
    });

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.bullet = bullet;
    chart.dispatch = dispatch;
    chart.tooltip = tooltip;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        ranges:      {get: function(){return ranges;}, set: function(_){ranges=_;}}, // ranges (bad, satisfactory, good)
        markers:     {get: function(){return markers;}, set: function(_){markers=_;}}, // markers (previous, goal)
        measures: {get: function(){return measures;}, set: function(_){measures=_;}}, // measures (actual, forecast)
        width:    {get: function(){return width;}, set: function(_){width=_;}},
        height:    {get: function(){return height;}, set: function(_){height=_;}},
        tickFormat:    {get: function(){return tickFormat;}, set: function(_){tickFormat=_;}},
        ticks:    {get: function(){return ticks;}, set: function(_){ticks=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        orient: {get: function(){return orient;}, set: function(_){ // left, right, top, bottom
            orient = _;
            reverse = orient == 'right' || orient == 'bottom';
        }}
    });

    nv.utils.inheritOptions(chart, bullet);
    nv.utils.initOptions(chart);

    return chart;
};



nv.models.candlestickBar = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = null
        , height = null
        , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
        , container
        , x = d3.scale.linear()
        , y = d3.scale.linear()
        , getX = function(d) { return d.x }
        , getY = function(d) { return d.y }
        , getOpen = function(d) { return d.open }
        , getClose = function(d) { return d.close }
        , getHigh = function(d) { return d.high }
        , getLow = function(d) { return d.low }
        , forceX = []
        , forceY = []
        , padData     = false // If true, adds half a data points width to front and back, for lining up a line chart with a bar chart
        , clipEdge = true
        , color = nv.utils.defaultColor()
        , interactive = false
        , xDomain
        , yDomain
        , xRange
        , yRange
        , dispatch = d3.dispatch('stateChange', 'changeState', 'renderEnd', 'chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'elementMousemove')
        ;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    function chart(selection) {
        selection.each(function(data) {
            container = d3.select(this);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            nv.utils.initSVG(container);

            // Width of the candlestick bars.
            var barWidth = (availableWidth / data[0].values.length) * .45;

            // Setup Scales
            x.domain(xDomain || d3.extent(data[0].values.map(getX).concat(forceX) ));

            if (padData)
                x.range(xRange || [availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5)  / data[0].values.length ]);
            else
                x.range(xRange || [5 + barWidth / 2, availableWidth - barWidth / 2 - 5]);

            y.domain(yDomain || [
                    d3.min(data[0].values.map(getLow).concat(forceY)),
                    d3.max(data[0].values.map(getHigh).concat(forceY))
                ]
            ).range(yRange || [availableHeight, 0]);

            // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
            if (x.domain()[0] === x.domain()[1])
                x.domain()[0] ?
                    x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
                    : x.domain([-1,1]);

            if (y.domain()[0] === y.domain()[1])
                y.domain()[0] ?
                    y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01])
                    : y.domain([-1,1]);

            // Setup containers and skeleton of chart
            var wrap = d3.select(this).selectAll('g.nv-wrap.nv-candlestickBar').data([data[0].values]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-candlestickBar');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-ticks');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            container
                .on('click', function(d,i) {
                    dispatch.chartClick({
                        data: d,
                        index: i,
                        pos: d3.event,
                        id: id
                    });
                });

            defsEnter.append('clipPath')
                .attr('id', 'nv-chart-clip-path-' + id)
                .append('rect');

            wrap.select('#nv-chart-clip-path-' + id + ' rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);

            g   .attr('clip-path', clipEdge ? 'url(#nv-chart-clip-path-' + id + ')' : '');

            var ticks = wrap.select('.nv-ticks').selectAll('.nv-tick')
                .data(function(d) { return d });
            ticks.exit().remove();

            var tickGroups = ticks.enter().append('g');

            // The colors are currently controlled by CSS.
            ticks
                .attr('class', function(d, i, j) { return (getOpen(d, i) > getClose(d, i) ? 'nv-tick negative' : 'nv-tick positive') + ' nv-tick-' + j + '-' + i});

            var lines = tickGroups.append('line')
                .attr('class', 'nv-candlestick-lines')
                .attr('transform', function(d, i) { return 'translate(' + x(getX(d, i)) + ',0)'; })
                .attr('x1', 0)
                .attr('y1', function(d, i) { return y(getHigh(d, i)); })
                .attr('x2', 0)
                .attr('y2', function(d, i) { return y(getLow(d, i)); });

            var rects = tickGroups.append('rect')
                .attr('class', 'nv-candlestick-rects nv-bars')
                .attr('transform', function(d, i) {
                    return 'translate(' + (x(getX(d, i)) - barWidth/2) + ','
                    + (y(getY(d, i)) - (getOpen(d, i) > getClose(d, i) ? (y(getClose(d, i)) - y(getOpen(d, i))) : 0))
                    + ')';
                })
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', barWidth)
                .attr('height', function(d, i) {
                    var open = getOpen(d, i);
                    var close = getClose(d, i);
                    return open > close ? y(close) - y(open) : y(open) - y(close);
                });

            ticks.select('.nv-candlestick-lines').transition()
                .attr('transform', function(d, i) { return 'translate(' + x(getX(d, i)) + ',0)'; })
                .attr('x1', 0)
                .attr('y1', function(d, i) { return y(getHigh(d, i)); })
                .attr('x2', 0)
                .attr('y2', function(d, i) { return y(getLow(d, i)); });

            ticks.select('.nv-candlestick-rects').transition()
                .attr('transform', function(d, i) {
                    return 'translate(' + (x(getX(d, i)) - barWidth/2) + ','
                    + (y(getY(d, i)) - (getOpen(d, i) > getClose(d, i) ? (y(getClose(d, i)) - y(getOpen(d, i))) : 0))
                    + ')';
                })
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', barWidth)
                .attr('height', function(d, i) {
                    var open = getOpen(d, i);
                    var close = getClose(d, i);
                    return open > close ? y(close) - y(open) : y(open) - y(close);
                });
        });

        return chart;
    }


    //Create methods to allow outside functions to highlight a specific bar.
    chart.highlightPoint = function(pointIndex, isHoverOver) {
        chart.clearHighlights();
        container.select(".nv-candlestickBar .nv-tick-0-" + pointIndex)
            .classed("hover", isHoverOver)
        ;
    };

    chart.clearHighlights = function() {
        container.select(".nv-candlestickBar .nv-tick.hover")
            .classed("hover", false)
        ;
    };

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:    {get: function(){return width;}, set: function(_){width=_;}},
        height:   {get: function(){return height;}, set: function(_){height=_;}},
        xScale:   {get: function(){return x;}, set: function(_){x=_;}},
        yScale:   {get: function(){return y;}, set: function(_){y=_;}},
        xDomain:  {get: function(){return xDomain;}, set: function(_){xDomain=_;}},
        yDomain:  {get: function(){return yDomain;}, set: function(_){yDomain=_;}},
        xRange:   {get: function(){return xRange;}, set: function(_){xRange=_;}},
        yRange:   {get: function(){return yRange;}, set: function(_){yRange=_;}},
        forceX:   {get: function(){return forceX;}, set: function(_){forceX=_;}},
        forceY:   {get: function(){return forceY;}, set: function(_){forceY=_;}},
        padData:  {get: function(){return padData;}, set: function(_){padData=_;}},
        clipEdge: {get: function(){return clipEdge;}, set: function(_){clipEdge=_;}},
        id:       {get: function(){return id;}, set: function(_){id=_;}},
        interactive: {get: function(){return interactive;}, set: function(_){interactive=_;}},

        x:     {get: function(){return getX;}, set: function(_){getX=_;}},
        y:     {get: function(){return getY;}, set: function(_){getY=_;}},
        open:  {get: function(){return getOpen();}, set: function(_){getOpen=_;}},
        close: {get: function(){return getClose();}, set: function(_){getClose=_;}},
        high:  {get: function(){return getHigh;}, set: function(_){getHigh=_;}},
        low:   {get: function(){return getLow;}, set: function(_){getLow=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    != undefined ? _.top    : margin.top;
            margin.right  = _.right  != undefined ? _.right  : margin.right;
            margin.bottom = _.bottom != undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   != undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }}
    });

    nv.utils.initOptions(chart);
    return chart;
};

nv.models.cumulativeLineChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var lines = nv.models.line()
        , xAxis = nv.models.axis()
        , yAxis = nv.models.axis()
        , legend = nv.models.legend()
        , controls = nv.models.legend()
        , interactiveLayer = nv.interactiveGuideline()
        , tooltip = nv.models.tooltip()
        ;

    var margin = {top: 30, right: 30, bottom: 50, left: 60}
        , color = nv.utils.defaultColor()
        , width = null
        , height = null
        , showLegend = true
        , showXAxis = true
        , showYAxis = true
        , rightAlignYAxis = false
        , showControls = true
        , useInteractiveGuideline = false
        , rescaleY = true
        , x //can be accessed via chart.xScale()
        , y //can be accessed via chart.yScale()
        , id = lines.id()
        , state = nv.utils.state()
        , defaultState = null
        , noData = null
        , average = function(d) { return d.average }
        , dispatch = d3.dispatch('stateChange', 'changeState', 'renderEnd')
        , transitionDuration = 250
        , duration = 250
        , noErrorCheck = false  //if set to TRUE, will bypass an error check in the indexify function.
        ;

    state.index = 0;
    state.rescaleY = rescaleY;

    xAxis.orient('bottom').tickPadding(7);
    yAxis.orient((rightAlignYAxis) ? 'right' : 'left');

    tooltip.valueFormatter(function(d, i) {
        return yAxis.tickFormat()(d, i);
    }).headerFormatter(function(d, i) {
        return xAxis.tickFormat()(d, i);
    });

    controls.updateState(false);

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var dx = d3.scale.linear()
        , index = {i: 0, x: 0}
        , renderWatch = nv.utils.renderWatch(dispatch, duration)
        ;

    var stateGetter = function(data) {
        return function(){
            return {
                active: data.map(function(d) { return !d.disabled }),
                index: index.i,
                rescaleY: rescaleY
            };
        }
    };

    var stateSetter = function(data) {
        return function(state) {
            if (state.index !== undefined)
                index.i = state.index;
            if (state.rescaleY !== undefined)
                rescaleY = state.rescaleY;
            if (state.active !== undefined)
                data.forEach(function(series,i) {
                    series.disabled = !state.active[i];
                });
        }
    };

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(lines);
        if (showXAxis) renderWatch.models(xAxis);
        if (showYAxis) renderWatch.models(yAxis);
        selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);
            container.classed('nv-chart-' + id, true);
            var that = this;

            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            chart.update = function() {
                if (duration === 0)
                    container.call(chart);
                else
                    container.transition().duration(duration).call(chart)
            };
            chart.container = this;

            state
                .setter(stateSetter(data), chart.update)
                .getter(stateGetter(data))
                .update();

            // DEPRECATED set state.disableddisabled
            state.disabled = data.map(function(d) { return !!d.disabled });

            if (!defaultState) {
                var key;
                defaultState = {};
                for (key in state) {
                    if (state[key] instanceof Array)
                        defaultState[key] = state[key].slice(0);
                    else
                        defaultState[key] = state[key];
                }
            }

            var indexDrag = d3.behavior.drag()
                .on('dragstart', dragStart)
                .on('drag', dragMove)
                .on('dragend', dragEnd);


            function dragStart(d,i) {
                d3.select(chart.container)
                    .style('cursor', 'ew-resize');
            }

            function dragMove(d,i) {
                index.x = d3.event.x;
                index.i = Math.round(dx.invert(index.x));
                updateZero();
            }

            function dragEnd(d,i) {
                d3.select(chart.container)
                    .style('cursor', 'auto');

                // update state and send stateChange with new index
                state.index = index.i;
                dispatch.stateChange(state);
            }

            // Display No Data message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
                nv.utils.noData(chart, container)
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            // Setup Scales
            x = lines.xScale();
            y = lines.yScale();

            if (!rescaleY) {
                var seriesDomains = data
                    .filter(function(series) { return !series.disabled })
                    .map(function(series,i) {
                        var initialDomain = d3.extent(series.values, lines.y());

                        //account for series being disabled when losing 95% or more
                        if (initialDomain[0] < -.95) initialDomain[0] = -.95;

                        return [
                                (initialDomain[0] - initialDomain[1]) / (1 + initialDomain[1]),
                                (initialDomain[1] - initialDomain[0]) / (1 + initialDomain[0])
                        ];
                    });

                var completeDomain = [
                    d3.min(seriesDomains, function(d) { return d[0] }),
                    d3.max(seriesDomains, function(d) { return d[1] })
                ];

                lines.yDomain(completeDomain);
            } else {
                lines.yDomain(null);
            }

            dx.domain([0, data[0].values.length - 1]) //Assumes all series have same length
                .range([0, availableWidth])
                .clamp(true);

            var data = indexify(index.i, data);

            // Setup containers and skeleton of chart
            var interactivePointerEvents = (useInteractiveGuideline) ? "none" : "all";
            var wrap = container.selectAll('g.nv-wrap.nv-cumulativeLine').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-cumulativeLine').append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-interactive');
            gEnter.append('g').attr('class', 'nv-x nv-axis').style("pointer-events","none");
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-background');
            gEnter.append('g').attr('class', 'nv-linesWrap').style("pointer-events",interactivePointerEvents);
            gEnter.append('g').attr('class', 'nv-avgLinesWrap').style("pointer-events","none");
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-controlsWrap');

            // Legend
            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                legend.width(availableWidth);

                g.select('.nv-legendWrap')
                    .datum(data)
                    .call(legend);

                if (legend.height() > margin.top) {
                    margin.top = legend.height();
                    availableHeight = nv.utils.availableHeight(height, container, margin);
                }

                g.select('.nv-legendWrap')
                    .attr('transform', 'translate(0,' + (-margin.top) +')')
            }

            // Controls
            if (!showControls) {
                 g.select('.nv-controlsWrap').selectAll('*').remove();
            } else {
                var controlsData = [
                    { key: 'Re-scale y-axis', disabled: !rescaleY }
                ];

                controls
                    .width(140)
                    .color(['#444', '#444', '#444'])
                    .rightAlign(false)
                    .margin({top: 5, right: 0, bottom: 5, left: 20})
                ;

                g.select('.nv-controlsWrap')
                    .datum(controlsData)
                    .attr('transform', 'translate(0,' + (-margin.top) +')')
                    .call(controls);
            }

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            if (rightAlignYAxis) {
                g.select(".nv-y.nv-axis")
                    .attr("transform", "translate(" + availableWidth + ",0)");
            }

            // Show error if series goes below 100%
            var tempDisabled = data.filter(function(d) { return d.tempDisabled });

            wrap.select('.tempDisabled').remove(); //clean-up and prevent duplicates
            if (tempDisabled.length) {
                wrap.append('text').attr('class', 'tempDisabled')
                    .attr('x', availableWidth / 2)
                    .attr('y', '-.71em')
                    .style('text-anchor', 'end')
                    .text(tempDisabled.map(function(d) { return d.key }).join(', ') + ' values cannot be calculated for this time period.');
            }

            //Set up interactive layer
            if (useInteractiveGuideline) {
                interactiveLayer
                    .width(availableWidth)
                    .height(availableHeight)
                    .margin({left:margin.left,top:margin.top})
                    .svgContainer(container)
                    .xScale(x);
                wrap.select(".nv-interactive").call(interactiveLayer);
            }

            gEnter.select('.nv-background')
                .append('rect');

            g.select('.nv-background rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);

            lines
                //.x(function(d) { return d.x })
                .y(function(d) { return d.display.y })
                .width(availableWidth)
                .height(availableHeight)
                .color(data.map(function(d,i) {
                    return d.color || color(d, i);
                }).filter(function(d,i) { return !data[i].disabled && !data[i].tempDisabled; }));

            var linesWrap = g.select('.nv-linesWrap')
                .datum(data.filter(function(d) { return  !d.disabled && !d.tempDisabled }));

            linesWrap.call(lines);

            //Store a series index number in the data array.
            data.forEach(function(d,i) {
                d.seriesIndex = i;
            });

            var avgLineData = data.filter(function(d) {
                return !d.disabled && !!average(d);
            });

            var avgLines = g.select(".nv-avgLinesWrap").selectAll("line")
                .data(avgLineData, function(d) { return d.key; });

            var getAvgLineY = function(d) {
                //If average lines go off the svg element, clamp them to the svg bounds.
                var yVal = y(average(d));
                if (yVal < 0) return 0;
                if (yVal > availableHeight) return availableHeight;
                return yVal;
            };

            avgLines.enter()
                .append('line')
                .style('stroke-width',2)
                .style('stroke-dasharray','10,10')
                .style('stroke',function (d,i) {
                    return lines.color()(d,d.seriesIndex);
                })
                .attr('x1',0)
                .attr('x2',availableWidth)
                .attr('y1', getAvgLineY)
                .attr('y2', getAvgLineY);

            avgLines
                .style('stroke-opacity',function(d){
                    //If average lines go offscreen, make them transparent
                    var yVal = y(average(d));
                    if (yVal < 0 || yVal > availableHeight) return 0;
                    return 1;
                })
                .attr('x1',0)
                .attr('x2',availableWidth)
                .attr('y1', getAvgLineY)
                .attr('y2', getAvgLineY);

            avgLines.exit().remove();

            //Create index line
            var indexLine = linesWrap.selectAll('.nv-indexLine')
                .data([index]);
            indexLine.enter().append('rect').attr('class', 'nv-indexLine')
                .attr('width', 3)
                .attr('x', -2)
                .attr('fill', 'red')
                .attr('fill-opacity', .5)
                .style("pointer-events","all")
                .call(indexDrag);

            indexLine
                .attr('transform', function(d) { return 'translate(' + dx(d.i) + ',0)' })
                .attr('height', availableHeight);

            // Setup Axes
            if (showXAxis) {
                xAxis
                    .scale(x)
                    ._ticks( nv.utils.calcTicksX(availableWidth/70, data) )
                    .tickSize(-availableHeight, 0);

                g.select('.nv-x.nv-axis')
                    .attr('transform', 'translate(0,' + y.range()[0] + ')');
                g.select('.nv-x.nv-axis')
                    .call(xAxis);
            }

            if (showYAxis) {
                yAxis
                    .scale(y)
                    ._ticks( nv.utils.calcTicksY(availableHeight/36, data) )
                    .tickSize( -availableWidth, 0);

                g.select('.nv-y.nv-axis')
                    .call(yAxis);
            }

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            function updateZero() {
                indexLine
                    .data([index]);

                //When dragging the index line, turn off line transitions.
                // Then turn them back on when done dragging.
                var oldDuration = chart.duration();
                chart.duration(0);
                chart.update();
                chart.duration(oldDuration);
            }

            g.select('.nv-background rect')
                .on('click', function() {
                    index.x = d3.mouse(this)[0];
                    index.i = Math.round(dx.invert(index.x));

                    // update state and send stateChange with new index
                    state.index = index.i;
                    dispatch.stateChange(state);

                    updateZero();
                });

            lines.dispatch.on('elementClick', function(e) {
                index.i = e.pointIndex;
                index.x = dx(index.i);

                // update state and send stateChange with new index
                state.index = index.i;
                dispatch.stateChange(state);

                updateZero();
            });

            controls.dispatch.on('legendClick', function(d,i) {
                d.disabled = !d.disabled;
                rescaleY = !d.disabled;

                state.rescaleY = rescaleY;
                dispatch.stateChange(state);
                chart.update();
            });

            legend.dispatch.on('stateChange', function(newState) {
                for (var key in newState)
                    state[key] = newState[key];
                dispatch.stateChange(state);
                chart.update();
            });

            interactiveLayer.dispatch.on('elementMousemove', function(e) {
                lines.clearHighlights();
                var singlePoint, pointIndex, pointXLocation, allData = [];

                data
                    .filter(function(series, i) {
                        series.seriesIndex = i;
                        return !series.disabled;
                    })
                    .forEach(function(series,i) {
                        pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
                        lines.highlightPoint(i, pointIndex, true);
                        var point = series.values[pointIndex];
                        if (typeof point === 'undefined') return;
                        if (typeof singlePoint === 'undefined') singlePoint = point;
                        if (typeof pointXLocation === 'undefined') pointXLocation = chart.xScale()(chart.x()(point,pointIndex));
                        allData.push({
                            key: series.key,
                            value: chart.y()(point, pointIndex),
                            color: color(series,series.seriesIndex)
                        });
                    });

                //Highlight the tooltip entry based on which point the mouse is closest to.
                if (allData.length > 2) {
                    var yValue = chart.yScale().invert(e.mouseY);
                    var domainExtent = Math.abs(chart.yScale().domain()[0] - chart.yScale().domain()[1]);
                    var threshold = 0.03 * domainExtent;
                    var indexToHighlight = nv.nearestValueIndex(allData.map(function(d){return d.value}),yValue,threshold);
                    if (indexToHighlight !== null)
                        allData[indexToHighlight].highlight = true;
                }

                var xValue = xAxis.tickFormat()(chart.x()(singlePoint,pointIndex), pointIndex);
                interactiveLayer.tooltip
                    .valueFormatter(function(d,i) {
                        return yAxis.tickFormat()(d);
                    })
                    .data(
                    {
                        value: xValue,
                        series: allData
                    }
                )();

                interactiveLayer.renderGuideLine(pointXLocation);
            });

            interactiveLayer.dispatch.on("elementMouseout",function(e) {
                lines.clearHighlights();
            });

            // Update chart from a state object passed to event handler
            dispatch.on('changeState', function(e) {
                if (typeof e.disabled !== 'undefined') {
                    data.forEach(function(series,i) {
                        series.disabled = e.disabled[i];
                    });

                    state.disabled = e.disabled;
                }

                if (typeof e.index !== 'undefined') {
                    index.i = e.index;
                    index.x = dx(index.i);

                    state.index = e.index;

                    indexLine
                        .data([index]);
                }

                if (typeof e.rescaleY !== 'undefined') {
                    rescaleY = e.rescaleY;
                }

                chart.update();
            });

        });

        renderWatch.renderEnd('cumulativeLineChart immediate');

        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    lines.dispatch.on('elementMouseover.tooltip', function(evt) {
        var point = {
            x: chart.x()(evt.point),
            y: chart.y()(evt.point),
            color: evt.point.color
        };
        evt.point = point;
        tooltip.data(evt).hidden(false);
    });

    lines.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true)
    });

    //============================================================
    // Functions
    //------------------------------------------------------------

    var indexifyYGetter = null;
    /* Normalize the data according to an index point. */
    function indexify(idx, data) {
        if (!indexifyYGetter) indexifyYGetter = lines.y();
        return data.map(function(line, i) {
            if (!line.values) {
                return line;
            }
            var indexValue = line.values[idx];
            if (indexValue == null) {
                return line;
            }
            var v = indexifyYGetter(indexValue, idx);

            //TODO: implement check below, and disable series if series loses 100% or more cause divide by 0 issue
            if (v < -.95 && !noErrorCheck) {
                //if a series loses more than 100%, calculations fail.. anything close can cause major distortion (but is mathematically correct till it hits 100)

                line.tempDisabled = true;
                return line;
            }

            line.tempDisabled = false;

            line.values = line.values.map(function(point, pointIndex) {
                point.display = {'y': (indexifyYGetter(point, pointIndex) - v) / (1 + v) };
                return point;
            });

            return line;
        })
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.lines = lines;
    chart.legend = legend;
    chart.controls = controls;
    chart.xAxis = xAxis;
    chart.yAxis = yAxis;
    chart.interactiveLayer = interactiveLayer;
    chart.state = state;
    chart.tooltip = tooltip;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        rescaleY:     {get: function(){return rescaleY;}, set: function(_){rescaleY=_;}},
        showControls:     {get: function(){return showControls;}, set: function(_){showControls=_;}},
        showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        average: {get: function(){return average;}, set: function(_){average=_;}},
        defaultState:    {get: function(){return defaultState;}, set: function(_){defaultState=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},
        showXAxis:    {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis:    {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        noErrorCheck:    {get: function(){return noErrorCheck;}, set: function(_){noErrorCheck=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            legend.color(color);
        }},
        useInteractiveGuideline: {get: function(){return useInteractiveGuideline;}, set: function(_){
            useInteractiveGuideline = _;
            if (_ === true) {
                chart.interactive(false);
                chart.useVoronoi(false);
            }
        }},
        rightAlignYAxis: {get: function(){return rightAlignYAxis;}, set: function(_){
            rightAlignYAxis = _;
            yAxis.orient( (_) ? 'right' : 'left');
        }},
        duration:    {get: function(){return duration;}, set: function(_){
            duration = _;
            lines.duration(duration);
            xAxis.duration(duration);
            yAxis.duration(duration);
            renderWatch.reset(duration);
        }}
    });

    nv.utils.inheritOptions(chart, lines);
    nv.utils.initOptions(chart);

    return chart;
};
//TODO: consider deprecating by adding necessary features to multiBar model
nv.models.discreteBar = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = 960
        , height = 500
        , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
        , container
        , x = d3.scale.ordinal()
        , y = d3.scale.linear()
        , getX = function(d) { return d.x }
        , getY = function(d) { return d.y }
        , forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
        , color = nv.utils.defaultColor()
        , showValues = false
        , valueFormat = d3.format(',.2f')
        , xDomain
        , yDomain
        , xRange
        , yRange
        , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'elementMousemove', 'renderEnd')
        , rectClass = 'discreteBar'
        , duration = 250
        ;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var x0, y0;
    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom;

            container = d3.select(this);
            nv.utils.initSVG(container);

            //add series index to each data point for reference
            data.forEach(function(series, i) {
                series.values.forEach(function(point) {
                    point.series = i;
                });
            });

            // Setup Scales
            // remap and flatten the data for use in calculating the scales' domains
            var seriesData = (xDomain && yDomain) ? [] : // if we know xDomain and yDomain, no need to calculate
                data.map(function(d) {
                    return d.values.map(function(d,i) {
                        return { x: getX(d,i), y: getY(d,i), y0: d.y0 }
                    })
                });

            x   .domain(xDomain || d3.merge(seriesData).map(function(d) { return d.x }))
                .rangeBands(xRange || [0, availableWidth], .1);
            y   .domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) { return d.y }).concat(forceY)));

            // If showValues, pad the Y axis range to account for label height
            if (showValues) y.range(yRange || [availableHeight - (y.domain()[0] < 0 ? 12 : 0), y.domain()[1] > 0 ? 12 : 0]);
            else y.range(yRange || [availableHeight, 0]);

            //store old scales if they exist
            x0 = x0 || x;
            y0 = y0 || y.copy().range([y(0),y(0)]);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-discretebar').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discretebar');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-groups');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            //TODO: by definition, the discrete bar should not have multiple groups, will modify/remove later
            var groups = wrap.select('.nv-groups').selectAll('.nv-group')
                .data(function(d) { return d }, function(d) { return d.key });
            groups.enter().append('g')
                .style('stroke-opacity', 1e-6)
                .style('fill-opacity', 1e-6);
            groups.exit()
                .watchTransition(renderWatch, 'discreteBar: exit groups')
                .style('stroke-opacity', 1e-6)
                .style('fill-opacity', 1e-6)
                .remove();
            groups
                .attr('class', function(d,i) { return 'nv-group nv-series-' + i })
                .classed('hover', function(d) { return d.hover });
            groups
                .watchTransition(renderWatch, 'discreteBar: groups')
                .style('stroke-opacity', 1)
                .style('fill-opacity', .75);

            var bars = groups.selectAll('g.nv-bar')
                .data(function(d) { return d.values });
            bars.exit().remove();

            var barsEnter = bars.enter().append('g')
                .attr('transform', function(d,i,j) {
                    return 'translate(' + (x(getX(d,i)) + x.rangeBand() * .05 ) + ', ' + y(0) + ')'
                })
                .on('mouseover', function(d,i) { //TODO: figure out why j works above, but not here
                    d3.select(this).classed('hover', true);
                    dispatch.elementMouseover({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('mouseout', function(d,i) {
                    d3.select(this).classed('hover', false);
                    dispatch.elementMouseout({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('mousemove', function(d,i) {
                    dispatch.elementMousemove({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('click', function(d,i) {
                    var element = this;
                    dispatch.elementClick({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill"),
                        event: d3.event,
                        element: element
                    });
                    d3.event.stopPropagation();
                })
                .on('dblclick', function(d,i) {
                    dispatch.elementDblClick({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                    d3.event.stopPropagation();
                });

            barsEnter.append('rect')
                .attr('height', 0)
                .attr('width', x.rangeBand() * .9 / data.length )

            if (showValues) {
                barsEnter.append('text')
                    .attr('text-anchor', 'middle')
                ;

                bars.select('text')
                    .text(function(d,i) { return valueFormat(getY(d,i)) })
                    .watchTransition(renderWatch, 'discreteBar: bars text')
                    .attr('x', x.rangeBand() * .9 / 2)
                    .attr('y', function(d,i) { return getY(d,i) < 0 ? y(getY(d,i)) - y(0) + 12 : -4 })

                ;
            } else {
                bars.selectAll('text').remove();
            }

            bars
                .attr('class', function(d,i) { return getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive' })
                .style('fill', function(d,i) { return d.color || color(d,i) })
                .style('stroke', function(d,i) { return d.color || color(d,i) })
                .select('rect')
                .attr('class', rectClass)
                .watchTransition(renderWatch, 'discreteBar: bars rect')
                .attr('width', x.rangeBand() * .9 / data.length);
            bars.watchTransition(renderWatch, 'discreteBar: bars')
                //.delay(function(d,i) { return i * 1200 / data[0].values.length })
                .attr('transform', function(d,i) {
                    var left = x(getX(d,i)) + x.rangeBand() * .05,
                        top = getY(d,i) < 0 ?
                            y(0) :
                                y(0) - y(getY(d,i)) < 1 ?
                            y(0) - 1 : //make 1 px positive bars show up above y=0
                            y(getY(d,i));

                    return 'translate(' + left + ', ' + top + ')'
                })
                .select('rect')
                .attr('height', function(d,i) {
                    return  Math.max(Math.abs(y(getY(d,i)) - y(0)), 1)
                });


            //store old scales for use in transitions on update
            x0 = x.copy();
            y0 = y.copy();

        });

        renderWatch.renderEnd('discreteBar immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:   {get: function(){return width;}, set: function(_){width=_;}},
        height:  {get: function(){return height;}, set: function(_){height=_;}},
        forceY:  {get: function(){return forceY;}, set: function(_){forceY=_;}},
        showValues: {get: function(){return showValues;}, set: function(_){showValues=_;}},
        x:       {get: function(){return getX;}, set: function(_){getX=_;}},
        y:       {get: function(){return getY;}, set: function(_){getY=_;}},
        xScale:  {get: function(){return x;}, set: function(_){x=_;}},
        yScale:  {get: function(){return y;}, set: function(_){y=_;}},
        xDomain: {get: function(){return xDomain;}, set: function(_){xDomain=_;}},
        yDomain: {get: function(){return yDomain;}, set: function(_){yDomain=_;}},
        xRange:  {get: function(){return xRange;}, set: function(_){xRange=_;}},
        yRange:  {get: function(){return yRange;}, set: function(_){yRange=_;}},
        valueFormat:    {get: function(){return valueFormat;}, set: function(_){valueFormat=_;}},
        id:          {get: function(){return id;}, set: function(_){id=_;}},
        rectClass: {get: function(){return rectClass;}, set: function(_){rectClass=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
        }}
    });

    nv.utils.initOptions(chart);

    return chart;
};

nv.models.discreteBarChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var discretebar = nv.models.discreteBar()
        , xAxis = nv.models.axis()
        , yAxis = nv.models.axis()
	, legend = nv.models.legend()
        , tooltip = nv.models.tooltip()
        ;

    var margin = {top: 15, right: 10, bottom: 50, left: 60}
        , width = null
        , height = null
        , color = nv.utils.getColor()
	, showLegend = false
        , showXAxis = true
        , showYAxis = true
        , rightAlignYAxis = false
        , staggerLabels = false
        , wrapLabels = false
        , rotateLabels = 0
        , x
        , y
        , noData = null
        , dispatch = d3.dispatch('beforeUpdate','renderEnd')
        , duration = 250
        ;

    xAxis
        .orient('bottom')
        .showMaxMin(false)
        .tickFormat(function(d) { return d })
    ;
    yAxis
        .orient((rightAlignYAxis) ? 'right' : 'left')
        .tickFormat(d3.format(',.1f'))
    ;

    tooltip
        .duration(0)
        .headerEnabled(false)
        .valueFormatter(function(d, i) {
            return yAxis.tickFormat()(d, i);
        })
        .keyFormatter(function(d, i) {
            return xAxis.tickFormat()(d, i);
        });

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(discretebar);
        if (showXAxis) renderWatch.models(xAxis);
        if (showYAxis) renderWatch.models(yAxis);

        selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            chart.update = function() {
                dispatch.beforeUpdate();
                container.transition().duration(duration).call(chart);
            };
            chart.container = this;

            // Display No Data message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
                nv.utils.noData(chart, container);
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            // Setup Scales
            x = discretebar.xScale();
            y = discretebar.yScale().clamp(true);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-discreteBarWithAxes').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discreteBarWithAxes').append('g');
            var defsEnter = gEnter.append('defs');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis')
                .append('g').attr('class', 'nv-zeroLine')
                .append('line');

            gEnter.append('g').attr('class', 'nv-barsWrap');
	    gEnter.append('g').attr('class', 'nv-legendWrap');

            g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            // Legend
            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                legend.width(availableWidth);

                g.select('.nv-legendWrap')
                    .datum(data)
                    .call(legend);

                if (legend.height() > margin.top) {
                    margin.top = legend.height();
                    availableHeight = nv.utils.availableHeight(height, container, margin);
                }

                wrap.select('.nv-legendWrap')
                    .attr('transform', 'translate(0,' + (-margin.top) +')')
            }

            if (rightAlignYAxis) {
                g.select(".nv-y.nv-axis")
                    .attr("transform", "translate(" + availableWidth + ",0)");
            }

            // Main Chart Component(s)
            discretebar
                .width(availableWidth)
                .height(availableHeight);

            var barsWrap = g.select('.nv-barsWrap')
                .datum(data.filter(function(d) { return !d.disabled }));

            barsWrap.transition().call(discretebar);


            defsEnter.append('clipPath')
                .attr('id', 'nv-x-label-clip-' + discretebar.id())
                .append('rect');

            g.select('#nv-x-label-clip-' + discretebar.id() + ' rect')
                .attr('width', x.rangeBand() * (staggerLabels ? 2 : 1))
                .attr('height', 16)
                .attr('x', -x.rangeBand() / (staggerLabels ? 1 : 2 ));

            // Setup Axes
            if (showXAxis) {
                xAxis
                    .scale(x)
                    ._ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize(-availableHeight, 0);

                g.select('.nv-x.nv-axis')
                    .attr('transform', 'translate(0,' + (y.range()[0] + ((discretebar.showValues() && y.domain()[0] < 0) ? 16 : 0)) + ')');
                g.select('.nv-x.nv-axis').call(xAxis);

                var xTicks = g.select('.nv-x.nv-axis').selectAll('g');
                if (staggerLabels) {
                    xTicks
                        .selectAll('text')
                        .attr('transform', function(d,i,j) { return 'translate(0,' + (j % 2 == 0 ? '5' : '17') + ')' })
                }

                if (rotateLabels) {
                    xTicks
                        .selectAll('.tick text')
                        .attr('transform', 'rotate(' + rotateLabels + ' 0,0)')
                        .style('text-anchor', rotateLabels > 0 ? 'start' : 'end');
                }

                if (wrapLabels) {
                    g.selectAll('.tick text')
                        .call(nv.utils.wrapTicks, chart.xAxis.rangeBand())
                }
            }

            if (showYAxis) {
                yAxis
                    .scale(y)
                    ._ticks( nv.utils.calcTicksY(availableHeight/36, data) )
                    .tickSize( -availableWidth, 0);

                g.select('.nv-y.nv-axis').call(yAxis);
            }

            // Zero line
            g.select(".nv-zeroLine line")
                .attr("x1",0)
                .attr("x2",(rightAlignYAxis) ? -availableWidth : availableWidth)
                .attr("y1", y(0))
                .attr("y2", y(0))
            ;
        });

        renderWatch.renderEnd('discreteBar chart immediate');
        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    discretebar.dispatch.on('elementMouseover.tooltip', function(evt) {
        evt['series'] = {
            key: chart.x()(evt.data),
            value: chart.y()(evt.data),
            color: evt.color
        };
        tooltip.data(evt).hidden(false);
    });

    discretebar.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true);
    });

    discretebar.dispatch.on('elementMousemove.tooltip', function(evt) {
        tooltip();
    });

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.discretebar = discretebar;
    chart.legend = legend;
    chart.xAxis = xAxis;
    chart.yAxis = yAxis;
    chart.tooltip = tooltip;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
	showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        staggerLabels: {get: function(){return staggerLabels;}, set: function(_){staggerLabels=_;}},
        rotateLabels:  {get: function(){return rotateLabels;}, set: function(_){rotateLabels=_;}},
        wrapLabels:  {get: function(){return wrapLabels;}, set: function(_){wrapLabels=!!_;}},
        showXAxis: {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis: {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            discretebar.duration(duration);
            xAxis.duration(duration);
            yAxis.duration(duration);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            discretebar.color(color);
	    legend.color(color);
        }},
        rightAlignYAxis: {get: function(){return rightAlignYAxis;}, set: function(_){
            rightAlignYAxis = _;
            yAxis.orient( (_) ? 'right' : 'left');
        }}
    });

    nv.utils.inheritOptions(chart, discretebar);
    nv.utils.initOptions(chart);

    return chart;
}

nv.models.distribution = function() {
    "use strict";
    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = 400 //technically width or height depending on x or y....
        , size = 8
        , axis = 'x' // 'x' or 'y'... horizontal or vertical
        , getData = function(d) { return d[axis] }  // defaults d.x or d.y
        , color = nv.utils.defaultColor()
        , scale = d3.scale.linear()
        , domain
        , duration = 250
        , dispatch = d3.dispatch('renderEnd')
        ;

    //============================================================


    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var scale0;
    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    //============================================================


    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            var availableLength = width - (axis === 'x' ? margin.left + margin.right : margin.top + margin.bottom),
                naxis = axis == 'x' ? 'y' : 'x',
                container = d3.select(this);
            nv.utils.initSVG(container);

            //------------------------------------------------------------
            // Setup Scales

            scale0 = scale0 || scale;

            //------------------------------------------------------------


            //------------------------------------------------------------
            // Setup containers and skeleton of chart

            var wrap = container.selectAll('g.nv-distribution').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-distribution');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

            //------------------------------------------------------------


            var distWrap = g.selectAll('g.nv-dist')
                .data(function(d) { return d }, function(d) { return d.key });

            distWrap.enter().append('g');
            distWrap
                .attr('class', function(d,i) { return 'nv-dist nv-series-' + i })
                .style('stroke', function(d,i) { return color(d, i) });

            var dist = distWrap.selectAll('line.nv-dist' + axis)
                .data(function(d) { return d.values })
            dist.enter().append('line')
                .attr(axis + '1', function(d,i) { return scale0(getData(d,i)) })
                .attr(axis + '2', function(d,i) { return scale0(getData(d,i)) })
            renderWatch.transition(distWrap.exit().selectAll('line.nv-dist' + axis), 'dist exit')
                // .transition()
                .attr(axis + '1', function(d,i) { return scale(getData(d,i)) })
                .attr(axis + '2', function(d,i) { return scale(getData(d,i)) })
                .style('stroke-opacity', 0)
                .remove();
            dist
                .attr('class', function(d,i) { return 'nv-dist' + axis + ' nv-dist' + axis + '-' + i })
                .attr(naxis + '1', 0)
                .attr(naxis + '2', size);
            renderWatch.transition(dist, 'dist')
                // .transition()
                .attr(axis + '1', function(d,i) { return scale(getData(d,i)) })
                .attr(axis + '2', function(d,i) { return scale(getData(d,i)) })


            scale0 = scale.copy();

        });
        renderWatch.renderEnd('distribution immediate');
        return chart;
    }


    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------
    chart.options = nv.utils.optionsFunc.bind(chart);
    chart.dispatch = dispatch;

    chart.margin = function(_) {
        if (!arguments.length) return margin;
        margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
        margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
        margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
        margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
        return chart;
    };

    chart.width = function(_) {
        if (!arguments.length) return width;
        width = _;
        return chart;
    };

    chart.axis = function(_) {
        if (!arguments.length) return axis;
        axis = _;
        return chart;
    };

    chart.size = function(_) {
        if (!arguments.length) return size;
        size = _;
        return chart;
    };

    chart.getData = function(_) {
        if (!arguments.length) return getData;
        getData = d3.functor(_);
        return chart;
    };

    chart.scale = function(_) {
        if (!arguments.length) return scale;
        scale = _;
        return chart;
    };

    chart.color = function(_) {
        if (!arguments.length) return color;
        color = nv.utils.getColor(_);
        return chart;
    };

    chart.duration = function(_) {
        if (!arguments.length) return duration;
        duration = _;
        renderWatch.reset(duration);
        return chart;
    };
    //============================================================


    return chart;
}
nv.models.focus = function(content) {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var content = content || nv.models.line()
        , xAxis = nv.models.axis()
        , yAxis = nv.models.axis()
        , brush = d3.svg.brush()
        ;

    var margin = {top: 10, right: 0, bottom: 30, left: 0}
        , color = nv.utils.defaultColor()
        , width = null
        , height = 70
        , showXAxis = true
        , showYAxis = false
        , rightAlignYAxis = false
        , ticks = null
        , x
        , y
        , brushExtent = null
        , duration = 250
        , dispatch = d3.dispatch('brush', 'onBrush', 'renderEnd')
        ;

    content.interactive(false);
    content.pointActive(function(d) { return false; });

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(content);
        if (showXAxis) renderWatch.models(xAxis);
        if (showYAxis) renderWatch.models(yAxis);

        selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = height - margin.top - margin.bottom;

            chart.update = function() { 
                if( duration === 0 ) {
                    container.call( chart );
                } else {
                    container.transition().duration(duration).call(chart);
                }
            };
            chart.container = this;

            // Setup Scales
            x = content.xScale();
            y = content.yScale();

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-focus').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-focus').append('g');
            var g = wrap.select('g');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            gEnter.append('g').attr('class', 'nv-background').append('rect');
            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-contentWrap');
            gEnter.append('g').attr('class', 'nv-brushBackground');
            gEnter.append('g').attr('class', 'nv-x nv-brush');

            if (rightAlignYAxis) {
                g.select(".nv-y.nv-axis")
                    .attr("transform", "translate(" + availableWidth + ",0)");
            }

            g.select('.nv-background rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);
                
            content
                .width(availableWidth)
                .height(availableHeight)
                .color(data.map(function(d,i) {
                    return d.color || color(d, i);
                }).filter(function(d,i) { return !data[i].disabled; }));

            var contentWrap = g.select('.nv-contentWrap')
                .datum(data.filter(function(d) { return !d.disabled; }));

            d3.transition(contentWrap).call(content);
            
            // Setup Brush
            brush
                .x(x)
                .on('brush', function() {
                    onBrush();
                });

            if (brushExtent) brush.extent(brushExtent);

            var brushBG = g.select('.nv-brushBackground').selectAll('g')
                .data([brushExtent || brush.extent()]);
    
            var brushBGenter = brushBG.enter()
                .append('g');

            brushBGenter.append('rect')
                .attr('class', 'left')
                .attr('x', 0)
                .attr('y', 0)
                .attr('height', availableHeight);

            brushBGenter.append('rect')
                .attr('class', 'right')
                .attr('x', 0)
                .attr('y', 0)
                .attr('height', availableHeight);

            var gBrush = g.select('.nv-x.nv-brush')
                .call(brush);
            gBrush.selectAll('rect')
                .attr('height', availableHeight);
            gBrush.selectAll('.resize').append('path').attr('d', resizePath);

            onBrush();

            g.select('.nv-background rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);

            if (showXAxis) {
                xAxis.scale(x)
                    ._ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize(-availableHeight, 0);
  
                g.select('.nv-x.nv-axis')
                    .attr('transform', 'translate(0,' + y.range()[0] + ')');
                d3.transition(g.select('.nv-x.nv-axis'))
                    .call(xAxis);
            }

            if (showYAxis) {
                yAxis
                    .scale(y)
                    ._ticks( nv.utils.calcTicksY(availableHeight/36, data) )
                    .tickSize( -availableWidth, 0);

                d3.transition(g.select('.nv-y.nv-axis'))
                    .call(yAxis);
            }
            
            g.select('.nv-x.nv-axis')
                .attr('transform', 'translate(0,' + y.range()[0] + ')');

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            //============================================================
            // Functions
            //------------------------------------------------------------
    
            // Taken from crossfilter (http://square.github.com/crossfilter/)
            function resizePath(d) {
                var e = +(d == 'e'),
                    x = e ? 1 : -1,
                    y = availableHeight / 3;
                return 'M' + (0.5 * x) + ',' + y
                    + 'A6,6 0 0 ' + e + ' ' + (6.5 * x) + ',' + (y + 6)
                    + 'V' + (2 * y - 6)
                    + 'A6,6 0 0 ' + e + ' ' + (0.5 * x) + ',' + (2 * y)
                    + 'Z'
                    + 'M' + (2.5 * x) + ',' + (y + 8)
                    + 'V' + (2 * y - 8)
                    + 'M' + (4.5 * x) + ',' + (y + 8)
                    + 'V' + (2 * y - 8);
            }
    
    
            function updateBrushBG() {
                if (!brush.empty()) brush.extent(brushExtent);
                brushBG
                    .data([brush.empty() ? x.domain() : brushExtent])
                    .each(function(d,i) {
                        var leftWidth = x(d[0]) - x.range()[0],
                            rightWidth = availableWidth - x(d[1]);
                        d3.select(this).select('.left')
                            .attr('width',  leftWidth < 0 ? 0 : leftWidth);
    
                        d3.select(this).select('.right')
                            .attr('x', x(d[1]))
                            .attr('width', rightWidth < 0 ? 0 : rightWidth);
                    });
            }
    
    
            function onBrush() {
                brushExtent = brush.empty() ? null : brush.extent();
                var extent = brush.empty() ? x.domain() : brush.extent();
    
                //The brush extent cannot be less than one.  If it is, don't update the line chart.
                if (Math.abs(extent[0] - extent[1]) <= 1) {
                    return;
                }
    
                dispatch.brush({extent: extent, brush: brush});
 
                updateBrushBG();
                dispatch.onBrush(extent);
            }


        });

        renderWatch.renderEnd('focus immediate');
        return chart;
    }


    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.content = content;
    chart.brush = brush;
    chart.xAxis = xAxis;
    chart.yAxis = yAxis;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        showXAxis:      {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis:    {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        brushExtent: {get: function(){return brushExtent;}, set: function(_){brushExtent=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            content.duration(duration);
            xAxis.duration(duration);
            yAxis.duration(duration);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            content.color(color);
        }},
        interpolate: {get: function(){return content.interpolate();}, set: function(_){
            content.interpolate(_);
        }},
        xTickFormat: {get: function(){return xAxis.tickFormat();}, set: function(_){
            xAxis.tickFormat(_);
        }},
        yTickFormat: {get: function(){return yAxis.tickFormat();}, set: function(_){
            yAxis.tickFormat(_);
        }},
        x: {get: function(){return content.x();}, set: function(_){
            content.x(_);
        }},
        y: {get: function(){return content.y();}, set: function(_){
            content.y(_);
        }},
        rightAlignYAxis: {get: function(){return rightAlignYAxis;}, set: function(_){
            rightAlignYAxis = _;
            yAxis.orient( rightAlignYAxis ? 'right' : 'left');
        }},
    });

    nv.utils.inheritOptions(chart, content);
    nv.utils.initOptions(chart);

    return chart;
};
nv.models.forceDirectedGraph = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------
    var margin = {top: 2, right: 0, bottom: 2, left: 0}
        , width = 400
        , height = 32
        , container = null
        , dispatch = d3.dispatch('renderEnd')
        , color = nv.utils.getColor(['#000'])
        , tooltip      = nv.models.tooltip()
        , noData = null
        // Force directed graph specific parameters [default values]
        , linkStrength = 0.1
        , friction = 0.9
        , linkDist = 30
        , charge = -120
        , gravity = 0.1
        , theta = 0.8
        , alpha = 0.1
        , radius = 5
        // These functions allow to add extra attributes to ndes and links
        ,nodeExtras = function(nodes) { /* Do nothing */ }
        ,linkExtras = function(links) { /* Do nothing */ }
        ;


    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch);

    function chart(selection) {
        renderWatch.reset();

        selection.each(function(data) {
          container = d3.select(this);
          nv.utils.initSVG(container);

          var availableWidth = nv.utils.availableWidth(width, container, margin),
              availableHeight = nv.utils.availableHeight(height, container, margin);

          container
                  .attr("width", availableWidth)
                  .attr("height", availableHeight);

          // Display No Data message if there's nothing to show.
          if (!data || !data.links || !data.nodes) {
              nv.utils.noData(chart, container)
              return chart;
          } else {
              container.selectAll('.nv-noData').remove();
          }
          container.selectAll('*').remove();

          // Collect names of all fields in the nodes
          var nodeFieldSet = new Set();
          data.nodes.forEach(function(node) {
            var keys = Object.keys(node);
            keys.forEach(function(key) {
              nodeFieldSet.add(key);
            });
          });

          var force = d3.layout.force()
                .nodes(data.nodes)
                .links(data.links)
                .size([availableWidth, availableHeight])
                .linkStrength(linkStrength)
                .friction(friction)
                .linkDistance(linkDist)
                .charge(charge)
                .gravity(gravity)
                .theta(theta)
                .alpha(alpha)
                .start();

          var link = container.selectAll(".link")
                .data(data.links)
                .enter().append("line")
                .attr("class", "nv-force-link")
                .style("stroke-width", function(d) { return Math.sqrt(d.value); });

          var node = container.selectAll(".node")
                .data(data.nodes)
                .enter()
                .append("g")
                .attr("class", "nv-force-node")
                .call(force.drag);

          node
            .append("circle")
            .attr("r", radius)
            .style("fill", function(d) { return color(d) } )
            .on("mouseover", function(evt) {
              container.select('.nv-series-' + evt.seriesIndex + ' .nv-distx-' + evt.pointIndex)
                  .attr('y1', evt.py);
              container.select('.nv-series-' + evt.seriesIndex + ' .nv-disty-' + evt.pointIndex)
                  .attr('x2', evt.px);

              // Add 'series' object to
              var nodeColor = color(evt);
              evt.series = [];
              nodeFieldSet.forEach(function(field) {
                evt.series.push({
                  color: nodeColor,
                  key:   field,
                  value: evt[field]
                });
              });
              tooltip.data(evt).hidden(false);
            })
            .on("mouseout",  function(d) {
              tooltip.hidden(true);
            });

          tooltip.headerFormatter(function(d) {return "Node";});

          // Apply extra attributes to nodes and links (if any)
          linkExtras(link);
          nodeExtras(node);

          force.on("tick", function() {
              link.attr("x1", function(d) { return d.source.x; })
                  .attr("y1", function(d) { return d.source.y; })
                  .attr("x2", function(d) { return d.target.x; })
                  .attr("y2", function(d) { return d.target.y; });

              node.attr("transform", function(d) {
                return "translate(" + d.x + ", " + d.y + ")";
              });
            });
        });

        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:     {get: function(){return width;}, set: function(_){width=_;}},
        height:    {get: function(){return height;}, set: function(_){height=_;}},

        // Force directed graph specific parameters
        linkStrength:{get: function(){return linkStrength;}, set: function(_){linkStrength=_;}},
        friction:    {get: function(){return friction;}, set: function(_){friction=_;}},
        linkDist:    {get: function(){return linkDist;}, set: function(_){linkDist=_;}},
        charge:      {get: function(){return charge;}, set: function(_){charge=_;}},
        gravity:     {get: function(){return gravity;}, set: function(_){gravity=_;}},
        theta:       {get: function(){return theta;}, set: function(_){theta=_;}},
        alpha:       {get: function(){return alpha;}, set: function(_){alpha=_;}},
        radius:      {get: function(){return radius;}, set: function(_){radius=_;}},

        //functor options
        x: {get: function(){return getX;}, set: function(_){getX=d3.functor(_);}},
        y: {get: function(){return getY;}, set: function(_){getY=d3.functor(_);}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},
        nodeExtras: {get: function(){return nodeExtras;}, set: function(_){
            nodeExtras = _;
        }},
        linkExtras: {get: function(){return linkExtras;}, set: function(_){
            linkExtras = _;
        }}
    });

    chart.dispatch = dispatch;
    chart.tooltip = tooltip;
    nv.utils.initOptions(chart);
    return chart;
};
nv.models.furiousLegend = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 5, right: 0, bottom: 5, left: 0}
        , width = 400
        , height = 20
        , getKey = function(d) { return d.key }
        , keyFormatter = function (d) { return d }
        , color = nv.utils.getColor()
        , maxKeyLength = 20 //default value for key lengths
        , align = true
        , padding = 28 //define how much space between legend items. - recommend 32 for furious version
        , rightAlign = true
        , updateState = true   //If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
        , radioButtonMode = false   //If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at a time)
        , expanded = false
        , dispatch = d3.dispatch('legendClick', 'legendDblclick', 'legendMouseover', 'legendMouseout', 'stateChange')
        , vers = 'classic' //Options are "classic" and "furious"
        ;

    function chart(selection) {
        selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                container = d3.select(this);
            nv.utils.initSVG(container);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-legend').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-legend').append('g');
            var g = wrap.select('g');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            var series = g.selectAll('.nv-series')
                .data(function(d) {
                    if(vers != 'furious') return d;

                    return d.filter(function(n) {
                        return expanded ? true : !n.disengaged;
                    });
                });
            var seriesEnter = series.enter().append('g').attr('class', 'nv-series')

            var seriesShape;

            if(vers == 'classic') {
                seriesEnter.append('circle')
                    .style('stroke-width', 2)
                    .attr('class','nv-legend-symbol')
                    .attr('r', 5);

                seriesShape = series.select('circle');
            } else if (vers == 'furious') {
                seriesEnter.append('rect')
                    .style('stroke-width', 2)
                    .attr('class','nv-legend-symbol')
                    .attr('rx', 3)
                    .attr('ry', 3);

                seriesShape = series.select('rect');

                seriesEnter.append('g')
                    .attr('class', 'nv-check-box')
                    .property('innerHTML','<path d="M0.5,5 L22.5,5 L22.5,26.5 L0.5,26.5 L0.5,5 Z" class="nv-box"></path><path d="M5.5,12.8618467 L11.9185089,19.2803556 L31,0.198864511" class="nv-check"></path>')
                    .attr('transform', 'translate(-10,-8)scale(0.5)');

                var seriesCheckbox = series.select('.nv-check-box');

                seriesCheckbox.each(function(d,i) {
                    d3.select(this).selectAll('path')
                        .attr('stroke', setTextColor(d,i));
                });
            }

            seriesEnter.append('text')
                .attr('text-anchor', 'start')
                .attr('class','nv-legend-text')
                .attr('dy', '.32em')
                .attr('dx', '8');

            var seriesText = series.select('text.nv-legend-text');

            series
                .on('mouseover', function(d,i) {
                    dispatch.legendMouseover(d,i);  //TODO: Make consistent with other event objects
                })
                .on('mouseout', function(d,i) {
                    dispatch.legendMouseout(d,i);
                })
                .on('click', function(d,i) {
                    dispatch.legendClick(d,i);
                    // make sure we re-get data in case it was modified
                    var data = series.data();
                    if (updateState) {
                        if(vers =='classic') {
                            if (radioButtonMode) {
                                //Radio button mode: set every series to disabled,
                                //  and enable the clicked series.
                                data.forEach(function(series) { series.disabled = true});
                                d.disabled = false;
                            }
                            else {
                                d.disabled = !d.disabled;
                                if (data.every(function(series) { return series.disabled})) {
                                    //the default behavior of NVD3 legends is, if every single series
                                    // is disabled, turn all series' back on.
                                    data.forEach(function(series) { series.disabled = false});
                                }
                            }
                        } else if(vers == 'furious') {
                            if(expanded) {
                                d.disengaged = !d.disengaged;
                                d.userDisabled = d.userDisabled == undefined ? !!d.disabled : d.userDisabled;
                                d.disabled = d.disengaged || d.userDisabled;
                            } else if (!expanded) {
                                d.disabled = !d.disabled;
                                d.userDisabled = d.disabled;
                                var engaged = data.filter(function(d) { return !d.disengaged; });
                                if (engaged.every(function(series) { return series.userDisabled })) {
                                    //the default behavior of NVD3 legends is, if every single series
                                    // is disabled, turn all series' back on.
                                    data.forEach(function(series) {
                                        series.disabled = series.userDisabled = false;
                                    });
                                }
                            }
                        }
                        dispatch.stateChange({
                            disabled: data.map(function(d) { return !!d.disabled }),
                            disengaged: data.map(function(d) { return !!d.disengaged })
                        });

                    }
                })
                .on('dblclick', function(d,i) {
                    if(vers == 'furious' && expanded) return;
                    dispatch.legendDblclick(d,i);
                    if (updateState) {
                        // make sure we re-get data in case it was modified
                        var data = series.data();
                        //the default behavior of NVD3 legends, when double clicking one,
                        // is to set all other series' to false, and make the double clicked series enabled.
                        data.forEach(function(series) {
                            series.disabled = true;
                            if(vers == 'furious') series.userDisabled = series.disabled;
                        });
                        d.disabled = false;
                        if(vers == 'furious') d.userDisabled = d.disabled;
                        dispatch.stateChange({
                            disabled: data.map(function(d) { return !!d.disabled })
                        });
                    }
                });

            series.classed('nv-disabled', function(d) { return d.userDisabled });
            series.exit().remove();

            seriesText
                .attr('fill', setTextColor)
                .text(function (d) { return keyFormatter(getKey(d)) });

            //TODO: implement fixed-width and max-width options (max-width is especially useful with the align option)
            // NEW ALIGNING CODE, TODO: clean up

            var versPadding;
            switch(vers) {
                case 'furious' :
                    versPadding = 23;
                    break;
                case 'classic' :
                    versPadding = 20;
            }

            if (align) {

                var seriesWidths = [];
                series.each(function(d,i) {
                    var legendText;
                    if (keyFormatter(getKey(d)) && keyFormatter(getKey(d)).length > maxKeyLength) {
                        var trimmedKey = keyFormatter(getKey(d)).substring(0, maxKeyLength);
                        legendText = d3.select(this).select('text').text(trimmedKey + "...");
                        d3.select(this).append("svg:title").text(keyFormatter(getKey(d)));
                    } else {
                        legendText = d3.select(this).select('text');
                    }
                    var nodeTextLength;
                    try {
                        nodeTextLength = legendText.node().getComputedTextLength();
                        // If the legendText is display:none'd (nodeTextLength == 0), simulate an error so we approximate, instead
                        if(nodeTextLength <= 0) throw Error();
                    }
                    catch(e) {
                        nodeTextLength = nv.utils.calcApproxTextWidth(legendText);
                    }

                    seriesWidths.push(nodeTextLength + padding);
                });

                var seriesPerRow = 0;
                var legendWidth = 0;
                var columnWidths = [];

                while ( legendWidth < availableWidth && seriesPerRow < seriesWidths.length) {
                    columnWidths[seriesPerRow] = seriesWidths[seriesPerRow];
                    legendWidth += seriesWidths[seriesPerRow++];
                }
                if (seriesPerRow === 0) seriesPerRow = 1; //minimum of one series per row

                while ( legendWidth > availableWidth && seriesPerRow > 1 ) {
                    columnWidths = [];
                    seriesPerRow--;

                    for (var k = 0; k < seriesWidths.length; k++) {
                        if (seriesWidths[k] > (columnWidths[k % seriesPerRow] || 0) )
                            columnWidths[k % seriesPerRow] = seriesWidths[k];
                    }

                    legendWidth = columnWidths.reduce(function(prev, cur, index, array) {
                        return prev + cur;
                    });
                }

                var xPositions = [];
                for (var i = 0, curX = 0; i < seriesPerRow; i++) {
                    xPositions[i] = curX;
                    curX += columnWidths[i];
                }

                series
                    .attr('transform', function(d, i) {
                        return 'translate(' + xPositions[i % seriesPerRow] + ',' + (5 + Math.floor(i / seriesPerRow) * versPadding) + ')';
                    });

                //position legend as far right as possible within the total width
                if (rightAlign) {
                    g.attr('transform', 'translate(' + (width - margin.right - legendWidth) + ',' + margin.top + ')');
                }
                else {
                    g.attr('transform', 'translate(0' + ',' + margin.top + ')');
                }

                height = margin.top + margin.bottom + (Math.ceil(seriesWidths.length / seriesPerRow) * versPadding);

            } else {

                var ypos = 5,
                    newxpos = 5,
                    maxwidth = 0,
                    xpos;
                series
                    .attr('transform', function(d, i) {
                        var length = d3.select(this).select('text').node().getComputedTextLength() + padding;
                        xpos = newxpos;

                        if (width < margin.left + margin.right + xpos + length) {
                            newxpos = xpos = 5;
                            ypos += versPadding;
                        }

                        newxpos += length;
                        if (newxpos > maxwidth) maxwidth = newxpos;

                        return 'translate(' + xpos + ',' + ypos + ')';
                    });

                //position legend as far right as possible within the total width
                g.attr('transform', 'translate(' + (width - margin.right - maxwidth) + ',' + margin.top + ')');

                height = margin.top + margin.bottom + ypos + 15;
            }

            if(vers == 'furious') {
                // Size rectangles after text is placed
                seriesShape
                    .attr('width', function(d,i) {
                        return seriesText[0][i].getComputedTextLength() + 27;
                    })
                    .attr('height', 18)
                    .attr('y', -9)
                    .attr('x', -15)
            }

            seriesShape
                .style('fill', setBGColor)
                .style('stroke', function(d,i) { return d.color || color(d, i) });
        });

        function setTextColor(d,i) {
            if(vers != 'furious') return '#000';
            if(expanded) {
                return d.disengaged ? color(d,i) : '#fff';
            } else if (!expanded) {
                return !!d.disabled ? color(d,i) : '#fff';
            }
        }

        function setBGColor(d,i) {
            if(expanded && vers == 'furious') {
                return d.disengaged ? '#fff' : color(d,i);
            } else {
                return !!d.disabled ? '#fff' : color(d,i);
            }
        }

        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:          {get: function(){return width;}, set: function(_){width=_;}},
        height:         {get: function(){return height;}, set: function(_){height=_;}},
        key:            {get: function(){return getKey;}, set: function(_){getKey=_;}},
        keyFormatter:   {get: function(){return keyFormatter;}, set: function(_){keyFormatter=_;}},
        align:          {get: function(){return align;}, set: function(_){align=_;}},
        rightAlign:     {get: function(){return rightAlign;}, set: function(_){rightAlign=_;}},
        maxKeyLength:   {get: function(){return maxKeyLength;}, set: function(_){maxKeyLength=_;}},
        padding:        {get: function(){return padding;}, set: function(_){padding=_;}},
        updateState:    {get: function(){return updateState;}, set: function(_){updateState=_;}},
        radioButtonMode:{get: function(){return radioButtonMode;}, set: function(_){radioButtonMode=_;}},
        expanded:       {get: function(){return expanded;}, set: function(_){expanded=_;}},
        vers:           {get: function(){return vers;}, set: function(_){vers=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }}
    });

    nv.utils.initOptions(chart);

    return chart;
};
//TODO: consider deprecating and using multibar with single series for this
nv.models.historicalBar = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = null
        , height = null
        , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
        , container = null
        , x = d3.scale.linear()
        , y = d3.scale.linear()
        , getX = function(d) { return d.x }
        , getY = function(d) { return d.y }
        , forceX = []
        , forceY = [0]
        , padData = false
        , clipEdge = true
        , color = nv.utils.defaultColor()
        , xDomain
        , yDomain
        , xRange
        , yRange
        , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'elementMousemove', 'renderEnd')
        , interactive = true
        ;

    var renderWatch = nv.utils.renderWatch(dispatch, 0);

    function chart(selection) {
        selection.each(function(data) {
            renderWatch.reset();

            container = d3.select(this);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            nv.utils.initSVG(container);

            // Setup Scales
            x.domain(xDomain || d3.extent(data[0].values.map(getX).concat(forceX) ));

            if (padData)
                x.range(xRange || [availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5)  / data[0].values.length ]);
            else
                x.range(xRange || [0, availableWidth]);

            y.domain(yDomain || d3.extent(data[0].values.map(getY).concat(forceY) ))
                .range(yRange || [availableHeight, 0]);

            // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
            if (x.domain()[0] === x.domain()[1])
                x.domain()[0] ?
                    x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
                    : x.domain([-1,1]);

            if (y.domain()[0] === y.domain()[1])
                y.domain()[0] ?
                    y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01])
                    : y.domain([-1,1]);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-historicalBar-' + id).data([data[0].values]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-historicalBar-' + id);
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-bars');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            container
                .on('click', function(d,i) {
                    dispatch.chartClick({
                        data: d,
                        index: i,
                        pos: d3.event,
                        id: id
                    });
                });

            defsEnter.append('clipPath')
                .attr('id', 'nv-chart-clip-path-' + id)
                .append('rect');

            wrap.select('#nv-chart-clip-path-' + id + ' rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);

            g.attr('clip-path', clipEdge ? 'url(#nv-chart-clip-path-' + id + ')' : '');

            var bars = wrap.select('.nv-bars').selectAll('.nv-bar')
                .data(function(d) { return d }, function(d,i) {return getX(d,i)});
            bars.exit().remove();

            bars.enter().append('rect')
                .attr('x', 0 )
                .attr('y', function(d,i) {  return nv.utils.NaNtoZero(y(Math.max(0, getY(d,i)))) })
                .attr('height', function(d,i) { return nv.utils.NaNtoZero(Math.abs(y(getY(d,i)) - y(0))) })
                .attr('transform', function(d,i) { return 'translate(' + (x(getX(d,i)) - availableWidth / data[0].values.length * .45) + ',0)'; })
                .on('mouseover', function(d,i) {
                    if (!interactive) return;
                    d3.select(this).classed('hover', true);
                    dispatch.elementMouseover({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });

                })
                .on('mouseout', function(d,i) {
                    if (!interactive) return;
                    d3.select(this).classed('hover', false);
                    dispatch.elementMouseout({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('mousemove', function(d,i) {
                    if (!interactive) return;
                    dispatch.elementMousemove({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('click', function(d,i) {
                    if (!interactive) return;
                    dispatch.elementClick({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                    d3.event.stopPropagation();
                })
                .on('dblclick', function(d,i) {
                    if (!interactive) return;
                    dispatch.elementDblClick({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                    d3.event.stopPropagation();
                });

            bars
                .attr('fill', function(d,i) { return color(d, i); })
                .attr('class', function(d,i,j) { return (getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive') + ' nv-bar-' + j + '-' + i })
                .watchTransition(renderWatch, 'bars')
                .attr('transform', function(d,i) { return 'translate(' + (x(getX(d,i)) - availableWidth / data[0].values.length * .45) + ',0)'; })
                //TODO: better width calculations that don't assume always uniform data spacing;w
                .attr('width', (availableWidth / data[0].values.length) * .9 );

            bars.watchTransition(renderWatch, 'bars')
                .attr('y', function(d,i) {
                    var rval = getY(d,i) < 0 ?
                        y(0) :
                            y(0) - y(getY(d,i)) < 1 ?
                        y(0) - 1 :
                        y(getY(d,i));
                    return nv.utils.NaNtoZero(rval);
                })
                .attr('height', function(d,i) { return nv.utils.NaNtoZero(Math.max(Math.abs(y(getY(d,i)) - y(0)),1)) });

        });

        renderWatch.renderEnd('historicalBar immediate');
        return chart;
    }

    //Create methods to allow outside functions to highlight a specific bar.
    chart.highlightPoint = function(pointIndex, isHoverOver) {
        container
            .select(".nv-bars .nv-bar-0-" + pointIndex)
            .classed("hover", isHoverOver)
        ;
    };

    chart.clearHighlights = function() {
        container
            .select(".nv-bars .nv-bar.hover")
            .classed("hover", false)
        ;
    };

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:   {get: function(){return width;}, set: function(_){width=_;}},
        height:  {get: function(){return height;}, set: function(_){height=_;}},
        forceX:  {get: function(){return forceX;}, set: function(_){forceX=_;}},
        forceY:  {get: function(){return forceY;}, set: function(_){forceY=_;}},
        padData: {get: function(){return padData;}, set: function(_){padData=_;}},
        x:       {get: function(){return getX;}, set: function(_){getX=_;}},
        y:       {get: function(){return getY;}, set: function(_){getY=_;}},
        xScale:  {get: function(){return x;}, set: function(_){x=_;}},
        yScale:  {get: function(){return y;}, set: function(_){y=_;}},
        xDomain: {get: function(){return xDomain;}, set: function(_){xDomain=_;}},
        yDomain: {get: function(){return yDomain;}, set: function(_){yDomain=_;}},
        xRange:  {get: function(){return xRange;}, set: function(_){xRange=_;}},
        yRange:  {get: function(){return yRange;}, set: function(_){yRange=_;}},
        clipEdge:    {get: function(){return clipEdge;}, set: function(_){clipEdge=_;}},
        id:          {get: function(){return id;}, set: function(_){id=_;}},
        interactive: {get: function(){return interactive;}, set: function(_){interactive=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }}
    });

    nv.utils.initOptions(chart);

    return chart;
};

nv.models.historicalBarChart = function(bar_model) {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var bars = bar_model || nv.models.historicalBar()
        , xAxis = nv.models.axis()
        , yAxis = nv.models.axis()
        , legend = nv.models.legend()
        , interactiveLayer = nv.interactiveGuideline()
        , tooltip = nv.models.tooltip()
        ;


    var margin = {top: 30, right: 90, bottom: 50, left: 90}
        , color = nv.utils.defaultColor()
        , width = null
        , height = null
        , showLegend = false
        , showXAxis = true
        , showYAxis = true
        , rightAlignYAxis = false
        , useInteractiveGuideline = false
        , x
        , y
        , state = {}
        , defaultState = null
        , noData = null
        , dispatch = d3.dispatch('tooltipHide', 'stateChange', 'changeState', 'renderEnd')
        , transitionDuration = 250
        ;

    xAxis.orient('bottom').tickPadding(7);
    yAxis.orient( (rightAlignYAxis) ? 'right' : 'left');
    tooltip
        .duration(0)
        .headerEnabled(false)
        .valueFormatter(function(d, i) {
            return yAxis.tickFormat()(d, i);
        })
        .headerFormatter(function(d, i) {
            return xAxis.tickFormat()(d, i);
        });


    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch, 0);

    function chart(selection) {
        selection.each(function(data) {
            renderWatch.reset();
            renderWatch.models(bars);
            if (showXAxis) renderWatch.models(xAxis);
            if (showYAxis) renderWatch.models(yAxis);

            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            chart.update = function() { container.transition().duration(transitionDuration).call(chart) };
            chart.container = this;

            //set state.disabled
            state.disabled = data.map(function(d) { return !!d.disabled });

            if (!defaultState) {
                var key;
                defaultState = {};
                for (key in state) {
                    if (state[key] instanceof Array)
                        defaultState[key] = state[key].slice(0);
                    else
                        defaultState[key] = state[key];
                }
            }

            // Display noData message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
                nv.utils.noData(chart, container)
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            // Setup Scales
            x = bars.xScale();
            y = bars.yScale();

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-historicalBarChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-historicalBarChart').append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-barsWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-interactive');

            // Legend
            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                legend.width(availableWidth);

                g.select('.nv-legendWrap')
                    .datum(data)
                    .call(legend);

                if (legend.height() > margin.top) {
                    margin.top = legend.height();
                    availableHeight = nv.utils.availableHeight(height, container, margin);
                }

                wrap.select('.nv-legendWrap')
                    .attr('transform', 'translate(0,' + (-margin.top) +')')
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            if (rightAlignYAxis) {
                g.select(".nv-y.nv-axis")
                    .attr("transform", "translate(" + availableWidth + ",0)");
            }

            //Set up interactive layer
            if (useInteractiveGuideline) {
                interactiveLayer
                    .width(availableWidth)
                    .height(availableHeight)
                    .margin({left:margin.left, top:margin.top})
                    .svgContainer(container)
                    .xScale(x);
                wrap.select(".nv-interactive").call(interactiveLayer);
            }
            bars
                .width(availableWidth)
                .height(availableHeight)
                .color(data.map(function(d,i) {
                    return d.color || color(d, i);
                }).filter(function(d,i) { return !data[i].disabled }));

            var barsWrap = g.select('.nv-barsWrap')
                .datum(data.filter(function(d) { return !d.disabled }));
            barsWrap.transition().call(bars);

            // Setup Axes
            if (showXAxis) {
                xAxis
                    .scale(x)
                    ._ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize(-availableHeight, 0);

                g.select('.nv-x.nv-axis')
                    .attr('transform', 'translate(0,' + y.range()[0] + ')');
                g.select('.nv-x.nv-axis')
                    .transition()
                    .call(xAxis);
            }

            if (showYAxis) {
                yAxis
                    .scale(y)
                    ._ticks( nv.utils.calcTicksY(availableHeight/36, data) )
                    .tickSize( -availableWidth, 0);

                g.select('.nv-y.nv-axis')
                    .transition()
                    .call(yAxis);
            }

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            interactiveLayer.dispatch.on('elementMousemove', function(e) {
                bars.clearHighlights();

                var singlePoint, pointIndex, pointXLocation, allData = [];
                data
                    .filter(function(series, i) {
                        series.seriesIndex = i;
                        return !series.disabled;
                    })
                    .forEach(function(series,i) {
                        pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
                        bars.highlightPoint(pointIndex,true);
                        var point = series.values[pointIndex];
                        if (point === undefined) return;
                        if (singlePoint === undefined) singlePoint = point;
                        if (pointXLocation === undefined) pointXLocation = chart.xScale()(chart.x()(point,pointIndex));
                        allData.push({
                            key: series.key,
                            value: chart.y()(point, pointIndex),
                            color: color(series,series.seriesIndex),
                            data: series.values[pointIndex]
                        });
                    });

                var xValue = xAxis.tickFormat()(chart.x()(singlePoint,pointIndex));
                interactiveLayer.tooltip
                    .valueFormatter(function(d,i) {
                        return yAxis.tickFormat()(d);
                    })
                    .data({
                        value: xValue,
                        index: pointIndex,
                        series: allData
                    })();

                interactiveLayer.renderGuideLine(pointXLocation);

            });

            interactiveLayer.dispatch.on("elementMouseout",function(e) {
                dispatch.tooltipHide();
                bars.clearHighlights();
            });

            legend.dispatch.on('legendClick', function(d,i) {
                d.disabled = !d.disabled;

                if (!data.filter(function(d) { return !d.disabled }).length) {
                    data.map(function(d) {
                        d.disabled = false;
                        wrap.selectAll('.nv-series').classed('disabled', false);
                        return d;
                    });
                }

                state.disabled = data.map(function(d) { return !!d.disabled });
                dispatch.stateChange(state);

                selection.transition().call(chart);
            });

            legend.dispatch.on('legendDblclick', function(d) {
                //Double clicking should always enable current series, and disabled all others.
                data.forEach(function(d) {
                    d.disabled = true;
                });
                d.disabled = false;

                state.disabled = data.map(function(d) { return !!d.disabled });
                dispatch.stateChange(state);
                chart.update();
            });

            dispatch.on('changeState', function(e) {
                if (typeof e.disabled !== 'undefined') {
                    data.forEach(function(series,i) {
                        series.disabled = e.disabled[i];
                    });

                    state.disabled = e.disabled;
                }

                chart.update();
            });
        });

        renderWatch.renderEnd('historicalBarChart immediate');
        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    bars.dispatch.on('elementMouseover.tooltip', function(evt) {
        evt['series'] = {
            key: chart.x()(evt.data),
            value: chart.y()(evt.data),
            color: evt.color
        };
        tooltip.data(evt).hidden(false);
    });

    bars.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true);
    });

    bars.dispatch.on('elementMousemove.tooltip', function(evt) {
        tooltip();
    });

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.bars = bars;
    chart.legend = legend;
    chart.xAxis = xAxis;
    chart.yAxis = yAxis;
    chart.interactiveLayer = interactiveLayer;
    chart.tooltip = tooltip;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        showXAxis: {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis: {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        defaultState:    {get: function(){return defaultState;}, set: function(_){defaultState=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            legend.color(color);
            bars.color(color);
        }},
        duration:    {get: function(){return transitionDuration;}, set: function(_){
            transitionDuration=_;
            renderWatch.reset(transitionDuration);
            yAxis.duration(transitionDuration);
            xAxis.duration(transitionDuration);
        }},
        rightAlignYAxis: {get: function(){return rightAlignYAxis;}, set: function(_){
            rightAlignYAxis = _;
            yAxis.orient( (_) ? 'right' : 'left');
        }},
        useInteractiveGuideline: {get: function(){return useInteractiveGuideline;}, set: function(_){
            useInteractiveGuideline = _;
            if (_ === true) {
                chart.interactive(false);
            }
        }}
    });

    nv.utils.inheritOptions(chart, bars);
    nv.utils.initOptions(chart);

    return chart;
};


// ohlcChart is just a historical chart with ohlc bars and some tweaks
nv.models.ohlcBarChart = function() {
    var chart = nv.models.historicalBarChart(nv.models.ohlcBar());

    // special default tooltip since we show multiple values per x
    chart.useInteractiveGuideline(true);
    chart.interactiveLayer.tooltip.contentGenerator(function(data) {
        // we assume only one series exists for this chart
        var d = data.series[0].data;
        // match line colors as defined in nv.d3.css
        var color = d.open < d.close ? "2ca02c" : "d62728";
        return '' +
            '<h3 style="color: #' + color + '">' + data.value + '</h3>' +
            '<table>' +
            '<tr><td>open:</td><td>' + chart.yAxis.tickFormat()(d.open) + '</td></tr>' +
            '<tr><td>close:</td><td>' + chart.yAxis.tickFormat()(d.close) + '</td></tr>' +
            '<tr><td>high</td><td>' + chart.yAxis.tickFormat()(d.high) + '</td></tr>' +
            '<tr><td>low:</td><td>' + chart.yAxis.tickFormat()(d.low) + '</td></tr>' +
            '</table>';
    });
    return chart;
};

// candlestickChart is just a historical chart with candlestick bars and some tweaks
nv.models.candlestickBarChart = function() {
    var chart = nv.models.historicalBarChart(nv.models.candlestickBar());

    // special default tooltip since we show multiple values per x
    chart.useInteractiveGuideline(true);
    chart.interactiveLayer.tooltip.contentGenerator(function(data) {
        // we assume only one series exists for this chart
        var d = data.series[0].data;
        // match line colors as defined in nv.d3.css
        var color = d.open < d.close ? "2ca02c" : "d62728";
        return '' +
            '<h3 style="color: #' + color + '">' + data.value + '</h3>' +
            '<table>' +
            '<tr><td>open:</td><td>' + chart.yAxis.tickFormat()(d.open) + '</td></tr>' +
            '<tr><td>close:</td><td>' + chart.yAxis.tickFormat()(d.close) + '</td></tr>' +
            '<tr><td>high</td><td>' + chart.yAxis.tickFormat()(d.high) + '</td></tr>' +
            '<tr><td>low:</td><td>' + chart.yAxis.tickFormat()(d.low) + '</td></tr>' +
            '</table>';
    });
    return chart;
};
nv.models.legend = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 5, right: 0, bottom: 5, left: 0}
        , width = 400
        , height = 20
        , getKey = function(d) { return d.key }
        , keyFormatter = function (d) { return d }
        , color = nv.utils.getColor()
        , maxKeyLength = 20 //default value for key lengths
        , align = true
        , padding = 32 //define how much space between legend items. - recommend 32 for furious version
        , rightAlign = true
        , updateState = true   //If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
        , radioButtonMode = false   //If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at a time)
        , expanded = false
        , dispatch = d3.dispatch('legendClick', 'legendDblclick', 'legendMouseover', 'legendMouseout', 'stateChange')
        , vers = 'classic' //Options are "classic" and "furious"
        ;

    function chart(selection) {
        selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                container = d3.select(this);
            nv.utils.initSVG(container);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-legend').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-legend').append('g');
            var g = wrap.select('g');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            var series = g.selectAll('.nv-series')
                .data(function(d) {
                    if(vers != 'furious') return d;

                    return d.filter(function(n) {
                        return expanded ? true : !n.disengaged;
                    });
                });

            var seriesEnter = series.enter().append('g').attr('class', 'nv-series');
            var seriesShape;

            var versPadding;
            switch(vers) {
                case 'furious' :
                    versPadding = 23;
                    break;
                case 'classic' :
                    versPadding = 20;
            }

            if(vers == 'classic') {
                seriesEnter.append('circle')
                    .style('stroke-width', 2)
                    .attr('class','nv-legend-symbol')
                    .attr('r', 5);

                seriesShape = series.select('.nv-legend-symbol');
            } else if (vers == 'furious') {
                seriesEnter.append('rect')
                    .style('stroke-width', 2)
                    .attr('class','nv-legend-symbol')
                    .attr('rx', 3)
                    .attr('ry', 3);
                seriesShape = series.select('.nv-legend-symbol');

                seriesEnter.append('g')
                    .attr('class', 'nv-check-box')
                    .property('innerHTML','<path d="M0.5,5 L22.5,5 L22.5,26.5 L0.5,26.5 L0.5,5 Z" class="nv-box"></path><path d="M5.5,12.8618467 L11.9185089,19.2803556 L31,0.198864511" class="nv-check"></path>')
                    .attr('transform', 'translate(-10,-8)scale(0.5)');

                var seriesCheckbox = series.select('.nv-check-box');

                seriesCheckbox.each(function(d,i) {
                    d3.select(this).selectAll('path')
                        .attr('stroke', setTextColor(d,i));
                });
            }

            seriesEnter.append('text')
                .attr('text-anchor', 'start')
                .attr('class','nv-legend-text')
                .attr('dy', '.32em')
                .attr('dx', '8');

            var seriesText = series.select('text.nv-legend-text');

            series
                .on('mouseover', function(d,i) {
                    dispatch.legendMouseover(d,i);  //TODO: Make consistent with other event objects
                })
                .on('mouseout', function(d,i) {
                    dispatch.legendMouseout(d,i);
                })
                .on('click', function(d,i) {
                    dispatch.legendClick(d,i);
                    // make sure we re-get data in case it was modified
                    var data = series.data();
                    if (updateState) {
                        if(vers =='classic') {
                            if (radioButtonMode) {
                                //Radio button mode: set every series to disabled,
                                //  and enable the clicked series.
                                data.forEach(function(series) { series.disabled = true});
                                d.disabled = false;
                            }
                            else {
                                d.disabled = !d.disabled;
                                if (data.every(function(series) { return series.disabled})) {
                                    //the default behavior of NVD3 legends is, if every single series
                                    // is disabled, turn all series' back on.
                                    data.forEach(function(series) { series.disabled = false});
                                }
                            }
                        } else if(vers == 'furious') {
                            if(expanded) {
                                d.disengaged = !d.disengaged;
                                d.userDisabled = d.userDisabled == undefined ? !!d.disabled : d.userDisabled;
                                d.disabled = d.disengaged || d.userDisabled;
                            } else if (!expanded) {
                                d.disabled = !d.disabled;
                                d.userDisabled = d.disabled;
                                var engaged = data.filter(function(d) { return !d.disengaged; });
                                if (engaged.every(function(series) { return series.userDisabled })) {
                                    //the default behavior of NVD3 legends is, if every single series
                                    // is disabled, turn all series' back on.
                                    data.forEach(function(series) {
                                        series.disabled = series.userDisabled = false;
                                    });
                                }
                            }
                        }
                        dispatch.stateChange({
                            disabled: data.map(function(d) { return !!d.disabled }),
                            disengaged: data.map(function(d) { return !!d.disengaged })
                        });

                    }
                })
                .on('dblclick', function(d,i) {
                    if(vers == 'furious' && expanded) return;
                    dispatch.legendDblclick(d,i);
                    if (updateState) {
                        // make sure we re-get data in case it was modified
                        var data = series.data();
                        //the default behavior of NVD3 legends, when double clicking one,
                        // is to set all other series' to false, and make the double clicked series enabled.
                        data.forEach(function(series) {
                            series.disabled = true;
                            if(vers == 'furious') series.userDisabled = series.disabled;
                        });
                        d.disabled = false;
                        if(vers == 'furious') d.userDisabled = d.disabled;
                        dispatch.stateChange({
                            disabled: data.map(function(d) { return !!d.disabled })
                        });
                    }
                });

            series.classed('nv-disabled', function(d) { return d.userDisabled });
            series.exit().remove();

            seriesText
                .attr('fill', setTextColor)
                .text(function (d) { return keyFormatter(getKey(d)) });

            //TODO: implement fixed-width and max-width options (max-width is especially useful with the align option)
            // NEW ALIGNING CODE, TODO: clean up
            var legendWidth = 0;
            if (align) {

                var seriesWidths = [];
                series.each(function(d,i) {
                    var legendText;
                    if (keyFormatter(getKey(d)) && keyFormatter(getKey(d)).length > maxKeyLength) {
                        var trimmedKey = keyFormatter(getKey(d)).substring(0, maxKeyLength);
                        legendText = d3.select(this).select('text').text(trimmedKey + "...");
                        d3.select(this).append("svg:title").text(keyFormatter(getKey(d)));
                    } else {
                        legendText = d3.select(this).select('text');
                    }
                    var nodeTextLength;
                    try {
                        nodeTextLength = legendText.node().getComputedTextLength();
                        // If the legendText is display:none'd (nodeTextLength == 0), simulate an error so we approximate, instead
                        if(nodeTextLength <= 0) throw Error();
                    }
                    catch(e) {
                        nodeTextLength = nv.utils.calcApproxTextWidth(legendText);
                    }

                    seriesWidths.push(nodeTextLength + padding);
                });

                var seriesPerRow = 0;
                var columnWidths = [];
                legendWidth = 0;

                while ( legendWidth < availableWidth && seriesPerRow < seriesWidths.length) {
                    columnWidths[seriesPerRow] = seriesWidths[seriesPerRow];
                    legendWidth += seriesWidths[seriesPerRow++];
                }
                if (seriesPerRow === 0) seriesPerRow = 1; //minimum of one series per row

                while ( legendWidth > availableWidth && seriesPerRow > 1 ) {
                    columnWidths = [];
                    seriesPerRow--;

                    for (var k = 0; k < seriesWidths.length; k++) {
                        if (seriesWidths[k] > (columnWidths[k % seriesPerRow] || 0) )
                            columnWidths[k % seriesPerRow] = seriesWidths[k];
                    }

                    legendWidth = columnWidths.reduce(function(prev, cur, index, array) {
                        return prev + cur;
                    });
                }

                var xPositions = [];
                for (var i = 0, curX = 0; i < seriesPerRow; i++) {
                    xPositions[i] = curX;
                    curX += columnWidths[i];
                }

                series
                    .attr('transform', function(d, i) {
                        return 'translate(' + xPositions[i % seriesPerRow] + ',' + (5 + Math.floor(i / seriesPerRow) * versPadding) + ')';
                    });

                //position legend as far right as possible within the total width
                if (rightAlign) {
                    g.attr('transform', 'translate(' + (width - margin.right - legendWidth) + ',' + margin.top + ')');
                }
                else {
                    g.attr('transform', 'translate(0' + ',' + margin.top + ')');
                }

                height = margin.top + margin.bottom + (Math.ceil(seriesWidths.length / seriesPerRow) * versPadding);

            } else {

                var ypos = 5,
                    newxpos = 5,
                    maxwidth = 0,
                    xpos;
                series
                    .attr('transform', function(d, i) {
                        var length = d3.select(this).select('text').node().getComputedTextLength() + padding;
                        xpos = newxpos;

                        if (width < margin.left + margin.right + xpos + length) {
                            newxpos = xpos = 5;
                            ypos += versPadding;
                        }

                        newxpos += length;
                        if (newxpos > maxwidth) maxwidth = newxpos;

                        if(legendWidth < xpos + maxwidth) {
                            legendWidth = xpos + maxwidth;
                        }
                        return 'translate(' + xpos + ',' + ypos + ')';
                    });

                //position legend as far right as possible within the total width
                g.attr('transform', 'translate(' + (width - margin.right - maxwidth) + ',' + margin.top + ')');

                height = margin.top + margin.bottom + ypos + 15;
            }

            if(vers == 'furious') {
                // Size rectangles after text is placed
                seriesShape
                    .attr('width', function(d,i) {
                        return seriesText[0][i].getComputedTextLength() + 27;
                    })
                    .attr('height', 18)
                    .attr('y', -9)
                    .attr('x', -15);

                // The background for the expanded legend (UI)
                gEnter.insert('rect',':first-child')
                    .attr('class', 'nv-legend-bg')
                    .attr('fill', '#eee')
                    // .attr('stroke', '#444')
                    .attr('opacity',0);

                var seriesBG = g.select('.nv-legend-bg');

                seriesBG
                .transition().duration(300)
                    .attr('x', -versPadding )
                    .attr('width', legendWidth + versPadding - 12)
                    .attr('height', height + 10)
                    .attr('y', -margin.top - 10)
                    .attr('opacity', expanded ? 1 : 0);


            }

            seriesShape
                .style('fill', setBGColor)
                .style('fill-opacity', setBGOpacity)
                .style('stroke', setBGColor);
        });

        function setTextColor(d,i) {
            if(vers != 'furious') return '#000';
            if(expanded) {
                return d.disengaged ? '#000' : '#fff';
            } else if (!expanded) {
                if(!d.color) d.color = color(d,i);
                return !!d.disabled ? d.color : '#fff';
            }
        }

        function setBGColor(d,i) {
            if(expanded && vers == 'furious') {
                return d.disengaged ? '#eee' : d.color || color(d,i);
            } else {
                return d.color || color(d,i);
            }
        }


        function setBGOpacity(d,i) {
            if(expanded && vers == 'furious') {
                return 1;
            } else {
                return !!d.disabled ? 0 : 1;
            }
        }

        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:          {get: function(){return width;}, set: function(_){width=_;}},
        height:         {get: function(){return height;}, set: function(_){height=_;}},
        key:            {get: function(){return getKey;}, set: function(_){getKey=_;}},
        keyFormatter:   {get: function(){return keyFormatter;}, set: function(_){keyFormatter=_;}},
        align:          {get: function(){return align;}, set: function(_){align=_;}},
        maxKeyLength:   {get: function(){return maxKeyLength;}, set: function(_){maxKeyLength=_;}},
        rightAlign:     {get: function(){return rightAlign;}, set: function(_){rightAlign=_;}},
        padding:        {get: function(){return padding;}, set: function(_){padding=_;}},
        updateState:    {get: function(){return updateState;}, set: function(_){updateState=_;}},
        radioButtonMode:{get: function(){return radioButtonMode;}, set: function(_){radioButtonMode=_;}},
        expanded:       {get: function(){return expanded;}, set: function(_){expanded=_;}},
        vers:           {get: function(){return vers;}, set: function(_){vers=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }}
    });

    nv.utils.initOptions(chart);

    return chart;
};

nv.models.line = function() {
    "use strict";
    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var  scatter = nv.models.scatter()
        ;

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = 960
        , height = 500
        , container = null
        , strokeWidth = 1.5
        , color = nv.utils.defaultColor() // a function that returns a color
        , getX = function(d) { return d.x } // accessor to get the x value from a data point
        , getY = function(d) { return d.y } // accessor to get the y value from a data point
        , defined = function(d,i) { return !isNaN(getY(d,i)) && getY(d,i) !== null } // allows a line to be not continuous when it is not defined
        , isArea = function(d) { return d.area } // decides if a line is an area or just a line
        , clipEdge = false // if true, masks lines within x and y scale
        , x //can be accessed via chart.xScale()
        , y //can be accessed via chart.yScale()
        , interpolate = "linear" // controls the line interpolation
        , duration = 250
        , dispatch = d3.dispatch('elementClick', 'elementMouseover', 'elementMouseout', 'renderEnd')
        ;

    scatter
        .pointSize(16) // default size
        .pointDomain([16,256]) //set to speed up calculation, needs to be unset if there is a custom size accessor
    ;

    //============================================================


    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var x0, y0 //used to store previous scales
        , renderWatch = nv.utils.renderWatch(dispatch, duration)
        ;

    //============================================================


    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(scatter);
        selection.each(function(data) {
            container = d3.select(this);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);
            nv.utils.initSVG(container);

            // Setup Scales
            x = scatter.xScale();
            y = scatter.yScale();

            x0 = x0 || x;
            y0 = y0 || y;

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-line').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-line');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-groups');
            gEnter.append('g').attr('class', 'nv-scatterWrap');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            scatter
                .width(availableWidth)
                .height(availableHeight);

            var scatterWrap = wrap.select('.nv-scatterWrap');
            scatterWrap.call(scatter);

            defsEnter.append('clipPath')
                .attr('id', 'nv-edge-clip-' + scatter.id())
                .append('rect');

            wrap.select('#nv-edge-clip-' + scatter.id() + ' rect')
                .attr('width', availableWidth)
                .attr('height', (availableHeight > 0) ? availableHeight : 0);

            g   .attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');
            scatterWrap
                .attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');

            var groups = wrap.select('.nv-groups').selectAll('.nv-group')
                .data(function(d) { return d }, function(d) { return d.key });
            groups.enter().append('g')
                .style('stroke-opacity', 1e-6)
                .style('stroke-width', function(d) { return d.strokeWidth || strokeWidth })
                .style('fill-opacity', 1e-6);

            groups.exit().remove();

            groups
                .attr('class', function(d,i) {
                    return (d.classed || '') + ' nv-group nv-series-' + i;
                })
                .classed('hover', function(d) { return d.hover })
                .style('fill', function(d,i){ return color(d, i) })
                .style('stroke', function(d,i){ return color(d, i)});
            groups.watchTransition(renderWatch, 'line: groups')
                .style('stroke-opacity', 1)
                .style('fill-opacity', function(d) { return d.fillOpacity || .5});

            var areaPaths = groups.selectAll('path.nv-area')
                .data(function(d) { return isArea(d) ? [d] : [] }); // this is done differently than lines because I need to check if series is an area
            areaPaths.enter().append('path')
                .attr('class', 'nv-area')
                .attr('d', function(d) {
                    return d3.svg.area()
                        .interpolate(interpolate)
                        .defined(defined)
                        .x(function(d,i) { return nv.utils.NaNtoZero(x0(getX(d,i))) })
                        .y0(function(d,i) { return nv.utils.NaNtoZero(y0(getY(d,i))) })
                        .y1(function(d,i) { return y0( y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0] ) })
                        //.y1(function(d,i) { return y0(0) }) //assuming 0 is within y domain.. may need to tweak this
                        .apply(this, [d.values])
                });
            groups.exit().selectAll('path.nv-area')
                .remove();

            areaPaths.watchTransition(renderWatch, 'line: areaPaths')
                .attr('d', function(d) {
                    return d3.svg.area()
                        .interpolate(interpolate)
                        .defined(defined)
                        .x(function(d,i) { return nv.utils.NaNtoZero(x(getX(d,i))) })
                        .y0(function(d,i) { return nv.utils.NaNtoZero(y(getY(d,i))) })
                        .y1(function(d,i) { return y( y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0] ) })
                        //.y1(function(d,i) { return y0(0) }) //assuming 0 is within y domain.. may need to tweak this
                        .apply(this, [d.values])
                });

            var linePaths = groups.selectAll('path.nv-line')
                .data(function(d) { return [d.values] });

            linePaths.enter().append('path')
                .attr('class', 'nv-line')
                .attr('d',
                    d3.svg.line()
                    .interpolate(interpolate)
                    .defined(defined)
                    .x(function(d,i) { return nv.utils.NaNtoZero(x0(getX(d,i))) })
                    .y(function(d,i) { return nv.utils.NaNtoZero(y0(getY(d,i))) })
            );

            linePaths.watchTransition(renderWatch, 'line: linePaths')
                .attr('d',
                    d3.svg.line()
                    .interpolate(interpolate)
                    .defined(defined)
                    .x(function(d,i) { return nv.utils.NaNtoZero(x(getX(d,i))) })
                    .y(function(d,i) { return nv.utils.NaNtoZero(y(getY(d,i))) })
            );

            //store old scales for use in transitions on update
            x0 = x.copy();
            y0 = y.copy();
        });
        renderWatch.renderEnd('line immediate');
        return chart;
    }


    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.scatter = scatter;
    // Pass through events
    scatter.dispatch.on('elementClick', function(){ dispatch.elementClick.apply(this, arguments); });
    scatter.dispatch.on('elementMouseover', function(){ dispatch.elementMouseover.apply(this, arguments); });
    scatter.dispatch.on('elementMouseout', function(){ dispatch.elementMouseout.apply(this, arguments); });

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        defined: {get: function(){return defined;}, set: function(_){defined=_;}},
        interpolate:      {get: function(){return interpolate;}, set: function(_){interpolate=_;}},
        clipEdge:    {get: function(){return clipEdge;}, set: function(_){clipEdge=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            scatter.duration(duration);
        }},
        isArea: {get: function(){return isArea;}, set: function(_){
            isArea = d3.functor(_);
        }},
        x: {get: function(){return getX;}, set: function(_){
            getX = _;
            scatter.x(_);
        }},
        y: {get: function(){return getY;}, set: function(_){
            getY = _;
            scatter.y(_);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            scatter.color(color);
        }}
    });

    nv.utils.inheritOptions(chart, scatter);
    nv.utils.initOptions(chart);

    return chart;
};
nv.models.lineChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var lines = nv.models.line()
        , xAxis = nv.models.axis()
        , yAxis = nv.models.axis()
        , legend = nv.models.legend()
        , interactiveLayer = nv.interactiveGuideline()
        , tooltip = nv.models.tooltip()
        , focus = nv.models.focus(nv.models.line())
        ;

    var margin = {top: 30, right: 20, bottom: 50, left: 60}
        , color = nv.utils.defaultColor()
        , width = null
        , height = null
        , showLegend = true
        , legendPosition = 'top'
        , showXAxis = true
        , showYAxis = true
        , rightAlignYAxis = false
        , useInteractiveGuideline = false
        , x
        , y
        , focusEnable = false
        , state = nv.utils.state()
        , defaultState = null
        , noData = null
        , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState', 'renderEnd')
        , duration = 250
        ;

    // set options on sub-objects for this chart
    xAxis.orient('bottom').tickPadding(7);
    yAxis.orient(rightAlignYAxis ? 'right' : 'left');

    lines.clipEdge(true).duration(0);

    tooltip.valueFormatter(function(d, i) {
        return yAxis.tickFormat()(d, i);
    }).headerFormatter(function(d, i) {
        return xAxis.tickFormat()(d, i);
    });

    interactiveLayer.tooltip.valueFormatter(function(d, i) {
        return yAxis.tickFormat()(d, i);
    }).headerFormatter(function(d, i) {
        return xAxis.tickFormat()(d, i);
    });


    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    var stateGetter = function(data) {
        return function(){
            return {
                active: data.map(function(d) { return !d.disabled; })
            };
        };
    };

    var stateSetter = function(data) {
        return function(state) {
            if (state.active !== undefined)
                data.forEach(function(series,i) {
                    series.disabled = !state.active[i];
                });
        };
    };

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(lines);
        if (showXAxis) renderWatch.models(xAxis);
        if (showYAxis) renderWatch.models(yAxis);

        selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin) - (focusEnable ? focus.height() : 0);
            chart.update = function() {
                if( duration === 0 ) {
                    container.call( chart );
                } else {
                    container.transition().duration(duration).call(chart);
                }
            };
            chart.container = this;

            state
                .setter(stateSetter(data), chart.update)
                .getter(stateGetter(data))
                .update();

            // DEPRECATED set state.disabled
            state.disabled = data.map(function(d) { return !!d.disabled; });

            if (!defaultState) {
                var key;
                defaultState = {};
                for (key in state) {
                    if (state[key] instanceof Array)
                        defaultState[key] = state[key].slice(0);
                    else
                        defaultState[key] = state[key];
                }
            }

            // Display noData message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length; }).length) {
                nv.utils.noData(chart, container);
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            /* Update `main' graph on brush update. */
            focus.dispatch.on("onBrush", function(extent) {
                onBrush(extent);
            });

            // Setup Scales
            x = lines.xScale();
            y = lines.yScale();

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-lineChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-lineChart').append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-legendWrap');

            var focusEnter = gEnter.append('g').attr('class', 'nv-focus');
            focusEnter.append('g').attr('class', 'nv-background').append('rect');
            focusEnter.append('g').attr('class', 'nv-x nv-axis');
            focusEnter.append('g').attr('class', 'nv-y nv-axis');
            focusEnter.append('g').attr('class', 'nv-linesWrap');
            focusEnter.append('g').attr('class', 'nv-interactive');

            var contextEnter = gEnter.append('g').attr('class', 'nv-focusWrap');

            // Legend
            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                legend.width(availableWidth);

                g.select('.nv-legendWrap')
                    .datum(data)
                    .call(legend);

                if (legendPosition === 'bottom') {
                    wrap.select('.nv-legendWrap')
                        .attr('transform', 'translate(0,' + availableHeight +')');
                } else if (legendPosition === 'top') {
                    if (legend.height() > margin.top) {
                        margin.top = legend.height();
                        availableHeight = nv.utils.availableHeight(height, container, margin) - (focusEnable ? focus.height() : 0);
                    }

                    wrap.select('.nv-legendWrap')
                        .attr('transform', 'translate(0,' + (-margin.top) +')');
                }
            }

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            if (rightAlignYAxis) {
                g.select(".nv-y.nv-axis")
                    .attr("transform", "translate(" + availableWidth + ",0)");
            }

            //Set up interactive layer
            if (useInteractiveGuideline) {
                interactiveLayer
                    .width(availableWidth)
                    .height(availableHeight)
                    .margin({left:margin.left, top:margin.top})
                    .svgContainer(container)
                    .xScale(x);
                wrap.select(".nv-interactive").call(interactiveLayer);
            }

            g.select('.nv-focus .nv-background rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);

            lines
                .width(availableWidth)
                .height(availableHeight)
                .color(data.map(function(d,i) {
                    return d.color || color(d, i);
                }).filter(function(d,i) { return !data[i].disabled; }));

            var linesWrap = g.select('.nv-linesWrap')
                .datum(data.filter(function(d) { return !d.disabled; }));


            // Setup Main (Focus) Axes
            if (showXAxis) {
                xAxis
                    .scale(x)
                    ._ticks(nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize(-availableHeight, 0);
            }

            if (showYAxis) {
                yAxis
                    .scale(y)
                    ._ticks( nv.utils.calcTicksY(availableHeight/36, data) )
                    .tickSize( -availableWidth, 0);
            }

            //============================================================
            // Update Axes
            //============================================================
            function updateXAxis() {
              if(showXAxis) {
                g.select('.nv-focus .nv-x.nv-axis')
                  .transition()
                  .duration(duration)
                  .call(xAxis)
                ;
              }
            }

            function updateYAxis() {
              if(showYAxis) {
                g.select('.nv-focus .nv-y.nv-axis')
                  .transition()
                  .duration(duration)
                  .call(yAxis)
                ;
              }
            }

            g.select('.nv-focus .nv-x.nv-axis')
                .attr('transform', 'translate(0,' + availableHeight + ')');

            //============================================================
            // Update Focus
            //============================================================
            if(!focusEnable) {
                linesWrap.call(lines);
                updateXAxis();
                updateYAxis();
            } else {
                focus.width(availableWidth);
                g.select('.nv-focusWrap')
                    .attr('transform', 'translate(0,' + ( availableHeight + margin.bottom + focus.margin().top) + ')')
                    .datum(data.filter(function(d) { return !d.disabled; }))
                    .call(focus);
                var extent = focus.brush.empty() ? focus.xDomain() : focus.brush.extent();
                if(extent !== null){
                    onBrush(extent);
                }
            }
            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            legend.dispatch.on('stateChange', function(newState) {
                for (var key in newState)
                    state[key] = newState[key];
                dispatch.stateChange(state);
                chart.update();
            });

            interactiveLayer.dispatch.on('elementMousemove', function(e) {
                lines.clearHighlights();
                var singlePoint, pointIndex, pointXLocation, allData = [];
                data
                    .filter(function(series, i) {
                        series.seriesIndex = i;
                        return !series.disabled && !series.disableTooltip;
                    })
                    .forEach(function(series,i) {
                        var extent = focusEnable ? (focus.brush.empty() ? focus.xScale().domain() : focus.brush.extent()) : x.domain();
                        var currentValues = series.values.filter(function(d,i) {
                            return lines.x()(d,i) >= extent[0] && lines.x()(d,i) <= extent[1];
                        });

                        pointIndex = nv.interactiveBisect(currentValues, e.pointXValue, lines.x());
                        var point = currentValues[pointIndex];
                        var pointYValue = chart.y()(point, pointIndex);
                        if (pointYValue !== null) {
                            lines.highlightPoint(series.seriesIndex, pointIndex, true);
                        }
                        if (point === undefined) return;
                        if (singlePoint === undefined) singlePoint = point;
                        if (pointXLocation === undefined) pointXLocation = chart.xScale()(chart.x()(point,pointIndex));
                        allData.push({
                            key: series.key,
                            value: pointYValue,
                            color: color(series,series.seriesIndex),
                            data: point
                        });
                    });
                //Highlight the tooltip entry based on which point the mouse is closest to.
                if (allData.length > 2) {
                    var yValue = chart.yScale().invert(e.mouseY);
                    var domainExtent = Math.abs(chart.yScale().domain()[0] - chart.yScale().domain()[1]);
                    var threshold = 0.03 * domainExtent;
                    var indexToHighlight = nv.nearestValueIndex(allData.map(function(d){return d.value;}),yValue,threshold);
                    if (indexToHighlight !== null)
                        allData[indexToHighlight].highlight = true;
                }

                var defaultValueFormatter = function(d,i) {
                    return d == null ? "N/A" : yAxis.tickFormat()(d);
                };

                interactiveLayer.tooltip
                    .valueFormatter(interactiveLayer.tooltip.valueFormatter() || defaultValueFormatter)
                    .data({
                        value: chart.x()( singlePoint,pointIndex ),
                        index: pointIndex,
                        series: allData
                    })();

                interactiveLayer.renderGuideLine(pointXLocation);

            });

            interactiveLayer.dispatch.on('elementClick', function(e) {
                var pointXLocation, allData = [];

                data.filter(function(series, i) {
                    series.seriesIndex = i;
                    return !series.disabled;
                }).forEach(function(series) {
                    var pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
                    var point = series.values[pointIndex];
                    if (typeof point === 'undefined') return;
                    if (typeof pointXLocation === 'undefined') pointXLocation = chart.xScale()(chart.x()(point,pointIndex));
                    var yPos = chart.yScale()(chart.y()(point,pointIndex));
                    allData.push({
                        point: point,
                        pointIndex: pointIndex,
                        pos: [pointXLocation, yPos],
                        seriesIndex: series.seriesIndex,
                        series: series
                    });
                });

                lines.dispatch.elementClick(allData);
            });

            interactiveLayer.dispatch.on("elementMouseout",function(e) {
                lines.clearHighlights();
            });

            dispatch.on('changeState', function(e) {
                if (typeof e.disabled !== 'undefined' && data.length === e.disabled.length) {
                    data.forEach(function(series,i) {
                        series.disabled = e.disabled[i];
                    });

                    state.disabled = e.disabled;
                }
                chart.update();
            });

            //============================================================
            // Functions
            //------------------------------------------------------------

            // Taken from crossfilter (http://square.github.com/crossfilter/)
            function resizePath(d) {
                var e = +(d == 'e'),
                    x = e ? 1 : -1,
                    y = availableHeight / 3;
                return 'M' + (0.5 * x) + ',' + y
                    + 'A6,6 0 0 ' + e + ' ' + (6.5 * x) + ',' + (y + 6)
                    + 'V' + (2 * y - 6)
                    + 'A6,6 0 0 ' + e + ' ' + (0.5 * x) + ',' + (2 * y)
                    + 'Z'
                    + 'M' + (2.5 * x) + ',' + (y + 8)
                    + 'V' + (2 * y - 8)
                    + 'M' + (4.5 * x) + ',' + (y + 8)
                    + 'V' + (2 * y - 8);
            }

            function onBrush(extent) {
                // Update Main (Focus)
                var focusLinesWrap = g.select('.nv-focus .nv-linesWrap')
                    .datum(
                    data.filter(function(d) { return !d.disabled; })
                        .map(function(d,i) {
                            return {
                                key: d.key,
                                area: d.area,
                                classed: d.classed,
                                values: d.values.filter(function(d,i) {
                                    return lines.x()(d,i) >= extent[0] && lines.x()(d,i) <= extent[1];
                                }),
                                disableTooltip: d.disableTooltip
                            };
                        })
                );
                focusLinesWrap.transition().duration(duration).call(lines);

                // Update Main (Focus) Axes
                updateXAxis();
                updateYAxis();
            }
        });

        renderWatch.renderEnd('lineChart immediate');
        return chart;
    }


    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    lines.dispatch.on('elementMouseover.tooltip', function(evt) {
        if(!evt.series.disableTooltip){
            tooltip.data(evt).hidden(false);
        }
    });

    lines.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true);
    });

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.lines = lines;
    chart.legend = legend;
    chart.focus = focus;
    chart.xAxis = xAxis;
    chart.x2Axis = focus.xAxis
    chart.yAxis = yAxis;
    chart.y2Axis = focus.yAxis
    chart.interactiveLayer = interactiveLayer;
    chart.tooltip = tooltip;
    chart.state = state;
    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        legendPosition: {get: function(){return legendPosition;}, set: function(_){legendPosition=_;}},
        showXAxis:      {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis:    {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        defaultState:    {get: function(){return defaultState;}, set: function(_){defaultState=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},
        // Focus options, mostly passed onto focus model.
        focusEnable:    {get: function(){return focusEnable;}, set: function(_){focusEnable=_;}},
        focusHeight:     {get: function(){return focus.height();}, set: function(_){focus.height(_);}},
        focusShowAxisX:    {get: function(){return focus.showXAxis();}, set: function(_){focus.showXAxis(_);}},
        focusShowAxisY:    {get: function(){return focus.showYAxis();}, set: function(_){focus.showYAxis(_);}},
        brushExtent: {get: function(){return focus.brushExtent();}, set: function(_){focus.brushExtent(_);}},

        // options that require extra logic in the setter
        focusMargin: {get: function(){return focus.margin}, set: function(_){
            focus.margin.top    = _.top    !== undefined ? _.top    : focus.margin.top;
            focus.margin.right  = _.right  !== undefined ? _.right  : focus.margin.right;
            focus.margin.bottom = _.bottom !== undefined ? _.bottom : focus.margin.bottom;
            focus.margin.left   = _.left   !== undefined ? _.left   : focus.margin.left;
        }},
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            lines.duration(duration);
            focus.duration(duration);
            xAxis.duration(duration);
            yAxis.duration(duration);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            legend.color(color);
            lines.color(color);
            focus.color(color);
        }},
        interpolate: {get: function(){return lines.interpolate();}, set: function(_){
            lines.interpolate(_);
            focus.interpolate(_);
        }},
        xTickFormat: {get: function(){return xAxis.tickFormat();}, set: function(_){
            xAxis.tickFormat(_);
            focus.xTickFormat(_);
        }},
        yTickFormat: {get: function(){return yAxis.tickFormat();}, set: function(_){
            yAxis.tickFormat(_);
            focus.yTickFormat(_);
        }},
        x: {get: function(){return lines.x();}, set: function(_){
            lines.x(_);
            focus.x(_);
        }},
        y: {get: function(){return lines.y();}, set: function(_){
            lines.y(_);
            focus.y(_);
        }},
        rightAlignYAxis: {get: function(){return rightAlignYAxis;}, set: function(_){
            rightAlignYAxis = _;
            yAxis.orient( rightAlignYAxis ? 'right' : 'left');
        }},
        useInteractiveGuideline: {get: function(){return useInteractiveGuideline;}, set: function(_){
            useInteractiveGuideline = _;
            if (useInteractiveGuideline) {
                lines.interactive(false);
                lines.useVoronoi(false);
            }
        }}
    });

    nv.utils.inheritOptions(chart, lines);
    nv.utils.initOptions(chart);

    return chart;
};

nv.models.lineWithFocusChart = function() {
  return nv.models.lineChart()
    .margin({ bottom: 30 })
    .focusEnable( true );
};
nv.models.linePlusBarChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var lines = nv.models.line()
        , lines2 = nv.models.line()
        , bars = nv.models.historicalBar()
        , bars2 = nv.models.historicalBar()
        , xAxis = nv.models.axis()
        , x2Axis = nv.models.axis()
        , y1Axis = nv.models.axis()
        , y2Axis = nv.models.axis()
        , y3Axis = nv.models.axis()
        , y4Axis = nv.models.axis()
        , legend = nv.models.legend()
        , brush = d3.svg.brush()
        , tooltip = nv.models.tooltip()
        ;

    var margin = {top: 30, right: 30, bottom: 30, left: 60}
        , margin2 = {top: 0, right: 30, bottom: 20, left: 60}
        , width = null
        , height = null
        , getX = function(d) { return d.x }
        , getY = function(d) { return d.y }
        , color = nv.utils.defaultColor()
        , showLegend = true
        , focusEnable = true
        , focusShowAxisY = false
        , focusShowAxisX = true
        , focusHeight = 50
        , extent
        , brushExtent = null
        , x
        , x2
        , y1
        , y2
        , y3
        , y4
        , noData = null
        , dispatch = d3.dispatch('brush', 'stateChange', 'changeState')
        , transitionDuration = 0
        , state = nv.utils.state()
        , defaultState = null
        , legendLeftAxisHint = ' (left axis)'
        , legendRightAxisHint = ' (right axis)'
        , switchYAxisOrder = false
        ;

    lines.clipEdge(true);
    lines2.interactive(false);
    // We don't want any points emitted for the focus chart's scatter graph.
    lines2.pointActive(function(d) { return false });
    xAxis.orient('bottom').tickPadding(5);
    y1Axis.orient('left');
    y2Axis.orient('right');
    x2Axis.orient('bottom').tickPadding(5);
    y3Axis.orient('left');
    y4Axis.orient('right');

    tooltip.headerEnabled(true).headerFormatter(function(d, i) {
        return xAxis.tickFormat()(d, i);
    });

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var getBarsAxis = function() {
        return switchYAxisOrder
            ? { main: y2Axis, focus: y4Axis }
            : { main: y1Axis, focus: y3Axis }
    }

    var getLinesAxis = function() {
        return switchYAxisOrder
            ? { main: y1Axis, focus: y3Axis }
            : { main: y2Axis, focus: y4Axis }
    }

    var stateGetter = function(data) {
        return function(){
            return {
                active: data.map(function(d) { return !d.disabled })
            };
        }
    };

    var stateSetter = function(data) {
        return function(state) {
            if (state.active !== undefined)
                data.forEach(function(series,i) {
                    series.disabled = !state.active[i];
                });
        }
    };

    var allDisabled = function(data) {
      return data.every(function(series) {
        return series.disabled;
      });
    }

    function chart(selection) {
        selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight1 = nv.utils.availableHeight(height, container, margin)
                    - (focusEnable ? focusHeight : 0),
                availableHeight2 = focusHeight - margin2.top - margin2.bottom;

            chart.update = function() { container.transition().duration(transitionDuration).call(chart); };
            chart.container = this;

            state
                .setter(stateSetter(data), chart.update)
                .getter(stateGetter(data))
                .update();

            // DEPRECATED set state.disableddisabled
            state.disabled = data.map(function(d) { return !!d.disabled });

            if (!defaultState) {
                var key;
                defaultState = {};
                for (key in state) {
                    if (state[key] instanceof Array)
                        defaultState[key] = state[key].slice(0);
                    else
                        defaultState[key] = state[key];
                }
            }

            // Display No Data message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
                nv.utils.noData(chart, container)
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            // Setup Scales
            var dataBars = data.filter(function(d) { return !d.disabled && d.bar });
            var dataLines = data.filter(function(d) { return !d.bar }); // removed the !d.disabled clause here to fix Issue #240

            if (dataBars.length && !switchYAxisOrder) {
                x = bars.xScale();
            } else {
                x = lines.xScale();
            }

            x2 = x2Axis.scale();

            // select the scales and series based on the position of the yAxis
            y1 = switchYAxisOrder ? lines.yScale() : bars.yScale();
            y2 = switchYAxisOrder ? bars.yScale() : lines.yScale();
            y3 = switchYAxisOrder ? lines2.yScale() : bars2.yScale();
            y4 = switchYAxisOrder ? bars2.yScale() : lines2.yScale();

            var series1 = data
                .filter(function(d) { return !d.disabled && (switchYAxisOrder ? !d.bar : d.bar) })
                .map(function(d) {
                    return d.values.map(function(d,i) {
                        return { x: getX(d,i), y: getY(d,i) }
                    })
                });

            var series2 = data
                .filter(function(d) { return !d.disabled && (switchYAxisOrder ? d.bar : !d.bar) })
                .map(function(d) {
                    return d.values.map(function(d,i) {
                        return { x: getX(d,i), y: getY(d,i) }
                    })
                });

            x.range([0, availableWidth]);

            x2  .domain(d3.extent(d3.merge(series1.concat(series2)), function(d) { return d.x } ))
                .range([0, availableWidth]);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-linePlusBar').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-linePlusBar').append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-legendWrap');

            // this is the main chart
            var focusEnter = gEnter.append('g').attr('class', 'nv-focus');
            focusEnter.append('g').attr('class', 'nv-x nv-axis');
            focusEnter.append('g').attr('class', 'nv-y1 nv-axis');
            focusEnter.append('g').attr('class', 'nv-y2 nv-axis');
            focusEnter.append('g').attr('class', 'nv-barsWrap');
            focusEnter.append('g').attr('class', 'nv-linesWrap');

            // context chart is where you can focus in
            var contextEnter = gEnter.append('g').attr('class', 'nv-context');
            contextEnter.append('g').attr('class', 'nv-x nv-axis');
            contextEnter.append('g').attr('class', 'nv-y1 nv-axis');
            contextEnter.append('g').attr('class', 'nv-y2 nv-axis');
            contextEnter.append('g').attr('class', 'nv-barsWrap');
            contextEnter.append('g').attr('class', 'nv-linesWrap');
            contextEnter.append('g').attr('class', 'nv-brushBackground');
            contextEnter.append('g').attr('class', 'nv-x nv-brush');

            //============================================================
            // Legend
            //------------------------------------------------------------

            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                var legendWidth = legend.align() ? availableWidth / 2 : availableWidth;
                var legendXPosition = legend.align() ? legendWidth : 0;

                legend.width(legendWidth);

                g.select('.nv-legendWrap')
                    .datum(data.map(function(series) {
                        series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
                        if(switchYAxisOrder) {
                            series.key = series.originalKey + (series.bar ? legendRightAxisHint : legendLeftAxisHint);
                        } else {
                            series.key = series.originalKey + (series.bar ? legendLeftAxisHint : legendRightAxisHint);
                        }
                        return series;
                    }))
                    .call(legend);

                if (legend.height() > margin.top) {
                    margin.top = legend.height();
                    // FIXME: shouldn't this be "- (focusEnabled ? focusHeight : 0)"?
                    availableHeight1 = nv.utils.availableHeight(height, container, margin) - focusHeight;
                }

                g.select('.nv-legendWrap')
                    .attr('transform', 'translate(' + legendXPosition + ',' + (-margin.top) +')');
            }

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            //============================================================
            // Context chart (focus chart) components
            //------------------------------------------------------------

            // hide or show the focus context chart
            g.select('.nv-context').style('display', focusEnable ? 'initial' : 'none');

            bars2
                .width(availableWidth)
                .height(availableHeight2)
                .color(data.map(function (d, i) {
                    return d.color || color(d, i);
                }).filter(function (d, i) {
                    return !data[i].disabled && data[i].bar
                }));
            lines2
                .width(availableWidth)
                .height(availableHeight2)
                .color(data.map(function (d, i) {
                    return d.color || color(d, i);
                }).filter(function (d, i) {
                    return !data[i].disabled && !data[i].bar
                }));

            var bars2Wrap = g.select('.nv-context .nv-barsWrap')
                .datum(dataBars.length ? dataBars : [
                    {values: []}
                ]);
            var lines2Wrap = g.select('.nv-context .nv-linesWrap')
                .datum(allDisabled(dataLines) ?
                       [{values: []}] :
                       dataLines.filter(function(dataLine) {
                         return !dataLine.disabled;
                       }));

            g.select('.nv-context')
                .attr('transform', 'translate(0,' + ( availableHeight1 + margin.bottom + margin2.top) + ')');

            bars2Wrap.transition().call(bars2);
            lines2Wrap.transition().call(lines2);

            // context (focus chart) axis controls
            if (focusShowAxisX) {
                x2Axis
                    ._ticks( nv.utils.calcTicksX(availableWidth / 100, data))
                    .tickSize(-availableHeight2, 0);
                g.select('.nv-context .nv-x.nv-axis')
                    .attr('transform', 'translate(0,' + y3.range()[0] + ')');
                g.select('.nv-context .nv-x.nv-axis').transition()
                    .call(x2Axis);
            }

            if (focusShowAxisY) {
                y3Axis
                    .scale(y3)
                    ._ticks( availableHeight2 / 36 )
                    .tickSize( -availableWidth, 0);
                y4Axis
                    .scale(y4)
                    ._ticks( availableHeight2 / 36 )
                    .tickSize(dataBars.length ? 0 : -availableWidth, 0); // Show the y2 rules only if y1 has none

                g.select('.nv-context .nv-y3.nv-axis')
                    .style('opacity', dataBars.length ? 1 : 0)
                    .attr('transform', 'translate(0,' + x2.range()[0] + ')');
                g.select('.nv-context .nv-y2.nv-axis')
                    .style('opacity', dataLines.length ? 1 : 0)
                    .attr('transform', 'translate(' + x2.range()[1] + ',0)');

                g.select('.nv-context .nv-y1.nv-axis').transition()
                    .call(y3Axis);
                g.select('.nv-context .nv-y2.nv-axis').transition()
                    .call(y4Axis);
            }

            // Setup Brush
            brush.x(x2).on('brush', onBrush);

            if (brushExtent) brush.extent(brushExtent);

            var brushBG = g.select('.nv-brushBackground').selectAll('g')
                .data([brushExtent || brush.extent()]);

            var brushBGenter = brushBG.enter()
                .append('g');

            brushBGenter.append('rect')
                .attr('class', 'left')
                .attr('x', 0)
                .attr('y', 0)
                .attr('height', availableHeight2);

            brushBGenter.append('rect')
                .attr('class', 'right')
                .attr('x', 0)
                .attr('y', 0)
                .attr('height', availableHeight2);

            var gBrush = g.select('.nv-x.nv-brush')
                .call(brush);
            gBrush.selectAll('rect')
                //.attr('y', -5)
                .attr('height', availableHeight2);
            gBrush.selectAll('.resize').append('path').attr('d', resizePath);

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            legend.dispatch.on('stateChange', function(newState) {
                for (var key in newState)
                    state[key] = newState[key];
                dispatch.stateChange(state);
                chart.update();
            });

            // Update chart from a state object passed to event handler
            dispatch.on('changeState', function(e) {
                if (typeof e.disabled !== 'undefined') {
                    data.forEach(function(series,i) {
                        series.disabled = e.disabled[i];
                    });
                    state.disabled = e.disabled;
                }
                chart.update();
            });

            //============================================================
            // Functions
            //------------------------------------------------------------

            // Taken from crossfilter (http://square.github.com/crossfilter/)
            function resizePath(d) {
                var e = +(d == 'e'),
                    x = e ? 1 : -1,
                    y = availableHeight2 / 3;
                return 'M' + (.5 * x) + ',' + y
                    + 'A6,6 0 0 ' + e + ' ' + (6.5 * x) + ',' + (y + 6)
                    + 'V' + (2 * y - 6)
                    + 'A6,6 0 0 ' + e + ' ' + (.5 * x) + ',' + (2 * y)
                    + 'Z'
                    + 'M' + (2.5 * x) + ',' + (y + 8)
                    + 'V' + (2 * y - 8)
                    + 'M' + (4.5 * x) + ',' + (y + 8)
                    + 'V' + (2 * y - 8);
            }


            function updateBrushBG() {
                if (!brush.empty()) brush.extent(brushExtent);
                brushBG
                    .data([brush.empty() ? x2.domain() : brushExtent])
                    .each(function(d,i) {
                        var leftWidth = x2(d[0]) - x2.range()[0],
                            rightWidth = x2.range()[1] - x2(d[1]);
                        d3.select(this).select('.left')
                            .attr('width',  leftWidth < 0 ? 0 : leftWidth);

                        d3.select(this).select('.right')
                            .attr('x', x2(d[1]))
                            .attr('width', rightWidth < 0 ? 0 : rightWidth);
                    });
            }

            function onBrush() {
                brushExtent = brush.empty() ? null : brush.extent();
                extent = brush.empty() ? x2.domain() : brush.extent();
                dispatch.brush({extent: extent, brush: brush});
                updateBrushBG();

                // Prepare Main (Focus) Bars and Lines
                bars
                    .width(availableWidth)
                    .height(availableHeight1)
                    .color(data.map(function(d,i) {
                        return d.color || color(d, i);
                    }).filter(function(d,i) { return !data[i].disabled && data[i].bar }));

                lines
                    .width(availableWidth)
                    .height(availableHeight1)
                    .color(data.map(function(d,i) {
                        return d.color || color(d, i);
                    }).filter(function(d,i) { return !data[i].disabled && !data[i].bar }));

                var focusBarsWrap = g.select('.nv-focus .nv-barsWrap')
                    .datum(!dataBars.length ? [{values:[]}] :
                        dataBars
                            .map(function(d,i) {
                                return {
                                    key: d.key,
                                    values: d.values.filter(function(d,i) {
                                        return bars.x()(d,i) >= extent[0] && bars.x()(d,i) <= extent[1];
                                    })
                                }
                            })
                );

                var focusLinesWrap = g.select('.nv-focus .nv-linesWrap')
                    .datum(allDisabled(dataLines) ? [{values:[]}] :
                           dataLines
                           .filter(function(dataLine) { return !dataLine.disabled; })
                           .map(function(d,i) {
                                return {
                                    area: d.area,
                                    fillOpacity: d.fillOpacity,
                                    strokeWidth: d.strokeWidth,
                                    key: d.key,
                                    values: d.values.filter(function(d,i) {
                                        return lines.x()(d,i) >= extent[0] && lines.x()(d,i) <= extent[1];
                                    })
                                }
                            })
                );

                // Update Main (Focus) X Axis
                if (dataBars.length && !switchYAxisOrder) {
                    x = bars.xScale();
                } else {
                    x = lines.xScale();
                }

                xAxis
                    .scale(x)
                    ._ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize(-availableHeight1, 0);

                xAxis.domain([Math.ceil(extent[0]), Math.floor(extent[1])]);

                g.select('.nv-x.nv-axis').transition().duration(transitionDuration)
                    .call(xAxis);

                // Update Main (Focus) Bars and Lines
                focusBarsWrap.transition().duration(transitionDuration).call(bars);
                focusLinesWrap.transition().duration(transitionDuration).call(lines);

                // Setup and Update Main (Focus) Y Axes
                g.select('.nv-focus .nv-x.nv-axis')
                    .attr('transform', 'translate(0,' + y1.range()[0] + ')');

                y1Axis
                    .scale(y1)
                    ._ticks( nv.utils.calcTicksY(availableHeight1/36, data) )
                    .tickSize(-availableWidth, 0);
                y2Axis
                    .scale(y2)
                    ._ticks( nv.utils.calcTicksY(availableHeight1/36, data) );

                // Show the y2 rules only if y1 has none
                if(!switchYAxisOrder) {
                    y2Axis.tickSize(dataBars.length ? 0 : -availableWidth, 0);
                } else {
                    y2Axis.tickSize(dataLines.length ? 0 : -availableWidth, 0);
                }

                // Calculate opacity of the axis
                var barsOpacity = dataBars.length ? 1 : 0;
                var linesOpacity = dataLines.length && !allDisabled(dataLines) ? 1 : 0;

                var y1Opacity = switchYAxisOrder ? linesOpacity : barsOpacity;
                var y2Opacity = switchYAxisOrder ? barsOpacity : linesOpacity;

                g.select('.nv-focus .nv-y1.nv-axis')
                    .style('opacity', y1Opacity);
                g.select('.nv-focus .nv-y2.nv-axis')
                    .style('opacity', y2Opacity)
                    .attr('transform', 'translate(' + x.range()[1] + ',0)');

                g.select('.nv-focus .nv-y1.nv-axis').transition().duration(transitionDuration)
                    .call(y1Axis);
                g.select('.nv-focus .nv-y2.nv-axis').transition().duration(transitionDuration)
                    .call(y2Axis);
            }

            onBrush();

        });

        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    lines.dispatch.on('elementMouseover.tooltip', function(evt) {
        tooltip
            .duration(100)
            .valueFormatter(function(d, i) {
                return getLinesAxis().main.tickFormat()(d, i);
            })
            .data(evt)
            .hidden(false);
    });

    lines.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true)
    });

    bars.dispatch.on('elementMouseover.tooltip', function(evt) {
        evt.value = chart.x()(evt.data);
        evt['series'] = {
            value: chart.y()(evt.data),
            color: evt.color
        };
        tooltip
            .duration(0)
            .valueFormatter(function(d, i) {
                return getBarsAxis().main.tickFormat()(d, i);
            })
            .data(evt)
            .hidden(false);
    });

    bars.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true);
    });

    bars.dispatch.on('elementMousemove.tooltip', function(evt) {
        tooltip();
    });

    //============================================================


    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.legend = legend;
    chart.lines = lines;
    chart.lines2 = lines2;
    chart.bars = bars;
    chart.bars2 = bars2;
    chart.xAxis = xAxis;
    chart.x2Axis = x2Axis;
    chart.y1Axis = y1Axis;
    chart.y2Axis = y2Axis;
    chart.y3Axis = y3Axis;
    chart.y4Axis = y4Axis;
    chart.tooltip = tooltip;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        brushExtent:    {get: function(){return brushExtent;}, set: function(_){brushExtent=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},
        focusEnable:    {get: function(){return focusEnable;}, set: function(_){focusEnable=_;}},
        focusHeight:    {get: function(){return focusHeight;}, set: function(_){focusHeight=_;}},
        focusShowAxisX:    {get: function(){return focusShowAxisX;}, set: function(_){focusShowAxisX=_;}},
        focusShowAxisY:    {get: function(){return focusShowAxisY;}, set: function(_){focusShowAxisY=_;}},
        legendLeftAxisHint:    {get: function(){return legendLeftAxisHint;}, set: function(_){legendLeftAxisHint=_;}},
        legendRightAxisHint:    {get: function(){return legendRightAxisHint;}, set: function(_){legendRightAxisHint=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        focusMargin: {get: function(){return margin2;}, set: function(_){
            margin2.top    = _.top    !== undefined ? _.top    : margin2.top;
            margin2.right  = _.right  !== undefined ? _.right  : margin2.right;
            margin2.bottom = _.bottom !== undefined ? _.bottom : margin2.bottom;
            margin2.left   = _.left   !== undefined ? _.left   : margin2.left;
        }},
        duration: {get: function(){return transitionDuration;}, set: function(_){
            transitionDuration = _;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            legend.color(color);
        }},
        x: {get: function(){return getX;}, set: function(_){
            getX = _;
            lines.x(_);
            lines2.x(_);
            bars.x(_);
            bars2.x(_);
        }},
        y: {get: function(){return getY;}, set: function(_){
            getY = _;
            lines.y(_);
            lines2.y(_);
            bars.y(_);
            bars2.y(_);
        }},
        switchYAxisOrder:    {get: function(){return switchYAxisOrder;}, set: function(_){
            // Switch the tick format for the yAxis
            if(switchYAxisOrder !== _) {
                var y1 = y1Axis;
                y1Axis = y2Axis;
                y2Axis = y1;

                var y3 = y3Axis;
                y3Axis = y4Axis;
                y4Axis = y3;
            }
            switchYAxisOrder=_;

            y1Axis.orient('left');
            y2Axis.orient('right');
            y3Axis.orient('left');
            y4Axis.orient('right');
        }}
    });

    nv.utils.inheritOptions(chart, lines);
    nv.utils.initOptions(chart);

    return chart;
};

nv.models.multiBar = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = 960
        , height = 500
        , x = d3.scale.ordinal()
        , y = d3.scale.linear()
        , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
        , container = null
        , getX = function(d) { return d.x }
        , getY = function(d) { return d.y }
        , forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
        , clipEdge = true
        , stacked = false
        , stackOffset = 'zero' // options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function
        , color = nv.utils.defaultColor()
        , hideable = false
        , barColor = null // adding the ability to set the color for each rather than the whole group
        , disabled // used in conjunction with barColor to communicate from multiBarHorizontalChart what series are disabled
        , duration = 500
        , xDomain
        , yDomain
        , xRange
        , yRange
        , groupSpacing = 0.1
        , fillOpacity = 0.75
        , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'elementMousemove', 'renderEnd')
        ;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var x0, y0 //used to store previous scales
        , renderWatch = nv.utils.renderWatch(dispatch, duration)
        ;

    var last_datalength = 0;

    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom;

            container = d3.select(this);
            nv.utils.initSVG(container);
            var nonStackableCount = 0;
            // This function defines the requirements for render complete
            var endFn = function(d, i) {
                if (d.series === data.length - 1 && i === data[0].values.length - 1)
                    return true;
                return false;
            };

            if(hideable && data.length) hideable = [{
                values: data[0].values.map(function(d) {
                        return {
                            x: d.x,
                            y: 0,
                            series: d.series,
                            size: 0.01
                        };}
                )}];

            if (stacked) {
                var parsed = d3.layout.stack()
                    .offset(stackOffset)
                    .values(function(d){ return d.values })
                    .y(getY)
                (!data.length && hideable ? hideable : data);

                parsed.forEach(function(series, i){
                    // if series is non-stackable, use un-parsed data
                    if (series.nonStackable) {
                        data[i].nonStackableSeries = nonStackableCount++;
                        parsed[i] = data[i];
                    } else {
                        // don't stack this seires on top of the nonStackable seriees
                        if (i > 0 && parsed[i - 1].nonStackable){
                            parsed[i].values.map(function(d,j){
                                d.y0 -= parsed[i - 1].values[j].y;
                                d.y1 = d.y0 + d.y;
                            });
                        }
                    }
                });
                data = parsed;
            }
            //add series index and key to each data point for reference
            data.forEach(function(series, i) {
                series.values.forEach(function(point) {
                    point.series = i;
                    point.key = series.key;
                });
            });

            // HACK for negative value stacking
            if (stacked && data.length > 0) {
                data[0].values.map(function(d,i) {
                    var posBase = 0, negBase = 0;
                    data.map(function(d, idx) {
                        if (!data[idx].nonStackable) {
                            var f = d.values[i]
                            f.size = Math.abs(f.y);
                            if (f.y<0)  {
                                f.y1 = negBase;
                                negBase = negBase - f.size;
                            } else
                            {
                                f.y1 = f.size + posBase;
                                posBase = posBase + f.size;
                            }
                        }

                    });
                });
            }
            // Setup Scales
            // remap and flatten the data for use in calculating the scales' domains
            var seriesData = (xDomain && yDomain) ? [] : // if we know xDomain and yDomain, no need to calculate
                data.map(function(d, idx) {
                    return d.values.map(function(d,i) {
                        return { x: getX(d,i), y: getY(d,i), y0: d.y0, y1: d.y1, idx:idx }
                    })
                });

            x.domain(xDomain || d3.merge(seriesData).map(function(d) { return d.x }))
                .rangeBands(xRange || [0, availableWidth], groupSpacing);

            y.domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) {
                var domain = d.y;
                // increase the domain range if this series is stackable
                if (stacked && !data[d.idx].nonStackable) {
                    if (d.y > 0){
                        domain = d.y1
                    } else {
                        domain = d.y1 + d.y
                    }
                }
                return domain;
            }).concat(forceY)))
            .range(yRange || [availableHeight, 0]);

            // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
            if (x.domain()[0] === x.domain()[1])
                x.domain()[0] ?
                    x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
                    : x.domain([-1,1]);

            if (y.domain()[0] === y.domain()[1])
                y.domain()[0] ?
                    y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01])
                    : y.domain([-1,1]);

            x0 = x0 || x;
            y0 = y0 || y;

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-multibar').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multibar');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-groups');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            defsEnter.append('clipPath')
                .attr('id', 'nv-edge-clip-' + id)
                .append('rect');
            wrap.select('#nv-edge-clip-' + id + ' rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);

            g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');

            var groups = wrap.select('.nv-groups').selectAll('.nv-group')
                .data(function(d) { return d }, function(d,i) { return i });
            groups.enter().append('g')
                .style('stroke-opacity', 1e-6)
                .style('fill-opacity', 1e-6);

            var exitTransition = renderWatch
                .transition(groups.exit().selectAll('rect.nv-bar'), 'multibarExit', Math.min(100, duration))
                .attr('y', function(d, i, j) {
                    var yVal = y0(0) || 0;
                    if (stacked) {
                        if (data[d.series] && !data[d.series].nonStackable) {
                            yVal = y0(d.y0);
                        }
                    }
                    return yVal;
                })
                .attr('height', 0)
                .remove();
            if (exitTransition.delay)
                exitTransition.delay(function(d,i) {
                    var delay = i * (duration / (last_datalength + 1)) - i;
                    return delay;
                });
            groups
                .attr('class', function(d,i) { return 'nv-group nv-series-' + i })
                .classed('hover', function(d) { return d.hover })
                .style('fill', function(d,i){ return color(d, i) })
                .style('stroke', function(d,i){ return color(d, i) });
            groups
                .style('stroke-opacity', 1)
                .style('fill-opacity', fillOpacity);

            var bars = groups.selectAll('rect.nv-bar')
                .data(function(d) { return (hideable && !data.length) ? hideable.values : d.values });
            bars.exit().remove();

            var barsEnter = bars.enter().append('rect')
                    .attr('class', function(d,i) { return getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive'})
                    .attr('x', function(d,i,j) {
                        return stacked && !data[j].nonStackable ? 0 : (j * x.rangeBand() / data.length )
                    })
                    .attr('y', function(d,i,j) { return y0(stacked && !data[j].nonStackable ? d.y0 : 0) || 0 })
                    .attr('height', 0)
                    .attr('width', function(d,i,j) { return x.rangeBand() / (stacked && !data[j].nonStackable ? 1 : data.length) })
                    .attr('transform', function(d,i) { return 'translate(' + x(getX(d,i)) + ',0)'; })
                ;
            bars
                .style('fill', function(d,i,j){ return color(d, j, i);  })
                .style('stroke', function(d,i,j){ return color(d, j, i); })
                .on('mouseover', function(d,i) { //TODO: figure out why j works above, but not here
                    d3.select(this).classed('hover', true);
                    dispatch.elementMouseover({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('mouseout', function(d,i) {
                    d3.select(this).classed('hover', false);
                    dispatch.elementMouseout({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('mousemove', function(d,i) {
                    dispatch.elementMousemove({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('click', function(d,i) {
                    var element = this;
                    dispatch.elementClick({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill"),
                        event: d3.event,
                        element: element
                    });
                    d3.event.stopPropagation();
                })
                .on('dblclick', function(d,i) {
                    dispatch.elementDblClick({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                    d3.event.stopPropagation();
                });
            bars
                .attr('class', function(d,i) { return getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive'})
                .attr('transform', function(d,i) { return 'translate(' + x(getX(d,i)) + ',0)'; })

            if (barColor) {
                if (!disabled) disabled = data.map(function() { return true });
                bars
                    .style('fill', function(d,i,j) { return d3.rgb(barColor(d,i)).darker(  disabled.map(function(d,i) { return i }).filter(function(d,i){ return !disabled[i]  })[j]   ).toString(); })
                    .style('stroke', function(d,i,j) { return d3.rgb(barColor(d,i)).darker(  disabled.map(function(d,i) { return i }).filter(function(d,i){ return !disabled[i]  })[j]   ).toString(); });
            }

            var barSelection =
                bars.watchTransition(renderWatch, 'multibar', Math.min(250, duration))
                    .delay(function(d,i) {
                        return i * duration / data[0].values.length;
                    });
            if (stacked){
                barSelection
                    .attr('y', function(d,i,j) {
                        var yVal = 0;
                        // if stackable, stack it on top of the previous series
                        if (!data[j].nonStackable) {
                            yVal = y(d.y1);
                        } else {
                            if (getY(d,i) < 0){
                                yVal = y(0);
                            } else {
                                if (y(0) - y(getY(d,i)) < -1){
                                    yVal = y(0) - 1;
                                } else {
                                    yVal = y(getY(d, i)) || 0;
                                }
                            }
                        }
                        return yVal;
                    })
                    .attr('height', function(d,i,j) {
                        if (!data[j].nonStackable) {
                            return Math.max(Math.abs(y(d.y+d.y0) - y(d.y0)), 0);
                        } else {
                            return Math.max(Math.abs(y(getY(d,i)) - y(0)), 0) || 0;
                        }
                    })
                    .attr('x', function(d,i,j) {
                        var width = 0;
                        if (data[j].nonStackable) {
                            width = d.series * x.rangeBand() / data.length;
                            if (data.length !== nonStackableCount){
                                width = data[j].nonStackableSeries * x.rangeBand()/(nonStackableCount*2);
                            }
                        }
                        return width;
                    })
                    .attr('width', function(d,i,j){
                        if (!data[j].nonStackable) {
                            return x.rangeBand();
                        } else {
                            // if all series are nonStacable, take the full width
                            var width = (x.rangeBand() / nonStackableCount);
                            // otherwise, nonStackable graph will be only taking the half-width
                            // of the x rangeBand
                            if (data.length !== nonStackableCount) {
                                width = x.rangeBand()/(nonStackableCount*2);
                            }
                            return width;
                        }
                    });
            }
            else {
                barSelection
                    .attr('x', function(d,i) {
                        return d.series * x.rangeBand() / data.length;
                    })
                    .attr('width', x.rangeBand() / data.length)
                    .attr('y', function(d,i) {
                        return getY(d,i) < 0 ?
                            y(0) :
                                y(0) - y(getY(d,i)) < 1 ?
                            y(0) - 1 :
                            y(getY(d,i)) || 0;
                    })
                    .attr('height', function(d,i) {
                        return Math.max(Math.abs(y(getY(d,i)) - y(0)),1) || 0;
                    });
            }

            //store old scales for use in transitions on update
            x0 = x.copy();
            y0 = y.copy();

            // keep track of the last data value length for transition calculations
            if (data[0] && data[0].values) {
                last_datalength = data[0].values.length;
            }

        });

        renderWatch.renderEnd('multibar immediate');

        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:   {get: function(){return width;}, set: function(_){width=_;}},
        height:  {get: function(){return height;}, set: function(_){height=_;}},
        x:       {get: function(){return getX;}, set: function(_){getX=_;}},
        y:       {get: function(){return getY;}, set: function(_){getY=_;}},
        xScale:  {get: function(){return x;}, set: function(_){x=_;}},
        yScale:  {get: function(){return y;}, set: function(_){y=_;}},
        xDomain: {get: function(){return xDomain;}, set: function(_){xDomain=_;}},
        yDomain: {get: function(){return yDomain;}, set: function(_){yDomain=_;}},
        xRange:  {get: function(){return xRange;}, set: function(_){xRange=_;}},
        yRange:  {get: function(){return yRange;}, set: function(_){yRange=_;}},
        forceY:  {get: function(){return forceY;}, set: function(_){forceY=_;}},
        stacked: {get: function(){return stacked;}, set: function(_){stacked=_;}},
        stackOffset: {get: function(){return stackOffset;}, set: function(_){stackOffset=_;}},
        clipEdge:    {get: function(){return clipEdge;}, set: function(_){clipEdge=_;}},
        disabled:    {get: function(){return disabled;}, set: function(_){disabled=_;}},
        id:          {get: function(){return id;}, set: function(_){id=_;}},
        hideable:    {get: function(){return hideable;}, set: function(_){hideable=_;}},
        groupSpacing:{get: function(){return groupSpacing;}, set: function(_){groupSpacing=_;}},
        fillOpacity: {get: function(){return fillOpacity;}, set: function(_){fillOpacity=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }},
        barColor:  {get: function(){return barColor;}, set: function(_){
            barColor = _ ? nv.utils.getColor(_) : null;
        }}
    });

    nv.utils.initOptions(chart);

    return chart;
};
nv.models.multiBarChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var multibar = nv.models.multiBar()
        , xAxis = nv.models.axis()
        , yAxis = nv.models.axis()
        , interactiveLayer = nv.interactiveGuideline()
        , legend = nv.models.legend()
        , controls = nv.models.legend()
        , tooltip = nv.models.tooltip()
        ;

    var margin = {top: 30, right: 20, bottom: 50, left: 60}
        , width = null
        , height = null
        , color = nv.utils.defaultColor()
        , showControls = true
        , controlLabels = {}
        , showLegend = true
        , showXAxis = true
        , showYAxis = true
        , rightAlignYAxis = false
        , reduceXTicks = true // if false a tick will show for every data point
        , staggerLabels = false
        , wrapLabels = false
        , rotateLabels = 0
        , x //can be accessed via chart.xScale()
        , y //can be accessed via chart.yScale()
        , state = nv.utils.state()
        , defaultState = null
        , noData = null
        , dispatch = d3.dispatch('stateChange', 'changeState', 'renderEnd')
        , controlWidth = function() { return showControls ? 180 : 0 }
        , duration = 250
        , useInteractiveGuideline = false
        ;

    state.stacked = false // DEPRECATED Maintained for backward compatibility

    multibar.stacked(false);
    xAxis
        .orient('bottom')
        .tickPadding(7)
        .showMaxMin(false)
        .tickFormat(function(d) { return d })
    ;
    yAxis
        .orient((rightAlignYAxis) ? 'right' : 'left')
        .tickFormat(d3.format(',.1f'))
    ;

    tooltip
        .duration(0)
        .valueFormatter(function(d, i) {
            return yAxis.tickFormat()(d, i);
        })
        .headerFormatter(function(d, i) {
            return xAxis.tickFormat()(d, i);
        });

    controls.updateState(false);

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch);
    var stacked = false;

    var stateGetter = function(data) {
        return function(){
            return {
                active: data.map(function(d) { return !d.disabled }),
                stacked: stacked
            };
        }
    };

    var stateSetter = function(data) {
        return function(state) {
            if (state.stacked !== undefined)
                stacked = state.stacked;
            if (state.active !== undefined)
                data.forEach(function(series,i) {
                    series.disabled = !state.active[i];
                });
        }
    };

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(multibar);
        if (showXAxis) renderWatch.models(xAxis);
        if (showYAxis) renderWatch.models(yAxis);

        selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            chart.update = function() {
                if (duration === 0)
                    container.call(chart);
                else
                    container.transition()
                        .duration(duration)
                        .call(chart);
            };
            chart.container = this;

            state
                .setter(stateSetter(data), chart.update)
                .getter(stateGetter(data))
                .update();

            // DEPRECATED set state.disableddisabled
            state.disabled = data.map(function(d) { return !!d.disabled });

            if (!defaultState) {
                var key;
                defaultState = {};
                for (key in state) {
                    if (state[key] instanceof Array)
                        defaultState[key] = state[key].slice(0);
                    else
                        defaultState[key] = state[key];
                }
            }

            // Display noData message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
                nv.utils.noData(chart, container)
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            // Setup Scales
            x = multibar.xScale();
            y = multibar.yScale();

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-multiBarWithLegend').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarWithLegend').append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-barsWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-controlsWrap');
            gEnter.append('g').attr('class', 'nv-interactive');

            // Legend
            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                legend.width(availableWidth - controlWidth());

                g.select('.nv-legendWrap')
                    .datum(data)
                    .call(legend);

                if (legend.height() > margin.top) {
                    margin.top = legend.height();
                    availableHeight = nv.utils.availableHeight(height, container, margin);
                }

                g.select('.nv-legendWrap')
                    .attr('transform', 'translate(' + controlWidth() + ',' + (-margin.top) +')');
            }

            // Controls
            if (!showControls) {
                 g.select('.nv-controlsWrap').selectAll('*').remove();
            } else {
                var controlsData = [
                    { key: controlLabels.grouped || 'Grouped', disabled: multibar.stacked() },
                    { key: controlLabels.stacked || 'Stacked', disabled: !multibar.stacked() }
                ];

                controls.width(controlWidth()).color(['#444', '#444', '#444']);
                g.select('.nv-controlsWrap')
                    .datum(controlsData)
                    .attr('transform', 'translate(0,' + (-margin.top) +')')
                    .call(controls);
            }

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            if (rightAlignYAxis) {
                g.select(".nv-y.nv-axis")
                    .attr("transform", "translate(" + availableWidth + ",0)");
            }

            // Main Chart Component(s)
            multibar
                .disabled(data.map(function(series) { return series.disabled }))
                .width(availableWidth)
                .height(availableHeight)
                .color(data.map(function(d,i) {
                    return d.color || color(d, i);
                }).filter(function(d,i) { return !data[i].disabled }));


            var barsWrap = g.select('.nv-barsWrap')
                .datum(data.filter(function(d) { return !d.disabled }));

            barsWrap.call(multibar);

            // Setup Axes
            if (showXAxis) {
                xAxis
                    .scale(x)
                    ._ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize(-availableHeight, 0);

                g.select('.nv-x.nv-axis')
                    .attr('transform', 'translate(0,' + y.range()[0] + ')');
                g.select('.nv-x.nv-axis')
                    .call(xAxis);

                var xTicks = g.select('.nv-x.nv-axis > g').selectAll('g');

                xTicks
                    .selectAll('line, text')
                    .style('opacity', 1)

                if (staggerLabels) {
                    var getTranslate = function(x,y) {
                        return "translate(" + x + "," + y + ")";
                    };

                    var staggerUp = 5, staggerDown = 17;  //pixels to stagger by
                    // Issue #140
                    xTicks
                        .selectAll("text")
                        .attr('transform', function(d,i,j) {
                            return  getTranslate(0, (j % 2 == 0 ? staggerUp : staggerDown));
                        });

                    var totalInBetweenTicks = d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;
                    g.selectAll(".nv-x.nv-axis .nv-axisMaxMin text")
                        .attr("transform", function(d,i) {
                            return getTranslate(0, (i === 0 || totalInBetweenTicks % 2 !== 0) ? staggerDown : staggerUp);
                        });
                }

                if (wrapLabels) {
                    g.selectAll('.tick text')
                        .call(nv.utils.wrapTicks, chart.xAxis.rangeBand())
                }

                if (reduceXTicks)
                    xTicks
                        .filter(function(d,i) {
                            return i % Math.ceil(data[0].values.length / (availableWidth / 100)) !== 0;
                        })
                        .selectAll('text, line')
                        .style('opacity', 0);

                if(rotateLabels)
                    xTicks
                        .selectAll('.tick text')
                        .attr('transform', 'rotate(' + rotateLabels + ' 0,0)')
                        .style('text-anchor', rotateLabels > 0 ? 'start' : 'end');

                g.select('.nv-x.nv-axis').selectAll('g.nv-axisMaxMin text')
                    .style('opacity', 1);
            }

            if (showYAxis) {
                yAxis
                    .scale(y)
                    ._ticks( nv.utils.calcTicksY(availableHeight/36, data) )
                    .tickSize( -availableWidth, 0);

                g.select('.nv-y.nv-axis')
                    .call(yAxis);
            }

            //Set up interactive layer
            if (useInteractiveGuideline) {
                interactiveLayer
                    .width(availableWidth)
                    .height(availableHeight)
                    .margin({left:margin.left, top:margin.top})
                    .svgContainer(container)
                    .xScale(x);
                wrap.select(".nv-interactive").call(interactiveLayer);
            }

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            legend.dispatch.on('stateChange', function(newState) {
                for (var key in newState)
                    state[key] = newState[key];
                dispatch.stateChange(state);
                chart.update();
            });

            controls.dispatch.on('legendClick', function(d,i) {
                if (!d.disabled) return;
                controlsData = controlsData.map(function(s) {
                    s.disabled = true;
                    return s;
                });
                d.disabled = false;

                switch (d.key) {
                    case 'Grouped':
                    case controlLabels.grouped:
                        multibar.stacked(false);
                        break;
                    case 'Stacked':
                    case controlLabels.stacked:
                        multibar.stacked(true);
                        break;
                }

                state.stacked = multibar.stacked();
                dispatch.stateChange(state);
                chart.update();
            });

            // Update chart from a state object passed to event handler
            dispatch.on('changeState', function(e) {
                if (typeof e.disabled !== 'undefined') {
                    data.forEach(function(series,i) {
                        series.disabled = e.disabled[i];
                    });
                    state.disabled = e.disabled;
                }
                if (typeof e.stacked !== 'undefined') {
                    multibar.stacked(e.stacked);
                    state.stacked = e.stacked;
                    stacked = e.stacked;
                }
                chart.update();
            });

            if (useInteractiveGuideline) {
                interactiveLayer.dispatch.on('elementMousemove', function(e) {
                    if (e.pointXValue == undefined) return;

                    var singlePoint, pointIndex, pointXLocation, xValue, allData = [];
                    data
                        .filter(function(series, i) {
                            series.seriesIndex = i;
                            return !series.disabled;
                        })
                        .forEach(function(series,i) {
                            pointIndex = x.domain().indexOf(e.pointXValue)

                            var point = series.values[pointIndex];
                            if (point === undefined) return;

                            xValue = point.x;
                            if (singlePoint === undefined) singlePoint = point;
                            if (pointXLocation === undefined) pointXLocation = e.mouseX
                            allData.push({
                                key: series.key,
                                value: chart.y()(point, pointIndex),
                                color: color(series,series.seriesIndex),
                                data: series.values[pointIndex]
                            });
                        });

                    interactiveLayer.tooltip
                        .data({
                            value: xValue,
                            index: pointIndex,
                            series: allData
                        })();

                    interactiveLayer.renderGuideLine(pointXLocation);
                });

                interactiveLayer.dispatch.on("elementMouseout",function(e) {
                    interactiveLayer.tooltip.hidden(true);
                });
            }
            else {
                multibar.dispatch.on('elementMouseover.tooltip', function(evt) {
                    evt.value = chart.x()(evt.data);
                    evt['series'] = {
                        key: evt.data.key,
                        value: chart.y()(evt.data),
                        color: evt.color
                    };
                    tooltip.data(evt).hidden(false);
                });

                multibar.dispatch.on('elementMouseout.tooltip', function(evt) {
                    tooltip.hidden(true);
                });

                multibar.dispatch.on('elementMousemove.tooltip', function(evt) {
                    tooltip();
                });
            }
        });

        renderWatch.renderEnd('multibarchart immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.multibar = multibar;
    chart.legend = legend;
    chart.controls = controls;
    chart.xAxis = xAxis;
    chart.yAxis = yAxis;
    chart.state = state;
    chart.tooltip = tooltip;
    chart.interactiveLayer = interactiveLayer;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        showControls: {get: function(){return showControls;}, set: function(_){showControls=_;}},
        controlLabels: {get: function(){return controlLabels;}, set: function(_){controlLabels=_;}},
        showXAxis:      {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis:    {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        defaultState:    {get: function(){return defaultState;}, set: function(_){defaultState=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},
        reduceXTicks:    {get: function(){return reduceXTicks;}, set: function(_){reduceXTicks=_;}},
        rotateLabels:    {get: function(){return rotateLabels;}, set: function(_){rotateLabels=_;}},
        staggerLabels:    {get: function(){return staggerLabels;}, set: function(_){staggerLabels=_;}},
        wrapLabels:   {get: function(){return wrapLabels;}, set: function(_){wrapLabels=!!_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            multibar.duration(duration);
            xAxis.duration(duration);
            yAxis.duration(duration);
            renderWatch.reset(duration);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            legend.color(color);
        }},
        rightAlignYAxis: {get: function(){return rightAlignYAxis;}, set: function(_){
            rightAlignYAxis = _;
            yAxis.orient( rightAlignYAxis ? 'right' : 'left');
        }},
        useInteractiveGuideline: {get: function(){return useInteractiveGuideline;}, set: function(_){
            useInteractiveGuideline = _;
        }},
        barColor:  {get: function(){return multibar.barColor;}, set: function(_){
            multibar.barColor(_);
            legend.color(function(d,i) {return d3.rgb('#ccc').darker(i * 1.5).toString();})
        }}
    });

    nv.utils.inheritOptions(chart, multibar);
    nv.utils.initOptions(chart);

    return chart;
};

nv.models.multiBarHorizontal = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = 960
        , height = 500
        , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
        , container = null
        , x = d3.scale.ordinal()
        , y = d3.scale.linear()
        , getX = function(d) { return d.x }
        , getY = function(d) { return d.y }
        , getYerr = function(d) { return d.yErr }
        , forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
        , color = nv.utils.defaultColor()
        , barColor = null // adding the ability to set the color for each rather than the whole group
        , disabled // used in conjunction with barColor to communicate from multiBarHorizontalChart what series are disabled
        , stacked = false
        , showValues = false
        , showBarLabels = false
        , valuePadding = 60
        , groupSpacing = 0.1
        , fillOpacity = 0.75
        , valueFormat = d3.format(',.2f')
        , delay = 1200
        , xDomain
        , yDomain
        , xRange
        , yRange
        , duration = 250
        , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'elementMousemove', 'renderEnd')
        ;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var x0, y0; //used to store previous scales
    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom;

            container = d3.select(this);
            nv.utils.initSVG(container);

            if (stacked)
                data = d3.layout.stack()
                    .offset('zero')
                    .values(function(d){ return d.values })
                    .y(getY)
                (data);

            //add series index and key to each data point for reference
            data.forEach(function(series, i) {
                series.values.forEach(function(point) {
                    point.series = i;
                    point.key = series.key;
                });
            });

            // HACK for negative value stacking
            if (stacked)
                data[0].values.map(function(d,i) {
                    var posBase = 0, negBase = 0;
                    data.map(function(d) {
                        var f = d.values[i]
                        f.size = Math.abs(f.y);
                        if (f.y<0)  {
                            f.y1 = negBase - f.size;
                            negBase = negBase - f.size;
                        } else
                        {
                            f.y1 = posBase;
                            posBase = posBase + f.size;
                        }
                    });
                });

            // Setup Scales
            // remap and flatten the data for use in calculating the scales' domains
            var seriesData = (xDomain && yDomain) ? [] : // if we know xDomain and yDomain, no need to calculate
                data.map(function(d) {
                    return d.values.map(function(d,i) {
                        return { x: getX(d,i), y: getY(d,i), y0: d.y0, y1: d.y1 }
                    })
                });

            x.domain(xDomain || d3.merge(seriesData).map(function(d) { return d.x }))
                .rangeBands(xRange || [0, availableHeight], groupSpacing);

            y.domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) { return stacked ? (d.y > 0 ? d.y1 + d.y : d.y1 ) : d.y }).concat(forceY)))

            if (showValues && !stacked)
                y.range(yRange || [(y.domain()[0] < 0 ? valuePadding : 0), availableWidth - (y.domain()[1] > 0 ? valuePadding : 0) ]);
            else
                y.range(yRange || [0, availableWidth]);

            x0 = x0 || x;
            y0 = y0 || d3.scale.linear().domain(y.domain()).range([y(0),y(0)]);

            // Setup containers and skeleton of chart
            var wrap = d3.select(this).selectAll('g.nv-wrap.nv-multibarHorizontal').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multibarHorizontal');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-groups');
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            var groups = wrap.select('.nv-groups').selectAll('.nv-group')
                .data(function(d) { return d }, function(d,i) { return i });
            groups.enter().append('g')
                .style('stroke-opacity', 1e-6)
                .style('fill-opacity', 1e-6);
            groups.exit().watchTransition(renderWatch, 'multibarhorizontal: exit groups')
                .style('stroke-opacity', 1e-6)
                .style('fill-opacity', 1e-6)
                .remove();
            groups
                .attr('class', function(d,i) { return 'nv-group nv-series-' + i })
                .classed('hover', function(d) { return d.hover })
                .style('fill', function(d,i){ return color(d, i) })
                .style('stroke', function(d,i){ return color(d, i) });
            groups.watchTransition(renderWatch, 'multibarhorizontal: groups')
                .style('stroke-opacity', 1)
                .style('fill-opacity', fillOpacity);

            var bars = groups.selectAll('g.nv-bar')
                .data(function(d) { return d.values });
            bars.exit().remove();

            var barsEnter = bars.enter().append('g')
                .attr('transform', function(d,i,j) {
                    return 'translate(' + y0(stacked ? d.y0 : 0) + ',' + (stacked ? 0 : (j * x.rangeBand() / data.length ) + x(getX(d,i))) + ')'
                });

            barsEnter.append('rect')
                .attr('width', 0)
                .attr('height', x.rangeBand() / (stacked ? 1 : data.length) )

            bars
                .on('mouseover', function(d,i) { //TODO: figure out why j works above, but not here
                    d3.select(this).classed('hover', true);
                    dispatch.elementMouseover({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('mouseout', function(d,i) {
                    d3.select(this).classed('hover', false);
                    dispatch.elementMouseout({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('mouseout', function(d,i) {
                    dispatch.elementMouseout({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('mousemove', function(d,i) {
                    dispatch.elementMousemove({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                })
                .on('click', function(d,i) {
                    var element = this;
                    dispatch.elementClick({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill"),
                        event: d3.event,
                        element: element
                    });
                    d3.event.stopPropagation();
                })
                .on('dblclick', function(d,i) {
                    dispatch.elementDblClick({
                        data: d,
                        index: i,
                        color: d3.select(this).style("fill")
                    });
                    d3.event.stopPropagation();
                });

            if (getYerr(data[0],0)) {
                barsEnter.append('polyline');

                bars.select('polyline')
                    .attr('fill', 'none')
                    .attr('points', function(d,i) {
                        var xerr = getYerr(d,i)
                            , mid = 0.8 * x.rangeBand() / ((stacked ? 1 : data.length) * 2);
                        xerr = xerr.length ? xerr : [-Math.abs(xerr), Math.abs(xerr)];
                        xerr = xerr.map(function(e) { return y(e) - y(0); });
                        var a = [[xerr[0],-mid], [xerr[0],mid], [xerr[0],0], [xerr[1],0], [xerr[1],-mid], [xerr[1],mid]];
                        return a.map(function (path) { return path.join(',') }).join(' ');
                    })
                    .attr('transform', function(d,i) {
                        var mid = x.rangeBand() / ((stacked ? 1 : data.length) * 2);
                        return 'translate(' + (getY(d,i) < 0 ? 0 : y(getY(d,i)) - y(0)) + ', ' + mid + ')'
                    });
            }

            barsEnter.append('text');

            if (showValues && !stacked) {
                bars.select('text')
                    .attr('text-anchor', function(d,i) { return getY(d,i) < 0 ? 'end' : 'start' })
                    .attr('y', x.rangeBand() / (data.length * 2))
                    .attr('dy', '.32em')
                    .text(function(d,i) {
                        var t = valueFormat(getY(d,i))
                            , yerr = getYerr(d,i);
                        if (yerr === undefined)
                            return t;
                        if (!yerr.length)
                            return t + '±' + valueFormat(Math.abs(yerr));
                        return t + '+' + valueFormat(Math.abs(yerr[1])) + '-' + valueFormat(Math.abs(yerr[0]));
                    });
                bars.watchTransition(renderWatch, 'multibarhorizontal: bars')
                    .select('text')
                    .attr('x', function(d,i) { return getY(d,i) < 0 ? -4 : y(getY(d,i)) - y(0) + 4 })
            } else {
                bars.selectAll('text').text('');
            }

            if (showBarLabels && !stacked) {
                barsEnter.append('text').classed('nv-bar-label',true);
                bars.select('text.nv-bar-label')
                    .attr('text-anchor', function(d,i) { return getY(d,i) < 0 ? 'start' : 'end' })
                    .attr('y', x.rangeBand() / (data.length * 2))
                    .attr('dy', '.32em')
                    .text(function(d,i) { return getX(d,i) });
                bars.watchTransition(renderWatch, 'multibarhorizontal: bars')
                    .select('text.nv-bar-label')
                    .attr('x', function(d,i) { return getY(d,i) < 0 ? y(0) - y(getY(d,i)) + 4 : -4 });
            }
            else {
                bars.selectAll('text.nv-bar-label').text('');
            }

            bars
                .attr('class', function(d,i) { return getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive'})

            if (barColor) {
                if (!disabled) disabled = data.map(function() { return true });
                bars
                    .style('fill', function(d,i,j) { return d3.rgb(barColor(d,i)).darker(  disabled.map(function(d,i) { return i }).filter(function(d,i){ return !disabled[i]  })[j]   ).toString(); })
                    .style('stroke', function(d,i,j) { return d3.rgb(barColor(d,i)).darker(  disabled.map(function(d,i) { return i }).filter(function(d,i){ return !disabled[i]  })[j]   ).toString(); });
            }

            if (stacked)
                bars.watchTransition(renderWatch, 'multibarhorizontal: bars')
                    .attr('transform', function(d,i) {
                        return 'translate(' + y(d.y1) + ',' + x(getX(d,i)) + ')'
                    })
                    .select('rect')
                    .attr('width', function(d,i) {
                        return Math.abs(y(getY(d,i) + d.y0) - y(d.y0)) || 0
                    })
                    .attr('height', x.rangeBand() );
            else
                bars.watchTransition(renderWatch, 'multibarhorizontal: bars')
                    .attr('transform', function(d,i) {
                        //TODO: stacked must be all positive or all negative, not both?
                        return 'translate(' +
                            (getY(d,i) < 0 ? y(getY(d,i)) : y(0))
                            + ',' +
                            (d.series * x.rangeBand() / data.length
                                +
                                x(getX(d,i)) )
                            + ')'
                    })
                    .select('rect')
                    .attr('height', x.rangeBand() / data.length )
                    .attr('width', function(d,i) {
                        return Math.max(Math.abs(y(getY(d,i)) - y(0)),1) || 0
                    });

            //store old scales for use in transitions on update
            x0 = x.copy();
            y0 = y.copy();

        });

        renderWatch.renderEnd('multibarHorizontal immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:   {get: function(){return width;}, set: function(_){width=_;}},
        height:  {get: function(){return height;}, set: function(_){height=_;}},
        x:       {get: function(){return getX;}, set: function(_){getX=_;}},
        y:       {get: function(){return getY;}, set: function(_){getY=_;}},
        yErr:       {get: function(){return getYerr;}, set: function(_){getYerr=_;}},
        xScale:  {get: function(){return x;}, set: function(_){x=_;}},
        yScale:  {get: function(){return y;}, set: function(_){y=_;}},
        xDomain: {get: function(){return xDomain;}, set: function(_){xDomain=_;}},
        yDomain: {get: function(){return yDomain;}, set: function(_){yDomain=_;}},
        xRange:  {get: function(){return xRange;}, set: function(_){xRange=_;}},
        yRange:  {get: function(){return yRange;}, set: function(_){yRange=_;}},
        forceY:  {get: function(){return forceY;}, set: function(_){forceY=_;}},
        stacked: {get: function(){return stacked;}, set: function(_){stacked=_;}},
        showValues: {get: function(){return showValues;}, set: function(_){showValues=_;}},
        // this shows the group name, seems pointless?
        //showBarLabels:    {get: function(){return showBarLabels;}, set: function(_){showBarLabels=_;}},
        disabled:     {get: function(){return disabled;}, set: function(_){disabled=_;}},
        id:           {get: function(){return id;}, set: function(_){id=_;}},
        valueFormat:  {get: function(){return valueFormat;}, set: function(_){valueFormat=_;}},
        valuePadding: {get: function(){return valuePadding;}, set: function(_){valuePadding=_;}},
        groupSpacing: {get: function(){return groupSpacing;}, set: function(_){groupSpacing=_;}},
        fillOpacity:  {get: function(){return fillOpacity;}, set: function(_){fillOpacity=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }},
        barColor:  {get: function(){return barColor;}, set: function(_){
            barColor = _ ? nv.utils.getColor(_) : null;
        }}
    });

    nv.utils.initOptions(chart);

    return chart;
};

nv.models.multiBarHorizontalChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var multibar = nv.models.multiBarHorizontal()
        , xAxis = nv.models.axis()
        , yAxis = nv.models.axis()
        , legend = nv.models.legend().height(30)
        , controls = nv.models.legend().height(30)
        , tooltip = nv.models.tooltip()
        ;

    var margin = {top: 30, right: 20, bottom: 50, left: 60}
        , width = null
        , height = null
        , color = nv.utils.defaultColor()
        , showControls = true
        , controlLabels = {}
        , showLegend = true
        , showXAxis = true
        , showYAxis = true
        , stacked = false
        , x //can be accessed via chart.xScale()
        , y //can be accessed via chart.yScale()
        , state = nv.utils.state()
        , defaultState = null
        , noData = null
        , dispatch = d3.dispatch('stateChange', 'changeState','renderEnd')
        , controlWidth = function() { return showControls ? 180 : 0 }
        , duration = 250
        ;

    state.stacked = false; // DEPRECATED Maintained for backward compatibility

    multibar.stacked(stacked);

    xAxis
        .orient('left')
        .tickPadding(5)
        .showMaxMin(false)
        .tickFormat(function(d) { return d })
    ;
    yAxis
        .orient('bottom')
        .tickFormat(d3.format(',.1f'))
    ;

    tooltip
        .duration(0)
        .valueFormatter(function(d, i) {
            return yAxis.tickFormat()(d, i);
        })
        .headerFormatter(function(d, i) {
            return xAxis.tickFormat()(d, i);
        });

    controls.updateState(false);

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var stateGetter = function(data) {
        return function(){
            return {
                active: data.map(function(d) { return !d.disabled }),
                stacked: stacked
            };
        }
    };

    var stateSetter = function(data) {
        return function(state) {
            if (state.stacked !== undefined)
                stacked = state.stacked;
            if (state.active !== undefined)
                data.forEach(function(series,i) {
                    series.disabled = !state.active[i];
                });
        }
    };

    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(multibar);
        if (showXAxis) renderWatch.models(xAxis);
        if (showYAxis) renderWatch.models(yAxis);

        selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            chart.update = function() { container.transition().duration(duration).call(chart) };
            chart.container = this;

            stacked = multibar.stacked();

            state
                .setter(stateSetter(data), chart.update)
                .getter(stateGetter(data))
                .update();

            // DEPRECATED set state.disableddisabled
            state.disabled = data.map(function(d) { return !!d.disabled });

            if (!defaultState) {
                var key;
                defaultState = {};
                for (key in state) {
                    if (state[key] instanceof Array)
                        defaultState[key] = state[key].slice(0);
                    else
                        defaultState[key] = state[key];
                }
            }

            // Display No Data message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
                nv.utils.noData(chart, container)
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            // Setup Scales
            x = multibar.xScale();
            y = multibar.yScale().clamp(true);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-multiBarHorizontalChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarHorizontalChart').append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis')
                .append('g').attr('class', 'nv-zeroLine')
                .append('line');
            gEnter.append('g').attr('class', 'nv-barsWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-controlsWrap');

            // Legend
            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                legend.width(availableWidth - controlWidth());

                g.select('.nv-legendWrap')
                    .datum(data)
                    .call(legend);

                if (legend.height() > margin.top) {
                    margin.top = legend.height();
                    availableHeight = nv.utils.availableHeight(height, container, margin);
                }

                g.select('.nv-legendWrap')
                    .attr('transform', 'translate(' + controlWidth() + ',' + (-margin.top) +')');
            }

            // Controls
            if (!showControls) {
                 g.select('.nv-controlsWrap').selectAll('*').remove();
            } else {
                var controlsData = [
                    { key: controlLabels.grouped || 'Grouped', disabled: multibar.stacked() },
                    { key: controlLabels.stacked || 'Stacked', disabled: !multibar.stacked() }
                ];

                controls.width(controlWidth()).color(['#444', '#444', '#444']);
                g.select('.nv-controlsWrap')
                    .datum(controlsData)
                    .attr('transform', 'translate(0,' + (-margin.top) +')')
                    .call(controls);
            }

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            // Main Chart Component(s)
            multibar
                .disabled(data.map(function(series) { return series.disabled }))
                .width(availableWidth)
                .height(availableHeight)
                .color(data.map(function(d,i) {
                    return d.color || color(d, i);
                }).filter(function(d,i) { return !data[i].disabled }));

            var barsWrap = g.select('.nv-barsWrap')
                .datum(data.filter(function(d) { return !d.disabled }));

            barsWrap.transition().call(multibar);

            // Setup Axes
            if (showXAxis) {
                xAxis
                    .scale(x)
                    ._ticks( nv.utils.calcTicksY(availableHeight/24, data) )
                    .tickSize(-availableWidth, 0);

                g.select('.nv-x.nv-axis').call(xAxis);

                var xTicks = g.select('.nv-x.nv-axis').selectAll('g');

                xTicks
                    .selectAll('line, text');
            }

            if (showYAxis) {
                yAxis
                    .scale(y)
                    ._ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize( -availableHeight, 0);

                g.select('.nv-y.nv-axis')
                    .attr('transform', 'translate(0,' + availableHeight + ')');
                g.select('.nv-y.nv-axis').call(yAxis);
            }

            // Zero line
            g.select(".nv-zeroLine line")
                .attr("x1", y(0))
                .attr("x2", y(0))
                .attr("y1", 0)
                .attr("y2", -availableHeight)
            ;

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            legend.dispatch.on('stateChange', function(newState) {
                for (var key in newState)
                    state[key] = newState[key];
                dispatch.stateChange(state);
                chart.update();
            });

            controls.dispatch.on('legendClick', function(d,i) {
                if (!d.disabled) return;
                controlsData = controlsData.map(function(s) {
                    s.disabled = true;
                    return s;
                });
                d.disabled = false;

                switch (d.key) {
                    case 'Grouped':
                    case controlLabels.grouped:
                        multibar.stacked(false);
                        break;
                    case 'Stacked':
                    case controlLabels.stacked:
                        multibar.stacked(true);
                        break;
                }

                state.stacked = multibar.stacked();
                dispatch.stateChange(state);
                stacked = multibar.stacked();

                chart.update();
            });

            // Update chart from a state object passed to event handler
            dispatch.on('changeState', function(e) {

                if (typeof e.disabled !== 'undefined') {
                    data.forEach(function(series,i) {
                        series.disabled = e.disabled[i];
                    });

                    state.disabled = e.disabled;
                }

                if (typeof e.stacked !== 'undefined') {
                    multibar.stacked(e.stacked);
                    state.stacked = e.stacked;
                    stacked = e.stacked;
                }

                chart.update();
            });
        });
        renderWatch.renderEnd('multibar horizontal chart immediate');
        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    multibar.dispatch.on('elementMouseover.tooltip', function(evt) {
        evt.value = chart.x()(evt.data);
        evt['series'] = {
            key: evt.data.key,
            value: chart.y()(evt.data),
            color: evt.color
        };
        tooltip.data(evt).hidden(false);
    });

    multibar.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true);
    });

    multibar.dispatch.on('elementMousemove.tooltip', function(evt) {
        tooltip();
    });

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.multibar = multibar;
    chart.legend = legend;
    chart.controls = controls;
    chart.xAxis = xAxis;
    chart.yAxis = yAxis;
    chart.state = state;
    chart.tooltip = tooltip;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        showControls: {get: function(){return showControls;}, set: function(_){showControls=_;}},
        controlLabels: {get: function(){return controlLabels;}, set: function(_){controlLabels=_;}},
        showXAxis:      {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis:    {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        defaultState:    {get: function(){return defaultState;}, set: function(_){defaultState=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            multibar.duration(duration);
            xAxis.duration(duration);
            yAxis.duration(duration);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            legend.color(color);
        }},
        barColor:  {get: function(){return multibar.barColor;}, set: function(_){
            multibar.barColor(_);
            legend.color(function(d,i) {return d3.rgb('#ccc').darker(i * 1.5).toString();})
        }}
    });

    nv.utils.inheritOptions(chart, multibar);
    nv.utils.initOptions(chart);

    return chart;
};
nv.models.multiChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 30, right: 20, bottom: 50, left: 60},
        color = nv.utils.defaultColor(),
        width = null,
        height = null,
        showLegend = true,
        noData = null,
        yDomain1,
        yDomain2,
        getX = function(d) { return d.x },
        getY = function(d) { return d.y},
        interpolate = 'linear',
        useVoronoi = true,
        interactiveLayer = nv.interactiveGuideline(),
        useInteractiveGuideline = false,
        legendRightAxisHint = ' (right axis)'
        ;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var x = d3.scale.linear(),
        yScale1 = d3.scale.linear(),
        yScale2 = d3.scale.linear(),

        lines1 = nv.models.line().yScale(yScale1),
        lines2 = nv.models.line().yScale(yScale2),

        scatters1 = nv.models.scatter().yScale(yScale1),
        scatters2 = nv.models.scatter().yScale(yScale2),

        bars1 = nv.models.multiBar().stacked(false).yScale(yScale1),
        bars2 = nv.models.multiBar().stacked(false).yScale(yScale2),

        stack1 = nv.models.stackedArea().yScale(yScale1),
        stack2 = nv.models.stackedArea().yScale(yScale2),

        xAxis = nv.models.axis().scale(x).orient('bottom').tickPadding(5),
        yAxis1 = nv.models.axis().scale(yScale1).orient('left'),
        yAxis2 = nv.models.axis().scale(yScale2).orient('right'),

        legend = nv.models.legend().height(30),
        tooltip = nv.models.tooltip(),
        dispatch = d3.dispatch();

    var charts = [lines1, lines2, scatters1, scatters2, bars1, bars2, stack1, stack2];

    function chart(selection) {
        selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);

            chart.update = function() { container.transition().call(chart); };
            chart.container = this;

            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            var dataLines1 = data.filter(function(d) {return d.type == 'line' && d.yAxis == 1});
            var dataLines2 = data.filter(function(d) {return d.type == 'line' && d.yAxis == 2});
            var dataScatters1 = data.filter(function(d) {return d.type == 'scatter' && d.yAxis == 1});
            var dataScatters2 = data.filter(function(d) {return d.type == 'scatter' && d.yAxis == 2});
            var dataBars1 =  data.filter(function(d) {return d.type == 'bar'  && d.yAxis == 1});
            var dataBars2 =  data.filter(function(d) {return d.type == 'bar'  && d.yAxis == 2});
            var dataStack1 = data.filter(function(d) {return d.type == 'area' && d.yAxis == 1});
            var dataStack2 = data.filter(function(d) {return d.type == 'area' && d.yAxis == 2});

            // Display noData message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
                nv.utils.noData(chart, container);
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            var series1 = data.filter(function(d) {return !d.disabled && d.yAxis == 1})
                .map(function(d) {
                    return d.values.map(function(d,i) {
                        return { x: getX(d), y: getY(d) }
                    })
                });

            var series2 = data.filter(function(d) {return !d.disabled && d.yAxis == 2})
                .map(function(d) {
                    return d.values.map(function(d,i) {
                        return { x: getX(d), y: getY(d) }
                    })
                });

            x   .domain(d3.extent(d3.merge(series1.concat(series2)), function(d) { return d.x }))
                .range([0, availableWidth]);

            var wrap = container.selectAll('g.wrap.multiChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'wrap nvd3 multiChart').append('g');

            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y1 nv-axis');
            gEnter.append('g').attr('class', 'nv-y2 nv-axis');
            gEnter.append('g').attr('class', 'stack1Wrap');
            gEnter.append('g').attr('class', 'stack2Wrap');
            gEnter.append('g').attr('class', 'bars1Wrap');
            gEnter.append('g').attr('class', 'bars2Wrap');
            gEnter.append('g').attr('class', 'scatters1Wrap');
            gEnter.append('g').attr('class', 'scatters2Wrap');
            gEnter.append('g').attr('class', 'lines1Wrap');
            gEnter.append('g').attr('class', 'lines2Wrap');
            gEnter.append('g').attr('class', 'legendWrap');
            gEnter.append('g').attr('class', 'nv-interactive');

            var g = wrap.select('g');

            var color_array = data.map(function(d,i) {
                return data[i].color || color(d, i);
            });

            // Legend
            if (!showLegend) {
                g.select('.legendWrap').selectAll('*').remove();
            } else {
                var legendWidth = legend.align() ? availableWidth / 2 : availableWidth;
                var legendXPosition = legend.align() ? legendWidth : 0;

                legend.width(legendWidth);
                legend.color(color_array);

                g.select('.legendWrap')
                    .datum(data.map(function(series) {
                        series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
                        series.key = series.originalKey + (series.yAxis == 1 ? '' : legendRightAxisHint);
                        return series;
                    }))
                    .call(legend);

                if (legend.height() > margin.top) {
                    margin.top = legend.height();
                    availableHeight = nv.utils.availableHeight(height, container, margin);
                }

                g.select('.legendWrap')
                    .attr('transform', 'translate(' + legendXPosition + ',' + (-margin.top) +')');
            }

            lines1
                .width(availableWidth)
                .height(availableHeight)
                .interpolate(interpolate)
                .color(color_array.filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'line'}));
            lines2
                .width(availableWidth)
                .height(availableHeight)
                .interpolate(interpolate)
                .color(color_array.filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'line'}));
            scatters1
                .width(availableWidth)
                .height(availableHeight)
                .color(color_array.filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'scatter'}));
            scatters2
                .width(availableWidth)
                .height(availableHeight)
                .color(color_array.filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'scatter'}));
            bars1
                .width(availableWidth)
                .height(availableHeight)
                .color(color_array.filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'bar'}));
            bars2
                .width(availableWidth)
                .height(availableHeight)
                .color(color_array.filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'bar'}));
            stack1
                .width(availableWidth)
                .height(availableHeight)
                .interpolate(interpolate)
                .color(color_array.filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'area'}));
            stack2
                .width(availableWidth)
                .height(availableHeight)
                .interpolate(interpolate)
                .color(color_array.filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'area'}));

            g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            var lines1Wrap = g.select('.lines1Wrap')
                .datum(dataLines1.filter(function(d){return !d.disabled}));
            var scatters1Wrap = g.select('.scatters1Wrap')
                .datum(dataScatters1.filter(function(d){return !d.disabled}));
            var bars1Wrap = g.select('.bars1Wrap')
                .datum(dataBars1.filter(function(d){return !d.disabled}));
            var stack1Wrap = g.select('.stack1Wrap')
                .datum(dataStack1.filter(function(d){return !d.disabled}));
            var lines2Wrap = g.select('.lines2Wrap')
                .datum(dataLines2.filter(function(d){return !d.disabled}));
            var scatters2Wrap = g.select('.scatters2Wrap')
                .datum(dataScatters2.filter(function(d){return !d.disabled}));
            var bars2Wrap = g.select('.bars2Wrap')
                .datum(dataBars2.filter(function(d){return !d.disabled}));
            var stack2Wrap = g.select('.stack2Wrap')
                .datum(dataStack2.filter(function(d){return !d.disabled}));

            var extraValue1 = dataStack1.length ? dataStack1.map(function(a){return a.values}).reduce(function(a,b){
                return a.map(function(aVal,i){return {x: aVal.x, y: aVal.y + b[i].y}})
            }).concat([{x:0, y:0}]) : [];
            var extraValue2 = dataStack2.length ? dataStack2.map(function(a){return a.values}).reduce(function(a,b){
                return a.map(function(aVal,i){return {x: aVal.x, y: aVal.y + b[i].y}})
            }).concat([{x:0, y:0}]) : [];

            yScale1 .domain(yDomain1 || d3.extent(d3.merge(series1).concat(extraValue1), function(d) { return d.y } ))
                .range([0, availableHeight]);

            yScale2 .domain(yDomain2 || d3.extent(d3.merge(series2).concat(extraValue2), function(d) { return d.y } ))
                .range([0, availableHeight]);

            lines1.yDomain(yScale1.domain());
            scatters1.yDomain(yScale1.domain());
            bars1.yDomain(yScale1.domain());
            stack1.yDomain(yScale1.domain());

            lines2.yDomain(yScale2.domain());
            scatters2.yDomain(yScale2.domain());
            bars2.yDomain(yScale2.domain());
            stack2.yDomain(yScale2.domain());

            if(dataStack1.length){d3.transition(stack1Wrap).call(stack1);}
            if(dataStack2.length){d3.transition(stack2Wrap).call(stack2);}

            if(dataBars1.length){d3.transition(bars1Wrap).call(bars1);}
            if(dataBars2.length){d3.transition(bars2Wrap).call(bars2);}

            if(dataLines1.length){d3.transition(lines1Wrap).call(lines1);}
            if(dataLines2.length){d3.transition(lines2Wrap).call(lines2);}

            if(dataScatters1.length){d3.transition(scatters1Wrap).call(scatters1);}
            if(dataScatters2.length){d3.transition(scatters2Wrap).call(scatters2);}

            xAxis
                ._ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                .tickSize(-availableHeight, 0);

            g.select('.nv-x.nv-axis')
                .attr('transform', 'translate(0,' + availableHeight + ')');
            d3.transition(g.select('.nv-x.nv-axis'))
                .call(xAxis);

            yAxis1
                ._ticks( nv.utils.calcTicksY(availableHeight/36, data) )
                .tickSize( -availableWidth, 0);


            d3.transition(g.select('.nv-y1.nv-axis'))
                .call(yAxis1);

            yAxis2
                ._ticks( nv.utils.calcTicksY(availableHeight/36, data) )
                .tickSize( -availableWidth, 0);

            d3.transition(g.select('.nv-y2.nv-axis'))
                .call(yAxis2);

            g.select('.nv-y1.nv-axis')
                .classed('nv-disabled', series1.length ? false : true)
                .attr('transform', 'translate(' + x.range()[0] + ',0)');

            g.select('.nv-y2.nv-axis')
                .classed('nv-disabled', series2.length ? false : true)
                .attr('transform', 'translate(' + x.range()[1] + ',0)');

            legend.dispatch.on('stateChange', function(newState) {
                chart.update();
            });

            if(useInteractiveGuideline){
                interactiveLayer
                    .width(availableWidth)
                    .height(availableHeight)
                    .margin({left:margin.left, top:margin.top})
                    .svgContainer(container)
                    .xScale(x);
                wrap.select(".nv-interactive").call(interactiveLayer);
            }

            //============================================================
            // Event Handling/Dispatching
            //------------------------------------------------------------

            function mouseover_line(evt) {
                var yaxis = data[evt.seriesIndex].yAxis === 2 ? yAxis2 : yAxis1;
                evt.value = evt.point.x;
                evt.series = {
                    value: evt.point.y,
                    color: evt.point.color,
                    key: evt.series.key
                };
                tooltip
                    .duration(0)
                    .headerFormatter(function(d, i) {
                    	return xAxis.tickFormat()(d, i);
                    })
                    .valueFormatter(function(d, i) {
                        return yaxis.tickFormat()(d, i);
                    })
                    .data(evt)
                    .hidden(false);
            }

            function mouseover_scatter(evt) {
                var yaxis = data[evt.seriesIndex].yAxis === 2 ? yAxis2 : yAxis1;
                evt.value = evt.point.x;
                evt.series = {
                    value: evt.point.y,
                    color: evt.point.color,
                    key: evt.series.key
                };
                tooltip
                    .duration(100)
                    .headerFormatter(function(d, i) {
                    	return xAxis.tickFormat()(d, i);
                    })
                    .valueFormatter(function(d, i) {
                        return yaxis.tickFormat()(d, i);
                    })
                    .data(evt)
                    .hidden(false);
            }

            function mouseover_stack(evt) {
                var yaxis = data[evt.seriesIndex].yAxis === 2 ? yAxis2 : yAxis1;
                evt.point['x'] = stack1.x()(evt.point);
                evt.point['y'] = stack1.y()(evt.point);
                tooltip
                    .duration(0)
                    .headerFormatter(function(d, i) {
                    	return xAxis.tickFormat()(d, i);
                    })
                    .valueFormatter(function(d, i) {
                        return yaxis.tickFormat()(d, i);
                    })
                    .data(evt)
                    .hidden(false);
            }

            function mouseover_bar(evt) {
                var yaxis = data[evt.data.series].yAxis === 2 ? yAxis2 : yAxis1;

                evt.value = bars1.x()(evt.data);
                evt['series'] = {
                    value: bars1.y()(evt.data),
                    color: evt.color,
                    key: evt.data.key
                };
                tooltip
                    .duration(0)
                    .headerFormatter(function(d, i) {
                    	return xAxis.tickFormat()(d, i);
                    })
                    .valueFormatter(function(d, i) {
                        return yaxis.tickFormat()(d, i);
                    })
                    .data(evt)
                    .hidden(false);
            }



            function clearHighlights() {
              for(var i=0, il=charts.length; i < il; i++){
                var chart = charts[i];
                try {
                  chart.clearHighlights();
                } catch(e){}
              }
            }

            function highlightPoint(serieIndex, pointIndex, b){
              for(var i=0, il=charts.length; i < il; i++){
                var chart = charts[i];
                try {
                  chart.highlightPoint(serieIndex, pointIndex, b);
                } catch(e){}
              }
            }

            if(useInteractiveGuideline){
                interactiveLayer.dispatch.on('elementMousemove', function(e) {
                    clearHighlights();
                    var singlePoint, pointIndex, pointXLocation, allData = [];
                    data
                    .filter(function(series, i) {
                        series.seriesIndex = i;
                        return !series.disabled;
                    })
                    .forEach(function(series,i) {
                        var extent = x.domain();
                        var currentValues = series.values.filter(function(d,i) {
                            return chart.x()(d,i) >= extent[0] && chart.x()(d,i) <= extent[1];
                        });

                        pointIndex = nv.interactiveBisect(currentValues, e.pointXValue, chart.x());
                        var point = currentValues[pointIndex];
                        var pointYValue = chart.y()(point, pointIndex);
                        if (pointYValue !== null) {
                            highlightPoint(i, pointIndex, true);
                        }
                        if (point === undefined) return;
                        if (singlePoint === undefined) singlePoint = point;
                        if (pointXLocation === undefined) pointXLocation = x(chart.x()(point,pointIndex));
                        allData.push({
                            key: series.key,
                            value: pointYValue,
                            color: color(series,series.seriesIndex),
                            data: point,
                            yAxis: series.yAxis == 2 ? yAxis2 : yAxis1
                        });
                    });

                    var defaultValueFormatter = function(d,i) {
                        var yAxis = allData[i].yAxis;
                        return d == null ? "N/A" : yAxis.tickFormat()(d);
                    };

                    interactiveLayer.tooltip
                        .headerFormatter(function(d, i) {
                            return xAxis.tickFormat()(d, i);
                        })
                        .valueFormatter(interactiveLayer.tooltip.valueFormatter() || defaultValueFormatter)
                        .data({
                            value: chart.x()( singlePoint,pointIndex ),
                            index: pointIndex,
                            series: allData
                        })();

                    interactiveLayer.renderGuideLine(pointXLocation);
                });

                interactiveLayer.dispatch.on("elementMouseout",function(e) {
                    clearHighlights();
                });
            } else {
                lines1.dispatch.on('elementMouseover.tooltip', mouseover_line);
                lines2.dispatch.on('elementMouseover.tooltip', mouseover_line);
                lines1.dispatch.on('elementMouseout.tooltip', function(evt) {
                    tooltip.hidden(true)
                });
                lines2.dispatch.on('elementMouseout.tooltip', function(evt) {
                    tooltip.hidden(true)
                });

                scatters1.dispatch.on('elementMouseover.tooltip', mouseover_scatter);
                scatters2.dispatch.on('elementMouseover.tooltip', mouseover_scatter);
                scatters1.dispatch.on('elementMouseout.tooltip', function(evt) {
                    tooltip.hidden(true)
                });
                scatters2.dispatch.on('elementMouseout.tooltip', function(evt) {
                    tooltip.hidden(true)
                });

                stack1.dispatch.on('elementMouseover.tooltip', mouseover_stack);
                stack2.dispatch.on('elementMouseover.tooltip', mouseover_stack);
                stack1.dispatch.on('elementMouseout.tooltip', function(evt) {
                    tooltip.hidden(true)
                });
                stack2.dispatch.on('elementMouseout.tooltip', function(evt) {
                    tooltip.hidden(true)
                });

                bars1.dispatch.on('elementMouseover.tooltip', mouseover_bar);
                bars2.dispatch.on('elementMouseover.tooltip', mouseover_bar);

                bars1.dispatch.on('elementMouseout.tooltip', function(evt) {
                    tooltip.hidden(true);
                });
                bars2.dispatch.on('elementMouseout.tooltip', function(evt) {
                    tooltip.hidden(true);
                });
                bars1.dispatch.on('elementMousemove.tooltip', function(evt) {
                    tooltip();
                });
                bars2.dispatch.on('elementMousemove.tooltip', function(evt) {
                    tooltip();
                });
            }
        });

        return chart;
    }

    //============================================================
    // Global getters and setters
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.legend = legend;
    chart.lines1 = lines1;
    chart.lines2 = lines2;
    chart.scatters1 = scatters1;
    chart.scatters2 = scatters2;
    chart.bars1 = bars1;
    chart.bars2 = bars2;
    chart.stack1 = stack1;
    chart.stack2 = stack2;
    chart.xAxis = xAxis;
    chart.yAxis1 = yAxis1;
    chart.yAxis2 = yAxis2;
    chart.tooltip = tooltip;
    chart.interactiveLayer = interactiveLayer;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        yDomain1:      {get: function(){return yDomain1;}, set: function(_){yDomain1=_;}},
        yDomain2:    {get: function(){return yDomain2;}, set: function(_){yDomain2=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},
        interpolate:    {get: function(){return interpolate;}, set: function(_){interpolate=_;}},
        legendRightAxisHint:    {get: function(){return legendRightAxisHint;}, set: function(_){legendRightAxisHint=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }},
        x: {get: function(){return getX;}, set: function(_){
            getX = _;
            lines1.x(_);
            lines2.x(_);
            scatters1.x(_);
            scatters2.x(_);
            bars1.x(_);
            bars2.x(_);
            stack1.x(_);
            stack2.x(_);
        }},
        y: {get: function(){return getY;}, set: function(_){
            getY = _;
            lines1.y(_);
            lines2.y(_);
            scatters1.y(_);
            scatters2.y(_);
            stack1.y(_);
            stack2.y(_);
            bars1.y(_);
            bars2.y(_);
        }},
        useVoronoi: {get: function(){return useVoronoi;}, set: function(_){
            useVoronoi=_;
            lines1.useVoronoi(_);
            lines2.useVoronoi(_);
            stack1.useVoronoi(_);
            stack2.useVoronoi(_);
        }},

        useInteractiveGuideline: {get: function(){return useInteractiveGuideline;}, set: function(_){
            useInteractiveGuideline = _;
            if (useInteractiveGuideline) {
                lines1.interactive(false);
                lines1.useVoronoi(false);
                lines2.interactive(false);
                lines2.useVoronoi(false);
                stack1.interactive(false);
                stack1.useVoronoi(false);
                stack2.interactive(false);
                stack2.useVoronoi(false);
                scatters1.interactive(false);
                scatters2.interactive(false);
            }
        }}
    });

    nv.utils.initOptions(chart);

    return chart;
};

nv.models.ohlcBar = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = null
        , height = null
        , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
        , container = null
        , x = d3.scale.linear()
        , y = d3.scale.linear()
        , getX = function(d) { return d.x }
        , getY = function(d) { return d.y }
        , getOpen = function(d) { return d.open }
        , getClose = function(d) { return d.close }
        , getHigh = function(d) { return d.high }
        , getLow = function(d) { return d.low }
        , forceX = []
        , forceY = []
        , padData     = false // If true, adds half a data points width to front and back, for lining up a line chart with a bar chart
        , clipEdge = true
        , color = nv.utils.defaultColor()
        , interactive = false
        , xDomain
        , yDomain
        , xRange
        , yRange
        , dispatch = d3.dispatch('stateChange', 'changeState', 'renderEnd', 'chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'elementMousemove')
        ;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    function chart(selection) {
        selection.each(function(data) {
            container = d3.select(this);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            nv.utils.initSVG(container);

            // ohlc bar width.
            var w = (availableWidth / data[0].values.length) * .9;

            // Setup Scales
            x.domain(xDomain || d3.extent(data[0].values.map(getX).concat(forceX) ));

            if (padData)
                x.range(xRange || [availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5)  / data[0].values.length ]);
            else
                x.range(xRange || [5 + w/2, availableWidth - w/2 - 5]);

            y.domain(yDomain || [
                    d3.min(data[0].values.map(getLow).concat(forceY)),
                    d3.max(data[0].values.map(getHigh).concat(forceY))
                ]
            ).range(yRange || [availableHeight, 0]);

            // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
            if (x.domain()[0] === x.domain()[1])
                x.domain()[0] ?
                    x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
                    : x.domain([-1,1]);

            if (y.domain()[0] === y.domain()[1])
                y.domain()[0] ?
                    y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01])
                    : y.domain([-1,1]);

            // Setup containers and skeleton of chart
            var wrap = d3.select(this).selectAll('g.nv-wrap.nv-ohlcBar').data([data[0].values]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-ohlcBar');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-ticks');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            container
                .on('click', function(d,i) {
                    dispatch.chartClick({
                        data: d,
                        index: i,
                        pos: d3.event,
                        id: id
                    });
                });

            defsEnter.append('clipPath')
                .attr('id', 'nv-chart-clip-path-' + id)
                .append('rect');

            wrap.select('#nv-chart-clip-path-' + id + ' rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);

            g   .attr('clip-path', clipEdge ? 'url(#nv-chart-clip-path-' + id + ')' : '');

            var ticks = wrap.select('.nv-ticks').selectAll('.nv-tick')
                .data(function(d) { return d });
            ticks.exit().remove();

            ticks.enter().append('path')
                .attr('class', function(d,i,j) { return (getOpen(d,i) > getClose(d,i) ? 'nv-tick negative' : 'nv-tick positive') + ' nv-tick-' + j + '-' + i })
                .attr('d', function(d,i) {
                    return 'm0,0l0,'
                        + (y(getOpen(d,i))
                            - y(getHigh(d,i)))
                        + 'l'
                        + (-w/2)
                        + ',0l'
                        + (w/2)
                        + ',0l0,'
                        + (y(getLow(d,i)) - y(getOpen(d,i)))
                        + 'l0,'
                        + (y(getClose(d,i))
                            - y(getLow(d,i)))
                        + 'l'
                        + (w/2)
                        + ',0l'
                        + (-w/2)
                        + ',0z';
                })
                .attr('transform', function(d,i) { return 'translate(' + x(getX(d,i)) + ',' + y(getHigh(d,i)) + ')'; })
                .attr('fill', function(d,i) { return color[0]; })
                .attr('stroke', function(d,i) { return color[0]; })
                .attr('x', 0 )
                .attr('y', function(d,i) {  return y(Math.max(0, getY(d,i))) })
                .attr('height', function(d,i) { return Math.abs(y(getY(d,i)) - y(0)) });

            // the bar colors are controlled by CSS currently
            ticks.attr('class', function(d,i,j) {
                return (getOpen(d,i) > getClose(d,i) ? 'nv-tick negative' : 'nv-tick positive') + ' nv-tick-' + j + '-' + i;
            });

            d3.transition(ticks)
                .attr('transform', function(d,i) { return 'translate(' + x(getX(d,i)) + ',' + y(getHigh(d,i)) + ')'; })
                .attr('d', function(d,i) {
                    var w = (availableWidth / data[0].values.length) * .9;
                    return 'm0,0l0,'
                        + (y(getOpen(d,i))
                            - y(getHigh(d,i)))
                        + 'l'
                        + (-w/2)
                        + ',0l'
                        + (w/2)
                        + ',0l0,'
                        + (y(getLow(d,i))
                            - y(getOpen(d,i)))
                        + 'l0,'
                        + (y(getClose(d,i))
                            - y(getLow(d,i)))
                        + 'l'
                        + (w/2)
                        + ',0l'
                        + (-w/2)
                        + ',0z';
                });
        });

        return chart;
    }


    //Create methods to allow outside functions to highlight a specific bar.
    chart.highlightPoint = function(pointIndex, isHoverOver) {
        chart.clearHighlights();
        container.select(".nv-ohlcBar .nv-tick-0-" + pointIndex)
            .classed("hover", isHoverOver)
        ;
    };

    chart.clearHighlights = function() {
        container.select(".nv-ohlcBar .nv-tick.hover")
            .classed("hover", false)
        ;
    };

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:    {get: function(){return width;}, set: function(_){width=_;}},
        height:   {get: function(){return height;}, set: function(_){height=_;}},
        xScale:   {get: function(){return x;}, set: function(_){x=_;}},
        yScale:   {get: function(){return y;}, set: function(_){y=_;}},
        xDomain:  {get: function(){return xDomain;}, set: function(_){xDomain=_;}},
        yDomain:  {get: function(){return yDomain;}, set: function(_){yDomain=_;}},
        xRange:   {get: function(){return xRange;}, set: function(_){xRange=_;}},
        yRange:   {get: function(){return yRange;}, set: function(_){yRange=_;}},
        forceX:   {get: function(){return forceX;}, set: function(_){forceX=_;}},
        forceY:   {get: function(){return forceY;}, set: function(_){forceY=_;}},
        padData:  {get: function(){return padData;}, set: function(_){padData=_;}},
        clipEdge: {get: function(){return clipEdge;}, set: function(_){clipEdge=_;}},
        id:       {get: function(){return id;}, set: function(_){id=_;}},
        interactive: {get: function(){return interactive;}, set: function(_){interactive=_;}},

        x:     {get: function(){return getX;}, set: function(_){getX=_;}},
        y:     {get: function(){return getY;}, set: function(_){getY=_;}},
        open:  {get: function(){return getOpen();}, set: function(_){getOpen=_;}},
        close: {get: function(){return getClose();}, set: function(_){getClose=_;}},
        high:  {get: function(){return getHigh;}, set: function(_){getHigh=_;}},
        low:   {get: function(){return getLow;}, set: function(_){getLow=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    != undefined ? _.top    : margin.top;
            margin.right  = _.right  != undefined ? _.right  : margin.right;
            margin.bottom = _.bottom != undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   != undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }}
    });

    nv.utils.initOptions(chart);
    return chart;
};
// Code adapted from Jason Davies' "Parallel Coordinates"
// http://bl.ocks.org/jasondavies/1341281
nv.models.parallelCoordinates = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 30, right: 0, bottom: 10, left: 0}
        , width = null
        , height = null
        , availableWidth = null
        , availableHeight = null
        , x = d3.scale.ordinal()
        , y = {}
        , undefinedValuesLabel = "undefined values"
        , dimensionData = []
        , enabledDimensions = []
        , dimensionNames = []
        , displayBrush = true
        , color = nv.utils.defaultColor()
        , filters = []
        , active = []
        , dragging = []
        , axisWithUndefinedValues = []
        , lineTension = 1
        , foreground
        , background
        , dimensions
        , line = d3.svg.line()
        , axis = d3.svg.axis()
        , dispatch = d3.dispatch('brushstart', 'brush', 'brushEnd', 'dimensionsOrder', "stateChange", 'elementClick', 'elementMouseover', 'elementMouseout', 'elementMousemove', 'renderEnd', 'activeChanged')
        ;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch);

    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            var container = d3.select(this);
            availableWidth = nv.utils.availableWidth(width, container, margin);
            availableHeight = nv.utils.availableHeight(height, container, margin);

            nv.utils.initSVG(container);

           //Convert old data to new format (name, values)
            if (data[0].values === undefined) {
                var newData = [];
                data.forEach(function (d) {
                        var val = {};
                        var key = Object.keys(d);
                        key.forEach(function (k) { if (k !== "name") val[k] = d[k] });
                        newData.push({ key: d.name, values: val });
                });
                data = newData;
            }

            var dataValues = data.map(function (d) {return d.values});
            if (active.length === 0) {
                active = data;
            }; //set all active before first brush call
            
            dimensionNames = dimensionData.sort(function (a, b) { return a.currentPosition - b.currentPosition; }).map(function (d) { return d.key });
            enabledDimensions = dimensionData.filter(function (d) { return !d.disabled; });
            
            // Setup Scales
            x.rangePoints([0, availableWidth], 1).domain(enabledDimensions.map(function (d) { return d.key; }));

            //Set as true if all values on an axis are missing.
            // Extract the list of dimensions and create a scale for each.
            var oldDomainMaxValue = {};
            var displayMissingValuesline = false;
            var currentTicks = [];
            
            dimensionNames.forEach(function(d) {
                var extent = d3.extent(dataValues, function (p) { return +p[d]; });
                var min = extent[0];
                var max = extent[1];
                var onlyUndefinedValues = false;
                //If there is no values to display on an axis, set the extent to 0
                if (isNaN(min) || isNaN(max)) {
                    onlyUndefinedValues = true;
                    min = 0;
                    max = 0;
                }
                //Scale axis if there is only one value
                if (min === max) {
                    min = min - 1;
                    max = max + 1;
                }
                var f = filters.filter(function (k) { return k.dimension == d; });
                if (f.length !== 0) {
                    //If there is only NaN values, keep the existing domain.
                    if (onlyUndefinedValues) {
                        min = y[d].domain()[0];
                        max = y[d].domain()[1];
                    }
                        //If the brush extent is > max (< min), keep the extent value.
                    else if (!f[0].hasOnlyNaN && displayBrush) {
                        min = min > f[0].extent[0] ? f[0].extent[0] : min;
                        max = max < f[0].extent[1] ? f[0].extent[1] : max;
                    }
                        //If there is NaN values brushed be sure the brush extent is on the domain.
                    else if (f[0].hasNaN) {
                        max = max < f[0].extent[1] ? f[0].extent[1] : max;
                        oldDomainMaxValue[d] = y[d].domain()[1];
                        displayMissingValuesline = true;
                    }
                }
                //Use 90% of (availableHeight - 12) for the axis range, 12 reprensenting the space necessary to display "undefined values" text.
                //The remaining 10% are used to display the missingValue line.
                y[d] = d3.scale.linear()
                    .domain([min, max])
                    .range([(availableHeight - 12) * 0.9, 0]);

                axisWithUndefinedValues = [];
                y[d].brush = d3.svg.brush().y(y[d]).on('brushstart', brushstart).on('brush', brush).on('brushend', brushend);
            });

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-parallelCoordinates').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-parallelCoordinates');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-parallelCoordinates background');
            gEnter.append('g').attr('class', 'nv-parallelCoordinates foreground');
            gEnter.append('g').attr('class', 'nv-parallelCoordinates missingValuesline');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            line.interpolate('cardinal').tension(lineTension);
            axis.orient('left');
            var axisDrag = d3.behavior.drag()
                        .on('dragstart', dragStart)
                        .on('drag', dragMove)
                        .on('dragend', dragEnd);

            //Add missing value line at the bottom of the chart
            var missingValuesline, missingValueslineText;
            var step = x.range()[1] - x.range()[0];
            if (!isNaN(step)) {
                var lineData = [0 + step / 2, availableHeight - 12, availableWidth - step / 2, availableHeight - 12];
                missingValuesline = wrap.select('.missingValuesline').selectAll('line').data([lineData]);
                missingValuesline.enter().append('line');
                missingValuesline.exit().remove();
                missingValuesline.attr("x1", function(d) { return d[0]; })
                        .attr("y1", function(d) { return d[1]; })
                        .attr("x2", function(d) { return d[2]; })
                        .attr("y2", function(d) { return d[3]; });
    
                //Add the text "undefined values" under the missing value line
                missingValueslineText = wrap.select('.missingValuesline').selectAll('text').data([undefinedValuesLabel]);
                missingValueslineText.append('text').data([undefinedValuesLabel]);
                missingValueslineText.enter().append('text');
                missingValueslineText.exit().remove();
                missingValueslineText.attr("y", availableHeight)
                        //To have the text right align with the missingValues line, substract 92 representing the text size.
                        .attr("x", availableWidth - 92 - step / 2)
                        .text(function(d) { return d; });
            }
            // Add grey background lines for context.
            background = wrap.select('.background').selectAll('path').data(data);
            background.enter().append('path');
            background.exit().remove();
            background.attr('d', path);

            // Add blue foreground lines for focus.
            foreground = wrap.select('.foreground').selectAll('path').data(data);
            foreground.enter().append('path')
            foreground.exit().remove();
            foreground.attr('d', path)
                .style("stroke-width", function (d, i) {
                if (isNaN(d.strokeWidth)) { d.strokeWidth = 1;} return d.strokeWidth;})
                .attr('stroke', function (d, i) { return d.color || color(d, i); });
            foreground.on("mouseover", function (d, i) {
                d3.select(this).classed('hover', true).style("stroke-width", d.strokeWidth + 2 + "px").style("stroke-opacity", 1);
                dispatch.elementMouseover({
                    label: d.name,
                    color: d.color || color(d, i),
                    values: d.values,
                    dimensions: enabledDimensions
                });

            });
            foreground.on("mouseout", function (d, i) {
                d3.select(this).classed('hover', false).style("stroke-width", d.strokeWidth + "px").style("stroke-opacity", 0.7);
                dispatch.elementMouseout({
                    label: d.name,
                    index: i
                });
            });
            foreground.on('mousemove', function (d, i) {
                dispatch.elementMousemove();
            });
            foreground.on('click', function (d) {
                dispatch.elementClick({
                    id: d.id
                });
            });
            // Add a group element for each dimension.
            dimensions = g.selectAll('.dimension').data(enabledDimensions);
            var dimensionsEnter = dimensions.enter().append('g').attr('class', 'nv-parallelCoordinates dimension');

            dimensions.attr('transform', function(d) { return 'translate(' + x(d.key) + ',0)'; });
            dimensionsEnter.append('g').attr('class', 'nv-axis');

            // Add an axis and title.
            dimensionsEnter.append('text')
                .attr('class', 'nv-label')
                .style("cursor", "move")
                .attr('dy', '-1em')
                .attr('text-anchor', 'middle')
                .on("mouseover", function(d, i) {
                    dispatch.elementMouseover({
                        label: d.tooltip || d.key,
                        color: d.color 
                    });
                })
                .on("mouseout", function(d, i) {
                    dispatch.elementMouseout({
                        label: d.tooltip
                    });
                })
                .on('mousemove', function (d, i) {
                    dispatch.elementMousemove();
                })
                .call(axisDrag);

            dimensionsEnter.append('g').attr('class', 'nv-brushBackground');
            dimensions.exit().remove();
            dimensions.select('.nv-label').text(function (d) { return d.key });

            // Add and store a brush for each axis.
            restoreBrush(displayBrush);

            var actives = dimensionNames.filter(function (p) { return !y[p].brush.empty(); }),
                    extents = actives.map(function (p) { return y[p].brush.extent(); });
            var formerActive = active.slice(0);

            //Restore active values
            active = [];
            foreground.style("display", function (d) {
                var isActive = actives.every(function (p, i) {
                    if ((isNaN(d.values[p]) || isNaN(parseFloat(d.values[p]))) && extents[i][0] == y[p].brush.y().domain()[0]) {
                        return true;
                    }
                    return (extents[i][0] <= d.values[p] && d.values[p] <= extents[i][1]) && !isNaN(parseFloat(d.values[p]));
                });
                if (isActive)
                    active.push(d);
                return !isActive ? "none" : null;

            });

            if (filters.length > 0 || !nv.utils.arrayEquals(active, formerActive)) {
               dispatch.activeChanged(active);
            }

            // Returns the path for a given data point.
            function path(d) {
                return line(enabledDimensions.map(function (p) {
                    //If value if missing, put the value on the missing value line
                    if (isNaN(d.values[p.key]) || isNaN(parseFloat(d.values[p.key])) || displayMissingValuesline) {
                        var domain = y[p.key].domain();
                        var range = y[p.key].range();
                        var min = domain[0] - (domain[1] - domain[0]) / 9;

                        //If it's not already the case, allow brush to select undefined values
                        if (axisWithUndefinedValues.indexOf(p.key) < 0) {

                            var newscale = d3.scale.linear().domain([min, domain[1]]).range([availableHeight - 12, range[1]]);
                            y[p.key].brush.y(newscale);
                            axisWithUndefinedValues.push(p.key);
                        }
                        if (isNaN(d.values[p.key]) || isNaN(parseFloat(d.values[p.key]))) {
                            return [x(p.key), y[p.key](min)];
                        }
                    }

                    //If parallelCoordinate contain missing values show the missing values line otherwise, hide it.
                    if (missingValuesline !== undefined) {
                        if (axisWithUndefinedValues.length > 0 || displayMissingValuesline) {
                            missingValuesline.style("display", "inline");
                            missingValueslineText.style("display", "inline");
                        } else {
                            missingValuesline.style("display", "none");
                            missingValueslineText.style("display", "none");
                        }
                    }
                    return [x(p.key), y[p.key](d.values[p.key])];
                }));
            }

            function restoreBrush(visible) {
                filters.forEach(function (f) {
                    //If filter brushed NaN values, keep the brush on the bottom of the axis.
                    var brushDomain = y[f.dimension].brush.y().domain();
                    if (f.hasOnlyNaN) {
                        f.extent[1] = (y[f.dimension].domain()[1] - brushDomain[0]) * (f.extent[1] - f.extent[0]) / (oldDomainMaxValue[f.dimension] - f.extent[0]) + brushDomain[0];
                    }
                    if (f.hasNaN) {
                        f.extent[0] = brushDomain[0];
                    }
                    if (visible)
                        y[f.dimension].brush.extent(f.extent);
                });
                
                dimensions.select('.nv-brushBackground')
                    .each(function (d) {
                        d3.select(this).call(y[d.key].brush);

                    })
                    .selectAll('rect')
                    .attr('x', -8)
                    .attr('width', 16);
                
                updateTicks();
            }
            
            // Handles a brush event, toggling the display of foreground lines.
            function brushstart() {
                //If brush aren't visible, show it before brushing again.
                if (displayBrush === false) {
                    displayBrush = true;
                    restoreBrush(true);
                }
            }
            
            // Handles a brush event, toggling the display of foreground lines.
            function brush() {
                actives = dimensionNames.filter(function (p) { return !y[p].brush.empty(); });
                extents = actives.map(function(p) { return y[p].brush.extent(); });

                filters = []; //erase current filters
                actives.forEach(function(d,i) {
                    filters[i] = {
                        dimension: d,
                        extent: extents[i],
                        hasNaN: false,
                        hasOnlyNaN: false
                    }
                });

                active = []; //erase current active list
                foreground.style('display', function(d) {
                    var isActive = actives.every(function(p, i) {
                        if ((isNaN(d.values[p]) || isNaN(parseFloat(d.values[p]))) && extents[i][0] == y[p].brush.y().domain()[0]) return true;
                        return (extents[i][0] <= d.values[p] && d.values[p] <= extents[i][1]) && !isNaN(parseFloat(d.values[p]));
                    });
                    if (isActive) active.push(d);
                    return isActive ? null : 'none';
                });
                
                updateTicks();
                
                dispatch.brush({
                    filters: filters,
                    active: active
                });
            }
            function brushend() {
                var hasActiveBrush = actives.length > 0 ? true : false;
                filters.forEach(function (f) {
                    if (f.extent[0] === y[f.dimension].brush.y().domain()[0] && axisWithUndefinedValues.indexOf(f.dimension) >= 0)
                        f.hasNaN = true;
                    if (f.extent[1] < y[f.dimension].domain()[0])
                        f.hasOnlyNaN = true;
                });
                dispatch.brushEnd(active, hasActiveBrush);
            }           
            function updateTicks() {
                dimensions.select('.nv-axis')
                    .each(function (d, i) {
                        var f = filters.filter(function (k) { return k.dimension == d.key; });
                        currentTicks[d.key] = y[d.key].domain();
                        
                        //If brush are available, display brush extent
                        if (f.length != 0 && displayBrush)
                        {
                            currentTicks[d.key] = [];
                            if (f[0].extent[1] > y[d.key].domain()[0]) 
                                currentTicks[d.key] = [f[0].extent[1]];
                            if (f[0].extent[0] >= y[d.key].domain()[0])
                                currentTicks[d.key].push(f[0].extent[0]);    
                        }
                            
                        d3.select(this).call(axis.scale(y[d.key]).tickFormat(d.format).tickValues(currentTicks[d.key]));
                });
            }
            function dragStart(d) {
                dragging[d.key] = this.parentNode.__origin__ = x(d.key);
                background.attr("visibility", "hidden");
            }
            function dragMove(d) {
                dragging[d.key] = Math.min(availableWidth, Math.max(0, this.parentNode.__origin__ += d3.event.x));
                foreground.attr("d", path);
                enabledDimensions.sort(function (a, b) { return dimensionPosition(a.key) - dimensionPosition(b.key); });
                enabledDimensions.forEach(function (d, i) { return d.currentPosition = i; });
                x.domain(enabledDimensions.map(function (d) { return d.key; }));
                dimensions.attr("transform", function(d) { return "translate(" + dimensionPosition(d.key) + ")"; });
            }
            function dragEnd(d, i) {
                delete this.parentNode.__origin__;
                delete dragging[d.key];
                d3.select(this.parentNode).attr("transform", "translate(" + x(d.key) + ")");
                foreground
                  .attr("d", path);
                background
                  .attr("d", path)
                  .attr("visibility", null);

                dispatch.dimensionsOrder(enabledDimensions);
            }
            function dimensionPosition(d) {
                var v = dragging[d];
                return v == null ? x(d) : v;
            }
        });
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:         {get: function(){return width;},           set: function(_){width= _;}},
        height:        {get: function(){return height;},          set: function(_){height= _;}},
        dimensionData: { get: function () { return dimensionData; }, set: function (_) { dimensionData = _; } },
        displayBrush: { get: function () { return displayBrush; }, set: function (_) { displayBrush = _; } },
        filters: { get: function () { return filters; }, set: function (_) { filters = _; } },
        active: { get: function () { return active; }, set: function (_) { active = _; } },
        lineTension:   {get: function(){return lineTension;},     set: function(_){lineTension = _;}},
        undefinedValuesLabel : {get: function(){return undefinedValuesLabel;}, set: function(_){undefinedValuesLabel=_;}},
        
        // deprecated options
        dimensions: {get: function () { return dimensionData.map(function (d){return d.key}); }, set: function (_) {
            // deprecated after 1.8.1
            nv.deprecated('dimensions', 'use dimensionData instead');
            if (dimensionData.length === 0) {
                _.forEach(function (k) { dimensionData.push({ key: k }) })
            } else {
                _.forEach(function (k, i) { dimensionData[i].key= k })
            }
        }},
        dimensionNames: {get: function () { return dimensionData.map(function (d){return d.key}); }, set: function (_) {
            // deprecated after 1.8.1
            nv.deprecated('dimensionNames', 'use dimensionData instead');
            dimensionNames = [];
            if (dimensionData.length === 0) {
                _.forEach(function (k) { dimensionData.push({ key: k }) })
            } else {
                _.forEach(function (k, i) { dimensionData[i].key = k })
            }
 
        }},
        dimensionFormats: {get: function () { return dimensionData.map(function (d) { return d.format }); }, set: function (_) {
            // deprecated after 1.8.1
            nv.deprecated('dimensionFormats', 'use dimensionData instead');
            if (dimensionData.length === 0) {
                _.forEach(function (f) { dimensionData.push({ format: f }) })
            } else {
                _.forEach(function (f, i) { dimensionData[i].format = f })
            }

        }},
        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    =  _.top    !== undefined ? _.top    : margin.top;
            margin.right  =  _.right  !== undefined ? _.right  : margin.right;
            margin.bottom =  _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   =  _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }}
    });
    nv.utils.initOptions(chart);
    return chart;
};
nv.models.parallelCoordinatesChart = function () {
        "use strict";
        //============================================================
        // Public Variables with Default Settings
        //------------------------------------------------------------

        var parallelCoordinates = nv.models.parallelCoordinates()
        var legend = nv.models.legend()
        var tooltip = nv.models.tooltip();
        var dimensionTooltip = nv.models.tooltip();

        var margin = { top: 0, right: 0, bottom: 0, left: 0 }
        , width = null
		, height = null
        , showLegend = true
		, color = nv.utils.defaultColor()
        , state = nv.utils.state()
        , dimensionData = []
        , displayBrush = true
        , defaultState = null
        , noData = null
        , nanValue = "undefined"
        , dispatch = d3.dispatch('dimensionsOrder', 'brushEnd', 'stateChange', 'changeState', 'renderEnd')
        , controlWidth = function () { return showControls ? 180 : 0 }
        ;

	    //============================================================

		//============================================================
        // Private Variables
        //------------------------------------------------------------

        var renderWatch = nv.utils.renderWatch(dispatch);

        var stateGetter = function(data) {
            return function() {
                return {
                    active: data.map(function(d) { return !d.disabled })
                };
            }
        };

        var stateSetter = function(data) {
            return function(state) {
                if(state.active !== undefined) {
                    data.forEach(function(series, i) {
                        series.disabled = !state.active[i];
                    });
                }
            }
        };

        tooltip.contentGenerator(function(data) {
            var str = '<table><thead><tr><td class="legend-color-guide"><div style="background-color:' + data.color + '"></div></td><td><strong>' + data.key + '</strong></td></tr></thead>';
            if(data.series.length !== 0)
            {
                str = str + '<tbody><tr><td height ="10px"></td></tr>';
                data.series.forEach(function(d){
                    str = str + '<tr><td class="legend-color-guide"><div style="background-color:' + d.color + '"></div></td><td class="key">' + d.key + '</td><td class="value">' + d.value + '</td></tr>';
                });
                str = str + '</tbody>';
            }
            str = str + '</table>';
            return str;
        });

        //============================================================
        // Chart function
        //------------------------------------------------------------

        function chart(selection) {
            renderWatch.reset();
            renderWatch.models(parallelCoordinates);

            selection.each(function(data) {
                var container = d3.select(this);
                nv.utils.initSVG(container);

                var that = this;

                var availableWidth = nv.utils.availableWidth(width, container, margin),
                    availableHeight = nv.utils.availableHeight(height, container, margin);

                chart.update = function() { container.call(chart); };
                chart.container = this;

                state.setter(stateSetter(dimensionData), chart.update)
                    .getter(stateGetter(dimensionData))
                    .update();

                //set state.disabled
                state.disabled = dimensionData.map(function (d) { return !!d.disabled });

                //Keep dimensions position in memory
                dimensionData = dimensionData.map(function (d) {d.disabled = !!d.disabled; return d});
                dimensionData.forEach(function (d, i) {
                    d.originalPosition = isNaN(d.originalPosition) ? i : d.originalPosition;
                    d.currentPosition = isNaN(d.currentPosition) ? i : d.currentPosition;
                });

               if (!defaultState) {
                    var key;
                    defaultState = {};
                    for(key in state) {
                        if(state[key] instanceof Array)
                            defaultState[key] = state[key].slice(0);
                        else
                            defaultState[key] = state[key];
                    }
                }

                // Display No Data message if there's nothing to show.
                if(!data || !data.length) {
                    nv.utils.noData(chart, container);
                    return chart;
                } else {
                    container.selectAll('.nv-noData').remove();
                }

                //------------------------------------------------------------
                // Setup containers and skeleton of chart

                var wrap = container.selectAll('g.nv-wrap.nv-parallelCoordinatesChart').data([data]);
                var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-parallelCoordinatesChart').append('g');

                var g = wrap.select('g');

                gEnter.append('g').attr('class', 'nv-parallelCoordinatesWrap');
                gEnter.append('g').attr('class', 'nv-legendWrap');

                g.select("rect")
                    .attr("width", availableWidth)
                    .attr("height", (availableHeight > 0) ? availableHeight : 0);

                // Legend
                if (!showLegend) {
                    g.select('.nv-legendWrap').selectAll('*').remove();
                } else {
                    legend.width(availableWidth)
                        .color(function (d) { return "rgb(188,190,192)"; });

                    g.select('.nv-legendWrap')
                        .datum(dimensionData.sort(function (a, b) { return a.originalPosition - b.originalPosition; }))
                        .call(legend);

                    if (legend.height() > margin.top) {
                        margin.top = legend.height();
                        availableHeight = nv.utils.availableHeight(height, container, margin);
                    }
                    wrap.select('.nv-legendWrap')
                       .attr('transform', 'translate( 0 ,' + (-margin.top) + ')');
                }
                wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

                // Main Chart Component(s)
                parallelCoordinates
                    .width(availableWidth)
                    .height(availableHeight)
                    .dimensionData(dimensionData)
                    .displayBrush(displayBrush);

		        var parallelCoordinatesWrap = g.select('.nv-parallelCoordinatesWrap ')
                  .datum(data);

		        parallelCoordinatesWrap.transition().call(parallelCoordinates);

				//============================================================
                // Event Handling/Dispatching (in chart's scope)
                //------------------------------------------------------------
                //Display reset brush button
		        parallelCoordinates.dispatch.on('brushEnd', function (active, hasActiveBrush) {
		            if (hasActiveBrush) {
		                displayBrush = true;
		                dispatch.brushEnd(active);
		            } else {

		                displayBrush = false;
		            }
		        });

		        legend.dispatch.on('stateChange', function(newState) {
		            for(var key in newState) {
		                state[key] = newState[key];
		            }
		            dispatch.stateChange(state);
		            chart.update();
		        });

                //Update dimensions order and display reset sorting button
		        parallelCoordinates.dispatch.on('dimensionsOrder', function (e) {
		            dimensionData.sort(function (a, b) { return a.currentPosition - b.currentPosition; });
		            var isSorted = false;
		            dimensionData.forEach(function (d, i) {
		                d.currentPosition = i;
		                if (d.currentPosition !== d.originalPosition)
		                    isSorted = true;
		            });
		            dispatch.dimensionsOrder(dimensionData, isSorted);
		        });

				// Update chart from a state object passed to event handler
                dispatch.on('changeState', function (e) {

                    if (typeof e.disabled !== 'undefined') {
                        dimensionData.forEach(function (series, i) {
                            series.disabled = e.disabled[i];
                        });
                        state.disabled = e.disabled;
                    }
                    chart.update();
                });
            });

            renderWatch.renderEnd('parraleleCoordinateChart immediate');
            return chart;
        }

		//============================================================
        // Event Handling/Dispatching (out of chart's scope)
        //------------------------------------------------------------

        parallelCoordinates.dispatch.on('elementMouseover.tooltip', function (evt) {
            var tp = {
                key: evt.label,
                color: evt.color,
                series: []
             }
            if(evt.values){
                Object.keys(evt.values).forEach(function (d) {
                    var dim = evt.dimensions.filter(function (dd) {return dd.key === d;})[0];
                    if(dim){
                        var v;
                        if (isNaN(evt.values[d]) || isNaN(parseFloat(evt.values[d]))) {
                            v = nanValue;
                        } else {
                            v = dim.format(evt.values[d]);
                        }
                        tp.series.push({ idx: dim.currentPosition, key: d, value: v, color: dim.color });
                    }
                });
                tp.series.sort(function(a,b) {return a.idx - b.idx});
             }
            tooltip.data(tp).hidden(false);
        });

        parallelCoordinates.dispatch.on('elementMouseout.tooltip', function(evt) {
            tooltip.hidden(true)
        });

        parallelCoordinates.dispatch.on('elementMousemove.tooltip', function () {
            tooltip();
        });
		 //============================================================
        // Expose Public Variables
        //------------------------------------------------------------

		// expose chart's sub-components
        chart.dispatch = dispatch;
        chart.parallelCoordinates = parallelCoordinates;
        chart.legend = legend;
        chart.tooltip = tooltip;
        chart.options = nv.utils.optionsFunc.bind(chart);

        chart._options = Object.create({}, {
            // simple options, just get/set the necessary values
            width: { get: function () { return width; }, set: function (_) { width = _; } },
            height: { get: function () { return height; }, set: function (_) { height = _; } },
            showLegend: { get: function () { return showLegend; }, set: function (_) { showLegend = _; } },
            defaultState: { get: function () { return defaultState; }, set: function (_) { defaultState = _; } },
            dimensionData: { get: function () { return dimensionData; }, set: function (_) { dimensionData = _; } },
            displayBrush: { get: function () { return displayBrush; }, set: function (_) { displayBrush = _; } },
            noData: { get: function () { return noData; }, set: function (_) { noData = _; } },
            nanValue: { get: function () { return nanValue; }, set: function (_) { nanValue = _; } },

            // options that require extra logic in the setter
            margin: {
                get: function () { return margin; },
                set: function (_) {
                    margin.top = _.top !== undefined ? _.top : margin.top;
                    margin.right = _.right !== undefined ? _.right : margin.right;
                    margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
                    margin.left = _.left !== undefined ? _.left : margin.left;
                }
            },
            color: {get: function(){return color;}, set: function(_){
                    color = nv.utils.getColor(_);
                    legend.color(color);
                    parallelCoordinates.color(color);
                }}
        });

        nv.utils.inheritOptions(chart, parallelCoordinates);
        nv.utils.initOptions(chart);

        return chart;
    };
nv.models.pie = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = 500
        , height = 500
        , getX = function(d) { return d.x }
        , getY = function(d) { return d.y }
        , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
        , container = null
        , color = nv.utils.defaultColor()
        , valueFormat = d3.format(',.2f')
        , showLabels = true
        , labelsOutside = false
        , labelType = "key"
        , labelThreshold = .02 //if slice percentage is under this, don't show label
        , donut = false
        , title = false
        , growOnHover = true
        , titleOffset = 0
        , labelSunbeamLayout = false
        , startAngle = false
        , padAngle = false
        , endAngle = false
        , cornerRadius = 0
        , donutRatio = 0.5
        , duration = 250
        , arcsRadius = []
        , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'elementMousemove', 'renderEnd')
        ;

    var arcs = [];
    var arcsOver = [];

    //============================================================
    // chart function
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch);

    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right
                , availableHeight = height - margin.top - margin.bottom
                , radius = Math.min(availableWidth, availableHeight) / 2
                , arcsRadiusOuter = []
                , arcsRadiusInner = []
                ;

            container = d3.select(this)
            if (arcsRadius.length === 0) {
                var outer = radius - radius / 5;
                var inner = donutRatio * radius;
                for (var i = 0; i < data[0].length; i++) {
                    arcsRadiusOuter.push(outer);
                    arcsRadiusInner.push(inner);
                }
            } else {
                if(growOnHover){
                    arcsRadiusOuter = arcsRadius.map(function (d) { return (d.outer - d.outer / 5) * radius; });
                    arcsRadiusInner = arcsRadius.map(function (d) { return (d.inner - d.inner / 5) * radius; });
                    donutRatio = d3.min(arcsRadius.map(function (d) { return (d.inner - d.inner / 5); }));
                } else {
                    arcsRadiusOuter = arcsRadius.map(function (d) { return d.outer * radius; });
                    arcsRadiusInner = arcsRadius.map(function (d) { return d.inner * radius; });
                    donutRatio = d3.min(arcsRadius.map(function (d) { return d.inner; }));
                }
            }
            nv.utils.initSVG(container);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('.nv-wrap.nv-pie').data(data);
            var wrapEnter = wrap.enter().append('g').attr('class','nvd3 nv-wrap nv-pie nv-chart-' + id);
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');
            var g_pie = gEnter.append('g').attr('class', 'nv-pie');
            gEnter.append('g').attr('class', 'nv-pieLabels');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            g.select('.nv-pie').attr('transform', 'translate(' + availableWidth / 2 + ',' + availableHeight / 2 + ')');
            g.select('.nv-pieLabels').attr('transform', 'translate(' + availableWidth / 2 + ',' + availableHeight / 2 + ')');

            //
            container.on('click', function(d,i) {
                dispatch.chartClick({
                    data: d,
                    index: i,
                    pos: d3.event,
                    id: id
                });
            });

            arcs = [];
            arcsOver = [];
            for (var i = 0; i < data[0].length; i++) {

                var arc = d3.svg.arc().outerRadius(arcsRadiusOuter[i]);
                var arcOver = d3.svg.arc().outerRadius(arcsRadiusOuter[i] + 5);

                if (startAngle !== false) {
                    arc.startAngle(startAngle);
                    arcOver.startAngle(startAngle);
                }
                if (endAngle !== false) {
                    arc.endAngle(endAngle);
                    arcOver.endAngle(endAngle);
                }
                if (donut) {
                    arc.innerRadius(arcsRadiusInner[i]);
                    arcOver.innerRadius(arcsRadiusInner[i]);
                }

                if (arc.cornerRadius && cornerRadius) {
                    arc.cornerRadius(cornerRadius);
                    arcOver.cornerRadius(cornerRadius);
                }

                arcs.push(arc);
                arcsOver.push(arcOver);
            }

            // Setup the Pie chart and choose the data element
            var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) { return d.disabled ? 0 : getY(d) });

            // padAngle added in d3 3.5
            if (pie.padAngle && padAngle) {
                pie.padAngle(padAngle);
            }

            // if title is specified and donut, put it in the middle
            if (donut && title) {
                g_pie.append("text").attr('class', 'nv-pie-title');

                wrap.select('.nv-pie-title')
                    .style("text-anchor", "middle")
                    .text(function (d) {
                        return title;
                    })
                    .style("font-size", (Math.min(availableWidth, availableHeight)) * donutRatio * 2 / (title.length + 2) + "px")
                    .attr("dy", "0.35em") // trick to vertically center text
                    .attr('transform', function(d, i) {
                        return 'translate(0, '+ titleOffset + ')';
                    });
            }

            var slices = wrap.select('.nv-pie').selectAll('.nv-slice').data(pie);
            var pieLabels = wrap.select('.nv-pieLabels').selectAll('.nv-label').data(pie);

            slices.exit().remove();
            pieLabels.exit().remove();

            var ae = slices.enter().append('g');
            ae.attr('class', 'nv-slice');
            ae.on('mouseover', function(d, i) {
                d3.select(this).classed('hover', true);
                if (growOnHover) {
                    d3.select(this).select("path").transition()
                        .duration(70)
                        .attr("d", arcsOver[i]);
                }
                dispatch.elementMouseover({
                    data: d.data,
                    index: i,
                    color: d3.select(this).style("fill"),
                    percent: (d.endAngle - d.startAngle) / (2 * Math.PI)
                });
            });
            ae.on('mouseout', function(d, i) {
                d3.select(this).classed('hover', false);
                if (growOnHover) {
                    d3.select(this).select("path").transition()
                        .duration(50)
                        .attr("d", arcs[i]);
                }
                dispatch.elementMouseout({data: d.data, index: i});
            });
            ae.on('mousemove', function(d, i) {
                dispatch.elementMousemove({data: d.data, index: i});
            });
            ae.on('click', function(d, i) {
                var element = this;
                dispatch.elementClick({
                    data: d.data,
                    index: i,
                    color: d3.select(this).style("fill"),
                    event: d3.event,
                    element: element
                });
            });
            ae.on('dblclick', function(d, i) {
                dispatch.elementDblClick({
                    data: d.data,
                    index: i,
                    color: d3.select(this).style("fill")
                });
            });

            slices.attr('fill', function(d,i) { return color(d.data, i); });
            slices.attr('stroke', function(d,i) { return color(d.data, i); });

            var paths = ae.append('path').each(function(d) {
                this._current = d;
            });

            slices.select('path')
                .transition()
                .duration(duration)
                .attr('d', function (d, i) { return arcs[i](d); })
                .attrTween('d', arcTween);

            if (showLabels) {
                // This does the normal label
                var labelsArc = [];
                for (var i = 0; i < data[0].length; i++) {
                    labelsArc.push(arcs[i]);

                    if (labelsOutside) {
                        if (donut) {
                            labelsArc[i] = d3.svg.arc().outerRadius(arcs[i].outerRadius());
                            if (startAngle !== false) labelsArc[i].startAngle(startAngle);
                            if (endAngle !== false) labelsArc[i].endAngle(endAngle);
                        }
                    } else if (!donut) {
                            labelsArc[i].innerRadius(0);
                    }
                }

                pieLabels.enter().append("g").classed("nv-label",true).each(function(d,i) {
                    var group = d3.select(this);

                    group.attr('transform', function (d, i) {
                        if (labelSunbeamLayout) {
                            d.outerRadius = arcsRadiusOuter[i] + 10; // Set Outer Coordinate
                            d.innerRadius = arcsRadiusOuter[i] + 15; // Set Inner Coordinate
                            var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
                            if ((d.startAngle + d.endAngle) / 2 < Math.PI) {
                                rotateAngle -= 90;
                            } else {
                                rotateAngle += 90;
                            }
                            return 'translate(' + labelsArc[i].centroid(d) + ') rotate(' + rotateAngle + ')';
                        } else {
                            d.outerRadius = radius + 10; // Set Outer Coordinate
                            d.innerRadius = radius + 15; // Set Inner Coordinate
                            return 'translate(' + labelsArc[i].centroid(d) + ')'
                        }
                    });

                    group.append('rect')
                        .style('stroke', '#fff')
                        .style('fill', '#fff')
                        .attr("rx", 3)
                        .attr("ry", 3);

                    group.append('text')
                        .style('text-anchor', labelSunbeamLayout ? ((d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end') : 'middle') //center the text on it's origin or begin/end if orthogonal aligned
                        .style('fill', '#000')
                });

                var labelLocationHash = {};
                var avgHeight = 14;
                var avgWidth = 140;
                var createHashKey = function(coordinates) {
                    return Math.floor(coordinates[0]/avgWidth) * avgWidth + ',' + Math.floor(coordinates[1]/avgHeight) * avgHeight;
                };
                var getSlicePercentage = function(d) {
                    return (d.endAngle - d.startAngle) / (2 * Math.PI);
                };

                pieLabels.watchTransition(renderWatch, 'pie labels').attr('transform', function (d, i) {
                    if (labelSunbeamLayout) {
                        d.outerRadius = arcsRadiusOuter[i] + 10; // Set Outer Coordinate
                        d.innerRadius = arcsRadiusOuter[i] + 15; // Set Inner Coordinate
                        var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
                        if ((d.startAngle + d.endAngle) / 2 < Math.PI) {
                            rotateAngle -= 90;
                        } else {
                            rotateAngle += 90;
                        }
                        return 'translate(' + labelsArc[i].centroid(d) + ') rotate(' + rotateAngle + ')';
                    } else {
                        d.outerRadius = radius + 10; // Set Outer Coordinate
                        d.innerRadius = radius + 15; // Set Inner Coordinate

                        /*
                        Overlapping pie labels are not good. What this attempts to do is, prevent overlapping.
                        Each label location is hashed, and if a hash collision occurs, we assume an overlap.
                        Adjust the label's y-position to remove the overlap.
                        */
                        var center = labelsArc[i].centroid(d);
                        var percent = getSlicePercentage(d);
                        if (d.value && percent >= labelThreshold) {
                            var hashKey = createHashKey(center);
                            if (labelLocationHash[hashKey]) {
                                center[1] -= avgHeight;
                            }
                            labelLocationHash[createHashKey(center)] = true;
                        }
                        return 'translate(' + center + ')'
                    }
                });

                pieLabels.select(".nv-label text")
                    .style('text-anchor', function(d,i) {
                        //center the text on it's origin or begin/end if orthogonal aligned
                        return labelSunbeamLayout ? ((d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end') : 'middle';
                    })
                    .text(function(d, i) {
                        var percent = getSlicePercentage(d);
                        var label = '';
                        if (!d.value || percent < labelThreshold) return '';

                        if(typeof labelType === 'function') {
                            label = labelType(d, i, {
                                'key': getX(d.data),
                                'value': getY(d.data),
                                'percent': valueFormat(percent)
                            });
                        } else {
                            switch (labelType) {
                                case 'key':
                                    label = getX(d.data);
                                    break;
                                case 'value':
                                    label = valueFormat(getY(d.data));
                                    break;
                                case 'percent':
                                    label = d3.format('%')(percent);
                                    break;
                            }
                        }
                        return label;
                    })
                ;
            }


            // Computes the angle of an arc, converting from radians to degrees.
            function angle(d) {
                var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
                return a > 90 ? a - 180 : a;
            }

            function arcTween(a, idx) {
                a.endAngle = isNaN(a.endAngle) ? 0 : a.endAngle;
                a.startAngle = isNaN(a.startAngle) ? 0 : a.startAngle;
                if (!donut) a.innerRadius = 0;
                var i = d3.interpolate(this._current, a);
                this._current = i(0);
                return function (t) {
                    return arcs[idx](i(t));
                };
            }
        });

        renderWatch.renderEnd('pie immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        arcsRadius: { get: function () { return arcsRadius; }, set: function (_) { arcsRadius = _; } },
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        showLabels: {get: function(){return showLabels;}, set: function(_){showLabels=_;}},
        title:      {get: function(){return title;}, set: function(_){title=_;}},
        titleOffset:    {get: function(){return titleOffset;}, set: function(_){titleOffset=_;}},
        labelThreshold: {get: function(){return labelThreshold;}, set: function(_){labelThreshold=_;}},
        valueFormat:    {get: function(){return valueFormat;}, set: function(_){valueFormat=_;}},
        x:          {get: function(){return getX;}, set: function(_){getX=_;}},
        id:         {get: function(){return id;}, set: function(_){id=_;}},
        endAngle:   {get: function(){return endAngle;}, set: function(_){endAngle=_;}},
        startAngle: {get: function(){return startAngle;}, set: function(_){startAngle=_;}},
        padAngle:   {get: function(){return padAngle;}, set: function(_){padAngle=_;}},
        cornerRadius: {get: function(){return cornerRadius;}, set: function(_){cornerRadius=_;}},
        donutRatio:   {get: function(){return donutRatio;}, set: function(_){donutRatio=_;}},
        labelsOutside: {get: function(){return labelsOutside;}, set: function(_){labelsOutside=_;}},
        labelSunbeamLayout: {get: function(){return labelSunbeamLayout;}, set: function(_){labelSunbeamLayout=_;}},
        donut:              {get: function(){return donut;}, set: function(_){donut=_;}},
        growOnHover:        {get: function(){return growOnHover;}, set: function(_){growOnHover=_;}},

        // depreciated after 1.7.1
        pieLabelsOutside: {get: function(){return labelsOutside;}, set: function(_){
            labelsOutside=_;
            nv.deprecated('pieLabelsOutside', 'use labelsOutside instead');
        }},
        // depreciated after 1.7.1
        donutLabelsOutside: {get: function(){return labelsOutside;}, set: function(_){
            labelsOutside=_;
            nv.deprecated('donutLabelsOutside', 'use labelsOutside instead');
        }},
        // deprecated after 1.7.1
        labelFormat: {get: function(){ return valueFormat;}, set: function(_) {
            valueFormat=_;
            nv.deprecated('labelFormat','use valueFormat instead');
        }},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
            margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
            margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
            margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
        }},
        y: {get: function(){return getY;}, set: function(_){
            getY=d3.functor(_);
        }},
        color: {get: function(){return color;}, set: function(_){
            color=nv.utils.getColor(_);
        }},
        labelType:          {get: function(){return labelType;}, set: function(_){
            labelType= _ || 'key';
        }}
    });

    nv.utils.initOptions(chart);
    return chart;
};
nv.models.pieChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var pie = nv.models.pie();
    var legend = nv.models.legend();
    var tooltip = nv.models.tooltip();

    var margin = {top: 30, right: 20, bottom: 20, left: 20}
        , width = null
        , height = null
        , showTooltipPercent = false
        , showLegend = true
        , legendPosition = "top"
        , color = nv.utils.defaultColor()
        , state = nv.utils.state()
        , defaultState = null
        , noData = null
        , duration = 250
        , dispatch = d3.dispatch('stateChange', 'changeState','renderEnd')
        ;

    tooltip
        .duration(0)
        .headerEnabled(false)
        .valueFormatter(function(d, i) {
            return pie.valueFormat()(d, i);
        });

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch);

    var stateGetter = function(data) {
        return function(){
            return {
                active: data.map(function(d) { return !d.disabled })
            };
        }
    };

    var stateSetter = function(data) {
        return function(state) {
            if (state.active !== undefined) {
                data.forEach(function (series, i) {
                    series.disabled = !state.active[i];
                });
            }
        }
    };

    //============================================================
    // Chart function
    //------------------------------------------------------------

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(pie);

        selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);

            var that = this;
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            chart.update = function() { container.transition().call(chart); };
            chart.container = this;

            state.setter(stateSetter(data), chart.update)
                .getter(stateGetter(data))
                .update();

            //set state.disabled
            state.disabled = data.map(function(d) { return !!d.disabled });

            if (!defaultState) {
                var key;
                defaultState = {};
                for (key in state) {
                    if (state[key] instanceof Array)
                        defaultState[key] = state[key].slice(0);
                    else
                        defaultState[key] = state[key];
                }
            }

            // Display No Data message if there's nothing to show.
            if (!data || !data.length) {
                nv.utils.noData(chart, container);
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-pieChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-pieChart').append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-pieWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');

            // Legend
            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                if (legendPosition === "top") {
                    legend.width( availableWidth ).key(pie.x());

                    wrap.select('.nv-legendWrap')
                        .datum(data)
                        .call(legend);

                    if (legend.height() > margin.top) {
                        margin.top = legend.height();
                        availableHeight = nv.utils.availableHeight(height, container, margin);
                    }

                    wrap.select('.nv-legendWrap')
                        .attr('transform', 'translate(0,' + (-margin.top) +')');
                } else if (legendPosition === "right") {
                    var legendWidth = nv.models.legend().width();
                    if (availableWidth / 2 < legendWidth) {
                        legendWidth = (availableWidth / 2)
                    }
                    legend.height(availableHeight).key(pie.x());
                    legend.width(legendWidth);
                    availableWidth -= legend.width();

                    wrap.select('.nv-legendWrap')
                        .datum(data)
                        .call(legend)
                        .attr('transform', 'translate(' + (availableWidth) +',0)');
                }
            }
            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            // Main Chart Component(s)
            pie.width(availableWidth).height(availableHeight);
            var pieWrap = g.select('.nv-pieWrap').datum([data]);
            d3.transition(pieWrap).call(pie);

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            legend.dispatch.on('stateChange', function(newState) {
                for (var key in newState) {
                    state[key] = newState[key];
                }
                dispatch.stateChange(state);
                chart.update();
            });

            // Update chart from a state object passed to event handler
            dispatch.on('changeState', function(e) {
                if (typeof e.disabled !== 'undefined') {
                    data.forEach(function(series,i) {
                        series.disabled = e.disabled[i];
                    });
                    state.disabled = e.disabled;
                }
                chart.update();
            });
        });

        renderWatch.renderEnd('pieChart immediate');
        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    pie.dispatch.on('elementMouseover.tooltip', function(evt) {
        evt['series'] = {
            key: chart.x()(evt.data),
            value: chart.y()(evt.data),
            color: evt.color,
            percent: evt.percent
        };
        if (!showTooltipPercent) {
            delete evt.percent;
            delete evt.series.percent;
        }
        tooltip.data(evt).hidden(false);
    });

    pie.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true);
    });

    pie.dispatch.on('elementMousemove.tooltip', function(evt) {
        tooltip();
    });

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.legend = legend;
    chart.dispatch = dispatch;
    chart.pie = pie;
    chart.tooltip = tooltip;
    chart.options = nv.utils.optionsFunc.bind(chart);

    // use Object get/set functionality to map between vars and chart functions
    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:              {get: function(){return width;},                set: function(_){width=_;}},
        height:             {get: function(){return height;},               set: function(_){height=_;}},
        noData:             {get: function(){return noData;},               set: function(_){noData=_;}},
        showTooltipPercent: {get: function(){return showTooltipPercent;},   set: function(_){showTooltipPercent=_;}},
        showLegend:         {get: function(){return showLegend;},           set: function(_){showLegend=_;}},
        legendPosition:     {get: function(){return legendPosition;},       set: function(_){legendPosition=_;}},
        defaultState:       {get: function(){return defaultState;},         set: function(_){defaultState=_;}},

        // options that require extra logic in the setter
        color: {get: function(){return color;}, set: function(_){
            color = _;
            legend.color(color);
            pie.color(color);
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            pie.duration(duration);
        }},
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }}
    });
    nv.utils.inheritOptions(chart, pie);
    nv.utils.initOptions(chart);
    return chart;
};

nv.models.scatter = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin       = {top: 0, right: 0, bottom: 0, left: 0}
        , width        = null
        , height       = null
        , color        = nv.utils.defaultColor() // chooses color
        , id           = Math.floor(Math.random() * 100000) //Create semi-unique ID incase user doesn't select one
        , container    = null
        , x            = d3.scale.linear()
        , y            = d3.scale.linear()
        , z            = d3.scale.linear() //linear because d3.svg.shape.size is treated as area
        , getX         = function(d) { return d.x } // accessor to get the x value
        , getY         = function(d) { return d.y } // accessor to get the y value
        , getSize      = function(d) { return d.size || 1} // accessor to get the point size
        , getShape     = function(d) { return d.shape || 'circle' } // accessor to get point shape
        , forceX       = [] // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
        , forceY       = [] // List of numbers to Force into the Y scale
        , forceSize    = [] // List of numbers to Force into the Size scale
        , interactive  = true // If true, plots a voronoi overlay for advanced point intersection
        , pointActive  = function(d) { return !d.notActive } // any points that return false will be filtered out
        , padData      = false // If true, adds half a data points width to front and back, for lining up a line chart with a bar chart
        , padDataOuter = .1 //outerPadding to imitate ordinal scale outer padding
        , clipEdge     = false // if true, masks points within x and y scale
        , clipVoronoi  = true // if true, masks each point with a circle... can turn off to slightly increase performance
        , showVoronoi  = false // display the voronoi areas
        , clipRadius   = function() { return 25 } // function to get the radius for voronoi point clips
        , xDomain      = null // Override x domain (skips the calculation from data)
        , yDomain      = null // Override y domain
        , xRange       = null // Override x range
        , yRange       = null // Override y range
        , sizeDomain   = null // Override point size domain
        , sizeRange    = null
        , singlePoint  = false
        , dispatch     = d3.dispatch('elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'renderEnd')
        , useVoronoi   = true
        , duration     = 250
        , interactiveUpdateDelay = 300
        , showLabels    = false 
        ;


    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var x0, y0, z0 // used to store previous scales
        , timeoutID
        , needsUpdate = false // Flag for when the points are visually updating, but the interactive layer is behind, to disable tooltips
        , renderWatch = nv.utils.renderWatch(dispatch, duration)
        , _sizeRange_def = [16, 256]
        , _caches
        ;

    function getCache(d) {
        var cache, i;
        cache = _caches = _caches || {};
        i = d[0].series;
        cache = cache[i] = cache[i] || {};
        i = d[1];
        cache = cache[i] = cache[i] || {};
        return cache;
    }

    function getDiffs(d) {
        var i, key,
            point = d[0],
            cache = getCache(d),
            diffs = false;
        for (i = 1; i < arguments.length; i ++) {
            key = arguments[i];
            if (cache[key] !== point[key] || !cache.hasOwnProperty(key)) {
                cache[key] = point[key];
                diffs = true;
            }
        }
        return diffs;
    }

    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            container = d3.select(this);
            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            nv.utils.initSVG(container);

            //add series index to each data point for reference
            data.forEach(function(series, i) {
                series.values.forEach(function(point) {
                    point.series = i;
                });
            });

            // Setup Scales
            var logScale = chart.yScale().name === d3.scale.log().name ? true : false; 
            // remap and flatten the data for use in calculating the scales' domains
            var seriesData = (xDomain && yDomain && sizeDomain) ? [] : // if we know xDomain and yDomain and sizeDomain, no need to calculate.... if Size is constant remember to set sizeDomain to speed up performance
                d3.merge(
                    data.map(function(d) {
                        return d.values.map(function(d,i) {
                            return { x: getX(d,i), y: getY(d,i), size: getSize(d,i) }
                        })
                    })
                );

            x   .domain(xDomain || d3.extent(seriesData.map(function(d) { return d.x; }).concat(forceX)))

            if (padData && data[0])
                x.range(xRange || [(availableWidth * padDataOuter +  availableWidth) / (2 *data[0].values.length), availableWidth - availableWidth * (1 + padDataOuter) / (2 * data[0].values.length)  ]);
            //x.range([availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5)  / data[0].values.length ]);
            else
                x.range(xRange || [0, availableWidth]);

             if (logScale) {
                    var min = d3.min(seriesData.map(function(d) { if (d.y !== 0) return d.y; }));
                    y.clamp(true)
                        .domain(yDomain || d3.extent(seriesData.map(function(d) {
                            if (d.y !== 0) return d.y;
                            else return min * 0.1;
                        }).concat(forceY)))
                        .range(yRange || [availableHeight, 0]);
                } else {
                        y.domain(yDomain || d3.extent(seriesData.map(function (d) { return d.y;}).concat(forceY)))
                        .range(yRange || [availableHeight, 0]);
                }

            z   .domain(sizeDomain || d3.extent(seriesData.map(function(d) { return d.size }).concat(forceSize)))
                .range(sizeRange || _sizeRange_def);

            // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
            singlePoint = x.domain()[0] === x.domain()[1] || y.domain()[0] === y.domain()[1];

            if (x.domain()[0] === x.domain()[1])
                x.domain()[0] ?
                    x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
                    : x.domain([-1,1]);

            if (y.domain()[0] === y.domain()[1])
                y.domain()[0] ?
                    y.domain([y.domain()[0] - y.domain()[0] * 0.01, y.domain()[1] + y.domain()[1] * 0.01])
                    : y.domain([-1,1]);

            if ( isNaN(x.domain()[0])) {
                x.domain([-1,1]);
            }

            if ( isNaN(y.domain()[0])) {
                y.domain([-1,1]);
            }

            x0 = x0 || x;
            y0 = y0 || y;
            z0 = z0 || z;

            var scaleDiff = x(1) !== x0(1) || y(1) !== y0(1) || z(1) !== z0(1);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-scatter').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatter nv-chart-' + id);
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            wrap.classed('nv-single-point', singlePoint);
            gEnter.append('g').attr('class', 'nv-groups');
            gEnter.append('g').attr('class', 'nv-point-paths');
            wrapEnter.append('g').attr('class', 'nv-point-clips');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            defsEnter.append('clipPath')
                .attr('id', 'nv-edge-clip-' + id)
                .append('rect');

            wrap.select('#nv-edge-clip-' + id + ' rect')
                .attr('width', availableWidth)
                .attr('height', (availableHeight > 0) ? availableHeight : 0);

            g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');

            function updateInteractiveLayer() {
                // Always clear needs-update flag regardless of whether or not
                // we will actually do anything (avoids needless invocations).
                needsUpdate = false;

                if (!interactive) return false;

                // inject series and point index for reference into voronoi
                if (useVoronoi === true) {
                    var vertices = d3.merge(data.map(function(group, groupIndex) {
                            return group.values
                                .map(function(point, pointIndex) {
                                    // *Adding noise to make duplicates very unlikely
                                    // *Injecting series and point index for reference
                                    /* *Adding a 'jitter' to the points, because there's an issue in d3.geom.voronoi.
                                     */
                                    var pX = getX(point,pointIndex);
                                    var pY = getY(point,pointIndex);

                                    return [nv.utils.NaNtoZero(x(pX))+ Math.random() * 1e-4,
                                            nv.utils.NaNtoZero(y(pY))+ Math.random() * 1e-4,
                                        groupIndex,
                                        pointIndex, point]; //temp hack to add noise until I think of a better way so there are no duplicates
                                })
                                .filter(function(pointArray, pointIndex) {
                                    return pointActive(pointArray[4], pointIndex); // Issue #237.. move filter to after map, so pointIndex is correct!
                                })
                        })
                    );

                    if (vertices.length == 0) return false;  // No active points, we're done
                    if (vertices.length < 3) {
                        // Issue #283 - Adding 2 dummy points to the voronoi b/c voronoi requires min 3 points to work
                        vertices.push([x.range()[0] - 20, y.range()[0] - 20, null, null]);
                        vertices.push([x.range()[1] + 20, y.range()[1] + 20, null, null]);
                        vertices.push([x.range()[0] - 20, y.range()[0] + 20, null, null]);
                        vertices.push([x.range()[1] + 20, y.range()[1] - 20, null, null]);
                    }

                    // keep voronoi sections from going more than 10 outside of graph
                    // to avoid overlap with other things like legend etc
                    var bounds = d3.geom.polygon([
                        [-10,-10],
                        [-10,height + 10],
                        [width + 10,height + 10],
                        [width + 10,-10]
                    ]);

                    var voronoi = d3.geom.voronoi(vertices).map(function(d, i) {
                        return {
                            'data': bounds.clip(d),
                            'series': vertices[i][2],
                            'point': vertices[i][3]
                        }
                    });

                    // nuke all voronoi paths on reload and recreate them
                    wrap.select('.nv-point-paths').selectAll('path').remove();
                    var pointPaths = wrap.select('.nv-point-paths').selectAll('path').data(voronoi);
                    var vPointPaths = pointPaths
                        .enter().append("svg:path")
                        .attr("d", function(d) {
                            if (!d || !d.data || d.data.length === 0)
                                return 'M 0 0';
                            else
                                return "M" + d.data.join(",") + "Z";
                        })
                        .attr("id", function(d,i) {
                            return "nv-path-"+i; })
                        .attr("clip-path", function(d,i) { return "url(#nv-clip-"+id+"-"+i+")"; })
                        ;

                    // good for debugging point hover issues
                    if (showVoronoi) {
                        vPointPaths.style("fill", d3.rgb(230, 230, 230))
                            .style('fill-opacity', 0.4)
                            .style('stroke-opacity', 1)
                            .style("stroke", d3.rgb(200,200,200));
                    }

                    if (clipVoronoi) {
                        // voronoi sections are already set to clip,
                        // just create the circles with the IDs they expect
                        wrap.select('.nv-point-clips').selectAll('*').remove(); // must do * since it has sub-dom
                        var pointClips = wrap.select('.nv-point-clips').selectAll('clipPath').data(vertices);
                        var vPointClips = pointClips
                            .enter().append("svg:clipPath")
                            .attr("id", function(d, i) { return "nv-clip-"+id+"-"+i;})
                            .append("svg:circle")
                            .attr('cx', function(d) { return d[0]; })
                            .attr('cy', function(d) { return d[1]; })
                            .attr('r', clipRadius);
                    }

                    var mouseEventCallback = function(d, mDispatch) {
                        if (needsUpdate) return 0;
                        var series = data[d.series];
                        if (series === undefined) return;
                        var point  = series.values[d.point];
                        point['color'] = color(series, d.series);

                        // standardize attributes for tooltip.
                        point['x'] = getX(point);
                        point['y'] = getY(point);

                        // can't just get box of event node since it's actually a voronoi polygon
                        var box = container.node().getBoundingClientRect();
                        var scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
                        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

                        var pos = {
                            left: x(getX(point, d.point)) + box.left + scrollLeft + margin.left + 10,
                            top: y(getY(point, d.point)) + box.top + scrollTop + margin.top + 10
                        };

                        mDispatch({
                            point: point,
                            series: series,
                            pos: pos,
                            relativePos: [x(getX(point, d.point)) + margin.left, y(getY(point, d.point)) + margin.top],
                            seriesIndex: d.series,
                            pointIndex: d.point
                        });
                    };

                    pointPaths
                        .on('click', function(d) {
                            mouseEventCallback(d, dispatch.elementClick);
                        })
                        .on('dblclick', function(d) {
                            mouseEventCallback(d, dispatch.elementDblClick);
                        })
                        .on('mouseover', function(d) {
                            mouseEventCallback(d, dispatch.elementMouseover);
                        })
                        .on('mouseout', function(d, i) {
                            mouseEventCallback(d, dispatch.elementMouseout);
                        });

                } else {
                    // add event handlers to points instead voronoi paths
                    wrap.select('.nv-groups').selectAll('.nv-group')
                        .selectAll('.nv-point')
                        //.data(dataWithPoints)
                        //.style('pointer-events', 'auto') // recativate events, disabled by css
                        .on('click', function(d,i) {
                            //nv.log('test', d, i);
                            if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
                            var series = data[d.series],
                                point  = series.values[i];
                            var element = this;
                            dispatch.elementClick({
                                point: point,
                                series: series,
                                pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top], //TODO: make this pos base on the page
                                relativePos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
                                seriesIndex: d.series,
                                pointIndex: i,
                                event: d3.event,
                                element: element
                            });
                        })
                        .on('dblclick', function(d,i) {
                            if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
                            var series = data[d.series],
                                point  = series.values[i];

                            dispatch.elementDblClick({
                                point: point,
                                series: series,
                                pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],//TODO: make this pos base on the page
                                relativePos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
                                seriesIndex: d.series,
                                pointIndex: i
                            });
                        })
                        .on('mouseover', function(d,i) {
                            if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
                            var series = data[d.series],
                                point  = series.values[i];

                            dispatch.elementMouseover({
                                point: point,
                                series: series,
                                pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],//TODO: make this pos base on the page
                                relativePos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
                                seriesIndex: d.series,
                                pointIndex: i,
                                color: color(d, i)
                            });
                        })
                        .on('mouseout', function(d,i) {
                            if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
                            var series = data[d.series],
                                point  = series.values[i];

                            dispatch.elementMouseout({
                                point: point,
                                series: series,
                                pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],//TODO: make this pos base on the page
                                relativePos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
                                seriesIndex: d.series,
                                pointIndex: i,
                                color: color(d, i)
                            });
                        });
                }
            }

            needsUpdate = true;
            var groups = wrap.select('.nv-groups').selectAll('.nv-group')
                .data(function(d) { return d }, function(d) { return d.key });
            groups.enter().append('g')
                .style('stroke-opacity', 1e-6)
                .style('fill-opacity', 1e-6);
            groups.exit()
                .remove();
            groups
                .attr('class', function(d,i) {
                    return (d.classed || '') + ' nv-group nv-series-' + i;
                })
                .classed('nv-noninteractive', !interactive)
                .classed('hover', function(d) { return d.hover });
            groups.watchTransition(renderWatch, 'scatter: groups')
                .style('fill', function(d,i) { return color(d, i) })
                .style('stroke', function(d,i) { return color(d, i) })
                .style('stroke-opacity', 1)
                .style('fill-opacity', .5);

            // create the points, maintaining their IDs from the original data set
            var points = groups.selectAll('path.nv-point')
                .data(function(d) {
                    return d.values.map(
                        function (point, pointIndex) {
                            return [point, pointIndex]
                        }).filter(
                            function(pointArray, pointIndex) {
                                return pointActive(pointArray[0], pointIndex)
                            })
                    });
            points.enter().append('path')
                .attr('class', function (d) {
                    return 'nv-point nv-point-' + d[1];
                })
                .style('fill', function (d) { return d.color })
                .style('stroke', function (d) { return d.color })
                .attr('transform', function(d) {
                    return 'translate(' + nv.utils.NaNtoZero(x0(getX(d[0],d[1]))) + ',' + nv.utils.NaNtoZero(y0(getY(d[0],d[1]))) + ')'
                })
                .attr('d',
                    nv.utils.symbol()
                    .type(function(d) { return getShape(d[0]); })
                    .size(function(d) { return z(getSize(d[0],d[1])) })
            );
            points.exit().remove();
            groups.exit().selectAll('path.nv-point')
                .watchTransition(renderWatch, 'scatter exit')
                .attr('transform', function(d) {
                    return 'translate(' + nv.utils.NaNtoZero(x(getX(d[0],d[1]))) + ',' + nv.utils.NaNtoZero(y(getY(d[0],d[1]))) + ')'
                })
                .remove();
            points.filter(function (d) { return scaleDiff || getDiffs(d, 'x', 'y'); })
                .watchTransition(renderWatch, 'scatter points')
                .attr('transform', function(d) {
                    //nv.log(d, getX(d[0],d[1]), x(getX(d[0],d[1])));
                    return 'translate(' + nv.utils.NaNtoZero(x(getX(d[0],d[1]))) + ',' + nv.utils.NaNtoZero(y(getY(d[0],d[1]))) + ')'
                });
            points.filter(function (d) { return scaleDiff || getDiffs(d, 'shape', 'size'); })
                .watchTransition(renderWatch, 'scatter points')
                .attr('d',
                    nv.utils.symbol()
                    .type(function(d) { return getShape(d[0]); })
                    .size(function(d) { return z(getSize(d[0],d[1])) })
            );
            
            // add label a label to scatter chart 
            if(showLabels)
            {      
                var titles =  groups.selectAll('.nv-label')
                    .data(function(d) {
                        return d.values.map(
                            function (point, pointIndex) {
                                return [point, pointIndex]
                            }).filter(
                                function(pointArray, pointIndex) {
                                    return pointActive(pointArray[0], pointIndex)
                                })
                        });

                titles.enter().append('text')
                    .style('fill', function (d,i) { 
                        return d.color })
                    .style('stroke-opacity', 0)
                    .style('fill-opacity', 1)
                    .attr('transform', function(d) {
                        var dx = nv.utils.NaNtoZero(x0(getX(d[0],d[1]))) + Math.sqrt(z(getSize(d[0],d[1]))/Math.PI) + 2;
                        return 'translate(' + dx + ',' + nv.utils.NaNtoZero(y0(getY(d[0],d[1]))) + ')';
                    })
                    .text(function(d,i){
                        return d[0].label;});

                titles.exit().remove();
                groups.exit().selectAll('path.nv-label')
                    .watchTransition(renderWatch, 'scatter exit')
                    .attr('transform', function(d) {
                        var dx = nv.utils.NaNtoZero(x(getX(d[0],d[1])))+ Math.sqrt(z(getSize(d[0],d[1]))/Math.PI)+2;
                        return 'translate(' + dx + ',' + nv.utils.NaNtoZero(y(getY(d[0],d[1]))) + ')';
                    })
                    .remove();
               titles.each(function(d) {
                  d3.select(this)
                    .classed('nv-label', true)
                    .classed('nv-label-' + d[1], false)
                    .classed('hover',false);
                });
                titles.watchTransition(renderWatch, 'scatter labels')
                    .attr('transform', function(d) {
                        var dx = nv.utils.NaNtoZero(x(getX(d[0],d[1])))+ Math.sqrt(z(getSize(d[0],d[1]))/Math.PI)+2;
                        return 'translate(' + dx + ',' + nv.utils.NaNtoZero(y(getY(d[0],d[1]))) + ')'
                    });
            }

            // Delay updating the invisible interactive layer for smoother animation
            if( interactiveUpdateDelay )
            {
                clearTimeout(timeoutID); // stop repeat calls to updateInteractiveLayer
                timeoutID = setTimeout(updateInteractiveLayer, interactiveUpdateDelay );
            }
            else
            {
                updateInteractiveLayer();
            }

            //store old scales for use in transitions on update
            x0 = x.copy();
            y0 = y.copy();
            z0 = z.copy();

        });
        renderWatch.renderEnd('scatter immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    // utility function calls provided by this chart
    chart._calls = new function() {
        this.clearHighlights = function () {
            nv.dom.write(function() {
                container.selectAll(".nv-point.hover").classed("hover", false);
            });
            return null;
        };
        this.highlightPoint = function (seriesIndex, pointIndex, isHoverOver) {
            nv.dom.write(function() {
                container.select('.nv-groups')
                  .selectAll(".nv-series-" + seriesIndex)
                  .selectAll(".nv-point-" + pointIndex)
                  .classed("hover", isHoverOver);
            });
        };
    };

    // trigger calls from events too
    dispatch.on('elementMouseover.point', function(d) {
        if (interactive) chart._calls.highlightPoint(d.seriesIndex,d.pointIndex,true);
    });

    dispatch.on('elementMouseout.point', function(d) {
        if (interactive) chart._calls.highlightPoint(d.seriesIndex,d.pointIndex,false);
    });

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:        {get: function(){return width;}, set: function(_){width=_;}},
        height:       {get: function(){return height;}, set: function(_){height=_;}},
        xScale:       {get: function(){return x;}, set: function(_){x=_;}},
        yScale:       {get: function(){return y;}, set: function(_){y=_;}},
        pointScale:   {get: function(){return z;}, set: function(_){z=_;}},
        xDomain:      {get: function(){return xDomain;}, set: function(_){xDomain=_;}},
        yDomain:      {get: function(){return yDomain;}, set: function(_){yDomain=_;}},
        pointDomain:  {get: function(){return sizeDomain;}, set: function(_){sizeDomain=_;}},
        xRange:       {get: function(){return xRange;}, set: function(_){xRange=_;}},
        yRange:       {get: function(){return yRange;}, set: function(_){yRange=_;}},
        pointRange:   {get: function(){return sizeRange;}, set: function(_){sizeRange=_;}},
        forceX:       {get: function(){return forceX;}, set: function(_){forceX=_;}},
        forceY:       {get: function(){return forceY;}, set: function(_){forceY=_;}},
        forcePoint:   {get: function(){return forceSize;}, set: function(_){forceSize=_;}},
        interactive:  {get: function(){return interactive;}, set: function(_){interactive=_;}},
        pointActive:  {get: function(){return pointActive;}, set: function(_){pointActive=_;}},
        padDataOuter: {get: function(){return padDataOuter;}, set: function(_){padDataOuter=_;}},
        padData:      {get: function(){return padData;}, set: function(_){padData=_;}},
        clipEdge:     {get: function(){return clipEdge;}, set: function(_){clipEdge=_;}},
        clipVoronoi:  {get: function(){return clipVoronoi;}, set: function(_){clipVoronoi=_;}},
        clipRadius:   {get: function(){return clipRadius;}, set: function(_){clipRadius=_;}},
        showVoronoi:   {get: function(){return showVoronoi;}, set: function(_){showVoronoi=_;}},
        id:           {get: function(){return id;}, set: function(_){id=_;}},
        interactiveUpdateDelay: {get:function(){return interactiveUpdateDelay;}, set: function(_){interactiveUpdateDelay=_;}},
        showLabels: {get: function(){return showLabels;}, set: function(_){ showLabels = _;}},

        // simple functor options
        x:     {get: function(){return getX;}, set: function(_){getX = d3.functor(_);}},
        y:     {get: function(){return getY;}, set: function(_){getY = d3.functor(_);}},
        pointSize: {get: function(){return getSize;}, set: function(_){getSize = d3.functor(_);}},
        pointShape: {get: function(){return getShape;}, set: function(_){getShape = d3.functor(_);}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
        }},
        color: {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }},
        useVoronoi: {get: function(){return useVoronoi;}, set: function(_){
            useVoronoi = _;
            if (useVoronoi === false) {
                clipVoronoi = false;
            }
        }}
    });

    nv.utils.initOptions(chart);
    return chart;
};

nv.models.scatterChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var scatter      = nv.models.scatter()
        , xAxis        = nv.models.axis()
        , yAxis        = nv.models.axis()
        , legend       = nv.models.legend()
        , distX        = nv.models.distribution()
        , distY        = nv.models.distribution()
        , tooltip      = nv.models.tooltip()
        ;

    var margin       = {top: 30, right: 20, bottom: 50, left: 75}
        , width        = null
        , height       = null
        , container    = null
        , color        = nv.utils.defaultColor()
        , x            = scatter.xScale()
        , y            = scatter.yScale()
        , showDistX    = false
        , showDistY    = false
        , showLegend   = true
        , showXAxis    = true
        , showYAxis    = true
        , rightAlignYAxis = false
        , state = nv.utils.state()
        , defaultState = null
        , dispatch = d3.dispatch('stateChange', 'changeState', 'renderEnd')
        , noData       = null
        , duration = 250
        , showLabels    = false
        ;

    scatter.xScale(x).yScale(y);
    xAxis.orient('bottom').tickPadding(10);
    yAxis
        .orient((rightAlignYAxis) ? 'right' : 'left')
        .tickPadding(10)
    ;
    distX.axis('x');
    distY.axis('y');
    tooltip
        .headerFormatter(function(d, i) {
            return xAxis.tickFormat()(d, i);
        })
        .valueFormatter(function(d, i) {
            return yAxis.tickFormat()(d, i);
        });

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var x0, y0
        , renderWatch = nv.utils.renderWatch(dispatch, duration);

    var stateGetter = function(data) {
        return function(){
            return {
                active: data.map(function(d) { return !d.disabled })
            };
        }
    };

    var stateSetter = function(data) {
        return function(state) {
            if (state.active !== undefined)
                data.forEach(function(series,i) {
                    series.disabled = !state.active[i];
                });
        }
    };

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(scatter);
        if (showXAxis) renderWatch.models(xAxis);
        if (showYAxis) renderWatch.models(yAxis);
        if (showDistX) renderWatch.models(distX);
        if (showDistY) renderWatch.models(distY);

        selection.each(function(data) {
            var that = this;

            container = d3.select(this);
            nv.utils.initSVG(container);

            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            chart.update = function() {
                if (duration === 0)
                    container.call(chart);
                else
                    container.transition().duration(duration).call(chart);
            };
            chart.container = this;

            state
                .setter(stateSetter(data), chart.update)
                .getter(stateGetter(data))
                .update();

            // DEPRECATED set state.disableddisabled
            state.disabled = data.map(function(d) { return !!d.disabled });

            if (!defaultState) {
                var key;
                defaultState = {};
                for (key in state) {
                    if (state[key] instanceof Array)
                        defaultState[key] = state[key].slice(0);
                    else
                        defaultState[key] = state[key];
                }
            }

            // Display noData message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
                nv.utils.noData(chart, container);
                renderWatch.renderEnd('scatter immediate');
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            // Setup Scales
            x = scatter.xScale();
            y = scatter.yScale();

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-scatterChart').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatterChart nv-chart-' + scatter.id());
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            // background for pointer events
            gEnter.append('rect').attr('class', 'nvd3 nv-background').style("pointer-events","none");

            gEnter.append('g').attr('class', 'nv-x nv-axis');
            gEnter.append('g').attr('class', 'nv-y nv-axis');
            gEnter.append('g').attr('class', 'nv-scatterWrap');
            gEnter.append('g').attr('class', 'nv-regressionLinesWrap');
            gEnter.append('g').attr('class', 'nv-distWrap');
            gEnter.append('g').attr('class', 'nv-legendWrap');

            if (rightAlignYAxis) {
                g.select(".nv-y.nv-axis")
                    .attr("transform", "translate(" + availableWidth + ",0)");
            }

            // Legend
            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                var legendWidth = availableWidth;
                legend.width(legendWidth);

                wrap.select('.nv-legendWrap')
                    .datum(data)
                    .call(legend);

                if (legend.height() > margin.top) {
                    margin.top = legend.height();
                    availableHeight = nv.utils.availableHeight(height, container, margin);
                }

                wrap.select('.nv-legendWrap')
                    .attr('transform', 'translate(0' + ',' + (-margin.top) +')');
            }

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            // Main Chart Component(s)
            scatter
                .width(availableWidth)
                .height(availableHeight)
                .color(data.map(function(d,i) {
                    d.color = d.color || color(d, i);
                    return d.color;
                }).filter(function(d,i) { return !data[i].disabled }))
                .showLabels(showLabels);

            wrap.select('.nv-scatterWrap')
                .datum(data.filter(function(d) { return !d.disabled }))
                .call(scatter);


            wrap.select('.nv-regressionLinesWrap')
                .attr('clip-path', 'url(#nv-edge-clip-' + scatter.id() + ')');

            var regWrap = wrap.select('.nv-regressionLinesWrap').selectAll('.nv-regLines')
                .data(function (d) {
                    return d;
                });

            regWrap.enter().append('g').attr('class', 'nv-regLines');

            var regLine = regWrap.selectAll('.nv-regLine')
                .data(function (d) {
                    return [d]
                });

            regLine.enter()
                .append('line').attr('class', 'nv-regLine')
                .style('stroke-opacity', 0);

            // don't add lines unless we have slope and intercept to use
            regLine.filter(function(d) {
                return d.intercept && d.slope;
            })
                .watchTransition(renderWatch, 'scatterPlusLineChart: regline')
                .attr('x1', x.range()[0])
                .attr('x2', x.range()[1])
                .attr('y1', function (d, i) {
                    return y(x.domain()[0] * d.slope + d.intercept)
                })
                .attr('y2', function (d, i) {
                    return y(x.domain()[1] * d.slope + d.intercept)
                })
                .style('stroke', function (d, i, j) {
                    return color(d, j)
                })
                .style('stroke-opacity', function (d, i) {
                    return (d.disabled || typeof d.slope === 'undefined' || typeof d.intercept === 'undefined') ? 0 : 1
                });

            // Setup Axes
            if (showXAxis) {
                xAxis
                    .scale(x)
                    ._ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize( -availableHeight , 0);

                g.select('.nv-x.nv-axis')
                    .attr('transform', 'translate(0,' + y.range()[0] + ')')
                    .call(xAxis);
            }

            if (showYAxis) {
                yAxis
                    .scale(y)
                    ._ticks( nv.utils.calcTicksY(availableHeight/36, data) )
                    .tickSize( -availableWidth, 0);

                g.select('.nv-y.nv-axis')
                    .call(yAxis);
            }

            // Setup Distribution
            if (showDistX) {
                distX
                    .getData(scatter.x())
                    .scale(x)
                    .width(availableWidth)
                    .color(data.map(function(d,i) {
                        return d.color || color(d, i);
                    }).filter(function(d,i) { return !data[i].disabled }));
                gEnter.select('.nv-distWrap').append('g')
                    .attr('class', 'nv-distributionX');
                g.select('.nv-distributionX')
                    .attr('transform', 'translate(0,' + y.range()[0] + ')')
                    .datum(data.filter(function(d) { return !d.disabled }))
                    .call(distX);
            }

            if (showDistY) {
                distY
                    .getData(scatter.y())
                    .scale(y)
                    .width(availableHeight)
                    .color(data.map(function(d,i) {
                        return d.color || color(d, i);
                    }).filter(function(d,i) { return !data[i].disabled }));
                gEnter.select('.nv-distWrap').append('g')
                    .attr('class', 'nv-distributionY');
                g.select('.nv-distributionY')
                    .attr('transform', 'translate(' + (rightAlignYAxis ? availableWidth : -distY.size() ) + ',0)')
                    .datum(data.filter(function(d) { return !d.disabled }))
                    .call(distY);
            }

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            legend.dispatch.on('stateChange', function(newState) {
                for (var key in newState)
                    state[key] = newState[key];
                dispatch.stateChange(state);
                chart.update();
            });

            // Update chart from a state object passed to event handler
            dispatch.on('changeState', function(e) {
                if (typeof e.disabled !== 'undefined') {
                    data.forEach(function(series,i) {
                        series.disabled = e.disabled[i];
                    });
                    state.disabled = e.disabled;
                }
                chart.update();
            });

            // mouseover needs availableHeight so we just keep scatter mouse events inside the chart block
            scatter.dispatch.on('elementMouseout.tooltip', function(evt) {
                tooltip.hidden(true);
                container.select('.nv-chart-' + scatter.id() + ' .nv-series-' + evt.seriesIndex + ' .nv-distx-' + evt.pointIndex)
                    .attr('y1', 0);
                container.select('.nv-chart-' + scatter.id() + ' .nv-series-' + evt.seriesIndex + ' .nv-disty-' + evt.pointIndex)
                    .attr('x2', distY.size());
            });

            scatter.dispatch.on('elementMouseover.tooltip', function(evt) {
                container.select('.nv-series-' + evt.seriesIndex + ' .nv-distx-' + evt.pointIndex)
                    .attr('y1', evt.relativePos[1] - availableHeight);
                container.select('.nv-series-' + evt.seriesIndex + ' .nv-disty-' + evt.pointIndex)
                    .attr('x2', evt.relativePos[0] + distX.size());
                tooltip.data(evt).hidden(false);
            });

            //store old scales for use in transitions on update
            x0 = x.copy();
            y0 = y.copy();

        });

        renderWatch.renderEnd('scatter with line immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.scatter = scatter;
    chart.legend = legend;
    chart.xAxis = xAxis;
    chart.yAxis = yAxis;
    chart.distX = distX;
    chart.distY = distY;
    chart.tooltip = tooltip;

    chart.options = nv.utils.optionsFunc.bind(chart);
    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        container:  {get: function(){return container;}, set: function(_){container=_;}},
        showDistX:  {get: function(){return showDistX;}, set: function(_){showDistX=_;}},
        showDistY:  {get: function(){return showDistY;}, set: function(_){showDistY=_;}},
        showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        showXAxis:  {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis:  {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        defaultState:     {get: function(){return defaultState;}, set: function(_){defaultState=_;}},
        noData:     {get: function(){return noData;}, set: function(_){noData=_;}},
        duration:   {get: function(){return duration;}, set: function(_){duration=_;}},
        showLabels: {get: function(){return showLabels;}, set: function(_){showLabels=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        rightAlignYAxis: {get: function(){return rightAlignYAxis;}, set: function(_){
            rightAlignYAxis = _;
            yAxis.orient( (_) ? 'right' : 'left');
        }},
        color: {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            legend.color(color);
            distX.color(color);
            distY.color(color);
        }}
    });

    nv.utils.inheritOptions(chart, scatter);
    nv.utils.initOptions(chart);
    return chart;
};

nv.models.sparkline = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 2, right: 0, bottom: 2, left: 0}
        , width = 400
        , height = 32
        , container = null
        , animate = true
        , x = d3.scale.linear()
        , y = d3.scale.linear()
        , getX = function(d) { return d.x }
        , getY = function(d) { return d.y }
        , color = nv.utils.getColor(['#000'])
        , xDomain
        , yDomain
        , xRange
        , yRange
        , showMinMaxPoints = true
        , showCurrentPoint = true
        , dispatch = d3.dispatch('renderEnd')
        ;

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch);
    
    function chart(selection) {
        renderWatch.reset();
        selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom;

            container = d3.select(this);
            nv.utils.initSVG(container);

            // Setup Scales
            x   .domain(xDomain || d3.extent(data, getX ))
                .range(xRange || [0, availableWidth]);

            y   .domain(yDomain || d3.extent(data, getY ))
                .range(yRange || [availableHeight, 0]);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-sparkline').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-sparkline');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

            var paths = wrap.selectAll('path')
                .data(function(d) { return [d] });
            paths.enter().append('path');
            paths.exit().remove();
            paths
                .style('stroke', function(d,i) { return d.color || color(d, i) })
                .attr('d', d3.svg.line()
                    .x(function(d,i) { return x(getX(d,i)) })
                    .y(function(d,i) { return y(getY(d,i)) })
            );

            // TODO: Add CURRENT data point (Need Min, Mac, Current / Most recent)
            var points = wrap.selectAll('circle.nv-point')
                .data(function(data) {
                    var yValues = data.map(function(d, i) { return getY(d,i); });
                    function pointIndex(index) {
                        if (index != -1) {
                            var result = data[index];
                            result.pointIndex = index;
                            return result;
                        } else {
                            return null;
                        }
                    }
                    var maxPoint = pointIndex(yValues.lastIndexOf(y.domain()[1])),
                        minPoint = pointIndex(yValues.indexOf(y.domain()[0])),
                        currentPoint = pointIndex(yValues.length - 1);
                    return [(showMinMaxPoints ? minPoint : null), (showMinMaxPoints ? maxPoint : null), (showCurrentPoint ? currentPoint : null)].filter(function (d) {return d != null;});
                });
            points.enter().append('circle');
            points.exit().remove();
            points
                .attr('cx', function(d,i) { return x(getX(d,d.pointIndex)) })
                .attr('cy', function(d,i) { return y(getY(d,d.pointIndex)) })
                .attr('r', 2)
                .attr('class', function(d,i) {
                    return getX(d, d.pointIndex) == x.domain()[1] ? 'nv-point nv-currentValue' :
                            getY(d, d.pointIndex) == y.domain()[0] ? 'nv-point nv-minValue' : 'nv-point nv-maxValue'
                });
        });
        
        renderWatch.renderEnd('sparkline immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:            {get: function(){return width;}, set: function(_){width=_;}},
        height:           {get: function(){return height;}, set: function(_){height=_;}},
        xDomain:          {get: function(){return xDomain;}, set: function(_){xDomain=_;}},
        yDomain:          {get: function(){return yDomain;}, set: function(_){yDomain=_;}},
        xRange:           {get: function(){return xRange;}, set: function(_){xRange=_;}},
        yRange:           {get: function(){return yRange;}, set: function(_){yRange=_;}},
        xScale:           {get: function(){return x;}, set: function(_){x=_;}},
        yScale:           {get: function(){return y;}, set: function(_){y=_;}},
        animate:          {get: function(){return animate;}, set: function(_){animate=_;}},
        showMinMaxPoints: {get: function(){return showMinMaxPoints;}, set: function(_){showMinMaxPoints=_;}},
        showCurrentPoint: {get: function(){return showCurrentPoint;}, set: function(_){showCurrentPoint=_;}},

        //functor options
        x: {get: function(){return getX;}, set: function(_){getX=d3.functor(_);}},
        y: {get: function(){return getY;}, set: function(_){getY=d3.functor(_);}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }}
    });

    chart.dispatch = dispatch;
    nv.utils.initOptions(chart);
    return chart;
};

nv.models.sparklinePlus = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var sparkline = nv.models.sparkline();

    var margin = {top: 15, right: 100, bottom: 10, left: 50}
        , width = null
        , height = null
        , x
        , y
        , index = []
        , paused = false
        , xTickFormat = d3.format(',r')
        , yTickFormat = d3.format(',.2f')
        , showLastValue = true
        , alignValue = true
        , rightAlignValue = false
        , noData = null
        , dispatch = d3.dispatch('renderEnd')
        ;
        
    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch);

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(sparkline);
        selection.each(function(data) {
            var container = d3.select(this);
            nv.utils.initSVG(container);

            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin);

            chart.update = function() { container.call(chart); };
            chart.container = this;

            // Display No Data message if there's nothing to show.
            if (!data || !data.length) {
                nv.utils.noData(chart, container)
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            var currentValue = sparkline.y()(data[data.length-1], data.length-1);

            // Setup Scales
            x = sparkline.xScale();
            y = sparkline.yScale();

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-sparklineplus').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-sparklineplus');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-sparklineWrap');
            gEnter.append('g').attr('class', 'nv-valueWrap');
            gEnter.append('g').attr('class', 'nv-hoverArea');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            // Main Chart Component(s)
            var sparklineWrap = g.select('.nv-sparklineWrap');

            sparkline.width(availableWidth).height(availableHeight);
            sparklineWrap.call(sparkline);

            if (showLastValue) {
                var valueWrap = g.select('.nv-valueWrap');
                var value = valueWrap.selectAll('.nv-currentValue')
                    .data([currentValue]);

                value.enter().append('text').attr('class', 'nv-currentValue')
                    .attr('dx', rightAlignValue ? -8 : 8)
                    .attr('dy', '.9em')
                    .style('text-anchor', rightAlignValue ? 'end' : 'start');

                value
                    .attr('x', availableWidth + (rightAlignValue ? margin.right : 0))
                    .attr('y', alignValue ? function (d) {
                        return y(d)
                    } : 0)
                    .style('fill', sparkline.color()(data[data.length - 1], data.length - 1))
                    .text(yTickFormat(currentValue));
            }

            gEnter.select('.nv-hoverArea').append('rect')
                .on('mousemove', sparklineHover)
                .on('click', function() { paused = !paused })
                .on('mouseout', function() { index = []; updateValueLine(); });

            g.select('.nv-hoverArea rect')
                .attr('transform', function(d) { return 'translate(' + -margin.left + ',' + -margin.top + ')' })
                .attr('width', availableWidth + margin.left + margin.right)
                .attr('height', availableHeight + margin.top);

            //index is currently global (within the chart), may or may not keep it that way
            function updateValueLine() {
                if (paused) return;

                var hoverValue = g.selectAll('.nv-hoverValue').data(index);

                var hoverEnter = hoverValue.enter()
                    .append('g').attr('class', 'nv-hoverValue')
                    .style('stroke-opacity', 0)
                    .style('fill-opacity', 0);

                hoverValue.exit()
                    .transition().duration(250)
                    .style('stroke-opacity', 0)
                    .style('fill-opacity', 0)
                    .remove();

                hoverValue
                    .attr('transform', function(d) { return 'translate(' + x(sparkline.x()(data[d],d)) + ',0)' })
                    .transition().duration(250)
                    .style('stroke-opacity', 1)
                    .style('fill-opacity', 1);

                if (!index.length) return;

                hoverEnter.append('line')
                    .attr('x1', 0)
                    .attr('y1', -margin.top)
                    .attr('x2', 0)
                    .attr('y2', availableHeight);

                hoverEnter.append('text').attr('class', 'nv-xValue')
                    .attr('x', -6)
                    .attr('y', -margin.top)
                    .attr('text-anchor', 'end')
                    .attr('dy', '.9em');

                g.select('.nv-hoverValue .nv-xValue')
                    .text(xTickFormat(sparkline.x()(data[index[0]], index[0])));

                hoverEnter.append('text').attr('class', 'nv-yValue')
                    .attr('x', 6)
                    .attr('y', -margin.top)
                    .attr('text-anchor', 'start')
                    .attr('dy', '.9em');

                g.select('.nv-hoverValue .nv-yValue')
                    .text(yTickFormat(sparkline.y()(data[index[0]], index[0])));
            }

            function sparklineHover() {
                if (paused) return;

                var pos = d3.mouse(this)[0] - margin.left;

                function getClosestIndex(data, x) {
                    var distance = Math.abs(sparkline.x()(data[0], 0) - x);
                    var closestIndex = 0;
                    for (var i = 0; i < data.length; i++){
                        if (Math.abs(sparkline.x()(data[i], i) - x) < distance) {
                            distance = Math.abs(sparkline.x()(data[i], i) - x);
                            closestIndex = i;
                        }
                    }
                    return closestIndex;
                }

                index = [getClosestIndex(data, Math.round(x.invert(pos)))];
                updateValueLine();
            }

        });
        renderWatch.renderEnd('sparklinePlus immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.sparkline = sparkline;

    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:           {get: function(){return width;}, set: function(_){width=_;}},
        height:          {get: function(){return height;}, set: function(_){height=_;}},
        xTickFormat:     {get: function(){return xTickFormat;}, set: function(_){xTickFormat=_;}},
        yTickFormat:     {get: function(){return yTickFormat;}, set: function(_){yTickFormat=_;}},
        showLastValue:   {get: function(){return showLastValue;}, set: function(_){showLastValue=_;}},
        alignValue:      {get: function(){return alignValue;}, set: function(_){alignValue=_;}},
        rightAlignValue: {get: function(){return rightAlignValue;}, set: function(_){rightAlignValue=_;}},
        noData:          {get: function(){return noData;}, set: function(_){noData=_;}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }}
    });

    nv.utils.inheritOptions(chart, sparkline);
    nv.utils.initOptions(chart);

    return chart;
};

nv.models.stackedArea = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = 960
        , height = 500
        , color = nv.utils.defaultColor() // a function that computes the color
        , id = Math.floor(Math.random() * 100000) //Create semi-unique ID incase user doesn't selet one
        , container = null
        , getX = function(d) { return d.x } // accessor to get the x value from a data point
        , getY = function(d) { return d.y } // accessor to get the y value from a data point
        , defined = function(d,i) { return !isNaN(getY(d,i)) && getY(d,i) !== null } // allows a line to be not continuous when it is not defined
        , style = 'stack'
        , offset = 'zero'
        , order = 'default'
        , interpolate = 'linear'  // controls the line interpolation
        , clipEdge = false // if true, masks lines within x and y scale
        , x //can be accessed via chart.xScale()
        , y //can be accessed via chart.yScale()
        , scatter = nv.models.scatter()
        , duration = 250
        , dispatch =  d3.dispatch('areaClick', 'areaMouseover', 'areaMouseout','renderEnd', 'elementClick', 'elementMouseover', 'elementMouseout')
        ;

    scatter
        .pointSize(2.2) // default size
        .pointDomain([2.2, 2.2]) // all the same size by default
    ;

    /************************************
     * offset:
     *   'wiggle' (stream)
     *   'zero' (stacked)
     *   'expand' (normalize to 100%)
     *   'silhouette' (simple centered)
     *
     * order:
     *   'inside-out' (stream)
     *   'default' (input order)
     ************************************/

    var renderWatch = nv.utils.renderWatch(dispatch, duration);

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(scatter);
        selection.each(function(data) {
            var availableWidth = width - margin.left - margin.right,
                availableHeight = height - margin.top - margin.bottom;

            container = d3.select(this);
            nv.utils.initSVG(container);

            // Setup Scales
            x = scatter.xScale();
            y = scatter.yScale();

            var dataRaw = data;
            // Injecting point index into each point because d3.layout.stack().out does not give index
            data.forEach(function(aseries, i) {
                aseries.seriesIndex = i;
                aseries.values = aseries.values.map(function(d, j) {
                    d.index = j;
                    d.seriesIndex = i;
                    return d;
                });
            });

            var dataFiltered = data.filter(function(series) {
                return !series.disabled;
            });

            data = d3.layout.stack()
                .order(order)
                .offset(offset)
                .values(function(d) { return d.values })  //TODO: make values customizeable in EVERY model in this fashion
                .x(getX)
                .y(getY)
                .out(function(d, y0, y) {
                    d.display = {
                        y: y,
                        y0: y0
                    };
                })
            (dataFiltered);

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-stackedarea').data([data]);
            var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-stackedarea');
            var defsEnter = wrapEnter.append('defs');
            var gEnter = wrapEnter.append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-areaWrap');
            gEnter.append('g').attr('class', 'nv-scatterWrap');

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            
            // If the user has not specified forceY, make sure 0 is included in the domain
            // Otherwise, use user-specified values for forceY
            if (scatter.forceY().length == 0) {
                scatter.forceY().push(0);
            }
            
            scatter
                .width(availableWidth)
                .height(availableHeight)
                .x(getX)
                .y(function(d) {
                    if (d.display !== undefined) { return d.display.y + d.display.y0; }
                })
                .color(data.map(function(d,i) {
                    d.color = d.color || color(d, d.seriesIndex);
                    return d.color;
                }));

            var scatterWrap = g.select('.nv-scatterWrap')
                .datum(data);

            scatterWrap.call(scatter);

            defsEnter.append('clipPath')
                .attr('id', 'nv-edge-clip-' + id)
                .append('rect');

            wrap.select('#nv-edge-clip-' + id + ' rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);

            g.attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');

            var area = d3.svg.area()
                .defined(defined)
                .x(function(d,i)  { return x(getX(d,i)) })
                .y0(function(d) {
                    return y(d.display.y0)
                })
                .y1(function(d) {
                    return y(d.display.y + d.display.y0)
                })
                .interpolate(interpolate);

            var zeroArea = d3.svg.area()
                .defined(defined)
                .x(function(d,i)  { return x(getX(d,i)) })
                .y0(function(d) { return y(d.display.y0) })
                .y1(function(d) { return y(d.display.y0) });

            var path = g.select('.nv-areaWrap').selectAll('path.nv-area')
                .data(function(d) { return d });

            path.enter().append('path').attr('class', function(d,i) { return 'nv-area nv-area-' + i })
                .attr('d', function(d,i){
                    return zeroArea(d.values, d.seriesIndex);
                })
                .on('mouseover', function(d,i) {
                    d3.select(this).classed('hover', true);
                    dispatch.areaMouseover({
                        point: d,
                        series: d.key,
                        pos: [d3.event.pageX, d3.event.pageY],
                        seriesIndex: d.seriesIndex
                    });
                })
                .on('mouseout', function(d,i) {
                    d3.select(this).classed('hover', false);
                    dispatch.areaMouseout({
                        point: d,
                        series: d.key,
                        pos: [d3.event.pageX, d3.event.pageY],
                        seriesIndex: d.seriesIndex
                    });
                })
                .on('click', function(d,i) {
                    d3.select(this).classed('hover', false);
                    dispatch.areaClick({
                        point: d,
                        series: d.key,
                        pos: [d3.event.pageX, d3.event.pageY],
                        seriesIndex: d.seriesIndex
                    });
                });

            path.exit().remove();
            path.style('fill', function(d,i){
                    return d.color || color(d, d.seriesIndex)
                })
                .style('stroke', function(d,i){ return d.color || color(d, d.seriesIndex) });
            path.watchTransition(renderWatch,'stackedArea path')
                .attr('d', function(d,i) {
                    return area(d.values,i)
                });

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            scatter.dispatch.on('elementMouseover.area', function(e) {
                g.select('.nv-chart-' + id + ' .nv-area-' + e.seriesIndex).classed('hover', true);
            });
            scatter.dispatch.on('elementMouseout.area', function(e) {
                g.select('.nv-chart-' + id + ' .nv-area-' + e.seriesIndex).classed('hover', false);
            });

            //Special offset functions
            chart.d3_stackedOffset_stackPercent = function(stackData) {
                var n = stackData.length,    //How many series
                    m = stackData[0].length,     //how many points per series
                    i,
                    j,
                    o,
                    y0 = [];

                for (j = 0; j < m; ++j) { //Looping through all points
                    for (i = 0, o = 0; i < dataRaw.length; i++) { //looping through all series
                        o += getY(dataRaw[i].values[j]); //total y value of all series at a certian point in time.
                    }

                    if (o) for (i = 0; i < n; i++) { //(total y value of all series at point in time i) != 0
                        stackData[i][j][1] /= o;
                    } else { //(total y value of all series at point in time i) == 0
                        for (i = 0; i < n; i++) {
                            stackData[i][j][1] = 0;
                        }
                    }
                }
                for (j = 0; j < m; ++j) y0[j] = 0;
                return y0;
            };

        });

        renderWatch.renderEnd('stackedArea immediate');
        return chart;
    }

    //============================================================
    // Global getters and setters
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.scatter = scatter;

    scatter.dispatch.on('elementClick', function(){ dispatch.elementClick.apply(this, arguments); });
    scatter.dispatch.on('elementMouseover', function(){ dispatch.elementMouseover.apply(this, arguments); });
    scatter.dispatch.on('elementMouseout', function(){ dispatch.elementMouseout.apply(this, arguments); });

    chart.interpolate = function(_) {
        if (!arguments.length) return interpolate;
        interpolate = _;
        return chart;
    };

    chart.duration = function(_) {
        if (!arguments.length) return duration;
        duration = _;
        renderWatch.reset(duration);
        scatter.duration(duration);
        return chart;
    };

    chart.dispatch = dispatch;
    chart.scatter = scatter;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        defined: {get: function(){return defined;}, set: function(_){defined=_;}},
        clipEdge: {get: function(){return clipEdge;}, set: function(_){clipEdge=_;}},
        offset:      {get: function(){return offset;}, set: function(_){offset=_;}},
        order:    {get: function(){return order;}, set: function(_){order=_;}},
        interpolate:    {get: function(){return interpolate;}, set: function(_){interpolate=_;}},

        // simple functor options
        x:     {get: function(){return getX;}, set: function(_){getX = d3.functor(_);}},
        y:     {get: function(){return getY;}, set: function(_){getY = d3.functor(_);}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
        }},
        style: {get: function(){return style;}, set: function(_){
            style = _;
            switch (style) {
                case 'stack':
                    chart.offset('zero');
                    chart.order('default');
                    break;
                case 'stream':
                    chart.offset('wiggle');
                    chart.order('inside-out');
                    break;
                case 'stream-center':
                    chart.offset('silhouette');
                    chart.order('inside-out');
                    break;
                case 'expand':
                    chart.offset('expand');
                    chart.order('default');
                    break;
                case 'stack_percent':
                    chart.offset(chart.d3_stackedOffset_stackPercent);
                    chart.order('default');
                    break;
            }
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            scatter.duration(duration);
        }}
    });

    nv.utils.inheritOptions(chart, scatter);
    nv.utils.initOptions(chart);

    return chart;
};

nv.models.stackedAreaChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var stacked = nv.models.stackedArea()
        , xAxis = nv.models.axis()
        , yAxis = nv.models.axis()
        , legend = nv.models.legend()
        , controls = nv.models.legend()
        , interactiveLayer = nv.interactiveGuideline()
        , tooltip = nv.models.tooltip()
        , focus = nv.models.focus(nv.models.stackedArea())
        ;

    var margin = {top: 30, right: 25, bottom: 50, left: 60}
        , width = null
        , height = null
        , color = nv.utils.defaultColor()
        , showControls = true
        , showLegend = true
        , showXAxis = true
        , showYAxis = true
        , rightAlignYAxis = false
        , focusEnable = false
        , useInteractiveGuideline = false
        , showTotalInTooltip = true
        , totalLabel = 'TOTAL'
        , x //can be accessed via chart.xScale()
        , y //can be accessed via chart.yScale()
        , state = nv.utils.state()
        , defaultState = null
        , noData = null
        , dispatch = d3.dispatch('stateChange', 'changeState','renderEnd')
        , controlWidth = 250
        , controlOptions = ['Stacked','Stream','Expanded']
        , controlLabels = {}
        , duration = 250
        ;

    state.style = stacked.style();
    xAxis.orient('bottom').tickPadding(7);
    yAxis.orient((rightAlignYAxis) ? 'right' : 'left');

    tooltip
        .headerFormatter(function(d, i) {
            return xAxis.tickFormat()(d, i);
        })
        .valueFormatter(function(d, i) {
            return yAxis.tickFormat()(d, i);
        });

    interactiveLayer.tooltip
        .headerFormatter(function(d, i) {
            return xAxis.tickFormat()(d, i);
        })
        .valueFormatter(function(d, i) {
            return d == null ? "N/A" : yAxis.tickFormat()(d, i);
        });

    var oldYTickFormat = null,
        oldValueFormatter = null;

    controls.updateState(false);

    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch);
    var style = stacked.style();

    var stateGetter = function(data) {
        return function(){
            return {
                active: data.map(function(d) { return !d.disabled }),
                style: stacked.style()
            };
        }
    };

    var stateSetter = function(data) {
        return function(state) {
            if (state.style !== undefined)
                style = state.style;
            if (state.active !== undefined)
                data.forEach(function(series,i) {
                    series.disabled = !state.active[i];
                });
        }
    };

    var percentFormatter = d3.format('%');

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(stacked);
        if (showXAxis) renderWatch.models(xAxis);
        if (showYAxis) renderWatch.models(yAxis);

        selection.each(function(data) {
            var container = d3.select(this),
                that = this;
            nv.utils.initSVG(container);

            var availableWidth = nv.utils.availableWidth(width, container, margin),
                availableHeight = nv.utils.availableHeight(height, container, margin) - (focusEnable ? focus.height() : 0);

            chart.update = function() { container.transition().duration(duration).call(chart); };
            chart.container = this;

            state
                .setter(stateSetter(data), chart.update)
                .getter(stateGetter(data))
                .update();

            // DEPRECATED set state.disabled
            state.disabled = data.map(function(d) { return !!d.disabled });

            if (!defaultState) {
                var key;
                defaultState = {};
                for (key in state) {
                    if (state[key] instanceof Array)
                        defaultState[key] = state[key].slice(0);
                    else
                        defaultState[key] = state[key];
                }
            }

            // Display No Data message if there's nothing to show.
            if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
                nv.utils.noData(chart, container)
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }
            // Setup Scales
            x = stacked.xScale();
            y = stacked.yScale();

            // Setup containers and skeleton of chart
            var wrap = container.selectAll('g.nv-wrap.nv-stackedAreaChart').data([data]);
            var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-stackedAreaChart').append('g');
            var g = wrap.select('g');

            gEnter.append('g').attr('class', 'nv-legendWrap');
            gEnter.append('g').attr('class', 'nv-controlsWrap');

            var focusEnter = gEnter.append('g').attr('class', 'nv-focus');
            focusEnter.append('g').attr('class', 'nv-background').append('rect');
            focusEnter.append('g').attr('class', 'nv-x nv-axis');
            focusEnter.append('g').attr('class', 'nv-y nv-axis');
            focusEnter.append('g').attr('class', 'nv-stackedWrap');
            focusEnter.append('g').attr('class', 'nv-interactive');

            // g.select("rect").attr("width",availableWidth).attr("height",availableHeight);

            var contextEnter = gEnter.append('g').attr('class', 'nv-focusWrap');

            // Legend
            if (!showLegend) {
                g.select('.nv-legendWrap').selectAll('*').remove();
            } else {
                var legendWidth = (showControls) ? availableWidth - controlWidth : availableWidth;

                legend.width(legendWidth);
                g.select('.nv-legendWrap').datum(data).call(legend);

                if (legend.height() > margin.top) {
                    margin.top = legend.height();
                    availableHeight = nv.utils.availableHeight(height, container, margin) - (focusEnable ? focus.height() : 0);
                }

                g.select('.nv-legendWrap')
                    .attr('transform', 'translate(' + (availableWidth-legendWidth) + ',' + (-margin.top) +')');
            }

            // Controls
            if (!showControls) {
                 g.select('.nv-controlsWrap').selectAll('*').remove();
            } else {
                var controlsData = [
                    {
                        key: controlLabels.stacked || 'Stacked',
                        metaKey: 'Stacked',
                        disabled: stacked.style() != 'stack',
                        style: 'stack'
                    },
                    {
                        key: controlLabels.stream || 'Stream',
                        metaKey: 'Stream',
                        disabled: stacked.style() != 'stream',
                        style: 'stream'
                    },
                    {
                        key: controlLabels.expanded || 'Expanded',
                        metaKey: 'Expanded',
                        disabled: stacked.style() != 'expand',
                        style: 'expand'
                    },
                    {
                        key: controlLabels.stack_percent || 'Stack %',
                        metaKey: 'Stack_Percent',
                        disabled: stacked.style() != 'stack_percent',
                        style: 'stack_percent'
                    }
                ];

                controlWidth = (controlOptions.length/3) * 260;
                controlsData = controlsData.filter(function(d) {
                    return controlOptions.indexOf(d.metaKey) !== -1;
                });

                controls
                    .width( controlWidth )
                    .color(['#444', '#444', '#444']);

                g.select('.nv-controlsWrap')
                    .datum(controlsData)
                    .call(controls);

                if (Math.max(controls.height(), legend.height()) > margin.top) {
                    margin.top = Math.max(controls.height(), legend.height());
                    availableHeight = nv.utils.availableHeight(height, container, margin);
                }

                g.select('.nv-controlsWrap')
                    .attr('transform', 'translate(0,' + (-margin.top) +')');
            }

            wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            if (rightAlignYAxis) {
                g.select(".nv-y.nv-axis")
                    .attr("transform", "translate(" + availableWidth + ",0)");
            }

            //Set up interactive layer
            if (useInteractiveGuideline) {
                interactiveLayer
                    .width(availableWidth)
                    .height(availableHeight)
                    .margin({left: margin.left, top: margin.top})
                    .svgContainer(container)
                    .xScale(x);
                wrap.select(".nv-interactive").call(interactiveLayer);
            }

            g.select('.nv-focus .nv-background rect')
                .attr('width', availableWidth)
                .attr('height', availableHeight);

            stacked
                .width(availableWidth)
                .height(availableHeight)
                .color(data.map(function(d,i) {
                    return d.color || color(d, i);
                }).filter(function(d,i) { return !data[i].disabled; }));

            var stackedWrap = g.select('.nv-focus .nv-stackedWrap')
                .datum(data.filter(function(d) { return !d.disabled; }));

            // Setup Axes
            if (showXAxis) {
                xAxis.scale(x)
                    ._ticks( nv.utils.calcTicksX(availableWidth/100, data) )
                    .tickSize( -availableHeight, 0);
            }

            if (showYAxis) {
                var ticks;
                if (stacked.offset() === 'wiggle') {
                    ticks = 0;
                }
                else {
                    ticks = nv.utils.calcTicksY(availableHeight/36, data);
                }
                yAxis.scale(y)
                    ._ticks(ticks)
                    .tickSize(-availableWidth, 0);
            }

            //============================================================
            // Update Axes
            //============================================================
            function updateXAxis() {
                if(showXAxis) {
                    g.select('.nv-focus .nv-x.nv-axis')
                        .attr('transform', 'translate(0,' + availableHeight + ')')
                        .transition()
                        .duration(duration)
                        .call(xAxis)
                        ;
                }
            }

            function updateYAxis() {
                if(showYAxis) {
                    if (stacked.style() === 'expand' || stacked.style() === 'stack_percent') {
                        var currentFormat = yAxis.tickFormat();

                        if ( !oldYTickFormat || currentFormat !== percentFormatter )
                            oldYTickFormat = currentFormat;

                        //Forces the yAxis to use percentage in 'expand' mode.
                        yAxis.tickFormat(percentFormatter);
                    }
                    else {
                        if (oldYTickFormat) {
                            yAxis.tickFormat(oldYTickFormat);
                            oldYTickFormat = null;
                        }
                    }

                    g.select('.nv-focus .nv-y.nv-axis')
                    .transition().duration(0)
                    .call(yAxis);
                }
            }

            //============================================================
            // Update Focus
            //============================================================
            if(!focusEnable) {
                stackedWrap.transition().call(stacked);
                updateXAxis();
                updateYAxis();
            } else {
                focus.width(availableWidth);
                g.select('.nv-focusWrap')
                    .attr('transform', 'translate(0,' + ( availableHeight + margin.bottom + focus.margin().top) + ')')
                    .datum(data.filter(function(d) { return !d.disabled; }))
                    .call(focus);
                var extent = focus.brush.empty() ? focus.xDomain() : focus.brush.extent();
                if(extent !== null){
                    onBrush(extent);
                }
            }

            //============================================================
            // Event Handling/Dispatching (in chart's scope)
            //------------------------------------------------------------

            stacked.dispatch.on('areaClick.toggle', function(e) {
                if (data.filter(function(d) { return !d.disabled }).length === 1)
                    data.forEach(function(d) {
                        d.disabled = false;
                    });
                else
                    data.forEach(function(d,i) {
                        d.disabled = (i != e.seriesIndex);
                    });

                state.disabled = data.map(function(d) { return !!d.disabled });
                dispatch.stateChange(state);

                chart.update();
            });

            legend.dispatch.on('stateChange', function(newState) {
                for (var key in newState)
                    state[key] = newState[key];
                dispatch.stateChange(state);
                chart.update();
            });

            controls.dispatch.on('legendClick', function(d,i) {
                if (!d.disabled) return;

                controlsData = controlsData.map(function(s) {
                    s.disabled = true;
                    return s;
                });
                d.disabled = false;

                stacked.style(d.style);


                state.style = stacked.style();
                dispatch.stateChange(state);

                chart.update();
            });

            interactiveLayer.dispatch.on('elementMousemove', function(e) {
                stacked.clearHighlights();
                var singlePoint, pointIndex, pointXLocation, allData = [], valueSum = 0, allNullValues = true;
                data
                    .filter(function(series, i) {
                        series.seriesIndex = i;
                        return !series.disabled;
                    })
                    .forEach(function(series,i) {
                        pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
                        var point = series.values[pointIndex];
                        var pointYValue = chart.y()(point, pointIndex);
                        if (pointYValue != null) {
                            stacked.highlightPoint(i, pointIndex, true);
                        }
                        if (typeof point === 'undefined') return;
                        if (typeof singlePoint === 'undefined') singlePoint = point;
                        if (typeof pointXLocation === 'undefined') pointXLocation = chart.xScale()(chart.x()(point,pointIndex));

                        //If we are in 'expand' mode, use the stacked percent value instead of raw value.
                        var tooltipValue = (stacked.style() == 'expand') ? point.display.y : chart.y()(point,pointIndex);
                        allData.push({
                            key: series.key,
                            value: tooltipValue,
                            color: color(series,series.seriesIndex),
                            point: point
                        });

                        if (showTotalInTooltip && stacked.style() != 'expand' && tooltipValue != null) {
                          valueSum += tooltipValue;
                          allNullValues = false;
                        };
                    });

                allData.reverse();

                //Highlight the tooltip entry based on which stack the mouse is closest to.
                if (allData.length > 2) {
                    var yValue = chart.yScale().invert(e.mouseY);
                    var yDistMax = Infinity, indexToHighlight = null;
                    allData.forEach(function(series,i) {

                        //To handle situation where the stacked area chart is negative, we need to use absolute values
                        //when checking if the mouse Y value is within the stack area.
                        yValue = Math.abs(yValue);
                        var stackedY0 = Math.abs(series.point.display.y0);
                        var stackedY = Math.abs(series.point.display.y);
                        if ( yValue >= stackedY0 && yValue <= (stackedY + stackedY0))
                        {
                            indexToHighlight = i;
                            return;
                        }
                    });
                    if (indexToHighlight != null)
                        allData[indexToHighlight].highlight = true;
                }

                //If we are not in 'expand' mode, add a 'Total' row to the tooltip.
                if (showTotalInTooltip && stacked.style() != 'expand' && allData.length >= 2 && !allNullValues) {
                    allData.push({
                        key: totalLabel,
                        value: valueSum,
                        total: true
                    });
                }

                var xValue = chart.x()(singlePoint,pointIndex);

                var valueFormatter = interactiveLayer.tooltip.valueFormatter();
                // Keeps track of the tooltip valueFormatter if the chart changes to expanded view
                if (stacked.style() === 'expand' || stacked.style() === 'stack_percent') {
                    if ( !oldValueFormatter ) {
                        oldValueFormatter = valueFormatter;
                    }
                    //Forces the tooltip to use percentage in 'expand' mode.
                    valueFormatter = d3.format(".1%");
                }
                else {
                    if (oldValueFormatter) {
                        valueFormatter = oldValueFormatter;
                        oldValueFormatter = null;
                    }
                }

                interactiveLayer.tooltip
                    .valueFormatter(valueFormatter)
                    .data(
                    {
                        value: xValue,
                        series: allData
                    }
                )();

                interactiveLayer.renderGuideLine(pointXLocation);

            });

            interactiveLayer.dispatch.on("elementMouseout",function(e) {
                stacked.clearHighlights();
            });

            /* Update `main' graph on brush update. */
            focus.dispatch.on("onBrush", function(extent) {
                onBrush(extent);
            });

            // Update chart from a state object passed to event handler
            dispatch.on('changeState', function(e) {

                if (typeof e.disabled !== 'undefined' && data.length === e.disabled.length) {
                    data.forEach(function(series,i) {
                        series.disabled = e.disabled[i];
                    });

                    state.disabled = e.disabled;
                }

                if (typeof e.style !== 'undefined') {
                    stacked.style(e.style);
                    style = e.style;
                }

                chart.update();
            });

            //============================================================
            // Functions
            //------------------------------------------------------------

            function onBrush(extent) {
                // Update Main (Focus)
                var stackedWrap = g.select('.nv-focus .nv-stackedWrap')
                    .datum(
                    data.filter(function(d) { return !d.disabled; })
                        .map(function(d,i) {
                            return {
                                key: d.key,
                                area: d.area,
                                classed: d.classed,
                                values: d.values.filter(function(d,i) {
                                    return stacked.x()(d,i) >= extent[0] && stacked.x()(d,i) <= extent[1];
                                }),
                                disableTooltip: d.disableTooltip
                            };
                        })
                );
                stackedWrap.transition().duration(duration).call(stacked);

                // Update Main (Focus) Axes
                updateXAxis();
                updateYAxis();
            }

        });

        renderWatch.renderEnd('stacked Area chart immediate');
        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    stacked.dispatch.on('elementMouseover.tooltip', function(evt) {
        evt.point['x'] = stacked.x()(evt.point);
        evt.point['y'] = stacked.y()(evt.point);
        tooltip.data(evt).hidden(false);
    });

    stacked.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true)
    });
    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.stacked = stacked;
    chart.legend = legend;
    chart.controls = controls;
    chart.xAxis = xAxis;
    chart.x2Axis = focus.xAxis;
    chart.yAxis = yAxis;
    chart.y2Axis = focus.yAxis;
    chart.interactiveLayer = interactiveLayer;
    chart.tooltip = tooltip;
    chart.focus = focus;

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        showLegend: {get: function(){return showLegend;}, set: function(_){showLegend=_;}},
        showXAxis:      {get: function(){return showXAxis;}, set: function(_){showXAxis=_;}},
        showYAxis:    {get: function(){return showYAxis;}, set: function(_){showYAxis=_;}},
        defaultState:    {get: function(){return defaultState;}, set: function(_){defaultState=_;}},
        noData:    {get: function(){return noData;}, set: function(_){noData=_;}},
        showControls:    {get: function(){return showControls;}, set: function(_){showControls=_;}},
        controlLabels:    {get: function(){return controlLabels;}, set: function(_){controlLabels=_;}},
        controlOptions:    {get: function(){return controlOptions;}, set: function(_){controlOptions=_;}},
        showTotalInTooltip:      {get: function(){return showTotalInTooltip;}, set: function(_){showTotalInTooltip=_;}},
        totalLabel:      {get: function(){return totalLabel;}, set: function(_){totalLabel=_;}},
        focusEnable:    {get: function(){return focusEnable;}, set: function(_){focusEnable=_;}},
        focusHeight:     {get: function(){return focus.height();}, set: function(_){focus.height(_);}},
        brushExtent: {get: function(){return focus.brushExtent();}, set: function(_){focus.brushExtent(_);}},

        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
        }},
        focusMargin: {get: function(){return focus.margin}, set: function(_){
            focus.margin.top    = _.top    !== undefined ? _.top    : focus.margin.top;
            focus.margin.right  = _.right  !== undefined ? _.right  : focus.margin.right;
            focus.margin.bottom = _.bottom !== undefined ? _.bottom : focus.margin.bottom;
            focus.margin.left   = _.left   !== undefined ? _.left   : focus.margin.left;
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            stacked.duration(duration);
            xAxis.duration(duration);
            yAxis.duration(duration);
        }},
        color:  {get: function(){return color;}, set: function(_){
            color = nv.utils.getColor(_);
            legend.color(color);
            stacked.color(color);
            focus.color(color);
        }},
        x: {get: function(){return stacked.x();}, set: function(_){
            stacked.x(_);
            focus.x(_);
        }},
        y: {get: function(){return stacked.y();}, set: function(_){
            stacked.y(_);
            focus.y(_);
        }},
        rightAlignYAxis: {get: function(){return rightAlignYAxis;}, set: function(_){
            rightAlignYAxis = _;
            yAxis.orient( rightAlignYAxis ? 'right' : 'left');
        }},
        useInteractiveGuideline: {get: function(){return useInteractiveGuideline;}, set: function(_){
            useInteractiveGuideline = !!_;
            chart.interactive(!_);
            chart.useVoronoi(!_);
            stacked.scatter.interactive(!_);
        }}
    });

    nv.utils.inheritOptions(chart, stacked);
    nv.utils.initOptions(chart);

    return chart;
};

nv.models.stackedAreaWithFocusChart = function() {
  return nv.models.stackedAreaChart()
    .margin({ bottom: 30 })
    .focusEnable( true );
};
// based on http://bl.ocks.org/kerryrodden/477c1bfb081b783f80ad
nv.models.sunburst = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var margin = {top: 0, right: 0, bottom: 0, left: 0}
        , width = 600
        , height = 600
        , mode = "count"
        , modes = {count: function(d) { return 1; }, value: function(d) { return d.value || d.size }, size: function(d) { return d.value || d.size }}
        , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
        , container = null
        , color = nv.utils.defaultColor()
        , showLabels = false
        , labelFormat = function(d){if(mode === 'count'){return d.name + ' #' + d.value}else{return d.name + ' ' + (d.value || d.size)}}
        , labelThreshold = 0.02
        , sort = function(d1, d2){return d1.name > d2.name;}
        , key = function(d,i){return d.name;}
        , groupColorByParent = true
        , duration = 500
        , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMousemove', 'elementMouseover', 'elementMouseout', 'renderEnd');

    //============================================================
    // aux functions and setup
    //------------------------------------------------------------

    var x = d3.scale.linear().range([0, 2 * Math.PI]);
    var y = d3.scale.sqrt();

    var partition = d3.layout.partition().sort(sort);

    var node, availableWidth, availableHeight, radius;
    var prevPositions = {};

    var arc = d3.svg.arc()
        .startAngle(function(d) {return Math.max(0, Math.min(2 * Math.PI, x(d.x))) })
        .endAngle(function(d) {return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))) })
        .innerRadius(function(d) {return Math.max(0, y(d.y)) })
        .outerRadius(function(d) {return Math.max(0, y(d.y + d.dy)) });

    function rotationToAvoidUpsideDown(d) {
        var centerAngle = computeCenterAngle(d);
        if(centerAngle > 90){
            return 180;
        }
        else {
            return 0;
        }
    }

    function computeCenterAngle(d) {
        var startAngle = Math.max(0, Math.min(2 * Math.PI, x(d.x)));
        var endAngle = Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
        var centerAngle = (((startAngle + endAngle) / 2) * (180 / Math.PI)) - 90;
        return centerAngle;
    }

    function computeNodePercentage(d) {
        var startAngle = Math.max(0, Math.min(2 * Math.PI, x(d.x)));
        var endAngle = Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
        return (endAngle - startAngle) / (2 * Math.PI);
    }

    function labelThresholdMatched(d) {
        var startAngle = Math.max(0, Math.min(2 * Math.PI, x(d.x)));
        var endAngle = Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));

        var size = endAngle - startAngle;
        return size > labelThreshold;
    }

    // When zooming: interpolate the scales.
    function arcTweenZoom(e,i) {
        var xd = d3.interpolate(x.domain(), [node.x, node.x + node.dx]),
        yd = d3.interpolate(y.domain(), [node.y, 1]),
        yr = d3.interpolate(y.range(), [node.y ? 20 : 0, radius]);

        if (i === 0) {
            return function() {return arc(e);}
        }
        else {
            return function (t) {
                x.domain(xd(t));
                y.domain(yd(t)).range(yr(t));
                return arc(e);
            }
        };
    }

    function arcTweenUpdate(d) {
        var ipo = d3.interpolate({x: d.x0, dx: d.dx0, y: d.y0, dy: d.dy0}, d);

        return function (t) {
            var b = ipo(t);

            d.x0 = b.x;
            d.dx0 = b.dx;
            d.y0 = b.y;
            d.dy0 = b.dy;

            return arc(b);
        };
    }

    function updatePrevPosition(node) {
        var k = key(node);
        if(! prevPositions[k]) prevPositions[k] = {};
        var pP = prevPositions[k];
        pP.dx = node.dx;
        pP.x = node.x;
        pP.dy = node.dy;
        pP.y = node.y;
    }

    function storeRetrievePrevPositions(nodes) {
        nodes.forEach(function(n){
            var k = key(n);
            var pP = prevPositions[k];
            //console.log(k,n,pP);
            if( pP ){
                n.dx0 = pP.dx;
                n.x0 = pP.x;
                n.dy0 = pP.dy;
                n.y0 = pP.y;
            }
            else {
                n.dx0 = n.dx;
                n.x0 = n.x;
                n.dy0 = n.dy;
                n.y0 = n.y;
            }
            updatePrevPosition(n);
        });
    }

    function zoomClick(d) {
        var labels = container.selectAll('text')
        var path = container.selectAll('path')

        // fade out all text elements
        labels.transition().attr("opacity",0);

        // to allow reference to the new center node
        node = d;

        path.transition()
            .duration(duration)
            .attrTween("d", arcTweenZoom)
            .each('end', function(e) {
                // partially taken from here: http://bl.ocks.org/metmajer/5480307
                // check if the animated element's data e lies within the visible angle span given in d
                if(e.x >= d.x && e.x < (d.x + d.dx) ){
                    if(e.depth >= d.depth){
                        // get a selection of the associated text element
                        var parentNode = d3.select(this.parentNode);
                        var arcText = parentNode.select('text');

                        // fade in the text element and recalculate positions
                        arcText.transition().duration(duration)
                        .text( function(e){return labelFormat(e) })
                        .attr("opacity", function(d){
                            if(labelThresholdMatched(d)) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        })
                        .attr("transform", function() {
                            var width = this.getBBox().width;
                            if(e.depth === 0)
                            return "translate(" + (width / 2 * - 1) + ",0)";
                            else if(e.depth === d.depth){
                                return "translate(" + (y(e.y) + 5) + ",0)";
                            }
                            else {
                                var centerAngle = computeCenterAngle(e);
                                var rotation = rotationToAvoidUpsideDown(e);
                                if (rotation === 0) {
                                    return 'rotate('+ centerAngle +')translate(' + (y(e.y) + 5) + ',0)';
                                }
                                else {
                                    return 'rotate('+ centerAngle +')translate(' + (y(e.y) + width + 5) + ',0)rotate(' + rotation + ')';
                                }
                            }
                        });
                    }
                }
            })
    }

    //============================================================
    // chart function
    //------------------------------------------------------------
    var renderWatch = nv.utils.renderWatch(dispatch);

    function chart(selection) {
        renderWatch.reset();

        selection.each(function(data) {
            container = d3.select(this);
            availableWidth = nv.utils.availableWidth(width, container, margin);
            availableHeight = nv.utils.availableHeight(height, container, margin);
            radius = Math.min(availableWidth, availableHeight) / 2;

            y.range([0, radius]);

            // Setup containers and skeleton of chart
            var wrap = container.select('g.nvd3.nv-wrap.nv-sunburst');
            if( !wrap[0][0] ) {
                wrap = container.append('g')
                    .attr('class', 'nvd3 nv-wrap nv-sunburst nv-chart-' + id)
                    .attr('transform', 'translate(' + ((availableWidth / 2) + margin.left + margin.right) + ',' + ((availableHeight / 2) + margin.top + margin.bottom) + ')');
            } else {
                wrap.attr('transform', 'translate(' + ((availableWidth / 2) + margin.left + margin.right) + ',' + ((availableHeight / 2) + margin.top + margin.bottom) + ')');
            }

            container.on('click', function (d, i) {
                dispatch.chartClick({
                    data: d,
                    index: i,
                    pos: d3.event,
                    id: id
                });
            });

            partition.value(modes[mode] || modes["count"]);

            //reverse the drawing order so that the labels of inner
            //arcs are drawn on top of the outer arcs.
            var nodes = partition.nodes(data[0]).reverse()

            storeRetrievePrevPositions(nodes);
            var cG = wrap.selectAll('.arc-container').data(nodes, key)

            //handle new datapoints
            var cGE = cG.enter()
                .append("g")
                .attr("class",'arc-container')

            cGE.append("path")
                .attr("d", arc)
                .style("fill", function (d) {
                    if (d.color) {
                        return d.color;
                    }
                    else if (groupColorByParent) {
                        return color((d.children ? d : d.parent).name);
                    }
                    else {
                        return color(d.name);
                    }
                })
                .style("stroke", "#FFF")
                .on("click", zoomClick)
                .on('mouseover', function(d,i){
                    d3.select(this).classed('hover', true).style('opacity', 0.8);
                    dispatch.elementMouseover({
                        data: d,
                        color: d3.select(this).style("fill"),
                        percent: computeNodePercentage(d)
                    });
                })
                .on('mouseout', function(d,i){
                    d3.select(this).classed('hover', false).style('opacity', 1);
                    dispatch.elementMouseout({
                        data: d
                    });
                })
                .on('mousemove', function(d,i){
                    dispatch.elementMousemove({
                        data: d
                    });
                });

            ///Iterating via each and selecting based on the this
            ///makes it work ... a cG.selectAll('path') doesn't.
            ///Without iteration the data (in the element) didn't update.
            cG.each(function(d){
                d3.select(this).select('path')
                    .transition()
                    .duration(duration)
                    .attrTween('d', arcTweenUpdate);
            });

            if(showLabels){
                //remove labels first and add them back
                cG.selectAll('text').remove();

                //this way labels are on top of newly added arcs
                cG.append('text')
                    .text( function(e){ return labelFormat(e)})
                    .transition()
                    .duration(duration)
                    .attr("opacity", function(d){
                        if(labelThresholdMatched(d)) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    })
                    .attr("transform", function(d) {
                        var width = this.getBBox().width;
                        if(d.depth === 0){
                            return "rotate(0)translate(" + (width / 2 * -1) + ",0)";
                        }
                        else {
                            var centerAngle = computeCenterAngle(d);
                            var rotation = rotationToAvoidUpsideDown(d);
                            if (rotation === 0) {
                                return 'rotate('+ centerAngle +')translate(' + (y(d.y) + 5) + ',0)';
                            }
                            else {
                                return 'rotate('+ centerAngle +')translate(' + (y(d.y) + width + 5) + ',0)rotate(' + rotation + ')';
                            }
                        }
                    });
            }

            //zoom out to the center when the data is updated.
            zoomClick(nodes[nodes.length - 1])


            //remove unmatched elements ...
            cG.exit()
                .transition()
                .duration(duration)
                .attr('opacity',0)
                .each('end',function(d){
                    var k = key(d);
                    prevPositions[k] = undefined;
                })
                .remove();
        });


        renderWatch.renderEnd('sunburst immediate');
        return chart;
    }

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    chart.dispatch = dispatch;
    chart.options = nv.utils.optionsFunc.bind(chart);

    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        width:      {get: function(){return width;}, set: function(_){width=_;}},
        height:     {get: function(){return height;}, set: function(_){height=_;}},
        mode:       {get: function(){return mode;}, set: function(_){mode=_;}},
        id:         {get: function(){return id;}, set: function(_){id=_;}},
        duration:   {get: function(){return duration;}, set: function(_){duration=_;}},
        groupColorByParent: {get: function(){return groupColorByParent;}, set: function(_){groupColorByParent=!!_;}},
        showLabels: {get: function(){return showLabels;}, set: function(_){showLabels=!!_}},
        labelFormat: {get: function(){return labelFormat;}, set: function(_){labelFormat=_}},
        labelThreshold: {get: function(){return labelThreshold;}, set: function(_){labelThreshold=_}},
        sort: {get: function(){return sort;}, set: function(_){sort=_}},
        key: {get: function(){return key;}, set: function(_){key=_}},
        // options that require extra logic in the setter
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    != undefined ? _.top    : margin.top;
            margin.right  = _.right  != undefined ? _.right  : margin.right;
            margin.bottom = _.bottom != undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   != undefined ? _.left   : margin.left;
        }},
        color: {get: function(){return color;}, set: function(_){
            color=nv.utils.getColor(_);
        }}
    });

    nv.utils.initOptions(chart);
    return chart;
};
nv.models.sunburstChart = function() {
    "use strict";

    //============================================================
    // Public Variables with Default Settings
    //------------------------------------------------------------

    var sunburst = nv.models.sunburst();
    var tooltip = nv.models.tooltip();

    var margin = {top: 30, right: 20, bottom: 20, left: 20}
        , width = null
        , height = null
        , color = nv.utils.defaultColor()
        , showTooltipPercent = false
        , id = Math.round(Math.random() * 100000)
        , defaultState = null
        , noData = null
        , duration = 250
        , dispatch = d3.dispatch('stateChange', 'changeState','renderEnd');


    //============================================================
    // Private Variables
    //------------------------------------------------------------

    var renderWatch = nv.utils.renderWatch(dispatch);

    tooltip
        .duration(0)
        .headerEnabled(false)
        .valueFormatter(function(d){return d;});

    //============================================================
    // Chart function
    //------------------------------------------------------------

    function chart(selection) {
        renderWatch.reset();
        renderWatch.models(sunburst);

        selection.each(function(data) {
            var container = d3.select(this);

            nv.utils.initSVG(container);

            var availableWidth = nv.utils.availableWidth(width, container, margin);
            var availableHeight = nv.utils.availableHeight(height, container, margin);

            chart.update = function() {
                if (duration === 0) {
                    container.call(chart);
                } else {
                    container.transition().duration(duration).call(chart);
                }
            };
            chart.container = container;

            // Display No Data message if there's nothing to show.
            if (!data || !data.length) {
                nv.utils.noData(chart, container);
                return chart;
            } else {
                container.selectAll('.nv-noData').remove();
            }

            sunburst.width(availableWidth).height(availableHeight).margin(margin);
            container.call(sunburst);
        });

        renderWatch.renderEnd('sunburstChart immediate');
        return chart;
    }

    //============================================================
    // Event Handling/Dispatching (out of chart's scope)
    //------------------------------------------------------------

    sunburst.dispatch.on('elementMouseover.tooltip', function(evt) {
        evt.series = {
            key: evt.data.name,
            value: (evt.data.value || evt.data.size),
            color: evt.color,
            percent: evt.percent
        };
        if (!showTooltipPercent) {
            delete evt.percent;
            delete evt.series.percent;
        }
        tooltip.data(evt).hidden(false);
    });

    sunburst.dispatch.on('elementMouseout.tooltip', function(evt) {
        tooltip.hidden(true);
    });

    sunburst.dispatch.on('elementMousemove.tooltip', function(evt) {
        tooltip();
    });

    //============================================================
    // Expose Public Variables
    //------------------------------------------------------------

    // expose chart's sub-components
    chart.dispatch = dispatch;
    chart.sunburst = sunburst;
    chart.tooltip = tooltip;
    chart.options = nv.utils.optionsFunc.bind(chart);

    // use Object get/set functionality to map between vars and chart functions
    chart._options = Object.create({}, {
        // simple options, just get/set the necessary values
        noData:             {get: function(){return noData;},               set: function(_){noData=_;}},
        defaultState:       {get: function(){return defaultState;},         set: function(_){defaultState=_;}},
        showTooltipPercent: {get: function(){return showTooltipPercent;},   set: function(_){showTooltipPercent=_;}},

        // options that require extra logic in the setter
        color: {get: function(){return color;}, set: function(_){
            color = _;
            sunburst.color(color);
        }},
        duration: {get: function(){return duration;}, set: function(_){
            duration = _;
            renderWatch.reset(duration);
            sunburst.duration(duration);
        }},
        margin: {get: function(){return margin;}, set: function(_){
            margin.top    = _.top    !== undefined ? _.top    : margin.top;
            margin.right  = _.right  !== undefined ? _.right  : margin.right;
            margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
            margin.left   = _.left   !== undefined ? _.left   : margin.left;
            sunburst.margin(margin);
        }}
    });
    nv.utils.inheritOptions(chart, sunburst);
    nv.utils.initOptions(chart);
    return chart;

};

nv.version = "1.8.4-dev";
})();