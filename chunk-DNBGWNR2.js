import {
  DynamicFormQuestionComponent
} from "./chunk-DMI7XEDN.js";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IP3YSDXJ.js";
import {
  Component,
  Injectable,
  __name,
  __publicField,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/dynamic-form/src/app/question-control.service.ts
var _QuestionControlService = class _QuestionControlService {
  toFormGroup(questions) {
    const group = {};
    questions.forEach((question) => {
      group[question.key] = question.required ? new FormControl(question.value || "", Validators.required) : new FormControl(question.value || "");
    });
    return new FormGroup(group);
  }
};
__name(_QuestionControlService, "QuestionControlService");
__publicField(_QuestionControlService, "ɵfac", /* @__PURE__ */ __name(function QuestionControlService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QuestionControlService)();
}, "QuestionControlService_Factory"));
__publicField(_QuestionControlService, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({ token: _QuestionControlService, factory: _QuestionControlService.ɵfac }));
var QuestionControlService = _QuestionControlService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionControlService, [{
    type: Injectable
  }], null, null);
})();

// src/content/examples/dynamic-form/src/app/dynamic-form.component.ts
function DynamicFormComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelement(1, "app-question", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("question", question_r1)("form", ctx_r1.form());
  }
}
__name(DynamicFormComponent_For_3_Template, "DynamicFormComponent_For_3_Template");
function DynamicFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "strong");
    ɵɵtext(2, "Saved the following values");
    ɵɵelementEnd();
    ɵɵelement(3, "br");
    ɵɵtext(4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r1.payLoad);
  }
}
__name(DynamicFormComponent_Conditional_7_Template, "DynamicFormComponent_Conditional_7_Template");
var _DynamicFormComponent = class _DynamicFormComponent {
  qcs = inject(QuestionControlService);
  questions = input([], ...ngDevMode ? [{ debugName: "questions" }] : []);
  form = computed(() => this.qcs.toFormGroup(this.questions()), ...ngDevMode ? [{ debugName: "form" }] : []);
  payLoad = "";
  onSubmit() {
    this.payLoad = JSON.stringify(this.form().getRawValue());
  }
};
__name(_DynamicFormComponent, "DynamicFormComponent");
__publicField(_DynamicFormComponent, "ɵfac", /* @__PURE__ */ __name(function DynamicFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DynamicFormComponent)();
}, "DynamicFormComponent_Factory"));
__publicField(_DynamicFormComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _DynamicFormComponent, selectors: [["app-dynamic-form"]], inputs: { questions: [1, "questions"] }, features: [ɵɵProvidersFeature([QuestionControlService])], decls: 8, vars: 3, consts: [[3, "ngSubmit", "formGroup"], [1, "form-row"], ["type", "submit", 3, "disabled"], [3, "question", "form"]], template: /* @__PURE__ */ __name(function DynamicFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "form", 0);
    ɵɵlistener("ngSubmit", /* @__PURE__ */ __name(function DynamicFormComponent_Template_form_ngSubmit_1_listener() {
      return ctx.onSubmit();
    }, "DynamicFormComponent_Template_form_ngSubmit_1_listener"));
    ɵɵrepeaterCreate(2, DynamicFormComponent_For_3_Template, 2, 2, "div", 1, ɵɵrepeaterTrackByIdentity);
    ɵɵelementStart(4, "div", 1)(5, "button", 2);
    ɵɵtext(6, "Save");
    ɵɵelementEnd()()();
    ɵɵconditionalCreate(7, DynamicFormComponent_Conditional_7_Template, 5, 1, "div", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx.form());
    ɵɵadvance();
    ɵɵrepeater(ctx.questions());
    ɵɵadvance(3);
    ɵɵproperty("disabled", !ctx.form().valid);
    ɵɵadvance(2);
    ɵɵconditional(ctx.payLoad ? 7 : -1);
  }
}, "DynamicFormComponent_Template"), dependencies: [DynamicFormQuestionComponent, ReactiveFormsModule, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective], encapsulation: 2 }));
var DynamicFormComponent = _DynamicFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicFormComponent, [{
    type: Component,
    args: [{ selector: "app-dynamic-form", providers: [QuestionControlService], imports: [DynamicFormQuestionComponent, ReactiveFormsModule], template: '<!-- #docregion -->\n<div>\n  <form (ngSubmit)="onSubmit()" [formGroup]="form()">\n    @for (question of questions(); track question) {\n      <div class="form-row">\n        <app-question [question]="question" [form]="form()" />\n      </div>\n    }\n\n    <div class="form-row">\n      <button type="submit" [disabled]="!form().valid">Save</button>\n    </div>\n  </form>\n\n  @if (payLoad) {\n    <div class="form-row"><strong>Saved the following values</strong><br />{{ payLoad }}</div>\n  }\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(DynamicFormComponent, { className: "DynamicFormComponent", filePath: "src/content/examples/dynamic-form/src/app/dynamic-form.component.ts", lineNumber: 16 });
})();

export {
  DynamicFormComponent
};
//# sourceMappingURL=chunk-DNBGWNR2.js.map
