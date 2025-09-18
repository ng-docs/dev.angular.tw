import {
  slideInAnimation
} from "./chunk-TSYR54P6.js";
import "./chunk-Q2QHJBJV.js";
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet
} from "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-OV2CFM4K.js";
import {
  Component,
  HostBinding,
  __name,
  __publicField,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵsyntheticHostProperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/app.component.ts
var _AppComponent = class _AppComponent {
  animationsDisabled = false;
  // #enddocregion toggle-app-animations
  // #docregion get-route-animations-data
  contexts = inject(ChildrenOutletContexts);
  getRouteAnimationData() {
    return this.contexts.getContext("primary")?.route?.snapshot?.data?.["animation"];
  }
  // #enddocregion get-route-animations-data
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["app-root"]], hostVars: 1, hostBindings: /* @__PURE__ */ __name(function AppComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    ɵɵsyntheticHostProperty("@.disabled", ctx.animationsDisabled);
  }
}, "AppComponent_HostBindings"), decls: 30, vars: 2, consts: [["type", "checkbox", "id", "animation-toggle", 3, "click", "checked"], ["for", "animation-toggle"], ["id", "home", "routerLink", "/home", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "about", "routerLink", "/about", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "open-close", "routerLink", "/open-close", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "status", "routerLink", "/status", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "toggle", "routerLink", "/toggle", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "enter-leave", "routerLink", "/enter-leave", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "auto", "routerLink", "/auto", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "heroes", "routerLink", "/heroes", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "hero-groups", "routerLink", "/hero-groups", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "insert-remove", "routerLink", "/insert-remove", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["id", "querying", "routerLink", "/querying", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1");
    ɵɵtext(1, "Animations");
    ɵɵelementEnd();
    ɵɵelementStart(2, "input", 0);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_input_click_2_listener() {
      return ctx.toggleAnimations();
    }, "AppComponent_Template_input_click_2_listener"));
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 1);
    ɵɵtext(4, "Toggle All Animations");
    ɵɵelementEnd();
    ɵɵelementStart(5, "nav")(6, "a", 2);
    ɵɵtext(7, "Home");
    ɵɵelementEnd();
    ɵɵelementStart(8, "a", 3);
    ɵɵtext(9, "About");
    ɵɵelementEnd();
    ɵɵelementStart(10, "a", 4);
    ɵɵtext(11, "Open/Close");
    ɵɵelementEnd();
    ɵɵelementStart(12, "a", 5);
    ɵɵtext(13, "Status Slider");
    ɵɵelementEnd();
    ɵɵelementStart(14, "a", 6);
    ɵɵtext(15, "Toggle Animations");
    ɵɵelementEnd();
    ɵɵelementStart(16, "a", 7);
    ɵɵtext(17, "Enter/Leave");
    ɵɵelementEnd();
    ɵɵelementStart(18, "a", 8);
    ɵɵtext(19, "Auto Calculation");
    ɵɵelementEnd();
    ɵɵelementStart(20, "a", 9);
    ɵɵtext(21, "Filter/Stagger");
    ɵɵelementEnd();
    ɵɵelementStart(22, "a", 10);
    ɵɵtext(23, "Hero Groups");
    ɵɵelementEnd();
    ɵɵelementStart(24, "a", 11);
    ɵɵtext(25, "Insert/Remove");
    ɵɵelementEnd();
    ɵɵelementStart(26, "a", 12);
    ɵɵtext(27, "Querying");
    ɵɵelementEnd()();
    ɵɵelementStart(28, "div");
    ɵɵelement(29, "router-outlet");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵproperty("checked", !ctx.animationsDisabled);
    ɵɵadvance(26);
    ɵɵproperty("@routeAnimations", ctx.getRouteAnimationData());
  }
}, "AppComponent_Template"), dependencies: [RouterLink, RouterOutlet], styles: ["\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: .7rem;\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: .3rem;\n}\nform[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nnav[_ngcontent-%COMP%] {\n  padding-bottom: 3rem;\n}\n/*# sourceMappingURL=app.component.css.map */"], data: { animation: [
  // #enddocregion decorator
  slideInAnimation
  // #docregion decorator
  // #enddocregion toggle-app-animations, define
  // animation triggers go here
  // #docregion toggle-app-animations, define
] } }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterLink, RouterOutlet], animations: [
      // #enddocregion decorator
      slideInAnimation
      // #docregion decorator
      // #enddocregion toggle-app-animations, define
      // animation triggers go here
      // #docregion toggle-app-animations, define
    ], template: '<h1>Animations</h1>\n\n<input type="checkbox"\n       id="animation-toggle"\n       [checked]="!animationsDisabled"\n       (click)="toggleAnimations()">\n<label for="animation-toggle">Toggle All Animations</label>\n\n<nav>\n  <a id="home" routerLink="/home" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a>\n  <a id="about" routerLink="/about" routerLinkActive="active" ariaCurrentWhenActive="page">About</a>\n  <a id="open-close" routerLink="/open-close" routerLinkActive="active" ariaCurrentWhenActive="page">Open/Close</a>\n  <a id="status" routerLink="/status" routerLinkActive="active" ariaCurrentWhenActive="page">Status Slider</a>\n  <a id="toggle" routerLink="/toggle" routerLinkActive="active" ariaCurrentWhenActive="page">Toggle Animations</a>\n  <a id="enter-leave" routerLink="/enter-leave" routerLinkActive="active" ariaCurrentWhenActive="page">Enter/Leave</a>\n  <a id="auto" routerLink="/auto" routerLinkActive="active" ariaCurrentWhenActive="page">Auto Calculation</a>\n  <a id="heroes" routerLink="/heroes" routerLinkActive="active" ariaCurrentWhenActive="page">Filter/Stagger</a>\n  <a id="hero-groups" routerLink="/hero-groups" routerLinkActive="active" ariaCurrentWhenActive="page">Hero Groups</a>\n  <a id="insert-remove" routerLink="/insert-remove" routerLinkActive="active" ariaCurrentWhenActive="page">Insert/Remove</a>\n  <a id="querying" routerLink="/querying" routerLinkActive="active" ariaCurrentWhenActive="page">Querying</a>\n</nav>\n\n<!-- #docregion route-animations-outlet -->\n<div [@routeAnimations]="getRouteAnimationData()">\n  <router-outlet></router-outlet>\n</div>\n<!-- #enddocregion route-animations-outlet -->\n', styles: ["/* src/content/examples/animations/src/app/app.component.css */\nnav a {\n  padding: .7rem;\n}\nh1 {\n  margin-bottom: .3rem;\n}\nform {\n  margin-bottom: 2rem;\n}\nnav {\n  padding-bottom: 3rem;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, { animationsDisabled: [{
    type: HostBinding,
    args: ["@.disabled"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/animations/src/app/app.component.ts", lineNumber: 33 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-YV4KLUPK.js.map
