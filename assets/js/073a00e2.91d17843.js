/*! For license information please see 073a00e2.91d17843.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[342667],{38643:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(824246),o=r(511151);const i={id:"plugin-catalog-backend-module-incremental-ingestion.pluginenvironment",title:"PluginEnvironment",description:"API reference for PluginEnvironment"},c=void 0,a={unversionedId:"reference/plugin-catalog-backend-module-incremental-ingestion.pluginenvironment",id:"reference/plugin-catalog-backend-module-incremental-ingestion.pluginenvironment",title:"PluginEnvironment",description:"API reference for PluginEnvironment",source:"@site/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.pluginenvironment.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion.pluginenvironment",permalink:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.pluginenvironment",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.pluginenvironment.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion.pluginenvironment",title:"PluginEnvironment",description:"API reference for PluginEnvironment"}},u={},l=[];function s(e){const n=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.pluginenvironment",children:(0,t.jsx)(n.code,{children:"PluginEnvironment"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.b,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type PluginEnvironment = {\n    logger: Logger;\n    database: PluginDatabaseManager;\n    scheduler: PluginTaskScheduler;\n    config: Config;\n    reader: UrlReader;\n    permissions: PermissionEvaluator;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.b,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.databaseservice",children:"PluginDatabaseManager"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-tasks.plugintaskscheduler",children:"PluginTaskScheduler"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReader"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))r.call(i,l)&&(a[l]=i[l]);if(n){c=n(i);for(var s=0;s<c.length;s++)t.call(i,c[s])&&(a[c[s]]=i[c[s]])}}return a}},371426:(e,n,r)=>{r(862525);var t=r(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,i={},l=null,s=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(s=n.ref),n)a.call(n,t)&&!u.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:s,props:i,_owner:c.current}}n.jsx=l,n.jsxs=l},541535:(e,n,r)=>{var t=r(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var c=60109,a=60110,u=60112;n.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),c=f("react.provider"),a=f("react.context"),u=f("react.forward_ref"),n.Suspense=f("react.suspense"),l=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||g}function h(){}function v(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var b=v.prototype=new h;b.constructor=v,t(b,y.prototype),b.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,r){var t,i={},c=null,a=null;if(null!=n)for(t in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(c=""+n.key),n)j.call(n,t)&&!k.hasOwnProperty(t)&&(i[t]=n[t]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===i[t]&&(i[t]=u[t]);return{$$typeof:o,type:e,key:c,ref:a,props:i,_owner:_.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function x(e,n,r,t,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return c=c(u=e),e=""===t?"."+w(u,0):t,Array.isArray(c)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),x(c,n,r,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),n.push(c)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=t+w(a=e[l],l);u+=x(a,n,r,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(a=e.next()).done;)u+=x(a=a.value,n,r,s=t+w(a,l++),c);else if("object"===a)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function S(e,n,r){if(null==e)return e;var t=[],o=0;return x(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function C(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:S,forEach:function(e,n,r){S(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error(d(143));return e}},n.Component=y,n.PureComponent=v,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,r){if(null==e)throw Error(d(267,e));var i=t({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,u=_.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)j.call(n,s)&&!k.hasOwnProperty(s)&&(i[s]=void 0===n[s]&&void 0!==l?l[s]:n[s])}var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:c,ref:a,props:i,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:a,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return $().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,r){return $().useReducer(e,n,r)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>i});var t=r(667294);const o=t.createContext({});function i(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||c:i(e),t.createElement(o.Provider,{value:a},n)}}}]);