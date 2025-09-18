import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵanimateLeaveListener,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/enter-and-leave/leave-event.ts
function LeaveEvent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 1);
    ɵɵanimateLeaveListener(/* @__PURE__ */ __name(function LeaveEvent_Conditional_6_Template_div_animateleave_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.leavingFn($event));
    }, "LeaveEvent_Conditional_6_Template_div_animateleave_0_listener"));
    ɵɵdomElementStart(1, "p");
    ɵɵtext(2, "Goodbye");
    ɵɵdomElementEnd()();
  }
}
__name(LeaveEvent_Conditional_6_Template, "LeaveEvent_Conditional_6_Template");
var _LeaveEvent = class _LeaveEvent {
  isShown = signal(false, ...ngDevMode ? [{ debugName: "isShown" }] : []);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
  leavingFn(event) {
    event.animationComplete();
  }
};
__name(_LeaveEvent, "LeaveEvent");
__publicField(_LeaveEvent, "ɵfac", /* @__PURE__ */ __name(function LeaveEvent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeaveEvent)();
}, "LeaveEvent_Factory"));
__publicField(_LeaveEvent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _LeaveEvent, selectors: [["app-leave-binding"]], decls: 7, vars: 1, consts: [["type", "button", 3, "click"], [1, "leave-container"]], template: /* @__PURE__ */ __name(function LeaveEvent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h2")(1, "code");
    ɵɵtext(2, "animate.leave");
    ɵɵdomElementEnd();
    ɵɵtext(3, " Function Example");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(4, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function LeaveEvent_Template_button_click_4_listener() {
      return ctx.toggle();
    }, "LeaveEvent_Template_button_click_4_listener"));
    ɵɵtext(5, "Toggle Element");
    ɵɵdomElementEnd();
    ɵɵconditionalCreate(6, LeaveEvent_Conditional_6_Template, 3, 0, "div", 1);
  }
  if (rf & 2) {
    ɵɵadvance(6);
    ɵɵconditional(ctx.isShown() ? 6 : -1);
  }
}, "LeaveEvent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 200px;\n}\n.leave-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 200ms ease-in;\n}\n@starting-style {\n  .leave-container[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n}\n.leaving[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 500ms ease-out, transform 500ms ease-out;\n}\n/*# sourceMappingURL=leave-event.css.map */"] }));
var LeaveEvent = _LeaveEvent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveEvent, [{
    type: Component,
    args: [{ selector: "app-leave-binding", template: '<!-- #docplaster -->\n<h2><code>animate.leave</code> Function Example</h2>\n\n<button type="button" (click)="toggle()">Toggle Element</button>\n\n@if (isShown()) {\n  <div class="leave-container" (animate.leave)="leavingFn($event)">\n    <p>Goodbye</p>\n  </div>\n}\n', styles: ["/* src/content/examples/animations/src/app/enter-and-leave/leave-event.css */\n:host {\n  display: block;\n  height: 200px;\n}\n.leave-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 200ms ease-in;\n}\n@starting-style {\n  .leave-container {\n    opacity: 0;\n  }\n}\n.leaving {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 500ms ease-out, transform 500ms ease-out;\n}\n/*# sourceMappingURL=leave-event.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(LeaveEvent, { className: "LeaveEvent", filePath: "src/content/examples/animations/src/app/enter-and-leave/leave-event.ts", lineNumber: 9 });
})();
export {
  LeaveEvent
};
//# sourceMappingURL=chunk-SXXUVIPK.js.map
