import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/enter-and-leave/enter.ts
function Enter_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "div", 1);
    ɵɵanimateEnter("enter-animation");
    ɵɵdomElementStart(1, "p");
    ɵɵtext(2, "The box is entering.");
    ɵɵdomElementEnd()();
  }
}
__name(Enter_Conditional_6_Template, "Enter_Conditional_6_Template");
var _Enter = class _Enter {
  isShown = signal(false, ...ngDevMode ? [{ debugName: "isShown" }] : []);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
};
__name(_Enter, "Enter");
__publicField(_Enter, "ɵfac", /* @__PURE__ */ __name(function Enter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Enter)();
}, "Enter_Factory"));
__publicField(_Enter, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _Enter, selectors: [["app-enter"]], decls: 7, vars: 1, consts: [["type", "button", 3, "click"], [1, "enter-container"]], template: /* @__PURE__ */ __name(function Enter_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h2")(1, "code");
    ɵɵtext(2, "animate.enter");
    ɵɵdomElementEnd();
    ɵɵtext(3, " Example");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(4, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function Enter_Template_button_click_4_listener() {
      return ctx.toggle();
    }, "Enter_Template_button_click_4_listener"));
    ɵɵtext(5, "Toggle Element");
    ɵɵdomElementEnd();
    ɵɵconditionalCreate(6, Enter_Conditional_6_Template, 3, 0, "div", 1);
  }
  if (rf & 2) {
    ɵɵadvance(6);
    ɵɵconditional(ctx.isShown() ? 6 : -1);
  }
}, "Enter_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 200px;\n}\n.enter-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n}\n.enter-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slide-fade 1s;\n}\n@keyframes _ngcontent-%COMP%_slide-fade {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=enter.css.map */"] }));
var Enter = _Enter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Enter, [{
    type: Component,
    args: [{ selector: "app-enter", template: '<!-- #docplaster -->\n<h2><code>animate.enter</code> Example</h2>\n\n<button type="button" (click)="toggle()">Toggle Element</button>\n\n@if (isShown()) {\n  <div class="enter-container" animate.enter="enter-animation">\n    <p>The box is entering.</p>\n  </div>\n}\n', styles: ["/* src/content/examples/animations/src/app/enter-and-leave/enter.css */\n:host {\n  display: block;\n  height: 200px;\n}\n.enter-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n}\n.enter-animation {\n  animation: slide-fade 1s;\n}\n@keyframes slide-fade {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=enter.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(Enter, { className: "Enter", filePath: "src/content/examples/animations/src/app/enter-and-leave/enter.ts", lineNumber: 9 });
})();
export {
  Enter
};
//# sourceMappingURL=chunk-46E3HWL5.js.map
