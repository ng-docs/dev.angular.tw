import {
  OpenCloseComponent
} from "./chunk-2EKQVVLY.js";
import "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/open-close-page.component.ts
var _OpenClosePageComponent = class _OpenClosePageComponent {
  logging = false;
  toggleLogging() {
    this.logging = !this.logging;
  }
};
__name(_OpenClosePageComponent, "OpenClosePageComponent");
__publicField(_OpenClosePageComponent, "ɵfac", /* @__PURE__ */ __name(function OpenClosePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenClosePageComponent)();
}, "OpenClosePageComponent_Factory"));
__publicField(_OpenClosePageComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _OpenClosePageComponent, selectors: [["app-open-close-page"]], decls: 7, vars: 2, consts: [["type", "checkbox", "id", "log-checkbox", 3, "click", "checked"], ["for", "log-checkbox"], [3, "logging"]], template: /* @__PURE__ */ __name(function OpenClosePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section")(1, "h2");
    ɵɵtext(2, "Open Close Component");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 0);
    ɵɵlistener("click", /* @__PURE__ */ __name(function OpenClosePageComponent_Template_input_click_3_listener() {
      return ctx.toggleLogging();
    }, "OpenClosePageComponent_Template_input_click_3_listener"));
    ɵɵelementEnd();
    ɵɵelementStart(4, "label", 1);
    ɵɵtext(5, "Console Log Animation Events");
    ɵɵelementEnd();
    ɵɵelement(6, "app-open-close", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵproperty("checked", ctx.logging);
    ɵɵadvance(3);
    ɵɵproperty("logging", ctx.logging);
  }
}, "OpenClosePageComponent_Template"), dependencies: [OpenCloseComponent], encapsulation: 2 }));
var OpenClosePageComponent = _OpenClosePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenClosePageComponent, [{
    type: Component,
    args: [{
      selector: "app-open-close-page",
      template: `
    <section>
      <h2>Open Close Component</h2>
      <input type="checkbox" id="log-checkbox" [checked]="logging" (click)="toggleLogging()"/>
      <label for="log-checkbox">Console Log Animation Events</label>

      <app-open-close [logging]="logging"></app-open-close>
    </section>
  `,
      imports: [OpenCloseComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(OpenClosePageComponent, { className: "OpenClosePageComponent", filePath: "src/content/examples/animations/src/app/open-close-page.component.ts", lineNumber: 17 });
})();
export {
  OpenClosePageComponent
};
//# sourceMappingURL=chunk-CBWKMH4C.js.map
