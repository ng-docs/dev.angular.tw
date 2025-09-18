import {
  animate,
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

// src/content/examples/animations/src/app/open-close.component.4.ts
var _OpenCloseChildComponent = class _OpenCloseChildComponent {
  isDisabled = false;
  isOpen = false;
  // #enddocregion toggle-animation
  toggleAnimations() {
    this.isDisabled = !this.isDisabled;
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
};
__name(_OpenCloseChildComponent, "OpenCloseChildComponent");
__publicField(_OpenCloseChildComponent, "ɵfac", /* @__PURE__ */ __name(function OpenCloseChildComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenCloseChildComponent)();
}, "OpenCloseChildComponent_Factory"));
__publicField(_OpenCloseChildComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _OpenCloseChildComponent, selectors: [["app-open-close-toggle"]], decls: 9, vars: 3, consts: [["type", "button", 3, "click"], [1, "open-close-container"]], template: /* @__PURE__ */ __name(function OpenCloseChildComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "nav")(1, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function OpenCloseChildComponent_Template_button_click_1_listener() {
      return ctx.toggleAnimations();
    }, "OpenCloseChildComponent_Template_button_click_1_listener"));
    ɵɵtext(2, "Toggle Animations");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(3, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function OpenCloseChildComponent_Template_button_click_3_listener() {
      return ctx.toggle();
    }, "OpenCloseChildComponent_Template_button_click_3_listener"));
    ɵɵtext(4, "Toggle Open/Closed");
    ɵɵdomElementEnd()();
    ɵɵdomElementStart(5, "div")(6, "div", 1)(7, "p");
    ɵɵtext(8);
    ɵɵdomElementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵproperty("@.disabled", ctx.isDisabled);
    ɵɵadvance();
    ɵɵproperty("@childAnimation", ctx.isOpen ? "open" : "closed");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("The box is now ", ctx.isOpen ? "Open" : "Closed", "!");
  }
}, "OpenCloseChildComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */"], data: { animation: [
  trigger("childAnimation", [
    // ...
    // #enddocregion toggle-animation
    state("open", style({
      width: "250px",
      opacity: 1,
      backgroundColor: "yellow"
    })),
    state("closed", style({
      width: "100px",
      opacity: 0.8,
      backgroundColor: "blue"
    })),
    transition("* => *", [animate("1s")])
    // #docregion toggle-animation
  ])
] } }));
var OpenCloseChildComponent = _OpenCloseChildComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenCloseChildComponent, [{
    type: Component,
    args: [{ selector: "app-open-close-toggle", animations: [
      trigger("childAnimation", [
        // ...
        // #enddocregion toggle-animation
        state("open", style({
          width: "250px",
          opacity: 1,
          backgroundColor: "yellow"
        })),
        state("closed", style({
          width: "100px",
          opacity: 0.8,
          backgroundColor: "blue"
        })),
        transition("* => *", [animate("1s")])
        // #docregion toggle-animation
      ])
    ], template: `<nav>
  <button type="button" (click)="toggleAnimations()">Toggle Animations</button>
  <button type="button" (click)="toggle()">Toggle Open/Closed</button>
</nav>
<!-- #docregion toggle-animation -->
<div [@.disabled]="isDisabled">
  <div [@childAnimation]="isOpen ? 'open' : 'closed'"
    class="open-close-container">
    <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>
  </div>
</div>
<!-- #enddocregion toggle-animation -->`, styles: ["/* src/content/examples/animations/src/app/open-close.component.css */\n:host {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(OpenCloseChildComponent, { className: "OpenCloseChildComponent", filePath: "src/content/examples/animations/src/app/open-close.component.4.ts", lineNumber: 38 });
})();

export {
  OpenCloseChildComponent
};
//# sourceMappingURL=chunk-BFADVANU.js.map
