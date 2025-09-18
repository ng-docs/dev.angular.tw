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

// src/content/examples/router-tutorial/src/app/page-not-found/page-not-found.component.ts
var _PageNotFoundComponent = class _PageNotFoundComponent {
};
__name(_PageNotFoundComponent, "PageNotFoundComponent");
__publicField(_PageNotFoundComponent, "ɵfac", /* @__PURE__ */ __name(function PageNotFoundComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageNotFoundComponent)();
}, "PageNotFoundComponent_Factory"));
__publicField(_PageNotFoundComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 4, vars: 0, template: /* @__PURE__ */ __name(function PageNotFoundComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h2");
    ɵɵtext(1, "Page Not Found");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "p");
    ɵɵtext(3, "We couldn't find that page! Not even with x-ray vision.");
    ɵɵdomElementEnd();
  }
}, "PageNotFoundComponent_Template"), encapsulation: 2 }));
var PageNotFoundComponent = _PageNotFoundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageNotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-page-not-found", template: "<h2>Page Not Found</h2>\n<p>We couldn't find that page! Not even with x-ray vision.</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PageNotFoundComponent, { className: "PageNotFoundComponent", filePath: "src/content/examples/router-tutorial/src/app/page-not-found/page-not-found.component.ts", lineNumber: 8 });
})();
export {
  PageNotFoundComponent
};
//# sourceMappingURL=chunk-JB76TTR7.js.map
