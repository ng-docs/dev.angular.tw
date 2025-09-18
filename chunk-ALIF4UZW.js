import {
  ItemDetailComponent
} from "./chunk-3FMQLJ57.js";
import {
  BestItemComponent,
  DeviceItemComponent,
  ItemSwitchComponents,
  LostItemComponent,
  StoutItemComponent,
  UnknownItemComponent
} from "./chunk-OS5CC4VV.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-IP3YSDXJ.js";
import {
  JsonPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2CX5BJWG.js";

// src/content/examples/built-in-directives/src/app/item.ts
var _Item = class _Item {
  id;
  name;
  feature;
  url;
  rate;
  constructor(id, name, feature, url, rate = 100) {
    this.id = id;
    this.name = name;
    this.feature = feature;
    this.url = url;
    this.rate = rate;
    this.id = id ? id : _Item.nextId++;
  }
  clone() {
    return Object.assign(new _Item(this.id), this);
  }
};
__name(_Item, "Item");
__publicField(_Item, "nextId", 0);
__publicField(_Item, "items", [
  new _Item(0, "Teapot", "stout"),
  new _Item(1, "Lamp", "bright"),
  new _Item(2, "Phone", "slim"),
  new _Item(3, "Television", "vintage"),
  new _Item(4, "Fishbowl")
]);
var Item = _Item;

// src/content/examples/built-in-directives/src/app/app.component.ts
var _c0 = /* @__PURE__ */ __name(() => ({ "helpful": false, "study": true, "course": true }), "_c0");
function AppComponent_app_item_detail_98_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-item-detail", 46);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("item", ctx_r0.item);
  }
}
__name(AppComponent_app_item_detail_98_Template, "AppComponent_app_item_detail_98_Template");
function AppComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("Hello, ", ctx_r0.currentCustomer.name);
  }
}
__name(AppComponent_div_103_Template, "AppComponent_div_103_Template");
function AppComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "Hello, ");
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.nullCustomer);
  }
}
__name(AppComponent_div_106_Template, "AppComponent_div_106_Template");
function AppComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1("Add ", ctx_r0.currentItem.name, " with template");
  }
}
__name(AppComponent_ng_template_111_Template, "AppComponent_ng_template_111_Template");
function AppComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r2.name);
  }
}
__name(AppComponent_div_130_Template, "AppComponent_div_130_Template");
function AppComponent_app_item_detail_134_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-item-detail", 46);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵproperty("item", item_r3);
  }
}
__name(AppComponent_app_item_detail_134_Template, "AppComponent_app_item_detail_134_Template");
function AppComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    ɵɵadvance();
    ɵɵtextInterpolate2("", i_r5 + 1, " - ", item_r4.name);
  }
}
__name(AppComponent_div_143_Template, "AppComponent_div_143_Template");
function AppComponent_div_150_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    ɵɵadvance();
    ɵɵtextInterpolate2("", i_r7 + 1, " - ", item_r6.name);
  }
}
__name(AppComponent_div_150_Template, "AppComponent_div_150_Template");
function AppComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 0);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate2("(", item_r8.id, ") ", item_r8.name);
  }
}
__name(AppComponent_div_164_Template, "AppComponent_div_164_Template");
function AppComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 47);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" Item DOM elements change #", ctx_r0.itemsNoTrackByCount, " without trackBy ");
  }
}
__name(AppComponent_div_165_Template, "AppComponent_div_165_Template");
function AppComponent_div_169_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 1);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate2("(", item_r9.id, ") ", item_r9.name);
  }
}
__name(AppComponent_div_169_Template, "AppComponent_div_169_Template");
function AppComponent_div_170_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 48);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" Item DOM elements change #", ctx_r0.itemsWithTrackByCount, " with trackBy ");
  }
}
__name(AppComponent_div_170_Template, "AppComponent_div_170_Template");
function AppComponent_div_180_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" (", item_r10.id, ") ", item_r10.name, " ");
  }
}
__name(AppComponent_div_180_Template, "AppComponent_div_180_Template");
function AppComponent_div_187_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2("(", item_r11.id, ") ", item_r11.name);
  }
}
__name(AppComponent_div_187_Template, "AppComponent_div_187_Template");
function AppComponent_div_194_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2("(", item_r12.id, ") ", item_r12.name);
  }
}
__name(AppComponent_div_194_Template, "AppComponent_div_194_Template");
function AppComponent_div_201_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2("(", item_r13.id, ") ", item_r13.name);
  }
}
__name(AppComponent_div_201_Template, "AppComponent_div_201_Template");
function AppComponent_label_208_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 49)(1, "div")(2, "input", 50);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_label_208_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r0 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r0.currentItem, $event) || (ctx_r0.currentItem = $event);
      return ɵɵresetView($event);
    }, "AppComponent_label_208_Template_input_ngModelChange_2_listener"));
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const i_r15 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("for", ɵɵinterpolate1("item-", i_r15));
    ɵɵadvance(2);
    ɵɵproperty("id", ɵɵinterpolate1("item-", i_r15));
    ɵɵtwoWayProperty("ngModel", ctx_r0.currentItem);
    ɵɵproperty("value", i_r15);
    ɵɵadvance();
    ɵɵtextInterpolate1("", i_r15.name, " ");
  }
}
__name(AppComponent_label_208_Template, "AppComponent_label_208_Template");
function AppComponent_app_stout_item_210_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-stout-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_stout_item_210_Template, "AppComponent_app_stout_item_210_Template");
function AppComponent_app_device_item_211_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-device-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_device_item_211_Template, "AppComponent_app_device_item_211_Template");
function AppComponent_app_lost_item_212_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-lost-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_lost_item_212_Template, "AppComponent_app_lost_item_212_Template");
function AppComponent_app_best_item_213_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-best-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_best_item_213_Template, "AppComponent_app_best_item_213_Template");
function AppComponent_div_214_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("Are you as bright as ", ctx_r0.currentItem.name, "?");
  }
}
__name(AppComponent_div_214_Template, "AppComponent_div_214_Template");
function AppComponent_app_unknown_item_215_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-unknown-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_unknown_item_215_Template, "AppComponent_app_unknown_item_215_Template");
var _AppComponent = class _AppComponent {
  // #enddocregion import-ng-if, import-ng-for, import-ng-style, import-ng-switch, import-ng-class, import-forms-module
  canSave = true;
  isSpecial = true;
  isUnchanged = true;
  isActive = true;
  nullCustomer = null;
  currentCustomer = {
    name: "Laura"
  };
  item;
  // defined to demonstrate template context precedence
  items = [];
  // #docregion item
  currentItem;
  // #enddocregion item
  // trackBy change counting
  itemsNoTrackByCount = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;
  // #docregion setClasses
  currentClasses = {};
  // #enddocregion setClasses
  // #docregion setStyles
  currentStyles = {};
  // #enddocregion setStyles
  ngOnInit() {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount = 0;
  }
  setUppercaseName(name) {
    this.currentItem.name = name.toUpperCase();
  }
  // #docregion setClasses
  setCurrentClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    };
  }
  // #enddocregion setClasses
  // #docregion setStyles
  setCurrentStyles() {
    this.currentStyles = {
      "font-style": this.canSave ? "italic" : "normal",
      "font-weight": !this.isUnchanged ? "bold" : "normal",
      "font-size": this.isSpecial ? "24px" : "12px"
    };
  }
  // #enddocregion setStyles
  isActiveToggle() {
    this.isActive = !this.isActive;
  }
  giveNullCustomerValue() {
    this.nullCustomer = "Kelly";
  }
  resetItems() {
    this.items = Item.items.map((item) => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }
  resetList() {
    this.resetItems();
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }
  changeIds() {
    this.items.forEach((i) => i.id += 1 * this.itemIdIncrement);
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }
  clearTrackByCounts() {
    this.resetItems();
    this.itemsNoTrackByCount = 0;
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }
  // #docregion trackByItems
  trackByItems(index, item) {
    return item.id;
  }
  // #enddocregion trackByItems
  trackById(index, item) {
    return item.id;
  }
  getValue(event) {
    return event.target.value;
  }
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 216, vars: 70, consts: [["noTrackBy", ""], ["withTrackBy", ""], ["id", "ngModel"], ["for", "without"], ["id", "without", 3, "input", "value"], ["for", "example-ngModel"], ["id", "example-ngModel", 3, "ngModelChange", "ngModel"], ["for", "example-change"], ["id", "example-change", 3, "ngModelChange", "ngModel"], ["for", "example-uppercase"], ["id", "example-uppercase", 3, "ngModelChange", "ngModel"], ["id", "ngClass"], [3, "ngClass"], ["for", "saveable"], ["type", "checkbox", "id", "saveable", 3, "ngModelChange", "ngModel"], ["for", "modified"], ["type", "checkbox", "id", "modified", 3, "change", "value"], ["for", "special"], ["type", "checkbox", "id", "special", 3, "ngModelChange", "ngModel"], ["type", "button", 3, "click"], [1, "helpful", "study", "course"], [3, "ngStyle"], ["for", "canSave"], ["id", "canSave", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "isUnchanged"], ["id", "isUnchanged", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "isSpecial"], ["id", "isSpecial", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["id", "ngIf"], [3, "item", 4, "ngIf"], [4, "ngIf"], [3, "ngIf"], ["id", "ngFor"], [1, "box"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngFor", "ngForOf"], ["id", "ngFor-index"], ["id", "ngFor-trackBy"], ["id", "noTrackByCnt", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "withTrackByCnt", 4, "ngIf"], [3, "for", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "item", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "item", 4, "ngSwitchDefault"], [3, "item"], ["id", "noTrackByCnt"], ["id", "withTrackByCnt"], [3, "for"], ["type", "radio", "name", "items", 3, "ngModelChange", "id", "ngModel", "value"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1");
    ɵɵtext(1, "Built-in Directives");
    ɵɵelementEnd();
    ɵɵelementStart(2, "h2");
    ɵɵtext(3, "Built-in attribute directives");
    ɵɵelementEnd();
    ɵɵelementStart(4, "h3", 2);
    ɵɵtext(5, "NgModel (two-way) Binding");
    ɵɵelementEnd();
    ɵɵelementStart(6, "fieldset")(7, "h4");
    ɵɵtext(8, "NgModel examples");
    ɵɵelementEnd();
    ɵɵelementStart(9, "p");
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "p")(12, "label", 3);
    ɵɵtext(13, "without NgModel:");
    ɵɵelementEnd();
    ɵɵelementStart(14, "input", 4);
    ɵɵlistener("input", /* @__PURE__ */ __name(function AppComponent_Template_input_input_14_listener($event) {
      return ctx.currentItem.name = ctx.getValue($event);
    }, "AppComponent_Template_input_input_14_listener"));
    ɵɵelementEnd()();
    ɵɵelementStart(15, "p")(16, "label", 5);
    ɵɵtext(17, "[(ngModel)]:");
    ɵɵelementEnd();
    ɵɵelementStart(18, "input", 6);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_18_listener($event) {
      ɵɵtwoWayBindingSet(ctx.currentItem.name, $event) || (ctx.currentItem.name = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_18_listener"));
    ɵɵelementEnd()();
    ɵɵelementStart(19, "p")(20, "label", 7);
    ɵɵtext(21, '(ngModelChange)="...name=$event":');
    ɵɵelementEnd();
    ɵɵelementStart(22, "input", 8);
    ɵɵlistener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_22_listener($event) {
      return ctx.currentItem.name = $event;
    }, "AppComponent_Template_input_ngModelChange_22_listener"));
    ɵɵelementEnd()();
    ɵɵelementStart(23, "p")(24, "label", 9);
    ɵɵtext(25, '(ngModelChange)="setUppercaseName($event)" ');
    ɵɵelementStart(26, "input", 10);
    ɵɵlistener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_26_listener($event) {
      return ctx.setUppercaseName($event);
    }, "AppComponent_Template_input_ngModelChange_26_listener"));
    ɵɵelementEnd()()()();
    ɵɵelement(27, "hr");
    ɵɵelementStart(28, "h2", 11);
    ɵɵtext(29, "NgClass Binding");
    ɵɵelementEnd();
    ɵɵelementStart(30, "p");
    ɵɵtext(31);
    ɵɵpipe(32, "json");
    ɵɵelementEnd();
    ɵɵelementStart(33, "div", 12);
    ɵɵtext(34, "This div is initially saveable, unchanged, and special.");
    ɵɵelementEnd();
    ɵɵelementStart(35, "ul")(36, "li")(37, "label", 13);
    ɵɵtext(38, "saveable");
    ɵɵelementEnd();
    ɵɵelementStart(39, "input", 14);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_39_listener($event) {
      ɵɵtwoWayBindingSet(ctx.canSave, $event) || (ctx.canSave = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_39_listener"));
    ɵɵelementEnd()();
    ɵɵelementStart(40, "li")(41, "label", 15);
    ɵɵtext(42, "modified:");
    ɵɵelementEnd();
    ɵɵelementStart(43, "input", 16);
    ɵɵlistener("change", /* @__PURE__ */ __name(function AppComponent_Template_input_change_43_listener() {
      return ctx.isUnchanged = !ctx.isUnchanged;
    }, "AppComponent_Template_input_change_43_listener"));
    ɵɵelementEnd()();
    ɵɵelementStart(44, "li")(45, "label", 17);
    ɵɵtext(46, "special: ");
    ɵɵelementStart(47, "input", 18);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_47_listener($event) {
      ɵɵtwoWayBindingSet(ctx.isSpecial, $event) || (ctx.isSpecial = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_47_listener"));
    ɵɵelementEnd()()()();
    ɵɵelementStart(48, "button", 19);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_48_listener() {
      return ctx.setCurrentClasses();
    }, "AppComponent_Template_button_click_48_listener"));
    ɵɵtext(49, "Refresh currentClasses");
    ɵɵelementEnd();
    ɵɵelementStart(50, "div", 12);
    ɵɵtext(51);
    ɵɵelementEnd();
    ɵɵelement(52, "br")(53, "br");
    ɵɵelementStart(54, "div", 12);
    ɵɵtext(55, "This div is special");
    ɵɵelementEnd();
    ɵɵelementStart(56, "div", 20);
    ɵɵtext(57, "Helpful study course");
    ɵɵelementEnd();
    ɵɵelementStart(58, "div", 12);
    ɵɵtext(59, "Study course");
    ɵɵelementEnd();
    ɵɵelement(60, "hr");
    ɵɵelementStart(61, "h3");
    ɵɵtext(62, "NgStyle Binding");
    ɵɵelementEnd();
    ɵɵelementStart(63, "div");
    ɵɵtext(64, " This div is x-large or smaller.\n");
    ɵɵelementEnd();
    ɵɵelementStart(65, "h4");
    ɵɵtext(66, "[ngStyle] binding to currentStyles - CSS property names");
    ɵɵelementEnd();
    ɵɵelementStart(67, "p");
    ɵɵtext(68);
    ɵɵpipe(69, "json");
    ɵɵelementEnd();
    ɵɵelementStart(70, "div", 21);
    ɵɵtext(71, " This div is initially italic, normal weight, and extra large (24px).\n");
    ɵɵelementEnd();
    ɵɵelement(72, "br");
    ɵɵelementStart(73, "label", 22);
    ɵɵtext(74, "italic: ");
    ɵɵelementStart(75, "input", 23);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_75_listener($event) {
      ɵɵtwoWayBindingSet(ctx.canSave, $event) || (ctx.canSave = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_75_listener"));
    ɵɵelementEnd()();
    ɵɵtext(76, " |\n");
    ɵɵelementStart(77, "label", 24);
    ɵɵtext(78, "normal: ");
    ɵɵelementStart(79, "input", 25);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_79_listener($event) {
      ɵɵtwoWayBindingSet(ctx.isUnchanged, $event) || (ctx.isUnchanged = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_79_listener"));
    ɵɵelementEnd()();
    ɵɵtext(80, " |\n");
    ɵɵelementStart(81, "label", 26);
    ɵɵtext(82, "xlarge: ");
    ɵɵelementStart(83, "input", 27);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_83_listener($event) {
      ɵɵtwoWayBindingSet(ctx.isSpecial, $event) || (ctx.isSpecial = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_83_listener"));
    ɵɵelementEnd()();
    ɵɵelementStart(84, "button", 19);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_84_listener() {
      return ctx.setCurrentStyles();
    }, "AppComponent_Template_button_click_84_listener"));
    ɵɵtext(85, "Refresh currentStyles");
    ɵɵelementEnd();
    ɵɵelement(86, "br")(87, "br");
    ɵɵelementStart(88, "div", 21);
    ɵɵtext(89);
    ɵɵelementEnd();
    ɵɵelement(90, "hr");
    ɵɵelementStart(91, "h2");
    ɵɵtext(92, "Built-in structural directives");
    ɵɵelementEnd();
    ɵɵelementStart(93, "h3", 28);
    ɵɵtext(94, "NgIf Binding");
    ɵɵelementEnd();
    ɵɵelementStart(95, "div")(96, "p");
    ɵɵtext(97, "If isActive is true, app-item-detail will render: ");
    ɵɵelementEnd();
    ɵɵtemplate(98, AppComponent_app_item_detail_98_Template, 1, 1, "app-item-detail", 29);
    ɵɵelementStart(99, "button", 19);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_99_listener() {
      return ctx.isActiveToggle();
    }, "AppComponent_Template_button_click_99_listener"));
    ɵɵtext(100, "Toggle app-item-detail");
    ɵɵelementEnd()();
    ɵɵelementStart(101, "p");
    ɵɵtext(102, "If currentCustomer isn't null, say hello to Laura:");
    ɵɵelementEnd();
    ɵɵtemplate(103, AppComponent_div_103_Template, 2, 1, "div", 30);
    ɵɵelementStart(104, "p");
    ɵɵtext(105, "nullCustomer is null by default. NgIf guards against null. Give it a value to show it:");
    ɵɵelementEnd();
    ɵɵtemplate(106, AppComponent_div_106_Template, 4, 1, "div", 30);
    ɵɵelementStart(107, "button", 19);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_107_listener() {
      return ctx.giveNullCustomerValue();
    }, "AppComponent_Template_button_click_107_listener"));
    ɵɵtext(108, "Give nullCustomer a value");
    ɵɵelementEnd();
    ɵɵelementStart(109, "h4");
    ɵɵtext(110, "NgIf binding with template (no *)");
    ɵɵelementEnd();
    ɵɵtemplate(111, AppComponent_ng_template_111_Template, 1, 1, "ng-template", 31);
    ɵɵelement(112, "hr");
    ɵɵelementStart(113, "h4");
    ɵɵtext(114, "Show/hide vs. NgIf");
    ɵɵelementEnd();
    ɵɵelementStart(115, "div");
    ɵɵtext(116, "Show with class");
    ɵɵelementEnd();
    ɵɵelementStart(117, "div");
    ɵɵtext(118, "Hide with class");
    ɵɵelementEnd();
    ɵɵelementStart(119, "p");
    ɵɵtext(120, "ItemDetail is in the DOM but hidden");
    ɵɵelementEnd();
    ɵɵelement(121, "app-item-detail");
    ɵɵelementStart(122, "div");
    ɵɵtext(123, "Show with style");
    ɵɵelementEnd();
    ɵɵelementStart(124, "div");
    ɵɵtext(125, "Hide with style");
    ɵɵelementEnd();
    ɵɵelement(126, "hr");
    ɵɵelementStart(127, "h2", 32);
    ɵɵtext(128, "NgFor Binding");
    ɵɵelementEnd();
    ɵɵelementStart(129, "div", 33);
    ɵɵtemplate(130, AppComponent_div_130_Template, 2, 1, "div", 34);
    ɵɵelementEnd();
    ɵɵelementStart(131, "p");
    ɵɵtext(132, "*ngFor with ItemDetailComponent element");
    ɵɵelementEnd();
    ɵɵelementStart(133, "div", 33);
    ɵɵtemplate(134, AppComponent_app_item_detail_134_Template, 1, 1, "app-item-detail", 35);
    ɵɵelementEnd();
    ɵɵelementStart(135, "h4", 36);
    ɵɵtext(136, "*ngFor with index");
    ɵɵelementEnd();
    ɵɵelementStart(137, "p");
    ɵɵtext(138, "with ");
    ɵɵelementStart(139, "em");
    ɵɵtext(140, "semi-colon");
    ɵɵelementEnd();
    ɵɵtext(141, " separator");
    ɵɵelementEnd();
    ɵɵelementStart(142, "div", 33);
    ɵɵtemplate(143, AppComponent_div_143_Template, 2, 2, "div", 34);
    ɵɵelementEnd();
    ɵɵelementStart(144, "p");
    ɵɵtext(145, "with ");
    ɵɵelementStart(146, "em");
    ɵɵtext(147, "comma");
    ɵɵelementEnd();
    ɵɵtext(148, " separator");
    ɵɵelementEnd();
    ɵɵelementStart(149, "div", 33);
    ɵɵtemplate(150, AppComponent_div_150_Template, 2, 2, "div", 34);
    ɵɵelementEnd();
    ɵɵelementStart(151, "h4", 37);
    ɵɵtext(152, "*ngFor trackBy");
    ɵɵelementEnd();
    ɵɵelementStart(153, "button", 19);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_153_listener() {
      return ctx.resetList();
    }, "AppComponent_Template_button_click_153_listener"));
    ɵɵtext(154, "Reset items");
    ɵɵelementEnd();
    ɵɵelementStart(155, "button", 19);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_155_listener() {
      return ctx.changeIds();
    }, "AppComponent_Template_button_click_155_listener"));
    ɵɵtext(156, "Change ids");
    ɵɵelementEnd();
    ɵɵelementStart(157, "button", 19);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_157_listener() {
      return ctx.clearTrackByCounts();
    }, "AppComponent_Template_button_click_157_listener"));
    ɵɵtext(158, "Clear counts");
    ɵɵelementEnd();
    ɵɵelementStart(159, "p")(160, "em");
    ɵɵtext(161, "without");
    ɵɵelementEnd();
    ɵɵtext(162, " trackBy");
    ɵɵelementEnd();
    ɵɵelementStart(163, "div", 33);
    ɵɵtemplate(164, AppComponent_div_164_Template, 3, 2, "div", 34)(165, AppComponent_div_165_Template, 2, 1, "div", 38);
    ɵɵelementEnd();
    ɵɵelementStart(166, "p");
    ɵɵtext(167, "with trackBy");
    ɵɵelementEnd();
    ɵɵelementStart(168, "div", 33);
    ɵɵtemplate(169, AppComponent_div_169_Template, 3, 2, "div", 39)(170, AppComponent_div_170_Template, 2, 1, "div", 40);
    ɵɵelementEnd();
    ɵɵelement(171, "br")(172, "br")(173, "br");
    ɵɵelementStart(174, "p");
    ɵɵtext(175, "with trackBy and ");
    ɵɵelementStart(176, "em");
    ɵɵtext(177, "semi-colon");
    ɵɵelementEnd();
    ɵɵtext(178, " separator");
    ɵɵelementEnd();
    ɵɵelementStart(179, "div", 33);
    ɵɵtemplate(180, AppComponent_div_180_Template, 2, 2, "div", 39);
    ɵɵelementEnd();
    ɵɵelementStart(181, "p");
    ɵɵtext(182, "with trackBy and ");
    ɵɵelementStart(183, "em");
    ɵɵtext(184, "comma");
    ɵɵelementEnd();
    ɵɵtext(185, " separator");
    ɵɵelementEnd();
    ɵɵelementStart(186, "div", 33);
    ɵɵtemplate(187, AppComponent_div_187_Template, 2, 2, "div", 39);
    ɵɵelementEnd();
    ɵɵelementStart(188, "p");
    ɵɵtext(189, "with trackBy and ");
    ɵɵelementStart(190, "em");
    ɵɵtext(191, "space");
    ɵɵelementEnd();
    ɵɵtext(192, " separator");
    ɵɵelementEnd();
    ɵɵelementStart(193, "div", 33);
    ɵɵtemplate(194, AppComponent_div_194_Template, 2, 2, "div", 39);
    ɵɵelementEnd();
    ɵɵelementStart(195, "p");
    ɵɵtext(196, "with ");
    ɵɵelementStart(197, "em");
    ɵɵtext(198, "generic");
    ɵɵelementEnd();
    ɵɵtext(199, " trackById function");
    ɵɵelementEnd();
    ɵɵelementStart(200, "div", 33);
    ɵɵtemplate(201, AppComponent_div_201_Template, 2, 2, "div", 39);
    ɵɵelementEnd();
    ɵɵelement(202, "hr");
    ɵɵelementStart(203, "h2");
    ɵɵtext(204, "NgSwitch Binding");
    ɵɵelementEnd();
    ɵɵelementStart(205, "p");
    ɵɵtext(206, "Pick your favorite item");
    ɵɵelementEnd();
    ɵɵelementStart(207, "div");
    ɵɵtemplate(208, AppComponent_label_208_Template, 4, 7, "label", 41);
    ɵɵelementEnd();
    ɵɵelementStart(209, "div", 42);
    ɵɵtemplate(210, AppComponent_app_stout_item_210_Template, 1, 1, "app-stout-item", 43)(211, AppComponent_app_device_item_211_Template, 1, 1, "app-device-item", 43)(212, AppComponent_app_lost_item_212_Template, 1, 1, "app-lost-item", 43)(213, AppComponent_app_best_item_213_Template, 1, 1, "app-best-item", 43)(214, AppComponent_div_214_Template, 2, 1, "div", 44)(215, AppComponent_app_unknown_item_215_Template, 1, 1, "app-unknown-item", 45);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(10);
    ɵɵtextInterpolate1("Current item name: ", ctx.currentItem.name);
    ɵɵadvance(4);
    ɵɵproperty("value", ctx.currentItem.name);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx.currentItem.name);
    ɵɵadvance(4);
    ɵɵproperty("ngModel", ctx.currentItem.name);
    ɵɵadvance(4);
    ɵɵproperty("ngModel", ctx.currentItem.name);
    ɵɵadvance(5);
    ɵɵtextInterpolate1("currentClasses is ", ɵɵpipeBind1(32, 65, ctx.currentClasses));
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx.currentClasses);
    ɵɵadvance(6);
    ɵɵtwoWayProperty("ngModel", ctx.canSave);
    ɵɵadvance(4);
    ɵɵproperty("value", !ctx.isUnchanged);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx.isSpecial);
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ctx.currentClasses);
    ɵɵadvance();
    ɵɵtextInterpolate3(" This div should be ", ctx.canSave ? "" : "not", " saveable, ", ctx.isUnchanged ? "unchanged" : "modified", " and ", ctx.isSpecial ? "" : "not", ' special after clicking "Refresh".');
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ctx.isSpecial ? "special" : "");
    ɵɵadvance(4);
    ɵɵproperty("ngClass", ɵɵpureFunction0(69, _c0));
    ɵɵadvance(5);
    ɵɵstyleProp("font-size", ctx.isSpecial ? "x-large" : "smaller");
    ɵɵadvance(5);
    ɵɵtextInterpolate1("currentStyles is ", ɵɵpipeBind1(69, 67, ctx.currentStyles));
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ctx.currentStyles);
    ɵɵadvance(5);
    ɵɵtwoWayProperty("ngModel", ctx.canSave);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx.isUnchanged);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx.isSpecial);
    ɵɵadvance(5);
    ɵɵproperty("ngStyle", ctx.currentStyles);
    ɵɵadvance();
    ɵɵtextInterpolate3(" This div should be ", ctx.canSave ? "italic" : "plain", ", ", ctx.isUnchanged ? "normal weight" : "bold", " and, ", ctx.isSpecial ? "extra large" : "normal size", ' after clicking "Refresh".');
    ɵɵadvance(9);
    ɵɵproperty("ngIf", ctx.isActive);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx.currentCustomer);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx.nullCustomer);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx.currentItem);
    ɵɵadvance(4);
    ɵɵclassProp("hidden", !ctx.isSpecial);
    ɵɵadvance(2);
    ɵɵclassProp("hidden", ctx.isSpecial);
    ɵɵadvance(4);
    ɵɵclassProp("hidden", ctx.isSpecial);
    ɵɵadvance();
    ɵɵstyleProp("display", ctx.isSpecial ? "block" : "none");
    ɵɵadvance(2);
    ɵɵstyleProp("display", ctx.isSpecial ? "none" : "block");
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx.items);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx.items);
    ɵɵadvance(9);
    ɵɵproperty("ngForOf", ctx.items);
    ɵɵadvance(7);
    ɵɵproperty("ngForOf", ctx.items);
    ɵɵadvance(14);
    ɵɵproperty("ngForOf", ctx.items);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx.itemsNoTrackByCount);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItems);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx.itemsWithTrackByCount);
    ɵɵadvance(10);
    ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItems);
    ɵɵadvance(7);
    ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItems);
    ɵɵadvance(7);
    ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItems);
    ɵɵadvance(7);
    ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackById);
    ɵɵadvance(7);
    ɵɵproperty("ngForOf", ctx.items);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", ctx.currentItem.feature);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "stout");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "slim");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "vintage");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "bright");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "bright");
  }
}, "AppComponent_Template"), dependencies: [
  // #docregion import-ng-if
  NgIf,
  // <-- import into the component
  // #enddocregion import-ng-if
  // #docregion import-ng-for
  NgForOf,
  // <-- import into the component
  // #enddocregion import-ng-for
  // #docregion import-ng-style
  NgStyle,
  // <-- import into the component
  // #enddocregion import-ng-style
  // #docregion import-ng-switch
  NgSwitch,
  // <-- import into the component
  NgSwitchCase,
  NgSwitchDefault,
  // #enddocregion import-ng-switch
  // #docregion import-ng-class
  NgClass,
  // <-- import into the component
  // #enddocregion import-ng-class
  // #docregion import-forms-module
  FormsModule,
  DefaultValueAccessor,
  CheckboxControlValueAccessor,
  RadioControlValueAccessor,
  NgControlStatus,
  NgModel,
  ItemDetailComponent,
  StoutItemComponent,
  BestItemComponent,
  DeviceItemComponent,
  LostItemComponent,
  UnknownItemComponent,
  // <--- import into the component
  // #enddocregion import-forms-module
  JsonPipe
], styles: ['\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 100%;\n  margin: 0 2px;\n}\ndiv[ng-reflect-ng-switch][_ngcontent-%COMP%], \napp-unknown-item[_ngcontent-%COMP%] {\n  margin: .5rem 0;\n  display: block;\n}\n#noTrackByCnt[_ngcontent-%COMP%], \n#withTrackByCnt[_ngcontent-%COMP%] {\n  color: darkred;\n  max-width: 450px;\n  margin: 4px;\n}\nimg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.box[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 6px;\n  max-width: 450px;\n}\n.child-div[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  font-weight: normal;\n}\n.context[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.parent-div[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-weight: bold;\n}\n.course[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: x-large;\n}\n.helpful[_ngcontent-%COMP%] {\n  color: red;\n}\n.saveable[_ngcontent-%COMP%] {\n  color: limegreen;\n}\n.study[_ngcontent-%COMP%], \n.modified[_ngcontent-%COMP%] {\n  font-family: "Brush Script MT", cursive;\n  font-size: 2rem;\n}\n.toe[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  font-style: italic;\n}\n.to-toc[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: block;\n}\n/*# sourceMappingURL=app.component.css.map */'] }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      // #docregion import-ng-if
      NgIf,
      // <-- import into the component
      // #enddocregion import-ng-if
      // #docregion import-ng-for
      NgForOf,
      // <-- import into the component
      // #enddocregion import-ng-for
      // #docregion import-ng-style
      NgStyle,
      // <-- import into the component
      // #enddocregion import-ng-style
      // #docregion import-ng-switch
      NgSwitch,
      // <-- import into the component
      NgSwitchCase,
      NgSwitchDefault,
      // #enddocregion import-ng-switch
      // #docregion import-ng-class
      NgClass,
      // <-- import into the component
      // #enddocregion import-ng-class
      // #docregion import-forms-module
      FormsModule,
      // <--- import into the component
      // #enddocregion import-forms-module
      JsonPipe,
      ItemDetailComponent,
      ItemSwitchComponents,
      StoutItemComponent
      // #docregion import-ng-if, import-ng-for, import-ng-style, import-ng-switch, import-ng-class, import-forms-module
    ], template: `<h1>Built-in Directives</h1>

<h2>Built-in attribute directives</h2>

<h3 id="ngModel">NgModel (two-way) Binding</h3>

<fieldset><h4>NgModel examples</h4>
  <p>Current item name: {{ currentItem.name }}</p>
  <p>
    <label for="without">without NgModel:</label>
    <input [value]="currentItem.name" (input)="currentItem.name=getValue($event)" id="without">
  </p>

  <p>
    <!-- #docregion NgModel-1 -->
    <label for="example-ngModel">[(ngModel)]:</label>
    <input [(ngModel)]="currentItem.name" id="example-ngModel">
    <!-- #enddocregion NgModel-1 -->
  </p>

  <p>
    <label for="example-change">(ngModelChange)="...name=$event":</label>
    <input [ngModel]="currentItem.name" (ngModelChange)="currentItem.name=$event" id="example-change">
  </p>

  <p>
    <label for="example-uppercase">(ngModelChange)="setUppercaseName($event)"
      <!-- #docregion uppercase -->
      <input [ngModel]="currentItem.name" (ngModelChange)="setUppercaseName($event)" id="example-uppercase">
      <!-- #enddocregion uppercase -->
    </label>
  </p>
</fieldset>

<hr><h2 id="ngClass">NgClass Binding</h2>

<p>currentClasses is {{ currentClasses | json }}</p>
<!-- #docregion NgClass-1 -->
<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special.</div>
<!-- #enddocregion NgClass-1 -->
<ul>
  <li>
    <label for="saveable">saveable</label>
    <input type="checkbox" [(ngModel)]="canSave" id="saveable">
  </li>
  <li>
    <label for="modified">modified:</label>
    <input type="checkbox" [value]="!isUnchanged" (change)="isUnchanged=!isUnchanged" id="modified"></li>
  <li>
    <label for="special">special: <input type="checkbox" [(ngModel)]="isSpecial" id="special"></label>
</li>
</ul>
<button type="button" (click)="setCurrentClasses()">Refresh currentClasses</button>

<div [ngClass]="currentClasses">
  This div should be {{ canSave ? "": "not"}} saveable,
                  {{ isUnchanged ? "unchanged" : "modified" }} and
                  {{ isSpecial ? "": "not"}} special after clicking "Refresh".</div>
<br><br>
<!-- #docregion special-div -->
<!-- toggle the "special" class on/off with a property -->
<div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>
<!-- #enddocregion special-div -->
<div class="helpful study course">Helpful study course</div>
<div [ngClass]="{'helpful':false, 'study':true, 'course':true}">Study course</div>


<!-- NgStyle binding -->
<hr><h3>NgStyle Binding</h3>
<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">
  This div is x-large or smaller.
</div>

<h4>[ngStyle] binding to currentStyles - CSS property names</h4>
<p>currentStyles is {{ currentStyles | json }}</p>

<!-- #docregion NgStyle-2 -->
<div [ngStyle]="currentStyles">
  This div is initially italic, normal weight, and extra large (24px).
</div>
<!-- #enddocregion NgStyle-2 -->



<br>
<label for="canSave">italic: <input id="canSave" type="checkbox" [(ngModel)]="canSave"></label> |
<label for="isUnchanged">normal: <input id="isUnchanged" type="checkbox" [(ngModel)]="isUnchanged"></label> |
<label for="isSpecial">xlarge: <input id="isSpecial" type="checkbox" [(ngModel)]="isSpecial"></label>
<button type="button" (click)="setCurrentStyles()">Refresh currentStyles</button>
<br><br>
<div [ngStyle]="currentStyles">
  This div should be {{ canSave ? "italic": "plain"}},
                  {{ isUnchanged ? "normal weight" : "bold" }} and,
                  {{ isSpecial ? "extra large": "normal size"}} after clicking "Refresh".</div>

<hr>
<h2>Built-in structural directives</h2>
<h3 id="ngIf">NgIf Binding</h3>
<div>
  <p>If isActive is true, app-item-detail will render: </p>
  <!-- #docregion NgIf-1 -->
  <app-item-detail *ngIf="isActive" [item]="item"></app-item-detail>
  <!-- #enddocregion NgIf-1 -->

  <button type="button" (click)="isActiveToggle()">Toggle app-item-detail</button>
</div>
<p>If currentCustomer isn't null, say hello to Laura:</p>
<!-- #docregion NgIf-2 -->
<div *ngIf="currentCustomer">Hello, {{ currentCustomer.name }}</div>
<!-- #enddocregion NgIf-2 -->
<p>nullCustomer is null by default. NgIf guards against null. Give it a value to show it:</p>
<!-- #docregion NgIf-2b -->
<div *ngIf="nullCustomer">Hello, <span>{{ nullCustomer }}</span></div>
<!-- #enddocregion NgIf-2b -->
<button type="button" (click)="giveNullCustomerValue()">Give nullCustomer a value</button>


<h4>NgIf binding with template (no *)</h4>

<ng-template [ngIf]="currentItem">Add {{ currentItem.name }} with template</ng-template>
<hr>

<h4>Show/hide vs. NgIf</h4>
<!-- isSpecial is true -->
<div [class.hidden]="!isSpecial">Show with class</div>
<div [class.hidden]="isSpecial">Hide with class</div>

<p>ItemDetail is in the DOM but hidden</p>
<app-item-detail [class.hidden]="isSpecial"></app-item-detail>

<div [style.display]="isSpecial ? 'block' : 'none'">Show with style</div>
<div [style.display]="isSpecial ? 'none'  : 'block'">Hide with style</div>


<hr>
<h2 id="ngFor">NgFor Binding</h2>

<div class="box">
  <!-- #docregion NgFor-1, NgFor-1-2 -->
  <div *ngFor="let item of items">{{ item.name }}</div>
  <!-- #enddocregion NgFor-1, NgFor-1-2 -->
</div>

<p>*ngFor with ItemDetailComponent element</p>
<div class="box">
  <!-- #docregion NgFor-2, NgFor-1-2 -->
  <app-item-detail *ngFor="let item of items" [item]="item"></app-item-detail>
  <!-- #enddocregion NgFor-2, NgFor-1-2 -->
</div>


<h4 id="ngFor-index">*ngFor with index</h4>
<p>with <em>semi-colon</em> separator</p>
<div class="box">
  <!-- #docregion NgFor-3 -->
  <div *ngFor="let item of items; let i=index">{{ i + 1 }} - {{ item.name }}</div>
  <!-- #enddocregion NgFor-3 -->
</div>

<p>with <em>comma</em> separator</p>
<div class="box">
 <div *ngFor="let item of items, let i=index">{{ i + 1 }} - {{ item.name }}</div>
</div>

<h4 id="ngFor-trackBy">*ngFor trackBy</h4>
<button type="button" (click)="resetList()">Reset items</button>
<button type="button" (click)="changeIds()">Change ids</button>
<button type="button" (click)="clearTrackByCounts()">Clear counts</button>

<p><em>without</em> trackBy</p>
<div class="box">
  <div #noTrackBy *ngFor="let item of items">({{ item.id }}) {{ item.name }}</div>

  <div id="noTrackByCnt" *ngIf="itemsNoTrackByCount" >
    Item DOM elements change #{{ itemsNoTrackByCount }} without trackBy
  </div>
</div>

<p>with trackBy</p>
<div class="box">
  <div #withTrackBy *ngFor="let item of items; trackBy: trackByItems">({{ item.id }}) {{ item.name }}</div>

  <div id="withTrackByCnt" *ngIf="itemsWithTrackByCount">
    Item DOM elements change #{{ itemsWithTrackByCount }} with trackBy
  </div>
</div>

<br><br><br>

<p>with trackBy and <em>semi-colon</em> separator</p>
<div class="box">
  <!-- #docregion trackBy -->
  <div *ngFor="let item of items; trackBy: trackByItems">
    ({{ item.id }}) {{ item.name }}
  </div>
  <!-- #enddocregion trackBy -->
</div>

<p>with trackBy and <em>comma</em> separator</p>
<div class="box">
  <div *ngFor="let item of items, trackBy: trackByItems">({{ item.id }}) {{ item.name }}</div>
</div>

<p>with trackBy and <em>space</em> separator</p>
<div class="box">
  <div *ngFor="let item of items trackBy: trackByItems">({{ item.id }}) {{ item.name }}</div>
</div>

<p>with <em>generic</em> trackById function</p>
<div class="box">
  <div *ngFor="let item of items, trackBy: trackById">({{ item.id }}) {{ item.name }}</div>
</div>

<hr><h2>NgSwitch Binding</h2>

<p>Pick your favorite item</p>
<div>
  <label for="item-{{i}}" *ngFor="let i of items">
    <div><input id="item-{{i}}"type="radio" name="items" [(ngModel)]="currentItem" [value]="i">{{ i.name }}
    </div>
  </label>
</div>

<!-- #docregion NgSwitch -->
<div [ngSwitch]="currentItem.feature">
  <app-stout-item    *ngSwitchCase="'stout'"    [item]="currentItem"></app-stout-item>
  <app-device-item   *ngSwitchCase="'slim'"     [item]="currentItem"></app-device-item>
  <app-lost-item     *ngSwitchCase="'vintage'"  [item]="currentItem"></app-lost-item>
  <app-best-item     *ngSwitchCase="'bright'"   [item]="currentItem"></app-best-item>
<!-- #enddocregion NgSwitch -->
  <!-- #docregion NgSwitch-div -->
  <div *ngSwitchCase="'bright'">Are you as bright as {{ currentItem.name }}?</div>
  <!-- #enddocregion NgSwitch-div -->
<!-- #docregion NgSwitch -->
  <app-unknown-item  *ngSwitchDefault           [item]="currentItem"></app-unknown-item>
</div>
<!-- #enddocregion NgSwitch -->

`, styles: ['/* src/content/examples/built-in-directives/src/app/app.component.css */\nbutton {\n  font-size: 100%;\n  margin: 0 2px;\n}\ndiv[ng-reflect-ng-switch],\napp-unknown-item {\n  margin: .5rem 0;\n  display: block;\n}\n#noTrackByCnt,\n#withTrackByCnt {\n  color: darkred;\n  max-width: 450px;\n  margin: 4px;\n}\nimg {\n  height: 100px;\n}\n.box {\n  border: 1px solid black;\n  padding: 6px;\n  max-width: 450px;\n}\n.child-div {\n  margin-left: 1em;\n  font-weight: normal;\n}\n.context {\n  margin-left: 1em;\n}\n.hidden {\n  display: none;\n}\n.parent-div {\n  margin-top: 1em;\n  font-weight: bold;\n}\n.course {\n  font-weight: bold;\n  font-size: x-large;\n}\n.helpful {\n  color: red;\n}\n.saveable {\n  color: limegreen;\n}\n.study,\n.modified {\n  font-family: "Brush Script MT", cursive;\n  font-size: 2rem;\n}\n.toe {\n  margin-left: 1em;\n  font-style: italic;\n}\n.to-toc {\n  margin-top: 10px;\n  display: block;\n}\n/*# sourceMappingURL=app.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/built-in-directives/src/app/app.component.ts", lineNumber: 61 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-ALIF4UZW.js.map
