import {
  AsyncPipe
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  interval,
  map,
  setClassMetadata,
  startWith,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/hero-async-message.component.ts
var _HeroAsyncMessageComponent = class _HeroAsyncMessageComponent {
  message$;
  messages = ["You are my hero!", "You are the best hero!", "Will you be my hero?"];
  constructor() {
    this.message$ = this.getResendObservable();
  }
  resend() {
    this.message$ = this.getResendObservable();
  }
  getResendObservable() {
    return interval(1e3).pipe(map((i) => `Message #${i + 1}: ${this.messages[i]}`), take(this.messages.length), startWith("Waiting for messages..."));
  }
};
__name(_HeroAsyncMessageComponent, "HeroAsyncMessageComponent");
__publicField(_HeroAsyncMessageComponent, "ɵfac", /* @__PURE__ */ __name(function HeroAsyncMessageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeroAsyncMessageComponent)();
}, "HeroAsyncMessageComponent_Factory"));
__publicField(_HeroAsyncMessageComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _HeroAsyncMessageComponent, selectors: [["app-hero-async-message"]], decls: 7, vars: 3, consts: [["type", "button", 3, "click"]], template: /* @__PURE__ */ __name(function HeroAsyncMessageComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h2");
    ɵɵtext(1, "Async Messages and AsyncPipe");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "p");
    ɵɵtext(3);
    ɵɵpipe(4, "async");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(5, "button", 0);
    ɵɵdomListener("click", /* @__PURE__ */ __name(function HeroAsyncMessageComponent_Template_button_click_5_listener() {
      return ctx.resend();
    }, "HeroAsyncMessageComponent_Template_button_click_5_listener"));
    ɵɵtext(6, "Resend Messages");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 1, ctx.message$));
  }
}, "HeroAsyncMessageComponent_Template"), dependencies: [AsyncPipe], encapsulation: 2 }));
var HeroAsyncMessageComponent = _HeroAsyncMessageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroAsyncMessageComponent, [{
    type: Component,
    args: [{
      selector: "app-hero-async-message",
      template: `
    <h2>Async Messages and AsyncPipe</h2>
    <p>{{ message$ | async }}</p>
    <button type="button" (click)="resend()">Resend Messages</button>`,
      imports: [AsyncPipe]
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(HeroAsyncMessageComponent, { className: "HeroAsyncMessageComponent", filePath: "src/content/examples/pipes/src/app/hero-async-message.component.ts", lineNumber: 15 });
})();

export {
  HeroAsyncMessageComponent
};
//# sourceMappingURL=chunk-J3APLFGJ.js.map
