import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "./chunk-B2C7H6VM.js";
import "./chunk-H7FALWCD.js";
import "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/disable-sorting/app/app.component.ts
function CdkDragDropDisabledSortingExample_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r1);
  }
}
__name(CdkDragDropDisabledSortingExample_For_6_Template, "CdkDragDropDisabledSortingExample_For_6_Template");
function CdkDragDropDisabledSortingExample_For_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r2);
  }
}
__name(CdkDragDropDisabledSortingExample_For_12_Template, "CdkDragDropDisabledSortingExample_For_12_Template");
var _CdkDragDropDisabledSortingExample = class _CdkDragDropDisabledSortingExample {
  items = ["Carrots", "Tomatoes", "Onions", "Apples", "Avocados"];
  basket = ["Oranges", "Bananas", "Cucumbers"];
  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
};
__name(_CdkDragDropDisabledSortingExample, "CdkDragDropDisabledSortingExample");
__publicField(_CdkDragDropDisabledSortingExample, "ɵfac", /* @__PURE__ */ __name(function CdkDragDropDisabledSortingExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropDisabledSortingExample)();
}, "CdkDragDropDisabledSortingExample_Factory"));
__publicField(_CdkDragDropDisabledSortingExample, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _CdkDragDropDisabledSortingExample, selectors: [["cdk-drag-drop-disabled-sorting-example"]], decls: 13, vars: 2, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "example-list", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 1, "example-box"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped", "cdkDropListData"]], template: /* @__PURE__ */ __name(function CdkDragDropDisabledSortingExample_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    ɵɵtext(3, "Available items");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 2);
    ɵɵlistener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_4_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_4_listener"));
    ɵɵrepeaterCreate(5, CdkDragDropDisabledSortingExample_For_6_Template, 2, 1, "div", 3, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 1)(8, "h2");
    ɵɵtext(9, "Shopping basket");
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 4);
    ɵɵlistener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_10_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_10_listener"));
    ɵɵrepeaterCreate(11, CdkDragDropDisabledSortingExample_For_12_Template, 2, 1, "div", 3, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵproperty("cdkDropListData", ctx.items);
    ɵɵadvance();
    ɵɵrepeater(ctx.items);
    ɵɵadvance(5);
    ɵɵproperty("cdkDropListData", ctx.basket);
    ɵɵadvance();
    ɵɵrepeater(ctx.basket);
  }
}, "CdkDragDropDisabledSortingExample_Template"), dependencies: [CdkDropListGroup, CdkDropList, CdkDrag], styles: ["\n\nHTML[_ngcontent-%COMP%]   TS[_ngcontent-%COMP%]   CSS[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropDisabledSortingExample = _CdkDragDropDisabledSortingExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropDisabledSortingExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-disabled-sorting-example", standalone: true, imports: [CdkDropListGroup, CdkDropList, CdkDrag], template: '<div cdkDropListGroup>\n  <div class="example-container">\n    <h2>Available items</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]="items"\n      class="example-list"\n      cdkDropListSortingDisabled\n      (cdkDropListDropped)="drop($event)">\n      @for (item of items; track item) {\n        <div class="example-box" cdkDrag>{{item}}</div>\n      }\n    </div>\n  </div>\n\n  <div class="example-container">\n    <h2>Shopping basket</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]="basket"\n      class="example-list"\n      (cdkDropListDropped)="drop($event)">\n      @for (item of basket; track item) {\n        <div class="example-box" cdkDrag>{{item}}</div>\n      }\n    </div>\n  </div>\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/disable-sorting/app/app.component.css */\nHTML TS CSS .example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(CdkDragDropDisabledSortingExample, { className: "CdkDragDropDisabledSortingExample", filePath: "src/content/examples/drag-drop/src/disable-sorting/app/app.component.ts", lineNumber: 21 });
})();
export {
  CdkDragDropDisabledSortingExample
};
//# sourceMappingURL=chunk-QUKHEMPA.js.map
