const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-CdEtGk6r.js","assets/index-UgqIfaBg.js","assets/index-BeXI4FdC.css","assets/use-parallax-BS4rlgzV.js","assets/NavBar-CHncM7gw.js","assets/Founder-GDU4ZpII.js","assets/3d-card-BG7_Kur6.js","assets/Programs-Ppgzn6P2.js","assets/InternationalCompetitions-BXtZMno0.js","assets/trophy-BLM0yuf9.js","assets/map-pin-CGxOAvqs.js","assets/users-DQZjjzEH.js","assets/Achievements-11kjtpD7.js","assets/user-Dxduiq7P.js","assets/award-ewr2DwnT.js","assets/CoachingStaff-BCZ0mC2U.js","assets/phone-CWXpFlmO.js","assets/Testimonials-BAFoAcP-.js","assets/use-scroll-animation-CVRXBeTR.js","assets/quote-BYJnTV97.js","assets/Gallery-CrCKmWSx.js","assets/FAQ-DlRNTFEe.js","assets/index-DlWWlCVZ.js","assets/Contact-Bf3HS0aT.js","assets/Affiliations-D_YgxptC.js","assets/Footer-0HPEqJKe.js"])))=>i.map(i=>d[i]);
import{r as Et,j as W,_ as Ie,u as Ro,H as Co}from"./index-UgqIfaBg.js";import{u as ra,m as Po,C as qr,N as Do}from"./NavBar-CHncM7gw.js";const Lo=()=>{const i=Et.useRef(null),t=Et.useRef([]),e=Et.useRef(null);return Et.useEffect(()=>{if(!i.current)return;const n=i.current,a=n.getContext("2d");if(!a)return;const r=()=>{n&&(n.width=window.innerWidth,n.height=window.innerHeight,s())};r(),window.addEventListener("resize",r);function s(){t.current=[];const c=100;for(let l=0;l<c;l++)n&&t.current.push({x:Math.random()*n.width,y:Math.random()*n.height,size:Math.random()*2+1,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5,color:`rgba(234, 56, 76, ${Math.random()*.5+.2})`})}function o(){if(!(!a||!n)){a.clearRect(0,0,n.width,n.height);for(const c of t.current)c.x+=c.speedX,c.y+=c.speedY,c.x>n.width&&(c.x=0),c.x<0&&(c.x=n.width),c.y>n.height&&(c.y=0),c.y<0&&(c.y=n.height),a.fillStyle=c.color,a.beginPath(),a.arc(c.x,c.y,c.size,0,Math.PI*2),a.fill();e.current=requestAnimationFrame(o)}}return o(),()=>{window.removeEventListener("resize",r),e.current&&cancelAnimationFrame(e.current)}},[]),W.jsx("canvas",{"data-lov-id":"src\\components\\HeroParticlesSimple.tsx:98:9","data-lov-name":"canvas","data-component-path":"src\\components\\HeroParticlesSimple.tsx","data-component-line":"98","data-component-file":"HeroParticlesSimple.tsx","data-component-name":"canvas","data-component-content":"%7B%22className%22%3A%22absolute%20inset-0%20z-0%22%7D",ref:i,className:"absolute inset-0 z-0"})},Io=()=>{const i=Et.useRef(null);return Et.useEffect(()=>{const t=i.current;if(!t)return;const e=t.offsetWidth,n=t.offsetHeight,a=window.innerWidth<768?50:100,r=[];t.innerHTML="";for(let h=0;h<a;h++){const u=document.createElement("div"),f=["#ff0000","#ffcc00","#ffffff"],m=f[Math.floor(Math.random()*f.length)],_=Math.random()*5+2,v=Math.random()*e,p=Math.random()*n,d=Math.random()*5;u.className="gsai-particle",u.style.position="absolute",u.style.width=`${_}px`,u.style.height=`${_}px`,u.style.borderRadius="50%",u.style.backgroundColor=m,u.style.boxShadow=`0 0 ${_*2}px ${m}`,u.style.left=`${v}px`,u.style.top=`${p}px`,u.style.opacity=(.3+Math.random()*.7).toString(),u.style.zIndex=Math.floor(d).toString(),u.style.transform=`translateZ(${d*50}px)`,u.dataset.vx=(Math.random()-.5).toString(),u.dataset.vy=(Math.random()-.5).toString(),u.dataset.x=v.toString(),u.dataset.y=p.toString(),t.appendChild(u),r.push(u)}let s;const o=()=>{r.forEach(h=>{const u=parseFloat(h.dataset.x||"0"),f=parseFloat(h.dataset.y||"0"),m=parseFloat(h.dataset.vx||"0"),_=parseFloat(h.dataset.vy||"0");let v=u+m,p=f+_;v=v>e?0:v<0?e:v,p=p>n?0:p<0?n:p,h.style.left=`${v}px`,h.style.top=`${p}px`,h.dataset.x=v.toString(),h.dataset.y=p.toString()}),s=requestAnimationFrame(o)};o();const c=()=>{const h=t.offsetWidth,u=t.offsetHeight;r.forEach(f=>{const m=parseFloat(f.dataset.x||"0"),_=parseFloat(f.dataset.y||"0");m>h&&(f.dataset.x=(m%h).toString()),_>u&&(f.dataset.y=(_%u).toString())})};window.addEventListener("resize",c);const l=h=>{const u=h.clientX,f=h.clientY,m=t.getBoundingClientRect();r.forEach(_=>{const v=parseFloat(_.dataset.x||"0"),p=parseFloat(_.dataset.y||"0"),d=u-m.left-v,b=f-m.top-p,T=Math.sqrt(d*d+b*b);if(T<100){const y=.05/Math.max(1,T);_.dataset.vx=(parseFloat(_.dataset.vx||"0")-d*y).toString(),_.dataset.vy=(parseFloat(_.dataset.vy||"0")-b*y).toString()}})};return t.addEventListener("mousemove",l),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",c),t.removeEventListener("mousemove",l)}},[]),W.jsx("div",{"data-lov-id":"src\\components\\HeroParticlesVanilla.tsx:142:4","data-lov-name":"div","data-component-path":"src\\components\\HeroParticlesVanilla.tsx","data-component-line":"142","data-component-file":"HeroParticlesVanilla.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20inset-0%20perspective-1000%20overflow-hidden%22%7D",ref:i,className:"absolute inset-0 perspective-1000 overflow-hidden",style:{perspective:"1000px",transformStyle:"preserve-3d"}})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pr="176",Uo=0,Yr=1,No=2,Ws=1,Fo=2,Ke=3,gn=0,Me=1,Je=2,pn=0,Kn=1,jr=2,$r=3,Zr=4,Oo=5,Rn=100,Bo=101,Ho=102,zo=103,Vo=104,Go=200,ko=201,Wo=202,Xo=203,Ga=204,ka=205,qo=206,Yo=207,jo=208,$o=209,Zo=210,Ko=211,Jo=212,Qo=213,tc=214,Wa=0,Xa=1,qa=2,Qn=3,Ya=4,ja=5,$a=6,Za=7,Xs=0,ec=1,nc=2,mn=0,ic=1,ac=2,rc=3,sc=4,oc=5,cc=6,lc=7,qs=300,ti=301,ei=302,Ka=303,Ja=304,sa=306,Qa=1e3,Pn=1001,tr=1002,Ve=1003,dc=1004,Ai=1005,ke=1006,ha=1007,Dn=1008,an=1009,Ys=1010,js=1011,fi=1012,Dr=1013,In=1014,Qe=1015,_i=1016,Lr=1017,Ir=1018,pi=1020,$s=35902,Zs=1021,Ks=1022,ze=1023,mi=1026,gi=1027,Js=1028,Ur=1029,Qs=1030,Nr=1031,Fr=1033,$i=33776,Zi=33777,Ki=33778,Ji=33779,er=35840,nr=35841,ir=35842,ar=35843,rr=36196,sr=37492,or=37496,cr=37808,lr=37809,dr=37810,ur=37811,hr=37812,fr=37813,pr=37814,mr=37815,gr=37816,_r=37817,xr=37818,vr=37819,Mr=37820,Sr=37821,Qi=36492,Er=36494,yr=36495,to=36283,Tr=36284,Ar=36285,br=36286,uc=3200,hc=3201,fc=0,pc=1,fn="",Pe="srgb",ni="srgb-linear",na="linear",$t="srgb",Fn=7680,Kr=519,mc=512,gc=513,_c=514,eo=515,xc=516,vc=517,Mc=518,Sc=519,Jr=35044,Qr="300 es",tn=2e3,ia=2001;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const a=n[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fa=Math.PI/180,wr=180/Math.PI;function xi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function Ft(i,t,e){return Math.max(t,Math.min(e,i))}function Ec(i,t){return(i%t+t)%t}function pa(i,t,e){return(1-e)*i+e*t}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*a+t.x,this.y=r*a+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,a,r,s,o,c,l){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,l)}set(t,e,n,a,r,s,o,c,l){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],_=n[8],v=a[0],p=a[3],d=a[6],b=a[1],T=a[4],y=a[7],I=a[2],w=a[5],R=a[8];return r[0]=s*v+o*b+c*I,r[3]=s*p+o*T+c*w,r[6]=s*d+o*y+c*R,r[1]=l*v+h*b+u*I,r[4]=l*p+h*T+u*w,r[7]=l*d+h*y+u*R,r[2]=f*v+m*b+_*I,r[5]=f*p+m*T+_*w,r[8]=f*d+m*y+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*s*h-e*o*l-n*r*h+n*o*c+a*r*l-a*s*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*s-o*l,f=o*c-h*r,m=l*r-s*c,_=e*u+n*f+a*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(a*l-h*n)*v,t[2]=(o*n-a*s)*v,t[3]=f*v,t[4]=(h*e-a*c)*v,t[5]=(a*r-o*e)*v,t[6]=m*v,t[7]=(n*c-l*e)*v,t[8]=(s*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,s,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*s+l*o)+s+t,-a*l,a*c,-a*(-l*s+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Lt;function no(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yc(){const i=aa("canvas");return i.style.display="block",i}const ts={};function ta(i){i in ts||(ts[i]=!0,console.warn(i))}function Tc(i,t,e){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ac(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const es=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ns=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wc(){const i={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===$t&&(a.r=nn(a.r),a.g=nn(a.g),a.b=nn(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===$t&&(a.r=Jn(a.r),a.g=Jn(a.g),a.b=Jn(a.b))),a},fromWorkingColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},toWorkingColorSpace:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===fn?na:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ni]:{primaries:t,whitePoint:n,transfer:na,toXYZ:es,fromXYZ:ns,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:$t,toXYZ:es,fromXYZ:ns,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}const kt=wc();function nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let On;class Rc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{On===void 0&&(On=aa("canvas")),On.width=t.width,On.height=t.height;const a=On.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=On}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=nn(r[s]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(nn(e[n]/255)*255):e[n]=nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cc=0;class Or{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(ga(a[s].image)):r.push(ga(a[s]))}else r=ga(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pc=0;class Se extends ai{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=Pn,a=Pn,r=ke,s=Dn,o=ze,c=an,l=Se.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=xi(),this.name="",this.source=new Or(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qs)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=qs;Se.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,a=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],_=c[9],v=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,y=(m+1)/2,I=(d+1)/2,w=(h+f)/4,R=(u+v)/4,U=(_+p)/4;return T>y&&T>I?T<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(T),a=w/n,r=R/n):y>I?y<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),n=w/a,r=U/a):I<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(I),n=R/r,a=U/r),this.set(n,a,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-v)/b,this.z=(f-h)/b,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dc extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const a={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new Se(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new Or(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Dc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class io extends Se{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lc extends Se{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,s,o){let c=n[a+0],l=n[a+1],h=n[a+2],u=n[a+3];const f=r[s+0],m=r[s+1],_=r[s+2],v=r[s+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(u!==v||c!==f||l!==m||h!==_){let p=1-o;const d=c*f+l*m+h*_+u*v,b=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const I=Math.sqrt(T),w=Math.atan2(I,d*b);p=Math.sin(p*w)/I,o=Math.sin(o*w)/I}const y=o*b;if(c=c*p+f*y,l=l*p+m*y,h=h*p+_*y,u=u*p+v*y,p===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,a,r,s){const o=n[a],c=n[a+1],l=n[a+2],h=n[a+3],u=r[s],f=r[s+1],m=r[s+2],_=r[s+3];return t[e]=o*_+h*u+c*m-l*f,t[e+1]=c*_+h*f+l*u-o*m,t[e+2]=l*_+h*m+o*f-c*u,t[e+3]=h*_-o*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(a/2),u=o(r/2),f=c(n/2),m=c(a/2),_=c(r/2);switch(s){case"XYZ":this._x=f*h*u+l*m*_,this._y=l*m*u-f*h*_,this._z=l*h*_+f*m*u,this._w=l*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+l*m*_,this._y=l*m*u-f*h*_,this._z=l*h*_-f*m*u,this._w=l*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-l*m*_,this._y=l*m*u+f*h*_,this._z=l*h*_+f*m*u,this._w=l*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-l*m*_,this._y=l*m*u+f*h*_,this._z=l*h*_-f*m*u,this._w=l*h*u+f*m*_;break;case"YZX":this._x=f*h*u+l*m*_,this._y=l*m*u+f*h*_,this._z=l*h*_-f*m*u,this._w=l*h*u-f*m*_;break;case"XZY":this._x=f*h*u-l*m*_,this._y=l*m*u-f*h*_,this._z=l*h*_+f*m*u,this._w=l*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],s=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(s-a)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(a+s)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(a+s)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(s-a)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,s=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+s*o+a*l-r*c,this._y=a*h+s*c+r*o-n*l,this._z=r*h+s*l+n*c-a*o,this._w=s*h-n*o-a*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*s+e*this._w,this._x=m*n+e*this._x,this._y=m*a+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=s*u+this._w*f,this._x=n*u+this._x*f,this._y=a*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(is.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(is.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,s=t.y,o=t.z,c=t.w,l=2*(s*a-o*n),h=2*(o*e-r*a),u=2*(r*n-s*e);return this.x=e+c*l+s*u-o*h,this.y=n+c*h+o*l-r*u,this.z=a+c*u+r*h-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,s=e.x,o=e.y,c=e.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new B,is=new vi;class Mi{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Fe):Fe.fromBufferAttribute(r,s),Fe.applyMatrix4(t.matrixWorld),this.expandByPoint(Fe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bi.copy(n.boundingBox)),bi.applyMatrix4(t.matrixWorld),this.union(bi)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fe),Fe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ci),wi.subVectors(this.max,ci),Bn.subVectors(t.a,ci),Hn.subVectors(t.b,ci),zn.subVectors(t.c,ci),on.subVectors(Hn,Bn),cn.subVectors(zn,Hn),Mn.subVectors(Bn,zn);let e=[0,-on.z,on.y,0,-cn.z,cn.y,0,-Mn.z,Mn.y,on.z,0,-on.x,cn.z,0,-cn.x,Mn.z,0,-Mn.x,-on.y,on.x,0,-cn.y,cn.x,0,-Mn.y,Mn.x,0];return!xa(e,Bn,Hn,zn,wi)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Bn,Hn,zn,wi))?!1:(Ri.crossVectors(on,cn),e=[Ri.x,Ri.y,Ri.z],xa(e,Bn,Hn,zn,wi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xe=[new B,new B,new B,new B,new B,new B,new B,new B],Fe=new B,bi=new Mi,Bn=new B,Hn=new B,zn=new B,on=new B,cn=new B,Mn=new B,ci=new B,wi=new B,Ri=new B,Sn=new B;function xa(i,t,e,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Sn.fromArray(i,r);const o=a.x*Math.abs(Sn.x)+a.y*Math.abs(Sn.y)+a.z*Math.abs(Sn.z),c=t.dot(Sn),l=e.dot(Sn),h=n.dot(Sn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ic=new Mi,li=new B,va=new B;class oa{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ic.setFromPoints(t).getCenter(n);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;li.subVectors(t,this.center);const e=li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(li,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(li.copy(t.center).add(va)),this.expandByPoint(li.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qe=new B,Ma=new B,Ci=new B,ln=new B,Sa=new B,Pi=new B,Ea=new B;class ao{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qe.copy(this.origin).addScaledVector(this.direction,e),qe.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Ma.copy(t).add(e).multiplyScalar(.5),Ci.copy(e).sub(t).normalize(),ln.copy(this.origin).sub(Ma);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Ci),o=ln.dot(this.direction),c=-ln.dot(Ci),l=ln.lengthSq(),h=Math.abs(1-s*s);let u,f,m,_;if(h>0)if(u=s*c-o,f=s*o-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const v=1/h;u*=v,f*=v,m=u*(u+s*f+2*o)+f*(s*u+f+2*c)+l}else f=r,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-s*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(s*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=s>0?-r:r,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(Ma).addScaledVector(Ci,f),m}intersectSphere(t,e){qe.subVectors(t.center,this.origin);const n=qe.dot(this.direction),a=qe.dot(qe)-n*n,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,s,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,a=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,a=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,qe)!==null}intersectTriangle(t,e,n,a,r){Sa.subVectors(e,t),Pi.subVectors(n,t),Ea.crossVectors(Sa,Pi);let s=this.direction.dot(Ea),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ln.subVectors(this.origin,t);const c=o*this.direction.dot(Pi.crossVectors(ln,Pi));if(c<0)return null;const l=o*this.direction.dot(Sa.cross(ln));if(l<0||c+l>s)return null;const h=-o*ln.dot(Ea);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,a,r,s,o,c,l,h,u,f,m,_,v,p){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,l,h,u,f,m,_,v,p)}set(t,e,n,a,r,s,o,c,l,h,u,f,m,_,v,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=a,d[1]=r,d[5]=s,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/Vn.setFromMatrixColumn(t,0).length(),r=1/Vn.setFromMatrixColumn(t,1).length(),s=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=s*h,m=s*u,_=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+_*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=_+m*l,e[10]=s*c}else if(t.order==="YXZ"){const f=c*h,m=c*u,_=l*h,v=l*u;e[0]=f+v*o,e[4]=_*o-m,e[8]=s*l,e[1]=s*u,e[5]=s*h,e[9]=-o,e[2]=m*o-_,e[6]=v+f*o,e[10]=s*c}else if(t.order==="ZXY"){const f=c*h,m=c*u,_=l*h,v=l*u;e[0]=f-v*o,e[4]=-s*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=s*h,e[9]=v-f*o,e[2]=-s*l,e[6]=o,e[10]=s*c}else if(t.order==="ZYX"){const f=s*h,m=s*u,_=o*h,v=o*u;e[0]=c*h,e[4]=_*l-m,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=m*l-_,e[2]=-l,e[6]=o*c,e[10]=s*c}else if(t.order==="YZX"){const f=s*c,m=s*l,_=o*c,v=o*l;e[0]=c*h,e[4]=v-f*u,e[8]=_*u+m,e[1]=u,e[5]=s*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*u+_,e[10]=f-v*u}else if(t.order==="XZY"){const f=s*c,m=s*l,_=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=s*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uc,t,Nc)}lookAt(t,e,n){const a=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),dn.crossVectors(n,Te),dn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),dn.crossVectors(n,Te)),dn.normalize(),Di.crossVectors(Te,dn),a[0]=dn.x,a[4]=Di.x,a[8]=Te.x,a[1]=dn.y,a[5]=Di.y,a[9]=Te.y,a[2]=dn.z,a[6]=Di.z,a[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],_=n[2],v=n[6],p=n[10],d=n[14],b=n[3],T=n[7],y=n[11],I=n[15],w=a[0],R=a[4],U=a[8],E=a[12],M=a[1],C=a[5],Y=a[9],H=a[13],X=a[2],K=a[6],k=a[10],tt=a[14],V=a[3],at=a[7],ut=a[11],xt=a[15];return r[0]=s*w+o*M+c*X+l*V,r[4]=s*R+o*C+c*K+l*at,r[8]=s*U+o*Y+c*k+l*ut,r[12]=s*E+o*H+c*tt+l*xt,r[1]=h*w+u*M+f*X+m*V,r[5]=h*R+u*C+f*K+m*at,r[9]=h*U+u*Y+f*k+m*ut,r[13]=h*E+u*H+f*tt+m*xt,r[2]=_*w+v*M+p*X+d*V,r[6]=_*R+v*C+p*K+d*at,r[10]=_*U+v*Y+p*k+d*ut,r[14]=_*E+v*H+p*tt+d*xt,r[3]=b*w+T*M+y*X+I*V,r[7]=b*R+T*C+y*K+I*at,r[11]=b*U+T*Y+y*k+I*ut,r[15]=b*E+T*H+y*tt+I*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],s=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],_=t[3],v=t[7],p=t[11],d=t[15];return _*(+r*c*u-a*l*u-r*o*f+n*l*f+a*o*m-n*c*m)+v*(+e*c*m-e*l*f+r*s*f-a*s*m+a*l*h-r*c*h)+p*(+e*l*u-e*o*m-r*s*u+n*s*m+r*o*h-n*l*h)+d*(-a*o*h-e*c*u+e*o*f+a*s*u-n*s*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],_=t[12],v=t[13],p=t[14],d=t[15],b=u*p*l-v*f*l+v*c*m-o*p*m-u*c*d+o*f*d,T=_*f*l-h*p*l-_*c*m+s*p*m+h*c*d-s*f*d,y=h*v*l-_*u*l+_*o*m-s*v*m-h*o*d+s*u*d,I=_*u*c-h*v*c-_*o*f+s*v*f+h*o*p-s*u*p,w=e*b+n*T+a*y+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=b*R,t[1]=(v*f*r-u*p*r-v*a*m+n*p*m+u*a*d-n*f*d)*R,t[2]=(o*p*r-v*c*r+v*a*l-n*p*l-o*a*d+n*c*d)*R,t[3]=(u*c*r-o*f*r-u*a*l+n*f*l+o*a*m-n*c*m)*R,t[4]=T*R,t[5]=(h*p*r-_*f*r+_*a*m-e*p*m-h*a*d+e*f*d)*R,t[6]=(_*c*r-s*p*r-_*a*l+e*p*l+s*a*d-e*c*d)*R,t[7]=(s*f*r-h*c*r+h*a*l-e*f*l-s*a*m+e*c*m)*R,t[8]=y*R,t[9]=(_*u*r-h*v*r-_*n*m+e*v*m+h*n*d-e*u*d)*R,t[10]=(s*v*r-_*o*r+_*n*l-e*v*l-s*n*d+e*o*d)*R,t[11]=(h*o*r-s*u*r-h*n*l+e*u*l+s*n*m-e*o*m)*R,t[12]=I*R,t[13]=(h*v*a-_*u*a+_*n*f-e*v*f-h*n*p+e*u*p)*R,t[14]=(_*o*a-s*v*a-_*n*c+e*v*c+s*n*p-e*o*p)*R,t[15]=(s*u*a-h*o*a+h*n*c-e*u*c-s*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,s=t.x,o=t.y,c=t.z,l=r*s,h=r*o;return this.set(l*s+n,l*o-a*c,l*c+a*o,0,l*o+a*c,h*o+n,h*c-a*s,0,l*c-a*o,h*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,s){return this.set(1,n,r,0,t,1,s,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,s=e._y,o=e._z,c=e._w,l=r+r,h=s+s,u=o+o,f=r*l,m=r*h,_=r*u,v=s*h,p=s*u,d=o*u,b=c*l,T=c*h,y=c*u,I=n.x,w=n.y,R=n.z;return a[0]=(1-(v+d))*I,a[1]=(m+y)*I,a[2]=(_-T)*I,a[3]=0,a[4]=(m-y)*w,a[5]=(1-(f+d))*w,a[6]=(p+b)*w,a[7]=0,a[8]=(_+T)*R,a[9]=(p-b)*R,a[10]=(1-(f+v))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=Vn.set(a[0],a[1],a[2]).length();const s=Vn.set(a[4],a[5],a[6]).length(),o=Vn.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Oe.copy(this);const l=1/r,h=1/s,u=1/o;return Oe.elements[0]*=l,Oe.elements[1]*=l,Oe.elements[2]*=l,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=u,Oe.elements[9]*=u,Oe.elements[10]*=u,e.setFromRotationMatrix(Oe),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,a,r,s,o=tn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-a),u=(e+t)/(e-t),f=(n+a)/(n-a);let m,_;if(o===tn)m=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===ia)m=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,a,r,s,o=tn){const c=this.elements,l=1/(e-t),h=1/(n-a),u=1/(s-r),f=(e+t)*l,m=(n+a)*h;let _,v;if(o===tn)_=(s+r)*u,v=-2*u;else if(o===ia)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vn=new B,Oe=new se,Uc=new B(0,0,0),Nc=new B(1,1,1),dn=new B,Di=new B,Te=new B,as=new se,rs=new vi;class rn{constructor(t=0,e=0,n=0,a=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],c=a[1],l=a[5],h=a[9],u=a[2],f=a[6],m=a[10];switch(e){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return as.makeRotationFromQuaternion(t),this.setFromRotationMatrix(as,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rs.setFromEuler(this),this.setFromQuaternion(rs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fc=0;const ss=new B,Gn=new vi,Ye=new se,Li=new B,di=new B,Oc=new B,Bc=new vi,os=new B(1,0,0),cs=new B(0,1,0),ls=new B(0,0,1),ds={type:"added"},Hc={type:"removed"},kn={type:"childadded",child:null},ya={type:"childremoved",child:null};class Ee extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new B,e=new rn,n=new vi,a=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new se},normalMatrix:{value:new Lt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.premultiply(Gn),this}rotateX(t){return this.rotateOnAxis(os,t)}rotateY(t){return this.rotateOnAxis(cs,t)}rotateZ(t){return this.rotateOnAxis(ls,t)}translateOnAxis(t,e){return ss.copy(t).applyQuaternion(this.quaternion),this.position.add(ss.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(os,t)}translateY(t){return this.translateOnAxis(cs,t)}translateZ(t){return this.translateOnAxis(ls,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ye.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Li.copy(t):Li.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ye.lookAt(di,Li,this.up):Ye.lookAt(Li,di,this.up),this.quaternion.setFromRotationMatrix(Ye),a&&(Ye.extractRotation(a.matrixWorld),Gn.setFromRotationMatrix(Ye),this.quaternion.premultiply(Gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ds),kn.child=t,this.dispatchEvent(kn),kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hc),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ye.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ye.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ye),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ds),kn.child=t,this.dispatchEvent(kn),kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,t,Oc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,Bc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(t.animations,c))}}if(e){const o=s(t.geometries),c=s(t.materials),l=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),m=s(t.animations),_=s(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=a,n;function s(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Ee.DEFAULT_UP=new B(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Be=new B,je=new B,Ta=new B,$e=new B,Wn=new B,Xn=new B,us=new B,Aa=new B,ba=new B,wa=new B,Ra=new re,Ca=new re,Pa=new re;class He{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),Be.subVectors(t,e),a.cross(Be);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){Be.subVectors(a,e),je.subVectors(n,e),Ta.subVectors(t,e);const s=Be.dot(Be),o=Be.dot(je),c=Be.dot(Ta),l=je.dot(je),h=je.dot(Ta),u=s*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(l*c-o*h)*f,_=(s*h-o*c)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,$e)===null?!1:$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getInterpolation(t,e,n,a,r,s,o,c){return this.getBarycoord(t,e,n,a,$e)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$e.x),c.addScaledVector(s,$e.y),c.addScaledVector(o,$e.z),c)}static getInterpolatedAttribute(t,e,n,a,r,s){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,n),Pa.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Ra,r.x),s.addScaledVector(Ca,r.y),s.addScaledVector(Pa,r.z),s}static isFrontFacing(t,e,n,a){return Be.subVectors(n,e),je.subVectors(t,e),Be.cross(je).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),je.subVectors(this.a,this.b),Be.cross(je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,a,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let s,o;Wn.subVectors(a,n),Xn.subVectors(r,n),Aa.subVectors(t,n);const c=Wn.dot(Aa),l=Xn.dot(Aa);if(c<=0&&l<=0)return e.copy(n);ba.subVectors(t,a);const h=Wn.dot(ba),u=Xn.dot(ba);if(h>=0&&u<=h)return e.copy(a);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return s=c/(c-h),e.copy(n).addScaledVector(Wn,s);wa.subVectors(t,r);const m=Wn.dot(wa),_=Xn.dot(wa);if(_>=0&&m<=_)return e.copy(r);const v=m*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(Xn,o);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return us.subVectors(r,a),o=(u-h)/(u-h+(m-_)),e.copy(a).addScaledVector(us,o);const d=1/(p+v+f);return s=v*d,o=f*d,e.copy(n).addScaledVector(Wn,s).addScaledVector(Xn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const so={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Ii={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=kt.workingColorSpace){if(t=Ec(t,1),e=Ft(e,0,1),n=Ft(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Da(s,r,t+1/3),this.g=Da(s,r,t),this.b=Da(s,r,t-1/3)}return kt.toWorkingColorSpace(this,a),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=so[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nn(t.r),this.g=nn(t.g),this.b=nn(t.b),this}copyLinearToSRGB(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return kt.fromWorkingColorSpace(me.copy(this),t),Math.round(Ft(me.r*255,0,255))*65536+Math.round(Ft(me.g*255,0,255))*256+Math.round(Ft(me.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,a=me.g,r=me.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,l;const h=(o+s)/2;if(o===s)c=0,l=0;else{const u=s-o;switch(l=h<=.5?u/(s+o):u/(2-s-o),s){case n:c=(a-r)/u+(a<r?6:0);break;case a:c=(r-n)/u+2;break;case r:c=(n-a)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=Pe){kt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,a=me.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Ii);const n=pa(un.h,Ii.h,e),a=pa(un.s,Ii.s,e),r=pa(un.l,Ii.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new jt;jt.NAMES=so;let zc=0;class Si extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Kn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=ka,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(e){const r=a(t.textures),s=a(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oo extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new B,Ui=new Kt;let Vc=0;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jr,this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ui.fromBufferAttribute(this,e),Ui.applyMatrix3(t),this.setXY(e,Ui.x,Ui.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),a=ve(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),a=ve(a,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jr&&(t.usage=this.usage),t}}class co extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lo extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ln extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gc=0;const Ce=new se,La=new Ee,qn=new B,Ae=new Mi,ui=new Mi,ue=new B;class sn extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(no(t)?lo:co)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ce.makeRotationFromQuaternion(t),this.applyMatrix4(Ce),this}rotateX(t){return Ce.makeRotationX(t),this.applyMatrix4(Ce),this}rotateY(t){return Ce.makeRotationY(t),this.applyMatrix4(Ce),this}rotateZ(t){return Ce.makeRotationZ(t),this.applyMatrix4(Ce),this}translate(t,e,n){return Ce.makeTranslation(t,e,n),this.applyMatrix4(Ce),this}scale(t,e,n){return Ce.makeScale(t,e,n),this.applyMatrix4(Ce),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ln(n,3))}else{const n=Math.min(t.length,e.count);for(let a=0;a<n;a++){const r=t[a];e.setXYZ(a,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];Ae.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Ae.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Ae.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Ae.min),this.boundingBox.expandByPoint(Ae.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Ae.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];ui.setFromBufferAttribute(o),this.morphTargetsRelative?(ue.addVectors(Ae.min,ui.min),Ae.expandByPoint(ue),ue.addVectors(Ae.max,ui.max),Ae.expandByPoint(ue)):(Ae.expandByPoint(ui.min),Ae.expandByPoint(ui.max))}Ae.getCenter(n);let a=0;for(let r=0,s=t.count;r<s;r++)ue.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(ue));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ue.fromBufferAttribute(o,l),c&&(qn.fromBufferAttribute(t,l),ue.add(qn)),a=Math.max(a,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,a=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new B,c[U]=new B;const l=new B,h=new B,u=new B,f=new Kt,m=new Kt,_=new Kt,v=new B,p=new B;function d(U,E,M){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,M),h.sub(l),u.sub(l),m.sub(f),_.sub(f);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(C),o[U].add(v),o[E].add(v),o[M].add(v),c[U].add(p),c[E].add(p),c[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,E=b.length;U<E;++U){const M=b[U],C=M.start,Y=M.count;for(let H=C,X=C+Y;H<X;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const T=new B,y=new B,I=new B,w=new B;function R(U){I.fromBufferAttribute(a,U),w.copy(I);const E=o[U];T.copy(E),T.sub(I.multiplyScalar(I.dot(E))).normalize(),y.crossVectors(w,E);const C=y.dot(c[U])<0?-1:1;s.setXYZW(U,T.x,T.y,T.z,C)}for(let U=0,E=b.length;U<E;++U){const M=b[U],C=M.start,Y=M.count;for(let H=C,X=C+Y;H<X;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const a=new B,r=new B,s=new B,o=new B,c=new B,l=new B,h=new B,u=new B;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,p),h.subVectors(s,r),u.subVectors(a,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)a.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,r),u.subVectors(a,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let m=0,_=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let d=0;d<h;d++)f[_++]=l[m++]}return new Le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const a={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(a[c]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const a=t.attributes;for(const l in a){const h=a[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let l=0,h=s.length;l<h;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hs=new se,En=new ao,Ni=new oa,fs=new B,Fi=new B,Oi=new B,Bi=new B,Ia=new B,Hi=new B,ps=new B,zi=new B;class en extends Ee{constructor(t=new sn,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){Hi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ia.fromBufferAttribute(u,t),s?Hi.addScaledVector(Ia,h):Hi.addScaledVector(Ia.sub(e),h))}e.add(Hi)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),En.copy(t.ray).recast(t.near),!(Ni.containsPoint(En.origin)===!1&&(En.intersectSphere(Ni,fs)===null||En.origin.distanceToSquared(fs)>(t.far-t.near)**2))&&(hs.copy(r).invert(),En.copy(t.ray).applyMatrix4(hs),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,En)))}_computeIntersections(t,e,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=s[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,I=T;y<I;y+=3){const w=o.getX(y),R=o.getX(y+1),U=o.getX(y+2);a=Vi(this,d,t,n,l,h,u,w,R,U),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const b=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);a=Vi(this,s,t,n,l,h,u,b,T,y),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=s[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,I=T;y<I;y+=3){const w=y,R=y+1,U=y+2;a=Vi(this,d,t,n,l,h,u,w,R,U),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const b=p,T=p+1,y=p+2;a=Vi(this,s,t,n,l,h,u,b,T,y),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}}}function kc(i,t,e,n,a,r,s,o){let c;if(t.side===Me?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,t.side===gn,o),c===null)return null;zi.copy(o),zi.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zi);return l<e.near||l>e.far?null:{distance:l,point:zi.clone(),object:i}}function Vi(i,t,e,n,a,r,s,o,c,l){i.getVertexPosition(o,Fi),i.getVertexPosition(c,Oi),i.getVertexPosition(l,Bi);const h=kc(i,t,e,n,Fi,Oi,Bi,ps);if(h){const u=new B;He.getBarycoord(ps,Fi,Oi,Bi,u),a&&(h.uv=He.getInterpolatedAttribute(a,o,c,l,u,new Kt)),r&&(h.uv1=He.getInterpolatedAttribute(r,o,c,l,u,new Kt)),s&&(h.normal=He.getInterpolatedAttribute(s,o,c,l,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new B,materialIndex:0};He.getNormal(Fi,Oi,Bi,f.normal),h.face=f,h.barycoord=u}return h}class Ei extends sn{constructor(t=1,e=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],l=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,e,t,s,r,0),_("z","y","x",1,-1,n,e,-t,s,r,1),_("x","z","y",1,1,t,n,e,a,s,2),_("x","z","y",1,-1,t,n,-e,a,s,3),_("x","y","z",1,-1,t,e,n,a,r,4),_("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new Ln(l,3)),this.setAttribute("normal",new Ln(h,3)),this.setAttribute("uv",new Ln(u,2));function _(v,p,d,b,T,y,I,w,R,U,E){const M=y/R,C=I/U,Y=y/2,H=I/2,X=w/2,K=R+1,k=U+1;let tt=0,V=0;const at=new B;for(let ut=0;ut<k;ut++){const xt=ut*C-H;for(let Nt=0;Nt<K;Nt++){const Zt=Nt*M-Y;at[v]=Zt*b,at[p]=xt*T,at[d]=X,l.push(at.x,at.y,at.z),at[v]=0,at[p]=0,at[d]=w>0?1:-1,h.push(at.x,at.y,at.z),u.push(Nt/R),u.push(1-ut/U),tt+=1}}for(let ut=0;ut<U;ut++)for(let xt=0;xt<R;xt++){const Nt=f+xt+K*ut,Zt=f+xt+K*(ut+1),q=f+(xt+1)+K*(ut+1),et=f+(xt+1)+K*ut;c.push(Nt,Zt,et),c.push(Zt,q,et),V+=6}o.addGroup(m,V,E),m+=V,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function _e(i){const t={};for(let e=0;e<i.length;e++){const n=ii(i[e]);for(const a in n)t[a]=n[a]}return t}function Wc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const Xc={clone:ii,merge:_e};var qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qc,this.fragmentShader=Yc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ii(t.uniforms),this.uniformsGroups=Wc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?e.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[a]={type:"m4",value:s.toArray()}:e.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ho extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hn=new B,ms=new Kt,gs=new Kt;class De extends ho{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hn.x,hn.y).multiplyScalar(-t/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-t/hn.z)}getViewSize(t,e){return this.getViewBounds(t,ms,gs),e.subVectors(gs,ms)}setViewOffset(t,e,n,a,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fa*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*a/c,e-=s.offsetY*n/l,a*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yn=-90,jn=1;class jc extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new De(Yn,jn,t,e);a.layers=this.layers,this.add(a);const r=new De(Yn,jn,t,e);r.layers=this.layers,this.add(r);const s=new De(Yn,jn,t,e);s.layers=this.layers,this.add(s);const o=new De(Yn,jn,t,e);o.layers=this.layers,this.add(o);const c=new De(Yn,jn,t,e);c.layers=this.layers,this.add(c);const l=new De(Yn,jn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,s,o,c]=e;for(const l of e)this.remove(l);if(t===tn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,r),t.setRenderTarget(n,1,a),t.render(e,s),t.setRenderTarget(n,2,a),t.render(e,o),t.setRenderTarget(n,3,a),t.render(e,c),t.setRenderTarget(n,4,a),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,a),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class fo extends Se{constructor(t=[],e=ti,n,a,r,s,o,c,l,h){super(t,e,n,a,r,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $c extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];this.texture=new fo(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ei(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:pn});r.uniforms.tEquirect.value=e;const s=new en(a,r),o=e.minFilter;return e.minFilter===Dn&&(e.minFilter=ke),new jc(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,a);t.setRenderTarget(r)}}class Gi extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zc={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zc)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Kc extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Na=new B,Jc=new B,Qc=new Lt;class bn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Na.subVectors(n,e).cross(Jc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Na),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qc.getNormalMatrix(t),a=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new oa,ki=new B;class po{constructor(t=new bn,e=new bn,n=new bn,a=new bn,r=new bn,s=new bn){this.planes=[t,e,n,a,r,s]}set(t,e,n,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=tn){const n=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],c=a[3],l=a[4],h=a[5],u=a[6],f=a[7],m=a[8],_=a[9],v=a[10],p=a[11],d=a[12],b=a[13],T=a[14],y=a[15];if(n[0].setComponents(c-r,f-l,p-m,y-d).normalize(),n[1].setComponents(c+r,f+l,p+m,y+d).normalize(),n[2].setComponents(c+s,f+h,p+_,y+b).normalize(),n[3].setComponents(c-s,f-h,p-_,y-b).normalize(),n[4].setComponents(c-o,f-u,p-v,y-T).normalize(),e===tn)n[5].setComponents(c+o,f+u,p+v,y+T).normalize();else if(e===ia)n[5].setComponents(o,u,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(t){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(ki.x=a.normal.x>0?t.max.x:t.min.x,ki.y=a.normal.y>0?t.max.y:t.min.y,ki.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(ki)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mo extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _s=new se,Rr=new ao,Wi=new oa,Xi=new B;class tl extends Ee{constructor(t=new sn,e=new mo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,a=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(a),Wi.radius+=r,t.ray.intersectsSphere(Wi)===!1)return;_s.copy(a).invert(),Rr.copy(t.ray).applyMatrix4(_s);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let _=f,v=m;_<v;_++){const p=l.getX(_);Xi.fromBufferAttribute(u,p),xs(Xi,p,c,a,t,e,this)}}else{const f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let _=f,v=m;_<v;_++)Xi.fromBufferAttribute(u,_),xs(Xi,_,c,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xs(i,t,e,n,a,r,s){const o=Rr.distanceSqToPoint(i);if(o<e){const c=new B;Rr.closestPointToPoint(i,c),c.applyMatrix4(n);const l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}class go extends Se{constructor(t,e,n=In,a,r,s,o=Ve,c=Ve,l,h=mi){if(h!==mi&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,r,s,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Or(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ca extends sn{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,s=e/2,o=Math.floor(n),c=Math.floor(a),l=o+1,h=c+1,u=t/o,f=e/c,m=[],_=[],v=[],p=[];for(let d=0;d<h;d++){const b=d*f-s;for(let T=0;T<l;T++){const y=T*u-r;_.push(y,-b,0),v.push(0,0,1),p.push(T/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){const T=b+l*d,y=b+l*(d+1),I=b+1+l*(d+1),w=b+1+l*d;m.push(T,y,w),m.push(y,I,w)}this.setIndex(m),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.width,t.height,t.widthSegments,t.heightSegments)}}class el extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nl extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class il extends ho{constructor(t=-1,e=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class al extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function vs(i,t,e,n){const a=rl(n);switch(e){case Zs:return i*t;case Js:return i*t/a.components*a.byteLength;case Ur:return i*t/a.components*a.byteLength;case Qs:return i*t*2/a.components*a.byteLength;case Nr:return i*t*2/a.components*a.byteLength;case Ks:return i*t*3/a.components*a.byteLength;case ze:return i*t*4/a.components*a.byteLength;case Fr:return i*t*4/a.components*a.byteLength;case $i:case Zi:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ki:case Ji:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nr:case ar:return Math.max(i,16)*Math.max(t,8)/4;case er:case ir:return Math.max(i,8)*Math.max(t,8)/2;case rr:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case dr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ur:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _r:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Mr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qi:case Er:case yr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case to:case Tr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ar:case br:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rl(i){switch(i){case an:case Ys:return{byteLength:1,components:1};case fi:case js:case _i:return{byteLength:2,components:1};case Lr:case Ir:return{byteLength:2,components:4};case In:case Dr:case Qe:return{byteLength:4,components:1};case $s:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _o(){let i=null,t=!1,e=null,n=null;function a(r,s){e(r,s),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sl(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],v=u[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const v=u[m];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:r,update:s}}var ol=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cl=`#ifdef USE_ALPHAHASH
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
#endif`,ll=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ul=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fl=`#ifdef USE_AOMAP
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
#endif`,pl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ml=`#ifdef USE_BATCHING
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
#endif`,gl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_l=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ml=`#ifdef USE_IRIDESCENCE
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
#endif`,Sl=`#ifdef USE_BUMPMAP
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
#endif`,El=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pl=`#define PI 3.141592653589793
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
} // validated`,Dl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ll=`vec3 transformedNormal = objectNormal;
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
#endif`,Il=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ul=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ol="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hl=`#ifdef USE_ENVMAP
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
#endif`,zl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vl=`#ifdef USE_ENVMAP
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
#endif`,Gl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kl=`#ifdef USE_ENVMAP
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
#endif`,Wl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ql=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jl=`#ifdef USE_GRADIENTMAP
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
}`,$l=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jl=`uniform bool receiveShadow;
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
#endif`,Ql=`#ifdef USE_ENVMAP
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
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
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
#endif`,rd=`struct PhysicalMaterial {
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
}`,sd=`
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
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
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gd=`#if defined( USE_POINTS_UV )
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
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
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
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xd=`float getShadowMask() {
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
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$d=`#ifdef USE_SKINNING
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
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tu=`#ifdef USE_TRANSMISSION
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
#endif`,eu=`#ifdef USE_TRANSMISSION
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
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ru=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ou=`uniform sampler2D t2D;
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
}`,cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`#include <common>
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
}`,fu=`#if DEPTH_PACKING == 3200
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
}`,pu=`#define DISTANCE
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
}`,mu=`#define DISTANCE
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
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`uniform float scale;
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
}`,vu=`uniform vec3 diffuse;
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
}`,Mu=`#include <common>
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
}`,Su=`uniform vec3 diffuse;
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
}`,Eu=`#define LAMBERT
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
}`,yu=`#define LAMBERT
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
}`,Tu=`#define MATCAP
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
}`,Au=`#define MATCAP
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
}`,bu=`#define NORMAL
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
}`,wu=`#define NORMAL
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
}`,Ru=`#define PHONG
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
}`,Cu=`#define PHONG
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
}`,Pu=`#define STANDARD
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
}`,Du=`#define STANDARD
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
}`,Lu=`#define TOON
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
}`,Iu=`#define TOON
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
}`,Uu=`uniform float size;
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
}`,Nu=`uniform vec3 diffuse;
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
}`,Fu=`#include <common>
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
}`,Ou=`uniform vec3 color;
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
}`,Bu=`uniform float rotation;
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
}`,Hu=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:ol,alphahash_pars_fragment:cl,alphamap_fragment:ll,alphamap_pars_fragment:dl,alphatest_fragment:ul,alphatest_pars_fragment:hl,aomap_fragment:fl,aomap_pars_fragment:pl,batching_pars_vertex:ml,batching_vertex:gl,begin_vertex:_l,beginnormal_vertex:xl,bsdfs:vl,iridescence_fragment:Ml,bumpmap_pars_fragment:Sl,clipping_planes_fragment:El,clipping_planes_pars_fragment:yl,clipping_planes_pars_vertex:Tl,clipping_planes_vertex:Al,color_fragment:bl,color_pars_fragment:wl,color_pars_vertex:Rl,color_vertex:Cl,common:Pl,cube_uv_reflection_fragment:Dl,defaultnormal_vertex:Ll,displacementmap_pars_vertex:Il,displacementmap_vertex:Ul,emissivemap_fragment:Nl,emissivemap_pars_fragment:Fl,colorspace_fragment:Ol,colorspace_pars_fragment:Bl,envmap_fragment:Hl,envmap_common_pars_fragment:zl,envmap_pars_fragment:Vl,envmap_pars_vertex:Gl,envmap_physical_pars_fragment:Ql,envmap_vertex:kl,fog_vertex:Wl,fog_pars_vertex:Xl,fog_fragment:ql,fog_pars_fragment:Yl,gradientmap_pars_fragment:jl,lightmap_pars_fragment:$l,lights_lambert_fragment:Zl,lights_lambert_pars_fragment:Kl,lights_pars_begin:Jl,lights_toon_fragment:td,lights_toon_pars_fragment:ed,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:ad,lights_physical_pars_fragment:rd,lights_fragment_begin:sd,lights_fragment_maps:od,lights_fragment_end:cd,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:hd,map_fragment:fd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:xd,morphinstance_vertex:vd,morphcolor_vertex:Md,morphnormal_vertex:Sd,morphtarget_pars_vertex:Ed,morphtarget_vertex:yd,normal_fragment_begin:Td,normal_fragment_maps:Ad,normal_pars_fragment:bd,normal_pars_vertex:wd,normal_vertex:Rd,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Id,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Bd,dithering_pars_fragment:Hd,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:kd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:jd,skinnormal_vertex:$d,specularmap_fragment:Zd,specularmap_pars_fragment:Kd,tonemapping_fragment:Jd,tonemapping_pars_fragment:Qd,transmission_fragment:tu,transmission_pars_fragment:eu,uv_pars_fragment:nu,uv_pars_vertex:iu,uv_vertex:au,worldpos_vertex:ru,background_vert:su,background_frag:ou,backgroundCube_vert:cu,backgroundCube_frag:lu,cube_vert:du,cube_frag:uu,depth_vert:hu,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:_u,linedashed_vert:xu,linedashed_frag:vu,meshbasic_vert:Mu,meshbasic_frag:Su,meshlambert_vert:Eu,meshlambert_frag:yu,meshmatcap_vert:Tu,meshmatcap_frag:Au,meshnormal_vert:bu,meshnormal_frag:wu,meshphong_vert:Ru,meshphong_frag:Cu,meshphysical_vert:Pu,meshphysical_frag:Du,meshtoon_vert:Lu,meshtoon_frag:Iu,points_vert:Uu,points_frag:Nu,shadow_vert:Fu,shadow_frag:Ou,sprite_vert:Bu,sprite_frag:Hu},nt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Ge={basic:{uniforms:_e([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:_e([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:_e([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:_e([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:_e([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:_e([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:_e([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:_e([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:_e([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:_e([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:_e([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:_e([nt.common,nt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:_e([nt.lights,nt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Ge.physical={uniforms:_e([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const qi={r:0,b:0,g:0},Tn=new rn,zu=new se;function Vu(i,t,e,n,a,r,s){const o=new jt(0);let c=r===!0?0:1,l,h,u=null,f=0,m=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?e:t).get(y)),y}function v(T){let y=!1;const I=_(T);I===null?d(o,c):I&&I.isColor&&(d(I,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,y){const I=_(y);I&&(I.isCubeTexture||I.mapping===sa)?(h===void 0&&(h=new en(new Ei(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:ii(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Tn.copy(y.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zu.makeRotationFromEuler(Tn)),h.material.toneMapped=kt.getTransfer(I.colorSpace)!==$t,(u!==I||f!==I.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=I,f=I.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new en(new ca(2,2),new _n({name:"BackgroundMaterial",uniforms:ii(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=kt.getTransfer(I.colorSpace)!==$t,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||f!==I.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=I,f=I.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function d(T,y){T.getRGB(qi,uo(i)),n.buffers.color.setClear(qi.r,qi.g,qi.b,y,s)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),c=y,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,d(o,c)},render:v,addToRenderList:p,dispose:b}}function Gu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null);let r=a,s=!1;function o(M,C,Y,H,X){let K=!1;const k=u(H,Y,C);r!==k&&(r=k,l(r.object)),K=m(M,H,Y,X),K&&_(M,H,Y,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,y(M,C,Y,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,Y){const H=Y.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let K=X[C.id];K===void 0&&(K={},X[C.id]=K);let k=K[H];return k===void 0&&(k=f(c()),K[H]=k),k}function f(M){const C=[],Y=[],H=[];for(let X=0;X<e;X++)C[X]=0,Y[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Y,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,C,Y,H){const X=r.attributes,K=C.attributes;let k=0;const tt=Y.getAttributes();for(const V in tt)if(tt[V].location>=0){const ut=X[V];let xt=K[V];if(xt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),ut===void 0||ut.attribute!==xt||xt&&ut.data!==xt.data)return!0;k++}return r.attributesNum!==k||r.index!==H}function _(M,C,Y,H){const X={},K=C.attributes;let k=0;const tt=Y.getAttributes();for(const V in tt)if(tt[V].location>=0){let ut=K[V];ut===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const xt={};xt.attribute=ut,ut&&ut.data&&(xt.data=ut.data),X[V]=xt,k++}r.attributes=X,r.attributesNum=k,r.index=H}function v(){const M=r.newAttributes;for(let C=0,Y=M.length;C<Y;C++)M[C]=0}function p(M){d(M,0)}function d(M,C){const Y=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;Y[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),X[M]!==C&&(i.vertexAttribDivisor(M,C),X[M]=C)}function b(){const M=r.newAttributes,C=r.enabledAttributes;for(let Y=0,H=C.length;Y<H;Y++)C[Y]!==M[Y]&&(i.disableVertexAttribArray(Y),C[Y]=0)}function T(M,C,Y,H,X,K,k){k===!0?i.vertexAttribIPointer(M,C,Y,X,K):i.vertexAttribPointer(M,C,Y,H,X,K)}function y(M,C,Y,H){v();const X=H.attributes,K=Y.getAttributes(),k=C.defaultAttributeValues;for(const tt in K){const V=K[tt];if(V.location>=0){let at=X[tt];if(at===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){const ut=at.normalized,xt=at.itemSize,Nt=t.get(at);if(Nt===void 0)continue;const Zt=Nt.buffer,q=Nt.type,et=Nt.bytesPerElement,mt=q===i.INT||q===i.UNSIGNED_INT||at.gpuType===Dr;if(at.isInterleavedBufferAttribute){const rt=at.data,yt=rt.stride,Wt=at.offset;if(rt.isInstancedInterleavedBuffer){for(let wt=0;wt<V.locationSize;wt++)d(V.location+wt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let wt=0;wt<V.locationSize;wt++)p(V.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let wt=0;wt<V.locationSize;wt++)T(V.location+wt,xt/V.locationSize,q,ut,yt*et,(Wt+xt/V.locationSize*wt)*et,mt)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)d(V.location+rt,at.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let rt=0;rt<V.locationSize;rt++)T(V.location+rt,xt/V.locationSize,q,ut,xt*et,xt/V.locationSize*rt*et,mt)}}else if(k!==void 0){const ut=k[tt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}b()}function I(){U();for(const M in n){const C=n[M];for(const Y in C){const H=C[Y];for(const X in H)h(H[X].object),delete H[X];delete C[Y]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const Y in C){const H=C[Y];for(const X in H)h(H[X].object),delete H[X];delete C[Y]}delete n[M.id]}function R(M){for(const C in n){const Y=n[C];if(Y[M.id]===void 0)continue;const H=Y[M.id];for(const X in H)h(H[X].object),delete H[X];delete Y[M.id]}}function U(){E(),s=!0,r!==a&&(r=a,l(r.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function ku(i,t,e){let n;function a(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function s(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,n,1)}function c(l,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)s(l[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*f[v];e.update(_,n,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Wu(i,t,e,n){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==ze&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==an&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qe&&!U)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:I,maxSamples:w}}function Xu(i){const t=this;let e=null,n=0,a=!1,r=!1;const s=new bn,o=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||a;return a=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!a||_===null||_.length===0||r&&!p)r?h(null):l();else{const b=r?0:n,T=b*4;let y=d.clippingState||null;c.value=y,y=h(_,f,T,m);for(let I=0;I!==T;++I)y[I]=e[I];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,_!==!0||p===null){const d=m+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,y=m;T!==v;++T,y+=4)s.copy(u[T]).applyMatrix4(b,o),s.normal.toArray(p,y),p[y+3]=s.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function qu(i){let t=new WeakMap;function e(s,o){return o===Ka?s.mapping=ti:o===Ja&&(s.mapping=ei),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ka||o===Ja)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new $c(c.height);return l.fromEquirectangularTexture(i,s),t.set(s,l),s.addEventListener("dispose",a),e(l.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Zn=4,Ms=[.125,.215,.35,.446,.526,.582],Cn=20,Fa=new il,Ss=new jt;let Oa=null,Ba=0,Ha=0,za=!1;const wn=(1+Math.sqrt(5))/2,$n=1/wn,Es=[new B(-wn,$n,0),new B(wn,$n,0),new B(-$n,0,wn),new B($n,0,wn),new B(0,wn,-$n),new B(0,wn,$n),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Yu=new B;class ys{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100,r={}){const{size:s=256,position:o=Yu}=r;Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,a,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=As(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,Ba,Ha),this._renderer.xr.enabled=za,t.scissorTest=!1,Yi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ti||t.mapping===ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:_i,format:ze,colorSpace:ni,depthBuffer:!1},a=Ts(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ts(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ju(r)),this._blurMaterial=$u(r,t,e)}return a}_compileMaterial(t){const e=new en(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,a,r){const c=new De(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Ss),u.toneMapping=mn,u.autoClear=!1;const _=new oo({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),v=new en(new Ei,_);let p=!1;const d=t.background;d?d.isColor&&(_.color.copy(d),t.background=null,p=!0):(_.color.copy(Ss),p=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):T===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const y=this._cubeSize;Yi(a,T*y,b>2?y:0,y,y),u.setRenderTarget(a),p&&u.render(v,c),u.render(t,c)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=m,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===ti||t.mapping===ei;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=As());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new en(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Yi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(s,Fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Es[(a-r-1)%Es.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,a,"latitudinal",r),this._halfBlur(s,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new en(this._lodPlanes[a],l),f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Cn-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):Cn;p>Cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cn}`);const d=[];let b=0;for(let R=0;R<Cn;++R){const U=R/v,E=Math.exp(-U*U/2);d.push(E),R===0?b+=E:R<p&&(b+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const y=this._sizeLods[a],I=3*y*(a>T-Zn?a-T+Zn:0),w=4*(this._cubeSize-y);Yi(e,I,w,3*y,2*y),c.setRenderTarget(e),c.render(u,Fa)}}function ju(i){const t=[],e=[],n=[];let a=i;const r=i-Zn+1+Ms.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-Zn?c=Ms[s-i+Zn-1]:s===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,p=2,d=1,b=new Float32Array(v*_*m),T=new Float32Array(p*_*m),y=new Float32Array(d*_*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,U=w>2?0:-1,E=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];b.set(E,v*_*w),T.set(f,p*_*w);const M=[w,w,w,w,w,w];y.set(M,d*_*w)}const I=new sn;I.setAttribute("position",new Le(b,v)),I.setAttribute("uv",new Le(T,p)),I.setAttribute("faceIndex",new Le(y,d)),t.push(I),a>Zn&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ts(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function $u(i,t,e){const n=new Float32Array(Cn),a=new B(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Br(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function As(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function bs(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Br(){return`

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
	`}function Zu(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ka||c===Ja,h=c===ti||c===ei;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ys(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&a(m)?(e===null&&(e=new ys(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function a(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Ku(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const a=e(n);return a===null&&ta("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Ju(i,t,e,n){const a={},r=new WeakMap;function s(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete a[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function l(u){const f=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let T=0,y=b.length;T<y;T+=3){const I=b[T+0],w=b[T+1],R=b[T+2];f.push(I,w,w,R,R,I)}}else if(_!==void 0){const b=_.array;v=_.version;for(let T=0,y=b.length/3-1;T<y;T+=3){const I=T+0,w=T+1,R=T+2;f.push(I,w,w,R,R,I)}}else return;const p=new(no(f)?lo:co)(f,1);p.version=v;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Qu(i,t,e){let n;function a(f){n=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*s),e.update(m,n,1)}function l(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*s,_),e.update(m,n,_))}function h(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];e.update(p,n,1)}function u(f,m,_,v){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/s,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,_);let d=0;for(let b=0;b<_;b++)d+=m[b]*v[b];e.update(d,n,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function th(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function eh(i,t,e){const n=new WeakMap,a=new re;function r(s,o,c){const l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),v===!0&&(T=3);let y=o.attributes.position.count*T,I=1;y>t.maxTextureSize&&(I=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*I*4*u),R=new io(w,y,I,u);R.type=Qe,R.needsUpdate=!0;const U=T*4;for(let M=0;M<u;M++){const C=p[M],Y=d[M],H=b[M],X=y*I*4*M;for(let K=0;K<C.count;K++){const k=K*U;m===!0&&(a.fromBufferAttribute(C,K),w[X+k+0]=a.x,w[X+k+1]=a.y,w[X+k+2]=a.z,w[X+k+3]=0),_===!0&&(a.fromBufferAttribute(Y,K),w[X+k+4]=a.x,w[X+k+5]=a.y,w[X+k+6]=a.z,w[X+k+7]=0),v===!0&&(a.fromBufferAttribute(H,K),w[X+k+8]=a.x,w[X+k+9]=a.y,w[X+k+10]=a.z,w[X+k+11]=H.itemSize===4?a.w:1)}}f={count:u,texture:R,size:new Kt(y,I)},n.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function nh(i,t,e,n){let a=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(a.get(u)!==l&&(t.update(u),a.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==l&&(f.update(),a.set(f,l))}return u}function s(){a=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:s}}const xo=new Se,ws=new go(1,1),vo=new io,Mo=new Lc,So=new fo,Rs=[],Cs=[],Ps=new Float32Array(16),Ds=new Float32Array(9),Ls=new Float32Array(4);function ri(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=Rs[a];if(r===void 0&&(r=new Float32Array(a),Rs[a]=r),t!==0){n.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(r,o)}return r}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function la(i,t){let e=Cs[t];e===void 0&&(e=new Int32Array(t),Cs[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ih(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ah(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function rh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function sh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function oh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(le(e,n))return;Ls.set(n),i.uniformMatrix2fv(this.addr,!1,Ls),de(e,n)}}function ch(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(le(e,n))return;Ds.set(n),i.uniformMatrix3fv(this.addr,!1,Ds),de(e,n)}}function lh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(le(e,n))return;Ps.set(n),i.uniformMatrix4fv(this.addr,!1,Ps),de(e,n)}}function dh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function uh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function hh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function fh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function ph(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function gh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function _h(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function xh(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(ws.compareFunction=eo,r=ws):r=xo,e.setTexture2D(t||r,a)}function vh(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||Mo,a)}function Mh(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||So,a)}function Sh(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||vo,a)}function Eh(i){switch(i){case 5126:return ih;case 35664:return ah;case 35665:return rh;case 35666:return sh;case 35674:return oh;case 35675:return ch;case 35676:return lh;case 5124:case 35670:return dh;case 35667:case 35671:return uh;case 35668:case 35672:return hh;case 35669:case 35673:return fh;case 5125:return ph;case 36294:return mh;case 36295:return gh;case 36296:return _h;case 35678:case 36198:case 36298:case 36306:case 35682:return xh;case 35679:case 36299:case 36307:return vh;case 35680:case 36300:case 36308:case 36293:return Mh;case 36289:case 36303:case 36311:case 36292:return Sh}}function yh(i,t){i.uniform1fv(this.addr,t)}function Th(i,t){const e=ri(t,this.size,2);i.uniform2fv(this.addr,e)}function Ah(i,t){const e=ri(t,this.size,3);i.uniform3fv(this.addr,e)}function bh(i,t){const e=ri(t,this.size,4);i.uniform4fv(this.addr,e)}function wh(i,t){const e=ri(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rh(i,t){const e=ri(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ch(i,t){const e=ri(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ph(i,t){i.uniform1iv(this.addr,t)}function Dh(i,t){i.uniform2iv(this.addr,t)}function Lh(i,t){i.uniform3iv(this.addr,t)}function Ih(i,t){i.uniform4iv(this.addr,t)}function Uh(i,t){i.uniform1uiv(this.addr,t)}function Nh(i,t){i.uniform2uiv(this.addr,t)}function Fh(i,t){i.uniform3uiv(this.addr,t)}function Oh(i,t){i.uniform4uiv(this.addr,t)}function Bh(i,t,e){const n=this.cache,a=t.length,r=la(e,a);le(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||xo,r[s])}function Hh(i,t,e){const n=this.cache,a=t.length,r=la(e,a);le(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||Mo,r[s])}function zh(i,t,e){const n=this.cache,a=t.length,r=la(e,a);le(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||So,r[s])}function Vh(i,t,e){const n=this.cache,a=t.length,r=la(e,a);le(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||vo,r[s])}function Gh(i){switch(i){case 5126:return yh;case 35664:return Th;case 35665:return Ah;case 35666:return bh;case 35674:return wh;case 35675:return Rh;case 35676:return Ch;case 5124:case 35670:return Ph;case 35667:case 35671:return Dh;case 35668:case 35672:return Lh;case 35669:case 35673:return Ih;case 5125:return Uh;case 36294:return Nh;case 36295:return Fh;case 36296:return Oh;case 35678:case 36198:case 36298:case 36306:case 35682:return Bh;case 35679:case 36299:case 36307:return Hh;case 35680:case 36300:case 36308:case 36293:return zh;case 36289:case 36303:case 36311:case 36292:return Vh}}class kh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eh(e.type)}}class Wh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gh(e.type)}}class Xh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Is(i,t){i.seq.push(t),i.map[t.id]=t}function qh(i,t,e){const n=i.name,a=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),s=Va.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){Is(e,l===void 0?new kh(o,i,t):new Wh(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Xh(o),Is(e,u)),e=u}}}class ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);qh(r,s,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&n.push(s)}return n}}function Us(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Yh=37297;let jh=0;function $h(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}const Ns=new Lt;function Zh(i){kt._getMatrix(Ns,kt.workingColorSpace,i);const t=`mat3( ${Ns.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case na:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fs(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+$h(i.getShaderSource(t),s)}else return a}function Kh(i,t){const e=Zh(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jh(i,t){let e;switch(t){case ic:e="Linear";break;case ac:e="Reinhard";break;case rc:e="Cineon";break;case sc:e="ACESFilmic";break;case cc:e="AgX";break;case lc:e="Neutral";break;case oc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ji=new B;function Qh(){kt.getLuminanceCoefficients(ji);const i=ji.x.toFixed(4),t=ji.y.toFixed(4),e=ji.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hi).join(`
`)}function ef(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function hi(i){return i!==""}function Os(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bs(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const af=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cr(i){return i.replace(af,sf)}const rf=new Map;function sf(i,t){let e=Ut[t];if(e===void 0){const n=rf.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cr(e)}const of=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hs(i){return i.replace(of,cf)}function cf(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function zs(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ws?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ke&&(t="SHADOWMAP_TYPE_VSM"),t}function df(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ti:case ei:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ei:t="ENVMAP_MODE_REFRACTION";break}return t}function hf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xs:t="ENVMAP_BLENDING_MULTIPLY";break;case ec:t="ENVMAP_BLENDING_MIX";break;case nc:t="ENVMAP_BLENDING_ADD";break}return t}function ff(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function pf(i,t,e,n){const a=i.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const c=lf(e),l=df(e),h=uf(e),u=hf(e),f=ff(e),m=tf(e),_=ef(r),v=a.createProgram();let p,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hi).join(`
`),d.length>0&&(d+=`
`)):(p=[zs(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),d=[zs(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==mn?Jh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Kh("linearToOutputTexel",e.outputColorSpace),Qh(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hi).join(`
`)),s=Cr(s),s=Os(s,e),s=Bs(s,e),o=Cr(o),o=Os(o,e),o=Bs(o,e),s=Hs(s),o=Hs(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Qr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=b+p+s,y=b+d+o,I=Us(a,a.VERTEX_SHADER,T),w=Us(a,a.FRAGMENT_SHADER,y);a.attachShader(v,I),a.attachShader(v,w),e.index0AttributeName!==void 0?a.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function R(C){if(i.debug.checkShaderErrors){const Y=a.getProgramInfoLog(v).trim(),H=a.getShaderInfoLog(I).trim(),X=a.getShaderInfoLog(w).trim();let K=!0,k=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,v,I,w);else{const tt=Fs(a,I,"vertex"),V=Fs(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+tt+`
`+V)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(H===""||X==="")&&(k=!1);k&&(C.diagnostics={runnable:K,programLog:Y,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:d}})}a.deleteShader(I),a.deleteShader(w),U=new ea(a,v),E=nf(a,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(v,Yh)),M},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jh++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=w,this}let mf=0;class gf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _f(t),e.set(t,n)),n}}class _f{constructor(t){this.id=mf++,this.code=t,this.usedTimes=0}}function xf(i,t,e,n,a,r,s){const o=new ro,c=new gf,l=new Set,h=[],u=a.logarithmicDepthBuffer,f=a.vertexTextures;let m=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,M,C,Y,H){const X=Y.fog,K=H.geometry,k=E.isMeshStandardMaterial?Y.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),V=tt&&tt.mapping===sa?tt.image.height:null,at=_[E.type];E.precision!==null&&(m=a.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=ut!==void 0?ut.length:0;let Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let Zt,q,et,mt;if(at){const Yt=Ge[at];Zt=Yt.vertexShader,q=Yt.fragmentShader}else Zt=E.vertexShader,q=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),mt=c.getFragmentShaderID(E);const rt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Wt=H.isInstancedMesh===!0,wt=H.isBatchedMesh===!0,ae=!!E.map,ee=!!E.matcap,Ot=!!tt,A=!!E.aoMap,be=!!E.lightMap,zt=!!E.bumpMap,Bt=!!E.normalMap,vt=!!E.displacementMap,Qt=!!E.emissiveMap,_t=!!E.metalnessMap,S=!!E.roughnessMap,g=E.anisotropy>0,N=E.clearcoat>0,j=E.dispersion>0,Z=E.iridescence>0,G=E.sheen>0,gt=E.transmission>0,st=g&&!!E.anisotropyMap,Tt=N&&!!E.clearcoatMap,At=N&&!!E.clearcoatNormalMap,J=N&&!!E.clearcoatRoughnessMap,ht=Z&&!!E.iridescenceMap,bt=Z&&!!E.iridescenceThicknessMap,Ct=G&&!!E.sheenColorMap,ft=G&&!!E.sheenRoughnessMap,Ht=!!E.specularMap,It=!!E.specularColorMap,Jt=!!E.specularIntensityMap,P=gt&&!!E.transmissionMap,ot=gt&&!!E.thicknessMap,z=!!E.gradientMap,$=!!E.alphaMap,lt=E.alphaTest>0,ct=!!E.alphaHash,Dt=!!E.extensions;let ne=mn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ne=i.toneMapping);const fe={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:Zt,fragmentShader:q,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:wt,batchingColor:wt&&H._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&H.instanceColor!==null,instancingMorph:Wt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ni,alphaToCoverage:!!E.alphaToCoverage,map:ae,matcap:ee,envMap:Ot,envMapMode:Ot&&tt.mapping,envMapCubeUVHeight:V,aoMap:A,lightMap:be,bumpMap:zt,normalMap:Bt,displacementMap:f&&vt,emissiveMap:Qt,normalMapObjectSpace:Bt&&E.normalMapType===pc,normalMapTangentSpace:Bt&&E.normalMapType===fc,metalnessMap:_t,roughnessMap:S,anisotropy:g,anisotropyMap:st,clearcoat:N,clearcoatMap:Tt,clearcoatNormalMap:At,clearcoatRoughnessMap:J,dispersion:j,iridescence:Z,iridescenceMap:ht,iridescenceThicknessMap:bt,sheen:G,sheenColorMap:Ct,sheenRoughnessMap:ft,specularMap:Ht,specularColorMap:It,specularIntensityMap:Jt,transmission:gt,transmissionMap:P,thicknessMap:ot,gradientMap:z,opaque:E.transparent===!1&&E.blending===Kn&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:ct,combine:E.combine,mapUv:ae&&v(E.map.channel),aoMapUv:A&&v(E.aoMap.channel),lightMapUv:be&&v(E.lightMap.channel),bumpMapUv:zt&&v(E.bumpMap.channel),normalMapUv:Bt&&v(E.normalMap.channel),displacementMapUv:vt&&v(E.displacementMap.channel),emissiveMapUv:Qt&&v(E.emissiveMap.channel),metalnessMapUv:_t&&v(E.metalnessMap.channel),roughnessMapUv:S&&v(E.roughnessMap.channel),anisotropyMapUv:st&&v(E.anisotropyMap.channel),clearcoatMapUv:Tt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(E.sheenRoughnessMap.channel),specularMapUv:Ht&&v(E.specularMap.channel),specularColorMapUv:It&&v(E.specularColorMap.channel),specularIntensityMapUv:Jt&&v(E.specularIntensityMap.channel),transmissionMapUv:P&&v(E.transmissionMap.channel),thicknessMapUv:ot&&v(E.thicknessMap.channel),alphaMapUv:$&&v(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Bt||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(ae||$),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:yt,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ae&&E.map.isVideoTexture===!0&&kt.getTransfer(E.map.colorSpace)===$t,decodeVideoTextureEmissive:Qt&&E.emissiveMap.isVideoTexture===!0&&kt.getTransfer(E.emissiveMap.colorSpace)===$t,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Je,flipSided:E.side===Me,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(b(M,E),T(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function T(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const M=_[E.type];let C;if(M){const Y=Ge[M];C=Xc.clone(Y.uniforms)}else C=E.uniforms;return C}function I(E,M){let C;for(let Y=0,H=h.length;Y<H;Y++){const X=h[Y];if(X.cacheKey===M){C=X,++C.usedTimes;break}}return C===void 0&&(C=new pf(i,M,E,r),h.push(C)),C}function w(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function R(E){c.remove(E)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:I,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:U}}function vf(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:a,dispose:r}}function Mf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vs(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gs(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function s(u,f,m,_,v,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=v,d.group=p),t++,d}function o(u,f,m,_,v,p){const d=s(u,f,m,_,v,p);m.transmission>0?n.push(d):m.transparent===!0?a.push(d):e.push(d)}function c(u,f,m,_,v,p){const d=s(u,f,m,_,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?a.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Mf),n.length>1&&n.sort(f||Vs),a.length>1&&a.sort(f||Vs)}function h(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:h,sort:l}}function Sf(){let i=new WeakMap;function t(n,a){const r=i.get(n);let s;return r===void 0?(s=new Gs,i.set(n,[s])):a>=r.length?(s=new Gs,r.push(s)):s=r[a],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ef(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new jt};break;case"SpotLight":e={position:new B,direction:new B,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function yf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tf=0;function Af(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bf(i){const t=new Ef,e=yf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const a=new B,r=new se,s=new se;function o(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,v=0,p=0,d=0,b=0,T=0,y=0,I=0,w=0,R=0;l.sort(Af);for(let E=0,M=l.length;E<M;E++){const C=l[E],Y=C.color,H=C.intensity,X=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=Y.r*H,u+=Y.g*H,f+=Y.b*H;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],H);R++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const tt=C.shadow,V=e.get(C);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=k,m++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(Y).multiplyScalar(H),k.distance=X,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[v]=k;const tt=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,tt.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=tt.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=K,y++}v++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(Y).multiplyScalar(H),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=k,p++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const tt=C.shadow,V=e.get(C);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=C.shadow.matrix,T++}n.point[_]=k,_++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(H),k.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[d]=k,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==y||U.numSpotMaps!==I||U.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,U.directionalLength=m,U.pointLength=_,U.spotLength=v,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=y,U.numSpotMaps=I,U.numLightProbes=R,n.version=Tf++)}function c(l,h){let u=0,f=0,m=0,_=0,v=0;const p=h.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const T=l[d];if(T.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(p),u++}else if(T.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),s.identity(),r.copy(T.matrixWorld),r.premultiply(p),s.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(T.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:n}}function ks(i){const t=new bf(i),e=[],n=[];function a(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function s(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function wf(i){let t=new WeakMap;function e(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new ks(i),t.set(a,[o])):r>=s.length?(o=new ks(i),s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Rf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cf=`uniform sampler2D shadow_pass;
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
}`;function Pf(i,t,e){let n=new po;const a=new Kt,r=new Kt,s=new re,o=new el({depthPacking:hc}),c=new nl,l={},h=e.maxTextureSize,u={[gn]:Me,[Me]:gn,[Je]:Je},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Rf,fragmentShader:Cf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new en(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let d=this.type;this.render=function(w,R,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(pn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const H=d!==Ke&&this.type===Ke,X=d===Ke&&this.type!==Ke;for(let K=0,k=w.length;K<k;K++){const tt=w[K],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const at=V.getFrameExtents();if(a.multiply(at),r.copy(V.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/at.x),a.x=r.x*at.x,V.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/at.y),a.y=r.y*at.y,V.mapSize.y=r.y)),V.map===null||H===!0||X===!0){const xt=this.type!==Ke?{minFilter:Ve,magFilter:Ve}:{};V.map!==null&&V.map.dispose(),V.map=new Un(a.x,a.y,xt),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ut=V.getViewportCount();for(let xt=0;xt<ut;xt++){const Nt=V.getViewport(xt);s.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),Y.viewport(s),V.updateMatrices(tt,xt),n=V.getFrustum(),y(R,U,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Ke&&b(V,U),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(E,M,C)};function b(w,R){const U=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Un(a.x,a.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,U,f,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,U,m,v,null)}function T(w,R,U,E){let M=null;const C=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=U.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const Y=M.uuid,H=R.uuid;let X=l[Y];X===void 0&&(X={},l[Y]=X);let K=X[H];K===void 0&&(K=M.clone(),X[H]=K,R.addEventListener("dispose",I)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,E===Ke?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=i.properties.get(M);Y.light=U}return M}function y(w,R,U,E,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ke)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const H=t.update(w),X=w.material;if(Array.isArray(X)){const K=H.groups;for(let k=0,tt=K.length;k<tt;k++){const V=K[k],at=X[V.materialIndex];if(at&&at.visible){const ut=T(w,at,E,M);w.onBeforeShadow(i,w,R,U,H,ut,V),i.renderBufferDirect(U,null,H,ut,w,V),w.onAfterShadow(i,w,R,U,H,ut,V)}}}else if(X.visible){const K=T(w,X,E,M);w.onBeforeShadow(i,w,R,U,H,K,null),i.renderBufferDirect(U,null,H,K,w,null),w.onAfterShadow(i,w,R,U,H,K,null)}}const Y=w.children;for(let H=0,X=Y.length;H<X;H++)y(Y[H],R,U,E,M)}function I(w){w.target.removeEventListener("dispose",I);for(const U in l){const E=l[U],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Df={[Wa]:Xa,[qa]:$a,[Ya]:Za,[Qn]:ja,[Xa]:Wa,[$a]:qa,[Za]:Ya,[ja]:Qn};function Lf(i,t){function e(){let P=!1;const ot=new re;let z=null;const $=new re(0,0,0,0);return{setMask:function(lt){z!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),z=lt)},setLocked:function(lt){P=lt},setClear:function(lt,ct,Dt,ne,fe){fe===!0&&(lt*=ne,ct*=ne,Dt*=ne),ot.set(lt,ct,Dt,ne),$.equals(ot)===!1&&(i.clearColor(lt,ct,Dt,ne),$.copy(ot))},reset:function(){P=!1,z=null,$.set(-1,0,0,0)}}}function n(){let P=!1,ot=!1,z=null,$=null,lt=null;return{setReversed:function(ct){if(ot!==ct){const Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ot=ct;const ne=lt;lt=null,this.setClear(ne)}},getReversed:function(){return ot},setTest:function(ct){ct?rt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(ct){z!==ct&&!P&&(i.depthMask(ct),z=ct)},setFunc:function(ct){if(ot&&(ct=Df[ct]),$!==ct){switch(ct){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Qn:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ct}},setLocked:function(ct){P=ct},setClear:function(ct){lt!==ct&&(ot&&(ct=1-ct),i.clearDepth(ct),lt=ct)},reset:function(){P=!1,z=null,$=null,lt=null,ot=!1}}}function a(){let P=!1,ot=null,z=null,$=null,lt=null,ct=null,Dt=null,ne=null,fe=null;return{setTest:function(Yt){P||(Yt?rt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(Yt){ot!==Yt&&!P&&(i.stencilMask(Yt),ot=Yt)},setFunc:function(Yt,Ue,We){(z!==Yt||$!==Ue||lt!==We)&&(i.stencilFunc(Yt,Ue,We),z=Yt,$=Ue,lt=We)},setOp:function(Yt,Ue,We){(ct!==Yt||Dt!==Ue||ne!==We)&&(i.stencilOp(Yt,Ue,We),ct=Yt,Dt=Ue,ne=We)},setLocked:function(Yt){P=Yt},setClear:function(Yt){fe!==Yt&&(i.clearStencil(Yt),fe=Yt)},reset:function(){P=!1,ot=null,z=null,$=null,lt=null,ct=null,Dt=null,ne=null,fe=null}}}const r=new e,s=new n,o=new a,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,m=[],_=null,v=!1,p=null,d=null,b=null,T=null,y=null,I=null,w=null,R=new jt(0,0,0),U=0,E=!1,M=null,C=null,Y=null,H=null,X=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,tt=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=tt>=2);let at=null,ut={};const xt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Zt=new re().fromArray(xt),q=new re().fromArray(Nt);function et(P,ot,z,$){const lt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(P,ct),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<z;Dt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ot+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ct}const mt={};mt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),s.setFunc(Qn),zt(!1),Bt(Yr),rt(i.CULL_FACE),A(pn);function rt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function yt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Wt(P,ot){return u[P]!==ot?(i.bindFramebuffer(P,ot),u[P]=ot,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function wt(P,ot){let z=m,$=!1;if(P){z=f.get(ot),z===void 0&&(z=[],f.set(ot,z));const lt=P.textures;if(z.length!==lt.length||z[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Dt=lt.length;ct<Dt;ct++)z[ct]=i.COLOR_ATTACHMENT0+ct;z.length=lt.length,$=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,$=!0);$&&i.drawBuffers(z)}function ae(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const ee={[Rn]:i.FUNC_ADD,[Bo]:i.FUNC_SUBTRACT,[Ho]:i.FUNC_REVERSE_SUBTRACT};ee[zo]=i.MIN,ee[Vo]=i.MAX;const Ot={[Go]:i.ZERO,[ko]:i.ONE,[Wo]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Zo]:i.SRC_ALPHA_SATURATE,[jo]:i.DST_COLOR,[qo]:i.DST_ALPHA,[Xo]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[$o]:i.ONE_MINUS_DST_COLOR,[Yo]:i.ONE_MINUS_DST_ALPHA,[Ko]:i.CONSTANT_COLOR,[Jo]:i.ONE_MINUS_CONSTANT_COLOR,[Qo]:i.CONSTANT_ALPHA,[tc]:i.ONE_MINUS_CONSTANT_ALPHA};function A(P,ot,z,$,lt,ct,Dt,ne,fe,Yt){if(P===pn){v===!0&&(yt(i.BLEND),v=!1);return}if(v===!1&&(rt(i.BLEND),v=!0),P!==Oo){if(P!==p||Yt!==E){if((d!==Rn||y!==Rn)&&(i.blendEquation(i.FUNC_ADD),d=Rn,y=Rn),Yt)switch(P){case Kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.ONE,i.ONE);break;case $r:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $r:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,T=null,I=null,w=null,R.set(0,0,0),U=0,p=P,E=Yt}return}lt=lt||ot,ct=ct||z,Dt=Dt||$,(ot!==d||lt!==y)&&(i.blendEquationSeparate(ee[ot],ee[lt]),d=ot,y=lt),(z!==b||$!==T||ct!==I||Dt!==w)&&(i.blendFuncSeparate(Ot[z],Ot[$],Ot[ct],Ot[Dt]),b=z,T=$,I=ct,w=Dt),(ne.equals(R)===!1||fe!==U)&&(i.blendColor(ne.r,ne.g,ne.b,fe),R.copy(ne),U=fe),p=P,E=!1}function be(P,ot){P.side===Je?yt(i.CULL_FACE):rt(i.CULL_FACE);let z=P.side===Me;ot&&(z=!z),zt(z),P.blending===Kn&&P.transparent===!1?A(pn):A(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const $=P.stencilWrite;o.setTest($),$&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Qt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function Bt(P){P!==Uo?(rt(i.CULL_FACE),P!==C&&(P===Yr?i.cullFace(i.BACK):P===No?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),C=P}function vt(P){P!==Y&&(k&&i.lineWidth(P),Y=P)}function Qt(P,ot,z){P?(rt(i.POLYGON_OFFSET_FILL),(H!==ot||X!==z)&&(i.polygonOffset(ot,z),H=ot,X=z)):yt(i.POLYGON_OFFSET_FILL)}function _t(P){P?rt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function S(P){P===void 0&&(P=i.TEXTURE0+K-1),at!==P&&(i.activeTexture(P),at=P)}function g(P,ot,z){z===void 0&&(at===null?z=i.TEXTURE0+K-1:z=at);let $=ut[z];$===void 0&&($={type:void 0,texture:void 0},ut[z]=$),($.type!==P||$.texture!==ot)&&(at!==z&&(i.activeTexture(z),at=z),i.bindTexture(P,ot||mt[P]),$.type=P,$.texture=ot)}function N(){const P=ut[at];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(P){Zt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Zt.copy(P))}function ft(P){q.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Ht(P,ot){let z=l.get(ot);z===void 0&&(z=new WeakMap,l.set(ot,z));let $=z.get(P);$===void 0&&($=i.getUniformBlockIndex(ot,P.name),z.set(P,$))}function It(P,ot){const $=l.get(ot).get(P);c.get(ot)!==$&&(i.uniformBlockBinding(ot,$,P.__bindingPointIndex),c.set(ot,$))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,ut={},u={},f=new WeakMap,m=[],_=null,v=!1,p=null,d=null,b=null,T=null,y=null,I=null,w=null,R=new jt(0,0,0),U=0,E=!1,M=null,C=null,Y=null,H=null,X=null,Zt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:rt,disable:yt,bindFramebuffer:Wt,drawBuffers:wt,useProgram:ae,setBlending:A,setMaterial:be,setFlipSided:zt,setCullFace:Bt,setLineWidth:vt,setPolygonOffset:Qt,setScissorTest:_t,activeTexture:S,bindTexture:g,unbindTexture:N,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:ht,texImage3D:bt,updateUBOMapping:Ht,uniformBlockBinding:It,texStorage2D:At,texStorage3D:J,texSubImage2D:G,texSubImage3D:gt,compressedTexSubImage2D:st,compressedTexSubImage3D:Tt,scissor:Ct,viewport:ft,reset:Jt}}function If(i,t,e,n,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return m?new OffscreenCanvas(S,g):aa("canvas")}function v(S,g,N){let j=1;const Z=_t(S);if((Z.width>N||Z.height>N)&&(j=N/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(j*Z.width),gt=Math.floor(j*Z.height);u===void 0&&(u=_(G,gt));const st=g?_(G,gt):u;return st.width=G,st.height=gt,st.getContext("2d").drawImage(S,0,0,G,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+gt+")."),st}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function p(S){return S.generateMipmaps}function d(S){i.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,g,N,j,Z=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=g;if(g===i.RED&&(N===i.FLOAT&&(G=i.R32F),N===i.HALF_FLOAT&&(G=i.R16F),N===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(G=i.R8UI),N===i.UNSIGNED_SHORT&&(G=i.R16UI),N===i.UNSIGNED_INT&&(G=i.R32UI),N===i.BYTE&&(G=i.R8I),N===i.SHORT&&(G=i.R16I),N===i.INT&&(G=i.R32I)),g===i.RG&&(N===i.FLOAT&&(G=i.RG32F),N===i.HALF_FLOAT&&(G=i.RG16F),N===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(G=i.RG8UI),N===i.UNSIGNED_SHORT&&(G=i.RG16UI),N===i.UNSIGNED_INT&&(G=i.RG32UI),N===i.BYTE&&(G=i.RG8I),N===i.SHORT&&(G=i.RG16I),N===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(G=i.RGB8UI),N===i.UNSIGNED_SHORT&&(G=i.RGB16UI),N===i.UNSIGNED_INT&&(G=i.RGB32UI),N===i.BYTE&&(G=i.RGB8I),N===i.SHORT&&(G=i.RGB16I),N===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),N===i.UNSIGNED_INT&&(G=i.RGBA32UI),N===i.BYTE&&(G=i.RGBA8I),N===i.SHORT&&(G=i.RGBA16I),N===i.INT&&(G=i.RGBA32I)),g===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),g===i.RGBA){const gt=Z?na:kt.getTransfer(j);N===i.FLOAT&&(G=i.RGBA32F),N===i.HALF_FLOAT&&(G=i.RGBA16F),N===i.UNSIGNED_BYTE&&(G=gt===$t?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(S,g){let N;return S?g===null||g===In||g===pi?N=i.DEPTH24_STENCIL8:g===Qe?N=i.DEPTH32F_STENCIL8:g===fi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===In||g===pi?N=i.DEPTH_COMPONENT24:g===Qe?N=i.DEPTH_COMPONENT32F:g===fi&&(N=i.DEPTH_COMPONENT16),N}function I(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ve&&S.minFilter!==ke?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function w(S){const g=S.target;g.removeEventListener("dispose",w),U(g),g.isVideoTexture&&h.delete(g)}function R(S){const g=S.target;g.removeEventListener("dispose",R),M(g)}function U(S){const g=n.get(S);if(g.__webglInit===void 0)return;const N=S.source,j=f.get(N);if(j){const Z=j[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(S),Object.keys(j).length===0&&f.delete(N)}n.remove(S)}function E(S){const g=n.get(S);i.deleteTexture(g.__webglTexture);const N=S.source,j=f.get(N);delete j[g.__cacheKey],s.memory.textures--}function M(S){const g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let Z=0;Z<g.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)i.deleteFramebuffer(g.__webglFramebuffer[j]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=S.textures;for(let j=0,Z=N.length;j<Z;j++){const G=n.get(N[j]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),s.memory.textures--),n.remove(N[j])}n.remove(S)}let C=0;function Y(){C=0}function H(){const S=C;return S>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),C+=1,S}function X(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function K(S,g){const N=n.get(S);if(S.isVideoTexture&&vt(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,S,g);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function k(S,g){const N=n.get(S);if(S.version>0&&N.__version!==S.version){q(N,S,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function tt(S,g){const N=n.get(S);if(S.version>0&&N.__version!==S.version){q(N,S,g);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function V(S,g){const N=n.get(S);if(S.version>0&&N.__version!==S.version){et(N,S,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const at={[Qa]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[tr]:i.MIRRORED_REPEAT},ut={[Ve]:i.NEAREST,[dc]:i.NEAREST_MIPMAP_NEAREST,[Ai]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},xt={[mc]:i.NEVER,[Sc]:i.ALWAYS,[gc]:i.LESS,[eo]:i.LEQUAL,[_c]:i.EQUAL,[Mc]:i.GEQUAL,[xc]:i.GREATER,[vc]:i.NOTEQUAL};function Nt(S,g){if(g.type===Qe&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===ke||g.magFilter===ha||g.magFilter===Ai||g.magFilter===Dn||g.minFilter===ke||g.minFilter===ha||g.minFilter===Ai||g.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,at[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,at[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,at[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ut[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ut[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,xt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ve||g.minFilter!==Ai&&g.minFilter!==Dn||g.type===Qe&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Zt(S,g){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",w));const j=g.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const G=X(g);if(G!==S.__cacheKey){Z[G]===void 0&&(Z[G]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,N=!0),Z[G].usedTimes++;const gt=Z[S.__cacheKey];gt!==void 0&&(Z[S.__cacheKey].usedTimes--,gt.usedTimes===0&&E(g)),S.__cacheKey=G,S.__webglTexture=Z[G].texture}return N}function q(S,g,N){let j=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=i.TEXTURE_3D);const Z=Zt(S,g),G=g.source;e.bindTexture(j,S.__webglTexture,i.TEXTURE0+N);const gt=n.get(G);if(G.version!==gt.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const st=kt.getPrimaries(kt.workingColorSpace),Tt=g.colorSpace===fn?null:kt.getPrimaries(g.colorSpace),At=g.colorSpace===fn||st===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let J=v(g.image,!1,a.maxTextureSize);J=Qt(g,J);const ht=r.convert(g.format,g.colorSpace),bt=r.convert(g.type);let Ct=T(g.internalFormat,ht,bt,g.colorSpace,g.isVideoTexture);Nt(j,g);let ft;const Ht=g.mipmaps,It=g.isVideoTexture!==!0,Jt=gt.__version===void 0||Z===!0,P=G.dataReady,ot=I(g,J);if(g.isDepthTexture)Ct=y(g.format===gi,g.type),Jt&&(It?e.texStorage2D(i.TEXTURE_2D,1,Ct,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Ct,J.width,J.height,0,ht,bt,null));else if(g.isDataTexture)if(Ht.length>0){It&&Jt&&e.texStorage2D(i.TEXTURE_2D,ot,Ct,Ht[0].width,Ht[0].height);for(let z=0,$=Ht.length;z<$;z++)ft=Ht[z],It?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft.width,ft.height,ht,bt,ft.data):e.texImage2D(i.TEXTURE_2D,z,Ct,ft.width,ft.height,0,ht,bt,ft.data);g.generateMipmaps=!1}else It?(Jt&&e.texStorage2D(i.TEXTURE_2D,ot,Ct,J.width,J.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ht,bt,J.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,J.width,J.height,0,ht,bt,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){It&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ct,Ht[0].width,Ht[0].height,J.depth);for(let z=0,$=Ht.length;z<$;z++)if(ft=Ht[z],g.format!==ze)if(ht!==null)if(It){if(P)if(g.layerUpdates.size>0){const lt=vs(ft.width,ft.height,g.format,g.type);for(const ct of g.layerUpdates){const Dt=ft.data.subarray(ct*lt/ft.data.BYTES_PER_ELEMENT,(ct+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,ct,ft.width,ft.height,1,ht,Dt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ft.width,ft.height,J.depth,ht,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Ct,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ft.width,ft.height,J.depth,ht,bt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Ct,ft.width,ft.height,J.depth,0,ht,bt,ft.data)}else{It&&Jt&&e.texStorage2D(i.TEXTURE_2D,ot,Ct,Ht[0].width,Ht[0].height);for(let z=0,$=Ht.length;z<$;z++)ft=Ht[z],g.format!==ze?ht!==null?It?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,ft.width,ft.height,ht,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Ct,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft.width,ft.height,ht,bt,ft.data):e.texImage2D(i.TEXTURE_2D,z,Ct,ft.width,ft.height,0,ht,bt,ft.data)}else if(g.isDataArrayTexture)if(It){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ct,J.width,J.height,J.depth),P)if(g.layerUpdates.size>0){const z=vs(J.width,J.height,g.format,g.type);for(const $ of g.layerUpdates){const lt=J.data.subarray($*z/J.data.BYTES_PER_ELEMENT,($+1)*z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,ht,bt,lt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ht,bt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,J.width,J.height,J.depth,0,ht,bt,J.data);else if(g.isData3DTexture)It?(Jt&&e.texStorage3D(i.TEXTURE_3D,ot,Ct,J.width,J.height,J.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ht,bt,J.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,J.width,J.height,J.depth,0,ht,bt,J.data);else if(g.isFramebufferTexture){if(Jt)if(It)e.texStorage2D(i.TEXTURE_2D,ot,Ct,J.width,J.height);else{let z=J.width,$=J.height;for(let lt=0;lt<ot;lt++)e.texImage2D(i.TEXTURE_2D,lt,Ct,z,$,0,ht,bt,null),z>>=1,$>>=1}}else if(Ht.length>0){if(It&&Jt){const z=_t(Ht[0]);e.texStorage2D(i.TEXTURE_2D,ot,Ct,z.width,z.height)}for(let z=0,$=Ht.length;z<$;z++)ft=Ht[z],It?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ht,bt,ft):e.texImage2D(i.TEXTURE_2D,z,Ct,ht,bt,ft);g.generateMipmaps=!1}else if(It){if(Jt){const z=_t(J);e.texStorage2D(i.TEXTURE_2D,ot,Ct,z.width,z.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,bt,J)}else e.texImage2D(i.TEXTURE_2D,0,Ct,ht,bt,J);p(g)&&d(j),gt.__version=G.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function et(S,g,N){if(g.image.length!==6)return;const j=Zt(S,g),Z=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);const G=n.get(Z);if(Z.version!==G.__version||j===!0){e.activeTexture(i.TEXTURE0+N);const gt=kt.getPrimaries(kt.workingColorSpace),st=g.colorSpace===fn?null:kt.getPrimaries(g.colorSpace),Tt=g.colorSpace===fn||gt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,ht=[];for(let $=0;$<6;$++)!At&&!J?ht[$]=v(g.image[$],!0,a.maxCubemapSize):ht[$]=J?g.image[$].image:g.image[$],ht[$]=Qt(g,ht[$]);const bt=ht[0],Ct=r.convert(g.format,g.colorSpace),ft=r.convert(g.type),Ht=T(g.internalFormat,Ct,ft,g.colorSpace),It=g.isVideoTexture!==!0,Jt=G.__version===void 0||j===!0,P=Z.dataReady;let ot=I(g,bt);Nt(i.TEXTURE_CUBE_MAP,g);let z;if(At){It&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Ht,bt.width,bt.height);for(let $=0;$<6;$++){z=ht[$].mipmaps;for(let lt=0;lt<z.length;lt++){const ct=z[lt];g.format!==ze?Ct!==null?It?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Ht,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ct.width,ct.height,Ct,ft,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Ht,ct.width,ct.height,0,Ct,ft,ct.data)}}}else{if(z=g.mipmaps,It&&Jt){z.length>0&&ot++;const $=_t(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Ht,$.width,$.height)}for(let $=0;$<6;$++)if(J){It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ht[$].width,ht[$].height,Ct,ft,ht[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ht,ht[$].width,ht[$].height,0,Ct,ft,ht[$].data);for(let lt=0;lt<z.length;lt++){const Dt=z[lt].image[$].image;It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Dt.width,Dt.height,Ct,ft,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Ht,Dt.width,Dt.height,0,Ct,ft,Dt.data)}}else{It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct,ft,ht[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ht,Ct,ft,ht[$]);for(let lt=0;lt<z.length;lt++){const ct=z[lt];It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Ct,ft,ct.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Ht,Ct,ft,ct.image[$])}}}p(g)&&d(i.TEXTURE_CUBE_MAP),G.__version=Z.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function mt(S,g,N,j,Z,G){const gt=r.convert(N.format,N.colorSpace),st=r.convert(N.type),Tt=T(N.internalFormat,gt,st,N.colorSpace),At=n.get(g),J=n.get(N);if(J.__renderTarget=g,!At.__hasExternalTextures){const ht=Math.max(1,g.width>>G),bt=Math.max(1,g.height>>G);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,G,Tt,ht,bt,g.depth,0,gt,st,null):e.texImage2D(Z,G,Tt,ht,bt,0,gt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),Bt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,J.__webglTexture,0,zt(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,J.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(S,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){const j=g.depthTexture,Z=j&&j.isDepthTexture?j.type:null,G=y(g.stencilBuffer,Z),gt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=zt(g);Bt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,G,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,S)}else{const j=g.textures;for(let Z=0;Z<j.length;Z++){const G=j[Z],gt=r.convert(G.format,G.colorSpace),st=r.convert(G.type),Tt=T(G.internalFormat,gt,st,G.colorSpace),At=zt(g);N&&Bt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Tt,g.width,g.height):Bt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Tt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(g.depthTexture);j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const Z=j.__webglTexture,G=zt(g);if(g.depthTexture.format===mi)Bt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===gi)Bt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Wt(S){const g=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const j=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=j}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const j=S.texture.mipmaps;j&&j.length>0?yt(g.__webglFramebuffer[0],S):yt(g.__webglFramebuffer,S)}else if(N){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=i.createRenderbuffer(),rt(g.__webglDepthbuffer[j],S,!1);else{const Z=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}else{const j=S.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),rt(g.__webglDepthbuffer,S,!1);else{const Z=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(S,g,N){const j=n.get(S);g!==void 0&&mt(j.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Wt(S)}function ae(S){const g=S.texture,N=n.get(S),j=n.get(g);S.addEventListener("dispose",R);const Z=S.textures,G=S.isWebGLCubeRenderTarget===!0,gt=Z.length>1;if(gt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=g.version,s.memory.textures++),G){N.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[st]=[];for(let Tt=0;Tt<g.mipmaps.length;Tt++)N.__webglFramebuffer[st][Tt]=i.createFramebuffer()}else N.__webglFramebuffer[st]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)N.__webglFramebuffer[st]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(gt)for(let st=0,Tt=Z.length;st<Tt;st++){const At=n.get(Z[st]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),s.memory.textures++)}if(S.samples>0&&Bt(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let st=0;st<Z.length;st++){const Tt=Z[st];N.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[st]);const At=r.convert(Tt.format,Tt.colorSpace),J=r.convert(Tt.type),ht=T(Tt.internalFormat,At,J,Tt.colorSpace,S.isXRRenderTarget===!0),bt=zt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ht,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,N.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let Tt=0;Tt<g.mipmaps.length;Tt++)mt(N.__webglFramebuffer[st][Tt],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt);else mt(N.__webglFramebuffer[st],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(g)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let st=0,Tt=Z.length;st<Tt;st++){const At=Z[st],J=n.get(At);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Nt(i.TEXTURE_2D,At),mt(N.__webglFramebuffer,S,At,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),p(At)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(st=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,j.__webglTexture),Nt(st,g),g.mipmaps&&g.mipmaps.length>0)for(let Tt=0;Tt<g.mipmaps.length;Tt++)mt(N.__webglFramebuffer[Tt],S,g,i.COLOR_ATTACHMENT0,st,Tt);else mt(N.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,st,0);p(g)&&d(st),e.unbindTexture()}S.depthBuffer&&Wt(S)}function ee(S){const g=S.textures;for(let N=0,j=g.length;N<j;N++){const Z=g[N];if(p(Z)){const G=b(S),gt=n.get(Z).__webglTexture;e.bindTexture(G,gt),d(G),e.unbindTexture()}}}const Ot=[],A=[];function be(S){if(S.samples>0){if(Bt(S)===!1){const g=S.textures,N=S.width,j=S.height;let Z=i.COLOR_BUFFER_BIT;const G=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(S),st=g.length>1;if(st)for(let At=0;At<g.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const Tt=S.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let At=0;At<g.length;At++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[At]);const J=n.get(g[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,N,j,0,0,N,j,Z,i.NEAREST),c===!0&&(Ot.length=0,A.length=0,Ot.push(i.COLOR_ATTACHMENT0+At),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ot.push(G),A.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let At=0;At<g.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,gt.__webglColorRenderbuffer[At]);const J=n.get(g[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,J,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function zt(S){return Math.min(a.maxSamples,S.samples)}function Bt(S){const g=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function vt(S){const g=s.render.frame;h.get(S)!==g&&(h.set(S,g),S.update())}function Qt(S,g){const N=S.colorSpace,j=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==ni&&N!==fn&&(kt.getTransfer(N)===$t?(j!==ze||Z!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function _t(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=wt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Bt}function Uf(i,t){function e(n,a=fn){let r;const s=kt.getTransfer(a);if(n===an)return i.UNSIGNED_BYTE;if(n===Lr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ir)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$s)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ys)return i.BYTE;if(n===js)return i.SHORT;if(n===fi)return i.UNSIGNED_SHORT;if(n===Dr)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Qe)return i.FLOAT;if(n===_i)return i.HALF_FLOAT;if(n===Zs)return i.ALPHA;if(n===Ks)return i.RGB;if(n===ze)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Js)return i.RED;if(n===Ur)return i.RED_INTEGER;if(n===Qs)return i.RG;if(n===Nr)return i.RG_INTEGER;if(n===Fr)return i.RGBA_INTEGER;if(n===$i||n===Zi||n===Ki||n===Ji)if(s===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$i)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ki)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ji)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$i)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ki)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ji)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===er||n===nr||n===ir||n===ar)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===er)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ir)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ar)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rr||n===sr||n===or)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rr||n===sr)return s===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===or)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cr||n===lr||n===dr||n===ur||n===hr||n===fr||n===pr||n===mr||n===gr||n===_r||n===xr||n===vr||n===Mr||n===Sr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ur)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_r)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sr)return s===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qi||n===Er||n===yr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qi)return s===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Er)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===to||n===Tr||n===Ar||n===br)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qi)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===br)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Nf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ff=`
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

}`;class Of{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const a=new Se,r=t.properties.get(a);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:Nf,fragmentShader:Ff,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bf extends ai{constructor(t,e){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,_=null;const v=new Of,p=e.getContextAttributes();let d=null,b=null;const T=[],y=[],I=new Kt;let w=null;const R=new De;R.viewport=new re;const U=new De;U.viewport=new re;const E=[R,U],M=new al;let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=T[q];return et===void 0&&(et=new Ua,T[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=T[q];return et===void 0&&(et=new Ua,T[q]=et),et.getGripSpace()},this.getHand=function(q){let et=T[q];return et===void 0&&(et=new Ua,T[q]=et),et.getHandSpace()};function H(q){const et=y.indexOf(q.inputSource);if(et===-1)return;const mt=T[et];mt!==void 0&&(mt.update(q.inputSource,q.frame,l||s),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",K);for(let q=0;q<T.length;q++){const et=y[q];et!==null&&(y[q]=null,T[q].disconnect(et))}C=null,Y=null,v.reset(),t.setRenderTarget(d),m=null,f=null,u=null,a=null,b=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(d=t.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",X),a.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,rt=null,yt=null;p.depth&&(yt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=p.stencil?gi:mi,rt=p.stencil?pi:In);const Wt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=new XRWebGLBinding(a,e),f=u.createProjectionLayer(Wt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Un(f.textureWidth,f.textureHeight,{format:ze,type:an,depthTexture:new go(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(a,e,mt),a.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Un(m.framebufferWidth,m.framebufferHeight,{format:ze,type:an,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),Zt.setContext(a),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(q){for(let et=0;et<q.removed.length;et++){const mt=q.removed[et],rt=y.indexOf(mt);rt>=0&&(y[rt]=null,T[rt].disconnect(mt))}for(let et=0;et<q.added.length;et++){const mt=q.added[et];let rt=y.indexOf(mt);if(rt===-1){for(let Wt=0;Wt<T.length;Wt++)if(Wt>=y.length){y.push(mt),rt=Wt;break}else if(y[Wt]===null){y[Wt]=mt,rt=Wt;break}if(rt===-1)break}const yt=T[rt];yt&&yt.connect(mt)}}const k=new B,tt=new B;function V(q,et,mt){k.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(mt.matrixWorld);const rt=k.distanceTo(tt),yt=et.projectionMatrix.elements,Wt=mt.projectionMatrix.elements,wt=yt[14]/(yt[10]-1),ae=yt[14]/(yt[10]+1),ee=(yt[9]+1)/yt[5],Ot=(yt[9]-1)/yt[5],A=(yt[8]-1)/yt[0],be=(Wt[8]+1)/Wt[0],zt=wt*A,Bt=wt*be,vt=rt/(-A+be),Qt=vt*-A;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qt),q.translateZ(vt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),yt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const _t=wt+vt,S=ae+vt,g=zt-Qt,N=Bt+(rt-Qt),j=ee*ae/S*_t,Z=Ot*ae/S*_t;q.projectionMatrix.makePerspective(g,N,j,Z,_t,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function at(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let et=q.near,mt=q.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(mt=v.depthFar)),M.near=U.near=R.near=et,M.far=U.far=R.far=mt,(C!==M.near||Y!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,Y=M.far),R.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|U.layers.mask;const rt=q.parent,yt=M.cameras;at(M,rt);for(let Wt=0;Wt<yt.length;Wt++)at(yt[Wt],rt);yt.length===2?V(M,R,U):M.projectionMatrix.copy(R.projectionMatrix),ut(q,M,rt)};function ut(q,et,mt){mt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=wr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let xt=null;function Nt(q,et){if(h=et.getViewerPose(l||s),_=et,h!==null){const mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let rt=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let wt=0;wt<mt.length;wt++){const ae=mt[wt];let ee=null;if(m!==null)ee=m.getViewport(ae);else{const A=u.getViewSubImage(f,ae);ee=A.viewport,wt===0&&(t.setRenderTargetTextures(b,A.colorTexture,A.depthStencilTexture),t.setRenderTarget(b))}let Ot=E[wt];Ot===void 0&&(Ot=new De,Ot.layers.enable(wt),Ot.viewport=new re,E[wt]=Ot),Ot.matrix.fromArray(ae.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(ae.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(ee.x,ee.y,ee.width,ee.height),wt===0&&(M.matrix.copy(Ot.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Ot)}const yt=a.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&u){const wt=u.getDepthInformation(mt[0]);wt&&wt.isValid&&wt.texture&&v.init(t,wt,a.renderState)}}for(let mt=0;mt<T.length;mt++){const rt=y[mt],yt=T[mt];rt!==null&&yt!==void 0&&yt.update(rt,et,l||s)}xt&&xt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const Zt=new _o;Zt.setAnimationLoop(Nt),this.setAnimationLoop=function(q){xt=q},this.dispose=function(){}}}const An=new rn,Hf=new se;function zf(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,uo(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function a(p,d,b,T,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,b,T):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Me&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Me&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=t.get(d),T=b.envMap,y=b.envMapRotation;T&&(p.envMap.value=T,An.copy(y),An.x*=-1,An.y*=-1,An.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),p.envMapRotation.value.setFromMatrix4(Hf.makeRotationFromEuler(An)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,b,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=T*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Me&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const b=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Vf(i,t,e,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const y=T.program;n.uniformBlockBinding(b,y)}function l(b,T){let y=a[b.id];y===void 0&&(_(b),y=h(b),a[b.id]=y,b.addEventListener("dispose",p));const I=T.program;n.updateUBOMapping(b,I);const w=t.render.frame;r[b.id]!==w&&(f(b),r[b.id]=w)}function h(b){const T=u();b.__bindingPointIndex=T;const y=i.createBuffer(),I=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function u(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const T=a[b.id],y=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,R=y.length;w<R;w++){const U=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,M=U.length;E<M;E++){const C=U[E];if(m(C,w,E,I)===!0){const Y=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let K=0;K<H.length;K++){const k=H[K],tt=v(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,Y+X,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,X),X+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,y,I){const w=b.value,R=T+"_"+y;if(I[R]===void 0)return typeof w=="number"||typeof w=="boolean"?I[R]=w:I[R]=w.clone(),!0;{const U=I[R];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return I[R]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function _(b){const T=b.uniforms;let y=0;const I=16;for(let R=0,U=T.length;R<U;R++){const E=Array.isArray(T[R])?T[R]:[T[R]];for(let M=0,C=E.length;M<C;M++){const Y=E[M],H=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,K=H.length;X<K;X++){const k=H[X],tt=v(k),V=y%I,at=V%tt.boundary,ut=V+at;y+=at,ut!==0&&I-ut<tt.storage&&(y+=I-ut),Y.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=tt.storage}}}const w=y%I;return w>0&&(y+=I-w),b.__size=y,b.__cache={},this}function v(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const y=s.indexOf(T.__bindingPointIndex);s.splice(y,1),i.deleteBuffer(a[T.id]),delete a[T.id],delete r[T.id]}function d(){for(const b in a)i.deleteBuffer(a[b]);s=[],a={},r={}}return{bind:c,update:l,dispose:d}}class Gf{constructor(t={}){const{canvas:e=yc(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=new Uint32Array(4),v=new Int32Array(4);let p=null,d=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let I=!1;this._outputColorSpace=Pe;let w=0,R=0,U=null,E=-1,M=null;const C=new re,Y=new re;let H=null;const X=new jt(0);let K=0,k=e.width,tt=e.height,V=1,at=null,ut=null;const xt=new re(0,0,k,tt),Nt=new re(0,0,k,tt);let Zt=!1;const q=new po;let et=!1,mt=!1;const rt=new se,yt=new se,Wt=new B,wt=new re,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Ot(){return U===null?V:1}let A=n;function be(x,D){return e.getContext(x,D)}try{const x={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pr}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),A===null){const D="webgl2";if(A=be(D,x),A===null)throw be(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let zt,Bt,vt,Qt,_t,S,g,N,j,Z,G,gt,st,Tt,At,J,ht,bt,Ct,ft,Ht,It,Jt,P;function ot(){zt=new Ku(A),zt.init(),It=new Uf(A,zt),Bt=new Wu(A,zt,t,It),vt=new Lf(A,zt),Bt.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),Qt=new th(A),_t=new vf,S=new If(A,zt,vt,_t,Bt,It,Qt),g=new qu(y),N=new Zu(y),j=new sl(A),Jt=new Gu(A,j),Z=new Ju(A,j,Qt,Jt),G=new nh(A,Z,j,Qt),Ct=new eh(A,Bt,S),J=new Xu(_t),gt=new xf(y,g,N,zt,Bt,Jt,J),st=new zf(y,_t),Tt=new Sf,At=new wf(zt),bt=new Vu(y,g,N,vt,G,m,c),ht=new Pf(y,G,Bt),P=new Vf(A,Qt,Bt,vt),ft=new ku(A,zt,Qt),Ht=new Qu(A,zt,Qt),Qt.programs=gt.programs,y.capabilities=Bt,y.extensions=zt,y.properties=_t,y.renderLists=Tt,y.shadowMap=ht,y.state=vt,y.info=Qt}ot();const z=new Bf(y,A);this.xr=z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const x=zt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=zt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(k,tt,!1))},this.getSize=function(x){return x.set(k,tt)},this.setSize=function(x,D,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=x,tt=D,e.width=Math.floor(x*V),e.height=Math.floor(D*V),F===!0&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(k*V,tt*V).floor()},this.setDrawingBufferSize=function(x,D,F){k=x,tt=D,V=F,e.width=Math.floor(x*F),e.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(xt)},this.setViewport=function(x,D,F,O){x.isVector4?xt.set(x.x,x.y,x.z,x.w):xt.set(x,D,F,O),vt.viewport(C.copy(xt).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(Nt)},this.setScissor=function(x,D,F,O){x.isVector4?Nt.set(x.x,x.y,x.z,x.w):Nt.set(x,D,F,O),vt.scissor(Y.copy(Nt).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(x){vt.setScissorTest(Zt=x)},this.setOpaqueSort=function(x){at=x},this.setTransparentSort=function(x){ut=x},this.getClearColor=function(x){return x.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,F=!0){let O=0;if(x){let L=!1;if(U!==null){const Q=U.texture.format;L=Q===Fr||Q===Nr||Q===Ur}if(L){const Q=U.texture.type,it=Q===an||Q===In||Q===fi||Q===pi||Q===Lr||Q===Ir,dt=bt.getClearColor(),pt=bt.getClearAlpha(),Pt=dt.r,Rt=dt.g,Mt=dt.b;it?(_[0]=Pt,_[1]=Rt,_[2]=Mt,_[3]=pt,A.clearBufferuiv(A.COLOR,0,_)):(v[0]=Pt,v[1]=Rt,v[2]=Mt,v[3]=pt,A.clearBufferiv(A.COLOR,0,v))}else O|=A.COLOR_BUFFER_BIT}D&&(O|=A.DEPTH_BUFFER_BIT),F&&(O|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),bt.dispose(),Tt.dispose(),At.dispose(),_t.dispose(),g.dispose(),N.dispose(),G.dispose(),Jt.dispose(),P.dispose(),gt.dispose(),z.dispose(),z.removeEventListener("sessionstart",Hr),z.removeEventListener("sessionend",zr),xn.stop()};function $(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const x=Qt.autoReset,D=ht.enabled,F=ht.autoUpdate,O=ht.needsUpdate,L=ht.type;ot(),Qt.autoReset=x,ht.enabled=D,ht.autoUpdate=F,ht.needsUpdate=O,ht.type=L}function ct(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Dt(x){const D=x.target;D.removeEventListener("dispose",Dt),ne(D)}function ne(x){fe(x),_t.remove(x)}function fe(x){const D=_t.get(x).programs;D!==void 0&&(D.forEach(function(F){gt.releaseProgram(F)}),x.isShaderMaterial&&gt.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,O,L,Q){D===null&&(D=ae);const it=L.isMesh&&L.matrixWorld.determinant()<0,dt=Eo(x,D,F,O,L);vt.setMaterial(O,it);let pt=F.index,Pt=1;if(O.wireframe===!0){if(pt=Z.getWireframeAttribute(F),pt===void 0)return;Pt=2}const Rt=F.drawRange,Mt=F.attributes.position;let Vt=Rt.start*Pt,Xt=(Rt.start+Rt.count)*Pt;Q!==null&&(Vt=Math.max(Vt,Q.start*Pt),Xt=Math.min(Xt,(Q.start+Q.count)*Pt)),pt!==null?(Vt=Math.max(Vt,0),Xt=Math.min(Xt,pt.count)):Mt!=null&&(Vt=Math.max(Vt,0),Xt=Math.min(Xt,Mt.count));const oe=Xt-Vt;if(oe<0||oe===1/0)return;Jt.setup(L,O,dt,F,pt);let ie,Gt=ft;if(pt!==null&&(ie=j.get(pt),Gt=Ht,Gt.setIndex(ie)),L.isMesh)O.wireframe===!0?(vt.setLineWidth(O.wireframeLinewidth*Ot()),Gt.setMode(A.LINES)):Gt.setMode(A.TRIANGLES);else if(L.isLine){let St=O.linewidth;St===void 0&&(St=1),vt.setLineWidth(St*Ot()),L.isLineSegments?Gt.setMode(A.LINES):L.isLineLoop?Gt.setMode(A.LINE_LOOP):Gt.setMode(A.LINE_STRIP)}else L.isPoints?Gt.setMode(A.POINTS):L.isSprite&&Gt.setMode(A.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)ta("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Gt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const St=L._multiDrawStarts,he=L._multiDrawCounts,qt=L._multiDrawCount,Ne=pt?j.get(pt).bytesPerElement:1,Nn=_t.get(O).currentProgram.getUniforms();for(let ye=0;ye<qt;ye++)Nn.setValue(A,"_gl_DrawID",ye),Gt.render(St[ye]/Ne,he[ye])}else if(L.isInstancedMesh)Gt.renderInstances(Vt,oe,L.count);else if(F.isInstancedBufferGeometry){const St=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,he=Math.min(F.instanceCount,St);Gt.renderInstances(Vt,oe,he)}else Gt.render(Vt,oe)};function Yt(x,D,F){x.transparent===!0&&x.side===Je&&x.forceSinglePass===!1?(x.side=Me,x.needsUpdate=!0,Ti(x,D,F),x.side=gn,x.needsUpdate=!0,Ti(x,D,F),x.side=Je):Ti(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),d=At.get(F),d.init(D),T.push(d),F.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),x!==F&&x.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const O=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let it=0;it<Q.length;it++){const dt=Q[it];Yt(dt,F,L),O.add(dt)}else Yt(Q,F,L),O.add(Q)}),d=T.pop(),O},this.compileAsync=function(x,D,F=null){const O=this.compile(x,D,F);return new Promise(L=>{function Q(){if(O.forEach(function(it){_t.get(it).currentProgram.isReady()&&O.delete(it)}),O.size===0){L(x);return}setTimeout(Q,10)}zt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ue=null;function We(x){Ue&&Ue(x)}function Hr(){xn.stop()}function zr(){xn.start()}const xn=new _o;xn.setAnimationLoop(We),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(x){Ue=x,z.setAnimationLoop(x),x===null?xn.stop():xn.start()},z.addEventListener("sessionstart",Hr),z.addEventListener("sessionend",zr),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(D),D=z.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,D,U),d=At.get(x,T.length),d.init(D),T.push(d),yt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(yt),mt=this.localClippingEnabled,et=J.init(this.clippingPlanes,mt),p=Tt.get(x,b.length),p.init(),b.push(p),z.enabled===!0&&z.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&da(Q,D,-1/0,y.sortObjects)}da(x,D,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(at,ut),ee=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,ee&&bt.addToRenderList(p,x),this.info.render.frame++,et===!0&&J.beginShadows();const F=d.state.shadowsArray;ht.render(F,x,D),et===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,L=p.transmissive;if(d.setupLights(),D.isArrayCamera){const Q=D.cameras;if(L.length>0)for(let it=0,dt=Q.length;it<dt;it++){const pt=Q[it];Gr(O,L,x,pt)}ee&&bt.render(x);for(let it=0,dt=Q.length;it<dt;it++){const pt=Q[it];Vr(p,x,pt,pt.viewport)}}else L.length>0&&Gr(O,L,x,D),ee&&bt.render(x),Vr(p,x,D);U!==null&&R===0&&(S.updateMultisampleRenderTarget(U),S.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(y,x,D),Jt.resetDefaultState(),E=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],et===!0&&J.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function da(x,D,F,O){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){O&&wt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(yt);const it=G.update(x),dt=x.material;dt.visible&&p.push(x,it,dt,F,wt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const it=G.update(x),dt=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),wt.copy(x.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),wt.copy(it.boundingSphere.center)),wt.applyMatrix4(x.matrixWorld).applyMatrix4(yt)),Array.isArray(dt)){const pt=it.groups;for(let Pt=0,Rt=pt.length;Pt<Rt;Pt++){const Mt=pt[Pt],Vt=dt[Mt.materialIndex];Vt&&Vt.visible&&p.push(x,it,Vt,F,wt.z,Mt)}}else dt.visible&&p.push(x,it,dt,F,wt.z,null)}}const Q=x.children;for(let it=0,dt=Q.length;it<dt;it++)da(Q[it],D,F,O)}function Vr(x,D,F,O){const L=x.opaque,Q=x.transmissive,it=x.transparent;d.setupLightsView(F),et===!0&&J.setGlobalState(y.clippingPlanes,F),O&&vt.viewport(C.copy(O)),L.length>0&&yi(L,D,F),Q.length>0&&yi(Q,D,F),it.length>0&&yi(it,D,F),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Gr(x,D,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new Un(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?_i:an,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[O.id],it=O.viewport||C;Q.setSize(it.z*y.transmissionResolutionScale,it.w*y.transmissionResolutionScale);const dt=y.getRenderTarget();y.setRenderTarget(Q),y.getClearColor(X),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),ee&&bt.render(F);const pt=y.toneMapping;y.toneMapping=mn;const Pt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),et===!0&&J.setGlobalState(y.clippingPlanes,O),yi(x,F,O),S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Mt=0,Vt=D.length;Mt<Vt;Mt++){const Xt=D[Mt],oe=Xt.object,ie=Xt.geometry,Gt=Xt.material,St=Xt.group;if(Gt.side===Je&&oe.layers.test(O.layers)){const he=Gt.side;Gt.side=Me,Gt.needsUpdate=!0,kr(oe,F,O,ie,Gt,St),Gt.side=he,Gt.needsUpdate=!0,Rt=!0}}Rt===!0&&(S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q))}y.setRenderTarget(dt),y.setClearColor(X,K),Pt!==void 0&&(O.viewport=Pt),y.toneMapping=pt}function yi(x,D,F){const O=D.isScene===!0?D.overrideMaterial:null;for(let L=0,Q=x.length;L<Q;L++){const it=x[L],dt=it.object,pt=it.geometry,Pt=it.group;let Rt=it.material;Rt.allowOverride===!0&&O!==null&&(Rt=O),dt.layers.test(F.layers)&&kr(dt,D,F,pt,Rt,Pt)}}function kr(x,D,F,O,L,Q){x.onBeforeRender(y,D,F,O,L,Q),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(y,D,F,O,x,Q),L.transparent===!0&&L.side===Je&&L.forceSinglePass===!1?(L.side=Me,L.needsUpdate=!0,y.renderBufferDirect(F,D,O,L,x,Q),L.side=gn,L.needsUpdate=!0,y.renderBufferDirect(F,D,O,L,x,Q),L.side=Je):y.renderBufferDirect(F,D,O,L,x,Q),x.onAfterRender(y,D,F,O,L,Q)}function Ti(x,D,F){D.isScene!==!0&&(D=ae);const O=_t.get(x),L=d.state.lights,Q=d.state.shadowsArray,it=L.state.version,dt=gt.getParameters(x,L.state,Q,D,F),pt=gt.getProgramCacheKey(dt);let Pt=O.programs;O.environment=x.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(x.isMeshStandardMaterial?N:g).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Pt===void 0&&(x.addEventListener("dispose",Dt),Pt=new Map,O.programs=Pt);let Rt=Pt.get(pt);if(Rt!==void 0){if(O.currentProgram===Rt&&O.lightsStateVersion===it)return Xr(x,dt),Rt}else dt.uniforms=gt.getUniforms(x),x.onBeforeCompile(dt,y),Rt=gt.acquireProgram(dt,pt),Pt.set(pt,Rt),O.uniforms=dt.uniforms;const Mt=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Mt.clippingPlanes=J.uniform),Xr(x,dt),O.needsLights=To(x),O.lightsStateVersion=it,O.needsLights&&(Mt.ambientLightColor.value=L.state.ambient,Mt.lightProbe.value=L.state.probe,Mt.directionalLights.value=L.state.directional,Mt.directionalLightShadows.value=L.state.directionalShadow,Mt.spotLights.value=L.state.spot,Mt.spotLightShadows.value=L.state.spotShadow,Mt.rectAreaLights.value=L.state.rectArea,Mt.ltc_1.value=L.state.rectAreaLTC1,Mt.ltc_2.value=L.state.rectAreaLTC2,Mt.pointLights.value=L.state.point,Mt.pointLightShadows.value=L.state.pointShadow,Mt.hemisphereLights.value=L.state.hemi,Mt.directionalShadowMap.value=L.state.directionalShadowMap,Mt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Mt.spotShadowMap.value=L.state.spotShadowMap,Mt.spotLightMatrix.value=L.state.spotLightMatrix,Mt.spotLightMap.value=L.state.spotLightMap,Mt.pointShadowMap.value=L.state.pointShadowMap,Mt.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=Rt,O.uniformsList=null,Rt}function Wr(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=ea.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Xr(x,D){const F=_t.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Eo(x,D,F,O,L){D.isScene!==!0&&(D=ae),S.resetTextureUnits();const Q=D.fog,it=O.isMeshStandardMaterial?D.environment:null,dt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ni,pt=(O.isMeshStandardMaterial?N:g).get(O.envMap||it),Pt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Rt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Mt=!!F.morphAttributes.position,Vt=!!F.morphAttributes.normal,Xt=!!F.morphAttributes.color;let oe=mn;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(oe=y.toneMapping);const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Gt=ie!==void 0?ie.length:0,St=_t.get(O),he=d.state.lights;if(et===!0&&(mt===!0||x!==M)){const ge=x===M&&O.id===E;J.setState(O,x,ge)}let qt=!1;O.version===St.__version?(St.needsLights&&St.lightsStateVersion!==he.state.version||St.outputColorSpace!==dt||L.isBatchedMesh&&St.batching===!1||!L.isBatchedMesh&&St.batching===!0||L.isBatchedMesh&&St.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&St.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&St.instancing===!1||!L.isInstancedMesh&&St.instancing===!0||L.isSkinnedMesh&&St.skinning===!1||!L.isSkinnedMesh&&St.skinning===!0||L.isInstancedMesh&&St.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&St.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&St.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&St.instancingMorph===!1&&L.morphTexture!==null||St.envMap!==pt||O.fog===!0&&St.fog!==Q||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==J.numPlanes||St.numIntersection!==J.numIntersection)||St.vertexAlphas!==Pt||St.vertexTangents!==Rt||St.morphTargets!==Mt||St.morphNormals!==Vt||St.morphColors!==Xt||St.toneMapping!==oe||St.morphTargetsCount!==Gt)&&(qt=!0):(qt=!0,St.__version=O.version);let Ne=St.currentProgram;qt===!0&&(Ne=Ti(O,D,L));let Nn=!1,ye=!1,si=!1;const te=Ne.getUniforms(),we=St.uniforms;if(vt.useProgram(Ne.program)&&(Nn=!0,ye=!0,si=!0),O.id!==E&&(E=O.id,ye=!0),Nn||M!==x){vt.buffers.depth.getReversed()?(rt.copy(x.projectionMatrix),Ac(rt),bc(rt),te.setValue(A,"projectionMatrix",rt)):te.setValue(A,"projectionMatrix",x.projectionMatrix),te.setValue(A,"viewMatrix",x.matrixWorldInverse);const xe=te.map.cameraPosition;xe!==void 0&&xe.setValue(A,Wt.setFromMatrixPosition(x.matrixWorld)),Bt.logarithmicDepthBuffer&&te.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&te.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,ye=!0,si=!0)}if(L.isSkinnedMesh){te.setOptional(A,L,"bindMatrix"),te.setOptional(A,L,"bindMatrixInverse");const ge=L.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),te.setValue(A,"boneTexture",ge.boneTexture,S))}L.isBatchedMesh&&(te.setOptional(A,L,"batchingTexture"),te.setValue(A,"batchingTexture",L._matricesTexture,S),te.setOptional(A,L,"batchingIdTexture"),te.setValue(A,"batchingIdTexture",L._indirectTexture,S),te.setOptional(A,L,"batchingColorTexture"),L._colorsTexture!==null&&te.setValue(A,"batchingColorTexture",L._colorsTexture,S));const Re=F.morphAttributes;if((Re.position!==void 0||Re.normal!==void 0||Re.color!==void 0)&&Ct.update(L,F,Ne),(ye||St.receiveShadow!==L.receiveShadow)&&(St.receiveShadow=L.receiveShadow,te.setValue(A,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(we.envMap.value=pt,we.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(we.envMapIntensity.value=D.environmentIntensity),ye&&(te.setValue(A,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&yo(we,si),Q&&O.fog===!0&&st.refreshFogUniforms(we,Q),st.refreshMaterialUniforms(we,O,V,tt,d.state.transmissionRenderTarget[x.id]),ea.upload(A,Wr(St),we,S)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ea.upload(A,Wr(St),we,S),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&te.setValue(A,"center",L.center),te.setValue(A,"modelViewMatrix",L.modelViewMatrix),te.setValue(A,"normalMatrix",L.normalMatrix),te.setValue(A,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ge=O.uniformsGroups;for(let xe=0,ua=ge.length;xe<ua;xe++){const vn=ge[xe];P.update(vn,Ne),P.bind(vn,Ne)}}return Ne}function yo(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function To(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,D,F){const O=_t.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),_t.get(x.texture).__webglTexture=D,_t.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:F,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const F=_t.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};const Ao=A.createFramebuffer();this.setRenderTarget=function(x,D=0,F=0){U=x,w=D,R=F;let O=!0,L=null,Q=!1,it=!1;if(x){const pt=_t.get(x);if(pt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(A.FRAMEBUFFER,null),O=!1;else if(pt.__webglFramebuffer===void 0)S.setupRenderTarget(x);else if(pt.__hasExternalTextures)S.rebindTextures(x,_t.get(x.texture).__webglTexture,_t.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Mt=x.depthTexture;if(pt.__boundDepthTexture!==Mt){if(Mt!==null&&_t.has(Mt)&&(x.width!==Mt.image.width||x.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(x)}}const Pt=x.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(it=!0);const Rt=_t.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Rt[D])?L=Rt[D][F]:L=Rt[D],Q=!0):x.samples>0&&S.useMultisampledRTT(x)===!1?L=_t.get(x).__webglMultisampledFramebuffer:Array.isArray(Rt)?L=Rt[F]:L=Rt,C.copy(x.viewport),Y.copy(x.scissor),H=x.scissorTest}else C.copy(xt).multiplyScalar(V).floor(),Y.copy(Nt).multiplyScalar(V).floor(),H=Zt;if(F!==0&&(L=Ao),vt.bindFramebuffer(A.FRAMEBUFFER,L)&&O&&vt.drawBuffers(x,L),vt.viewport(C),vt.scissor(Y),vt.setScissorTest(H),Q){const pt=_t.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,F)}else if(it){const pt=_t.get(x.texture),Pt=D;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,pt.__webglTexture,F,Pt)}else if(x!==null&&F!==0){const pt=_t.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,pt.__webglTexture,F)}E=-1},this.readRenderTargetPixels=function(x,D,F,O,L,Q,it){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=_t.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&it!==void 0&&(dt=dt[it]),dt){vt.bindFramebuffer(A.FRAMEBUFFER,dt);try{const pt=x.texture,Pt=pt.format,Rt=pt.type;if(!Bt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-O&&F>=0&&F<=x.height-L&&A.readPixels(D,F,O,L,It.convert(Pt),It.convert(Rt),Q)}finally{const pt=U!==null?_t.get(U).__webglFramebuffer:null;vt.bindFramebuffer(A.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(x,D,F,O,L,Q,it){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=_t.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&it!==void 0&&(dt=dt[it]),dt)if(D>=0&&D<=x.width-O&&F>=0&&F<=x.height-L){vt.bindFramebuffer(A.FRAMEBUFFER,dt);const pt=x.texture,Pt=pt.format,Rt=pt.type;if(!Bt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Mt),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),A.readPixels(D,F,O,L,It.convert(Pt),It.convert(Rt),0);const Vt=U!==null?_t.get(U).__webglFramebuffer:null;vt.bindFramebuffer(A.FRAMEBUFFER,Vt);const Xt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Tc(A,Xt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Mt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(Mt),A.deleteSync(Xt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,F=0){const O=Math.pow(2,-F),L=Math.floor(x.image.width*O),Q=Math.floor(x.image.height*O),it=D!==null?D.x:0,dt=D!==null?D.y:0;S.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,F,0,0,it,dt,L,Q),vt.unbindTexture()};const bo=A.createFramebuffer(),wo=A.createFramebuffer();this.copyTextureToTexture=function(x,D,F=null,O=null,L=0,Q=null){Q===null&&(L!==0?(ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=L,L=0):Q=0);let it,dt,pt,Pt,Rt,Mt,Vt,Xt,oe;const ie=x.isCompressedTexture?x.mipmaps[Q]:x.image;if(F!==null)it=F.max.x-F.min.x,dt=F.max.y-F.min.y,pt=F.isBox3?F.max.z-F.min.z:1,Pt=F.min.x,Rt=F.min.y,Mt=F.isBox3?F.min.z:0;else{const Re=Math.pow(2,-L);it=Math.floor(ie.width*Re),dt=Math.floor(ie.height*Re),x.isDataArrayTexture?pt=ie.depth:x.isData3DTexture?pt=Math.floor(ie.depth*Re):pt=1,Pt=0,Rt=0,Mt=0}O!==null?(Vt=O.x,Xt=O.y,oe=O.z):(Vt=0,Xt=0,oe=0);const Gt=It.convert(D.format),St=It.convert(D.type);let he;D.isData3DTexture?(S.setTexture3D(D,0),he=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(S.setTexture2DArray(D,0),he=A.TEXTURE_2D_ARRAY):(S.setTexture2D(D,0),he=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);const qt=A.getParameter(A.UNPACK_ROW_LENGTH),Ne=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Nn=A.getParameter(A.UNPACK_SKIP_PIXELS),ye=A.getParameter(A.UNPACK_SKIP_ROWS),si=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ie.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ie.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Rt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Mt);const te=x.isDataArrayTexture||x.isData3DTexture,we=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const Re=_t.get(x),ge=_t.get(D),xe=_t.get(Re.__renderTarget),ua=_t.get(ge.__renderTarget);vt.bindFramebuffer(A.READ_FRAMEBUFFER,xe.__webglFramebuffer),vt.bindFramebuffer(A.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let vn=0;vn<pt;vn++)te&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.get(x).__webglTexture,L,Mt+vn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.get(D).__webglTexture,Q,oe+vn)),A.blitFramebuffer(Pt,Rt,it,dt,Vt,Xt,it,dt,A.DEPTH_BUFFER_BIT,A.NEAREST);vt.bindFramebuffer(A.READ_FRAMEBUFFER,null),vt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(L!==0||x.isRenderTargetTexture||_t.has(x)){const Re=_t.get(x),ge=_t.get(D);vt.bindFramebuffer(A.READ_FRAMEBUFFER,bo),vt.bindFramebuffer(A.DRAW_FRAMEBUFFER,wo);for(let xe=0;xe<pt;xe++)te?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.__webglTexture,L,Mt+xe):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Re.__webglTexture,L),we?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.__webglTexture,Q,oe+xe):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ge.__webglTexture,Q),L!==0?A.blitFramebuffer(Pt,Rt,it,dt,Vt,Xt,it,dt,A.COLOR_BUFFER_BIT,A.NEAREST):we?A.copyTexSubImage3D(he,Q,Vt,Xt,oe+xe,Pt,Rt,it,dt):A.copyTexSubImage2D(he,Q,Vt,Xt,Pt,Rt,it,dt);vt.bindFramebuffer(A.READ_FRAMEBUFFER,null),vt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else we?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(he,Q,Vt,Xt,oe,it,dt,pt,Gt,St,ie.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(he,Q,Vt,Xt,oe,it,dt,pt,Gt,ie.data):A.texSubImage3D(he,Q,Vt,Xt,oe,it,dt,pt,Gt,St,ie):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Q,Vt,Xt,it,dt,Gt,St,ie.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Q,Vt,Xt,ie.width,ie.height,Gt,ie.data):A.texSubImage2D(A.TEXTURE_2D,Q,Vt,Xt,it,dt,Gt,St,ie);A.pixelStorei(A.UNPACK_ROW_LENGTH,qt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ne),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Nn),A.pixelStorei(A.UNPACK_SKIP_ROWS,ye),A.pixelStorei(A.UNPACK_SKIP_IMAGES,si),Q===0&&D.generateMipmaps&&A.generateMipmap(he),vt.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F=null,O=null,L=0){return ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,F,O,L)},this.initRenderTarget=function(x){_t.get(x).__webglFramebuffer===void 0&&S.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),vt.unbindTexture()},this.resetState=function(){w=0,R=0,U=null,vt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}const kf=()=>{const i=Et.useRef(null),t=Et.useRef(null),e=Et.useRef(null),n=Et.useRef(null),a=Et.useRef(null);return Et.useEffect(()=>{if(!i.current)return;const r=new Kc,s=new De(75,window.innerWidth/window.innerHeight,.1,1e3);e.current=s;const o=new Gf({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio),o.setClearColor(0,0),i.current.appendChild(o.domElement),t.current=o;const c=new sn,l=1500,h=new Float32Array(l*3),u=new Float32Array(l*3);for(let p=0;p<l*3;p++)h[p]=(Math.random()-.5)*10,p%3===0?u[p]=Math.random()*.5+.5:p%3===1?u[p]=Math.random()*.3:u[p]=Math.random()*.1;c.setAttribute("position",new Le(h,3)),c.setAttribute("color",new Le(u,3));const f=new mo({size:.01,vertexColors:!0,transparent:!0,opacity:.8}),m=new tl(c,f);r.add(m),n.current=m,s.position.z=3;const _=()=>{n.current&&(n.current.rotation.x+=1e-4,n.current.rotation.y+=3e-4,t.current&&e.current&&t.current.render(r,e.current),a.current=requestAnimationFrame(_))};_();const v=()=>{!e.current||!t.current||(e.current.aspect=window.innerWidth/window.innerHeight,e.current.updateProjectionMatrix(),t.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",v),()=>{i.current&&t.current&&i.current.removeChild(t.current.domElement),a.current&&cancelAnimationFrame(a.current),t.current&&t.current.dispose(),window.removeEventListener("resize",v)}},[]),W.jsx("div",{"data-lov-id":"src\\components\\HeroParticlesAdvanced.tsx:120:9","data-lov-name":"div","data-component-path":"src\\components\\HeroParticlesAdvanced.tsx","data-component-line":"120","data-component-file":"HeroParticlesAdvanced.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20inset-0%20z-0%22%7D",ref:i,className:"absolute inset-0 z-0"})},Wf=()=>{switch(ra()){case"mobile":return W.jsx(Lo,{"data-lov-id":"src\\components\\HeroParticles.tsx:13:13","data-lov-name":"HeroParticlesSimple","data-component-path":"src\\components\\HeroParticles.tsx","data-component-line":"13","data-component-file":"HeroParticles.tsx","data-component-name":"HeroParticlesSimple","data-component-content":"%7B%7D"});case"tablet":return W.jsx(Io,{"data-lov-id":"src\\components\\HeroParticles.tsx:15:13","data-lov-name":"HeroParticlesVanilla","data-component-path":"src\\components\\HeroParticles.tsx","data-component-line":"15","data-component-file":"HeroParticles.tsx","data-component-name":"HeroParticlesVanilla","data-component-content":"%7B%7D"});case"desktop":default:return W.jsx(kf,{"data-lov-id":"src\\components\\HeroParticles.tsx:18:13","data-lov-name":"HeroParticlesAdvanced","data-component-path":"src\\components\\HeroParticles.tsx","data-component-line":"18","data-component-file":"HeroParticles.tsx","data-component-name":"HeroParticlesAdvanced","data-component-content":"%7B%7D"})}},Xf=()=>{const i=ra(),t=i==="mobile"?"text-3xl xs:text-4xl":"text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl",e=i==="mobile"?"0 0 10px rgba(255, 255, 255, 0.2)":"0 0 20px rgba(255, 255, 255, 0.2)";return W.jsxs("div",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:17:4","data-lov-name":"div","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"17","data-component-file":"HeroTitle.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22text-center%20px-2%20sm%3Apx-4%20mx-auto%20w-full%22%7D",className:"text-center px-2 sm:px-4 mx-auto w-full",children:[W.jsx("div",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:19:6","data-lov-name":"div","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"19","data-component-file":"HeroTitle.tsx","data-component-name":"div","data-component-content":"%7B%22text%22%3A%22Welcome%20to%22%7D",className:`${t} font-bold text-white mb-2 sm:mb-4`,style:{animation:"float 3s ease-in-out infinite",textShadow:e},children:"Welcome to"}),W.jsxs("div",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:30:6","data-lov-name":"div","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"30","data-component-file":"HeroTitle.tsx","data-component-name":"div","data-component-content":"%7B%7D",className:`${t} font-bold mt-1 sm:mt-2 relative inline-block text-center leading-tight`,style:{animation:"float 3s ease-in-out infinite",animationDelay:"0.2s",textShadow:"2px 2px 10px rgba(0, 0, 0, 0.8)"},children:[W.jsxs("span",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:38:8","data-lov-name":"span","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"38","data-component-file":"HeroTitle.tsx","data-component-name":"span","data-component-content":"%7B%22text%22%3A%22Ghatak%22%2C%22className%22%3A%22text-gsai-red%22%7D",className:"text-gsai-red",style:{textShadow:"0 0 15px rgba(255, 0, 0, 0.5)",animation:"pulse-glow 2s infinite"},children:["Ghatak"," "]}),W.jsxs("span",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:48:8","data-lov-name":"span","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"48","data-component-file":"HeroTitle.tsx","data-component-name":"span","data-component-content":"%7B%22text%22%3A%22Sports%20Academy%22%2C%22className%22%3A%22text-white%22%7D",className:"text-white",children:["Sports",W.jsx("br",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:49:16","data-lov-name":"br","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"49","data-component-file":"HeroTitle.tsx","data-component-name":"br","data-component-content":"%7B%22className%22%3A%22sm%3Ahidden%22%7D",className:"sm:hidden"})," Academy"," "]}),W.jsx("span",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:52:8","data-lov-name":"span","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"52","data-component-file":"HeroTitle.tsx","data-component-name":"span","data-component-content":"%7B%22text%22%3A%22India%E2%84%A2%22%2C%22className%22%3A%22text-gsai-gold%22%7D",className:"text-gsai-gold",style:{textShadow:"0 0 15px rgba(255, 204, 0, 0.5)",animation:"pulse-glow 2.5s infinite"},children:"India™"}),i!=="mobile"&&W.jsx("div",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:64:10","data-lov-name":"div","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"64","data-component-file":"HeroTitle.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20-top-4%20-right-4%20sm%3A-top-6%20sm%3A-right-6%20w-8%20h-8%20sm%3Aw-12%20sm%3Ah-12%20opacity-70%20hidden%20md%3Ablock%22%7D",className:"absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 opacity-70 hidden md:block",style:{animation:"float 3s ease-in-out infinite",animationDelay:"0.5s"},children:W.jsx("svg",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:71:12","data-lov-name":"svg","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"71","data-component-file":"HeroTitle.tsx","data-component-name":"svg","data-component-content":"%7B%22className%22%3A%22w-full%20h-full%20text-gsai-gold%22%7D",viewBox:"0 0 24 24",fill:"none",className:"w-full h-full text-gsai-gold",children:W.jsx("path",{"data-lov-id":"src\\components\\hero\\HeroTitle.tsx:76:14","data-lov-name":"path","data-component-path":"src\\components\\hero\\HeroTitle.tsx","data-component-line":"76","data-component-file":"HeroTitle.tsx","data-component-name":"path","data-component-content":"%7B%7D",d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",fill:"currentColor"})})})]})]})},qf=()=>{const t=ra()==="mobile"?"0 1px 4px rgba(0, 0, 0, 0.7)":"1px 1px 5px rgba(0, 0, 0, 0.6)";return W.jsxs("div",{"data-lov-id":"src\\components\\hero\\HeroSubtitle.tsx:13:4","data-lov-name":"div","data-component-path":"src\\components\\hero\\HeroSubtitle.tsx","data-component-line":"13","data-component-file":"HeroSubtitle.tsx","data-component-name":"div","data-component-content":"%7B%7D",children:[W.jsx("p",{"data-lov-id":"src\\components\\hero\\HeroSubtitle.tsx:14:6","data-lov-name":"p","data-component-path":"src\\components\\hero\\HeroSubtitle.tsx","data-component-line":"14","data-component-file":"HeroSubtitle.tsx","data-component-name":"p","data-component-content":"%7B%22text%22%3A%22Empowering%20Lives%20Through%20World-Class%20Martial%20Arts%22%2C%22className%22%3A%22text-sm%20xs%3Atext-base%20sm%3Atext-lg%20md%3Atext-xl%20lg%3Atext-2xl%20text-white%2F95%20mb-3%20sm%3Amb-4%20md%3Amb-6%20lg%3Amb-8%20w-full%20max-w-xs%20sm%3Amax-w-sm%20md%3Amax-w-2xl%20lg%3Amax-w-3xl%20mx-auto%20px-2%20sm%3Apx-4%20text-center%20font-medium%22%7D",className:"text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-3 sm:mb-4 md:mb-6 lg:mb-8 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 text-center font-medium",style:{animation:"fade-in 0.8s ease-out forwards",textShadow:t,color:"#ffffff"},children:"Empowering Lives Through World-Class Martial Arts"}),W.jsx("p",{"data-lov-id":"src\\components\\hero\\HeroSubtitle.tsx:25:6","data-lov-name":"p","data-component-path":"src\\components\\hero\\HeroSubtitle.tsx","data-component-line":"25","data-component-file":"HeroSubtitle.tsx","data-component-name":"p","data-component-content":"%7B%22text%22%3A%22Internationally%20Recognized%20Training%20%E2%80%A2%20Top-Level%20Coaching%20%E2%80%A2%20Global%20Competitions%22%2C%22className%22%3A%22text-xs%20xs%3Atext-sm%20sm%3Atext-base%20text-gsai-gold%20mb-6%20max-w-xs%20sm%3Amax-w-sm%20md%3Amax-w-md%20mx-auto%22%7D",className:"text-xs xs:text-sm sm:text-base text-gsai-gold mb-6 max-w-xs sm:max-w-sm md:max-w-md mx-auto",style:{animation:"fade-in 1s ease-out forwards",textShadow:t,animationDelay:"0.3s",opacity:0},children:"Internationally Recognized Training • Top-Level Coaching • Global Competitions"})]})},Yf=()=>{const i=ra();return W.jsx(Po.div,{"data-lov-id":"src\\components\\hero\\HeroScrollIndicator.tsx:8:4","data-lov-name":"motion.div","data-component-path":"src\\components\\hero\\HeroScrollIndicator.tsx","data-component-line":"8","data-component-file":"HeroScrollIndicator.tsx","data-component-name":"motion.div","data-component-content":"%7B%22className%22%3A%22fixed%20inset-x-0%20bottom-5%20xs%3Abottom-6%20sm%3Abottom-8%20md%3Abottom-12%20flex%20justify-center%20z-30%20pointer-events-none%22%7D",className:"fixed inset-x-0 bottom-5 xs:bottom-6 sm:bottom-8 md:bottom-12 flex justify-center z-30 pointer-events-none",initial:{opacity:0},animate:{opacity:1,y:i==="mobile"?[0,4,0]:[0,6,0]},transition:{delay:1.2,duration:i==="mobile"?1.2:1.5,repeat:1/0,repeatType:"loop",ease:"easeInOut"},"aria-hidden":"true",children:W.jsxs("div",{"data-lov-id":"src\\components\\hero\\HeroScrollIndicator.tsx:24:6","data-lov-name":"div","data-component-path":"src\\components\\hero\\HeroScrollIndicator.tsx","data-component-line":"24","data-component-file":"HeroScrollIndicator.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22flex%20flex-col%20items-center%22%7D",className:"flex flex-col items-center",children:[W.jsx("span",{"data-lov-id":"src\\components\\hero\\HeroScrollIndicator.tsx:25:8","data-lov-name":"span","data-component-path":"src\\components\\hero\\HeroScrollIndicator.tsx","data-component-line":"25","data-component-file":"HeroScrollIndicator.tsx","data-component-name":"span","data-component-content":"%7B%22text%22%3A%22Scroll%20Down%22%2C%22className%22%3A%22text-xs%20sm%3Atext-sm%20text-white%2F80%20mb-1%20sm%3Amb-2%20font-medium%20tracking-wide%22%7D",className:"text-xs sm:text-sm text-white/80 mb-1 sm:mb-2 font-medium tracking-wide",children:"Scroll Down"}),W.jsx("svg",{"data-lov-id":"src\\components\\hero\\HeroScrollIndicator.tsx:28:8","data-lov-name":"svg","data-component-path":"src\\components\\hero\\HeroScrollIndicator.tsx","data-component-line":"28","data-component-file":"HeroScrollIndicator.tsx","data-component-name":"svg","data-component-content":"%7B%22className%22%3A%22text-white%2F80%22%7D",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-white/80",children:W.jsx("path",{"data-lov-id":"src\\components\\hero\\HeroScrollIndicator.tsx:39:10","data-lov-name":"path","data-component-path":"src\\components\\hero\\HeroScrollIndicator.tsx","data-component-line":"39","data-component-file":"HeroScrollIndicator.tsx","data-component-name":"path","data-component-content":"%7B%7D",d:"M12 5v14M5 12l7 7 7-7"})})]})})};function jf(i={}){const{intensity:t=20,perspective:e=1e3,smooth:n=.1,scale:a=!0,shadow:r=!0}=i,s=Et.useRef(null),[o,c]=Et.useState({x:0,y:0}),[l,h]=Et.useState(!1),u=Et.useRef(0),f=Et.useRef({x:0,y:0}),m=_=>{if(!s.current)return;const v=s.current.getBoundingClientRect(),p=(_.clientX-v.left)/v.width-.5,d=(_.clientY-v.top)/v.height-.5;c({x:p,y:d})};return Et.useEffect(()=>{l||c({x:0,y:0})},[l]),Et.useEffect(()=>{if(!l)return;const _=()=>{if(f.current.x+=(o.x-f.current.x)*n,f.current.y+=(o.y-f.current.y)*n,s.current){const v=f.current.y*t,p=-f.current.x*t;s.current.style.transform=`
          perspective(${e}px) 
          rotateX(${v}deg) 
          rotateY(${p}deg)
          ${a?" scale3d(1.05, 1.05, 1.05)":""}
        `,r&&(s.current.style.boxShadow=`
            ${-p/2}px ${v/2}px 30px rgba(0, 0, 0, 0.25)
          `)}u.current=requestAnimationFrame(_)};return u.current=requestAnimationFrame(_),()=>cancelAnimationFrame(u.current)},[o,t,e,n,a,r,l]),Et.useEffect(()=>()=>cancelAnimationFrame(u.current),[]),{ref:s,style:{transformStyle:"preserve-3d",transition:"transform 0.1s ease-out, box-shadow 0.1s ease-out"},handleMouseEnter:()=>h(!0),handleMouseLeave:()=>h(!1),handleMouseMove:m}}const $f=()=>{const i=Et.useRef(null),[t,e]=Et.useState(!1),[n,a]=Et.useState({x:0,y:0}),r=jf({intensity:10,perspective:1200,smooth:.15});Et.useEffect(()=>{const c=setTimeout(()=>e(!0),300);return()=>clearTimeout(c)},[]);const s=Et.useCallback(c=>{if(!i.current)return;const{clientX:l,clientY:h}=c,{width:u,height:f}=i.current.getBoundingClientRect(),m=(l/u-.5)*40,_=(h/f-.5)*40;a({x:m,y:_})},[]);Et.useEffect(()=>(window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)),[s]);const o=()=>{const c=document.getElementById("contact");c==null||c.scrollIntoView({behavior:"smooth",block:"start"})};return W.jsxs("div",{"data-lov-id":"src\\components\\Hero.tsx:46:4","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"46","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22relative%20min-h-screen%20flex%20flex-col%20items-center%20justify-center%20overflow-hidden%20bg-black%20px-4%20sm%3Apx-8%20lg%3Apx-16%22%7D",id:"hero",ref:i,className:"relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-8 lg:px-16",children:[W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:52:6","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"52","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20inset-0%20z-0%22%7D",className:"absolute inset-0 z-0",children:W.jsx(Wf,{"data-lov-id":"src\\components\\Hero.tsx:53:8","data-lov-name":"HeroParticles","data-component-path":"src\\components\\Hero.tsx","data-component-line":"53","data-component-file":"Hero.tsx","data-component-name":"HeroParticles","data-component-content":"%7B%7D"})}),W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:57:6","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"57","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-b%20from-black%2F30%20via-black%2F60%20to-black%20z-10%22%7D",className:"absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10",style:{transform:`translateX(${n.x*-.02}px) translateY(${n.y*-.02}px)`,transition:"transform 0.1s ease-out"}}),W.jsxs("div",{"data-lov-id":"src\\components\\Hero.tsx:66:6","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"66","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20inset-0%20z-5%20opacity-5%22%7D",className:"absolute inset-0 z-5 opacity-5",children:[W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:67:8","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"67","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20top-%5B20%25%5D%20left-%5B10%25%5D%20w-20%20h-20%20bg-contain%20bg-no-repeat%22%7D",className:"absolute top-[20%] left-[10%] w-20 h-20 bg-contain bg-no-repeat",style:{backgroundImage:"url(/images/flag.png)"}}),W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:68:8","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"68","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20top-%5B30%25%5D%20right-%5B15%25%5D%20w-16%20h-16%20bg-contain%20bg-no-repeat%22%7D",className:"absolute top-[30%] right-[15%] w-16 h-16 bg-contain bg-no-repeat",style:{backgroundImage:"url(/images/india.png)"}}),W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:69:8","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"69","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20bottom-%5B25%25%5D%20left-%5B20%25%5D%20w-24%20h-24%20bg-contain%20bg-no-repeat%20opacity-30%22%7D",className:"absolute bottom-[25%] left-[20%] w-24 h-24 bg-contain bg-no-repeat opacity-30",style:{backgroundImage:"url(/images/takewondo.png)"}})]}),W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:73:6","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"73","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%7D",ref:r.ref,onMouseEnter:r.handleMouseEnter,onMouseLeave:r.handleMouseLeave,onMouseMove:r.handleMouseMove,className:`relative z-40 text-center flex flex-col items-center transition-all duration-1000 ease-in-out ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:W.jsxs("div",{"data-lov-id":"src\\components\\Hero.tsx:82:8","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"82","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22w-full%20max-w-4xl%20px-4%20sm%3Apx-6%20md%3Apx-8%20mx-auto%22%7D",className:"w-full max-w-4xl px-4 sm:px-6 md:px-8 mx-auto",children:[W.jsx(Xf,{"data-lov-id":"src\\components\\Hero.tsx:83:10","data-lov-name":"HeroTitle","data-component-path":"src\\components\\Hero.tsx","data-component-line":"83","data-component-file":"Hero.tsx","data-component-name":"HeroTitle","data-component-content":"%7B%7D"}),W.jsx(qf,{"data-lov-id":"src\\components\\Hero.tsx:84:10","data-lov-name":"HeroSubtitle","data-component-path":"src\\components\\Hero.tsx","data-component-line":"84","data-component-file":"Hero.tsx","data-component-name":"HeroSubtitle","data-component-content":"%7B%7D"}),W.jsxs("div",{"data-lov-id":"src\\components\\Hero.tsx:86:10","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"86","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20items-center%20justify-center%20gap-4%20mt-6%20sm%3Amt-10%20mb-14%20sm%3Amb-20%22%7D",className:"flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-10 mb-14 sm:mb-20",children:[W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:87:12","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"87","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22w-full%20sm%3Aw-auto%22%7D",className:"w-full sm:w-auto",style:{animation:"float 3s ease-in-out infinite 0.4s",transform:`perspective(1000px) rotateY(${n.x*.05}deg) rotateX(${n.y*-.05}deg)`},children:W.jsx(qr,{"data-lov-id":"src\\components\\Hero.tsx:94:14","data-lov-name":"CTAButton","data-component-path":"src\\components\\Hero.tsx","data-component-line":"94","data-component-file":"Hero.tsx","data-component-name":"CTAButton","data-component-content":"%7B%7D",label:"Join Now",href:"#contact",onClick:o,icon:W.jsx("svg",{"data-lov-id":"src\\components\\Hero.tsx:99:18","data-lov-name":"svg","data-component-path":"src\\components\\Hero.tsx","data-component-line":"99","data-component-file":"Hero.tsx","data-component-name":"svg","data-component-content":"%7B%22className%22%3A%22w-5%20h-5%20inline-block%20mr-1%22%7D",className:"w-5 h-5 inline-block mr-1",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:W.jsx("path",{"data-lov-id":"src\\components\\Hero.tsx:106:20","data-lov-name":"path","data-component-path":"src\\components\\Hero.tsx","data-component-line":"106","data-component-file":"Hero.tsx","data-component-name":"path","data-component-content":"%7B%7D",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})})}),W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:112:12","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"112","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22w-full%20sm%3Aw-auto%22%7D",className:"w-full sm:w-auto",style:{animation:"float 3s ease-in-out infinite 0.6s",transform:`perspective(1000px) rotateY(${n.x*.05}deg) rotateX(${n.y*-.05}deg)`},children:W.jsx(qr,{"data-lov-id":"src\\components\\Hero.tsx:119:14","data-lov-name":"CTAButton","data-component-path":"src\\components\\Hero.tsx","data-component-line":"119","data-component-file":"Hero.tsx","data-component-name":"CTAButton","data-component-content":"%7B%7D",label:"Explore Programs",href:"#programs",variant:"secondary",onClick:()=>{var c;(c=document.getElementById("programs"))==null||c.scrollIntoView({behavior:"smooth",block:"start"})},icon:W.jsx("svg",{"data-lov-id":"src\\components\\Hero.tsx:127:18","data-lov-name":"svg","data-component-path":"src\\components\\Hero.tsx","data-component-line":"127","data-component-file":"Hero.tsx","data-component-name":"svg","data-component-content":"%7B%22className%22%3A%22w-5%20h-5%20inline-block%20mr-1%22%7D",className:"w-5 h-5 inline-block mr-1",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:W.jsx("path",{"data-lov-id":"src\\components\\Hero.tsx:134:20","data-lov-name":"path","data-component-path":"src\\components\\Hero.tsx","data-component-line":"134","data-component-file":"Hero.tsx","data-component-name":"path","data-component-content":"%7B%7D",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})})]})]})}),W.jsx(Yf,{"data-lov-id":"src\\components\\Hero.tsx:144:6","data-lov-name":"HeroScrollIndicator","data-component-path":"src\\components\\Hero.tsx","data-component-line":"144","data-component-file":"Hero.tsx","data-component-name":"HeroScrollIndicator","data-component-content":"%7B%7D"}),W.jsxs("div",{"data-lov-id":"src\\components\\Hero.tsx:147:6","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"147","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20hidden%20lg%3Ablock%22%7D",className:"absolute hidden lg:block",children:[W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:148:8","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"148","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20-top-20%20-right-20%20w-40%20h-40%20opacity-20%22%7D",className:"absolute -top-20 -right-20 w-40 h-40 opacity-20",style:{animation:"float 8s ease-in-out infinite",transform:`translateX(${n.x*.1}px) translateY(${n.y*.1}px) rotate(${n.x}deg)`},children:W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:155:10","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"155","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22w-full%20h-full%20rounded-full%20bg-gradient-to-br%20from-gsai-red%2F30%20to-transparent%20blur-xl%22%7D",className:"w-full h-full rounded-full bg-gradient-to-br from-gsai-red/30 to-transparent blur-xl"})}),W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:157:8","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"157","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20top-40%20-left-20%20w-32%20h-32%20opacity-20%22%7D",className:"absolute top-40 -left-20 w-32 h-32 opacity-20",style:{animation:"float 6s ease-in-out infinite 1s",transform:`translateX(${n.x*-.2}px) translateY(${n.y*-.2}px)`},children:W.jsx("div",{"data-lov-id":"src\\components\\Hero.tsx:164:10","data-lov-name":"div","data-component-path":"src\\components\\Hero.tsx","data-component-line":"164","data-component-file":"Hero.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22w-full%20h-full%20rounded-full%20bg-gradient-to-tr%20from-gsai-gold%2F30%20to-transparent%20blur-xl%22%7D",className:"w-full h-full rounded-full bg-gradient-to-tr from-gsai-gold/30 to-transparent blur-xl"})})]})]})},Ze=()=>W.jsx("div",{"data-lov-id":"src\\components\\SectionLoader.tsx:3:2","data-lov-name":"div","data-component-path":"src\\components\\SectionLoader.tsx","data-component-line":"3","data-component-file":"SectionLoader.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22w-full%20py-10%20flex%20items-center%20justify-center%22%7D",className:"w-full py-10 flex items-center justify-center","aria-label":"Loading content section",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,children:W.jsxs("div",{"data-lov-id":"src\\components\\SectionLoader.tsx:10:4","data-lov-name":"div","data-component-path":"src\\components\\SectionLoader.tsx","data-component-line":"10","data-component-file":"SectionLoader.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22relative%22%7D",className:"relative",children:[W.jsx("div",{"data-lov-id":"src\\components\\SectionLoader.tsx:11:6","data-lov-name":"div","data-component-path":"src\\components\\SectionLoader.tsx","data-component-line":"11","data-component-file":"SectionLoader.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22w-8%20h-8%20rounded-full%20bg-gradient-to-r%20from-gsai-red%20to-gsai-gold%20animate-pulse%22%7D",className:"w-8 h-8 rounded-full bg-gradient-to-r from-gsai-red to-gsai-gold animate-pulse",style:{animationDuration:"0.8s"},role:"status",children:W.jsx("span",{"data-lov-id":"src\\components\\SectionLoader.tsx:16:8","data-lov-name":"span","data-component-path":"src\\components\\SectionLoader.tsx","data-component-line":"16","data-component-file":"SectionLoader.tsx","data-component-name":"span","data-component-content":"%7B%22text%22%3A%22Loading...%22%2C%22className%22%3A%22sr-only%22%7D",className:"sr-only",children:"Loading..."})}),W.jsx("div",{"data-lov-id":"src\\components\\SectionLoader.tsx:18:6","data-lov-name":"div","data-component-path":"src\\components\\SectionLoader.tsx","data-component-line":"18","data-component-file":"SectionLoader.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-r%20from-gsai-red%2F30%20to-gsai-gold%2F30%20rounded-full%20blur-lg%20animate-pulse%22%7D",className:"absolute inset-0 bg-gradient-to-r from-gsai-red/30 to-gsai-gold/30 rounded-full blur-lg animate-pulse",style:{animationDuration:"1.2s"}})]})}),Zf=Et.lazy(()=>Ie(()=>import("./About-CdEtGk6r.js"),__vite__mapDeps([0,1,2,3,4]))),Kf=Et.lazy(()=>Ie(()=>import("./Founder-GDU4ZpII.js"),__vite__mapDeps([5,1,2,6]))),Jf=Et.lazy(()=>Ie(()=>import("./Programs-Ppgzn6P2.js"),__vite__mapDeps([7,1,2,6])));Et.lazy(()=>Ie(()=>import("./InternationalCompetitions-BXtZMno0.js"),__vite__mapDeps([8,1,2,6,9,4,10,11])));Et.lazy(()=>Ie(()=>import("./Achievements-11kjtpD7.js"),__vite__mapDeps([12,1,2,6,9,4,13,14])));Et.lazy(()=>Ie(()=>import("./CoachingStaff-BCZ0mC2U.js"),__vite__mapDeps([15,1,2,6,11,14,16,4])));const Qf=Et.lazy(()=>Ie(()=>import("./Testimonials-BAFoAcP-.js"),__vite__mapDeps([17,1,2,18,4,19,13]))),tp=Et.lazy(()=>Ie(()=>import("./Gallery-CrCKmWSx.js"),__vite__mapDeps([20,1,2,3,6]))),ep=Et.lazy(()=>Ie(()=>import("./FAQ-DlRNTFEe.js"),__vite__mapDeps([21,1,2,4,22,3,6,19]))),np=Et.lazy(()=>Ie(()=>import("./Contact-Bf3HS0aT.js"),__vite__mapDeps([23,1,2,3,4,10,16]))),ip=Et.lazy(()=>Ie(()=>import("./Affiliations-D_YgxptC.js"),__vite__mapDeps([24,1,2]))),ap=Et.lazy(()=>Ie(()=>import("./Footer-0HPEqJKe.js"),__vite__mapDeps([25,1,2,18,4]))),rp={rootMargin:"100px 0px",threshold:.1},sp=()=>{const[i,t]=Et.useState({about:!1,founder:!1,programs:!1,competitions:!1,achievements:!1,coaching:!1,testimonials:!1,gallery:!1,faq:!1,contact:!1,affiliations:!1,footer:!1});return Et.useEffect(()=>{const e=new IntersectionObserver(r=>{r.forEach(s=>{if(s.isIntersecting){const o=s.target.id;t(c=>({...c,[o]:!0})),e.unobserve(s.target)}})},rp);document.querySelectorAll("[data-section-target]").forEach(r=>{e.observe(r)});const a=setTimeout(()=>{t({about:!0,founder:!0,programs:!0,competitions:!0,achievements:!0,coaching:!0,testimonials:!0,gallery:!0,faq:!0,contact:!0,affiliations:!0,footer:!0})},1500);return()=>{e.disconnect(),clearTimeout(a)}},[]),W.jsxs("div",{"data-lov-id":"src\\components\\MainContent.tsx:91:4","data-lov-name":"div","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"91","data-component-file":"MainContent.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22relative%20z-20%22%7D",className:"relative z-20",children:[W.jsx("section",{"data-lov-id":"src\\components\\MainContent.tsx:93:6","data-lov-name":"section","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"93","data-component-file":"MainContent.tsx","data-component-name":"section","data-component-content":"%7B%22className%22%3A%22section-container%22%7D",id:"about","data-section-target":"about",className:"section-container",children:W.jsx(Et.Suspense,{"data-lov-id":"src\\components\\MainContent.tsx:94:8","data-lov-name":"Suspense","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"94","data-component-file":"MainContent.tsx","data-component-name":"Suspense","data-component-content":"%7B%7D",fallback:W.jsx(Ze,{"data-lov-id":"src\\components\\MainContent.tsx:94:28","data-lov-name":"SectionLoader","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"94","data-component-file":"MainContent.tsx","data-component-name":"SectionLoader","data-component-content":"%7B%7D"}),children:i.about&&W.jsx(Zf,{"data-lov-id":"src\\components\\MainContent.tsx:95:36","data-lov-name":"About","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"95","data-component-file":"MainContent.tsx","data-component-name":"About","data-component-content":"%7B%7D"})})}),W.jsx("section",{"data-lov-id":"src\\components\\MainContent.tsx:100:6","data-lov-name":"section","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"100","data-component-file":"MainContent.tsx","data-component-name":"section","data-component-content":"%7B%22className%22%3A%22section-container%22%7D",id:"founderSection","data-section-target":"founder",className:"section-container",children:W.jsx(Et.Suspense,{"data-lov-id":"src\\components\\MainContent.tsx:101:8","data-lov-name":"Suspense","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"101","data-component-file":"MainContent.tsx","data-component-name":"Suspense","data-component-content":"%7B%7D",fallback:W.jsx(Ze,{"data-lov-id":"src\\components\\MainContent.tsx:101:28","data-lov-name":"SectionLoader","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"101","data-component-file":"MainContent.tsx","data-component-name":"SectionLoader","data-component-content":"%7B%7D"}),children:i.founder&&W.jsx(Kf,{"data-lov-id":"src\\components\\MainContent.tsx:102:38","data-lov-name":"Founder","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"102","data-component-file":"MainContent.tsx","data-component-name":"Founder","data-component-content":"%7B%7D"})})}),W.jsx("section",{"data-lov-id":"src\\components\\MainContent.tsx:107:6","data-lov-name":"section","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"107","data-component-file":"MainContent.tsx","data-component-name":"section","data-component-content":"%7B%22className%22%3A%22section-container%22%7D",id:"programs","data-section-target":"programs",className:"section-container",children:W.jsx(Et.Suspense,{"data-lov-id":"src\\components\\MainContent.tsx:108:8","data-lov-name":"Suspense","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"108","data-component-file":"MainContent.tsx","data-component-name":"Suspense","data-component-content":"%7B%7D",fallback:W.jsx(Ze,{"data-lov-id":"src\\components\\MainContent.tsx:108:28","data-lov-name":"SectionLoader","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"108","data-component-file":"MainContent.tsx","data-component-name":"SectionLoader","data-component-content":"%7B%7D"}),children:i.programs&&W.jsx(Jf,{"data-lov-id":"src\\components\\MainContent.tsx:109:39","data-lov-name":"Programs","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"109","data-component-file":"MainContent.tsx","data-component-name":"Programs","data-component-content":"%7B%7D"})})}),W.jsx("section",{"data-lov-id":"src\\components\\MainContent.tsx:135:6","data-lov-name":"section","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"135","data-component-file":"MainContent.tsx","data-component-name":"section","data-component-content":"%7B%22className%22%3A%22section-container%22%7D",id:"testimonials","data-section-target":"testimonials",className:"section-container",children:W.jsx(Et.Suspense,{"data-lov-id":"src\\components\\MainContent.tsx:136:8","data-lov-name":"Suspense","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"136","data-component-file":"MainContent.tsx","data-component-name":"Suspense","data-component-content":"%7B%7D",fallback:W.jsx(Ze,{"data-lov-id":"src\\components\\MainContent.tsx:136:28","data-lov-name":"SectionLoader","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"136","data-component-file":"MainContent.tsx","data-component-name":"SectionLoader","data-component-content":"%7B%7D"}),children:i.testimonials&&W.jsx(Qf,{"data-lov-id":"src\\components\\MainContent.tsx:137:43","data-lov-name":"Testimonials","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"137","data-component-file":"MainContent.tsx","data-component-name":"Testimonials","data-component-content":"%7B%7D"})})}),W.jsx("section",{"data-lov-id":"src\\components\\MainContent.tsx:142:6","data-lov-name":"section","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"142","data-component-file":"MainContent.tsx","data-component-name":"section","data-component-content":"%7B%22className%22%3A%22section-container%22%7D",id:"gallery","data-section-target":"gallery",className:"section-container",children:W.jsx(Et.Suspense,{"data-lov-id":"src\\components\\MainContent.tsx:143:8","data-lov-name":"Suspense","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"143","data-component-file":"MainContent.tsx","data-component-name":"Suspense","data-component-content":"%7B%7D",fallback:W.jsx(Ze,{"data-lov-id":"src\\components\\MainContent.tsx:143:28","data-lov-name":"SectionLoader","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"143","data-component-file":"MainContent.tsx","data-component-name":"SectionLoader","data-component-content":"%7B%7D"}),children:i.gallery&&W.jsx(tp,{"data-lov-id":"src\\components\\MainContent.tsx:144:38","data-lov-name":"Gallery","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"144","data-component-file":"MainContent.tsx","data-component-name":"Gallery","data-component-content":"%7B%7D"})})}),W.jsx("section",{"data-lov-id":"src\\components\\MainContent.tsx:149:6","data-lov-name":"section","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"149","data-component-file":"MainContent.tsx","data-component-name":"section","data-component-content":"%7B%22className%22%3A%22section-container%22%7D",id:"faq","data-section-target":"faq",className:"section-container",children:W.jsx(Et.Suspense,{"data-lov-id":"src\\components\\MainContent.tsx:150:8","data-lov-name":"Suspense","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"150","data-component-file":"MainContent.tsx","data-component-name":"Suspense","data-component-content":"%7B%7D",fallback:W.jsx(Ze,{"data-lov-id":"src\\components\\MainContent.tsx:150:28","data-lov-name":"SectionLoader","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"150","data-component-file":"MainContent.tsx","data-component-name":"SectionLoader","data-component-content":"%7B%7D"}),children:i.faq&&W.jsx(ep,{"data-lov-id":"src\\components\\MainContent.tsx:151:34","data-lov-name":"FAQ","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"151","data-component-file":"MainContent.tsx","data-component-name":"FAQ","data-component-content":"%7B%7D"})})}),W.jsx("section",{"data-lov-id":"src\\components\\MainContent.tsx:156:6","data-lov-name":"section","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"156","data-component-file":"MainContent.tsx","data-component-name":"section","data-component-content":"%7B%22className%22%3A%22section-container%22%7D",id:"contact","data-section-target":"contact",className:"section-container",children:W.jsx(Et.Suspense,{"data-lov-id":"src\\components\\MainContent.tsx:157:8","data-lov-name":"Suspense","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"157","data-component-file":"MainContent.tsx","data-component-name":"Suspense","data-component-content":"%7B%7D",fallback:W.jsx(Ze,{"data-lov-id":"src\\components\\MainContent.tsx:157:28","data-lov-name":"SectionLoader","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"157","data-component-file":"MainContent.tsx","data-component-name":"SectionLoader","data-component-content":"%7B%7D"}),children:i.contact&&W.jsx(np,{"data-lov-id":"src\\components\\MainContent.tsx:158:38","data-lov-name":"Contact","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"158","data-component-file":"MainContent.tsx","data-component-name":"Contact","data-component-content":"%7B%7D"})})}),W.jsx("section",{"data-lov-id":"src\\components\\MainContent.tsx:163:6","data-lov-name":"section","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"163","data-component-file":"MainContent.tsx","data-component-name":"section","data-component-content":"%7B%22className%22%3A%22section-container%22%7D",id:"affiliationsSection","data-section-target":"affiliations",className:"section-container",children:W.jsx(Et.Suspense,{"data-lov-id":"src\\components\\MainContent.tsx:164:8","data-lov-name":"Suspense","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"164","data-component-file":"MainContent.tsx","data-component-name":"Suspense","data-component-content":"%7B%7D",fallback:W.jsx(Ze,{"data-lov-id":"src\\components\\MainContent.tsx:164:28","data-lov-name":"SectionLoader","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"164","data-component-file":"MainContent.tsx","data-component-name":"SectionLoader","data-component-content":"%7B%7D"}),children:i.affiliations&&W.jsx(ip,{"data-lov-id":"src\\components\\MainContent.tsx:165:43","data-lov-name":"Affiliations","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"165","data-component-file":"MainContent.tsx","data-component-name":"Affiliations","data-component-content":"%7B%7D"})})}),W.jsx("section",{"data-lov-id":"src\\components\\MainContent.tsx:170:6","data-lov-name":"section","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"170","data-component-file":"MainContent.tsx","data-component-name":"section","data-component-content":"%7B%7D",id:"footerSection","data-section-target":"footer",children:W.jsx(Et.Suspense,{"data-lov-id":"src\\components\\MainContent.tsx:171:8","data-lov-name":"Suspense","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"171","data-component-file":"MainContent.tsx","data-component-name":"Suspense","data-component-content":"%7B%7D",fallback:W.jsx(Ze,{"data-lov-id":"src\\components\\MainContent.tsx:171:28","data-lov-name":"SectionLoader","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"171","data-component-file":"MainContent.tsx","data-component-name":"SectionLoader","data-component-content":"%7B%7D"}),children:W.jsx(ap,{"data-lov-id":"src\\components\\MainContent.tsx:172:10","data-lov-name":"Footer","data-component-path":"src\\components\\MainContent.tsx","data-component-line":"172","data-component-file":"MainContent.tsx","data-component-name":"Footer","data-component-content":"%7B%7D"})})})]})},lp=()=>{const i=Ro();Et.useEffect(()=>{if(i.hash){const e=i.hash.substring(1);t(e)}if(i.state&&i.state.scrollTo){const e=i.state.scrollTo;t(e)}},[i.hash,i.state]);const t=e=>{requestAnimationFrame(()=>{const n=document.getElementById(e);n&&setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"}),n.setAttribute("tabindex","-1"),n.focus({preventScroll:!0})},200)})};return W.jsxs(W.Fragment,{children:[W.jsxs(Co,{"data-lov-id":"src\\pages\\Index.tsx:47:6","data-lov-name":"Helmet","data-component-path":"src\\pages\\Index.tsx","data-component-line":"47","data-component-file":"Index.tsx","data-component-name":"Helmet","data-component-content":"%7B%7D",children:[W.jsx("title",{"data-lov-id":"src\\pages\\Index.tsx:48:8","data-lov-name":"title","data-component-path":"src\\pages\\Index.tsx","data-component-line":"48","data-component-file":"Index.tsx","data-component-name":"title","data-component-content":"%7B%22text%22%3A%22Ghatak%20Sports%20Academy%20%7C%20Premier%20International%20Martial%20Arts%20Training%20in%20India%22%7D",children:"Ghatak Sports Academy | Premier International Martial Arts Training in India"}),W.jsx("meta",{"data-lov-id":"src\\pages\\Index.tsx:49:8","data-lov-name":"meta","data-component-path":"src\\pages\\Index.tsx","data-component-line":"49","data-component-file":"Index.tsx","data-component-name":"meta","data-component-content":"%7B%7D",name:"description",content:"Join Ghatak Sports Academy - India's elite international standard martial arts training center. Expert coaching in karate, taekwondo, MMA, boxing, and more with world-class facilities."}),W.jsx("link",{"data-lov-id":"src\\pages\\Index.tsx:51:8","data-lov-name":"link","data-component-path":"src\\pages\\Index.tsx","data-component-line":"51","data-component-file":"Index.tsx","data-component-name":"link","data-component-content":"%7B%7D",rel:"canonical",href:"https://ghatakgsai.netlify.app"}),W.jsx("script",{"data-lov-id":"src\\pages\\Index.tsx:53:8","data-lov-name":"script","data-component-path":"src\\pages\\Index.tsx","data-component-line":"53","data-component-file":"Index.tsx","data-component-name":"script","data-component-content":"%7B%7D",type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            "name": "Ghatak Sports Academy India",
            "url": "https://ghatakgsai.netlify.app",
            "logo": "https://ghatakgsai.netlify.app/images/logo.png",
            "description": "India's premier international standard martial arts training academy offering world-class training in karate, taekwondo, boxing, MMA, and self-defense with international accreditation.",
            "telephone": "+91 6394135988",
            "email": "ghatakgsai@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Naubasta Pulia, Takrohi Road, Amrai Gaon",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "226021",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/ghatakgsai",
              "https://www.instagram.com/ghatak_gsai",
              "https://twitter.com/ghatakgsai"
            ]
          }
        `}),W.jsx("link",{"data-lov-id":"src\\pages\\Index.tsx:80:8","data-lov-name":"link","data-component-path":"src\\pages\\Index.tsx","data-component-line":"80","data-component-file":"Index.tsx","data-component-name":"link","data-component-content":"%7B%7D",rel:"preload",href:"/images/logo.png",as:"image"}),W.jsx("link",{"data-lov-id":"src\\pages\\Index.tsx:81:8","data-lov-name":"link","data-component-path":"src\\pages\\Index.tsx","data-component-line":"81","data-component-file":"Index.tsx","data-component-name":"link","data-component-content":"%7B%7D",rel:"preload",as:"style",href:"/src/App.css"}),W.jsx("link",{"data-lov-id":"src\\pages\\Index.tsx:82:8","data-lov-name":"link","data-component-path":"src\\pages\\Index.tsx","data-component-line":"82","data-component-file":"Index.tsx","data-component-name":"link","data-component-content":"%7B%7D",rel:"preload",as:"style",href:"/src/styles/glassmorphism.css"}),W.jsx("link",{"data-lov-id":"src\\pages\\Index.tsx:83:8","data-lov-name":"link","data-component-path":"src\\pages\\Index.tsx","data-component-line":"83","data-component-file":"Index.tsx","data-component-name":"link","data-component-content":"%7B%7D",rel:"preload",as:"style",href:"/src/styles/section-styles.css"}),W.jsx("meta",{"data-lov-id":"src\\pages\\Index.tsx:86:8","data-lov-name":"meta","data-component-path":"src\\pages\\Index.tsx","data-component-line":"86","data-component-file":"Index.tsx","data-component-name":"meta","data-component-content":"%7B%7D",name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0"}),W.jsx("meta",{"data-lov-id":"src\\pages\\Index.tsx:87:8","data-lov-name":"meta","data-component-path":"src\\pages\\Index.tsx","data-component-line":"87","data-component-file":"Index.tsx","data-component-name":"meta","data-component-content":"%7B%7D",httpEquiv:"X-UA-Compatible",content:"IE=edge"}),W.jsx("meta",{"data-lov-id":"src\\pages\\Index.tsx:88:8","data-lov-name":"meta","data-component-path":"src\\pages\\Index.tsx","data-component-line":"88","data-component-file":"Index.tsx","data-component-name":"meta","data-component-content":"%7B%7D",name:"theme-color",content:"#000000"})]}),W.jsxs("div",{"data-lov-id":"src\\pages\\Index.tsx:91:6","data-lov-name":"div","data-component-path":"src\\pages\\Index.tsx","data-component-line":"91","data-component-file":"Index.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22font-sans%20min-h-screen%20bg-black%20w-full%20max-w-%5B100vw%5D%20overflow-x-hidden%22%7D",className:"font-sans min-h-screen bg-black w-full max-w-[100vw] overflow-x-hidden",children:[W.jsx(Do,{"data-lov-id":"src\\pages\\Index.tsx:92:8","data-lov-name":"NavBar","data-component-path":"src\\pages\\Index.tsx","data-component-line":"92","data-component-file":"Index.tsx","data-component-name":"NavBar","data-component-content":"%7B%7D"}),W.jsxs("main",{"data-lov-id":"src\\pages\\Index.tsx:93:8","data-lov-name":"main","data-component-path":"src\\pages\\Index.tsx","data-component-line":"93","data-component-file":"Index.tsx","data-component-name":"main","data-component-content":"%7B%22className%22%3A%22w-full%20overflow-x-hidden%22%7D",id:"main-content",className:"w-full overflow-x-hidden",children:[W.jsx("div",{"data-lov-id":"src\\pages\\Index.tsx:94:10","data-lov-name":"div","data-component-path":"src\\pages\\Index.tsx","data-component-line":"94","data-component-file":"Index.tsx","data-component-name":"div","data-component-content":"%7B%22className%22%3A%22relative%20z-10%20w-full%22%7D",className:"relative z-10 w-full",children:W.jsx($f,{"data-lov-id":"src\\pages\\Index.tsx:95:12","data-lov-name":"Hero","data-component-path":"src\\pages\\Index.tsx","data-component-line":"95","data-component-file":"Index.tsx","data-component-name":"Hero","data-component-content":"%7B%7D"})}),W.jsx(sp,{"data-lov-id":"src\\pages\\Index.tsx:97:10","data-lov-name":"MainContent","data-component-path":"src\\pages\\Index.tsx","data-component-line":"97","data-component-file":"Index.tsx","data-component-name":"MainContent","data-component-content":"%7B%7D"})]})]})]})};export{lp as default};
//# sourceMappingURL=Index-C8fgCJKO.js.map
