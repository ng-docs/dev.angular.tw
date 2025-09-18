import {
  CdkDrag,
  CdkDropList,
  copyArrayItem,
  moveItemInArray
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/copy-list/app/app.component.ts
var _c0 = /* @__PURE__ */ __name((a0) => [a0], "_c0");
function CdkDragDropCopyListExample_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    ɵɵproperty("cdkDragData", product_r2);
    ɵɵadvance();
    ɵɵtextInterpolate(product_r2);
  }
}
__name(CdkDragDropCopyListExample_For_5_Template, "CdkDragDropCopyListExample_For_5_Template");
function CdkDragDropCopyListExample_For_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(product_r3);
  }
}
__name(CdkDragDropCopyListExample_For_12_Template, "CdkDragDropCopyListExample_For_12_Template");
var _CdkDragDropCopyListExample = class _CdkDragDropCopyListExample {
  products = ["Bananas", "Oranges", "Bread", "Butter", "Soda", "Eggs"];
  cart = ["Tomatoes"];
  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
};
__name(_CdkDragDropCopyListExample, "CdkDragDropCopyListExample");
__publicField(_CdkDragDropCopyListExample, "ɵfac", /* @__PURE__ */ __name(function CdkDragDropCopyListExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropCopyListExample)();
}, "CdkDragDropCopyListExample_Factory"));
__publicField(_CdkDragDropCopyListExample, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _CdkDragDropCopyListExample, selectors: [["cdk-drag-drop-copy-list-example"]], decls: 13, vars: 5, consts: [["cartList", "cdkDropList"], [1, "example-container"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", "cdkDropListHasAnchor", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 1, "example-box"]], template: /* @__PURE__ */ __name(function CdkDragDropCopyListExample_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "h2");
    ɵɵtext(2, "Products");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 2);
    ɵɵrepeaterCreate(4, CdkDragDropCopyListExample_For_5_Template, 2, 2, "div", 3, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 1)(7, "h2");
    ɵɵtext(8, "Shopping cart");
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 4, 0);
    ɵɵlistener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropCopyListExample_Template_div_cdkDropListDropped_9_listener($event) {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.drop($event));
    }, "CdkDragDropCopyListExample_Template_div_cdkDropListDropped_9_listener"));
    ɵɵrepeaterCreate(11, CdkDragDropCopyListExample_For_12_Template, 2, 1, "div", 5, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const cartList_r4 = ɵɵreference(10);
    ɵɵadvance(3);
    ɵɵproperty("cdkDropListData", ctx.products)("cdkDropListConnectedTo", ɵɵpureFunction1(3, _c0, cartList_r4));
    ɵɵadvance();
    ɵɵrepeater(ctx.products);
    ɵɵadvance(5);
    ɵɵproperty("cdkDropListData", ctx.cart);
    ɵɵadvance(2);
    ɵɵrepeater(ctx.cart);
  }
}, "CdkDragDropCopyListExample_Template"), dependencies: [CdkDropList, CdkDrag], styles: ["\n\n.example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  font-family: sans-serif;\n}\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  font-family: sans-serif;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropCopyListExample = _CdkDragDropCopyListExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropCopyListExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-copy-list-example", imports: [CdkDropList, CdkDrag], template: '<div class="example-container">\n  <h2>Products</h2>\n\n  <div\n    cdkDropList\n    [cdkDropListData]="products"\n    [cdkDropListConnectedTo]="[cartList]"\n    cdkDropListSortingDisabled\n    cdkDropListHasAnchor\n    class="example-list"\n  >\n    @for (product of products; track $index) {\n      <div class="example-box" cdkDrag [cdkDragData]="product">{{product}}</div>\n    }\n  </div>\n</div>\n\n<div class="example-container">\n  <h2>Shopping cart</h2>\n\n  <div\n    cdkDropList\n    #cartList="cdkDropList"\n    [cdkDropListData]="cart"\n    class="example-list"\n    (cdkDropListDropped)="drop($event)"\n  >\n    @for (product of cart; track $index) {\n      <div class="example-box" cdkDrag>{{product}}</div>\n    }\n  </div>\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/copy-list/app/app.component.css */\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  font-family: sans-serif;\n}\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  font-family: sans-serif;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(CdkDragDropCopyListExample, { className: "CdkDragDropCopyListExample", filePath: "src/content/examples/drag-drop/src/copy-list/app/app.component.ts", lineNumber: 19 });
})();
export {
  CdkDragDropCopyListExample
};
//# sourceMappingURL=chunk-S3D2ZHCM.js.map
