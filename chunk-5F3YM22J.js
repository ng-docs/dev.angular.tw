import {
  OpenCloseChildComponent
} from "./chunk-BFADVANU.js";
import "./chunk-Q2QHJBJV.js";
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

// src/content/examples/animations/src/app/toggle-animations-page.component.ts
var _ToggleAnimationsPageComponent = class _ToggleAnimationsPageComponent {
};
__name(_ToggleAnimationsPageComponent, "ToggleAnimationsPageComponent");
__publicField(_ToggleAnimationsPageComponent, "ɵfac", /* @__PURE__ */ __name(function ToggleAnimationsPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToggleAnimationsPageComponent)();
}, "ToggleAnimationsPageComponent_Factory"));
__publicField(_ToggleAnimationsPageComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _ToggleAnimationsPageComponent, selectors: [["app-toggle-animations-child-page"]], decls: 4, vars: 0, template: /* @__PURE__ */ __name(function ToggleAnimationsPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section")(1, "h2");
    ɵɵtext(2, "Toggle Animations");
    ɵɵelementEnd();
    ɵɵelement(3, "app-open-close-toggle");
    ɵɵelementEnd();
  }
}, "ToggleAnimationsPageComponent_Template"), dependencies: [OpenCloseChildComponent], encapsulation: 2 }));
var ToggleAnimationsPageComponent = _ToggleAnimationsPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleAnimationsPageComponent, [{
    type: Component,
    args: [{
      selector: "app-toggle-animations-child-page",
      template: `
    <section>
      <h2>Toggle Animations</h2>

      <app-open-close-toggle></app-open-close-toggle>
    </section>
  `,
      imports: [OpenCloseChildComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ToggleAnimationsPageComponent, { className: "ToggleAnimationsPageComponent", filePath: "src/content/examples/animations/src/app/toggle-animations-page.component.ts", lineNumber: 15 });
})();
export {
  ToggleAnimationsPageComponent
};
//# sourceMappingURL=chunk-5F3YM22J.js.map
