import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IP3YSDXJ.js";
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
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2CX5BJWG.js";

// src/content/examples/forms-overview/src/app/template/favorite-color/favorite-color.component.ts
var _FavoriteColorTemplateComponent = class _FavoriteColorTemplateComponent {
  favoriteColor = "";
};
__name(_FavoriteColorTemplateComponent, "FavoriteColorTemplateComponent");
__publicField(_FavoriteColorTemplateComponent, "ɵfac", /* @__PURE__ */ __name(function FavoriteColorTemplateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FavoriteColorTemplateComponent)();
}, "FavoriteColorTemplateComponent_Factory"));
__publicField(_FavoriteColorTemplateComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _FavoriteColorTemplateComponent, selectors: [["app-template-favorite-color"]], decls: 2, vars: 1, consts: [["type", "text", 3, "ngModelChange", "ngModel"]], template: /* @__PURE__ */ __name(function FavoriteColorTemplateComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, " Favorite Color: ");
    ɵɵelementStart(1, "input", 0);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function FavoriteColorTemplateComponent_Template_input_ngModelChange_1_listener($event) {
      ɵɵtwoWayBindingSet(ctx.favoriteColor, $event) || (ctx.favoriteColor = $event);
      return $event;
    }, "FavoriteColorTemplateComponent_Template_input_ngModelChange_1_listener"));
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx.favoriteColor);
  }
}, "FavoriteColorTemplateComponent_Template"), dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 }));
var FavoriteColorTemplateComponent = _FavoriteColorTemplateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoriteColorTemplateComponent, [{
    type: Component,
    args: [{
      selector: "app-template-favorite-color",
      template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `,
      imports: [FormsModule]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(FavoriteColorTemplateComponent, { className: "FavoriteColorTemplateComponent", filePath: "src/content/examples/forms-overview/src/app/template/favorite-color/favorite-color.component.ts", lineNumber: 11 });
})();

export {
  FavoriteColorTemplateComponent
};
//# sourceMappingURL=chunk-XWLAOEZ6.js.map
