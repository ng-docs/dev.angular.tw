import {
  Component,
  __name,
  __publicField,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/built-in-directives/src/app/item-switch.component.ts
var _StoutItemComponent = class _StoutItemComponent {
  item = input.required(...ngDevMode ? [{ debugName: "item" }] : []);
};
__name(_StoutItemComponent, "StoutItemComponent");
__publicField(_StoutItemComponent, "ɵfac", /* @__PURE__ */ __name(function StoutItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoutItemComponent)();
}, "StoutItemComponent_Factory"));
__publicField(_StoutItemComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _StoutItemComponent, selectors: [["app-stout-item"]], inputs: { item: [1, "item"] }, decls: 1, vars: 1, template: /* @__PURE__ */ __name(function StoutItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate1("I'm a little ", ctx.item().name, ", short and stout!");
  }
}, "StoutItemComponent_Template"), encapsulation: 2 }));
var StoutItemComponent = _StoutItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoutItemComponent, [{
    type: Component,
    args: [{
      selector: "app-stout-item",
      template: "I'm a little {{item().name}}, short and stout!"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(StoutItemComponent, { className: "StoutItemComponent", filePath: "src/content/examples/built-in-directives/src/app/item-switch.component.ts", lineNumber: 10 });
})();
var _BestItemComponent = class _BestItemComponent {
  item = input.required(...ngDevMode ? [{ debugName: "item" }] : []);
};
__name(_BestItemComponent, "BestItemComponent");
__publicField(_BestItemComponent, "ɵfac", /* @__PURE__ */ __name(function BestItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BestItemComponent)();
}, "BestItemComponent_Factory"));
__publicField(_BestItemComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _BestItemComponent, selectors: [["app-best-item"]], inputs: { item: [1, "item"] }, decls: 1, vars: 1, template: /* @__PURE__ */ __name(function BestItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate1("This is the brightest ", ctx.item().name, " in town.");
  }
}, "BestItemComponent_Template"), encapsulation: 2 }));
var BestItemComponent = _BestItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BestItemComponent, [{
    type: Component,
    args: [{
      selector: "app-best-item",
      template: "This is the brightest {{item().name}} in town."
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(BestItemComponent, { className: "BestItemComponent", filePath: "src/content/examples/built-in-directives/src/app/item-switch.component.ts", lineNumber: 19 });
})();
var _DeviceItemComponent = class _DeviceItemComponent {
  item = input.required(...ngDevMode ? [{ debugName: "item" }] : []);
};
__name(_DeviceItemComponent, "DeviceItemComponent");
__publicField(_DeviceItemComponent, "ɵfac", /* @__PURE__ */ __name(function DeviceItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeviceItemComponent)();
}, "DeviceItemComponent_Factory"));
__publicField(_DeviceItemComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _DeviceItemComponent, selectors: [["app-device-item"]], inputs: { item: [1, "item"] }, decls: 1, vars: 1, template: /* @__PURE__ */ __name(function DeviceItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate1("Which is the slimmest ", ctx.item().name, "?");
  }
}, "DeviceItemComponent_Template"), encapsulation: 2 }));
var DeviceItemComponent = _DeviceItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceItemComponent, [{
    type: Component,
    args: [{
      selector: "app-device-item",
      template: "Which is the slimmest {{item().name}}?"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(DeviceItemComponent, { className: "DeviceItemComponent", filePath: "src/content/examples/built-in-directives/src/app/item-switch.component.ts", lineNumber: 27 });
})();
var _LostItemComponent = class _LostItemComponent {
  item = input.required(...ngDevMode ? [{ debugName: "item" }] : []);
};
__name(_LostItemComponent, "LostItemComponent");
__publicField(_LostItemComponent, "ɵfac", /* @__PURE__ */ __name(function LostItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LostItemComponent)();
}, "LostItemComponent_Factory"));
__publicField(_LostItemComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _LostItemComponent, selectors: [["app-lost-item"]], inputs: { item: [1, "item"] }, decls: 1, vars: 1, template: /* @__PURE__ */ __name(function LostItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate1("Has anyone seen my ", ctx.item().name, "?");
  }
}, "LostItemComponent_Template"), encapsulation: 2 }));
var LostItemComponent = _LostItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LostItemComponent, [{
    type: Component,
    args: [{
      selector: "app-lost-item",
      template: "Has anyone seen my {{item().name}}?"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(LostItemComponent, { className: "LostItemComponent", filePath: "src/content/examples/built-in-directives/src/app/item-switch.component.ts", lineNumber: 35 });
})();
var _UnknownItemComponent = class _UnknownItemComponent {
  item = input(void 0, ...ngDevMode ? [{ debugName: "item" }] : []);
  message = computed(() => {
    const itemName = this.item()?.name;
    return itemName ? `${itemName} is strange and mysterious.` : "A mystery wrapped in a fishbowl.";
  }, ...ngDevMode ? [{ debugName: "message" }] : []);
};
__name(_UnknownItemComponent, "UnknownItemComponent");
__publicField(_UnknownItemComponent, "ɵfac", /* @__PURE__ */ __name(function UnknownItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UnknownItemComponent)();
}, "UnknownItemComponent_Factory"));
__publicField(_UnknownItemComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _UnknownItemComponent, selectors: [["app-unknown-item"]], inputs: { item: [1, "item"] }, decls: 1, vars: 1, template: /* @__PURE__ */ __name(function UnknownItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ctx.message());
  }
}, "UnknownItemComponent_Template"), encapsulation: 2 }));
var UnknownItemComponent = _UnknownItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnknownItemComponent, [{
    type: Component,
    args: [{
      selector: "app-unknown-item",
      template: "{{message()}}"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(UnknownItemComponent, { className: "UnknownItemComponent", filePath: "src/content/examples/built-in-directives/src/app/item-switch.component.ts", lineNumber: 43 });
})();
var ItemSwitchComponents = [
  StoutItemComponent,
  BestItemComponent,
  DeviceItemComponent,
  LostItemComponent,
  UnknownItemComponent
];

export {
  StoutItemComponent,
  BestItemComponent,
  DeviceItemComponent,
  LostItemComponent,
  UnknownItemComponent,
  ItemSwitchComponents
};
//# sourceMappingURL=chunk-OS5CC4VV.js.map
