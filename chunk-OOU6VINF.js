import {
  StatusSliderComponent
} from "./chunk-7V3VQAIH.js";
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

// src/content/examples/animations/src/app/status-slider-page.component.ts
var _StatusSliderPageComponent = class _StatusSliderPageComponent {
};
__name(_StatusSliderPageComponent, "StatusSliderPageComponent");
__publicField(_StatusSliderPageComponent, "ɵfac", /* @__PURE__ */ __name(function StatusSliderPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StatusSliderPageComponent)();
}, "StatusSliderPageComponent_Factory"));
__publicField(_StatusSliderPageComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _StatusSliderPageComponent, selectors: [["app-status-slider-page"]], decls: 4, vars: 0, template: /* @__PURE__ */ __name(function StatusSliderPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section")(1, "h2");
    ɵɵtext(2, "Status Slider");
    ɵɵelementEnd();
    ɵɵelement(3, "app-status-slider");
    ɵɵelementEnd();
  }
}, "StatusSliderPageComponent_Template"), dependencies: [StatusSliderComponent], encapsulation: 2 }));
var StatusSliderPageComponent = _StatusSliderPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusSliderPageComponent, [{
    type: Component,
    args: [{
      selector: "app-status-slider-page",
      template: `
    <section>
      <h2>Status Slider</h2>
      <app-status-slider></app-status-slider>
    </section>
  `,
      imports: [StatusSliderComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(StatusSliderPageComponent, { className: "StatusSliderPageComponent", filePath: "src/content/examples/animations/src/app/status-slider-page.component.ts", lineNumber: 14 });
})();
export {
  StatusSliderPageComponent
};
//# sourceMappingURL=chunk-OOU6VINF.js.map
