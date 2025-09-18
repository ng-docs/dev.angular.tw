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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/hello-world/src/app/app.component-old.ts
var _HelloWorldComponent = class _HelloWorldComponent {
  message = "Hello World!";
};
__name(_HelloWorldComponent, "HelloWorldComponent");
__publicField(_HelloWorldComponent, "ɵfac", /* @__PURE__ */ __name(function HelloWorldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelloWorldComponent)();
}, "HelloWorldComponent_Factory"));
__publicField(_HelloWorldComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _HelloWorldComponent, selectors: [["hello-world"]], decls: 2, vars: 1, template: /* @__PURE__ */ __name(function HelloWorldComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h1");
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ctx.message);
  }
}, "HelloWorldComponent_Template"), styles: ["\n\nh1[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #8514f5,\n      #a029f1,\n      #bc33ed 50%,\n      #f637e3);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var HelloWorldComponent = _HelloWorldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelloWorldComponent, [{
    type: Component,
    args: [{ selector: "hello-world", template: "<h1>{{ message }}</h1>\n", styles: ["/* src/content/examples/hello-world/src/app/app.component.css */\nh1 {\n  background-image:\n    linear-gradient(\n      to right,\n      #8514f5,\n      #a029f1,\n      #bc33ed 50%,\n      #f637e3);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(HelloWorldComponent, { className: "HelloWorldComponent", filePath: "src/content/examples/hello-world/src/app/app.component-old.ts", lineNumber: 8 });
})();
export {
  HelloWorldComponent
};
//# sourceMappingURL=chunk-Z3NEI64X.js.map
