import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IP3YSDXJ.js";
import {
  Component,
  __name,
  __publicField,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/dynamic-form/src/app/dynamic-form-question.component.ts
function DynamicFormQuestionComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formControlName", ctx_r0.question().key)("id", ctx_r0.question().key)("type", ctx_r0.question().type);
  }
}
__name(DynamicFormQuestionComponent_Case_4_Template, "DynamicFormQuestionComponent_Case_4_Template");
function DynamicFormQuestionComponent_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    ɵɵproperty("value", opt_r2.key);
    ɵɵadvance();
    ɵɵtextInterpolate(opt_r2.value);
  }
}
__name(DynamicFormQuestionComponent_Case_5_For_2_Template, "DynamicFormQuestionComponent_Case_5_For_2_Template");
function DynamicFormQuestionComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "select", 2);
    ɵɵrepeaterCreate(1, DynamicFormQuestionComponent_Case_5_For_2_Template, 2, 2, "option", 4, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r0.question().key)("formControlName", ctx_r0.question().key);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.question().options);
  }
}
__name(DynamicFormQuestionComponent_Case_5_Template, "DynamicFormQuestionComponent_Case_5_Template");
function DynamicFormQuestionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("", ctx_r0.question().label, " is required");
  }
}
__name(DynamicFormQuestionComponent_Conditional_6_Template, "DynamicFormQuestionComponent_Conditional_6_Template");
var _DynamicFormQuestionComponent = class _DynamicFormQuestionComponent {
  question = input.required(...ngDevMode ? [{ debugName: "question" }] : []);
  form = input.required(...ngDevMode ? [{ debugName: "form" }] : []);
  get isValid() {
    return this.form().controls[this.question().key].valid;
  }
};
__name(_DynamicFormQuestionComponent, "DynamicFormQuestionComponent");
__publicField(_DynamicFormQuestionComponent, "ɵfac", /* @__PURE__ */ __name(function DynamicFormQuestionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DynamicFormQuestionComponent)();
}, "DynamicFormQuestionComponent_Factory"));
__publicField(_DynamicFormQuestionComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _DynamicFormQuestionComponent, selectors: [["app-question"]], inputs: { question: [1, "question"], form: [1, "form"] }, decls: 7, vars: 5, consts: [[3, "formGroup"], [3, "formControlName", "id", "type"], [3, "id", "formControlName"], [1, "errorMessage"], [3, "value"]], template: /* @__PURE__ */ __name(function DynamicFormQuestionComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0)(1, "label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div");
    ɵɵconditionalCreate(4, DynamicFormQuestionComponent_Case_4_Template, 1, 3, "input", 1)(5, DynamicFormQuestionComponent_Case_5_Template, 3, 2, "select", 2);
    ɵɵelementEnd();
    ɵɵconditionalCreate(6, DynamicFormQuestionComponent_Conditional_6_Template, 2, 1, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    ɵɵproperty("formGroup", ctx.form());
    ɵɵadvance();
    ɵɵattribute("for", ctx.question().key);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx.question().label);
    ɵɵadvance(2);
    ɵɵconditional((tmp_3_0 = ctx.question().controlType) === "textbox" ? 4 : tmp_3_0 === "dropdown" ? 5 : -1);
    ɵɵadvance(2);
    ɵɵconditional(!ctx.isValid ? 6 : -1);
  }
}, "DynamicFormQuestionComponent_Template"), dependencies: [ReactiveFormsModule, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 }));
var DynamicFormQuestionComponent = _DynamicFormQuestionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicFormQuestionComponent, [{
    type: Component,
    args: [{ selector: "app-question", imports: [ReactiveFormsModule], template: `<!-- #docregion -->
<div [formGroup]="form()">
  <label [attr.for]="question().key">{{ question().label }}</label>

  <div>
    @switch (question().controlType) {
      @case ('textbox') {
        <input [formControlName]="question().key" [id]="question().key" [type]="question().type" />
      }
      @case ('dropdown') {
        <select [id]="question().key" [formControlName]="question().key">
          @for (opt of question().options; track opt) {
            <option [value]="opt.key">{{ opt.value }}</option>
          }
        </select>
      }
    }
  </div>

  @if (!isValid) {
    <div class="errorMessage">{{ question().label }} is required</div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(DynamicFormQuestionComponent, { className: "DynamicFormQuestionComponent", filePath: "src/content/examples/dynamic-form/src/app/dynamic-form-question.component.ts", lineNumber: 12 });
})();

export {
  DynamicFormQuestionComponent
};
//# sourceMappingURL=chunk-DMI7XEDN.js.map
