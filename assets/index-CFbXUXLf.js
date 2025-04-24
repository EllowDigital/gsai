var Im=t=>{throw TypeError(t)};var ed=(t,e,n)=>e.has(t)||Im("Cannot "+n);var J=(t,e,n)=>(ed(t,e,"read from private field"),n?n.call(t):e.get(t)),it=(t,e,n)=>e.has(t)?Im("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ve=(t,e,n,r)=>(ed(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),qt=(t,e,n)=>(ed(t,e,"access private method"),n);var El=(t,e,n,r)=>({set _(i){Ve(t,e,i,n)},get _(){return J(t,e,r)}});function dE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function D0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N0={exports:{}},xu={},I0={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=Symbol.for("react.element"),fE=Symbol.for("react.portal"),hE=Symbol.for("react.fragment"),pE=Symbol.for("react.strict_mode"),mE=Symbol.for("react.profiler"),gE=Symbol.for("react.provider"),vE=Symbol.for("react.context"),_E=Symbol.for("react.forward_ref"),xE=Symbol.for("react.suspense"),yE=Symbol.for("react.memo"),SE=Symbol.for("react.lazy"),Um=Symbol.iterator;function EE(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var U0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F0=Object.assign,O0={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=O0,this.updater=n||U0}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k0(){}k0.prototype=Yo.prototype;function op(t,e,n){this.props=t,this.context=e,this.refs=O0,this.updater=n||U0}var ap=op.prototype=new k0;ap.constructor=op;F0(ap,Yo.prototype);ap.isPureReactComponent=!0;var Fm=Array.isArray,B0=Object.prototype.hasOwnProperty,lp={current:null},z0={key:!0,ref:!0,__self:!0,__source:!0};function V0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)B0.call(e,r)&&!z0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ol,type:t,key:s,ref:o,props:i,_owner:lp.current}}function wE(t,e){return{$$typeof:ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ol}function ME(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Om=/\/+/g;function td(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ME(""+t.key):e.toString(36)}function mc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ol:case fE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+td(o,0):r,Fm(i)?(n="",t!=null&&(n=t.replace(Om,"$&/")+"/"),mc(i,e,n,"",function(c){return c})):i!=null&&(cp(i)&&(i=wE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Om,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+td(s,a);o+=mc(s,e,n,l,i)}else if(l=EE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+td(s,a++),o+=mc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wl(t,e,n){if(t==null)return t;var r=[],i=0;return mc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function TE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},gc={transition:null},bE={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:gc,ReactCurrentOwner:lp};function H0(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:wl,forEach:function(t,e,n){wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wl(t,function(){e++}),e},toArray:function(t){return wl(t,function(e){return e})||[]},only:function(t){if(!cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=Yo;Qe.Fragment=hE;Qe.Profiler=mE;Qe.PureComponent=op;Qe.StrictMode=pE;Qe.Suspense=xE;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bE;Qe.act=H0;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=F0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)B0.call(e,l)&&!z0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ol,type:t.type,key:i,ref:s,props:r,_owner:o}};Qe.createContext=function(t){return t={$$typeof:vE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gE,_context:t},t.Consumer=t};Qe.createElement=V0;Qe.createFactory=function(t){var e=V0.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:_E,render:t}};Qe.isValidElement=cp;Qe.lazy=function(t){return{$$typeof:SE,_payload:{_status:-1,_result:t},_init:TE}};Qe.memo=function(t,e){return{$$typeof:yE,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=gc.transition;gc.transition={};try{t()}finally{gc.transition=e}};Qe.unstable_act=H0;Qe.useCallback=function(t,e){return dn.current.useCallback(t,e)};Qe.useContext=function(t){return dn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return dn.current.useEffect(t,e)};Qe.useId=function(){return dn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return dn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Qe.useRef=function(t){return dn.current.useRef(t)};Qe.useState=function(t){return dn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return dn.current.useTransition()};Qe.version="18.3.1";I0.exports=Qe;var P=I0.exports;const de=D0(P),G0=dE({__proto__:null,default:de},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AE=P,CE=Symbol.for("react.element"),RE=Symbol.for("react.fragment"),PE=Object.prototype.hasOwnProperty,LE=AE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DE={key:!0,ref:!0,__self:!0,__source:!0};function W0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PE.call(e,r)&&!DE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:CE,type:t,key:s,ref:o,props:i,_owner:LE.current}}xu.Fragment=RE;xu.jsx=W0;xu.jsxs=W0;N0.exports=xu;var z=N0.exports,j0={exports:{}},On={},X0={exports:{}},$0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var Y=D.length;D.push(B);e:for(;0<Y;){var re=Y-1>>>1,oe=D[re];if(0<i(oe,B))D[re]=B,D[Y]=oe,Y=re;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],Y=D.pop();if(Y!==B){D[0]=Y;e:for(var re=0,oe=D.length,Ee=oe>>>1;re<Ee;){var W=2*(re+1)-1,ie=D[W],he=W+1,ne=D[he];if(0>i(ie,Y))he<oe&&0>i(ne,ie)?(D[re]=ne,D[he]=Y,re=he):(D[re]=ie,D[W]=Y,re=W);else if(he<oe&&0>i(ne,Y))D[re]=ne,D[he]=Y,re=he;else break e}}return B}function i(D,B){var Y=D.sortIndex-B.sortIndex;return Y!==0?Y:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=D)r(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function y(D){if(g=!1,x(D),!v)if(n(l)!==null)v=!0,U(A);else{var B=n(c);B!==null&&K(y,B.startTime-D)}}function A(D,B){v=!1,g&&(g=!1,f(L),L=-1),p=!0;var Y=h;try{for(x(B),d=n(l);d!==null&&(!(d.expirationTime>B)||D&&!R());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var oe=re(d.expirationTime<=B);B=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&r(l),x(B)}else r(l);d=n(l)}if(d!==null)var Ee=!0;else{var W=n(c);W!==null&&K(y,W.startTime-B),Ee=!1}return Ee}finally{d=null,h=Y,p=!1}}var T=!1,M=null,L=-1,E=5,S=-1;function R(){return!(t.unstable_now()-S<E)}function O(){if(M!==null){var D=t.unstable_now();S=D;var B=!0;try{B=M(!0,D)}finally{B?k():(T=!1,M=null)}}else T=!1}var k;if(typeof _=="function")k=function(){_(O)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,q=I.port2;I.port1.onmessage=O,k=function(){q.postMessage(null)}}else k=function(){m(O,0)};function U(D){M=D,T||(T=!0,k())}function K(D,B){L=m(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,U(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var Y=h;h=B;try{return D()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=h;h=D;try{return B()}finally{h=Y}},t.unstable_scheduleCallback=function(D,B,Y){var re=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?re+Y:re):Y=re,D){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Y+oe,D={id:u++,callback:B,priorityLevel:D,startTime:Y,expirationTime:oe,sortIndex:-1},Y>re?(D.sortIndex=Y,e(c,D),n(l)===null&&D===n(c)&&(g?(f(L),L=-1):g=!0,K(y,Y-re))):(D.sortIndex=oe,e(l,D),v||p||(v=!0,U(A))),D},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(D){var B=h;return function(){var Y=h;h=B;try{return D.apply(this,arguments)}finally{h=Y}}}})($0);X0.exports=$0;var NE=X0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE=P,Fn=NE;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y0=new Set,Na={};function Fs(t,e){Io(t,e),Io(t+"Capture",e)}function Io(t,e){for(Na[t]=e,t=0;t<e.length;t++)Y0.add(e[t])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=Object.prototype.hasOwnProperty,UE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Bm={};function FE(t){return df.call(Bm,t)?!0:df.call(km,t)?!1:UE.test(t)?Bm[t]=!0:(km[t]=!0,!1)}function OE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kE(t,e,n,r){if(e===null||typeof e>"u"||OE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var up=/[\-:]([a-z])/g;function dp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(up,dp);Xt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(up,dp);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(up,dp);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function fp(t,e,n,r){var i=Xt.hasOwnProperty(e)?Xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kE(e,n,i,r)&&(n=null),r||i===null?FE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var oi=IE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),eo=Symbol.for("react.portal"),to=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),q0=Symbol.for("react.provider"),K0=Symbol.for("react.context"),pp=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),mp=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),Q0=Symbol.for("react.offscreen"),zm=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,nd;function _a(t){if(nd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nd=e&&e[1]||""}return`
`+nd+t}var rd=!1;function id(t,e){if(!t||rd)return"";rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function BE(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=id(t.type,!1),t;case 11:return t=id(t.type.render,!1),t;case 1:return t=id(t.type,!0),t;default:return""}}function mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case to:return"Fragment";case eo:return"Portal";case ff:return"Profiler";case hp:return"StrictMode";case hf:return"Suspense";case pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K0:return(t.displayName||"Context")+".Consumer";case q0:return(t._context.displayName||"Context")+".Provider";case pp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mp:return e=t.displayName||null,e!==null?e:mf(t.type)||"Memo";case xi:e=t._payload,t=t._init;try{return mf(t(e))}catch{}}return null}function zE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mf(e);case 8:return e===hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VE(t){var e=Z0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tl(t){t._valueTracker||(t._valueTracker=VE(t))}function J0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Z0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gf(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e_(t,e){e=e.checked,e!=null&&fp(t,"checked",e,!1)}function vf(t,e){e_(t,e);var n=Hi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function po(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(xa(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function t_(t,e){var n=Hi(e.value),r=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bl,r_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bl=bl||document.createElement("div"),bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HE=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){HE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function i_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function s_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=i_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var GE=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(GE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wf=null;function gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mf=null,mo=null,go=null;function jm(t){if(t=cl(t)){if(typeof Mf!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Mu(e),Mf(t.stateNode,t.type,e))}}function o_(t){mo?go?go.push(t):go=[t]:mo=t}function a_(){if(mo){var t=mo,e=go;if(go=mo=null,jm(t),e)for(t=0;t<e.length;t++)jm(e[t])}}function l_(t,e){return t(e)}function c_(){}var sd=!1;function u_(t,e,n){if(sd)return t(e,n);sd=!0;try{return l_(t,e,n)}finally{sd=!1,(mo!==null||go!==null)&&(c_(),a_())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var r=Mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Tf=!1;if(Zr)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{Tf=!1}function WE(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ma=!1,Bc=null,zc=!1,bf=null,jE={onError:function(t){Ma=!0,Bc=t}};function XE(t,e,n,r,i,s,o,a,l){Ma=!1,Bc=null,WE.apply(jE,arguments)}function $E(t,e,n,r,i,s,o,a,l){if(XE.apply(this,arguments),Ma){if(Ma){var c=Bc;Ma=!1,Bc=null}else throw Error(ae(198));zc||(zc=!0,bf=c)}}function Os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(t){if(Os(t)!==t)throw Error(ae(188))}function YE(t){var e=t.alternate;if(!e){if(e=Os(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xm(i),t;if(s===r)return Xm(i),e;s=s.sibling}throw Error(ae(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==r)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function f_(t){return t=YE(t),t!==null?h_(t):null}function h_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h_(t);if(e!==null)return e;t=t.sibling}return null}var p_=Fn.unstable_scheduleCallback,$m=Fn.unstable_cancelCallback,qE=Fn.unstable_shouldYield,KE=Fn.unstable_requestPaint,At=Fn.unstable_now,QE=Fn.unstable_getCurrentPriorityLevel,vp=Fn.unstable_ImmediatePriority,m_=Fn.unstable_UserBlockingPriority,Vc=Fn.unstable_NormalPriority,ZE=Fn.unstable_LowPriority,g_=Fn.unstable_IdlePriority,yu=null,br=null;function JE(t){if(br&&typeof br.onCommitFiberRoot=="function")try{br.onCommitFiberRoot(yu,t,void 0,(t.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:nw,ew=Math.log,tw=Math.LN2;function nw(t){return t>>>=0,t===0?32:31-(ew(t)/tw|0)|0}var Al=64,Cl=4194304;function ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ya(a):(s&=o,s!==0&&(r=ya(s)))}else o=n&~i,o!==0?r=ya(o):s!==0&&(r=ya(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ur(e),i=1<<n,r|=t[n],e&=~i;return r}function rw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ur(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=rw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Af(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function od(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ur(e),t[e]=n}function sw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ur(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function _p(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ur(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ut=0;function __(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var x_,xp,y_,S_,E_,Cf=!1,Rl=[],Di=null,Ni=null,Ii=null,Fa=new Map,Oa=new Map,Si=[],ow="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ym(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=cl(e),e!==null&&xp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aw(t,e,n,r,i){switch(e){case"focusin":return Di=sa(Di,t,e,n,r,i),!0;case"dragenter":return Ni=sa(Ni,t,e,n,r,i),!0;case"mouseover":return Ii=sa(Ii,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fa.set(s,sa(Fa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oa.set(s,sa(Oa.get(s)||null,t,e,n,r,i)),!0}return!1}function w_(t){var e=ms(t.target);if(e!==null){var n=Os(e);if(n!==null){if(e=n.tag,e===13){if(e=d_(n),e!==null){t.blockedOn=e,E_(t.priority,function(){y_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wf=r,n.target.dispatchEvent(r),wf=null}else return e=cl(n),e!==null&&xp(e),t.blockedOn=n,!1;e.shift()}return!0}function qm(t,e,n){vc(t)&&n.delete(e)}function lw(){Cf=!1,Di!==null&&vc(Di)&&(Di=null),Ni!==null&&vc(Ni)&&(Ni=null),Ii!==null&&vc(Ii)&&(Ii=null),Fa.forEach(qm),Oa.forEach(qm)}function oa(t,e){t.blockedOn===e&&(t.blockedOn=null,Cf||(Cf=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,lw)))}function ka(t){function e(i){return oa(i,t)}if(0<Rl.length){oa(Rl[0],t);for(var n=1;n<Rl.length;n++){var r=Rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Di!==null&&oa(Di,t),Ni!==null&&oa(Ni,t),Ii!==null&&oa(Ii,t),Fa.forEach(e),Oa.forEach(e),n=0;n<Si.length;n++)r=Si[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Si.length&&(n=Si[0],n.blockedOn===null);)w_(n),n.blockedOn===null&&Si.shift()}var vo=oi.ReactCurrentBatchConfig,Gc=!0;function cw(t,e,n,r){var i=ut,s=vo.transition;vo.transition=null;try{ut=1,yp(t,e,n,r)}finally{ut=i,vo.transition=s}}function uw(t,e,n,r){var i=ut,s=vo.transition;vo.transition=null;try{ut=4,yp(t,e,n,r)}finally{ut=i,vo.transition=s}}function yp(t,e,n,r){if(Gc){var i=Rf(t,e,n,r);if(i===null)gd(t,e,r,Wc,n),Ym(t,r);else if(aw(i,t,e,n,r))r.stopPropagation();else if(Ym(t,r),e&4&&-1<ow.indexOf(t)){for(;i!==null;){var s=cl(i);if(s!==null&&x_(s),s=Rf(t,e,n,r),s===null&&gd(t,e,r,Wc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gd(t,e,r,null,n)}}var Wc=null;function Rf(t,e,n,r){if(Wc=null,t=gp(r),t=ms(t),t!==null)if(e=Os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wc=t,null}function M_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QE()){case vp:return 1;case m_:return 4;case Vc:case ZE:return 16;case g_:return 536870912;default:return 16}default:return 16}}var Ri=null,Sp=null,_c=null;function T_(){if(_c)return _c;var t,e=Sp,n=e.length,r,i="value"in Ri?Ri.value:Ri.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _c=i.slice(t,1<r?1-r:void 0)}function xc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function Km(){return!1}function kn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pl:Km,this.isPropagationStopped=Km,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ep=kn(qo),ll=wt({},qo,{view:0,detail:0}),dw=kn(ll),ad,ld,aa,Su=wt({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(ad=t.screenX-aa.screenX,ld=t.screenY-aa.screenY):ld=ad=0,aa=t),ad)},movementY:function(t){return"movementY"in t?t.movementY:ld}}),Qm=kn(Su),fw=wt({},Su,{dataTransfer:0}),hw=kn(fw),pw=wt({},ll,{relatedTarget:0}),cd=kn(pw),mw=wt({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),gw=kn(mw),vw=wt({},qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_w=kn(vw),xw=wt({},qo,{data:0}),Zm=kn(xw),yw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ew={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ww(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ew[t])?!!e[t]:!1}function wp(){return ww}var Mw=wt({},ll,{key:function(t){if(t.key){var e=yw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wp,charCode:function(t){return t.type==="keypress"?xc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tw=kn(Mw),bw=wt({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=kn(bw),Aw=wt({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wp}),Cw=kn(Aw),Rw=wt({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pw=kn(Rw),Lw=wt({},Su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dw=kn(Lw),Nw=[9,13,27,32],Mp=Zr&&"CompositionEvent"in window,Ta=null;Zr&&"documentMode"in document&&(Ta=document.documentMode);var Iw=Zr&&"TextEvent"in window&&!Ta,b_=Zr&&(!Mp||Ta&&8<Ta&&11>=Ta),eg=" ",tg=!1;function A_(t,e){switch(t){case"keyup":return Nw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var no=!1;function Uw(t,e){switch(t){case"compositionend":return C_(e);case"keypress":return e.which!==32?null:(tg=!0,eg);case"textInput":return t=e.data,t===eg&&tg?null:t;default:return null}}function Fw(t,e){if(no)return t==="compositionend"||!Mp&&A_(t,e)?(t=T_(),_c=Sp=Ri=null,no=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b_&&e.locale!=="ko"?null:e.data;default:return null}}var Ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ow[t.type]:e==="textarea"}function R_(t,e,n,r){o_(r),e=jc(e,"onChange"),0<e.length&&(n=new Ep("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ba=null,Ba=null;function kw(t){z_(t,0)}function Eu(t){var e=so(t);if(J0(e))return t}function Bw(t,e){if(t==="change")return e}var P_=!1;if(Zr){var ud;if(Zr){var dd="oninput"in document;if(!dd){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),dd=typeof rg.oninput=="function"}ud=dd}else ud=!1;P_=ud&&(!document.documentMode||9<document.documentMode)}function ig(){ba&&(ba.detachEvent("onpropertychange",L_),Ba=ba=null)}function L_(t){if(t.propertyName==="value"&&Eu(Ba)){var e=[];R_(e,Ba,t,gp(t)),u_(kw,e)}}function zw(t,e,n){t==="focusin"?(ig(),ba=e,Ba=n,ba.attachEvent("onpropertychange",L_)):t==="focusout"&&ig()}function Vw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eu(Ba)}function Hw(t,e){if(t==="click")return Eu(e)}function Gw(t,e){if(t==="input"||t==="change")return Eu(e)}function Ww(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hr=typeof Object.is=="function"?Object.is:Ww;function za(t,e){if(hr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!df.call(e,i)||!hr(t[i],e[i]))return!1}return!0}function sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function og(t,e){var n=sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sg(n)}}function D_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N_(){for(var t=window,e=kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kc(t.document)}return e}function Tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jw(t){var e=N_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&D_(n.ownerDocument.documentElement,n)){if(r!==null&&Tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=og(n,s);var o=og(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xw=Zr&&"documentMode"in document&&11>=document.documentMode,ro=null,Pf=null,Aa=null,Lf=!1;function ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||ro==null||ro!==kc(r)||(r=ro,"selectionStart"in r&&Tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&za(Aa,r)||(Aa=r,r=jc(Pf,"onSelect"),0<r.length&&(e=new Ep("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ro)))}function Ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var io={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},fd={},I_={};Zr&&(I_=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function wu(t){if(fd[t])return fd[t];if(!io[t])return t;var e=io[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in I_)return fd[t]=e[n];return t}var U_=wu("animationend"),F_=wu("animationiteration"),O_=wu("animationstart"),k_=wu("transitionend"),B_=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){B_.set(t,e),Fs(e,[t])}for(var hd=0;hd<lg.length;hd++){var pd=lg[hd],$w=pd.toLowerCase(),Yw=pd[0].toUpperCase()+pd.slice(1);Qi($w,"on"+Yw)}Qi(U_,"onAnimationEnd");Qi(F_,"onAnimationIteration");Qi(O_,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(k_,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);Fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$E(r,e,void 0,t),t.currentTarget=null}function z_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,c),s=l}}}if(zc)throw t=bf,zc=!1,bf=null,t}function gt(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var r=t+"__bubble";n.has(r)||(V_(e,t,2,!1),n.add(r))}function md(t,e,n){var r=0;e&&(r|=4),V_(n,t,r,e)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[Dl]){t[Dl]=!0,Y0.forEach(function(n){n!=="selectionchange"&&(qw.has(n)||md(n,!1,t),md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Dl]||(e[Dl]=!0,md("selectionchange",!1,e))}}function V_(t,e,n,r){switch(M_(e)){case 1:var i=cw;break;case 4:i=uw;break;default:i=yp}n=i.bind(null,e,n,t),i=void 0,!Tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ms(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}u_(function(){var c=s,u=gp(n),d=[];e:{var h=B_.get(t);if(h!==void 0){var p=Ep,v=t;switch(t){case"keypress":if(xc(n)===0)break e;case"keydown":case"keyup":p=Tw;break;case"focusin":v="focus",p=cd;break;case"focusout":v="blur",p=cd;break;case"beforeblur":case"afterblur":p=cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Cw;break;case U_:case F_:case O_:p=gw;break;case k_:p=Pw;break;case"scroll":p=dw;break;case"wheel":p=Dw;break;case"copy":case"cut":case"paste":p=_w;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jm}var g=(e&4)!==0,m=!g&&t==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var _=c,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,f!==null&&(y=Ua(_,f),y!=null&&g.push(Ha(_,y,x)))),m)break;_=_.return}0<g.length&&(h=new p(h,v,null,n,u),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==wf&&(v=n.relatedTarget||n.fromElement)&&(ms(v)||v[Jr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ms(v):null,v!==null&&(m=Os(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(g=Qm,y="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(g=Jm,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:so(p),x=v==null?h:so(v),h=new g(y,_+"leave",p,n,u),h.target=m,h.relatedTarget=x,y=null,ms(u)===c&&(g=new g(f,_+"enter",v,n,u),g.target=x,g.relatedTarget=m,y=g),m=y,p&&v)t:{for(g=p,f=v,_=0,x=g;x;x=Bs(x))_++;for(x=0,y=f;y;y=Bs(y))x++;for(;0<_-x;)g=Bs(g),_--;for(;0<x-_;)f=Bs(f),x--;for(;_--;){if(g===f||f!==null&&g===f.alternate)break t;g=Bs(g),f=Bs(f)}g=null}else g=null;p!==null&&ug(d,h,p,g,!1),v!==null&&m!==null&&ug(d,m,v,g,!0)}}e:{if(h=c?so(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=Bw;else if(ng(h))if(P_)A=Gw;else{A=Vw;var T=zw}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Hw);if(A&&(A=A(t,c))){R_(d,A,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&_f(h,"number",h.value)}switch(T=c?so(c):window,t){case"focusin":(ng(T)||T.contentEditable==="true")&&(ro=T,Pf=c,Aa=null);break;case"focusout":Aa=Pf=ro=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,ag(d,n,u);break;case"selectionchange":if(Xw)break;case"keydown":case"keyup":ag(d,n,u)}var M;if(Mp)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else no?A_(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(b_&&n.locale!=="ko"&&(no||L!=="onCompositionStart"?L==="onCompositionEnd"&&no&&(M=T_()):(Ri=u,Sp="value"in Ri?Ri.value:Ri.textContent,no=!0)),T=jc(c,L),0<T.length&&(L=new Zm(L,t,null,n,u),d.push({event:L,listeners:T}),M?L.data=M:(M=C_(n),M!==null&&(L.data=M)))),(M=Iw?Uw(t,n):Fw(t,n))&&(c=jc(c,"onBeforeInput"),0<c.length&&(u=new Zm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=M))}z_(d,e)})}function Ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ua(t,n),s!=null&&r.unshift(Ha(t,s,i)),s=Ua(t,e),s!=null&&r.push(Ha(t,s,i))),t=t.return}return r}function Bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ug(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ua(n,s),l!=null&&o.unshift(Ha(n,l,a))):i||(l=Ua(n,s),l!=null&&o.push(Ha(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Kw=/\r\n?/g,Qw=/\u0000|\uFFFD/g;function dg(t){return(typeof t=="string"?t:""+t).replace(Kw,`
`).replace(Qw,"")}function Nl(t,e,n){if(e=dg(e),dg(t)!==e&&n)throw Error(ae(425))}function Xc(){}var Df=null,Nf=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,Zw=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,Jw=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(t){return fg.resolve(null).then(t).catch(eM)}:Uf;function eM(t){setTimeout(function(){throw t})}function vd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ka(e)}function Ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),Mr="__reactFiber$"+Ko,Ga="__reactProps$"+Ko,Jr="__reactContainer$"+Ko,Ff="__reactEvents$"+Ko,tM="__reactListeners$"+Ko,nM="__reactHandles$"+Ko;function ms(t){var e=t[Mr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jr]||n[Mr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hg(t);t!==null;){if(n=t[Mr])return n;t=hg(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[Mr]||t[Jr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function so(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Mu(t){return t[Ga]||null}var Of=[],oo=-1;function Zi(t){return{current:t}}function vt(t){0>oo||(t.current=Of[oo],Of[oo]=null,oo--)}function pt(t,e){oo++,Of[oo]=t.current,t.current=e}var Gi={},rn=Zi(Gi),xn=Zi(!1),Cs=Gi;function Uo(t,e){var n=t.type.contextTypes;if(!n)return Gi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yn(t){return t=t.childContextTypes,t!=null}function $c(){vt(xn),vt(rn)}function pg(t,e,n){if(rn.current!==Gi)throw Error(ae(168));pt(rn,e),pt(xn,n)}function H_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(ae(108,zE(t)||"Unknown",i));return wt({},n,r)}function Yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,Cs=rn.current,pt(rn,t),pt(xn,xn.current),!0}function mg(t,e,n){var r=t.stateNode;if(!r)throw Error(ae(169));n?(t=H_(t,e,Cs),r.__reactInternalMemoizedMergedChildContext=t,vt(xn),vt(rn),pt(rn,t)):vt(xn),pt(xn,n)}var Hr=null,Tu=!1,_d=!1;function G_(t){Hr===null?Hr=[t]:Hr.push(t)}function rM(t){Tu=!0,G_(t)}function Ji(){if(!_d&&Hr!==null){_d=!0;var t=0,e=ut;try{var n=Hr;for(ut=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hr=null,Tu=!1}catch(i){throw Hr!==null&&(Hr=Hr.slice(t+1)),p_(vp,Ji),i}finally{ut=e,_d=!1}}return null}var ao=[],lo=0,qc=null,Kc=0,Wn=[],jn=0,Rs=null,jr=1,Xr="";function cs(t,e){ao[lo++]=Kc,ao[lo++]=qc,qc=t,Kc=e}function W_(t,e,n){Wn[jn++]=jr,Wn[jn++]=Xr,Wn[jn++]=Rs,Rs=t;var r=jr;t=Xr;var i=32-ur(r)-1;r&=~(1<<i),n+=1;var s=32-ur(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jr=1<<32-ur(e)+i|n<<i|r,Xr=s+t}else jr=1<<s|n<<i|r,Xr=t}function bp(t){t.return!==null&&(cs(t,1),W_(t,1,0))}function Ap(t){for(;t===qc;)qc=ao[--lo],ao[lo]=null,Kc=ao[--lo],ao[lo]=null;for(;t===Rs;)Rs=Wn[--jn],Wn[jn]=null,Xr=Wn[--jn],Wn[jn]=null,jr=Wn[--jn],Wn[jn]=null}var In=null,Nn=null,xt=!1,ar=null;function j_(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Nn=Ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rs!==null?{id:jr,overflow:Xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Nn=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(xt){var e=Nn;if(e){var n=e;if(!gg(t,e)){if(kf(t))throw Error(ae(418));e=Ui(n.nextSibling);var r=In;e&&gg(t,e)?j_(r,n):(t.flags=t.flags&-4097|2,xt=!1,In=t)}}else{if(kf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,xt=!1,In=t}}}function vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function Il(t){if(t!==In)return!1;if(!xt)return vg(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=Nn)){if(kf(t))throw X_(),Error(ae(418));for(;e;)j_(t,e),e=Ui(e.nextSibling)}if(vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nn=Ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nn=null}}else Nn=In?Ui(t.stateNode.nextSibling):null;return!0}function X_(){for(var t=Nn;t;)t=Ui(t.nextSibling)}function Fo(){Nn=In=null,xt=!1}function Cp(t){ar===null?ar=[t]:ar.push(t)}var iM=oi.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var r=n.stateNode}if(!r)throw Error(ae(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Ul(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _g(t){var e=t._init;return e(t._payload)}function $_(t){function e(f,_){if(t){var x=f.deletions;x===null?(f.deletions=[_],f.flags|=16):x.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function r(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function i(f,_){return f=Bi(f,_),f.index=0,f.sibling=null,f}function s(f,_,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<_?(f.flags|=2,_):x):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,x,y){return _===null||_.tag!==6?(_=Td(x,f.mode,y),_.return=f,_):(_=i(_,x),_.return=f,_)}function l(f,_,x,y){var A=x.type;return A===to?u(f,_,x.props.children,y,x.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===xi&&_g(A)===_.type)?(y=i(_,x.props),y.ref=la(f,_,x),y.return=f,y):(y=bc(x.type,x.key,x.props,null,f.mode,y),y.ref=la(f,_,x),y.return=f,y)}function c(f,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=bd(x,f.mode,y),_.return=f,_):(_=i(_,x.children||[]),_.return=f,_)}function u(f,_,x,y,A){return _===null||_.tag!==7?(_=bs(x,f.mode,y,A),_.return=f,_):(_=i(_,x),_.return=f,_)}function d(f,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Td(""+_,f.mode,x),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:return x=bc(_.type,_.key,_.props,null,f.mode,x),x.ref=la(f,null,_),x.return=f,x;case eo:return _=bd(_,f.mode,x),_.return=f,_;case xi:var y=_._init;return d(f,y(_._payload),x)}if(xa(_)||ra(_))return _=bs(_,f.mode,x,null),_.return=f,_;Ul(f,_)}return null}function h(f,_,x,y){var A=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(f,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ml:return x.key===A?l(f,_,x,y):null;case eo:return x.key===A?c(f,_,x,y):null;case xi:return A=x._init,h(f,_,A(x._payload),y)}if(xa(x)||ra(x))return A!==null?null:u(f,_,x,y,null);Ul(f,x)}return null}function p(f,_,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(x)||null,a(_,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ml:return f=f.get(y.key===null?x:y.key)||null,l(_,f,y,A);case eo:return f=f.get(y.key===null?x:y.key)||null,c(_,f,y,A);case xi:var T=y._init;return p(f,_,x,T(y._payload),A)}if(xa(y)||ra(y))return f=f.get(x)||null,u(_,f,y,A,null);Ul(_,y)}return null}function v(f,_,x,y){for(var A=null,T=null,M=_,L=_=0,E=null;M!==null&&L<x.length;L++){M.index>L?(E=M,M=null):E=M.sibling;var S=h(f,M,x[L],y);if(S===null){M===null&&(M=E);break}t&&M&&S.alternate===null&&e(f,M),_=s(S,_,L),T===null?A=S:T.sibling=S,T=S,M=E}if(L===x.length)return n(f,M),xt&&cs(f,L),A;if(M===null){for(;L<x.length;L++)M=d(f,x[L],y),M!==null&&(_=s(M,_,L),T===null?A=M:T.sibling=M,T=M);return xt&&cs(f,L),A}for(M=r(f,M);L<x.length;L++)E=p(M,f,L,x[L],y),E!==null&&(t&&E.alternate!==null&&M.delete(E.key===null?L:E.key),_=s(E,_,L),T===null?A=E:T.sibling=E,T=E);return t&&M.forEach(function(R){return e(f,R)}),xt&&cs(f,L),A}function g(f,_,x,y){var A=ra(x);if(typeof A!="function")throw Error(ae(150));if(x=A.call(x),x==null)throw Error(ae(151));for(var T=A=null,M=_,L=_=0,E=null,S=x.next();M!==null&&!S.done;L++,S=x.next()){M.index>L?(E=M,M=null):E=M.sibling;var R=h(f,M,S.value,y);if(R===null){M===null&&(M=E);break}t&&M&&R.alternate===null&&e(f,M),_=s(R,_,L),T===null?A=R:T.sibling=R,T=R,M=E}if(S.done)return n(f,M),xt&&cs(f,L),A;if(M===null){for(;!S.done;L++,S=x.next())S=d(f,S.value,y),S!==null&&(_=s(S,_,L),T===null?A=S:T.sibling=S,T=S);return xt&&cs(f,L),A}for(M=r(f,M);!S.done;L++,S=x.next())S=p(M,f,L,S.value,y),S!==null&&(t&&S.alternate!==null&&M.delete(S.key===null?L:S.key),_=s(S,_,L),T===null?A=S:T.sibling=S,T=S);return t&&M.forEach(function(O){return e(f,O)}),xt&&cs(f,L),A}function m(f,_,x,y){if(typeof x=="object"&&x!==null&&x.type===to&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ml:e:{for(var A=x.key,T=_;T!==null;){if(T.key===A){if(A=x.type,A===to){if(T.tag===7){n(f,T.sibling),_=i(T,x.props.children),_.return=f,f=_;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===xi&&_g(A)===T.type){n(f,T.sibling),_=i(T,x.props),_.ref=la(f,T,x),_.return=f,f=_;break e}n(f,T);break}else e(f,T);T=T.sibling}x.type===to?(_=bs(x.props.children,f.mode,y,x.key),_.return=f,f=_):(y=bc(x.type,x.key,x.props,null,f.mode,y),y.ref=la(f,_,x),y.return=f,f=y)}return o(f);case eo:e:{for(T=x.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(f,_.sibling),_=i(_,x.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=bd(x,f.mode,y),_.return=f,f=_}return o(f);case xi:return T=x._init,m(f,_,T(x._payload),y)}if(xa(x))return v(f,_,x,y);if(ra(x))return g(f,_,x,y);Ul(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(f,_.sibling),_=i(_,x),_.return=f,f=_):(n(f,_),_=Td(x,f.mode,y),_.return=f,f=_),o(f)):n(f,_)}return m}var Oo=$_(!0),Y_=$_(!1),Qc=Zi(null),Zc=null,co=null,Rp=null;function Pp(){Rp=co=Zc=null}function Lp(t){var e=Qc.current;vt(Qc),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _o(t,e){Zc=t,Rp=co=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Rp!==t)if(t={context:t,memoizedValue:e,next:null},co===null){if(Zc===null)throw Error(ae(308));co=t,Zc.dependencies={lanes:0,firstContext:t}}else co=co.next=t;return e}var gs=null;function Dp(t){gs===null?gs=[t]:gs.push(t)}function q_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Dp(e)):(n.next=i.next,i.next=n),e.interleaved=n,ei(t,r)}function ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yi=!1;function Np(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,tt&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ei(t,n)}return i=r.interleaved,i===null?(e.next=e,Dp(r)):(e.next=i.next,i.next=e),r.interleaved=e,ei(t,n)}function yc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_p(t,n)}}function xg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jc(t,e,n,r){var i=t.updateQueue;yi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(h=e,p=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=wt({},d,h);break e;case 2:yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ls|=o,t.lanes=o,t.memoizedState=d}}function yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ae(191,i));i.call(r)}}}var ul={},Ar=Zi(ul),Wa=Zi(ul),ja=Zi(ul);function vs(t){if(t===ul)throw Error(ae(174));return t}function Ip(t,e){switch(pt(ja,e),pt(Wa,t),pt(Ar,ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yf(e,t)}vt(Ar),pt(Ar,e)}function ko(){vt(Ar),vt(Wa),vt(ja)}function Q_(t){vs(ja.current);var e=vs(Ar.current),n=yf(e,t.type);e!==n&&(pt(Wa,t),pt(Ar,n))}function Up(t){Wa.current===t&&(vt(Ar),vt(Wa))}var St=Zi(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xd=[];function Fp(){for(var t=0;t<xd.length;t++)xd[t]._workInProgressVersionPrimary=null;xd.length=0}var Sc=oi.ReactCurrentDispatcher,yd=oi.ReactCurrentBatchConfig,Ps=0,Et=null,Nt=null,zt=null,tu=!1,Ca=!1,Xa=0,sM=0;function Kt(){throw Error(ae(321))}function Op(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hr(t[n],e[n]))return!1;return!0}function kp(t,e,n,r,i,s){if(Ps=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sc.current=t===null||t.memoizedState===null?cM:uM,t=n(r,i),Ca){s=0;do{if(Ca=!1,Xa=0,25<=s)throw Error(ae(301));s+=1,zt=Nt=null,e.updateQueue=null,Sc.current=dM,t=n(r,i)}while(Ca)}if(Sc.current=nu,e=Nt!==null&&Nt.next!==null,Ps=0,zt=Nt=Et=null,tu=!1,e)throw Error(ae(300));return t}function Bp(){var t=Xa!==0;return Xa=0,t}function xr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Et.memoizedState=zt=t:zt=zt.next=t,zt}function qn(){if(Nt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=zt===null?Et.memoizedState:zt.next;if(e!==null)zt=e,Nt=t;else{if(t===null)throw Error(ae(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},zt===null?Et.memoizedState=zt=t:zt=zt.next=t}return zt}function $a(t,e){return typeof e=="function"?e(t):e}function Sd(t){var e=qn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var r=Nt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ps&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Et.lanes|=u,Ls|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,hr(r,e.memoizedState)||(_n=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Et.lanes|=s,Ls|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ed(t){var e=qn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hr(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Z_(){}function J_(t,e){var n=Et,r=qn(),i=e(),s=!hr(r.memoizedState,i);if(s&&(r.memoizedState=i,_n=!0),r=r.queue,zp(nx.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Ya(9,tx.bind(null,n,r,i,e),void 0,null),Vt===null)throw Error(ae(349));Ps&30||ex(n,e,i)}return i}function ex(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tx(t,e,n,r){e.value=n,e.getSnapshot=r,rx(e)&&ix(t)}function nx(t,e,n){return n(function(){rx(e)&&ix(t)})}function rx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hr(t,n)}catch{return!0}}function ix(t){var e=ei(t,1);e!==null&&dr(e,t,1,-1)}function Sg(t){var e=xr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=lM.bind(null,Et,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sx(){return qn().memoizedState}function Ec(t,e,n,r){var i=xr();Et.flags|=t,i.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function bu(t,e,n,r){var i=qn();r=r===void 0?null:r;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,r!==null&&Op(r,o.deps)){i.memoizedState=Ya(e,n,s,r);return}}Et.flags|=t,i.memoizedState=Ya(1|e,n,s,r)}function Eg(t,e){return Ec(8390656,8,t,e)}function zp(t,e){return bu(2048,8,t,e)}function ox(t,e){return bu(4,2,t,e)}function ax(t,e){return bu(4,4,t,e)}function lx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cx(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,lx.bind(null,e,t),n)}function Vp(){}function ux(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dx(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fx(t,e,n){return Ps&21?(hr(n,e)||(n=v_(),Et.lanes|=n,Ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function oM(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var r=yd.transition;yd.transition={};try{t(!1),e()}finally{ut=n,yd.transition=r}}function hx(){return qn().memoizedState}function aM(t,e,n){var r=ki(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},px(t))mx(e,n);else if(n=q_(t,e,n,r),n!==null){var i=un();dr(n,t,r,i),gx(n,e,r)}}function lM(t,e,n){var r=ki(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(px(t))mx(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,hr(a,o)){var l=e.interleaved;l===null?(i.next=i,Dp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=q_(t,e,i,r),n!==null&&(i=un(),dr(n,t,r,i),gx(n,e,r))}}function px(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function mx(t,e){Ca=tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_p(t,n)}}var nu={readContext:Yn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},cM={readContext:Yn,useCallback:function(t,e){return xr().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4194308,4,lx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ec(4,2,t,e)},useMemo:function(t,e){var n=xr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aM.bind(null,Et,t),[r.memoizedState,t]},useRef:function(t){var e=xr();return t={current:t},e.memoizedState=t},useState:Sg,useDebugValue:Vp,useDeferredValue:function(t){return xr().memoizedState=t},useTransition:function(){var t=Sg(!1),e=t[0];return t=oM.bind(null,t[1]),xr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Et,i=xr();if(xt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Vt===null)throw Error(ae(349));Ps&30||ex(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Eg(nx.bind(null,r,s,t),[t]),r.flags|=2048,Ya(9,tx.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xr(),e=Vt.identifierPrefix;if(xt){var n=Xr,r=jr;n=(r&~(1<<32-ur(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uM={readContext:Yn,useCallback:ux,useContext:Yn,useEffect:zp,useImperativeHandle:cx,useInsertionEffect:ox,useLayoutEffect:ax,useMemo:dx,useReducer:Sd,useRef:sx,useState:function(){return Sd($a)},useDebugValue:Vp,useDeferredValue:function(t){var e=qn();return fx(e,Nt.memoizedState,t)},useTransition:function(){var t=Sd($a)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:J_,useId:hx,unstable_isNewReconciler:!1},dM={readContext:Yn,useCallback:ux,useContext:Yn,useEffect:zp,useImperativeHandle:cx,useInsertionEffect:ox,useLayoutEffect:ax,useMemo:dx,useReducer:Ed,useRef:sx,useState:function(){return Ed($a)},useDebugValue:Vp,useDeferredValue:function(t){var e=qn();return Nt===null?e.memoizedState=t:fx(e,Nt.memoizedState,t)},useTransition:function(){var t=Ed($a)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:J_,useId:hx,unstable_isNewReconciler:!1};function nr(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?Os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=un(),i=ki(t),s=Kr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,i),e!==null&&(dr(e,t,i,r),yc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=un(),i=ki(t),s=Kr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,i),e!==null&&(dr(e,t,i,r),yc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),r=ki(t),i=Kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fi(t,i,r),e!==null&&(dr(e,t,r,n),yc(e,t,r))}};function wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,r)||!za(i,s):!0}function vx(t,e,n){var r=!1,i=Gi,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(i=yn(e)?Cs:rn.current,r=e.contextTypes,s=(r=r!=null)?Uo(t,i):Gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Np(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yn(s):(s=yn(e)?Cs:rn.current,i.context=Uo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Au.enqueueReplaceState(i,i.state,null),Jc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bo(t,e){try{var n="",r=e;do n+=BE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fM=typeof WeakMap=="function"?WeakMap:Map;function _x(t,e,n){n=Kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){iu||(iu=!0,Jf=r),Gf(t,e)},n}function xx(t,e,n){n=Kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gf(t,e),typeof r!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fM;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bM.bind(null,t,e,n),e.then(t,t))}function bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ag(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kr(-1,1),e.tag=2,Fi(n,e,1))),n.lanes|=1),t)}var hM=oi.ReactCurrentOwner,_n=!1;function ln(t,e,n,r){e.child=t===null?Y_(e,null,n,r):Oo(e,t.child,n,r)}function Cg(t,e,n,r,i){n=n.render;var s=e.ref;return _o(e,i),r=kp(t,e,n,r,s,i),n=Bp(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ti(t,e,i)):(xt&&n&&bp(e),e.flags|=1,ln(t,e,r,i),e.child)}function Rg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yx(t,e,s,r,i)):(t=bc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,r)&&t.ref===e.ref)return ti(t,e,i)}return e.flags|=1,t=Bi(s,r),t.ref=e.ref,t.return=e,e.child=t}function yx(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(za(s,r)&&t.ref===e.ref)if(_n=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,ti(t,e,i)}return Wf(t,e,n,r,i)}function Sx(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(fo,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(fo,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pt(fo,Pn),Pn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pt(fo,Pn),Pn|=r;return ln(t,e,i,n),e.child}function Ex(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wf(t,e,n,r,i){var s=yn(n)?Cs:rn.current;return s=Uo(e,s),_o(e,i),n=kp(t,e,n,r,s,i),r=Bp(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ti(t,e,i)):(xt&&r&&bp(e),e.flags|=1,ln(t,e,n,i),e.child)}function Pg(t,e,n,r,i){if(yn(n)){var s=!0;Yc(e)}else s=!1;if(_o(e,i),e.stateNode===null)wc(t,e),vx(e,n,r),Hf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=yn(n)?Cs:rn.current,c=Uo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Mg(e,o,r,c),yi=!1;var h=e.memoizedState;o.state=h,Jc(e,r,o,i),l=e.memoizedState,a!==r||h!==l||xn.current||yi?(typeof u=="function"&&(Vf(e,n,u,r),l=e.memoizedState),(a=yi||wg(e,n,a,r,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,K_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:nr(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=yn(n)?Cs:rn.current,l=Uo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Mg(e,o,r,l),yi=!1,h=e.memoizedState,o.state=h,Jc(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||xn.current||yi?(typeof p=="function"&&(Vf(e,n,p,r),v=e.memoizedState),(c=yi||wg(e,n,c,r,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return jf(t,e,n,r,s,i)}function jf(t,e,n,r,i,s){Ex(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mg(e,n,!1),ti(t,e,s);r=e.stateNode,hM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oo(e,t.child,null,s),e.child=Oo(e,null,a,s)):ln(t,e,a,s),e.memoizedState=r.state,i&&mg(e,n,!0),e.child}function wx(t){var e=t.stateNode;e.pendingContext?pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pg(t,e.context,!1),Ip(t,e.containerInfo)}function Lg(t,e,n,r,i){return Fo(),Cp(i),e.flags|=256,ln(t,e,n,r),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function $f(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mx(t,e,n){var r=e.pendingProps,i=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pt(St,i&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pu(o,r,0,null),t=bs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$f(n),e.memoizedState=Xf,t):Hp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pM(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Bi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Bi(a,s):(s=bs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$f(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,r}return s=t.child,t=s.sibling,r=Bi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hp(t,e){return e=Pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fl(t,e,n,r){return r!==null&&Cp(r),Oo(e,t.child,null,n),t=Hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pM(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wd(Error(ae(422))),Fl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Pu({mode:"visible",children:r.children},i,0,null),s=bs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oo(e,t.child,null,o),e.child.memoizedState=$f(o),e.memoizedState=Xf,s);if(!(e.mode&1))return Fl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(ae(419)),r=wd(s,r,void 0),Fl(t,e,o,r)}if(a=(o&t.childLanes)!==0,_n||a){if(r=Vt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ei(t,i),dr(r,t,i,-1))}return Yp(),r=wd(Error(ae(421))),Fl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=AM.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nn=Ui(i.nextSibling),In=e,xt=!0,ar=null,t!==null&&(Wn[jn++]=jr,Wn[jn++]=Xr,Wn[jn++]=Rs,jr=t.id,Xr=t.overflow,Rs=e),e=Hp(e,r.children),e.flags|=4096,e)}function Dg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zf(t.return,e,n)}function Md(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Tx(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ln(t,e,r.children,n),r=St.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,n,e);else if(t.tag===19)Dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pt(St,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&eu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Md(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&eu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Md(e,!0,n,null,s);break;case"together":Md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mM(t,e,n){switch(e.tag){case 3:wx(e),Fo();break;case 5:Q_(e);break;case 1:yn(e.type)&&Yc(e);break;case 4:Ip(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pt(Qc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?Mx(t,e,n):(pt(St,St.current&1),t=ti(t,e,n),t!==null?t.sibling:null);pt(St,St.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Tx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pt(St,St.current),r)break;return null;case 22:case 23:return e.lanes=0,Sx(t,e,n)}return ti(t,e,n)}var bx,Yf,Ax,Cx;bx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};Ax=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vs(Ar.current);var s=null;switch(n){case"input":i=gf(t,i),r=gf(t,r),s=[];break;case"select":i=wt({},i,{value:void 0}),r=wt({},r,{value:void 0}),s=[];break;case"textarea":i=xf(t,i),r=xf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xc)}Sf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Na.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Na.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Cx=function(t,e,n,r){n!==r&&(e.flags|=4)};function ca(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gM(t,e,n){var r=e.pendingProps;switch(Ap(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return yn(e.type)&&$c(),Qt(e),null;case 3:return r=e.stateNode,ko(),vt(xn),vt(rn),Fp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ar!==null&&(nh(ar),ar=null))),Yf(t,e),Qt(e),null;case 5:Up(e);var i=vs(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)Ax(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(ae(166));return Qt(e),null}if(t=vs(Ar.current),Il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mr]=e,r[Ga]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",r),gt("close",r);break;case"iframe":case"object":case"embed":gt("load",r);break;case"video":case"audio":for(i=0;i<Sa.length;i++)gt(Sa[i],r);break;case"source":gt("error",r);break;case"img":case"image":case"link":gt("error",r),gt("load",r);break;case"details":gt("toggle",r);break;case"input":Vm(r,s),gt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},gt("invalid",r);break;case"textarea":Gm(r,s),gt("invalid",r)}Sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Nl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Nl(r.textContent,a,t),i=["children",""+a]):Na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",r)}switch(n){case"input":Tl(r),Hm(r,s,!0);break;case"textarea":Tl(r),Wm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mr]=e,t[Ga]=r,bx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ef(n,r),n){case"dialog":gt("cancel",t),gt("close",t),i=r;break;case"iframe":case"object":case"embed":gt("load",t),i=r;break;case"video":case"audio":for(i=0;i<Sa.length;i++)gt(Sa[i],t);i=r;break;case"source":gt("error",t),i=r;break;case"img":case"image":case"link":gt("error",t),gt("load",t),i=r;break;case"details":gt("toggle",t),i=r;break;case"input":Vm(t,r),i=gf(t,r),gt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=wt({},r,{value:void 0}),gt("invalid",t);break;case"textarea":Gm(t,r),i=xf(t,r),gt("invalid",t);break;default:i=r}Sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?s_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ia(t,l):typeof l=="number"&&Ia(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&fp(t,s,l,o))}switch(n){case"input":Tl(t),Hm(t,r,!1);break;case"textarea":Tl(t),Wm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?po(t,!!r.multiple,s,!1):r.defaultValue!=null&&po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)Cx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(ae(166));if(n=vs(ja.current),vs(Ar.current),Il(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mr]=e,(s=r.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:Nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mr]=e,e.stateNode=r}return Qt(e),null;case 13:if(vt(St),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Nn!==null&&e.mode&1&&!(e.flags&128))X_(),Fo(),e.flags|=98560,s=!1;else if(s=Il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Mr]=e}else Fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else ar!==null&&(nh(ar),ar=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ut===0&&(Ut=3):Yp())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return ko(),Yf(t,e),t===null&&Va(e.stateNode.containerInfo),Qt(e),null;case 10:return Lp(e.type._context),Qt(e),null;case 17:return yn(e.type)&&$c(),Qt(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return Qt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ca(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eu(t),o!==null){for(e.flags|=128,ca(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>zo&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304)}else{if(!r)if(t=eu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Qt(e),null}else 2*At()-s.renderingStartTime>zo&&n!==1073741824&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=St.current,pt(St,r?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return $p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function vM(t,e){switch(Ap(e),e.tag){case 1:return yn(e.type)&&$c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ko(),vt(xn),vt(rn),Fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Up(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return ko(),null;case 10:return Lp(e.type._context),null;case 22:case 23:return $p(),null;case 24:return null;default:return null}}var Ol=!1,nn=!1,_M=typeof WeakSet=="function"?WeakSet:Set,Se=null;function uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){bt(t,e,r)}else n.current=null}function qf(t,e,n){try{n()}catch(r){bt(t,e,r)}}var Ng=!1;function xM(t,e){if(Df=Gc,t=N_(),Tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++u===r&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},Gc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:nr(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){bt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return v=Ng,Ng=!1,v}function Ra(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qf(e,n,s)}i=i.next}while(i!==r)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rx(t){var e=t.alternate;e!==null&&(t.alternate=null,Rx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mr],delete e[Ga],delete e[Ff],delete e[tM],delete e[nM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Px(t){return t.tag===5||t.tag===3||t.tag===4}function Ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Px(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xc));else if(r!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}function Zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}var Gt=null,or=!1;function ai(t,e,n){for(n=n.child;n!==null;)Lx(t,e,n),n=n.sibling}function Lx(t,e,n){if(br&&typeof br.onCommitFiberUnmount=="function")try{br.onCommitFiberUnmount(yu,n)}catch{}switch(n.tag){case 5:nn||uo(n,e);case 6:var r=Gt,i=or;Gt=null,ai(t,e,n),Gt=r,or=i,Gt!==null&&(or?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(or?(t=Gt,n=n.stateNode,t.nodeType===8?vd(t.parentNode,n):t.nodeType===1&&vd(t,n),ka(t)):vd(Gt,n.stateNode));break;case 4:r=Gt,i=or,Gt=n.stateNode.containerInfo,or=!0,ai(t,e,n),Gt=r,or=i;break;case 0:case 11:case 14:case 15:if(!nn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qf(n,e,o),i=i.next}while(i!==r)}ai(t,e,n);break;case 1:if(!nn&&(uo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){bt(n,e,a)}ai(t,e,n);break;case 21:ai(t,e,n);break;case 22:n.mode&1?(nn=(r=nn)||n.memoizedState!==null,ai(t,e,n),nn=r):ai(t,e,n);break;default:ai(t,e,n)}}function Ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _M),e.forEach(function(r){var i=CM.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,or=!1;break e;case 3:Gt=a.stateNode.containerInfo,or=!0;break e;case 4:Gt=a.stateNode.containerInfo,or=!0;break e}a=a.return}if(Gt===null)throw Error(ae(160));Lx(s,o,i),Gt=null,or=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){bt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dx(e,t),e=e.sibling}function Dx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),_r(t),r&4){try{Ra(3,t,t.return),Cu(3,t)}catch(g){bt(t,t.return,g)}try{Ra(5,t,t.return)}catch(g){bt(t,t.return,g)}}break;case 1:Qn(e,t),_r(t),r&512&&n!==null&&uo(n,n.return);break;case 5:if(Qn(e,t),_r(t),r&512&&n!==null&&uo(n,n.return),t.flags&32){var i=t.stateNode;try{Ia(i,"")}catch(g){bt(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&e_(i,s),Ef(a,o);var c=Ef(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?s_(i,d):u==="dangerouslySetInnerHTML"?r_(i,d):u==="children"?Ia(i,d):fp(i,u,d,c)}switch(a){case"input":vf(i,s);break;case"textarea":t_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?po(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?po(i,!!s.multiple,s.defaultValue,!0):po(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ga]=s}catch(g){bt(t,t.return,g)}}break;case 6:if(Qn(e,t),_r(t),r&4){if(t.stateNode===null)throw Error(ae(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){bt(t,t.return,g)}}break;case 3:if(Qn(e,t),_r(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(g){bt(t,t.return,g)}break;case 4:Qn(e,t),_r(t);break;case 13:Qn(e,t),_r(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jp=At())),r&4&&Ug(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||u,Qn(e,t),nn=c):Qn(e,t),_r(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(d=Se=u;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ra(4,h,h.return);break;case 1:uo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){bt(r,n,g)}}break;case 5:uo(h,h.return);break;case 22:if(h.memoizedState!==null){Og(d);continue}}p!==null?(p.return=h,Se=p):Og(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i_("display",o))}catch(g){bt(t,t.return,g)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){bt(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qn(e,t),_r(t),r&4&&Ug(t);break;case 21:break;default:Qn(e,t),_r(t)}}function _r(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Px(n)){var r=n;break e}n=n.return}throw Error(ae(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ia(i,""),r.flags&=-33);var s=Ig(t);Zf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ig(t);Qf(t,a,o);break;default:throw Error(ae(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yM(t,e,n){Se=t,Nx(t)}function Nx(t,e,n){for(var r=(t.mode&1)!==0;Se!==null;){var i=Se,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ol;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nn;a=Ol;var c=nn;if(Ol=o,(nn=l)&&!c)for(Se=i;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?kg(i):l!==null?(l.return=o,Se=l):kg(i);for(;s!==null;)Se=s,Nx(s),s=s.sibling;Se=i,Ol=a,nn=c}Fg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Se=s):Fg(t)}}function Fg(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Cu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}nn||e.flags&512&&Kf(e)}catch(h){bt(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Og(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function kg(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(l){bt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){bt(e,i,l)}}var s=e.return;try{Kf(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{Kf(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var SM=Math.ceil,ru=oi.ReactCurrentDispatcher,Gp=oi.ReactCurrentOwner,$n=oi.ReactCurrentBatchConfig,tt=0,Vt=null,Dt=null,jt=0,Pn=0,fo=Zi(0),Ut=0,qa=null,Ls=0,Ru=0,Wp=0,Pa=null,vn=null,jp=0,zo=1/0,Vr=null,iu=!1,Jf=null,Oi=null,kl=!1,Pi=null,su=0,La=0,eh=null,Mc=-1,Tc=0;function un(){return tt&6?At():Mc!==-1?Mc:Mc=At()}function ki(t){return t.mode&1?tt&2&&jt!==0?jt&-jt:iM.transition!==null?(Tc===0&&(Tc=v_()),Tc):(t=ut,t!==0||(t=window.event,t=t===void 0?16:M_(t.type)),t):1}function dr(t,e,n,r){if(50<La)throw La=0,eh=null,Error(ae(185));al(t,n,r),(!(tt&2)||t!==Vt)&&(t===Vt&&(!(tt&2)&&(Ru|=n),Ut===4&&Ei(t,jt)),Sn(t,r),n===1&&tt===0&&!(e.mode&1)&&(zo=At()+500,Tu&&Ji()))}function Sn(t,e){var n=t.callbackNode;iw(t,e);var r=Hc(t,t===Vt?jt:0);if(r===0)n!==null&&$m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$m(n),e===1)t.tag===0?rM(Bg.bind(null,t)):G_(Bg.bind(null,t)),Jw(function(){!(tt&6)&&Ji()}),n=null;else{switch(__(r)){case 1:n=vp;break;case 4:n=m_;break;case 16:n=Vc;break;case 536870912:n=g_;break;default:n=Vc}n=Vx(n,Ix.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ix(t,e){if(Mc=-1,Tc=0,tt&6)throw Error(ae(327));var n=t.callbackNode;if(xo()&&t.callbackNode!==n)return null;var r=Hc(t,t===Vt?jt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ou(t,r);else{e=r;var i=tt;tt|=2;var s=Fx();(Vt!==t||jt!==e)&&(Vr=null,zo=At()+500,Ts(t,e));do try{MM();break}catch(a){Ux(t,a)}while(!0);Pp(),ru.current=s,tt=i,Dt!==null?e=0:(Vt=null,jt=0,e=Ut)}if(e!==0){if(e===2&&(i=Af(t),i!==0&&(r=i,e=th(t,i))),e===1)throw n=qa,Ts(t,0),Ei(t,r),Sn(t,At()),n;if(e===6)Ei(t,r);else{if(i=t.current.alternate,!(r&30)&&!EM(i)&&(e=ou(t,r),e===2&&(s=Af(t),s!==0&&(r=s,e=th(t,s))),e===1))throw n=qa,Ts(t,0),Ei(t,r),Sn(t,At()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(ae(345));case 2:us(t,vn,Vr);break;case 3:if(Ei(t,r),(r&130023424)===r&&(e=jp+500-At(),10<e)){if(Hc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){un(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uf(us.bind(null,t,vn,Vr),e);break}us(t,vn,Vr);break;case 4:if(Ei(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ur(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=At()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SM(r/1960))-r,10<r){t.timeoutHandle=Uf(us.bind(null,t,vn,Vr),r);break}us(t,vn,Vr);break;case 5:us(t,vn,Vr);break;default:throw Error(ae(329))}}}return Sn(t,At()),t.callbackNode===n?Ix.bind(null,t):null}function th(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(Ts(t,e).flags|=256),t=ou(t,e),t!==2&&(e=vn,vn=n,e!==null&&nh(e)),t}function nh(t){vn===null?vn=t:vn.push.apply(vn,t)}function EM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(t,e){for(e&=~Wp,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ur(e),r=1<<n;t[n]=-1,e&=~r}}function Bg(t){if(tt&6)throw Error(ae(327));xo();var e=Hc(t,0);if(!(e&1))return Sn(t,At()),null;var n=ou(t,e);if(t.tag!==0&&n===2){var r=Af(t);r!==0&&(e=r,n=th(t,r))}if(n===1)throw n=qa,Ts(t,0),Ei(t,e),Sn(t,At()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,us(t,vn,Vr),Sn(t,At()),null}function Xp(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(zo=At()+500,Tu&&Ji())}}function Ds(t){Pi!==null&&Pi.tag===0&&!(tt&6)&&xo();var e=tt;tt|=1;var n=$n.transition,r=ut;try{if($n.transition=null,ut=1,t)return t()}finally{ut=r,$n.transition=n,tt=e,!(tt&6)&&Ji()}}function $p(){Pn=fo.current,vt(fo)}function Ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zw(n)),Dt!==null)for(n=Dt.return;n!==null;){var r=n;switch(Ap(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$c();break;case 3:ko(),vt(xn),vt(rn),Fp();break;case 5:Up(r);break;case 4:ko();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Lp(r.type._context);break;case 22:case 23:$p()}n=n.return}if(Vt=t,Dt=t=Bi(t.current,null),jt=Pn=e,Ut=0,qa=null,Wp=Ru=Ls=0,vn=Pa=null,gs!==null){for(e=0;e<gs.length;e++)if(n=gs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gs=null}return t}function Ux(t,e){do{var n=Dt;try{if(Pp(),Sc.current=nu,tu){for(var r=Et.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tu=!1}if(Ps=0,zt=Nt=Et=null,Ca=!1,Xa=0,Gp.current=null,n===null||n.return===null){Ut=1,qa=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=bg(o);if(p!==null){p.flags&=-257,Ag(p,o,a,s,e),p.mode&1&&Tg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){Tg(s,c,e),Yp();break e}l=Error(ae(426))}}else if(xt&&a.mode&1){var m=bg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ag(m,o,a,s,e),Cp(Bo(l,a));break e}}s=l=Bo(l,a),Ut!==4&&(Ut=2),Pa===null?Pa=[s]:Pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=_x(s,l,e);xg(s,f);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Oi===null||!Oi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=xx(s,a,e);xg(s,y);break e}}s=s.return}while(s!==null)}kx(n)}catch(A){e=A,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function Fx(){var t=ru.current;return ru.current=nu,t===null?nu:t}function Yp(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(Ls&268435455)&&!(Ru&268435455)||Ei(Vt,jt)}function ou(t,e){var n=tt;tt|=2;var r=Fx();(Vt!==t||jt!==e)&&(Vr=null,Ts(t,e));do try{wM();break}catch(i){Ux(t,i)}while(!0);if(Pp(),tt=n,ru.current=r,Dt!==null)throw Error(ae(261));return Vt=null,jt=0,Ut}function wM(){for(;Dt!==null;)Ox(Dt)}function MM(){for(;Dt!==null&&!qE();)Ox(Dt)}function Ox(t){var e=zx(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?kx(t):Dt=e,Gp.current=null}function kx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vM(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Dt=null;return}}else if(n=gM(n,e,Pn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ut===0&&(Ut=5)}function us(t,e,n){var r=ut,i=$n.transition;try{$n.transition=null,ut=1,TM(t,e,n,r)}finally{$n.transition=i,ut=r}return null}function TM(t,e,n,r){do xo();while(Pi!==null);if(tt&6)throw Error(ae(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sw(t,s),t===Vt&&(Dt=Vt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,Vx(Vc,function(){return xo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=ut;ut=1;var a=tt;tt|=4,Gp.current=null,xM(t,n),Dx(n,t),jw(Nf),Gc=!!Df,Nf=Df=null,t.current=n,yM(n),KE(),tt=a,ut=o,$n.transition=s}else t.current=n;if(kl&&(kl=!1,Pi=t,su=i),s=t.pendingLanes,s===0&&(Oi=null),JE(n.stateNode),Sn(t,At()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(iu)throw iu=!1,t=Jf,Jf=null,t;return su&1&&t.tag!==0&&xo(),s=t.pendingLanes,s&1?t===eh?La++:(La=0,eh=t):La=0,Ji(),null}function xo(){if(Pi!==null){var t=__(su),e=$n.transition,n=ut;try{if($n.transition=null,ut=16>t?16:t,Pi===null)var r=!1;else{if(t=Pi,Pi=null,su=0,tt&6)throw Error(ae(331));var i=tt;for(tt|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:Ra(8,u,s)}var d=u.child;if(d!==null)d.return=u,Se=d;else for(;Se!==null;){u=Se;var h=u.sibling,p=u.return;if(Rx(u),u===c){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var _=t.current;for(Se=_;Se!==null;){o=Se;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Se=x;else e:for(o=_;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(A){bt(a,a.return,A)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(tt=i,Ji(),br&&typeof br.onPostCommitFiberRoot=="function")try{br.onPostCommitFiberRoot(yu,t)}catch{}r=!0}return r}finally{ut=n,$n.transition=e}}return!1}function zg(t,e,n){e=Bo(n,e),e=_x(t,e,1),t=Fi(t,e,1),e=un(),t!==null&&(al(t,1,e),Sn(t,e))}function bt(t,e,n){if(t.tag===3)zg(t,t,n);else for(;e!==null;){if(e.tag===3){zg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Oi===null||!Oi.has(r))){t=Bo(n,t),t=xx(e,t,1),e=Fi(e,t,1),t=un(),e!==null&&(al(e,1,t),Sn(e,t));break}}e=e.return}}function bM(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(jt&n)===n&&(Ut===4||Ut===3&&(jt&130023424)===jt&&500>At()-jp?Ts(t,0):Wp|=n),Sn(t,e)}function Bx(t,e){e===0&&(t.mode&1?(e=Cl,Cl<<=1,!(Cl&130023424)&&(Cl=4194304)):e=1);var n=un();t=ei(t,e),t!==null&&(al(t,e,n),Sn(t,n))}function AM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bx(t,n)}function CM(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(ae(314))}r!==null&&r.delete(e),Bx(t,n)}var zx;zx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,mM(t,e,n);_n=!!(t.flags&131072)}else _n=!1,xt&&e.flags&1048576&&W_(e,Kc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wc(t,e),t=e.pendingProps;var i=Uo(e,rn.current);_o(e,n),i=kp(null,e,r,t,i,n);var s=Bp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(r)?(s=!0,Yc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Np(e),i.updater=Au,e.stateNode=i,i._reactInternals=e,Hf(e,r,t,n),e=jf(null,e,r,!0,s,n)):(e.tag=0,xt&&s&&bp(e),ln(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=PM(r),t=nr(r,t),i){case 0:e=Wf(null,e,r,t,n);break e;case 1:e=Pg(null,e,r,t,n);break e;case 11:e=Cg(null,e,r,t,n);break e;case 14:e=Rg(null,e,r,nr(r.type,t),n);break e}throw Error(ae(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nr(r,i),Wf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nr(r,i),Pg(t,e,r,i,n);case 3:e:{if(wx(e),t===null)throw Error(ae(387));r=e.pendingProps,s=e.memoizedState,i=s.element,K_(t,e),Jc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bo(Error(ae(423)),e),e=Lg(t,e,r,n,i);break e}else if(r!==i){i=Bo(Error(ae(424)),e),e=Lg(t,e,r,n,i);break e}else for(Nn=Ui(e.stateNode.containerInfo.firstChild),In=e,xt=!0,ar=null,n=Y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fo(),r===i){e=ti(t,e,n);break e}ln(t,e,r,n)}e=e.child}return e;case 5:return Q_(e),t===null&&Bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,If(r,i)?o=null:s!==null&&If(r,s)&&(e.flags|=32),Ex(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return Mx(t,e,n);case 4:return Ip(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oo(e,null,r,n):ln(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nr(r,i),Cg(t,e,r,i,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pt(Qc,r._currentValue),r._currentValue=o,s!==null)if(hr(s.value,o)){if(s.children===i.children&&!xn.current){e=ti(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Kr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_o(e,n),i=Yn(i),r=r(i),e.flags|=1,ln(t,e,r,n),e.child;case 14:return r=e.type,i=nr(r,e.pendingProps),i=nr(r.type,i),Rg(t,e,r,i,n);case 15:return yx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nr(r,i),wc(t,e),e.tag=1,yn(r)?(t=!0,Yc(e)):t=!1,_o(e,n),vx(e,r,i),Hf(e,r,i,n),jf(null,e,r,!0,t,n);case 19:return Tx(t,e,n);case 22:return Sx(t,e,n)}throw Error(ae(156,e.tag))};function Vx(t,e){return p_(t,e)}function RM(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,r){return new RM(t,e,n,r)}function qp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PM(t){if(typeof t=="function")return qp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pp)return 11;if(t===mp)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case to:return bs(n.children,i,s,e);case hp:o=8,i|=8;break;case ff:return t=Xn(12,n,e,i|2),t.elementType=ff,t.lanes=s,t;case hf:return t=Xn(13,n,e,i),t.elementType=hf,t.lanes=s,t;case pf:return t=Xn(19,n,e,i),t.elementType=pf,t.lanes=s,t;case Q0:return Pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q0:o=10;break e;case K0:o=9;break e;case pp:o=11;break e;case mp:o=14;break e;case xi:o=16,r=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bs(t,e,n,r){return t=Xn(7,t,r,e),t.lanes=n,t}function Pu(t,e,n,r){return t=Xn(22,t,r,e),t.elementType=Q0,t.lanes=n,t.stateNode={isHidden:!1},t}function Td(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function bd(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LM(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=od(0),this.expirationTimes=od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=od(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kp(t,e,n,r,i,s,o,a,l){return t=new LM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Np(s),t}function DM(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hx(t){if(!t)return Gi;t=t._reactInternals;e:{if(Os(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(yn(n))return H_(t,n,e)}return e}function Gx(t,e,n,r,i,s,o,a,l){return t=Kp(n,r,!0,t,i,s,o,a,l),t.context=Hx(null),n=t.current,r=un(),i=ki(n),s=Kr(r,i),s.callback=e??null,Fi(n,s,i),t.current.lanes=i,al(t,i,r),Sn(t,r),t}function Lu(t,e,n,r){var i=e.current,s=un(),o=ki(i);return n=Hx(n),e.context===null?e.context=n:e.pendingContext=n,e=Kr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fi(i,e,o),t!==null&&(dr(t,i,o,s),yc(t,i,o)),o}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qp(t,e){Vg(t,e),(t=t.alternate)&&Vg(t,e)}function NM(){return null}var Wx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zp(t){this._internalRoot=t}Du.prototype.render=Zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Lu(t,e,null,null)};Du.prototype.unmount=Zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ds(function(){Lu(null,t,null,null)}),e[Jr]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=S_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Si.length&&e!==0&&e<Si[n].priority;n++);Si.splice(n,0,t),n===0&&w_(t)}};function Jp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function IM(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=au(o);s.call(c)}}var o=Gx(e,r,t,0,null,!1,!1,"",Hg);return t._reactRootContainer=o,t[Jr]=o.current,Va(t.nodeType===8?t.parentNode:t),Ds(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=au(l);a.call(c)}}var l=Kp(t,0,!1,null,null,!1,!1,"",Hg);return t._reactRootContainer=l,t[Jr]=l.current,Va(t.nodeType===8?t.parentNode:t),Ds(function(){Lu(e,l,n,r)}),l}function Iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=au(o);a.call(l)}}Lu(e,o,t,i)}else o=IM(n,e,t,i,r);return au(o)}x_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ya(e.pendingLanes);n!==0&&(_p(e,n|1),Sn(e,At()),!(tt&6)&&(zo=At()+500,Ji()))}break;case 13:Ds(function(){var r=ei(t,1);if(r!==null){var i=un();dr(r,t,1,i)}}),Qp(t,1)}};xp=function(t){if(t.tag===13){var e=ei(t,134217728);if(e!==null){var n=un();dr(e,t,134217728,n)}Qp(t,134217728)}};y_=function(t){if(t.tag===13){var e=ki(t),n=ei(t,e);if(n!==null){var r=un();dr(n,t,e,r)}Qp(t,e)}};S_=function(){return ut};E_=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Mf=function(t,e,n){switch(e){case"input":if(vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Mu(r);if(!i)throw Error(ae(90));J0(r),vf(r,i)}}}break;case"textarea":t_(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};l_=Xp;c_=Ds;var UM={usingClientEntryPoint:!1,Events:[cl,so,Mu,o_,a_,Xp]},ua={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FM={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f_(t),t===null?null:t.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||NM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{yu=Bl.inject(FM),br=Bl}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UM;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jp(e))throw Error(ae(200));return DM(t,e,null,n)};On.createRoot=function(t,e){if(!Jp(t))throw Error(ae(299));var n=!1,r="",i=Wx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kp(t,1,!1,null,null,n,!1,r,i),t[Jr]=e.current,Va(t.nodeType===8?t.parentNode:t),new Zp(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=f_(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return Ds(t)};On.hydrate=function(t,e,n){if(!Nu(e))throw Error(ae(200));return Iu(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!Jp(t))throw Error(ae(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Gx(e,null,t,1,n??null,i,!1,s,o),t[Jr]=e.current,Va(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Du(e)};On.render=function(t,e,n){if(!Nu(e))throw Error(ae(200));return Iu(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Nu(t))throw Error(ae(40));return t._reactRootContainer?(Ds(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Jr]=null})}),!0):!1};On.unstable_batchedUpdates=Xp;On.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nu(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Iu(t,e,n,!1,r)};On.version="18.3.1-next-f1338f8080-20240426";function jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jx)}catch(t){console.error(t)}}jx(),j0.exports=On;var dl=j0.exports;const Xx=D0(dl);var $x,Gg=dl;$x=Gg.createRoot,Gg.hydrateRoot;const OM=1,kM=1e6;let Ad=0;function BM(){return Ad=(Ad+1)%Number.MAX_SAFE_INTEGER,Ad.toString()}const Cd=new Map,zM=t=>{if(!Cd.has(t)){const e=setTimeout(()=>{Cd.delete(t),Da({type:"REMOVE_TOAST",toastId:t})},kM);Cd.set(t,e)}},VM=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,OM)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e,r=n?[n]:t.toasts.map(i=>i.id);return r.forEach(i=>zM(i)),{...t,toasts:t.toasts.map(i=>r.includes(i.id)?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Ac=[];let Cc={toasts:[]};function Da(t){Cc=VM(Cc,t),Ac.forEach(e=>e(Cc))}function HM({...t}){const e=BM(),n=i=>Da({type:"UPDATE_TOAST",toast:{...i,id:e}}),r=()=>Da({type:"DISMISS_TOAST",toastId:e});return Da({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:i=>{i||r()}}}),{id:e,dismiss:r,update:n}}function GM(){const[t,e]=P.useState(Cc);return P.useEffect(()=>(Ac.push(e),()=>{const n=Ac.indexOf(e);n>-1&&Ac.splice(n,1)}),[e]),{...t,toast:HM,dismiss:n=>Da({type:"DISMISS_TOAST",toastId:n})}}function It(t,e,{checkForDefaultPrevented:n=!0}={}){return function(i){if(t==null||t(i),n===!1||!i.defaultPrevented)return e==null?void 0:e(i)}}function Wg(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Yx(...t){return e=>{let n=!1;const r=t.map(i=>{const s=Wg(i,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():Wg(t[i],null)}}}}function pr(...t){return P.useCallback(Yx(...t),t)}function Uu(t,e=[]){let n=[];function r(s,o){const a=P.createContext(o),l=n.length;n=[...n,o];const c=d=>{var f;const{scope:h,children:p,...v}=d,g=((f=h==null?void 0:h[t])==null?void 0:f[l])||a,m=P.useMemo(()=>v,Object.values(v));return z.jsx(g.Provider,{value:m,children:p})};c.displayName=s+"Provider";function u(d,h){var g;const p=((g=h==null?void 0:h[t])==null?void 0:g[l])||a,v=P.useContext(p);if(v)return v;if(o!==void 0)return o;throw new Error(`\`${d}\` must be used within \`${s}\``)}return[c,u]}const i=()=>{const s=n.map(o=>P.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return P.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,WM(i,...e)]}function WM(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(s){const o=r.reduce((a,{useScope:l,scopeName:c})=>{const d=l(s)[`__scope${c}`];return{...a,...d}},{});return P.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function rh(t){const e=jM(t),n=P.forwardRef((r,i)=>{const{children:s,...o}=r,a=P.Children.toArray(s),l=a.find($M);if(l){const c=l.props.children,u=a.map(d=>d===l?P.Children.count(c)>1?P.Children.only(null):P.isValidElement(c)?c.props.children:null:d);return z.jsx(e,{...o,ref:i,children:P.isValidElement(c)?P.cloneElement(c,void 0,u):null})}return z.jsx(e,{...o,ref:i,children:s})});return n.displayName=`${t}.Slot`,n}function jM(t){const e=P.forwardRef((n,r)=>{const{children:i,...s}=n;if(P.isValidElement(i)){const o=qM(i),a=YM(s,i.props);return i.type!==P.Fragment&&(a.ref=r?Yx(r,o):o),P.cloneElement(i,a)}return P.Children.count(i)>1?P.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var qx=Symbol("radix.slottable");function XM(t){const e=({children:n})=>z.jsx(z.Fragment,{children:n});return e.displayName=`${t}.Slottable`,e.__radixId=qx,e}function $M(t){return P.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===qx}function YM(t,e){const n={...e};for(const r in e){const i=t[r],s=e[r];/^on[A-Z]/.test(r)?i&&s?n[r]=(...a)=>{s(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...s}:r==="className"&&(n[r]=[i,s].filter(Boolean).join(" "))}return{...t,...n}}function qM(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function KM(t){const e=t+"CollectionProvider",[n,r]=Uu(e),[i,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=g=>{const{scope:m,children:f}=g,_=de.useRef(null),x=de.useRef(new Map).current;return z.jsx(i,{scope:m,itemMap:x,collectionRef:_,children:f})};o.displayName=e;const a=t+"CollectionSlot",l=rh(a),c=de.forwardRef((g,m)=>{const{scope:f,children:_}=g,x=s(a,f),y=pr(m,x.collectionRef);return z.jsx(l,{ref:y,children:_})});c.displayName=a;const u=t+"CollectionItemSlot",d="data-radix-collection-item",h=rh(u),p=de.forwardRef((g,m)=>{const{scope:f,children:_,...x}=g,y=de.useRef(null),A=pr(m,y),T=s(u,f);return de.useEffect(()=>(T.itemMap.set(y,{ref:y,...x}),()=>void T.itemMap.delete(y))),z.jsx(h,{[d]:"",ref:A,children:_})});p.displayName=u;function v(g){const m=s(t+"CollectionConsumer",g);return de.useCallback(()=>{const _=m.collectionRef.current;if(!_)return[];const x=Array.from(_.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((T,M)=>x.indexOf(T.ref.current)-x.indexOf(M.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:o,Slot:c,ItemSlot:p},v,r]}var QM=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],bn=QM.reduce((t,e)=>{const n=rh(`Primitive.${e}`),r=P.forwardRef((i,s)=>{const{asChild:o,...a}=i,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),z.jsx(l,{...a,ref:s})});return r.displayName=`Primitive.${e}`,{...t,[e]:r}},{});function Kx(t,e){t&&dl.flushSync(()=>t.dispatchEvent(e))}function Wi(t){const e=P.useRef(t);return P.useEffect(()=>{e.current=t}),P.useMemo(()=>(...n)=>{var r;return(r=e.current)==null?void 0:r.call(e,...n)},[])}function ZM(t,e=globalThis==null?void 0:globalThis.document){const n=Wi(t);P.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[n,e])}var JM="DismissableLayer",ih="dismissableLayer.update",eT="dismissableLayer.pointerDownOutside",tT="dismissableLayer.focusOutside",jg,Qx=P.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),em=P.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=P.useContext(Qx),[u,d]=P.useState(null),h=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=P.useState({}),v=pr(e,M=>d(M)),g=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),f=g.indexOf(m),_=u?g.indexOf(u):-1,x=c.layersWithOutsidePointerEventsDisabled.size>0,y=_>=f,A=rT(M=>{const L=M.target,E=[...c.branches].some(S=>S.contains(L));!y||E||(i==null||i(M),o==null||o(M),M.defaultPrevented||a==null||a())},h),T=iT(M=>{const L=M.target;[...c.branches].some(S=>S.contains(L))||(s==null||s(M),o==null||o(M),M.defaultPrevented||a==null||a())},h);return ZM(M=>{_===c.layers.size-1&&(r==null||r(M),!M.defaultPrevented&&a&&(M.preventDefault(),a()))},h),P.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(jg=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),Xg(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=jg)}},[u,h,n,c]),P.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),Xg())},[u,c]),P.useEffect(()=>{const M=()=>p({});return document.addEventListener(ih,M),()=>document.removeEventListener(ih,M)},[]),z.jsx(bn.div,{...l,ref:v,style:{pointerEvents:x?y?"auto":"none":void 0,...t.style},onFocusCapture:It(t.onFocusCapture,T.onFocusCapture),onBlurCapture:It(t.onBlurCapture,T.onBlurCapture),onPointerDownCapture:It(t.onPointerDownCapture,A.onPointerDownCapture)})});em.displayName=JM;var nT="DismissableLayerBranch",Zx=P.forwardRef((t,e)=>{const n=P.useContext(Qx),r=P.useRef(null),i=pr(e,r);return P.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),z.jsx(bn.div,{...t,ref:i})});Zx.displayName=nT;function rT(t,e=globalThis==null?void 0:globalThis.document){const n=Wi(t),r=P.useRef(!1),i=P.useRef(()=>{});return P.useEffect(()=>{const s=a=>{if(a.target&&!r.current){let l=function(){Jx(eT,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",i.current),i.current=l,e.addEventListener("click",i.current,{once:!0})):l()}else e.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",i.current)}},[e,n]),{onPointerDownCapture:()=>r.current=!0}}function iT(t,e=globalThis==null?void 0:globalThis.document){const n=Wi(t),r=P.useRef(!1);return P.useEffect(()=>{const i=s=>{s.target&&!r.current&&Jx(tT,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",i),()=>e.removeEventListener("focusin",i)},[e,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Xg(){const t=new CustomEvent(ih);document.dispatchEvent(t)}function Jx(t,e,n,{discrete:r}){const i=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?Kx(i,s):i.dispatchEvent(s)}var sT=em,oT=Zx,ji=globalThis!=null&&globalThis.document?P.useLayoutEffect:()=>{},aT="Portal",ey=P.forwardRef((t,e)=>{var a;const{container:n,...r}=t,[i,s]=P.useState(!1);ji(()=>s(!0),[]);const o=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?Xx.createPortal(z.jsx(bn.div,{...r,ref:e}),o):null});ey.displayName=aT;function lT(t,e){return P.useReducer((n,r)=>e[n][r]??n,t)}var tm=t=>{const{present:e,children:n}=t,r=cT(e),i=typeof n=="function"?n({present:r.isPresent}):P.Children.only(n),s=pr(r.ref,uT(i));return typeof n=="function"||r.isPresent?P.cloneElement(i,{ref:s}):null};tm.displayName="Presence";function cT(t){const[e,n]=P.useState(),r=P.useRef(null),i=P.useRef(t),s=P.useRef("none"),o=t?"mounted":"unmounted",[a,l]=lT(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return P.useEffect(()=>{const c=zl(r.current);s.current=a==="mounted"?c:"none"},[a]),ji(()=>{const c=r.current,u=i.current;if(u!==t){const h=s.current,p=zl(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&h!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=t}},[t,l]),ji(()=>{if(e){let c;const u=e.ownerDocument.defaultView??window,d=p=>{const g=zl(r.current).includes(p.animationName);if(p.target===e&&g&&(l("ANIMATION_END"),!i.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},h=p=>{p.target===e&&(s.current=zl(r.current))};return e.addEventListener("animationstart",h),e.addEventListener("animationcancel",d),e.addEventListener("animationend",d),()=>{u.clearTimeout(c),e.removeEventListener("animationstart",h),e.removeEventListener("animationcancel",d),e.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:P.useCallback(c=>{r.current=c?getComputedStyle(c):null,n(c)},[])}}function zl(t){return(t==null?void 0:t.animationName)||"none"}function uT(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var dT=G0[" useInsertionEffect ".trim().toString()]||ji;function fT({prop:t,defaultProp:e,onChange:n=()=>{},caller:r}){const[i,s,o]=hT({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:i;{const u=P.useRef(t!==void 0);P.useEffect(()=>{const d=u.current;d!==a&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=a},[a,r])}const c=P.useCallback(u=>{var d;if(a){const h=pT(u)?u(t):u;h!==t&&((d=o.current)==null||d.call(o,h))}else s(u)},[a,t,s,o]);return[l,c]}function hT({defaultProp:t,onChange:e}){const[n,r]=P.useState(t),i=P.useRef(n),s=P.useRef(e);return dT(()=>{s.current=e},[e]),P.useEffect(()=>{var o;i.current!==n&&((o=s.current)==null||o.call(s,n),i.current=n)},[n,i]),[n,r,s]}function pT(t){return typeof t=="function"}var mT=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),gT="VisuallyHidden",Fu=P.forwardRef((t,e)=>z.jsx(bn.span,{...t,ref:e,style:{...mT,...t.style}}));Fu.displayName=gT;var vT=Fu,nm="ToastProvider",[rm,_T,xT]=KM("Toast"),[ty,v3]=Uu("Toast",[xT]),[yT,Ou]=ty(nm),ny=t=>{const{__scopeToast:e,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:s=50,children:o}=t,[a,l]=P.useState(null),[c,u]=P.useState(0),d=P.useRef(!1),h=P.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${nm}\`. Expected non-empty \`string\`.`),z.jsx(rm.Provider,{scope:e,children:z.jsx(yT,{scope:e,label:n,duration:r,swipeDirection:i,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:P.useCallback(()=>u(p=>p+1),[]),onToastRemove:P.useCallback(()=>u(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:h,children:o})})};ny.displayName=nm;var ry="ToastViewport",ST=["F8"],sh="toast.viewportPause",oh="toast.viewportResume",iy=P.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:r=ST,label:i="Notifications ({hotkey})",...s}=t,o=Ou(ry,n),a=_T(n),l=P.useRef(null),c=P.useRef(null),u=P.useRef(null),d=P.useRef(null),h=pr(e,d,o.onViewportChange),p=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=o.toastCount>0;P.useEffect(()=>{const m=f=>{var x;r.length!==0&&r.every(y=>f[y]||f.code===y)&&((x=d.current)==null||x.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[r]),P.useEffect(()=>{const m=l.current,f=d.current;if(v&&m&&f){const _=()=>{if(!o.isClosePausedRef.current){const T=new CustomEvent(sh);f.dispatchEvent(T),o.isClosePausedRef.current=!0}},x=()=>{if(o.isClosePausedRef.current){const T=new CustomEvent(oh);f.dispatchEvent(T),o.isClosePausedRef.current=!1}},y=T=>{!m.contains(T.relatedTarget)&&x()},A=()=>{m.contains(document.activeElement)||x()};return m.addEventListener("focusin",_),m.addEventListener("focusout",y),m.addEventListener("pointermove",_),m.addEventListener("pointerleave",A),window.addEventListener("blur",_),window.addEventListener("focus",x),()=>{m.removeEventListener("focusin",_),m.removeEventListener("focusout",y),m.removeEventListener("pointermove",_),m.removeEventListener("pointerleave",A),window.removeEventListener("blur",_),window.removeEventListener("focus",x)}}},[v,o.isClosePausedRef]);const g=P.useCallback(({tabbingDirection:m})=>{const _=a().map(x=>{const y=x.ref.current,A=[y,...IT(y)];return m==="forwards"?A:A.reverse()});return(m==="forwards"?_.reverse():_).flat()},[a]);return P.useEffect(()=>{const m=d.current;if(m){const f=_=>{var A,T,M;const x=_.altKey||_.ctrlKey||_.metaKey;if(_.key==="Tab"&&!x){const L=document.activeElement,E=_.shiftKey;if(_.target===m&&E){(A=c.current)==null||A.focus();return}const O=g({tabbingDirection:E?"backwards":"forwards"}),k=O.findIndex(I=>I===L);Rd(O.slice(k+1))?_.preventDefault():E?(T=c.current)==null||T.focus():(M=u.current)==null||M.focus()}};return m.addEventListener("keydown",f),()=>m.removeEventListener("keydown",f)}},[a,g]),z.jsxs(oT,{ref:l,role:"region","aria-label":i.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&z.jsx(ah,{ref:c,onFocusFromOutsideViewport:()=>{const m=g({tabbingDirection:"forwards"});Rd(m)}}),z.jsx(rm.Slot,{scope:n,children:z.jsx(bn.ol,{tabIndex:-1,...s,ref:h})}),v&&z.jsx(ah,{ref:u,onFocusFromOutsideViewport:()=>{const m=g({tabbingDirection:"backwards"});Rd(m)}})]})});iy.displayName=ry;var sy="ToastFocusProxy",ah=P.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=t,s=Ou(sy,n);return z.jsx(Fu,{"aria-hidden":!0,tabIndex:0,...i,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&r()}})});ah.displayName=sy;var fl="Toast",ET="toast.swipeStart",wT="toast.swipeMove",MT="toast.swipeCancel",TT="toast.swipeEnd",oy=P.forwardRef((t,e)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:s,...o}=t,[a,l]=fT({prop:r,defaultProp:i??!0,onChange:s,caller:fl});return z.jsx(tm,{present:n||a,children:z.jsx(CT,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:Wi(t.onPause),onResume:Wi(t.onResume),onSwipeStart:It(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:It(t.onSwipeMove,c=>{const{x:u,y:d}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${d}px`)}),onSwipeCancel:It(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:It(t.onSwipeEnd,c=>{const{x:u,y:d}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${d}px`),l(!1)})})})});oy.displayName=fl;var[bT,AT]=ty(fl,{onClose(){}}),CT=P.forwardRef((t,e)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:u,onSwipeMove:d,onSwipeCancel:h,onSwipeEnd:p,...v}=t,g=Ou(fl,n),[m,f]=P.useState(null),_=pr(e,I=>f(I)),x=P.useRef(null),y=P.useRef(null),A=i||g.duration,T=P.useRef(0),M=P.useRef(A),L=P.useRef(0),{onToastAdd:E,onToastRemove:S}=g,R=Wi(()=>{var q;(m==null?void 0:m.contains(document.activeElement))&&((q=g.viewport)==null||q.focus()),o()}),O=P.useCallback(I=>{!I||I===1/0||(window.clearTimeout(L.current),T.current=new Date().getTime(),L.current=window.setTimeout(R,I))},[R]);P.useEffect(()=>{const I=g.viewport;if(I){const q=()=>{O(M.current),c==null||c()},U=()=>{const K=new Date().getTime()-T.current;M.current=M.current-K,window.clearTimeout(L.current),l==null||l()};return I.addEventListener(sh,U),I.addEventListener(oh,q),()=>{I.removeEventListener(sh,U),I.removeEventListener(oh,q)}}},[g.viewport,A,l,c,O]),P.useEffect(()=>{s&&!g.isClosePausedRef.current&&O(A)},[s,A,g.isClosePausedRef,O]),P.useEffect(()=>(E(),()=>S()),[E,S]);const k=P.useMemo(()=>m?hy(m):null,[m]);return g.viewport?z.jsxs(z.Fragment,{children:[k&&z.jsx(RT,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:k}),z.jsx(bT,{scope:n,onClose:R,children:dl.createPortal(z.jsx(rm.ItemSlot,{scope:n,children:z.jsx(sT,{asChild:!0,onEscapeKeyDown:It(a,()=>{g.isFocusedToastEscapeKeyDownRef.current||R(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:z.jsx(bn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":g.swipeDirection,...v,ref:_,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:It(t.onKeyDown,I=>{I.key==="Escape"&&(a==null||a(I.nativeEvent),I.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,R()))}),onPointerDown:It(t.onPointerDown,I=>{I.button===0&&(x.current={x:I.clientX,y:I.clientY})}),onPointerMove:It(t.onPointerMove,I=>{if(!x.current)return;const q=I.clientX-x.current.x,U=I.clientY-x.current.y,K=!!y.current,D=["left","right"].includes(g.swipeDirection),B=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,Y=D?B(0,q):0,re=D?0:B(0,U),oe=I.pointerType==="touch"?10:2,Ee={x:Y,y:re},W={originalEvent:I,delta:Ee};K?(y.current=Ee,Vl(wT,d,W,{discrete:!1})):$g(Ee,g.swipeDirection,oe)?(y.current=Ee,Vl(ET,u,W,{discrete:!1}),I.target.setPointerCapture(I.pointerId)):(Math.abs(q)>oe||Math.abs(U)>oe)&&(x.current=null)}),onPointerUp:It(t.onPointerUp,I=>{const q=y.current,U=I.target;if(U.hasPointerCapture(I.pointerId)&&U.releasePointerCapture(I.pointerId),y.current=null,x.current=null,q){const K=I.currentTarget,D={originalEvent:I,delta:q};$g(q,g.swipeDirection,g.swipeThreshold)?Vl(TT,p,D,{discrete:!0}):Vl(MT,h,D,{discrete:!0}),K.addEventListener("click",B=>B.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),RT=t=>{const{__scopeToast:e,children:n,...r}=t,i=Ou(fl,e),[s,o]=P.useState(!1),[a,l]=P.useState(!1);return DT(()=>o(!0)),P.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:z.jsx(ey,{asChild:!0,children:z.jsx(Fu,{...r,children:s&&z.jsxs(z.Fragment,{children:[i.label," ",n]})})})},PT="ToastTitle",ay=P.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t;return z.jsx(bn.div,{...r,ref:e})});ay.displayName=PT;var LT="ToastDescription",ly=P.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t;return z.jsx(bn.div,{...r,ref:e})});ly.displayName=LT;var cy="ToastAction",uy=P.forwardRef((t,e)=>{const{altText:n,...r}=t;return n.trim()?z.jsx(fy,{altText:n,asChild:!0,children:z.jsx(im,{...r,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${cy}\`. Expected non-empty \`string\`.`),null)});uy.displayName=cy;var dy="ToastClose",im=P.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t,i=AT(dy,n);return z.jsx(fy,{asChild:!0,children:z.jsx(bn.button,{type:"button",...r,ref:e,onClick:It(t.onClick,i.onClose)})})});im.displayName=dy;var fy=P.forwardRef((t,e)=>{const{__scopeToast:n,altText:r,...i}=t;return z.jsx(bn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:e})});function hy(t){const e=[];return Array.from(t.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&e.push(r.textContent),NT(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",s=r.dataset.radixToastAnnounceExclude==="";if(!i)if(s){const o=r.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...hy(r))}}),e}function Vl(t,e,n,{discrete:r}){const i=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?Kx(i,s):i.dispatchEvent(s)}var $g=(t,e,n=0)=>{const r=Math.abs(t.x),i=Math.abs(t.y),s=r>i;return e==="left"||e==="right"?s&&r>n:!s&&i>n};function DT(t=()=>{}){const e=Wi(t);ji(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[e])}function NT(t){return t.nodeType===t.ELEMENT_NODE}function IT(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Rd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var UT=ny,py=iy,my=oy,gy=ay,vy=ly,_y=uy,xy=im;function yy(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=yy(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Sy(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=yy(t))&&(r&&(r+=" "),r+=e);return r}const Yg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,qg=Sy,FT=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return qg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:s}=e,o=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],d=s==null?void 0:s[c];if(u===null)return null;const h=Yg(u)||Yg(d);return i[c][h]}),a=n&&Object.entries(n).reduce((c,u)=>{let[d,h]=u;return h===void 0||(c[d]=h),c},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:d,className:h,...p}=u;return Object.entries(p).every(v=>{let[g,m]=v;return Array.isArray(m)?m.includes({...s,...a}[g]):{...s,...a}[g]===m})?[...c,d,h]:c},[]);return qg(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ey=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=P.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>P.createElement("svg",{ref:l,...kT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Ey("lucide",i),...a},[...o.map(([c,u])=>P.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=(t,e)=>{const n=P.forwardRef(({className:r,...i},s)=>P.createElement(BT,{ref:s,iconNode:e,className:Ey(`lucide-${OT(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=zT("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),sm="-",HT=t=>{const e=WT(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const a=o.split(sm);return a[0]===""&&a.length!==1&&a.shift(),wy(a,e)||GT(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&r[o]?[...l,...r[o]]:l}}},wy=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?wy(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=t.join(sm);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},Kg=/^\[(.+)\]$/,GT=t=>{if(Kg.test(t)){const e=Kg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},WT=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return XT(Object.entries(t.classGroups),n).forEach(([s,o])=>{lh(o,r,s,e)}),r},lh=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const s=i===""?e:Qg(e,i);s.classGroupId=n;return}if(typeof i=="function"){if(jT(i)){lh(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{lh(o,Qg(e,s),n,r)})})},Qg=(t,e)=>{let n=t;return e.split(sm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},jT=t=>t.isThemeGetter,XT=(t,e)=>e?t.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,i]}):t,$T=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}},My="!",YT=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,d;for(let m=0;m<a.length;m++){let f=a[m];if(c===0){if(f===i&&(r||a.slice(m,m+s)===e)){l.push(a.slice(u,m)),u=m+s;continue}if(f==="/"){d=m;continue}}f==="["?c++:f==="]"&&c--}const h=l.length===0?a:a.substring(u),p=h.startsWith(My),v=p?h.substring(1):h,g=d&&d>u?d-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:g}};return n?a=>n({className:a,parseClassName:o}):o},qT=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},KT=t=>({cache:$T(t.cacheSize),parseClassName:YT(t),...HT(t)}),QT=/\s+/,ZT=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=[],o=t.trim().split(QT);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:p}=n(c);let v=!!p,g=r(v?h.substring(0,p):h);if(!g){if(!v){a=c+(a.length>0?" "+a:a);continue}if(g=r(h),!g){a=c+(a.length>0?" "+a:a);continue}v=!1}const m=qT(u).join(":"),f=d?m+My:m,_=f+g;if(s.includes(_))continue;s.push(_);const x=i(g,v);for(let y=0;y<x.length;++y){const A=x[y];s.push(f+A)}a=c+(a.length>0?" "+a:a)}return a};function JT(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Ty(e))&&(r&&(r+=" "),r+=n);return r}const Ty=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=Ty(t[r]))&&(n&&(n+=" "),n+=e);return n};function e1(t,...e){let n,r,i,s=o;function o(l){const c=e.reduce((u,d)=>d(u),t());return n=KT(c),r=n.cache.get,i=n.cache.set,s=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=ZT(l,n);return i(l,u),u}return function(){return s(JT.apply(null,arguments))}}const mt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},by=/^\[(?:([a-z-]+):)?(.+)\]$/i,t1=/^\d+\/\d+$/,n1=new Set(["px","full","screen"]),r1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,i1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,s1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,o1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,a1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Nr=t=>yo(t)||n1.has(t)||t1.test(t),li=t=>Qo(t,"length",m1),yo=t=>!!t&&!Number.isNaN(Number(t)),Pd=t=>Qo(t,"number",yo),da=t=>!!t&&Number.isInteger(Number(t)),l1=t=>t.endsWith("%")&&yo(t.slice(0,-1)),je=t=>by.test(t),ci=t=>r1.test(t),c1=new Set(["length","size","percentage"]),u1=t=>Qo(t,c1,Ay),d1=t=>Qo(t,"position",Ay),f1=new Set(["image","url"]),h1=t=>Qo(t,f1,v1),p1=t=>Qo(t,"",g1),fa=()=>!0,Qo=(t,e,n)=>{const r=by.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},m1=t=>i1.test(t)&&!s1.test(t),Ay=()=>!1,g1=t=>o1.test(t),v1=t=>a1.test(t),_1=()=>{const t=mt("colors"),e=mt("spacing"),n=mt("blur"),r=mt("brightness"),i=mt("borderColor"),s=mt("borderRadius"),o=mt("borderSpacing"),a=mt("borderWidth"),l=mt("contrast"),c=mt("grayscale"),u=mt("hueRotate"),d=mt("invert"),h=mt("gap"),p=mt("gradientColorStops"),v=mt("gradientColorStopPositions"),g=mt("inset"),m=mt("margin"),f=mt("opacity"),_=mt("padding"),x=mt("saturate"),y=mt("scale"),A=mt("sepia"),T=mt("skew"),M=mt("space"),L=mt("translate"),E=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",je,e],O=()=>[je,e],k=()=>["",Nr,li],I=()=>["auto",yo,je],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>["start","end","center","between","around","evenly","stretch"],B=()=>["","0",je],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[yo,je];return{cacheSize:500,separator:":",theme:{colors:[fa],spacing:[Nr,li],blur:["none","",ci,je],brightness:re(),borderColor:[t],borderRadius:["none","","full",ci,je],borderSpacing:O(),borderWidth:k(),contrast:re(),grayscale:B(),hueRotate:re(),invert:B(),gap:O(),gradientColorStops:[t],gradientColorStopPositions:[l1,li],inset:R(),margin:R(),opacity:re(),padding:O(),saturate:re(),scale:re(),sepia:B(),skew:re(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",je]}],container:["container"],columns:[{columns:[ci]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),je]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",da,je]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",je]}],grow:[{grow:B()}],shrink:[{shrink:B()}],order:[{order:["first","last","none",da,je]}],"grid-cols":[{"grid-cols":[fa]}],"col-start-end":[{col:["auto",{span:["full",da,je]},je]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[fa]}],"row-start-end":[{row:["auto",{span:[da,je]},je]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",je]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",je]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...D()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...D(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...D(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[M]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[M]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",je,e]}],"min-w":[{"min-w":[je,e,"min","max","fit"]}],"max-w":[{"max-w":[je,e,"none","full","min","max","fit","prose",{screen:[ci]},ci]}],h:[{h:[je,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[je,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[je,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[je,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ci,li]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Pd]}],"font-family":[{font:[fa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",je]}],"line-clamp":[{"line-clamp":["none",yo,Pd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Nr,je]}],"list-image":[{"list-image":["none",je]}],"list-style-type":[{list:["none","disc","decimal",je]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Nr,li]}],"underline-offset":[{"underline-offset":["auto",Nr,je]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",je]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",je]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),d1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",u1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},h1]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:U()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[Nr,je]}],"outline-w":[{outline:[Nr,li]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:k()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Nr,li]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",ci,p1]}],"shadow-color":[{shadow:[fa]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ci,je]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[x]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",je]}],duration:[{duration:re()}],ease:[{ease:["linear","in","out","in-out",je]}],delay:[{delay:re()}],animate:[{animate:["none","spin","ping","pulse","bounce",je]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[da,je]}],"translate-x":[{"translate-x":[L]}],"translate-y":[{"translate-y":[L]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",je]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",je]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",je]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Nr,li,Pd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},x1=e1(_1);function Cr(...t){return x1(Sy(...t))}const y1=UT,Cy=P.forwardRef(({className:t,...e},n)=>z.jsx(py,{ref:n,className:Cr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Cy.displayName=py.displayName;const S1=FT("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Ry=P.forwardRef(({className:t,variant:e,...n},r)=>z.jsx(my,{ref:r,className:Cr(S1({variant:e}),t),...n}));Ry.displayName=my.displayName;const E1=P.forwardRef(({className:t,...e},n)=>z.jsx(_y,{ref:n,className:Cr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));E1.displayName=_y.displayName;const Py=P.forwardRef(({className:t,...e},n)=>z.jsx(xy,{ref:n,className:Cr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:z.jsx(VT,{className:"h-4 w-4"})}));Py.displayName=xy.displayName;const Ly=P.forwardRef(({className:t,...e},n)=>z.jsx(gy,{ref:n,className:Cr("text-sm font-semibold",t),...e}));Ly.displayName=gy.displayName;const Dy=P.forwardRef(({className:t,...e},n)=>z.jsx(vy,{ref:n,className:Cr("text-sm opacity-90",t),...e}));Dy.displayName=vy.displayName;function w1(){const{toasts:t}=GM();return z.jsxs(y1,{children:[t.map(function({id:e,title:n,description:r,action:i,...s}){return z.jsxs(Ry,{...s,children:[z.jsxs("div",{className:"grid gap-1",children:[n&&z.jsx(Ly,{children:n}),r&&z.jsx(Dy,{children:r})]}),i,z.jsx(Py,{})]},e)}),z.jsx(Cy,{})]})}var Zg=["light","dark"],M1="(prefers-color-scheme: dark)",T1=P.createContext(void 0),b1={setTheme:t=>{},themes:[]},A1=()=>{var t;return(t=P.useContext(T1))!=null?t:b1};P.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:s,value:o,attrs:a,nonce:l})=>{let c=s==="system",u=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v=>`'${v}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,d=i?Zg.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(v,g=!1,m=!0)=>{let f=o?o[v]:v,_=g?v+"|| ''":`'${f}'`,x="";return i&&m&&!g&&Zg.includes(v)&&(x+=`d.style.colorScheme = '${v}';`),n==="class"?g||f?x+=`c.add(${_})`:x+="null":f&&(x+=`d[s](n,${_})`),x},p=t?`!function(){${u}${h(t)}}()`:r?`!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${M1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}${c?"":"else{"+h(s,!1,!1)+"}"}${d}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}else{${h(s,!1,!1)};}${d}}catch(t){}}();`;return P.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var C1=t=>{switch(t){case"success":return L1;case"info":return N1;case"warning":return D1;case"error":return I1;default:return null}},R1=Array(12).fill(0),P1=({visible:t,className:e})=>de.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},de.createElement("div",{className:"sonner-spinner"},R1.map((n,r)=>de.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),L1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),D1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),N1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),I1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),U1=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},de.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),de.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),F1=()=>{let[t,e]=de.useState(document.hidden);return de.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},ch=1,O1=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...r}=t,i=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:ch++,s=this.toasts.find(a=>a.id===i),o=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),s?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...t,id:i,title:n}),{...a,...t,id:i,dismissible:o,title:n}):a):this.addToast({title:n,...r,dismissible:o,id:i}),i},this.dismiss=t=>(this.dismissedToasts.add(t),t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let r=t instanceof Promise?t:t(),i=n!==void 0,s,o=r.then(async l=>{if(s=["resolve",l],de.isValidElement(l))i=!1,this.create({id:n,type:"default",message:l});else if(B1(l)&&!l.ok){i=!1;let c=typeof e.error=="function"?await e.error(`HTTP error! status: ${l.status}`):e.error,u=typeof e.description=="function"?await e.description(`HTTP error! status: ${l.status}`):e.description;this.create({id:n,type:"error",message:c,description:u})}else if(e.success!==void 0){i=!1;let c=typeof e.success=="function"?await e.success(l):e.success,u=typeof e.description=="function"?await e.description(l):e.description;this.create({id:n,type:"success",message:c,description:u})}}).catch(async l=>{if(s=["reject",l],e.error!==void 0){i=!1;let c=typeof e.error=="function"?await e.error(l):e.error,u=typeof e.description=="function"?await e.description(l):e.description;this.create({id:n,type:"error",message:c,description:u})}}).finally(()=>{var l;i&&(this.dismiss(n),n=void 0),(l=e.finally)==null||l.call(e)}),a=()=>new Promise((l,c)=>o.then(()=>s[0]==="reject"?c(s[1]):l(s[1])).catch(c));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||ch++;return this.create({jsx:t(n),id:n,...e}),n},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},gn=new O1,k1=(t,e)=>{let n=(e==null?void 0:e.id)||ch++;return gn.addToast({title:t,...e,id:n}),n},B1=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",z1=k1,V1=()=>gn.toasts,H1=()=>gn.getActiveToasts();Object.assign(z1,{success:gn.success,info:gn.info,warning:gn.warning,error:gn.error,custom:gn.custom,message:gn.message,promise:gn.promise,dismiss:gn.dismiss,loading:gn.loading},{getHistory:V1,getToasts:H1});function G1(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}G1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Hl(t){return t.label!==void 0}var W1=3,j1="32px",X1="16px",Jg=4e3,$1=356,Y1=14,q1=20,K1=200;function Zn(...t){return t.filter(Boolean).join(" ")}function Q1(t){let[e,n]=t.split("-"),r=[];return e&&r.push(e),n&&r.push(n),r}var Z1=t=>{var e,n,r,i,s,o,a,l,c,u,d;let{invert:h,toast:p,unstyled:v,interacting:g,setHeights:m,visibleToasts:f,heights:_,index:x,toasts:y,expanded:A,removeToast:T,defaultRichColors:M,closeButton:L,style:E,cancelButtonStyle:S,actionButtonStyle:R,className:O="",descriptionClassName:k="",duration:I,position:q,gap:U,loadingIcon:K,expandByDefault:D,classNames:B,icons:Y,closeButtonAriaLabel:re="Close toast",pauseWhenPageIsHidden:oe}=t,[Ee,W]=de.useState(null),[ie,he]=de.useState(null),[ne,Ce]=de.useState(!1),[$e,Re]=de.useState(!1),[ot,at]=de.useState(!1),[Be,N]=de.useState(!1),[$t,qe]=de.useState(!1),[Ke,be]=de.useState(0),[nt,Ae]=de.useState(0),C=de.useRef(p.duration||I||Jg),w=de.useRef(null),G=de.useRef(null),ee=x===0,se=x+1<=f,Q=p.type,Me=p.dismissible!==!1,ge=p.className||"",Ne=p.descriptionClassName||"",Pe=de.useMemo(()=>_.findIndex(ue=>ue.toastId===p.id)||0,[_,p.id]),le=de.useMemo(()=>{var ue;return(ue=p.closeButton)!=null?ue:L},[p.closeButton,L]),xe=de.useMemo(()=>p.duration||I||Jg,[p.duration,I]),Ie=de.useRef(0),Le=de.useRef(0),ye=de.useRef(0),He=de.useRef(null),[ze,dt]=q.split("-"),F=de.useMemo(()=>_.reduce((ue,Ue,Ge)=>Ge>=Pe?ue:ue+Ue.height,0),[_,Pe]),me=F1(),Z=p.invert||h,te=Q==="loading";Le.current=de.useMemo(()=>Pe*U+F,[Pe,F]),de.useEffect(()=>{C.current=xe},[xe]),de.useEffect(()=>{Ce(!0)},[]),de.useEffect(()=>{let ue=G.current;if(ue){let Ue=ue.getBoundingClientRect().height;return Ae(Ue),m(Ge=>[{toastId:p.id,height:Ue,position:p.position},...Ge]),()=>m(Ge=>Ge.filter(We=>We.toastId!==p.id))}},[m,p.id]),de.useLayoutEffect(()=>{if(!ne)return;let ue=G.current,Ue=ue.style.height;ue.style.height="auto";let Ge=ue.getBoundingClientRect().height;ue.style.height=Ue,Ae(Ge),m(We=>We.find(yt=>yt.toastId===p.id)?We.map(yt=>yt.toastId===p.id?{...yt,height:Ge}:yt):[{toastId:p.id,height:Ge,position:p.position},...We])},[ne,p.title,p.description,m,p.id]);let fe=de.useCallback(()=>{Re(!0),be(Le.current),m(ue=>ue.filter(Ue=>Ue.toastId!==p.id)),setTimeout(()=>{T(p)},K1)},[p,T,m,Le]);de.useEffect(()=>{if(p.promise&&Q==="loading"||p.duration===1/0||p.type==="loading")return;let ue;return A||g||oe&&me?(()=>{if(ye.current<Ie.current){let Ue=new Date().getTime()-Ie.current;C.current=C.current-Ue}ye.current=new Date().getTime()})():C.current!==1/0&&(Ie.current=new Date().getTime(),ue=setTimeout(()=>{var Ue;(Ue=p.onAutoClose)==null||Ue.call(p,p),fe()},C.current)),()=>clearTimeout(ue)},[A,g,p,Q,oe,me,fe]),de.useEffect(()=>{p.delete&&fe()},[fe,p.delete]);function ve(){var ue,Ue,Ge;return Y!=null&&Y.loading?de.createElement("div",{className:Zn(B==null?void 0:B.loader,(ue=p==null?void 0:p.classNames)==null?void 0:ue.loader,"sonner-loader"),"data-visible":Q==="loading"},Y.loading):K?de.createElement("div",{className:Zn(B==null?void 0:B.loader,(Ue=p==null?void 0:p.classNames)==null?void 0:Ue.loader,"sonner-loader"),"data-visible":Q==="loading"},K):de.createElement(P1,{className:Zn(B==null?void 0:B.loader,(Ge=p==null?void 0:p.classNames)==null?void 0:Ge.loader),visible:Q==="loading"})}return de.createElement("li",{tabIndex:0,ref:G,className:Zn(O,ge,B==null?void 0:B.toast,(e=p==null?void 0:p.classNames)==null?void 0:e.toast,B==null?void 0:B.default,B==null?void 0:B[Q],(n=p==null?void 0:p.classNames)==null?void 0:n[Q]),"data-sonner-toast":"","data-rich-colors":(r=p.richColors)!=null?r:M,"data-styled":!(p.jsx||p.unstyled||v),"data-mounted":ne,"data-promise":!!p.promise,"data-swiped":$t,"data-removed":$e,"data-visible":se,"data-y-position":ze,"data-x-position":dt,"data-index":x,"data-front":ee,"data-swiping":ot,"data-dismissible":Me,"data-type":Q,"data-invert":Z,"data-swipe-out":Be,"data-swipe-direction":ie,"data-expanded":!!(A||D&&ne),style:{"--index":x,"--toasts-before":x,"--z-index":y.length-x,"--offset":`${$e?Ke:Le.current}px`,"--initial-height":D?"auto":`${nt}px`,...E,...p.style},onDragEnd:()=>{at(!1),W(null),He.current=null},onPointerDown:ue=>{te||!Me||(w.current=new Date,be(Le.current),ue.target.setPointerCapture(ue.pointerId),ue.target.tagName!=="BUTTON"&&(at(!0),He.current={x:ue.clientX,y:ue.clientY}))},onPointerUp:()=>{var ue,Ue,Ge,We;if(Be||!Me)return;He.current=null;let yt=Number(((ue=G.current)==null?void 0:ue.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),kt=Number(((Ue=G.current)==null?void 0:Ue.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),vr=new Date().getTime()-((Ge=w.current)==null?void 0:Ge.getTime()),hn=Ee==="x"?yt:kt,Yt=Math.abs(hn)/vr;if(Math.abs(hn)>=q1||Yt>.11){be(Le.current),(We=p.onDismiss)==null||We.call(p,p),he(Ee==="x"?yt>0?"right":"left":kt>0?"down":"up"),fe(),N(!0),qe(!1);return}at(!1),W(null)},onPointerMove:ue=>{var Ue,Ge,We,yt;if(!He.current||!Me||((Ue=window.getSelection())==null?void 0:Ue.toString().length)>0)return;let kt=ue.clientY-He.current.y,vr=ue.clientX-He.current.x,hn=(Ge=t.swipeDirections)!=null?Ge:Q1(q);!Ee&&(Math.abs(vr)>1||Math.abs(kt)>1)&&W(Math.abs(vr)>Math.abs(kt)?"x":"y");let Yt={x:0,y:0};Ee==="y"?(hn.includes("top")||hn.includes("bottom"))&&(hn.includes("top")&&kt<0||hn.includes("bottom")&&kt>0)&&(Yt.y=kt):Ee==="x"&&(hn.includes("left")||hn.includes("right"))&&(hn.includes("left")&&vr<0||hn.includes("right")&&vr>0)&&(Yt.x=vr),(Math.abs(Yt.x)>0||Math.abs(Yt.y)>0)&&qe(!0),(We=G.current)==null||We.style.setProperty("--swipe-amount-x",`${Yt.x}px`),(yt=G.current)==null||yt.style.setProperty("--swipe-amount-y",`${Yt.y}px`)}},le&&!p.jsx?de.createElement("button",{"aria-label":re,"data-disabled":te,"data-close-button":!0,onClick:te||!Me?()=>{}:()=>{var ue;fe(),(ue=p.onDismiss)==null||ue.call(p,p)},className:Zn(B==null?void 0:B.closeButton,(i=p==null?void 0:p.classNames)==null?void 0:i.closeButton)},(s=Y==null?void 0:Y.close)!=null?s:U1):null,p.jsx||P.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:de.createElement(de.Fragment,null,Q||p.icon||p.promise?de.createElement("div",{"data-icon":"",className:Zn(B==null?void 0:B.icon,(o=p==null?void 0:p.classNames)==null?void 0:o.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||ve():null,p.type!=="loading"?p.icon||(Y==null?void 0:Y[Q])||C1(Q):null):null,de.createElement("div",{"data-content":"",className:Zn(B==null?void 0:B.content,(a=p==null?void 0:p.classNames)==null?void 0:a.content)},de.createElement("div",{"data-title":"",className:Zn(B==null?void 0:B.title,(l=p==null?void 0:p.classNames)==null?void 0:l.title)},typeof p.title=="function"?p.title():p.title),p.description?de.createElement("div",{"data-description":"",className:Zn(k,Ne,B==null?void 0:B.description,(c=p==null?void 0:p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),P.isValidElement(p.cancel)?p.cancel:p.cancel&&Hl(p.cancel)?de.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||S,onClick:ue=>{var Ue,Ge;Hl(p.cancel)&&Me&&((Ge=(Ue=p.cancel).onClick)==null||Ge.call(Ue,ue),fe())},className:Zn(B==null?void 0:B.cancelButton,(u=p==null?void 0:p.classNames)==null?void 0:u.cancelButton)},p.cancel.label):null,P.isValidElement(p.action)?p.action:p.action&&Hl(p.action)?de.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||R,onClick:ue=>{var Ue,Ge;Hl(p.action)&&((Ge=(Ue=p.action).onClick)==null||Ge.call(Ue,ue),!ue.defaultPrevented&&fe())},className:Zn(B==null?void 0:B.actionButton,(d=p==null?void 0:p.classNames)==null?void 0:d.actionButton)},p.action.label):null))};function ev(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function J1(t,e){let n={};return[t,e].forEach((r,i)=>{let s=i===1,o=s?"--mobile-offset":"--offset",a=s?X1:j1;function l(c){["top","right","bottom","left"].forEach(u=>{n[`${o}-${u}`]=typeof c=="number"?`${c}px`:c})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(c=>{r[c]===void 0?n[`${o}-${c}`]=a:n[`${o}-${c}`]=typeof r[c]=="number"?`${r[c]}px`:r[c]}):l(a)}),n}var eb=P.forwardRef(function(t,e){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:s,closeButton:o,className:a,offset:l,mobileOffset:c,theme:u="light",richColors:d,duration:h,style:p,visibleToasts:v=W1,toastOptions:g,dir:m=ev(),gap:f=Y1,loadingIcon:_,icons:x,containerAriaLabel:y="Notifications",pauseWhenPageIsHidden:A}=t,[T,M]=de.useState([]),L=de.useMemo(()=>Array.from(new Set([r].concat(T.filter(oe=>oe.position).map(oe=>oe.position)))),[T,r]),[E,S]=de.useState([]),[R,O]=de.useState(!1),[k,I]=de.useState(!1),[q,U]=de.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),K=de.useRef(null),D=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),B=de.useRef(null),Y=de.useRef(!1),re=de.useCallback(oe=>{M(Ee=>{var W;return(W=Ee.find(ie=>ie.id===oe.id))!=null&&W.delete||gn.dismiss(oe.id),Ee.filter(({id:ie})=>ie!==oe.id)})},[]);return de.useEffect(()=>gn.subscribe(oe=>{if(oe.dismiss){M(Ee=>Ee.map(W=>W.id===oe.id?{...W,delete:!0}:W));return}setTimeout(()=>{Xx.flushSync(()=>{M(Ee=>{let W=Ee.findIndex(ie=>ie.id===oe.id);return W!==-1?[...Ee.slice(0,W),{...Ee[W],...oe},...Ee.slice(W+1)]:[oe,...Ee]})})})}),[]),de.useEffect(()=>{if(u!=="system"){U(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?U("dark"):U("light")),typeof window>"u")return;let oe=window.matchMedia("(prefers-color-scheme: dark)");try{oe.addEventListener("change",({matches:Ee})=>{U(Ee?"dark":"light")})}catch{oe.addListener(({matches:W})=>{try{U(W?"dark":"light")}catch(ie){console.error(ie)}})}},[u]),de.useEffect(()=>{T.length<=1&&O(!1)},[T]),de.useEffect(()=>{let oe=Ee=>{var W,ie;i.every(he=>Ee[he]||Ee.code===he)&&(O(!0),(W=K.current)==null||W.focus()),Ee.code==="Escape"&&(document.activeElement===K.current||(ie=K.current)!=null&&ie.contains(document.activeElement))&&O(!1)};return document.addEventListener("keydown",oe),()=>document.removeEventListener("keydown",oe)},[i]),de.useEffect(()=>{if(K.current)return()=>{B.current&&(B.current.focus({preventScroll:!0}),B.current=null,Y.current=!1)}},[K.current]),de.createElement("section",{ref:e,"aria-label":`${y} ${D}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},L.map((oe,Ee)=>{var W;let[ie,he]=oe.split("-");return T.length?de.createElement("ol",{key:oe,dir:m==="auto"?ev():m,tabIndex:-1,ref:K,className:a,"data-sonner-toaster":!0,"data-theme":q,"data-y-position":ie,"data-lifted":R&&T.length>1&&!s,"data-x-position":he,style:{"--front-toast-height":`${((W=E[0])==null?void 0:W.height)||0}px`,"--width":`${$1}px`,"--gap":`${f}px`,...p,...J1(l,c)},onBlur:ne=>{Y.current&&!ne.currentTarget.contains(ne.relatedTarget)&&(Y.current=!1,B.current&&(B.current.focus({preventScroll:!0}),B.current=null))},onFocus:ne=>{ne.target instanceof HTMLElement&&ne.target.dataset.dismissible==="false"||Y.current||(Y.current=!0,B.current=ne.relatedTarget)},onMouseEnter:()=>O(!0),onMouseMove:()=>O(!0),onMouseLeave:()=>{k||O(!1)},onDragEnd:()=>O(!1),onPointerDown:ne=>{ne.target instanceof HTMLElement&&ne.target.dataset.dismissible==="false"||I(!0)},onPointerUp:()=>I(!1)},T.filter(ne=>!ne.position&&Ee===0||ne.position===oe).map((ne,Ce)=>{var $e,Re;return de.createElement(Z1,{key:ne.id,icons:x,index:Ce,toast:ne,defaultRichColors:d,duration:($e=g==null?void 0:g.duration)!=null?$e:h,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:n,visibleToasts:v,closeButton:(Re=g==null?void 0:g.closeButton)!=null?Re:o,interacting:k,position:oe,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:re,toasts:T.filter(ot=>ot.position==ne.position),heights:E.filter(ot=>ot.position==ne.position),setHeights:S,expandByDefault:s,gap:f,loadingIcon:_,expanded:R,pauseWhenPageIsHidden:A,swipeDirections:t.swipeDirections})})):null}))});const tb=({...t})=>{const{theme:e="system"}=A1();return z.jsx(eb,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},nb=["top","right","bottom","left"],Xi=Math.min,Ln=Math.max,lu=Math.round,Gl=Math.floor,Rr=t=>({x:t,y:t}),rb={left:"right",right:"left",bottom:"top",top:"bottom"},ib={start:"end",end:"start"};function uh(t,e,n){return Ln(t,Xi(e,n))}function ni(t,e){return typeof t=="function"?t(e):t}function ri(t){return t.split("-")[0]}function Zo(t){return t.split("-")[1]}function om(t){return t==="x"?"y":"x"}function am(t){return t==="y"?"height":"width"}function $i(t){return["top","bottom"].includes(ri(t))?"y":"x"}function lm(t){return om($i(t))}function sb(t,e,n){n===void 0&&(n=!1);const r=Zo(t),i=lm(t),s=am(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=cu(o)),[o,cu(o)]}function ob(t){const e=cu(t);return[dh(t),e,dh(e)]}function dh(t){return t.replace(/start|end/g,e=>ib[e])}function ab(t,e,n){const r=["left","right"],i=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?s:o;default:return[]}}function lb(t,e,n,r){const i=Zo(t);let s=ab(ri(t),n==="start",r);return i&&(s=s.map(o=>o+"-"+i),e&&(s=s.concat(s.map(dh)))),s}function cu(t){return t.replace(/left|right|bottom|top/g,e=>rb[e])}function cb(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ny(t){return typeof t!="number"?cb(t):{top:t,right:t,bottom:t,left:t}}function uu(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function tv(t,e,n){let{reference:r,floating:i}=t;const s=$i(e),o=lm(e),a=am(o),l=ri(e),c=s==="y",u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,h=r[a]/2-i[a]/2;let p;switch(l){case"top":p={x:u,y:r.y-i.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Zo(e)){case"start":p[o]-=h*(n&&c?-1:1);break;case"end":p[o]+=h*(n&&c?-1:1);break}return p}const ub=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=tv(c,r,l),h=r,p={},v=0;for(let g=0;g<a.length;g++){const{name:m,fn:f}=a[g],{x:_,y:x,data:y,reset:A}=await f({x:u,y:d,initialPlacement:r,placement:h,strategy:i,middlewareData:p,rects:c,platform:o,elements:{reference:t,floating:e}});u=_??u,d=x??d,p={...p,[m]:{...p[m],...y}},A&&v<=50&&(v++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(c=A.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):A.rects),{x:u,y:d}=tv(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:p}};async function Ka(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=ni(e,t),v=Ny(p),m=a[h?d==="floating"?"reference":"floating":d],f=uu(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),_=d==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),y=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},A=uu(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:_,offsetParent:x,strategy:l}):_);return{top:(f.top-A.top+v.top)/y.y,bottom:(A.bottom-f.bottom+v.bottom)/y.y,left:(f.left-A.left+v.left)/y.x,right:(A.right-f.right+v.right)/y.x}}const db=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:i,rects:s,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=ni(t,e)||{};if(c==null)return{};const d=Ny(u),h={x:n,y:r},p=lm(i),v=am(p),g=await o.getDimensions(c),m=p==="y",f=m?"top":"left",_=m?"bottom":"right",x=m?"clientHeight":"clientWidth",y=s.reference[v]+s.reference[p]-h[p]-s.floating[v],A=h[p]-s.reference[p],T=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let M=T?T[x]:0;(!M||!await(o.isElement==null?void 0:o.isElement(T)))&&(M=a.floating[x]||s.floating[v]);const L=y/2-A/2,E=M/2-g[v]/2-1,S=Xi(d[f],E),R=Xi(d[_],E),O=S,k=M-g[v]-R,I=M/2-g[v]/2+L,q=uh(O,I,k),U=!l.arrow&&Zo(i)!=null&&I!==q&&s.reference[v]/2-(I<O?S:R)-g[v]/2<0,K=U?I<O?I-O:I-k:0;return{[p]:h[p]+K,data:{[p]:q,centerOffset:I-q-K,...U&&{alignmentOffset:K}},reset:U}}}),fb=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:g=!0,...m}=ni(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const f=ri(i),_=$i(a),x=ri(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=h||(x||!g?[cu(a)]:ob(a)),T=v!=="none";!h&&T&&A.push(...lb(a,g,v,y));const M=[a,...A],L=await Ka(e,m),E=[];let S=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&E.push(L[f]),d){const I=sb(i,o,y);E.push(L[I[0]],L[I[1]])}if(S=[...S,{placement:i,overflows:E}],!E.every(I=>I<=0)){var R,O;const I=(((R=s.flip)==null?void 0:R.index)||0)+1,q=M[I];if(q)return{data:{index:I,overflows:S},reset:{placement:q}};let U=(O=S.filter(K=>K.overflows[0]<=0).sort((K,D)=>K.overflows[1]-D.overflows[1])[0])==null?void 0:O.placement;if(!U)switch(p){case"bestFit":{var k;const K=(k=S.filter(D=>{if(T){const B=$i(D.placement);return B===_||B==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(B=>B>0).reduce((B,Y)=>B+Y,0)]).sort((D,B)=>D[1]-B[1])[0])==null?void 0:k[0];K&&(U=K);break}case"initialPlacement":U=a;break}if(i!==U)return{reset:{placement:U}}}return{}}}};function nv(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function rv(t){return nb.some(e=>t[e]>=0)}const hb=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:r="referenceHidden",...i}=ni(t,e);switch(r){case"referenceHidden":{const s=await Ka(e,{...i,elementContext:"reference"}),o=nv(s,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:rv(o)}}}case"escaped":{const s=await Ka(e,{...i,altBoundary:!0}),o=nv(s,n.floating);return{data:{escapedOffsets:o,escaped:rv(o)}}}default:return{}}}}};async function pb(t,e){const{placement:n,platform:r,elements:i}=t,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=ri(n),a=Zo(n),l=$i(n)==="y",c=["left","top"].includes(o)?-1:1,u=s&&l?-1:1,d=ni(e,t);let{mainAxis:h,crossAxis:p,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof v=="number"&&(p=a==="end"?v*-1:v),l?{x:p*u,y:h*c}:{x:h*c,y:p*u}}const mb=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:s,placement:o,middlewareData:a}=e,l=await pb(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:o}}}}},gb=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:f,y:_}=m;return{x:f,y:_}}},...l}=ni(t,e),c={x:n,y:r},u=await Ka(e,l),d=$i(ri(i)),h=om(d);let p=c[h],v=c[d];if(s){const m=h==="y"?"top":"left",f=h==="y"?"bottom":"right",_=p+u[m],x=p-u[f];p=uh(_,p,x)}if(o){const m=d==="y"?"top":"left",f=d==="y"?"bottom":"right",_=v+u[m],x=v-u[f];v=uh(_,v,x)}const g=a.fn({...e,[h]:p,[d]:v});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[h]:s,[d]:o}}}}}},vb=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:r,placement:i,rects:s,middlewareData:o}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=ni(t,e),u={x:n,y:r},d=$i(i),h=om(d);let p=u[h],v=u[d];const g=ni(a,e),m=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const x=h==="y"?"height":"width",y=s.reference[h]-s.floating[x]+m.mainAxis,A=s.reference[h]+s.reference[x]-m.mainAxis;p<y?p=y:p>A&&(p=A)}if(c){var f,_;const x=h==="y"?"width":"height",y=["top","left"].includes(ri(i)),A=s.reference[d]-s.floating[x]+(y&&((f=o.offset)==null?void 0:f[d])||0)+(y?0:m.crossAxis),T=s.reference[d]+s.reference[x]+(y?0:((_=o.offset)==null?void 0:_[d])||0)-(y?m.crossAxis:0);v<A?v=A:v>T&&(v=T)}return{[h]:p,[d]:v}}}},_b=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,r;const{placement:i,rects:s,platform:o,elements:a}=e,{apply:l=()=>{},...c}=ni(t,e),u=await Ka(e,c),d=ri(i),h=Zo(i),p=$i(i)==="y",{width:v,height:g}=s.floating;let m,f;d==="top"||d==="bottom"?(m=d,f=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(f=d,m=h==="end"?"top":"bottom");const _=g-u.top-u.bottom,x=v-u.left-u.right,y=Xi(g-u[m],_),A=Xi(v-u[f],x),T=!e.middlewareData.shift;let M=y,L=A;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(L=x),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(M=_),T&&!h){const S=Ln(u.left,0),R=Ln(u.right,0),O=Ln(u.top,0),k=Ln(u.bottom,0);p?L=v-2*(S!==0||R!==0?S+R:Ln(u.left,u.right)):M=g-2*(O!==0||k!==0?O+k:Ln(u.top,u.bottom))}await l({...e,availableWidth:L,availableHeight:M});const E=await o.getDimensions(a.floating);return v!==E.width||g!==E.height?{reset:{rects:!0}}:{}}}};function ku(){return typeof window<"u"}function Jo(t){return Iy(t)?(t.nodeName||"").toLowerCase():"#document"}function Un(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Lr(t){var e;return(e=(Iy(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Iy(t){return ku()?t instanceof Node||t instanceof Un(t).Node:!1}function mr(t){return ku()?t instanceof Element||t instanceof Un(t).Element:!1}function Pr(t){return ku()?t instanceof HTMLElement||t instanceof Un(t).HTMLElement:!1}function iv(t){return!ku()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Un(t).ShadowRoot}function hl(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=gr(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function xb(t){return["table","td","th"].includes(Jo(t))}function Bu(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function cm(t){const e=um(),n=mr(t)?gr(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function yb(t){let e=Yi(t);for(;Pr(e)&&!Vo(e);){if(cm(e))return e;if(Bu(e))return null;e=Yi(e)}return null}function um(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vo(t){return["html","body","#document"].includes(Jo(t))}function gr(t){return Un(t).getComputedStyle(t)}function zu(t){return mr(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Yi(t){if(Jo(t)==="html")return t;const e=t.assignedSlot||t.parentNode||iv(t)&&t.host||Lr(t);return iv(e)?e.host:e}function Uy(t){const e=Yi(t);return Vo(e)?t.ownerDocument?t.ownerDocument.body:t.body:Pr(e)&&hl(e)?e:Uy(e)}function Qa(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Uy(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),o=Un(i);if(s){const a=fh(o);return e.concat(o,o.visualViewport||[],hl(i)?i:[],a&&n?Qa(a):[])}return e.concat(i,Qa(i,[],n))}function fh(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Fy(t){const e=gr(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=Pr(t),s=i?t.offsetWidth:n,o=i?t.offsetHeight:r,a=lu(n)!==s||lu(r)!==o;return a&&(n=s,r=o),{width:n,height:r,$:a}}function dm(t){return mr(t)?t:t.contextElement}function So(t){const e=dm(t);if(!Pr(e))return Rr(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=Fy(e);let o=(s?lu(n.width):n.width)/r,a=(s?lu(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Sb=Rr(0);function Oy(t){const e=Un(t);return!um()||!e.visualViewport?Sb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Eb(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Un(t)?!1:e}function Ns(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=dm(t);let o=Rr(1);e&&(r?mr(r)&&(o=So(r)):o=So(t));const a=Eb(s,n,r)?Oy(s):Rr(0);let l=(i.left+a.x)/o.x,c=(i.top+a.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(s){const h=Un(s),p=r&&mr(r)?Un(r):r;let v=h,g=fh(v);for(;g&&r&&p!==v;){const m=So(g),f=g.getBoundingClientRect(),_=gr(g),x=f.left+(g.clientLeft+parseFloat(_.paddingLeft))*m.x,y=f.top+(g.clientTop+parseFloat(_.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=x,c+=y,v=Un(g),g=fh(v)}}return uu({width:u,height:d,x:l,y:c})}function fm(t,e){const n=zu(t).scrollLeft;return e?e.left+n:Ns(Lr(t)).left+n}function ky(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:fm(t,r)),s=r.top+e.scrollTop;return{x:i,y:s}}function wb(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",o=Lr(r),a=e?Bu(e.floating):!1;if(r===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=Rr(1);const u=Rr(0),d=Pr(r);if((d||!d&&!s)&&((Jo(r)!=="body"||hl(o))&&(l=zu(r)),Pr(r))){const p=Ns(r);c=So(r),u.x=p.x+r.clientLeft,u.y=p.y+r.clientTop}const h=o&&!d&&!s?ky(o,l,!0):Rr(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:n.y*c.y-l.scrollTop*c.y+u.y+h.y}}function Mb(t){return Array.from(t.getClientRects())}function Tb(t){const e=Lr(t),n=zu(t),r=t.ownerDocument.body,i=Ln(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=Ln(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+fm(t);const a=-n.scrollTop;return gr(r).direction==="rtl"&&(o+=Ln(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:a}}function bb(t,e){const n=Un(t),r=Lr(t),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;const c=um();(!c||c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a,y:l}}function Ab(t,e){const n=Ns(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=Pr(t)?So(t):Rr(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=i*s.x,c=r*s.y;return{width:o,height:a,x:l,y:c}}function sv(t,e,n){let r;if(e==="viewport")r=bb(t,n);else if(e==="document")r=Tb(Lr(t));else if(mr(e))r=Ab(e,n);else{const i=Oy(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return uu(r)}function By(t,e){const n=Yi(t);return n===e||!mr(n)||Vo(n)?!1:gr(n).position==="fixed"||By(n,e)}function Cb(t,e){const n=e.get(t);if(n)return n;let r=Qa(t,[],!1).filter(a=>mr(a)&&Jo(a)!=="body"),i=null;const s=gr(t).position==="fixed";let o=s?Yi(t):t;for(;mr(o)&&!Vo(o);){const a=gr(o),l=cm(o);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||hl(o)&&!l&&By(t,o))?r=r.filter(u=>u!==o):i=a,o=Yi(o)}return e.set(t,r),r}function Rb(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const o=[...n==="clippingAncestors"?Bu(e)?[]:Cb(e,this._c):[].concat(n),r],a=o[0],l=o.reduce((c,u)=>{const d=sv(e,u,i);return c.top=Ln(d.top,c.top),c.right=Xi(d.right,c.right),c.bottom=Xi(d.bottom,c.bottom),c.left=Ln(d.left,c.left),c},sv(e,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Pb(t){const{width:e,height:n}=Fy(t);return{width:e,height:n}}function Lb(t,e,n){const r=Pr(e),i=Lr(e),s=n==="fixed",o=Ns(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=Rr(0);if(r||!r&&!s)if((Jo(e)!=="body"||hl(i))&&(a=zu(e)),r){const h=Ns(e,!0,s,e);l.x=h.x+e.clientLeft,l.y=h.y+e.clientTop}else i&&(l.x=fm(i));const c=i&&!r&&!s?ky(i,a):Rr(0),u=o.left+a.scrollLeft-l.x-c.x,d=o.top+a.scrollTop-l.y-c.y;return{x:u,y:d,width:o.width,height:o.height}}function Ld(t){return gr(t).position==="static"}function ov(t,e){if(!Pr(t)||gr(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Lr(t)===n&&(n=n.ownerDocument.body),n}function zy(t,e){const n=Un(t);if(Bu(t))return n;if(!Pr(t)){let i=Yi(t);for(;i&&!Vo(i);){if(mr(i)&&!Ld(i))return i;i=Yi(i)}return n}let r=ov(t,e);for(;r&&xb(r)&&Ld(r);)r=ov(r,e);return r&&Vo(r)&&Ld(r)&&!cm(r)?n:r||yb(t)||n}const Db=async function(t){const e=this.getOffsetParent||zy,n=this.getDimensions,r=await n(t.floating);return{reference:Lb(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Nb(t){return gr(t).direction==="rtl"}const Ib={convertOffsetParentRelativeRectToViewportRelativeRect:wb,getDocumentElement:Lr,getClippingRect:Rb,getOffsetParent:zy,getElementRects:Db,getClientRects:Mb,getDimensions:Pb,getScale:So,isElement:mr,isRTL:Nb};function Vy(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ub(t,e){let n=null,r;const i=Lr(t);function s(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=t.getBoundingClientRect(),{left:u,top:d,width:h,height:p}=c;if(a||e(),!h||!p)return;const v=Gl(d),g=Gl(i.clientWidth-(u+h)),m=Gl(i.clientHeight-(d+p)),f=Gl(u),x={rootMargin:-v+"px "+-g+"px "+-m+"px "+-f+"px",threshold:Ln(0,Xi(1,l))||1};let y=!0;function A(T){const M=T[0].intersectionRatio;if(M!==l){if(!y)return o();M?o(!1,M):r=setTimeout(()=>{o(!1,1e-7)},1e3)}M===1&&!Vy(c,t.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(A,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(A,x)}n.observe(t)}return o(!0),s}function Fb(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=dm(t),u=i||s?[...c?Qa(c):[],...Qa(e)]:[];u.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),s&&f.addEventListener("resize",n)});const d=c&&a?Ub(c,n):null;let h=-1,p=null;o&&(p=new ResizeObserver(f=>{let[_]=f;_&&_.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let v,g=l?Ns(t):null;l&&m();function m(){const f=Ns(t);g&&!Vy(g,f)&&n(),g=f,v=requestAnimationFrame(m)}return n(),()=>{var f;u.forEach(_=>{i&&_.removeEventListener("scroll",n),s&&_.removeEventListener("resize",n)}),d==null||d(),(f=p)==null||f.disconnect(),p=null,l&&cancelAnimationFrame(v)}}const Ob=mb,kb=gb,Bb=fb,zb=_b,Vb=hb,av=db,Hb=vb,Gb=(t,e,n)=>{const r=new Map,i={platform:Ib,...n},s={...i.platform,_c:r};return ub(t,e,{...i,platform:s})};var Rc=typeof document<"u"?P.useLayoutEffect:P.useEffect;function du(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,r,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(!du(t[r],e[r]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(e,i[r]))return!1;for(r=n;r--!==0;){const s=i[r];if(!(s==="_owner"&&t.$$typeof)&&!du(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Hy(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function lv(t,e){const n=Hy(t);return Math.round(e*n)/n}function Dd(t){const e=P.useRef(t);return Rc(()=>{e.current=t}),e}function Wb(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[u,d]=P.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[h,p]=P.useState(r);du(h,r)||p(r);const[v,g]=P.useState(null),[m,f]=P.useState(null),_=P.useCallback(D=>{D!==T.current&&(T.current=D,g(D))},[]),x=P.useCallback(D=>{D!==M.current&&(M.current=D,f(D))},[]),y=s||v,A=o||m,T=P.useRef(null),M=P.useRef(null),L=P.useRef(u),E=l!=null,S=Dd(l),R=Dd(i),O=Dd(c),k=P.useCallback(()=>{if(!T.current||!M.current)return;const D={placement:e,strategy:n,middleware:h};R.current&&(D.platform=R.current),Gb(T.current,M.current,D).then(B=>{const Y={...B,isPositioned:O.current!==!1};I.current&&!du(L.current,Y)&&(L.current=Y,dl.flushSync(()=>{d(Y)}))})},[h,e,n,R,O]);Rc(()=>{c===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,d(D=>({...D,isPositioned:!1})))},[c]);const I=P.useRef(!1);Rc(()=>(I.current=!0,()=>{I.current=!1}),[]),Rc(()=>{if(y&&(T.current=y),A&&(M.current=A),y&&A){if(S.current)return S.current(y,A,k);k()}},[y,A,k,S,E]);const q=P.useMemo(()=>({reference:T,floating:M,setReference:_,setFloating:x}),[_,x]),U=P.useMemo(()=>({reference:y,floating:A}),[y,A]),K=P.useMemo(()=>{const D={position:n,left:0,top:0};if(!U.floating)return D;const B=lv(U.floating,u.x),Y=lv(U.floating,u.y);return a?{...D,transform:"translate("+B+"px, "+Y+"px)",...Hy(U.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:B,top:Y}},[n,a,U.floating,u.x,u.y]);return P.useMemo(()=>({...u,update:k,refs:q,elements:U,floatingStyles:K}),[u,k,q,U,K])}const jb=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:r,padding:i}=typeof t=="function"?t(n):t;return r&&e(r)?r.current!=null?av({element:r.current,padding:i}).fn(n):{}:r?av({element:r,padding:i}).fn(n):{}}}},Xb=(t,e)=>({...Ob(t),options:[t,e]}),$b=(t,e)=>({...kb(t),options:[t,e]}),Yb=(t,e)=>({...Hb(t),options:[t,e]}),qb=(t,e)=>({...Bb(t),options:[t,e]}),Kb=(t,e)=>({...zb(t),options:[t,e]}),Qb=(t,e)=>({...Vb(t),options:[t,e]}),Zb=(t,e)=>({...jb(t),options:[t,e]});var Jb="Arrow",Gy=P.forwardRef((t,e)=>{const{children:n,width:r=10,height:i=5,...s}=t;return z.jsx(bn.svg,{...s,ref:e,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:z.jsx("polygon",{points:"0,0 30,0 15,10"})})});Gy.displayName=Jb;var eA=Gy;function tA(t){const[e,n]=P.useState(void 0);return ji(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const s=i[0];let o,a;if("borderBoxSize"in s){const l=s.borderBoxSize,c=Array.isArray(l)?l[0]:l;o=c.inlineSize,a=c.blockSize}else o=t.offsetWidth,a=t.offsetHeight;n({width:o,height:a})});return r.observe(t,{box:"border-box"}),()=>r.unobserve(t)}else n(void 0)},[t]),e}var Wy="Popper",[jy,Xy]=Uu(Wy),[_3,$y]=jy(Wy),Yy="PopperAnchor",qy=P.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:r,...i}=t,s=$y(Yy,n),o=P.useRef(null),a=pr(e,o);return P.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||o.current)}),r?null:z.jsx(bn.div,{...i,ref:a})});qy.displayName=Yy;var hm="PopperContent",[nA,rA]=jy(hm),Ky=P.forwardRef((t,e)=>{var ne,Ce,$e,Re,ot,at;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:s="center",alignOffset:o=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:d="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:v,...g}=t,m=$y(hm,n),[f,_]=P.useState(null),x=pr(e,Be=>_(Be)),[y,A]=P.useState(null),T=tA(y),M=(T==null?void 0:T.width)??0,L=(T==null?void 0:T.height)??0,E=r+(s!=="center"?"-"+s:""),S=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},R=Array.isArray(c)?c:[c],O=R.length>0,k={padding:S,boundary:R.filter(sA),altBoundary:O},{refs:I,floatingStyles:q,placement:U,isPositioned:K,middlewareData:D}=Wb({strategy:"fixed",placement:E,whileElementsMounted:(...Be)=>Fb(...Be,{animationFrame:p==="always"}),elements:{reference:m.anchor},middleware:[Xb({mainAxis:i+L,alignmentAxis:o}),l&&$b({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?Yb():void 0,...k}),l&&qb({...k}),Kb({...k,apply:({elements:Be,rects:N,availableWidth:$t,availableHeight:qe})=>{const{width:Ke,height:be}=N.reference,nt=Be.floating.style;nt.setProperty("--radix-popper-available-width",`${$t}px`),nt.setProperty("--radix-popper-available-height",`${qe}px`),nt.setProperty("--radix-popper-anchor-width",`${Ke}px`),nt.setProperty("--radix-popper-anchor-height",`${be}px`)}}),y&&Zb({element:y,padding:a}),oA({arrowWidth:M,arrowHeight:L}),h&&Qb({strategy:"referenceHidden",...k})]}),[B,Y]=Jy(U),re=Wi(v);ji(()=>{K&&(re==null||re())},[K,re]);const oe=(ne=D.arrow)==null?void 0:ne.x,Ee=(Ce=D.arrow)==null?void 0:Ce.y,W=(($e=D.arrow)==null?void 0:$e.centerOffset)!==0,[ie,he]=P.useState();return ji(()=>{f&&he(window.getComputedStyle(f).zIndex)},[f]),z.jsx("div",{ref:I.setFloating,"data-radix-popper-content-wrapper":"",style:{...q,transform:K?q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ie,"--radix-popper-transform-origin":[(Re=D.transformOrigin)==null?void 0:Re.x,(ot=D.transformOrigin)==null?void 0:ot.y].join(" "),...((at=D.hide)==null?void 0:at.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:z.jsx(nA,{scope:n,placedSide:B,onArrowChange:A,arrowX:oe,arrowY:Ee,shouldHideArrow:W,children:z.jsx(bn.div,{"data-side":B,"data-align":Y,...g,ref:x,style:{...g.style,animation:K?void 0:"none"}})})})});Ky.displayName=hm;var Qy="PopperArrow",iA={top:"bottom",right:"left",bottom:"top",left:"right"},Zy=P.forwardRef(function(e,n){const{__scopePopper:r,...i}=e,s=rA(Qy,r),o=iA[s.placedSide];return z.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:z.jsx(eA,{...i,ref:n,style:{...i.style,display:"block"}})})});Zy.displayName=Qy;function sA(t){return t!==null}var oA=t=>({name:"transformOrigin",options:t,fn(e){var m,f,_;const{placement:n,rects:r,middlewareData:i}=e,o=((m=i.arrow)==null?void 0:m.centerOffset)!==0,a=o?0:t.arrowWidth,l=o?0:t.arrowHeight,[c,u]=Jy(n),d={start:"0%",center:"50%",end:"100%"}[u],h=(((f=i.arrow)==null?void 0:f.x)??0)+a/2,p=(((_=i.arrow)==null?void 0:_.y)??0)+l/2;let v="",g="";return c==="bottom"?(v=o?d:`${h}px`,g=`${-l}px`):c==="top"?(v=o?d:`${h}px`,g=`${r.floating.height+l}px`):c==="right"?(v=`${-l}px`,g=o?d:`${p}px`):c==="left"&&(v=`${r.floating.width+l}px`,g=o?d:`${p}px`),{data:{x:v,y:g}}}});function Jy(t){const[e,n="center"]=t.split("-");return[e,n]}var aA=qy,lA=Ky,cA=Zy,[Vu,x3]=Uu("Tooltip",[Xy]),pm=Xy(),eS="TooltipProvider",uA=700,cv="tooltip.open",[dA,tS]=Vu(eS),nS=t=>{const{__scopeTooltip:e,delayDuration:n=uA,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:s}=t,o=P.useRef(!0),a=P.useRef(!1),l=P.useRef(0);return P.useEffect(()=>{const c=l.current;return()=>window.clearTimeout(c)},[]),z.jsx(dA,{scope:e,isOpenDelayedRef:o,delayDuration:n,onOpen:P.useCallback(()=>{window.clearTimeout(l.current),o.current=!1},[]),onClose:P.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.current=!0,r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:P.useCallback(c=>{a.current=c},[]),disableHoverableContent:i,children:s})};nS.displayName=eS;var rS="Tooltip",[y3,Hu]=Vu(rS),hh="TooltipTrigger",fA=P.forwardRef((t,e)=>{const{__scopeTooltip:n,...r}=t,i=Hu(hh,n),s=tS(hh,n),o=pm(n),a=P.useRef(null),l=pr(e,a,i.onTriggerChange),c=P.useRef(!1),u=P.useRef(!1),d=P.useCallback(()=>c.current=!1,[]);return P.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),z.jsx(aA,{asChild:!0,...o,children:z.jsx(bn.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:It(t.onPointerMove,h=>{h.pointerType!=="touch"&&!u.current&&!s.isPointerInTransitRef.current&&(i.onTriggerEnter(),u.current=!0)}),onPointerLeave:It(t.onPointerLeave,()=>{i.onTriggerLeave(),u.current=!1}),onPointerDown:It(t.onPointerDown,()=>{i.open&&i.onClose(),c.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:It(t.onFocus,()=>{c.current||i.onOpen()}),onBlur:It(t.onBlur,i.onClose),onClick:It(t.onClick,i.onClose)})})});fA.displayName=hh;var hA="TooltipPortal",[S3,pA]=Vu(hA,{forceMount:void 0}),Ho="TooltipContent",iS=P.forwardRef((t,e)=>{const n=pA(Ho,t.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...s}=t,o=Hu(Ho,t.__scopeTooltip);return z.jsx(tm,{present:r||o.open,children:o.disableHoverableContent?z.jsx(sS,{side:i,...s,ref:e}):z.jsx(mA,{side:i,...s,ref:e})})}),mA=P.forwardRef((t,e)=>{const n=Hu(Ho,t.__scopeTooltip),r=tS(Ho,t.__scopeTooltip),i=P.useRef(null),s=pr(e,i),[o,a]=P.useState(null),{trigger:l,onClose:c}=n,u=i.current,{onPointerInTransitChange:d}=r,h=P.useCallback(()=>{a(null),d(!1)},[d]),p=P.useCallback((v,g)=>{const m=v.currentTarget,f={x:v.clientX,y:v.clientY},_=yA(f,m.getBoundingClientRect()),x=SA(f,_),y=EA(g.getBoundingClientRect()),A=MA([...x,...y]);a(A),d(!0)},[d]);return P.useEffect(()=>()=>h(),[h]),P.useEffect(()=>{if(l&&u){const v=m=>p(m,u),g=m=>p(m,l);return l.addEventListener("pointerleave",v),u.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",v),u.removeEventListener("pointerleave",g)}}},[l,u,p,h]),P.useEffect(()=>{if(o){const v=g=>{const m=g.target,f={x:g.clientX,y:g.clientY},_=(l==null?void 0:l.contains(m))||(u==null?void 0:u.contains(m)),x=!wA(f,o);_?h():x&&(h(),c())};return document.addEventListener("pointermove",v),()=>document.removeEventListener("pointermove",v)}},[l,u,o,c,h]),z.jsx(sS,{...t,ref:s})}),[gA,vA]=Vu(rS,{isInside:!1}),_A=XM("TooltipContent"),sS=P.forwardRef((t,e)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:s,onPointerDownOutside:o,...a}=t,l=Hu(Ho,n),c=pm(n),{onClose:u}=l;return P.useEffect(()=>(document.addEventListener(cv,u),()=>document.removeEventListener(cv,u)),[u]),P.useEffect(()=>{if(l.trigger){const d=h=>{const p=h.target;p!=null&&p.contains(l.trigger)&&u()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[l.trigger,u]),z.jsx(em,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:d=>d.preventDefault(),onDismiss:u,children:z.jsxs(lA,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[z.jsx(_A,{children:r}),z.jsx(gA,{scope:n,isInside:!0,children:z.jsx(vT,{id:l.contentId,role:"tooltip",children:i||r})})]})})});iS.displayName=Ho;var oS="TooltipArrow",xA=P.forwardRef((t,e)=>{const{__scopeTooltip:n,...r}=t,i=pm(n);return vA(oS,n).isInside?null:z.jsx(cA,{...i,...r,ref:e})});xA.displayName=oS;function yA(t,e){const n=Math.abs(e.top-t.y),r=Math.abs(e.bottom-t.y),i=Math.abs(e.right-t.x),s=Math.abs(e.left-t.x);switch(Math.min(n,r,i,s)){case s:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function SA(t,e,n=5){const r=[];switch(e){case"top":r.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":r.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":r.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":r.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return r}function EA(t){const{top:e,right:n,bottom:r,left:i}=t;return[{x:i,y:e},{x:n,y:e},{x:n,y:r},{x:i,y:r}]}function wA(t,e){const{x:n,y:r}=t;let i=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const a=e[s],l=e[o],c=a.x,u=a.y,d=l.x,h=l.y;u>r!=h>r&&n<(d-c)*(r-u)/(h-u)+c&&(i=!i)}return i}function MA(t){const e=t.slice();return e.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),TA(e)}function TA(t){if(t.length<=1)return t.slice();const e=[];for(let r=0;r<t.length;r++){const i=t[r];for(;e.length>=2;){const s=e[e.length-1],o=e[e.length-2];if((s.x-o.x)*(i.y-o.y)>=(s.y-o.y)*(i.x-o.x))e.pop();else break}e.push(i)}e.pop();const n=[];for(let r=t.length-1;r>=0;r--){const i=t[r];for(;n.length>=2;){const s=n[n.length-1],o=n[n.length-2];if((s.x-o.x)*(i.y-o.y)>=(s.y-o.y)*(i.x-o.x))n.pop();else break}n.push(i)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var bA=nS,aS=iS;const AA=bA,CA=P.forwardRef(({className:t,sideOffset:e=4,...n},r)=>z.jsx(aS,{ref:r,sideOffset:e,className:Cr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));CA.displayName=aS.displayName;var Gu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Wu=typeof window>"u"||"Deno"in globalThis;function rr(){}function RA(t,e){return typeof t=="function"?t(e):t}function PA(t){return typeof t=="number"&&t>=0&&t!==1/0}function LA(t,e){return Math.max(t+(e||0)-Date.now(),0)}function uv(t,e){return typeof t=="function"?t(e):t}function DA(t,e){return typeof t=="function"?t(e):t}function dv(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:a}=t;if(o){if(r){if(e.queryHash!==mm(o,e.options))return!1}else if(!Ja(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||i&&i!==e.state.fetchStatus||s&&!s(e))}function fv(t,e){const{exact:n,status:r,predicate:i,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Za(e.options.mutationKey)!==Za(s))return!1}else if(!Ja(e.options.mutationKey,s))return!1}return!(r&&e.state.status!==r||i&&!i(e))}function mm(t,e){return((e==null?void 0:e.queryKeyHashFn)||Za)(t)}function Za(t){return JSON.stringify(t,(e,n)=>ph(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Ja(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>Ja(t[n],e[n])):!1}function lS(t,e){if(t===e)return t;const n=hv(t)&&hv(e);if(n||ph(t)&&ph(e)){const r=n?t:Object.keys(t),i=r.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:s[c];(!n&&r.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=lS(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return i===o&&l===i?t:a}return e}function hv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function ph(t){if(!pv(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!pv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function pv(t){return Object.prototype.toString.call(t)==="[object Object]"}function NA(t){return new Promise(e=>{setTimeout(e,t)})}function IA(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?lS(t,e):e}function UA(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function FA(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var gm=Symbol();function cS(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===gm?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ys,Mi,To,M0,OA=(M0=class extends Gu{constructor(){super();it(this,ys);it(this,Mi);it(this,To);Ve(this,To,e=>{if(!Wu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){J(this,Mi)||this.setEventListener(J(this,To))}onUnsubscribe(){var e;this.hasListeners()||((e=J(this,Mi))==null||e.call(this),Ve(this,Mi,void 0))}setEventListener(e){var n;Ve(this,To,e),(n=J(this,Mi))==null||n.call(this),Ve(this,Mi,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){J(this,ys)!==e&&(Ve(this,ys,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof J(this,ys)=="boolean"?J(this,ys):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ys=new WeakMap,Mi=new WeakMap,To=new WeakMap,M0),uS=new OA,bo,Ti,Ao,T0,kA=(T0=class extends Gu{constructor(){super();it(this,bo,!0);it(this,Ti);it(this,Ao);Ve(this,Ao,e=>{if(!Wu&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){J(this,Ti)||this.setEventListener(J(this,Ao))}onUnsubscribe(){var e;this.hasListeners()||((e=J(this,Ti))==null||e.call(this),Ve(this,Ti,void 0))}setEventListener(e){var n;Ve(this,Ao,e),(n=J(this,Ti))==null||n.call(this),Ve(this,Ti,e(this.setOnline.bind(this)))}setOnline(e){J(this,bo)!==e&&(Ve(this,bo,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return J(this,bo)}},bo=new WeakMap,Ti=new WeakMap,Ao=new WeakMap,T0),fu=new kA;function BA(){let t,e;const n=new Promise((i,s)=>{t=i,e=s});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),t(i)},n.reject=i=>{r({status:"rejected",reason:i}),e(i)},n}function zA(t){return Math.min(1e3*2**t,3e4)}function dS(t){return(t??"online")==="online"?fu.isOnline():!0}var fS=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Nd(t){return t instanceof fS}function hS(t){let e=!1,n=0,r=!1,i;const s=BA(),o=g=>{var m;r||(h(new fS(g)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>uS.isFocused()&&(t.networkMode==="always"||fu.isOnline())&&t.canRun(),u=()=>dS(t.networkMode)&&t.canRun(),d=g=>{var m;r||(r=!0,(m=t.onSuccess)==null||m.call(t,g),i==null||i(),s.resolve(g))},h=g=>{var m;r||(r=!0,(m=t.onError)==null||m.call(t,g),i==null||i(),s.reject(g))},p=()=>new Promise(g=>{var m;i=f=>{(r||c())&&g(f)},(m=t.onPause)==null||m.call(t)}).then(()=>{var g;i=void 0,r||(g=t.onContinue)==null||g.call(t)}),v=()=>{if(r)return;let g;const m=n===0?t.initialPromise:void 0;try{g=m??t.fn()}catch(f){g=Promise.reject(f)}Promise.resolve(g).then(d).catch(f=>{var T;if(r)return;const _=t.retry??(Wu?0:3),x=t.retryDelay??zA,y=typeof x=="function"?x(n,f):x,A=_===!0||typeof _=="number"&&n<_||typeof _=="function"&&_(n,f);if(e||!A){h(f);return}n++,(T=t.onFail)==null||T.call(t,n,f),NA(y).then(()=>c()?void 0:p()).then(()=>{e?h(f):v()})})};return{promise:s,cancel:o,continue:()=>(i==null||i(),s),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?v():p().then(v),s)}}var VA=t=>setTimeout(t,0);function HA(){let t=[],e=0,n=a=>{a()},r=a=>{a()},i=VA;const s=a=>{e?t.push(a):i(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var cn=HA(),Ss,b0,pS=(b0=class{constructor(){it(this,Ss)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),PA(this.gcTime)&&Ve(this,Ss,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Wu?1/0:5*60*1e3))}clearGcTimeout(){J(this,Ss)&&(clearTimeout(J(this,Ss)),Ve(this,Ss,void 0))}},Ss=new WeakMap,b0),Co,Ro,Hn,Es,tn,il,ws,ir,Br,A0,GA=(A0=class extends pS{constructor(e){super();it(this,ir);it(this,Co);it(this,Ro);it(this,Hn);it(this,Es);it(this,tn);it(this,il);it(this,ws);Ve(this,ws,!1),Ve(this,il,e.defaultOptions),this.setOptions(e.options),this.observers=[],Ve(this,Es,e.client),Ve(this,Hn,J(this,Es).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Ve(this,Co,jA(this.options)),this.state=e.state??J(this,Co),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=J(this,tn))==null?void 0:e.promise}setOptions(e){this.options={...J(this,il),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&J(this,Hn).remove(this)}setData(e,n){const r=IA(this.state.data,e,this.options);return qt(this,ir,Br).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){qt(this,ir,Br).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var r,i;const n=(r=J(this,tn))==null?void 0:r.promise;return(i=J(this,tn))==null||i.cancel(e),n?n.then(rr).catch(rr):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(J(this,Co))}isActive(){return this.observers.some(e=>DA(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===gm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!LA(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=J(this,tn))==null||n.continue()}onOnline(){var n;const e=this.observers.find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=J(this,tn))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),J(this,Hn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(J(this,tn)&&(J(this,ws)?J(this,tn).cancel({revert:!0}):J(this,tn).cancelRetry()),this.scheduleGc()),J(this,Hn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||qt(this,ir,Br).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(J(this,tn))return J(this,tn).continueRetry(),J(this,tn).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(h=>h.options.queryFn);d&&this.setOptions(d.options)}const r=new AbortController,i=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(Ve(this,ws,!0),r.signal)})},s=()=>{const d=cS(this.options,n),h={client:J(this,Es),queryKey:this.queryKey,meta:this.meta};return i(h),Ve(this,ws,!1),this.options.persister?this.options.persister(d,h,this):d(h)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:J(this,Es),state:this.state,fetchFn:s};i(o),(l=this.options.behavior)==null||l.onFetch(o,this),Ve(this,Ro,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&qt(this,ir,Br).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=d=>{var h,p,v,g;Nd(d)&&d.silent||qt(this,ir,Br).call(this,{type:"error",error:d}),Nd(d)||((p=(h=J(this,Hn).config).onError)==null||p.call(h,d,this),(g=(v=J(this,Hn).config).onSettled)==null||g.call(v,this.state.data,d,this)),this.scheduleGc()};return Ve(this,tn,hS({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:r.abort.bind(r),onSuccess:d=>{var h,p,v,g;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){a(m);return}(p=(h=J(this,Hn).config).onSuccess)==null||p.call(h,d,this),(g=(v=J(this,Hn).config).onSettled)==null||g.call(v,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,h)=>{qt(this,ir,Br).call(this,{type:"failed",failureCount:d,error:h})},onPause:()=>{qt(this,ir,Br).call(this,{type:"pause"})},onContinue:()=>{qt(this,ir,Br).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),J(this,tn).start()}},Co=new WeakMap,Ro=new WeakMap,Hn=new WeakMap,Es=new WeakMap,tn=new WeakMap,il=new WeakMap,ws=new WeakMap,ir=new WeakSet,Br=function(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...WA(r.data,this.options),fetchMeta:e.meta??null};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=e.error;return Nd(i)&&i.revert&&J(this,Ro)?{...J(this,Ro),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),cn.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),J(this,Hn).notify({query:this,type:"updated",action:e})})},A0);function WA(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:dS(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function jA(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var yr,C0,XA=(C0=class extends Gu{constructor(e={}){super();it(this,yr);this.config=e,Ve(this,yr,new Map)}build(e,n,r){const i=n.queryKey,s=n.queryHash??mm(i,n);let o=this.get(s);return o||(o=new GA({client:e,queryKey:i,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){J(this,yr).has(e.queryHash)||(J(this,yr).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=J(this,yr).get(e.queryHash);n&&(e.destroy(),n===e&&J(this,yr).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){cn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return J(this,yr).get(e)}getAll(){return[...J(this,yr).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>dv(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>dv(e,r)):n}notify(e){cn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){cn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){cn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},yr=new WeakMap,C0),Sr,an,Ms,Er,_i,R0,$A=(R0=class extends pS{constructor(e){super();it(this,Er);it(this,Sr);it(this,an);it(this,Ms);this.mutationId=e.mutationId,Ve(this,an,e.mutationCache),Ve(this,Sr,[]),this.state=e.state||YA(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){J(this,Sr).includes(e)||(J(this,Sr).push(e),this.clearGcTimeout(),J(this,an).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Ve(this,Sr,J(this,Sr).filter(n=>n!==e)),this.scheduleGc(),J(this,an).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){J(this,Sr).length||(this.state.status==="pending"?this.scheduleGc():J(this,an).remove(this))}continue(){var e;return((e=J(this,Ms))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var s,o,a,l,c,u,d,h,p,v,g,m,f,_,x,y,A,T,M,L;const n=()=>{qt(this,Er,_i).call(this,{type:"continue"})};Ve(this,Ms,hS({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(E,S)=>{qt(this,Er,_i).call(this,{type:"failed",failureCount:E,error:S})},onPause:()=>{qt(this,Er,_i).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>J(this,an).canRun(this)}));const r=this.state.status==="pending",i=!J(this,Ms).canStart();try{if(r)n();else{qt(this,Er,_i).call(this,{type:"pending",variables:e,isPaused:i}),await((o=(s=J(this,an).config).onMutate)==null?void 0:o.call(s,e,this));const S=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));S!==this.state.context&&qt(this,Er,_i).call(this,{type:"pending",context:S,variables:e,isPaused:i})}const E=await J(this,Ms).start();return await((u=(c=J(this,an).config).onSuccess)==null?void 0:u.call(c,E,e,this.state.context,this)),await((h=(d=this.options).onSuccess)==null?void 0:h.call(d,E,e,this.state.context)),await((v=(p=J(this,an).config).onSettled)==null?void 0:v.call(p,E,null,this.state.variables,this.state.context,this)),await((m=(g=this.options).onSettled)==null?void 0:m.call(g,E,null,e,this.state.context)),qt(this,Er,_i).call(this,{type:"success",data:E}),E}catch(E){try{throw await((_=(f=J(this,an).config).onError)==null?void 0:_.call(f,E,e,this.state.context,this)),await((y=(x=this.options).onError)==null?void 0:y.call(x,E,e,this.state.context)),await((T=(A=J(this,an).config).onSettled)==null?void 0:T.call(A,void 0,E,this.state.variables,this.state.context,this)),await((L=(M=this.options).onSettled)==null?void 0:L.call(M,void 0,E,e,this.state.context)),E}finally{qt(this,Er,_i).call(this,{type:"error",error:E})}}finally{J(this,an).runNext(this)}}},Sr=new WeakMap,an=new WeakMap,Ms=new WeakMap,Er=new WeakSet,_i=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),cn.batch(()=>{J(this,Sr).forEach(r=>{r.onMutationUpdate(e)}),J(this,an).notify({mutation:this,type:"updated",action:e})})},R0);function YA(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Gr,sr,sl,P0,qA=(P0=class extends Gu{constructor(e={}){super();it(this,Gr);it(this,sr);it(this,sl);this.config=e,Ve(this,Gr,new Set),Ve(this,sr,new Map),Ve(this,sl,0)}build(e,n,r){const i=new $A({mutationCache:this,mutationId:++El(this,sl)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){J(this,Gr).add(e);const n=Wl(e);if(typeof n=="string"){const r=J(this,sr).get(n);r?r.push(e):J(this,sr).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(J(this,Gr).delete(e)){const n=Wl(e);if(typeof n=="string"){const r=J(this,sr).get(n);if(r)if(r.length>1){const i=r.indexOf(e);i!==-1&&r.splice(i,1)}else r[0]===e&&J(this,sr).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=Wl(e);if(typeof n=="string"){const r=J(this,sr).get(n),i=r==null?void 0:r.find(s=>s.state.status==="pending");return!i||i===e}else return!0}runNext(e){var r;const n=Wl(e);if(typeof n=="string"){const i=(r=J(this,sr).get(n))==null?void 0:r.find(s=>s!==e&&s.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){cn.batch(()=>{J(this,Gr).forEach(e=>{this.notify({type:"removed",mutation:e})}),J(this,Gr).clear(),J(this,sr).clear()})}getAll(){return Array.from(J(this,Gr))}find(e){const n={exact:!0,...e};return this.getAll().find(r=>fv(n,r))}findAll(e={}){return this.getAll().filter(n=>fv(e,n))}notify(e){cn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return cn.batch(()=>Promise.all(e.map(n=>n.continue().catch(rr))))}},Gr=new WeakMap,sr=new WeakMap,sl=new WeakMap,P0);function Wl(t){var e;return(e=t.options.scope)==null?void 0:e.id}function mv(t){return{onFetch:(e,n)=>{var u,d,h,p,v;const r=e.options,i=(h=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:h.direction,s=((p=e.state.data)==null?void 0:p.pages)||[],o=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const m=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},f=cS(e.options,e.fetchOptions),_=async(x,y,A)=>{if(g)return Promise.reject();if(y==null&&x.pages.length)return Promise.resolve(x);const T={client:e.client,queryKey:e.queryKey,pageParam:y,direction:A?"backward":"forward",meta:e.options.meta};m(T);const M=await f(T),{maxPages:L}=e.options,E=A?FA:UA;return{pages:E(x.pages,M,L),pageParams:E(x.pageParams,y,L)}};if(i&&s.length){const x=i==="backward",y=x?KA:gv,A={pages:s,pageParams:o},T=y(r,A);a=await _(A,T,x)}else{const x=t??s.length;do{const y=l===0?o[0]??r.initialPageParam:gv(r,a);if(l>0&&y==null)break;a=await _(a,y),l++}while(l<x)}return a};e.options.persister?e.fetchFn=()=>{var g,m;return(m=(g=e.options).persister)==null?void 0:m.call(g,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function gv(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function KA(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var Tt,bi,Ai,Po,Lo,Ci,Do,No,L0,QA=(L0=class{constructor(t={}){it(this,Tt);it(this,bi);it(this,Ai);it(this,Po);it(this,Lo);it(this,Ci);it(this,Do);it(this,No);Ve(this,Tt,t.queryCache||new XA),Ve(this,bi,t.mutationCache||new qA),Ve(this,Ai,t.defaultOptions||{}),Ve(this,Po,new Map),Ve(this,Lo,new Map),Ve(this,Ci,0)}mount(){El(this,Ci)._++,J(this,Ci)===1&&(Ve(this,Do,uS.subscribe(async t=>{t&&(await this.resumePausedMutations(),J(this,Tt).onFocus())})),Ve(this,No,fu.subscribe(async t=>{t&&(await this.resumePausedMutations(),J(this,Tt).onOnline())})))}unmount(){var t,e;El(this,Ci)._--,J(this,Ci)===0&&((t=J(this,Do))==null||t.call(this),Ve(this,Do,void 0),(e=J(this,No))==null||e.call(this),Ve(this,No,void 0))}isFetching(t){return J(this,Tt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return J(this,bi).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=J(this,Tt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=J(this,Tt).build(this,e),r=n.state.data;return r===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(uv(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(t){return J(this,Tt).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=J(this,Tt).get(r.queryHash),s=i==null?void 0:i.state.data,o=RA(e,s);if(o!==void 0)return J(this,Tt).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return cn.batch(()=>J(this,Tt).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=J(this,Tt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=J(this,Tt);cn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=J(this,Tt);return cn.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},r=cn.batch(()=>J(this,Tt).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(rr).catch(rr)}invalidateQueries(t,e={}){return cn.batch(()=>(J(this,Tt).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},r=cn.batch(()=>J(this,Tt).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(rr)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(rr)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=J(this,Tt).build(this,e);return n.isStaleByTime(uv(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(rr).catch(rr)}fetchInfiniteQuery(t){return t.behavior=mv(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(rr).catch(rr)}ensureInfiniteQueryData(t){return t.behavior=mv(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return fu.isOnline()?J(this,bi).resumePausedMutations():Promise.resolve()}getQueryCache(){return J(this,Tt)}getMutationCache(){return J(this,bi)}getDefaultOptions(){return J(this,Ai)}setDefaultOptions(t){Ve(this,Ai,t)}setQueryDefaults(t,e){J(this,Po).set(Za(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...J(this,Po).values()],n={};return e.forEach(r=>{Ja(t,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(t,e){J(this,Lo).set(Za(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...J(this,Lo).values()],n={};return e.forEach(r=>{Ja(t,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...J(this,Ai).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=mm(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===gm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...J(this,Ai).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){J(this,Tt).clear(),J(this,bi).clear()}},Tt=new WeakMap,bi=new WeakMap,Ai=new WeakMap,Po=new WeakMap,Lo=new WeakMap,Ci=new WeakMap,Do=new WeakMap,No=new WeakMap,L0),ZA=P.createContext(void 0),JA=({client:t,children:e})=>(P.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),z.jsx(ZA.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hu(){return hu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hu.apply(this,arguments)}var Li;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Li||(Li={}));const vv="popstate";function eC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return mh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gS(i)}return nC(e,n,null,t)}function Tn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tC(){return Math.random().toString(36).substr(2,8)}function _v(t,e){return{usr:t.state,key:t.key,idx:e}}function mh(t,e,n,r){return n===void 0&&(n=null),hu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ju(e):e,{state:n,key:e&&e.key||r||tC()})}function gS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ju(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function nC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Li.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(hu({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Li.Pop;let m=u(),f=m==null?null:m-c;c=m,l&&l({action:a,location:g.location,delta:f})}function h(m,f){a=Li.Push;let _=mh(g.location,m,f);c=u()+1;let x=_v(_,c),y=g.createHref(_);try{o.pushState(x,"",y)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(y)}s&&l&&l({action:a,location:g.location,delta:1})}function p(m,f){a=Li.Replace;let _=mh(g.location,m,f);c=u();let x=_v(_,c),y=g.createHref(_);o.replaceState(x,"",y),s&&l&&l({action:a,location:g.location,delta:0})}function v(m){let f=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof m=="string"?m:gS(m);return _=_.replace(/ $/,"%20"),Tn(f,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,f)}let g={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(vv,d),l=m,()=>{i.removeEventListener(vv,d),l=null}},createHref(m){return e(i,m)},createURL:v,encodeLocation(m){let f=v(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(m){return o.go(m)}};return g}var xv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xv||(xv={}));function rC(t,e,n){return n===void 0&&(n="/"),iC(t,e,n)}function iC(t,e,n,r){let i=typeof e=="string"?ju(e):e,s=xS(i.pathname||"/",n);if(s==null)return null;let o=vS(t);sC(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=vC(s);a=pC(o[l],c)}return a}function vS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Tn(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Eo([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Tn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),vS(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:fC(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _S(s.path))i(s,o,l)}),e}function _S(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_S(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function sC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const oC=/^:[\w-]+$/,aC=3,lC=2,cC=1,uC=10,dC=-2,yv=t=>t==="*";function fC(t,e){let n=t.split("/"),r=n.length;return n.some(yv)&&(r+=dC),e&&(r+=lC),n.filter(i=>!yv(i)).reduce((i,s)=>i+(oC.test(s)?aC:s===""?cC:uC),r)}function hC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function pC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=mC({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Eo([s,d.pathname]),pathnameBase:_C(Eo([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Eo([s,d.pathnameBase]))}return o}function mC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=gC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:h,isOptional:p}=u;if(h==="*"){let g=a[d]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const v=a[d];return p&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function gC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Eo=t=>t.join("/").replace(/\/\/+/g,"/"),_C=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function xC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const yS=["post","put","patch","delete"];new Set(yS);const yC=["get",...yS];new Set(yC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pu.apply(this,arguments)}const SC=P.createContext(null),EC=P.createContext(null),SS=P.createContext(null),Xu=P.createContext(null),$u=P.createContext({outlet:null,matches:[],isDataRoute:!1}),ES=P.createContext(null);function vm(){return P.useContext(Xu)!=null}function wS(){return vm()||Tn(!1),P.useContext(Xu).location}function wC(t,e){return MC(t,e)}function MC(t,e,n,r){vm()||Tn(!1);let{navigator:i,static:s}=P.useContext(SS),{matches:o}=P.useContext($u),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=wS(),d;if(e){var h;let f=typeof e=="string"?ju(e):e;c==="/"||(h=f.pathname)!=null&&h.startsWith(c)||Tn(!1),d=f}else d=u;let p=d.pathname||"/",v=p;if(c!=="/"){let f=c.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(f.length).join("/")}let g=rC(t,{pathname:v}),m=RC(g&&g.map(f=>Object.assign({},f,{params:Object.assign({},l,f.params),pathname:Eo([c,i.encodeLocation?i.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?c:Eo([c,i.encodeLocation?i.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),o,n,r);return e&&m?P.createElement(Xu.Provider,{value:{location:pu({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Li.Pop}},m):m}function TC(){let t=NC(),e=xC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,null)}const bC=P.createElement(TC,null);class AC extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement($u.Provider,{value:this.props.routeContext},P.createElement(ES.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CC(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(SC);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement($u.Provider,{value:e},r)}function RC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||Tn(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:p}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let p,v=!1,g=null,m=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,g=d.route.errorElement||bC,l&&(c<0&&h===0?(IC("route-fallback"),v=!0,m=null):c===h&&(v=!0,m=d.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,h+1)),_=()=>{let x;return p?x=g:v?x=m:d.route.Component?x=P.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=u,P.createElement(CC,{match:d,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?P.createElement(AC,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:_(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):_()},null)}var MS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(MS||{});function PC(t){let e=P.useContext(EC);return e||Tn(!1),e}function LC(t){let e=P.useContext($u);return e||Tn(!1),e}function DC(t){let e=LC(),n=e.matches[e.matches.length-1];return n.route.id||Tn(!1),n.route.id}function NC(){var t;let e=P.useContext(ES),n=PC(MS.UseRouteError),r=DC();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}const Sv={};function IC(t,e,n){Sv[t]||(Sv[t]=!0)}function UC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function gh(t){Tn(!1)}function FC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Li.Pop,navigator:s,static:o=!1,future:a}=t;vm()&&Tn(!1);let l=e.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:l,navigator:s,static:o,future:pu({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ju(r));let{pathname:u="/",search:d="",hash:h="",state:p=null,key:v="default"}=r,g=P.useMemo(()=>{let m=xS(u,l);return m==null?null:{location:{pathname:m,search:d,hash:h,state:p,key:v},navigationType:i}},[l,u,d,h,p,v,i]);return g==null?null:P.createElement(SS.Provider,{value:c},P.createElement(Xu.Provider,{children:n,value:g}))}function OC(t){let{children:e,location:n}=t;return wC(vh(e),n)}new Promise(()=>{});function vh(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let s=[...e,i];if(r.type===P.Fragment){n.push.apply(n,vh(r.props.children,s));return}r.type!==gh&&Tn(!1),!r.props.index||!r.props.children||Tn(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=vh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const kC="6";try{window.__reactRouterVersion=kC}catch{}const BC="startTransition",Ev=G0[BC];function zC(t){let{basename:e,children:n,future:r,window:i}=t,s=P.useRef();s.current==null&&(s.current=eC({window:i,v5Compat:!0}));let o=s.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=P.useCallback(d=>{c&&Ev?Ev(()=>l(d)):l(d)},[l,c]);return P.useLayoutEffect(()=>o.listen(u),[o,u]),P.useEffect(()=>UC(r),[r]),P.createElement(FC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var wv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wv||(wv={}));var Mv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mv||(Mv={}));const VC="modulepreload",HC=function(t){return"/"+t},Tv={},es=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=HC(l),l in Tv)return;Tv[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":VC,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},GC=()=>{const[t,e]=P.useState(!1),[n,r]=P.useState(!1),[i,s]=P.useState(!0),[o,a]=P.useState(0),l=()=>e(u=>!u),c=P.useMemo(()=>[{name:"Home",href:"#hero"},{name:"About",href:"#about"},{name:"Programs",href:"#programs"},{name:"Gallery",href:"#gallery"},{name:"FAQ",href:"#faq"},{name:"Contact",href:"#contact"}],[]);return P.useEffect(()=>{const u=()=>{const d=window.scrollY;r(d>80),s(d<o),a(d)};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[o]),z.jsxs("nav",{className:Cr("fixed w-full z-50 transition-all duration-300",n?"bg-black bg-opacity-90 backdrop-blur-md shadow-md py-2":"py-6",i?"translate-y-0":"-translate-y-full"),children:[z.jsxs("div",{className:"container mx-auto px-4 md:px-8 flex items-center justify-between",children:[z.jsxs("a",{href:"#hero",className:"flex items-center space-x-3",children:[z.jsx("img",{src:"/images/logo.png",alt:"Ghatak SAI Logo",className:"w-12 h-12 object-contain"}),z.jsxs("span",{className:"text-2xl font-bold text-white",children:[z.jsx("span",{className:"text-gsai-red",children:"G"}),"hatak",z.jsx("span",{className:"text-gsai-gold",children:"SAI"})]})]}),z.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[c.map(({name:u,href:d})=>z.jsx("a",{href:d,className:"text-white hover:text-gsai-red transition-colors duration-300 font-medium",children:u},u)),z.jsx("a",{href:"https://forms.gle/LTYn59kPWkQgC3VR7",className:"gsai-btn animate-pulse-glow",children:"Join Now"})]}),z.jsx("div",{className:"md:hidden",children:z.jsx("button",{onClick:l,className:"text-white focus:outline-none","aria-label":"Toggle navigation menu",children:z.jsx("svg",{className:Cr("w-6 h-6 transition-transform duration-300",t&&"rotate-90"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t?z.jsx("path",{d:"M6 18L18 6M6 6l12 12",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}):z.jsx("path",{d:"M4 6h16M4 12h16M4 18h16",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),z.jsx("div",{className:Cr("md:hidden overflow-hidden transition-all duration-300 ease-in-out mx-4 mt-2 glass-card",t?"max-h-[500px] opacity-100":"max-h-0 opacity-0 invisible"),children:z.jsxs("div",{className:"flex flex-col space-y-3 p-4",children:[c.map(({name:u,href:d})=>z.jsx("a",{href:d,onClick:()=>e(!1),className:"text-white hover:text-gsai-red transition-colors duration-300 py-2 px-4 rounded",children:u},u)),z.jsx("a",{href:"#contact",onClick:()=>e(!1),className:"gsai-btn text-center",children:"Join Now"})]})})]})},WC=768;function _m(){const[t,e]=P.useState(!1);return P.useEffect(()=>{const n=()=>{e(window.innerWidth<WC)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),t}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="176",jC=0,bv=1,XC=2,TS=1,$C=2,zr=3,qi=0,En=1,Wr=2,zi=0,wo=1,mu=2,Av=3,Cv=4,YC=5,hs=100,qC=101,KC=102,QC=103,ZC=104,JC=200,eR=201,tR=202,nR=203,_h=204,xh=205,rR=206,iR=207,sR=208,oR=209,aR=210,lR=211,cR=212,uR=213,dR=214,yh=0,Sh=1,Eh=2,Go=3,wh=4,Mh=5,Th=6,bh=7,bS=0,fR=1,hR=2,Vi=0,pR=1,mR=2,gR=3,vR=4,_R=5,xR=6,yR=7,AS=300,Wo=301,jo=302,Ah=303,Ch=304,Yu=306,Rh=1e3,_s=1001,Ph=1002,fr=1003,SR=1004,jl=1005,Tr=1006,Id=1007,xs=1008,ii=1009,CS=1010,RS=1011,el=1012,ym=1013,Is=1014,$r=1015,pl=1016,Sm=1017,Em=1018,tl=1020,PS=35902,LS=1021,DS=1022,cr=1023,nl=1026,rl=1027,NS=1028,wm=1029,IS=1030,Mm=1031,Tm=1033,Pc=33776,Lc=33777,Dc=33778,Nc=33779,Lh=35840,Dh=35841,Nh=35842,Ih=35843,Uh=36196,Fh=37492,Oh=37496,kh=37808,Bh=37809,zh=37810,Vh=37811,Hh=37812,Gh=37813,Wh=37814,jh=37815,Xh=37816,$h=37817,Yh=37818,qh=37819,Kh=37820,Qh=37821,Ic=36492,Zh=36494,Jh=36495,US=36283,ep=36284,tp=36285,np=36286,ER=3200,wR=3201,MR=0,TR=1,wi="",Gn="srgb",Xo="srgb-linear",gu="linear",ft="srgb",zs=7680,Rv=519,bR=512,AR=513,CR=514,FS=515,RR=516,PR=517,LR=518,DR=519,Pv=35044,Lv="300 es",Yr=2e3,vu=2001;class ea{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const i=r[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,rp=180/Math.PI;function ml(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[r&255]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function NR(t,e){return(t%e+e)%e}function Uc(t,e,n){return(1-n)*t+n*e}function ha(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const IR={lerp:Uc};class ht{constructor(e=0,n=0){ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*i+e.x,this.y=s*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,r,i,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,a,l,c)}set(e,n,r,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],a=r[3],l=r[6],c=r[1],u=r[4],d=r[7],h=r[2],p=r[5],v=r[8],g=i[0],m=i[3],f=i[6],_=i[1],x=i[4],y=i[7],A=i[2],T=i[5],M=i[8];return s[0]=o*g+a*_+l*A,s[3]=o*m+a*x+l*T,s[6]=o*f+a*y+l*M,s[1]=c*g+u*_+d*A,s[4]=c*m+u*x+d*T,s[7]=c*f+u*y+d*M,s[2]=h*g+p*_+v*A,s[5]=h*m+p*x+v*T,s[8]=h*f+p*y+v*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-r*s*u+r*a*l+i*s*c-i*o*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*d+r*h+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(i*c-u*r)*g,e[2]=(a*r-i*o)*g,e[3]=h*g,e[4]=(u*n-i*l)*g,e[5]=(i*s-a*n)*g,e[6]=p*g,e[7]=(r*l-c*n)*g,e[8]=(o*n-r*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Fd.makeScale(e,n)),this}rotate(e){return this.premultiply(Fd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fd=new Xe;function OS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _u(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function UR(){const t=_u("canvas");return t.style.display="block",t}const Dv={};function Fc(t){t in Dv||(Dv[t]=!0,console.warn(t))}function FR(t,e,n){return new Promise(function(r,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:r()}}setTimeout(s,n)})}function OR(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kR(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nv=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iv=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BR(){const t={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(i.r=Qr(i.r),i.g=Qr(i.g),i.b=Qr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(i.r=Mo(i.r),i.g=Mo(i.g),i.b=Mo(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?gu:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[Xo]:{primaries:e,whitePoint:r,transfer:gu,toXYZ:Nv,fromXYZ:Iv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:r,transfer:ft,toXYZ:Nv,fromXYZ:Iv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const st=BR();function Qr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Mo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vs;class zR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Vs===void 0&&(Vs=_u("canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=Vs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_u("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qr(s[o]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Qr(n[r]/255)*255):n[r]=Qr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VR=0;class bm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=ml(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Od(i[o].image)):s.push(Od(i[o]))}else s=Od(i);r.url=s}return n||(e.images[this.uuid]=r),r}}function Od(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HR=0;class wn extends ea{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,r=_s,i=_s,s=Tr,o=xs,a=cr,l=ii,c=wn.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HR++}),this.uuid=ml(),this.name="",this.source=new bm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==AS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=AS;wn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,r=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*s,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*s,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*s,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,A=(f+1)/2,T=(u+h)/4,M=(d+g)/4,L=(v+m)/4;return x>y&&x>A?x<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(x),i=T/r,s=M/r):y>A?y<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),r=T/i,s=L/i):A<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),r=M/s,i=L/s),this.set(r,i,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-g)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GR extends ea{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth?r.depth:1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const i={width:e,height:n,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const s=new wn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];const o=r.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const i=Object.assign({},e.textures[n].image);this.textures[n].source=new bm(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends GR{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class kS extends wn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=fr,this.minFilter=fr,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WR extends wn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=fr,this.minFilter=fr,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,s,o,a){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3];const h=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=g;return}if(d!==g||l!==h||c!==p||u!==v){let m=1-a;const f=l*h+c*p+u*v+d*g,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const A=Math.sqrt(x),T=Math.atan2(A,f*_);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}const y=a*_;if(l=l*m+h*y,c=c*m+p*y,u=u*m+v*y,d=d*m+g*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,r,i,s,o){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-a*p,e[n+2]=c*v+u*p+a*h-l*d,e[n+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),d=a(s/2),h=l(r/2),p=l(i/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=r+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(r>a&&r>d){const p=2*Math.sqrt(1+r-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-r-d);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-r-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-r*c,this._z=s*u+o*c+r*l-i*a,this._w=o*u-r*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+r*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=r*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Uv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Uv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[3]*r+s[6]*i,this.y=s[1]*n+s[4]*r+s[7]*i,this.z=s[2]*n+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=e.elements,o=1/(s[3]*n+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*r+s[8]*i+s[12])*o,this.y=(s[1]*n+s[5]*r+s[9]*i+s[13])*o,this.z=(s[2]*n+s[6]*r+s[10]*i+s[14])*o,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*r),u=2*(a*n-s*i),d=2*(s*r-o*n);return this.x=n+l*c+o*d-a*u,this.y=r+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i,this.y=s[1]*n+s[5]*r+s[9]*i,this.z=s[2]*n+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=i*l-s*a,this.y=s*o-r*l,this.z=r*a-i*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kd.copy(this).projectOnVector(e),this.sub(kd)}reflect(e){return this.sub(kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kd=new $,Uv=new gl;class vl{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),$l.subVectors(this.max,pa),Hs.subVectors(e.a,pa),Gs.subVectors(e.b,pa),Ws.subVectors(e.c,pa),ui.subVectors(Gs,Hs),di.subVectors(Ws,Gs),ns.subVectors(Hs,Ws);let n=[0,-ui.z,ui.y,0,-di.z,di.y,0,-ns.z,ns.y,ui.z,0,-ui.x,di.z,0,-di.x,ns.z,0,-ns.x,-ui.y,ui.x,0,-di.y,di.x,0,-ns.y,ns.x,0];return!Bd(n,Hs,Gs,Ws,$l)||(n=[1,0,0,0,1,0,0,0,1],!Bd(n,Hs,Gs,Ws,$l))?!1:(Yl.crossVectors(ui,di),n=[Yl.x,Yl.y,Yl.z],Bd(n,Hs,Gs,Ws,$l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ir=[new $,new $,new $,new $,new $,new $,new $,new $],Jn=new $,Xl=new vl,Hs=new $,Gs=new $,Ws=new $,ui=new $,di=new $,ns=new $,pa=new $,$l=new $,Yl=new $,rs=new $;function Bd(t,e,n,r,i){for(let s=0,o=t.length-3;s<=o;s+=3){rs.fromArray(t,s);const a=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),l=e.dot(rs),c=n.dot(rs),u=r.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jR=new vl,ma=new $,zd=new $;class qu{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):jR.setFromPoints(e).getCenter(r);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const n=ma.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(ma,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(zd)),this.expandByPoint(ma.copy(e.center).sub(zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ur=new $,Vd=new $,ql=new $,fi=new $,Hd=new $,Kl=new $,Gd=new $;class BS{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ur.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,n),Ur.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Vd.copy(e).add(n).multiplyScalar(.5),ql.copy(n).sub(e).normalize(),fi.copy(this.origin).sub(Vd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ql),a=fi.dot(this.direction),l=-fi.dot(ql),c=fi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,v;if(u>0)if(d=o*l-a,h=o*a-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const g=1/u;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Vd).addScaledVector(ql,h),p}intersectSphere(e,n){Ur.subVectors(e.center,this.origin);const r=Ur.dot(this.direction),i=Ur.dot(Ur)-r*r,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=r-o,l=r+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),r>o||s>i||((s>r||isNaN(r))&&(r=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,n,r,i,s){Hd.subVectors(n,e),Kl.subVectors(r,e),Gd.crossVectors(Hd,Kl);let o=this.direction.dot(Gd),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(Kl.crossVectors(fi,Kl));if(l<0)return null;const c=a*this.direction.dot(Hd.cross(fi));if(c<0||l+c>o)return null;const u=-a*fi.dot(Gd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,r,i,s,o,a,l,c,u,d,h,p,v,g,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,a,l,c,u,d,h,p,v,g,m)}set(e,n,r,i,s,o,a,l,c,u,d,h,p,v,g,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=r,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*s,n[5]=r[5]*s,n[6]=r[6]*s,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,s=e.z,o=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,v=a*u,g=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,g=c*d;n[0]=h+g*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,g=c*d;n[0]=h-g*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,v=a*u,g=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+g,n[1]=l*d,n[5]=g*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=g-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+g,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=g*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XR,e,$R)}lookAt(e,n,r){const i=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),hi.crossVectors(r,Cn),hi.lengthSq()===0&&(Math.abs(r.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),hi.crossVectors(r,Cn)),hi.normalize(),Ql.crossVectors(Cn,hi),i[0]=hi.x,i[4]=Ql.x,i[8]=Cn.x,i[1]=hi.y,i[5]=Ql.y,i[9]=Cn.y,i[2]=hi.z,i[6]=Ql.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],a=r[4],l=r[8],c=r[12],u=r[1],d=r[5],h=r[9],p=r[13],v=r[2],g=r[6],m=r[10],f=r[14],_=r[3],x=r[7],y=r[11],A=r[15],T=i[0],M=i[4],L=i[8],E=i[12],S=i[1],R=i[5],O=i[9],k=i[13],I=i[2],q=i[6],U=i[10],K=i[14],D=i[3],B=i[7],Y=i[11],re=i[15];return s[0]=o*T+a*S+l*I+c*D,s[4]=o*M+a*R+l*q+c*B,s[8]=o*L+a*O+l*U+c*Y,s[12]=o*E+a*k+l*K+c*re,s[1]=u*T+d*S+h*I+p*D,s[5]=u*M+d*R+h*q+p*B,s[9]=u*L+d*O+h*U+p*Y,s[13]=u*E+d*k+h*K+p*re,s[2]=v*T+g*S+m*I+f*D,s[6]=v*M+g*R+m*q+f*B,s[10]=v*L+g*O+m*U+f*Y,s[14]=v*E+g*k+m*K+f*re,s[3]=_*T+x*S+y*I+A*D,s[7]=_*M+x*R+y*q+A*B,s[11]=_*L+x*O+y*U+A*Y,s[15]=_*E+x*k+y*K+A*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],g=e[7],m=e[11],f=e[15];return v*(+s*l*d-i*c*d-s*a*h+r*c*h+i*a*p-r*l*p)+g*(+n*l*p-n*c*h+s*o*h-i*o*p+i*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+r*o*p+s*a*u-r*c*u)+f*(-i*a*u-n*l*d+n*a*h+i*o*d-r*o*h+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],g=e[13],m=e[14],f=e[15],_=d*m*c-g*h*c+g*l*p-a*m*p-d*l*f+a*h*f,x=v*h*c-u*m*c-v*l*p+o*m*p+u*l*f-o*h*f,y=u*g*c-v*d*c+v*a*p-o*g*p-u*a*f+o*d*f,A=v*d*l-u*g*l-v*a*h+o*g*h+u*a*m-o*d*m,T=n*_+r*x+i*y+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=_*M,e[1]=(g*h*s-d*m*s-g*i*p+r*m*p+d*i*f-r*h*f)*M,e[2]=(a*m*s-g*l*s+g*i*c-r*m*c-a*i*f+r*l*f)*M,e[3]=(d*l*s-a*h*s-d*i*c+r*h*c+a*i*p-r*l*p)*M,e[4]=x*M,e[5]=(u*m*s-v*h*s+v*i*p-n*m*p-u*i*f+n*h*f)*M,e[6]=(v*l*s-o*m*s-v*i*c+n*m*c+o*i*f-n*l*f)*M,e[7]=(o*h*s-u*l*s+u*i*c-n*h*c-o*i*p+n*l*p)*M,e[8]=y*M,e[9]=(v*d*s-u*g*s-v*r*p+n*g*p+u*r*f-n*d*f)*M,e[10]=(o*g*s-v*a*s+v*r*c-n*g*c-o*r*f+n*a*f)*M,e[11]=(u*a*s-o*d*s-u*r*c+n*d*c+o*r*p-n*a*p)*M,e[12]=A*M,e[13]=(u*g*i-v*d*i+v*r*h-n*g*h-u*r*m+n*d*m)*M,e[14]=(v*a*i-o*g*i-v*r*l+n*g*l+o*r*m-n*a*m)*M,e[15]=(o*d*i-u*a*i+u*r*l-n*d*l-o*r*h+n*a*h)*M,this}scale(e){const n=this.elements,r=e.x,i=e.y,s=e.z;return n[0]*=r,n[4]*=i,n[8]*=s,n[1]*=r,n[5]*=i,n[9]*=s,n[2]*=r,n[6]*=i,n[10]*=s,n[3]*=r,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),s=1-r,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,s,o){return this.set(1,r,s,0,e,1,o,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,v=s*d,g=o*u,m=o*d,f=a*d,_=l*c,x=l*u,y=l*d,A=r.x,T=r.y,M=r.z;return i[0]=(1-(g+f))*A,i[1]=(p+y)*A,i[2]=(v-x)*A,i[3]=0,i[4]=(p-y)*T,i[5]=(1-(h+f))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(v+x)*M,i[9]=(m-_)*M,i[10]=(1-(h+g))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let s=js.set(i[0],i[1],i[2]).length();const o=js.set(i[4],i[5],i[6]).length(),a=js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],er.copy(this);const c=1/s,u=1/o,d=1/a;return er.elements[0]*=c,er.elements[1]*=c,er.elements[2]*=c,er.elements[4]*=u,er.elements[5]*=u,er.elements[6]*=u,er.elements[8]*=d,er.elements[9]*=d,er.elements[10]*=d,n.setFromRotationMatrix(er),r.x=s,r.y=o,r.z=a,this}makePerspective(e,n,r,i,s,o,a=Yr){const l=this.elements,c=2*s/(n-e),u=2*s/(r-i),d=(n+e)/(n-e),h=(r+i)/(r-i);let p,v;if(a===Yr)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===vu)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,s,o,a=Yr){const l=this.elements,c=1/(n-e),u=1/(r-i),d=1/(o-s),h=(n+e)*c,p=(r+i)*u;let v,g;if(a===Yr)v=(o+s)*d,g=-2*d;else if(a===vu)v=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const js=new $,er=new Rt,XR=new $(0,0,0),$R=new $(1,1,1),hi=new $,Ql=new $,Cn=new $,Fv=new Rt,Ov=new gl;class si{constructor(e=0,n=0,r=0,i=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ov.setFromEuler(this),this.setFromQuaternion(Ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class zS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YR=0;const kv=new $,Xs=new gl,Fr=new Rt,Zl=new $,ga=new $,qR=new $,KR=new gl,Bv=new $(1,0,0),zv=new $(0,1,0),Vv=new $(0,0,1),Hv={type:"added"},QR={type:"removed"},$s={type:"childadded",child:null},Wd={type:"childremoved",child:null};class Mn extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YR++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new $,n=new si,r=new gl,i=new $(1,1,1);function s(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Xe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Bv,e)}rotateY(e){return this.rotateOnAxis(zv,e)}rotateZ(e){return this.rotateOnAxis(Vv,e)}translateOnAxis(e,n){return kv.copy(e).applyQuaternion(this.quaternion),this.position.add(kv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bv,e)}translateY(e){return this.translateOnAxis(zv,e)}translateZ(e){return this.translateOnAxis(Vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Zl.copy(e):Zl.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(ga,Zl,this.up):Fr.lookAt(Zl,ga,this.up),this.quaternion.setFromRotationMatrix(Fr),i&&(Fr.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(Fr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hv),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(QR),Wd.child=e,this.dispatchEvent(Wd),Wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hv),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,qR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,KR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),v.length>0&&(r.nodes=v)}return r.object=i,r;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Mn.DEFAULT_UP=new $(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tr=new $,Or=new $,jd=new $,kr=new $,Ys=new $,qs=new $,Gv=new $,Xd=new $,$d=new $,Yd=new $,qd=new Ct,Kd=new Ct,Qd=new Ct;class lr{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),tr.subVectors(e,n),i.cross(tr);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,n,r,i,s){tr.subVectors(i,n),Or.subVectors(r,n),jd.subVectors(e,n);const o=tr.dot(tr),a=tr.dot(Or),l=tr.dot(jd),c=Or.dot(Or),u=Or.dot(jd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,n,r,i,s,o,a,l){return this.getBarycoord(e,n,r,i,kr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kr.x),l.addScaledVector(o,kr.y),l.addScaledVector(a,kr.z),l)}static getInterpolatedAttribute(e,n,r,i,s,o){return qd.setScalar(0),Kd.setScalar(0),Qd.setScalar(0),qd.fromBufferAttribute(e,n),Kd.fromBufferAttribute(e,r),Qd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(qd,s.x),o.addScaledVector(Kd,s.y),o.addScaledVector(Qd,s.z),o}static isFrontFacing(e,n,r,i){return tr.subVectors(r,n),Or.subVectors(e,n),tr.cross(Or).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),tr.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return lr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,s){return lr.getInterpolation(e,this.a,this.b,this.c,n,r,i,s)}containsPoint(e){return lr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,s=this.c;let o,a;Ys.subVectors(i,r),qs.subVectors(s,r),Xd.subVectors(e,r);const l=Ys.dot(Xd),c=qs.dot(Xd);if(l<=0&&c<=0)return n.copy(r);$d.subVectors(e,i);const u=Ys.dot($d),d=qs.dot($d);if(u>=0&&d<=u)return n.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(r).addScaledVector(Ys,o);Yd.subVectors(e,s);const p=Ys.dot(Yd),v=qs.dot(Yd);if(v>=0&&p<=v)return n.copy(s);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(r).addScaledVector(qs,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Gv.subVectors(s,i),a=(d-u)/(d-u+(p-v)),n.copy(i).addScaledVector(Gv,a);const f=1/(m+g+h);return o=g*f,a=h*f,n.copy(r).addScaledVector(Ys,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const VS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Zd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=st.workingColorSpace){return this.r=e,this.g=n,this.b=r,st.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=st.workingColorSpace){if(e=NR(e,1),n=Ze(n,0,1),r=Ze(r,0,1),n===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;this.r=Zd(o,s,e+1/3),this.g=Zd(o,s,e),this.b=Zd(o,s,e-1/3)}return st.toWorkingColorSpace(this,i),this}setStyle(e,n=Gn){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const r=VS[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return st.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Ze(Jt.r*255,0,255))*65536+Math.round(Ze(Jt.g*255,0,255))*256+Math.round(Ze(Jt.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Jt.copy(this),n);const r=Jt.r,i=Jt.g,s=Jt.b,o=Math.max(r,i,s),a=Math.min(r,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case r:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-r)/d+2;break;case s:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Gn){st.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,r=Jt.g,i=Jt.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+n,pi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pi),e.getHSL(Jl);const r=Uc(pi.h,Jl.h,n),i=Uc(pi.s,Jl.s,n),s=Uc(pi.l,Jl.l,n);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*n+s[3]*r+s[6]*i,this.g=s[1]*n+s[4]*r+s[7]*i,this.b=s[2]*n+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new et;et.NAMES=VS;let ZR=0;class _l extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZR++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=wo,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=xh,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(r.blending=this.blending),this.side!==qi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_h&&(r.blendSrc=this.blendSrc),this.blendDst!==xh&&(r.blendDst=this.blendDst),this.blendEquation!==hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=i(e.textures),o=i(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=n[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class HS extends _l{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=bS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new $,ec=new ht;let JR=0;class Wt{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Pv,this.updateRanges=[],this.gpuType=$r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ec.fromBufferAttribute(this,n),ec.applyMatrix3(e),this.setXY(n,ec.x,ec.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ha(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=mn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ha(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ha(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ha(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ha(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),r=mn(r,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),r=mn(r,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pv&&(e.usage=this.usage),e}}class GS extends Wt{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class WS extends Wt{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class As extends Wt{constructor(e,n,r){super(new Float32Array(e),n,r)}}let eP=0;const Vn=new Rt,Jd=new Mn,Ks=new $,Rn=new vl,va=new vl,Bt=new $;class Dr extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eP++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(OS(e)?WS:GS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Xe().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,r){return Vn.makeTranslation(e,n,r),this.applyMatrix4(Vn),this}scale(e,n,r){return Vn.makeScale(e,n,r),this.applyMatrix4(Vn),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];r.push(o.x,o.y,o.z||0)}this.setAttribute("position",new As(r,3))}else{const r=Math.min(e.length,n.count);for(let i=0;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const s=n[r];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Rn.min,va.min),Rn.expandByPoint(Bt),Bt.addVectors(Rn.max,va.max),Rn.expandByPoint(Bt)):(Rn.expandByPoint(va.min),Rn.expandByPoint(va.max))}Rn.getCenter(r);let i=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),Bt.add(Ks)),i=Math.max(i,r.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*r.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<r.count;L++)a[L]=new $,l[L]=new $;const c=new $,u=new $,d=new $,h=new ht,p=new ht,v=new ht,g=new $,m=new $;function f(L,E,S){c.fromBufferAttribute(r,L),u.fromBufferAttribute(r,E),d.fromBufferAttribute(r,S),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(R),a[L].add(g),a[E].add(g),a[S].add(g),l[L].add(m),l[E].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,E=_.length;L<E;++L){const S=_[L],R=S.start,O=S.count;for(let k=R,I=R+O;k<I;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new $,y=new $,A=new $,T=new $;function M(L){A.fromBufferAttribute(i,L),T.copy(A);const E=a[L];x.copy(E),x.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(T,E);const R=y.dot(l[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,R)}for(let L=0,E=_.length;L<E;++L){const S=_[L],R=S.start,O=S.count;for(let k=R,I=R+O;k<I;k+=3)M(e.getX(k+0)),M(e.getX(k+1)),M(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wt(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let h=0,p=r.count;h<p;h++)r.setXYZ(h,0,0,0);const i=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,d=new $;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(r,v),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,m),a.add(u),l.add(u),c.add(u),r.setXYZ(v,a.x,a.y,a.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)i.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Wt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Dr,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,r);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wv=new Rt,is=new BS,tc=new qu,jv=new $,nc=new $,rc=new $,ic=new $,ef=new $,sc=new $,Xv=new $,oc=new $;class qr extends Mn{constructor(e=new Dr,n=new HS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){sc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ef.fromBufferAttribute(d,e),o?sc.addScaledVector(ef,u):sc.addScaledVector(ef.sub(n),u))}n.add(sc)}return n}raycast(e,n){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(tc.containsPoint(is.origin)===!1&&(is.intersectSphere(tc,jv)===null||is.origin.distanceToSquared(jv)>(e.far-e.near)**2))&&(Wv.copy(s).invert(),is.copy(e.ray).applyMatrix4(Wv),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,is)))}_computeIntersections(e,n,r){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=x;y<A;y+=3){const T=a.getX(y),M=a.getX(y+1),L=a.getX(y+2);i=ac(this,f,e,r,c,u,d,T,M,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=ac(this,o,e,r,c,u,d,_,x,y),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=x;y<A;y+=3){const T=y,M=y+1,L=y+2;i=ac(this,f,e,r,c,u,d,T,M,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=m,x=m+1,y=m+2;i=ac(this,o,e,r,c,u,d,_,x,y),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function tP(t,e,n,r,i,s,o,a){let l;if(e.side===En?l=r.intersectTriangle(o,s,i,!0,a):l=r.intersectTriangle(i,s,o,e.side===qi,a),l===null)return null;oc.copy(a),oc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(oc);return c<n.near||c>n.far?null:{distance:c,point:oc.clone(),object:t}}function ac(t,e,n,r,i,s,o,a,l,c){t.getVertexPosition(a,nc),t.getVertexPosition(l,rc),t.getVertexPosition(c,ic);const u=tP(t,e,n,r,nc,rc,ic,Xv);if(u){const d=new $;lr.getBarycoord(Xv,nc,rc,ic,d),i&&(u.uv=lr.getInterpolatedAttribute(i,a,l,c,d,new ht)),s&&(u.uv1=lr.getInterpolatedAttribute(s,a,l,c,d,new ht)),o&&(u.normal=lr.getInterpolatedAttribute(o,a,l,c,d,new $),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new $,materialIndex:0};lr.getNormal(nc,rc,ic,h.normal),u.face=h,u.barycoord=d}return u}class xl extends Dr{constructor(e=1,n=1,r=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,r,n,e,o,s,0),v("z","y","x",1,-1,r,n,-e,o,s,1),v("x","z","y",1,1,e,r,n,i,o,2),v("x","z","y",1,-1,e,r,-n,i,o,3),v("x","y","z",1,-1,e,n,r,i,s,4),v("x","y","z",-1,-1,e,n,-r,i,s,5),this.setIndex(l),this.setAttribute("position",new As(c,3)),this.setAttribute("normal",new As(u,3)),this.setAttribute("uv",new As(d,2));function v(g,m,f,_,x,y,A,T,M,L,E){const S=y/M,R=A/L,O=y/2,k=A/2,I=T/2,q=M+1,U=L+1;let K=0,D=0;const B=new $;for(let Y=0;Y<U;Y++){const re=Y*R-k;for(let oe=0;oe<q;oe++){const Ee=oe*S-O;B[g]=Ee*_,B[m]=re*x,B[f]=I,c.push(B.x,B.y,B.z),B[g]=0,B[m]=0,B[f]=T>0?1:-1,u.push(B.x,B.y,B.z),d.push(oe/M),d.push(1-Y/L),K+=1}}for(let Y=0;Y<L;Y++)for(let re=0;re<M;re++){const oe=h+re+q*Y,Ee=h+re+q*(Y+1),W=h+(re+1)+q*(Y+1),ie=h+(re+1)+q*Y;l.push(oe,Ee,ie),l.push(Ee,W,ie),D+=6}a.addGroup(p,D,E),p+=D,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $o(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const r=$o(t[n]);for(const i in r)e[i]=r[i]}return e}function nP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const rP={clone:$o,merge:on};var iP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends _l{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iP,this.fragmentShader=sP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=nP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?n.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[i]={type:"m4",value:o.toArray()}:n.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class XS extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Yr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new $,$v=new ht,Yv=new ht;class Dn extends XS{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,n){return this.getViewBounds(e,$v,Yv),n.subVectors(Yv,$v)}setViewOffset(e,n,r,i,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ud*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,n-=o.offsetY*r/c,i*=o.width/l,r*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qs=-90,Zs=1;class oP extends Mn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dn(Qs,Zs,e,n);i.layers=this.layers,this.add(i);const s=new Dn(Qs,Zs,e,n);s.layers=this.layers,this.add(s);const o=new Dn(Qs,Zs,e,n);o.layers=this.layers,this.add(o);const a=new Dn(Qs,Zs,e,n);a.layers=this.layers,this.add(a);const l=new Dn(Qs,Zs,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Qs,Zs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Yr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vu)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,s),e.setRenderTarget(r,1,i),e.render(n,o),e.setRenderTarget(r,2,i),e.render(n,a),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class $S extends wn{constructor(e=[],n=Wo,r,i,s,o,a,l,c,u){super(e,n,r,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aP extends Us{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new $S(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xl(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:$o(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:En,blending:zi});s.uniforms.tEquirect.value=n;const o=new qr(i,s),a=n.minFilter;return n.minFilter===xs&&(n.minFilter=Tr),new oP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,r=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,r,i);e.setRenderTarget(s)}}class lc extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lP={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,r),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lP)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new lc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class YS extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const nf=new $,cP=new $,uP=new Xe;class ds{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=nf.subVectors(r,n).cross(cP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(nf),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||uP.getNormalMatrix(e),i=this.coplanarPoint(nf).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new qu,cc=new $;class qS{constructor(e=new ds,n=new ds,r=new ds,i=new ds,s=new ds,o=new ds){this.planes=[e,n,r,i,s,o]}set(e,n,r,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Yr){const r=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],p=i[8],v=i[9],g=i[10],m=i[11],f=i[12],_=i[13],x=i[14],y=i[15];if(r[0].setComponents(l-s,h-c,m-p,y-f).normalize(),r[1].setComponents(l+s,h+c,m+p,y+f).normalize(),r[2].setComponents(l+o,h+u,m+v,y+_).normalize(),r[3].setComponents(l-o,h-u,m-v,y-_).normalize(),r[4].setComponents(l-a,h-d,m-g,y-x).normalize(),n===Yr)r[5].setComponents(l+a,h+d,m+g,y+x).normalize();else if(n===vu)r[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(cc.x=i.normal.x>0?e.max.x:e.min.x,cc.y=i.normal.y>0?e.max.y:e.min.y,cc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Am extends _l{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qv=new Rt,ip=new BS,uc=new qu,dc=new $;class KS extends Mn{constructor(e=new Dr,n=new Am){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(i),uc.radius+=s,e.ray.intersectsSphere(uc)===!1)return;qv.copy(i).invert(),ip.copy(e.ray).applyMatrix4(qv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=r.index,d=r.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=h,g=p;v<g;v++){const m=c.getX(v);dc.fromBufferAttribute(d,m),Kv(dc,m,l,i,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,g=p;v<g;v++)dc.fromBufferAttribute(d,v),Kv(dc,v,l,i,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kv(t,e,n,r,i,s,o){const a=ip.distanceSqToPoint(t);if(a<n){const l=new $;ip.closestPointToPoint(t,l),l.applyMatrix4(r);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class QS extends wn{constructor(e,n,r=Is,i,s,o,a=fr,l=fr,c,u=nl){if(u!==nl&&u!==rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,o,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ku extends Dr{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const s=e/2,o=n/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=n/l,p=[],v=[],g=[],m=[];for(let f=0;f<u;f++){const _=f*h-o;for(let x=0;x<c;x++){const y=x*d-s;v.push(y,-_,0),g.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const x=_+c*f,y=_+c*(f+1),A=_+1+c*(f+1),T=_+1+c*f;p.push(x,y,T),p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new As(v,3)),this.setAttribute("normal",new As(g,3)),this.setAttribute("uv",new As(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.width,e.height,e.widthSegments,e.heightSegments)}}class dP extends _l{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ER,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fP extends _l{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hP extends XS{constructor(e=-1,n=1,r=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,o=r+e,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class pP extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ZS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qv(){return performance.now()}function Zv(t,e,n,r){const i=mP(r);switch(n){case LS:return t*e;case NS:return t*e/i.components*i.byteLength;case wm:return t*e/i.components*i.byteLength;case IS:return t*e*2/i.components*i.byteLength;case Mm:return t*e*2/i.components*i.byteLength;case DS:return t*e*3/i.components*i.byteLength;case cr:return t*e*4/i.components*i.byteLength;case Tm:return t*e*4/i.components*i.byteLength;case Pc:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Ih:return Math.max(t,16)*Math.max(e,8)/4;case Lh:case Nh:return Math.max(t,8)*Math.max(e,8)/2;case Uh:case Fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Zh:case Jh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case US:case ep:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tp:case np:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mP(t){switch(t){case ii:case CS:return{byteLength:1,components:1};case el:case RS:case pl:return{byteLength:2,components:1};case Sm:case Em:return{byteLength:2,components:4};case Is:case ym:case $r:return{byteLength:4,components:1};case PS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function JS(){let t=null,e=!1,n=null,r=null;function i(s,o){n(s,o),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gP(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],g=d[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++h,d[h]=g)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const g=d[p];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var vP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_P=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$P="gl_FragColor = linearToOutputTexel( gl_FragColor );",YP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,N2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_L=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ML=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$L=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,YL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:vP,alphahash_pars_fragment:_P,alphamap_fragment:xP,alphamap_pars_fragment:yP,alphatest_fragment:SP,alphatest_pars_fragment:EP,aomap_fragment:wP,aomap_pars_fragment:MP,batching_pars_vertex:TP,batching_vertex:bP,begin_vertex:AP,beginnormal_vertex:CP,bsdfs:RP,iridescence_fragment:PP,bumpmap_pars_fragment:LP,clipping_planes_fragment:DP,clipping_planes_pars_fragment:NP,clipping_planes_pars_vertex:IP,clipping_planes_vertex:UP,color_fragment:FP,color_pars_fragment:OP,color_pars_vertex:kP,color_vertex:BP,common:zP,cube_uv_reflection_fragment:VP,defaultnormal_vertex:HP,displacementmap_pars_vertex:GP,displacementmap_vertex:WP,emissivemap_fragment:jP,emissivemap_pars_fragment:XP,colorspace_fragment:$P,colorspace_pars_fragment:YP,envmap_fragment:qP,envmap_common_pars_fragment:KP,envmap_pars_fragment:QP,envmap_pars_vertex:ZP,envmap_physical_pars_fragment:c2,envmap_vertex:JP,fog_vertex:e2,fog_pars_vertex:t2,fog_fragment:n2,fog_pars_fragment:r2,gradientmap_pars_fragment:i2,lightmap_pars_fragment:s2,lights_lambert_fragment:o2,lights_lambert_pars_fragment:a2,lights_pars_begin:l2,lights_toon_fragment:u2,lights_toon_pars_fragment:d2,lights_phong_fragment:f2,lights_phong_pars_fragment:h2,lights_physical_fragment:p2,lights_physical_pars_fragment:m2,lights_fragment_begin:g2,lights_fragment_maps:v2,lights_fragment_end:_2,logdepthbuf_fragment:x2,logdepthbuf_pars_fragment:y2,logdepthbuf_pars_vertex:S2,logdepthbuf_vertex:E2,map_fragment:w2,map_pars_fragment:M2,map_particle_fragment:T2,map_particle_pars_fragment:b2,metalnessmap_fragment:A2,metalnessmap_pars_fragment:C2,morphinstance_vertex:R2,morphcolor_vertex:P2,morphnormal_vertex:L2,morphtarget_pars_vertex:D2,morphtarget_vertex:N2,normal_fragment_begin:I2,normal_fragment_maps:U2,normal_pars_fragment:F2,normal_pars_vertex:O2,normal_vertex:k2,normalmap_pars_fragment:B2,clearcoat_normal_fragment_begin:z2,clearcoat_normal_fragment_maps:V2,clearcoat_pars_fragment:H2,iridescence_pars_fragment:G2,opaque_fragment:W2,packing:j2,premultiplied_alpha_fragment:X2,project_vertex:$2,dithering_fragment:Y2,dithering_pars_fragment:q2,roughnessmap_fragment:K2,roughnessmap_pars_fragment:Q2,shadowmap_pars_fragment:Z2,shadowmap_pars_vertex:J2,shadowmap_vertex:eL,shadowmask_pars_fragment:tL,skinbase_vertex:nL,skinning_pars_vertex:rL,skinning_vertex:iL,skinnormal_vertex:sL,specularmap_fragment:oL,specularmap_pars_fragment:aL,tonemapping_fragment:lL,tonemapping_pars_fragment:cL,transmission_fragment:uL,transmission_pars_fragment:dL,uv_pars_fragment:fL,uv_pars_vertex:hL,uv_vertex:pL,worldpos_vertex:mL,background_vert:gL,background_frag:vL,backgroundCube_vert:_L,backgroundCube_frag:xL,cube_vert:yL,cube_frag:SL,depth_vert:EL,depth_frag:wL,distanceRGBA_vert:ML,distanceRGBA_frag:TL,equirect_vert:bL,equirect_frag:AL,linedashed_vert:CL,linedashed_frag:RL,meshbasic_vert:PL,meshbasic_frag:LL,meshlambert_vert:DL,meshlambert_frag:NL,meshmatcap_vert:IL,meshmatcap_frag:UL,meshnormal_vert:FL,meshnormal_frag:OL,meshphong_vert:kL,meshphong_frag:BL,meshphysical_vert:zL,meshphysical_frag:VL,meshtoon_vert:HL,meshtoon_frag:GL,points_vert:WL,points_frag:jL,shadow_vert:XL,shadow_frag:$L,sprite_vert:YL,sprite_frag:qL},pe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},wr={basic:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:on([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:on([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:on([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:on([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:on([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:on([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:on([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:on([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:on([pe.common,pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:on([pe.lights,pe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};wr.physical={uniforms:on([wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const fc={r:0,b:0,g:0},os=new si,KL=new Rt;function QL(t,e,n,r,i,s,o){const a=new et(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function v(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function g(x){let y=!1;const A=v(x);A===null?f(a,l):A&&A.isColor&&(f(A,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?r.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const A=v(y);A&&(A.isCubeTexture||A.mapping===Yu)?(u===void 0&&(u=new qr(new xl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:$o(wr.backgroundCube.uniforms),vertexShader:wr.backgroundCube.vertexShader,fragmentShader:wr.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,M,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),os.copy(y.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(KL.makeRotationFromEuler(os)),u.material.toneMapped=st.getTransfer(A.colorSpace)!==ft,(d!==A||h!==A.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new qr(new Ku(2,2),new Ki({name:"BackgroundMaterial",uniforms:$o(wr.background.uniforms),vertexShader:wr.background.vertexShader,fragmentShader:wr.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(A.colorSpace)!==ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,y){x.getRGB(fc,jS(t)),r.buffers.color.setClear(fc.r,fc.g,fc.b,y,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:g,addToRenderList:m,dispose:_}}function ZL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=h(null);let s=i,o=!1;function a(S,R,O,k,I){let q=!1;const U=d(k,O,R);s!==U&&(s=U,c(s.object)),q=p(S,k,O,I),q&&v(S,k,O,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(S,R,O,k),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,R,O){const k=O.wireframe===!0;let I=r[S.id];I===void 0&&(I={},r[S.id]=I);let q=I[R.id];q===void 0&&(q={},I[R.id]=q);let U=q[k];return U===void 0&&(U=h(l()),q[k]=U),U}function h(S){const R=[],O=[],k=[];for(let I=0;I<n;I++)R[I]=0,O[I]=0,k[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,R,O,k){const I=s.attributes,q=R.attributes;let U=0;const K=O.getAttributes();for(const D in K)if(K[D].location>=0){const Y=I[D];let re=q[D];if(re===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),Y===void 0||Y.attribute!==re||re&&Y.data!==re.data)return!0;U++}return s.attributesNum!==U||s.index!==k}function v(S,R,O,k){const I={},q=R.attributes;let U=0;const K=O.getAttributes();for(const D in K)if(K[D].location>=0){let Y=q[D];Y===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor));const re={};re.attribute=Y,Y&&Y.data&&(re.data=Y.data),I[D]=re,U++}s.attributes=I,s.attributesNum=U,s.index=k}function g(){const S=s.newAttributes;for(let R=0,O=S.length;R<O;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const O=s.newAttributes,k=s.enabledAttributes,I=s.attributeDivisors;O[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),I[S]!==R&&(t.vertexAttribDivisor(S,R),I[S]=R)}function _(){const S=s.newAttributes,R=s.enabledAttributes;for(let O=0,k=R.length;O<k;O++)R[O]!==S[O]&&(t.disableVertexAttribArray(O),R[O]=0)}function x(S,R,O,k,I,q,U){U===!0?t.vertexAttribIPointer(S,R,O,I,q):t.vertexAttribPointer(S,R,O,k,I,q)}function y(S,R,O,k){g();const I=k.attributes,q=O.getAttributes(),U=R.defaultAttributeValues;for(const K in q){const D=q[K];if(D.location>=0){let B=I[K];if(B===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(B=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(B=S.instanceColor)),B!==void 0){const Y=B.normalized,re=B.itemSize,oe=e.get(B);if(oe===void 0)continue;const Ee=oe.buffer,W=oe.type,ie=oe.bytesPerElement,he=W===t.INT||W===t.UNSIGNED_INT||B.gpuType===ym;if(B.isInterleavedBufferAttribute){const ne=B.data,Ce=ne.stride,$e=B.offset;if(ne.isInstancedInterleavedBuffer){for(let Re=0;Re<D.locationSize;Re++)f(D.location+Re,ne.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Re=0;Re<D.locationSize;Re++)m(D.location+Re);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Re=0;Re<D.locationSize;Re++)x(D.location+Re,re/D.locationSize,W,Y,Ce*ie,($e+re/D.locationSize*Re)*ie,he)}else{if(B.isInstancedBufferAttribute){for(let ne=0;ne<D.locationSize;ne++)f(D.location+ne,B.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ne=0;ne<D.locationSize;ne++)m(D.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let ne=0;ne<D.locationSize;ne++)x(D.location+ne,re/D.locationSize,W,Y,re*ie,re/D.locationSize*ne*ie,he)}}else if(U!==void 0){const Y=U[K];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(D.location,Y);break;case 3:t.vertexAttrib3fv(D.location,Y);break;case 4:t.vertexAttrib4fv(D.location,Y);break;default:t.vertexAttrib1fv(D.location,Y)}}}}_()}function A(){L();for(const S in r){const R=r[S];for(const O in R){const k=R[O];for(const I in k)u(k[I].object),delete k[I];delete R[O]}delete r[S]}}function T(S){if(r[S.id]===void 0)return;const R=r[S.id];for(const O in R){const k=R[O];for(const I in k)u(k[I].object),delete k[I];delete R[O]}delete r[S.id]}function M(S){for(const R in r){const O=r[R];if(O[S.id]===void 0)continue;const k=O[S.id];for(const I in k)u(k[I].object),delete k[I];delete O[S.id]}}function L(){E(),o=!0,s!==i&&(s=i,c(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function JL(t,e,n){let r;function i(c){r=c}function s(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(r,c,u,d),n.update(u,r,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,r,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,u,0,h,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*h[g];n.update(v,r,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function eD(t,e,n,r){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==cr&&r.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const L=M===pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ii&&r.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==$r&&!L)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function tD(t){const e=this;let n=null,r=0,i=!1,s=!1;const o=new ds,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||r!==0||i;return i=h,r=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!i||v===null||v.length===0||s&&!m)s?u(null):c();else{const _=s?0:r,x=_*4;let y=f.clippingState||null;l.value=y,y=u(v,h,x,p);for(let A=0;A!==x;++A)y[A]=n[A];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,h,p,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const f=p+g*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function nD(t){let e=new WeakMap;function n(o,a){return a===Ah?o.mapping=Wo:a===Ch&&(o.mapping=jo),o}function r(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ah||a===Ch)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new aP(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",i),n(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}const ho=4,Jv=[.125,.215,.35,.446,.526,.582],ps=20,rf=new hP,e0=new et;let sf=null,of=0,af=0,lf=!1;const fs=(1+Math.sqrt(5))/2,Js=1/fs,t0=[new $(-fs,Js,0),new $(fs,Js,0),new $(-Js,0,fs),new $(Js,0,fs),new $(0,fs,-Js),new $(0,fs,Js),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],rD=new $;class n0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100,s={}){const{size:o=256,position:a=rD}=s;sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,i,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,of,af),this._renderer.xr.enabled=lf,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Tr,minFilter:Tr,generateMipmaps:!1,type:pl,format:cr,colorSpace:Xo,depthBuffer:!1},i=r0(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(e,n,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iD(s)),this._blurMaterial=sD(s,e,n)}return i}_compileMaterial(e){const n=new qr(this._lodPlanes[0],e);this._renderer.compile(n,rf)}_sceneToCubeUV(e,n,r,i,s){const l=new Dn(90,1,n,r),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(e0),d.toneMapping=Vi,d.autoClear=!1;const v=new HS({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new qr(new xl,v);let m=!1;const f=e.background;f?f.isColor&&(v.color.copy(f),e.background=null,m=!0):(v.color.copy(e0),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const y=this._cubeSize;hc(i,x*y,_>2?y:0,y,y),d.setRenderTarget(i),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Wo||e.mapping===jo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new qr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hc(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(o,rf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=t0[(i-s-1)%t0.length];this._blur(e,s-1,s,o,a)}n.autoClear=r}_blur(e,n,r,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,r,i,"latitudinal",s),this._halfBlur(o,e,r,r,i,"longitudinal",s)}_halfBlur(e,n,r,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new qr(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[r]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ps-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):ps;m>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);const f=[];let _=0;for(let M=0;M<ps;++M){const L=M/g,E=Math.exp(-L*L/2);f.push(E),M===0?_+=E:M<m&&(_+=2*E)}for(let M=0;M<f.length;M++)f[M]=f[M]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-r;const y=this._sizeLods[i],A=3*y*(i>x-ho?i-x+ho:0),T=4*(this._cubeSize-y);hc(n,A,T,3*y,2*y),l.setRenderTarget(n),l.render(d,rf)}}function iD(t){const e=[],n=[],r=[];let i=t;const s=t-ho+1+Jv.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);n.push(a);let l=1/a;o>t-ho?l=Jv[o-t+ho-1]:o===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,g=3,m=2,f=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let T=0;T<p;T++){const M=T%3*2/3-1,L=T>2?0:-1,E=[M,L,0,M+2/3,L,0,M+2/3,L+1,0,M,L,0,M+2/3,L+1,0,M,L+1,0];_.set(E,g*v*T),x.set(h,m*v*T);const S=[T,T,T,T,T,T];y.set(S,f*v*T)}const A=new Dr;A.setAttribute("position",new Wt(_,g)),A.setAttribute("uv",new Wt(x,m)),A.setAttribute("faceIndex",new Wt(y,f)),e.push(A),i>ho&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function r0(t,e,n){const r=new Us(t,e,n);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hc(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function sD(t,e,n){const r=new Float32Array(ps),i=new $(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function i0(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function s0(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Cm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oD(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ah||l===Ch,u=l===Wo||l===jo;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new n0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(n===null&&(n=new n0(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function aD(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&Fc("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function lD(t,e,n,r){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,v=d.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const A=_[x+0],T=_[x+1],M=_[x+2];h.push(A,T,T,M,M,A)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const A=x+0,T=x+1,M=x+2;h.push(A,T,T,M,M,A)}}else return;const m=new(OS(h)?WS:GS)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function cD(t,e,n){let r;function i(h){r=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(r,p,s,h*o),n.update(p,r,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(r,p,s,h*o,v),n.update(p,r,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,s,h,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];n.update(m,r,1)}function d(h,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,s,h,0,g,0,v);let f=0;for(let _=0;_<v;_++)f+=p[_]*g[_];n.update(f,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function uD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function dD(t,e,n){const r=new WeakMap,i=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=r.get(a);if(h===void 0||h.count!==d){let E=function(){M.dispose(),r.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let y=a.attributes.position.count*x,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*A*4*d),M=new kS(T,y,A,d);M.type=$r,M.needsUpdate=!0;const L=x*4;for(let S=0;S<d;S++){const R=m[S],O=f[S],k=_[S],I=y*A*4*S;for(let q=0;q<R.count;q++){const U=q*L;p===!0&&(i.fromBufferAttribute(R,q),T[I+U+0]=i.x,T[I+U+1]=i.y,T[I+U+2]=i.z,T[I+U+3]=0),v===!0&&(i.fromBufferAttribute(O,q),T[I+U+4]=i.x,T[I+U+5]=i.y,T[I+U+6]=i.z,T[I+U+7]=0),g===!0&&(i.fromBufferAttribute(k,q),T[I+U+8]=i.x,T[I+U+9]=i.y,T[I+U+10]=i.z,T[I+U+11]=k.itemSize===4?i.w:1)}}h={count:d,texture:M,size:new ht(y,A)},r.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function fD(t,e,n,r){let i=new WeakMap;function s(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const eE=new wn,o0=new QS(1,1),tE=new kS,nE=new WR,rE=new $S,a0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),d0=new Float32Array(4);function ta(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let s=a0[i];if(s===void 0&&(s=new Float32Array(i),a0[i]=s),e!==0){r.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Qu(t,e){let n=l0[e];n===void 0&&(n=new Int32Array(e),l0[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function hD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function mD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function gD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function vD(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,r))return;d0.set(r),t.uniformMatrix2fv(this.addr,!1,d0),Ot(n,r)}}function _D(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,r))return;u0.set(r),t.uniformMatrix3fv(this.addr,!1,u0),Ot(n,r)}}function xD(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,r))return;c0.set(r),t.uniformMatrix4fv(this.addr,!1,c0),Ot(n,r)}}function yD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function SD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function ED(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function wD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function MD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function TD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function bD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function AD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function CD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?(o0.compareFunction=FS,s=o0):s=eE,n.setTexture2D(e||s,i)}function RD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||nE,i)}function PD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||rE,i)}function LD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||tE,i)}function DD(t){switch(t){case 5126:return hD;case 35664:return pD;case 35665:return mD;case 35666:return gD;case 35674:return vD;case 35675:return _D;case 35676:return xD;case 5124:case 35670:return yD;case 35667:case 35671:return SD;case 35668:case 35672:return ED;case 35669:case 35673:return wD;case 5125:return MD;case 36294:return TD;case 36295:return bD;case 36296:return AD;case 35678:case 36198:case 36298:case 36306:case 35682:return CD;case 35679:case 36299:case 36307:return RD;case 35680:case 36300:case 36308:case 36293:return PD;case 36289:case 36303:case 36311:case 36292:return LD}}function ND(t,e){t.uniform1fv(this.addr,e)}function ID(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function UD(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function FD(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function OD(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kD(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BD(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zD(t,e){t.uniform1iv(this.addr,e)}function VD(t,e){t.uniform2iv(this.addr,e)}function HD(t,e){t.uniform3iv(this.addr,e)}function GD(t,e){t.uniform4iv(this.addr,e)}function WD(t,e){t.uniform1uiv(this.addr,e)}function jD(t,e){t.uniform2uiv(this.addr,e)}function XD(t,e){t.uniform3uiv(this.addr,e)}function $D(t,e){t.uniform4uiv(this.addr,e)}function YD(t,e,n){const r=this.cache,i=e.length,s=Qu(n,i);Ft(r,s)||(t.uniform1iv(this.addr,s),Ot(r,s));for(let o=0;o!==i;++o)n.setTexture2D(e[o]||eE,s[o])}function qD(t,e,n){const r=this.cache,i=e.length,s=Qu(n,i);Ft(r,s)||(t.uniform1iv(this.addr,s),Ot(r,s));for(let o=0;o!==i;++o)n.setTexture3D(e[o]||nE,s[o])}function KD(t,e,n){const r=this.cache,i=e.length,s=Qu(n,i);Ft(r,s)||(t.uniform1iv(this.addr,s),Ot(r,s));for(let o=0;o!==i;++o)n.setTextureCube(e[o]||rE,s[o])}function QD(t,e,n){const r=this.cache,i=e.length,s=Qu(n,i);Ft(r,s)||(t.uniform1iv(this.addr,s),Ot(r,s));for(let o=0;o!==i;++o)n.setTexture2DArray(e[o]||tE,s[o])}function ZD(t){switch(t){case 5126:return ND;case 35664:return ID;case 35665:return UD;case 35666:return FD;case 35674:return OD;case 35675:return kD;case 35676:return BD;case 5124:case 35670:return zD;case 35667:case 35671:return VD;case 35668:case 35672:return HD;case 35669:case 35673:return GD;case 5125:return WD;case 36294:return jD;case 36295:return XD;case 36296:return $D;case 35678:case 36198:case 36298:case 36306:case 35682:return YD;case 35679:case 36299:case 36307:return qD;case 35680:case 36300:case 36308:case 36293:return KD;case 36289:case 36303:case 36311:case 36292:return QD}}class JD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=DD(n.type)}}class eN{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZD(n.type)}}class tN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,n[a.id],r)}}}const cf=/(\w+)(\])?(\[|\.)?/g;function f0(t,e){t.seq.push(e),t.map[e.id]=e}function nN(t,e,n){const r=t.name,i=r.length;for(cf.lastIndex=0;;){const s=cf.exec(r),o=cf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){f0(n,c===void 0?new JD(a,t,e):new eN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new tN(a),f0(n,d)),n=d}}}class Oc{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(n,i),o=e.getUniformLocation(n,s.name);nN(s,o,this)}}setValue(e,n,r,i){const s=this.map[n];s!==void 0&&s.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in n&&r.push(o)}return r}}function h0(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const rN=37297;let iN=0;function sN(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=i;o<s;o++){const a=o+1;r.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return r.join(`
`)}const p0=new Xe;function oN(t){st._getMatrix(p0,st.workingColorSpace,t);const e=`mat3( ${p0.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case gu:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function m0(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+sN(t.getShaderSource(e),o)}else return i}function aN(t,e){const n=oN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function lN(t,e){let n;switch(e){case pR:n="Linear";break;case mR:n="Reinhard";break;case gR:n="Cineon";break;case vR:n="ACESFilmic";break;case xR:n="AgX";break;case yR:n="Neutral";break;case _R:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pc=new $;function cN(){st.getLuminanceCoefficients(pc);const t=pc.x.toFixed(4),e=pc.y.toFixed(4),n=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function dN(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function fN(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=t.getActiveAttrib(e,i),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ea(t){return t!==""}function g0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hN=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(t){return t.replace(hN,mN)}const pN=new Map;function mN(t,e){let n=Ye[e];if(n===void 0){const r=pN.get(e);if(r!==void 0)n=Ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return sp(n)}const gN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(t){return t.replace(gN,vN)}function vN(t,e,n,r){let i="";for(let s=parseInt(e);s<parseInt(n);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function x0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _N(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===TS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$C?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===zr&&(e="SHADOWMAP_TYPE_VSM"),e}function xN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Wo:case jo:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function SN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bS:e="ENVMAP_BLENDING_MULTIPLY";break;case fR:e="ENVMAP_BLENDING_MIX";break;case hR:e="ENVMAP_BLENDING_ADD";break}return e}function EN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function wN(t,e,n,r){const i=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_N(n),c=xN(n),u=yN(n),d=SN(n),h=EN(n),p=uN(n),v=dN(s),g=i.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ea).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ea).join(`
`),f.length>0&&(f+=`
`)):(m=[x0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),f=[x0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Vi?lN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,aN("linearToOutputTexel",n.outputColorSpace),cN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ea).join(`
`)),o=sp(o),o=g0(o,n),o=v0(o,n),a=sp(a),a=g0(a,n),a=v0(a,n),o=_0(o),a=_0(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+m+o,y=_+f+a,A=h0(i,i.VERTEX_SHADER,x),T=h0(i,i.FRAGMENT_SHADER,y);i.attachShader(g,A),i.attachShader(g,T),n.index0AttributeName!==void 0?i.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function M(R){if(t.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(A).trim(),I=i.getShaderInfoLog(T).trim();let q=!0,U=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,g,A,T);else{const K=m0(i,A,"vertex"),D=m0(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+K+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||I==="")&&(U=!1);U&&(R.diagnostics={runnable:q,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:I,prefix:f}})}i.deleteShader(A),i.deleteShader(T),L=new Oc(i,g),E=fN(i,g)}let L;this.getUniforms=function(){return L===void 0&&M(this),L};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,rN)),S},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iN++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}let MN=0;class TN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new bN(e),n.set(e,r)),r}}class bN{constructor(e){this.id=MN++,this.code=e,this.usedTimes=0}}function AN(t,e,n,r,i,s,o){const a=new zS,l=new TN,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,R,O,k){const I=O.fog,q=k.geometry,U=E.isMeshStandardMaterial?O.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||U),D=K&&K.mapping===Yu?K.image.height:null,B=v[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Y=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,re=Y!==void 0?Y.length:0;let oe=0;q.morphAttributes.position!==void 0&&(oe=1),q.morphAttributes.normal!==void 0&&(oe=2),q.morphAttributes.color!==void 0&&(oe=3);let Ee,W,ie,he;if(B){const We=wr[B];Ee=We.vertexShader,W=We.fragmentShader}else Ee=E.vertexShader,W=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),he=l.getFragmentShaderID(E);const ne=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),$e=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,ot=!!E.map,at=!!E.matcap,Be=!!K,N=!!E.aoMap,$t=!!E.lightMap,qe=!!E.bumpMap,Ke=!!E.normalMap,be=!!E.displacementMap,nt=!!E.emissiveMap,Ae=!!E.metalnessMap,C=!!E.roughnessMap,w=E.anisotropy>0,G=E.clearcoat>0,ee=E.dispersion>0,se=E.iridescence>0,Q=E.sheen>0,Me=E.transmission>0,ge=w&&!!E.anisotropyMap,Ne=G&&!!E.clearcoatMap,Pe=G&&!!E.clearcoatNormalMap,le=G&&!!E.clearcoatRoughnessMap,xe=se&&!!E.iridescenceMap,Ie=se&&!!E.iridescenceThicknessMap,Le=Q&&!!E.sheenColorMap,ye=Q&&!!E.sheenRoughnessMap,He=!!E.specularMap,ze=!!E.specularColorMap,dt=!!E.specularIntensityMap,F=Me&&!!E.transmissionMap,me=Me&&!!E.thicknessMap,Z=!!E.gradientMap,te=!!E.alphaMap,fe=E.alphaTest>0,ve=!!E.alphaHash,ue=!!E.extensions;let Ue=Vi;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const Ge={shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:Ee,fragmentShader:W,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:he,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:$e,instancingColor:$e&&k.instanceColor!==null,instancingMorph:$e&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Xo,alphaToCoverage:!!E.alphaToCoverage,map:ot,matcap:at,envMap:Be,envMapMode:Be&&K.mapping,envMapCubeUVHeight:D,aoMap:N,lightMap:$t,bumpMap:qe,normalMap:Ke,displacementMap:h&&be,emissiveMap:nt,normalMapObjectSpace:Ke&&E.normalMapType===TR,normalMapTangentSpace:Ke&&E.normalMapType===MR,metalnessMap:Ae,roughnessMap:C,anisotropy:w,anisotropyMap:ge,clearcoat:G,clearcoatMap:Ne,clearcoatNormalMap:Pe,clearcoatRoughnessMap:le,dispersion:ee,iridescence:se,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:Q,sheenColorMap:Le,sheenRoughnessMap:ye,specularMap:He,specularColorMap:ze,specularIntensityMap:dt,transmission:Me,transmissionMap:F,thicknessMap:me,gradientMap:Z,opaque:E.transparent===!1&&E.blending===wo&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:fe,alphaHash:ve,combine:E.combine,mapUv:ot&&g(E.map.channel),aoMapUv:N&&g(E.aoMap.channel),lightMapUv:$t&&g(E.lightMap.channel),bumpMapUv:qe&&g(E.bumpMap.channel),normalMapUv:Ke&&g(E.normalMap.channel),displacementMapUv:be&&g(E.displacementMap.channel),emissiveMapUv:nt&&g(E.emissiveMap.channel),metalnessMapUv:Ae&&g(E.metalnessMap.channel),roughnessMapUv:C&&g(E.roughnessMap.channel),anisotropyMapUv:ge&&g(E.anisotropyMap.channel),clearcoatMapUv:Ne&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(E.sheenRoughnessMap.channel),specularMapUv:He&&g(E.specularMap.channel),specularColorMapUv:ze&&g(E.specularColorMap.channel),specularIntensityMapUv:dt&&g(E.specularIntensityMap.channel),transmissionMapUv:F&&g(E.transmissionMap.channel),thicknessMapUv:me&&g(E.thicknessMap.channel),alphaMapUv:te&&g(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ke||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(ot||te),fog:!!I,useFog:E.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ce,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ot&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===ft,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&st.getTransfer(E.emissiveMap.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Wr,flipSided:E.side===En,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ue&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&E.extensions.multiDraw===!0||Re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)S.push(R),S.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(_(S,E),x(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const S=v[E.type];let R;if(S){const O=wr[S];R=rP.clone(O.uniforms)}else R=E.uniforms;return R}function A(E,S){let R;for(let O=0,k=u.length;O<k;O++){const I=u[O];if(I.cacheKey===S){R=I,++R.usedTimes;break}}return R===void 0&&(R=new wN(t,S,E,s),u.push(R)),R}function T(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:L}}function CN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function r(o){t.delete(o)}function i(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:r,update:i,dispose:s}}function RN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function y0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function S0(){const t=[];let e=0;const n=[],r=[],i=[];function s(){e=0,n.length=0,r.length=0,i.length=0}function o(d,h,p,v,g,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,v,g,m){const f=o(d,h,p,v,g,m);p.transmission>0?r.push(f):p.transparent===!0?i.push(f):n.push(f)}function l(d,h,p,v,g,m){const f=o(d,h,p,v,g,m);p.transmission>0?r.unshift(f):p.transparent===!0?i.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||RN),r.length>1&&r.sort(h||y0),i.length>1&&i.sort(h||y0)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function PN(){let t=new WeakMap;function e(r,i){const s=t.get(r);let o;return s===void 0?(o=new S0,t.set(r,[o])):i>=s.length?(o=new S0,s.push(o)):o=s[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function LN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new et};break;case"SpotLight":n={position:new $,direction:new $,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function DN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let NN=0;function IN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UN(t){const e=new LN,n=DN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new $);const i=new $,s=new Rt,o=new Rt;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,_=0,x=0,y=0,A=0,T=0,M=0;c.sort(IN);for(let E=0,S=c.length;E<S;E++){const R=c[E],O=R.color,k=R.intensity,I=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=O.r*k,d+=O.g*k,h+=O.b*k;else if(R.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(R.sh.coefficients[U],k);M++}else if(R.isDirectionalLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,D=n.get(R);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,r.directionalShadow[p]=D,r.directionalShadowMap[p]=q,r.directionalShadowMatrix[p]=R.shadow.matrix,_++}r.directional[p]=U,p++}else if(R.isSpotLight){const U=e.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(O).multiplyScalar(k),U.distance=I,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,r.spot[g]=U;const K=R.shadow;if(R.map&&(r.spotLightMap[A]=R.map,A++,K.updateMatrices(R),R.castShadow&&T++),r.spotLightMatrix[g]=K.matrix,R.castShadow){const D=n.get(R);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,r.spotShadow[g]=D,r.spotShadowMap[g]=q,y++}g++}else if(R.isRectAreaLight){const U=e.get(R);U.color.copy(O).multiplyScalar(k),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),r.rectArea[m]=U,m++}else if(R.isPointLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const K=R.shadow,D=n.get(R);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,r.pointShadow[v]=D,r.pointShadowMap[v]=q,r.pointShadowMatrix[v]=R.shadow.matrix,x++}r.point[v]=U,v++}else if(R.isHemisphereLight){const U=e.get(R);U.skyColor.copy(R.color).multiplyScalar(k),U.groundColor.copy(R.groundColor).multiplyScalar(k),r.hemi[f]=U,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=h;const L=r.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==_||L.numPointShadows!==x||L.numSpotShadows!==y||L.numSpotMaps!==A||L.numLightProbes!==M)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=m,r.point.length=v,r.hemi.length=f,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=y+A-T,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=M,L.directionalLength=p,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=_,L.numPointShadows=x,L.numSpotShadows=y,L.numSpotMaps=A,L.numLightProbes=M,r.version=NN++)}function l(c,u){let d=0,h=0,p=0,v=0,g=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const x=c[f];if(x.isDirectionalLight){const y=r.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=r.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=r.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=r.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=r.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:r}}function E0(t){const e=new UN(t),n=[],r=[];function i(u){c.camera=u,n.length=0,r.length=0}function s(u){n.push(u)}function o(u){r.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function FN(t){let e=new WeakMap;function n(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new E0(t),e.set(i,[a])):s>=o.length?(a=new E0(t),o.push(a)):a=o[s],a}function r(){e=new WeakMap}return{get:n,dispose:r}}const ON=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BN(t,e,n){let r=new qS;const i=new ht,s=new ht,o=new Ct,a=new dP({depthPacking:wR}),l=new fP,c={},u=n.maxTextureSize,d={[qi]:En,[En]:qi,[Wr]:Wr},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:ON,fragmentShader:kN}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Dr;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new qr(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=TS;let f=this.type;this.render=function(T,M,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),O=t.state;O.setBlending(zi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=f!==zr&&this.type===zr,I=f===zr&&this.type!==zr;for(let q=0,U=T.length;q<U;q++){const K=T[q],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const B=D.getFrameExtents();if(i.multiply(B),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/B.x),i.x=s.x*B.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/B.y),i.y=s.y*B.y,D.mapSize.y=s.y)),D.map===null||k===!0||I===!0){const re=this.type!==zr?{minFilter:fr,magFilter:fr}:{};D.map!==null&&D.map.dispose(),D.map=new Us(i.x,i.y,re),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Y=D.getViewportCount();for(let re=0;re<Y;re++){const oe=D.getViewport(re);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),O.viewport(o),D.updateMatrices(K,re),r=D.getFrustum(),y(M,L,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===zr&&_(D,L),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,R)};function _(T,M){const L=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Us(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(M,null,L,h,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(M,null,L,p,g,null)}function x(T,M,L,E){let S=null;const R=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const O=S.uuid,k=M.uuid;let I=c[O];I===void 0&&(I={},c[O]=I);let q=I[k];q===void 0&&(q=S.clone(),I[k]=q,M.addEventListener("dispose",A)),S=q}if(S.visible=M.visible,S.wireframe=M.wireframe,E===zr?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:d[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=t.properties.get(S);O.light=L}return S}function y(T,M,L,E,S){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===zr)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const k=e.update(T),I=T.material;if(Array.isArray(I)){const q=k.groups;for(let U=0,K=q.length;U<K;U++){const D=q[U],B=I[D.materialIndex];if(B&&B.visible){const Y=x(T,B,E,S);T.onBeforeShadow(t,T,M,L,k,Y,D),t.renderBufferDirect(L,null,k,Y,T,D),T.onAfterShadow(t,T,M,L,k,Y,D)}}}else if(I.visible){const q=x(T,I,E,S);T.onBeforeShadow(t,T,M,L,k,q,null),t.renderBufferDirect(L,null,k,q,T,null),T.onAfterShadow(t,T,M,L,k,q,null)}}const O=T.children;for(let k=0,I=O.length;k<I;k++)y(O[k],M,L,E,S)}function A(T){T.target.removeEventListener("dispose",A);for(const L in c){const E=c[L],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const zN={[yh]:Sh,[Eh]:Th,[wh]:bh,[Go]:Mh,[Sh]:yh,[Th]:Eh,[bh]:wh,[Mh]:Go};function VN(t,e){function n(){let F=!1;const me=new Ct;let Z=null;const te=new Ct(0,0,0,0);return{setMask:function(fe){Z!==fe&&!F&&(t.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){F=fe},setClear:function(fe,ve,ue,Ue,Ge){Ge===!0&&(fe*=Ue,ve*=Ue,ue*=Ue),me.set(fe,ve,ue,Ue),te.equals(me)===!1&&(t.clearColor(fe,ve,ue,Ue),te.copy(me))},reset:function(){F=!1,Z=null,te.set(-1,0,0,0)}}}function r(){let F=!1,me=!1,Z=null,te=null,fe=null;return{setReversed:function(ve){if(me!==ve){const ue=e.get("EXT_clip_control");ve?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),me=ve;const Ue=fe;fe=null,this.setClear(Ue)}},getReversed:function(){return me},setTest:function(ve){ve?ne(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(ve){Z!==ve&&!F&&(t.depthMask(ve),Z=ve)},setFunc:function(ve){if(me&&(ve=zN[ve]),te!==ve){switch(ve){case yh:t.depthFunc(t.NEVER);break;case Sh:t.depthFunc(t.ALWAYS);break;case Eh:t.depthFunc(t.LESS);break;case Go:t.depthFunc(t.LEQUAL);break;case wh:t.depthFunc(t.EQUAL);break;case Mh:t.depthFunc(t.GEQUAL);break;case Th:t.depthFunc(t.GREATER);break;case bh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ve}},setLocked:function(ve){F=ve},setClear:function(ve){fe!==ve&&(me&&(ve=1-ve),t.clearDepth(ve),fe=ve)},reset:function(){F=!1,Z=null,te=null,fe=null,me=!1}}}function i(){let F=!1,me=null,Z=null,te=null,fe=null,ve=null,ue=null,Ue=null,Ge=null;return{setTest:function(We){F||(We?ne(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(We){me!==We&&!F&&(t.stencilMask(We),me=We)},setFunc:function(We,yt,kt){(Z!==We||te!==yt||fe!==kt)&&(t.stencilFunc(We,yt,kt),Z=We,te=yt,fe=kt)},setOp:function(We,yt,kt){(ve!==We||ue!==yt||Ue!==kt)&&(t.stencilOp(We,yt,kt),ve=We,ue=yt,Ue=kt)},setLocked:function(We){F=We},setClear:function(We){Ge!==We&&(t.clearStencil(We),Ge=We)},reset:function(){F=!1,me=null,Z=null,te=null,fe=null,ve=null,ue=null,Ue=null,Ge=null}}}const s=new n,o=new r,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],v=null,g=!1,m=null,f=null,_=null,x=null,y=null,A=null,T=null,M=new et(0,0,0),L=0,E=!1,S=null,R=null,O=null,k=null,I=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),U=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),U=K>=2);let B=null,Y={};const re=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Ee=new Ct().fromArray(re),W=new Ct().fromArray(oe);function ie(F,me,Z,te){const fe=new Uint8Array(4),ve=t.createTexture();t.bindTexture(F,ve),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ue=0;ue<Z;ue++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(me+ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return ve}const he={};he[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(Go),qe(!1),Ke(bv),ne(t.CULL_FACE),N(zi);function ne(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function Ce(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function $e(F,me){return d[F]!==me?(t.bindFramebuffer(F,me),d[F]=me,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=me),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=me),!0):!1}function Re(F,me){let Z=p,te=!1;if(F){Z=h.get(me),Z===void 0&&(Z=[],h.set(me,Z));const fe=F.textures;if(Z.length!==fe.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,ue=fe.length;ve<ue;ve++)Z[ve]=t.COLOR_ATTACHMENT0+ve;Z.length=fe.length,te=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,te=!0);te&&t.drawBuffers(Z)}function ot(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const at={[hs]:t.FUNC_ADD,[qC]:t.FUNC_SUBTRACT,[KC]:t.FUNC_REVERSE_SUBTRACT};at[QC]=t.MIN,at[ZC]=t.MAX;const Be={[JC]:t.ZERO,[eR]:t.ONE,[tR]:t.SRC_COLOR,[_h]:t.SRC_ALPHA,[aR]:t.SRC_ALPHA_SATURATE,[sR]:t.DST_COLOR,[rR]:t.DST_ALPHA,[nR]:t.ONE_MINUS_SRC_COLOR,[xh]:t.ONE_MINUS_SRC_ALPHA,[oR]:t.ONE_MINUS_DST_COLOR,[iR]:t.ONE_MINUS_DST_ALPHA,[lR]:t.CONSTANT_COLOR,[cR]:t.ONE_MINUS_CONSTANT_COLOR,[uR]:t.CONSTANT_ALPHA,[dR]:t.ONE_MINUS_CONSTANT_ALPHA};function N(F,me,Z,te,fe,ve,ue,Ue,Ge,We){if(F===zi){g===!0&&(Ce(t.BLEND),g=!1);return}if(g===!1&&(ne(t.BLEND),g=!0),F!==YC){if(F!==m||We!==E){if((f!==hs||y!==hs)&&(t.blendEquation(t.FUNC_ADD),f=hs,y=hs),We)switch(F){case wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mu:t.blendFunc(t.ONE,t.ONE);break;case Av:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Av:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,x=null,A=null,T=null,M.set(0,0,0),L=0,m=F,E=We}return}fe=fe||me,ve=ve||Z,ue=ue||te,(me!==f||fe!==y)&&(t.blendEquationSeparate(at[me],at[fe]),f=me,y=fe),(Z!==_||te!==x||ve!==A||ue!==T)&&(t.blendFuncSeparate(Be[Z],Be[te],Be[ve],Be[ue]),_=Z,x=te,A=ve,T=ue),(Ue.equals(M)===!1||Ge!==L)&&(t.blendColor(Ue.r,Ue.g,Ue.b,Ge),M.copy(Ue),L=Ge),m=F,E=!1}function $t(F,me){F.side===Wr?Ce(t.CULL_FACE):ne(t.CULL_FACE);let Z=F.side===En;me&&(Z=!Z),qe(Z),F.blending===wo&&F.transparent===!1?N(zi):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const te=F.stencilWrite;a.setTest(te),te&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function Ke(F){F!==jC?(ne(t.CULL_FACE),F!==R&&(F===bv?t.cullFace(t.BACK):F===XC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),R=F}function be(F){F!==O&&(U&&t.lineWidth(F),O=F)}function nt(F,me,Z){F?(ne(t.POLYGON_OFFSET_FILL),(k!==me||I!==Z)&&(t.polygonOffset(me,Z),k=me,I=Z)):Ce(t.POLYGON_OFFSET_FILL)}function Ae(F){F?ne(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function C(F){F===void 0&&(F=t.TEXTURE0+q-1),B!==F&&(t.activeTexture(F),B=F)}function w(F,me,Z){Z===void 0&&(B===null?Z=t.TEXTURE0+q-1:Z=B);let te=Y[Z];te===void 0&&(te={type:void 0,texture:void 0},Y[Z]=te),(te.type!==F||te.texture!==me)&&(B!==Z&&(t.activeTexture(Z),B=Z),t.bindTexture(F,me||he[F]),te.type=F,te.texture=me)}function G(){const F=Y[B];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{t.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{t.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{t.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{t.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{t.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(F){Ee.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ee.copy(F))}function ye(F){W.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),W.copy(F))}function He(F,me){let Z=c.get(me);Z===void 0&&(Z=new WeakMap,c.set(me,Z));let te=Z.get(F);te===void 0&&(te=t.getUniformBlockIndex(me,F.name),Z.set(F,te))}function ze(F,me){const te=c.get(me).get(F);l.get(me)!==te&&(t.uniformBlockBinding(me,te,F.__bindingPointIndex),l.set(me,te))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},B=null,Y={},d={},h=new WeakMap,p=[],v=null,g=!1,m=null,f=null,_=null,x=null,y=null,A=null,T=null,M=new et(0,0,0),L=0,E=!1,S=null,R=null,O=null,k=null,I=null,Ee.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:Ce,bindFramebuffer:$e,drawBuffers:Re,useProgram:ot,setBlending:N,setMaterial:$t,setFlipSided:qe,setCullFace:Ke,setLineWidth:be,setPolygonOffset:nt,setScissorTest:Ae,activeTexture:C,bindTexture:w,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:xe,texImage3D:Ie,updateUBOMapping:He,uniformBlockBinding:ze,texStorage2D:Pe,texStorage3D:le,texSubImage2D:Q,texSubImage3D:Me,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ne,scissor:Le,viewport:ye,reset:dt}}function HN(t,e,n,r,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return p?new OffscreenCanvas(C,w):_u("canvas")}function g(C,w,G){let ee=1;const se=Ae(C);if((se.width>G||se.height>G)&&(ee=G/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(ee*se.width),Me=Math.floor(ee*se.height);d===void 0&&(d=v(Q,Me));const ge=w?v(Q,Me):d;return ge.width=Q,ge.height=Me,ge.getContext("2d").drawImage(C,0,0,Q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Me+")."),ge}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){t.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(C,w,G,ee,se=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=w;if(w===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8)),w===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),w===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8)),w===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),w===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),G===t.UNSIGNED_INT&&(Q=t.RGB32UI),G===t.BYTE&&(Q=t.RGB8I),G===t.SHORT&&(Q=t.RGB16I),G===t.INT&&(Q=t.RGB32I)),w===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),G===t.UNSIGNED_INT&&(Q=t.RGBA32UI),G===t.BYTE&&(Q=t.RGBA8I),G===t.SHORT&&(Q=t.RGBA16I),G===t.INT&&(Q=t.RGBA32I)),w===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),w===t.RGBA){const Me=se?gu:st.getTransfer(ee);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=Me===ft?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(C,w){let G;return C?w===null||w===Is||w===tl?G=t.DEPTH24_STENCIL8:w===$r?G=t.DEPTH32F_STENCIL8:w===el&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Is||w===tl?G=t.DEPTH_COMPONENT24:w===$r?G=t.DEPTH_COMPONENT32F:w===el&&(G=t.DEPTH_COMPONENT16),G}function A(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==fr&&C.minFilter!==Tr?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function T(C){const w=C.target;w.removeEventListener("dispose",T),L(w),w.isVideoTexture&&u.delete(w)}function M(C){const w=C.target;w.removeEventListener("dispose",M),S(w)}function L(C){const w=r.get(C);if(w.__webglInit===void 0)return;const G=C.source,ee=h.get(G);if(ee){const se=ee[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&E(C),Object.keys(ee).length===0&&h.delete(G)}r.remove(C)}function E(C){const w=r.get(C);t.deleteTexture(w.__webglTexture);const G=C.source,ee=h.get(G);delete ee[w.__cacheKey],o.memory.textures--}function S(C){const w=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let se=0;se<w.__webglFramebuffer[ee].length;se++)t.deleteFramebuffer(w.__webglFramebuffer[ee][se]);else t.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)t.deleteFramebuffer(w.__webglFramebuffer[ee]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=C.textures;for(let ee=0,se=G.length;ee<se;ee++){const Q=r.get(G[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),r.remove(G[ee])}r.remove(C)}let R=0;function O(){R=0}function k(){const C=R;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function I(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function q(C,w){const G=r.get(C);if(C.isVideoTexture&&be(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(G,C,w);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+w)}function U(C,w){const G=r.get(C);if(C.version>0&&G.__version!==C.version){W(G,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+w)}function K(C,w){const G=r.get(C);if(C.version>0&&G.__version!==C.version){W(G,C,w);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+w)}function D(C,w){const G=r.get(C);if(C.version>0&&G.__version!==C.version){ie(G,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+w)}const B={[Rh]:t.REPEAT,[_s]:t.CLAMP_TO_EDGE,[Ph]:t.MIRRORED_REPEAT},Y={[fr]:t.NEAREST,[SR]:t.NEAREST_MIPMAP_NEAREST,[jl]:t.NEAREST_MIPMAP_LINEAR,[Tr]:t.LINEAR,[Id]:t.LINEAR_MIPMAP_NEAREST,[xs]:t.LINEAR_MIPMAP_LINEAR},re={[bR]:t.NEVER,[DR]:t.ALWAYS,[AR]:t.LESS,[FS]:t.LEQUAL,[CR]:t.EQUAL,[LR]:t.GEQUAL,[RR]:t.GREATER,[PR]:t.NOTEQUAL};function oe(C,w){if(w.type===$r&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Tr||w.magFilter===Id||w.magFilter===jl||w.magFilter===xs||w.minFilter===Tr||w.minFilter===Id||w.minFilter===jl||w.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,B[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,B[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,B[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Y[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===fr||w.minFilter!==jl&&w.minFilter!==xs||w.type===$r&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ee(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",T));const ee=w.source;let se=h.get(ee);se===void 0&&(se={},h.set(ee,se));const Q=I(w);if(Q!==C.__cacheKey){se[Q]===void 0&&(se[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[Q].usedTimes++;const Me=se[C.__cacheKey];Me!==void 0&&(se[C.__cacheKey].usedTimes--,Me.usedTimes===0&&E(w)),C.__cacheKey=Q,C.__webglTexture=se[Q].texture}return G}function W(C,w,G){let ee=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=t.TEXTURE_3D);const se=Ee(C,w),Q=w.source;n.bindTexture(ee,C.__webglTexture,t.TEXTURE0+G);const Me=r.get(Q);if(Q.version!==Me.__version||se===!0){n.activeTexture(t.TEXTURE0+G);const ge=st.getPrimaries(st.workingColorSpace),Ne=w.colorSpace===wi?null:st.getPrimaries(w.colorSpace),Pe=w.colorSpace===wi||ge===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let le=g(w.image,!1,i.maxTextureSize);le=nt(w,le);const xe=s.convert(w.format,w.colorSpace),Ie=s.convert(w.type);let Le=x(w.internalFormat,xe,Ie,w.colorSpace,w.isVideoTexture);oe(ee,w);let ye;const He=w.mipmaps,ze=w.isVideoTexture!==!0,dt=Me.__version===void 0||se===!0,F=Q.dataReady,me=A(w,le);if(w.isDepthTexture)Le=y(w.format===rl,w.type),dt&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Le,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Le,le.width,le.height,0,xe,Ie,null));else if(w.isDataTexture)if(He.length>0){ze&&dt&&n.texStorage2D(t.TEXTURE_2D,me,Le,He[0].width,He[0].height);for(let Z=0,te=He.length;Z<te;Z++)ye=He[Z],ze?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,xe,Ie,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Le,ye.width,ye.height,0,xe,Ie,ye.data);w.generateMipmaps=!1}else ze?(dt&&n.texStorage2D(t.TEXTURE_2D,me,Le,le.width,le.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,xe,Ie,le.data)):n.texImage2D(t.TEXTURE_2D,0,Le,le.width,le.height,0,xe,Ie,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Le,He[0].width,He[0].height,le.depth);for(let Z=0,te=He.length;Z<te;Z++)if(ye=He[Z],w.format!==cr)if(xe!==null)if(ze){if(F)if(w.layerUpdates.size>0){const fe=Zv(ye.width,ye.height,w.format,w.type);for(const ve of w.layerUpdates){const ue=ye.data.subarray(ve*fe/ye.data.BYTES_PER_ELEMENT,(ve+1)*fe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,ve,ye.width,ye.height,1,xe,ue)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,le.depth,xe,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Le,ye.width,ye.height,le.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,le.depth,xe,Ie,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Le,ye.width,ye.height,le.depth,0,xe,Ie,ye.data)}else{ze&&dt&&n.texStorage2D(t.TEXTURE_2D,me,Le,He[0].width,He[0].height);for(let Z=0,te=He.length;Z<te;Z++)ye=He[Z],w.format!==cr?xe!==null?ze?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,xe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,xe,Ie,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Le,ye.width,ye.height,0,xe,Ie,ye.data)}else if(w.isDataArrayTexture)if(ze){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Le,le.width,le.height,le.depth),F)if(w.layerUpdates.size>0){const Z=Zv(le.width,le.height,w.format,w.type);for(const te of w.layerUpdates){const fe=le.data.subarray(te*Z/le.data.BYTES_PER_ELEMENT,(te+1)*Z/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,xe,Ie,fe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Ie,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,xe,Ie,le.data);else if(w.isData3DTexture)ze?(dt&&n.texStorage3D(t.TEXTURE_3D,me,Le,le.width,le.height,le.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Ie,le.data)):n.texImage3D(t.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,xe,Ie,le.data);else if(w.isFramebufferTexture){if(dt)if(ze)n.texStorage2D(t.TEXTURE_2D,me,Le,le.width,le.height);else{let Z=le.width,te=le.height;for(let fe=0;fe<me;fe++)n.texImage2D(t.TEXTURE_2D,fe,Le,Z,te,0,xe,Ie,null),Z>>=1,te>>=1}}else if(He.length>0){if(ze&&dt){const Z=Ae(He[0]);n.texStorage2D(t.TEXTURE_2D,me,Le,Z.width,Z.height)}for(let Z=0,te=He.length;Z<te;Z++)ye=He[Z],ze?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,xe,Ie,ye):n.texImage2D(t.TEXTURE_2D,Z,Le,xe,Ie,ye);w.generateMipmaps=!1}else if(ze){if(dt){const Z=Ae(le);n.texStorage2D(t.TEXTURE_2D,me,Le,Z.width,Z.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ie,le)}else n.texImage2D(t.TEXTURE_2D,0,Le,xe,Ie,le);m(w)&&f(ee),Me.__version=Q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ie(C,w,G){if(w.image.length!==6)return;const ee=Ee(C,w),se=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const Q=r.get(se);if(se.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const Me=st.getPrimaries(st.workingColorSpace),ge=w.colorSpace===wi?null:st.getPrimaries(w.colorSpace),Ne=w.colorSpace===wi||Me===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!Pe&&!le?xe[te]=g(w.image[te],!0,i.maxCubemapSize):xe[te]=le?w.image[te].image:w.image[te],xe[te]=nt(w,xe[te]);const Ie=xe[0],Le=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),He=x(w.internalFormat,Le,ye,w.colorSpace),ze=w.isVideoTexture!==!0,dt=Q.__version===void 0||ee===!0,F=se.dataReady;let me=A(w,Ie);oe(t.TEXTURE_CUBE_MAP,w);let Z;if(Pe){ze&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,He,Ie.width,Ie.height);for(let te=0;te<6;te++){Z=xe[te].mipmaps;for(let fe=0;fe<Z.length;fe++){const ve=Z[fe];w.format!==cr?Le!==null?ze?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,ve.width,ve.height,Le,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,He,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,ve.width,ve.height,Le,ye,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,He,ve.width,ve.height,0,Le,ye,ve.data)}}}else{if(Z=w.mipmaps,ze&&dt){Z.length>0&&me++;const te=Ae(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,He,te.width,te.height)}for(let te=0;te<6;te++)if(le){ze?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,Le,ye,xe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,xe[te].width,xe[te].height,0,Le,ye,xe[te].data);for(let fe=0;fe<Z.length;fe++){const ue=Z[fe].image[te].image;ze?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,ue.width,ue.height,Le,ye,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,He,ue.width,ue.height,0,Le,ye,ue.data)}}else{ze?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,ye,xe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Le,ye,xe[te]);for(let fe=0;fe<Z.length;fe++){const ve=Z[fe];ze?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,Le,ye,ve.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,He,Le,ye,ve.image[te])}}}m(w)&&f(t.TEXTURE_CUBE_MAP),Q.__version=se.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function he(C,w,G,ee,se,Q){const Me=s.convert(G.format,G.colorSpace),ge=s.convert(G.type),Ne=x(G.internalFormat,Me,ge,G.colorSpace),Pe=r.get(w),le=r.get(G);if(le.__renderTarget=w,!Pe.__hasExternalTextures){const xe=Math.max(1,w.width>>Q),Ie=Math.max(1,w.height>>Q);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,Q,Ne,xe,Ie,w.depth,0,Me,ge,null):n.texImage2D(se,Q,Ne,xe,Ie,0,Me,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ke(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,se,le.__webglTexture,0,qe(w)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,se,le.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(C,w,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer){const ee=w.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,Q=y(w.stencilBuffer,se),Me=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=qe(w);Ke(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,Q,w.width,w.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,Q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Q,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,C)}else{const ee=w.textures;for(let se=0;se<ee.length;se++){const Q=ee[se],Me=s.convert(Q.format,Q.colorSpace),ge=s.convert(Q.type),Ne=x(Q.internalFormat,Me,ge,Q.colorSpace),Pe=qe(w);G&&Ke(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Ne,w.width,w.height):Ke(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,Ne,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Ne,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=r.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const se=ee.__webglTexture,Q=qe(w);if(w.depthTexture.format===nl)Ke(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(w.depthTexture.format===rl)Ke(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function $e(C){const w=r.get(C),G=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=ee}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const ee=C.texture.mipmaps;ee&&ee.length>0?Ce(w.__webglFramebuffer[0],C):Ce(w.__webglFramebuffer,C)}else if(G){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=t.createRenderbuffer(),ne(w.__webglDepthbuffer[ee],C,!1);else{const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}else{const ee=C.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ne(w.__webglDepthbuffer,C,!1);else{const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(C,w,G){const ee=r.get(C);w!==void 0&&he(ee.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&$e(C)}function ot(C){const w=C.texture,G=r.get(C),ee=r.get(w);C.addEventListener("dispose",M);const se=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=w.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)G.__webglFramebuffer[ge][Ne]=t.createFramebuffer()}else G.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)G.__webglFramebuffer[ge]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ge=0,Ne=se.length;ge<Ne;ge++){const Pe=r.get(se[ge]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ke(C)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<se.length;ge++){const Ne=se[ge];G.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const Pe=s.convert(Ne.format,Ne.colorSpace),le=s.convert(Ne.type),xe=x(Ne.internalFormat,Pe,le,Ne.colorSpace,C.isXRRenderTarget===!0),Ie=qe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,xe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(t.TEXTURE_CUBE_MAP,w);for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)he(G.__webglFramebuffer[ge][Ne],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne);else he(G.__webglFramebuffer[ge],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ge=0,Ne=se.length;ge<Ne;ge++){const Pe=se[ge],le=r.get(Pe);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),oe(t.TEXTURE_2D,Pe),he(G.__webglFramebuffer,C,Pe,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),m(Pe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,ee.__webglTexture),oe(ge,w),w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)he(G.__webglFramebuffer[Ne],C,w,t.COLOR_ATTACHMENT0,ge,Ne);else he(G.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,ge,0);m(w)&&f(ge),n.unbindTexture()}C.depthBuffer&&$e(C)}function at(C){const w=C.textures;for(let G=0,ee=w.length;G<ee;G++){const se=w[G];if(m(se)){const Q=_(C),Me=r.get(se).__webglTexture;n.bindTexture(Q,Me),f(Q),n.unbindTexture()}}}const Be=[],N=[];function $t(C){if(C.samples>0){if(Ke(C)===!1){const w=C.textures,G=C.width,ee=C.height;let se=t.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=r.get(C),ge=w.length>1;if(ge)for(let Pe=0;Pe<w.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ne=C.texture.mipmaps;Ne&&Ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Pe]);const le=r.get(w[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}t.blitFramebuffer(0,0,G,ee,0,0,G,ee,se,t.NEAREST),l===!0&&(Be.length=0,N.length=0,Be.push(t.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Be.push(Q),N.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Pe=0;Pe<w.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Pe]);const le=r.get(w[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function qe(C){return Math.min(i.maxSamples,C.samples)}function Ke(C){const w=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function nt(C,w){const G=C.colorSpace,ee=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Xo&&G!==wi&&(st.getTransfer(G)===ft?(ee!==cr||se!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=D,this.rebindTextures=Re,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ke}function GN(t,e){function n(r,i=wi){let s;const o=st.getTransfer(i);if(r===ii)return t.UNSIGNED_BYTE;if(r===Sm)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Em)return t.UNSIGNED_SHORT_5_5_5_1;if(r===PS)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===CS)return t.BYTE;if(r===RS)return t.SHORT;if(r===el)return t.UNSIGNED_SHORT;if(r===ym)return t.INT;if(r===Is)return t.UNSIGNED_INT;if(r===$r)return t.FLOAT;if(r===pl)return t.HALF_FLOAT;if(r===LS)return t.ALPHA;if(r===DS)return t.RGB;if(r===cr)return t.RGBA;if(r===nl)return t.DEPTH_COMPONENT;if(r===rl)return t.DEPTH_STENCIL;if(r===NS)return t.RED;if(r===wm)return t.RED_INTEGER;if(r===IS)return t.RG;if(r===Mm)return t.RG_INTEGER;if(r===Tm)return t.RGBA_INTEGER;if(r===Pc||r===Lc||r===Dc||r===Nc)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lh||r===Dh||r===Nh||r===Ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh||r===Fh||r===Oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Uh||r===Fh)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Oh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kh||r===Bh||r===zh||r===Vh||r===Hh||r===Gh||r===Wh||r===jh||r===Xh||r===$h||r===Yh||r===qh||r===Kh||r===Qh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===kh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$h)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ic||r===Zh||r===Jh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Ic)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===US||r===ep||r===tp||r===np)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Ic)return s.COMPRESSED_RED_RGTC1_EXT;if(r===ep)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===np)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tl?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}const WN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new wn,s=e.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ki({vertexShader:WN,fragmentShader:jN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qr(new Ku(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $N extends ea{constructor(e,n){super();const r=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const g=new XN,m=n.getContextAttributes();let f=null,_=null;const x=[],y=[],A=new ht;let T=null;const M=new Dn;M.viewport=new Ct;const L=new Dn;L.viewport=new Ct;const E=[M,L],S=new pP;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=x[W];return ie===void 0&&(ie=new tf,x[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=x[W];return ie===void 0&&(ie=new tf,x[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=x[W];return ie===void 0&&(ie=new tf,x[W]=ie),ie.getHandSpace()};function k(W){const ie=y.indexOf(W.inputSource);if(ie===-1)return;const he=x[ie];he!==void 0&&(he.update(W.inputSource,W.frame,c||o),he.dispatchEvent({type:W.type,data:W.inputSource}))}function I(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",q);for(let W=0;W<x.length;W++){const ie=y[W];ie!==null&&(y[W]=null,x[W].disconnect(ie))}R=null,O=null,g.reset(),e.setRenderTarget(f),p=null,h=null,d=null,i=null,_=null,Ee.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",I),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ne=null,Ce=null;m.depth&&(Ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=m.stencil?rl:nl,ne=m.stencil?tl:Is);const $e={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};d=new XRWebGLBinding(i,n),h=d.createProjectionLayer($e),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Us(h.textureWidth,h.textureHeight,{format:cr,type:ii,depthTexture:new QS(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,n,he),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Us(p.framebufferWidth,p.framebufferHeight,{format:cr,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ee.setContext(i),Ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(W){for(let ie=0;ie<W.removed.length;ie++){const he=W.removed[ie],ne=y.indexOf(he);ne>=0&&(y[ne]=null,x[ne].disconnect(he))}for(let ie=0;ie<W.added.length;ie++){const he=W.added[ie];let ne=y.indexOf(he);if(ne===-1){for(let $e=0;$e<x.length;$e++)if($e>=y.length){y.push(he),ne=$e;break}else if(y[$e]===null){y[$e]=he,ne=$e;break}if(ne===-1)break}const Ce=x[ne];Ce&&Ce.connect(he)}}const U=new $,K=new $;function D(W,ie,he){U.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);const ne=U.distanceTo(K),Ce=ie.projectionMatrix.elements,$e=he.projectionMatrix.elements,Re=Ce[14]/(Ce[10]-1),ot=Ce[14]/(Ce[10]+1),at=(Ce[9]+1)/Ce[5],Be=(Ce[9]-1)/Ce[5],N=(Ce[8]-1)/Ce[0],$t=($e[8]+1)/$e[0],qe=Re*N,Ke=Re*$t,be=ne/(-N+$t),nt=be*-N;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(nt),W.translateZ(be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ce[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=Re+be,C=ot+be,w=qe-nt,G=Ke+(ne-nt),ee=at*ot/C*Ae,se=Be*ot/C*Ae;W.projectionMatrix.makePerspective(w,G,ee,se,Ae,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function B(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let ie=W.near,he=W.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(he=g.depthFar)),S.near=L.near=M.near=ie,S.far=L.far=M.far=he,(R!==S.near||O!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,O=S.far),M.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,S.layers.mask=M.layers.mask|L.layers.mask;const ne=W.parent,Ce=S.cameras;B(S,ne);for(let $e=0;$e<Ce.length;$e++)B(Ce[$e],ne);Ce.length===2?D(S,M,L):S.projectionMatrix.copy(M.projectionMatrix),Y(W,S,ne)};function Y(W,ie,he){he===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(he.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=rp*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let re=null;function oe(W,ie){if(u=ie.getViewerPose(c||o),v=ie,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ne=!1;he.length!==S.cameras.length&&(S.cameras.length=0,ne=!0);for(let Re=0;Re<he.length;Re++){const ot=he[Re];let at=null;if(p!==null)at=p.getViewport(ot);else{const N=d.getViewSubImage(h,ot);at=N.viewport,Re===0&&(e.setRenderTargetTextures(_,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(_))}let Be=E[Re];Be===void 0&&(Be=new Dn,Be.layers.enable(Re),Be.viewport=new Ct,E[Re]=Be),Be.matrix.fromArray(ot.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ot.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(at.x,at.y,at.width,at.height),Re===0&&(S.matrix.copy(Be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ne===!0&&S.cameras.push(Be)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const Re=d.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&g.init(e,Re,i.renderState)}}for(let he=0;he<x.length;he++){const ne=y[he],Ce=x[he];ne!==null&&Ce!==void 0&&Ce.update(ne,ie,c||o)}re&&re(W,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ee=new JS;Ee.setAnimationLoop(oe),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}}const as=new si,YN=new Rt;function qN(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,jS(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,_,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===En&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===En&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(YN.makeRotationFromEuler(as)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function KN(t,e,n,r){let i={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;r.uniformBlockBinding(_,y)}function c(_,x){let y=i[_.id];y===void 0&&(v(_),y=u(_),i[_.id]=y,_.addEventListener("dispose",m));const A=x.program;r.updateUBOMapping(_,A);const T=e.render.frame;s[_.id]!==T&&(h(_),s[_.id]=T)}function u(_){const x=d();_.__bindingPointIndex=x;const y=t.createBuffer(),A=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=i[_.id],y=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,M=y.length;T<M;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,S=L.length;E<S;E++){const R=L[E];if(p(R,T,E,A)===!0){const O=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let I=0;for(let q=0;q<k.length;q++){const U=k[q],K=g(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,O+I,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,y,A){const T=_.value,M=x+"_"+y;if(A[M]===void 0)return typeof T=="number"||typeof T=="boolean"?A[M]=T:A[M]=T.clone(),!0;{const L=A[M];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[M]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function v(_){const x=_.uniforms;let y=0;const A=16;for(let M=0,L=x.length;M<L;M++){const E=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,R=E.length;S<R;S++){const O=E[S],k=Array.isArray(O.value)?O.value:[O.value];for(let I=0,q=k.length;I<q;I++){const U=k[I],K=g(U),D=y%A,B=D%K.boundary,Y=D+B;y+=B,Y!==0&&A-Y<K.storage&&(y+=A-Y),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=K.storage}}}const T=y%A;return T>0&&(y+=A-T),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const _ in i)t.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class iE{constructor(e={}){const{canvas:n=UR(),context:r=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const _=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=Gn;let T=0,M=0,L=null,E=-1,S=null;const R=new Ct,O=new Ct;let k=null;const I=new et(0);let q=0,U=n.width,K=n.height,D=1,B=null,Y=null;const re=new Ct(0,0,U,K),oe=new Ct(0,0,U,K);let Ee=!1;const W=new qS;let ie=!1,he=!1;const ne=new Rt,Ce=new Rt,$e=new $,Re=new Ct,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Be(){return L===null?D:1}let N=r;function $t(b,V){return n.getContext(b,V)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xm}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",ve,!1),N===null){const V="webgl2";if(N=$t(V,b),N===null)throw $t(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let qe,Ke,be,nt,Ae,C,w,G,ee,se,Q,Me,ge,Ne,Pe,le,xe,Ie,Le,ye,He,ze,dt,F;function me(){qe=new aD(N),qe.init(),ze=new GN(N,qe),Ke=new eD(N,qe,e,ze),be=new VN(N,qe),Ke.reverseDepthBuffer&&h&&be.buffers.depth.setReversed(!0),nt=new uD(N),Ae=new CN,C=new HN(N,qe,be,Ae,Ke,ze,nt),w=new nD(y),G=new oD(y),ee=new gP(N),dt=new ZL(N,ee),se=new lD(N,ee,nt,dt),Q=new fD(N,se,ee,nt),Le=new dD(N,Ke,C),le=new tD(Ae),Me=new AN(y,w,G,qe,Ke,dt,le),ge=new qN(y,Ae),Ne=new PN,Pe=new FN(qe),Ie=new QL(y,w,G,be,Q,p,l),xe=new BN(y,Q,Ke),F=new KN(N,nt,Ke,be),ye=new JL(N,qe,nt),He=new cD(N,qe,nt),nt.programs=Me.programs,y.capabilities=Ke,y.extensions=qe,y.properties=Ae,y.renderLists=Ne,y.shadowMap=xe,y.state=be,y.info=nt}me();const Z=new $N(y,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(b){b!==void 0&&(D=b,this.setSize(U,K,!1))},this.getSize=function(b){return b.set(U,K)},this.setSize=function(b,V,j=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,K=V,n.width=Math.floor(b*D),n.height=Math.floor(V*D),j===!0&&(n.style.width=b+"px",n.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(U*D,K*D).floor()},this.setDrawingBufferSize=function(b,V,j){U=b,K=V,D=j,n.width=Math.floor(b*j),n.height=Math.floor(V*j),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,V,j,X){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,V,j,X),be.viewport(R.copy(re).multiplyScalar(D).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,V,j,X){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,V,j,X),be.scissor(O.copy(oe).multiplyScalar(D).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(b){be.setScissorTest(Ee=b)},this.setOpaqueSort=function(b){B=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,j=!0){let X=0;if(b){let H=!1;if(L!==null){const ce=L.texture.format;H=ce===Tm||ce===Mm||ce===wm}if(H){const ce=L.texture.type,_e=ce===ii||ce===Is||ce===el||ce===tl||ce===Sm||ce===Em,we=Ie.getClearColor(),Te=Ie.getClearAlpha(),ke=we.r,Oe=we.g,De=we.b;_e?(v[0]=ke,v[1]=Oe,v[2]=De,v[3]=Te,N.clearBufferuiv(N.COLOR,0,v)):(g[0]=ke,g[1]=Oe,g[2]=De,g[3]=Te,N.clearBufferiv(N.COLOR,0,g))}else X|=N.COLOR_BUFFER_BIT}V&&(X|=N.DEPTH_BUFFER_BIT),j&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Ie.dispose(),Ne.dispose(),Pe.dispose(),Ae.dispose(),w.dispose(),G.dispose(),Q.dispose(),dt.dispose(),F.dispose(),Me.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",vr),Z.removeEventListener("sessionend",hn),Yt.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=nt.autoReset,V=xe.enabled,j=xe.autoUpdate,X=xe.needsUpdate,H=xe.type;me(),nt.autoReset=b,xe.enabled=V,xe.autoUpdate=j,xe.needsUpdate=X,xe.type=H}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ue(b){const V=b.target;V.removeEventListener("dispose",ue),Ue(V)}function Ue(b){Ge(b),Ae.remove(b)}function Ge(b){const V=Ae.get(b).programs;V!==void 0&&(V.forEach(function(j){Me.releaseProgram(j)}),b.isShaderMaterial&&Me.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,j,X,H,ce){V===null&&(V=ot);const _e=H.isMesh&&H.matrixWorld.determinant()<0,we=sE(b,V,j,X,H);be.setMaterial(X,_e);let Te=j.index,ke=1;if(X.wireframe===!0){if(Te=se.getWireframeAttribute(j),Te===void 0)return;ke=2}const Oe=j.drawRange,De=j.attributes.position;let Je=Oe.start*ke,lt=(Oe.start+Oe.count)*ke;ce!==null&&(Je=Math.max(Je,ce.start*ke),lt=Math.min(lt,(ce.start+ce.count)*ke)),Te!==null?(Je=Math.max(Je,0),lt=Math.min(lt,Te.count)):De!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,De.count));const Pt=lt-Je;if(Pt<0||Pt===1/0)return;dt.setup(H,X,we,j,Te);let Mt,rt=ye;if(Te!==null&&(Mt=ee.get(Te),rt=He,rt.setIndex(Mt)),H.isMesh)X.wireframe===!0?(be.setLineWidth(X.wireframeLinewidth*Be()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(H.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),be.setLineWidth(Fe*Be()),H.isLineSegments?rt.setMode(N.LINES):H.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else H.isPoints?rt.setMode(N.POINTS):H.isSprite&&rt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Fc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Fe=H._multiDrawStarts,Ht=H._multiDrawCounts,ct=H._multiDrawCount,Kn=Te?ee.get(Te).bytesPerElement:1,ks=Ae.get(X).currentProgram.getUniforms();for(let An=0;An<ct;An++)ks.setValue(N,"_gl_DrawID",An),rt.render(Fe[An]/Kn,Ht[An])}else if(H.isInstancedMesh)rt.renderInstances(Je,Pt,H.count);else if(j.isInstancedBufferGeometry){const Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ht=Math.min(j.instanceCount,Fe);rt.renderInstances(Je,Pt,Ht)}else rt.render(Je,Pt)};function We(b,V,j){b.transparent===!0&&b.side===Wr&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,Sl(b,V,j),b.side=qi,b.needsUpdate=!0,Sl(b,V,j),b.side=Wr):Sl(b,V,j)}this.compile=function(b,V,j=null){j===null&&(j=b),f=Pe.get(j),f.init(V),x.push(f),j.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),b!==j&&b.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const X=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ce=H.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const we=ce[_e];We(we,j,H),X.add(we)}else We(ce,j,H),X.add(ce)}),f=x.pop(),X},this.compileAsync=function(b,V,j=null){const X=this.compile(b,V,j);return new Promise(H=>{function ce(){if(X.forEach(function(_e){Ae.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){H(b);return}setTimeout(ce,10)}qe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let yt=null;function kt(b){yt&&yt(b)}function vr(){Yt.stop()}function hn(){Yt.start()}const Yt=new JS;Yt.setAnimationLoop(kt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(b){yt=b,Z.setAnimationLoop(b),b===null?Yt.stop():Yt.start()},Z.addEventListener("sessionstart",vr),Z.addEventListener("sessionend",hn),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(V),V=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,V,L),f=Pe.get(b,x.length),f.init(V),x.push(f),Ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),W.setFromProjectionMatrix(Ce),he=this.localClippingEnabled,ie=le.init(this.clippingPlanes,he),m=Ne.get(b,_.length),m.init(),_.push(m),Z.enabled===!0&&Z.isPresenting===!0){const ce=y.xr.getDepthSensingMesh();ce!==null&&Zu(ce,V,-1/0,y.sortObjects)}Zu(b,V,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(B,Y),at=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,at&&Ie.addToRenderList(m,b),this.info.render.frame++,ie===!0&&le.beginShadows();const j=f.state.shadowsArray;xe.render(j,b,V),ie===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,H=m.transmissive;if(f.setupLights(),V.isArrayCamera){const ce=V.cameras;if(H.length>0)for(let _e=0,we=ce.length;_e<we;_e++){const Te=ce[_e];Pm(X,H,b,Te)}at&&Ie.render(b);for(let _e=0,we=ce.length;_e<we;_e++){const Te=ce[_e];Rm(m,b,Te,Te.viewport)}}else H.length>0&&Pm(X,H,b,V),at&&Ie.render(b),Rm(m,b,V);L!==null&&M===0&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(y,b,V),dt.resetDefaultState(),E=-1,S=null,x.pop(),x.length>0?(f=x[x.length-1],ie===!0&&le.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Zu(b,V,j,X){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){X&&Re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ce);const _e=Q.update(b),we=b.material;we.visible&&m.push(b,_e,we,j,Re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const _e=Q.update(b),we=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Re.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Re.copy(_e.boundingSphere.center)),Re.applyMatrix4(b.matrixWorld).applyMatrix4(Ce)),Array.isArray(we)){const Te=_e.groups;for(let ke=0,Oe=Te.length;ke<Oe;ke++){const De=Te[ke],Je=we[De.materialIndex];Je&&Je.visible&&m.push(b,_e,Je,j,Re.z,De)}}else we.visible&&m.push(b,_e,we,j,Re.z,null)}}const ce=b.children;for(let _e=0,we=ce.length;_e<we;_e++)Zu(ce[_e],V,j,X)}function Rm(b,V,j,X){const H=b.opaque,ce=b.transmissive,_e=b.transparent;f.setupLightsView(j),ie===!0&&le.setGlobalState(y.clippingPlanes,j),X&&be.viewport(R.copy(X)),H.length>0&&yl(H,V,j),ce.length>0&&yl(ce,V,j),_e.length>0&&yl(_e,V,j),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Pm(b,V,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Us(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?pl:ii,minFilter:xs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ce=f.state.transmissionRenderTarget[X.id],_e=X.viewport||R;ce.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);const we=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(I),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),at&&Ie.render(j);const Te=y.toneMapping;y.toneMapping=Vi;const ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),ie===!0&&le.setGlobalState(y.clippingPlanes,X),yl(b,j,X),C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let De=0,Je=V.length;De<Je;De++){const lt=V[De],Pt=lt.object,Mt=lt.geometry,rt=lt.material,Fe=lt.group;if(rt.side===Wr&&Pt.layers.test(X.layers)){const Ht=rt.side;rt.side=En,rt.needsUpdate=!0,Lm(Pt,j,X,Mt,rt,Fe),rt.side=Ht,rt.needsUpdate=!0,Oe=!0}}Oe===!0&&(C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce))}y.setRenderTarget(we),y.setClearColor(I,q),ke!==void 0&&(X.viewport=ke),y.toneMapping=Te}function yl(b,V,j){const X=V.isScene===!0?V.overrideMaterial:null;for(let H=0,ce=b.length;H<ce;H++){const _e=b[H],we=_e.object,Te=_e.geometry,ke=_e.group;let Oe=_e.material;Oe.allowOverride===!0&&X!==null&&(Oe=X),we.layers.test(j.layers)&&Lm(we,V,j,Te,Oe,ke)}}function Lm(b,V,j,X,H,ce){b.onBeforeRender(y,V,j,X,H,ce),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(y,V,j,X,b,ce),H.transparent===!0&&H.side===Wr&&H.forceSinglePass===!1?(H.side=En,H.needsUpdate=!0,y.renderBufferDirect(j,V,X,H,b,ce),H.side=qi,H.needsUpdate=!0,y.renderBufferDirect(j,V,X,H,b,ce),H.side=Wr):y.renderBufferDirect(j,V,X,H,b,ce),b.onAfterRender(y,V,j,X,H,ce)}function Sl(b,V,j){V.isScene!==!0&&(V=ot);const X=Ae.get(b),H=f.state.lights,ce=f.state.shadowsArray,_e=H.state.version,we=Me.getParameters(b,H.state,ce,V,j),Te=Me.getProgramCacheKey(we);let ke=X.programs;X.environment=b.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(b.isMeshStandardMaterial?G:w).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",ue),ke=new Map,X.programs=ke);let Oe=ke.get(Te);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===_e)return Nm(b,we),Oe}else we.uniforms=Me.getUniforms(b),b.onBeforeCompile(we,y),Oe=Me.acquireProgram(we,Te),ke.set(Te,Oe),X.uniforms=we.uniforms;const De=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=le.uniform),Nm(b,we),X.needsLights=aE(b),X.lightsStateVersion=_e,X.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function Dm(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=Oc.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function Nm(b,V){const j=Ae.get(b);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function sE(b,V,j,X,H){V.isScene!==!0&&(V=ot),C.resetTextureUnits();const ce=V.fog,_e=X.isMeshStandardMaterial?V.environment:null,we=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xo,Te=(X.isMeshStandardMaterial?G:w).get(X.envMap||_e),ke=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!j.morphAttributes.position,Je=!!j.morphAttributes.normal,lt=!!j.morphAttributes.color;let Pt=Vi;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pt=y.toneMapping);const Mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,rt=Mt!==void 0?Mt.length:0,Fe=Ae.get(X),Ht=f.state.lights;if(ie===!0&&(he===!0||b!==S)){const sn=b===S&&X.id===E;le.setState(X,b,sn)}let ct=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ht.state.version||Fe.outputColorSpace!==we||H.isBatchedMesh&&Fe.batching===!1||!H.isBatchedMesh&&Fe.batching===!0||H.isBatchedMesh&&Fe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Fe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||H.isInstancedMesh&&Fe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Fe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Fe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Fe.instancingMorph===!1&&H.morphTexture!==null||Fe.envMap!==Te||X.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==le.numPlanes||Fe.numIntersection!==le.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Oe||Fe.morphTargets!==De||Fe.morphNormals!==Je||Fe.morphColors!==lt||Fe.toneMapping!==Pt||Fe.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,Fe.__version=X.version);let Kn=Fe.currentProgram;ct===!0&&(Kn=Sl(X,V,H));let ks=!1,An=!1,na=!1;const _t=Kn.getUniforms(),Bn=Fe.uniforms;if(be.useProgram(Kn.program)&&(ks=!0,An=!0,na=!0),X.id!==E&&(E=X.id,An=!0),ks||S!==b){be.buffers.depth.getReversed()?(ne.copy(b.projectionMatrix),OR(ne),kR(ne),_t.setValue(N,"projectionMatrix",ne)):_t.setValue(N,"projectionMatrix",b.projectionMatrix),_t.setValue(N,"viewMatrix",b.matrixWorldInverse);const pn=_t.map.cameraPosition;pn!==void 0&&pn.setValue(N,$e.setFromMatrixPosition(b.matrixWorld)),Ke.logarithmicDepthBuffer&&_t.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_t.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,An=!0,na=!0)}if(H.isSkinnedMesh){_t.setOptional(N,H,"bindMatrix"),_t.setOptional(N,H,"bindMatrixInverse");const sn=H.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),_t.setValue(N,"boneTexture",sn.boneTexture,C))}H.isBatchedMesh&&(_t.setOptional(N,H,"batchingTexture"),_t.setValue(N,"batchingTexture",H._matricesTexture,C),_t.setOptional(N,H,"batchingIdTexture"),_t.setValue(N,"batchingIdTexture",H._indirectTexture,C),_t.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&_t.setValue(N,"batchingColorTexture",H._colorsTexture,C));const zn=j.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Le.update(H,j,Kn),(An||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,_t.setValue(N,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Bn.envMap.value=Te,Bn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&V.environment!==null&&(Bn.envMapIntensity.value=V.environmentIntensity),An&&(_t.setValue(N,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&oE(Bn,na),ce&&X.fog===!0&&ge.refreshFogUniforms(Bn,ce),ge.refreshMaterialUniforms(Bn,X,D,K,f.state.transmissionRenderTarget[b.id]),Oc.upload(N,Dm(Fe),Bn,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Oc.upload(N,Dm(Fe),Bn,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_t.setValue(N,"center",H.center),_t.setValue(N,"modelViewMatrix",H.modelViewMatrix),_t.setValue(N,"normalMatrix",H.normalMatrix),_t.setValue(N,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const sn=X.uniformsGroups;for(let pn=0,Ju=sn.length;pn<Ju;pn++){const ts=sn[pn];F.update(ts,Kn),F.bind(ts,Kn)}}return Kn}function oE(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function aE(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,V,j){const X=Ae.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ae.get(b.texture).__webglTexture=V,Ae.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:j,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){const j=Ae.get(b);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0};const lE=N.createFramebuffer();this.setRenderTarget=function(b,V=0,j=0){L=b,T=V,M=j;let X=!0,H=null,ce=!1,_e=!1;if(b){const Te=Ae.get(b);if(Te.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(Te.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Te.__hasExternalTextures)C.rebindTextures(b,Ae.get(b.texture).__webglTexture,Ae.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(Te.__boundDepthTexture!==De){if(De!==null&&Ae.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const Oe=Ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[V])?H=Oe[V][j]:H=Oe[V],ce=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?H=Ae.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[j]:H=Oe,R.copy(b.viewport),O.copy(b.scissor),k=b.scissorTest}else R.copy(re).multiplyScalar(D).floor(),O.copy(oe).multiplyScalar(D).floor(),k=Ee;if(j!==0&&(H=lE),be.bindFramebuffer(N.FRAMEBUFFER,H)&&X&&be.drawBuffers(b,H),be.viewport(R),be.scissor(O),be.setScissorTest(k),ce){const Te=Ae.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,j)}else if(_e){const Te=Ae.get(b.texture),ke=V;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,j,ke)}else if(b!==null&&j!==0){const Te=Ae.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Te.__webglTexture,j)}E=-1},this.readRenderTargetPixels=function(b,V,j,X,H,ce,_e){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){be.bindFramebuffer(N.FRAMEBUFFER,we);try{const Te=b.texture,ke=Te.format,Oe=Te.type;if(!Ke.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-X&&j>=0&&j<=b.height-H&&N.readPixels(V,j,X,H,ze.convert(ke),ze.convert(Oe),ce)}finally{const Te=L!==null?Ae.get(L).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,V,j,X,H,ce,_e){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we)if(V>=0&&V<=b.width-X&&j>=0&&j<=b.height-H){be.bindFramebuffer(N.FRAMEBUFFER,we);const Te=b.texture,ke=Te.format,Oe=Te.type;if(!Ke.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,De),N.bufferData(N.PIXEL_PACK_BUFFER,ce.byteLength,N.STREAM_READ),N.readPixels(V,j,X,H,ze.convert(ke),ze.convert(Oe),0);const Je=L!==null?Ae.get(L).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Je);const lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await FR(N,lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,De),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ce),N.deleteBuffer(De),N.deleteSync(lt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,j=0){const X=Math.pow(2,-j),H=Math.floor(b.image.width*X),ce=Math.floor(b.image.height*X),_e=V!==null?V.x:0,we=V!==null?V.y:0;C.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,_e,we,H,ce),be.unbindTexture()};const cE=N.createFramebuffer(),uE=N.createFramebuffer();this.copyTextureToTexture=function(b,V,j=null,X=null,H=0,ce=null){ce===null&&(H!==0?(Fc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=H,H=0):ce=0);let _e,we,Te,ke,Oe,De,Je,lt,Pt;const Mt=b.isCompressedTexture?b.mipmaps[ce]:b.image;if(j!==null)_e=j.max.x-j.min.x,we=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,ke=j.min.x,Oe=j.min.y,De=j.isBox3?j.min.z:0;else{const zn=Math.pow(2,-H);_e=Math.floor(Mt.width*zn),we=Math.floor(Mt.height*zn),b.isDataArrayTexture?Te=Mt.depth:b.isData3DTexture?Te=Math.floor(Mt.depth*zn):Te=1,ke=0,Oe=0,De=0}X!==null?(Je=X.x,lt=X.y,Pt=X.z):(Je=0,lt=0,Pt=0);const rt=ze.convert(V.format),Fe=ze.convert(V.type);let Ht;V.isData3DTexture?(C.setTexture3D(V,0),Ht=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),Ht=N.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),Ht=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const ct=N.getParameter(N.UNPACK_ROW_LENGTH),Kn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ks=N.getParameter(N.UNPACK_SKIP_PIXELS),An=N.getParameter(N.UNPACK_SKIP_ROWS),na=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De);const _t=b.isDataArrayTexture||b.isData3DTexture,Bn=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){const zn=Ae.get(b),sn=Ae.get(V),pn=Ae.get(zn.__renderTarget),Ju=Ae.get(sn.__renderTarget);be.bindFramebuffer(N.READ_FRAMEBUFFER,pn.__webglFramebuffer),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ju.__webglFramebuffer);for(let ts=0;ts<Te;ts++)_t&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(b).__webglTexture,H,De+ts),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(V).__webglTexture,ce,Pt+ts)),N.blitFramebuffer(ke,Oe,_e,we,Je,lt,_e,we,N.DEPTH_BUFFER_BIT,N.NEAREST);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||Ae.has(b)){const zn=Ae.get(b),sn=Ae.get(V);be.bindFramebuffer(N.READ_FRAMEBUFFER,cE),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,uE);for(let pn=0;pn<Te;pn++)_t?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zn.__webglTexture,H,De+pn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zn.__webglTexture,H),Bn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,sn.__webglTexture,ce,Pt+pn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,sn.__webglTexture,ce),H!==0?N.blitFramebuffer(ke,Oe,_e,we,Je,lt,_e,we,N.COLOR_BUFFER_BIT,N.NEAREST):Bn?N.copyTexSubImage3D(Ht,ce,Je,lt,Pt+pn,ke,Oe,_e,we):N.copyTexSubImage2D(Ht,ce,Je,lt,ke,Oe,_e,we);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Bn?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Ht,ce,Je,lt,Pt,_e,we,Te,rt,Fe,Mt.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Ht,ce,Je,lt,Pt,_e,we,Te,rt,Mt.data):N.texSubImage3D(Ht,ce,Je,lt,Pt,_e,we,Te,rt,Fe,Mt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ce,Je,lt,_e,we,rt,Fe,Mt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ce,Je,lt,Mt.width,Mt.height,rt,Mt.data):N.texSubImage2D(N.TEXTURE_2D,ce,Je,lt,_e,we,rt,Fe,Mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ct),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ks),N.pixelStorei(N.UNPACK_SKIP_ROWS,An),N.pixelStorei(N.UNPACK_SKIP_IMAGES,na),ce===0&&V.generateMipmaps&&N.generateMipmap(Ht),be.unbindTexture()},this.copyTextureToTexture3D=function(b,V,j=null,X=null,H=0){return Fc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,V,j,X,H)},this.initRenderTarget=function(b){Ae.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){T=0,M=0,L=null,be.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const{lerp:ls}=IR,en=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let t=0;t<256;t++)en[256+t]=en[t];function uf(t){return t*t*t*(t*(t*6-15)+10)}function gi(t,e,n,r){const i=t&15,s=i<8?e:n,o=i<4?n:i==12||i==14?e:r;return(i&1?-s:s)+(i&2?-o:o)}class QN{noise(e,n,r){const i=Math.floor(e),s=Math.floor(n),o=Math.floor(r),a=i&255,l=s&255,c=o&255;e-=i,n-=s,r-=o;const u=e-1,d=n-1,h=r-1,p=uf(e),v=uf(n),g=uf(r),m=en[a]+l,f=en[m]+c,_=en[m+1]+c,x=en[a+1]+l,y=en[x]+c,A=en[x+1]+c;return ls(ls(ls(gi(en[f],e,n,r),gi(en[y],u,n,r),p),ls(gi(en[_],e,d,r),gi(en[A],u,d,r),p),v),ls(ls(gi(en[f+1],e,n,h),gi(en[y+1],u,n,h),p),ls(gi(en[_+1],e,d,h),gi(en[A+1],u,d,h),p),v),g)}}const ZN=({parentRef:t})=>{const e=P.useRef(null),n=_m(),[r,i]=P.useState(n?300:500);let s,o,a,l,c=new ZS,u=!1,d=0,h=!1,p=new ht;return P.useEffect(()=>{const v=e.current;if(!v||!t.current)return;const g=t.current.offsetWidth,m=t.current.offsetHeight;s=new YS,o=new Dn(75,g/m,.1,1e3),o.position.z=300,a=new iE({canvas:v,alpha:!0}),a.setSize(g,m),a.setPixelRatio(window.devicePixelRatio);const f=new Dr,_=new Float32Array(r*3),x=new Float32Array(r*3),y=new Float32Array(r*3),A=new et(9109504),T=new et(16766720),M=new et(16777215);for(let R=0;R<r;R++){_[R*3]=(Math.random()-.5)*400,_[R*3+1]=(Math.random()-.5)*400,_[R*3+2]=(Math.random()-.5)*400,x[R*3]=(Math.random()-.5)*.5,x[R*3+1]=(Math.random()-.5)*.5,x[R*3+2]=(Math.random()-.5)*.5;const O=Math.random();O<.33?(y[R*3]=A.r,y[R*3+1]=A.g,y[R*3+2]=A.b):O<.66?(y[R*3]=T.r,y[R*3+1]=T.g,y[R*3+2]=T.b):(y[R*3]=M.r,y[R*3+1]=M.g,y[R*3+2]=M.b)}f.setAttribute("position",new Wt(_,3)),f.setAttribute("velocity",new Wt(x,3)),f.setAttribute("color",new Wt(y,3));const L=new Am({size:5,vertexColors:!0,transparent:!0,opacity:.8,blending:mu});l=new KS(f,L),s.add(l);const E=()=>{const R=c.getDelta(),O=c.getElapsedTime(),k=l.geometry.getAttribute("position"),I=l.geometry.getAttribute("velocity"),q=l.geometry.getAttribute("color");for(let U=0;U<r;U++){const K=k.array[U*3],D=k.array[U*3+1],B=k.array[U*3+2];if(!u&&!h&&(I.array[U*3]+=(0-K)*5e-4,I.array[U*3+1]+=(0-D)*5e-4,I.array[U*3+2]+=(0-B)*5e-4),u){const oe=Math.sin((O-d)*3)*3;I.array[U*3]+=oe*(Math.random()-.5),I.array[U*3+1]+=oe*(Math.random()-.5),I.array[U*3+2]+=oe*(Math.random()-.5)}h&&(I.array[U*3]+=Math.sin(O)*.02,I.array[U*3+1]+=Math.cos(O)*.02,I.array[U*3+2]+=Math.sin(O*.5)*.02),I.array[U*3]*=.99,I.array[U*3+1]*=.99,I.array[U*3+2]*=.99;const re=new QN().noise(K*.01,D*.01,O*.05);I.array[U*3]+=re*.01,I.array[U*3+1]+=re*.01,I.array[U*3+2]+=re*.01,k.array[U*3]+=I.array[U*3]*R*100,k.array[U*3+1]+=I.array[U*3+1]*R*100,k.array[U*3+2]+=I.array[U*3+2]*R*100,(K>400||K<-400)&&(k.array[U*3]=(Math.random()-.5)*400),(D>400||D<-400)&&(k.array[U*3+1]=(Math.random()-.5)*400),(B>400||B<-400)&&(k.array[U*3+2]=(Math.random()-.5)*400)}k.needsUpdate=!0,q.needsUpdate=!0,a.render(s,o),requestAnimationFrame(E)};E();const S=R=>{u||(u=!0,d=c.getElapsedTime(),setTimeout(()=>{u=!1,h=!0,setTimeout(()=>{h=!1},1500)},1e3)),p.x=R.clientX/window.innerWidth*2-1,p.y=-(R.clientY/window.innerHeight)*2+1};return window.addEventListener("click",S),()=>{window.removeEventListener("click",S)}},[t,n,r]),z.jsx("canvas",{ref:e,className:"absolute inset-0 z-0"})},JN=({parentRef:t})=>{const e=P.useRef(null),n=_m();let r,i,s,o,a=new ZS;const l=4,c=new et(.8,0,0);return P.useEffect(()=>{const u=e.current,d=t.current;if(!u||!d)return;const h=d.offsetWidth,p=d.offsetHeight;r=new YS,i=new Dn(75,h/p,.1,1e3),i.position.z=300,s=new iE({canvas:u,alpha:!0}),s.setSize(h,p);const v=n?300:500,g=new Dr,m=new Float32Array(v*3),f=new Float32Array(v*3),_=new Float32Array(v),x=new Float32Array(v*3);for(let M=0;M<v;M++)m[M*3]=(Math.random()-.5)*400,m[M*3+1]=(Math.random()-.5)*400,m[M*3+2]=(Math.random()-.5)*400,f[M*3]=(Math.random()-.5)*.5,f[M*3+1]=(Math.random()-.5)*.5,f[M*3+2]=(Math.random()-.5)*.5,_[M]=Math.random(),x[M*3]=c.r,x[M*3+1]=c.g,x[M*3+2]=c.b;g.setAttribute("position",new Wt(m,3)),g.setAttribute("velocity",new Wt(f,3)),g.setAttribute("color",new Wt(x,3)),g.setAttribute("opacity",new Wt(_,1));const y=new Am({size:l,vertexColors:!0,transparent:!0,opacity:1,blending:mu});o=new KS(g,y),r.add(o);const A=()=>{const M=a.getDelta(),L=o.geometry.getAttribute("position"),E=o.geometry.getAttribute("velocity"),S=o.geometry.getAttribute("opacity");for(let R=0;R<v;R++)L.array[R*3]+=E.array[R*3]*M*100,L.array[R*3+1]+=E.array[R*3+1]*M*100,L.array[R*3+2]+=E.array[R*3+2]*M*100,S.array[R]=Math.abs(Math.sin(a.getElapsedTime()*2+R*.1));L.needsUpdate=!0,S.needsUpdate=!0,s.render(r,i),requestAnimationFrame(A)};A();const T=M=>{const L=(M.clientX/h-.5)*200,E=-(M.clientY/p-.5)*200;o.position.set(L,E,0)};return window.addEventListener("mousemove",T),()=>{window.removeEventListener("mousemove",T),s&&s.dispose()}},[t,n]),z.jsx("canvas",{ref:e,className:"absolute inset-0 z-0"})},e3=({parentRef:t})=>_m()?z.jsx(ZN,{parentRef:t}):z.jsx(JN,{parentRef:t}),t3=({onClick:t,label:e,href:n})=>{const r=z.jsxs(z.Fragment,{children:[z.jsx("span",{className:"relative z-10",children:e}),z.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-gsai-red via-gsai-gold to-gsai-red opacity-75 blur-lg -z-10 animate-gradient-x"})]});return n?z.jsx("a",{href:n,className:"gsai-btn text-base sm:text-lg lg:text-xl animate-pulse-glow mt-4 sm:mt-6 relative overflow-hidden rounded-full px-6 py-3 transition-all ease-in-out hover:scale-105 hover:shadow-lg","aria-label":e,target:"_blank",rel:"noopener noreferrer",children:r}):z.jsx("button",{onClick:t,className:"gsai-btn text-base sm:text-lg lg:text-xl animate-pulse-glow mt-4 sm:mt-6 relative overflow-hidden rounded-full px-6 py-3 transition-all ease-in-out hover:scale-105 hover:shadow-lg","aria-label":e,children:r})},n3=()=>{const t=P.useRef(null);return z.jsxs("div",{id:"hero",ref:t,className:"relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black",children:[z.jsx("div",{className:"absolute inset-0 z-0",children:z.jsx(e3,{parentRef:t})}),z.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10"}),z.jsxs("div",{className:"gsai-container relative text-center z-40 flex flex-col items-center",children:[z.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white animate-float",children:["Welcome to",z.jsxs("div",{className:"mt-2",children:[z.jsx("span",{className:"text-gsai-red",children:"Ghatak "}),z.jsx("span",{className:"text-white",children:"Sports Academy"}),z.jsx("span",{className:"text-gsai-gold",children:" India™"})]})]}),z.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto",children:"Empowering Lives Through Martial Arts"}),z.jsx(t3,{label:"Join Now",href:"https://forms.gle/LTYn59kPWkQgC3VR7"}),z.jsx("div",{className:"mt-8 sm:mt-12 md:mt-16",children:z.jsx("a",{href:"#about",className:"text-white/70 hover:text-white animate-bounce",children:z.jsx("svg",{className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})})]})]})},r3=P.lazy(()=>es(()=>import("./About-DEZObYrl.js"),[])),i3=P.lazy(()=>es(()=>import("./Founder-FWCl_Jlw.js"),[])),s3=P.lazy(()=>es(()=>import("./Programs-D2Ey2PRu.js"),[])),o3=P.lazy(()=>es(()=>import("./Gallery-CaLkXc3G.js"),[])),a3=P.lazy(()=>es(()=>import("./FAQ-erkeCw91.js"),[])),l3=P.lazy(()=>es(()=>import("./Contact-BQE1Zs85.js"),[])),c3=P.lazy(()=>es(()=>import("./Affiliations-DWimkhQe.js"),[])),u3=P.lazy(()=>es(()=>import("./Footer-DWlkgGVu.js"),[])),vi=()=>z.jsx("div",{className:"w-full py-20 flex items-center justify-center",children:z.jsx("div",{className:"animate-pulse-glow w-10 h-10 rounded-full bg-gsai-red"})}),d3=()=>{const[t,e]=P.useState(!1);return P.useEffect(()=>{e(!0)},[]),z.jsxs("div",{className:"font-sans min-h-screen bg-black overflow-x-hidden",children:[z.jsx(GC,{}),z.jsx("div",{className:"relative",children:z.jsx(n3,{})}),z.jsxs("div",{className:"relative",children:[t&&z.jsx(P.Suspense,{fallback:z.jsx(vi,{}),children:z.jsx(r3,{})}),t&&z.jsx(P.Suspense,{fallback:z.jsx(vi,{}),children:z.jsx(i3,{})}),t&&z.jsx(P.Suspense,{fallback:z.jsx(vi,{}),children:z.jsx(s3,{})}),t&&z.jsx(P.Suspense,{fallback:z.jsx(vi,{}),children:z.jsx(o3,{})}),t&&z.jsx(P.Suspense,{fallback:z.jsx(vi,{}),children:z.jsx(a3,{})}),t&&z.jsx(P.Suspense,{fallback:z.jsx(vi,{}),children:z.jsx(l3,{})}),t&&z.jsx(P.Suspense,{fallback:z.jsx(vi,{}),children:z.jsx(c3,{})}),t&&z.jsx(P.Suspense,{fallback:z.jsx(vi,{}),children:z.jsx(u3,{})})]})]})},f3=()=>{const t=wS(),e=P.useCallback(()=>{console.error(`404 Error: User attempted to access a non-existent route: ${t.pathname}`,`Referrer: ${document.referrer||"Direct Access"}`)},[t.pathname]);return P.useEffect(()=>{e()},[e]),z.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100 transition-all duration-500","aria-live":"polite",children:z.jsxs("div",{className:"text-center max-w-lg p-8 bg-white rounded-lg shadow-lg",children:[z.jsx("h1",{className:"text-6xl font-bold text-red-600 mb-4 animate-pulse",children:"404"}),z.jsx("p",{className:"text-xl text-gray-700 mb-6",children:"Oops! The page you are looking for does not exist."}),z.jsxs("p",{className:"text-lg text-gray-500 mb-4",children:["The URL ",z.jsx("code",{className:"text-red-500",children:t.pathname})," could not be found."]}),z.jsx("a",{href:"/",className:"inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300",children:"Return to Home"})]})})},h3=()=>z.jsx("div",{className:"preloader-container",children:z.jsxs("div",{className:"preloader-wrapper",children:[z.jsx("div",{className:"preloader-circle"}),z.jsx("div",{className:"preloader-text",children:"Ghatak Sports Academy"})]})}),p3=new QA,m3=()=>{const[t,e]=P.useState(!0);return P.useEffect(()=>{const n=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(n)},[]),z.jsxs(z.Fragment,{children:[t&&z.jsx(h3,{})," ",z.jsx(JA,{client:p3,children:z.jsxs(AA,{children:[z.jsx(w1,{}),z.jsx(tb,{}),z.jsx(zC,{children:z.jsxs(OC,{children:[z.jsx(gh,{path:"/",element:z.jsx(d3,{})}),z.jsx(gh,{path:"*",element:z.jsx(f3,{})})]})})]})})]})},w0=document.getElementById("root");if(!w0)console.error("Failed to find the root element. Make sure your HTML has an element with id 'root'.");else try{$x(w0).render(z.jsx(m3,{}))}catch(t){console.error("An error occurred while rendering the app:",t)}export{Cr as c,z as j,P as r,GM as u};
