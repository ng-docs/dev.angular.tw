import {
  FlyingHeroesComponent,
  FlyingHeroesImpureComponent
} from "./chunk-BGQMJCQZ.js";
import {
  HeroAsyncMessageComponent
} from "./chunk-J3APLFGJ.js";
import {
  PrecedenceComponent
} from "./chunk-YR7FXQGV.js";
import {
  JsonPipeComponent
} from "./chunk-LHG24OTT.js";
import {
  PowerBoosterComponent
} from "./chunk-WTVMXOGF.js";
import {
  BirthdayComponent
} from "./chunk-SJJ3YFYI.js";
import {
  BirthdayFormattingComponent
} from "./chunk-77VYMRTN.js";
import {
  BirthdayPipeChainingComponent
} from "./chunk-N5XE7LWZ.js";
import "./chunk-IP3YSDXJ.js";
import "./chunk-OV2CFM4K.js";
import {
  Component,
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

// src/content/examples/pipes/src/app/app.component.ts
var _AppComponent = class _AppComponent {
  birthday = new Date(1988, 3, 15);
};
__name(_AppComponent, "AppComponent");
// April 15, 1988 -- since month parameter is zero-based
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 52, vars: 0, consts: [["id", "toc"], ["href", "#date-pipe"], ["href", "#date-pipe-formatting"], ["href", "#pipe-chaining"], ["href", "#power-booster"], ["href", "#hero-async-message"], ["href", "#json-pipe"], ["href", "#pipe-precedence"], ["href", "#flying-heroes"], ["href", "#flying-heroes-impure"], ["id", "date-pipe"], ["id", "date-pipe-formatting"], ["id", "pipe-chaining"], ["id", "power-booster"], ["id", "pipe-precedence"], ["id", "hero-async-message"], ["id", "json-pipe"], ["id", "flying-heroes"], ["id", "flying-heroes-impure"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1", 0);
    ɵɵtext(1, "Pipes");
    ɵɵelementEnd();
    ɵɵelementStart(2, "a", 1);
    ɵɵtext(3, "Date Pipe");
    ɵɵelementEnd();
    ɵɵelementStart(4, "a", 2);
    ɵɵtext(5, "Date Pipe Formatting");
    ɵɵelementEnd();
    ɵɵelementStart(6, "a", 3);
    ɵɵtext(7, "Pipe Chaining");
    ɵɵelementEnd();
    ɵɵelementStart(8, "a", 4);
    ɵɵtext(9, "Power Booster custom pipe");
    ɵɵelementEnd();
    ɵɵelementStart(10, "a", 5);
    ɵɵtext(11, "Async Messages and AsyncPipe");
    ɵɵelementEnd();
    ɵɵelementStart(12, "a", 6);
    ɵɵtext(13, "Json Pipe for Debugging");
    ɵɵelementEnd();
    ɵɵelementStart(14, "a", 7);
    ɵɵtext(15, "Pipes and Precedence");
    ɵɵelementEnd();
    ɵɵelementStart(16, "a", 8);
    ɵɵtext(17, "Flying Heroes filter pipe (pure)");
    ɵɵelementEnd();
    ɵɵelementStart(18, "a", 9);
    ɵɵtext(19, "Flying Heroes filter pipe (impure)");
    ɵɵelementEnd();
    ɵɵelement(20, "hr");
    ɵɵelementStart(21, "h2", 10);
    ɵɵtext(22, "Date Pipe");
    ɵɵelementEnd();
    ɵɵelement(23, "app-birthday")(24, "hr");
    ɵɵelementStart(25, "h2", 11);
    ɵɵtext(26, "Date Pipe Formatting");
    ɵɵelementEnd();
    ɵɵelement(27, "app-birthday-formatting")(28, "hr");
    ɵɵelementStart(29, "h2", 12);
    ɵɵtext(30, "Pipe Chaining");
    ɵɵelementEnd();
    ɵɵelement(31, "app-birthday-pipe-chaining")(32, "hr")(33, "app-power-booster", 13);
    ɵɵelementStart(34, "h2", 14);
    ɵɵtext(35, "Pipes and Precedence");
    ɵɵelementEnd();
    ɵɵelement(36, "app-pipe-precedence")(37, "hr")(38, "app-hero-async-message", 15)(39, "hr");
    ɵɵelementStart(40, "h2", 16);
    ɵɵtext(41, "Json Pipe for Debugging");
    ɵɵelementEnd();
    ɵɵelementStart(42, "p");
    ɵɵtext(43, "Use the JsonPipe to display component properties for debugging.");
    ɵɵelementEnd();
    ɵɵelementStart(44, "code");
    ɵɵtext(45, "data | json");
    ɵɵelementEnd();
    ɵɵelementStart(46, "p");
    ɵɵelement(47, "app-json-pipe");
    ɵɵelementEnd();
    ɵɵelement(48, "hr")(49, "app-flying-heroes", 17)(50, "hr")(51, "app-flying-heroes-impure", 18);
  }
}, "AppComponent_Template"), dependencies: [
  // Example components
  BirthdayComponent,
  BirthdayFormattingComponent,
  BirthdayPipeChainingComponent,
  FlyingHeroesComponent,
  FlyingHeroesImpureComponent,
  HeroAsyncMessageComponent,
  PrecedenceComponent,
  JsonPipeComponent,
  PowerBoosterComponent
], styles: ["\n\na[href][_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 0;\n}\n/*# sourceMappingURL=app.component.css.map */", "\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=app.component.css.map */", "\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=app.component.css.map */", "\n\ncode[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background-color: #eee;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      // Example components
      BirthdayComponent,
      BirthdayFormattingComponent,
      BirthdayPipeChainingComponent,
      FlyingHeroesComponent,
      FlyingHeroesImpureComponent,
      HeroAsyncMessageComponent,
      PrecedenceComponent,
      JsonPipeComponent,
      PowerBoosterComponent
    ], template: '<h1 id="toc">Pipes</h1>\n<a href="#date-pipe">Date Pipe</a>\n<a href="#date-pipe-formatting">Date Pipe Formatting</a>\n<a href="#pipe-chaining">Pipe Chaining</a>\n<a href="#power-booster">Power Booster custom pipe</a>\n<a href="#hero-async-message">Async Messages and AsyncPipe</a>\n<a href="#json-pipe">Json Pipe for Debugging</a>\n<a href="#pipe-precedence">Pipes and Precedence</a>\n<a href="#flying-heroes">Flying Heroes filter pipe (pure)</a>\n<a href="#flying-heroes-impure">Flying Heroes filter pipe (impure)</a>\n\n<hr>\n<h2 id="date-pipe">Date Pipe</h2>\n<app-birthday></app-birthday>\n\n<hr>\n<h2 id="date-pipe-formatting">Date Pipe Formatting</h2>\n<app-birthday-formatting></app-birthday-formatting>\n\n<hr>\n<h2 id="pipe-chaining">Pipe Chaining</h2>\n<app-birthday-pipe-chaining></app-birthday-pipe-chaining>\n\n<hr>\n<app-power-booster id="power-booster"></app-power-booster>\n\n<h2 id="pipe-precedence">Pipes and Precedence</h2>\n<app-pipe-precedence></app-pipe-precedence>\n\n<hr>\n<app-hero-async-message id="hero-async-message"></app-hero-async-message>\n\n<hr>\n<h2 id="json-pipe">Json Pipe for Debugging</h2>\n<p>Use the JsonPipe to display component properties for debugging.</p>\n<code>data | json</code>\n<p>\n  <app-json-pipe></app-json-pipe>\n</p>\n\n<hr>\n<app-flying-heroes id="flying-heroes"></app-flying-heroes>\n\n<hr>\n<app-flying-heroes-impure id="flying-heroes-impure"></app-flying-heroes-impure>\n', styles: ["/* angular:styles/component:scss;5185fb0f0e2448304ceea8ff9e83b9a90f677246f39120c86d18d76337bf265f;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/2/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/app.component.ts */\na[href] {\n  display: block;\n  padding: 10px 0;\n}\n/*# sourceMappingURL=app.component.css.map */\n", "/* angular:styles/component:scss;39674c500d87b0f153fa8caa3c30734ee46403e19c5493cd86e60cd2aa09f785;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/2/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/app.component.ts */\na:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=app.component.css.map */\n", "/* angular:styles/component:scss;eabeaa3370e527e00e970208fea6b67d43ef977b3ee4515f12701b84d0f5d3b2;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/2/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/app.component.ts */\nh2 {\n  margin: 0;\n}\n/*# sourceMappingURL=app.component.css.map */\n", "/* angular:styles/component:scss;eadff12050fc79ed49d20cfcea816375d9fc8cc98718f40bdbf0b999f670ab4d;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/2/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/app.component.ts */\ncode {\n  font-family: monospace;\n  background-color: #eee;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/pipes/src/app/app.component.ts", lineNumber: 34 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-ZI6PKMW2.js.map
