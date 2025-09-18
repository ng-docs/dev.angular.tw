import {
  HEROES
} from "./chunk-LMTCVBF2.js";
import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger
} from "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/querying.component.ts
function QueryingComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "p");
    ɵɵtext(1, "I am a child element that enters and leaves with its parent");
    ɵɵdomElementEnd();
  }
}
__name(QueryingComponent_Conditional_3_Conditional_3_Template, "QueryingComponent_Conditional_3_Conditional_3_Template");
function QueryingComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "section");
    ɵɵlistener("@query.start", /* @__PURE__ */ __name(function QueryingComponent_Conditional_3_Template_section_animation_query_start_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleDisabled = true);
    }, "QueryingComponent_Conditional_3_Template_section_animation_query_start_0_listener"))("@query.done", /* @__PURE__ */ __name(function QueryingComponent_Conditional_3_Template_section_animation_query_done_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleDisabled = false);
    }, "QueryingComponent_Conditional_3_Template_section_animation_query_done_0_listener"));
    ɵɵdomElementStart(1, "p");
    ɵɵtext(2, "I am a simple child element");
    ɵɵdomElementEnd();
    ɵɵconditionalCreate(3, QueryingComponent_Conditional_3_Conditional_3_Template, 2, 0, "p");
    ɵɵdomElementStart(4, "p");
    ɵɵtext(5, "I am a child element with an animation trigger");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(6, "div", 1)(7, "span", 2);
    ɵɵtext(8);
    ɵɵdomElementEnd();
    ɵɵdomElementStart(9, "span", 3);
    ɵɵtext(10);
    ɵɵdomElementStart(11, "small");
    ɵɵtext(12, "(heroes are always animated!)");
    ɵɵdomElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("@query", void 0);
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.show ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("@animateMe", void 0);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r1.hero.id);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r1.hero.name, " ");
  }
}
__name(QueryingComponent_Conditional_3_Template, "QueryingComponent_Conditional_3_Template");
var _QueryingComponent = class _QueryingComponent {
  toggleDisabled = false;
  show = true;
  hero = HEROES[0];
};
__name(_QueryingComponent, "QueryingComponent");
__publicField(_QueryingComponent, "ɵfac", /* @__PURE__ */ __name(function QueryingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QueryingComponent)();
}, "QueryingComponent_Factory"));
__publicField(_QueryingComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _QueryingComponent, selectors: [["app-querying"]], decls: 4, vars: 2, consts: [[1, "toggle", 3, "click", "disabled"], [1, "hero"], [1, "badge"], [1, "name"]], template: /* @__PURE__ */ __name(function QueryingComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "nav")(1, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function QueryingComponent_Template_button_click_1_listener() {
      return ctx.show = !ctx.show;
    }, "QueryingComponent_Template_button_click_1_listener"));
    ɵɵtext(2, "Toggle View");
    ɵɵdomElementEnd()();
    ɵɵconditionalCreate(3, QueryingComponent_Conditional_3_Template, 13, 5, "section");
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵdomProperty("disabled", ctx.toggleDisabled);
    ɵɵadvance(2);
    ɵɵconditional(ctx.show ? 3 : -1);
  }
}, "QueryingComponent_Template"), styles: ["\n\nsection[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  overflow: hidden;\n}\nsection[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  color: black;\n  background-color: #DDD;\n}\n.hero[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.5rem;\n  background-color: #3d5157;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n  align-self: stretch;\n}\n.hero[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  height: min-content;\n}\n/*# sourceMappingURL=querying.component.css.map */"], data: { animation: [
  trigger("query", [
    transition(":enter", [
      style({ height: 0 }),
      group([
        animate(500, style({ height: "*" })),
        query(":enter", [
          style({ opacity: 0, transform: "scale(0)" }),
          animate(2e3, style({ opacity: 1, transform: "scale(1)" }))
        ]),
        query(".hero", [
          style({ transform: "translateX(-100%)" }),
          animate(".7s 500ms ease-in", style({ transform: "translateX(0)" }))
        ])
      ]),
      query("@animateMe", animateChild())
    ]),
    transition(":leave", [
      style({ height: "*" }),
      query("@animateMe", animateChild()),
      group([
        animate("500ms 500ms", style({ height: "0", padding: "0" })),
        query(":leave", [
          style({ opacity: 1, transform: "scale(1)" }),
          animate("1s", style({ opacity: 0, transform: "scale(0)" }))
        ]),
        query(".hero", [
          style({ transform: "translateX(0)" }),
          animate(".7s ease-out", style({ transform: "translateX(-100%)" }))
        ])
      ])
    ])
  ]),
  trigger("animateMe", [
    transition("* <=> *", animate("500ms cubic-bezier(.68,-0.73,.26,1.65)", keyframes([
      style({ backgroundColor: "transparent", color: "*", offset: 0 }),
      style({ backgroundColor: "blue", color: "white", offset: 0.2 }),
      style({ backgroundColor: "transparent", color: "*", offset: 1 })
    ])))
  ])
] } }));
var QueryingComponent = _QueryingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QueryingComponent, [{
    type: Component,
    args: [{ selector: "app-querying", template: `
    <nav>
      <button class="toggle" (click)="show = !show" [disabled]="toggleDisabled">Toggle View</button>
    </nav>
    @if (show) {
      <section @query (@query.start)="toggleDisabled = true" (@query.done)="toggleDisabled = false">
        <p>I am a simple child element</p>
        @if (show) {
          <p>I am a child element that enters and leaves with its parent</p>
        }
        <p @animateMe>I am a child element with an animation trigger</p>
        <div class="hero">
          <span class="badge">{{ hero.id }}</span>
          <span class="name">{{ hero.name }} <small>(heroes are always animated!)</small></span>
        </div>
      </section>
    }
  `, animations: [
      trigger("query", [
        transition(":enter", [
          style({ height: 0 }),
          group([
            animate(500, style({ height: "*" })),
            query(":enter", [
              style({ opacity: 0, transform: "scale(0)" }),
              animate(2e3, style({ opacity: 1, transform: "scale(1)" }))
            ]),
            query(".hero", [
              style({ transform: "translateX(-100%)" }),
              animate(".7s 500ms ease-in", style({ transform: "translateX(0)" }))
            ])
          ]),
          query("@animateMe", animateChild())
        ]),
        transition(":leave", [
          style({ height: "*" }),
          query("@animateMe", animateChild()),
          group([
            animate("500ms 500ms", style({ height: "0", padding: "0" })),
            query(":leave", [
              style({ opacity: 1, transform: "scale(1)" }),
              animate("1s", style({ opacity: 0, transform: "scale(0)" }))
            ]),
            query(".hero", [
              style({ transform: "translateX(0)" }),
              animate(".7s ease-out", style({ transform: "translateX(-100%)" }))
            ])
          ])
        ])
      ]),
      trigger("animateMe", [
        transition("* <=> *", animate("500ms cubic-bezier(.68,-0.73,.26,1.65)", keyframes([
          style({ backgroundColor: "transparent", color: "*", offset: 0 }),
          style({ backgroundColor: "blue", color: "white", offset: 0.2 }),
          style({ backgroundColor: "transparent", color: "*", offset: 1 })
        ])))
      ])
    ], styles: ["/* src/content/examples/animations/src/app/querying.component.css */\nsection {\n  border: 1px solid black;\n  overflow: hidden;\n}\nsection > * {\n  margin: 1rem;\n}\n.hero {\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  color: black;\n  background-color: #DDD;\n}\n.hero .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.5rem;\n  background-color: #3d5157;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n  align-self: stretch;\n}\n.hero .name {\n  height: min-content;\n}\n/*# sourceMappingURL=querying.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(QueryingComponent, { className: "QueryingComponent", filePath: "src/content/examples/animations/src/app/querying.component.ts", lineNumber: 84 });
})();
export {
  QueryingComponent
};
//# sourceMappingURL=chunk-USWP5GDB.js.map
