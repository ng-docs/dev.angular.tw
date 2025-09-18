import {
  HighlightDirective
} from "./chunk-YVDGH5GJ.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdisableBindings,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵenableBindings,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/attribute-directives/src/app/app.component.ts
var _AppComponent = class _AppComponent {
  color = "";
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 33, vars: 4, consts: [["type", "radio", "name", "colors", 3, "click"], [3, "appHighlight"], ["defaultColor", "violet", 3, "appHighlight"], ["appHighlight", "orange"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1");
    ɵɵtext(1, "My First Attribute Directive");
    ɵɵelementEnd();
    ɵɵelementStart(2, "h2");
    ɵɵtext(3, "Pick a highlight color");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div")(5, "input", 0);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_input_click_5_listener() {
      return ctx.color = "lightgreen";
    }, "AppComponent_Template_input_click_5_listener"));
    ɵɵelementEnd();
    ɵɵtext(6, "Green ");
    ɵɵelementStart(7, "input", 0);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_input_click_7_listener() {
      return ctx.color = "yellow";
    }, "AppComponent_Template_input_click_7_listener"));
    ɵɵelementEnd();
    ɵɵtext(8, "Yellow ");
    ɵɵelementStart(9, "input", 0);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_input_click_9_listener() {
      return ctx.color = "cyan";
    }, "AppComponent_Template_input_click_9_listener"));
    ɵɵelementEnd();
    ɵɵtext(10, "Cyan\n");
    ɵɵelementEnd();
    ɵɵelementStart(11, "p", 1);
    ɵɵtext(12, "Highlight me!");
    ɵɵelementEnd();
    ɵɵelementStart(13, "p", 2);
    ɵɵtext(14, " Highlight me too!\n");
    ɵɵelementEnd();
    ɵɵelement(15, "hr");
    ɵɵelementStart(16, "h2");
    ɵɵtext(17, "Mouse over the following lines to see fixed highlights");
    ɵɵelementEnd();
    ɵɵelementStart(18, "p", 1);
    ɵɵtext(19, "Highlighted in yellow");
    ɵɵelementEnd();
    ɵɵelementStart(20, "p", 3);
    ɵɵtext(21, "Highlighted in orange");
    ɵɵelementEnd();
    ɵɵelement(22, "hr");
    ɵɵelementStart(23, "h2");
    ɵɵtext(24, "ngNonBindable");
    ɵɵelementEnd();
    ɵɵelementStart(25, "p");
    ɵɵtext(26, "Use ngNonBindable to stop evaluation.");
    ɵɵelementEnd();
    ɵɵelementStart(27, "p");
    ɵɵdisableBindings();
    ɵɵtext(28, "This should not evaluate: {{ 1 + 1 }}");
    ɵɵenableBindings();
    ɵɵelementEnd();
    ɵɵelementStart(29, "h3");
    ɵɵtext(30, "ngNonBindable with a directive");
    ɵɵelementEnd();
    ɵɵelementStart(31, "div", 1);
    ɵɵdisableBindings();
    ɵɵtext(32, "This should not evaluate: {{ 1 +1 }}, but will highlight yellow.\n");
    ɵɵenableBindings();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(11);
    ɵɵproperty("appHighlight", ctx.color);
    ɵɵadvance(2);
    ɵɵproperty("appHighlight", ctx.color);
    ɵɵadvance(5);
    ɵɵproperty("appHighlight", "yellow");
    ɵɵadvance(13);
    ɵɵproperty("appHighlight", "yellow");
  }
}, "AppComponent_Template"), dependencies: [HighlightDirective], encapsulation: 2 }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [HighlightDirective], template: `<!-- #docregion v2, -->
<h1>My First Attribute Directive</h1>

<h2>Pick a highlight color</h2>
<div>
  <input type="radio" name="colors" (click)="color='lightgreen'">Green
  <input type="radio" name="colors" (click)="color='yellow'">Yellow
  <input type="radio" name="colors" (click)="color='cyan'">Cyan
</div>
<!-- #docregion color -->
<p [appHighlight]="color">Highlight me!</p>
<!-- #enddocregion color, v2 -->

<!-- #docregion defaultColor -->
<p [appHighlight]="color" defaultColor="violet">
  Highlight me too!
</p>
<!-- #enddocregion defaultColor, -->

<hr>
<h2>Mouse over the following lines to see fixed highlights</h2>

<p [appHighlight]="'yellow'">Highlighted in yellow</p>
<p appHighlight="orange">Highlighted in orange</p>

<hr>

<h2>ngNonBindable</h2>
<!-- #docregion ngNonBindable -->
<p>Use ngNonBindable to stop evaluation.</p>
<p ngNonBindable>This should not evaluate: {{ 1 + 1 }}</p>
<!-- #enddocregion ngNonBindable -->

<!-- #docregion ngNonBindable-with-directive -->
<h3>ngNonBindable with a directive</h3>
<div ngNonBindable [appHighlight]="'yellow'">This should not evaluate: {{ 1 +1 }}, but will highlight yellow.
</div>
<!-- #enddocregion ngNonBindable-with-directive -->
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/attribute-directives/src/app/app.component.ts", lineNumber: 11 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-K2SIPO3N.js.map
