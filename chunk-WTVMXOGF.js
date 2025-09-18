import {
  Component,
  Pipe,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/exponential-strength.pipe.ts
var _ExponentialStrengthPipe = class _ExponentialStrengthPipe {
  transform(value, exponent = 1) {
    return Math.pow(value, exponent);
  }
};
__name(_ExponentialStrengthPipe, "ExponentialStrengthPipe");
__publicField(_ExponentialStrengthPipe, "ɵfac", /* @__PURE__ */ __name(function ExponentialStrengthPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExponentialStrengthPipe)();
}, "ExponentialStrengthPipe_Factory"));
__publicField(_ExponentialStrengthPipe, "ɵpipe", /* @__PURE__ */ ɵɵdefinePipe({ name: "exponentialStrength", type: _ExponentialStrengthPipe, pure: true }));
var ExponentialStrengthPipe = _ExponentialStrengthPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExponentialStrengthPipe, [{
    type: Pipe,
    args: [{
      name: "exponentialStrength"
    }]
  }], null, null);
})();

// src/content/examples/pipes/src/app/power-booster.component.ts
var _PowerBoosterComponent = class _PowerBoosterComponent {
};
__name(_PowerBoosterComponent, "PowerBoosterComponent");
__publicField(_PowerBoosterComponent, "ɵfac", /* @__PURE__ */ __name(function PowerBoosterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PowerBoosterComponent)();
}, "PowerBoosterComponent_Factory"));
__publicField(_PowerBoosterComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _PowerBoosterComponent, selectors: [["app-power-booster"]], decls: 5, vars: 4, template: /* @__PURE__ */ __name(function PowerBoosterComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h2");
    ɵɵtext(1, "Power Booster");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "p");
    ɵɵtext(3);
    ɵɵpipe(4, "exponentialStrength");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1("Super power boost: ", ɵɵpipeBind2(4, 1, 2, 10));
  }
}, "PowerBoosterComponent_Template"), dependencies: [ExponentialStrengthPipe], encapsulation: 2 }));
var PowerBoosterComponent = _PowerBoosterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBoosterComponent, [{
    type: Component,
    args: [{
      selector: "app-power-booster",
      template: `
    <h2>Power Booster</h2>
    <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  `,
      imports: [ExponentialStrengthPipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PowerBoosterComponent, { className: "PowerBoosterComponent", filePath: "src/content/examples/pipes/src/app/power-booster.component.ts", lineNumber: 12 });
})();

export {
  PowerBoosterComponent
};
//# sourceMappingURL=chunk-WTVMXOGF.js.map
