(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ko(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Wo(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=Ee(o)?Pc(o):Wo(o);if(r)for(const s in r)t[s]=r[s]}return t}else{if(Ee(e))return e;if($e(e))return e}}const Ic=/;(?![^(]*\))/g,Dc=/:([^]+)/,Fc=/\/\*.*?\*\//gs;function Pc(e){const t={};return e.replace(Fc,"").split(Ic).forEach(n=>{if(n){const o=n.split(Dc);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function De(e){let t="";if(Ee(e))t=e;else if(oe(e))for(let n=0;n<e.length;n++){const o=De(e[n]);o&&(t+=o+" ")}else if($e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Rc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Oc=Ko(Rc);function Cl(e){return!!e||e===""}const Zt=e=>Ee(e)?e:e==null?"":oe(e)||$e(e)&&(e.toString===Tl||!ie(e.toString))?JSON.stringify(e,xl,2):String(e),xl=(e,t)=>t&&t.__v_isRef?xl(e,t.value):Kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:$l(t)?{[`Set(${t.size})`]:[...t.values()]}:$e(t)&&!oe(t)&&!El(t)?String(t):t,xe={},qt=[],tt=()=>{},Vc=()=>!1,Mc=/^on[^a-z]/,Jn=e=>Mc.test(e),Yo=e=>e.startsWith("onUpdate:"),Oe=Object.assign,Zo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Lc=Object.prototype.hasOwnProperty,fe=(e,t)=>Lc.call(e,t),oe=Array.isArray,Kt=e=>Qn(e)==="[object Map]",$l=e=>Qn(e)==="[object Set]",ie=e=>typeof e=="function",Ee=e=>typeof e=="string",Jo=e=>typeof e=="symbol",$e=e=>e!==null&&typeof e=="object",kl=e=>$e(e)&&ie(e.then)&&ie(e.catch),Tl=Object.prototype.toString,Qn=e=>Tl.call(e),Hc=e=>Qn(e).slice(8,-1),El=e=>Qn(e)==="[object Object]",Qo=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jn=Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Nc=/-(\w)/g,ft=Xn(e=>e.replace(Nc,(t,n)=>n?n.toUpperCase():"")),jc=/\B([A-Z])/g,on=Xn(e=>e.replace(jc,"-$1").toLowerCase()),eo=Xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),_o=Xn(e=>e?`on${eo(e)}`:""),Tn=(e,t)=>!Object.is(e,t),mo=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Gc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Uc=e=>{const t=Ee(e)?Number(e):NaN;return isNaN(t)?e:t};let Ar;const zc=()=>Ar||(Ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Je;class qc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Kc(e,t=Je){t&&t.active&&t.effects.push(e)}function Wc(){return Je}const Xo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Bl=e=>(e.w&Et)>0,Al=e=>(e.n&Et)>0,Yc=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Et},Zc=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];Bl(r)&&!Al(r)?r.delete(e):t[n++]=r,r.w&=~Et,r.n&=~Et}t.length=n}},Bo=new WeakMap;let _n=0,Et=1;const Ao=30;let Qe;const Lt=Symbol(""),So=Symbol("");class er{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kc(this,o)}run(){if(!this.active)return this.fn();let t=Qe,n=kt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Qe,Qe=this,kt=!0,Et=1<<++_n,_n<=Ao?Yc(this):Sr(this),this.fn()}finally{_n<=Ao&&Zc(this),Et=1<<--_n,Qe=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qe===this?this.deferStop=!0:this.active&&(Sr(this),this.onStop&&this.onStop(),this.active=!1)}}function Sr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let kt=!0;const Sl=[];function rn(){Sl.push(kt),kt=!1}function sn(){const e=Sl.pop();kt=e===void 0?!0:e}function Ue(e,t,n){if(kt&&Qe){let o=Bo.get(e);o||Bo.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Xo()),Il(r)}}function Il(e,t){let n=!1;_n<=Ao?Al(e)||(e.n|=Et,n=!Bl(e)):n=!e.has(Qe),n&&(e.add(Qe),Qe.deps.push(e))}function _t(e,t,n,o,r,s){const l=Bo.get(e);if(!l)return;let i=[];if(t==="clear")i=[...l.values()];else if(n==="length"&&oe(e)){const c=Number(o);l.forEach((f,u)=>{(u==="length"||u>=c)&&i.push(f)})}else switch(n!==void 0&&i.push(l.get(n)),t){case"add":oe(e)?Qo(n)&&i.push(l.get("length")):(i.push(l.get(Lt)),Kt(e)&&i.push(l.get(So)));break;case"delete":oe(e)||(i.push(l.get(Lt)),Kt(e)&&i.push(l.get(So)));break;case"set":Kt(e)&&i.push(l.get(Lt));break}if(i.length===1)i[0]&&Io(i[0]);else{const c=[];for(const f of i)f&&c.push(...f);Io(Xo(c))}}function Io(e,t){const n=oe(e)?e:[...e];for(const o of n)o.computed&&Ir(o);for(const o of n)o.computed||Ir(o)}function Ir(e,t){(e!==Qe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Jc=Ko("__proto__,__v_isRef,__isVue"),Dl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Jo)),Qc=tr(),Xc=tr(!1,!0),ea=tr(!0),Dr=ta();function ta(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=pe(this);for(let s=0,l=this.length;s<l;s++)Ue(o,"get",s+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){rn();const o=pe(this)[t].apply(this,n);return sn(),o}}),e}function na(e){const t=pe(this);return Ue(t,"has",e),t.hasOwnProperty(e)}function tr(e=!1,t=!1){return function(o,r,s){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(e?t?va:Vl:t?Ol:Rl).get(o))return o;const l=oe(o);if(!e){if(l&&fe(Dr,r))return Reflect.get(Dr,r,s);if(r==="hasOwnProperty")return na}const i=Reflect.get(o,r,s);return(Jo(r)?Dl.has(r):Jc(r))||(e||Ue(o,"get",r),t)?i:Le(i)?l&&Qo(r)?i:i.value:$e(i)?e?Ml(i):Fn(i):i}}const oa=Fl(),ra=Fl(!0);function Fl(e=!1){return function(n,o,r,s){let l=n[o];if(Jt(l)&&Le(l)&&!Le(r))return!1;if(!e&&(!qn(r)&&!Jt(r)&&(l=pe(l),r=pe(r)),!oe(n)&&Le(l)&&!Le(r)))return l.value=r,!0;const i=oe(n)&&Qo(o)?Number(o)<n.length:fe(n,o),c=Reflect.set(n,o,r,s);return n===pe(s)&&(i?Tn(r,l)&&_t(n,"set",o,r):_t(n,"add",o,r)),c}}function sa(e,t){const n=fe(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&_t(e,"delete",t,void 0),o}function la(e,t){const n=Reflect.has(e,t);return(!Jo(t)||!Dl.has(t))&&Ue(e,"has",t),n}function ia(e){return Ue(e,"iterate",oe(e)?"length":Lt),Reflect.ownKeys(e)}const Pl={get:Qc,set:oa,deleteProperty:sa,has:la,ownKeys:ia},ca={get:ea,set(e,t){return!0},deleteProperty(e,t){return!0}},aa=Oe({},Pl,{get:Xc,set:ra}),nr=e=>e,to=e=>Reflect.getPrototypeOf(e);function Rn(e,t,n=!1,o=!1){e=e.__v_raw;const r=pe(e),s=pe(t);n||(t!==s&&Ue(r,"get",t),Ue(r,"get",s));const{has:l}=to(r),i=o?nr:n?sr:En;if(l.call(r,t))return i(e.get(t));if(l.call(r,s))return i(e.get(s));e!==r&&e.get(t)}function On(e,t=!1){const n=this.__v_raw,o=pe(n),r=pe(e);return t||(e!==r&&Ue(o,"has",e),Ue(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Vn(e,t=!1){return e=e.__v_raw,!t&&Ue(pe(e),"iterate",Lt),Reflect.get(e,"size",e)}function Fr(e){e=pe(e);const t=pe(this);return to(t).has.call(t,e)||(t.add(e),_t(t,"add",e,e)),this}function Pr(e,t){t=pe(t);const n=pe(this),{has:o,get:r}=to(n);let s=o.call(n,e);s||(e=pe(e),s=o.call(n,e));const l=r.call(n,e);return n.set(e,t),s?Tn(t,l)&&_t(n,"set",e,t):_t(n,"add",e,t),this}function Rr(e){const t=pe(this),{has:n,get:o}=to(t);let r=n.call(t,e);r||(e=pe(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&_t(t,"delete",e,void 0),s}function Or(){const e=pe(this),t=e.size!==0,n=e.clear();return t&&_t(e,"clear",void 0,void 0),n}function Mn(e,t){return function(o,r){const s=this,l=s.__v_raw,i=pe(l),c=t?nr:e?sr:En;return!e&&Ue(i,"iterate",Lt),l.forEach((f,u)=>o.call(r,c(f),c(u),s))}}function Ln(e,t,n){return function(...o){const r=this.__v_raw,s=pe(r),l=Kt(s),i=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,f=r[e](...o),u=n?nr:t?sr:En;return!t&&Ue(s,"iterate",c?So:Lt),{next(){const{value:_,done:h}=f.next();return h?{value:_,done:h}:{value:i?[u(_[0]),u(_[1])]:u(_),done:h}},[Symbol.iterator](){return this}}}}function bt(e){return function(...t){return e==="delete"?!1:this}}function ua(){const e={get(s){return Rn(this,s)},get size(){return Vn(this)},has:On,add:Fr,set:Pr,delete:Rr,clear:Or,forEach:Mn(!1,!1)},t={get(s){return Rn(this,s,!1,!0)},get size(){return Vn(this)},has:On,add:Fr,set:Pr,delete:Rr,clear:Or,forEach:Mn(!1,!0)},n={get(s){return Rn(this,s,!0)},get size(){return Vn(this,!0)},has(s){return On.call(this,s,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:Mn(!0,!1)},o={get(s){return Rn(this,s,!0,!0)},get size(){return Vn(this,!0)},has(s){return On.call(this,s,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:Mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ln(s,!1,!1),n[s]=Ln(s,!0,!1),t[s]=Ln(s,!1,!0),o[s]=Ln(s,!0,!0)}),[e,n,t,o]}const[da,fa,pa,ga]=ua();function or(e,t){const n=t?e?ga:pa:e?fa:da;return(o,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(fe(n,r)&&r in o?n:o,r,s)}const ha={get:or(!1,!1)},_a={get:or(!1,!0)},ma={get:or(!0,!1)},Rl=new WeakMap,Ol=new WeakMap,Vl=new WeakMap,va=new WeakMap;function ba(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ya(e){return e.__v_skip||!Object.isExtensible(e)?0:ba(Hc(e))}function Fn(e){return Jt(e)?e:rr(e,!1,Pl,ha,Rl)}function wa(e){return rr(e,!1,aa,_a,Ol)}function Ml(e){return rr(e,!0,ca,ma,Vl)}function rr(e,t,n,o,r){if(!$e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const l=ya(e);if(l===0)return e;const i=new Proxy(e,l===2?o:n);return r.set(e,i),i}function Wt(e){return Jt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Jt(e){return!!(e&&e.__v_isReadonly)}function qn(e){return!!(e&&e.__v_isShallow)}function Ll(e){return Wt(e)||Jt(e)}function pe(e){const t=e&&e.__v_raw;return t?pe(t):e}function Hl(e){return zn(e,"__v_skip",!0),e}const En=e=>$e(e)?Fn(e):e,sr=e=>$e(e)?Ml(e):e;function Nl(e){kt&&Qe&&(e=pe(e),Il(e.dep||(e.dep=Xo())))}function jl(e,t){e=pe(e);const n=e.dep;n&&Io(n)}function Le(e){return!!(e&&e.__v_isRef===!0)}function ce(e){return Gl(e,!1)}function Ca(e){return Gl(e,!0)}function Gl(e,t){return Le(e)?e:new xa(e,t)}class xa{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:pe(t),this._value=n?t:En(t)}get value(){return Nl(this),this._value}set value(t){const n=this.__v_isShallow||qn(t)||Jt(t);t=n?t:pe(t),Tn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:En(t),jl(this))}}function we(e){return Le(e)?e.value:e}const $a={get:(e,t,n)=>we(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Le(r)&&!Le(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Ul(e){return Wt(e)?e:new Proxy(e,$a)}var zl;class ka{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[zl]=!1,this._dirty=!0,this.effect=new er(t,()=>{this._dirty||(this._dirty=!0,jl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=pe(this);return Nl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}zl="__v_isReadonly";function Ta(e,t,n=!1){let o,r;const s=ie(e);return s?(o=e,r=tt):(o=e.get,r=e.set),new ka(o,r,s||!r,n)}function Tt(e,t,n,o){let r;try{r=o?e(...o):e()}catch(s){no(s,t,n)}return r}function We(e,t,n,o){if(ie(e)){const s=Tt(e,t,n,o);return s&&kl(s)&&s.catch(l=>{no(l,t,n)}),s}const r=[];for(let s=0;s<e.length;s++)r.push(We(e[s],t,n,o));return r}function no(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const l=t.proxy,i=n;for(;s;){const f=s.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,l,i)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Tt(c,null,10,[e,l,i]);return}}Ea(e,n,r,o)}function Ea(e,t,n,o=!0){console.error(e)}let Bn=!1,Do=!1;const Me=[];let at=0;const Yt=[];let ht=null,Rt=0;const ql=Promise.resolve();let lr=null;function ir(e){const t=lr||ql;return e?t.then(this?e.bind(this):e):t}function Ba(e){let t=at+1,n=Me.length;for(;t<n;){const o=t+n>>>1;An(Me[o])<e?t=o+1:n=o}return t}function cr(e){(!Me.length||!Me.includes(e,Bn&&e.allowRecurse?at+1:at))&&(e.id==null?Me.push(e):Me.splice(Ba(e.id),0,e),Kl())}function Kl(){!Bn&&!Do&&(Do=!0,lr=ql.then(Yl))}function Aa(e){const t=Me.indexOf(e);t>at&&Me.splice(t,1)}function Sa(e){oe(e)?Yt.push(...e):(!ht||!ht.includes(e,e.allowRecurse?Rt+1:Rt))&&Yt.push(e),Kl()}function Vr(e,t=Bn?at+1:0){for(;t<Me.length;t++){const n=Me[t];n&&n.pre&&(Me.splice(t,1),t--,n())}}function Wl(e){if(Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,ht){ht.push(...t);return}for(ht=t,ht.sort((n,o)=>An(n)-An(o)),Rt=0;Rt<ht.length;Rt++)ht[Rt]();ht=null,Rt=0}}const An=e=>e.id==null?1/0:e.id,Ia=(e,t)=>{const n=An(e)-An(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Yl(e){Do=!1,Bn=!0,Me.sort(Ia);const t=tt;try{for(at=0;at<Me.length;at++){const n=Me[at];n&&n.active!==!1&&Tt(n,null,14)}}finally{at=0,Me.length=0,Wl(),Bn=!1,lr=null,(Me.length||Yt.length)&&Yl()}}function Da(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||xe;let r=n;const s=t.startsWith("update:"),l=s&&t.slice(7);if(l&&l in o){const u=`${l==="modelValue"?"model":l}Modifiers`,{number:_,trim:h}=o[u]||xe;h&&(r=n.map(y=>Ee(y)?y.trim():y)),_&&(r=n.map(Gc))}let i,c=o[i=_o(t)]||o[i=_o(ft(t))];!c&&s&&(c=o[i=_o(on(t))]),c&&We(c,e,6,r);const f=o[i+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,We(f,e,6,r)}}function Zl(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const s=e.emits;let l={},i=!1;if(!ie(e)){const c=f=>{const u=Zl(f,t,!0);u&&(i=!0,Oe(l,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!i?($e(e)&&o.set(e,null),null):(oe(s)?s.forEach(c=>l[c]=null):Oe(l,s),$e(e)&&o.set(e,l),l)}function oo(e,t){return!e||!Jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,on(t))||fe(e,t))}let Pe=null,ro=null;function Kn(e){const t=Pe;return Pe=e,ro=e&&e.type.__scopeId||null,t}function ar(e){ro=e}function ur(){ro=null}function g(e,t=Pe,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Wr(-1);const s=Kn(t);let l;try{l=e(...r)}finally{Kn(s),o._d&&Wr(1)}return l};return o._n=!0,o._c=!0,o._d=!0,o}function vo(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:s,propsOptions:[l],slots:i,attrs:c,emit:f,render:u,renderCache:_,data:h,setupState:y,ctx:I,inheritAttrs:A}=e;let L,F;const b=Kn(e);try{if(n.shapeFlag&4){const C=r||o;L=ct(u.call(C,C,_,s,y,h,I)),F=c}else{const C=t;L=ct(C.length>1?C(s,{attrs:c,slots:i,emit:f}):C(s,null)),F=t.props?c:Fa(c)}}catch(C){Cn.length=0,no(C,e,1),L=a(Ye)}let v=L;if(F&&A!==!1){const C=Object.keys(F),{shapeFlag:E}=v;C.length&&E&7&&(l&&C.some(Yo)&&(F=Pa(F,l)),v=Bt(v,F))}return n.dirs&&(v=Bt(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),L=v,Kn(b),L}const Fa=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},Pa=(e,t)=>{const n={};for(const o in e)(!Yo(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Ra(e,t,n){const{props:o,children:r,component:s}=e,{props:l,children:i,patchFlag:c}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Mr(o,l,f):!!l;if(c&8){const u=t.dynamicProps;for(let _=0;_<u.length;_++){const h=u[_];if(l[h]!==o[h]&&!oo(f,h))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:o===l?!1:o?l?Mr(o,l,f):!0:!!l;return!1}function Mr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!oo(n,s))return!0}return!1}function Oa({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Va=e=>e.__isSuspense;function Ma(e,t){t&&t.pendingBranch?oe(e)?t.effects.push(...e):t.effects.push(e):Sa(e)}function mn(e,t){if(Be){let n=Be.provides;const o=Be.parent&&Be.parent.provides;o===n&&(n=Be.provides=Object.create(o)),n[e]=t}}function nt(e,t,n=!1){const o=Be||Pe;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ie(t)?t.call(o.proxy):t}}function dr(e,t){return fr(e,null,{flush:"post"})}const Hn={};function vn(e,t,n){return fr(e,t,n)}function fr(e,t,{immediate:n,deep:o,flush:r,onTrack:s,onTrigger:l}=xe){const i=Wc()===(Be==null?void 0:Be.scope)?Be:null;let c,f=!1,u=!1;if(Le(e)?(c=()=>e.value,f=qn(e)):Wt(e)?(c=()=>e,o=!0):oe(e)?(u=!0,f=e.some(v=>Wt(v)||qn(v)),c=()=>e.map(v=>{if(Le(v))return v.value;if(Wt(v))return Mt(v);if(ie(v))return Tt(v,i,2)})):ie(e)?t?c=()=>Tt(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return _&&_(),We(e,i,3,[h])}:c=tt,t&&o){const v=c;c=()=>Mt(v())}let _,h=v=>{_=F.onStop=()=>{Tt(v,i,4)}},y;if(In)if(h=tt,t?n&&We(t,i,3,[c(),u?[]:void 0,h]):c(),r==="sync"){const v=Iu();y=v.__watcherHandles||(v.__watcherHandles=[])}else return tt;let I=u?new Array(e.length).fill(Hn):Hn;const A=()=>{if(F.active)if(t){const v=F.run();(o||f||(u?v.some((C,E)=>Tn(C,I[E])):Tn(v,I)))&&(_&&_(),We(t,i,3,[v,I===Hn?void 0:u&&I[0]===Hn?[]:I,h]),I=v)}else F.run()};A.allowRecurse=!!t;let L;r==="sync"?L=A:r==="post"?L=()=>Ge(A,i&&i.suspense):(A.pre=!0,i&&(A.id=i.uid),L=()=>cr(A));const F=new er(c,L);t?n?A():I=F.run():r==="post"?Ge(F.run.bind(F),i&&i.suspense):F.run();const b=()=>{F.stop(),i&&i.scope&&Zo(i.scope.effects,F)};return y&&y.push(b),b}function La(e,t,n){const o=this.proxy,r=Ee(e)?e.includes(".")?Jl(o,e):()=>o[e]:e.bind(o,o);let s;ie(t)?s=t:(s=t.handler,n=t);const l=Be;Xt(this);const i=fr(r,s.bind(o),n);return l?Xt(l):Ht(),i}function Jl(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Mt(e,t){if(!$e(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Le(e))Mt(e.value,t);else if(oe(e))for(let n=0;n<e.length;n++)Mt(e[n],t);else if($l(e)||Kt(e))e.forEach(n=>{Mt(n,t)});else if(El(e))for(const n in e)Mt(e[n],t);return e}function Ha(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ln(()=>{e.isMounted=!0}),ni(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],Na={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},setup(e,{slots:t}){const n=vi(),o=Ha();let r;return()=>{const s=t.default&&ei(t.default(),!0);if(!s||!s.length)return;let l=s[0];if(s.length>1){for(const A of s)if(A.type!==Ye){l=A;break}}const i=pe(e),{mode:c}=i;if(o.isLeaving)return bo(l);const f=Lr(l);if(!f)return bo(l);const u=Fo(f,i,o,n);Po(f,u);const _=n.subTree,h=_&&Lr(_);let y=!1;const{getTransitionKey:I}=f.type;if(I){const A=I();r===void 0?r=A:A!==r&&(r=A,y=!0)}if(h&&h.type!==Ye&&(!Ot(f,h)||y)){const A=Fo(h,i,o,n);if(Po(h,A),c==="out-in")return o.isLeaving=!0,A.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&n.update()},bo(l);c==="in-out"&&f.type!==Ye&&(A.delayLeave=(L,F,b)=>{const v=Xl(o,h);v[String(h.key)]=h,L._leaveCb=()=>{F(),L._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return l}}},Ql=Na;function Xl(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Fo(e,t,n,o){const{appear:r,mode:s,persisted:l=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:_,onLeave:h,onAfterLeave:y,onLeaveCancelled:I,onBeforeAppear:A,onAppear:L,onAfterAppear:F,onAppearCancelled:b}=t,v=String(e.key),C=Xl(n,e),E=(O,R)=>{O&&We(O,o,9,R)},S=(O,R)=>{const J=R[1];E(O,R),oe(O)?O.every(le=>le.length<=1)&&J():O.length<=1&&J()},G={mode:s,persisted:l,beforeEnter(O){let R=i;if(!n.isMounted)if(r)R=A||i;else return;O._leaveCb&&O._leaveCb(!0);const J=C[v];J&&Ot(e,J)&&J.el._leaveCb&&J.el._leaveCb(),E(R,[O])},enter(O){let R=c,J=f,le=u;if(!n.isMounted)if(r)R=L||c,J=F||f,le=b||u;else return;let q=!1;const _e=O._enterCb=Ae=>{q||(q=!0,Ae?E(le,[O]):E(J,[O]),G.delayedLeave&&G.delayedLeave(),O._enterCb=void 0)};R?S(R,[O,_e]):_e()},leave(O,R){const J=String(e.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return R();E(_,[O]);let le=!1;const q=O._leaveCb=_e=>{le||(le=!0,R(),_e?E(I,[O]):E(y,[O]),O._leaveCb=void 0,C[J]===e&&delete C[J])};C[J]=e,h?S(h,[O,q]):q()},clone(O){return Fo(O,t,n,o)}};return G}function bo(e){if(so(e))return e=Bt(e),e.children=null,e}function Lr(e){return so(e)?e.children?e.children[0]:void 0:e}function Po(e,t){e.shapeFlag&6&&e.component?Po(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ei(e,t=!1,n){let o=[],r=0;for(let s=0;s<e.length;s++){let l=e[s];const i=n==null?l.key:String(n)+String(l.key!=null?l.key:s);l.type===ee?(l.patchFlag&128&&r++,o=o.concat(ei(l.children,t,i))):(t||l.type!==Ye)&&o.push(i!=null?Bt(l,{key:i}):l)}if(r>1)for(let s=0;s<o.length;s++)o[s].patchFlag=-2;return o}function M(e){return ie(e)?{setup:e,name:e.name}:e}const bn=e=>!!e.type.__asyncLoader,so=e=>e.type.__isKeepAlive;function ja(e,t){ti(e,"a",t)}function Ga(e,t){ti(e,"da",t)}function ti(e,t,n=Be){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(lo(t,o,n),n){let r=n.parent;for(;r&&r.parent;)so(r.parent.vnode)&&Ua(o,t,n,r),r=r.parent}}function Ua(e,t,n,o){const r=lo(t,e,o,!0);pr(()=>{Zo(o[t],r)},n)}function lo(e,t,n=Be,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...l)=>{if(n.isUnmounted)return;rn(),Xt(n);const i=We(t,n,e,l);return Ht(),sn(),i});return o?r.unshift(s):r.push(s),s}}const mt=e=>(t,n=Be)=>(!In||e==="sp")&&lo(e,(...o)=>t(...o),n),za=mt("bm"),ln=mt("m"),qa=mt("bu"),Ka=mt("u"),ni=mt("bum"),pr=mt("um"),Wa=mt("sp"),Ya=mt("rtg"),Za=mt("rtc");function Ja(e,t=Be){lo("ec",e,t)}function Qa(e,t){const n=Pe;if(n===null)return e;const o=uo(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[l,i,c,f=xe]=t[s];l&&(ie(l)&&(l={mounted:l,updated:l}),l.deep&&Mt(i),r.push({dir:l,instance:o,value:i,oldValue:void 0,arg:c,modifiers:f}))}return e}function St(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let l=0;l<r.length;l++){const i=r[l];s&&(i.oldValue=s[l].value);let c=i.dir[o];c&&(rn(),We(c,n,8,[e.el,i,e,t]),sn())}}const gr="components";function Qt(e,t){return ri(gr,e,!0,t)||e}const oi=Symbol();function io(e){return Ee(e)?ri(gr,e,!1)||e:e||oi}function ri(e,t,n=!0,o=!1){const r=Pe||Be;if(r){const s=r.type;if(e===gr){const i=Bu(s,!1);if(i&&(i===t||i===ft(t)||i===eo(ft(t))))return s}const l=Hr(r[e]||s[e],t)||Hr(r.appContext[e],t);return!l&&o?s:l}}function Hr(e,t){return e&&(e[t]||e[ft(t)]||e[eo(ft(t))])}function Ro(e,t,n,o){let r;const s=n&&n[o];if(oe(e)||Ee(e)){r=new Array(e.length);for(let l=0,i=e.length;l<i;l++)r[l]=t(e[l],l,void 0,s&&s[l])}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,s&&s[l])}else if($e(e))if(e[Symbol.iterator])r=Array.from(e,(l,i)=>t(l,i,void 0,s&&s[i]));else{const l=Object.keys(e);r=new Array(l.length);for(let i=0,c=l.length;i<c;i++){const f=l[i];r[i]=t(e[f],f,i,s&&s[i])}}else r=[];return n&&(n[o]=r),r}function He(e,t,n={},o,r){if(Pe.isCE||Pe.parent&&bn(Pe.parent)&&Pe.parent.isCE)return t!=="default"&&(n.name=t),a("slot",n,o&&o());let s=e[t];s&&s._c&&(s._d=!1),$();const l=s&&si(s(n)),i=de(ee,{key:n.key||l&&l.key||`_${t}`},l||(o?o():[]),l&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),s&&s._c&&(s._d=!0),i}function si(e){return e.some(t=>Yn(t)?!(t.type===Ye||t.type===ee&&!si(t.children)):!0)?e:null}const Oo=e=>e?bi(e)?uo(e)||e.proxy:Oo(e.parent):null,yn=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Oo(e.parent),$root:e=>Oo(e.root),$emit:e=>e.emit,$options:e=>hr(e),$forceUpdate:e=>e.f||(e.f=()=>cr(e.update)),$nextTick:e=>e.n||(e.n=ir.bind(e.proxy)),$watch:e=>La.bind(e)}),yo=(e,t)=>e!==xe&&!e.__isScriptSetup&&fe(e,t),Xa={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:l,type:i,appContext:c}=e;let f;if(t[0]!=="$"){const y=l[t];if(y!==void 0)switch(y){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(yo(o,t))return l[t]=1,o[t];if(r!==xe&&fe(r,t))return l[t]=2,r[t];if((f=e.propsOptions[0])&&fe(f,t))return l[t]=3,s[t];if(n!==xe&&fe(n,t))return l[t]=4,n[t];Vo&&(l[t]=0)}}const u=yn[t];let _,h;if(u)return t==="$attrs"&&Ue(e,"get",t),u(e);if((_=i.__cssModules)&&(_=_[t]))return _;if(n!==xe&&fe(n,t))return l[t]=4,n[t];if(h=c.config.globalProperties,fe(h,t))return h[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;return yo(r,t)?(r[t]=n,!0):o!==xe&&fe(o,t)?(o[t]=n,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},l){let i;return!!n[l]||e!==xe&&fe(e,l)||yo(t,l)||(i=s[0])&&fe(i,l)||fe(o,l)||fe(yn,l)||fe(r.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:fe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Vo=!0;function eu(e){const t=hr(e),n=e.proxy,o=e.ctx;Vo=!1,t.beforeCreate&&Nr(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:l,watch:i,provide:c,inject:f,created:u,beforeMount:_,mounted:h,beforeUpdate:y,updated:I,activated:A,deactivated:L,beforeDestroy:F,beforeUnmount:b,destroyed:v,unmounted:C,render:E,renderTracked:S,renderTriggered:G,errorCaptured:O,serverPrefetch:R,expose:J,inheritAttrs:le,components:q,directives:_e,filters:Ae}=t;if(f&&tu(f,o,null,e.appContext.config.unwrapInjectedRef),l)for(const ge in l){const ne=l[ge];ie(ne)&&(o[ge]=ne.bind(n))}if(r){const ge=r.call(n,n);$e(ge)&&(e.data=Fn(ge))}if(Vo=!0,s)for(const ge in s){const ne=s[ge],Te=ie(ne)?ne.bind(n,n):ie(ne.get)?ne.get.bind(n,n):tt,je=!ie(ne)&&ie(ne.set)?ne.set.bind(n):tt,Ve=ke({get:Te,set:je});Object.defineProperty(o,ge,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:be=>Ve.value=be})}if(i)for(const ge in i)li(i[ge],o,n,ge);if(c){const ge=ie(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(ne=>{mn(ne,ge[ne])})}u&&Nr(u,e,"c");function Ce(ge,ne){oe(ne)?ne.forEach(Te=>ge(Te.bind(n))):ne&&ge(ne.bind(n))}if(Ce(za,_),Ce(ln,h),Ce(qa,y),Ce(Ka,I),Ce(ja,A),Ce(Ga,L),Ce(Ja,O),Ce(Za,S),Ce(Ya,G),Ce(ni,b),Ce(pr,C),Ce(Wa,R),oe(J))if(J.length){const ge=e.exposed||(e.exposed={});J.forEach(ne=>{Object.defineProperty(ge,ne,{get:()=>n[ne],set:Te=>n[ne]=Te})})}else e.exposed||(e.exposed={});E&&e.render===tt&&(e.render=E),le!=null&&(e.inheritAttrs=le),q&&(e.components=q),_e&&(e.directives=_e)}function tu(e,t,n=tt,o=!1){oe(e)&&(e=Mo(e));for(const r in e){const s=e[r];let l;$e(s)?"default"in s?l=nt(s.from||r,s.default,!0):l=nt(s.from||r):l=nt(s),Le(l)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[r]=l}}function Nr(e,t,n){We(oe(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function li(e,t,n,o){const r=o.includes(".")?Jl(n,o):()=>n[o];if(Ee(e)){const s=t[e];ie(s)&&vn(r,s)}else if(ie(e))vn(r,e.bind(n));else if($e(e))if(oe(e))e.forEach(s=>li(s,t,n,o));else{const s=ie(e.handler)?e.handler.bind(n):t[e.handler];ie(s)&&vn(r,s,e)}}function hr(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:l}}=e.appContext,i=s.get(t);let c;return i?c=i:!r.length&&!n&&!o?c=t:(c={},r.length&&r.forEach(f=>Wn(c,f,l,!0)),Wn(c,t,l)),$e(t)&&s.set(t,c),c}function Wn(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&Wn(e,s,n,!0),r&&r.forEach(l=>Wn(e,l,n,!0));for(const l in t)if(!(o&&l==="expose")){const i=nu[l]||n&&n[l];e[l]=i?i(e[l],t[l]):t[l]}return e}const nu={data:jr,props:Pt,emits:Pt,methods:Pt,computed:Pt,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Pt,directives:Pt,watch:ru,provide:jr,inject:ou};function jr(e,t){return t?e?function(){return Oe(ie(e)?e.call(this,this):e,ie(t)?t.call(this,this):t)}:t:e}function ou(e,t){return Pt(Mo(e),Mo(t))}function Mo(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Pt(e,t){return e?Oe(Oe(Object.create(null),e),t):t}function ru(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const o in t)n[o]=Ne(e[o],t[o]);return n}function su(e,t,n,o=!1){const r={},s={};zn(s,ao,1),e.propsDefaults=Object.create(null),ii(e,t,r,s);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);n?e.props=o?r:wa(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function lu(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:l}}=e,i=pe(r),[c]=e.propsOptions;let f=!1;if((o||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let _=0;_<u.length;_++){let h=u[_];if(oo(e.emitsOptions,h))continue;const y=t[h];if(c)if(fe(s,h))y!==s[h]&&(s[h]=y,f=!0);else{const I=ft(h);r[I]=Lo(c,i,I,y,e,!1)}else y!==s[h]&&(s[h]=y,f=!0)}}}else{ii(e,t,r,s)&&(f=!0);let u;for(const _ in i)(!t||!fe(t,_)&&((u=on(_))===_||!fe(t,u)))&&(c?n&&(n[_]!==void 0||n[u]!==void 0)&&(r[_]=Lo(c,i,_,void 0,e,!0)):delete r[_]);if(s!==i)for(const _ in s)(!t||!fe(t,_))&&(delete s[_],f=!0)}f&&_t(e,"set","$attrs")}function ii(e,t,n,o){const[r,s]=e.propsOptions;let l=!1,i;if(t)for(let c in t){if(jn(c))continue;const f=t[c];let u;r&&fe(r,u=ft(c))?!s||!s.includes(u)?n[u]=f:(i||(i={}))[u]=f:oo(e.emitsOptions,c)||(!(c in o)||f!==o[c])&&(o[c]=f,l=!0)}if(s){const c=pe(n),f=i||xe;for(let u=0;u<s.length;u++){const _=s[u];n[_]=Lo(r,c,_,f[_],e,!fe(f,_))}}return l}function Lo(e,t,n,o,r,s){const l=e[n];if(l!=null){const i=fe(l,"default");if(i&&o===void 0){const c=l.default;if(l.type!==Function&&ie(c)){const{propsDefaults:f}=r;n in f?o=f[n]:(Xt(r),o=f[n]=c.call(null,t),Ht())}else o=c}l[0]&&(s&&!i?o=!1:l[1]&&(o===""||o===on(n))&&(o=!0))}return o}function ci(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const s=e.props,l={},i=[];let c=!1;if(!ie(e)){const u=_=>{c=!0;const[h,y]=ci(_,t,!0);Oe(l,h),y&&i.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return $e(e)&&o.set(e,qt),qt;if(oe(s))for(let u=0;u<s.length;u++){const _=ft(s[u]);Gr(_)&&(l[_]=xe)}else if(s)for(const u in s){const _=ft(u);if(Gr(_)){const h=s[u],y=l[_]=oe(h)||ie(h)?{type:h}:Object.assign({},h);if(y){const I=qr(Boolean,y.type),A=qr(String,y.type);y[0]=I>-1,y[1]=A<0||I<A,(I>-1||fe(y,"default"))&&i.push(_)}}}const f=[l,i];return $e(e)&&o.set(e,f),f}function Gr(e){return e[0]!=="$"}function Ur(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function zr(e,t){return Ur(e)===Ur(t)}function qr(e,t){return oe(t)?t.findIndex(n=>zr(n,e)):ie(t)&&zr(t,e)?0:-1}const ai=e=>e[0]==="_"||e==="$stable",_r=e=>oe(e)?e.map(ct):[ct(e)],iu=(e,t,n)=>{if(t._n)return t;const o=g((...r)=>_r(t(...r)),n);return o._c=!1,o},ui=(e,t,n)=>{const o=e._ctx;for(const r in e){if(ai(r))continue;const s=e[r];if(ie(s))t[r]=iu(r,s,o);else if(s!=null){const l=_r(s);t[r]=()=>l}}},di=(e,t)=>{const n=_r(t);e.slots.default=()=>n},cu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=pe(t),zn(t,"_",n)):ui(t,e.slots={})}else e.slots={},t&&di(e,t);zn(e.slots,ao,1)},au=(e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,l=xe;if(o.shapeFlag&32){const i=t._;i?n&&i===1?s=!1:(Oe(r,t),!n&&i===1&&delete r._):(s=!t.$stable,ui(t,r)),l=t}else t&&(di(e,t),l={default:1});if(s)for(const i in r)!ai(i)&&!(i in l)&&delete r[i]};function fi(){return{app:null,config:{isNativeTag:Vc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uu=0;function du(e,t){return function(o,r=null){ie(o)||(o=Object.assign({},o)),r!=null&&!$e(r)&&(r=null);const s=fi(),l=new Set;let i=!1;const c=s.app={_uid:uu++,_component:o,_props:r,_container:null,_context:s,_instance:null,version:Du,get config(){return s.config},set config(f){},use(f,...u){return l.has(f)||(f&&ie(f.install)?(l.add(f),f.install(c,...u)):ie(f)&&(l.add(f),f(c,...u))),c},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),c},component(f,u){return u?(s.components[f]=u,c):s.components[f]},directive(f,u){return u?(s.directives[f]=u,c):s.directives[f]},mount(f,u,_){if(!i){const h=a(o,r);return h.appContext=s,u&&t?t(h,f):e(h,f,_),i=!0,c._container=f,f.__vue_app__=c,uo(h.component)||h.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,u){return s.provides[f]=u,c}};return c}}function Ho(e,t,n,o,r=!1){if(oe(e)){e.forEach((h,y)=>Ho(h,t&&(oe(t)?t[y]:t),n,o,r));return}if(bn(o)&&!r)return;const s=o.shapeFlag&4?uo(o.component)||o.component.proxy:o.el,l=r?null:s,{i,r:c}=e,f=t&&t.r,u=i.refs===xe?i.refs={}:i.refs,_=i.setupState;if(f!=null&&f!==c&&(Ee(f)?(u[f]=null,fe(_,f)&&(_[f]=null)):Le(f)&&(f.value=null)),ie(c))Tt(c,i,12,[l,u]);else{const h=Ee(c),y=Le(c);if(h||y){const I=()=>{if(e.f){const A=h?fe(_,c)?_[c]:u[c]:c.value;r?oe(A)&&Zo(A,s):oe(A)?A.includes(s)||A.push(s):h?(u[c]=[s],fe(_,c)&&(_[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else h?(u[c]=l,fe(_,c)&&(_[c]=l)):y&&(c.value=l,e.k&&(u[e.k]=l))};l?(I.id=-1,Ge(I,n)):I()}}}const Ge=Ma;function fu(e){return pu(e)}function pu(e,t){const n=zc();n.__VUE__=!0;const{insert:o,remove:r,patchProp:s,createElement:l,createText:i,createComment:c,setText:f,setElementText:u,parentNode:_,nextSibling:h,setScopeId:y=tt,insertStaticContent:I}=e,A=(d,m,w,x=null,B=null,V=null,z=!1,P=null,j=!!m.dynamicChildren)=>{if(d===m)return;d&&!Ot(d,m)&&(x=N(d),be(d,B,V,!0),d=null),m.patchFlag===-2&&(j=!1,m.dynamicChildren=null);const{type:D,ref:Q,shapeFlag:W}=m;switch(D){case co:L(d,m,w,x);break;case Ye:F(d,m,w,x);break;case Gn:d==null&&b(m,w,x,z);break;case ee:q(d,m,w,x,B,V,z,P,j);break;default:W&1?E(d,m,w,x,B,V,z,P,j):W&6?_e(d,m,w,x,B,V,z,P,j):(W&64||W&128)&&D.process(d,m,w,x,B,V,z,P,j,ae)}Q!=null&&B&&Ho(Q,d&&d.ref,V,m||d,!m)},L=(d,m,w,x)=>{if(d==null)o(m.el=i(m.children),w,x);else{const B=m.el=d.el;m.children!==d.children&&f(B,m.children)}},F=(d,m,w,x)=>{d==null?o(m.el=c(m.children||""),w,x):m.el=d.el},b=(d,m,w,x)=>{[d.el,d.anchor]=I(d.children,m,w,x,d.el,d.anchor)},v=({el:d,anchor:m},w,x)=>{let B;for(;d&&d!==m;)B=h(d),o(d,w,x),d=B;o(m,w,x)},C=({el:d,anchor:m})=>{let w;for(;d&&d!==m;)w=h(d),r(d),d=w;r(m)},E=(d,m,w,x,B,V,z,P,j)=>{z=z||m.type==="svg",d==null?S(m,w,x,B,V,z,P,j):R(d,m,B,V,z,P,j)},S=(d,m,w,x,B,V,z,P)=>{let j,D;const{type:Q,props:W,shapeFlag:X,transition:re,dirs:ue}=d;if(j=d.el=l(d.type,V,W&&W.is,W),X&8?u(j,d.children):X&16&&O(d.children,j,null,x,B,V&&Q!=="foreignObject",z,P),ue&&St(d,null,x,"created"),G(j,d,d.scopeId,z,x),W){for(const me in W)me!=="value"&&!jn(me)&&s(j,me,null,W[me],V,d.children,x,B,U);"value"in W&&s(j,"value",null,W.value),(D=W.onVnodeBeforeMount)&&it(D,x,d)}ue&&St(d,null,x,"beforeMount");const ye=(!B||B&&!B.pendingBranch)&&re&&!re.persisted;ye&&re.beforeEnter(j),o(j,m,w),((D=W&&W.onVnodeMounted)||ye||ue)&&Ge(()=>{D&&it(D,x,d),ye&&re.enter(j),ue&&St(d,null,x,"mounted")},B)},G=(d,m,w,x,B)=>{if(w&&y(d,w),x)for(let V=0;V<x.length;V++)y(d,x[V]);if(B){let V=B.subTree;if(m===V){const z=B.vnode;G(d,z,z.scopeId,z.slotScopeIds,B.parent)}}},O=(d,m,w,x,B,V,z,P,j=0)=>{for(let D=j;D<d.length;D++){const Q=d[D]=P?xt(d[D]):ct(d[D]);A(null,Q,m,w,x,B,V,z,P)}},R=(d,m,w,x,B,V,z)=>{const P=m.el=d.el;let{patchFlag:j,dynamicChildren:D,dirs:Q}=m;j|=d.patchFlag&16;const W=d.props||xe,X=m.props||xe;let re;w&&It(w,!1),(re=X.onVnodeBeforeUpdate)&&it(re,w,m,d),Q&&St(m,d,w,"beforeUpdate"),w&&It(w,!0);const ue=B&&m.type!=="foreignObject";if(D?J(d.dynamicChildren,D,P,w,x,ue,V):z||ne(d,m,P,null,w,x,ue,V,!1),j>0){if(j&16)le(P,m,W,X,w,x,B);else if(j&2&&W.class!==X.class&&s(P,"class",null,X.class,B),j&4&&s(P,"style",W.style,X.style,B),j&8){const ye=m.dynamicProps;for(let me=0;me<ye.length;me++){const Se=ye[me],Ze=W[Se],Gt=X[Se];(Gt!==Ze||Se==="value")&&s(P,Se,Ze,Gt,B,d.children,w,x,U)}}j&1&&d.children!==m.children&&u(P,m.children)}else!z&&D==null&&le(P,m,W,X,w,x,B);((re=X.onVnodeUpdated)||Q)&&Ge(()=>{re&&it(re,w,m,d),Q&&St(m,d,w,"updated")},x)},J=(d,m,w,x,B,V,z)=>{for(let P=0;P<m.length;P++){const j=d[P],D=m[P],Q=j.el&&(j.type===ee||!Ot(j,D)||j.shapeFlag&70)?_(j.el):w;A(j,D,Q,null,x,B,V,z,!0)}},le=(d,m,w,x,B,V,z)=>{if(w!==x){if(w!==xe)for(const P in w)!jn(P)&&!(P in x)&&s(d,P,w[P],null,z,m.children,B,V,U);for(const P in x){if(jn(P))continue;const j=x[P],D=w[P];j!==D&&P!=="value"&&s(d,P,D,j,z,m.children,B,V,U)}"value"in x&&s(d,"value",w.value,x.value)}},q=(d,m,w,x,B,V,z,P,j)=>{const D=m.el=d?d.el:i(""),Q=m.anchor=d?d.anchor:i("");let{patchFlag:W,dynamicChildren:X,slotScopeIds:re}=m;re&&(P=P?P.concat(re):re),d==null?(o(D,w,x),o(Q,w,x),O(m.children,w,Q,B,V,z,P,j)):W>0&&W&64&&X&&d.dynamicChildren?(J(d.dynamicChildren,X,w,B,V,z,P),(m.key!=null||B&&m===B.subTree)&&mr(d,m,!0)):ne(d,m,w,Q,B,V,z,P,j)},_e=(d,m,w,x,B,V,z,P,j)=>{m.slotScopeIds=P,d==null?m.shapeFlag&512?B.ctx.activate(m,w,x,z,j):Ae(m,w,x,B,V,z,j):st(d,m,j)},Ae=(d,m,w,x,B,V,z)=>{const P=d.component=$u(d,x,B);if(so(d)&&(P.ctx.renderer=ae),ku(P),P.asyncDep){if(B&&B.registerDep(P,Ce),!d.el){const j=P.subTree=a(Ye);F(null,j,m,w)}return}Ce(P,d,m,w,B,V,z)},st=(d,m,w)=>{const x=m.component=d.component;if(Ra(d,m,w))if(x.asyncDep&&!x.asyncResolved){ge(x,m,w);return}else x.next=m,Aa(x.update),x.update();else m.el=d.el,x.vnode=m},Ce=(d,m,w,x,B,V,z)=>{const P=()=>{if(d.isMounted){let{next:Q,bu:W,u:X,parent:re,vnode:ue}=d,ye=Q,me;It(d,!1),Q?(Q.el=ue.el,ge(d,Q,z)):Q=ue,W&&mo(W),(me=Q.props&&Q.props.onVnodeBeforeUpdate)&&it(me,re,Q,ue),It(d,!0);const Se=vo(d),Ze=d.subTree;d.subTree=Se,A(Ze,Se,_(Ze.el),N(Ze),d,B,V),Q.el=Se.el,ye===null&&Oa(d,Se.el),X&&Ge(X,B),(me=Q.props&&Q.props.onVnodeUpdated)&&Ge(()=>it(me,re,Q,ue),B)}else{let Q;const{el:W,props:X}=m,{bm:re,m:ue,parent:ye}=d,me=bn(m);if(It(d,!1),re&&mo(re),!me&&(Q=X&&X.onVnodeBeforeMount)&&it(Q,ye,m),It(d,!0),W&&se){const Se=()=>{d.subTree=vo(d),se(W,d.subTree,d,B,null)};me?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Se()):Se()}else{const Se=d.subTree=vo(d);A(null,Se,w,x,d,B,V),m.el=Se.el}if(ue&&Ge(ue,B),!me&&(Q=X&&X.onVnodeMounted)){const Se=m;Ge(()=>it(Q,ye,Se),B)}(m.shapeFlag&256||ye&&bn(ye.vnode)&&ye.vnode.shapeFlag&256)&&d.a&&Ge(d.a,B),d.isMounted=!0,m=w=x=null}},j=d.effect=new er(P,()=>cr(D),d.scope),D=d.update=()=>j.run();D.id=d.uid,It(d,!0),D()},ge=(d,m,w)=>{m.component=d;const x=d.vnode.props;d.vnode=m,d.next=null,lu(d,m.props,x,w),au(d,m.children,w),rn(),Vr(),sn()},ne=(d,m,w,x,B,V,z,P,j=!1)=>{const D=d&&d.children,Q=d?d.shapeFlag:0,W=m.children,{patchFlag:X,shapeFlag:re}=m;if(X>0){if(X&128){je(D,W,w,x,B,V,z,P,j);return}else if(X&256){Te(D,W,w,x,B,V,z,P,j);return}}re&8?(Q&16&&U(D,B,V),W!==D&&u(w,W)):Q&16?re&16?je(D,W,w,x,B,V,z,P,j):U(D,B,V,!0):(Q&8&&u(w,""),re&16&&O(W,w,x,B,V,z,P,j))},Te=(d,m,w,x,B,V,z,P,j)=>{d=d||qt,m=m||qt;const D=d.length,Q=m.length,W=Math.min(D,Q);let X;for(X=0;X<W;X++){const re=m[X]=j?xt(m[X]):ct(m[X]);A(d[X],re,w,null,B,V,z,P,j)}D>Q?U(d,B,V,!0,!1,W):O(m,w,x,B,V,z,P,j,W)},je=(d,m,w,x,B,V,z,P,j)=>{let D=0;const Q=m.length;let W=d.length-1,X=Q-1;for(;D<=W&&D<=X;){const re=d[D],ue=m[D]=j?xt(m[D]):ct(m[D]);if(Ot(re,ue))A(re,ue,w,null,B,V,z,P,j);else break;D++}for(;D<=W&&D<=X;){const re=d[W],ue=m[X]=j?xt(m[X]):ct(m[X]);if(Ot(re,ue))A(re,ue,w,null,B,V,z,P,j);else break;W--,X--}if(D>W){if(D<=X){const re=X+1,ue=re<Q?m[re].el:x;for(;D<=X;)A(null,m[D]=j?xt(m[D]):ct(m[D]),w,ue,B,V,z,P,j),D++}}else if(D>X)for(;D<=W;)be(d[D],B,V,!0),D++;else{const re=D,ue=D,ye=new Map;for(D=ue;D<=X;D++){const qe=m[D]=j?xt(m[D]):ct(m[D]);qe.key!=null&&ye.set(qe.key,D)}let me,Se=0;const Ze=X-ue+1;let Gt=!1,Tr=0;const dn=new Array(Ze);for(D=0;D<Ze;D++)dn[D]=0;for(D=re;D<=W;D++){const qe=d[D];if(Se>=Ze){be(qe,B,V,!0);continue}let lt;if(qe.key!=null)lt=ye.get(qe.key);else for(me=ue;me<=X;me++)if(dn[me-ue]===0&&Ot(qe,m[me])){lt=me;break}lt===void 0?be(qe,B,V,!0):(dn[lt-ue]=D+1,lt>=Tr?Tr=lt:Gt=!0,A(qe,m[lt],w,null,B,V,z,P,j),Se++)}const Er=Gt?gu(dn):qt;for(me=Er.length-1,D=Ze-1;D>=0;D--){const qe=ue+D,lt=m[qe],Br=qe+1<Q?m[qe+1].el:x;dn[D]===0?A(null,lt,w,Br,B,V,z,P,j):Gt&&(me<0||D!==Er[me]?Ve(lt,w,Br,2):me--)}}},Ve=(d,m,w,x,B=null)=>{const{el:V,type:z,transition:P,children:j,shapeFlag:D}=d;if(D&6){Ve(d.component.subTree,m,w,x);return}if(D&128){d.suspense.move(m,w,x);return}if(D&64){z.move(d,m,w,ae);return}if(z===ee){o(V,m,w);for(let W=0;W<j.length;W++)Ve(j[W],m,w,x);o(d.anchor,m,w);return}if(z===Gn){v(d,m,w);return}if(x!==2&&D&1&&P)if(x===0)P.beforeEnter(V),o(V,m,w),Ge(()=>P.enter(V),B);else{const{leave:W,delayLeave:X,afterLeave:re}=P,ue=()=>o(V,m,w),ye=()=>{W(V,()=>{ue(),re&&re()})};X?X(V,ue,ye):ye()}else o(V,m,w)},be=(d,m,w,x=!1,B=!1)=>{const{type:V,props:z,ref:P,children:j,dynamicChildren:D,shapeFlag:Q,patchFlag:W,dirs:X}=d;if(P!=null&&Ho(P,null,w,d,!0),Q&256){m.ctx.deactivate(d);return}const re=Q&1&&X,ue=!bn(d);let ye;if(ue&&(ye=z&&z.onVnodeBeforeUnmount)&&it(ye,m,d),Q&6)k(d.component,w,x);else{if(Q&128){d.suspense.unmount(w,x);return}re&&St(d,null,m,"beforeUnmount"),Q&64?d.type.remove(d,m,w,B,ae,x):D&&(V!==ee||W>0&&W&64)?U(D,m,w,!1,!0):(V===ee&&W&384||!B&&Q&16)&&U(j,m,w),x&&vt(d)}(ue&&(ye=z&&z.onVnodeUnmounted)||re)&&Ge(()=>{ye&&it(ye,m,d),re&&St(d,null,m,"unmounted")},w)},vt=d=>{const{type:m,el:w,anchor:x,transition:B}=d;if(m===ee){ze(w,x);return}if(m===Gn){C(d);return}const V=()=>{r(w),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(d.shapeFlag&1&&B&&!B.persisted){const{leave:z,delayLeave:P}=B,j=()=>z(w,V);P?P(d.el,V,j):j()}else V()},ze=(d,m)=>{let w;for(;d!==m;)w=h(d),r(d),d=w;r(m)},k=(d,m,w)=>{const{bum:x,scope:B,update:V,subTree:z,um:P}=d;x&&mo(x),B.stop(),V&&(V.active=!1,be(z,d,m,w)),P&&Ge(P,m),Ge(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},U=(d,m,w,x=!1,B=!1,V=0)=>{for(let z=V;z<d.length;z++)be(d[z],m,w,x,B)},N=d=>d.shapeFlag&6?N(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),Y=(d,m,w)=>{d==null?m._vnode&&be(m._vnode,null,null,!0):A(m._vnode||null,d,m,null,null,null,w),Vr(),Wl(),m._vnode=d},ae={p:A,um:be,m:Ve,r:vt,mt:Ae,mc:O,pc:ne,pbc:J,n:N,o:e};let ve,se;return t&&([ve,se]=t(ae)),{render:Y,hydrate:ve,createApp:du(Y,ve)}}function It({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function mr(e,t,n=!1){const o=e.children,r=t.children;if(oe(o)&&oe(r))for(let s=0;s<o.length;s++){const l=o[s];let i=r[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[s]=xt(r[s]),i.el=l.el),n||mr(l,i)),i.type===co&&(i.el=l.el)}}function gu(e){const t=e.slice(),n=[0];let o,r,s,l,i;const c=e.length;for(o=0;o<c;o++){const f=e[o];if(f!==0){if(r=n[n.length-1],e[r]<f){t[o]=r,n.push(o);continue}for(s=0,l=n.length-1;s<l;)i=s+l>>1,e[n[i]]<f?s=i+1:l=i;f<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,l=n[s-1];s-- >0;)n[s]=l,l=t[l];return n}const hu=e=>e.__isTeleport,wn=e=>e&&(e.disabled||e.disabled===""),Kr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,No=(e,t)=>{const n=e&&e.to;return Ee(n)?t?t(n):null:n},_u={__isTeleport:!0,process(e,t,n,o,r,s,l,i,c,f){const{mc:u,pc:_,pbc:h,o:{insert:y,querySelector:I,createText:A,createComment:L}}=f,F=wn(t.props);let{shapeFlag:b,children:v,dynamicChildren:C}=t;if(e==null){const E=t.el=A(""),S=t.anchor=A("");y(E,n,o),y(S,n,o);const G=t.target=No(t.props,I),O=t.targetAnchor=A("");G&&(y(O,G),l=l||Kr(G));const R=(J,le)=>{b&16&&u(v,J,le,r,s,l,i,c)};F?R(n,S):G&&R(G,O)}else{t.el=e.el;const E=t.anchor=e.anchor,S=t.target=e.target,G=t.targetAnchor=e.targetAnchor,O=wn(e.props),R=O?n:S,J=O?E:G;if(l=l||Kr(S),C?(h(e.dynamicChildren,C,R,r,s,l,i),mr(e,t,!0)):c||_(e,t,R,J,r,s,l,i,!1),F)O||Nn(t,n,E,f,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const le=t.target=No(t.props,I);le&&Nn(t,le,null,f,0)}else O&&Nn(t,S,G,f,1)}gi(t)},remove(e,t,n,o,{um:r,o:{remove:s}},l){const{shapeFlag:i,children:c,anchor:f,targetAnchor:u,target:_,props:h}=e;if(_&&s(u),(l||!wn(h))&&(s(f),i&16))for(let y=0;y<c.length;y++){const I=c[y];r(I,t,n,!0,!!I.dynamicChildren)}},move:Nn,hydrate:mu};function Nn(e,t,n,{o:{insert:o},m:r},s=2){s===0&&o(e.targetAnchor,t,n);const{el:l,anchor:i,shapeFlag:c,children:f,props:u}=e,_=s===2;if(_&&o(l,t,n),(!_||wn(u))&&c&16)for(let h=0;h<f.length;h++)r(f[h],t,n,2);_&&o(i,t,n)}function mu(e,t,n,o,r,s,{o:{nextSibling:l,parentNode:i,querySelector:c}},f){const u=t.target=No(t.props,c);if(u){const _=u._lpa||u.firstChild;if(t.shapeFlag&16)if(wn(t.props))t.anchor=f(l(e),t,i(e),n,o,r,s),t.targetAnchor=_;else{t.anchor=l(e);let h=_;for(;h;)if(h=l(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,u._lpa=t.targetAnchor&&l(t.targetAnchor);break}f(_,t,u,n,o,r,s)}gi(t)}return t.anchor&&l(t.anchor)}const pi=_u;function gi(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const ee=Symbol(void 0),co=Symbol(void 0),Ye=Symbol(void 0),Gn=Symbol(void 0),Cn=[];let Xe=null;function $(e=!1){Cn.push(Xe=e?null:[])}function vu(){Cn.pop(),Xe=Cn[Cn.length-1]||null}let Sn=1;function Wr(e){Sn+=e}function hi(e){return e.dynamicChildren=Sn>0?Xe||qt:null,vu(),Sn>0&&Xe&&Xe.push(e),e}function H(e,t,n,o,r,s){return hi(p(e,t,n,o,r,s,!0))}function de(e,t,n,o,r){return hi(a(e,t,n,o,r,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function Ot(e,t){return e.type===t.type&&e.key===t.key}const ao="__vInternal",_i=({key:e})=>e??null,Un=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ee(e)||Le(e)||ie(e)?{i:Pe,r:e,k:t,f:!!n}:e:null;function p(e,t=null,n=null,o=0,r=null,s=e===ee?0:1,l=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_i(t),ref:t&&Un(t),scopeId:ro,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return i?(vr(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Ee(n)?8:16),Sn>0&&!l&&Xe&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Xe.push(c),c}const a=bu;function bu(e,t=null,n=null,o=0,r=null,s=!1){if((!e||e===oi)&&(e=Ye),Yn(e)){const i=Bt(e,t,!0);return n&&vr(i,n),Sn>0&&!s&&Xe&&(i.shapeFlag&6?Xe[Xe.indexOf(e)]=i:Xe.push(i)),i.patchFlag|=-2,i}if(Au(e)&&(e=e.__vccOpts),t){t=yu(t);let{class:i,style:c}=t;i&&!Ee(i)&&(t.class=De(i)),$e(c)&&(Ll(c)&&!oe(c)&&(c=Oe({},c)),t.style=Wo(c))}const l=Ee(e)?1:Va(e)?128:hu(e)?64:$e(e)?4:ie(e)?2:0;return p(e,t,n,o,r,l,s,!0)}function yu(e){return e?Ll(e)||ao in e?Oe({},e):e:null}function Bt(e,t,n=!1){const{props:o,ref:r,patchFlag:s,children:l}=e,i=t?wu(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&_i(i),ref:t&&t.ref?n&&r?oe(r)?r.concat(Un(t)):[r,Un(t)]:Un(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ee?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function T(e=" ",t=0){return a(co,null,e,t)}function mi(e,t){const n=a(Gn,null,e);return n.staticCount=t,n}function Fe(e="",t=!1){return t?($(),de(Ye,null,e)):a(Ye,null,e)}function ct(e){return e==null||typeof e=="boolean"?a(Ye):oe(e)?a(ee,null,e.slice()):typeof e=="object"?xt(e):a(co,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bt(e)}function vr(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(oe(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),vr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(ao in t)?t._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),o&64?(n=16,t=[T(t)]):n=8);e.children=t,e.shapeFlag|=n}function wu(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=De([t.class,o.class]));else if(r==="style")t.style=Wo([t.style,o.style]);else if(Jn(r)){const s=t[r],l=o[r];l&&s!==l&&!(oe(s)&&s.includes(l))&&(t[r]=s?[].concat(s,l):l)}else r!==""&&(t[r]=o[r])}return t}function it(e,t,n,o=null){We(e,t,7,[n,o])}const Cu=fi();let xu=0;function $u(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||Cu,s={uid:xu++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ci(o,r),emitsOptions:Zl(o,r),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:o.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Da.bind(null,s),e.ce&&e.ce(s),s}let Be=null;const vi=()=>Be||Pe,Xt=e=>{Be=e,e.scope.on()},Ht=()=>{Be&&Be.scope.off(),Be=null};function bi(e){return e.vnode.shapeFlag&4}let In=!1;function ku(e,t=!1){In=t;const{props:n,children:o}=e.vnode,r=bi(e);su(e,n,r,t),cu(e,o);const s=r?Tu(e,t):void 0;return In=!1,s}function Tu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Hl(new Proxy(e.ctx,Xa));const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?wi(e):null;Xt(e),rn();const s=Tt(o,e,0,[e.props,r]);if(sn(),Ht(),kl(s)){if(s.then(Ht,Ht),t)return s.then(l=>{Yr(e,l,t)}).catch(l=>{no(l,e,0)});e.asyncDep=s}else Yr(e,s,t)}else yi(e,t)}function Yr(e,t,n){ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:$e(t)&&(e.setupState=Ul(t)),yi(e,n)}let Zr;function yi(e,t,n){const o=e.type;if(!e.render){if(!t&&Zr&&!o.render){const r=o.template||hr(e).template;if(r){const{isCustomElement:s,compilerOptions:l}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,f=Oe(Oe({isCustomElement:s,delimiters:i},l),c);o.render=Zr(r,f)}}e.render=o.render||tt}Xt(e),rn(),eu(e),sn(),Ht()}function Eu(e){return new Proxy(e.attrs,{get(t,n){return Ue(e,"get","$attrs"),t[n]}})}function wi(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=Eu(e))},slots:e.slots,emit:e.emit,expose:t}}function uo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ul(Hl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yn)return yn[n](e)},has(t,n){return n in t||n in yn}}))}function Bu(e,t=!0){return ie(e)?e.displayName||e.name:e.name||t&&e.__name}function Au(e){return ie(e)&&"__vccOpts"in e}const ke=(e,t)=>Ta(e,t,In);function At(){return Ci().slots}function Jr(){return Ci().attrs}function Ci(){const e=vi();return e.setupContext||(e.setupContext=wi(e))}function jt(e,t,n){const o=arguments.length;return o===2?$e(t)&&!oe(t)?Yn(t)?a(e,null,[t]):a(e,t):a(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Yn(n)&&(n=[n]),a(e,t,n))}const Su=Symbol(""),Iu=()=>nt(Su),Du="3.2.47",Fu="http://www.w3.org/2000/svg",Vt=typeof document<"u"?document:null,Qr=Vt&&Vt.createElement("template"),Pu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?Vt.createElementNS(Fu,e):Vt.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Vt.createTextNode(e),createComment:e=>Vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,s){const l=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Qr.innerHTML=o?`<svg>${e}</svg>`:e;const i=Qr.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ru(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ou(e,t,n){const o=e.style,r=Ee(n);if(n&&!r){if(t&&!Ee(t))for(const s in t)n[s]==null&&jo(o,s,"");for(const s in n)jo(o,s,n[s])}else{const s=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=s)}}const Xr=/\s*!important$/;function jo(e,t,n){if(oe(n))n.forEach(o=>jo(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Vu(e,t);Xr.test(n)?e.setProperty(on(o),n.replace(Xr,""),"important"):e[o]=n}}const es=["Webkit","Moz","ms"],wo={};function Vu(e,t){const n=wo[t];if(n)return n;let o=ft(t);if(o!=="filter"&&o in e)return wo[t]=o;o=eo(o);for(let r=0;r<es.length;r++){const s=es[r]+o;if(s in e)return wo[t]=s}return t}const ts="http://www.w3.org/1999/xlink";function Mu(e,t,n,o,r){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ts,t.slice(6,t.length)):e.setAttributeNS(ts,t,n);else{const s=Oc(t);n==null||s&&!Cl(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Lu(e,t,n,o,r,s,l){if(t==="innerHTML"||t==="textContent"){o&&l(o,r,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Cl(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function Hu(e,t,n,o){e.addEventListener(t,n,o)}function Nu(e,t,n,o){e.removeEventListener(t,n,o)}function ju(e,t,n,o,r=null){const s=e._vei||(e._vei={}),l=s[t];if(o&&l)l.value=o;else{const[i,c]=Gu(t);if(o){const f=s[t]=qu(o,r);Hu(e,i,f,c)}else l&&(Nu(e,i,l,c),s[t]=void 0)}}const ns=/(?:Once|Passive|Capture)$/;function Gu(e){let t;if(ns.test(e)){t={};let o;for(;o=e.match(ns);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):on(e.slice(2)),t]}let Co=0;const Uu=Promise.resolve(),zu=()=>Co||(Uu.then(()=>Co=0),Co=Date.now());function qu(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;We(Ku(o,n.value),t,5,[o])};return n.value=e,n.attached=zu(),n}function Ku(e,t){if(oe(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const os=/^on[a-z]/,Wu=(e,t,n,o,r=!1,s,l,i,c)=>{t==="class"?Ru(e,o,r):t==="style"?Ou(e,n,o):Jn(t)?Yo(t)||ju(e,t,n,o,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yu(e,t,o,r))?Lu(e,t,o,s,l,i,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Mu(e,t,o,r))};function Yu(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&os.test(t)&&ie(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||os.test(t)&&Ee(n)?!1:t in e}const yt="transition",fn="animation",br=(e,{slots:t})=>jt(Ql,Zu(e),t);br.displayName="Transition";const xi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};br.props=Oe({},Ql.props,xi);const Dt=(e,t=[])=>{oe(e)?e.forEach(n=>n(...t)):e&&e(...t)},rs=e=>e?oe(e)?e.some(t=>t.length>1):e.length>1:!1;function Zu(e){const t={};for(const q in e)q in xi||(t[q]=e[q]);if(e.css===!1)return t;const{name:n="v",type:o,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:f=l,appearToClass:u=i,leaveFromClass:_=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,I=Ju(r),A=I&&I[0],L=I&&I[1],{onBeforeEnter:F,onEnter:b,onEnterCancelled:v,onLeave:C,onLeaveCancelled:E,onBeforeAppear:S=F,onAppear:G=b,onAppearCancelled:O=v}=t,R=(q,_e,Ae)=>{Ft(q,_e?u:i),Ft(q,_e?f:l),Ae&&Ae()},J=(q,_e)=>{q._isLeaving=!1,Ft(q,_),Ft(q,y),Ft(q,h),_e&&_e()},le=q=>(_e,Ae)=>{const st=q?G:b,Ce=()=>R(_e,q,Ae);Dt(st,[_e,Ce]),ss(()=>{Ft(_e,q?c:s),wt(_e,q?u:i),rs(st)||ls(_e,o,A,Ce)})};return Oe(t,{onBeforeEnter(q){Dt(F,[q]),wt(q,s),wt(q,l)},onBeforeAppear(q){Dt(S,[q]),wt(q,c),wt(q,f)},onEnter:le(!1),onAppear:le(!0),onLeave(q,_e){q._isLeaving=!0;const Ae=()=>J(q,_e);wt(q,_),ed(),wt(q,h),ss(()=>{q._isLeaving&&(Ft(q,_),wt(q,y),rs(C)||ls(q,o,L,Ae))}),Dt(C,[q,Ae])},onEnterCancelled(q){R(q,!1),Dt(v,[q])},onAppearCancelled(q){R(q,!0),Dt(O,[q])},onLeaveCancelled(q){J(q),Dt(E,[q])}})}function Ju(e){if(e==null)return null;if($e(e))return[xo(e.enter),xo(e.leave)];{const t=xo(e);return[t,t]}}function xo(e){return Uc(e)}function wt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ft(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ss(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Qu=0;function ls(e,t,n,o){const r=e._endId=++Qu,s=()=>{r===e._endId&&o()};if(n)return setTimeout(s,n);const{type:l,timeout:i,propCount:c}=Xu(e,t);if(!l)return o();const f=l+"end";let u=0;const _=()=>{e.removeEventListener(f,h),s()},h=y=>{y.target===e&&++u>=c&&_()};setTimeout(()=>{u<c&&_()},i+1),e.addEventListener(f,h)}function Xu(e,t){const n=window.getComputedStyle(e),o=I=>(n[I]||"").split(", "),r=o(`${yt}Delay`),s=o(`${yt}Duration`),l=is(r,s),i=o(`${fn}Delay`),c=o(`${fn}Duration`),f=is(i,c);let u=null,_=0,h=0;t===yt?l>0&&(u=yt,_=l,h=s.length):t===fn?f>0&&(u=fn,_=f,h=c.length):(_=Math.max(l,f),u=_>0?l>f?yt:fn:null,h=u?u===yt?s.length:c.length:0);const y=u===yt&&/\b(transform|all)(,|$)/.test(o(`${yt}Property`).toString());return{type:u,timeout:_,propCount:h,hasTransform:y}}function is(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>cs(n)+cs(e[o])))}function cs(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ed(){return document.body.offsetHeight}const td={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):pn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),pn(e,!0),o.enter(e)):o.leave(e,()=>{pn(e,!1)}):pn(e,t))},beforeUnmount(e,{value:t}){pn(e,t)}};function pn(e,t){e.style.display=t?e._vod:"none"}const nd=Oe({patchProp:Wu},Pu);let as;function od(){return as||(as=fu(nd))}const yr=(...e)=>{const t=od().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=rd(o);if(!r)return;const s=t._component;!ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const l=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t};function rd(e){return Ee(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof window<"u";function sd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const he=Object.assign;function $o(e,t){const n={};for(const o in t){const r=t[o];n[o]=rt(r)?r.map(e):e(r)}return n}const xn=()=>{},rt=Array.isArray,ld=/\/$/,id=e=>e.replace(ld,"");function ko(e,t,n="/"){let o,r={},s="",l="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=t.slice(0,c),s=t.slice(c+1,i>-1?i:t.length),r=e(s)),i>-1&&(o=o||t.slice(0,i),l=t.slice(i,t.length)),o=dd(o??t,n),{fullPath:o+(s&&"?")+s+l,path:o,query:r,hash:l}}function cd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function us(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ad(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&en(t.matched[o],n.matched[r])&&$i(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function en(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $i(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ud(e[n],t[n]))return!1;return!0}function ud(e,t){return rt(e)?ds(e,t):rt(t)?ds(t,e):e===t}function ds(e,t){return rt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function dd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/");let r=n.length-1,s,l;for(s=0;s<o.length;s++)if(l=o[s],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(s-(s===o.length?1:0)).join("/")}var Dn;(function(e){e.pop="pop",e.push="push"})(Dn||(Dn={}));var $n;(function(e){e.back="back",e.forward="forward",e.unknown=""})($n||($n={}));function fd(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),id(e)}const pd=/^[^#]+#/;function gd(e,t){return e.replace(pd,"#")+t}function hd(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const fo=()=>({left:window.pageXOffset,top:window.pageYOffset});function _d(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=hd(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function fs(e,t){return(history.state?history.state.position-t:-1)+e}const Go=new Map;function md(e,t){Go.set(e,t)}function vd(e){const t=Go.get(e);return Go.delete(e),t}let bd=()=>location.protocol+"//"+location.host;function ki(e,t){const{pathname:n,search:o,hash:r}=t,s=e.indexOf("#");if(s>-1){let i=r.includes(e.slice(s))?e.slice(s).length:1,c=r.slice(i);return c[0]!=="/"&&(c="/"+c),us(c,"")}return us(n,e)+o+r}function yd(e,t,n,o){let r=[],s=[],l=null;const i=({state:h})=>{const y=ki(e,location),I=n.value,A=t.value;let L=0;if(h){if(n.value=y,t.value=h,l&&l===I){l=null;return}L=A?h.position-A.position:0}else o(y);r.forEach(F=>{F(n.value,I,{delta:L,type:Dn.pop,direction:L?L>0?$n.forward:$n.back:$n.unknown})})};function c(){l=n.value}function f(h){r.push(h);const y=()=>{const I=r.indexOf(h);I>-1&&r.splice(I,1)};return s.push(y),y}function u(){const{history:h}=window;h.state&&h.replaceState(he({},h.state,{scroll:fo()}),"")}function _(){for(const h of s)h();s=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:f,destroy:_}}function ps(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?fo():null}}function wd(e){const{history:t,location:n}=window,o={value:ki(e,n)},r={value:t.state};r.value||s(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,f,u){const _=e.indexOf("#"),h=_>-1?(n.host&&document.querySelector("base")?e:e.slice(_))+c:bd()+e+c;try{t[u?"replaceState":"pushState"](f,"",h),r.value=f}catch(y){console.error(y),n[u?"replace":"assign"](h)}}function l(c,f){const u=he({},t.state,ps(r.value.back,c,r.value.forward,!0),f,{position:r.value.position});s(c,u,!0),o.value=c}function i(c,f){const u=he({},r.value,t.state,{forward:c,scroll:fo()});s(u.current,u,!0);const _=he({},ps(o.value,c,null),{position:u.position+1},f);s(c,_,!1),o.value=c}return{location:o,state:r,push:i,replace:l}}function Cd(e){e=fd(e);const t=wd(e),n=yd(e,t.state,t.location,t.replace);function o(s,l=!0){l||n.pauseListeners(),history.go(s)}const r=he({location:"",base:e,go:o,createHref:gd.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function xd(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Cd(e)}function $d(e){return typeof e=="string"||e&&typeof e=="object"}function Ti(e){return typeof e=="string"||typeof e=="symbol"}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ei=Symbol("");var gs;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(gs||(gs={}));function tn(e,t){return he(new Error,{type:e,[Ei]:!0},t)}function gt(e,t){return e instanceof Error&&Ei in e&&(t==null||!!(e.type&t))}const hs="[^/]+?",kd={sensitive:!1,strict:!1,start:!0,end:!0},Td=/[.+*?^${}()[\]/\\]/g;function Ed(e,t){const n=he({},kd,t),o=[];let r=n.start?"^":"";const s=[];for(const f of e){const u=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let _=0;_<f.length;_++){const h=f[_];let y=40+(n.sensitive?.25:0);if(h.type===0)_||(r+="/"),r+=h.value.replace(Td,"\\$&"),y+=40;else if(h.type===1){const{value:I,repeatable:A,optional:L,regexp:F}=h;s.push({name:I,repeatable:A,optional:L});const b=F||hs;if(b!==hs){y+=10;try{new RegExp(`(${b})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${I}" (${b}): `+C.message)}}let v=A?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;_||(v=L&&f.length<2?`(?:/${v})`:"/"+v),L&&(v+="?"),r+=v,y+=20,L&&(y+=-8),A&&(y+=-20),b===".*"&&(y+=-50)}u.push(y)}o.push(u)}if(n.strict&&n.end){const f=o.length-1;o[f][o[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const l=new RegExp(r,n.sensitive?"":"i");function i(f){const u=f.match(l),_={};if(!u)return null;for(let h=1;h<u.length;h++){const y=u[h]||"",I=s[h-1];_[I.name]=y&&I.repeatable?y.split("/"):y}return _}function c(f){let u="",_=!1;for(const h of e){(!_||!u.endsWith("/"))&&(u+="/"),_=!1;for(const y of h)if(y.type===0)u+=y.value;else if(y.type===1){const{value:I,repeatable:A,optional:L}=y,F=I in f?f[I]:"";if(rt(F)&&!A)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const b=rt(F)?F.join("/"):F;if(!b)if(L)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):_=!0);else throw new Error(`Missing required param "${I}"`);u+=b}}return u||"/"}return{re:l,score:o,keys:s,parse:i,stringify:c}}function Bd(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ad(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const s=Bd(o[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-o.length)===1){if(_s(o))return 1;if(_s(r))return-1}return r.length-o.length}function _s(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Sd={type:0,value:""},Id=/[a-zA-Z0-9_]/;function Dd(e){if(!e)return[[]];if(e==="/")return[[Sd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${f}": ${y}`)}let n=0,o=n;const r=[];let s;function l(){s&&r.push(s),s=[]}let i=0,c,f="",u="";function _(){f&&(n===0?s.push({type:0,value:f}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(f&&_(),l()):c===":"?(_(),n=1):h();break;case 4:h(),n=o;break;case 1:c==="("?n=2:Id.test(c)?h():(_(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:_(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),_(),l(),r}function Fd(e,t,n){const o=Ed(Dd(e.path),n),r=he(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Pd(e,t){const n=[],o=new Map;t=bs({strict:!1,end:!0,sensitive:!1},t);function r(u){return o.get(u)}function s(u,_,h){const y=!h,I=Rd(u);I.aliasOf=h&&h.record;const A=bs(t,u),L=[I];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of v)L.push(he({},I,{components:h?h.record.components:I.components,path:C,aliasOf:h?h.record:I}))}let F,b;for(const v of L){const{path:C}=v;if(_&&C[0]!=="/"){const E=_.record.path,S=E[E.length-1]==="/"?"":"/";v.path=_.record.path+(C&&S+C)}if(F=Fd(v,_,A),h?h.alias.push(F):(b=b||F,b!==F&&b.alias.push(F),y&&u.name&&!vs(F)&&l(u.name)),I.children){const E=I.children;for(let S=0;S<E.length;S++)s(E[S],F,h&&h.children[S])}h=h||F,(F.record.components&&Object.keys(F.record.components).length||F.record.name||F.record.redirect)&&c(F)}return b?()=>{l(b)}:xn}function l(u){if(Ti(u)){const _=o.get(u);_&&(o.delete(u),n.splice(n.indexOf(_),1),_.children.forEach(l),_.alias.forEach(l))}else{const _=n.indexOf(u);_>-1&&(n.splice(_,1),u.record.name&&o.delete(u.record.name),u.children.forEach(l),u.alias.forEach(l))}}function i(){return n}function c(u){let _=0;for(;_<n.length&&Ad(u,n[_])>=0&&(u.record.path!==n[_].record.path||!Bi(u,n[_]));)_++;n.splice(_,0,u),u.record.name&&!vs(u)&&o.set(u.record.name,u)}function f(u,_){let h,y={},I,A;if("name"in u&&u.name){if(h=o.get(u.name),!h)throw tn(1,{location:u});A=h.record.name,y=he(ms(_.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&ms(u.params,h.keys.map(b=>b.name))),I=h.stringify(y)}else if("path"in u)I=u.path,h=n.find(b=>b.re.test(I)),h&&(y=h.parse(I),A=h.record.name);else{if(h=_.name?o.get(_.name):n.find(b=>b.re.test(_.path)),!h)throw tn(1,{location:u,currentLocation:_});A=h.record.name,y=he({},_.params,u.params),I=h.stringify(y)}const L=[];let F=h;for(;F;)L.unshift(F.record),F=F.parent;return{name:A,path:I,params:y,matched:L,meta:Vd(L)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:f,removeRoute:l,getRoutes:i,getRecordMatcher:r}}function ms(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Rd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Od(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Od(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function vs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vd(e){return e.reduce((t,n)=>he(t,n.meta),{})}function bs(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Bi(e,t){return t.children.some(n=>n===e||Bi(e,n))}const Ai=/#/g,Md=/&/g,Ld=/\//g,Hd=/=/g,Nd=/\?/g,Si=/\+/g,jd=/%5B/g,Gd=/%5D/g,Ii=/%5E/g,Ud=/%60/g,Di=/%7B/g,zd=/%7C/g,Fi=/%7D/g,qd=/%20/g;function wr(e){return encodeURI(""+e).replace(zd,"|").replace(jd,"[").replace(Gd,"]")}function Kd(e){return wr(e).replace(Di,"{").replace(Fi,"}").replace(Ii,"^")}function Uo(e){return wr(e).replace(Si,"%2B").replace(qd,"+").replace(Ai,"%23").replace(Md,"%26").replace(Ud,"`").replace(Di,"{").replace(Fi,"}").replace(Ii,"^")}function Wd(e){return Uo(e).replace(Hd,"%3D")}function Yd(e){return wr(e).replace(Ai,"%23").replace(Nd,"%3F")}function Zd(e){return e==null?"":Yd(e).replace(Ld,"%2F")}function Zn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Jd(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const s=o[r].replace(Si," "),l=s.indexOf("="),i=Zn(l<0?s:s.slice(0,l)),c=l<0?null:Zn(s.slice(l+1));if(i in t){let f=t[i];rt(f)||(f=t[i]=[f]),f.push(c)}else t[i]=c}return t}function ys(e){let t="";for(let n in e){const o=e[n];if(n=Wd(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(rt(o)?o.map(s=>s&&Uo(s)):[o&&Uo(o)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Qd(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=rt(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const Xd=Symbol(""),ws=Symbol(""),Cr=Symbol(""),Pi=Symbol(""),zo=Symbol("");function gn(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $t(e,t,n,o,r){const s=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((l,i)=>{const c=_=>{_===!1?i(tn(4,{from:n,to:t})):_ instanceof Error?i(_):$d(_)?i(tn(2,{from:t,to:_})):(s&&o.enterCallbacks[r]===s&&typeof _=="function"&&s.push(_),l())},f=e.call(o&&o.instances[r],t,n,c);let u=Promise.resolve(f);e.length<3&&(u=u.then(c)),u.catch(_=>i(_))})}function To(e,t,n,o){const r=[];for(const s of e)for(const l in s.components){let i=s.components[l];if(!(t!=="beforeRouteEnter"&&!s.instances[l]))if(ef(i)){const f=(i.__vccOpts||i)[t];f&&r.push($t(f,n,o,s,l))}else{let c=i();r.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${s.path}"`));const u=sd(f)?f.default:f;s.components[l]=u;const h=(u.__vccOpts||u)[t];return h&&$t(h,n,o,s,l)()}))}}return r}function ef(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Cs(e){const t=nt(Cr),n=nt(Pi),o=ke(()=>t.resolve(we(e.to))),r=ke(()=>{const{matched:c}=o.value,{length:f}=c,u=c[f-1],_=n.matched;if(!u||!_.length)return-1;const h=_.findIndex(en.bind(null,u));if(h>-1)return h;const y=xs(c[f-2]);return f>1&&xs(u)===y&&_[_.length-1].path!==y?_.findIndex(en.bind(null,c[f-2])):h}),s=ke(()=>r.value>-1&&rf(n.params,o.value.params)),l=ke(()=>r.value>-1&&r.value===n.matched.length-1&&$i(n.params,o.value.params));function i(c={}){return of(c)?t[we(e.replace)?"replace":"push"](we(e.to)).catch(xn):Promise.resolve()}return{route:o,href:ke(()=>o.value.href),isActive:s,isExactActive:l,navigate:i}}const tf=M({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cs,setup(e,{slots:t}){const n=Fn(Cs(e)),{options:o}=nt(Cr),r=ke(()=>({[$s(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[$s(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:jt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),nf=tf;function of(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rf(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!rt(r)||r.length!==o.length||o.some((s,l)=>s!==r[l]))return!1}return!0}function xs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $s=(e,t,n)=>e??t??n,sf=M({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=nt(zo),r=ke(()=>e.route||o.value),s=nt(ws,0),l=ke(()=>{let f=we(s);const{matched:u}=r.value;let _;for(;(_=u[f])&&!_.components;)f++;return f}),i=ke(()=>r.value.matched[l.value]);mn(ws,ke(()=>l.value+1)),mn(Xd,i),mn(zo,r);const c=ce();return vn(()=>[c.value,i.value,e.name],([f,u,_],[h,y,I])=>{u&&(u.instances[_]=f,y&&y!==u&&f&&f===h&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),f&&u&&(!y||!en(u,y)||!h)&&(u.enterCallbacks[_]||[]).forEach(A=>A(f))},{flush:"post"}),()=>{const f=r.value,u=e.name,_=i.value,h=_&&_.components[u];if(!h)return ks(n.default,{Component:h,route:f});const y=_.props[u],I=y?y===!0?f.params:typeof y=="function"?y(f):y:null,L=jt(h,he({},I,t,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(_.instances[u]=null)},ref:c}));return ks(n.default,{Component:L,route:f})||L}}});function ks(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const lf=sf;function cf(e){const t=Pd(e.routes,e),n=e.parseQuery||Jd,o=e.stringifyQuery||ys,r=e.history,s=gn(),l=gn(),i=gn(),c=Ca(Ct);let f=Ct;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$o.bind(null,k=>""+k),_=$o.bind(null,Zd),h=$o.bind(null,Zn);function y(k,U){let N,Y;return Ti(k)?(N=t.getRecordMatcher(k),Y=U):Y=k,t.addRoute(Y,N)}function I(k){const U=t.getRecordMatcher(k);U&&t.removeRoute(U)}function A(){return t.getRoutes().map(k=>k.record)}function L(k){return!!t.getRecordMatcher(k)}function F(k,U){if(U=he({},U||c.value),typeof k=="string"){const d=ko(n,k,U.path),m=t.resolve({path:d.path},U),w=r.createHref(d.fullPath);return he(d,m,{params:h(m.params),hash:Zn(d.hash),redirectedFrom:void 0,href:w})}let N;if("path"in k)N=he({},k,{path:ko(n,k.path,U.path).path});else{const d=he({},k.params);for(const m in d)d[m]==null&&delete d[m];N=he({},k,{params:_(k.params)}),U.params=_(U.params)}const Y=t.resolve(N,U),ae=k.hash||"";Y.params=u(h(Y.params));const ve=cd(o,he({},k,{hash:Kd(ae),path:Y.path})),se=r.createHref(ve);return he({fullPath:ve,hash:ae,query:o===ys?Qd(k.query):k.query||{}},Y,{redirectedFrom:void 0,href:se})}function b(k){return typeof k=="string"?ko(n,k,c.value.path):he({},k)}function v(k,U){if(f!==k)return tn(8,{from:U,to:k})}function C(k){return G(k)}function E(k){return C(he(b(k),{replace:!0}))}function S(k){const U=k.matched[k.matched.length-1];if(U&&U.redirect){const{redirect:N}=U;let Y=typeof N=="function"?N(k):N;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=b(Y):{path:Y},Y.params={}),he({query:k.query,hash:k.hash,params:"path"in Y?{}:k.params},Y)}}function G(k,U){const N=f=F(k),Y=c.value,ae=k.state,ve=k.force,se=k.replace===!0,d=S(N);if(d)return G(he(b(d),{state:typeof d=="object"?he({},ae,d.state):ae,force:ve,replace:se}),U||N);const m=N;m.redirectedFrom=U;let w;return!ve&&ad(o,Y,N)&&(w=tn(16,{to:m,from:Y}),je(Y,Y,!0,!1)),(w?Promise.resolve(w):R(m,Y)).catch(x=>gt(x)?gt(x,2)?x:Te(x):ge(x,m,Y)).then(x=>{if(x){if(gt(x,2))return G(he({replace:se},b(x.to),{state:typeof x.to=="object"?he({},ae,x.to.state):ae,force:ve}),U||m)}else x=le(m,Y,!0,se,ae);return J(m,Y,x),x})}function O(k,U){const N=v(k,U);return N?Promise.reject(N):Promise.resolve()}function R(k,U){let N;const[Y,ae,ve]=af(k,U);N=To(Y.reverse(),"beforeRouteLeave",k,U);for(const d of Y)d.leaveGuards.forEach(m=>{N.push($t(m,k,U))});const se=O.bind(null,k,U);return N.push(se),Ut(N).then(()=>{N=[];for(const d of s.list())N.push($t(d,k,U));return N.push(se),Ut(N)}).then(()=>{N=To(ae,"beforeRouteUpdate",k,U);for(const d of ae)d.updateGuards.forEach(m=>{N.push($t(m,k,U))});return N.push(se),Ut(N)}).then(()=>{N=[];for(const d of k.matched)if(d.beforeEnter&&!U.matched.includes(d))if(rt(d.beforeEnter))for(const m of d.beforeEnter)N.push($t(m,k,U));else N.push($t(d.beforeEnter,k,U));return N.push(se),Ut(N)}).then(()=>(k.matched.forEach(d=>d.enterCallbacks={}),N=To(ve,"beforeRouteEnter",k,U),N.push(se),Ut(N))).then(()=>{N=[];for(const d of l.list())N.push($t(d,k,U));return N.push(se),Ut(N)}).catch(d=>gt(d,8)?d:Promise.reject(d))}function J(k,U,N){for(const Y of i.list())Y(k,U,N)}function le(k,U,N,Y,ae){const ve=v(k,U);if(ve)return ve;const se=U===Ct,d=zt?history.state:{};N&&(Y||se?r.replace(k.fullPath,he({scroll:se&&d&&d.scroll},ae)):r.push(k.fullPath,ae)),c.value=k,je(k,U,N,se),Te()}let q;function _e(){q||(q=r.listen((k,U,N)=>{if(!ze.listening)return;const Y=F(k),ae=S(Y);if(ae){G(he(ae,{replace:!0}),Y).catch(xn);return}f=Y;const ve=c.value;zt&&md(fs(ve.fullPath,N.delta),fo()),R(Y,ve).catch(se=>gt(se,12)?se:gt(se,2)?(G(se.to,Y).then(d=>{gt(d,20)&&!N.delta&&N.type===Dn.pop&&r.go(-1,!1)}).catch(xn),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ge(se,Y,ve))).then(se=>{se=se||le(Y,ve,!1),se&&(N.delta&&!gt(se,8)?r.go(-N.delta,!1):N.type===Dn.pop&&gt(se,20)&&r.go(-1,!1)),J(Y,ve,se)}).catch(xn)}))}let Ae=gn(),st=gn(),Ce;function ge(k,U,N){Te(k);const Y=st.list();return Y.length?Y.forEach(ae=>ae(k,U,N)):console.error(k),Promise.reject(k)}function ne(){return Ce&&c.value!==Ct?Promise.resolve():new Promise((k,U)=>{Ae.add([k,U])})}function Te(k){return Ce||(Ce=!k,_e(),Ae.list().forEach(([U,N])=>k?N(k):U()),Ae.reset()),k}function je(k,U,N,Y){const{scrollBehavior:ae}=e;if(!zt||!ae)return Promise.resolve();const ve=!N&&vd(fs(k.fullPath,0))||(Y||!N)&&history.state&&history.state.scroll||null;return ir().then(()=>ae(k,U,ve)).then(se=>se&&_d(se)).catch(se=>ge(se,k,U))}const Ve=k=>r.go(k);let be;const vt=new Set,ze={currentRoute:c,listening:!0,addRoute:y,removeRoute:I,hasRoute:L,getRoutes:A,resolve:F,options:e,push:C,replace:E,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:s.add,beforeResolve:l.add,afterEach:i.add,onError:st.add,isReady:ne,install(k){const U=this;k.component("RouterLink",nf),k.component("RouterView",lf),k.config.globalProperties.$router=U,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>we(c)}),zt&&!be&&c.value===Ct&&(be=!0,C(r.location).catch(ae=>{}));const N={};for(const ae in Ct)N[ae]=ke(()=>c.value[ae]);k.provide(Cr,U),k.provide(Pi,Fn(N)),k.provide(zo,c);const Y=k.unmount;vt.add(k),k.unmount=function(){vt.delete(k),vt.size<1&&(f=Ct,q&&q(),q=null,c.value=Ct,be=!1,Ce=!1),Y()}}};return ze}function Ut(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function af(e,t){const n=[],o=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let l=0;l<s;l++){const i=t.matched[l];i&&(e.matched.find(f=>en(f,i))?o.push(i):n.push(i));const c=e.matched[l];c&&(t.matched.find(f=>en(f,c))||r.push(c))}return[n,o,r]}const po=e=>(ar("data-v-7089b61d"),e=e(),ur(),e),uf={class:"top-nav"},df=po(()=>p("svg",{class:"icon"},[p("use",{"xlink:href":"#icon-logo"})],-1)),ff={class:"menu"},pf=po(()=>p("li",null,[p("a",{href:"https://www.npmjs.com/package/gulu-ui-myself"},"npm")],-1)),gf={key:0,class:"toggleAside"},hf={key:0},_f=po(()=>p("use",{"xlink:href":"#icon-close"},null,-1)),mf=[_f],vf={key:1},bf=po(()=>p("use",{"xlink:href":"#icon-menu"},null,-1)),yf=[bf],wf=M({__name:"Topnav",props:{toggleAsideVisible:{type:Boolean,default:!1}},setup(e){const t=nt("asideVisible"),n=()=>{t.value=!t.value};return(o,r)=>{const s=Qt("router-link");return $(),H("div",uf,[a(s,{to:"/",class:"logo"},{default:g(()=>[df]),_:1}),p("ul",ff,[p("li",null,[a(s,{to:"/doc"},{default:g(()=>[T("文档")]),_:1})]),pf]),e.toggleAsideVisible?($(),H("div",gf,[a(br,{name:"fade",mode:"out-in",onClick:n,class:"icon"},{default:g(()=>[we(t)?($(),H("svg",hf,mf)):($(),H("svg",vf,yf))]),_:1})])):Fe("",!0)])}}});const pt=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Ri=pt(wf,[["__scopeId","data-v-7089b61d"]]),xr=e=>(ar("data-v-f151a731"),e=e(),ur(),e),Cf={class:"gulu-wrapper"},xf={class:"banner"},$f=xr(()=>p("h1",null,"轱辘UI",-1)),kf=xr(()=>p("h2",null,"一个面向学习者的 UI 框架",-1)),Tf={class:"actions"},Ef=xr(()=>p("a",{href:"https://github.com/haxiedaimala/gulu-ui-website"},"Github",-1)),Bf=mi('<div class="features" data-v-f151a731><ul data-v-f151a731><li data-v-f151a731><svg class="icon" data-v-f151a731><use xlink:href="#icon-vue" data-v-f151a731></use></svg><h3 data-v-f151a731>基于 Vue 3</h3><p data-v-f151a731>骄傲地使用了 Vue 3 Composition API</p></li><li data-v-f151a731><svg class="icon" data-v-f151a731><use xlink:href="#icon-ts" data-v-f151a731></use></svg><h3 data-v-f151a731>基于 TypeScript </h3><p data-v-f151a731>源代码采用 TypeScript 书写（非严格检查）</p></li><li data-v-f151a731><svg class="icon" data-v-f151a731><use xlink:href="#icon-light" data-v-f151a731></use></svg><h3 data-v-f151a731>代码易读</h3><p data-v-f151a731>每个组件的源代码都极其简洁</p></li></ul></div>',1),Af=M({__name:"Home",setup(e){return(t,n)=>{const o=Qt("router-link");return $(),H(ee,null,[p("div",null,[p("div",Cf,[a(Ri),p("div",xf,[$f,kf,p("p",Tf,[Ef,a(o,{to:"/doc"},{default:g(()=>[T("开始")]),_:1})])])])]),Bf],64)}}});const Sf=pt(Af,[["__scopeId","data-v-f151a731"]]),$r=e=>(ar("data-v-4e41bd78"),e=e(),ur(),e),If={class:"layout"},Df={class:"content"},Ff=$r(()=>p("h2",null,"文档",-1)),Pf=$r(()=>p("h2",null,"组件列表",-1)),Rf=$r(()=>p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-back-top"})],-1)),Of=[Rf],Vf=M({__name:"Doc",setup(e){const t=nt("asideVisible"),n=ce(!1),o=()=>{const s=document.documentElement.scrollTop||document.body.scrollTop;n.value=s>=350},r=()=>{let s=setInterval(()=>{let l=document.documentElement.scrollTop||document.body.scrollTop,i=Math.floor(-l/5);document.documentElement.scrollTop=document.body.scrollTop=l+i,l===0&&clearInterval(s)},20)};return ln(()=>{window.addEventListener("scroll",o,!0)}),(s,l)=>{const i=Qt("router-link"),c=Qt("router-view");return $(),H("div",If,[a(Ri,{toggleAsideVisible:"",class:"nav"}),p("div",Df,[p("aside",{class:De({open:we(t)})},[Ff,p("ol",null,[p("li",null,[a(i,{to:"/doc/intro"},{default:g(()=>[T("介绍")]),_:1})]),p("li",null,[a(i,{to:"/doc/install"},{default:g(()=>[T("安装")]),_:1})]),p("li",null,[a(i,{to:"/doc/get-started"},{default:g(()=>[T("开始")]),_:1})])]),Pf,p("ol",null,[p("li",null,[a(i,{to:"/doc/switch"},{default:g(()=>[T("Switch 组件")]),_:1})]),p("li",null,[a(i,{to:"/doc/button"},{default:g(()=>[T("Button 组件")]),_:1})]),p("li",null,[a(i,{to:"/doc/Dialog"},{default:g(()=>[T("Dialog 组件")]),_:1})]),p("li",null,[a(i,{to:"/doc/tabs"},{default:g(()=>[T("Tabs 组件")]),_:1})]),p("li",null,[a(i,{to:"/doc/input"},{default:g(()=>[T("Input 组件")]),_:1})]),p("li",null,[a(i,{to:"/doc/layout"},{default:g(()=>[T("Layout 组件")]),_:1})]),p("li",null,[a(i,{to:"/doc/container"},{default:g(()=>[T("Container 组件")]),_:1})]),p("li",null,[a(i,{to:"/doc/toast"},{default:g(()=>[T("Toast 组件")]),_:1})]),p("li",null,[a(i,{to:"/doc/popover"},{default:g(()=>[T("Popover 组件")]),_:1})]),p("li",null,[a(i,{to:"/doc/collapse"},{default:g(()=>[T("Collapse 组件")]),_:1})])])],2),p("main",null,[a(c),Qa(p("div",{onClick:r,class:"back-top"},Of,512),[[td,n.value]])])])])}}});const Mf=pt(Vf,[["__scopeId","data-v-4e41bd78"]]),Lf=p("span",null,null,-1),Hf=[Lf],Nt=M({__name:"Switch",props:{modelValue:Boolean,disabled:{type:Boolean,default:!1},style:{type:Object},size:{type:String,default:"normal",validator:e=>["large","normal","small"].indexOf(e)>=0}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=()=>{n.disabled||t("update:modelValue",!n.modelValue)},r=ce();return dr(()=>{n.style&&(r.value.style.backgroundColor=n.modelValue?n.style["--switch-on-color"]:n.style["--switch-off-color"])}),(s,l)=>($(),H("button",{ref_key:"buttonItem",ref:r,class:De(["gulu-switch",{"gulu-checked":e.modelValue,disabled:e.disabled,[`gulu-${e.size}-switch`]:e.size}]),onClick:o},Hf,2))}});const Oi=M({__name:"Switch1.sourceCode",setup(e){const t=ce(!0),n=ce(!0);return(o,r)=>($(),H(ee,null,[a(Nt,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=s=>t.value=s)},null,8,["modelValue"]),a(Nt,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=s=>n.value=s),style:{"--switch-on-color":"#13ce66","--switch-off-color":"#ff4949"}},null,8,["modelValue"])],64))}});function Ts(e){e.__sourceCode=`<script setup lang="ts">\r
import Switch from '../../components/lib/Switch.vue';\r
import {ref} from 'vue';\r
\r
const checked1 = ref(true);\r
const checked2 = ref(true);\r
<\/script>\r
\r
<template>\r
  <Switch v-model="checked1"/>\r
  <Switch v-model="checked2" style="--switch-on-color: #13ce66; --switch-off-color: #ff4949"/>\r
</template>`,e.__sourceCodeTitle=" 常规用法 ",e.__sourceCodeDetail=" 绑定 <code>v-model</code> 到一个 <code>Boolean</code> 类型的变量。 可以使用 <code>--switch-on-color</code> 属性与 <code>--switch-off-color</code> 属性来设置开关的背景色。 "}typeof Ts=="function"&&Ts(Oi);const Vi=M({__name:"Switch2.sourceCode",setup(e){const t=ce(!0),n=ce(!1);return(o,r)=>($(),H(ee,null,[a(Nt,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=s=>t.value=s)},null,8,["modelValue"]),a(Nt,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=s=>n.value=s),disabled:""},null,8,["modelValue"])],64))}});function Es(e){e.__sourceCode=`<script setup lang="ts">\r
import Switch from '../../components/lib/Switch.vue';\r
import {ref} from 'vue';\r
\r
const checked1 = ref(true);\r
const checked2 = ref(false);\r
<\/script>\r
\r
<template>\r
  <Switch v-model="checked1"/>\r
  <Switch v-model="checked2" disabled/>\r
</template>`,e.__sourceCodeTitle=" 支持 disabled ",e.__sourceCodeDetail="设置<code>disabled</code>属性，接受一个<code>Boolean</code>，设置<code>true</code>即可禁用。"}typeof Es=="function"&&Es(Vi);const Mi=M({__name:"Switch3.sourceCode",setup(e){const t=ce(!0);return(n,o)=>($(),H(ee,null,[a(Nt,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),size:"large"},null,8,["modelValue"]),a(Nt,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=r=>t.value=r)},null,8,["modelValue"]),a(Nt,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=r=>t.value=r),size:"small"},null,8,["modelValue"])],64))}});function Bs(e){e.__sourceCode=`<script setup lang="ts">\r
import Switch from '../../components/lib/Switch.vue';\r
import {ref} from 'vue';\r
\r
const checked = ref(true);\r
<\/script>\r
\r
<template>\r
  <Switch v-model="checked" size="large"/>\r
  <Switch v-model="checked"/>\r
  <Switch v-model="checked" size="small"/>\r
</template>`,e.__sourceCodeTitle=" 支持 size ",e.__sourceCodeDetail="使用<code>size</code>属性来表示不同的尺寸大小，可以选择的属性值分别为 大尺寸<code>large</code>，正常尺寸（默认）<code>normal</code>,小尺寸<code>small</code>"}typeof Bs=="function"&&Bs(Mi);const Nf=["disabled"],jf={key:0,class:"gulu-loadingIndicator"},K=M({__name:"Button",props:{theme:null,size:null,level:null,disabled:{type:Boolean},loading:{type:Boolean}},setup(e){const{theme:t="button",size:n="normal",level:o="default",disabled:r,loading:s}=e,l=ke(()=>({[`gulu-theme-${t}`]:t,[`gulu-size-${n}`]:n,[`gulu-level-${o}`]:o}));return(i,c)=>($(),H("button",{class:De(["gulu-button",we(l)]),disabled:e.disabled},[e.loading?($(),H("span",jf)):Fe("",!0),He(i.$slots,"default")],10,Nf))}});var As=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qo={},Gf={get exports(){return qo},set exports(e){qo=e}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function b(v){return v instanceof c?new c(v.type,b(v.content),v.alias):Array.isArray(v)?v.map(b):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++s}),b.__id},clone:function b(v,C){C=C||{};var E,S;switch(i.util.type(v)){case"Object":if(S=i.util.objId(v),C[S])return C[S];E={},C[S]=E;for(var G in v)v.hasOwnProperty(G)&&(E[G]=b(v[G],C));return E;case"Array":return S=i.util.objId(v),C[S]?C[S]:(E=[],C[S]=E,v.forEach(function(O,R){E[R]=b(O,C)}),E);default:return v}},getLanguage:function(b){for(;b;){var v=r.exec(b.className);if(v)return v[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,v){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+v)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(E){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(b){var v=document.getElementsByTagName("script");for(var C in v)if(v[C].src==b)return v[C]}return null}},isActive:function(b,v,C){for(var E="no-"+v;b;){var S=b.classList;if(S.contains(v))return!0;if(S.contains(E))return!1;b=b.parentElement}return!!C}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(b,v){var C=i.util.clone(i.languages[b]);for(var E in v)C[E]=v[E];return C},insertBefore:function(b,v,C,E){E=E||i.languages;var S=E[b],G={};for(var O in S)if(S.hasOwnProperty(O)){if(O==v)for(var R in C)C.hasOwnProperty(R)&&(G[R]=C[R]);C.hasOwnProperty(O)||(G[O]=S[O])}var J=E[b];return E[b]=G,i.languages.DFS(i.languages,function(le,q){q===J&&le!=b&&(this[le]=G)}),G},DFS:function b(v,C,E,S){S=S||{};var G=i.util.objId;for(var O in v)if(v.hasOwnProperty(O)){C.call(v,O,v[O],E||O);var R=v[O],J=i.util.type(R);J==="Object"&&!S[G(R)]?(S[G(R)]=!0,b(R,C,null,S)):J==="Array"&&!S[G(R)]&&(S[G(R)]=!0,b(R,C,O,S))}}},plugins:{},highlightAll:function(b,v){i.highlightAllUnder(document,b,v)},highlightAllUnder:function(b,v,C){var E={callback:C,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),i.hooks.run("before-all-elements-highlight",E);for(var S=0,G;G=E.elements[S++];)i.highlightElement(G,v===!0,E.callback)},highlightElement:function(b,v,C){var E=i.util.getLanguage(b),S=i.languages[E];i.util.setLanguage(b,E);var G=b.parentElement;G&&G.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(G,E);var O=b.textContent,R={element:b,language:E,grammar:S,code:O};function J(q){R.highlightedCode=q,i.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,i.hooks.run("after-highlight",R),i.hooks.run("complete",R),C&&C.call(R.element)}if(i.hooks.run("before-sanity-check",R),G=R.element.parentElement,G&&G.nodeName.toLowerCase()==="pre"&&!G.hasAttribute("tabindex")&&G.setAttribute("tabindex","0"),!R.code){i.hooks.run("complete",R),C&&C.call(R.element);return}if(i.hooks.run("before-highlight",R),!R.grammar){J(i.util.encode(R.code));return}if(v&&o.Worker){var le=new Worker(i.filename);le.onmessage=function(q){J(q.data)},le.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else J(i.highlight(R.code,R.grammar,R.language))},highlight:function(b,v,C){var E={code:b,grammar:v,language:C};if(i.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=i.tokenize(E.code,E.grammar),i.hooks.run("after-tokenize",E),c.stringify(i.util.encode(E.tokens),E.language)},tokenize:function(b,v){var C=v.rest;if(C){for(var E in C)v[E]=C[E];delete v.rest}var S=new _;return h(S,S.head,b),u(b,S,v,S.head,0),I(S)},hooks:{all:{},add:function(b,v){var C=i.hooks.all;C[b]=C[b]||[],C[b].push(v)},run:function(b,v){var C=i.hooks.all[b];if(!(!C||!C.length))for(var E=0,S;S=C[E++];)S(v)}},Token:c};o.Prism=i;function c(b,v,C,E){this.type=b,this.content=v,this.alias=C,this.length=(E||"").length|0}c.stringify=function b(v,C){if(typeof v=="string")return v;if(Array.isArray(v)){var E="";return v.forEach(function(J){E+=b(J,C)}),E}var S={type:v.type,content:b(v.content,C),tag:"span",classes:["token",v.type],attributes:{},language:C},G=v.alias;G&&(Array.isArray(G)?Array.prototype.push.apply(S.classes,G):S.classes.push(G)),i.hooks.run("wrap",S);var O="";for(var R in S.attributes)O+=" "+R+'="'+(S.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+O+">"+S.content+"</"+S.tag+">"};function f(b,v,C,E){b.lastIndex=v;var S=b.exec(C);if(S&&E&&S[1]){var G=S[1].length;S.index+=G,S[0]=S[0].slice(G)}return S}function u(b,v,C,E,S,G){for(var O in C)if(!(!C.hasOwnProperty(O)||!C[O])){var R=C[O];R=Array.isArray(R)?R:[R];for(var J=0;J<R.length;++J){if(G&&G.cause==O+","+J)return;var le=R[J],q=le.inside,_e=!!le.lookbehind,Ae=!!le.greedy,st=le.alias;if(Ae&&!le.pattern.global){var Ce=le.pattern.toString().match(/[imsuy]*$/)[0];le.pattern=RegExp(le.pattern.source,Ce+"g")}for(var ge=le.pattern||le,ne=E.next,Te=S;ne!==v.tail&&!(G&&Te>=G.reach);Te+=ne.value.length,ne=ne.next){var je=ne.value;if(v.length>b.length)return;if(!(je instanceof c)){var Ve=1,be;if(Ae){if(be=f(ge,Te,b,_e),!be||be.index>=b.length)break;var U=be.index,vt=be.index+be[0].length,ze=Te;for(ze+=ne.value.length;U>=ze;)ne=ne.next,ze+=ne.value.length;if(ze-=ne.value.length,Te=ze,ne.value instanceof c)continue;for(var k=ne;k!==v.tail&&(ze<vt||typeof k.value=="string");k=k.next)Ve++,ze+=k.value.length;Ve--,je=b.slice(Te,ze),be.index-=Te}else if(be=f(ge,0,je,_e),!be)continue;var U=be.index,N=be[0],Y=je.slice(0,U),ae=je.slice(U+N.length),ve=Te+je.length;G&&ve>G.reach&&(G.reach=ve);var se=ne.prev;Y&&(se=h(v,se,Y),Te+=Y.length),y(v,se,Ve);var d=new c(O,q?i.tokenize(N,q):N,st,N);if(ne=h(v,se,d),ae&&h(v,ne,ae),Ve>1){var m={cause:O+","+J,reach:ve};u(b,v,C,ne.prev,Te,m),G&&m.reach>G.reach&&(G.reach=m.reach)}}}}}}function _(){var b={value:null,prev:null,next:null},v={value:null,prev:b,next:null};b.next=v,this.head=b,this.tail=v,this.length=0}function h(b,v,C){var E=v.next,S={value:C,prev:v,next:E};return v.next=S,E.prev=S,b.length++,S}function y(b,v,C){for(var E=v.next,S=0;S<C&&E!==b.tail;S++)E=E.next;v.next=E,E.prev=v,b.length-=S}function I(b){for(var v=[],C=b.head.next;C!==b.tail;)v.push(C.value),C=C.next;return v}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(b){var v=JSON.parse(b.data),C=v.language,E=v.code,S=v.immediateClose;o.postMessage(i.highlight(E,i.languages[C],C)),S&&o.close()},!1)),i;var A=i.util.currentScript();A&&(i.filename=A.src,A.hasAttribute("data-manual")&&(i.manual=!0));function L(){i.manual||i.highlightAll()}if(!i.manual){var F=document.readyState;F==="loading"||F==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",L):window.requestAnimationFrame?window.requestAnimationFrame(L):window.setTimeout(L,16)}return i}(t);e.exports&&(e.exports=n),typeof As<"u"&&(As.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,s){var l={};l["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};i["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var c={};c[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(o,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var s=o.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(A,L){return"✖ Error "+A+" while fetching file: "+L},s="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",c="loading",f="loaded",u="failed",_="pre[data-src]:not(["+i+'="'+f+'"]):not(['+i+'="'+c+'"])';function h(A,L,F){var b=new XMLHttpRequest;b.open("GET",A,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?L(b.responseText):b.status>=400?F(r(b.status,b.statusText)):F(s))},b.send(null)}function y(A){var L=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(L){var F=Number(L[1]),b=L[2],v=L[3];return b?v?[F,Number(v)]:[F,void 0]:[F,F]}}n.hooks.add("before-highlightall",function(A){A.selector+=", "+_}),n.hooks.add("before-sanity-check",function(A){var L=A.element;if(L.matches(_)){A.code="",L.setAttribute(i,c);var F=L.appendChild(document.createElement("CODE"));F.textContent=o;var b=L.getAttribute("data-src"),v=A.language;if(v==="none"){var C=(/\.(\w+)$/.exec(b)||[,"none"])[1];v=l[C]||C}n.util.setLanguage(F,v),n.util.setLanguage(L,v);var E=n.plugins.autoloader;E&&E.loadLanguages(v),h(b,function(S){L.setAttribute(i,f);var G=y(L.getAttribute("data-range"));if(G){var O=S.split(/\r\n?|\n/g),R=G[0],J=G[1]==null?O.length:G[1];R<0&&(R+=O.length),R=Math.max(0,Math.min(R-1,O.length)),J<0&&(J+=O.length),J=Math.max(0,Math.min(J,O.length)),S=O.slice(R,J).join(`
`),L.hasAttribute("data-start")||L.setAttribute("data-start",String(R+1))}F.textContent=S,n.highlightElement(F)},function(S){L.setAttribute(i,u),F.textContent=S})}}),n.plugins.fileHighlight={highlight:function(L){for(var F=(L||document).querySelectorAll(_),b=0,v;v=F[b++];)n.highlightElement(v)}};var I=!1;n.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Gf);const Ss=qo;const Uf={class:"switch-wrapper"},zf={key:0},qf=["innerHTML"],Kf={class:"switch"},Wf={class:"switch-component"},Yf={class:"switch-actions"},Zf={key:0,class:"switch-code"},Jf=["innerHTML"],Qf=M({__name:"Demo",props:{component:{type:Object,required:!0}},setup(e){const t=e,n=ke(()=>Ss.highlight(t.component.__sourceCode,Ss.languages.html,"html")),o=ce(!1),r=()=>o.value=!0,s=()=>o.value=!1;return(l,i)=>($(),H("div",Uf,[e.component.__sourceCodeTitle?($(),H("h2",zf,Zt(e.component.__sourceCodeTitle),1)):Fe("",!0),e.component.__sourceCodeDetail?($(),H("div",{key:1,class:"detail",innerHTML:e.component.__sourceCodeDetail},null,8,qf)):Fe("",!0),p("div",Kf,[p("div",Wf,[($(),de(io(e.component)))]),p("div",Yf,[o.value?Fe("",!0):($(),de(K,{key:0,onClick:r},{default:g(()=>[T("查看代码")]),_:1})),o.value?($(),de(K,{key:1,onClick:s},{default:g(()=>[T("隐藏代码")]),_:1})):Fe("",!0)]),o.value?($(),H("div",Zf,[p("pre",{class:"language-css",innerHTML:we(n)},null,8,Jf)])):Fe("",!0)])]))}});const te=pt(Qf,[["__scopeId","data-v-5a82c414"]]),Xf=p("h1",null,"Switch 组件示例",-1),ep=p("div",{class:"gulu-doc-detail"},"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1),tp=M({__name:"Switch",setup(e){return(t,n)=>($(),H(ee,null,[Xf,ep,a(te,{component:Oi}),a(te,{component:Vi}),a(te,{component:Mi})],64))}}),Li=M({__name:"Button1.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(K,null,{default:g(()=>[T("按钮")]),_:1}),a(K,{theme:"link"},{default:g(()=>[T("链接")]),_:1}),a(K,{theme:"text"},{default:g(()=>[T("文字")]),_:1})],64))}});function Is(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
<\/script>\r
\r
<template>\r
  <Button>按钮</Button>\r
  <Button theme="link">链接</Button>\r
  <Button theme="text">文字</Button>\r
</template>`,e.__sourceCodeTitle=" 常规使用 ",e.__sourceCodeDetail="使用<code>theme</code>属性表示不同的按钮状态，实现按钮<code>button</code>、 链接按钮<code>link</code>、文字按钮<code>text</code>的自由选择 "}typeof Is=="function"&&Is(Li);const Hi=M({__name:"Button2.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[p("div",null,[a(K,{size:"big"},{default:g(()=>[T("大大")]),_:1}),a(K,null,{default:g(()=>[T("普通")]),_:1}),a(K,{size:"small"},{default:g(()=>[T("小小")]),_:1})]),p("div",null,[a(K,{theme:"link",size:"big"},{default:g(()=>[T("大大")]),_:1}),a(K,{theme:"link"},{default:g(()=>[T("普通")]),_:1}),a(K,{theme:"link",size:"small"},{default:g(()=>[T("小小")]),_:1})]),p("div",null,[a(K,{theme:"text",size:"big"},{default:g(()=>[T("大大")]),_:1}),a(K,{theme:"text"},{default:g(()=>[T("普通")]),_:1}),a(K,{theme:"text",size:"small"},{default:g(()=>[T("小小")]),_:1})])],64))}});function Ds(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
<\/script>\r
\r
<template>\r
  <div>\r
    <Button size="big">大大</Button>\r
    <Button>普通</Button>\r
    <Button size="small">小小</Button>\r
  </div>\r
  <div>\r
    <Button theme="link" size="big">大大</Button>\r
    <Button theme="link">普通</Button>\r
    <Button theme="link" size="small">小小</Button>\r
  </div>\r
  <div>\r
    <Button theme="text" size="big">大大</Button>\r
    <Button theme="text">普通</Button>\r
    <Button theme="text" size="small">小小</Button>\r
  </div>\r
</template>`,e.__sourceCodeTitle=" 支持 size ",e.__sourceCodeDetail="<p>除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。</p><p>使用 <code>size</code> 属性额外配置尺寸，可使用<code>big</code>和<code>big</code>两种值。</p>"}typeof Ds=="function"&&Ds(Hi);const Ni=M({__name:"Button3.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[p("div",null,[a(K,null,{default:g(()=>[T("Default")]),_:1}),a(K,{level:"primary"},{default:g(()=>[T("Primary")]),_:1}),a(K,{level:"success"},{default:g(()=>[T("Success")]),_:1}),a(K,{level:"info"},{default:g(()=>[T("Info")]),_:1}),a(K,{level:"warning"},{default:g(()=>[T("Warning")]),_:1}),a(K,{level:"danger"},{default:g(()=>[T("Danger")]),_:1})]),p("div",null,[a(K,{theme:"link"},{default:g(()=>[T("Default链接")]),_:1}),a(K,{theme:"link",level:"primary"},{default:g(()=>[T("Primary链接")]),_:1}),a(K,{theme:"link",level:"success"},{default:g(()=>[T("Success链接")]),_:1}),a(K,{theme:"link",level:"info"},{default:g(()=>[T("Info链接")]),_:1}),a(K,{theme:"link",level:"warning"},{default:g(()=>[T("Warning链接")]),_:1}),a(K,{theme:"link",level:"danger"},{default:g(()=>[T("Danger链接")]),_:1})]),p("div",null,[a(K,{theme:"text"},{default:g(()=>[T("Default文字")]),_:1}),a(K,{theme:"text",level:"primary"},{default:g(()=>[T("Primary文字")]),_:1}),a(K,{theme:"text",level:"success"},{default:g(()=>[T("Success文字")]),_:1}),a(K,{theme:"text",level:"info"},{default:g(()=>[T("Info文字")]),_:1}),a(K,{theme:"text",level:"warning"},{default:g(()=>[T("Warning文字")]),_:1}),a(K,{theme:"text",level:"danger"},{default:g(()=>[T("Danger文字")]),_:1})])],64))}});function Fs(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
<\/script>\r
\r
<template>\r
  <div>\r
    <Button>Default</Button>\r
    <Button level="primary">Primary</Button>\r
    <Button level="success">Success</Button>\r
    <Button level="info">Info</Button>\r
    <Button level="warning">Warning</Button>\r
    <Button level="danger">Danger</Button>\r
  </div>\r
  <div>\r
    <Button theme="link">Default链接</Button>\r
    <Button theme="link" level="primary">Primary链接</Button>\r
    <Button theme="link" level="success">Success链接</Button>\r
    <Button theme="link" level="info">Info链接</Button>\r
    <Button theme="link" level="warning">Warning链接</Button>\r
    <Button theme="link" level="danger">Danger链接</Button>\r
  </div>\r
  <div>\r
    <Button theme="text">Default文字</Button>\r
    <Button theme="text" level="primary">Primary文字</Button>\r
    <Button theme="text" level="success">Success文字</Button>\r
    <Button theme="text" level="info">Info文字</Button>\r
    <Button theme="text" level="warning">Warning文字</Button>\r
    <Button theme="text" level="danger">Danger文字</Button>\r
  </div>\r
</template>`,e.__sourceCodeTitle=" 支持 level ",e.__sourceCodeDetail=" 使用<code>level</code>来定义按钮的等级 属性值可为：默认为<code>default</code><code>primary</code>、<code>Success</code>、 <code>info</code>、<code>warning</code>、<code>danger</code>"}typeof Fs=="function"&&Fs(Ni);const ji=M({__name:"Button4.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(K,{disabled:""},{default:g(()=>[T("禁用普通按钮")]),_:1}),a(K,{theme:"link",disabled:""},{default:g(()=>[T("禁用链接按钮")]),_:1}),a(K,{theme:"text",disabled:""},{default:g(()=>[T("禁用文字按钮")]),_:1})],64))}});function Ps(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
<\/script>\r
\r
<template>\r
  <Button disabled>禁用普通按钮</Button>\r
  <Button theme="link" disabled>禁用链接按钮</Button>\r
  <Button theme="text" disabled>禁用文字按钮</Button>\r
</template>`,e.__sourceCodeTitle="支持 disabled ",e.__sourceCodeDetail="<p>你可以使用<code>disabled</code>属性来定义按钮是否被禁用。</p><p>使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个 <code>Boolean</code> 类型的值。</p>"}typeof Ps=="function"&&Ps(ji);const Gi=M({__name:"Button5.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(K,{loading:""},{default:g(()=>[T("加载中")]),_:1}),a(K,null,{default:g(()=>[T("加载完毕")]),_:1})],64))}});function Rs(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
<\/script>\r
\r
<template>\r
  <Button loading>加载中</Button>\r
  <Button>加载完毕</Button>\r
</template>`,e.__sourceCodeTitle=" 支持 loading ",e.__sourceCodeDetail="<p> 点击按钮来加载数据，并向用户反馈加载状态。</p><p>通过设置 <code>loading</code> 属性为 <code>true</code> 来显示加载中状态</p>"}typeof Rs=="function"&&Rs(Gi);const np=p("h1",null,"Button 组件示例",-1),op=p("div",{class:"gulu-doc-detail"},"常用的操作按钮。",-1),rp=M({__name:"Button",setup(e){return(t,n)=>($(),H(ee,null,[np,op,a(te,{component:Li}),a(te,{component:Hi}),a(te,{component:Ni}),a(te,{component:ji}),a(te,{component:Gi})],64))}}),sp={class:"gulu-dialog-wrapper"},lp={class:"gulu-dialog"},ip={key:0},cn=M({__name:"Dialog",props:{modelValue:{type:Boolean},clickCloseOverlay:{type:Boolean},ok:{type:Function},cancle:{type:Function},hasButton:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=()=>{t("update:modelValue",!n.modelValue)},r=()=>{n.clickCloseOverlay&&o()},s=()=>{n.ok||o(),n.ok&&n.ok()!==!1&&o()},l=()=>{n.cancle&&n.cancle(),o()};return(i,c)=>e.modelValue?($(),de(pi,{key:0,to:"body"},[p("div",{class:"gulu-dialog-overlay",onClick:r}),p("div",sp,[p("div",lp,[p("header",null,[He(i.$slots,"header"),p("span",{onClick:o,class:"gulu-dialog-close"})]),p("main",null,[He(i.$slots,"default")]),e.hasButton?($(),H("footer",ip,[a(K,{onClick:l},{default:g(()=>[T("Cancle")]),_:1}),a(K,{level:"primary",onClick:s},{default:g(()=>[T("Ok")]),_:1})])):Fe("",!0)])])])):Fe("",!0)}});const cp=p("div",null,"content-1",-1),ap=p("div",null,"content-2",-1),Ui=M({__name:"Dialog1.sourceCode",setup(e){const t=ce(!1),n=()=>{t.value=!t.value};return(o,r)=>($(),H(ee,null,[a(K,{onClick:n},{default:g(()=>[T("toggle")]),_:1}),a(cn,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=s=>t.value=s)},{default:g(()=>[cp,ap]),_:1},8,["modelValue"])],64))}});function Os(e){e.__sourceCode=`<script setup lang="ts">\r
import Dialog from '../../components/lib/Dialog.vue';\r
import Button from '../../components/lib/Button.vue';\r
import {ref} from 'vue';\r
\r
const isVisible = ref(false);\r
const toggleDialog = () => {\r
  isVisible.value = !isVisible.value;\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="toggleDialog">toggle</Button>\r
  <Dialog v-model="isVisible">\r
    <div>content-1</div>\r
    <div>content-2</div>\r
  </Dialog>\r
</template>`,e.__sourceCodeTitle=" 常规使用 ",e.__sourceCodeDetail=" 使用 <code>v-model</code> 双向绑定属性 <code>isVisible</code>，实现 <code>Dialog</code>的显示与关闭 "}typeof Os=="function"&&Os(Ui);const up=e=>{const{title:t,content:n,clickCloseOverlay:o,ok:r,cancle:s,hasButton:l}=e,i=document.createElement("div");document.body.appendChild(i);const c=()=>{f.unmount(),i.remove()},f=yr({render(){return jt(cn,{modelValue:!0,"onUpdate:modelValue":u=>{u||c()},clickCloseOverlay:o,ok:r,cancle:s,hasButton:l},{header:t,default:n})}});f.mount(i)},zi=M({__name:"Dialog2.sourceCode",setup(e){const t=()=>{up({title:jt("strong",{},"标题"),content:"content",clickCloseOverlay:!1,hasButton:!0,ok(){alert("ok")},cancle(){alert("cancle")}})};return(n,o)=>($(),de(K,{onClick:t},{default:g(()=>[T("一句话展示Dialog")]),_:1}))}});function Vs(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
import {openDialog} from '../../components/lib/openDialog';\r
import {h} from 'vue';\r
\r
const showDialog = () => {\r
  openDialog({\r
    title: h('strong', {}, '标题'),\r
    content: 'content',\r
    clickCloseOverlay: false,\r
    hasButton: true,\r
    ok() {\r
      alert('ok');\r
    },\r
    cancle() {\r
      alert('cancle');\r
    }\r
  });\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="showDialog">一句话展示Dialog</Button>\r
</template>`,e.__sourceCodeTitle=" 一键打开 Dialog ",e.__sourceCodeDetail="使用 <code>openDialog</code>模块，引入 <code>Dialog</code>组件"}typeof Vs=="function"&&Vs(zi);const dp=p("strong",null,"加粗标题",-1),fp=p("div",null,"content-1",-1),pp=p("div",null,"content-2",-1),qi=M({__name:"Dialog3.sourceCode",setup(e){const t=ce(!1),n=()=>{t.value=!t.value};return(o,r)=>($(),H(ee,null,[a(K,{onClick:n},{default:g(()=>[T("toggle")]),_:1}),a(cn,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=s=>t.value=s),clickCloseOverlay:"","has-button":""},{header:g(()=>[dp]),default:g(()=>[fp,pp]),_:1},8,["modelValue"])],64))}});function Ms(e){e.__sourceCode=`<script setup lang="ts">\r
import Dialog from '../../components/lib/Dialog.vue';\r
import Button from '../../components/lib/Button.vue';\r
import {ref} from 'vue';\r
\r
const isVisible = ref(false);\r
const toggleDialog = () => {\r
  isVisible.value = !isVisible.value;\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="toggleDialog">toggle</Button>\r
  <Dialog v-model="isVisible" clickCloseOverlay has-button>\r
    <template #header>\r
      <strong>加粗标题</strong>\r
    </template>\r
    <div>content-1</div>\r
    <div>content-2</div>\r
  </Dialog>\r
</template>`,e.__sourceCodeTitle=" 支持 clickCloseOverlay ",e.__sourceCodeDetail=`<p>你可以使用<code>clickCloseOverlay</code>属性来定义点击遮罩层是否关闭\r
    <code>Dialog</code>,该属性接受一个 <code>Boolean</code> 类型的值。\r
  </p>`}typeof Ms=="function"&&Ms(qi);const gp=p("strong",null,"加粗标题",-1),hp=p("div",null,"content-1",-1),_p=p("div",null,"content-2",-1),Ki=M({__name:"Dialog4.sourceCode",setup(e){const t=ce(!1),n=()=>{t.value=!t.value},o=()=>{alert("ok")},r=()=>{alert("cancle")};return(s,l)=>($(),H(ee,null,[a(K,{onClick:n},{default:g(()=>[T("toggle")]),_:1}),a(cn,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),ok:o,cancle:r,"has-button":""},{header:g(()=>[gp]),default:g(()=>[hp,_p]),_:1},8,["modelValue"])],64))}});function Ls(e){e.__sourceCode=`<script setup lang="ts">\r
import Dialog from '../../components/lib/Dialog.vue';\r
import Button from '../../components/lib/Button.vue';\r
import {ref} from 'vue';\r
\r
const isVisible = ref(false);\r
const toggleDialog = () => {\r
  isVisible.value = !isVisible.value;\r
};\r
const fn1 = () => {\r
  alert('ok');\r
};\r
const fn2 = () => {\r
  alert('cancle');\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="toggleDialog">toggle</Button>\r
  <Dialog v-model="isVisible" :ok="fn1" :cancle="fn2" has-button>\r
    <template #header>\r
      <strong>加粗标题</strong>\r
    </template>\r
    <div>content-1</div>\r
    <div>content-2</div>\r
  </Dialog>\r
</template>`,e.__sourceCodeTitle=" 支持事件处理 ",e.__sourceCodeDetail="<p> 使用<code>ok</code><code>cancle</code>属性，实现用户自定义事件处理选择</p> 点击<code>footer</code>的按钮时，当需要点击<code>ok</code>按钮处理某逻辑时，需要返回值为<code>true</code>，来保证逻辑的合理性 "}typeof Ls=="function"&&Ls(Ki);const mp=p("strong",null,"加粗标题",-1),vp=p("div",null,"content-1",-1),bp=p("div",null,"content-2",-1),Wi=M({__name:"Dialog5.sourceCode",setup(e){const t=ce(!1),n=()=>{t.value=!t.value};return(o,r)=>($(),H(ee,null,[a(K,{onClick:n},{default:g(()=>[T("toggle")]),_:1}),a(cn,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=s=>t.value=s),"has-button":""},{header:g(()=>[mp]),default:g(()=>[vp,bp]),_:1},8,["modelValue"])],64))}});function Hs(e){e.__sourceCode=`<script setup lang="ts">\r
import Dialog from '../../components/lib/Dialog.vue';\r
import Button from '../../components/lib/Button.vue';\r
import {ref} from 'vue';\r
\r
const isVisible = ref(false);\r
const toggleDialog = () => {\r
  isVisible.value = !isVisible.value;\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="toggleDialog">toggle</Button>\r
  <Dialog v-model="isVisible" has-button>\r
    <template #header>\r
      <strong>加粗标题</strong>\r
    </template>\r
    <div>content-1</div>\r
    <div>content-2</div>\r
  </Dialog>\r
</template>`,e.__sourceCodeTitle=" 支持 hasButton ",e.__sourceCodeDetail="<p>你可以使用<code>hasButton</code>属性来定义按钮是否存在。</p> 该属性接受一个<code>Boolean</code>类型的值。 "}typeof Hs=="function"&&Hs(Wi);const yp=p("strong",null,"加粗标题",-1),wp=p("div",null,"content-1",-1),Cp=p("div",null,"content-2",-1),Yi=M({__name:"Dialog6.sourceCode",setup(e){const t=ce(!1),n=()=>{t.value=!t.value};return(o,r)=>($(),H(ee,null,[a(K,{onClick:n},{default:g(()=>[T("toggle")]),_:1}),a(cn,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=s=>t.value=s)},{header:g(()=>[yp]),default:g(()=>[wp,Cp]),_:1},8,["modelValue"])],64))}});function Ns(e){e.__sourceCode=`<script setup lang="ts">\r
import Dialog from '../../components/lib/Dialog.vue';\r
import Button from '../../components/lib/Button.vue';\r
import {ref} from 'vue';\r
\r
const isVisible = ref(false);\r
const toggleDialog = () => {\r
  isVisible.value = !isVisible.value;\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="toggleDialog">toggle</Button>\r
  <Dialog v-model="isVisible">\r
    <template #header>\r
      <strong>加粗标题</strong>\r
    </template>\r
    <div>content-1</div>\r
    <div>content-2</div>\r
  </Dialog>\r
</template>`,e.__sourceCodeTitle=" 支持 title ",e.__sourceCodeDetail=" 使用 <code>title</code> 属性实现标题的自由书写，支持相关 <code>HTML</code>的标签的书写，实现自定义标题的内容与样式选择 "}typeof Ns=="function"&&Ns(Yi);const xp=p("h1",null,"Dialog 组件示例",-1),$p=p("div",{class:"gulu-doc-detail"},"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1),kp=M({__name:"Dialog",setup(e){return(t,n)=>($(),H(ee,null,[xp,$p,a(te,{component:Ui}),a(te,{component:Yi}),a(te,{component:Wi}),a(te,{component:Ki}),a(te,{component:qi}),a(te,{component:zi})],64))}}),Tp={};function Ep(e,t){return $(),H("div",null,[He(e.$slots,"default")])}const dt=pt(Tp,[["render",Ep]]),Bp={class:"gulu-tabs"},Ap=["onClick"],Sp={class:"gulu-tabs-content"},kr=M({__name:"Tabs",props:{modelValue:String},emits:["update:modelValue"],setup(e,{emit:t}){const n=At().default(),o=n.map(f=>{var u;return(u=f.props)==null?void 0:u.title}),r=ce(),s=ce(),l=ce(),i=f=>{var u;return((u=n.filter(_=>{var h;return((h=_.props)==null?void 0:h.title)===f})[0].props)==null?void 0:u.disabled)!==void 0};if(At().default===void 0)throw new Error("Tabs 子内容不能为空");n.forEach(f=>{if(f.type!==dt)throw new Error("Tabs 子标签名必须是 Tab")});const c=f=>{i(f)||t("update:modelValue",f)};return dr(()=>{const{width:f,left:u}=r.value.getBoundingClientRect();s.value.style.width=f+"px";const{left:_}=l.value.getBoundingClientRect();s.value.style.left=u-_+"px"}),(f,u)=>($(),H("div",Bp,[p("div",{class:"gulu-tabs-nav",ref_key:"container",ref:l},[($(!0),H(ee,null,Ro(we(o),(_,h)=>($(),H("div",{class:De(["gulu-tabs-nav-item",{selected:_===e.modelValue,readOnly:i(_)}]),key:h,onClick:y=>c(_),ref_for:!0,ref:y=>{_===e.modelValue&&(r.value=y)}},Zt(_),11,Ap))),128)),p("div",{class:"gulu-tabs-nav-indicator",ref_key:"indicator",ref:s},null,512)],512),p("div",Sp,[($(!0),H(ee,null,Ro(we(n),(_,h)=>($(),H(ee,{key:h},[_.props!==null&&_.props.title===e.modelValue?($(),de(io(_),{key:0,class:"gulu-tabs-content-item"})):Fe("",!0)],64))),128))])]))}});const Zi=M({__name:"Tab1.sourceCode",setup(e){const t=ce("导航1");return(n,o)=>($(),de(kr,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r)},{default:g(()=>[a(dt,{title:"导航1"},{default:g(()=>[T("内容1")]),_:1}),a(dt,{title:"导航2222"},{default:g(()=>[T("内容2")]),_:1}),a(dt,{title:"导航333333"},{default:g(()=>[T("内容3")]),_:1})]),_:1},8,["modelValue"]))}});function js(e){e.__sourceCode=`<script setup lang="ts">\r
import Tabs from '../../components/lib/Tabs.vue';\r
import Tab from '../../components/lib/Tab.vue';\r
import {ref} from 'vue';\r
\r
const title = ref('导航1');\r
<\/script>\r
\r
<template>\r
  <Tabs v-model="title">\r
    <Tab title="导航1">内容1</Tab>\r
    <Tab title="导航2222">内容2</Tab>\r
    <Tab title="导航333333">内容3</Tab>\r
  </Tabs>\r
</template>`,e.__sourceCodeTitle=" 常规使用 ",e.__sourceCodeDetail='<p style="font-size:16px;">基础的、简洁的标签页。</p><br/><p><code>Tabs</code> 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 <code>title</code> 属性来指定当前选中的标签页。</p>'}typeof js=="function"&&js(Zi);const Ji=M({__name:"Tab2.sourceCode",setup(e){const t=ce("可选导航1");return(n,o)=>($(),de(kr,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r)},{default:g(()=>[a(dt,{title:"可选导航1"},{default:g(()=>[T("内容1")]),_:1}),a(dt,{title:"禁止导航2222",disabled:""},{default:g(()=>[T("内容2")]),_:1}),a(dt,{title:"可选导航333333"},{default:g(()=>[T("内容3")]),_:1})]),_:1},8,["modelValue"]))}});function Gs(e){e.__sourceCode=`<script setup lang="ts">\r
import Tabs from '../../components/lib/Tabs.vue';\r
import Tab from '../../components/lib/Tab.vue';\r
import {ref} from 'vue';\r
\r
const title = ref('可选导航1');\r
<\/script>\r
\r
<template>\r
  <Tabs v-model="title">\r
    <Tab title="可选导航1">内容1</Tab>\r
    <Tab title="禁止导航2222" disabled>内容2</Tab>\r
    <Tab title="可选导航333333">内容3</Tab>\r
  </Tabs>\r
</template>`,e.__sourceCodeTitle=" 支持 disabled ",e.__sourceCodeDetail="使用 <code>disabled</code>属性，来实现 <code>tab</code>的禁用状态。该属性值接收 <code>Boolean</code>值"}typeof Gs=="function"&&Gs(Ji);const Ip=p("h1",null,"Tabs 组件示例",-1),Dp=p("div",{class:"gulu-doc-detail"},"分隔内容上有关联但属于不同类别的数据集合。",-1),Fp=M({__name:"Tabs",setup(e){return(t,n)=>($(),H(ee,null,[Ip,Dp,a(te,{component:Zi}),a(te,{component:Ji})],64))}}),Pp=["type","value","disabled","placeholder"],nn=M({__name:"Input",props:{modelValue:{type:String,required:!0},placeholder:{type:String},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},type:{type:String,default:"text",validator(e){return["text","password"].indexOf(e)>=0}},showPassword:{type:Boolean,default:!1},error:{type:String},success:{type:String}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=ce(n.clearable),r=ce(),s=ce(n.type),l=ce(n.showPassword),i=ke(()=>s.value==="password"?"-un-":"-"),c=()=>t("update:modelValue",""),f=()=>{s.value=s.value==="text"?"password":"text"};dr(()=>{!n.clearable&&!n.showPassword||r.value&&n.modelValue.length>0&&(r.value.onmouseenter=()=>{o.value=!0,l.value=!0},r.value.onmouseleave=()=>{o.value=!1,l.value=!1})});const u=ke(()=>n.error?{type:"error",value:n.error}:n.success?{type:"success",value:n.success}:!1),_=h=>{t("update:modelValue",h.target.value)};return(h,y)=>($(),H("div",{class:"gulu-input-wrapper",ref_key:"inputWrapper",ref:r},[p("input",{type:s.value,class:De(["gulu-input",{["gulu-input-error"]:e.error}]),value:e.modelValue,disabled:e.disabled,onInput:_,placeholder:e.placeholder},null,42,Pp),e.type==="text"&&e.clearable&&o.value&&e.modelValue.length>0?($(),H("span",{key:0,class:"gulu-input-clear",onClick:c})):Fe("",!0),e.type==="password"&&e.showPassword&&l.value&&e.modelValue.length>0?($(),H("span",{key:1,onClick:f,class:"gulu-input-show-pwd"},[p("i",{class:De(["gulu-iconfont",`g${we(i)}show-pwd`])},null,2)])):Fe("",!0),we(u)&&we(u).type?($(),H(ee,{key:2},[p("i",{class:De(["gulu-iconfont gulu-input-icon",`g-${we(u).type}`])},null,2),p("span",{class:De(`gulu-input-${we(u).type}-message`)},Zt(we(u).value),3)],64)):Fe("",!0)],512))}});const Qi=M({__name:"input1.sourceCode",setup(e){const t=ce("");return(n,o)=>($(),de(nn,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),placeholder:"请输入..."},null,8,["modelValue"]))}});function Us(e){e.__sourceCode=`<script setup lang="ts">\r
import Input from '../../components/lib/Input.vue';\r
import {ref} from 'vue';\r
\r
const value = ref('');\r
<\/script>\r
\r
<template>\r
  <Input v-model="value" placeholder="请输入..."/>\r
</template>`,e.__sourceCodeTitle=" 常规用法 ",e.__sourceCodeDetail=" 使用 <code>v-model</code> 实现双向绑定 <code>value</code> 的输入值。 "}typeof Us=="function"&&Us(Qi);const Xi=M({__name:"input2.sourceCode",setup(e){const t=ce("");return(n,o)=>($(),de(nn,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),disabled:"",placeholder:"请输入..."},null,8,["modelValue"]))}});function zs(e){e.__sourceCode=`<script setup lang="ts">\r
import Input from '../../components/lib/Input.vue';\r
import {ref} from 'vue';\r
\r
const value = ref('');\r
<\/script>\r
\r
<template>\r
  <Input v-model="value" disabled placeholder="请输入..."/>\r
</template>`,e.__sourceCodeTitle=" 支持 disabled ",e.__sourceCodeDetail=" 通过 <code>disabled</code> 属性指定是否禁用 <code>input</code> 组件。 该属性值为 <code>Boolean</code>类型 "}typeof zs=="function"&&zs(Xi);const ec=M({__name:"input3.sourceCode",setup(e){const t=ce("");return(n,o)=>($(),de(nn,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),clearable:"",placeholder:"请输入..."},null,8,["modelValue"]))}});function qs(e){e.__sourceCode=`<script setup lang="ts">\r
import Input from '../../components/lib/Input.vue';\r
import {ref} from 'vue';\r
\r
const value = ref('');\r
<\/script>\r
\r
<template>\r
  <Input v-model="value" clearable placeholder="请输入..."/>\r
</template>`,e.__sourceCodeTitle=" 一键清空 ",e.__sourceCodeDetail=" 使用 <code>clearable</code> 属性即可得到一个可一键清空的输入框 该属性值为 <code>Boolean</code>类型 "}typeof qs=="function"&&qs(ec);const tc=M({__name:"input4.sourceCode",setup(e){const t=ce("");return(n,o)=>($(),de(nn,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),type:"password","show-password":"",placeholder:"请输入..."},null,8,["modelValue"]))}});function Ks(e){e.__sourceCode=`<script setup lang="ts">\r
import Input from '../../components/lib/Input.vue';\r
import {ref} from 'vue';\r
\r
const value = ref('');\r
<\/script>\r
\r
<template>\r
  <Input v-model="value" type="password" show-password placeholder="请输入..."/>\r
</template>`,e.__sourceCodeTitle=" 密码框 ",e.__sourceCodeDetail=" 使用 <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框 该属性值为 <code>Boolean</code>类型 "}typeof Ks=="function"&&Ks(tc);const Rp=p("br",null,null,-1),Op=p("br",null,null,-1),nc=M({__name:"input5.sourceCode",setup(e){const t=ce("");return(n,o)=>($(),H(ee,null,[a(nn,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),error:"用户姓名不少于2个字",placeholder:"请输入..."},null,8,["modelValue"]),Rp,Op,a(nn,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=r=>t.value=r),success:"符合规范",placeholder:"请输入..."},null,8,["modelValue"])],64))}});function Ws(e){e.__sourceCode=`<script setup lang="ts">\r
import Input from '../../components/lib/Input.vue';\r
import {ref} from 'vue';\r
\r
const value = ref('');\r
<\/script>\r
\r
<template>\r
  <Input v-model="value" error="用户姓名不少于2个字" placeholder="请输入..."/>\r
  <br/>\r
  <br/>\r
  <Input v-model="value" success="符合规范" placeholder="请输入..."/>\r
</template>`,e.__sourceCodeTitle=" 支持信息提示 ",e.__sourceCodeDetail=" 使用 <code>success</code> <code>error</code> 属性即可得到一个文本输入框的提示信息 "}typeof Ws=="function"&&Ws(nc);const Vp=p("h1",null,"Input 输入框",-1),Mp=p("div",{class:"gulu-doc-detail"},"通过鼠标或键盘输入字符",-1),Lp=M({__name:"Input",setup(e){return(t,n)=>($(),H(ee,null,[Vp,Mp,a(te,{component:Qi}),a(te,{component:Xi}),a(te,{component:ec}),a(te,{component:tc}),a(te,{component:nc})],64))}}),Ys=e=>e>=1&&e<=24,hn=e=>{let t=!0;return Object.keys(e).forEach(n=>{["span","offset"].indexOf(n)===-1&&(t=!1)}),Object.values(e).forEach(n=>{(parseInt(n)<0||parseInt(n)>24)&&(t=!1)}),t},Hp={},Z=M({...Hp,__name:"GCol",props:{span:{type:Number,validator:Ys},offset:{type:Number,validator:Ys},xs:{type:Object,validator:hn},sm:{type:Object,validator:hn},md:{type:Object,validator:hn},lg:{type:Object,validator:hn},xl:{type:Object,validator:hn}},setup(e){const{span:t,offset:n,xs:o,sm:r,md:s,lg:l,xl:i}=e,c=(u,_="")=>{if(!u)return[];let h=[];return u.span&&h.push(`gulu-col-${_}span-${u.span}`),u.offset&&h.push(`gulu-col-${_}offset-${u.offset}`),h},f=ke(()=>[...c({span:t,offset:n}),...c(o,"xs-"),...c(r,"sm-"),...c(s,"md-"),...c(l,"lg-"),...c(i,"xl-")]);return(u,_)=>($(),H("div",{class:De(["gulu-layout-col",we(f)])},[He(u.$slots,"default")],2))}});const Ie=M({__name:"GRow",props:{gutter:{type:Number,default:0,validator:e=>e>=0},justify:{type:String,default:"start",validator:e=>["start","center","end","space-between","space-around","space-evenly"].indexOf(e)>=0}},setup(e){const t=e;if(At().default===void 0)throw new Error("GRow 子内容不能为空");At().default().forEach(r=>{if(r.type!==Z)throw new Error("Grow 的子元素必须是 GCol")});const n=ce();ln(()=>{if(t.gutter<0)return;const r=n.value.children,s=r.length||0;for(let l=0;l<s;l++)r[l].style.paddingLeft=t.gutter/2+"px",r[l].style.paddingRight=t.gutter/2+"px"});const o=ke(()=>({[`gulu-row-${t.justify}`]:t.justify}));return(r,s)=>($(),H("div",{class:De(["gulu-layout-row",we(o)]),ref_key:"rowItem",ref:n},[He(r.$slots,"default")],2))}});const Np=p("div",{class:"grid-content gird-bg"},null,-1),jp=p("div",{class:"grid-content gird-bg"},null,-1),Gp=p("div",{class:"grid-content grid-bg-light"},null,-1),Up=p("div",{class:"grid-content grid-bg-light"},null,-1),zp=p("div",{class:"grid-content gird-bg"},null,-1),qp=p("div",{class:"grid-content grid-bg-light"},null,-1),Kp=p("div",{class:"grid-content grid-bg-light"},null,-1),Wp=p("div",{class:"grid-content gird-bg"},null,-1),Yp=p("div",{class:"grid-content grid-bg-light"},null,-1),Zp=p("div",{class:"grid-content gird-bg"},null,-1),Jp=p("div",{class:"grid-content grid-bg-light"},null,-1),Qp=p("div",{class:"grid-content gird-bg"},null,-1),Xp=p("div",{class:"grid-content grid-bg-light"},null,-1),eg=p("div",{class:"grid-content gird-bg"},null,-1),tg=p("div",{class:"grid-content grid-bg-light"},null,-1),ng=p("div",{class:"grid-content gird-bg"},null,-1),oc=M({__name:"layout1.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(Ie,null,{default:g(()=>[a(Z,{span:24},{default:g(()=>[Np]),_:1})]),_:1}),a(Ie,null,{default:g(()=>[a(Z,{span:12},{default:g(()=>[jp]),_:1}),a(Z,{span:12},{default:g(()=>[Gp]),_:1})]),_:1}),a(Ie,null,{default:g(()=>[a(Z,{span:8},{default:g(()=>[Up]),_:1}),a(Z,{span:8},{default:g(()=>[zp]),_:1}),a(Z,{span:8},{default:g(()=>[qp]),_:1})]),_:1}),a(Ie,null,{default:g(()=>[a(Z,{span:6},{default:g(()=>[Kp]),_:1}),a(Z,{span:6},{default:g(()=>[Wp]),_:1}),a(Z,{span:6},{default:g(()=>[Yp]),_:1}),a(Z,{span:6},{default:g(()=>[Zp]),_:1})]),_:1}),a(Ie,null,{default:g(()=>[a(Z,{span:4},{default:g(()=>[Jp]),_:1}),a(Z,{span:4},{default:g(()=>[Qp]),_:1}),a(Z,{span:4},{default:g(()=>[Xp]),_:1}),a(Z,{span:4},{default:g(()=>[eg]),_:1}),a(Z,{span:4},{default:g(()=>[tg]),_:1}),a(Z,{span:4},{default:g(()=>[ng]),_:1})]),_:1})],64))}});function Zs(e){e.__sourceCode=`<script setup lang="ts">\r
import GRow from '../../components/lib/GRow.vue';\r
import GCol from '../../components/lib/GCol.vue';\r
<\/script>\r
\r
<template>\r
  <g-row>\r
    <g-col :span="24"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row>\r
    <g-col :span="12"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="12"><div class="grid-content grid-bg-light"/></g-col>\r
  </g-row>\r
  <g-row>\r
    <g-col :span="8"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="8"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="8"><div class="grid-content grid-bg-light"/></g-col>\r
  </g-row>\r
  <g-row>\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row>\r
    <g-col :span="4"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="4"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="4"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="4"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="4"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="4"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
</template>\r
\r
<style lang="scss">\r
.gulu-layout-row {\r
  margin-bottom: 20px;\r
}\r
\r
.gulu-layout-row:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.gulu-layout-col {\r
  border-radius: 4px;\r
}\r
\r
.grid-content {\r
  border-radius: 4px;\r
  min-height: 36px;\r
}\r
\r
.grid-bg-light {\r
  background-color: #e5e9f2;\r
}\r
\r
.gird-bg {\r
  background-color: #d3dce6;\r
}\r
</style>`,e.__sourceCodeTitle=" 常规用法 ",e.__sourceCodeDetail="<p>使用列创建基础网格布局。</p><br/> 通过 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局。 "}typeof Zs=="function"&&Zs(oc);const og=p("div",{class:"grid-content grid-bg-light"},null,-1),rg=p("div",{class:"grid-content gird-bg"},null,-1),sg=p("div",{class:"grid-content grid-bg-light"},null,-1),lg=p("div",{class:"grid-content gird-bg"},null,-1),rc=M({__name:"layout2.sourceCode",setup(e){return(t,n)=>($(),de(Ie,{gutter:20},{default:g(()=>[a(Z,{span:6},{default:g(()=>[og]),_:1}),a(Z,{span:6},{default:g(()=>[rg]),_:1}),a(Z,{span:6},{default:g(()=>[sg]),_:1}),a(Z,{span:6},{default:g(()=>[lg]),_:1})]),_:1}))}});function Js(e){e.__sourceCode=`<script setup lang="ts">\r
import GRow from '../../components/lib/GRow.vue';\r
import GCol from '../../components/lib/GCol.vue';\r
<\/script>\r
\r
<template>\r
  <g-row :gutter="20">\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
</template>\r
\r
<style lang="scss">\r
.gulu-layout-row {\r
  margin-bottom: 20px;\r
}\r
\r
.gulu-layout-row:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.gulu-layout-col {\r
  border-radius: 4px;\r
}\r
\r
.grid-content {\r
  border-radius: 4px;\r
  min-height: 36px;\r
}\r
\r
.grid-bg-light {\r
  background-color: #e5e9f2;\r
}\r
\r
.gird-bg {\r
  background-color: #d3dce6;\r
}\r
</style>`,e.__sourceCodeTitle=" 分栏间隔 ",e.__sourceCodeDetail="<p>支持列间距。</p><br/> 行提供 <code>gutter</code> 属性来指定列之间的间距，其默认值为0。 "}typeof Js=="function"&&Js(rc);const ig=p("div",{class:"grid-content grid-bg-light"},null,-1),cg=p("div",{class:"grid-content gird-bg"},null,-1),ag=p("div",{class:"grid-content grid-bg-light"},null,-1),ug=p("div",{class:"grid-content gird-bg"},null,-1),dg=p("div",{class:"grid-content grid-bg-light"},null,-1),fg=p("div",{class:"grid-content gird-bg"},null,-1),pg=p("div",{class:"grid-content grid-bg-light"},null,-1),gg=p("div",{class:"grid-content gird-bg"},null,-1),hg=p("div",{class:"grid-content grid-bg-light"},null,-1),sc=M({__name:"layout3.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(Ie,{gutter:20},{default:g(()=>[a(Z,{span:16},{default:g(()=>[ig]),_:1}),a(Z,{span:8},{default:g(()=>[cg]),_:1})]),_:1}),a(Ie,{gutter:20},{default:g(()=>[a(Z,{span:8},{default:g(()=>[ag]),_:1}),a(Z,{span:8},{default:g(()=>[ug]),_:1}),a(Z,{span:4},{default:g(()=>[dg]),_:1}),a(Z,{span:4},{default:g(()=>[fg]),_:1})]),_:1}),a(Ie,{gutter:20},{default:g(()=>[a(Z,{span:4},{default:g(()=>[pg]),_:1}),a(Z,{span:16},{default:g(()=>[gg]),_:1}),a(Z,{span:4},{default:g(()=>[hg]),_:1})]),_:1})],64))}});function Qs(e){e.__sourceCode=`<script setup lang="ts">\r
import GRow from '../../components/lib/GRow.vue';\r
import GCol from '../../components/lib/GCol.vue';\r
<\/script>\r
\r
<template>\r
  <g-row :gutter="20">\r
    <g-col :span="16"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="8"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row :gutter="20">\r
    <g-col :span="8"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="8"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="4"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="4"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row :gutter="20">\r
    <g-col :span="4"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="16"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="4"><div class="grid-content grid-bg-light"/></g-col>\r
  </g-row>\r
</template>\r
\r
<style lang="scss">\r
.gulu-layout-row {\r
  margin-bottom: 20px;\r
}\r
\r
.gulu-layout-row:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.gulu-layout-col {\r
  border-radius: 4px;\r
}\r
\r
.grid-content {\r
  border-radius: 4px;\r
  min-height: 36px;\r
}\r
\r
.grid-bg-light {\r
  background-color: #e5e9f2;\r
}\r
\r
.gird-bg {\r
  background-color: #d3dce6;\r
}\r
</style>`,e.__sourceCodeTitle=" 混合布局 ",e.__sourceCodeDetail=" 通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。 "}typeof Qs=="function"&&Qs(sc);const _g=p("div",{class:"grid-content grid-bg-light"},null,-1),mg=p("div",{class:"grid-content gird-bg"},null,-1),vg=p("div",{class:"grid-content grid-bg-light"},null,-1),bg=p("div",{class:"grid-content gird-bg"},null,-1),yg=p("div",{class:"grid-content grid-bg-light"},null,-1),lc=M({__name:"layout4.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(Ie,{gutter:20},{default:g(()=>[a(Z,{span:6},{default:g(()=>[_g]),_:1}),a(Z,{span:6,offset:6},{default:g(()=>[mg]),_:1})]),_:1}),a(Ie,{gutter:20},{default:g(()=>[a(Z,{span:6,offset:6},{default:g(()=>[vg]),_:1}),a(Z,{span:6,offset:6},{default:g(()=>[bg]),_:1})]),_:1}),a(Ie,{gutter:20},{default:g(()=>[a(Z,{span:12,offset:6},{default:g(()=>[yg]),_:1})]),_:1})],64))}});function Xs(e){e.__sourceCode=`<script setup lang="ts">\r
import GRow from '../../components/lib/GRow.vue';\r
import GCol from '../../components/lib/GCol.vue';\r
<\/script>\r
\r
<template>\r
  <g-row :gutter="20">\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6" :offset="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row :gutter="20">\r
    <g-col :span="6" :offset="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6" :offset="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row :gutter="20">\r
    <g-col :span="12" :offset="6"><div class="grid-content grid-bg-light"/></g-col>\r
  </g-row>\r
</template>\r
\r
<style lang="scss">\r
.gulu-layout-row {\r
  margin-bottom: 20px;\r
}\r
\r
.gulu-layout-row:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.gulu-layout-col {\r
  border-radius: 4px;\r
}\r
\r
.grid-content {\r
  border-radius: 4px;\r
  min-height: 36px;\r
}\r
\r
.grid-bg-light {\r
  background-color: #e5e9f2;\r
}\r
\r
.gird-bg {\r
  background-color: #d3dce6;\r
}\r
</style>`,e.__sourceCodeTitle=" 列偏移 ",e.__sourceCodeDetail="<p>您可以指定列偏移量。</p><br/> 通过制定 <code>g-col</code> 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。 "}typeof Xs=="function"&&Xs(lc);const wg=p("div",{class:"grid-content gird-bg"},null,-1),Cg=p("div",{class:"grid-content grid-bg-light"},null,-1),xg=p("div",{class:"grid-content gird-bg"},null,-1),$g=p("div",{class:"grid-content gird-bg"},null,-1),kg=p("div",{class:"grid-content grid-bg-light"},null,-1),Tg=p("div",{class:"grid-content gird-bg"},null,-1),Eg=p("div",{class:"grid-content gird-bg"},null,-1),Bg=p("div",{class:"grid-content grid-bg-light"},null,-1),Ag=p("div",{class:"grid-content gird-bg"},null,-1),Sg=p("div",{class:"grid-content gird-bg"},null,-1),Ig=p("div",{class:"grid-content grid-bg-light"},null,-1),Dg=p("div",{class:"grid-content gird-bg"},null,-1),Fg=p("div",{class:"grid-content gird-bg"},null,-1),Pg=p("div",{class:"grid-content grid-bg-light"},null,-1),Rg=p("div",{class:"grid-content gird-bg"},null,-1),Og=p("div",{class:"grid-content gird-bg"},null,-1),Vg=p("div",{class:"grid-content grid-bg-light"},null,-1),Mg=p("div",{class:"grid-content gird-bg"},null,-1),ic=M({__name:"layout5.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(Ie,null,{default:g(()=>[a(Z,{span:6},{default:g(()=>[wg]),_:1}),a(Z,{span:6},{default:g(()=>[Cg]),_:1}),a(Z,{span:6},{default:g(()=>[xg]),_:1})]),_:1}),a(Ie,{justify:"center"},{default:g(()=>[a(Z,{span:6},{default:g(()=>[$g]),_:1}),a(Z,{span:6},{default:g(()=>[kg]),_:1}),a(Z,{span:6},{default:g(()=>[Tg]),_:1})]),_:1}),a(Ie,{justify:"end"},{default:g(()=>[a(Z,{span:6},{default:g(()=>[Eg]),_:1}),a(Z,{span:6},{default:g(()=>[Bg]),_:1}),a(Z,{span:6},{default:g(()=>[Ag]),_:1})]),_:1}),a(Ie,{justify:"space-between"},{default:g(()=>[a(Z,{span:6},{default:g(()=>[Sg]),_:1}),a(Z,{span:6},{default:g(()=>[Ig]),_:1}),a(Z,{span:6},{default:g(()=>[Dg]),_:1})]),_:1}),a(Ie,{justify:"space-around"},{default:g(()=>[a(Z,{span:6},{default:g(()=>[Fg]),_:1}),a(Z,{span:6},{default:g(()=>[Pg]),_:1}),a(Z,{span:6},{default:g(()=>[Rg]),_:1})]),_:1}),a(Ie,{justify:"space-evenly"},{default:g(()=>[a(Z,{span:6},{default:g(()=>[Og]),_:1}),a(Z,{span:6},{default:g(()=>[Vg]),_:1}),a(Z,{span:6},{default:g(()=>[Mg]),_:1})]),_:1})],64))}});function el(e){e.__sourceCode=`<script setup lang="ts">\r
import GRow from '../../components/lib/GRow.vue';\r
import GCol from '../../components/lib/GCol.vue';\r
<\/script>\r
\r
<template>\r
  <g-row>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row justify="center">\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row justify="end">\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row justify="space-between">\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row justify="space-around">\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
  <g-row justify="space-evenly">\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>\r
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>\r
  </g-row>\r
</template>\r
\r
<style lang="scss">\r
.gulu-layout-row {\r
  margin-bottom: 20px;\r
}\r
\r
.gulu-layout-row:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.gulu-layout-col {\r
  border-radius: 4px;\r
}\r
\r
.grid-content {\r
  border-radius: 4px;\r
  min-height: 36px;\r
}\r
\r
.grid-bg-light {\r
  background-color: #e5e9f2;\r
}\r
\r
.gird-bg {\r
  background-color: #d3dce6;\r
}\r
</style>`,e.__sourceCodeTitle=" 对齐方式 ",e.__sourceCodeDetail="<p>默认使用 <code>flex</code> 布局来对分栏进行灵活的对齐。</p><br/> 您可以通过 <code>justify</code>属性来定义子元素的排版方式， 其取值为 <code>start</code>、<code>center</code>、<code>end</code>、 <code>space-between</code>、<code>space-around</code> 或 <code>space-evenly</code>。 "}typeof el=="function"&&el(ic);const Lg=p("div",{class:"grid-content gird-bg"},null,-1),Hg=p("div",{class:"grid-content grid-bg-light"},null,-1),Ng=p("div",{class:"grid-content gird-bg"},null,-1),jg=p("div",{class:"grid-content grid-bg-light"},null,-1),cc=M({__name:"layout6.sourceCode",setup(e){return(t,n)=>($(),de(Ie,null,{default:g(()=>[a(Z,{xs:{span:8},md:{span:4},lg:{span:3},xl:{span:1}},{default:g(()=>[Lg]),_:1}),a(Z,{xs:{span:4},md:{span:8},lg:{span:9},xl:{span:11}},{default:g(()=>[Hg]),_:1}),a(Z,{xs:{span:4},md:{span:8},lg:{span:9},xl:{span:11}},{default:g(()=>[Ng]),_:1}),a(Z,{xs:{span:8},md:{span:4},lg:{span:3},xl:{span:1}},{default:g(()=>[jg]),_:1})]),_:1}))}});function tl(e){e.__sourceCode=`<script setup lang="ts">\r
import GRow from '../../components/lib/GRow.vue';\r
import GCol from '../../components/lib/GCol.vue';\r
<\/script>\r
\r
<template>\r
  <g-row>\r
    <g-col :xs="{span:8}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}">\r
      <div class="grid-content gird-bg"/>\r
    </g-col>\r
    <g-col :xs="{span:4}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}">\r
      <div class="grid-content grid-bg-light"/>\r
    </g-col>\r
    <g-col :xs="{span:4}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}">\r
      <div class="grid-content gird-bg"/>\r
    </g-col>\r
    <g-col :xs="{span:8}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}">\r
      <div class="grid-content grid-bg-light"/>\r
    </g-col>\r
  </g-row>\r
</template>\r
\r
<style lang="scss">\r
.gulu-layout-row {\r
  margin-bottom: 20px;\r
}\r
\r
.gulu-layout-row:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.gulu-layout-col {\r
  border-radius: 4px;\r
}\r
\r
.grid-content {\r
  border-radius: 4px;\r
  min-height: 36px;\r
}\r
\r
.grid-bg-light {\r
  background-color: #e5e9f2;\r
}\r
\r
.gird-bg {\r
  background-color: #d3dce6;\r
}\r
</style>`,e.__sourceCodeTitle=" 响应式布局 ",e.__sourceCodeDetail=" 参照了 <code>Bootstrap</code> 的 响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>。 "}typeof tl=="function"&&tl(cc);const Gg=p("h1",null,"Layout 布局",-1),Ug=p("div",{class:"gulu-doc-detail"},"通过基础的 24 分栏，迅速简便地创建布局。",-1),zg=M({__name:"Layout",setup(e){return(t,n)=>($(),H(ee,null,[Gg,Ug,a(te,{component:oc}),a(te,{component:rc}),a(te,{component:sc}),a(te,{component:lc}),a(te,{component:ic}),a(te,{component:cc})],64))}});const qg={},Kg={class:"gulu-container-aside"};function Wg(e,t){return $(),H("div",Kg,[He(e.$slots,"default")])}const an=pt(qg,[["render",Wg]]),ot=M({__name:"GContainer",setup(e){const t=ce(!1);At().default().forEach(r=>{r.type===an&&(t.value=!0)});const o=ke(()=>({["gulu-container-hasAside"]:t.value}));return(r,s)=>($(),H("div",{class:De(["gulu-container",we(o)])},[He(r.$slots,"default")],2))}});const Yg={},Zg={class:"gulu-container-header"};function Jg(e,t){return $(),H("div",Zg,[He(e.$slots,"default")])}const Pn=pt(Yg,[["render",Jg]]);const Qg={},Xg={class:"gulu-container-main"};function eh(e,t){return $(),H("div",Xg,[He(e.$slots,"default")])}const un=pt(Qg,[["render",eh]]);const th={},nh={class:"gulu-container-footer"};function oh(e,t){return $(),H("div",nh,[He(e.$slots,"default")])}const go=pt(th,[["render",oh]]),ac=M({__name:"container1.sourceCode",setup(e){return(t,n)=>($(),de(ot,null,{default:g(()=>[a(Pn,{class:"bg"}),a(un,{class:"bg1"}),a(go,{class:"bg2"})]),_:1}))}});function nl(e){e.__sourceCode=`<script setup lang="ts">\r
import GContainer from '../../components/lib/GContainer.vue';\r
import GHeader from '../../components/lib/GHeader.vue';\r
import GMain from '../../components/lib/GMain.vue';\r
import GFooter from '../../components/lib/GFooter.vue';\r
<\/script>\r
\r
<template>\r
  <g-container>\r
    <g-header class="bg"/>\r
    <g-main class="bg1"/>\r
    <g-footer class="bg2"/>\r
  </g-container>\r
</template>\r
\r
<style lang="scss">\r
.bg {\r
  background-color: #aad0f7;\r
}\r
\r
.bg1 {\r
  background-color: #d9ecff;\r
}\r
\r
.bg2 {\r
  background-color: #c6e2ff;\r
}\r
</style>`,e.__sourceCodeTitle=" 常见页面布局 ",e.__sourceCodeDetail=""}typeof nl=="function"&&nl(ac);const uc=M({__name:"container2.sourceCode",setup(e){return(t,n)=>($(),de(ot,null,{default:g(()=>[a(Pn,{class:"bg"}),a(ot,null,{default:g(()=>[a(an,{class:"bg1",style:{width:"200px"}}),a(un,{class:"bg2"})]),_:1}),a(go,{class:"bg3"})]),_:1}))}});function ol(e){e.__sourceCode=`<script setup lang="ts">\r
import GContainer from '../../components/lib/GContainer.vue';\r
import GHeader from '../../components/lib/GHeader.vue';\r
import GMain from '../../components/lib/GMain.vue';\r
import GFooter from '../../components/lib/GFooter.vue';\r
import GAside from '../../components/lib/GAside.vue';\r
<\/script>\r
\r
<template>\r
  <g-container>\r
    <g-header class="bg"/>\r
    <g-container>\r
      <g-aside class="bg1" style="width: 200px;"/>\r
      <g-main class="bg2"/>\r
    </g-container>\r
    <g-footer class="bg3"/>\r
  </g-container>\r
</template>\r
\r
<style lang="scss">\r
.bg {\r
  background-color: #aad0f7;\r
}\r
\r
.bg1 {\r
  background-color: #d9ecff;\r
}\r
\r
.bg2 {\r
  background-color: #ecf5ff;\r
}\r
\r
.bg3 {\r
  background-color: #c6e2ff;\r
}\r
</style>`,e.__sourceCodeTitle=void 0,e.__sourceCodeDetail=""}typeof ol=="function"&&ol(uc);const dc=M({__name:"container3.sourceCode",setup(e){return(t,n)=>($(),de(ot,null,{default:g(()=>[a(an,{class:"bg",style:{width:"200px"}}),a(un,{class:"bg1"})]),_:1}))}});function rl(e){e.__sourceCode=`<script setup lang="ts">\r
import GContainer from '../../components/lib/GContainer.vue';\r
import GMain from '../../components/lib/GMain.vue';\r
import GAside from '../../components/lib/GAside.vue';\r
<\/script>\r
\r
<template>\r
  <g-container>\r
    <g-aside class="bg" style="width: 200px;"/>\r
    <g-main class="bg1"/>\r
  </g-container>\r
</template>\r
\r
<style lang="scss">\r
.bg {\r
  background-color: #aad0f7;\r
}\r
\r
.bg1 {\r
  background-color: #c6e2ff;\r
}\r
</style>`,e.__sourceCodeTitle=void 0,e.__sourceCodeDetail=""}typeof rl=="function"&&rl(dc);const fc=M({__name:"container4.sourceCode",setup(e){return(t,n)=>($(),de(ot,null,{default:g(()=>[a(Pn,{class:"bg"}),a(ot,null,{default:g(()=>[a(an,{class:"bg1",style:{width:"200px"}}),a(ot,null,{default:g(()=>[a(un,{class:"bg2"}),a(go,{class:"bg3"})]),_:1})]),_:1})]),_:1}))}});function sl(e){e.__sourceCode=`<script setup lang="ts">\r
import GContainer from '../../components/lib/GContainer.vue';\r
import GHeader from '../../components/lib/GHeader.vue';\r
import GMain from '../../components/lib/GMain.vue';\r
import GFooter from '../../components/lib/GFooter.vue';\r
import GAside from '../../components/lib/GAside.vue';\r
<\/script>\r
\r
<template>\r
  <g-container>\r
    <g-header class="bg"/>\r
    <g-container>\r
      <g-aside class="bg1" style="width: 200px;"/>\r
      <g-container>\r
        <g-main class="bg2"/>\r
        <g-footer class="bg3"/>\r
      </g-container>\r
    </g-container>\r
  </g-container>\r
</template>\r
\r
<style lang="scss">\r
.bg {\r
  background-color: #aad0f7;\r
}\r
\r
.bg1 {\r
  background-color: #d9ecff;\r
}\r
\r
.bg2 {\r
  background-color: #ecf5ff;\r
}\r
\r
.bg3 {\r
  background-color: #c6e2ff;\r
}\r
</style>`,e.__sourceCodeTitle=void 0,e.__sourceCodeDetail=""}typeof sl=="function"&&sl(fc);const pc=M({__name:"container5.sourceCode",setup(e){return(t,n)=>($(),de(ot,null,{default:g(()=>[a(an,{class:"bg1",style:{width:"200px"}}),a(ot,null,{default:g(()=>[a(Pn,{class:"bg"}),a(un,{class:"bg2"})]),_:1})]),_:1}))}});function ll(e){e.__sourceCode=`<script setup lang="ts">\r
import GContainer from '../../components/lib/GContainer.vue';\r
import GHeader from '../../components/lib/GHeader.vue';\r
import GMain from '../../components/lib/GMain.vue';\r
import GAside from '../../components/lib/GAside.vue';\r
<\/script>\r
\r
<template>\r
  <g-container>\r
    <g-aside class="bg1" style="width: 200px;"/>\r
    <g-container>\r
      <g-header class="bg"/>\r
      <g-main class="bg2"/>\r
    </g-container>\r
  </g-container>\r
</template>\r
\r
<style lang="scss">\r
.bg {\r
  background-color: #aad0f7;\r
}\r
\r
.bg1 {\r
  background-color: #d9ecff;\r
}\r
\r
.bg2 {\r
  background-color: #ecf5ff;\r
}\r
\r
.bg3 {\r
  background-color: #c6e2ff;\r
}\r
</style>`,e.__sourceCodeTitle=void 0,e.__sourceCodeDetail=""}typeof ll=="function"&&ll(pc);const gc=M({__name:"container6.sourceCode",setup(e){return(t,n)=>($(),de(ot,null,{default:g(()=>[a(an,{class:"bg1",style:{width:"200px"}}),a(ot,null,{default:g(()=>[a(Pn,{class:"bg"}),a(un,{class:"bg2"}),a(go,{class:"bg3"})]),_:1})]),_:1}))}});function il(e){e.__sourceCode=`<script setup lang="ts">\r
import GContainer from '../../components/lib/GContainer.vue';\r
import GHeader from '../../components/lib/GHeader.vue';\r
import GMain from '../../components/lib/GMain.vue';\r
import GFooter from '../../components/lib/GFooter.vue';\r
import GAside from '../../components/lib/GAside.vue';\r
<\/script>\r
\r
<template>\r
  <g-container>\r
    <g-aside class="bg1" style="width: 200px;"/>\r
    <g-container>\r
      <g-header class="bg"/>\r
      <g-main class="bg2"/>\r
      <g-footer class="bg3"/>\r
    </g-container>\r
  </g-container>\r
</template>\r
\r
<style lang="scss">\r
.bg {\r
  background-color: #aad0f7;\r
}\r
\r
.bg1 {\r
  background-color: #d9ecff;\r
}\r
\r
.bg2 {\r
  background-color: #ecf5ff;\r
}\r
\r
.bg3 {\r
  background-color: #c6e2ff;\r
}\r
</style>`,e.__sourceCodeTitle=void 0,e.__sourceCodeDetail=""}typeof il=="function"&&il(gc);const rh=p("h1",null,"Container 布局容器",-1),sh=p("div",{class:"gulu-doc-detail"},[p("p",null,"用于布局的容器组件，方便快速搭建页面的基本结构："),p("p",null,"<g-container>：外层容器。 当子元素中包含或<g-header><g-footer>时，全部子元素会垂直上下排列， 否则会水平左右排列。"),p("p",null,"<g-header>顶栏容器。"),p("p",null," <g-aside>：侧边栏容器。"),p("p",null,"<g-main>：主要区域容器。"),p("p",null,"<g-footer>：底栏容器。")],-1),lh=M({__name:"Container",setup(e){return(t,n)=>($(),H(ee,null,[rh,sh,a(te,{component:ac}),a(te,{component:uc}),a(te,{component:dc}),a(te,{component:fc}),a(te,{component:pc}),a(te,{component:gc})],64))}}),ih=["innerHTML"],ch=M({__name:"Toast",props:{autoClose:{type:Boolean,default:!0},autoCloseDelay:{type:Number,default:3},modelValue:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1},type:{type:String,default:"info",validator:e=>["success","warning","info","error"].indexOf(e)>=0},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:e=>["top","center","bottom"].indexOf(e)>=0}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=()=>t("update:modelValue",!1);n.autoClose&&setTimeout(()=>{o()},n.autoCloseDelay*1e3);const r=ke(()=>At().default()[0].children),s=ke(()=>[`gulu-toast-${n.type}`,`gulu-toast-${n.position}`]);return(l,i)=>e.modelValue?($(),H("div",{key:0,class:De(["gulu-toast",we(s)])},[p("i",{class:De(["gulu-iconfont gulu-toast-icon",`g-${e.type}`])},null,2),e.enableHtml?($(),H("div",{key:0,innerHTML:we(r)},null,8,ih)):He(l.$slots,"default",{key:1}),e.showClose?($(),H("div",{key:2,class:"gulu-toast-close",onClick:o})):Fe("",!0)],2)):Fe("",!0)}});const kn=document.createElement("div");kn.setAttribute("id","gulu-toast-wrapper");document.documentElement.appendChild(kn);const et=e=>{const{message:t,autoClose:n=!0,autoCloseDelay:o=3,showClose:r=!1,modelValue:s=!0,type:l="info",enableHtml:i=!1,position:c="top"}=e,f=document.createElement("div");kn.appendChild(f);const u=yr({render(){return jt(ch,{autoClose:n,autoCloseDelay:o,modelValue:s,"onUpdate:modelValue":_=>{_||(u.unmount(),f.remove())},showClose:r,type:l,enableHtml:i,position:c},{default:()=>t})}});kn.children.length>1&&kn.children[0].remove(),u.mount(f)},hc=M({__name:"toast1.sourceCode",setup(e){const t=()=>{et({message:"hello"})};return(n,o)=>($(),de(K,{onClick:t},{default:g(()=>[T("show Toast")]),_:1}))}});function cl(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
import {openToast} from '../../components/lib/openToast';\r
\r
const showToast = () => {\r
  openToast({\r
    message: 'hello'\r
  });\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="showToast">show Toast</Button>\r
</template>`,e.__sourceCodeTitle=" 常规用法 ",e.__sourceCodeDetail=" 从顶部出现，3 秒后自动消失。可以接收一个字符串作为参数，它会被显示为正文内容。 "}typeof cl=="function"&&cl(hc);const _c=M({__name:"toast2.sourceCode",setup(e){const t=()=>{et({message:"hello",autoCloseDelay:5})};return(n,o)=>($(),de(K,{onClick:t},{default:g(()=>[T("show Toast")]),_:1}))}});function al(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
import {openToast} from '../../components/lib/openToast';\r
\r
const showToast = () => {\r
  openToast({\r
    message: 'hello',\r
    autoCloseDelay: 5\r
  });\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="showToast">show Toast</Button>\r
</template>`,e.__sourceCodeTitle=" 延时关闭时间 ",e.__sourceCodeDetail="支持自定义组件的关闭时间，<code>autoCloseDelay</code>实现 <code>Toast</code>的关闭时间。该属性接收一个 <code>Number</code>类型的值"}typeof al=="function"&&al(_c);const mc=M({__name:"toast3.sourceCode",setup(e){const t=()=>{et({message:"hello",showClose:!0,autoClose:!1})};return(n,o)=>($(),de(K,{onClick:t},{default:g(()=>[T("show Toast")]),_:1}))}});function ul(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
import {openToast} from '../../components/lib/openToast';\r
\r
const showToast = () => {\r
  openToast({\r
    message: 'hello',\r
    showClose: true,\r
    autoClose: false\r
  });\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="showToast">show Toast</Button>\r
</template>`,e.__sourceCodeTitle=" 可关闭的消息提示 ",e.__sourceCodeDetail=`<p>可以添加关闭按钮。</p><br/><p style="font-size: 14px;"> 默认不可以被人工关闭的。如果你需要手动关闭功能，你可以把 <code>showClose</code> 设置为 <code>true</code>。\r
    此外拥有可控的 <code>autoClose</code>，当把这个属性的值设置为 <code>false</code> 便表示该消息不会被自动关闭。</p>`}typeof ul=="function"&&ul(mc);const vc=M({__name:"toast4.sourceCode",setup(e){const t=()=>{et({message:"hello"})},n=()=>{et({message:"hello",type:"success"})},o=()=>{et({message:"hello",type:"warning"})},r=()=>{et({message:"hello",type:"error"})};return(s,l)=>($(),H(ee,null,[a(K,{onClick:t},{default:g(()=>[T("info")]),_:1}),a(K,{onClick:n},{default:g(()=>[T("success")]),_:1}),a(K,{onClick:o},{default:g(()=>[T("warning")]),_:1}),a(K,{onClick:r},{default:g(()=>[T("error")]),_:1})],64))}});function dl(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
import {openToast} from '../../components/lib/openToast';\r
\r
const open = () => {\r
  openToast({\r
    message: 'hello'\r
  });\r
};\r
const open2 = () => {\r
  openToast({\r
    message: 'hello',\r
    type: 'success'\r
  });\r
};\r
const open3 = () => {\r
  openToast({\r
    message: 'hello',\r
    type: 'warning'\r
  });\r
};\r
const open4 = () => {\r
  openToast({\r
    message: 'hello',\r
    type: 'error',\r
  });\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="open">info</Button>\r
  <Button @click="open2">success</Button>\r
  <Button @click="open3">warning</Button>\r
  <Button @click="open4">error</Button>\r
</template>`,e.__sourceCodeTitle=" 不同状态 ",e.__sourceCodeDetail=" 设置 <code>type</code> 字段可以定义不同的状态，属性值为：<code>info</code>(默认) <code>success</code> <code>warning</code><code>error</code>。 "}typeof dl=="function"&&dl(vc);const bc=M({__name:"toast5.sourceCode",setup(e){const t=()=>{et({message:"<strong>This is <i>HTML</i> string</strong>",enableHtml:!0})};return(n,o)=>($(),de(K,{onClick:t},{default:g(()=>[T("Use HTML String")]),_:1}))}});function fl(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
import {openToast} from '../../components/lib/openToast';\r
\r
const open = () => {\r
  openToast({\r
    message: '<strong>This is <i>HTML</i> string</strong>',\r
    enableHtml: true\r
  });\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="open">Use HTML String</Button>\r
</template>`,e.__sourceCodeTitle=" 使用 HTML 片段作为正文内容 ",e.__sourceCodeDetail=`<p><code>Toast</code> 还支持使用 HTML 字符串作为正文内容。</p><br/><p style="font-size: 14px;">将 <code>enableHtml</code> 属性设置为 <code>true</code>,<code>message</code> 就会被当作 HTML 片段处理。\r
  </p>`}typeof fl=="function"&&fl(bc);const yc=M({__name:"toast6.sourceCode",setup(e){const t=()=>{et({message:`<p>您需要进行充值，当前余额为 ${Math.floor(Math.random()*100)+1}</p>`,enableHtml:!0})},n=()=>{et({message:`<p>您需要进行充值，当前余额为 ${Math.floor(Math.random()*100)+1}</p>`,enableHtml:!0,position:"bottom"})},o=()=>{et({message:`<p>您需要进行充值，当前余额为 ${Math.floor(Math.random()*100)+1}</p>`,enableHtml:!0,position:"center"})};return(r,s)=>($(),H(ee,null,[a(K,{onClick:t},{default:g(()=>[T("Toast Top")]),_:1}),a(K,{onClick:n},{default:g(()=>[T("Toast Bottom")]),_:1}),a(K,{onClick:o},{default:g(()=>[T("Toast Center")]),_:1})],64))}});function pl(e){e.__sourceCode=`<script setup lang="ts">\r
import Button from '../../components/lib/Button.vue';\r
import {openToast} from '../../components/lib/openToast';\r
\r
const open = () => {\r
  openToast({\r
    message: \`<p>您需要进行充值，当前余额为 \${Math.floor(Math.random() * 100) + 1}</p>\`,\r
    enableHtml: true,\r
  });\r
};\r
const open2 = () => {\r
  openToast({\r
    message: \`<p>您需要进行充值，当前余额为 \${Math.floor(Math.random() * 100) + 1}</p>\`,\r
    enableHtml: true,\r
    position: 'bottom',\r
  });\r
};\r
const open3 = () => {\r
  openToast({\r
    message: \`<p>您需要进行充值，当前余额为 \${Math.floor(Math.random() * 100) + 1}</p>\`,\r
    enableHtml: true,\r
    position: 'center',\r
  });\r
};\r
<\/script>\r
\r
<template>\r
  <Button @click="open">Toast Top</Button>\r
  <Button @click="open2">Toast Bottom</Button>\r
  <Button @click="open3">Toast Center</Button>\r
</template>`,e.__sourceCodeTitle=" 位置选择 ",e.__sourceCodeDetail="支持 <code>Toast</code> 的位置选择，属性值分别为：默认值 <code>Top</code>、<code>center</code>、<code>bottom</code>"}typeof pl=="function"&&pl(yc);const ah=p("h1",null,"Toast 组件示例",-1),uh=p("div",{class:"gulu-doc-detail"},"常用于主动操作后的反馈提示。",-1),dh=M({__name:"Toast",setup(e){return(t,n)=>($(),H(ee,null,[ah,uh,a(te,{component:hc}),a(te,{component:_c}),a(te,{component:mc}),a(te,{component:vc}),a(te,{component:bc}),a(te,{component:yc})],64))}}),fh={class:"gulu-popover"},ph={key:0,class:"gulu-popover-title"},ut=M({__name:"Popover",props:{content:String,title:String,width:Number,position:{type:String,default:"top",validator:e=>["top","bottom","left","right"].indexOf(e)>=0},trigger:{type:String,default:"hover",validator:e=>["hover","click","focus"].indexOf(e)>=0}},setup(e){const t=e,n=ce(!1),o=ce(),r=ce(),s=h=>{var y,I;(y=o.value)!=null&&y.contains(h.target)||(I=r.value)!=null&&I.contains(h.target)||c()},l=()=>{const{top:h,left:y,width:I,height:A}=r.value.getBoundingClientRect(),{height:L}=o.value.getBoundingClientRect(),F={top:{left:y+window.scrollX,top:h+window.scrollY},bottom:{left:y+window.scrollX,top:h+A+window.scrollY},left:{left:y+window.scrollX,top:h+(A-L)/2+window.scrollY},right:{left:y+I+window.scrollX,top:h+(A-L)/2+window.scrollY}},b=t.position;o.value.style.left=F[b].left+"px",o.value.style.top=F[b].top+"px",t.width&&(o.value.style.width=t.width+"px")},i=()=>{n.value=!0,ir(()=>{l(),t.trigger==="click"&&document.addEventListener("click",s)})},c=()=>{n.value=!1,t.trigger==="click"&&document.removeEventListener("click",s)},f=h=>{var y,I,A,L;if(!((y=r.value)!=null&&y.contains(h.target))&&!((I=o.value)!=null&&I.contains(h.target))){c();return}((A=r.value)!=null&&A.contains(h.target)||(L=o.value)!=null&&L.contains(h.target))&&i()},u=()=>{n.value?c():i()},_=ke(()=>({[`gulu-popover-${t.position}`]:t.position}));return ln(()=>{var h,y,I;t.trigger==="click"?(h=r.value)==null||h.addEventListener("click",u):t.trigger==="hover"?document.addEventListener("mousemove",f):t.trigger==="focus"&&((y=r.value)==null||y.addEventListener("focus",i,!0),(I=r.value)==null||I.addEventListener("blur",c,!0))}),pr(()=>{var h,y,I;t.trigger==="click"?(h=r.value)==null||h.removeEventListener("click",u):t.trigger==="hover"?document.removeEventListener("mousemove",f):t.trigger==="focus"&&((y=r.value)==null||y.removeEventListener("focus",i,!0),(I=r.value)==null||I.removeEventListener("blur",c,!0))}),(h,y)=>($(),H("div",fh,[($(),de(pi,{to:"body"},[n.value?($(),H("div",{key:0,class:De(["gulu-popover-content",we(_)]),ref_key:"popover",ref:o},[e.title?($(),H("div",ph,Zt(e.title),1)):Fe("",!0),e.content?($(),H(ee,{key:1},[T(Zt(e.content),1)],64)):He(h.$slots,"default",{key:2})],2)):Fe("",!0)])),p("div",{class:"gulu-popover-action",ref_key:"triggerItem",ref:r},[He(h.$slots,"reference")],512)]))}});const wc=M({__name:"popover1.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(ut,{title:"Title",content:"this is content,this is content,this is content"},{reference:g(()=>[a(K,null,{default:g(()=>[T("Top popover")]),_:1})]),_:1}),a(ut,{title:"Title",position:"bottom",content:"this is content,this is content,this is content"},{reference:g(()=>[a(K,null,{default:g(()=>[T("Bottom popover")]),_:1})]),_:1}),a(ut,{title:"Title",position:"left",content:"this is content,this is content,this is content"},{reference:g(()=>[a(K,null,{default:g(()=>[T("Left popover")]),_:1})]),_:1}),a(ut,{title:"Title",position:"right",content:"this is content,this is content,this is content"},{reference:g(()=>[a(K,null,{default:g(()=>[T("Right popover")]),_:1})]),_:1})],64))}});function gl(e){e.__sourceCode=`<script setup lang="ts">\r
import Popover from '../../components/lib/Popover.vue';\r
import Button from '../../components/lib/Button.vue';\r
<\/script>\r
\r
<template>\r
  <Popover title="Title"\r
           content="this is content,this is content,this is content"\r
  >\r
    <template #reference>\r
      <Button>Top popover</Button>\r
    </template>\r
  </Popover>\r
  <Popover title="Title"\r
           position="bottom"\r
           content="this is content,this is content,this is content"\r
  >\r
    <template #reference>\r
      <Button>Bottom popover</Button>\r
    </template>\r
  </Popover>\r
  <Popover title="Title"\r
           position="left"\r
           content="this is content,this is content,this is content"\r
  >\r
    <template #reference>\r
      <Button>Left popover</Button>\r
    </template>\r
  </Popover>\r
  <Popover title="Title"\r
           position="right"\r
           content="this is content,this is content,this is content"\r
  >\r
    <template #reference>\r
      <Button>Right popover</Button>\r
    </template>\r
  </Popover>\r
</template>`,e.__sourceCodeTitle=" 多种展示位置 ",e.__sourceCodeDetail="<code>position</code> 属性被用来决定 <code>popover</code> 的触发位置， 触发位置有： <code>top</code>（默认位置）、<code>bottom</code>、<code>left</code>、<code>right</code>"}typeof gl=="function"&&gl(wc);const Cc=M({__name:"popover2.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(ut,{title:"Title",trigger:"hover",content:"this is content,this is content,this is content"},{reference:g(()=>[a(K,null,{default:g(()=>[T("Hover to activate")]),_:1})]),_:1}),a(ut,{title:"Title",trigger:"click",content:"this is content,this is content,this is content"},{reference:g(()=>[a(K,null,{default:g(()=>[T("Click to activate")]),_:1})]),_:1}),a(ut,{title:"Title",trigger:"focus",content:"this is content,this is content,this is content"},{reference:g(()=>[a(K,null,{default:g(()=>[T("Focus to activate")]),_:1})]),_:1})],64))}});function hl(e){e.__sourceCode=`<script setup lang="ts">\r
import Popover from '../../components/lib/Popover.vue';\r
import Button from '../../components/lib/Button.vue';\r
<\/script>\r
\r
<template>\r
  <Popover title="Title"\r
           trigger="hover"\r
           content="this is content,this is content,this is content"\r
  >\r
    <template #reference>\r
      <Button>Hover to activate</Button>\r
    </template>\r
  </Popover>\r
  <Popover title="Title"\r
           trigger="click"\r
           content="this is content,this is content,this is content"\r
  >\r
    <template #reference>\r
      <Button>Click to activate</Button>\r
    </template>\r
  </Popover>\r
  <Popover title="Title"\r
           trigger="focus"\r
           content="this is content,this is content,this is content"\r
  >\r
    <template #reference>\r
      <Button>Focus to activate</Button>\r
    </template>\r
  </Popover>\r
</template>`,e.__sourceCodeTitle=" 常规用法 ",e.__sourceCodeDetail="<code>trigger</code> 属性被用来决定 <code>popover</code> 的触发方式， 支持的触发方式： <code>hover</code>、<code>click</code>、<code>focus</code>"}typeof hl=="function"&&hl(Cc);const xc=M({__name:"popover3.sourceCode",setup(e){return(t,n)=>($(),H(ee,null,[a(ut,{title:"Title",content:"this is content,this is content,this is content"},{reference:g(()=>[a(K,null,{default:g(()=>[T("activate")]),_:1})]),_:1}),a(ut,{title:"Title",width:200,content:"this is content,this is content,this is content"},{reference:g(()=>[a(K,null,{default:g(()=>[T("Width activate")]),_:1})]),_:1})],64))}});function _l(e){e.__sourceCode=`<script setup lang="ts">\r
import Popover from '../../components/lib/Popover.vue';\r
import Button from '../../components/lib/Button.vue';\r
<\/script>\r
\r
<template>\r
  <Popover title="Title"\r
           content="this is content,this is content,this is content"\r
  >\r
    <template #reference>\r
      <Button>activate</Button>\r
    </template>\r
  </Popover>\r
\r
  <Popover title="Title"\r
           :width="200"\r
           content="this is content,this is content,this is content"\r
  >\r
    <template #reference>\r
      <Button>Width activate</Button>\r
    </template>\r
  </Popover>\r
</template>`,e.__sourceCodeTitle=" 自定义宽度 ",e.__sourceCodeDetail="<code>width</code> 属性被用来决定 <code>popover</code> 的的宽地，默认随内容撑开，属性值为 <code>Number</code> 类型 "}typeof _l=="function"&&_l(xc);const $c=M({__name:"popover4.sourceCode",setup(e){const t=ce("导航1");return(n,o)=>($(),de(ut,{title:"Title"},{reference:g(()=>[a(K,null,{default:g(()=>[T("Hover to activate")]),_:1})]),default:g(()=>[a(kr,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r)},{default:g(()=>[a(dt,{title:"导航1"},{default:g(()=>[T("内容1")]),_:1}),a(dt,{title:"导航2222"},{default:g(()=>[T("内容2")]),_:1}),a(dt,{title:"导航333333"},{default:g(()=>[T("内容3")]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});function ml(e){e.__sourceCode=`<script setup lang="ts">\r
import Popover from '../../components/lib/Popover.vue';\r
import Button from '../../components/lib/Button.vue';\r
import Tabs from '../../components/lib/Tabs.vue';\r
import Tab from '../../components/lib/Tab.vue';\r
import {ref} from 'vue';\r
\r
const title = ref('导航1');\r
<\/script>\r
\r
<template>\r
  <Popover title="Title">\r
    <Tabs v-model="title">\r
      <Tab title="导航1">内容1</Tab>\r
      <Tab title="导航2222">内容2</Tab>\r
      <Tab title="导航333333">内容3</Tab>\r
    </Tabs>\r
    <template #reference>\r
      <Button>Hover to activate</Button>\r
    </template>\r
  </Popover>\r
</template>`,e.__sourceCodeTitle=" 内容可扩展 ",e.__sourceCodeDetail=" 可以在 <code>Popover</code> 中嵌套其它组件， 以下为嵌套 <code>Tab</code> 的例子。 <br/> 利用插槽取代 <code>content</code> 属性 "}typeof ml=="function"&&ml($c);const gh=p("h1",null,"Popover 气泡卡片",-1),hh=M({__name:"Popover",setup(e){return(t,n)=>($(),H(ee,null,[gh,a(te,{component:Cc}),a(te,{component:wc}),a(te,{component:xc}),a(te,{component:$c})],64))}}),_h={class:"gulu-collapse-content"},Re=M({__name:"CollapseItem",props:{title:String,name:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=ke(()=>Jr().modelValue),r=Jr().accordion,s=()=>{let i=[...o.value];r?i=i.indexOf(n.name)>=0?[]:[n.name]:i.indexOf(n.name)>=0?i=i.filter(c=>c!==n.name):i.push(n.name),!n.disabled&&t("update:modelValue",i)},l=ke(()=>({["gulu-collapse-visible"]:o.value.indexOf(n.name)>=0,disabled:n.disabled}));return(i,c)=>($(),H("div",{class:De(["gulu-collapse-item",we(l)])},[p("div",{class:"gulu-collapse-title",onClick:s},[e.title?($(),H(ee,{key:0},[T(Zt(e.title),1)],64)):He(i.$slots,"title",{key:1})]),p("div",_h,[He(i.$slots,"default")])],2))}});const mh={class:"gulu-collapse"},ho=M({__name:"Collapse",props:{modelValue:null,accordion:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e;if(!At().default)throw new Error("Collapse 组件内容不为空");const o=At().default();o.forEach(s=>{if(s.type!==Re)throw new Error("Collapse 组件的子组件名必须是 CollapseItem")});const r=ce(n.modelValue);return vn(r,()=>{t("update:modelValue",r.value)}),(s,l)=>($(),H("div",mh,[($(!0),H(ee,null,Ro(we(o),(i,c)=>($(),de(io(i),{key:c,modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=f=>r.value=f),accordion:n.accordion},null,8,["modelValue","accordion"]))),128))]))}});const vh=p("div",null,"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1),bh=p("div",null,"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",-1),yh=p("div",null,"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",-1),wh=p("div",null,"Visual feedback: reflect current state by updating or rearranging elements of the page.",-1),Ch=p("div",null," Simplify the process: keep operating process simple and intuitive;",-1),xh=p("div",null,"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",-1),$h=p("div",null,"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",-1),kh=p("div",null,"Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ",-1),Th=p("div",null,"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",-1),kc=M({__name:"collapse1.sourceCode",setup(e){const t=ce(["1"]);return(n,o)=>($(),de(ho,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r)},{default:g(()=>[a(Re,{title:"Consistency",name:"1"},{default:g(()=>[vh,bh]),_:1}),a(Re,{title:"Feedback",name:"2"},{default:g(()=>[yh,wh]),_:1}),a(Re,{title:"Efficiency",name:"3"},{default:g(()=>[Ch,xh,$h]),_:1}),a(Re,{title:"Controllability",name:"4"},{default:g(()=>[kh,Th]),_:1})]),_:1},8,["modelValue"]))}});function vl(e){e.__sourceCode=`<script setup lang="ts">\r
import Collapse from '../../components/lib/Collapse.vue';\r
import CollapseItem from '../../components/lib/CollapseItem.vue';\r
import {ref} from 'vue';\r
\r
const activeNames = ref(['1']);\r
<\/script>\r
\r
<template>\r
  <Collapse v-model="activeNames">\r
    <CollapseItem title="Consistency" name="1">\r
      <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and\r
        habits that the users are used to;\r
      </div>\r
      <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts,\r
        position of elements, etc.\r
      </div>\r
    </CollapseItem>\r
    <CollapseItem title="Feedback" name="2">\r
      <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive\r
        effects;\r
      </div>\r
      <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\r
    </CollapseItem>\r
    <CollapseItem title="Efficiency" name="3">\r
      <div> Simplify the process: keep operating process simple and intuitive;</div>\r
      <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make\r
        decisions;\r
      </div>\r
      <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them\r
        from memorizing and recalling.\r
      </div>\r
    </CollapseItem>\r
    <CollapseItem title="Controllability" name="4">\r
      <div>Decision making: giving advices about operations is acceptable, but do\r
        not make decisions for the users;\r
      </div>\r
      <div>Controlled consequences: users should be granted the freedom to\r
        operate, including canceling, aborting or terminating current\r
        operation.\r
      </div>\r
    </CollapseItem>\r
  </Collapse>\r
</template>`,e.__sourceCodeTitle=" 常规用法 ",e.__sourceCodeDetail="可同时展开多个面板，面板之间不影响"}typeof vl=="function"&&vl(kc);const Eh=p("div",null,"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1),Bh=p("div",null,"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",-1),Ah=p("div",null,"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",-1),Sh=p("div",null,"Visual feedback: reflect current state by updating or rearranging elements of the page.",-1),Ih=p("div",null," Simplify the process: keep operating process simple and intuitive;",-1),Dh=p("div",null,"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",-1),Fh=p("div",null,"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",-1),Ph=p("div",null,"Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ",-1),Rh=p("div",null,"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",-1),Tc=M({__name:"collapse2.sourceCode",setup(e){const t=ce(["1"]);return(n,o)=>($(),de(ho,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),accordion:""},{default:g(()=>[a(Re,{title:"Consistency",name:"1"},{default:g(()=>[Eh,Bh]),_:1}),a(Re,{title:"Feedback",name:"2"},{default:g(()=>[Ah,Sh]),_:1}),a(Re,{title:"Efficiency",name:"3"},{default:g(()=>[Ih,Dh,Fh]),_:1}),a(Re,{title:"Controllability",name:"4"},{default:g(()=>[Ph,Rh]),_:1})]),_:1},8,["modelValue"]))}});function bl(e){e.__sourceCode=`<script setup lang="ts">\r
import Collapse from '../../components/lib/Collapse.vue';\r
import CollapseItem from '../../components/lib/CollapseItem.vue';\r
import {ref} from 'vue';\r
\r
const activeNames = ref(['1']);\r
<\/script>\r
\r
<template>\r
  <Collapse v-model="activeNames" accordion>\r
    <CollapseItem title="Consistency" name="1">\r
      <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and\r
        habits that the users are used to;\r
      </div>\r
      <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts,\r
        position of elements, etc.\r
      </div>\r
    </CollapseItem>\r
    <CollapseItem title="Feedback" name="2">\r
      <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive\r
        effects;\r
      </div>\r
      <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\r
    </CollapseItem>\r
    <CollapseItem title="Efficiency" name="3">\r
      <div> Simplify the process: keep operating process simple and intuitive;</div>\r
      <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make\r
        decisions;\r
      </div>\r
      <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them\r
        from memorizing and recalling.\r
      </div>\r
    </CollapseItem>\r
    <CollapseItem title="Controllability" name="4">\r
      <div>Decision making: giving advices about operations is acceptable, but do\r
        not make decisions for the users;\r
      </div>\r
      <div>Controlled consequences: users should be granted the freedom to\r
        operate, including canceling, aborting or terminating current\r
        operation.\r
      </div>\r
    </CollapseItem>\r
  </Collapse>\r
</template>`,e.__sourceCodeTitle=" 手风琴效果 ",e.__sourceCodeDetail=" 每次只能展开一个面板 <br/> 通过 <code>accordion</code> 属性来设置是否以手风琴模式显示。 "}typeof bl=="function"&&bl(Tc);const Oh=p("div",null,"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1),Vh=p("div",null,"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",-1),Mh=p("div",null,"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",-1),Lh=p("div",null,"Visual feedback: reflect current state by updating or rearranging elements of the page.",-1),Hh=p("div",null," Simplify the process: keep operating process simple and intuitive;",-1),Nh=p("div",null,"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",-1),jh=p("div",null,"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",-1),Gh=p("div",null,"Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ",-1),Uh=p("div",null,"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",-1),Ec=M({__name:"collapse3.sourceCode",setup(e){const t=ce(["1"]);return(n,o)=>($(),de(ho,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),accordion:""},{default:g(()=>[a(Re,{title:"Consistency",name:"1"},{default:g(()=>[Oh,Vh]),_:1}),a(Re,{title:"Feedback",name:"2",disabled:""},{default:g(()=>[Mh,Lh]),_:1}),a(Re,{title:"Efficiency",name:"3"},{default:g(()=>[Hh,Nh,jh]),_:1}),a(Re,{title:"Controllability",name:"4"},{default:g(()=>[Gh,Uh]),_:1})]),_:1},8,["modelValue"]))}});function yl(e){e.__sourceCode=`<script setup lang="ts">\r
import Collapse from '../../components/lib/Collapse.vue';\r
import CollapseItem from '../../components/lib/CollapseItem.vue';\r
import {ref} from 'vue';\r
\r
const activeNames = ref(['1']);\r
<\/script>\r
\r
<template>\r
  <Collapse v-model="activeNames" accordion>\r
    <CollapseItem title="Consistency" name="1">\r
      <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and\r
        habits that the users are used to;\r
      </div>\r
      <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts,\r
        position of elements, etc.\r
      </div>\r
    </CollapseItem>\r
    <CollapseItem title="Feedback" name="2" disabled>\r
      <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive\r
        effects;\r
      </div>\r
      <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\r
    </CollapseItem>\r
    <CollapseItem title="Efficiency" name="3">\r
      <div> Simplify the process: keep operating process simple and intuitive;</div>\r
      <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make\r
        decisions;\r
      </div>\r
      <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them\r
        from memorizing and recalling.\r
      </div>\r
    </CollapseItem>\r
    <CollapseItem title="Controllability" name="4">\r
      <div>Decision making: giving advices about operations is acceptable, but do\r
        not make decisions for the users;\r
      </div>\r
      <div>Controlled consequences: users should be granted the freedom to\r
        operate, including canceling, aborting or terminating current\r
        operation.\r
      </div>\r
    </CollapseItem>\r
  </Collapse>\r
</template>`,e.__sourceCodeTitle=" 禁止面板 ",e.__sourceCodeDetail=" 通过 <code>disabled</code> 属性来设置面板是否接受折叠展示。 "}typeof yl=="function"&&yl(Ec);const zh=p("strong",null,[p("i",null,"自定义标题内容及格式")],-1),qh=p("div",null,"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1),Kh=p("div",null,"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",-1),Wh=p("div",null,"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",-1),Yh=p("div",null,"Visual feedback: reflect current state by updating or rearranging elements of the page.",-1),Zh=p("div",null," Simplify the process: keep operating process simple and intuitive;",-1),Jh=p("div",null,"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",-1),Qh=p("div",null,"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",-1),Xh=p("div",null,"Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ",-1),e_=p("div",null,"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",-1),Bc=M({__name:"collapse4.sourceCode",setup(e){const t=ce(["1"]);return(n,o)=>($(),de(ho,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),accordion:""},{default:g(()=>[a(Re,{name:"1"},{title:g(()=>[zh]),default:g(()=>[qh,Kh]),_:1}),a(Re,{title:"Feedback",name:"2"},{default:g(()=>[Wh,Yh]),_:1}),a(Re,{title:"Efficiency",name:"3"},{default:g(()=>[Zh,Jh,Qh]),_:1}),a(Re,{title:"Controllability",name:"4"},{default:g(()=>[Xh,e_]),_:1})]),_:1},8,["modelValue"]))}});function wl(e){e.__sourceCode=`<script setup lang="ts">\r
import Collapse from '../../components/lib/Collapse.vue';\r
import CollapseItem from '../../components/lib/CollapseItem.vue';\r
import {ref} from 'vue';\r
\r
const activeNames = ref(['1']);\r
<\/script>\r
\r
<template>\r
  <Collapse v-model="activeNames" accordion>\r
    <CollapseItem name="1">\r
      <template #title>\r
        <strong><i>自定义标题内容及格式</i></strong>\r
      </template>\r
      <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and\r
        habits that the users are used to;\r
      </div>\r
      <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts,\r
        position of elements, etc.\r
      </div>\r
    </CollapseItem>\r
    <CollapseItem title="Feedback" name="2">\r
      <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive\r
        effects;\r
      </div>\r
      <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\r
    </CollapseItem>\r
    <CollapseItem title="Efficiency" name="3">\r
      <div> Simplify the process: keep operating process simple and intuitive;</div>\r
      <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make\r
        decisions;\r
      </div>\r
      <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them\r
        from memorizing and recalling.\r
      </div>\r
    </CollapseItem>\r
    <CollapseItem title="Controllability" name="4">\r
      <div>Decision making: giving advices about operations is acceptable, but do\r
        not make decisions for the users;\r
      </div>\r
      <div>Controlled consequences: users should be granted the freedom to\r
        operate, including canceling, aborting or terminating current\r
        operation.\r
      </div>\r
    </CollapseItem>\r
  </Collapse>\r
</template>`,e.__sourceCodeTitle=" 自定义面板标题 ",e.__sourceCodeDetail=" 除了可以通过 <code>title</code> 属性以外，还可以通过具名 <code>slot</code> 来实现自定义面板的标题内容，以实现增加图标等效果。 "}typeof wl=="function"&&wl(Bc);const t_=p("h1",null,"Collapse 折叠面板",-1),n_=p("div",{class:"gulu-doc-detail"},"通过折叠面板收纳内容区域。",-1),o_=M({__name:"Collapse",setup(e){return(t,n)=>($(),H(ee,null,[t_,n_,a(te,{component:kc}),a(te,{component:Tc}),a(te,{component:Ec}),a(te,{component:Bc})],64))}}),r_={class:"markdown-body"},s_=M({__name:"Markdown",props:{content:{type:String,required:!0}},setup(e){return(t,n)=>($(),H("article",r_,[($(),de(io(e.content),{class:"article"}))]))}});const l_=pt(s_,[["__scopeId","data-v-357958b1"]]),i_={class:"markdown-body"},c_=p("h1",null,"介绍",-1),a_=p("em",null,[p("code",{class:""},"Vue 3")],-1),u_=p("em",null,[p("code",{class:""},"Vite")],-1),d_=p("em",null,[p("code",{class:""},"TypeScript")],-1),f_=p("strong",null,"自主开发",-1),p_=p("strong",null,"不采用第三方库",-1),g_=p("strong",null,"响应式移动端",-1),h_=p("p",null,[T("源代码放在了 "),p("a",{href:"https://github.com/haxiedaimala/gulu-ui"},"github主页"),T("，历史提交信息非常全面，可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例。")],-1),__=p("p",null,[T("下一节："),p("a",{href:"#/doc/install"},"安装")],-1),m_=M({__name:"intro",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>{const r=Qt("font");return $(),H("div",i_,[c_,p("p",null,[T("Gulu UI 是一款基于 "),a(r,{color:"#6f2e6a"},{default:g(()=>[a_,T("、"),u_,T("、"),d_]),_:1}),T(" 的 UI 组件库。")]),p("p",null,[T("这款组件库 "),a(r,{color:"#6f2e6a"},{default:g(()=>[f_]),_:1}),T("，全程亲手编写组件及官网，"),a(r,{color:"#6f2e6a"},{default:g(()=>[p_]),_:1}),T("。")]),p("p",null,[T("如果你不满意原生框架样式，不必担心类名命名重复问题，且覆盖样式同样可以实现。同时Gulu UI "),a(r,{color:"#6f2e6a"},{default:g(()=>[T("支持"),g_,T("显示")]),_:1})]),h_,__])}}}),v_={class:"markdown-body"},b_=p("h1",null,"安装",-1),y_=p("p",null,"打开终端运行下列命令：",-1),w_=p("pre",null,[p("code",{class:"language-bash"},`npm install "gulu-ui-myself"
`)],-1),C_=p("p",null,"或",-1),x_=p("pre",null,[p("code",{class:"language-bash"},`yarn add "gulu-ui-myself"
`)],-1),$_=p("p",null,[T("下一节："),p("a",{href:"#/doc/get-started"},"开始使用")],-1),k_=[b_,y_,w_,C_,x_,$_],T_=M({__name:"install",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),H("div",v_,k_))}}),E_={class:"markdown-body"},B_=mi(`<h1>开始使用</h1><p>请先<a href="#/doc/install">安装</a>本组件库。</p><p>然后在你的代码中写入下面的代码</p><pre><code class="language-javascript">import {Button, Switch, Dialog, openDialog, Tabs, Tab} from &quot;gulu-ui-self&quot;
</code></pre><p>就可以使用我提供的组件了。</p><h2>Vue 单文件组件</h2><p>代码示例：</p><pre><code class="language-html">&lt;template&gt;
  &lt;Button/&gt;
&lt;/template&gt;

&lt;script setup&gt;
import {Button} from &#39;gulu-ui-self&#39;
&lt;/script&gt;
</code></pre>`,8),A_=[B_],S_=M({__name:"getStart",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),H("div",E_,A_))}}),Eo=(e,t)=>jt(l_,{content:e,key:t}),I_=xd(),Ac=cf({history:I_,routes:[{path:"/",component:Sf},{path:"/doc",component:Mf,children:[{path:"",redirect:"/doc/intro"},{path:"intro",component:Eo(m_,"intro")},{path:"install",component:Eo(T_,"install")},{path:"get-started",component:Eo(S_,"getStart")},{path:"switch",component:tp},{path:"button",component:rp},{path:"dialog",component:kp},{path:"tabs",component:Fp},{path:"input",component:Lp},{path:"layout",component:zg},{path:"container",component:lh},{path:"toast",component:dh},{path:"popover",component:hh},{path:"collapse",component:o_}]}]}),D_=M({__name:"App",setup(e){const t=ce(document.documentElement.clientWidth),n=960;ln(()=>{window.onresize=()=>{t.value=document.documentElement.clientWidth}});const o=ce(t.value<=n);return mn("asideVisible",o),Ac.afterEach(()=>{document.documentElement.scrollTop=document.body.scrollTop=0,t.value<=n&&(o.value=!1)}),(r,s)=>{const l=Qt("router-view");return $(),de(l)}}});const Sc=yr(D_);Sc.use(Ac);Sc.mount("#app");
