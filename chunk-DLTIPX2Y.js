import {
  FavoriteColorReactiveComponent
} from "./chunk-GD6K3B3S.js";
import {
  FavoriteColorTemplateComponent
} from "./chunk-XWLAOEZ6.js";
import "./chunk-IP3YSDXJ.js";
import "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/forms-overview/src/app/app.component.ts
var _AppComponent = class _AppComponent {
  title = "forms-intro";
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1");
    ɵɵtext(1, "Forms Overview");
    ɵɵelementEnd();
    ɵɵelementStart(2, "h2");
    ɵɵtext(3, "Reactive");
    ɵɵelementEnd();
    ɵɵelement(4, "app-reactive-favorite-color");
    ɵɵelementStart(5, "h2");
    ɵɵtext(6, "Template-Driven");
    ɵɵelementEnd();
    ɵɵelement(7, "app-template-favorite-color");
  }
}, "AppComponent_Template"), dependencies: [FavoriteColorTemplateComponent, FavoriteColorReactiveComponent], encapsulation: 2 }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [FavoriteColorTemplateComponent, FavoriteColorReactiveComponent], template: "<!--The content below is only a placeholder and can be replaced.-->\n<h1>Forms Overview</h1>\n\n<h2>Reactive</h2>\n\n<app-reactive-favorite-color />\n\n<h2>Template-Driven</h2>\n\n<app-template-favorite-color />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/forms-overview/src/app/app.component.ts", lineNumber: 11 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-DLTIPX2Y.js.map
