import {
  HeroListEnterLeaveComponent
} from "./chunk-VIZ2PULT.js";
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

// src/content/examples/animations/src/app/hero-list-enter-leave-page.component.ts
var _HeroListEnterLeavePageComponent = class _HeroListEnterLeavePageComponent {
  heroes = HEROES.slice();
  onRemove(id) {
    this.heroes = this.heroes.filter((hero) => hero.id !== id);
  }
};
__name(_HeroListEnterLeavePageComponent, "HeroListEnterLeavePageComponent");
__publicField(_HeroListEnterLeavePageComponent, "ɵfac", /* @__PURE__ */ __name(function HeroListEnterLeavePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeroListEnterLeavePageComponent)();
}, "HeroListEnterLeavePageComponent_Factory"));
__publicField(_HeroListEnterLeavePageComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _HeroListEnterLeavePageComponent, selectors: [["app-hero-list-enter-leave-page"]], decls: 4, vars: 1, consts: [[3, "remove", "heroes"]], template: /* @__PURE__ */ __name(function HeroListEnterLeavePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section")(1, "h2");
    ɵɵtext(2, "Enter/Leave");
    ɵɵelementEnd();
    ɵɵelementStart(3, "app-hero-list-enter-leave", 0);
    ɵɵlistener("remove", /* @__PURE__ */ __name(function HeroListEnterLeavePageComponent_Template_app_hero_list_enter_leave_remove_3_listener($event) {
      return ctx.onRemove($event);
    }, "HeroListEnterLeavePageComponent_Template_app_hero_list_enter_leave_remove_3_listener"));
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵproperty("heroes", ctx.heroes);
  }
}, "HeroListEnterLeavePageComponent_Template"), dependencies: [HeroListEnterLeaveComponent], encapsulation: 2 }));
var HeroListEnterLeavePageComponent = _HeroListEnterLeavePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroListEnterLeavePageComponent, [{
    type: Component,
    args: [{
      selector: "app-hero-list-enter-leave-page",
      template: `
    <section>
      <h2>Enter/Leave</h2>

      <app-hero-list-enter-leave [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-enter-leave>
    </section>
  `,
      imports: [HeroListEnterLeaveComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(HeroListEnterLeavePageComponent, { className: "HeroListEnterLeavePageComponent", filePath: "src/content/examples/animations/src/app/hero-list-enter-leave-page.component.ts", lineNumber: 16 });
})();
export {
  HeroListEnterLeavePageComponent
};
//# sourceMappingURL=chunk-5GIQX7NN.js.map
