import {
  ExampleProgressbarComponent
} from "./chunk-4D2BACS2.js";
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

// src/content/examples/accessibility/src/app/app.component.ts
var _AppComponent = class _AppComponent {
  progress = 0;
  setProgress($event) {
    this.progress = +$event.target.value;
  }
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [["for", "progress-value"], ["id", "progress-value", "type", "number", "min", "0", "max", "100", 3, "input", "value"], ["aria-label", "Example of a progress bar", 3, "value"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1");
    ɵɵtext(1, "Accessibility Example");
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 0);
    ɵɵtext(3, " Enter an example progress value ");
    ɵɵelementStart(4, "input", 1);
    ɵɵlistener("input", /* @__PURE__ */ __name(function AppComponent_Template_input_input_4_listener($event) {
      return ctx.setProgress($event);
    }, "AppComponent_Template_input_input_4_listener"));
    ɵɵelementEnd()();
    ɵɵelement(5, "app-example-progressbar", 2);
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵproperty("value", ctx.progress);
    ɵɵadvance();
    ɵɵproperty("value", ctx.progress);
  }
}, "AppComponent_Template"), dependencies: [ExampleProgressbarComponent], encapsulation: 2 }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [ExampleProgressbarComponent], template: '<h1>Accessibility Example</h1>\n<!-- #docregion template -->\n<label for="progress-value">\n  Enter an example progress value\n  <input id="progress-value" type="number" min="0" max="100"\n      [value]="progress" (input)="setProgress($event)">\n</label>\n\n<!-- The user of the progressbar sets an aria-label to communicate what the progress means. -->\n<app-example-progressbar [value]="progress" aria-label="Example of a progress bar">\n</app-example-progressbar>\n<!-- #enddocregion template -->\n\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/accessibility/src/app/app.component.ts", lineNumber: 10 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-CZTHED7I.js.map
