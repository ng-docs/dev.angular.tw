import {
  animate,
  keyframes,
  state,
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
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/status-slider.component.ts
var _StatusSliderComponent = class _StatusSliderComponent {
  status = "inactive";
  toggle() {
    if (this.status === "active") {
      this.status = "inactive";
    } else {
      this.status = "active";
    }
  }
};
__name(_StatusSliderComponent, "StatusSliderComponent");
__publicField(_StatusSliderComponent, "ɵfac", /* @__PURE__ */ __name(function StatusSliderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StatusSliderComponent)();
}, "StatusSliderComponent_Factory"));
__publicField(_StatusSliderComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _StatusSliderComponent, selectors: [["app-status-slider"]], decls: 5, vars: 2, consts: [["type", "button", 3, "click"], [1, "box"]], template: /* @__PURE__ */ __name(function StatusSliderComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "nav")(1, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function StatusSliderComponent_Template_button_click_1_listener() {
      return ctx.toggle();
    }, "StatusSliderComponent_Template_button_click_1_listener"));
    ɵɵtext(2, "Toggle Status");
    ɵɵdomElementEnd()();
    ɵɵdomElementStart(3, "div", 1);
    ɵɵtext(4);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵproperty("@slideStatus", ctx.status);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx.status == "active" ? "Active" : "Inactive", "\n");
  }
}, "StatusSliderComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.box[_ngcontent-%COMP%] {\n  width: 300px;\n  border: 5px solid black;\n  display: block;\n  line-height: 300px;\n  text-align: center;\n  font-size: 50px;\n  color: white;\n}\n/*# sourceMappingURL=status-slider.component.css.map */"], data: { animation: [
  trigger("slideStatus", [
    state("inactive", style({ backgroundColor: "blue" })),
    state("active", style({ backgroundColor: "#754600" })),
    // #docregion keyframesWithOffsets
    transition("* => active", [
      animate("2s", keyframes([
        style({ backgroundColor: "blue", offset: 0 }),
        style({ backgroundColor: "red", offset: 0.8 }),
        style({ backgroundColor: "#754600", offset: 1 })
      ]))
    ]),
    transition("* => inactive", [
      animate("2s", keyframes([
        style({ backgroundColor: "#754600", offset: 0 }),
        style({ backgroundColor: "red", offset: 0.2 }),
        style({ backgroundColor: "blue", offset: 1 })
      ]))
    ]),
    // #enddocregion keyframesWithOffsets
    // #docregion keyframes
    transition("* => active", [
      animate("2s", keyframes([
        style({ backgroundColor: "blue" }),
        style({ backgroundColor: "red" }),
        style({ backgroundColor: "orange" })
      ]))
      // #enddocregion keyframes
    ])
  ])
] } }));
var StatusSliderComponent = _StatusSliderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusSliderComponent, [{
    type: Component,
    args: [{ selector: "app-status-slider", animations: [
      trigger("slideStatus", [
        state("inactive", style({ backgroundColor: "blue" })),
        state("active", style({ backgroundColor: "#754600" })),
        // #docregion keyframesWithOffsets
        transition("* => active", [
          animate("2s", keyframes([
            style({ backgroundColor: "blue", offset: 0 }),
            style({ backgroundColor: "red", offset: 0.8 }),
            style({ backgroundColor: "#754600", offset: 1 })
          ]))
        ]),
        transition("* => inactive", [
          animate("2s", keyframes([
            style({ backgroundColor: "#754600", offset: 0 }),
            style({ backgroundColor: "red", offset: 0.2 }),
            style({ backgroundColor: "blue", offset: 1 })
          ]))
        ]),
        // #enddocregion keyframesWithOffsets
        // #docregion keyframes
        transition("* => active", [
          animate("2s", keyframes([
            style({ backgroundColor: "blue" }),
            style({ backgroundColor: "red" }),
            style({ backgroundColor: "orange" })
          ]))
          // #enddocregion keyframes
        ])
      ])
    ], template: `<nav>
  <button type="button" (click)="toggle()">Toggle Status</button>
</nav>

<div [@slideStatus]="status" class="box">
  {{ status == 'active' ? 'Active' : 'Inactive' }}
</div>
`, styles: ["/* src/content/examples/animations/src/app/status-slider.component.css */\n:host {\n  display: block;\n}\n.box {\n  width: 300px;\n  border: 5px solid black;\n  display: block;\n  line-height: 300px;\n  text-align: center;\n  font-size: 50px;\n  color: white;\n}\n/*# sourceMappingURL=status-slider.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(StatusSliderComponent, { className: "StatusSliderComponent", filePath: "src/content/examples/animations/src/app/status-slider.component.ts", lineNumber: 51 });
})();

export {
  StatusSliderComponent
};
//# sourceMappingURL=chunk-7V3VQAIH.js.map
