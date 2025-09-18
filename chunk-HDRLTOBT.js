import {
  d
} from "./chunk-G7P5OSF4.js";
import {
  ErrorStateMatcher,
  MAT_FORM_FIELD,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  _ErrorStateTracker
} from "./chunk-ZDTKZ4RG.js";
import {
  MatSnackBar
} from "./chunk-4ONR2TF5.js";
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuModule,
  CdkMenuTrigger
} from "./chunk-VVHPPJ64.js";
import {
  MatRippleModule
} from "./chunk-NAIJRLAM.js";
import {
  Clipboard,
  FocusMonitor,
  IconComponent,
  MatCommonModule,
  MatRipple,
  ObserversModule,
  _StructuralStylesLoader,
  _animationsDisabled,
  coerceBooleanProperty,
  getSupportedInputTypes
} from "./chunk-A6VPSR6T.js";
import "./chunk-7F6UZAKO.js";
import {
  DOWN_ARROW,
  ENTER,
  LEFT_ARROW,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  hasModifierKey
} from "./chunk-UGE24TTQ.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import {
  FormGroupDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  Validators
} from "./chunk-IP3YSDXJ.js";
import {
  Directionality,
  Platform,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  coerceElement,
  coerceNumberProperty
} from "./chunk-H7FALWCD.js";
import "./chunk-OV2CFM4K.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  RendererFactory2,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __name,
  __publicField,
  auditTime,
  booleanAttribute,
  effect,
  forwardRef,
  inject,
  isSignal,
  numberAttribute,
  setClassMetadata,
  signal,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-2CX5BJWG.js";

// src/app/features/update/recommendations.ts
var ApplicationComplexity;
(function(ApplicationComplexity2) {
  ApplicationComplexity2[ApplicationComplexity2["Basic"] = 1] = "Basic";
  ApplicationComplexity2[ApplicationComplexity2["Medium"] = 2] = "Medium";
  ApplicationComplexity2[ApplicationComplexity2["Advanced"] = 3] = "Advanced";
})(ApplicationComplexity || (ApplicationComplexity = {}));
var RECOMMENDATIONS = [
  {
    possibleIn: 200,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Basic,
    step: "擴充套件 OnInit",
    action: "確保不要使用 `extends OnInit`，或者將 `extends` 與任何生命週期事件合用。而應該使用 `implements <生命週期事件>`。"
  },
  {
    possibleIn: 200,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: "深層匯入",
    action: "停止使用深層匯入，這些符號現在已標記為 ɵ，並不是我們公共 API 的一部分。"
  },
  {
    possibleIn: 200,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: "invokeElementMethod",
    action: "停止使用 `Renderer.invokeElementMethod`，因為該方法已被移除。目前沒有替代方法。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Basic,
    step: "非動畫模組",
    action: "如果你的應用中使用了動畫，請在你的應用 `NgModule` 中從 `@angular/platform-browser/animations` 匯入 `BrowserAnimationsModule`。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Medium,
    step: "原生表單驗證",
    action: "當你包含 `FormsModule` 時，Angular 就會開始向表單元素新增 `novalidate` 屬性。要重新啟用原生表單行為，請使用 `ngNoForm` 或新增 `ngNativeValidate`。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: "RootRenderer",
    action: "用 `RendererFactoryV2` 替換 `RootRenderer`。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    ngUpgrade: true,
    step: "downgradeInjectable",
    action: "`upgrade/static/downgradeInjectable` 的回傳值已更改。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: "動畫測試",
    action: "如果你使用了動畫和測試，請在你的 `TestBed.initTestEnvironment` 呼叫中新增 `mods[1].NoopAnimationsModule`。"
  },
  {
    possibleIn: 200,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "DefaultIterableDiffer",
    action: "停止使用 `DefaultIterableDiffer`、`KeyValueDiffers#factories` 或 `IterableDiffers#factories`。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Basic,
    step: "範本標籤",
    action: "將你的 `template` 標籤重新命名為 `ng-template`。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Medium,
    step: "OpaqueToken",
    action: "用 `InjectionToken` 替換任何 `OpaqueToken`。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "DifferFactory",
    action: "如果呼叫了 `DifferFactory.create(...)`，就移除 `ChangeDetectorRef` 引數。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "ErrorHandler 引數",
    action: "停止向 ErrorHandler 建構式函式傳遞任何引數。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "ngProbeToken",
    action: "如果使用了 ngProbeToken，請確保從 @angular/core 而不是 @angular/platform-browser 匯入它。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "TrackByFn",
    action: "如果使用了 TrackByFn，改用 TrackByFunction。"
  },
  {
    possibleIn: 500,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Basic,
    step: "i18n 通道更改",
    action: "如果依賴於日期、貨幣、小數或百分比通道，在 5 中將看到格式的輕微更改。對於使用其他區域設定而不是 en-us 的應用程式，你需要匯入它，可選擇從 `@angular/common/i18n_data/locale_fr` 匯入 `locale_extended_fr` 並註冊 locale。"
  },
  {
    possibleIn: 500,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "gendir",
    action: '不要依賴於 `gendir`，而是考慮使用 `skipTemplateCodeGen`。 <a href=https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">閱讀更多</a>'
  },
  {
    possibleIn: 220,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    ngUpgrade: true,
    step: "動態 ngUpgrade",
    action: "用 `@angular/upgrade/static` 中的新版本替換從 `@angular/upgrade` 匯入的 `downgradeComponent`、`downgradeInjectable`、`UpgradeComponent` 和 `UpgradeModule`。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: "核心中的動畫",
    action: "如果從 @angular/core 匯入了任何動畫服務或工具，應該從 @angular/animations 匯入。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "ngOutletContext",
    action: "用 `ngTemplateOutletContext` 替換 `ngOutletContext`。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "collectionChangeRecord",
    action: "用 `IterableChangeRecord` 替換 `CollectionChangeRecord`。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "Renderer",
    action: "任何使用 Renderer 的地方，現在使用 Renderer2。"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "路由器查詢引數",
    action: "如果使用了 preserveQueryParams，改用 queryParamsHandling。"
  },
  {
    possibleIn: 430,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "Http",
    action: "如果使用傳統的 `HttpModule` 和 `Http` 服務，請切換到 `HttpClientModule` 和 `HttpClient` 服務。HttpClient 簡化了預設的人體工程學（你不再需要對映到 JSON），現在支援型別化回傳值和攔截器。在 [angular.dev](https://angular.io/guide/http) 上閱讀更多。"
  },
  {
    possibleIn: 430,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "@angular/platform-browser 中的 DOCUMENT",
    action: "如果使用 @angular/platform-browser 中的 DOCUMENT，請開始從 @angular/common 匯入。"
  },
  {
    possibleIn: 500,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "ReflectiveInjector",
    action: "任何使用 ReflectiveInjector 的地方，現在使用 StaticInjector。"
  },
  {
    possibleIn: 500,
    necessaryAsOf: 550,
    level: ApplicationComplexity.Medium,
    step: "空白字元",
    action: "在你的 `tsconfig.json` 的 `angularCompilerOptions` 鍵下選擇 `off` 作為 `preserveWhitespaces` 的值，以獲得此設定的好處，該設定在 v6 中預設設定為 `off`。"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    step: "Node 8",
    action: '確保你正在使用<a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 8或更高版本</a>。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "更新到 CLI v6",
    action: '更新你的 Angular CLI，並將設定遷移到<a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">新的 angular.json 格式</a>，方法如下：<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/cli@6`<br/>'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "更新到 CLI v6",
    action: '更新你的 Angular CLI，並將設定遷移到<a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">新的 angular.json 格式</a>，方法如下：<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/cli@6 @angular/core@6"`<br/>'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: "CLI v6 指令碼",
    action: "更新你在 `package.json` 中可能有的任何 `scripts`，以使用最新的 Angular CLI 指令。所有 CLI 指令現在使用兩個短橫線作為標誌（例如 `ng build --prod --source-map`）以符合 POSIX 規範。"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "更新到 Angular v6",
    action: "將你的所有 Angular 框架套件更新到 v6，並正確安裝 RxJS 和 TypeScript 的版本。<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/core@6`<br/><br/>更新後，TypeScript 和 RxJS 將更準確地流經你的應用程式的型別，這可能會暴露出應用程式型別的現有錯誤"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "更新到 Angular v6",
    action: '將你的所有 Angular 框架套件更新到 v6，並正確安裝 RxJS 和 TypeScript 的版本。<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/cli@6 @angular/core@6"`<br/><br/>更新後，TypeScript 和 RxJS 將更準確地流經你的應用程式的型別，這可能會暴露出應用程式型別的現有錯誤'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "forms v6",
    action: "在 Angular Forms 中，當呼叫 `AbstractControl#markAsPending` 時，`AbstractControl#statusChanges` 現在會發出 `PENDING` 事件。確保如果你在呼叫 `markAsPending` 時過濾或檢查 `statusChanges` 事件，你要考慮到呼叫 `markAsPending` 時的新事件。"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "動畫時序",
    action: "如果在停用的 Zone 中使用 `AnimationEvent` 的 `totalTime`，它將不再報告為 0。要檢測動畫事件是否報告為停用的動畫，則可以使用 `event.disabled` 屬性。"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Advanced,
    step: "表單控制元件上的 ngModel",
    action: "在 v6 中已棄用並在 v7 中刪除了對使用 ngModel 輸入屬性和 ngModelChange 事件與回應式表單指令一起使用的支援。"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: "ngModelChange 順序",
    action: "現在，在更新控制元件的值/有效性後，`ngModelChange` 被髮出，而不是之前，以更好地對應預期。如果你依賴於這些事件的順序，你需要開始在你的元件中跟蹤舊值。"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: "更新到 v6 的依賴項",
    action: "將 Angular Material 更新到最新版本。<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/material@6`<br/><br/>這也將自動遷移已棄用的 API。"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: "更新到 v6 的依賴項",
    action: '將 Angular Material 更新到最新版本。<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/material@6"`<br/><br/>這也將自動遷移已棄用的 API。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: "strictPropertyInitializer",
    action: '如果 TypeScript 設定為嚴格模式（如果你在 `tsconfig.json` 檔案中將 `strict` 設定為 `true`），請更新你的 `tsconfig.json` 以停用 `strictPropertyInitialization` 或將屬性初始化從 `ngOnInit` 移動到你的建構式函式。你可以在<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization">TypeScript 2.7 發布說明</a>中瞭解更多關於此標誌的訊息。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    step: "更新到 RxJS 6",
    action: '使用<a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">rxjs-tslint 自動更新規則</a>刪除已棄用的 RxJS 5 屬性<br/><br/>對於大多數應用程式，這意味著執行以下兩個指令：<br/><br/>`npx rxjs-tslint`<br/>`rxjs-5-to-6-migrate -p src/tsconfig.app.json`'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Medium,
    step: "移除 rxjs-compat",
    action: "一旦你和你所有的依賴項都已更新到 RxJS 6，請移除 `rxjs-compat`。"
  },
  {
    possibleIn: 610,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Medium,
    step: "使用檔案而不是 versionedFiles",
    action: "如果你使用 Angular Service Worker，請將任何 `versionedFiles` 遷移到 `files` 陣列中。行為是一樣的。"
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    step: "TypeScript 3.1",
    action: 'Angular 現在使用 TypeScript 3.1，請閱讀有關任何潛在的破壞性變化：<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html">TypeScript 3.1 發布說明</a>'
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    step: "Node 10",
    action: 'Angular 現在新增了對 Node 10 的支援：<a href="https://nodejs.org/en/blog/release/v10.0.0/" target="_blank">Node 10 發布說明</a>'
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "更新到 v7",
    action: "在終端中執行`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@7 update @angular/cli@7 @angular/core@7`來更新核心框架和 CLI 到 v7。"
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "更新到 v7",
    action: '在終端中執行`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@7 update @angular/cli@7 @angular/core@7"`來更新核心框架和 CLI 到 v7。'
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: "更新到 v7 的 Material",
    action: "在終端中執行`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@7 update @angular/material@7`來更新 Angular Material 到 v7。你應該測試你的應用程式是否有大小和佈局的變化。"
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: "更新到 v7 的 Material",
    action: '在終端中執行`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@7 update @angular/material@7"`來更新 Angular Material 到 v7。你應該測試你的應用程式是否有大小和佈局的變化。'
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Medium,
    material: true,
    step: "v7 的 Material 變化",
    action: "如果你使用螢幕截圖測試，你需要重新生成你的螢幕截圖黃金檔案，因為許多次要的視覺調整已經完成。"
  },
  {
    possibleIn: 700,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v7 的 Material 棄用",
    action: "停止使用 `matRippleSpeedFactor` 和 `baseSpeedFactor` 來進行漣漪，改用動畫設定。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "更新到 v8",
    action: "在終端中執行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/cli@8 @angular/core@8`，然後檢視並送出更改。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "更新到 v8",
    action: '在終端中執行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8"`，然後檢視並送出更改。'
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "使用 ::ng-deep 替代 /deep/",
    action: "在你的樣式中用 `::ng-deep` 替換 `/deep/`，[瞭解更多關於 Angular 元件樣式和 ::ng-deep](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep)。 `/deep/` 和 `::ng-deep` 都已棄用，但在完全從瀏覽器和工具中移除影子穿透後，使用 `::ng-deep` 更可取。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "TypeScript 3.4",
    action: "Angular 現在使用 TypeScript 3.4，[瞭解更多可能由改進的型別檢查引起的錯誤](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html)。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "node 10",
    action: '確保你正在使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10 或更高版本</a>。'
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "差異化載入",
    action: "CLI 的建立指令現在會自動建立一個現代的 ES2015 建立，帶有最小的 polyfills，併為舊版瀏覽器建立相容的 ES5 建立，並根據瀏覽器載入適當的檔案。 你可以透過將 `tsconfig.json` 中的 `target` 設定回 `es5` 來選擇退出此更改。在 [angular.io](https://angular.io/guide/deployment#differential-loading) 上了解更多。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "CLI 遙測",
    action: "使用 CLI 的新版本時，你將被詢問是否要選擇加入共享 CLI 使用資料。你也可以新增自己的 Google Analytics 帳戶。這樣我們可以更好地決定優先考慮哪些 CLI 功能，並衡量我們改進的影響。在 [angular.io](https://angular.io/analytics) 上了解更多。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "靜態查詢時機",
    action: "如果你使用 `ViewChild` 或 `ContentChild`，我們正在更新解析這些查詢的方式，以給開發者更多控制。你現在必須指定變更檢測應該在設定結果之前執行。範例：`@ContentChild('foo', {static: false}) foo !: ElementRef;`。 `ng update` 將自動更新你的查詢，但它會傾向於使你的查詢為 `static`，以保證相容性。在 [angular.io](https://angular.io/guide/static-query-migration) 上了解更多。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: "更新到 v8 的 Material",
    action: "在終端中執行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/material@8`。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: "更新到 v8 的 Material",
    action: '在終端中執行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/material@8"`。'
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "深度匯入",
    action: "不要直接從 `@angular/material` 匯入，而是從特定元件進行深度匯入。例如 `@angular/material/button`。`ng update` 將為你自動完成此操作。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "新的 loadChildren",
    action: "對於透過路由器進行的延遲載入的模組，請確保你正在[使用動態匯入](https://angular.io/guide/deprecations#loadchildren-string-syntax)。在 v9 中，透過字串進行匯入已被移除。`ng update` 應該會自動處理這個。在 [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax) 上了解更多。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "平台廢棄",
    action: "我們正在廢棄對 `@angular/platform-webworker` 的支援，因為它與 CLI 不相容。在 Web Worker 中執行 Angular 的渲染架構不符合開發者的需求。你仍然可以在 Angular 中使用 Web Worker。在我們的 [Web Worker 指南](https://v9.angular.io/guide/web-worker) 中瞭解更多。如果你有需要這方面的用例，請透過 devrel@angular.io 與我們聯絡！"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "node-sass",
    action: "我們已經從本地 Sass 編譯器切換到 JavaScript 編譯器。要切換回本地版本，請將其安裝為 devDependency：`npm install node-sass --save-dev`。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "schematics 非同步",
    action: "如果你正在建立自己的 Schematics，它們之前*可能*是非同步的。從 8.0 開始，所有的 Schematics 都將是非同步的。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "node 10.13",
    action: '確保你正在使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10.13 或更高版本</a>。'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "更新到 CLI v8 最新版本",
    action: "在你的工作空間目錄中執行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/core@8 @angular/cli@8`，以更新到最新的 8.x 版本的 `@angular/core` 和 `@angular/cli` 並送出這些更改。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "更新到 CLI v8 最新版本",
    action: '在你的工作空間目錄中執行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8`，以更新到最新的 8.x 版本的 `@angular/core` 和 `@angular/cli` 並送出這些更改。'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: "建立送出",
    action: "你可以選擇向 [ng update](https://angular.io/cli/update) 指令傳遞 `--create-commits`（或 `-C`）標誌，以每個獨立遷移建立一個 git 送出。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "ng update v9",
    action: "執行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @angular/core@9 @angular/cli@9`，應該將你升級到 Angular 的 9 版本。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "ng update v9",
    action: '執行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/cli@9 @angular/core@9"`，應該將你升級到 Angular 的 9 版本。'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "typescript 3.8",
    action: "你的專案現在已更新到 TypeScript 3.8，請閱讀有關新編譯器檢查和可能需要修復程式碼中問題的錯誤的更多訊息，可在 [TypeScript 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) 或 [TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html) 公告中瞭解更多。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: "更新 @angular/material",
    action: "執行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @angular/material@9`。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: "更新 @angular/material",
    action: '執行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/material@9"`。'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    windows: false,
    step: "更新 @nguniversal/hapi-engine",
    action: "如果你使用 Angular Universal，請執行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @nguniversal/hapi-engine@9` 或 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @nguniversal/express-engine@9`，具體取決於你使用的引擎。如果你的任何第三方依賴項未更新其對等依賴項的 Angular 版本，則此步驟可能需要 `--force` 標誌。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    windows: true,
    step: "更新 @nguniversal/hapi-engine",
    action: '如果你使用 Angular Universal，請執行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @nguniversal/hapi-engine@9"` 或 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @nguniversal/express-engine@9"`，具體取決於你使用的引擎。如果你的任何第三方依賴項未更新其對等依賴項的 Angular 版本，則此步驟可能需要 `--force` 標誌。'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "更新依賴項",
    action: "如果你的專案依賴於其他 Angular 函式庫，我們建議你考慮更新到它們的最新版本。在某些情況下，此更新可能是必需的，以解決 API 不相容性。查閱 `ng update` 或 `npm outdated` 以瞭解你過時的函式庫。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "更新 Ivy",
    action: "在升級到 9 版本期間，透過程式碼遷移必要地轉換了你的專案，以從程式碼庫中移除任何不相容或已廢棄的 API 呼叫。現在你可以檢視這些更改，並查閱 [升級到 9 版本指南](https://v9.angular.io/guide/updating-to-version-9) 以瞭解更多詳情。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: "更新樣式",
    action: "以前，繫結的 CSS 樣式和類別是採用『最後一次更改獲勝』的策略應用的，但現在遵循一個定義好的優先級。瞭解更多關於 [樣式優先級](https://angular.io/guide/attribute-binding#styling-precedence)。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "ModuleWithProviders",
    action: "如果你是函式庫的作者，並且有一個回傳 `ModuleWithProviders` 的方法（通常是透過名為 `forRoot()` 的方法），則需要指定泛型型別。瞭解更多 [angular.io](https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic)"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "wtf",
    action: "在 Angular 8 中，支援 Web 追蹤框架已廢棄。你應該停止使用任何 `wtf*` API。為了進行效能追蹤，我們建議使用 [瀏覽器效能工具](https://developers.google.com/web/tools/lighthouse/audits/user-timing)。"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: "es5 瀏覽器",
    action: "在你的 `angular.json` 中刪除任何 `es5BrowserSupport` 標誌，並將你的 `tsconfig.json` 中的 `target` 設定為 `es2015`。Angular 現在使用你的 browserslist 來確定是否需要 ES5 建立。`ng update` 將自動遷移你。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: "ngForm 選擇器",
    action: "如果你使用 `ngForm` 元素選擇器建立 Angular 表單，你應該改用 `ng-form`。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "typings 編譯",
    action: "我們已更新 `tsconfig.app.json` 以限制編譯的檔案。如果你依賴於其他檔案被包含在編譯中，比如一個 `typings.d.ts` 檔案，你需要手動將其新增到編譯中。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "除錯",
    action: "隨著 Angular 9，Ivy 現在是預設的渲染引擎，針對可能出現的任何相容性問題，閱讀 [Ivy 相容性指南](https://v9.angular.io/guide/ivy-compatibility)。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "express-universal-server",
    action: "如果你使用 Angular Universal 與 `@nguniversal/express-engine` 或 `@nguniversal/hapi-engine`，將會建立幾個備份檔案。其中一個是用於 `server.ts` 的。如果此檔案與預設檔案不同，你可能需要手動將一些更改從 `server.ts.bak` 複製到 `server.ts`。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "ivy i18n",
    action: "Angular 9 引入了一個全域的 `$localize()` 函式，如果你依賴於 Angular 的國際化（i18n），則需要載入它。執行 `ng add @angular/localize` 來新增必要的套件和程式碼修改。查閱 [$localize 全域匯入遷移指南](https://v9.angular.io/guide/migration-localize) 以瞭解更多變化。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "entryComponents",
    action: "在你的應用專案中，你可以刪除 `entryComponents` NgModules 和任何使用 `ANALYZE_FOR_ENTRY_COMPONENTS` 的地方。它們在 Ivy 編譯器和執行時中不再需要。如果建立的是一個將被 View Engine 應用程式消費的函式庫，可能需要保留這些。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "testbed-get",
    action: "如果你使用 `TestBed.get`，你應該改用 `TestBed.inject`。這個新方法具有相同的行為，但是型別安全。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "$localize",
    action: "如果你使用 [Angular 的國際化支援](http://angular.io/guide/i18n)，你將需要開始使用 `@angular/localize`。瞭解更多關於 [$localize 全域匯入遷移](https://v9.angular.io/guide/migration-localize)。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "v10 NodeJS 12",
    action: '確保你正在使用 <a href="https://nodejs.org/dist/latest-v12.x/" target="_blank">Node 12 或更高版本</a>。'
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "ng update v10",
    action: "執行 `npx @angular/cli@10 update @angular/core@10 @angular/cli@10`，這將使你的 Angular 版本升級到 10。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "更新 @angular/material",
    action: "執行 `npx @angular/cli@10 update @angular/material@10`。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "browserlist",
    action: "新專案使用檔案名 `.browserslistrc`，而不是 `browserslist`。`ng update` 將自動遷移你。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "v10-versions",
    action: "Angular 現在需要 `tslint` v6、`tslib` v2 和 [TypeScript 3.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html)。`ng update` 將自動遷移你。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "styleext",
    action: "停止在你的 Angular schematics 中使用 `styleext` 或 `spec`。`ng update` 將自動遷移你。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "classes-without-decorators",
    action: "在 10 版本中，不帶有 Angular 裝飾器的類別不再受支援。[瞭解更多](https://v10.angular.io/guide/migration-undecorated-classes)。`ng update` 將自動遷移你。"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "injectable-definitions",
    action: "從 Angular 9 開始，對於 DI，@Injectable 裝飾器的執行更加嚴格，不完整的提供程式定義的行為會有所不同。[瞭解更多](https://v9.angular.io/guide/migration-injectable)。`ng update` 將自動遷移你。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "closure-jsdoc-comments",
    action: "Angular 的 NPM 套件不再包含 jsdoc 註解，這在與閉包編譯器的使用中是必需的（極其罕見）。此支援是實驗性的，並且只在一些情況下起作用。很快將宣佈替代推薦路徑。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "forms-number-input",
    action: "如果你使用 Angular 表單，`number` 型別的輸入不再監聽 [change 事件](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)（這些事件不一定會在每次更改值時觸發），而是監聽 [input 事件](https://developer.mozilla.org/docs/Web/API/HTMLElement/input_event)。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "forms-length-input",
    action: "對於 Angular 表單驗證，`minLength` 和 `maxLength` 驗證器現在驗證表單控制元件的值是否具有數字長度屬性，並且僅在這種情況下驗證長度。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "esm5-bundles",
    action: "Angular 套件格式已更新，刪除了 `esm5` 和 `fesm5` 格式。這些不再分發在我們的 npm 套件中。如果你不使用 CLI，你可能需要自行將 Angular 程式碼降級到 ES5。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "console-errors",
    action: "有關未知元素的警告現在記錄為錯誤。這不會破壞你的應用程式，但可能會使期望 `console.error` 不記錄任何內容的工具受到影響。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "router-resolver-empty",
    action: "任何回傳 `EMPTY` 的解析器將取消導向。如果你想要允許導向繼續，你需要更新解析器以發出一些值（例如 `defaultIfEmpty(...)`、`of(...)` 等）。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "sw-vary-headers",
    action: "如果你使用 Angular 服務工作器並依賴於帶有 [Vary](https://developer.mozilla.org/docs/Web/HTTP/Headers/Vary) 標頭的資源，這些標頭現在被忽略，以避免在各個瀏覽器之間出現不可預測的行為。為了避免這種情況，[設定](https://angular.io/guide/service-worker-config) 你的服務工作器以避免快取這些資源。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "expression-changed-after-checked-new",
    action: "當使用 `async` 通道時，你可能會看到之前未檢測到的 `ExpressionChangedAfterItHasBeenChecked` 錯誤。以前的錯誤可能未被檢測到，因為兩個 `WrappedValues` 在檢查目的上被認為是『相等的』，即使它們各自的未包裝值不相等。在版本 10 中，`WrappedValue` 已被移除。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "property-binding-change-detection",
    action: "如果你有一個屬性繫結，例如 `[val]=(observable | async).someProperty`，如果 `someProperty` 的值與之前的發射值相同，這將不再觸發變更檢測。如果你依賴於此行為，要麼手動訂閱並根據需要呼叫 `markForCheck`，要麼更新繫結以確保引用更改。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "day-periods-crossing-midnight",
    action: "如果你使用 `formatDate()` 或 `DatePipe`，並且使用了任何 `b` 或 `B` 格式程式碼，邏輯已更新，使其對應跨越午夜的一天時段內的時間，因此現在將渲染正確的輸出，例如在英文環境中的 `night`。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "urlmatcher-null",
    action: "如果你使用 `UrlMatcher`，現在其型別反映了它可以始終回傳 `null`。"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "v10-more-details",
    action: "有關停用、自動遷移和更改的更多詳細訊息，請訪問 [guide angular.io](https://v10.angular.io/guide/updating-to-version-10)"
  },
  {
    possibleIn: 1020,
    necessaryAsOf: 1020,
    level: ApplicationComplexity.Medium,
    step: "universal-baseurl",
    action: "對於 Angular Universal 使用者，如果你使用 `useAbsoluteUrl` 來設定 `platform-server`，現在還需要指定 `baseUrl`。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    step: "v11 ng update",
    action: "執行 `ng update @angular/core@11 @angular/cli@11` 將把你的 Angular 版本升級到 11。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "執行 `ng update @angular/material@11`。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    step: "v11 versions",
    action: "Angular 現在需要 [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/)。`ng update` 將自動遷移你的專案。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    step: "v11 browser support",
    action: "不再支援 IE9、IE10 和 IE 移動版。這在 [v10 更新](http://blog.angular.dev/version-10-of-angular-now-available-78960babd41#c357) 中已經宣佈。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "webpack5 optin",
    action: '你現在可以選擇使用 webpack 5，使用 Yarn 並將 `"resolutions": {"webpack": "^5.0.0"}` 新增到你的 `package.json`。'
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "ng new strict prompt",
    action: "當生成新專案時，你將被詢問是否要啟用嚴格模式。這將為 TypeScript 和 Angular 編譯器設定更嚴格的型別檢查，並預設應用更小的捆綁預算。你可以使用 `--strict=true` 或 `--strict=false` 來跳過提示。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 router relativeLinkResolution",
    action: "如果你使用路由器，`relativeLinkResolution` 的預設值從 `legacy` 改為 `corrected`。如果你的應用程式以前使用預設值而未在 `ExtraOptions` 中指定值，並且在從空路徑路由的子路由導向時使用相對連結，你需要更新你的 `RouterModule` 設定，明確為 `relativeLinkResolution` 指定 `legacy`。參見 [文件](https://v11.angular.io/api/router/ExtraOptions#relativeLinkResolution) 以獲取更多詳細訊息。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 router initialNavigation",
    action: "在 Angular 路由器中，v4 中已棄用的 `initialNavigation` 選項已被移除。如果你以前使用了 `enabled` 或 `true`，現在請選擇 `enabledNonBlocking` 或 `enabledBlocking`。如果你以前使用了 `false` 或 `legacy_disabled`，現在使用 `disabled`。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "routerlink preserveQueryParams",
    action: '在 Angular 路由器的 `routerLink` 中，已刪除了 `preserveQueryParams`，請使用 `queryParamsHandling="preserve"`。'
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "routerlink queryParams typing",
    action: "如果你正在訪問 `routerLink` 的 `queryParams`、`fragment` 或 `queryParamsHandling` 值，你可能需要放寬型別以接受 `undefined` 和 `null`。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "viewencapsulation native removed",
    action: "元件檢視封裝選項 `ViewEncapsulation.Native` 已被移除。請使用 `ViewEncapsulation.ShadowDom`。`ng update` 將自動遷移你。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "ICU expressions typechecked",
    action: "如果你使用 i18n，在 International Components for Unicode (ICUs) 表示式中的表示式現在再次進行型別檢查。如果在 ICU 中的表示式中發現錯誤，可能會導致編譯失敗。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "forms validators asyncValidators typing",
    action: "在 `@angular/forms` 套件中的指令建構式函式中，預期的 `validators` 和 `asyncValidators` 引數的型別曾經是 `any[]`。現在這些引數已經被正確地型別化，因此如果你的程式碼依賴於表單指令建構式函式型別，可能需要一些更新來提高型別安全性。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "forms AbstractFormControl",
    action: "如果你使用 Angular Forms，`AbstractFormControl.parent` 的型別現在包括 null。`ng update` 將自動遷移你，但在一個不太可能的情況下，如果你的程式碼使用嚴格相等將父級與 undefined 進行比較，你需要改為使用 `=== null`，因為父級現在明確初始化為 `null`，而不是保留為 undefined。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "platform-webworker",
    action: "很少使用的 `@angular/platform-webworker` 和 `@angular/platform-webworker-dynamic` 在 v8 中已被棄用並移除。在 web worker 中執行 Angular 的部分是一個從未對常見用例產生良好效果的實驗。Angular 對 [Web Workers](https://angular.io/guide/web-worker) 仍然有很好的支援。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 slice pipe typing",
    action: "現在 `slice` 通道對於未定義的輸入值回傳 null，這與大多數通道的行為一致。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 keyvalue typing",
    action: "修復了 `keyvalue` 通道，對於具有數字鍵的輸入物件，結果型別將包含鍵的字串表示形式。這已經是現實，程式碼已經更新以反映這一點。如果通道輸出的使用方依賴於不正確的型別，請更新。請注意，這不會影響輸入值為 `Map` 的用例，因此如果你需要保留 `number`，這是一種有效的方法。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 number pipe typing",
    action: "數字通道（`decimal`、`percent`、`currency` 等）現在明確指定接受的型別。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 date pipe typing",
    action: "日期通道現在明確指定接受的型別。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 datetime rounding",
    action: "當將帶有毫秒分數的日期時間格式的字串傳遞給 `DatePipe` 時，毫秒現在總是向下舍入，而不是舍入到最近的毫秒。大多數應用程式不會受到此更改的影響。如果這不是預期的行為，考慮在將字串傳遞給 `DatePipe` 之前預處理毫秒部分以舍入。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 async pipe typing",
    action: "`async` 通道不再聲稱對於型別為 undefined 的輸入回傳 undefined。請注意，程式碼實際上對於未定義的輸入回傳 null。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "v11 case pipe update",
    action: "`uppercase` 和 `lowercase` 通道不再透過假值。它們現在將 `null` 和 `undefined` 都對映到 `null`，並在無效輸入（`0`、`false`、`NaN`）時引發異常。這與其他 Angular 通道的行為相對應。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 router NavigationExtras typing",
    action: "如果你使用帶有 `NavigationExtras` 的路由器，新的型別允許傳遞型別為 `NavigationExtras` 的變數，但不允許物件字面量，因為它們只能指定已知屬性。它們也不接受與 `Pick` 中的屬性沒有共同屬性的型別。如果你受到此更改的影響，請僅指定在相應函式呼叫中實際使用的 NavigationExtras 中的屬性，或在物件或變數上使用型別斷言：`as NavigationExtras`。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "v11 TestBed.overrideProvider",
    action: "如果在 TestBed 初始化之後呼叫 `TestBed.overrideProvider`，則不再應用提供者覆蓋。這種行為與其他覆蓋方法（如 `TestBed.overrideDirective` 等）一致，但會引發錯誤以指示。之前在 TestBed.overrideProvider 函式中缺少此檢查。如果看到此錯誤，請確保在 TestBed 初始化完成之前移動 `TestBed.overrideProvider` 呼叫。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "v11 router RouteReuseStrategy",
    action: "如果你使用路由器的 RouteReuseStrategy，引數順序已更改。在呼叫 `RouteReuseStrategy#shouldReuseRoute` 時，以前在評估子路由時，會呼叫 `future` 和 `current` 引數的順序已更改。如果你的 `RouteReuseStrategy` 專門依賴於將來或當前快照狀態，可能需要更新 `shouldReuseRoute` 實現對 `future` 和 `current` `ActivateRouteSnapshots` 的使用。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 locale data readonly",
    action: "如果你使用區域設定資料陣列，此 API 現在將回傳只讀陣列。如果你對其進行了更改（例如呼叫 `sort()`、`push()`、`splice()` 等），那麼你的程式碼將不再編譯。如果你需要更改陣列，則現在應該複製它（例如透過呼叫 `slice()`）並更改副本。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 CollectionChangeRecord",
    action: "在變更檢測中，已移除了 `CollectionChangeRecord`，請改用 `IterableChangeRecord`。"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "v11 forms async validators",
    action: "如果你在 `FormControl`、`FormGroup` 或 `FormArray` 的類別實例的初始化時間上使用非同步驗證器來定義，則在非同步驗證器完成後先前未發出狀態更改事件。已更改為將狀態事件發出到 `statusChanges` 可觀察物件中。如果你的程式碼依賴於舊行為，你可以過濾/忽略此額外的狀態更改事件。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: "v12 ng update",
    action: "執行 `ng update @angular/core@12 @angular/cli@12`，這將把你的 Angular 版本升級到 12。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "執行 `ng update @angular/material@12`。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: "v12 versions",
    action: "Angular 現在要求 [TypeScript 4.2](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/)。`ng update` 將自動更新你的 TypeScript。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: "v12 browser support",
    action: "IE11 支援已棄用。在 [IE11 刪除 RFC](https://github.com/angular/angular/issues/41840) 中找到詳細訊息。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: "v12 minimum  Node.js version",
    action: "你不能再使用 Node.js 版本 10 或更早的版本。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: "v12 `XhrFactory` relocation",
    action: "將 `XhrFactory` 的匯入從 `@angular/common/http` 改為 `@angular/common`。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: "v12 i18n message ids",
    action: "如果你依賴於舊版 i18n 訊息 ID，請使用 `localize-migrate` 工具[遷移至新版](https://angular.io/guide/migration-legacy-message-id)。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: "v12 deprecates `emitDistinctChangesOnly`",
    action: "如果你正在使用 `emitDistinctChangesOnly` 來設定 `@ContentChildren` 和 `@ViewChildren` 查詢，可能需要將其值更新為 `false` 以與其先前行為對齊。在 v12 中，`emitDistinctChangesOnly` 的預設值為 `true`，在將來的版本中，我們將刪除此設定選項，以防止觸發不必要的更改。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: "v12 prod by default",
    action: "你可以執行可選的遷移以將預設啟用生產建立 `ng update @angular/cli@12 --migrate-only production-by-default`。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 min and max form attributes",
    action: '如果你使用 Angular 表單，在 `<input type="number">` 上使用 `min` 和 `max` 屬性現在將觸發驗證邏輯。'
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `emitEvent` in `FormArray` and `FormGroup`",
    action: "如果你的應用程式具有自定義類別，它們擴充套件了 `FormArray` 或 `FormGroup` 類別，並覆蓋了上述方法，則可能需要更新你的實現。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 zone.js minimum version",
    action: "將 zone.js 更新到版本 0.11.4。`ng update` 將自動更新此依賴項。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `HttpParams` method params update",
    action: "如果你擴充套件了 `HttpParams` 類別，你可能需要更新其方法的簽名以反映引數型別的更改。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `routerLinkActiveOptions`",
    action: "`RouterLinkActive` 的 `routerLinkActiveOptions` 屬性現在具有更具體的型別。你可能需要更新訪問此屬性的程式碼以與更改保持一致。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `APP_INITIALIZER` callback types",
    action: "初始化回呼現在具有更具體的回傳型別，如果你透過 `Injector.get` 或 `TestBed.inject` 獲取 `APP_INITIALIZER` 實例，則可能需要更新你的程式碼。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 fragment typings",
    action: "路由器片段現在可能是 `null`。新增 `null` 檢查以避免 TypeScript 產生型別錯誤。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `ng.getDirectives`",
    action: "確保不依賴於 `ng.getDirectives` 如果找不到與特定 DOM 節點相關聯的指令，則引發錯誤。"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `optimization.styles.inlineCritical`",
    action: "檢查你的 angular.json 檔案中的 `optimization.styles.inlineCritical` 選項。現在預設為 `true`。請記住，整個 `optimization` 選項可以設定為布林值，這將將所有子選項設定為預設值。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    step: "v13 ng update",
    action: "執行 `ng update @angular/core@13 @angular/cli@13` 將你的 Angular 版本更新至 13。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "執行 `ng update @angular/material@13`。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    step: "TypeScript 4.4",
    action: "Angular 現在使用 TypeScript 4.4，請閱讀有關任何潛在變更的更多訊息：[TypeScript 4.4 發布說明](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html)"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    step: "v13 node",
    action: '確保你使用的是 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 12.20.0 或更高版本</a>。'
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 routerLink",
    action: "現在可以透過傳遞 `undefined` 和 `null` 來停用 `routerLink` 的導向。之前，`routerLink` 指令接受這兩個值等同於空字串。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 router loadChildren",
    action: "不能再透過將字串值設定為 `loadChildren` 來指定延遲載入的路由。確保切換到動態 ESM 匯入語句。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 service worker activated",
    action: "`SwUpdate` 的 `activated` 可觀察物件現已棄用。要檢查服務工作器的啟用狀態，請改用 `activatedUpdate` 方法。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 service worker available",
    action: "`SwUpdate` 的 `available` 可觀察物件現已棄用。要獲取相同的訊息，請使用 `versionUpdates` 並僅過濾 `VersionReadyEvent` 事件。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 renderModuleFactory",
    action: "`@angular/platform-server` 中的 `renderModuleFactory` 不再與 Ivy 一起使用。改用 `renderModule`。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 forms status",
    action: "我們將 `AbstractControl.status` 的型別縮小為 `FormControlStatus`，並將 `AbstractControl.status` 的型別縮小為 `Observable<FormControlStatus>`。 `FormControlStatus` 是表單控制元件的所有可能狀態字串的聯合。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 router serializer",
    action: "現在，URL 序列化程式遵守 URI 規範，會考慮查詢引數中的問號。例如，`/path?q=hello?&q2=2` 現在將解析為 `{ q: `hello?`, q2: 2 }`。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 host binding",
    action: "`href` 現在是屬性繫結。這意味著 `DebugElement.properties['href']` 現在回傳原生元素回傳的 `href` 值，而不是 `routerLink` 的 `href` 屬性的內部值。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 spy location",
    action: "`SpyLocation` 在呼叫 `location.go` 時不再觸發 `popstate` 事件。此外，`simulateHashChange` 現在觸發 `haschange` 和 `popstate`。依賴於 `location.go` 的測試現在可能需要使用 `simulateHashChange` 來捕獲 `popstate`。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    ngUpgrade: true,
    step: "v13 router URL replacement",
    action: "當新導向取消正在進行的導向時，路由器將不再替換瀏覽器 URL。依賴於 Angular 路由器處理的初始導向上存在 `navigationId` 的混合應用程式應該訂閱 `NavigationCancel` 事件，並執行 `location.replaceState` 以將 `navigationId` 新增到 `Router` 狀態中。此外，斷言 `SpyLocation` 上的 `urlChanges` 的測試可能需要調整以考慮不再觸發的 `replaceState`。"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 removed symbols",
    action: "路由器套件不再匯出 `SpyNgModuleFactoryLoader` 和 `DeprecatedLoadChildren`。如果使用了它們，請確保刪除其對應的匯入語句。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    step: "v14 ng update",
    action: "執行 `ng update @angular/core@14 @angular/cli@14` 將你的 Angular 版本更新至 14。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "執行 `ng update @angular/material@14`。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    step: "TypeScript 4.6",
    action: "Angular 現在使用 TypeScript 4.6，請閱讀有關任何潛在變更的更多訊息：[TypeScript 4.6 發布公告](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/)"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    step: "v14 node",
    action: '確保你使用的是 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 14.15.0 或更高版本</a>。'
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: "v14 strict forms",
    action: "表單模型現在需要一個泛型型別引數。你可以選擇使用表單模型類別的不帶型別的版本進行漸進式遷移。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: "v14 aotSummaries",
    action: "從 `TestBed` 中刪除 `aotSummaries`，因為 Angular 不再在 Ivy 中需要它們。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    material: true,
    step: "v14 MatVertical and Horizontal Stepper",
    action: "如果你正在使用 `MatVerticalStepper` 或 `MatHorizontalStepper`，請確保切換到 `MatStepper`。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: "v14 JSONP",
    action: "從 JSONP 請求中刪除頭部。JSONP 不支援頭部，如果指定了頭部，HTTP 模組現在將丟擲錯誤而不是忽略它們。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: "v14 resolvers",
    action: "解析器現在將接收到的 observable 的第一個發射值，並在此之後進行導向，以更好地與其他守衛保持一致，而不是取最後發射的值。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 deprecate protractor entry",
    action: "已移除廢棄的 `angular/cdk/testing/protractor` 入口點。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 chipInput",
    action: "確保指定 `MatChipInputEvent` 的 `chipInput`，因為現在它是必需的。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 mixinErrorState",
    action: "在使用 `mixinErrorState` 的抽象類別中，你需要實現 `stateChanges` 類別成員，因為 mixin 不再提供它。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 CdkStepper orientation",
    action: "使用 `CdkStepper.orientation`，而不是 `CdkStepper._orientation`。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 CdkStepper and MatStepper",
    action: "如果你在建構式函式中擴充套件或使用 `CdkStepper` 或 `MatStepper`，則不再需要傳遞 `_document` 引數，因為它現在已被移除。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 mat-list-item-avatar",
    action: "將 `mat-list-item-avatar` CSS 類別重新命名為 `mat-list-item-with-avatar`。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 MatSelectionListChange.option",
    action: "使用 `MatSelectionListChange.options`，而不是 `MatSelectionListChange.option`。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 getHarnessLoaderForContent",
    action: "使用 `getChildLoader(MatListItemSection.CONTENT)`，而不是 `getHarnessLoaderForContent`。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 MatSelectionList",
    action: "如果你正在使用 `MatSelectionList`，請確保在其建構式函式中傳遞 `_focusMonitor`，因為現在它是必需的。此外，這個類別不再具有 `tabIndex` 屬性和 `tabIndex` 建構式函式引數。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 initialNavigation",
    action: "將 `initialNavigation: 'enabled'` 更新為 `initialNavigation: 'enabledBlocking'`。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 Route.pathMatch",
    action: "如果你正在定義帶有 `pathMatch` 的路由，可能需要將其顯式轉換為 `Route` 或 `Routes`。`Route.pathMatch` 不再相容 `string` 型別。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 stricter LoadChildrenCallback",
    action: "`LoadChildrenCallback` 回傳的 Promise 現在具有更嚴格的型別引數 `Type<any>|NgModuleFactory<any>`，而不是 `any`。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 router scheduling",
    action: "路由器不再在 `setTimeout` 內安排重導向導向。確保你的測試不依賴於這種行為。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 LocationStrategy",
    action: "現在實現 `LocationStrategy` 介面需要定義 `getState()`。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 http queries",
    action: "傳送查詢時不再需要對 `+` 進行處理，因為 `+` 不再傳送空格。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 AnimationDriver.getParentElement",
    action: "現在實現 `AnimationDriver` 需要 `getParentElement` 方法。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 invalid config",
    action: "延遲載入模組的無效路由設定現在會引發錯誤，而不是被忽略。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 router resolver",
    action: "從 `RouterOutletContract.activateWith` 函式中移除 `resolver`，以及從 `OutletContext` 類別中移除 `resolver`，因為不再需要工廠解析器。"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 initialUrl",
    action: "`Router.initialUrl` 只接受 `UrlTree`，以防止透過分配 `string` 值來誤用 API。"
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 base-decorators",
    action: '確保在具有繼承建構式函式和使用依賴注入的子類別中使用基底類別中的裝飾器。這樣的基底類別應該用 `@Injectable` 或 `@Directive` 裝飾，否則編譯器會回傳錯誤。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-05" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 setDisabledState",
    action: '在 v15 中，當附加 `ControlValueAccessor` 時，始終呼叫 `setDisabledState`。要退出此行為，使用 `FormsModule.withConfig` 或 `ReactiveFormsModule.withConfig`。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-06" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Advanced,
    step: "v15 canParse",
    action: '使用 `canParse` 的應用程式應該改為使用 `@angular/localize/tools` 中的 `analyze`。在 v15 中，從 `@angular/localize/tools` 的所有翻譯解析器中刪除了 `canParse` 方法。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-07" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 ActivatedRoutSnapshot",
    action: '確保所有 `ActivatedRouteSnapshot` 物件都有 `title` 屬性。在 v15 中，`title` 屬性是 `ActivatedRouteSnapshot` 的必需屬性。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-08" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Advanced,
    step: "v15 RouterOutlet",
    action: '如果你的 `RouterOutlet` 測試出現問題，請確保它們不依賴於與變更檢測相關的相應元件的實例化順序。在 v15 中，`RouterOutlet` 在變更檢測之後實例化元件。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-09" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 relativeLinkResolution",
    action: '在 v15 中，`relativeLinkResolution` 在路由器中不可設定。它用於退出先前的錯誤修復，現在已成為標準。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-10" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 DATE_PIPE_DEFAULT_OPTIONS",
    action: '將 `DATE_PIPE_DEFAULT_TIMEZONE` 令牌的實例更改為使用 `DATE_PIPE_DEFAULT_OPTIONS` 設定時區。在 v15 中，`DATE_PIPE_DEFAULT_TIMEZONE` 令牌已過時。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-01" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 iframe",
    action: "現有的 `<iframe>` 實例可能已經應用了安全敏感屬性，作為屬性或屬性繫結。這些安全敏感屬性可能出現在範本中或指令的宿主繫結中。這些情況需要更新，以確保符合對 `<iframe>` 繫結的新和更嚴格的規則。<a href='https://v15.angular.io/errors/NG0910' title='錯誤頁面的連結'>檢視更多訊息</a>"
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 Injector.get",
    action: '更新使用 `InjectFlags` 引數的 `Injector.get()` 的實例，以使用 `InjectOptions` 引數。在 v15 中，`Injector.get()` 的 `InjectFlags` 引數已過時。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-02" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 TestBed.inject",
    action: '更新使用 `InjectFlags` 引數的 `TestBed.inject()` 的實例，以使用 `InjectOptions` 引數。在 v15 中，`TestBed.inject()` 的 `InjectFlags` 引數已過時。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-01" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 ngModule in providedIn",
    action: '在 v15 中，對 `@Injectable` 和 `InjectionToken` 使用 `providedIn: ngModule` 已過時。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-04" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 providedIn any",
    action: '在 v15 中，對 `@Injectable` 或 `InjectionToken` 使用 `providedIn: \'any\'` 已過時。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-05" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 RouterLinkWithHref",
    action: '更新 `RouterLinkWithHref` 指令的實例以使用 `RouterLink` 指令。`RouterLinkWithHref` 指令在 v15 中已過時。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-06" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "v15 mat refactor",
    action: '在 Angular Material v15 中，許多元件已被重構為基於官方 Material Design Components for Web (MDC)。這個變化影響了許多元件的 DOM 和 CSS 類別。<a href="https://rc.material.angular.dev/guide/mdc-migration" title="有關此更改的更多訊息">繼續閱讀</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 visual review",
    action: "在將應用程式更新到 v15 後，透過視覺審查應用程式及其互動，確保一切正常執行。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 node support",
    action: "確保在升級應用程式之前使用受支援的 node.js 版本。Angular v16 支援 node.js 版本：v16 和 v18。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 ts support",
    action: "確保在升級應用程式之前使用受支援的 TypeScript 版本。Angular v16 支援 TypeScript 版本 4.9.3 或更高版本。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 ng update",
    action: "在應用程式的專案目錄中，執行 `ng update @angular/core@16 @angular/cli@16`，將應用程式更新到 Angular v16。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "執行 `ng update @angular/material@16`。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 zone.js support",
    action: "在升級應用程式之前，請確保使用受支援的 Zone.js 版本。Angular v16 支援 Zone.js 版本 0.13.x 或更高版本。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 RouterEvent",
    action: "Event 聯合體不再包含 `RouterEvent`，這意味著如果你正在使用 Event 型別，則可能必須將型別定義從 `(e: Event)` 更改為 `(e: Event|RouterEvent)`"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 routerEvent prop type",
    action: "除了 `NavigationEnd`，`routerEvent` 屬性現在還接受型別 `NavigationSkipped`"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 RendererType2",
    action: "僅將扁平陣列傳遞給 `RendererType2.styles`，因為它不再接受巢狀陣列"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 BrowserPlatformLocation",
    action: "你可能需要更新使用 `BrowserPlatformLocation` 的測試，因為 `MockPlatformLocation` 現在預設在測試中提供。[繼續閱讀](https://github.com/angular/angular/blob/main/CHANGELOG.md#common-9)"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 ngcc",
    action: "由於在 v16 中刪除了 Angular Compatibility Compiler (ngcc)，因此 v16 及更高版本的專案不再支援 View Engine 函式庫。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 createUrlTree",
    action: "在 `Router.createUrlTree` 中的錯誤修復後，你可能需要調整模擬 `ActivatedRoute` 的測試。[繼續閱讀](https://github.com/angular/angular/blob/main/CHANGELOG.md#1600-2023-05-03)"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 ApplicationConfig imports",
    action: "將 `ApplicationConfig` 的匯入更改為來自 `@angular/core`。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 renderModule",
    action: "修改程式碼以使用 `renderModule` 而不是 `renderModuleFactory`，因為後者已被刪除。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 XhrFactory",
    action: "修改程式碼，使用 `@angular/common` 中的 `XhrFactory` 而不是來自 `@angular/common/http` 的 `XhrFactory`。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 withServerTransition",
    action: "如果你在同一頁上執行多個 Angular 應用程式，並且使用了 `BrowserModule.withServerTransition({ appId: 'serverApp' })`，請確保設定 `APP_ID`，因為 `withServerTransition` 現已過時。[繼續閱讀](https://github.com/angular/angular/blob/main/CHANGELOG.md#platform-browser-4)"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 EnvironmentInjector",
    action: "將 `EnvironmentInjector.runInContext` 更改為 `runInInjectionContext`，並將環境注入器作為第一個引數傳遞。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 ViewContainerRef.createComponent",
    action: "更新你的程式碼，使用 `ViewContainerRef.createComponent` 而不使用工廠解析器。`ComponentFactoryResolver` 已從 Router API 中移除。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 APP_ID",
    action: "如果在同一頁上引導多個應用程式，請確保設定唯一的 `APP_IDs`。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 server renderApplication",
    action: "更新你的程式碼，修訂 `renderApplication` 方法，因為它不再接受根元件作為第一個引數，而是應該引導你的應用程式的回呼函式。[繼續閱讀](https://github.com/angular/angular/blob/main/CHANGELOG.md#platform-server-3)"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 PlatformConfig.baseUrl",
    action: "更新你的程式碼，刪除對 `PlatformConfig.baseUrl` 和 `PlatformConfig.useAbsoluteUrl` platform-server 設定選項的任何引用，因為它已被棄用。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 moduleid",
    action: "更新你的程式碼，刪除對 `@Directive`/`@Component` `moduleId` 屬性的任何引用，因為它不起作用，將在 v17 中刪除。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 transfer state imports",
    action: "從 `import {makeStateKey, StateKey, TransferState} from '@angular/platform-browser'` 更新匯入到 `import {makeStateKey, StateKey, TransferState} from '@angular/core'`"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 ComponentRef",
    action: "如果依賴於 `ComponentRef.setInput` 來設定元件輸入，即使它基於 `Object.is` 相等性檢查是相同的，請確保複製其值。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 ANALYZE_FOR_ENTRY_COMPONENTS",
    action: "更新你的程式碼，刪除對 `ANALYZE_FOR_ENTRY_COMPONENTS` 注入令牌的任何引用，因為它已被刪除。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 entry components",
    action: "`entryComponents` 不再可用，並且可以從 `@NgModule` 和 `@Component` 公共 API 中刪除任何對它的引用。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 ngTemplateOutletContext",
    action: "ngTemplateOutletContext 具有更嚴格的型別檢查，需要你在相應物件中宣告所有屬性。[繼續閱讀](https://github.com/angular/angular/blob/main/CHANGELOG.md#common-1)."
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 APF",
    action: "Angular 套件不再包括 FESM2015，並且分散式 ECMScript 已從 2020 更新到 2022。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 EventManager",
    action: "已刪除已棄用的 `EventManager` 方法 `addGlobalEventListener`，因為它未被 Ivy 使用。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 BrowserTransferStateModule",
    action: "`BrowserTransferStateModule` 不再可用，並且可以從你的應用程式中刪除任何對它的引用。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 ReflectiveInjector",
    action: "更新你的程式碼，使用 `Injector.create` 而不是 `ReflectiveInjector`，因為 `ReflectiveInjector` 已被移除。"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 QueryList",
    action: "`QueryList.filter` 現在支援型別保護函式。由於型別將被縮小，你可能需要更新依賴於舊行為的應用程式程式碼。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 node support",
    action: "在升級應用程式之前，請確保你正在使用受支援的 node.js 版本。Angular v17 支援 node.js 版本：v18.13.0 及更高版本。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 ts support",
    action: "在升級應用程式之前，請確保你正在使用受支援的 TypeScript 版本。Angular v17 支援 TypeScript 版本 5.2 或更高版本。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 zone.js support",
    action: "在升級應用程式之前，請確保你正在使用受支援的 Zone.js 版本。Angular v17 支援 Zone.js 版本 0.14.x 或更高版本。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 ng update",
    action: "在應用程式的專案目錄中執行 `ng update @angular/core@17 @angular/cli@17`，將你的應用程式升級到 Angular v17。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "執行 `ng update @angular/material@17`。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 style removal",
    action: "Angular 現在會自動刪除銷燬元件的樣式，這可能會影響到你現有的應用程式，特別是在你依賴於洩漏樣式的情況下。要更改此設定，請將 `REMOVE_STYLES_ON_COMPONENT_DESTROY` 提供程式的值更改為 `false`。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 router removals",
    action: "確保你在 `provideRouter` 或 `RouterModule.forRoot` 中設定 `setupTestingRouter`、`canceledNavigationResolution`、`paramsInheritanceStrategy`、`titleStrategy`、`urlUpdateStrategy`、`urlHandlingStrategy` 和 `malformedUriErrorHandler`，因為這些屬性現在不再是 `Router` 的公共 API 的一部分。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Advanced,
    step: "v17 ngDoCheck dynamic components",
    action: "對於動態實例化的元件，我們現在在變更檢測期間執行 `ngDoCheck`，如果元件被標記為髒，則可能需要更新動態實例化元件的測試或 `ngDoCheck` 中的邏輯。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 malformedUriErrorHandler",
    action: "在 `UrlSerializer.parse` 中處理 URL 解析錯誤，而不是 `malformedUriErrorHandler`，因為它現在是公共 API 的一部分。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 zone deep imports",
    action: "將 Zone.js 的深度匯入（如 `zone.js/bundles/zone-testing.js` 和 `zone.js/dist/zone`）更改為 `zone.js` 和 `zone.js/testing`。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Advanced,
    step: "v17 absolute redirects",
    action: "你可能需要調整路由器設定以防止絕對重導向後的無限重導向。在 v17 中，我們不再在絕對重導向後阻止額外的重導向。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 AnimationDriver",
    action: "將對 `AnimationDriver.NOOP` 的引用更改為使用 `NoopAnimationDriver`，因為 `AnimationDriver.NOOP` 現在已被棄用。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 switch strictness",
    action: "你可能需要調整 `NgSwitch` 的相等性檢查，因為現在預設採用更嚴格的 `===` 而不是 `==`。Angular 將為需要提供調整的用法記錄警告訊息。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Advanced,
    step: "v17 mutate in signals",
    action: "在 Angular 訊號中使用 `update` 代替 `mutate`。例如，`items.mutate(itemsArray => itemsArray.push(newItem));` 現在是 `items.update(itemsArray => [itemsArray, …newItem]);`"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 withNoDomReuse",
    action: "要停用水合作用，請使用 `ngSkipHydration` 或從提供程式清單中刪除 `provideClientHydration` 呼叫，因為 `withNoDomReuse` 不再是公共 API 的一部分。"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 paramsInheritanceStrategy",
    action: "如果你希望 `loadComponent` 路由的子路由從其父路由繼承資料，請將 `paramsInheritanceStrategy` 指定為 `always`，在 v17 中，現在設定為 `emptyOnly`。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    step: "v18 node support",
    action: "在升級應用程式之前，請確保你正在使用受支援的 node.js 版本。Angular v18 支援 node.js 版本：v18.19.0 及更高版本。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    step: "v18 ng update",
    action: "在應用程式的專案目錄中執行 `ng update @angular/core@18 @angular/cli@18`，將你的應用程式升級到 Angular v18。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "執行 `ng update @angular/material@18`。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    step: "18.0.0 Upgrade TypeScript",
    action: "將 TypeScript 更新到 5.4 版本或更高版本。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: async has been removed, use `waitForAsync` instead",
    action: "從 `@angular/core` 中替換 `async` 為 `waitForAsync`。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Deprecated matchesElement method removed from AnimationDriver",
    action: "刪除對 `matchesElement` 的呼叫，因為它現在不再是 `AnimationDriver` 的一部分。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0. Use `@angular/core` StateKey and TransferState",
    action: "從 `@angular/core` 中匯入 `StateKey` 和 `TransferState`，而不是 `@angular/platform-browser`。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0. Opt-in of caching for HTTP requests with auth headers",
    action: "在 `withHttpTransferCache` 中使用 `includeRequestsWithAuthHeaders: true` 以選擇不快取需要授權的 HTTP 請求。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0.REMOVE_OBSOLETE_IS_WORKER",
    action: "更新應用程式以刪除 `isPlatformWorkerUi` 和 `isPlatformWorkerApp`，因為它們是平台 WebWorker 的一部分，而現在不再是 Angular 的一部分。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0.FORCE_ZONE_CHANGE_DETECTION",
    action: "測試可能需要執行額外的變更檢測輪次，以完全反映 DOM 中的測試狀態。作為最後的手段，透過將 `provideZoneChangeDetection({ignoreChangesOutsideZone: true})` 新增到 TestBed 的提供程式中，恢復舊的行為。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0: Remove two-way binding expressions in writable bindings",
    action: "刪除在使用 `[(ngModel)]` 的範本中寫入屬性的表示式。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Use zones to track pending requests",
    action: "刪除對 `Testability` 方法 `increasePendingRequestCount`、`decreasePendingRequestCount` 和 `getPendingRequestCount` 的呼叫。這些訊息由 ZoneJS 跟蹤。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0: Move shared providers to the routed component",
    action: "將應該對路由元件可用的任何環境提供者從定義 `RouterOutlet` 的元件移動到 `bootstrapApplication` 或 `Route` 設定的提供者中。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0 Use RedirectCommand or new NavigationBehaviorOptions",
    action: "當守衛將 `UrlTree` 作為重導向回傳時，重導向導向現在將使用 `replaceUrl`，如果初始導向也使用了 `replaceUrl` 選項。如果你希望保留以前的行為，請使用新的 `NavigationBehaviorOptions` 設定重導向，方法是回傳具有所需選項的 `RedirectCommand` 而不是 `UrlTree`。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Remove deprecated resource cache providers",
    action: "刪除 `RESOURCE_CACHE_PROVIDER` 的依賴項，因為它不再是 Angular 執行時的一部分。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Update Node.js URL parsing in `ServerPlatformLocation`",
    action: "在 `@angular/platform-server` 中，現在 `pathname` 總是以 `/` 結尾，而 http: 和 https: 的預設連接埠分別是 80 和 443。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0. Use absolute URLs",
    action: "提供絕對 `url`，而不是使用 `PlatformConfig` 中的 `useAbsoluteUrl` 和 `baseUrl`。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0. Switch from `platformDynamicServer` to `platformServer`.",
    action: "將 `platformDynamicServer` 的用法替換為 `platformServer`。另外，新增一個 `import @angular/compiler`。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0. Remove `ServerTransferStateModule` from app imports",
    action: "從應用程式中刪除所有對 `ServerTransferStateModule` 的匯入。它不再需要。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0. Update `Route.redirectTo` to accept functions",
    action: "`Route.redirectTo` 現在可以接受函式，而不僅僅是字串。任何直接讀取 `Route` 物件並期望 `redirectTo` 是字串的程式碼可能需要更新，以考慮函式。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Guards can return `RedirectCommand`",
    action: "除了 `UrlTree` 和 `boolean`，`Route` 守衛和解析器現在還可以回傳一個 `RedirectCommand` 物件。任何直接讀取 `Route` 物件並期望只有 `boolean` 或 `UrlTree` 的程式碼可能需要更新，以考慮 `RedirectCommand`。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0: Mark `OnPush` views dirty",
    action: "對於使用 `OnPush` 變更檢測的任何元件，請確保它們被正確標記為髒，以啟用宿主繫結更新。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0-Refresh-Newly-Created-Views",
    action: "請注意，新創建的檢視或在變更檢測期間標記為檢查並重新附加的檢視現在保證在同一變更檢測週期中重新整理。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: `ComponentFixture.whenStable` matches `ApplicationRef.isStable`",
    action: "在調整 `ComponentFixture.whenStable` 和 `ApplicationRef.isStable` 語義後，使用 `whenStable` 時你的測試可能需要更長時間等待。"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0. `ComponentFixture.autoDetect` behavior more closely matches Application behavior",
    action: "如果你的測試依賴於 `ComponentFixture.autoDetect` 的變更檢測執行順序，可能會遇到測試失敗，因為它現在會在 `ApplicationRef.tick` 中執行測試夾具的變更檢測。例如，這將導致測試夾具在建立任何對話框之前重新整理，而以前可能相反。"
  },
  {
    action: "在應用程式的專案目錄中，執行 `ng update @angular/core@19 @angular/cli@19` 以將應用升級到Angular v19。",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0_ng_update"
  },
  {
    possibleIn: 1900,
    necessaryAsOf: 1900,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "執行 `ng update @angular/material@19`。"
  },
  {
    action: "Angular指令、元件和通道現在預設是獨立的。對於當前在NgModule中宣告的宣告，需明確指定 `standalone: false`。Angular CLI將自動更新程式碼以反映此變更。",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-standalone-declarations"
  },
  {
    action: "訪問範本引用變數時移除 `this.` 字首。例如，將 `<div #foo></div>{{ this.foo }}` 重構為 `<div #foo></div>{{ foo }}`",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-remove-this"
  },
  {
    action: "將 `BrowserModule.withServerTransition()` 的用法替換為注入 `APP_ID` 令牌來設定應用 `id`。",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-remove-browser-module-with-server-transition"
  },
  {
    action: "`KeyValueDiffers` 中的 `factories` 屬性已被移除。",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-remove-key-value-differs-factories"
  },
  {
    action: "在angular.json中，將 `@angular/localize` 建構式的 `name` 選項替換為 `project`。",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0_localize_builder_project_option"
  },
  {
    action: "將 `ExperimentalPendingTasks` 重新命名為 `PendingTasks`。",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0_rename_experimental_pending_tasks"
  },
  {
    action: "更新依賴effects的 `Promise` 時序的測試，改用 `await whenStable()` 或呼叫 `.detectChanges()` 來觸發effects。對於在變更檢測期間觸發的effects，確保它們不依賴應用完全渲染，或考慮使用 `afterRenderEffect()`。使用模擬時鐘的測試可能需要快進/清空時鐘。",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0.1"
  },
  {
    action: "升級至TypeScript 5.5或更高版本。",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0.2"
  },
  {
    action: "更新使用 `fakeAsync` 的測試：當變更發生在 Angular Zone 外部時（混合模式排程），原測試依賴的 Zone 合併和排程的特定時序可能受到影響，因為現在這些計時器會受 `tick` 和 `flush` 影響。",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-timers-in-zone"
  },
  {
    action: "使用 `createComponent` API且未傳遞第一個 `ng-content` 的內容時，需提供 `document.createTextNode('')` 作為 `projectableNode` 以防止渲染預設回退內容。",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-render-default-fallback"
  },
  {
    action: "更新依賴自定義元素周邊變更檢測特定時序或順序的測試，由於切換至混合排程器，時序可能已發生變化。",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-hybrid-scheduler-timing"
  },
  {
    action: "從使用 `Router.errorHandler` 遷移到 `provideRouter` 的 `withNavigationErrorHandler` 或 `RouterModule.forRoot` 的 `errorHandler`。",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-router-error-handler"
  },
  {
    action: "更新測試以處理 `ApplicationRef.tick` 期間丟擲的錯誤：可透過同步觸發變更檢測或拒絕未完成的 `ComponentFixture.whenStable` Promise來實現。",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-testbed-error-handling"
  },
  {
    action: "更新 `Resolve` 介面的用法，在其回傳型別中包含 `RedirectCommand`。",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-update-resolve-interface-return-type"
  },
  {
    action: "`fakeAsync` 現在預設會清空待處理計時器。若測試需要原有行為，需在選項引數中顯式傳遞 `{flush: false}`。",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-update-fakeasync-to-flush-pending-timers"
  },
  {
    action: "In the application's project directory, run `ng update @angular/core@20 @angular/cli@20` to update your application to Angular v20.",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 2e3,
    possibleIn: 2e3,
    step: "20.0.0_ng_update"
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "Run `ng update @angular/material@20`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_rename_afterRender_to_afterEveryRender",
    action: "Rename the `afterRender` lifecycle hook to `afterEveryRender`"
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_replace_TestBed_flushEffects_with_tick",
    action: "Replace uses of `TestBed.flushEffects()` with `TestBed.tick()`, the closest equivalent to synchronously flush effects."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_provideCheckNoChangesConfig",
    action: "Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig`. Note its behavior now applies to all `checkNoChanges` runs. The `useNgZoneOnStable` option is no longer available."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_refactor_ng_reflect_attributes_usage",
    action: "Refactor application and test code to avoid relying on `ng-reflect-*` attributes. If needed temporarily for migration, use `provideNgReflectAttributes()` from `@angular/core` in bootstrap providers to re-enable them in dev mode only."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_adjust_RedirectFn_return_type_handling",
    action: "Adjust code that directly calls functions returning `RedirectFn`. These functions can now also return an `Observable` or `Promise`; ensure your logic correctly handles these asynchronous return types."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_rename_resource_request_to_param",
    action: "Rename the `request` property passed in resources to `params`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_rename_rxResource_loader_to_stream",
    action: "Rename the `loader` property passed in rxResources to `stream`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_replace_ResourceStatus_by_corresponding_strings",
    action: "`ResourceStatus` is no longer an enum. Use the corresponding constant string values instead."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_rename_provideExperimentalZonelessChangeDetection",
    action: "Rename `provideExperimentalZonelessChangeDetection` to `provideZonelessChangeDetection`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_template_expressions_using_in_property",
    action: "If your templates use `{{ in }}` or `in` in expressions to refer to a component property named 'in', change it to `{{ this.in }}` or `this.in` as 'in' now refers to the JavaScript 'in' operator. If you're using `in` as a template reference, you'd have to rename the reference."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_router_method_array_parameters_to_readonly",
    action: "The type for the commands arrays passed to Router methods (`createUrlTree`, `navigate`, `createUrlTreeFromSnapshot`) have been updated to use `readonly T[]` since the array is not mutated. Code which extracts these types (e.g. with `typeof`) may need to be adjusted if it expects mutable arrays."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_animation_tests_for_guaranteed_flushing",
    action: "Review and update tests asserting on DOM elements involved in animations. Animations are now guaranteed to be flushed with change detection or `ApplicationRef.tick`, potentially altering previous test outcomes."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_handle_uncaught_listener_errors_in_tests",
    action: "In tests, uncaught errors in event listeners are now rethrown by default. Previously, these were only logged to the console by default. Catch them if intentional for the test case, or use `rethrowApplicationErrors: false` in `configureTestingModule` as a last resort."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_route_guards_array_types",
    action: "The `any` type is removed from the Route guard arrays (canActivate, canDeactivate, etc); ensure guards are functions, `ProviderToken<T>`, or (deprecated) strings. Refactor string guards to `ProviderToken<T>` or functions."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_update_nodejs_version",
    action: "Ensure your Node.js version is at least 20.11.1 and not v18 or v22.0-v22.10 before upgrading to Angular v20. Check https://angular.dev/reference/versions for the full list of supported Node.js versions."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_replace_TestBed_get_with_TestBed_inject",
    action: "Replace all occurrences of the deprecated `TestBed.get()` method with `TestBed.inject()` in your Angular tests for dependency injection."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_remove_InjectFlags_usage",
    action: "Remove `InjectFlags` enum and its usage from `inject`, `Injector.get`, `EnvironmentInjector.get`, and `TestBed.inject` calls. Use options like `{optional: true}` for `inject` or handle null for `*.get` methods."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_injector_get_calls_to_use_ProviderToken",
    action: "Update `injector.get()` calls to use a specific `ProviderToken<T>` instead of relying on the removed `any` overload. If using string tokens (deprecated since v4), migrate them to `ProviderToken<T>`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_update_typescript_version",
    action: "Upgrade your project's TypeScript version to at least 5.8 before upgrading to Angular v20 to ensure compatibility."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_review_AsyncPipe_error_handling_in_tests",
    action: "`Unhandled errors in subscriptions/promises of AsyncPipe` are now directly reported to `ErrorHandler`. This may alter test outcomes; ensure tests correctly handle these reported errors."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_refactor_PendingTasks_run_usage",
    action: "If relying on the return value of `PendingTasks.run`, refactor to use `PendingTasks.add`. Handle promise results/rejections manually, especially for SSR to prevent node process shutdown on unhandled rejections."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_template_expressions_using_void_property",
    action: "If your templates use `{{ void }}` or `void` in expressions to refer to a component property named 'void', change it to `{{ this.void }}` or `this.void` as 'void' now refers to the JavaScript `void` operator."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_review_date_pipe_formatter_Y_usage",
    action: "Review `DatePipe` usages. Using the `Y` (week-numbering year) formatter without also including `w` (week number) is now detected as suspicious. Use `y` (year) if that was the intent, or include `w` alongside `Y`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_handle_uncaught_listener_errors_in_tests",
    action: "In templates parentheses are now always respected. This can lead to runtime breakages when nullish coalescing were nested in parathesis. eg `(foo?.bar).baz` will throw if `foo` is nullish as it would in native JavaScript."
  }
];

// node_modules/@angular/material/fesm2022/internal-form-field.mjs
var _c0 = ["mat-internal-form-field", ""];
var _c1 = ["*"];
var __MatInternalFormField = class __MatInternalFormField {
  /** Position of the label relative to the content. */
  labelPosition;
};
__name(__MatInternalFormField, "_MatInternalFormField");
__publicField(__MatInternalFormField, "ɵfac", /* @__PURE__ */ __name(function _MatInternalFormField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __MatInternalFormField)();
}, "_MatInternalFormField_Factory"));
__publicField(__MatInternalFormField, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: __MatInternalFormField,
  selectors: [["div", "mat-internal-form-field", ""]],
  hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function _MatInternalFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mdc-form-field--align-end", ctx.labelPosition === "before");
    }
  }, "_MatInternalFormField_HostBindings"),
  inputs: {
    labelPosition: "labelPosition"
  },
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function _MatInternalFormField_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "_MatInternalFormField_Template"),
  styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var _MatInternalFormField = __MatInternalFormField;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c02 = ["input"];
var _c12 = ["label"];
var _c2 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
__name(MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY, "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY");
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var _MatCheckboxChange = class _MatCheckboxChange {
  /** The source checkbox of the event. */
  source;
  /** The new `checked` value of the checkbox. */
  checked;
};
__name(_MatCheckboxChange, "MatCheckboxChange");
var MatCheckboxChange = _MatCheckboxChange;
var defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
var _MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationsDisabled = _animationsDisabled();
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  /** CSS classes to add when transitioning between the different checkbox states. */
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel = "";
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  ariaDescribedby;
  /**
   * Users can specify the `aria-expanded` attribute which will be forwarded to the input element
   */
  ariaExpanded;
  /**
   * Users can specify the `aria-controls` attribute which will be forwarded to the input element
   */
  ariaControls;
  /** Users can specify the `aria-owns` attribute which will be forwarded to the input element */
  ariaOwns;
  _uniqueId;
  /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
  id;
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether the checkbox is required. */
  required;
  /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
  labelPosition = "after";
  /** Name value will be applied to the input element if present */
  name = null;
  /** Event emitted when the checkbox's `checked` value changes. */
  change = new EventEmitter();
  /** Event emitted when the checkbox's `indeterminate` value changes. */
  indeterminateChange = new EventEmitter();
  /** The value attribute of the native input element */
  value;
  /** Whether the checkbox has a ripple. */
  disableRipple;
  /** The native `<input type="checkbox">` element */
  _inputElement;
  /** The native `<label>` element */
  _labelElement;
  /** Tabindex for the checkbox. */
  tabIndex;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the checkbox. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/checkbox/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the checkbox should remain interactive when it is disabled. */
  disabledInteractive;
  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   * @docs-private
   */
  _onTouched = /* @__PURE__ */ __name(() => {
  }, "_onTouched");
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = /* @__PURE__ */ __name(() => {
  }, "_controlValueAccessorChangeFn");
  _validatorChangeFn = /* @__PURE__ */ __name(() => {
  }, "_validatorChangeFn");
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = this._options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this.indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate();
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate();
    this._indeterminate.set(value);
    if (changed) {
      if (value) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(value);
    }
    this._syncIndeterminate(value);
  }
  _indeterminate = signal(false, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate.set(false);
          this.indeterminateChange.emit(false);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationsDisabled) {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
};
__name(_MatCheckbox, "MatCheckbox");
__publicField(_MatCheckbox, "ɵfac", /* @__PURE__ */ __name(function MatCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCheckbox)();
}, "MatCheckbox_Factory"));
__publicField(_MatCheckbox, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: _MatCheckbox,
  selectors: [["mat-checkbox"]],
  viewQuery: /* @__PURE__ */ __name(function MatCheckbox_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 5);
      ɵɵviewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inputElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._labelElement = _t.first);
    }
  }, "MatCheckbox_Query"),
  hostAttrs: [1, "mat-mdc-checkbox"],
  hostVars: 16,
  hostBindings: /* @__PURE__ */ __name(function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵdomProperty("id", ctx.id);
      ɵɵattribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
      ɵɵclassProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
    }
  }, "MatCheckbox_HostBindings"),
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
    ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
    ariaControls: [0, "aria-controls", "ariaControls"],
    ariaOwns: [0, "aria-owns", "ariaOwns"],
    id: "id",
    required: [2, "required", "required", booleanAttribute],
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
    color: "color",
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
    checked: [2, "checked", "checked", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  exportAs: ["matCheckbox"],
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _MatCheckbox),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: _MatCheckbox,
    multi: true
  }]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c2,
  decls: 15,
  vars: 23,
  consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
  template: /* @__PURE__ */ __name(function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 3);
      ɵɵlistener("click", /* @__PURE__ */ __name(function MatCheckbox_Template_div_click_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._preventBubblingFromLabel($event));
      }, "MatCheckbox_Template_div_click_0_listener"));
      ɵɵelementStart(1, "div", 4, 0)(3, "div", 5);
      ɵɵlistener("click", /* @__PURE__ */ __name(function MatCheckbox_Template_div_click_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onTouchTargetClick());
      }, "MatCheckbox_Template_div_click_3_listener"));
      ɵɵelementEnd();
      ɵɵelementStart(4, "input", 6, 1);
      ɵɵlistener("blur", /* @__PURE__ */ __name(function MatCheckbox_Template_input_blur_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onBlur());
      }, "MatCheckbox_Template_input_blur_4_listener"))("click", /* @__PURE__ */ __name(function MatCheckbox_Template_input_click_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onInputClick());
      }, "MatCheckbox_Template_input_click_4_listener"))("change", /* @__PURE__ */ __name(function MatCheckbox_Template_input_change_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onInteractionEvent($event));
      }, "MatCheckbox_Template_input_change_4_listener"));
      ɵɵelementEnd();
      ɵɵelement(6, "div", 7);
      ɵɵelementStart(7, "div", 8);
      ɵɵnamespaceSVG();
      ɵɵelementStart(8, "svg", 9);
      ɵɵelement(9, "path", 10);
      ɵɵelementEnd();
      ɵɵnamespaceHTML();
      ɵɵelement(10, "div", 11);
      ɵɵelementEnd();
      ɵɵelement(11, "div", 12);
      ɵɵelementEnd();
      ɵɵelementStart(12, "label", 13, 2);
      ɵɵprojection(14);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      const checkbox_r2 = ɵɵreference(2);
      ɵɵproperty("labelPosition", ctx.labelPosition);
      ɵɵadvance(4);
      ɵɵclassProp("mdc-checkbox--selected", ctx.checked);
      ɵɵproperty("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
      ɵɵattribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
      ɵɵadvance(7);
      ɵɵproperty("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
      ɵɵadvance();
      ɵɵproperty("for", ctx.inputId);
    }
  }, "MatCheckbox_Template"),
  dependencies: [MatRipple, _MatInternalFormField],
  styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var MatCheckbox = _MatCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatCheckbox),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: /* @__PURE__ */ __name((value) => value == null ? void 0 : numberAttribute(value), "transform")
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatCheckboxModule = class _MatCheckboxModule {
};
__name(_MatCheckboxModule, "MatCheckboxModule");
__publicField(_MatCheckboxModule, "ɵfac", /* @__PURE__ */ __name(function MatCheckboxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCheckboxModule)();
}, "MatCheckboxModule_Factory"));
__publicField(_MatCheckboxModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
  type: _MatCheckboxModule,
  imports: [MatCheckbox, MatCommonModule],
  exports: [MatCheckbox, MatCommonModule]
}));
__publicField(_MatCheckboxModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({
  imports: [MatCheckbox, MatCommonModule, MatCommonModule]
}));
var MatCheckboxModule = _MatCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox, MatCommonModule],
      exports: [MatCheckbox, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var __CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
};
__name(__CdkTextFieldStyleLoader, "_CdkTextFieldStyleLoader");
__publicField(__CdkTextFieldStyleLoader, "ɵfac", /* @__PURE__ */ __name(function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __CdkTextFieldStyleLoader)();
}, "_CdkTextFieldStyleLoader_Factory"));
__publicField(__CdkTextFieldStyleLoader, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: __CdkTextFieldStyleLoader,
  selectors: [["ng-component"]],
  hostAttrs: ["cdk-text-field-style-loader", ""],
  decls: 0,
  vars: 0,
  template: /* @__PURE__ */ __name(function _CdkTextFieldStyleLoader_Template(rf, ctx) {
  }, "_CdkTextFieldStyleLoader_Template"),
  styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var _CdkTextFieldStyleLoader = __CdkTextFieldStyleLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkTextFieldStyleLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "cdk-text-field-style-loader": ""
      },
      styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"]
    }]
  }], null, null);
})();
var listenerOptions = {
  passive: true
};
var _AutofillMonitor = class _AutofillMonitor {
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _monitoredElements = /* @__PURE__ */ new Map();
  constructor() {
  }
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return EMPTY;
    }
    this._styleLoader.load(_CdkTextFieldStyleLoader);
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const subject = new Subject();
    const cssClass = "cdk-text-field-autofilled";
    const listener = /* @__PURE__ */ __name((event) => {
      if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    }, "listener");
    const unlisten = this._ngZone.runOutsideAngular(() => {
      element.classList.add("cdk-text-field-autofill-monitored");
      return this._renderer.listen(element, "animationstart", listener, listenerOptions);
    });
    this._monitoredElements.set(element, {
      subject,
      unlisten
    });
    return subject;
  }
  stopMonitoring(elementOrRef) {
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove("cdk-text-field-autofill-monitored");
      element.classList.remove("cdk-text-field-autofilled");
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
};
__name(_AutofillMonitor, "AutofillMonitor");
__publicField(_AutofillMonitor, "ɵfac", /* @__PURE__ */ __name(function AutofillMonitor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutofillMonitor)();
}, "AutofillMonitor_Factory"));
__publicField(_AutofillMonitor, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
  token: _AutofillMonitor,
  factory: _AutofillMonitor.ɵfac,
  providedIn: "root"
}));
var AutofillMonitor = _AutofillMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofillMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _CdkAutofill = class _CdkAutofill {
  _elementRef = inject(ElementRef);
  _autofillMonitor = inject(AutofillMonitor);
  /** Emits when the autofill state of the element changes. */
  cdkAutofill = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
};
__name(_CdkAutofill, "CdkAutofill");
__publicField(_CdkAutofill, "ɵfac", /* @__PURE__ */ __name(function CdkAutofill_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkAutofill)();
}, "CdkAutofill_Factory"));
__publicField(_CdkAutofill, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _CdkAutofill,
  selectors: [["", "cdkAutofill", ""]],
  outputs: {
    cdkAutofill: "cdkAutofill"
  }
}));
var CdkAutofill = _CdkAutofill;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAutofill, [{
    type: Directive,
    args: [{
      selector: "[cdkAutofill]"
    }]
  }], () => [], {
    cdkAutofill: [{
      type: Output
    }]
  });
})();
var _CdkTextareaAutosize = class _CdkTextareaAutosize {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _resizeEvents = new Subject();
  /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
  _previousValue;
  _initialHeight;
  _destroyed = new Subject();
  _listenerCleanups;
  _minRows;
  _maxRows;
  _enabled = true;
  /**
   * Value of minRows as of last resize. If the minRows has decreased, the
   * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
   * does not have the same problem because it does not affect the textarea's scrollHeight.
   */
  _previousMinRows = -1;
  _textareaElement;
  /** Minimum amount of rows in the textarea. */
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = coerceNumberProperty(value);
    this._setMinHeight();
  }
  /** Maximum amount of rows in the textarea. */
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = coerceNumberProperty(value);
    this._setMaxHeight();
  }
  /** Whether autosizing is enabled or not */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = void 0;
    if (value) {
      this._textareaElement.setAttribute("placeholder", value);
    } else {
      this._textareaElement.removeAttribute("placeholder");
    }
    this._cacheTextareaPlaceholderHeight();
  }
  /** Cached height of a textarea with a single row. */
  _cachedLineHeight;
  /** Cached height of a textarea with only the placeholder. */
  _cachedPlaceholderHeight;
  /** Cached scroll top of a textarea */
  _cachedScrollTop;
  /** Used to reference correct document/window */
  _document = inject(DOCUMENT);
  _hasFocus;
  _isViewInited = false;
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_CdkTextFieldStyleLoader);
    this._textareaElement = this._elementRef.nativeElement;
  }
  /** Sets the minimum height of the textarea as determined by minRows. */
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  /** Sets the maximum height of the textarea as determined by maxRows. */
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)];
        this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
          this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
          this.resizeToFitContent(true);
        });
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
    this._resizeEvents.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Cache the height of a single-row textarea if it has not already been cached.
   *
   * We need to know how large a single "row" of a textarea is in order to apply minRows and
   * maxRows. For the initial version, we will assume that the height of a single line in the
   * textarea does not ever change.
   */
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    const textareaClone = this._textareaElement.cloneNode(false);
    const cloneStyles = textareaClone.style;
    textareaClone.rows = 1;
    cloneStyles.position = "absolute";
    cloneStyles.visibility = "hidden";
    cloneStyles.border = "none";
    cloneStyles.padding = "0";
    cloneStyles.height = "";
    cloneStyles.minHeight = "";
    cloneStyles.maxHeight = "";
    cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
    cloneStyles.overflow = "hidden";
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || "";
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = isFirefox && this._hasFocus;
    const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    element.classList.add(measuringClass);
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  /** Handles `focus` and `blur` events. */
  _handleFocusEvent = /* @__PURE__ */ __name((event) => {
    this._hasFocus = event.type === "focus";
  }, "_handleFocusEvent");
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  /**
   * Resize the textarea to fit its content.
   * @param force Whether to force a height recalculation. By default the height will be
   *    recalculated only if the value changed since the last call.
   */
  resizeToFitContent(force = false) {
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    this._cachedScrollTop = this._textareaElement.scrollTop;
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  /**
   * Resets the textarea to its original size
   */
  reset() {
    if (this._initialHeight !== void 0) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
  }
  /**
   * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
   * prevent it from scrolling to the caret position. We need to re-set the selection
   * in order for it to scroll to the proper position.
   */
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
      textarea.scrollTop = this._cachedScrollTop;
    }
  }
};
__name(_CdkTextareaAutosize, "CdkTextareaAutosize");
__publicField(_CdkTextareaAutosize, "ɵfac", /* @__PURE__ */ __name(function CdkTextareaAutosize_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTextareaAutosize)();
}, "CdkTextareaAutosize_Factory"));
__publicField(_CdkTextareaAutosize, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _CdkTextareaAutosize,
  selectors: [["textarea", "cdkTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
  hostBindings: /* @__PURE__ */ __name(function CdkTextareaAutosize_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", /* @__PURE__ */ __name(function CdkTextareaAutosize_input_HostBindingHandler() {
        return ctx._noopInputHandler();
      }, "CdkTextareaAutosize_input_HostBindingHandler"));
    }
  }, "CdkTextareaAutosize_HostBindings"),
  inputs: {
    minRows: [0, "cdkAutosizeMinRows", "minRows"],
    maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
    enabled: [2, "cdkTextareaAutosize", "enabled", booleanAttribute],
    placeholder: "placeholder"
  },
  exportAs: ["cdkTextareaAutosize"]
}));
var CdkTextareaAutosize = _CdkTextareaAutosize;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextareaAutosize, [{
    type: Directive,
    args: [{
      selector: "textarea[cdkTextareaAutosize]",
      exportAs: "cdkTextareaAutosize",
      host: {
        "class": "cdk-textarea-autosize",
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        "rows": "1",
        "(input)": "_noopInputHandler()"
      }
    }]
  }], () => [], {
    minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }],
    maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }],
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTextareaAutosize",
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var _TextFieldModule = class _TextFieldModule {
};
__name(_TextFieldModule, "TextFieldModule");
__publicField(_TextFieldModule, "ɵfac", /* @__PURE__ */ __name(function TextFieldModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TextFieldModule)();
}, "TextFieldModule_Factory"));
__publicField(_TextFieldModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
  type: _TextFieldModule,
  imports: [CdkAutofill, CdkTextareaAutosize],
  exports: [CdkAutofill, CdkTextareaAutosize]
}));
__publicField(_TextFieldModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({}));
var TextFieldModule = _TextFieldModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/input-value-accessor.mjs
var MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");

// node_modules/@angular/material/fesm2022/form-field-module.mjs
var _MatFormFieldModule = class _MatFormFieldModule {
};
__name(_MatFormFieldModule, "MatFormFieldModule");
__publicField(_MatFormFieldModule, "ɵfac", /* @__PURE__ */ __name(function MatFormFieldModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatFormFieldModule)();
}, "MatFormFieldModule_Factory"));
__publicField(_MatFormFieldModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
  type: _MatFormFieldModule,
  imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
  exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
}));
__publicField(_MatFormFieldModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({
  imports: [MatCommonModule, ObserversModule, MatFormField, MatCommonModule]
}));
var MatFormFieldModule = _MatFormFieldModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
      exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
__name(getMatInputUnsupportedTypeError, "getMatInputUnsupportedTypeError");
var MAT_INPUT_INVALID_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
var MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
var _MatInput = class _MatInput {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  _autofillMonitor = inject(AutofillMonitor);
  _ngZone = inject(NgZone);
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _renderer = inject(Renderer2);
  _uid = inject(_IdGenerator).getId("mat-input-");
  _previousNativeValue;
  _inputValueAccessor;
  _signalBasedValueAccessor;
  _previousPlaceholder;
  _errorStateTracker;
  _config = inject(MAT_INPUT_CONFIG, {
    optional: true
  });
  _cleanupIosKeyup;
  _cleanupWebkitWheel;
  /** Whether the component is being rendered on the server. */
  _isServer;
  /** Whether the component is a native html select. */
  _isNativeSelect;
  /** Whether the component is a textarea. */
  _isTextarea;
  /** Whether the input is inside of a form field. */
  _isInFormField;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  focused = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  stateChanges = new Subject();
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  controlType = "mat-input";
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  autofilled = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  _disabled = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  _id;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  placeholder;
  /**
   * Name of the input.
   * @docs-private
   */
  name;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  _required;
  /** Input type of the element. */
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "text";
    this._validateType();
    if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  _type = "text";
  /** An object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  userAriaDescribedBy;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get value() {
    return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
  }
  set value(value) {
    if (value !== this.value) {
      if (this._signalBasedValueAccessor) {
        this._signalBasedValueAccessor.value.set(value);
      } else {
        this._inputValueAccessor.value = value;
      }
      this.stateChanges.next();
    }
  }
  /** Whether the element is readonly. */
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = coerceBooleanProperty(value);
  }
  _readonly = false;
  /** Whether the input should remain interactive when it is disabled. */
  disabledInteractive;
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter((t) => getSupportedInputTypes().has(t));
  constructor() {
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, {
      optional: true,
      self: true
    });
    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();
    if (accessor) {
      if (isSignal(accessor.value)) {
        this._signalBasedValueAccessor = accessor;
      } else {
        this._inputValueAccessor = accessor;
      }
    } else {
      this._inputValueAccessor = element;
    }
    this._previousNativeValue = this.value;
    this.id = this.id;
    if (this._platform.IOS) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
      });
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === "select";
    this._isTextarea = nodeName === "textarea";
    this._isInFormField = !!this._formField;
    this.disabledInteractive = this._config?.disabledInteractive || false;
    if (this._isNativeSelect) {
      this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
    }
    if (this._signalBasedValueAccessor) {
      effect(() => {
        this._signalBasedValueAccessor.value();
        this.stateChanges.next();
      });
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    this._cleanupIosKeyup?.();
    this._cleanupWebkitWheel?.();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled;
        this.stateChanges.next();
      }
    }
    this._dirtyCheckNativeValue();
    this._dirtyCheckPlaceholder();
  }
  /** Focuses the input. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Callback for the cases where the focused state of the input changes. */
  _focusChanged(isFocused) {
    if (isFocused === this.focused) {
      return;
    }
    if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
      const element = this._elementRef.nativeElement;
      if (element.type === "number") {
        element.type = "text";
        element.setSelectionRange(0, 0);
        element.type = "number";
      } else {
        element.setSelectionRange(0, 0);
      }
    }
    this.focused = isFocused;
    this.stateChanges.next();
  }
  _onInput() {
  }
  /** Does some manual dirty checking on the native input `value` property. */
  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  /** Does some manual dirty checking on the native input `placeholder` attribute. */
  _dirtyCheckPlaceholder() {
    const placeholder = this._getPlaceholder();
    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
    }
  }
  /** Gets the current placeholder of the form field. */
  _getPlaceholder() {
    return this.placeholder || null;
  }
  /** Make sure the input is a supported type. */
  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  /** Checks whether the input type is one of the types that are never empty. */
  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  /** Checks whether the input is invalid based on the native validation. */
  _isBadInput() {
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0];
      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused && !this.disabled || !this.empty;
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }
  /** Whether the form control is a native select that is displayed inline. */
  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }
  _iOSKeyupListener = /* @__PURE__ */ __name((event) => {
    const el = event.target;
    if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
      el.setSelectionRange(1, 1);
      el.setSelectionRange(0, 0);
    }
  }, "_iOSKeyupListener");
  /** Gets the value to set on the `readonly` attribute. */
  _getReadonlyAttribute() {
    if (this._isNativeSelect) {
      return null;
    }
    if (this.readonly || this.disabled && this.disabledInteractive) {
      return "true";
    }
    return null;
  }
};
__name(_MatInput, "MatInput");
__publicField(_MatInput, "ɵfac", /* @__PURE__ */ __name(function MatInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatInput)();
}, "MatInput_Factory"));
__publicField(_MatInput, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatInput,
  selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
  hostAttrs: [1, "mat-mdc-input-element"],
  hostVars: 21,
  hostBindings: /* @__PURE__ */ __name(function MatInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", /* @__PURE__ */ __name(function MatInput_focus_HostBindingHandler() {
        return ctx._focusChanged(true);
      }, "MatInput_focus_HostBindingHandler"))("blur", /* @__PURE__ */ __name(function MatInput_blur_HostBindingHandler() {
        return ctx._focusChanged(false);
      }, "MatInput_blur_HostBindingHandler"))("input", /* @__PURE__ */ __name(function MatInput_input_HostBindingHandler() {
        return ctx._onInput();
      }, "MatInput_input_HostBindingHandler"));
    }
    if (rf & 2) {
      ɵɵdomProperty("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
      ɵɵattribute("name", ctx.name || null)("readonly", ctx._getReadonlyAttribute())("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
      ɵɵclassProp("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mat-mdc-input-disabled-interactive", ctx.disabledInteractive)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
    }
  }, "MatInput_HostBindings"),
  inputs: {
    disabled: "disabled",
    id: "id",
    placeholder: "placeholder",
    name: "name",
    required: "required",
    type: "type",
    errorStateMatcher: "errorStateMatcher",
    userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
    value: "value",
    readonly: "readonly",
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
  },
  exportAs: ["matInput"],
  features: [ɵɵProvidersFeature([{
    provide: MatFormFieldControl,
    useExisting: _MatInput
  }]), ɵɵNgOnChangesFeature]
}));
var MatInput = _MatInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInput, [{
    type: Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: "matInput",
      host: {
        "class": "mat-mdc-input-element",
        // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
        // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
        // this MDC equivalent input.
        "[class.mat-input-server]": "_isServer",
        "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
        "[class.mat-mdc-form-field-input-control]": "_isInFormField",
        "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
        "[class.mdc-text-field__input]": "_isInFormField",
        "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[id]": "id",
        "[disabled]": "disabled && !disabledInteractive",
        "[required]": "required",
        "[attr.name]": "name || null",
        "[attr.readonly]": "_getReadonlyAttribute()",
        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
        // Only mark the input as invalid for assistive technology if it has a value since the
        // state usually overlaps with `aria-required` when the input is empty and can be redundant.
        "[attr.aria-invalid]": "(empty && required) ? null : errorState",
        "[attr.aria-required]": "required",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[attr.id]": "id",
        "(focus)": "_focusChanged(true)",
        "(blur)": "_focusChanged(false)",
        "(input)": "_onInput()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatInput
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    value: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatInputModule = class _MatInputModule {
};
__name(_MatInputModule, "MatInputModule");
__publicField(_MatInputModule, "ɵfac", /* @__PURE__ */ __name(function MatInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatInputModule)();
}, "MatInputModule_Factory"));
__publicField(_MatInputModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
  type: _MatInputModule,
  imports: [MatCommonModule, MatFormFieldModule, MatInput],
  exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
}));
__publicField(_MatInputModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({
  imports: [MatCommonModule, MatFormFieldModule, MatFormFieldModule, TextFieldModule, MatCommonModule]
}));
var MatInputModule = _MatInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInputModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatFormFieldModule, MatInput],
      exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/card.mjs
var _c03 = ["*"];
var _c13 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
var _c22 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
var _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
var _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
var MAT_CARD_CONFIG = new InjectionToken("MAT_CARD_CONFIG");
var _MatCard = class _MatCard {
  appearance;
  constructor() {
    const config = inject(MAT_CARD_CONFIG, {
      optional: true
    });
    this.appearance = config?.appearance || "raised";
  }
};
__name(_MatCard, "MatCard");
__publicField(_MatCard, "ɵfac", /* @__PURE__ */ __name(function MatCard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCard)();
}, "MatCard_Factory"));
__publicField(_MatCard, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: _MatCard,
  selectors: [["mat-card"]],
  hostAttrs: [1, "mat-mdc-card", "mdc-card"],
  hostVars: 8,
  hostBindings: /* @__PURE__ */ __name(function MatCard_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined")("mat-mdc-card-filled", ctx.appearance === "filled")("mdc-card--filled", ctx.appearance === "filled");
    }
  }, "MatCard_HostBindings"),
  inputs: {
    appearance: "appearance"
  },
  exportAs: ["matCard"],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatCard_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }, "MatCard_Template"),
  styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var MatCard = _MatCard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCard, [{
    type: Component,
    args: [{
      selector: "mat-card",
      host: {
        "class": "mat-mdc-card mdc-card",
        "[class.mat-mdc-card-outlined]": 'appearance === "outlined"',
        "[class.mdc-card--outlined]": 'appearance === "outlined"',
        "[class.mat-mdc-card-filled]": 'appearance === "filled"',
        "[class.mdc-card--filled]": 'appearance === "filled"'
      },
      exportAs: "matCard",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n']
    }]
  }], () => [], {
    appearance: [{
      type: Input
    }]
  });
})();
var _MatCardTitle = class _MatCardTitle {
};
__name(_MatCardTitle, "MatCardTitle");
__publicField(_MatCardTitle, "ɵfac", /* @__PURE__ */ __name(function MatCardTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardTitle)();
}, "MatCardTitle_Factory"));
__publicField(_MatCardTitle, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardTitle,
  selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
  hostAttrs: [1, "mat-mdc-card-title"]
}));
var MatCardTitle = _MatCardTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        "class": "mat-mdc-card-title"
      }
    }]
  }], null, null);
})();
var _MatCardTitleGroup = class _MatCardTitleGroup {
};
__name(_MatCardTitleGroup, "MatCardTitleGroup");
__publicField(_MatCardTitleGroup, "ɵfac", /* @__PURE__ */ __name(function MatCardTitleGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardTitleGroup)();
}, "MatCardTitleGroup_Factory"));
__publicField(_MatCardTitleGroup, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: _MatCardTitleGroup,
  selectors: [["mat-card-title-group"]],
  hostAttrs: [1, "mat-mdc-card-title-group"],
  ngContentSelectors: _c22,
  decls: 4,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatCardTitleGroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c13);
      ɵɵdomElementStart(0, "div");
      ɵɵprojection(1);
      ɵɵdomElementEnd();
      ɵɵprojection(2, 1);
      ɵɵprojection(3, 2);
    }
  }, "MatCardTitleGroup_Template"),
  encapsulation: 2,
  changeDetection: 0
}));
var MatCardTitleGroup = _MatCardTitleGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitleGroup, [{
    type: Component,
    args: [{
      selector: "mat-card-title-group",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-title-group"
      },
      template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var _MatCardContent = class _MatCardContent {
};
__name(_MatCardContent, "MatCardContent");
__publicField(_MatCardContent, "ɵfac", /* @__PURE__ */ __name(function MatCardContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardContent)();
}, "MatCardContent_Factory"));
__publicField(_MatCardContent, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardContent,
  selectors: [["mat-card-content"]],
  hostAttrs: [1, "mat-mdc-card-content"]
}));
var MatCardContent = _MatCardContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardContent, [{
    type: Directive,
    args: [{
      selector: "mat-card-content",
      host: {
        "class": "mat-mdc-card-content"
      }
    }]
  }], null, null);
})();
var _MatCardSubtitle = class _MatCardSubtitle {
};
__name(_MatCardSubtitle, "MatCardSubtitle");
__publicField(_MatCardSubtitle, "ɵfac", /* @__PURE__ */ __name(function MatCardSubtitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardSubtitle)();
}, "MatCardSubtitle_Factory"));
__publicField(_MatCardSubtitle, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardSubtitle,
  selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
  hostAttrs: [1, "mat-mdc-card-subtitle"]
}));
var MatCardSubtitle = _MatCardSubtitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSubtitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        "class": "mat-mdc-card-subtitle"
      }
    }]
  }], null, null);
})();
var _MatCardActions = class _MatCardActions {
  // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
  // as to not conflict with the native `align` attribute.
  /** Position of the actions inside the card. */
  align = "start";
};
__name(_MatCardActions, "MatCardActions");
__publicField(_MatCardActions, "ɵfac", /* @__PURE__ */ __name(function MatCardActions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardActions)();
}, "MatCardActions_Factory"));
__publicField(_MatCardActions, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardActions,
  selectors: [["mat-card-actions"]],
  hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function MatCardActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-mdc-card-actions-align-end", ctx.align === "end");
    }
  }, "MatCardActions_HostBindings"),
  inputs: {
    align: "align"
  },
  exportAs: ["matCardActions"]
}));
var MatCardActions = _MatCardActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardActions, [{
    type: Directive,
    args: [{
      selector: "mat-card-actions",
      exportAs: "matCardActions",
      host: {
        "class": "mat-mdc-card-actions mdc-card__actions",
        "[class.mat-mdc-card-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
var _MatCardHeader = class _MatCardHeader {
};
__name(_MatCardHeader, "MatCardHeader");
__publicField(_MatCardHeader, "ɵfac", /* @__PURE__ */ __name(function MatCardHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardHeader)();
}, "MatCardHeader_Factory"));
__publicField(_MatCardHeader, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: _MatCardHeader,
  selectors: [["mat-card-header"]],
  hostAttrs: [1, "mat-mdc-card-header"],
  ngContentSelectors: _c4,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-mdc-card-header-text"]],
  template: /* @__PURE__ */ __name(function MatCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c3);
      ɵɵprojection(0);
      ɵɵdomElementStart(1, "div", 0);
      ɵɵprojection(2, 1);
      ɵɵdomElementEnd();
      ɵɵprojection(3, 2);
    }
  }, "MatCardHeader_Template"),
  encapsulation: 2,
  changeDetection: 0
}));
var MatCardHeader = _MatCardHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardHeader, [{
    type: Component,
    args: [{
      selector: "mat-card-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-header"
      },
      template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var _MatCardFooter = class _MatCardFooter {
};
__name(_MatCardFooter, "MatCardFooter");
__publicField(_MatCardFooter, "ɵfac", /* @__PURE__ */ __name(function MatCardFooter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardFooter)();
}, "MatCardFooter_Factory"));
__publicField(_MatCardFooter, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardFooter,
  selectors: [["mat-card-footer"]],
  hostAttrs: [1, "mat-mdc-card-footer"]
}));
var MatCardFooter = _MatCardFooter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardFooter, [{
    type: Directive,
    args: [{
      selector: "mat-card-footer",
      host: {
        "class": "mat-mdc-card-footer"
      }
    }]
  }], null, null);
})();
var _MatCardImage = class _MatCardImage {
};
__name(_MatCardImage, "MatCardImage");
__publicField(_MatCardImage, "ɵfac", /* @__PURE__ */ __name(function MatCardImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardImage)();
}, "MatCardImage_Factory"));
__publicField(_MatCardImage, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardImage,
  selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
  hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
}));
var MatCardImage = _MatCardImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-image], [matCardImage]",
      host: {
        "class": "mat-mdc-card-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardSmImage = class _MatCardSmImage {
};
__name(_MatCardSmImage, "MatCardSmImage");
__publicField(_MatCardSmImage, "ɵfac", /* @__PURE__ */ __name(function MatCardSmImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardSmImage)();
}, "MatCardSmImage_Factory"));
__publicField(_MatCardSmImage, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardSmImage,
  selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
  hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
}));
var MatCardSmImage = _MatCardSmImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSmImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-sm-image], [matCardImageSmall]",
      host: {
        "class": "mat-mdc-card-sm-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardMdImage = class _MatCardMdImage {
};
__name(_MatCardMdImage, "MatCardMdImage");
__publicField(_MatCardMdImage, "ɵfac", /* @__PURE__ */ __name(function MatCardMdImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardMdImage)();
}, "MatCardMdImage_Factory"));
__publicField(_MatCardMdImage, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardMdImage,
  selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
  hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
}));
var MatCardMdImage = _MatCardMdImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardMdImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-md-image], [matCardImageMedium]",
      host: {
        "class": "mat-mdc-card-md-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardLgImage = class _MatCardLgImage {
};
__name(_MatCardLgImage, "MatCardLgImage");
__publicField(_MatCardLgImage, "ɵfac", /* @__PURE__ */ __name(function MatCardLgImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardLgImage)();
}, "MatCardLgImage_Factory"));
__publicField(_MatCardLgImage, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardLgImage,
  selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
}));
var MatCardLgImage = _MatCardLgImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardLgImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-lg-image], [matCardImageLarge]",
      host: {
        "class": "mat-mdc-card-lg-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardXlImage = class _MatCardXlImage {
};
__name(_MatCardXlImage, "MatCardXlImage");
__publicField(_MatCardXlImage, "ɵfac", /* @__PURE__ */ __name(function MatCardXlImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardXlImage)();
}, "MatCardXlImage_Factory"));
__publicField(_MatCardXlImage, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardXlImage,
  selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
}));
var MatCardXlImage = _MatCardXlImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardXlImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-xl-image], [matCardImageXLarge]",
      host: {
        "class": "mat-mdc-card-xl-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardAvatar = class _MatCardAvatar {
};
__name(_MatCardAvatar, "MatCardAvatar");
__publicField(_MatCardAvatar, "ɵfac", /* @__PURE__ */ __name(function MatCardAvatar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardAvatar)();
}, "MatCardAvatar_Factory"));
__publicField(_MatCardAvatar, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatCardAvatar,
  selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
  hostAttrs: [1, "mat-mdc-card-avatar"]
}));
var MatCardAvatar = _MatCardAvatar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardAvatar, [{
    type: Directive,
    args: [{
      selector: "[mat-card-avatar], [matCardAvatar]",
      host: {
        "class": "mat-mdc-card-avatar"
      }
    }]
  }], null, null);
})();
var CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
var _MatCardModule = class _MatCardModule {
};
__name(_MatCardModule, "MatCardModule");
__publicField(_MatCardModule, "ɵfac", /* @__PURE__ */ __name(function MatCardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardModule)();
}, "MatCardModule_Factory"));
__publicField(_MatCardModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
  type: _MatCardModule,
  imports: [MatCommonModule, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage],
  exports: [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage, MatCommonModule]
}));
__publicField(_MatCardModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({
  imports: [MatCommonModule, MatCommonModule]
}));
var MatCardModule = _MatCardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, ...CARD_DIRECTIVES],
      exports: [CARD_DIRECTIVES, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/public-api.mjs
var _TileCoordinator = class _TileCoordinator {
  /** Tracking array (see class description). */
  tracker;
  /** Index at which the search for the next gap will start. */
  columnIndex = 0;
  /** The current row index. */
  rowIndex = 0;
  /** Gets the total number of rows occupied by tiles */
  get rowCount() {
    return this.rowIndex + 1;
  }
  /**
   * Gets the total span of rows occupied by tiles.
   * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
   */
  get rowspan() {
    const lastRowMax = Math.max(...this.tracker);
    return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
  }
  /** The computed (row, col) position of each tile (the output). */
  positions;
  /**
   * Updates the tile positions.
   * @param numColumns Amount of columns in the grid.
   * @param tiles Tiles to be positioned.
   */
  update(numColumns, tiles) {
    this.columnIndex = 0;
    this.rowIndex = 0;
    this.tracker = new Array(numColumns);
    this.tracker.fill(0, 0, this.tracker.length);
    this.positions = tiles.map((tile) => this._trackTile(tile));
  }
  /** Calculates the row and col position of a tile. */
  _trackTile(tile) {
    const gapStartIndex = this._findMatchingGap(tile.colspan);
    this._markTilePosition(gapStartIndex, tile);
    this.columnIndex = gapStartIndex + tile.colspan;
    return new TilePosition(this.rowIndex, gapStartIndex);
  }
  /** Finds the next available space large enough to fit the tile. */
  _findMatchingGap(tileCols) {
    if (tileCols > this.tracker.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than grid with cols="${this.tracker.length}".`);
    }
    let gapStartIndex = -1;
    let gapEndIndex = -1;
    do {
      if (this.columnIndex + tileCols > this.tracker.length) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
      if (gapStartIndex == -1) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapEndIndex = this._findGapEndIndex(gapStartIndex);
      this.columnIndex = gapStartIndex + 1;
    } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0);
    return Math.max(gapStartIndex, 0);
  }
  /** Move "down" to the next row. */
  _nextRow() {
    this.columnIndex = 0;
    this.rowIndex++;
    for (let i = 0; i < this.tracker.length; i++) {
      this.tracker[i] = Math.max(0, this.tracker[i] - 1);
    }
  }
  /**
   * Finds the end index (exclusive) of a gap given the index from which to start looking.
   * The gap ends when a non-zero value is found.
   */
  _findGapEndIndex(gapStartIndex) {
    for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
      if (this.tracker[i] != 0) {
        return i;
      }
    }
    return this.tracker.length;
  }
  /** Update the tile tracker to account for the given tile in the given space. */
  _markTilePosition(start, tile) {
    for (let i = 0; i < tile.colspan; i++) {
      this.tracker[start + i] = tile.rowspan;
    }
  }
};
__name(_TileCoordinator, "TileCoordinator");
var TileCoordinator = _TileCoordinator;
var _TilePosition = class _TilePosition {
  row;
  col;
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
};
__name(_TilePosition, "TilePosition");
var TilePosition = _TilePosition;

// node_modules/@angular/material/fesm2022/line.mjs
var _MatLine = class _MatLine {
};
__name(_MatLine, "MatLine");
__publicField(_MatLine, "ɵfac", /* @__PURE__ */ __name(function MatLine_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatLine)();
}, "MatLine_Factory"));
__publicField(_MatLine, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"]
}));
var MatLine = _MatLine;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLine, [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      }
    }]
  }], null, null);
})();
function setLines(lines, element, prefix = "mat") {
  lines.changes.pipe(startWith(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);
    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
__name(setLines, "setLines");
function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}
__name(setClass, "setClass");
var _MatLineModule = class _MatLineModule {
};
__name(_MatLineModule, "MatLineModule");
__publicField(_MatLineModule, "ɵfac", /* @__PURE__ */ __name(function MatLineModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatLineModule)();
}, "MatLineModule_Factory"));
__publicField(_MatLineModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
  type: _MatLineModule,
  imports: [MatCommonModule, MatLine],
  exports: [MatLine, MatCommonModule]
}));
__publicField(_MatLineModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({
  imports: [MatCommonModule, MatCommonModule]
}));
var MatLineModule = _MatLineModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLineModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatLine],
      exports: [MatLine, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/grid-list.mjs
var _c04 = ["*"];
var _c14 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
var _c23 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
var _c32 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n";
var MAT_GRID_LIST = new InjectionToken("MAT_GRID_LIST");
var _MatGridTile = class _MatGridTile {
  _element = inject(ElementRef);
  _gridList = inject(MAT_GRID_LIST, {
    optional: true
  });
  _rowspan = 1;
  _colspan = 1;
  constructor() {
  }
  /** Amount of rows that the grid tile takes up. */
  get rowspan() {
    return this._rowspan;
  }
  set rowspan(value) {
    this._rowspan = Math.round(coerceNumberProperty(value));
  }
  /** Amount of columns that the grid tile takes up. */
  get colspan() {
    return this._colspan;
  }
  set colspan(value) {
    this._colspan = Math.round(coerceNumberProperty(value));
  }
  /**
   * Sets the style of the grid-tile element.  Needs to be set manually to avoid
   * "Changed after checked" errors that would occur with HostBinding.
   */
  _setStyle(property, value) {
    this._element.nativeElement.style[property] = value;
  }
};
__name(_MatGridTile, "MatGridTile");
__publicField(_MatGridTile, "ɵfac", /* @__PURE__ */ __name(function MatGridTile_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridTile)();
}, "MatGridTile_Factory"));
__publicField(_MatGridTile, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: _MatGridTile,
  selectors: [["mat-grid-tile"]],
  hostAttrs: [1, "mat-grid-tile"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function MatGridTile_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    }
  }, "MatGridTile_HostBindings"),
  inputs: {
    rowspan: "rowspan",
    colspan: "colspan"
  },
  exportAs: ["matGridTile"],
  ngContentSelectors: _c04,
  decls: 2,
  vars: 0,
  consts: [[1, "mat-grid-tile-content"]],
  template: /* @__PURE__ */ __name(function MatGridTile_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵdomElementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵdomElementEnd();
    }
  }, "MatGridTile_Template"),
  styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var MatGridTile = _MatGridTile;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTile, [{
    type: Component,
    args: [{
      selector: "mat-grid-tile",
      exportAs: "matGridTile",
      host: {
        "class": "mat-grid-tile",
        // Ensures that the "rowspan" and "colspan" input value is reflected in
        // the DOM. This is needed for the grid-tile harness.
        "[attr.rowspan]": "rowspan",
        "[attr.colspan]": "colspan"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="mat-grid-tile-content">\n  <ng-content></ng-content>\n</div>\n',
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"]
    }]
  }], () => [], {
    rowspan: [{
      type: Input
    }],
    colspan: [{
      type: Input
    }]
  });
})();
var _MatGridTileText = class _MatGridTileText {
  _element = inject(ElementRef);
  _lines;
  constructor() {
  }
  ngAfterContentInit() {
    setLines(this._lines, this._element);
  }
};
__name(_MatGridTileText, "MatGridTileText");
__publicField(_MatGridTileText, "ɵfac", /* @__PURE__ */ __name(function MatGridTileText_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridTileText)();
}, "MatGridTileText_Factory"));
__publicField(_MatGridTileText, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: _MatGridTileText,
  selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
  contentQueries: /* @__PURE__ */ __name(function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatLine, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._lines = _t);
    }
  }, "MatGridTileText_ContentQueries"),
  ngContentSelectors: _c23,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-grid-list-text"]],
  template: /* @__PURE__ */ __name(function MatGridTileText_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c14);
      ɵɵprojection(0);
      ɵɵdomElementStart(1, "div", 0);
      ɵɵprojection(2, 1);
      ɵɵdomElementEnd();
      ɵɵprojection(3, 2);
    }
  }, "MatGridTileText_Template"),
  encapsulation: 2,
  changeDetection: 0
}));
var MatGridTileText = _MatGridTileText;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTileText, [{
    type: Component,
    args: [{
      selector: "mat-grid-tile-header, mat-grid-tile-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content select="[mat-grid-avatar], [matGridAvatar]"></ng-content>\n<div class="mat-grid-list-text"><ng-content select="[mat-line], [matLine]"></ng-content></div>\n<ng-content></ng-content>\n'
    }]
  }], () => [], {
    _lines: [{
      type: ContentChildren,
      args: [MatLine, {
        descendants: true
      }]
    }]
  });
})();
var _MatGridAvatarCssMatStyler = class _MatGridAvatarCssMatStyler {
};
__name(_MatGridAvatarCssMatStyler, "MatGridAvatarCssMatStyler");
__publicField(_MatGridAvatarCssMatStyler, "ɵfac", /* @__PURE__ */ __name(function MatGridAvatarCssMatStyler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridAvatarCssMatStyler)();
}, "MatGridAvatarCssMatStyler_Factory"));
__publicField(_MatGridAvatarCssMatStyler, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatGridAvatarCssMatStyler,
  selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
  hostAttrs: [1, "mat-grid-avatar"]
}));
var MatGridAvatarCssMatStyler = _MatGridAvatarCssMatStyler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridAvatarCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "[mat-grid-avatar], [matGridAvatar]",
      host: {
        "class": "mat-grid-avatar"
      }
    }]
  }], null, null);
})();
var _MatGridTileHeaderCssMatStyler = class _MatGridTileHeaderCssMatStyler {
};
__name(_MatGridTileHeaderCssMatStyler, "MatGridTileHeaderCssMatStyler");
__publicField(_MatGridTileHeaderCssMatStyler, "ɵfac", /* @__PURE__ */ __name(function MatGridTileHeaderCssMatStyler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridTileHeaderCssMatStyler)();
}, "MatGridTileHeaderCssMatStyler_Factory"));
__publicField(_MatGridTileHeaderCssMatStyler, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatGridTileHeaderCssMatStyler,
  selectors: [["mat-grid-tile-header"]],
  hostAttrs: [1, "mat-grid-tile-header"]
}));
var MatGridTileHeaderCssMatStyler = _MatGridTileHeaderCssMatStyler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTileHeaderCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "mat-grid-tile-header",
      host: {
        "class": "mat-grid-tile-header"
      }
    }]
  }], null, null);
})();
var _MatGridTileFooterCssMatStyler = class _MatGridTileFooterCssMatStyler {
};
__name(_MatGridTileFooterCssMatStyler, "MatGridTileFooterCssMatStyler");
__publicField(_MatGridTileFooterCssMatStyler, "ɵfac", /* @__PURE__ */ __name(function MatGridTileFooterCssMatStyler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridTileFooterCssMatStyler)();
}, "MatGridTileFooterCssMatStyler_Factory"));
__publicField(_MatGridTileFooterCssMatStyler, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatGridTileFooterCssMatStyler,
  selectors: [["mat-grid-tile-footer"]],
  hostAttrs: [1, "mat-grid-tile-footer"]
}));
var MatGridTileFooterCssMatStyler = _MatGridTileFooterCssMatStyler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTileFooterCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "mat-grid-tile-footer",
      host: {
        "class": "mat-grid-tile-footer"
      }
    }]
  }], null, null);
})();
var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
var _TileStyler = class _TileStyler {
  _gutterSize;
  _rows = 0;
  _rowspan = 0;
  _cols;
  _direction;
  /**
   * Adds grid-list layout info once it is available. Cannot be processed in the constructor
   * because these properties haven't been calculated by that point.
   *
   * @param gutterSize Size of the grid's gutter.
   * @param tracker Instance of the TileCoordinator.
   * @param cols Amount of columns in the grid.
   * @param direction Layout direction of the grid.
   */
  init(gutterSize, tracker, cols, direction) {
    this._gutterSize = normalizeUnits(gutterSize);
    this._rows = tracker.rowCount;
    this._rowspan = tracker.rowspan;
    this._cols = cols;
    this._direction = direction;
  }
  /**
   * Computes the amount of space a single 1x1 tile would take up (width or height).
   * Used as a basis for other calculations.
   * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
   * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
   * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
   */
  getBaseTileSize(sizePercent, gutterFraction) {
    return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
  }
  /**
   * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
   * @param offset Number of tiles that have already been rendered in the row/column.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @return Position of the tile as a CSS calc() expression.
   */
  getTilePosition(baseSize, offset) {
    return offset === 0 ? "0" : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
  }
  /**
   * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @param span The tile's rowspan or colspan.
   * @return Size of the tile as a CSS calc() expression.
   */
  getTileSize(baseSize, span) {
    return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
  }
  /**
   * Sets the style properties to be applied to a tile for the given row and column index.
   * @param tile Tile to which to apply the styling.
   * @param rowIndex Index of the tile's row.
   * @param colIndex Index of the tile's column.
   */
  setStyle(tile, rowIndex, colIndex) {
    let percentWidthPerTile = 100 / this._cols;
    let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
    this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
  }
  /** Sets the horizontal placement of the tile in the list. */
  setColStyles(tile, colIndex, percentWidth, gutterWidth) {
    let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
    let side = this._direction === "rtl" ? "right" : "left";
    tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
    tile._setStyle("width", calc(this.getTileSize(baseTileWidth, tile.colspan)));
  }
  /**
   * Calculates the total size taken up by gutters across one axis of a list.
   */
  getGutterSpan() {
    return `${this._gutterSize} * (${this._rowspan} - 1)`;
  }
  /**
   * Calculates the total size taken up by tiles across one axis of a list.
   * @param tileHeight Height of the tile.
   */
  getTileSpan(tileHeight) {
    return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
  }
  /**
   * Calculates the computed height and returns the correct style property to set.
   * This method can be implemented by each type of TileStyler.
   * @docs-private
   */
  getComputedHeight() {
    return null;
  }
};
__name(_TileStyler, "TileStyler");
var TileStyler = _TileStyler;
var _FixedTileStyler = class _FixedTileStyler extends TileStyler {
  fixedRowHeight;
  constructor(fixedRowHeight) {
    super();
    this.fixedRowHeight = fixedRowHeight;
  }
  init(gutterSize, tracker, cols, direction) {
    super.init(gutterSize, tracker, cols, direction);
    this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
    if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
    }
  }
  setRowStyles(tile, rowIndex) {
    tile._setStyle("top", this.getTilePosition(this.fixedRowHeight, rowIndex));
    tile._setStyle("height", calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ["height", calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(["height", null]);
    if (list._tiles) {
      list._tiles.forEach((tile) => {
        tile._setStyle("top", null);
        tile._setStyle("height", null);
      });
    }
  }
};
__name(_FixedTileStyler, "FixedTileStyler");
var FixedTileStyler = _FixedTileStyler;
var _RatioTileStyler = class _RatioTileStyler extends TileStyler {
  /** Ratio width:height given by user to determine row height. */
  rowHeightRatio;
  baseTileHeight;
  constructor(value) {
    super();
    this._parseRatio(value);
  }
  setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
    let percentHeightPerTile = percentWidth / this.rowHeightRatio;
    this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
    tile._setStyle("marginTop", this.getTilePosition(this.baseTileHeight, rowIndex));
    tile._setStyle("paddingTop", calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ["paddingBottom", calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(["paddingBottom", null]);
    list._tiles.forEach((tile) => {
      tile._setStyle("marginTop", null);
      tile._setStyle("paddingTop", null);
    });
  }
  _parseRatio(value) {
    const ratioParts = value.split(":");
    if (ratioParts.length !== 2 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
    }
    this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
  }
};
__name(_RatioTileStyler, "RatioTileStyler");
var RatioTileStyler = _RatioTileStyler;
var _FitTileStyler = class _FitTileStyler extends TileStyler {
  setRowStyles(tile, rowIndex) {
    let percentHeightPerTile = 100 / this._rowspan;
    let gutterHeightPerTile = (this._rows - 1) / this._rows;
    let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
    tile._setStyle("top", this.getTilePosition(baseTileHeight, rowIndex));
    tile._setStyle("height", calc(this.getTileSize(baseTileHeight, tile.rowspan)));
  }
  reset(list) {
    if (list._tiles) {
      list._tiles.forEach((tile) => {
        tile._setStyle("top", null);
        tile._setStyle("height", null);
      });
    }
  }
};
__name(_FitTileStyler, "FitTileStyler");
var FitTileStyler = _FitTileStyler;
function calc(exp) {
  return `calc(${exp})`;
}
__name(calc, "calc");
function normalizeUnits(value) {
  return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}
__name(normalizeUnits, "normalizeUnits");
var MAT_FIT_MODE = "fit";
var _MatGridList = class _MatGridList {
  _element = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  /** Number of columns being rendered. */
  _cols;
  /** Used for determining the position of each tile in the grid. */
  _tileCoordinator;
  /**
   * Row height value passed in by user. This can be one of three types:
   * - Number value (ex: "100px"):  sets a fixed row height to that value
   * - Ratio value (ex: "4:3"): sets the row height based on width:height ratio
   * - "Fit" mode (ex: "fit"): sets the row height to total height divided by number of rows
   */
  _rowHeight;
  /** The amount of space between tiles. This will be something like '5px' or '2em'. */
  _gutter = "1px";
  /** Sets position and size styles for a tile */
  _tileStyler;
  /** Query list of tiles that are being rendered. */
  _tiles;
  constructor() {
  }
  /** Amount of columns in the grid list. */
  get cols() {
    return this._cols;
  }
  set cols(value) {
    this._cols = Math.max(1, Math.round(coerceNumberProperty(value)));
  }
  /** Size of the grid list's gutter in pixels. */
  get gutterSize() {
    return this._gutter;
  }
  set gutterSize(value) {
    this._gutter = `${value == null ? "" : value}`;
  }
  /** Set internal representation of row height from the user-provided value. */
  get rowHeight() {
    return this._rowHeight;
  }
  set rowHeight(value) {
    const newValue = `${value == null ? "" : value}`;
    if (newValue !== this._rowHeight) {
      this._rowHeight = newValue;
      this._setTileStyler(this._rowHeight);
    }
  }
  ngOnInit() {
    this._checkCols();
    this._checkRowHeight();
  }
  /**
   * The layout calculation is fairly cheap if nothing changes, so there's little cost
   * to run it frequently.
   */
  ngAfterContentChecked() {
    this._layoutTiles();
  }
  /** Throw a friendly error if cols property is missing */
  _checkCols() {
    if (!this.cols && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">`);
    }
  }
  /** Default to equal width:height if rowHeight property is missing */
  _checkRowHeight() {
    if (!this._rowHeight) {
      this._setTileStyler("1:1");
    }
  }
  /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
  _setTileStyler(rowHeight) {
    if (this._tileStyler) {
      this._tileStyler.reset(this);
    }
    if (rowHeight === MAT_FIT_MODE) {
      this._tileStyler = new FitTileStyler();
    } else if (rowHeight && rowHeight.indexOf(":") > -1) {
      this._tileStyler = new RatioTileStyler(rowHeight);
    } else {
      this._tileStyler = new FixedTileStyler(rowHeight);
    }
  }
  /** Computes and applies the size and position for all children grid tiles. */
  _layoutTiles() {
    if (!this._tileCoordinator) {
      this._tileCoordinator = new TileCoordinator();
    }
    const tracker = this._tileCoordinator;
    const tiles = this._tiles.filter((tile) => !tile._gridList || tile._gridList === this);
    const direction = this._dir ? this._dir.value : "ltr";
    this._tileCoordinator.update(this.cols, tiles);
    this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
    tiles.forEach((tile, index) => {
      const pos = tracker.positions[index];
      this._tileStyler.setStyle(tile, pos.row, pos.col);
    });
    this._setListStyle(this._tileStyler.getComputedHeight());
  }
  /** Sets style on the main grid-list element, given the style name and value. */
  _setListStyle(style) {
    if (style) {
      this._element.nativeElement.style[style[0]] = style[1];
    }
  }
};
__name(_MatGridList, "MatGridList");
__publicField(_MatGridList, "ɵfac", /* @__PURE__ */ __name(function MatGridList_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridList)();
}, "MatGridList_Factory"));
__publicField(_MatGridList, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: _MatGridList,
  selectors: [["mat-grid-list"]],
  contentQueries: /* @__PURE__ */ __name(function MatGridList_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatGridTile, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tiles = _t);
    }
  }, "MatGridList_ContentQueries"),
  hostAttrs: [1, "mat-grid-list"],
  hostVars: 1,
  hostBindings: /* @__PURE__ */ __name(function MatGridList_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("cols", ctx.cols);
    }
  }, "MatGridList_HostBindings"),
  inputs: {
    cols: "cols",
    gutterSize: "gutterSize",
    rowHeight: "rowHeight"
  },
  exportAs: ["matGridList"],
  features: [ɵɵProvidersFeature([{
    provide: MAT_GRID_LIST,
    useExisting: _MatGridList
  }])],
  ngContentSelectors: _c04,
  decls: 2,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatGridList_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵdomElementStart(0, "div");
      ɵɵprojection(1);
      ɵɵdomElementEnd();
    }
  }, "MatGridList_Template"),
  styles: [_c32],
  encapsulation: 2,
  changeDetection: 0
}));
var MatGridList = _MatGridList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridList, [{
    type: Component,
    args: [{
      selector: "mat-grid-list",
      exportAs: "matGridList",
      host: {
        "class": "mat-grid-list",
        // Ensures that the "cols" input value is reflected in the DOM. This is
        // needed for the grid-list harness.
        "[attr.cols]": "cols"
      },
      providers: [{
        provide: MAT_GRID_LIST,
        useExisting: MatGridList
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: "<div>\n  <ng-content></ng-content>\n</div>",
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"]
    }]
  }], () => [], {
    _tiles: [{
      type: ContentChildren,
      args: [MatGridTile, {
        descendants: true
      }]
    }],
    cols: [{
      type: Input
    }],
    gutterSize: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }]
  });
})();
var _MatGridListModule = class _MatGridListModule {
};
__name(_MatGridListModule, "MatGridListModule");
__publicField(_MatGridListModule, "ɵfac", /* @__PURE__ */ __name(function MatGridListModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridListModule)();
}, "MatGridListModule_Factory"));
__publicField(_MatGridListModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
  type: _MatGridListModule,
  imports: [MatLineModule, MatCommonModule, MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
  exports: [MatGridList, MatGridTile, MatGridTileText, MatLineModule, MatCommonModule, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
}));
__publicField(_MatGridListModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({
  imports: [MatLineModule, MatCommonModule, MatLineModule, MatCommonModule]
}));
var MatGridListModule = _MatGridListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridListModule, [{
    type: NgModule,
    args: [{
      imports: [MatLineModule, MatCommonModule, MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
      exports: [MatGridList, MatGridTile, MatGridTileText, MatLineModule, MatCommonModule, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/selection-model.mjs
var _SelectionModel = class _SelectionModel {
  _multiple;
  _emitChanges;
  compareWith;
  /** Currently-selected values. */
  _selection = /* @__PURE__ */ new Set();
  /** Keeps track of the deselected options that haven't been emitted by the change event. */
  _deselectedToEmit = [];
  /** Keeps track of the selected options that haven't been emitted by the change event. */
  _selectedToEmit = [];
  /** Cache for the array value of the selected items. */
  _selected;
  /** Selected values. */
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  /** Event emitted when the value has changed. */
  changed = new Subject();
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach((value) => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      this._selectedToEmit.length = 0;
    }
  }
  /**
   * Selects a value or an array of values.
   * @param values The values to select
   * @return Whether the selection changed as a result of this call
   */
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Deselects a value or an array of values.
   * @param values The values to deselect
   * @return Whether the selection changed as a result of this call
   */
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Sets the selected values
   * @param values The new selected values
   * @return Whether the selection changed as a result of this call
   */
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
    values.forEach((value) => this._markSelected(value));
    oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Toggles a value between selected and deselected.
   * @param value The value to toggle
   * @return Whether the selection changed as a result of this call
   */
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  /**
   * Clears all of the selected values.
   * @param flushEvent Whether to flush the changes in an event.
   *   If false, the changes to the selection will be flushed along with the next event.
   * @return Whether the selection changed as a result of this call
   */
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  /**
   * Determines whether a value is selected.
   */
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  /**
   * Determines whether the model does not have a value.
   */
  isEmpty() {
    return this._selection.size === 0;
  }
  /**
   * Determines whether the model has a value.
   */
  hasValue() {
    return !this.isEmpty();
  }
  /**
   * Sorts the selected values based on a predicate function.
   */
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  /**
   * Gets whether multiple values can be selected.
   */
  isMultipleSelection() {
    return this._multiple;
  }
  /** Emits a change event and clears the records of selected and deselected values. */
  _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  /** Selects a value. */
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  /** Deselects a value. */
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  /** Clears out the selected values. */
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach((value) => this._unmarkSelected(value));
    }
  }
  /**
   * Verifies the value assignment and throws an error if the specified value array is
   * including multiple values while the selection model is not supporting multiple values.
   */
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  /** Whether there are queued up change to be emitted. */
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
};
__name(_SelectionModel, "SelectionModel");
var SelectionModel = _SelectionModel;
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}
__name(getMultipleValuesInSingleSelectionError, "getMultipleValuesInSingleSelectionError");

// node_modules/@angular/material/fesm2022/pseudo-checkbox.mjs
var _MatPseudoCheckbox = class _MatPseudoCheckbox {
  _animationsDisabled = _animationsDisabled();
  /** Display state of the checkbox. */
  state = "unchecked";
  /** Whether the checkbox is disabled. */
  disabled = false;
  /**
   * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
   * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
   */
  appearance = "full";
  constructor() {
  }
};
__name(_MatPseudoCheckbox, "MatPseudoCheckbox");
__publicField(_MatPseudoCheckbox, "ɵfac", /* @__PURE__ */ __name(function MatPseudoCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatPseudoCheckbox)();
}, "MatPseudoCheckbox_Factory"));
__publicField(_MatPseudoCheckbox, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: _MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 12,
  hostBindings: /* @__PURE__ */ __name(function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationsDisabled);
    }
  }, "MatPseudoCheckbox_HostBindings"),
  inputs: {
    state: "state",
    disabled: "disabled",
    appearance: "appearance"
  },
  decls: 0,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatPseudoCheckbox_Template(rf, ctx) {
  }, "MatPseudoCheckbox_Template"),
  styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var MatPseudoCheckbox = _MatPseudoCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckbox, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      },
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n']
    }]
  }], () => [], {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();

// node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c05 = ["button"];
var _c15 = ["*"];
function MatButtonToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelement(1, "mat-pseudo-checkbox", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled);
  }
}
__name(MatButtonToggle_Conditional_2_Template, "MatButtonToggle_Conditional_2_Template");
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  };
}
__name(MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY, "MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY");
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var _MatButtonToggleChange = class _MatButtonToggleChange {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
__name(_MatButtonToggleChange, "MatButtonToggleChange");
var MatButtonToggleChange = _MatButtonToggleChange;
var _MatButtonToggleGroup = class _MatButtonToggleGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _multiple = false;
  _disabled = false;
  _disabledInteractive = false;
  _selectionModel;
  /**
   * Reference to the raw value that the consumer tried to assign. The real
   * value will exclude any values from this one that don't correspond to a
   * toggle. Useful for the cases where the value is assigned before the toggles
   * have been initialized or at the same that they're being swapped out.
   */
  _rawValue;
  /**
   * The method to be called in order to update ngModel.
   * Now `ngModel` binding is not supported in multiple selection mode.
   */
  _controlValueAccessorChangeFn = /* @__PURE__ */ __name(() => {
  }, "_controlValueAccessorChangeFn");
  /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
  _onTouched = /* @__PURE__ */ __name(() => {
  }, "_onTouched");
  /** Child button toggle buttons. */
  _buttonToggles;
  /** The appearance for all the buttons in the group. */
  appearance;
  /** `name` attribute for the underlying `input` element. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  _name = inject(_IdGenerator).getId("mat-button-toggle-group-");
  /** Whether the toggle group is vertical. */
  vertical;
  /** Value of the toggle group. */
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  /**
   * Event that emits whenever the value of the group changes.
   * Used to facilitate two-way data binding.
   * @docs-private
   */
  valueChange = new EventEmitter();
  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markButtonsForCheck();
  }
  /** The layout direction of the toggle button group. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Event emitted when the group's value changes. */
  change = new EventEmitter();
  /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideSingleSelectionIndicator;
  /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideMultipleSelectionIndicator;
  constructor() {
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
    this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
    if (!this.multiple) {
      this._initializeTabIndex();
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Handle keydown event calling to single-select button toggle. */
  _keydown(event) {
    if (this.multiple || this.disabled || hasModifierKey(event)) {
      return;
    }
    const target = event.target;
    const buttonId = target.id;
    const index = this._buttonToggles.toArray().findIndex((toggle) => {
      return toggle.buttonId === buttonId;
    });
    let nextButton = null;
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        nextButton = this._buttonToggles.get(index) || null;
        break;
      case UP_ARROW:
        nextButton = this._getNextButton(index, -1);
        break;
      case LEFT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? -1 : 1);
        break;
      case DOWN_ARROW:
        nextButton = this._getNextButton(index, 1);
        break;
      case RIGHT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? 1 : -1);
        break;
      default:
        return;
    }
    if (nextButton) {
      event.preventDefault();
      nextButton._onButtonClick();
      nextButton.focus();
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  /** Initializes the tabindex attribute using the radio pattern. */
  _initializeTabIndex() {
    this._buttonToggles.forEach((toggle) => {
      toggle.tabIndex = -1;
    });
    if (this.selected) {
      this.selected.tabIndex = 0;
    } else {
      for (let i = 0; i < this._buttonToggles.length; i++) {
        const toggle = this._buttonToggles.get(i);
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Obtain the subsequent toggle to which the focus shifts. */
  _getNextButton(startIndex, offset) {
    const items = this._buttonToggles;
    for (let i = 1; i <= items.length; i++) {
      const index = (startIndex + offset * i + items.length) % items.length;
      const item = items.get(index);
      if (item && !item.disabled) {
        return item;
      }
    }
    return null;
  }
  /** Updates the selection state of the toggles in the group based on a value. */
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    const toggles = this._buttonToggles.toArray();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue, toggles));
    } else {
      this._clearSelection();
      this._selectValue(value, toggles);
    }
    if (!this.multiple && toggles.every((toggle) => toggle.tabIndex === -1)) {
      for (const toggle of toggles) {
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Clears the selected toggles. */
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => {
      toggle.checked = false;
      if (!this.multiple) {
        toggle.tabIndex = -1;
      }
    });
  }
  /** Selects a value if there's a toggle that corresponds to it. */
  _selectValue(value, toggles) {
    for (const toggle of toggles) {
      if (toggle.value === value) {
        toggle.checked = true;
        this._selectionModel.select(toggle);
        if (!this.multiple) {
          toggle.tabIndex = 0;
        }
        break;
      }
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
};
__name(_MatButtonToggleGroup, "MatButtonToggleGroup");
__publicField(_MatButtonToggleGroup, "ɵfac", /* @__PURE__ */ __name(function MatButtonToggleGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatButtonToggleGroup)();
}, "MatButtonToggleGroup_Factory"));
__publicField(_MatButtonToggleGroup, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
  type: _MatButtonToggleGroup,
  selectors: [["mat-button-toggle-group"]],
  contentQueries: /* @__PURE__ */ __name(function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatButtonToggle, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._buttonToggles = _t);
    }
  }, "MatButtonToggleGroup_ContentQueries"),
  hostAttrs: [1, "mat-button-toggle-group"],
  hostVars: 6,
  hostBindings: /* @__PURE__ */ __name(function MatButtonToggleGroup_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", /* @__PURE__ */ __name(function MatButtonToggleGroup_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      }, "MatButtonToggleGroup_keydown_HostBindingHandler"));
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.multiple ? "group" : "radiogroup")("aria-disabled", ctx.disabled);
      ɵɵclassProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
    }
  }, "MatButtonToggleGroup_HostBindings"),
  inputs: {
    appearance: "appearance",
    name: "name",
    vertical: [2, "vertical", "vertical", booleanAttribute],
    value: "value",
    multiple: [2, "multiple", "multiple", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
    hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
    hideMultipleSelectionIndicator: [2, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
  },
  outputs: {
    valueChange: "valueChange",
    change: "change"
  },
  exportAs: ["matButtonToggleGroup"],
  features: [ɵɵProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
    provide: MAT_BUTTON_TOGGLE_GROUP,
    useExisting: _MatButtonToggleGroup
  }])]
}));
var MatButtonToggleGroup = _MatButtonToggleGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "class": "mat-button-toggle-group",
        "(keydown)": "_keydown($event)",
        "[attr.role]": "multiple ? 'group' : 'radiogroup'",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup"
    }]
  }], () => [], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatButtonToggle = class _MatButtonToggle {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _idGenerator = inject(_IdGenerator);
  _animationDisabled = _animationsDisabled();
  _checked = false;
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel;
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** Underlying native `button` element. */
  _buttonElement;
  /** The parent button toggle group (exclusive selection). Optional. */
  buttonToggleGroup;
  /** Unique ID for the underlying `button` element. */
  get buttonId() {
    return `${this.id}-button`;
  }
  /** The unique ID for this button toggle. */
  id;
  /** HTML's 'name' attribute used to group radios for unique selection. */
  name;
  /** MatButtonToggleGroup reads this to assign its own value. */
  value;
  /** Tabindex of the toggle. */
  get tabIndex() {
    return this._tabIndex();
  }
  set tabIndex(value) {
    this._tabIndex.set(value);
  }
  _tabIndex;
  /** Whether ripples are disabled on the button toggle. */
  disableRipple;
  /** The appearance style of the button. */
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  _appearance;
  /** Whether the button is checked. */
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  /** Whether the button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  /** Event emitted when the group value changes. */
  change = new EventEmitter();
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const toggleGroup = inject(MAT_BUTTON_TOGGLE_GROUP, {
      optional: true
    });
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    }) || "";
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this._tabIndex = signal(parseInt(defaultTabIndex) || 0, ...ngDevMode ? [{
      debugName: "_tabIndex"
    }] : []);
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.disabledInteractive = defaultOptions?.disabledInteractive ?? false;
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || this._idGenerator.getId("mat-button-toggle-");
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    if (!this._animationDisabled) {
      this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled");
    }
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    if (this.disabled) {
      return;
    }
    const newChecked = this.isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    if (this.isSingleSelector()) {
      const focusable = this.buttonToggleGroup._buttonToggles.find((toggle) => {
        return toggle.tabIndex === 0;
      });
      if (focusable) {
        focusable.tabIndex = -1;
      }
      this.tabIndex = 0;
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */
  _getButtonName() {
    if (this.isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */
  isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
};
__name(_MatButtonToggle, "MatButtonToggle");
__publicField(_MatButtonToggle, "ɵfac", /* @__PURE__ */ __name(function MatButtonToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatButtonToggle)();
}, "MatButtonToggle_Factory"));
__publicField(_MatButtonToggle, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
  type: _MatButtonToggle,
  selectors: [["mat-button-toggle"]],
  viewQuery: /* @__PURE__ */ __name(function MatButtonToggle_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c05, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._buttonElement = _t.first);
    }
  }, "MatButtonToggle_Query"),
  hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
  hostVars: 14,
  hostBindings: /* @__PURE__ */ __name(function MatButtonToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", /* @__PURE__ */ __name(function MatButtonToggle_focus_HostBindingHandler() {
        return ctx.focus();
      }, "MatButtonToggle_focus_HostBindingHandler"));
    }
    if (rf & 2) {
      ɵɵattribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
      ɵɵclassProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-disabled-interactive", ctx.disabledInteractive)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
    }
  }, "MatButtonToggle_HostBindings"),
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    id: "id",
    name: "name",
    value: "value",
    tabIndex: "tabIndex",
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    appearance: "appearance",
    checked: [2, "checked", "checked", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
  },
  outputs: {
    change: "change"
  },
  exportAs: ["matButtonToggle"],
  ngContentSelectors: _c15,
  decls: 7,
  vars: 13,
  consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-checkbox-wrapper"], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 3, "disabled"]],
  template: /* @__PURE__ */ __name(function MatButtonToggle_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 1, 0);
      ɵɵlistener("click", /* @__PURE__ */ __name(function MatButtonToggle_Template_button_click_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onButtonClick());
      }, "MatButtonToggle_Template_button_click_0_listener"));
      ɵɵconditionalCreate(2, MatButtonToggle_Conditional_2_Template, 2, 1, "div", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd()();
      ɵɵelement(5, "span", 4)(6, "span", 5);
    }
    if (rf & 2) {
      const button_r3 = ɵɵreference(1);
      ɵɵproperty("id", ctx.buttonId)("disabled", ctx.disabled && !ctx.disabledInteractive || null);
      ɵɵattribute("role", ctx.isSingleSelector() ? "radio" : "button")("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-pressed", !ctx.isSingleSelector() ? ctx.checked : null)("aria-checked", ctx.isSingleSelector() ? ctx.checked : null)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
      ɵɵadvance(2);
      ɵɵconditional(ctx.buttonToggleGroup && (!ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator || ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator) ? 2 : -1);
      ɵɵadvance(4);
      ɵɵproperty("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
    }
  }, "MatButtonToggle_Template"),
  dependencies: [MatRipple, MatPseudoCheckbox],
  styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var MatButtonToggle = _MatButtonToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matButtonToggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-disabled-interactive]": "disabledInteractive",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      imports: [MatRipple, MatPseudoCheckbox],
      template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  @if (buttonToggleGroup && (
    !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator ||
    buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator)
  ) {
    <div class="mat-button-toggle-checkbox-wrapper">
      <mat-pseudo-checkbox
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"/>
    </div>
  }

  <span class="mat-button-toggle-label-content">
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="this.disableRipple || this.disabled">
</span>
`,
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"]
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }]
  });
})();
var _MatButtonToggleModule = class _MatButtonToggleModule {
};
__name(_MatButtonToggleModule, "MatButtonToggleModule");
__publicField(_MatButtonToggleModule, "ɵfac", /* @__PURE__ */ __name(function MatButtonToggleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatButtonToggleModule)();
}, "MatButtonToggleModule_Factory"));
__publicField(_MatButtonToggleModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
  type: _MatButtonToggleModule,
  imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
  exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
}));
__publicField(_MatButtonToggleModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({
  imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule]
}));
var MatButtonToggleModule = _MatButtonToggleModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// src/app/features/update/update.component.ts
function UpdateComponent_ng_template_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li")(1, "button", 14);
    ɵɵlistener("click", /* @__PURE__ */ __name(function UpdateComponent_ng_template_17_For_2_Template_button_click_1_listener() {
      const version_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      ctx_r3.from = version_r3;
      return ɵɵresetView(ctx_r3.showUpdatePath());
    }, "UpdateComponent_ng_template_17_For_2_Template_button_click_1_listener"));
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const version_r3 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(version_r3.name);
  }
}
__name(UpdateComponent_ng_template_17_For_2_Template, "UpdateComponent_ng_template_17_For_2_Template");
function UpdateComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 13);
    ɵɵrepeaterCreate(1, UpdateComponent_ng_template_17_For_2_Template, 4, 1, "li", null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r3.versions);
  }
}
__name(UpdateComponent_ng_template_17_Template, "UpdateComponent_ng_template_17_Template");
function UpdateComponent_ng_template_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li")(1, "button", 14);
    ɵɵlistener("click", /* @__PURE__ */ __name(function UpdateComponent_ng_template_27_For_2_Template_button_click_1_listener() {
      const version_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      ctx_r3.to = version_r6;
      return ɵɵresetView(ctx_r3.showUpdatePath());
    }, "UpdateComponent_ng_template_27_For_2_Template_button_click_1_listener"));
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const version_r6 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(version_r6.name);
  }
}
__name(UpdateComponent_ng_template_27_For_2_Template, "UpdateComponent_ng_template_27_For_2_Template");
function UpdateComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 13);
    ɵɵrepeaterCreate(1, UpdateComponent_ng_template_27_For_2_Template, 4, 1, "li", null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r3.versions);
  }
}
__name(UpdateComponent_ng_template_27_Template, "UpdateComponent_ng_template_27_Template");
function UpdateComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8)(1, "p")(2, "strong");
    ɵɵtext(3, "警告：");
    ɵɵelementEnd();
    ɵɵtext(4, " 當前主要版本之後的發布計劃尚未最終確定，可能會有變化。這些建議是基於計劃中的棄用情況。 ");
    ɵɵelementEnd()();
  }
}
__name(UpdateComponent_Conditional_29_Template, "UpdateComponent_Conditional_29_Template");
function UpdateComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8)(1, "p")(2, "strong");
    ɵɵtext(3, "警告：");
    ɵɵelementEnd();
    ɵɵtext(4, " 我們不支援降級 Angular 版本。 ");
    ɵɵelementEnd()();
  }
}
__name(UpdateComponent_Conditional_30_Template, "UpdateComponent_Conditional_30_Template");
function UpdateComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8)(1, "p")(2, "strong");
    ɵɵtext(3, "警告：");
    ɵɵelementEnd();
    ɵɵtext(4, " 確保按照以下指南把你的應用程式遷移到新版本。你每次執行 ");
    ɵɵelementStart(5, "code");
    ɵɵtext(6, "ng update");
    ɵɵelementEnd();
    ɵɵtext(7, " 時不應該跳過任何主要版本來更新 Angular 應用程式。 ");
    ɵɵelementEnd()();
  }
}
__name(UpdateComponent_Conditional_31_Template, "UpdateComponent_Conditional_31_Template");
function UpdateComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1, "展示所有 Angular 開發者都感興趣的訊息。");
    ɵɵelementEnd();
  }
}
__name(UpdateComponent_Conditional_41_Template, "UpdateComponent_Conditional_41_Template");
function UpdateComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1, "展示更高階 Angular 開發者會感興趣的訊息。");
    ɵɵelementEnd();
  }
}
__name(UpdateComponent_Conditional_42_Template, "UpdateComponent_Conditional_42_Template");
function UpdateComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1, "展示關於這個更新的所有訊息。");
    ɵɵelementEnd();
  }
}
__name(UpdateComponent_Conditional_43_Template, "UpdateComponent_Conditional_43_Template");
function UpdateComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "mat-checkbox", 15);
    ɵɵlistener("change", /* @__PURE__ */ __name(function UpdateComponent_For_47_Template_mat_checkbox_change_1_listener($event) {
      const option_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r3 = ɵɵnextContext();
      ctx_r3.options[option_r8.id] = $event.checked;
      return ɵɵresetView(ctx_r3.showUpdatePath());
    }, "UpdateComponent_For_47_Template_mat_checkbox_change_1_listener"));
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r3.options[option_r8.id]);
    ɵɵadvance();
    ɵɵtextInterpolate2("I use ", option_r8.name, " ", option_r8.description);
  }
}
__name(UpdateComponent_For_47_Template, "UpdateComponent_For_47_Template");
function UpdateComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "h4");
    ɵɵtext(1, "套件管理器");
    ɵɵelementEnd();
    ɵɵelementStart(2, "mat-button-toggle-group", 16);
    ɵɵlistener("change", /* @__PURE__ */ __name(function UpdateComponent_Conditional_48_Template_mat_button_toggle_group_change_2_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r3 = ɵɵnextContext();
      ctx_r3.packageManager = $event.value;
      return ɵɵresetView(ctx_r3.showUpdatePath());
    }, "UpdateComponent_Conditional_48_Template_mat_button_toggle_group_change_2_listener"));
    ɵɵelementStart(3, "mat-button-toggle", 17);
    ɵɵtext(4, "npm");
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-button-toggle", 18);
    ɵɵtext(6, "yarn");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("value", ctx_r3.packageManager);
  }
}
__name(UpdateComponent_Conditional_48_Template, "UpdateComponent_Conditional_48_Template");
function UpdateComponent_Conditional_52_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "mat-checkbox")(2, "div", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", r_r10.renderedStep, ɵɵsanitizeHtml);
  }
}
__name(UpdateComponent_Conditional_52_For_6_Template, "UpdateComponent_Conditional_52_For_6_Template");
function UpdateComponent_Conditional_52_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "em");
    ɵɵtext(2, "在這些版本之間切換之前，你無需進行任何操作。");
    ɵɵelementEnd()();
  }
}
__name(UpdateComponent_Conditional_52_Conditional_7_Template, "UpdateComponent_Conditional_52_Conditional_7_Template");
function UpdateComponent_Conditional_52_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "em");
    ɵɵtext(2, "請稽核這些更改並執行這些操作來更新應用程式。");
    ɵɵelementEnd()();
  }
}
__name(UpdateComponent_Conditional_52_Conditional_10_Template, "UpdateComponent_Conditional_52_Conditional_10_Template");
function UpdateComponent_Conditional_52_For_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "mat-checkbox")(2, "div", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", r_r11.renderedStep, ɵɵsanitizeHtml);
  }
}
__name(UpdateComponent_Conditional_52_For_12_Template, "UpdateComponent_Conditional_52_For_12_Template");
function UpdateComponent_Conditional_52_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "em");
    ɵɵtext(2, "對這些版本之間的移動，沒有任何建議。");
    ɵɵelementEnd()();
  }
}
__name(UpdateComponent_Conditional_52_Conditional_13_Template, "UpdateComponent_Conditional_52_Conditional_13_Template");
function UpdateComponent_Conditional_52_For_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "mat-checkbox")(2, "div", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", r_r12.renderedStep, ɵɵsanitizeHtml);
  }
}
__name(UpdateComponent_Conditional_52_For_17_Template, "UpdateComponent_Conditional_52_For_17_Template");
function UpdateComponent_Conditional_52_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "em");
    ɵɵtext(2, "在切換這些版本之後，你無需進行任何操作。");
    ɵɵelementEnd()();
  }
}
__name(UpdateComponent_Conditional_52_Conditional_18_Template, "UpdateComponent_Conditional_52_Conditional_18_Template");
function UpdateComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12)(1, "h2");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "h3");
    ɵɵtext(4, "在更新之前");
    ɵɵelementEnd();
    ɵɵrepeaterCreate(5, UpdateComponent_Conditional_52_For_6_Template, 3, 1, "div", 19, ɵɵrepeaterTrackByIndex);
    ɵɵconditionalCreate(7, UpdateComponent_Conditional_52_Conditional_7_Template, 3, 0, "div");
    ɵɵelementStart(8, "h3");
    ɵɵtext(9, "更新到新版本");
    ɵɵelementEnd();
    ɵɵconditionalCreate(10, UpdateComponent_Conditional_52_Conditional_10_Template, 3, 0, "div");
    ɵɵrepeaterCreate(11, UpdateComponent_Conditional_52_For_12_Template, 3, 1, "div", 19, ɵɵrepeaterTrackByIndex);
    ɵɵconditionalCreate(13, UpdateComponent_Conditional_52_Conditional_13_Template, 3, 0, "div");
    ɵɵelementStart(14, "h3");
    ɵɵtext(15, "更新之後");
    ɵɵelementEnd();
    ɵɵrepeaterCreate(16, UpdateComponent_Conditional_52_For_17_Template, 3, 1, "div", 19, ɵɵrepeaterTrackByIndex);
    ɵɵconditionalCreate(18, UpdateComponent_Conditional_52_Conditional_18_Template, 3, 0, "div");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.title());
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r3.beforeRecommendations);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r3.beforeRecommendations.length <= 0 ? 7 : -1);
    ɵɵadvance(3);
    ɵɵconditional(ctx_r3.duringRecommendations.length > 0 ? 10 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r3.duringRecommendations);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r3.duringRecommendations.length <= 0 ? 13 : -1);
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r3.afterRecommendations);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r3.afterRecommendations.length <= 0 ? 18 : -1);
  }
}
__name(UpdateComponent_Conditional_52_Template, "UpdateComponent_Conditional_52_Template");
var _UpdateComponent = class _UpdateComponent {
  snackBar = inject(MatSnackBar);
  title = signal("", ...ngDevMode ? [{ debugName: "title" }] : []);
  level = 1;
  options = {
    ngUpgrade: false,
    material: false,
    windows: isWindows()
  };
  optionList = [
    { id: "ngUpgrade", name: "ngUpgrade", description: "合併 AngularJS 與 Angular" },
    { id: "material", name: "Angular Material", description: "" },
    { id: "windows", name: "Windows", description: "" }
  ];
  packageManager = "npm install";
  beforeRecommendations = [];
  duringRecommendations = [];
  afterRecommendations = [];
  versions = [
    { name: "20.0", number: 2e3 },
    { name: "19.0", number: 1900 },
    { name: "18.0", number: 1800 },
    { name: "17.0", number: 1700 },
    { name: "16.0", number: 1600 },
    { name: "15.0", number: 1500 },
    { name: "14.0", number: 1400 },
    { name: "13.0", number: 1300 },
    { name: "12.0", number: 1200 },
    { name: "11.0", number: 1100 },
    { name: "10.2", number: 1020 },
    { name: "10.1", number: 1010 },
    { name: "10.0", number: 1e3 },
    { name: "9.1", number: 910 },
    { name: "9.0", number: 900 },
    { name: "8.2", number: 820 },
    { name: "8.1", number: 810 },
    { name: "8.0", number: 800 },
    { name: "7.2", number: 720 },
    { name: "7.1", number: 710 },
    { name: "7.0", number: 700 },
    { name: "6.1", number: 610 },
    { name: "6.0", number: 600 },
    { name: "5.2", number: 520 },
    { name: "5.1", number: 510 },
    { name: "5.0", number: 500 },
    { name: "4.4", number: 440 },
    { name: "4.3", number: 430 },
    { name: "4.2", number: 420 },
    { name: "4.1", number: 410 },
    { name: "4.0", number: 400 },
    { name: "2.4", number: 204 },
    { name: "2.3", number: 203 },
    { name: "2.2", number: 202 },
    { name: "2.1", number: 201 },
    { name: "2.0", number: 200 }
  ];
  from = this.versions.find((version) => version.name === "19.0");
  to = this.versions.find((version) => version.name === "20.0");
  futureVersion = 2100;
  steps = RECOMMENDATIONS;
  clipboard = inject(Clipboard);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  constructor() {
    const queryMap = this.activatedRoute.snapshot.queryParamMap;
    this.level = parseInt(queryMap.get("l"), 10) || this.level;
    const versions = queryMap.get("v");
    if (versions) {
      const [from, to] = versions.split("-");
      this.from = this.versions.find((version) => version.name === from);
      this.to = this.versions.find((version) => version.name === to);
      this.showUpdatePath();
    }
  }
  copyCode({ tagName, textContent }) {
    if (tagName === "CODE") {
      this.clipboard.copy(textContent);
      this.snackBar.open("Copied to clipboard", "", { duration: 2e3 });
    }
  }
  async showUpdatePath() {
    this.beforeRecommendations = [];
    this.duringRecommendations = [];
    this.afterRecommendations = [];
    if (this.to.number < this.from.number) {
      alert("我們不支援降級 Angular 版本。");
      return;
    }
    const labelTitle = "Angular 應用程式更新指南";
    const labelBasic = "基礎應用";
    const labelMedium = "中等應用";
    const labelAdvanced = "高階應用";
    this.title.set(`${labelTitle} v${this.from.name} -> v${this.to.name}
    for
    ${this.level < 2 ? labelBasic : this.level < 3 ? labelMedium : labelAdvanced}`);
    for (const step of this.steps) {
      if (step.level <= this.level && step.necessaryAsOf > this.from.number) {
        let skip = false;
        for (const option of this.optionList) {
          if (step[option.id] && !this.options[option.id]) {
            skip = true;
          }
          if (step[option.id] === false && this.options[option.id]) {
            skip = true;
          }
        }
        if (skip) {
          continue;
        }
        step.renderedStep = await d(this.replaceVariables(step.action));
        if (step.possibleIn <= this.from.number && step.necessaryAsOf >= this.from.number) {
          this.beforeRecommendations.push(step);
        } else if (step.possibleIn > this.from.number && step.necessaryAsOf <= this.to.number) {
          this.duringRecommendations.push(step);
        } else if (step.possibleIn <= this.to.number) {
          this.afterRecommendations.push(step);
        }
      }
    }
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { v: `${this.from.name}-${this.to.name}`, l: this.level },
      queryParamsHandling: "merge"
    });
    this.renderPreV6Instructions();
  }
  getAdditionalDependencies(version) {
    if (version < 500) {
      return `typescript@'>=2.1.0 <2.4.0'`;
    } else if (version < 600) {
      return `typescript@2.4.2 rxjs@^5.5.2`;
    } else {
      return `typescript@2.7.x rxjs@^6.0.0`;
    }
  }
  getAngularVersion(version) {
    if (version < 400) {
      return `'^2.0.0'`;
    } else {
      const major = Math.floor(version / 100);
      const minor = Math.floor((version - major * 100) / 10);
      return `^${major}.${minor}.0`;
    }
  }
  async renderPreV6Instructions() {
    let upgradeStep;
    const additionalDeps = this.getAdditionalDependencies(this.to.number);
    const angularVersion = this.getAngularVersion(this.to.number);
    const angularPackages = [
      "animations",
      "common",
      "compiler",
      "compiler-cli",
      "core",
      "forms",
      "http",
      "platform-browser",
      "platform-browser-dynamic",
      "platform-server",
      "router"
    ];
    if (this.to.number < 600) {
      const actionMessage = `將所有依賴項更新到最新的 Angular 和正確版本的 TypeScript。`;
      if (isWindows()) {
        const packages = angularPackages.map((packageName) => `@angular/${packageName}@${angularVersion}`).join(" ") + " " + additionalDeps;
        upgradeStep = {
          step: "一般更新",
          action: `${actionMessage}
          如果你正在使用 Windows，則可以用：

\`${this.packageManager} ${packages}\``
        };
      } else {
        const packages = `@angular/{${angularPackages.join(",")}}@${angularVersion} ${additionalDeps}`;
        upgradeStep = {
          step: "一般更新",
          action: `${actionMessage}
          如果你正在使用 Linux/Mac，則可以用：

\`${this.packageManager} ${packages}\``
        };
      }
      if (this.packageManager === "npm install" && this.to.number === 500) {
        upgradeStep.action += `

\`npm install typescript@2.4.2 --save-exact\``;
      }
      upgradeStep.renderedStep = await d(upgradeStep.action);
      this.duringRecommendations.push(upgradeStep);
    }
  }
  replaceVariables(action) {
    let newAction = action;
    newAction = newAction.replace("${packageManagerGlobalInstall}", this.packageManager === "npm install" ? "npm install -g" : "yarn global add");
    newAction = newAction.replace("${packageManagerInstall}", this.packageManager);
    return newAction;
  }
};
__name(_UpdateComponent, "UpdateComponent");
__publicField(_UpdateComponent, "ɵfac", /* @__PURE__ */ __name(function UpdateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateComponent)();
}, "UpdateComponent_Factory"));
__publicField(_UpdateComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _UpdateComponent, selectors: [["adev-update-guide"]], hostBindings: /* @__PURE__ */ __name(function UpdateComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    ɵɵlistener("click", /* @__PURE__ */ __name(function UpdateComponent_click_HostBindingHandler($event) {
      return ctx.copyCode($event.target);
    }, "UpdateComponent_click_HostBindingHandler"));
  }
}, "UpdateComponent_HostBindings"), decls: 53, vars: 15, consts: [["templatesMenuFrom", ""], ["templatesMenuTo", ""], [1, "page", "docs-viewer"], ["tabindex", "-1", 1, "page-header"], [1, "wizard"], [1, "adev-version-selector"], [1, "adev-template-select"], [3, "cdkMenuTriggerFor"], [1, "docs-alert", "docs-alert-critical"], [2, "margin-bottom", "16px", 3, "change", "value"], [3, "value"], ["type", "button", 1, "docs-primary-btn", "show-button", 3, "click"], [1, "recommendations"], ["cdkMenu", "", 1, "adev-template-dropdown"], ["cdkMenuItem", "", "type", "button", 3, "click"], [3, "change", "checked"], [3, "change", "value"], ["value", "npm install"], ["value", "yarn add"], [1, "adev-recommendation-item"], [3, "innerHTML"]], template: /* @__PURE__ */ __name(function UpdateComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "h1", 3);
    ɵɵtext(2, "更新指南");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 4)(4, "div")(5, "h2");
    ɵɵtext(6, "選擇與你的更新相對應的選項");
    ɵɵelementEnd();
    ɵɵelementStart(7, "h3");
    ɵɵtext(8, "Angular 版本");
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 5)(10, "span", 6);
    ɵɵtext(11, " 從 v. ");
    ɵɵelementStart(12, "button", 7)(13, "span");
    ɵɵtext(14);
    ɵɵelementEnd();
    ɵɵelementStart(15, "docs-icon");
    ɵɵtext(16, "expand_more");
    ɵɵelementEnd()();
    ɵɵtemplate(17, UpdateComponent_ng_template_17_Template, 3, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(19, "span")(20, "span", 6);
    ɵɵtext(21, " 到 v. ");
    ɵɵelementStart(22, "button", 7)(23, "span");
    ɵɵtext(24);
    ɵɵelementEnd();
    ɵɵelementStart(25, "docs-icon");
    ɵɵtext(26, "expand_more");
    ɵɵelementEnd()();
    ɵɵtemplate(27, UpdateComponent_ng_template_27_Template, 3, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()()();
    ɵɵconditionalCreate(29, UpdateComponent_Conditional_29_Template, 5, 0, "div", 8);
    ɵɵconditionalCreate(30, UpdateComponent_Conditional_30_Template, 5, 0, "div", 8);
    ɵɵconditionalCreate(31, UpdateComponent_Conditional_31_Template, 8, 0, "div", 8);
    ɵɵelementStart(32, "h3");
    ɵɵtext(33, "應用程式複雜性");
    ɵɵelementEnd();
    ɵɵelementStart(34, "mat-button-toggle-group", 9);
    ɵɵlistener("change", /* @__PURE__ */ __name(function UpdateComponent_Template_mat_button_toggle_group_change_34_listener($event) {
      ɵɵrestoreView(_r1);
      ctx.level = $event.value;
      return ɵɵresetView(ctx.showUpdatePath());
    }, "UpdateComponent_Template_mat_button_toggle_group_change_34_listener"));
    ɵɵelementStart(35, "mat-button-toggle", 10);
    ɵɵtext(36, "基礎");
    ɵɵelementEnd();
    ɵɵelementStart(37, "mat-button-toggle", 10);
    ɵɵtext(38, "中等");
    ɵɵelementEnd();
    ɵɵelementStart(39, "mat-button-toggle", 10);
    ɵɵtext(40, "高階");
    ɵɵelementEnd()();
    ɵɵconditionalCreate(41, UpdateComponent_Conditional_41_Template, 2, 0, "p")(42, UpdateComponent_Conditional_42_Template, 2, 0, "p")(43, UpdateComponent_Conditional_43_Template, 2, 0, "p");
    ɵɵelementStart(44, "h3");
    ɵɵtext(45, "Other dependencies");
    ɵɵelementEnd();
    ɵɵrepeaterCreate(46, UpdateComponent_For_47_Template, 3, 3, "div", null, ɵɵrepeaterTrackByIndex);
    ɵɵconditionalCreate(48, UpdateComponent_Conditional_48_Template, 7, 1);
    ɵɵelementStart(49, "button", 11);
    ɵɵlistener("click", /* @__PURE__ */ __name(function UpdateComponent_Template_button_click_49_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.showUpdatePath());
    }, "UpdateComponent_Template_button_click_49_listener"));
    ɵɵtext(50, " 告訴我如何更新 ");
    ɵɵelementEnd()()();
    ɵɵelement(51, "hr");
    ɵɵconditionalCreate(52, UpdateComponent_Conditional_52_Template, 19, 5, "div", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const templatesMenuFrom_r13 = ɵɵreference(18);
    const templatesMenuTo_r14 = ɵɵreference(28);
    ɵɵadvance(12);
    ɵɵproperty("cdkMenuTriggerFor", templatesMenuFrom_r13);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx.from.name);
    ɵɵadvance(8);
    ɵɵproperty("cdkMenuTriggerFor", templatesMenuTo_r14);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx.to.name);
    ɵɵadvance(5);
    ɵɵconditional(ctx.from.number >= ctx.futureVersion || ctx.to.number >= ctx.futureVersion ? 29 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx.from.number > ctx.to.number ? 30 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx.to.number - ctx.from.number > 150 && ctx.from.number > 240 ? 31 : -1);
    ɵɵadvance(3);
    ɵɵproperty("value", ctx.level);
    ɵɵadvance();
    ɵɵproperty("value", 1);
    ɵɵadvance(2);
    ɵɵproperty("value", 2);
    ɵɵadvance(2);
    ɵɵproperty("value", 3);
    ɵɵadvance(2);
    ɵɵconditional(ctx.level === 1 ? 41 : ctx.level === 2 ? 42 : ctx.level === 3 ? 43 : -1);
    ɵɵadvance(5);
    ɵɵrepeater(ctx.optionList);
    ɵɵadvance(2);
    ɵɵconditional(ctx.from.number < 600 ? 48 : -1);
    ɵɵadvance();
    ɵɵattribute("text", "告訴我如何更新！");
    ɵɵadvance(3);
    ɵɵconditional(ctx.beforeRecommendations.length > 0 || ctx.duringRecommendations.length > 0 || ctx.afterRecommendations.length > 0 ? 52 : -1);
  }
}, "UpdateComponent_Template"), dependencies: [
  MatCheckboxModule,
  MatCheckbox,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatButtonToggleGroup,
  MatButtonToggle,
  CdkMenuModule,
  CdkMenu,
  CdkMenuItem,
  CdkMenuTrigger,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: var(--layout-padding) 0px;\n  container: update-guide-page/inline-size;\n}\n[_nghost-%COMP%]   .docs-viewer[_ngcontent-%COMP%] {\n  padding-inline: var(--layout-padding);\n}\n@media (min-width: 1430.01px) {\n  [_nghost-%COMP%]   .docs-viewer[_ngcontent-%COMP%] {\n    margin-left: -16rem;\n    width: calc(100% - 16rem);\n    box-sizing: border-box;\n  }\n}\n[_nghost-%COMP%]   .docs-viewer[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: var(--page-width);\n}\n@media (min-width: 1800.01px) {\n  .page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-inline: 0px;\n  }\n}\n@media (max-width: 900px) {\n  .page[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  margin-block-start: 2em;\n}\n.wizard[_ngcontent-%COMP%] {\n  padding-inline: 1rem;\n}\n.wizard[_ngcontent-%COMP%]   .show-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-block-start: 2rem;\n}\n.adev-version-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.adev-template-dropdown[_ngcontent-%COMP%] {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  padding: 0;\n  transform: translateY(-0.7rem);\n  max-height: 200px;\n  overflow-y: auto;\n  width: 200px;\n  box-sizing: border-box;\n  background: var(--page-background);\n}\n.adev-template-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  box-sizing: border-box;\n}\n.adev-template-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--page-background);\n  font-size: 0.875rem;\n  width: 100%;\n  text-align: left;\n  padding-block: 0.5rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease, background 0.3s ease;\n  font-weight: 400;\n}\n.adev-template-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--senary-contrast);\n  color: var(--primary-contrast);\n}\n.adev-template-select[_ngcontent-%COMP%] {\n  margin-block-end: 0.5rem;\n}\n.adev-template-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  width: 200px;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-block: 0.5rem;\n  font-weight: 400;\n  transition: border 0.3s ease;\n}\n.adev-template-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n  transition: color 0.3s ease;\n  margin-inline-start: 0.1rem;\n}\n.adev-template-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-recommendation-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.adev-recommendation-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-inline-start: 2rem;\n}\n.adev-recommendation-item[_ngcontent-%COMP%]     code {\n  cursor: pointer;\n}\n/*# sourceMappingURL=update.component.css.map */"], changeDetection: 0 }));
var UpdateComponent = _UpdateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateComponent, [{
    type: Component,
    args: [{ selector: "adev-update-guide", imports: [
      MatCheckboxModule,
      MatInputModule,
      MatCardModule,
      MatGridListModule,
      MatButtonToggleModule,
      CdkMenuModule,
      IconComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page docs-viewer">
  <h1 class="page-header" tabindex="-1">更新指南</h1>
  <div class="wizard">
    <div>
      <h2>選擇與你的更新相對應的選項</h2>

      <h3>Angular 版本</h3>

      <div class="adev-version-selector">
        <span class="adev-template-select">
          從 v.

          <button [cdkMenuTriggerFor]="templatesMenuFrom">
            <span>{{ from.name }}</span>
            <docs-icon>expand_more</docs-icon>
          </button>

          <ng-template #templatesMenuFrom>
            <ul class="adev-template-dropdown" cdkMenu>
              @for (version of versions; track $index) {
                <li>
                  <button cdkMenuItem type="button" (click)="from=version; showUpdatePath()">
                    <span>{{ version.name }}</span>
                  </button>
                </li>
              }
            </ul>
          </ng-template>
        </span>

        <span>
          <span class="adev-template-select">
            到 v.
            <button [cdkMenuTriggerFor]="templatesMenuTo">
              <span>{{ to.name }}</span>
              <docs-icon>expand_more</docs-icon>
            </button>

            <ng-template #templatesMenuTo>
              <ul class="adev-template-dropdown" cdkMenu>
                @for (version of versions; track $index) {
                  <li>
                    <button cdkMenuItem type="button" (click)="to=version; showUpdatePath()">
                      <span>{{ version.name }}</span>
                    </button>
                  </li>
                }
              </ul>
            </ng-template>
          </span>
        </span>
      </div>

      @if (from.number >= futureVersion || to.number >= futureVersion) {
        <div class="docs-alert docs-alert-critical">
          <p>
            <strong>警告：</strong>
            當前主要版本之後的發布計劃尚未最終確定，可能會有變化。這些建議是基於計劃中的棄用情況。
          </p>
        </div>
      }

      @if (from.number > to.number) {
        <div class="docs-alert docs-alert-critical">
          <p>
            <strong>警告：</strong>
            我們不支援降級 Angular 版本。
          </p>
        </div>
      }

      @if ((to.number - from.number > 150) && from.number > 240) {
        <div class="docs-alert docs-alert-critical">
          <p>
            <strong>警告：</strong>
            確保按照以下指南把你的應用程式遷移到新版本。你每次執行 <code>ng update</code> 時不應該跳過任何主要版本來更新 Angular 應用程式。
          </p>
        </div>
      }

      <h3>應用程式複雜性</h3>
      <mat-button-toggle-group
        (change)="level = $event.value; showUpdatePath()"
        [value]="level"
        style="margin-bottom:16px;"
      >
        <mat-button-toggle [value]="1">基礎</mat-button-toggle>
        <mat-button-toggle [value]="2">中等</mat-button-toggle>
        <mat-button-toggle [value]="3">高階</mat-button-toggle>
      </mat-button-toggle-group>
      @if (level === 1) {
        <p>展示所有 Angular 開發者都感興趣的訊息。</p>
      } @else if (level === 2) {
        <p>展示更高階 Angular 開發者會感興趣的訊息。</p>
      } @else if (level === 3) {
        <p>展示關於這個更新的所有訊息。</p>
      }

      <h3>Other dependencies</h3>
      @for (option of optionList; track $index) {
        <div>
          <mat-checkbox
            (change)="options[option.id] = $event.checked; showUpdatePath()"
            [checked]="options[option.id]"
            >I use {{option.name}} {{option.description}}</mat-checkbox
          >
        </div>
      }

      @if (from.number < 600) {
        <h4>套件管理器</h4>
        <mat-button-toggle-group
          (change)="packageManager = $event.value; showUpdatePath()"
          [value]="packageManager"
        >
          <mat-button-toggle value="npm install">npm</mat-button-toggle>
          <mat-button-toggle value="yarn add">yarn</mat-button-toggle>
        </mat-button-toggle-group>
      }

      <button
        type="button"
        (click)="showUpdatePath()"
        class="docs-primary-btn show-button"
        [attr.text]="'告訴我如何更新！'"
      >
        告訴我如何更新
      </button>
    </div>
  </div>

  <hr />
  <!-- RECOMMENDATIONS SECTION -->

  @if (
    beforeRecommendations.length > 0 || duringRecommendations.length > 0 || afterRecommendations.length > 0
  ) {
    <div class="recommendations">
      <h2>{{title()}}</h2>

      <h3>在更新之前</h3>
      @for (r  of beforeRecommendations; track $index) {
        <div class="adev-recommendation-item">
          <mat-checkbox />
          <div [innerHTML]="r.renderedStep"></div>
        </div>
      }
      @if (beforeRecommendations.length <= 0) {
        <div>
          <em>在這些版本之間切換之前，你無需進行任何操作。</em>
        </div>
      }

      <h3>更新到新版本</h3>
      @if (duringRecommendations.length > 0) {
        <div>
          <em>請稽核這些更改並執行這些操作來更新應用程式。</em>
        </div>
      }

      @for (r of duringRecommendations; track $index) {
        <div class="adev-recommendation-item">
          <mat-checkbox />
          <div [innerHTML]="r.renderedStep"></div>
        </div>
      }
      @if (duringRecommendations.length <= 0) {
        <div>
          <em>對這些版本之間的移動，沒有任何建議。</em>
        </div>
      }

      <h3>更新之後</h3>
      @for (r of afterRecommendations; track $index) {
        <div class="adev-recommendation-item">
          <mat-checkbox />
          <div [innerHTML]="r.renderedStep"></div>
        </div>
      }
      @if (afterRecommendations.length <= 0) {
        <div>
          <em>在切換這些版本之後，你無需進行任何操作。</em>
        </div>
      }
    </div>
  }
</div>
`, styles: ["/* src/app/features/update/update.component.scss */\n:host {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: var(--layout-padding) 0px;\n  container: update-guide-page/inline-size;\n}\n:host .docs-viewer {\n  padding-inline: var(--layout-padding);\n}\n@media (min-width: 1430.01px) {\n  :host .docs-viewer {\n    margin-left: -16rem;\n    width: calc(100% - 16rem);\n    box-sizing: border-box;\n  }\n}\n:host .docs-viewer .page-header {\n  margin-top: 0px;\n}\n.page {\n  max-width: var(--page-width);\n}\n@media (min-width: 1800.01px) {\n  .page > * {\n    padding-inline: 0px;\n  }\n}\n@media (max-width: 900px) {\n  .page {\n    width: 100%;\n  }\n}\nh3,\nh4 {\n  margin-block-start: 2em;\n}\n.wizard {\n  padding-inline: 1rem;\n}\n.wizard .show-button {\n  display: block;\n  margin-block-start: 2rem;\n}\n.adev-version-selector {\n  display: flex;\n  gap: 1rem;\n}\n.adev-template-dropdown {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  padding: 0;\n  transform: translateY(-0.7rem);\n  max-height: 200px;\n  overflow-y: auto;\n  width: 200px;\n  box-sizing: border-box;\n  background: var(--page-background);\n}\n.adev-template-dropdown li {\n  list-style: none;\n  box-sizing: border-box;\n}\n.adev-template-dropdown li button {\n  background: var(--page-background);\n  font-size: 0.875rem;\n  width: 100%;\n  text-align: left;\n  padding-block: 0.5rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease, background 0.3s ease;\n  font-weight: 400;\n}\n.adev-template-dropdown li button:hover {\n  background: var(--senary-contrast);\n  color: var(--primary-contrast);\n}\n.adev-template-select {\n  margin-block-end: 0.5rem;\n}\n.adev-template-select button {\n  font-size: 0.875rem;\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  width: 200px;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-block: 0.5rem;\n  font-weight: 400;\n  transition: border 0.3s ease;\n}\n.adev-template-select button span {\n  color: var(--primary-contrast);\n  transition: color 0.3s ease;\n  margin-inline-start: 0.1rem;\n}\n.adev-template-select button docs-icon {\n  font-size: 1.3rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-recommendation-item {\n  display: flex;\n  align-items: center;\n}\n.adev-recommendation-item > div {\n  margin-inline-start: 2rem;\n}\n.adev-recommendation-item ::ng-deep code {\n  cursor: pointer;\n}\n/*# sourceMappingURL=update.component.css.map */\n"] }]
  }], () => [], { copyCode: [{
    type: HostListener,
    args: ["click", ["$event.target"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(UpdateComponent, { className: "UpdateComponent", filePath: "src/app/features/update/update.component.ts", lineNumber: 44 });
})();
function isWindows() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const platform = navigator.platform.toLowerCase();
  return platform.includes("windows") || platform.includes("win32");
}
__name(isWindows, "isWindows");
export {
  UpdateComponent as default
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-HDRLTOBT.js.map
