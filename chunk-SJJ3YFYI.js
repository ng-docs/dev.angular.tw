import {
  DatePipe
} from "./chunk-OV2CFM4K.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/birthday.component.ts
var _BirthdayComponent = class _BirthdayComponent {
  birthday = new Date(1988, 3, 15);
};
__name(_BirthdayComponent, "BirthdayComponent");
// April 15, 1988 -- since month parameter is zero-based
__publicField(_BirthdayComponent, "ɵfac", /* @__PURE__ */ __name(function BirthdayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BirthdayComponent)();
}, "BirthdayComponent_Factory"));
__publicField(_BirthdayComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _BirthdayComponent, selectors: [["app-birthday"]], decls: 3, vars: 3, template: /* @__PURE__ */ __name(function BirthdayComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "p");
    ɵɵtext(1);
    ɵɵpipe(2, "date");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1("The hero's birthday is ", ɵɵpipeBind1(2, 1, ctx.birthday));
  }
}, "BirthdayComponent_Template"), dependencies: [DatePipe], encapsulation: 2 }));
var BirthdayComponent = _BirthdayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BirthdayComponent, [{
    type: Component,
    args: [{ selector: "app-birthday", imports: [DatePipe], template: "<p>The hero's birthday is {{ birthday | date }}</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(BirthdayComponent, { className: "BirthdayComponent", filePath: "src/content/examples/pipes/src/app/birthday.component.ts", lineNumber: 9 });
})();

export {
  BirthdayComponent
};
//# sourceMappingURL=chunk-SJJ3YFYI.js.map
