import{b as p}from"./chunk-L5CNLUDK.js";import{a as l}from"./chunk-YMJQ3ECT.js";import"./chunk-IP2AJ6ZD.js";import{a as u}from"./chunk-PZQJC3RH.js";import"./chunk-DIJ2E45V.js";import"./chunk-VYMSLZOW.js";import"./chunk-RHT2WMLP.js";import"./chunk-7TRK3HOB.js";import"./chunk-6NZ26NM6.js";import"./chunk-NFIH6FSW.js";import{Bb as c,_a as s,bc as m,f as d,fa as n,ia as r,za as a}from"./chunk-TLQ7SHBH.js";var j=(()=>{let e=class e{constructor(){this.cdRef=n(s),this.environmentInjector=n(a),this.embeddedTutorialManager=n(u)}ngOnInit(){this.loadEmbeddedEditor()}loadEmbeddedEditor(){return d(this,null,function*(){let o=yield l(this.environmentInjector,()=>import("./chunk-BTLS42QH.js").then(t=>t.NodeRuntimeSandbox));yield this.embeddedTutorialManager.fetchAndSetTutorialFiles(this.tutorialFiles),this.cdRef.markForCheck(),yield o.init()})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r({type:e,selectors:[["adev-code-editor"]],inputs:{tutorialFiles:"tutorialFiles"},standalone:!0,features:[m],decls:1,vars:0,template:function(t,f){t&1&&c(0,"embedded-editor")},dependencies:[p],encapsulation:2});let i=e;return i})();export{j as CodeEditorComponent};