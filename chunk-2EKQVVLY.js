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

// src/content/examples/animations/src/app/open-close.component.ts
var _OpenCloseComponent = class _OpenCloseComponent {
  // #enddocregion events1, events, component
  logging = input(false, ...ngDevMode ? [{ debugName: "logging" }] : []);
  // #docregion component
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  // #enddocregion component
  // #docregion events1, events
  onAnimationEvent(event) {
    if (!this.logging) {
      return;
    }
    console.warn(`Animation Trigger: ${event.triggerName}`);
    console.warn(`Phase: ${event.phaseName}`);
    console.warn(`Total time: ${event.totalTime}`);
    console.warn(`From: ${event.fromState}`);
    console.warn(`To: ${event.toState}`);
    console.warn(`Element: ${event.element}`);
  }
};
__name(_OpenCloseComponent, "OpenCloseComponent");
__publicField(_OpenCloseComponent, "ɵfac", /* @__PURE__ */ __name(function OpenCloseComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenCloseComponent)();
}, "OpenCloseComponent_Factory"));
__publicField(_OpenCloseComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _OpenCloseComponent, selectors: [["app-open-close"]], inputs: { logging: [1, "logging"] }, decls: 5, vars: 2, consts: [["type", "button", 3, "click"], [1, "open-close-container"]], template: /* @__PURE__ */ __name(function OpenCloseComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function OpenCloseComponent_Template_button_click_0_listener() {
      return ctx.toggle();
    }, "OpenCloseComponent_Template_button_click_0_listener"));
    ɵɵtext(1, "Toggle Open/Close");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "div", 1);
    ɵɵlistener("@openClose.start", /* @__PURE__ */ __name(function OpenCloseComponent_Template_div_animation_openClose_start_2_listener($event) {
      return ctx.onAnimationEvent($event);
    }, "OpenCloseComponent_Template_div_animation_openClose_start_2_listener"))("@openClose.done", /* @__PURE__ */ __name(function OpenCloseComponent_Template_div_animation_openClose_done_2_listener($event) {
      return ctx.onAnimationEvent($event);
    }, "OpenCloseComponent_Template_div_animation_openClose_done_2_listener"));
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
}, "OpenCloseComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */"], data: { animation: [
  trigger("openClose", [
    // #docregion state1
    // ...
    // #enddocregion events1
    state("open", style({
      height: "200px",
      opacity: 1,
      backgroundColor: "yellow"
    })),
    // #enddocregion state1
    // #docregion state2
    state("closed", style({
      height: "100px",
      opacity: 0.8,
      backgroundColor: "blue"
    })),
    // #enddocregion state2, trigger-wildcard1
    // #docregion transition1
    transition("open => closed", [animate("1s")]),
    // #enddocregion transition1
    // #docregion transition2
    transition("closed => open", [animate("0.5s")]),
    // #enddocregion transition2, component
    // #docregion trigger-wildcard1
    transition("* => closed", [animate("1s")]),
    transition("* => open", [animate("0.5s")]),
    // #enddocregion trigger-wildcard1
    // #docregion trigger-wildcard2
    transition("open <=> closed", [animate("0.5s")]),
    // #enddocregion trigger-wildcard2
    // #docregion transition4
    transition("* => open", [animate("1s", style({ opacity: "*" }))]),
    // #enddocregion transition4
    transition("* => *", [animate("1s")])
    // #enddocregion trigger-transition
    // #docregion component, trigger-wildcard1, events1
  ])
] } }));
var OpenCloseComponent = _OpenCloseComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenCloseComponent, [{
    type: Component,
    args: [{ selector: "app-open-close", animations: [
      trigger("openClose", [
        // #docregion state1
        // ...
        // #enddocregion events1
        state("open", style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })),
        // #enddocregion state1
        // #docregion state2
        state("closed", style({
          height: "100px",
          opacity: 0.8,
          backgroundColor: "blue"
        })),
        // #enddocregion state2, trigger-wildcard1
        // #docregion transition1
        transition("open => closed", [animate("1s")]),
        // #enddocregion transition1
        // #docregion transition2
        transition("closed => open", [animate("0.5s")]),
        // #enddocregion transition2, component
        // #docregion trigger-wildcard1
        transition("* => closed", [animate("1s")]),
        transition("* => open", [animate("0.5s")]),
        // #enddocregion trigger-wildcard1
        // #docregion trigger-wildcard2
        transition("open <=> closed", [animate("0.5s")]),
        // #enddocregion trigger-wildcard2
        // #docregion transition4
        transition("* => open", [animate("1s", style({ opacity: "*" }))]),
        // #enddocregion transition4
        transition("* => *", [animate("1s")])
        // #enddocregion trigger-transition
        // #docregion component, trigger-wildcard1, events1
      ])
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
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(OpenCloseComponent, { className: "OpenCloseComponent", filePath: "src/content/examples/animations/src/app/open-close.component.ts", lineNumber: 59 });
})();

export {
  OpenCloseComponent
};
//# sourceMappingURL=chunk-2EKQVVLY.js.map
