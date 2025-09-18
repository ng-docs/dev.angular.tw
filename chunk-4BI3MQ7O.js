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
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/open-close.component.1.ts
var _OpenCloseKeyframeComponent = class _OpenCloseKeyframeComponent {
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  logging = input(false, ...ngDevMode ? [{ debugName: "logging" }] : []);
  onAnimationEvent(event) {
    if (!this.logging) {
      return;
    }
  }
};
__name(_OpenCloseKeyframeComponent, "OpenCloseKeyframeComponent");
__publicField(_OpenCloseKeyframeComponent, "ɵfac", /* @__PURE__ */ __name(function OpenCloseKeyframeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenCloseKeyframeComponent)();
}, "OpenCloseKeyframeComponent_Factory"));
__publicField(_OpenCloseKeyframeComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _OpenCloseKeyframeComponent, selectors: [["app-open-close"]], inputs: { logging: [1, "logging"] }, decls: 5, vars: 2, consts: [["type", "button", 3, "click"], [1, "open-close-container"]], template: /* @__PURE__ */ __name(function OpenCloseKeyframeComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function OpenCloseKeyframeComponent_Template_button_click_0_listener() {
      return ctx.toggle();
    }, "OpenCloseKeyframeComponent_Template_button_click_0_listener"));
    ɵɵtext(1, "Toggle Open/Close");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "div", 1);
    ɵɵlistener("@openClose.start", /* @__PURE__ */ __name(function OpenCloseKeyframeComponent_Template_div_animation_openClose_start_2_listener($event) {
      return ctx.onAnimationEvent($event);
    }, "OpenCloseKeyframeComponent_Template_div_animation_openClose_start_2_listener"))("@openClose.done", /* @__PURE__ */ __name(function OpenCloseKeyframeComponent_Template_div_animation_openClose_done_2_listener($event) {
      return ctx.onAnimationEvent($event);
    }, "OpenCloseKeyframeComponent_Template_div_animation_openClose_done_2_listener"));
    ɵɵdomElementStart(3, "p");
    ɵɵtext(4);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵproperty("@openClose", ctx.isOpen ? "open" : "closed");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("The box is now ", ctx.isOpen ? "Open" : "Closed", "!");
  }
}, "OpenCloseKeyframeComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */"], data: { animation: [
  // #docregion trigger
  trigger("openClose", [
    state("open", style({
      height: "200px",
      opacity: 1,
      backgroundColor: "yellow"
    })),
    state("close", style({
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
  // #enddocregion trigger
] } }));
var OpenCloseKeyframeComponent = _OpenCloseKeyframeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenCloseKeyframeComponent, [{
    type: Component,
    args: [{ selector: "app-open-close", animations: [
      // #docregion trigger
      trigger("openClose", [
        state("open", style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })),
        state("close", style({
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
      // #enddocregion trigger
    ], template: `<button type="button" (click)="toggle()">Toggle Open/Close</button>

<div [@openClose]="isOpen ? 'open' : 'closed'"
  (@openClose.start)="onAnimationEvent($event)"
  (@openClose.done)="onAnimationEvent($event)"
  class="open-close-container">
  <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>
</div>
`, styles: ["/* src/content/examples/animations/src/app/open-close.component.css */\n:host {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(OpenCloseKeyframeComponent, { className: "OpenCloseKeyframeComponent", filePath: "src/content/examples/animations/src/app/open-close.component.1.ts", lineNumber: 51 });
})();
export {
  OpenCloseKeyframeComponent
};
//# sourceMappingURL=chunk-4BI3MQ7O.js.map
