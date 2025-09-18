import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/native-css/increment-decrement.component.ts
var _c0 = ["el"];
var _IncrementDecrementComponent = class _IncrementDecrementComponent {
  num = signal(0, ...ngDevMode ? [{ debugName: "num" }] : []);
  el = viewChild("el", ...ngDevMode ? [{ debugName: "el" }] : []);
  ngOnInit() {
    this.el()?.nativeElement.addEventListener("animationend", (ev) => {
      if (ev.animationName.endsWith("decrement") || ev.animationName.endsWith("increment")) {
        this.animationFinished();
      }
    });
  }
  modify(n) {
    const targetClass = n > 0 ? "increment" : "decrement";
    this.num.update((v) => v += n);
    this.el()?.nativeElement.classList.add(targetClass);
  }
  animationFinished() {
    this.el()?.nativeElement.classList.remove("increment", "decrement");
  }
  ngOnDestroy() {
    this.el()?.nativeElement.removeEventListener("animationend", this.animationFinished);
  }
};
__name(_IncrementDecrementComponent, "IncrementDecrementComponent");
__publicField(_IncrementDecrementComponent, "ɵfac", /* @__PURE__ */ __name(function IncrementDecrementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IncrementDecrementComponent)();
}, "IncrementDecrementComponent_Factory"));
__publicField(_IncrementDecrementComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _IncrementDecrementComponent, selectors: [["app-increment-decrement"]], viewQuery: /* @__PURE__ */ __name(function IncrementDecrementComponent_Query(rf, ctx) {
  if (rf & 1) {
    ɵɵviewQuerySignal(ctx.el, _c0, 5);
  }
  if (rf & 2) {
    ɵɵqueryAdvance();
  }
}, "IncrementDecrementComponent_Query"), decls: 11, vars: 1, consts: [["el", ""], [1, "controls"], ["type", "button", 3, "click"]], template: /* @__PURE__ */ __name(function IncrementDecrementComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "h3");
    ɵɵtext(1, "Increment and Decrement Example");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "section")(3, "p", null, 0);
    ɵɵtext(5);
    ɵɵdomElementEnd();
    ɵɵdomElementStart(6, "div", 1)(7, "button", 2);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function IncrementDecrementComponent_Template_button_click_7_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.modify(1));
    }, "IncrementDecrementComponent_Template_button_click_7_listener"));
    ɵɵtext(8, "+");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(9, "button", 2);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function IncrementDecrementComponent_Template_button_click_9_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.modify(-1));
    }, "IncrementDecrementComponent_Template_button_click_9_listener"));
    ɵɵtext(10, "-");
    ɵɵdomElementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵtextInterpolate1("Number ", ctx.num());
  }
}, "IncrementDecrementComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  font-size: 32px;\n  margin: 20px;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\np[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 2rem 0;\n  text-transform: uppercase;\n}\n.increment[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_increment 300ms;\n}\n.decrement[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_decrement 300ms;\n}\n.controls[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\nbutton[_ngcontent-%COMP%] {\n  font: inherit;\n  border: 0;\n  background: lightgray;\n  width: 50px;\n  border-radius: 10px;\n}\nbutton[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n@keyframes _ngcontent-%COMP%_increment {\n  33% {\n    color: green;\n    transform: scale(1.3, 1.2);\n  }\n  66% {\n    color: green;\n    transform: scale(1.2, 1.2);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n@keyframes _ngcontent-%COMP%_decrement {\n  33% {\n    color: red;\n    transform: scale(0.8, 0.9);\n  }\n  66% {\n    color: red;\n    transform: scale(0.9, 0.9);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n/*# sourceMappingURL=increment-decrement.component.css.map */"] }));
var IncrementDecrementComponent = _IncrementDecrementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncrementDecrementComponent, [{
    type: Component,
    args: [{ selector: "app-increment-decrement", template: '<h3>Increment and Decrement Example</h3>\n<section>\n  <p #el>Number {{ num() }}</p>\n  <div class="controls">\n    <button type="button" (click)="modify(1)">+</button>\n    <button type="button" (click)="modify(-1)">-</button>\n  </div>\n</section>\n', styles: ["/* src/content/examples/animations/src/app/native-css/increment-decrement.component.css */\n:host {\n  display: block;\n  font-size: 32px;\n  margin: 20px;\n  text-align: center;\n}\nsection {\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\np {\n  display: inline-block;\n  margin: 2rem 0;\n  text-transform: uppercase;\n}\n.increment {\n  animation: increment 300ms;\n}\n.decrement {\n  animation: decrement 300ms;\n}\n.controls {\n  padding-bottom: 2rem;\n}\nbutton {\n  font: inherit;\n  border: 0;\n  background: lightgray;\n  width: 50px;\n  border-radius: 10px;\n}\nbutton + button {\n  margin-left: 10px;\n}\n@keyframes increment {\n  33% {\n    color: green;\n    transform: scale(1.3, 1.2);\n  }\n  66% {\n    color: green;\n    transform: scale(1.2, 1.2);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n@keyframes decrement {\n  33% {\n    color: red;\n    transform: scale(0.8, 0.9);\n  }\n  66% {\n    color: red;\n    transform: scale(0.9, 0.9);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n/*# sourceMappingURL=increment-decrement.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(IncrementDecrementComponent, { className: "IncrementDecrementComponent", filePath: "src/content/examples/animations/src/app/native-css/increment-decrement.component.ts", lineNumber: 10 });
})();
export {
  IncrementDecrementComponent
};
//# sourceMappingURL=chunk-2ZKZIXXO.js.map
