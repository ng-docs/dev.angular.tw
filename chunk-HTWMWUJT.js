import {
  HeroComponent,
  heroes
} from "./chunk-M3OWZDC6.js";
import {
  ConfusedHeroComponent,
  HappyHeroComponent,
  SadHeroComponent,
  UnknownHeroComponent,
  heroSwitchComponents
} from "./chunk-H2YMCHPS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IP3YSDXJ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  Directive,
  TemplateRef,
  ViewContainerRef,
  __name,
  __publicField,
  effect,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2CX5BJWG.js";

// src/content/examples/structural-directives/src/app/trigonometry.directive.ts
var _TrigonometryDirective = class _TrigonometryDirective {
  viewContainerRef;
  templateRef;
  isViewCreated = false;
  context = new TrigonometryContext();
  angleInDegrees = input.required(...ngDevMode ? [{ debugName: "angleInDegrees", alias: "appTrigonometry" }] : [{ alias: "appTrigonometry" }]);
  constructor(viewContainerRef, templateRef) {
    this.viewContainerRef = viewContainerRef;
    this.templateRef = templateRef;
    effect(() => {
      const angleInRadians = toRadians(this.angleInDegrees());
      this.context.sin = Math.sin(angleInRadians);
      this.context.cos = Math.cos(angleInRadians);
      this.context.tan = Math.tan(angleInRadians);
      if (!this.isViewCreated) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
        this.isViewCreated = true;
      }
    });
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
};
__name(_TrigonometryDirective, "TrigonometryDirective");
__publicField(_TrigonometryDirective, "ɵfac", /* @__PURE__ */ __name(function TrigonometryDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrigonometryDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
}, "TrigonometryDirective_Factory"));
__publicField(_TrigonometryDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({ type: _TrigonometryDirective, selectors: [["", "appTrigonometry", ""]], inputs: { angleInDegrees: [1, "appTrigonometry", "angleInDegrees"] } }));
var TrigonometryDirective = _TrigonometryDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrigonometryDirective, [{
    type: Directive,
    args: [{
      selector: "[appTrigonometry]"
    }]
  }], () => [{ type: ViewContainerRef }, { type: TemplateRef }], null);
})();
var _TrigonometryContext = class _TrigonometryContext {
  sin = 0;
  cos = 0;
  tan = 0;
};
__name(_TrigonometryContext, "TrigonometryContext");
var TrigonometryContext = _TrigonometryContext;
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
__name(toRadians, "toRadians");

// src/content/examples/structural-directives/src/app/app.component.ts
function AppComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.hero.name);
  }
}
__name(AppComponent_div_5_Template, "AppComponent_div_5_Template");
function AppComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hero_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(hero_r2.name);
  }
}
__name(AppComponent_li_9_Template, "AppComponent_li_9_Template");
function AppComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1, " Expression is true and ngIf is true. This paragraph is in the DOM.\n");
    ɵɵelementEnd();
  }
}
__name(AppComponent_p_13_Template, "AppComponent_p_13_Template");
function AppComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1, " Expression is false and ngIf is false. This paragraph is not in the DOM.\n");
    ɵɵelementEnd();
  }
}
__name(AppComponent_p_14_Template, "AppComponent_p_14_Template");
function AppComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.hero.name);
  }
}
__name(AppComponent_ng_template_23_Template, "AppComponent_ng_template_23_Template");
function AppComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" and saw ", ctx_r0.hero.name, ". I waved ");
  }
}
__name(AppComponent_ng_container_33_Template, "AppComponent_ng_container_33_Template");
function AppComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" and saw ", ctx_r0.hero.name, ". I waved ");
  }
}
__name(AppComponent_span_37_Template, "AppComponent_span_37_Template");
function AppComponent_span_49_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span")(1, "option", 32);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const h_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngValue", h_r3);
    ɵɵadvance();
    ɵɵtextInterpolate2("", h_r3.name, " (", h_r3.emotion, ")");
  }
}
__name(AppComponent_span_49_span_1_Template, "AppComponent_span_49_span_1_Template");
function AppComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, AppComponent_span_49_span_1_Template, 3, 3, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const h_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showSad || h_r3.emotion !== "sad");
  }
}
__name(AppComponent_span_49_Template, "AppComponent_span_49_Template");
function AppComponent_ng_container_60_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "option", 32);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const h_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngValue", h_r4);
    ɵɵadvance();
    ɵɵtextInterpolate2("", h_r4.name, " (", h_r4.emotion, ")");
  }
}
__name(AppComponent_ng_container_60_ng_container_1_Template, "AppComponent_ng_container_60_ng_container_1_Template");
function AppComponent_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AppComponent_ng_container_60_ng_container_1_Template, 3, 3, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const h_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showSad || h_r4.emotion !== "sad");
  }
}
__name(AppComponent_ng_container_60_Template, "AppComponent_ng_container_60_Template");
function AppComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hero_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const odd_r7 = ctx.odd;
    ɵɵclassProp("odd", odd_r7);
    ɵɵadvance();
    ɵɵtextInterpolate2(" (", i_r6, ") ", hero_r5.name, "\n");
  }
}
__name(AppComponent_div_69_Template, "AppComponent_div_69_Template");
function AppComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hero_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const odd_r10 = ctx.odd;
    ɵɵclassProp("odd", odd_r10);
    ɵɵadvance();
    ɵɵtextInterpolate2(" (", i_r9, ") ", hero_r8.name, " ");
  }
}
__name(AppComponent_ng_template_72_Template, "AppComponent_ng_template_72_Template");
function AppComponent_label_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 33)(1, "input", 34);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_label_79_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r0 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r0.hero, $event) || (ctx_r0.hero = $event);
      return ɵɵresetView($event);
    }, "AppComponent_label_79_Template_input_ngModelChange_1_listener"));
    ɵɵelementEnd();
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const h_r12 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("for", ɵɵinterpolate1("hero-", h_r12));
    ɵɵadvance();
    ɵɵproperty("id", ɵɵinterpolate1("hero-", h_r12));
    ɵɵtwoWayProperty("ngModel", ctx_r0.hero);
    ɵɵproperty("value", h_r12);
    ɵɵadvance();
    ɵɵtextInterpolate1("", h_r12.name, " ");
  }
}
__name(AppComponent_label_79_Template, "AppComponent_label_79_Template");
function AppComponent_app_happy_hero_86_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-happy-hero", 35);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hero", ctx_r0.hero);
  }
}
__name(AppComponent_app_happy_hero_86_Template, "AppComponent_app_happy_hero_86_Template");
function AppComponent_app_sad_hero_87_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-sad-hero", 35);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hero", ctx_r0.hero);
  }
}
__name(AppComponent_app_sad_hero_87_Template, "AppComponent_app_sad_hero_87_Template");
function AppComponent_app_confused_hero_88_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-confused-hero", 35);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hero", ctx_r0.hero);
  }
}
__name(AppComponent_app_confused_hero_88_Template, "AppComponent_app_confused_hero_88_Template");
function AppComponent_app_unknown_hero_89_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-unknown-hero", 35);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hero", ctx_r0.hero);
  }
}
__name(AppComponent_app_unknown_hero_89_Template, "AppComponent_app_unknown_hero_89_Template");
function AppComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-happy-hero", 35);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hero", ctx_r0.hero);
  }
}
__name(AppComponent_ng_template_93_Template, "AppComponent_ng_template_93_Template");
function AppComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-sad-hero", 35);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hero", ctx_r0.hero);
  }
}
__name(AppComponent_ng_template_94_Template, "AppComponent_ng_template_94_Template");
function AppComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-confused-hero", 35);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hero", ctx_r0.hero);
  }
}
__name(AppComponent_ng_template_95_Template, "AppComponent_ng_template_95_Template");
function AppComponent_ng_template_96_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-unknown-hero", 35);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hero", ctx_r0.hero);
  }
}
__name(AppComponent_ng_template_96_Template, "AppComponent_ng_template_96_Template");
function AppComponent_ul_105_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul")(1, "li");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "li");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "li");
    ɵɵtext(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const s_r13 = ctx.sin;
    const c_r14 = ctx.cos;
    const t_r15 = ctx.tan;
    ɵɵadvance(2);
    ɵɵtextInterpolate1("sin(30\xB0): ", s_r13);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("cos(30\xB0): ", c_r14);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("tan(30\xB0): ", t_r15);
  }
}
__name(AppComponent_ul_105_Template, "AppComponent_ul_105_Template");
var _AppComponent = class _AppComponent {
  heroes = heroes;
  hero = this.heroes[0];
  // #docregion condition
  condition = false;
  // #enddocregion condition
  logs = [];
  showSad = true;
  status = "ready";
  trackById(index, hero) {
    return hero.id;
  }
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 106, vars: 26, consts: [["class", "name", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "ngIf"], [4, "ngIf"], [3, "ngIf"], ["id", "ng-container"], ["type", "button", 3, "click"], ["for", "show-sad"], ["id", "show-sad", "type", "checkbox", "checked", "", 3, "change"], [3, "ngModelChange", "ngModel"], ["for", "showSad"], ["id", "showSad", "type", "checkbox", "checked", "", 3, "change"], ["id", "ngFor"], [1, "box"], [1, "code"], [3, "odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["id", "ngSwitch"], [3, "for", 4, "ngFor", "ngForOf"], ["for", "none-of-the-above"], ["id", "none-of-the-above", "type", "radio", "name", "heroes", 3, "click"], [3, "ngSwitch"], [3, "hero", 4, "ngSwitchCase"], [3, "hero", 4, "ngSwitchDefault"], ["ngSwitchCase", "happy"], ["ngSwitchCase", "sad"], ["ngSwitchCase", "confused"], ["ngSwitchDefault", ""], ["id", "appIfLoaded"], ["id", "appTrigonometry"], [4, "appTrigonometry"], [1, "name"], [3, "ngValue"], [3, "for"], ["type", "radio", "name", "heroes", 3, "ngModelChange", "id", "ngModel", "value"], [3, "hero"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1");
    ɵɵtext(1, "Structural Directives");
    ɵɵelementEnd();
    ɵɵelementStart(2, "p");
    ɵɵtext(3, "Conditional display of hero");
    ɵɵelementEnd();
    ɵɵelementStart(4, "blockquote");
    ɵɵtemplate(5, AppComponent_div_5_Template, 2, 1, "div", 0);
    ɵɵelementEnd();
    ɵɵelementStart(6, "p");
    ɵɵtext(7, "List of heroes");
    ɵɵelementEnd();
    ɵɵelementStart(8, "ul");
    ɵɵtemplate(9, AppComponent_li_9_Template, 2, 1, "li", 1);
    ɵɵelementEnd();
    ɵɵelement(10, "hr");
    ɵɵelementStart(11, "h2", 2);
    ɵɵtext(12, "NgIf");
    ɵɵelementEnd();
    ɵɵtemplate(13, AppComponent_p_13_Template, 2, 0, "p", 3)(14, AppComponent_p_14_Template, 2, 0, "p", 3);
    ɵɵelementStart(15, "p");
    ɵɵtext(16, ' Expression sets display to "block". This paragraph is visible.\n');
    ɵɵelementEnd();
    ɵɵelementStart(17, "p");
    ɵɵtext(18, ' Expression sets display to "none". This paragraph is hidden but still in the DOM.\n');
    ɵɵelementEnd();
    ɵɵelementStart(19, "h4");
    ɵɵtext(20, "NgIf with template");
    ɵɵelementEnd();
    ɵɵelementStart(21, "p");
    ɵɵtext(22, "<ng-template> element");
    ɵɵelementEnd();
    ɵɵtemplate(23, AppComponent_ng_template_23_Template, 2, 1, "ng-template", 4);
    ɵɵelement(24, "hr");
    ɵɵelementStart(25, "h2", 5);
    ɵɵtext(26, "<ng-container>");
    ɵɵelementEnd();
    ɵɵelementStart(27, "h4");
    ɵɵtext(28, "*ngIf with a <ng-container>");
    ɵɵelementEnd();
    ɵɵelementStart(29, "button", 6);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_29_listener() {
      return ctx.hero = ctx.hero ? null : ctx.heroes[0];
    }, "AppComponent_Template_button_click_29_listener"));
    ɵɵtext(30, "Toggle hero");
    ɵɵelementEnd();
    ɵɵelementStart(31, "p");
    ɵɵtext(32, " I turned the corner ");
    ɵɵtemplate(33, AppComponent_ng_container_33_Template, 2, 1, "ng-container", 3);
    ɵɵtext(34, " and continued on my way.\n");
    ɵɵelementEnd();
    ɵɵelementStart(35, "p");
    ɵɵtext(36, " I turned the corner ");
    ɵɵtemplate(37, AppComponent_span_37_Template, 2, 1, "span", 3);
    ɵɵtext(38, " and continued on my way.\n");
    ɵɵelementEnd();
    ɵɵelementStart(39, "p")(40, "em");
    ɵɵtext(41, "<select> with <span>");
    ɵɵelementEnd()();
    ɵɵelementStart(42, "div");
    ɵɵtext(43, " Pick your favorite hero (");
    ɵɵelementStart(44, "label", 7)(45, "input", 8);
    ɵɵlistener("change", /* @__PURE__ */ __name(function AppComponent_Template_input_change_45_listener() {
      return ctx.showSad = !ctx.showSad;
    }, "AppComponent_Template_input_change_45_listener"));
    ɵɵelementEnd();
    ɵɵtext(46, "show sad");
    ɵɵelementEnd();
    ɵɵtext(47, ")\n");
    ɵɵelementEnd();
    ɵɵelementStart(48, "select", 9);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_select_ngModelChange_48_listener($event) {
      ɵɵtwoWayBindingSet(ctx.hero, $event) || (ctx.hero = $event);
      return $event;
    }, "AppComponent_Template_select_ngModelChange_48_listener"));
    ɵɵtemplate(49, AppComponent_span_49_Template, 2, 1, "span", 1);
    ɵɵelementEnd();
    ɵɵelementStart(50, "p")(51, "em");
    ɵɵtext(52, "<select> with <ng-container>");
    ɵɵelementEnd()();
    ɵɵelementStart(53, "div");
    ɵɵtext(54, " Pick your favorite hero (");
    ɵɵelementStart(55, "label", 10)(56, "input", 11);
    ɵɵlistener("change", /* @__PURE__ */ __name(function AppComponent_Template_input_change_56_listener() {
      return ctx.showSad = !ctx.showSad;
    }, "AppComponent_Template_input_change_56_listener"));
    ɵɵelementEnd();
    ɵɵtext(57, "show sad");
    ɵɵelementEnd();
    ɵɵtext(58, ")\n");
    ɵɵelementEnd();
    ɵɵelementStart(59, "select", 9);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_select_ngModelChange_59_listener($event) {
      ɵɵtwoWayBindingSet(ctx.hero, $event) || (ctx.hero = $event);
      return $event;
    }, "AppComponent_Template_select_ngModelChange_59_listener"));
    ɵɵtemplate(60, AppComponent_ng_container_60_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
    ɵɵelement(61, "br")(62, "br")(63, "hr");
    ɵɵelementStart(64, "h2", 12);
    ɵɵtext(65, "NgFor");
    ɵɵelementEnd();
    ɵɵelementStart(66, "div", 13)(67, "p", 14);
    ɵɵtext(68, '<div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">');
    ɵɵelementEnd();
    ɵɵtemplate(69, AppComponent_div_69_Template, 2, 4, "div", 15);
    ɵɵelementStart(70, "p", 14);
    ɵɵtext(71, '<ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById"/>');
    ɵɵelementEnd();
    ɵɵtemplate(72, AppComponent_ng_template_72_Template, 2, 4, "ng-template", 16);
    ɵɵelementEnd();
    ɵɵelement(73, "hr");
    ɵɵelementStart(74, "h2", 17);
    ɵɵtext(75, "NgSwitch");
    ɵɵelementEnd();
    ɵɵelementStart(76, "div");
    ɵɵtext(77, "Pick your favorite hero");
    ɵɵelementEnd();
    ɵɵelementStart(78, "p");
    ɵɵtemplate(79, AppComponent_label_79_Template, 3, 7, "label", 18);
    ɵɵelementStart(80, "label", 19)(81, "input", 20);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_input_click_81_listener() {
      return ctx.hero = null;
    }, "AppComponent_Template_input_click_81_listener"));
    ɵɵelementEnd();
    ɵɵtext(82, "None of the above");
    ɵɵelementEnd()();
    ɵɵelementStart(83, "h4");
    ɵɵtext(84, "NgSwitch");
    ɵɵelementEnd();
    ɵɵelementStart(85, "div", 21);
    ɵɵtemplate(86, AppComponent_app_happy_hero_86_Template, 1, 1, "app-happy-hero", 22)(87, AppComponent_app_sad_hero_87_Template, 1, 1, "app-sad-hero", 22)(88, AppComponent_app_confused_hero_88_Template, 1, 1, "app-confused-hero", 22)(89, AppComponent_app_unknown_hero_89_Template, 1, 1, "app-unknown-hero", 23);
    ɵɵelementEnd();
    ɵɵelementStart(90, "h4");
    ɵɵtext(91, "NgSwitch with <ng-template>");
    ɵɵelementEnd();
    ɵɵelementStart(92, "div", 21);
    ɵɵtemplate(93, AppComponent_ng_template_93_Template, 1, 1, "ng-template", 24)(94, AppComponent_ng_template_94_Template, 1, 1, "ng-template", 25)(95, AppComponent_ng_template_95_Template, 1, 1, "ng-template", 26)(96, AppComponent_ng_template_96_Template, 1, 1, "ng-template", 27);
    ɵɵelementEnd();
    ɵɵelement(97, "hr")(98, "hr");
    ɵɵelementStart(99, "h2", 28);
    ɵɵtext(100, "IfLoadedDirective");
    ɵɵelementEnd();
    ɵɵelement(101, "app-hero")(102, "hr");
    ɵɵelementStart(103, "h2", 29);
    ɵɵtext(104, "TrigonometryDirective");
    ɵɵelementEnd();
    ɵɵtemplate(105, AppComponent_ul_105_Template, 7, 3, "ul", 30);
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx.hero);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx.heroes);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", false);
    ɵɵadvance();
    ɵɵstyleProp("display", "block");
    ɵɵadvance(2);
    ɵɵstyleProp("display", "none");
    ɵɵadvance(6);
    ɵɵproperty("ngIf", ctx.hero);
    ɵɵadvance(10);
    ɵɵproperty("ngIf", ctx.hero);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx.hero);
    ɵɵadvance(11);
    ɵɵtwoWayProperty("ngModel", ctx.hero);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx.heroes);
    ɵɵadvance(10);
    ɵɵtwoWayProperty("ngModel", ctx.hero);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx.heroes);
    ɵɵadvance(9);
    ɵɵproperty("ngForOf", ctx.heroes)("ngForTrackBy", ctx.trackById);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx.heroes)("ngForTrackBy", ctx.trackById);
    ɵɵadvance(7);
    ɵɵproperty("ngForOf", ctx.heroes);
    ɵɵadvance(6);
    ɵɵproperty("ngSwitch", ctx.hero == null ? null : ctx.hero.emotion);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "happy");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "sad");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "confused");
    ɵɵadvance(4);
    ɵɵproperty("ngSwitch", ctx.hero == null ? null : ctx.hero.emotion);
    ɵɵadvance(13);
    ɵɵproperty("appTrigonometry", 30);
  }
}, "AppComponent_Template"), dependencies: [CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, HappyHeroComponent, SadHeroComponent, ConfusedHeroComponent, UnknownHeroComponent, HeroComponent, TrigonometryDirective], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 100px;\n  font-size: 100%;\n}\n.box[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  max-width: 600px;\n  padding: 4px;\n}\n.choices[_ngcontent-%COMP%] {\n  font-style: italic;\n}\ncode[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%] {\n  background-color: #eee;\n  color: black;\n  font-family: Courier, sans-serif;\n  font-size: 85%;\n}\ndiv.code[_ngcontent-%COMP%] {\n  width: 400px;\n}\n.heroic[_ngcontent-%COMP%] {\n  font-size: 150%;\n  font-weight: bold;\n}\nhr[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n.odd[_ngcontent-%COMP%] {\n  background-color: palegoldenrod;\n}\ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%] {\n  text-align: left;\n  vertical-align: top;\n}\np[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 70%;\n}\n.unless[_ngcontent-%COMP%] {\n  border: 2px solid;\n  padding: 6px;\n}\np.unless[_ngcontent-%COMP%] {\n  width: 500px;\n}\nbutton.a[_ngcontent-%COMP%], \nspan.a[_ngcontent-%COMP%], \n.unless.a[_ngcontent-%COMP%] {\n  color: red;\n  border-color: gold;\n  background-color: yellow;\n  font-size: 100%;\n}\nbutton.b[_ngcontent-%COMP%], \nspan.b[_ngcontent-%COMP%], \n.unless.b[_ngcontent-%COMP%] {\n  color: black;\n  border-color: green;\n  background-color: lightgreen;\n  font-size: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [CommonModule, FormsModule, heroSwitchComponents, HeroComponent, TrigonometryDirective], template: `<!-- #docplaster -->
<!-- #docregion -->
<h1>Structural Directives</h1>

<p>Conditional display of hero</p>

<blockquote>
<!-- #docregion asterisk -->
<div *ngIf="hero" class="name">{{hero.name}}</div>
<!-- #enddocregion asterisk -->
</blockquote>

<p>List of heroes</p>

<ul>
  <li *ngFor="let hero of heroes">{{hero.name}}</li>
</ul>

<hr>

<h2 id="ngIf">NgIf</h2>

<p *ngIf="true">
  Expression is true and ngIf is true.
  This paragraph is in the DOM.
</p>
<p *ngIf="false">
  Expression is false and ngIf is false.
  This paragraph is not in the DOM.
</p>

<p [style.display]="'block'">
  Expression sets display to "block".
  This paragraph is visible.
</p>
<p [style.display]="'none'">
  Expression sets display to "none".
  This paragraph is hidden but still in the DOM.
</p>

<h4>NgIf with template</h4>
<p>&lt;ng-template&gt; element</p>
<!-- #docregion ngif-template -->
<ng-template [ngIf]="hero">
  <div class="name">{{hero.name}}</div>
</ng-template>
<!-- #enddocregion ngif-template -->

<hr>

<h2 id="ng-container">&lt;ng-container&gt;</h2>

<h4>*ngIf with a &lt;ng-container&gt;</h4>

<button type="button" (click)="hero = hero ? null : heroes[0]">Toggle hero</button>

<!-- #docregion ngif-ngcontainer -->
<p>
  I turned the corner
  <ng-container *ngIf="hero">
    and saw {{hero.name}}. I waved
  </ng-container>
  and continued on my way.
</p>
<!-- #enddocregion ngif-ngcontainer -->

<p>
  I turned the corner
  <span *ngIf="hero">
    and saw {{hero.name}}. I waved
  </span>
  and continued on my way.
</p>

<p><em>&lt;select&gt; with &lt;span&gt;</em></p>

<div>
  Pick your favorite hero
  (<label for="show-sad"><input id="show-sad" type="checkbox" checked (change)="showSad = !showSad">show sad</label>)
</div>
<select [(ngModel)]="hero">
  <span *ngFor="let h of heroes">
    <span *ngIf="showSad || h.emotion !== 'sad'">
      <option [ngValue]="h">{{h.name}} ({{h.emotion}})</option>
    </span>
  </span>
</select>

<p><em>&lt;select&gt; with &lt;ng-container&gt;</em></p>
<!-- #docregion select-ngcontainer -->
<div>
  Pick your favorite hero
  (<label for="showSad"><input id="showSad" type="checkbox" checked (change)="showSad = !showSad">show sad</label>)
</div>
<select [(ngModel)]="hero">
  <ng-container *ngFor="let h of heroes">
    <ng-container *ngIf="showSad || h.emotion !== 'sad'">
      <option [ngValue]="h">{{h.name}} ({{h.emotion}})</option>
    </ng-container>
  </ng-container>
</select>
<!-- #enddocregion select-ngcontainer -->
<br><br>

<hr>

<h2 id="ngFor">NgFor</h2>

<div class="box">

<p class="code">&lt;div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd"&gt;</p>
<!--#docregion inside-ngfor -->
<div
  *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById"
  [class.odd]="odd">
  ({{i}}) {{hero.name}}
</div>

<!--#enddocregion inside-ngfor -->
<p class="code">&lt;ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById"/&gt;</p>
<!--#docregion inside-ngfor -->
<ng-template ngFor let-hero [ngForOf]="heroes"
  let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
  <div [class.odd]="odd">
    ({{i}}) {{hero.name}}
  </div>
</ng-template>
<!--#enddocregion inside-ngfor -->

</div>
<hr>

<h2 id="ngSwitch">NgSwitch</h2>

<div>Pick your favorite hero</div>
<p>
  <label for="hero-{{h}}" *ngFor="let h of heroes">
    <input id="hero-{{h}}" type="radio" name="heroes" [(ngModel)]="hero" [value]="h">{{h.name}}
  </label>
  <label for="none-of-the-above"><input id="none-of-the-above" type="radio" name="heroes" (click)="hero = null">None of the above</label>
</p>

<h4>NgSwitch</h4>

<div [ngSwitch]="hero?.emotion">
  <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="hero!"></app-happy-hero>
  <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="hero!"></app-sad-hero>
  <app-confused-hero *ngSwitchCase="'confused'" [hero]="hero!"></app-confused-hero>
  <app-unknown-hero  *ngSwitchDefault           [hero]="hero!"></app-unknown-hero>
</div>

<h4>NgSwitch with &lt;ng-template&gt;</h4>
<div [ngSwitch]="hero?.emotion">
  <ng-template ngSwitchCase="happy">
    <app-happy-hero [hero]="hero!"></app-happy-hero>
  </ng-template>
  <ng-template ngSwitchCase="sad">
    <app-sad-hero [hero]="hero!"></app-sad-hero>
  </ng-template>
  <ng-template ngSwitchCase="confused">
    <app-confused-hero [hero]="hero!"></app-confused-hero>
  </ng-template >
  <ng-template ngSwitchDefault>
    <app-unknown-hero [hero]="hero!"></app-unknown-hero>
  </ng-template>
</div>

<hr>

<hr>

<h2 id="appIfLoaded">IfLoadedDirective</h2>
<app-hero></app-hero>

<hr>

<h2 id="appTrigonometry">TrigonometryDirective</h2>

<!-- #docregion appTrigonometry -->
<ul *appTrigonometry="30; sin as s; cos as c; tan as t">
  <li>sin(30\xB0): {{ s }}</li>
  <li>cos(30\xB0): {{ c }}</li>
  <li>tan(30\xB0): {{ t }}</li>
</ul>
<!-- #enddocregion appTrigonometry -->
`, styles: ["/* src/content/examples/structural-directives/src/app/app.component.css */\nbutton {\n  min-width: 100px;\n  font-size: 100%;\n}\n.box {\n  border: 1px solid gray;\n  max-width: 600px;\n  padding: 4px;\n}\n.choices {\n  font-style: italic;\n}\ncode,\n.code {\n  background-color: #eee;\n  color: black;\n  font-family: Courier, sans-serif;\n  font-size: 85%;\n}\ndiv.code {\n  width: 400px;\n}\n.heroic {\n  font-size: 150%;\n  font-weight: bold;\n}\nhr {\n  margin: 40px 0;\n}\n.odd {\n  background-color: palegoldenrod;\n}\ntd,\nth {\n  text-align: left;\n  vertical-align: top;\n}\np span {\n  color: red;\n  font-size: 70%;\n}\n.unless {\n  border: 2px solid;\n  padding: 6px;\n}\np.unless {\n  width: 500px;\n}\nbutton.a,\nspan.a,\n.unless.a {\n  color: red;\n  border-color: gold;\n  background-color: yellow;\n  font-size: 100%;\n}\nbutton.b,\nspan.b,\n.unless.b {\n  color: black;\n  border-color: green;\n  background-color: lightgreen;\n  font-size: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/structural-directives/src/app/app.component.ts", lineNumber: 17 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-HTWMWUJT.js.map
