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

// src/content/examples/router-tutorial/src/app/heroes-list/heroes-list.component.ts
var _HeroesListComponent = class _HeroesListComponent {
};
__name(_HeroesListComponent, "HeroesListComponent");
__publicField(_HeroesListComponent, "ɵfac", /* @__PURE__ */ __name(function HeroesListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeroesListComponent)();
}, "HeroesListComponent_Factory"));
__publicField(_HeroesListComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _HeroesListComponent, selectors: [["app-heroes-list"]], decls: 4, vars: 0, template: /* @__PURE__ */ __name(function HeroesListComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h3");
    ɵɵtext(1, "HEROES");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "p");
    ɵɵtext(3, "Get your heroes here");
    ɵɵdomElementEnd();
  }
}, "HeroesListComponent_Template"), encapsulation: 2 }));
var HeroesListComponent = _HeroesListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroesListComponent, [{
    type: Component,
    args: [{ selector: "app-heroes-list", template: "<h3>HEROES</h3>\n<p>Get your heroes here</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(HeroesListComponent, { className: "HeroesListComponent", filePath: "src/content/examples/router-tutorial/src/app/heroes-list/heroes-list.component.ts", lineNumber: 8 });
})();

export {
  HeroesListComponent
};
//# sourceMappingURL=chunk-LSSNOEPG.js.map
