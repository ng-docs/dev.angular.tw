import{k as O,l as P}from"./chunk-PZQJC3RH.js";import"./chunk-DIJ2E45V.js";import"./chunk-VYMSLZOW.js";import"./chunk-RHT2WMLP.js";import{k as y,l as E}from"./chunk-7TRK3HOB.js";import"./chunk-6NZ26NM6.js";import"./chunk-NFIH6FSW.js";import{Ab as o,Lb as u,Wb as i,Xa as p,Xb as h,bc as C,fa as v,ia as w,ib as m,ub as c,zb as n}from"./chunk-TLQ7SHBH.js";function T(e,t){e&1&&(n(0,"p"),i(1,"Open angular.dev on desktop to code in your browser."),o())}function M(e,t){e&1&&(n(0,"p"),i(1," We're currently working on supporting Firefox with our development server. Meanwhile, try running the page using a different browser. "),o())}function S(e,t){if(e&1&&m(0,T,2,0,"p")(1,M,2,0),e&2){let a=u();c(0,a.isIos?0:a.isFirefox?1:-1)}}function b(e,t){e&1&&(n(0,"p"),i(1," We couldn't start the tutorial app. Please ensure third party cookies are enabled for this site. "),o())}function N(e,t){e&1&&(n(0,"p"),i(1," We couldn't start the tutorial app because your browser is out of memory. To free up memory, close angular.dev tutorials in other tabs or windows, and refresh the page. "),o())}function k(e,t){if(e&1&&(n(0,"small"),i(1," The error message is: "),n(2,"code"),i(3),o()()),e&2){let a=u();p(3),h(a.error().message)}}var K=(()=>{let t=class t{constructor(){this.nodeRuntimeState=v(P),this.isIos=y,this.isFirefox=E,this.error=this.nodeRuntimeState.error,this.ErrorType=O}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=w({type:t,selectors:[["docs-tutorial-preview-error"]],standalone:!0,features:[C],decls:5,vars:2,consts:[[1,"adev-preview-error","docs-light-mode","docs-mini-scroll-track"]],template:function(l,r){if(l&1&&(n(0,"div",0),m(1,S,2,1)(2,b,2,0)(3,N,2,0)(4,k,4,1,"small"),o()),l&2){let d,_,s,g,f;p(),c(1,(d=!0)==(((_=r.error())==null?null:_.type)===r.ErrorType.UNSUPPORTED_BROWSER_ENVIRONMENT)?1:d===(((s=r.error())==null?null:s.type)===r.ErrorType.COOKIES||((s=r.error())==null?null:s.type)===r.ErrorType.UNKNOWN)?2:d===(((g=r.error())==null?null:g.type)===r.ErrorType.OUT_OF_MEMORY)?3:-1),p(3),c(4,(f=r.error())!=null&&f.message?4:-1)}},styles:['[_nghost-%COMP%]{margin:5% auto}.adev-preview-error[_ngcontent-%COMP%]{border:1px solid var(--senary-contrast);border-radius:.25rem;padding:1rem}.adev-preview-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;gap:.5rem;font-weight:600;margin-top:0}.adev-preview-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before{content:"error";font-family:var(--icons);color:var(--orange-red);font-size:1.5rem;font-weight:500}.adev-preview-error[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]:not(pre   *)[_ngcontent-%COMP%]{white-space:pre-wrap;background:linear-gradient(90deg,var(--hot-red) 0%,var(--orange-red) 100%);background-clip:text;-webkit-background-clip:text;color:transparent}.adev-preview-error[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]:not(pre   *)[_ngcontent-%COMP%]:before{background:transparent}'],changeDetection:0});let e=t;return e})();export{K as PreviewError};