import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/native-css/stagger.component.ts
function StaggerComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "li", 3);
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵstyleMap(ɵɵinterpolate1("--index: ", item_r1));
    ɵɵadvance();
    ɵɵtextInterpolate(item_r1);
  }
}
__name(StaggerComponent_Conditional_4_For_2_Template, "StaggerComponent_Conditional_4_For_2_Template");
function StaggerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "ul", 1);
    ɵɵrepeaterCreate(1, StaggerComponent_Conditional_4_For_2_Template, 2, 4, "li", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.items);
  }
}
__name(StaggerComponent_Conditional_4_Template, "StaggerComponent_Conditional_4_Template");
var _StaggerComponent = class _StaggerComponent {
  show = signal(true, ...ngDevMode ? [{ debugName: "show" }] : []);
  items = [1, 2, 3];
  refresh() {
    this.show.set(false);
    setTimeout(() => {
      this.show.set(true);
    }, 10);
  }
};
__name(_StaggerComponent, "StaggerComponent");
__publicField(_StaggerComponent, "ɵfac", /* @__PURE__ */ __name(function StaggerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaggerComponent)();
}, "StaggerComponent_Factory"));
__publicField(_StaggerComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _StaggerComponent, selectors: [["app-stagger"]], decls: 5, vars: 1, consts: [["type", "button", 3, "click"], [1, "items"], [1, "item", 3, "style"], [1, "item"]], template: /* @__PURE__ */ __name(function StaggerComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h1");
    ɵɵtext(1, "Stagger Example");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function StaggerComponent_Template_button_click_2_listener() {
      return ctx.refresh();
    }, "StaggerComponent_Template_button_click_2_listener"));
    ɵɵtext(3, "Refresh");
    ɵɵdomElementEnd();
    ɵɵconditionalCreate(4, StaggerComponent_Conditional_4_Template, 3, 0, "ul", 1);
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵconditional(ctx.show() ? 4 : -1);
  }
}, "StaggerComponent_Template"), styles: ["\n\n.items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  transition-property: opacity, transform;\n  transition-duration: 500ms;\n  transition-delay: calc(200ms * var(--index));\n}\n@starting-style {\n  .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n}\n/*# sourceMappingURL=stagger.component.css.map */"] }));
var StaggerComponent = _StaggerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaggerComponent, [{
    type: Component,
    args: [{ selector: "app-stagger", template: '<!-- #docplaster -->\n<h1>Stagger Example</h1>\n<button type="button" (click)="refresh()">Refresh</button>\n@if (show()) {\n  <ul class="items">\n    @for(item of items; track item) {\n      <li class="item" style="--index: {{ item }}">{{item}}</li>\n    }\n  </ul>\n}\n', styles: ["/* src/content/examples/animations/src/app/native-css/stagger.component.css */\n.items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.items .item {\n  transition-property: opacity, transform;\n  transition-duration: 500ms;\n  transition-delay: calc(200ms * var(--index));\n}\n@starting-style {\n  .items .item {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n}\n/*# sourceMappingURL=stagger.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(StaggerComponent, { className: "StaggerComponent", filePath: "src/content/examples/animations/src/app/native-css/stagger.component.ts", lineNumber: 9 });
})();
export {
  StaggerComponent
};
//# sourceMappingURL=chunk-Z5UXVTFI.js.map
