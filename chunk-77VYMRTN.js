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
  ɵɵdomListener,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/birthday-formatting.component.ts
var _BirthdayFormattingComponent = class _BirthdayFormattingComponent {
  birthday = new Date(1988, 3, 15);
  // April 15, 1988 -- since month parameter is zero-based
  toggle = true;
  get format() {
    return this.toggle ? "mediumDate" : "fullDate";
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
};
__name(_BirthdayFormattingComponent, "BirthdayFormattingComponent");
__publicField(_BirthdayFormattingComponent, "ɵfac", /* @__PURE__ */ __name(function BirthdayFormattingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BirthdayFormattingComponent)();
}, "BirthdayFormattingComponent_Factory"));
__publicField(_BirthdayFormattingComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _BirthdayFormattingComponent, selectors: [["app-birthday-formatting"]], decls: 8, vars: 9, consts: [["type", "button", 3, "click"]], template: /* @__PURE__ */ __name(function BirthdayFormattingComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "p");
    ɵɵtext(1);
    ɵɵpipe(2, "date");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(3, "p");
    ɵɵtext(4);
    ɵɵpipe(5, "date");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(6, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function BirthdayFormattingComponent_Template_button_click_6_listener() {
      return ctx.toggleFormat();
    }, "BirthdayFormattingComponent_Template_button_click_6_listener"));
    ɵɵtext(7, "Toggle Format");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1("The hero's birthday is ", ɵɵpipeBind2(2, 3, ctx.birthday, "shortDate"), ' in the "shortDate" format.');
    ɵɵadvance(3);
    ɵɵtextInterpolate2("The hero's birthday is ", ɵɵpipeBind2(5, 6, ctx.birthday, ctx.format), ' in "', ctx.format, '" format. Click the toggle button to change formats.');
  }
}, "BirthdayFormattingComponent_Template"), dependencies: [DatePipe], encapsulation: 2 }));
var BirthdayFormattingComponent = _BirthdayFormattingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BirthdayFormattingComponent, [{
    type: Component,
    args: [{ selector: "app-birthday-formatting", imports: [DatePipe], template: `<p>The hero's birthday is {{ birthday | date:"shortDate" }} in the "shortDate" format.</p>

<p>The hero's birthday is {{ birthday | date:format }} in "{{ format }}" format.
  Click the toggle button to change formats.</p>

<button type="button" (click)="toggleFormat()">Toggle Format</button>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(BirthdayFormattingComponent, { className: "BirthdayFormattingComponent", filePath: "src/content/examples/pipes/src/app/birthday-formatting.component.ts", lineNumber: 9 });
})();

export {
  BirthdayFormattingComponent
};
//# sourceMappingURL=chunk-77VYMRTN.js.map
