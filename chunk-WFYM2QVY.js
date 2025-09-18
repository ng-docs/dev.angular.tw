import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/animations-package/open-close.component.ts
var _OpenCloseComponent = class _OpenCloseComponent {
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
};
__name(_OpenCloseComponent, "OpenCloseComponent");
__publicField(_OpenCloseComponent, "ɵfac", /* @__PURE__ */ __name(function OpenCloseComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenCloseComponent)();
}, "OpenCloseComponent_Factory"));
__publicField(_OpenCloseComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _OpenCloseComponent, selectors: [["app-open-close"]], decls: 6, vars: 2, consts: [["type", "button", 3, "click"], [1, "open-close-container"]], template: /* @__PURE__ */ __name(function OpenCloseComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "nav")(1, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function OpenCloseComponent_Template_button_click_1_listener() {
      return ctx.toggle();
    }, "OpenCloseComponent_Template_button_click_1_listener"));
    ɵɵtext(2, "Toggle Open/Close");
    ɵɵdomElementEnd()();
    ɵɵdomElementStart(3, "div", 1)(4, "p");
    ɵɵtext(5);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵproperty("@openClose", ctx.isOpen() ? "open" : "closed");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("The box is now ", ctx.isOpen() ? "Open" : "Closed", "!");
  }
}, "OpenCloseComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */"], data: { animation: [
  trigger("openClose", [
    state("open", style({
      height: "200px",
      opacity: 1,
      backgroundColor: "yellow"
    })),
    state("closed", style({
      height: "100px",
      opacity: 0.5,
      backgroundColor: "green"
    })),
    // ...
    transition("* => *", [
      animate("1s", keyframes([
        style({ opacity: 0.1, offset: 0.1 }),
        style({ opacity: 0.6, offset: 0.2 }),
        style({ opacity: 1, offset: 0.5 }),
        style({ opacity: 0.2, offset: 0.7 })
      ]))
    ])
  ])
] } }));
var OpenCloseComponent = _OpenCloseComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenCloseComponent, [{
    type: Component,
    args: [{ selector: "app-open-close", animations: [
      trigger("openClose", [
        state("open", style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })),
        state("closed", style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green"
        })),
        // ...
        transition("* => *", [
          animate("1s", keyframes([
            style({ opacity: 0.1, offset: 0.1 }),
            style({ opacity: 0.6, offset: 0.2 }),
            style({ opacity: 1, offset: 0.5 }),
            style({ opacity: 0.2, offset: 0.7 })
          ]))
        ])
      ])
    ], template: `<!-- #docplaster -->
<nav>
  <button type="button" (click)="toggle()">Toggle Open/Close</button>
</nav>

<div [@openClose]="isOpen() ? 'open' : 'closed'" class="open-close-container">
  <p>The box is now {{ isOpen() ? 'Open' : 'Closed' }}!</p>
</div>
`, styles: ["/* src/content/examples/animations/src/app/animations-package/open-close.component.css */\n:host {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(OpenCloseComponent, { className: "OpenCloseComponent", filePath: "src/content/examples/animations/src/app/animations-package/open-close.component.ts", lineNumber: 41 });
})();
export {
  OpenCloseComponent
};
//# sourceMappingURL=chunk-WFYM2QVY.js.map
