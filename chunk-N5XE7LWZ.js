import {
  DatePipe,
  UpperCasePipe
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
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/birthday-pipe-chaining.component.ts
var _BirthdayPipeChainingComponent = class _BirthdayPipeChainingComponent {
  birthday = new Date(1988, 3, 15);
};
__name(_BirthdayPipeChainingComponent, "BirthdayPipeChainingComponent");
// April 15, 1988 -- since month parameter is zero-based
__publicField(_BirthdayPipeChainingComponent, "ɵfac", /* @__PURE__ */ __name(function BirthdayPipeChainingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BirthdayPipeChainingComponent)();
}, "BirthdayPipeChainingComponent_Factory"));
__publicField(_BirthdayPipeChainingComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _BirthdayPipeChainingComponent, selectors: [["app-birthday-pipe-chaining"]], decls: 8, vars: 11, template: /* @__PURE__ */ __name(function BirthdayPipeChainingComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "p");
    ɵɵtext(1);
    ɵɵpipe(2, "date");
    ɵɵpipe(3, "uppercase");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(4, "p");
    ɵɵtext(5);
    ɵɵpipe(6, "date");
    ɵɵpipe(7, "uppercase");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" The chained hero's uppercase birthday is ", ɵɵpipeBind1(3, 4, ɵɵpipeBind1(2, 2, ctx.birthday)), "\n");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(` The chained hero's uppercase birthday in "fullDate" format is `, ɵɵpipeBind1(7, 9, ɵɵpipeBind2(6, 6, ctx.birthday, "fullDate")), "\n");
  }
}, "BirthdayPipeChainingComponent_Template"), dependencies: [DatePipe, UpperCasePipe], encapsulation: 2 }));
var BirthdayPipeChainingComponent = _BirthdayPipeChainingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BirthdayPipeChainingComponent, [{
    type: Component,
    args: [{ selector: "app-birthday-pipe-chaining", imports: [DatePipe, UpperCasePipe], template: `<p>
  The chained hero's uppercase birthday is
  {{ birthday | date | uppercase }}
</p>

<p>
  The chained hero's uppercase birthday in "fullDate" format is
  {{ birthday | date:'fullDate' | uppercase }}
</p>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(BirthdayPipeChainingComponent, { className: "BirthdayPipeChainingComponent", filePath: "src/content/examples/pipes/src/app/birthday-pipe-chaining.component.ts", lineNumber: 9 });
})();

export {
  BirthdayPipeChainingComponent
};
//# sourceMappingURL=chunk-N5XE7LWZ.js.map
