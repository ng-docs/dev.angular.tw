import {
  CdkDrag,
  CdkDropList,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/sort-predicate/app/app.component.ts
function CdkDragDropSortPredicateExample_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
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
__name(CdkDragDropSortPredicateExample_For_2_Template, "CdkDragDropSortPredicateExample_For_2_Template");
var _CdkDragDropSortPredicateExample = class _CdkDragDropSortPredicateExample {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  drop(event) {
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }
  /**
   * Predicate function that only allows even numbers to be
   * sorted into even indices and odd numbers at odd indices.
   */
  sortPredicate(index, item) {
    return (index + 1) % 2 === item.data % 2;
  }
};
__name(_CdkDragDropSortPredicateExample, "CdkDragDropSortPredicateExample");
__publicField(_CdkDragDropSortPredicateExample, "ɵfac", /* @__PURE__ */ __name(function CdkDragDropSortPredicateExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropSortPredicateExample)();
}, "CdkDragDropSortPredicateExample_Factory"));
__publicField(_CdkDragDropSortPredicateExample, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _CdkDragDropSortPredicateExample, selectors: [["cdk-drag-drop-sort-predicate-example"]], decls: 3, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped", "cdkDropListSortPredicate"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"]], template: /* @__PURE__ */ __name(function CdkDragDropSortPredicateExample_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵlistener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropSortPredicateExample_Template_div_cdkDropListDropped_0_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropSortPredicateExample_Template_div_cdkDropListDropped_0_listener"));
    ɵɵrepeaterCreate(1, CdkDragDropSortPredicateExample_For_2_Template, 2, 2, "div", 1, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("cdkDropListSortPredicate", ctx.sortPredicate);
    ɵɵadvance();
    ɵɵrepeater(ctx.numbers);
  }
}, "CdkDragDropSortPredicateExample_Template"), dependencies: [CdkDropList, CdkDrag], styles: ["\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  width: 400px;\n  max-width: 100%;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropSortPredicateExample = _CdkDragDropSortPredicateExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropSortPredicateExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-sort-predicate-example", standalone: true, imports: [CdkDropList, CdkDrag], template: '<div\n  cdkDropList\n  class="example-list"\n  (cdkDropListDropped)="drop($event)"\n  [cdkDropListSortPredicate]="sortPredicate">\n  @for (number of numbers; track number) {\n    <div\n      class="example-box"\n      [cdkDragData]="number"\n      cdkDrag>{{number}}</div>\n  }\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/sort-predicate/app/app.component.css */\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  width: 400px;\n  max-width: 100%;\n}\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(CdkDragDropSortPredicateExample, { className: "CdkDragDropSortPredicateExample", filePath: "src/content/examples/drag-drop/src/sort-predicate/app/app.component.ts", lineNumber: 14 });
})();
export {
  CdkDragDropSortPredicateExample
};
//# sourceMappingURL=chunk-K77B5YZ3.js.map
