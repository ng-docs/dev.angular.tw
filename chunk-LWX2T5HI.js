import {
  CdkDrag,
  CdkDropList,
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

// src/content/examples/drag-drop/src/enter-predicate/app/app.component.ts
function CdkDragDropEnterPredicateExample_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const number_r1 = ctx.$implicit;
    ɵɵproperty("cdkDragData", number_r1);
    ɵɵadvance();
    ɵɵtextInterpolate(number_r1);
  }
}
__name(CdkDragDropEnterPredicateExample_For_5_Template, "CdkDragDropEnterPredicateExample_For_5_Template");
function CdkDragDropEnterPredicateExample_For_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const number_r2 = ctx.$implicit;
    ɵɵproperty("cdkDragData", number_r2);
    ɵɵadvance();
    ɵɵtextInterpolate(number_r2);
  }
}
__name(CdkDragDropEnterPredicateExample_For_11_Template, "CdkDragDropEnterPredicateExample_For_11_Template");
var _CdkDragDropEnterPredicateExample = class _CdkDragDropEnterPredicateExample {
  all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  even = [10];
  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item) {
    return item.data % 2 === 0;
  }
  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }
};
__name(_CdkDragDropEnterPredicateExample, "CdkDragDropEnterPredicateExample");
__publicField(_CdkDragDropEnterPredicateExample, "ɵfac", /* @__PURE__ */ __name(function CdkDragDropEnterPredicateExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropEnterPredicateExample)();
}, "CdkDragDropEnterPredicateExample_Factory"));
__publicField(_CdkDragDropEnterPredicateExample, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _CdkDragDropEnterPredicateExample, selectors: [["cdk-drag-drop-enter-predicate-example"]], decls: 12, vars: 4, consts: [[1, "example-container"], ["id", "all", "cdkDropList", "", "cdkDropListConnectedTo", "even", 1, "example-list", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListEnterPredicate"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"], ["id", "even", "cdkDropList", "", "cdkDropListConnectedTo", "all", 1, "example-list", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListEnterPredicate"]], template: /* @__PURE__ */ __name(function CdkDragDropEnterPredicateExample_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0)(1, "h2");
    ɵɵtext(2, "Available numbers");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 1);
    ɵɵlistener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_3_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_3_listener"));
    ɵɵrepeaterCreate(4, CdkDragDropEnterPredicateExample_For_5_Template, 2, 2, "div", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 0)(7, "h2");
    ɵɵtext(8, "Even numbers");
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 3);
    ɵɵlistener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_9_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_9_listener"));
    ɵɵrepeaterCreate(10, CdkDragDropEnterPredicateExample_For_11_Template, 2, 2, "div", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵproperty("cdkDropListData", ctx.all)("cdkDropListEnterPredicate", ctx.noReturnPredicate);
    ɵɵadvance();
    ɵɵrepeater(ctx.all);
    ɵɵadvance(5);
    ɵɵproperty("cdkDropListData", ctx.even)("cdkDropListEnterPredicate", ctx.evenPredicate);
    ɵɵadvance();
    ɵɵrepeater(ctx.even);
  }
}, "CdkDragDropEnterPredicateExample_Template"), dependencies: [CdkDropList, CdkDrag], styles: ["\n\n.example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropEnterPredicateExample = _CdkDragDropEnterPredicateExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropEnterPredicateExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-enter-predicate-example", standalone: true, imports: [CdkDropList, CdkDrag], template: '<div class="example-container">\n  <h2>Available numbers</h2>\n\n  <div\n    id="all"\n    cdkDropList\n    [cdkDropListData]="all"\n    cdkDropListConnectedTo="even"\n    class="example-list"\n    (cdkDropListDropped)="drop($event)"\n    [cdkDropListEnterPredicate]="noReturnPredicate">\n    @for (number of all; track number) {\n      <div\n          class="example-box"\n          [cdkDragData]="number"\n          cdkDrag>{{number}}</div>\n    }\n  </div>\n</div>\n\n<div class="example-container">\n  <h2>Even numbers</h2>\n\n  <div\n    id="even"\n    cdkDropList\n    [cdkDropListData]="even"\n    cdkDropListConnectedTo="all"\n    class="example-list"\n    (cdkDropListDropped)="drop($event)"\n    [cdkDropListEnterPredicate]="evenPredicate">\n    @for (number of even; track number) {\n      <div\n          class="example-box"\n          cdkDrag\n          [cdkDragData]="number">{{number}}</div>\n    }\n  </div>\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/enter-predicate/app/app.component.css */\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(CdkDragDropEnterPredicateExample, { className: "CdkDragDropEnterPredicateExample", filePath: "src/content/examples/drag-drop/src/enter-predicate/app/app.component.ts", lineNumber: 20 });
})();
export {
  CdkDragDropEnterPredicateExample
};
//# sourceMappingURL=chunk-LWX2T5HI.js.map
