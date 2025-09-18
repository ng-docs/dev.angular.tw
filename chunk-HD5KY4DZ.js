import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/router-tutorial/src/app/crisis-list/crisis-list.component.ts
var _CrisisListComponent = class _CrisisListComponent {
};
__name(_CrisisListComponent, "CrisisListComponent");
__publicField(_CrisisListComponent, "ɵfac", /* @__PURE__ */ __name(function CrisisListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CrisisListComponent)();
}, "CrisisListComponent_Factory"));
__publicField(_CrisisListComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _CrisisListComponent, selectors: [["app-crisis-list"]], decls: 4, vars: 0, template: /* @__PURE__ */ __name(function CrisisListComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h3");
    ɵɵtext(1, "CRISIS CENTER");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "p");
    ɵɵtext(3, "Get your crisis here");
    ɵɵdomElementEnd();
  }
}, "CrisisListComponent_Template"), encapsulation: 2 }));
var CrisisListComponent = _CrisisListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrisisListComponent, [{
    type: Component,
    args: [{ selector: "app-crisis-list", template: "<h3>CRISIS CENTER</h3>\n<p>Get your crisis here</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(CrisisListComponent, { className: "CrisisListComponent", filePath: "src/content/examples/router-tutorial/src/app/crisis-list/crisis-list.component.ts", lineNumber: 8 });
})();

export {
  CrisisListComponent
};
//# sourceMappingURL=chunk-HD5KY4DZ.js.map
