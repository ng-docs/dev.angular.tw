import {
  RouterLink,
  RouterOutlet
} from "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-OV2CFM4K.js";
import {
  Component,
  VERSION,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/routing-with-urlmatcher/src/app/app.component.ts
var _AppComponent = class _AppComponent {
  name = "Angular " + VERSION.major;
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["routerLink", "/@Angular"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2");
    ɵɵtext(1, "Routing with Custom Matching");
    ɵɵelementEnd();
    ɵɵtext(2, " Navigate to ");
    ɵɵelementStart(3, "a", 0);
    ɵɵtext(4, "my profile");
    ɵɵelementEnd();
    ɵɵelement(5, "router-outlet");
  }
}, "AppComponent_Template"), dependencies: [RouterOutlet, RouterLink], styles: ["\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, RouterLink], template: '<h2>Routing with Custom Matching</h2>\n\nNavigate to <a routerLink="/@Angular">my profile</a>\n\n<router-outlet></router-outlet>', styles: ["/* src/content/examples/routing-with-urlmatcher/src/app/app.component.css */\np {\n  font-family: Lato;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/routing-with-urlmatcher/src/app/app.component.ts", lineNumber: 10 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-NRD5BUHW.js.map
