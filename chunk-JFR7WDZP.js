import {
  Component,
  __name,
  __publicField,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/routing-with-urlmatcher/src/app/profile/profile.component.ts
var _ProfileComponent = class _ProfileComponent {
  username = input.required(...ngDevMode ? [{ debugName: "username" }] : []);
};
__name(_ProfileComponent, "ProfileComponent");
__publicField(_ProfileComponent, "ɵfac", /* @__PURE__ */ __name(function ProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileComponent)();
}, "ProfileComponent_Factory"));
__publicField(_ProfileComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], inputs: { username: [1, "username"] }, decls: 2, vars: 1, template: /* @__PURE__ */ __name(function ProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "p");
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" Hello ", ctx.username(), "!\n");
  }
}, "ProfileComponent_Template"), encapsulation: 2 }));
var ProfileComponent = _ProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", template: "<p>\n    Hello {{ username() }}!\n</p>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/content/examples/routing-with-urlmatcher/src/app/profile/profile.component.ts", lineNumber: 8 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-JFR7WDZP.js.map
