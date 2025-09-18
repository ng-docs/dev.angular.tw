import {
  HeroListAutoComponent
} from "./chunk-7MEFCESB.js";
import {
  HEROES
} from "./chunk-LMTCVBF2.js";
import "./chunk-Q2QHJBJV.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/hero-list-auto-page.component.ts
var _HeroListAutoCalcPageComponent = class _HeroListAutoCalcPageComponent {
  heroes = HEROES.slice();
  onRemove(id) {
    this.heroes = this.heroes.filter((hero) => hero.id !== id);
  }
};
__name(_HeroListAutoCalcPageComponent, "HeroListAutoCalcPageComponent");
__publicField(_HeroListAutoCalcPageComponent, "ɵfac", /* @__PURE__ */ __name(function HeroListAutoCalcPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeroListAutoCalcPageComponent)();
}, "HeroListAutoCalcPageComponent_Factory"));
__publicField(_HeroListAutoCalcPageComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _HeroListAutoCalcPageComponent, selectors: [["app-hero-list-auto-page"]], decls: 4, vars: 1, consts: [[3, "remove", "heroes"]], template: /* @__PURE__ */ __name(function HeroListAutoCalcPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section")(1, "h2");
    ɵɵtext(2, "Automatic Calculation");
    ɵɵelementEnd();
    ɵɵelementStart(3, "app-hero-list-auto", 0);
    ɵɵlistener("remove", /* @__PURE__ */ __name(function HeroListAutoCalcPageComponent_Template_app_hero_list_auto_remove_3_listener($event) {
      return ctx.onRemove($event);
    }, "HeroListAutoCalcPageComponent_Template_app_hero_list_auto_remove_3_listener"));
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵproperty("heroes", ctx.heroes);
  }
}, "HeroListAutoCalcPageComponent_Template"), dependencies: [HeroListAutoComponent], encapsulation: 2 }));
var HeroListAutoCalcPageComponent = _HeroListAutoCalcPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroListAutoCalcPageComponent, [{
    type: Component,
    args: [{
      selector: "app-hero-list-auto-page",
      template: `
    <section>
      <h2>Automatic Calculation</h2>

      <app-hero-list-auto [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-auto>
    </section>
  `,
      imports: [HeroListAutoComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(HeroListAutoCalcPageComponent, { className: "HeroListAutoCalcPageComponent", filePath: "src/content/examples/animations/src/app/hero-list-auto-page.component.ts", lineNumber: 16 });
})();
export {
  HeroListAutoCalcPageComponent
};
//# sourceMappingURL=chunk-VZH2WM7M.js.map
