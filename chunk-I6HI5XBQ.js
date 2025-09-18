import {
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
  ɵɵdomListener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/precedence.component.ts
var _PrecedenceComponent = class _PrecedenceComponent {
  isLeft = true;
  toggleDirection() {
    this.isLeft = !this.isLeft;
  }
  isGood = true;
  toggleGood() {
    this.isGood = !this.isGood;
  }
  isUpper = true;
  toggleCase() {
    this.isUpper = !this.isUpper;
  }
};
__name(_PrecedenceComponent, "PrecedenceComponent");
__publicField(_PrecedenceComponent, "ɵfac", /* @__PURE__ */ __name(function PrecedenceComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrecedenceComponent)();
}, "PrecedenceComponent_Factory"));
__publicField(_PrecedenceComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _PrecedenceComponent, selectors: [["app-pipe-precedence"]], decls: 40, vars: 12, consts: [["type", "button", 3, "click"]], template: /* @__PURE__ */ __name(function PrecedenceComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "p");
    ɵɵtext(1, " In most cases, you'll wrap the entire ternary expression in parentheses before passing the result to a pipe.\n");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "p");
    ɵɵtext(3, " Example: ");
    ɵɵdomElementStart(4, "code");
    ɵɵtext(5, "(isLeft ? 'left' : 'right') | uppercase");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(6, "b");
    ɵɵtext(7);
    ɵɵpipe(8, "uppercase");
    ɵɵdomElementEnd()();
    ɵɵdomElementStart(9, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function PrecedenceComponent_Template_button_click_9_listener() {
      return ctx.toggleDirection();
    }, "PrecedenceComponent_Template_button_click_9_listener"));
    ɵɵtext(10, "Toggle 'isLeft'");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(11, "p");
    ɵɵtext(12, "Without parentheses, only the second value is uppercased.");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(13, "p");
    ɵɵtext(14, "Example: ");
    ɵɵdomElementStart(15, "code");
    ɵɵtext(16, "isGood ? 'good' : 'bad' | uppercase");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(17, "b");
    ɵɵtext(18);
    ɵɵpipe(19, "uppercase");
    ɵɵdomElementEnd()();
    ɵɵdomElementStart(20, "p");
    ɵɵtext(21, "Same as: ");
    ɵɵdomElementStart(22, "code");
    ɵɵtext(23, "isGood ? 'good' : ('bad' | uppercase)");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(24, "b");
    ɵɵtext(25);
    ɵɵpipe(26, "uppercase");
    ɵɵdomElementEnd()();
    ɵɵdomElementStart(27, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function PrecedenceComponent_Template_button_click_27_listener() {
      return ctx.toggleGood();
    }, "PrecedenceComponent_Template_button_click_27_listener"));
    ɵɵtext(28, "Toggle 'isGood'");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(29, "p");
    ɵɵtext(30, "If only one of the values should be passed to a pipe, be explicit and surround that value with parentheses.");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(31, "p");
    ɵɵtext(32, "Example: ");
    ɵɵdomElementStart(33, "code");
    ɵɵtext(34, "isUpper ? ('upper' | uppercase) : 'lower'");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(35, "b");
    ɵɵtext(36);
    ɵɵpipe(37, "uppercase");
    ɵɵdomElementEnd()();
    ɵɵdomElementStart(38, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function PrecedenceComponent_Template_button_click_38_listener() {
      return ctx.toggleCase();
    }, "PrecedenceComponent_Template_button_click_38_listener"));
    ɵɵtext(39, "Toggle 'isUpper'");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(7);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 4, ctx.isLeft ? "left" : "right"), " ");
    ɵɵadvance(11);
    ɵɵtextInterpolate1(" ", ctx.isGood ? "good" : ɵɵpipeBind1(19, 6, "bad"), " ");
    ɵɵadvance(7);
    ɵɵtextInterpolate1(" ", ctx.isGood ? "good" : ɵɵpipeBind1(26, 8, "bad"), " ");
    ɵɵadvance(11);
    ɵɵtextInterpolate1(" ", ctx.isUpper ? ɵɵpipeBind1(37, 10, "upper") : "lower", " ");
  }
}, "PrecedenceComponent_Template"), dependencies: [UpperCasePipe], styles: ["\n\ncode[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background-color: #eee;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=precedence.component.css.map */"] }));
var PrecedenceComponent = _PrecedenceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrecedenceComponent, [{
    type: Component,
    args: [{ selector: "app-pipe-precedence", imports: [UpperCasePipe], template: `<!-- #docregion -->
<!-- #docregion precedence -->
<p>
  In most cases, you'll wrap the entire ternary expression in parentheses before passing the result to a pipe.
</p>

<p>
  Example: <code>(isLeft ? 'left' : 'right') | uppercase</code>
  <b>
    {{ (isLeft ? 'left' : 'right') | uppercase }}
  </b>
</p>
<button type="button" (click)="toggleDirection()">Toggle 'isLeft'</button>


<p>Without parentheses, only the second value is uppercased.</p>

<p>Example: <code>isGood ? 'good' : 'bad' | uppercase</code>
  <b>
    {{ isGood ? 'good' : 'bad' | uppercase }}
  </b>
</p>

<p>Same as: <code>isGood ? 'good' : ('bad' | uppercase)</code>
  <b>
    {{ isGood ? 'good' : ('bad' | uppercase) }}
  </b>
</p>
<button type="button" (click)="toggleGood()">Toggle 'isGood'</button>


<p>If only one of the values should be passed to a pipe,
  be explicit and surround that value with parentheses.</p>

<p>Example: <code>isUpper ? ('upper' | uppercase) : 'lower'</code>
  <b>
    {{ isUpper ? ('upper' | uppercase) : 'lower' }}
  </b>
</p>
<button type="button" (click)="toggleCase()">Toggle 'isUpper'</button>
<!-- #enddocregion precedence -->
`, styles: ["/* angular:styles/component:scss;eadff12050fc79ed49d20cfcea816375d9fc8cc98718f40bdbf0b999f670ab4d;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/33/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/precedence.component.ts */\ncode {\n  font-family: monospace;\n  background-color: #eee;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=precedence.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PrecedenceComponent, { className: "PrecedenceComponent", filePath: "src/content/examples/pipes/src/app/precedence.component.ts", lineNumber: 10 });
})();

export {
  PrecedenceComponent
};
//# sourceMappingURL=chunk-I6HI5XBQ.js.map
