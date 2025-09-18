import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IP3YSDXJ.js";
import {
  JsonPipe
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2CX5BJWG.js";

// src/content/examples/forms/src/app/actor.ts
var _Actor = class _Actor {
  id;
  name;
  skill;
  studio;
  constructor(id, name, skill, studio) {
    this.id = id;
    this.name = name;
    this.skill = skill;
    this.studio = studio;
  }
};
__name(_Actor, "Actor");
var Actor = _Actor;

// src/content/examples/forms/src/app/actor-form/actor-form.component.ts
function ActorFormComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    ɵɵproperty("value", skill_r2);
    ɵɵadvance();
    ɵɵtextInterpolate(skill_r2);
  }
}
__name(ActorFormComponent_For_23_Template, "ActorFormComponent_For_23_Template");
function ActorFormComponent_For_83_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    ɵɵproperty("value", skill_r4);
    ɵɵadvance();
    ɵɵtextInterpolate(skill_r4);
  }
}
__name(ActorFormComponent_For_83_Template, "ActorFormComponent_For_83_Template");
function ActorFormComponent_For_107_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    ɵɵproperty("value", skill_r5);
    ɵɵadvance();
    ɵɵtextInterpolate(skill_r5);
  }
}
__name(ActorFormComponent_For_107_Template, "ActorFormComponent_For_107_Template");
var _ActorFormComponent = class _ActorFormComponent {
  // #enddocregion imports
  skills = ["Method Acting", "Singing", "Dancing", "Swordfighting"];
  model = new Actor(18, "Tom Cruise", this.skills[3], "CW Productions");
  // #docregion submitted
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  // #enddocregion submitted
  // #enddocregion final
  // #enddocregion v1
  // #docregion final, new-actor
  newActor() {
    this.model = new Actor(42, "", "");
  }
  // #enddocregion final, new-actor
  heroine() {
    const myActress = new Actor(42, "Marilyn Monroe", "Singing");
    console.log("My actress is called " + myActress.name);
    return myActress;
  }
  //////// NOT SHOWN IN DOCS ////////
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(actorForm)}}
  showFormControls(form) {
    return form && form.controls.name && form.controls.name.value;
  }
};
__name(_ActorFormComponent, "ActorFormComponent");
__publicField(_ActorFormComponent, "ɵfac", /* @__PURE__ */ __name(function ActorFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ActorFormComponent)();
}, "ActorFormComponent_Factory"));
__publicField(_ActorFormComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _ActorFormComponent, selectors: [["app-actor-form"]], decls: 116, vars: 22, consts: [["actorForm", "ngForm"], ["name", "ngModel"], ["skill", "ngModel"], [1, "container"], [3, "hidden"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "studio"], ["type", "text", "id", "studio", "name", "studio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "skill"], ["id", "skill", "required", "", "name", "skill", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "row"], [1, "col-xs-3"], [1, "col-xs-9"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "no-style", 2, "margin-left", "4px"], ["type", "text", "id", "name", "required", "", 1, "form-control"], ["type", "text", "id", "studio", 1, "form-control"], ["id", "skill", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success"]], template: /* @__PURE__ */ __name(function ActorFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "h1");
    ɵɵtext(3, "Actor Form");
    ɵɵelementEnd();
    ɵɵelementStart(4, "form", 5, 0);
    ɵɵlistener("ngSubmit", /* @__PURE__ */ __name(function ActorFormComponent_Template_form_ngSubmit_4_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.onSubmit());
    }, "ActorFormComponent_Template_form_ngSubmit_4_listener"));
    ɵɵelementStart(6, "div", 6)(7, "label", 7);
    ɵɵtext(8, "Name");
    ɵɵelementEnd();
    ɵɵelementStart(9, "input", 8, 1);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_9_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
      return ɵɵresetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_9_listener"));
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 9);
    ɵɵtext(12, " Name is required ");
    ɵɵelementEnd()();
    ɵɵelementStart(13, "div", 6)(14, "label", 10);
    ɵɵtext(15, "Studio Affiliation");
    ɵɵelementEnd();
    ɵɵelementStart(16, "input", 11);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_16_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.model.studio, $event) || (ctx.model.studio = $event);
      return ɵɵresetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_16_listener"));
    ɵɵelementEnd()();
    ɵɵelementStart(17, "div", 6)(18, "label", 12);
    ɵɵtext(19, "Skill");
    ɵɵelementEnd();
    ɵɵelementStart(20, "select", 13, 2);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_select_ngModelChange_20_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.model.skill, $event) || (ctx.model.skill = $event);
      return ɵɵresetView($event);
    }, "ActorFormComponent_Template_select_ngModelChange_20_listener"));
    ɵɵrepeaterCreate(22, ActorFormComponent_For_23_Template, 2, 2, "option", 14, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
    ɵɵelementStart(24, "div", 9);
    ɵɵtext(25, " skill is required ");
    ɵɵelementEnd()();
    ɵɵelementStart(26, "button", 15);
    ɵɵtext(27, "Submit");
    ɵɵelementEnd();
    ɵɵelementStart(28, "button", 16);
    ɵɵlistener("click", /* @__PURE__ */ __name(function ActorFormComponent_Template_button_click_28_listener() {
      ɵɵrestoreView(_r1);
      const actorForm_r3 = ɵɵreference(5);
      ctx.newActor();
      return ɵɵresetView(actorForm_r3.reset());
    }, "ActorFormComponent_Template_button_click_28_listener"));
    ɵɵtext(29, "New Actor");
    ɵɵelementEnd();
    ɵɵelementStart(30, "em");
    ɵɵtext(31, "with");
    ɵɵelementEnd();
    ɵɵtext(32, " reset \xA0\xA0 ");
    ɵɵelementStart(33, "button", 16);
    ɵɵlistener("click", /* @__PURE__ */ __name(function ActorFormComponent_Template_button_click_33_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.newActor());
    }, "ActorFormComponent_Template_button_click_33_listener"));
    ɵɵtext(34, "New Actor");
    ɵɵelementEnd();
    ɵɵelementStart(35, "em");
    ɵɵtext(36, "without");
    ɵɵelementEnd();
    ɵɵtext(37, " reset ");
    ɵɵelementStart(38, "div");
    ɵɵelement(39, "hr");
    ɵɵtext(40);
    ɵɵelementEnd()()();
    ɵɵelementStart(41, "div", 4)(42, "h2");
    ɵɵtext(43, "You submitted the following:");
    ɵɵelementEnd();
    ɵɵelementStart(44, "div", 17)(45, "div", 18);
    ɵɵtext(46, "Name");
    ɵɵelementEnd();
    ɵɵelementStart(47, "div", 19);
    ɵɵtext(48);
    ɵɵelementEnd()();
    ɵɵelementStart(49, "div", 17)(50, "div", 18);
    ɵɵtext(51, "Studio");
    ɵɵelementEnd();
    ɵɵelementStart(52, "div", 19);
    ɵɵtext(53);
    ɵɵelementEnd()();
    ɵɵelementStart(54, "div", 17)(55, "div", 18);
    ɵɵtext(56, "Skill");
    ɵɵelementEnd();
    ɵɵelementStart(57, "div", 19);
    ɵɵtext(58);
    ɵɵelementEnd()();
    ɵɵelement(59, "br");
    ɵɵelementStart(60, "button", 20);
    ɵɵlistener("click", /* @__PURE__ */ __name(function ActorFormComponent_Template_button_click_60_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.submitted = false);
    }, "ActorFormComponent_Template_button_click_60_listener"));
    ɵɵtext(61, " Edit ");
    ɵɵelementEnd()()();
    ɵɵelementStart(62, "div");
    ɵɵelement(63, "form");
    ɵɵelementEnd();
    ɵɵelement(64, "hr");
    ɵɵelementStart(65, "div", 21)(66, "div", 3)(67, "h1");
    ɵɵtext(68, "Actor Form");
    ɵɵelementEnd();
    ɵɵelementStart(69, "form")(70, "div", 6)(71, "label", 7);
    ɵɵtext(72, "Name");
    ɵɵelementEnd();
    ɵɵelement(73, "input", 22);
    ɵɵelementEnd();
    ɵɵelementStart(74, "div", 6)(75, "label", 10);
    ɵɵtext(76, "Studio");
    ɵɵelementEnd();
    ɵɵelement(77, "input", 23);
    ɵɵelementEnd();
    ɵɵelementStart(78, "div", 6)(79, "label", 12);
    ɵɵtext(80, "Skill");
    ɵɵelementEnd();
    ɵɵelementStart(81, "select", 24);
    ɵɵrepeaterCreate(82, ActorFormComponent_For_83_Template, 2, 2, "option", 14, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()();
    ɵɵelementStart(84, "button", 25);
    ɵɵtext(85, "Submit");
    ɵɵelementEnd()()();
    ɵɵelement(86, "hr");
    ɵɵelementStart(87, "div", 3)(88, "h1");
    ɵɵtext(89, "Actor Form");
    ɵɵelementEnd();
    ɵɵelementStart(90, "form", null, 0);
    ɵɵtext(92);
    ɵɵpipe(93, "json");
    ɵɵelementStart(94, "div", 6)(95, "label", 7);
    ɵɵtext(96, "Name");
    ɵɵelementEnd();
    ɵɵelementStart(97, "input", 8);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_97_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
      return ɵɵresetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_97_listener"));
    ɵɵelementEnd()();
    ɵɵelementStart(98, "div", 6)(99, "label", 10);
    ɵɵtext(100, "Studio");
    ɵɵelementEnd();
    ɵɵelementStart(101, "input", 11);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_101_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.model.studio, $event) || (ctx.model.studio = $event);
      return ɵɵresetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_101_listener"));
    ɵɵelementEnd()();
    ɵɵelementStart(102, "div", 6)(103, "label", 12);
    ɵɵtext(104, "Skill");
    ɵɵelementEnd();
    ɵɵelementStart(105, "select", 13);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_select_ngModelChange_105_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.model.skill, $event) || (ctx.model.skill = $event);
      return ɵɵresetView($event);
    }, "ActorFormComponent_Template_select_ngModelChange_105_listener"));
    ɵɵrepeaterCreate(106, ActorFormComponent_For_107_Template, 2, 2, "option", 14, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()();
    ɵɵelementStart(108, "button", 25);
    ɵɵtext(109, "Submit");
    ɵɵelementEnd()()();
    ɵɵelement(110, "hr");
    ɵɵelementStart(111, "input", 8);
    ɵɵtwoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_111_listener($event) {
      ɵɵrestoreView(_r1);
      ɵɵtwoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
      return ɵɵresetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_111_listener"));
    ɵɵelementEnd();
    ɵɵtext(112);
    ɵɵelement(113, "hr");
    ɵɵelementStart(114, "input", 8);
    ɵɵlistener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_114_listener($event) {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.model.name = $event);
    }, "ActorFormComponent_Template_input_ngModelChange_114_listener"));
    ɵɵelementEnd();
    ɵɵtext(115);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const actorForm_r3 = ɵɵreference(5);
    const name_r6 = ɵɵreference(10);
    const skill_r7 = ɵɵreference(21);
    ɵɵadvance();
    ɵɵproperty("hidden", ctx.submitted);
    ɵɵadvance(8);
    ɵɵtwoWayProperty("ngModel", ctx.model.name);
    ɵɵadvance(2);
    ɵɵproperty("hidden", name_r6.valid || name_r6.pristine);
    ɵɵadvance(5);
    ɵɵtwoWayProperty("ngModel", ctx.model.studio);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx.model.skill);
    ɵɵadvance(2);
    ɵɵrepeater(ctx.skills);
    ɵɵadvance(2);
    ɵɵproperty("hidden", skill_r7.valid || skill_r7.pristine);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !actorForm_r3.form.valid);
    ɵɵadvance(14);
    ɵɵtextInterpolate1(" Name via form.controls = ", ctx.showFormControls(actorForm_r3), " ");
    ɵɵadvance();
    ɵɵproperty("hidden", !ctx.submitted);
    ɵɵadvance(7);
    ɵɵtextInterpolate(ctx.model.name);
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx.model.studio);
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx.model.skill);
    ɵɵadvance(24);
    ɵɵrepeater(ctx.skills);
    ɵɵadvance(10);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(93, 20, ctx.model), " ");
    ɵɵadvance(5);
    ɵɵtwoWayProperty("ngModel", ctx.model.name);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx.model.studio);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx.model.skill);
    ɵɵadvance();
    ɵɵrepeater(ctx.skills);
    ɵɵadvance(5);
    ɵɵtwoWayProperty("ngModel", ctx.model.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" TODO: remove this: ", ctx.model.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx.model.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" TODO: remove this: ", ctx.model.name, "\n");
  }
}, "ActorFormComponent_Template"), dependencies: [FormsModule, ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, JsonPipe], styles: ["\n\n.no-style[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\n  border-left: 1px solid #CCC;\n}\n.no-style[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%] {\n  border-left: 1px solid #CCC;\n}\n/*# sourceMappingURL=actor-form.component.css.map */"] }));
var ActorFormComponent = _ActorFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActorFormComponent, [{
    type: Component,
    args: [{ selector: "app-actor-form", imports: [FormsModule, JsonPipe], template: '<!-- #docplaster -->\n<!-- #docregion final -->\n<div class="container">\n  <!-- #docregion edit-div -->\n  <div [hidden]="submitted">\n    <h1>Actor Form</h1>\n    <!-- #docregion ngSubmit -->\n    <form (ngSubmit)="onSubmit()" #actorForm="ngForm">\n      <!-- #enddocregion ngSubmit, edit-div -->\n      <div class="form-group">\n        <!-- #docregion name-with-error-msg -->\n        <label for="name">Name</label>\n        <input type="text" class="form-control" id="name"\n               required [(ngModel)]="model.name" name="name"\n               #name="ngModel">\n        <!-- #docregion hidden-error-msg -->\n        <div [hidden]="name.valid || name.pristine"\n             class="alert alert-danger">\n        <!-- #enddocregion hidden-error-msg -->\n          Name is required\n        </div>\n        <!-- #enddocregion name-with-error-msg -->\n      </div>\n\n      <div class="form-group">\n        <label for="studio">Studio Affiliation</label>\n        <input type="text" class="form-control" id="studio"\n               [(ngModel)]="model.studio" name="studio">\n      </div>\n\n      <div class="form-group">\n        <label for="skill">Skill</label>\n        <select class="form-control" id="skill"\n                required [(ngModel)]="model.skill" name="skill"\n                #skill="ngModel">\n          @for (skill of skills; track $index) {\n            <option [value]="skill">{{ skill }}</option>\n          }\n        </select>\n        <div [hidden]="skill.valid || skill.pristine" class="alert alert-danger">\n          skill is required\n        </div>\n      </div>\n\n      <!-- #docregion submit-button -->\n      <button type="submit" class="btn btn-success"\n        [disabled]="!actorForm.form.valid">Submit</button>\n      <!-- #enddocregion submit-button -->\n      <!-- #docregion new-actor-button-form-reset -->\n      <button type="button" class="btn btn-default"\n        (click)="newActor(); actorForm.reset()">New Actor</button>\n      <!-- #enddocregion new-actor-button-form-reset -->\n <!-- #enddocregion final -->\n      <em>with</em> reset\n\n      &nbsp;&nbsp;\n      <!-- #docregion new-actor-button-no-reset -->\n      <button type="button" class="btn btn-default"\n        (click)="newActor()">New Actor</button>\n      <!-- #enddocregion new-actor-button-no-reset -->\n      <em>without</em> reset\n\n     <!-- NOT SHOWN IN DOCS -->\n      <div>\n        <hr>\n        Name via form.controls = {{ showFormControls(actorForm) }}\n      </div>\n     <!-- - -->\n<!-- #docregion final -->\n    </form>\n  </div>\n\n  <!-- #docregion submitted -->\n  <div [hidden]="!submitted">\n    <h2>You submitted the following:</h2>\n    <div class="row">\n      <div class="col-xs-3">Name</div>\n      <div class="col-xs-9">{{ model.name }}</div>\n    </div>\n    <div class="row">\n      <div class="col-xs-3">Studio</div>\n      <div class="col-xs-9">{{ model.studio }}</div>\n    </div>\n    <div class="row">\n      <div class="col-xs-3">Skill</div>\n      <div class="col-xs-9">{{ model.skill }}</div>\n    </div>\n    <br>\n    <button type="button" class="btn btn-primary" (click)="submitted=false">\n      Edit\n    </button>\n  </div>\n  <!-- #enddocregion submitted -->\n</div>\n <!-- #enddocregion final -->\n\n<!-- ====================================================  -->\n  <div>\n    <form>\n<!-- #docregion edit-div -->\n\n       <!-- ... all of the form ... -->\n\n    </form>\n  </div>\n<!-- #enddocregion edit-div -->\n\n<!-- ====================================================  -->\n<hr>\n<style>\n  .no-style .ng-valid {\n  border-left: 1px  solid #CCC\n}\n\n  .no-style .ng-invalid {\n  border-left: 1px  solid #CCC\n}\n</style>\n<div class="no-style" style="margin-left: 4px">\n  <div class="container">\n      <h1>Actor Form</h1>\n      <form>\n        <div class="form-group">\n          <label for="name">Name</label>\n          <input type="text" class="form-control" id="name" required>\n        </div>\n\n        <div class="form-group">\n          <label for="studio">Studio</label>\n          <input type="text" class="form-control" id="studio">\n        </div>\n\n        <!-- #docregion skills -->\n        <div class="form-group">\n          <label for="skill">Skill</label>\n          <select class="form-control" id="skill" required>\n            @for(skill of skills; track $index) {\n              <option [value]="skill">{{ skill }}</option>\n            }\n          </select>\n        </div>\n        <!-- #enddocregion skills -->\n        <button type="submit" class="btn btn-success">Submit</button>\n\n      </form>\n  </div>\n\n  <!-- ====================================================  -->\n  <hr>\n  <div class="container">\n      <h1>Actor Form</h1>\n      <!-- #docregion template-variable-->\n      <form #actorForm="ngForm">\n      <!-- #enddocregion template-variable-->\n    <!-- #docregion ngModel-2-->\n        {{ model | json }}\n        <div class="form-group">\n          <label for="name">Name</label>\n          <input type="text" class="form-control" id="name"\n                 required\n                 [(ngModel)]="model.name" name="name">\n        </div>\n\n        <div class="form-group">\n          <label for="studio">Studio</label>\n          <input type="text"  class="form-control" id="studio"\n                 [(ngModel)]="model.studio" name="studio">\n        </div>\n\n        <div class="form-group">\n          <label for="skill">Skill</label>\n          <select class="form-control"  id="skill"\n                  required\n                  [(ngModel)]="model.skill" name="skill">\n            @for (skill of skills; track $index) {\n              <option [value]="skill">{{ skill }}</option>\n            }\n          </select>\n        </div>\n\n    <!-- #enddocregion ngModel-2-->\n        <button type="submit" class="btn btn-success">Submit</button>\n\n      </form>\n  </div>\n\n  <!-- EXTRA MATERIAL FOR DOCUMENTATION -->\n  <hr>\n  <!-- #docregion ngModelName-1 -->\n    <input type="text" class="form-control" id="name"\n           required\n           [(ngModel)]="model.name" name="name">\n    TODO: remove this: {{ model.name}}\n  <!-- #enddocregion ngModelName-1 -->\n  <hr>\n    <input type="text" class="form-control" id="name"\n           required\n           [ngModel]="model.name" name="name"\n           (ngModelChange)="model.name = $event">\n    TODO: remove this: {{ model.name}}\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ActorFormComponent, { className: "ActorFormComponent", filePath: "src/content/examples/forms/src/app/actor-form/actor-form.component.ts", lineNumber: 15 });
})();

export {
  ActorFormComponent
};
//# sourceMappingURL=chunk-3EFNBNPM.js.map
