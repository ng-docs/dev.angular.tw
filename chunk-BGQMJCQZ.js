import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IP3YSDXJ.js";
import {
  CommonModule
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  Pipe,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/flying-heroes.pipe.ts
var _FlyingHeroesPipe = class _FlyingHeroesPipe {
  transform(allHeroes) {
    return allHeroes.filter((hero) => hero.canFly);
  }
};
__name(_FlyingHeroesPipe, "FlyingHeroesPipe");
__publicField(_FlyingHeroesPipe, "ɵfac", /* @__PURE__ */ __name(function FlyingHeroesPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FlyingHeroesPipe)();
}, "FlyingHeroesPipe_Factory"));
__publicField(_FlyingHeroesPipe, "ɵpipe", /* @__PURE__ */ ɵɵdefinePipe({ name: "flyingHeroes", type: _FlyingHeroesPipe, pure: true }));
var FlyingHeroesPipe = _FlyingHeroesPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlyingHeroesPipe, [{
    type: Pipe,
    args: [{
      name: "flyingHeroes"
    }]
  }], null, null);
})();
var _FlyingHeroesImpurePipe = class _FlyingHeroesImpurePipe extends FlyingHeroesPipe {
};
__name(_FlyingHeroesImpurePipe, "FlyingHeroesImpurePipe");
__publicField(_FlyingHeroesImpurePipe, "ɵfac", /* @__PURE__ */ (() => {
  let ɵFlyingHeroesImpurePipe_BaseFactory;
  return /* @__PURE__ */ __name(function FlyingHeroesImpurePipe_Factory(__ngFactoryType__) {
    return (ɵFlyingHeroesImpurePipe_BaseFactory || (ɵFlyingHeroesImpurePipe_BaseFactory = ɵɵgetInheritedFactory(_FlyingHeroesImpurePipe)))(__ngFactoryType__ || _FlyingHeroesImpurePipe);
  }, "FlyingHeroesImpurePipe_Factory");
})());
__publicField(_FlyingHeroesImpurePipe, "ɵpipe", /* @__PURE__ */ ɵɵdefinePipe({ name: "flyingHeroesImpure", type: _FlyingHeroesImpurePipe, pure: false }));
var FlyingHeroesImpurePipe = _FlyingHeroesImpurePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlyingHeroesImpurePipe, [{
    type: Pipe,
    args: [{
      name: "flyingHeroesImpure",
      pure: false
    }]
  }], null, null);
})();

// src/content/examples/pipes/src/app/heroes.ts
var HEROES = [
  { name: "Windstorm", canFly: true },
  { name: "Bombasto", canFly: false },
  { name: "Magneto", canFly: false },
  { name: "Tornado", canFly: true }
];

// src/content/examples/pipes/src/app/flying-heroes.component.ts
function FlyingHeroesComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hero_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(hero_r3.name);
  }
}
__name(FlyingHeroesComponent_For_22_Template, "FlyingHeroesComponent_For_22_Template");
function FlyingHeroesComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hero_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(hero_r4.name);
  }
}
__name(FlyingHeroesComponent_For_28_Template, "FlyingHeroesComponent_For_28_Template");
function FlyingHeroesImpureComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hero_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(hero_r3.name);
  }
}
__name(FlyingHeroesImpureComponent_For_19_Template, "FlyingHeroesImpureComponent_For_19_Template");
function FlyingHeroesImpureComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hero_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(hero_r4.name);
  }
}
__name(FlyingHeroesImpureComponent_For_25_Template, "FlyingHeroesImpureComponent_For_25_Template");
var _FlyingHeroesComponent = class _FlyingHeroesComponent {
  heroes = [];
  canFly = true;
  // #enddocregion v1
  mutate = true;
  title = "Flying Heroes (pure pipe)";
  // #docregion v1
  constructor() {
    this.reset();
  }
  addHero(name) {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero = { name, canFly: this.canFly };
    if (this.mutate) {
      this.heroes.push(hero);
    } else {
      this.heroes = this.heroes.concat(hero);
    }
  }
  reset() {
    this.heroes = HEROES.slice();
  }
};
__name(_FlyingHeroesComponent, "FlyingHeroesComponent");
__publicField(_FlyingHeroesComponent, "ɵfac", /* @__PURE__ */ __name(function FlyingHeroesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FlyingHeroesComponent)();
}, "FlyingHeroesComponent_Factory"));
__publicField(_FlyingHeroesComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _FlyingHeroesComponent, selectors: [["app-flying-heroes"]], decls: 29, vars: 5, consts: [["box", ""], ["for", "hero-name"], ["type", "text", "id", "hero-name", "placeholder", "hero name", 3, "keyup.enter"], ["id", "can-fly", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "can-fly"], ["id", "mutate", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "mutate"], ["type", "button", 3, "click"], ["id", "flyers"], ["id", "all"]], template: /* @__PURE__ */ __name(function FlyingHeroesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "h2");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "p");
    ɵɵtext(3, "Create a new hero and press enter to add it to the list. ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "label", 1);
    ɵɵtext(5, "New hero name: ");
    ɵɵelementEnd();
    ɵɵelementStart(6, "input", 2, 0);
    ɵɵlistener("keyup.enter", /* @__PURE__ */ __name(function FlyingHeroesComponent_Template_input_keyup_enter_6_listener() {
      ɵɵrestoreView(_r1);
      const box_r2 = ɵɵreference(7);
      ctx.addHero(box_r2.value);
      return ɵɵresetView(box_r2.value = "");
    }, "FlyingHeroesComponent_Template_input_keyup_enter_6_listener"));
    ɵɵelementEnd();
    ɵɵelementStart(8, "div")(9, "input", 3);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function FlyingHeroesComponent_Template_input_ngModelChange_9_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.canFly, $event) || (ctx.canFly = $event);
      return ɵɵresetView($event);
    }, "FlyingHeroesComponent_Template_input_ngModelChange_9_listener"));
    ɵɵelementEnd();
    ɵɵelementStart(10, "label", 4);
    ɵɵtext(11, "Hero can fly");
    ɵɵelementEnd()();
    ɵɵelementStart(12, "div")(13, "input", 5);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function FlyingHeroesComponent_Template_input_ngModelChange_13_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.mutate, $event) || (ctx.mutate = $event);
      return ɵɵresetView($event);
    }, "FlyingHeroesComponent_Template_input_ngModelChange_13_listener"));
    ɵɵelementEnd();
    ɵɵelementStart(14, "label", 6);
    ɵɵtext(15, "Mutate array");
    ɵɵelementEnd();
    ɵɵelementStart(16, "button", 7);
    ɵɵlistener("click", /* @__PURE__ */ __name(function FlyingHeroesComponent_Template_button_click_16_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.reset());
    }, "FlyingHeroesComponent_Template_button_click_16_listener"));
    ɵɵtext(17, "Reset list of heroes");
    ɵɵelementEnd()();
    ɵɵelementStart(18, "h3");
    ɵɵtext(19, "Heroes who fly (piped)");
    ɵɵelementEnd();
    ɵɵelementStart(20, "div", 8);
    ɵɵrepeaterCreate(21, FlyingHeroesComponent_For_22_Template, 2, 1, "div", null, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(23, "flyingHeroes");
    ɵɵelementEnd();
    ɵɵelementStart(24, "h3");
    ɵɵtext(25, "All Heroes (no pipe)");
    ɵɵelementEnd();
    ɵɵelementStart(26, "div", 9);
    ɵɵrepeaterCreate(27, FlyingHeroesComponent_For_28_Template, 2, 1, "div", null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ctx.title);
    ɵɵadvance(8);
    ɵɵtwoWayProperty("ngModel", ctx.canFly);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx.mutate);
    ɵɵadvance(8);
    ɵɵrepeater(ɵɵpipeBind1(23, 3, ctx.heroes));
    ɵɵadvance(6);
    ɵɵrepeater(ctx.heroes);
  }
}, "FlyingHeroesComponent_Template"), dependencies: [CommonModule, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, FlyingHeroesPipe], styles: ["\n\n#flyers[_ngcontent-%COMP%], \n#all[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n}\ninput[_ngcontent-%COMP%] {\n  margin: 0.25rem 0.25rem 0.5rem 0;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */"] }));
var FlyingHeroesComponent = _FlyingHeroesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlyingHeroesComponent, [{
    type: Component,
    args: [{ selector: "app-flying-heroes", imports: [CommonModule, FormsModule, FlyingHeroesPipe], template: `<!-- #docplaster-->
<!-- #docregion -->
<h2>{{ title }}</h2>
<p>Create a new hero and press enter to add it to the list. </p>
<!-- #docregion template-1 -->
<label for="hero-name">New hero name: </label>
<input type="text" #box id="hero-name" (keyup.enter)="addHero(box.value); box.value=''" placeholder="hero name">
<!-- #enddocregion template-1 -->
<div>
  <input id="can-fly" type="checkbox" [(ngModel)]="canFly">
  <label for="can-fly">Hero can fly</label>
</div>
<div>
  <input id="mutate" type="checkbox" [(ngModel)]="mutate">
  <label for="mutate">Mutate array</label>
  <!-- #docregion template-1 -->
  <button type="button" (click)="reset()">Reset list of heroes</button>
    <!-- #enddocregion template-1 -->
</div>

<h3>Heroes who fly (piped)</h3>
<div id="flyers">
  <!-- #docregion template-flying-heroes -->
  @for (hero of (heroes | flyingHeroes); track hero) {
    <div>{{ hero.name }}</div>
  }
  <!-- #enddocregion template-flying-heroes -->
</div>

<h3>All Heroes (no pipe)</h3>
<div id="all">
  <!-- #docregion template-1 -->
  @for (hero of heroes; track hero) {
    <div>{{ hero.name }}</div>
  }
  <!-- #enddocregion template-1 -->
</div>
`, styles: ["/* angular:styles/component:scss;3bc70b8762fe33470e25454702be45871a162a6dd3bb411f596c83187e916e72;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/2/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/flying-heroes.component.ts */\n#flyers,\n#all {\n  font-style: italic;\n}\nbutton {\n  display: block;\n}\ninput {\n  margin: 0.25rem 0.25rem 0.5rem 0;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(FlyingHeroesComponent, { className: "FlyingHeroesComponent", filePath: "src/content/examples/pipes/src/app/flying-heroes.component.ts", lineNumber: 23 });
})();
var _FlyingHeroesImpureComponent = class _FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  title = "Flying Heroes (impure pipe)";
};
__name(_FlyingHeroesImpureComponent, "FlyingHeroesImpureComponent");
__publicField(_FlyingHeroesImpureComponent, "ɵfac", /* @__PURE__ */ (() => {
  let ɵFlyingHeroesImpureComponent_BaseFactory;
  return /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Factory(__ngFactoryType__) {
    return (ɵFlyingHeroesImpureComponent_BaseFactory || (ɵFlyingHeroesImpureComponent_BaseFactory = ɵɵgetInheritedFactory(_FlyingHeroesImpureComponent)))(__ngFactoryType__ || _FlyingHeroesImpureComponent);
  }, "FlyingHeroesImpureComponent_Factory");
})());
__publicField(_FlyingHeroesImpureComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _FlyingHeroesImpureComponent, selectors: [["app-flying-heroes-impure"]], features: [ɵɵInheritDefinitionFeature], decls: 26, vars: 5, consts: [["box", ""], ["for", "hero-name"], ["type", "text", "id", "hero-name", "placeholder", "hero name", 3, "keyup.enter"], ["id", "can-fly", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "can-fly"], ["id", "mutate", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "button", 3, "click"], ["id", "flyers"], ["id", "all"]], template: /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "h2");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 1);
    ɵɵtext(3, "New hero: ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 2, 0);
    ɵɵlistener("keyup.enter", /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template_input_keyup_enter_4_listener() {
      ɵɵrestoreView(_r1);
      const box_r2 = ɵɵreference(5);
      ctx.addHero(box_r2.value);
      return ɵɵresetView(box_r2.value = "");
    }, "FlyingHeroesImpureComponent_Template_input_keyup_enter_4_listener"));
    ɵɵelementEnd();
    ɵɵelementStart(6, "div")(7, "input", 3);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template_input_ngModelChange_7_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.canFly, $event) || (ctx.canFly = $event);
      return ɵɵresetView($event);
    }, "FlyingHeroesImpureComponent_Template_input_ngModelChange_7_listener"));
    ɵɵelementEnd();
    ɵɵelementStart(8, "label", 4);
    ɵɵtext(9, "can fly");
    ɵɵelementEnd()();
    ɵɵelementStart(10, "div")(11, "input", 5);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template_input_ngModelChange_11_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.mutate, $event) || (ctx.mutate = $event);
      return ɵɵresetView($event);
    }, "FlyingHeroesImpureComponent_Template_input_ngModelChange_11_listener"));
    ɵɵelementEnd();
    ɵɵtext(12, "Mutate array ");
    ɵɵelementStart(13, "button", 6);
    ɵɵlistener("click", /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template_button_click_13_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.reset());
    }, "FlyingHeroesImpureComponent_Template_button_click_13_listener"));
    ɵɵtext(14, "Reset");
    ɵɵelementEnd()();
    ɵɵelementStart(15, "h3");
    ɵɵtext(16, "Heroes who fly (piped)");
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 7);
    ɵɵrepeaterCreate(18, FlyingHeroesImpureComponent_For_19_Template, 2, 1, "div", null, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(20, "flyingHeroesImpure");
    ɵɵelementEnd();
    ɵɵelementStart(21, "h3");
    ɵɵtext(22, "All Heroes (no pipe)");
    ɵɵelementEnd();
    ɵɵelementStart(23, "div", 8);
    ɵɵrepeaterCreate(24, FlyingHeroesImpureComponent_For_25_Template, 2, 1, "div", null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ctx.title);
    ɵɵadvance(6);
    ɵɵtwoWayProperty("ngModel", ctx.canFly);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx.mutate);
    ɵɵadvance(7);
    ɵɵrepeater(ɵɵpipeBind1(20, 3, ctx.heroes));
    ɵɵadvance(6);
    ɵɵrepeater(ctx.heroes);
  }
}, "FlyingHeroesImpureComponent_Template"), dependencies: [CommonModule, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, FlyingHeroesImpurePipe], styles: ["\n\n#flyers[_ngcontent-%COMP%], \n#all[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */", "\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */", "\n\ninput[_ngcontent-%COMP%] {\n  margin: 0.25rem 0.25rem 0.5rem 0;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */"] }));
var FlyingHeroesImpureComponent = _FlyingHeroesImpureComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlyingHeroesImpureComponent, [{
    type: Component,
    args: [{ selector: "app-flying-heroes-impure", imports: [CommonModule, FormsModule, FlyingHeroesImpurePipe], template: `<!-- #docplaster-->
<!-- #docregion -->
<h2>{{ title }}</h2>

<label for="hero-name">New hero: </label>
<input type="text" id="hero-name" #box (keyup.enter)="addHero(box.value); box.value=''" placeholder="hero name">
<div>
  <input id="can-fly" type="checkbox" [(ngModel)]="canFly">
  <label for="can-fly">can fly</label>
</div>

<div>
  <input id="mutate" type="checkbox" [(ngModel)]="mutate">Mutate array
  <button type="button" (click)="reset()">Reset</button>
</div>

<h3>Heroes who fly (piped)</h3>
<div id="flyers">
  <!-- #docregion template-flying-heroes -->
  @for (hero of (heroes | flyingHeroesImpure); track hero) {
    <div>{{ hero.name }}</div>
  }
  <!-- #enddocregion template-flying-heroes -->
</div>

<h3>All Heroes (no pipe)</h3>
<div id="all">
  @for (hero of heroes; track hero) {
    <div>{{ hero.name }}</div>
  }
</div>
`, styles: ["/* angular:styles/component:scss;92aafcd85aac48dedac0fd92f1a9ba71405aa494ed05a62f84d44049b204681f;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/2/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/flying-heroes.component.ts */\n#flyers,\n#all {\n  font-style: italic;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */\n", "/* angular:styles/component:scss;fe2d60372eb3b29f751a561d1818cc1d1d196073e309a53d18d1f2a5c53cbc36;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/2/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/flying-heroes.component.ts */\nbutton {\n  display: block;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */\n", "/* angular:styles/component:scss;5c5cbd3f36df3e020fd8c280cd35ea6b32ef3ae77f650ca8a18833c66c2a5432;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/2/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/flying-heroes.component.ts */\ninput {\n  margin: 0.25rem 0.25rem 0.5rem 0;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(FlyingHeroesImpureComponent, { className: "FlyingHeroesImpureComponent", filePath: "src/content/examples/pipes/src/app/flying-heroes.component.ts", lineNumber: 74 });
})();

export {
  FlyingHeroesComponent,
  FlyingHeroesImpureComponent
};
//# sourceMappingURL=chunk-BGQMJCQZ.js.map
