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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/attribute-directives/src/app/app.component.1.ts
var _AppComponent = class _AppComponent {
  color = "yellow";
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 10, vars: 2, consts: [["appHighlight", ""], ["appHighlight", "yellow"], [3, "appHighlight"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1");
    ɵɵtext(1, "My First Attribute Directive");
    ɵɵelementEnd();
    ɵɵelementStart(2, "p", 0);
    ɵɵtext(3, "Highlight me!");
    ɵɵelementEnd();
    ɵɵelementStart(4, "p", 1);
    ɵɵtext(5, "Highlighted in yellow");
    ɵɵelementEnd();
    ɵɵelementStart(6, "p", 2);
    ɵɵtext(7, "Highlighted in orange");
    ɵɵelementEnd();
    ɵɵelementStart(8, "p", 2);
    ɵɵtext(9, "Highlighted with parent component's color");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(6);
    ɵɵproperty("appHighlight", "orange");
    ɵɵadvance(2);
    ɵɵproperty("appHighlight", ctx.color);
  }
}, "AppComponent_Template"), dependencies: [HighlightDirective], encapsulation: 2 }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [HighlightDirective], template: `<!-- #docregion -->
<h1>My First Attribute Directive</h1>
<!-- #docregion applied -->
<p appHighlight>Highlight me!</p>
<!-- #enddocregion applied  -->

<p appHighlight="yellow">Highlighted in yellow</p>
<p [appHighlight]="'orange'">Highlighted in orange</p>

<p [appHighlight]="color">Highlighted with parent component's color</p>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/attribute-directives/src/app/app.component.1.ts", lineNumber: 10 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-6YV7AFQI.js.map
