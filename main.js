import {
  ErrorSnackBar
} from "./chunk-5F3EYLXG.js";
import {
  getApiNavigationItems,
  mapApiManifestToRoutes
} from "./chunk-FBBF3GVO.js";
import {
  DEFAULT_PAGES,
  PAGE_PREFIX
} from "./chunk-XUJDBDVC.js";
import {
  MatSnackBar
} from "./chunk-UTU76KKQ.js";
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuTrigger
} from "./chunk-CKZVQYF5.js";
import "./chunk-BQZYSKAP.js";
import {
  ClickOutside,
  CookiePopup,
  DOCS_CONTENT_LOADER,
  ENVIRONMENT,
  EXAMPLE_VIEWER_CONTENT_LOADER,
  ExternalLink,
  IS_SEARCH_DIALOG_OPEN,
  IconComponent,
  LOCAL_STORAGE,
  NavigationList,
  NavigationState,
  PREVIEWS_COMPONENTS,
  STORAGE_KEY,
  Search,
  SearchDialog,
  TopLevelBannerComponent,
  WINDOW,
  contentResolver,
  findNavigationItem,
  flatNavigationData,
  getActivatedRouteSnapshotFromRouter,
  getBaseUrlAfterRedirects,
  getNavigationItemsTree,
  isApple,
  mapNavigationItemsToRoutes,
  markExternalLinks,
  provideAlgoliaSearchClient,
  setCookieConsent,
  shouldReduceMotion,
  windowProvider
} from "./chunk-FSDA2DZH.js";
import {
  takeUntilDestroyed,
  toObservable
} from "./chunk-7F6UZAKO.js";
import {
  BaseRouteReuseStrategy,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationSkipped,
  NavigationStart,
  RedirectCommand,
  RouteReuseStrategy,
  Router,
  RouterLink,
  RouterOutlet,
  Scroll,
  TitleStrategy,
  createUrlTreeFromSnapshot,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withNavigationErrorHandler,
  withRouterConfig,
  withViewTransitions
} from "./chunk-OF2BY3RZ.js";
import {
  HttpClient,
  HttpErrorResponse,
  Title,
  bootstrapApplication,
  httpResource,
  provideClientHydration,
  provideHttpClient,
  withFetch
} from "./chunk-DAHHMHGV.js";
import {
  ConnectionPositionPair
} from "./chunk-UGE24TTQ.js";
import "./chunk-IP3YSDXJ.js";
import "./chunk-H7FALWCD.js";
import {
  Location,
  ViewportScroller,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-OV2CFM4K.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  EnvironmentInjector,
  ErrorHandler,
  Injectable,
  PLATFORM_ID,
  Subject,
  VERSION,
  __name,
  __publicField,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  computed,
  distinctUntilChanged,
  effect,
  filter,
  firstValueFrom,
  inject,
  isDevMode,
  map,
  merge,
  model,
  provideEnvironmentInitializer,
  provideZonelessChangeDetection,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  skip,
  startWith,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/app/environment.ts
var environment_default = {
  production: true,
  // Those values are publicly visible in the search request headers, and presents search-only keys.
  // https://www.algolia.com/doc/guides/security/api-keys/#search-only-api-key
  algolia: {
    appId: "L1XWT2UJ7F",
    apiKey: "dfca7ed184db27927a512e5c6668b968",
    indexName: "angular_v17"
  },
  googleAnalyticsId: "G-XB6NEVW32B"
};

// src/assets/previews/previews.ts
var PREVIEWS_COMPONENTS_MAP = {
  ["adev/src/content/examples/angular-compiler-options/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-WKAYSHGI.js").then((c) => c.AppComponent), "adev/src/content/examples/angular-compiler-options/src/app/app.component.ts"),
  ["adev/src/content/examples/accessibility/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-CZTHED7I.js").then((c) => c.AppComponent), "adev/src/content/examples/accessibility/src/app/app.component.ts"),
  ["adev/src/content/examples/accessibility/src/app/progress-bar.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-J2BTEKXA.js").then((c) => c.ExampleProgressbarComponent), "adev/src/content/examples/accessibility/src/app/progress-bar.component.ts"),
  ["adev/src/content/examples/drag-drop/src/axis-lock/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-PKRNL5JR.js").then((c) => c.CdkDragDropAxisLockExample), "adev/src/content/examples/drag-drop/src/axis-lock/app/app.component.ts"),
  ["adev/src/content/examples/attribute-directives/src/app/app.component.1.ts"]: /* @__PURE__ */ __name(() => import("./chunk-6YV7AFQI.js").then((c) => c.AppComponent), "adev/src/content/examples/attribute-directives/src/app/app.component.1.ts"),
  ["adev/src/content/examples/attribute-directives/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-K2SIPO3N.js").then((c) => c.AppComponent), "adev/src/content/examples/attribute-directives/src/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/boundary/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-CTZ5WCO7.js").then((c) => c.CdkDragDropBoundaryExample), "adev/src/content/examples/drag-drop/src/boundary/app/app.component.ts"),
  ["adev/src/content/examples/built-in-directives/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-ALIF4UZW.js").then((c) => c.AppComponent), "adev/src/content/examples/built-in-directives/src/app/app.component.ts"),
  ["adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_StoutItemComponent"]: /* @__PURE__ */ __name(() => import("./chunk-LXURPXPC.js").then((c) => c.StoutItemComponent), "adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_StoutItemComponent"),
  ["adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_BestItemComponent"]: /* @__PURE__ */ __name(() => import("./chunk-LXURPXPC.js").then((c) => c.BestItemComponent), "adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_BestItemComponent"),
  ["adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_DeviceItemComponent"]: /* @__PURE__ */ __name(() => import("./chunk-LXURPXPC.js").then((c) => c.DeviceItemComponent), "adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_DeviceItemComponent"),
  ["adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_LostItemComponent"]: /* @__PURE__ */ __name(() => import("./chunk-LXURPXPC.js").then((c) => c.LostItemComponent), "adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_LostItemComponent"),
  ["adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_UnknownItemComponent"]: /* @__PURE__ */ __name(() => import("./chunk-LXURPXPC.js").then((c) => c.UnknownItemComponent), "adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts_UnknownItemComponent"),
  ["adev/src/content/examples/drag-drop/src/connected-sorting-group/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-GAVOAUXK.js").then((c) => c.CdkDragDropConnectedSortingGroupExample), "adev/src/content/examples/drag-drop/src/connected-sorting-group/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/copy-list/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-S3D2ZHCM.js").then((c) => c.CdkDragDropCopyListExample), "adev/src/content/examples/drag-drop/src/copy-list/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/connected-sorting/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-RUL7O7BW.js").then((c) => c.CdkDragDropConnectedSortingExample), "adev/src/content/examples/drag-drop/src/connected-sorting/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/custom-handle/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-HVF4XYDF.js").then((c) => c.CdkDragDropHandleExample), "adev/src/content/examples/drag-drop/src/custom-handle/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/custom-preview/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-QOQB63X3.js").then((c) => c.CdkDragDropCustomPreviewExample), "adev/src/content/examples/drag-drop/src/custom-preview/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/custom-placeholder/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-AWH3NDL5.js").then((c) => c.CdkDragDropCustomPlaceholderExample), "adev/src/content/examples/drag-drop/src/custom-placeholder/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/delay-drag/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-PNOB6QZJ.js").then((c) => c.CdkDragDropDelayExample), "adev/src/content/examples/drag-drop/src/delay-drag/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/enter-predicate/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-LWX2T5HI.js").then((c) => c.CdkDragDropEnterPredicateExample), "adev/src/content/examples/drag-drop/src/enter-predicate/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/free-drag-position/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-7YKBZWLK.js").then((c) => c.CdkDragDropFreeDragPositionExample), "adev/src/content/examples/drag-drop/src/free-drag-position/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/horizontal-sorting/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-XZU6WYTR.js").then((c) => c.CdkDragDropHorizontalSortingExample), "adev/src/content/examples/drag-drop/src/horizontal-sorting/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/overview/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-YFOTUOAD.js").then((c) => c.CdkDragDropOverviewExample), "adev/src/content/examples/drag-drop/src/overview/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/mixed-sorting/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-KK7ZNTTP.js").then((c) => c.CdkDragDropMixedSortingExample), "adev/src/content/examples/drag-drop/src/mixed-sorting/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/disable-sorting/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-QUKHEMPA.js").then((c) => c.CdkDragDropDisabledSortingExample), "adev/src/content/examples/drag-drop/src/disable-sorting/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/root-element/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-PMCJOOHG.js").then((c) => c.CdkDragDropRootElementExample), "adev/src/content/examples/drag-drop/src/root-element/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/sorting/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-ND2YQ77D.js").then((c) => c.CdkDragDropSortingExample), "adev/src/content/examples/drag-drop/src/sorting/app/app.component.ts"),
  ["adev/src/content/examples/dynamic-form/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-DPOQFEVV.js").then((c) => c.AppComponent), "adev/src/content/examples/dynamic-form/src/app/app.component.ts"),
  ["adev/src/content/examples/dynamic-form/src/app/dynamic-form-question.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-3HPQWFCQ.js").then((c) => c.DynamicFormQuestionComponent), "adev/src/content/examples/dynamic-form/src/app/dynamic-form-question.component.ts"),
  ["adev/src/content/examples/dynamic-form/src/app/dynamic-form.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-ONDA2XMY.js").then((c) => c.DynamicFormComponent), "adev/src/content/examples/dynamic-form/src/app/dynamic-form.component.ts"),
  ["adev/src/content/examples/hello-world/src/app/app.component-old.ts"]: /* @__PURE__ */ __name(() => import("./chunk-Z3NEI64X.js").then((c) => c.HelloWorldComponent), "adev/src/content/examples/hello-world/src/app/app.component-old.ts"),
  ["adev/src/content/examples/hello-world/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-RC4IOBMV.js").then((c) => c.HelloWorldComponent), "adev/src/content/examples/hello-world/src/app/app.component.ts"),
  ["adev/src/content/examples/forms/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-4BGSFQB4.js").then((c) => c.AppComponent), "adev/src/content/examples/forms/src/app/app.component.ts"),
  ["adev/src/content/examples/forms-overview/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-DLTIPX2Y.js").then((c) => c.AppComponent), "adev/src/content/examples/forms-overview/src/app/app.component.ts"),
  ["adev/src/content/examples/pipes/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-5O2FRRVB.js").then((c) => c.AppComponent), "adev/src/content/examples/pipes/src/app/app.component.ts"),
  ["adev/src/content/examples/pipes/src/app/birthday-formatting.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-CQUTYQZC.js").then((c) => c.BirthdayFormattingComponent), "adev/src/content/examples/pipes/src/app/birthday-formatting.component.ts"),
  ["adev/src/content/examples/pipes/src/app/birthday-pipe-chaining.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-ZONCIGBM.js").then((c) => c.BirthdayPipeChainingComponent), "adev/src/content/examples/pipes/src/app/birthday-pipe-chaining.component.ts"),
  ["adev/src/content/examples/pipes/src/app/birthday.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-PGPWV5LC.js").then((c) => c.BirthdayComponent), "adev/src/content/examples/pipes/src/app/birthday.component.ts"),
  ["adev/src/content/examples/pipes/src/app/flying-heroes.component.ts_FlyingHeroesComponent"]: /* @__PURE__ */ __name(() => import("./chunk-SDXWEYTU.js").then((c) => c.FlyingHeroesComponent), "adev/src/content/examples/pipes/src/app/flying-heroes.component.ts_FlyingHeroesComponent"),
  ["adev/src/content/examples/pipes/src/app/flying-heroes.component.ts_FlyingHeroesImpureComponent"]: /* @__PURE__ */ __name(() => import("./chunk-SDXWEYTU.js").then((c) => c.FlyingHeroesImpureComponent), "adev/src/content/examples/pipes/src/app/flying-heroes.component.ts_FlyingHeroesImpureComponent"),
  ["adev/src/content/examples/pipes/src/app/hero-async-message.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-ECAXPESX.js").then((c) => c.HeroAsyncMessageComponent), "adev/src/content/examples/pipes/src/app/hero-async-message.component.ts"),
  ["adev/src/content/examples/pipes/src/app/json-pipe.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-HITIKG6B.js").then((c) => c.JsonPipeComponent), "adev/src/content/examples/pipes/src/app/json-pipe.component.ts"),
  ["adev/src/content/examples/pipes/src/app/power-booster.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-UPOLBSCJ.js").then((c) => c.PowerBoosterComponent), "adev/src/content/examples/pipes/src/app/power-booster.component.ts"),
  ["adev/src/content/examples/pipes/src/app/precedence.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-MM53D3MO.js").then((c) => c.PrecedenceComponent), "adev/src/content/examples/pipes/src/app/precedence.component.ts"),
  ["adev/src/content/examples/security/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-HBODEFXN.js").then((c) => c.AppComponent), "adev/src/content/examples/security/src/app/app.component.ts"),
  ["adev/src/content/examples/security/src/app/bypass-security.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-3ID4YHEG.js").then((c) => c.BypassSecurityComponent), "adev/src/content/examples/security/src/app/bypass-security.component.ts"),
  ["adev/src/content/examples/security/src/app/inner-html-binding.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-B2CDMVIX.js").then((c) => c.InnerHtmlBindingComponent), "adev/src/content/examples/security/src/app/inner-html-binding.component.ts"),
  ["adev/src/content/examples/drag-drop/src/disable-drag/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-BXW4Y3DC.js").then((c) => c.CdkDragDropDisabledExample), "adev/src/content/examples/drag-drop/src/disable-drag/app/app.component.ts"),
  ["adev/src/content/examples/drag-drop/src/sort-predicate/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-K77B5YZ3.js").then((c) => c.CdkDragDropSortPredicateExample), "adev/src/content/examples/drag-drop/src/sort-predicate/app/app.component.ts"),
  ["adev/src/content/examples/animations/src/app/about.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-ZTFFRGEH.js").then((c) => c.AboutComponent), "adev/src/content/examples/animations/src/app/about.component.ts"),
  ["adev/src/content/examples/animations/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-YV4KLUPK.js").then((c) => c.AppComponent), "adev/src/content/examples/animations/src/app/app.component.ts"),
  ["adev/src/content/examples/animations/src/app/hero-list-auto-page.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-VZH2WM7M.js").then((c) => c.HeroListAutoCalcPageComponent), "adev/src/content/examples/animations/src/app/hero-list-auto-page.component.ts"),
  ["adev/src/content/examples/animations/src/app/hero-list-auto.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-G2NE5VEF.js").then((c) => c.HeroListAutoComponent), "adev/src/content/examples/animations/src/app/hero-list-auto.component.ts"),
  ["adev/src/content/examples/animations/src/app/hero-list-enter-leave-page.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-QLT3VQJY.js").then((c) => c.HeroListEnterLeavePageComponent), "adev/src/content/examples/animations/src/app/hero-list-enter-leave-page.component.ts"),
  ["adev/src/content/examples/animations/src/app/hero-list-enter-leave.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-P4ISBHCN.js").then((c) => c.HeroListEnterLeaveComponent), "adev/src/content/examples/animations/src/app/hero-list-enter-leave.component.ts"),
  ["adev/src/content/examples/animations/src/app/hero-list-group-page.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-3QODDQWN.js").then((c) => c.HeroListGroupPageComponent), "adev/src/content/examples/animations/src/app/hero-list-group-page.component.ts"),
  ["adev/src/content/examples/animations/src/app/hero-list-groups.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-HQ4FW7QH.js").then((c) => c.HeroListGroupsComponent), "adev/src/content/examples/animations/src/app/hero-list-groups.component.ts"),
  ["adev/src/content/examples/animations/src/app/hero-list-page.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-PO2B5IEA.js").then((c) => c.HeroListPageComponent), "adev/src/content/examples/animations/src/app/hero-list-page.component.ts"),
  ["adev/src/content/examples/animations/src/app/home.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-NB4YMCRH.js").then((c) => c.HomeComponent), "adev/src/content/examples/animations/src/app/home.component.ts"),
  ["adev/src/content/examples/animations/src/app/insert-remove.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-S6PTC73K.js").then((c) => c.InsertRemoveComponent), "adev/src/content/examples/animations/src/app/insert-remove.component.ts"),
  ["adev/src/content/examples/animations/src/app/open-close-page.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-CBWKMH4C.js").then((c) => c.OpenClosePageComponent), "adev/src/content/examples/animations/src/app/open-close-page.component.ts"),
  ["adev/src/content/examples/animations/src/app/open-close.component.1.ts"]: /* @__PURE__ */ __name(() => import("./chunk-4BI3MQ7O.js").then((c) => c.OpenCloseKeyframeComponent), "adev/src/content/examples/animations/src/app/open-close.component.1.ts"),
  ["adev/src/content/examples/animations/src/app/open-close.component.2.ts"]: /* @__PURE__ */ __name(() => import("./chunk-VMKXTPBY.js").then((c) => c.OpenCloseBooleanComponent), "adev/src/content/examples/animations/src/app/open-close.component.2.ts"),
  ["adev/src/content/examples/animations/src/app/open-close.component.3.ts"]: /* @__PURE__ */ __name(() => import("./chunk-VCKVZ4IL.js").then((c) => c.OpenCloseBooleanComponent), "adev/src/content/examples/animations/src/app/open-close.component.3.ts"),
  ["adev/src/content/examples/animations/src/app/open-close.component.4.ts"]: /* @__PURE__ */ __name(() => import("./chunk-I5IF5KLS.js").then((c) => c.OpenCloseChildComponent), "adev/src/content/examples/animations/src/app/open-close.component.4.ts"),
  ["adev/src/content/examples/animations/src/app/open-close.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-E3HTKM7X.js").then((c) => c.OpenCloseComponent), "adev/src/content/examples/animations/src/app/open-close.component.ts"),
  ["adev/src/content/examples/animations/src/app/querying.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-USWP5GDB.js").then((c) => c.QueryingComponent), "adev/src/content/examples/animations/src/app/querying.component.ts"),
  ["adev/src/content/examples/animations/src/app/status-slider-page.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-OOU6VINF.js").then((c) => c.StatusSliderPageComponent), "adev/src/content/examples/animations/src/app/status-slider-page.component.ts"),
  ["adev/src/content/examples/animations/src/app/status-slider.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-534FRZVZ.js").then((c) => c.StatusSliderComponent), "adev/src/content/examples/animations/src/app/status-slider.component.ts"),
  ["adev/src/content/examples/animations/src/app/toggle-animations-page.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-5F3YM22J.js").then((c) => c.ToggleAnimationsPageComponent), "adev/src/content/examples/animations/src/app/toggle-animations-page.component.ts"),
  ["adev/src/content/examples/structural-directives/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-HTWMWUJT.js").then((c) => c.AppComponent), "adev/src/content/examples/structural-directives/src/app/app.component.ts"),
  ["adev/src/content/examples/structural-directives/src/app/hero-switch.components.ts_HappyHeroComponent"]: /* @__PURE__ */ __name(() => import("./chunk-4WKWIM7Y.js").then((c) => c.HappyHeroComponent), "adev/src/content/examples/structural-directives/src/app/hero-switch.components.ts_HappyHeroComponent"),
  ["adev/src/content/examples/structural-directives/src/app/hero-switch.components.ts_SadHeroComponent"]: /* @__PURE__ */ __name(() => import("./chunk-4WKWIM7Y.js").then((c) => c.SadHeroComponent), "adev/src/content/examples/structural-directives/src/app/hero-switch.components.ts_SadHeroComponent"),
  ["adev/src/content/examples/structural-directives/src/app/hero-switch.components.ts_ConfusedHeroComponent"]: /* @__PURE__ */ __name(() => import("./chunk-4WKWIM7Y.js").then((c) => c.ConfusedHeroComponent), "adev/src/content/examples/structural-directives/src/app/hero-switch.components.ts_ConfusedHeroComponent"),
  ["adev/src/content/examples/structural-directives/src/app/hero-switch.components.ts_UnknownHeroComponent"]: /* @__PURE__ */ __name(() => import("./chunk-4WKWIM7Y.js").then((c) => c.UnknownHeroComponent), "adev/src/content/examples/structural-directives/src/app/hero-switch.components.ts_UnknownHeroComponent"),
  ["adev/src/content/examples/structural-directives/src/app/hero.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-LWSO7J22.js").then((c) => c.HeroComponent), "adev/src/content/examples/structural-directives/src/app/hero.component.ts"),
  ["adev/src/content/examples/routing-with-urlmatcher/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-NRD5BUHW.js").then((c) => c.AppComponent), "adev/src/content/examples/routing-with-urlmatcher/src/app/app.component.ts"),
  ["adev/src/content/examples/router-tutorial/src/app/app.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-RRRS5XBS.js").then((c) => c.AppComponent), "adev/src/content/examples/router-tutorial/src/app/app.component.ts"),
  ["adev/src/content/examples/built-in-directives/src/app/item-detail/item-detail.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-QWVFKYIU.js").then((c) => c.ItemDetailComponent), "adev/src/content/examples/built-in-directives/src/app/item-detail/item-detail.component.ts"),
  ["adev/src/content/examples/animations/src/app/enter-and-leave/enter-binding.ts"]: /* @__PURE__ */ __name(() => import("./chunk-DZBH5ZTO.js").then((c) => c.EnterBinding), "adev/src/content/examples/animations/src/app/enter-and-leave/enter-binding.ts"),
  ["adev/src/content/examples/animations/src/app/enter-and-leave/enter.ts"]: /* @__PURE__ */ __name(() => import("./chunk-46E3HWL5.js").then((c) => c.Enter), "adev/src/content/examples/animations/src/app/enter-and-leave/enter.ts"),
  ["adev/src/content/examples/animations/src/app/enter-and-leave/leave-binding.ts"]: /* @__PURE__ */ __name(() => import("./chunk-NBSN74W2.js").then((c) => c.LeaveBinding), "adev/src/content/examples/animations/src/app/enter-and-leave/leave-binding.ts"),
  ["adev/src/content/examples/animations/src/app/enter-and-leave/leave-event.ts"]: /* @__PURE__ */ __name(() => import("./chunk-SXXUVIPK.js").then((c) => c.LeaveEvent), "adev/src/content/examples/animations/src/app/enter-and-leave/leave-event.ts"),
  ["adev/src/content/examples/animations/src/app/enter-and-leave/leave.ts"]: /* @__PURE__ */ __name(() => import("./chunk-OMO6KNKY.js").then((c) => c.Leave), "adev/src/content/examples/animations/src/app/enter-and-leave/leave.ts"),
  ["adev/src/content/examples/animations/src/app/animations-package/auto-height.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-IMA6Q5CW.js").then((c) => c.AutoHeightComponent), "adev/src/content/examples/animations/src/app/animations-package/auto-height.component.ts"),
  ["adev/src/content/examples/animations/src/app/animations-package/increment-decrement.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-OJSJ7STP.js").then((c) => c.IncrementDecrementComponent), "adev/src/content/examples/animations/src/app/animations-package/increment-decrement.component.ts"),
  ["adev/src/content/examples/animations/src/app/animations-package/insert-remove.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-PLHM5XFF.js").then((c) => c.InsertRemoveComponent), "adev/src/content/examples/animations/src/app/animations-package/insert-remove.component.ts"),
  ["adev/src/content/examples/animations/src/app/animations-package/open-close.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-WFYM2QVY.js").then((c) => c.OpenCloseComponent), "adev/src/content/examples/animations/src/app/animations-package/open-close.component.ts"),
  ["adev/src/content/examples/animations/src/app/animations-package/reorder.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-6MRNDNRH.js").then((c) => c.ReorderComponent), "adev/src/content/examples/animations/src/app/animations-package/reorder.component.ts"),
  ["adev/src/content/examples/animations/src/app/animations-package/stagger.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-SL2KD4DP.js").then((c) => c.StaggerComponent), "adev/src/content/examples/animations/src/app/animations-package/stagger.component.ts"),
  ["adev/src/content/examples/animations/src/app/native-css/auto-height.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-XNKT25ET.js").then((c) => c.AutoHeightComponent), "adev/src/content/examples/animations/src/app/native-css/auto-height.component.ts"),
  ["adev/src/content/examples/animations/src/app/native-css/increment-decrement.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-2ZKZIXXO.js").then((c) => c.IncrementDecrementComponent), "adev/src/content/examples/animations/src/app/native-css/increment-decrement.component.ts"),
  ["adev/src/content/examples/animations/src/app/native-css/insert.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-LDMDHHEQ.js").then((c) => c.InsertComponent), "adev/src/content/examples/animations/src/app/native-css/insert.component.ts"),
  ["adev/src/content/examples/animations/src/app/native-css/open-close.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-KP5V52HE.js").then((c) => c.OpenCloseComponent), "adev/src/content/examples/animations/src/app/native-css/open-close.component.ts"),
  ["adev/src/content/examples/animations/src/app/native-css/remove.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-LNGXAYKW.js").then((c) => c.RemoveComponent), "adev/src/content/examples/animations/src/app/native-css/remove.component.ts"),
  ["adev/src/content/examples/animations/src/app/native-css/reorder.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-FRRHAPSV.js").then((c) => c.ReorderComponent), "adev/src/content/examples/animations/src/app/native-css/reorder.component.ts"),
  ["adev/src/content/examples/animations/src/app/native-css/stagger.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-Z5UXVTFI.js").then((c) => c.StaggerComponent), "adev/src/content/examples/animations/src/app/native-css/stagger.component.ts"),
  ["adev/src/content/examples/routing-with-urlmatcher/src/app/profile/profile.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-JFR7WDZP.js").then((c) => c.ProfileComponent), "adev/src/content/examples/routing-with-urlmatcher/src/app/profile/profile.component.ts"),
  ["adev/src/content/examples/router-tutorial/src/app/heroes-list/heroes-list.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-SPLDSDQC.js").then((c) => c.HeroesListComponent), "adev/src/content/examples/router-tutorial/src/app/heroes-list/heroes-list.component.ts"),
  ["adev/src/content/examples/router-tutorial/src/app/crisis-list/crisis-list.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-L357OLUB.js").then((c) => c.CrisisListComponent), "adev/src/content/examples/router-tutorial/src/app/crisis-list/crisis-list.component.ts"),
  ["adev/src/content/examples/router-tutorial/src/app/page-not-found/page-not-found.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-JB76TTR7.js").then((c) => c.PageNotFoundComponent), "adev/src/content/examples/router-tutorial/src/app/page-not-found/page-not-found.component.ts"),
  ["adev/src/content/examples/forms/src/app/actor-form/actor-form.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-VEVTMKVR.js").then((c) => c.ActorFormComponent), "adev/src/content/examples/forms/src/app/actor-form/actor-form.component.ts"),
  ["adev/src/content/examples/forms-overview/src/app/template/favorite-color/favorite-color.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-E5CL4ZWG.js").then((c) => c.FavoriteColorTemplateComponent), "adev/src/content/examples/forms-overview/src/app/template/favorite-color/favorite-color.component.ts"),
  ["adev/src/content/examples/forms-overview/src/app/reactive/favorite-color/favorite-color.component.ts"]: /* @__PURE__ */ __name(() => import("./chunk-6GSHZHEC.js").then((c) => c.FavoriteColorReactiveComponent), "adev/src/content/examples/forms-overview/src/app/reactive/favorite-color/favorite-color.component.ts")
};

// src/app/core/services/analytics/analytics-format-error.ts
function formatErrorEventForAnalytics(event) {
  const { message, filename, colno, lineno, error } = event;
  if (error instanceof Error) {
    return formatErrorForAnalytics(error);
  }
  return `${stripErrorMessagePrefix(message)}
${filename}:${lineno || "?"}:${colno || "?"}`;
}
__name(formatErrorEventForAnalytics, "formatErrorEventForAnalytics");
function formatErrorForAnalytics(error) {
  let stack = "<no-stack>";
  if (error.stack) {
    stack = stripErrorMessagePrefix(error.stack).replace(error.message + "\n", "").replace(/^ +/gm, "").replace(/^at /gm, "").replace(/(?: \(|@)http.+\/([^/)]+)\)?(?:\n|$)/gm, "@$1\n").replace(/ *\(eval code(:\d+:\d+)\)(?:\n|$)/gm, "@???$1\n");
  }
  return `${error.message}
${stack}`;
}
__name(formatErrorForAnalytics, "formatErrorForAnalytics");
function stripErrorMessagePrefix(input) {
  return input.replace(/^(Uncaught )?Error: /, "");
}
__name(stripErrorMessagePrefix, "stripErrorMessagePrefix");

// src/app/core/services/analytics/analytics.service.ts
var _AnalyticsService = class _AnalyticsService {
  environment = inject(ENVIRONMENT);
  window = inject(WINDOW);
  localStorage = inject(LOCAL_STORAGE);
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  constructor() {
    if (this.isBrowser) {
      this._installGlobalSiteTag();
      this._installWindowErrorHandler();
    }
  }
  reportError(description, fatal = true) {
    description = description.substring(0, 150);
    this._gtag("event", "exception", { description, fatal });
  }
  sendEvent(name, parameters) {
    this._gtag("event", name, parameters);
  }
  _gtag(...args) {
    if (this.window.gtag) {
      this.window.gtag(...args);
    }
  }
  _installGlobalSiteTag() {
    const window2 = this.window;
    const url = `https://www.googletagmanager.com/gtag/js?id=${this.environment.googleAnalyticsId}`;
    window2.dataLayer = this.window.dataLayer || [];
    window2.gtag = function() {
      window2.dataLayer?.push(arguments);
    };
    if (this.localStorage) {
      if (this.localStorage.getItem(STORAGE_KEY) === "true") {
        setCookieConsent("granted");
      } else {
        setCookieConsent("denied");
      }
    } else {
      setCookieConsent("denied");
    }
    window2.gtag("js", /* @__PURE__ */ new Date());
    window2.gtag("config", this.environment.googleAnalyticsId);
    if (window2.document.querySelector("#gtag-script") === null) {
      const el = window2.document.createElement("script");
      el.async = true;
      el.src = url;
      el.id = "gtag-script";
      window2.document.head.appendChild(el);
    }
  }
  _installWindowErrorHandler() {
    this.window.addEventListener("error", (event) => this.reportError(formatErrorEventForAnalytics(event), true));
  }
};
__name(_AnalyticsService, "AnalyticsService");
__publicField(_AnalyticsService, "ɵfac", /* @__PURE__ */ __name(function AnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnalyticsService)();
}, "AnalyticsService_Factory"));
__publicField(_AnalyticsService, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.ɵfac, providedIn: "root" }));
var AnalyticsService = _AnalyticsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/core/services/content-loader.service.ts
var _ContentLoader = class _ContentLoader {
  cache = /* @__PURE__ */ new Map();
  httpClient = inject(HttpClient);
  async getContent(path) {
    if (!path.match(/\.\w+$/)) {
      path += ".md.html";
    }
    try {
      let promise = this.cache.get(path);
      if (!promise) {
        promise = firstValueFrom(this.httpClient.get(`assets/content/${path}`, {
          responseType: "text"
        }).pipe(map((contents) => ({ contents, id: path }))));
        this.cache.set(path, promise);
      }
      return await promise;
    } catch (e) {
      const errorResponse = e;
      if (!(e instanceof HttpErrorResponse) || errorResponse.status !== 404) {
        this.cache.delete(path);
      }
      throw e;
    }
  }
};
__name(_ContentLoader, "ContentLoader");
__publicField(_ContentLoader, "ɵfac", /* @__PURE__ */ __name(function ContentLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContentLoader)();
}, "ContentLoader_Factory"));
__publicField(_ContentLoader, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({ token: _ContentLoader, factory: _ContentLoader.ɵfac }));
var ContentLoader = _ContentLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentLoader, [{
    type: Injectable
  }], null, null);
})();

// src/app/core/services/errors-handling/error-handler.ts
var _CustomErrorHandler = class _CustomErrorHandler {
  snackBar = inject(MatSnackBar);
  document = inject(DOCUMENT);
  isServer = isPlatformServer(inject(PLATFORM_ID));
  analyticsService = inject(AnalyticsService);
  get isOnline() {
    if (this.isServer)
      return false;
    const win = this.document.defaultView;
    return win?.navigator.onLine ?? true;
  }
  handleError(error) {
    if (typeof error.message === "string") {
      const firstLine = error.message.split("\n")[0];
      if (this.isOnline && firstLine?.match(/chunk-(.*?)\.js/)) {
        this.openErrorSnackBar();
        this.analyticsService.reportError("Chunk loading error");
      }
    }
    console.error(error);
  }
  openErrorSnackBar() {
    this.snackBar.openFromComponent(ErrorSnackBar, {
      panelClass: "docs-invert-mode",
      data: {
        message: `我們的文件已更新，請重新整理頁面以檢視最新內容。`,
        actionText: `重新載入`
      }
    }).onAction().subscribe(() => {
      this.document.location.reload();
    });
  }
};
__name(_CustomErrorHandler, "CustomErrorHandler");
var CustomErrorHandler = _CustomErrorHandler;

// src/app/core/services/example-content-loader.service.ts
var _ExampleContentLoader = class _ExampleContentLoader {
  previewsComponents = inject(PREVIEWS_COMPONENTS);
  loadPreview(id) {
    return this.previewsComponents[id]();
  }
};
__name(_ExampleContentLoader, "ExampleContentLoader");
__publicField(_ExampleContentLoader, "ɵfac", /* @__PURE__ */ __name(function ExampleContentLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleContentLoader)();
}, "ExampleContentLoader_Factory"));
__publicField(_ExampleContentLoader, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({ token: _ExampleContentLoader, factory: _ExampleContentLoader.ɵfac }));
var ExampleContentLoader = _ExampleContentLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleContentLoader, [{
    type: Injectable
  }], null, null);
})();

// src/assets/tutorials/first-app/routes.json
var routes_default = { path: "tutorials/first-app", label: "Your first Angular app", contentPath: "tutorials/first-app/intro/README", tutorialData: { step: 0, title: "Your first Angular app", type: "editor", nextStep: "tutorials/first-app/01-hello-world", restrictedMode: true }, children: [{ label: "Hello world!", path: "tutorials/first-app/01-hello-world", contentPath: "tutorials/first-app/steps/01-hello-world/README", tutorialData: { title: "Hello world!", type: "editor", step: 1, restrictedMode: true, nextStep: "tutorials/first-app/02-Home" } }, { label: "Create home component", path: "tutorials/first-app/02-Home", contentPath: "tutorials/first-app/steps/02-Home/README", tutorialData: { title: "Create home component", type: "editor", step: 2, restrictedMode: true, previousStep: "tutorials/first-app/01-hello-world", nextStep: "tutorials/first-app/03-HousingLocation" } }, { label: "Create housing location component", path: "tutorials/first-app/03-HousingLocation", contentPath: "tutorials/first-app/steps/03-HousingLocation/README", tutorialData: { title: "Create housing location component", type: "editor", step: 3, restrictedMode: true, previousStep: "tutorials/first-app/02-Home", nextStep: "tutorials/first-app/04-interfaces" } }, { label: "Create an interface", path: "tutorials/first-app/04-interfaces", contentPath: "tutorials/first-app/steps/04-interfaces/README", tutorialData: { title: "Create an interface", type: "editor", step: 4, restrictedMode: true, previousStep: "tutorials/first-app/03-HousingLocation", nextStep: "tutorials/first-app/05-inputs" } }, { label: "Add inputs to components", path: "tutorials/first-app/05-inputs", contentPath: "tutorials/first-app/steps/05-inputs/README", tutorialData: { title: "Add inputs to components", type: "editor", step: 5, restrictedMode: true, previousStep: "tutorials/first-app/04-interfaces", nextStep: "tutorials/first-app/06-property-binding" } }, { label: "Add property binding to components", path: "tutorials/first-app/06-property-binding", contentPath: "tutorials/first-app/steps/06-property-binding/README", tutorialData: { title: "Add property binding to components", type: "editor", step: 6, restrictedMode: true, previousStep: "tutorials/first-app/05-inputs", nextStep: "tutorials/first-app/07-dynamic-template-values" } }, { label: "Add dynamic values to templates", path: "tutorials/first-app/07-dynamic-template-values", contentPath: "tutorials/first-app/steps/07-dynamic-template-values/README", tutorialData: { title: "Add dynamic values to templates", type: "editor", step: 7, restrictedMode: true, previousStep: "tutorials/first-app/06-property-binding", nextStep: "tutorials/first-app/08-ngFor" } }, { label: "Use the `@for` block in templates", path: "tutorials/first-app/08-ngFor", contentPath: "tutorials/first-app/steps/08-ngFor/README", tutorialData: { title: "Use the `@for` block in templates", type: "editor", step: 8, restrictedMode: true, previousStep: "tutorials/first-app/07-dynamic-template-values", nextStep: "tutorials/first-app/09-services" } }, { label: "Angular services", path: "tutorials/first-app/09-services", contentPath: "tutorials/first-app/steps/09-services/README", tutorialData: { title: "Angular services", type: "editor", step: 9, restrictedMode: true, previousStep: "tutorials/first-app/08-ngFor", nextStep: "tutorials/first-app/10-routing" } }, { label: "Add routing", path: "tutorials/first-app/10-routing", contentPath: "tutorials/first-app/steps/10-routing/README", tutorialData: { title: "Add routing", type: "local", step: 10, restrictedMode: true, previousStep: "tutorials/first-app/09-services", nextStep: "tutorials/first-app/11-details-page" } }, { label: "Customize the details page", path: "tutorials/first-app/11-details-page", contentPath: "tutorials/first-app/steps/11-details-page/README", tutorialData: { title: "Customize the details page", type: "local", step: 11, restrictedMode: true, previousStep: "tutorials/first-app/10-routing", nextStep: "tutorials/first-app/12-forms" } }, { label: "Integrate Angular forms", path: "tutorials/first-app/12-forms", contentPath: "tutorials/first-app/steps/12-forms/README", tutorialData: { title: "Integrate Angular forms", type: "local", step: 12, restrictedMode: true, previousStep: "tutorials/first-app/11-details-page", nextStep: "tutorials/first-app/13-search" } }, { label: "Add search functionality", path: "tutorials/first-app/13-search", contentPath: "tutorials/first-app/steps/13-search/README", tutorialData: { title: "Add search functionality", type: "local", step: 13, restrictedMode: true, previousStep: "tutorials/first-app/12-forms", nextStep: "tutorials/first-app/14-http" } }, { label: "Add HTTP communication", path: "tutorials/first-app/14-http", contentPath: "tutorials/first-app/steps/14-http/README", tutorialData: { title: "Add HTTP communication", type: "local", step: 14, restrictedMode: true, previousStep: "tutorials/first-app/13-search" } }] };

// src/assets/tutorials/learn-angular/routes.json
var routes_default2 = { path: "tutorials/learn-angular", label: "學習 Angular", contentPath: "tutorials/learn-angular/intro/README", tutorialData: { step: 0, title: "學習 Angular", type: "editor", nextStep: "tutorials/learn-angular/1-components-in-angular", restrictedMode: true }, children: [{ label: "元件的結構", path: "tutorials/learn-angular/1-components-in-angular", contentPath: "tutorials/learn-angular/steps/1-components-in-angular/README", tutorialData: { title: "元件的結構", type: "editor", step: 1, restrictedMode: true, nextStep: "tutorials/learn-angular/2-updating-the-component-class" } }, { label: "更新元件", path: "tutorials/learn-angular/2-updating-the-component-class", contentPath: "tutorials/learn-angular/steps/2-updating-the-component-class/README", tutorialData: { title: "更新元件", type: "editor", step: 2, restrictedMode: true, previousStep: "tutorials/learn-angular/1-components-in-angular", nextStep: "tutorials/learn-angular/3-composing-components" } }, { label: "元件組合", path: "tutorials/learn-angular/3-composing-components", contentPath: "tutorials/learn-angular/steps/3-composing-components/README", tutorialData: { title: "元件組合", type: "editor", step: 3, restrictedMode: true, previousStep: "tutorials/learn-angular/2-updating-the-component-class", nextStep: "tutorials/learn-angular/4-control-flow-if" } }, { label: "元件中的控制流 - @if", path: "tutorials/learn-angular/4-control-flow-if", contentPath: "tutorials/learn-angular/steps/4-control-flow-if/README", tutorialData: { title: "元件中的控制流 - @if", type: "editor", step: 4, restrictedMode: true, previousStep: "tutorials/learn-angular/3-composing-components", nextStep: "tutorials/learn-angular/5-control-flow-for" } }, { label: "控制流 - @for", path: "tutorials/learn-angular/5-control-flow-for", contentPath: "tutorials/learn-angular/steps/5-control-flow-for/README", tutorialData: { title: "控制流 - @for", type: "editor", step: 5, restrictedMode: true, previousStep: "tutorials/learn-angular/4-control-flow-if", nextStep: "tutorials/learn-angular/6-property-binding" } }, { label: "屬性繫結", path: "tutorials/learn-angular/6-property-binding", contentPath: "tutorials/learn-angular/steps/6-property-binding/README", tutorialData: { title: "屬性繫結", type: "editor", step: 6, restrictedMode: true, previousStep: "tutorials/learn-angular/5-control-flow-for", nextStep: "tutorials/learn-angular/7-event-handling" } }, { label: "事件處理", path: "tutorials/learn-angular/7-event-handling", contentPath: "tutorials/learn-angular/steps/7-event-handling/README", tutorialData: { title: "事件處理", type: "editor", step: 7, restrictedMode: true, previousStep: "tutorials/learn-angular/6-property-binding", nextStep: "tutorials/learn-angular/8-input" } }, { label: "元件的輸入屬性", path: "tutorials/learn-angular/8-input", contentPath: "tutorials/learn-angular/steps/8-input/README", tutorialData: { title: "元件的輸入屬性", type: "editor", step: 8, restrictedMode: true, previousStep: "tutorials/learn-angular/7-event-handling", nextStep: "tutorials/learn-angular/9-output" } }, { label: "元件的輸出屬性", path: "tutorials/learn-angular/9-output", contentPath: "tutorials/learn-angular/steps/9-output/README", tutorialData: { title: "元件的輸出屬性", type: "editor", step: 9, restrictedMode: true, previousStep: "tutorials/learn-angular/8-input", nextStep: "tutorials/learn-angular/10-deferrable-views" } }, { label: "可延遲檢視", path: "tutorials/learn-angular/10-deferrable-views", contentPath: "tutorials/learn-angular/steps/10-deferrable-views/README", tutorialData: { title: "可延遲檢視", type: "editor", step: 10, restrictedMode: true, previousStep: "tutorials/learn-angular/9-output", nextStep: "tutorials/learn-angular/11-optimizing-images" } }, { label: "最佳化圖片", path: "tutorials/learn-angular/11-optimizing-images", contentPath: "tutorials/learn-angular/steps/11-optimizing-images/README", tutorialData: { title: "最佳化圖片", type: "editor", step: 11, restrictedMode: true, previousStep: "tutorials/learn-angular/10-deferrable-views", nextStep: "tutorials/learn-angular/12-enable-routing" } }, { label: "啟用路由", path: "tutorials/learn-angular/12-enable-routing", contentPath: "tutorials/learn-angular/steps/12-enable-routing/README", tutorialData: { title: "啟用路由", type: "editor", step: 12, restrictedMode: true, previousStep: "tutorials/learn-angular/11-optimizing-images", nextStep: "tutorials/learn-angular/13-define-a-route" } }, { label: "定義路由", path: "tutorials/learn-angular/13-define-a-route", contentPath: "tutorials/learn-angular/steps/13-define-a-route/README", tutorialData: { title: "定義路由", type: "editor", step: 13, restrictedMode: true, previousStep: "tutorials/learn-angular/12-enable-routing", nextStep: "tutorials/learn-angular/14-routerLink" } }, { label: "使用 RouterLink 連結到路由", path: "tutorials/learn-angular/14-routerLink", contentPath: "tutorials/learn-angular/steps/14-routerLink/README", tutorialData: { title: "使用 RouterLink 連結到路由", type: "editor", step: 14, restrictedMode: true, previousStep: "tutorials/learn-angular/13-define-a-route", nextStep: "tutorials/learn-angular/15-forms" } }, { label: "表單", path: "tutorials/learn-angular/15-forms", contentPath: "tutorials/learn-angular/steps/15-forms/README", tutorialData: { title: "表單", type: "editor", step: 15, restrictedMode: true, previousStep: "tutorials/learn-angular/14-routerLink", nextStep: "tutorials/learn-angular/16-form-control-values" } }, { label: "獲取表單控制元件值", path: "tutorials/learn-angular/16-form-control-values", contentPath: "tutorials/learn-angular/steps/16-form-control-values/README", tutorialData: { title: "獲取表單控制元件值", type: "editor", step: 16, restrictedMode: true, previousStep: "tutorials/learn-angular/15-forms", nextStep: "tutorials/learn-angular/17-reactive-forms" } }, { label: "回應式表單", path: "tutorials/learn-angular/17-reactive-forms", contentPath: "tutorials/learn-angular/steps/17-reactive-forms/README", tutorialData: { title: "回應式表單", type: "editor", step: 17, restrictedMode: true, previousStep: "tutorials/learn-angular/16-form-control-values", nextStep: "tutorials/learn-angular/18-forms-validation" } }, { label: "表單驗證", path: "tutorials/learn-angular/18-forms-validation", contentPath: "tutorials/learn-angular/steps/18-forms-validation/README", tutorialData: { title: "表單驗證", type: "editor", step: 18, restrictedMode: true, previousStep: "tutorials/learn-angular/17-reactive-forms", nextStep: "tutorials/learn-angular/19-creating-an-injectable-service" } }, { label: "建立可注入服務", path: "tutorials/learn-angular/19-creating-an-injectable-service", contentPath: "tutorials/learn-angular/steps/19-creating-an-injectable-service/README", tutorialData: { title: "建立可注入服務", type: "editor", step: 19, restrictedMode: true, previousStep: "tutorials/learn-angular/18-forms-validation", nextStep: "tutorials/learn-angular/20-inject-based-di" } }, { label: "注入依賴", path: "tutorials/learn-angular/20-inject-based-di", contentPath: "tutorials/learn-angular/steps/20-inject-based-di/README", tutorialData: { title: "注入依賴", type: "editor", step: 20, restrictedMode: true, previousStep: "tutorials/learn-angular/19-creating-an-injectable-service", nextStep: "tutorials/learn-angular/22-pipes" } }, { label: "通道", path: "tutorials/learn-angular/22-pipes", contentPath: "tutorials/learn-angular/steps/22-pipes/README", tutorialData: { title: "通道", type: "editor", step: 21, restrictedMode: true, previousStep: "tutorials/learn-angular/20-inject-based-di", nextStep: "tutorials/learn-angular/23-pipes-format-data" } }, { label: "使用通道格式化資料", path: "tutorials/learn-angular/23-pipes-format-data", contentPath: "tutorials/learn-angular/steps/23-pipes-format-data/README", tutorialData: { title: "使用通道格式化資料", type: "editor", step: 22, restrictedMode: true, previousStep: "tutorials/learn-angular/22-pipes", nextStep: "tutorials/learn-angular/24-create-a-pipe" } }, { label: "建立通道", path: "tutorials/learn-angular/24-create-a-pipe", contentPath: "tutorials/learn-angular/steps/24-create-a-pipe/README", tutorialData: { title: "建立通道", type: "editor", step: 23, restrictedMode: true, previousStep: "tutorials/learn-angular/23-pipes-format-data", nextStep: "tutorials/learn-angular/25-next-steps" } }, { label: "下一步", path: "tutorials/learn-angular/25-next-steps", contentPath: "tutorials/learn-angular/steps/25-next-steps/README", tutorialData: { title: "下一步", step: 24, restrictedMode: true, previousStep: "tutorials/learn-angular/24-create-a-pipe" } }] };

// src/assets/tutorials/deferrable-views/routes.json
var routes_default3 = { path: "tutorials/deferrable-views", label: "Deferrable Views", contentPath: "tutorials/deferrable-views/intro/README", tutorialData: { step: 0, title: "Deferrable Views", type: "editor", nextStep: "tutorials/deferrable-views/1-what-are-deferrable-views", restrictedMode: true }, children: [{ label: "What are deferrable views", path: "tutorials/deferrable-views/1-what-are-deferrable-views", contentPath: "tutorials/deferrable-views/steps/1-what-are-deferrable-views/README", tutorialData: { title: "What are deferrable views", type: "editor", step: 1, restrictedMode: true, nextStep: "tutorials/deferrable-views/2-loading-error-placeholder" } }, { label: "@loading, @error and @placeholder blocks", path: "tutorials/deferrable-views/2-loading-error-placeholder", contentPath: "tutorials/deferrable-views/steps/2-loading-error-placeholder/README", tutorialData: { title: "@loading, @error and @placeholder blocks", type: "editor", step: 2, restrictedMode: true, previousStep: "tutorials/deferrable-views/1-what-are-deferrable-views", nextStep: "tutorials/deferrable-views/3-defer-triggers" } }, { label: "Defer triggers", path: "tutorials/deferrable-views/3-defer-triggers", contentPath: "tutorials/deferrable-views/steps/3-defer-triggers/README", tutorialData: { title: "Defer triggers", type: "editor", step: 3, restrictedMode: true, previousStep: "tutorials/deferrable-views/2-loading-error-placeholder" } }] };

// src/assets/tutorials/signals/routes.json
var routes_default4 = { path: "tutorials/signals", label: "Learn Angular signals", contentPath: "tutorials/signals/intro/README", tutorialData: { step: 0, title: "Learn Angular signals", type: "editor", nextStep: "tutorials/signals/1-creating-your-first-signal", restrictedMode: true }, children: [{ label: "Creating and updating your first signal", path: "tutorials/signals/1-creating-your-first-signal", contentPath: "tutorials/signals/steps/1-creating-your-first-signal/README", tutorialData: { title: "Creating and updating your first signal", type: "editor", step: 1, restrictedMode: true, nextStep: "tutorials/signals/2-deriving-state-with-computed-signals" } }, { label: "Deriving state with computed signals", path: "tutorials/signals/2-deriving-state-with-computed-signals", contentPath: "tutorials/signals/steps/2-deriving-state-with-computed-signals/README", tutorialData: { title: "Deriving state with computed signals", type: "editor", step: 2, restrictedMode: true, previousStep: "tutorials/signals/1-creating-your-first-signal", nextStep: "tutorials/signals/3-deriving-state-with-linked-signals" } }, { label: "Deriving state with linked signals", path: "tutorials/signals/3-deriving-state-with-linked-signals", contentPath: "tutorials/signals/steps/3-deriving-state-with-linked-signals/README", tutorialData: { title: "Deriving state with linked signals", type: "editor", step: 3, restrictedMode: true, previousStep: "tutorials/signals/2-deriving-state-with-computed-signals", nextStep: "tutorials/signals/4-managing-async-data-with-signals" } }, { label: "Managing async data with signals using the Resources API", path: "tutorials/signals/4-managing-async-data-with-signals", contentPath: "tutorials/signals/steps/4-managing-async-data-with-signals/README", tutorialData: { title: "Managing async data with signals using the Resources API", type: "editor", step: 4, restrictedMode: true, previousStep: "tutorials/signals/3-deriving-state-with-linked-signals", nextStep: "tutorials/signals/5-component-communication-with-signals" } }, { label: "Passing data to components with input signals", path: "tutorials/signals/5-component-communication-with-signals", contentPath: "tutorials/signals/steps/5-component-communication-with-signals/README", tutorialData: { title: "Passing data to components with input signals", type: "editor", step: 5, restrictedMode: true, previousStep: "tutorials/signals/4-managing-async-data-with-signals", nextStep: "tutorials/signals/6-two-way-binding-with-model-signals" } }, { label: "Two-way binding with model signals", path: "tutorials/signals/6-two-way-binding-with-model-signals", contentPath: "tutorials/signals/steps/6-two-way-binding-with-model-signals/README", tutorialData: { title: "Two-way binding with model signals", type: "editor", step: 6, restrictedMode: true, previousStep: "tutorials/signals/5-component-communication-with-signals", nextStep: "tutorials/signals/7-using-signals-with-services" } }, { label: "Using signals with services", path: "tutorials/signals/7-using-signals-with-services", contentPath: "tutorials/signals/steps/7-using-signals-with-services/README", tutorialData: { title: "Using signals with services", type: "editor", step: 7, restrictedMode: true, previousStep: "tutorials/signals/6-two-way-binding-with-model-signals", nextStep: "tutorials/signals/8-using-signals-with-directives" } }, { label: "Using signals with directives", path: "tutorials/signals/8-using-signals-with-directives", contentPath: "tutorials/signals/steps/8-using-signals-with-directives/README", tutorialData: { title: "Using signals with directives", type: "editor", step: 8, restrictedMode: true, previousStep: "tutorials/signals/7-using-signals-with-services", nextStep: "tutorials/signals/9-query-child-elements-with-signal-queries" } }, { label: "Query child elements with signal queries", path: "tutorials/signals/9-query-child-elements-with-signal-queries", contentPath: "tutorials/signals/steps/9-query-child-elements-with-signal-queries/README", tutorialData: { title: "Query child elements with signal queries", type: "editor", step: 9, restrictedMode: true, previousStep: "tutorials/signals/8-using-signals-with-directives", nextStep: "tutorials/signals/10-reacting-to-signal-changes-with-effect" } }, { label: "Reacting to signal changes with effects", path: "tutorials/signals/10-reacting-to-signal-changes-with-effect", contentPath: "tutorials/signals/steps/10-reacting-to-signal-changes-with-effect/README", tutorialData: { title: "Reacting to signal changes with effects", type: "editor", step: 10, restrictedMode: true, previousStep: "tutorials/signals/9-query-child-elements-with-signal-queries", nextStep: "tutorials/signals/11-next-steps" } }, { label: "Next steps", path: "tutorials/signals/11-next-steps", contentPath: "tutorials/signals/steps/11-next-steps/README", tutorialData: { title: "Next steps", step: 11, restrictedMode: true, previousStep: "tutorials/signals/10-reacting-to-signal-changes-with-effect" } }] };

// src/assets/content/reference/errors/routes.json
var routes_default5 = [{ label: "NG0100: Expression Changed After Checked", path: "errors/NG0100", contentPath: "reference/errors/NG0100" }, { label: "NG01101: Wrong Async Validator Return Type", path: "errors/NG01101", contentPath: "reference/errors/NG01101" }, { label: "NG01203: Missing value accessor", path: "errors/NG01203", contentPath: "reference/errors/NG01203" }, { label: "NG0200: Circular Dependency in DI", path: "errors/NG0200", contentPath: "reference/errors/NG0200" }, { label: "NG0201: No Provider Found", path: "errors/NG0201", contentPath: "reference/errors/NG0201" }, { label: "NG0203: `inject()` must be called from an injection context", path: "errors/NG0203", contentPath: "reference/errors/NG0203" }, { label: "NG0209: Invalid multi provider", path: "errors/NG0209", contentPath: "reference/errors/NG0209" }, { label: "NG02200: Missing Iterable Differ", path: "errors/NG02200", contentPath: "reference/errors/NG02200" }, { label: "NG02800: JSONP support in HttpClient configuration", path: "errors/NG02800", contentPath: "reference/errors/NG02800" }, { label: "NG0300: Selector Collision", path: "errors/NG0300", contentPath: "reference/errors/NG0300" }, { label: "NG0301: Export Not Found", path: "errors/NG0301", contentPath: "reference/errors/NG0301" }, { label: "NG0302: Pipe Not Found", path: "errors/NG0302", contentPath: "reference/errors/NG0302" }, { label: "NG0403: Bootstrapped NgModule doesn't specify which component to initialize", path: "errors/NG0403", contentPath: "reference/errors/NG0403" }, { label: "NG0500: Hydration Node Mismatch", path: "errors/NG0500", contentPath: "reference/errors/NG0500" }, { label: "NG05000: Hydration with unsupported Zone.js instance", path: "errors/NG05000", contentPath: "reference/errors/NG05000" }, { label: "NG0501: Hydration Missing Siblings", path: "errors/NG0501", contentPath: "reference/errors/NG0501" }, { label: "NG0502: Hydration Missing Node", path: "errors/NG0502", contentPath: "reference/errors/NG0502" }, { label: "NG0503: Hydration Unsupported Projection of DOM Nodes", path: "errors/NG0503", contentPath: "reference/errors/NG0503" }, { label: "NG0504: Skip hydration flag is applied to an invalid node", path: "errors/NG0504", contentPath: "reference/errors/NG0504" }, { label: "NG0505: No hydration info in server response", path: "errors/NG0505", contentPath: "reference/errors/NG0505" }, { label: "NG0506: Application remains unstable", path: "errors/NG0506", contentPath: "reference/errors/NG0506" }, { label: "NG0507: HTML content was altered after server-side rendering", path: "errors/NG0507", contentPath: "reference/errors/NG0507" }, { label: "NG05104: Root element was not found", path: "errors/NG05104", contentPath: "reference/errors/NG05104" }, { label: "NG0602: Disallowed function call inside reactive context", path: "errors/NG0602", contentPath: "reference/errors/NG0602" }, { label: "NG0750: @defer dependencies failed to load", path: "errors/NG0750", contentPath: "reference/errors/NG0750" }, { label: "NG0751: @defer behavior when HMR is enabled", path: "errors/NG0751", contentPath: "reference/errors/NG0751" }, { label: "NG0910: Unsafe bindings on an iframe element", path: "errors/NG0910", contentPath: "reference/errors/NG0910" }, { label: "NG0912: Component ID generation collision", path: "errors/NG0912", contentPath: "reference/errors/NG0912" }, { label: "NG0913: Runtime Performance Warnings", path: "errors/NG0913", contentPath: "reference/errors/NG0913" }, { label: "NG0950: Required input is accessed before a value is set.", path: "errors/NG0950", contentPath: "reference/errors/NG0950" }, { label: "NG0951: Child query result is required but no value is available.", path: "errors/NG0951", contentPath: "reference/errors/NG0951" }, { label: "NG0955: Track expression resulted in duplicated keys for a given collection.", path: "errors/NG0955", contentPath: "reference/errors/NG0955" }, { label: "NG0956: Tracking expression caused re-creation of the DOM structure.", path: "errors/NG0956", contentPath: "reference/errors/NG0956" }, { label: "NG1001: Argument Not Literal", path: "errors/NG1001", contentPath: "reference/errors/NG1001" }, { label: "NG2003: Missing Token", path: "errors/NG2003", contentPath: "reference/errors/NG2003" }, { label: "NG2009: Invalid Shadow DOM selector", path: "errors/NG2009", contentPath: "reference/errors/NG2009" }, { label: "NG3003: Import Cycle Detected", path: "errors/NG3003", contentPath: "reference/errors/NG3003" }, { label: "NG6100: NgModule.id Set to module.id anti-pattern", path: "errors/NG6100", contentPath: "reference/errors/NG6100" }, { label: "NG8001: Invalid Element", path: "errors/NG8001", contentPath: "reference/errors/NG8001" }, { label: "NG8002: Invalid Attribute", path: "errors/NG8002", contentPath: "reference/errors/NG8002" }, { label: "NG8003: Missing Reference Target", path: "errors/NG8003", contentPath: "reference/errors/NG8003" }];

// src/assets/content/reference/extended-diagnostics/routes.json
var routes_default6 = [{ label: "NG8101: Invalid Banana-in-Box", path: "extended-diagnostics/NG8101", contentPath: "reference/extended-diagnostics/NG8101" }, { label: "NG8102: Nullish coalescing not nullable", path: "extended-diagnostics/NG8102", contentPath: "reference/extended-diagnostics/NG8102" }, { label: "NG8103: Missing control flow directive", path: "extended-diagnostics/NG8103", contentPath: "reference/extended-diagnostics/NG8103" }, { label: "NG8104: Text attribute not binding", path: "extended-diagnostics/NG8104", contentPath: "reference/extended-diagnostics/NG8104" }, { label: "NG8105: Missing `let` keyword in an `*ngFor` expression", path: "extended-diagnostics/NG8105", contentPath: "reference/extended-diagnostics/NG8105" }, { label: "NG8106: Suffix not supported", path: "extended-diagnostics/NG8106", contentPath: "reference/extended-diagnostics/NG8106" }, { label: "NG8107: Optional chain not nullable", path: "extended-diagnostics/NG8107", contentPath: "reference/extended-diagnostics/NG8107" }, { label: "NG8108: `ngSkipHydration` should be a static attribute", path: "extended-diagnostics/NG8108", contentPath: "reference/extended-diagnostics/NG8108" }, { label: "NG8109: Signals must be invoked in template interpolations. ", path: "extended-diagnostics/NG8109", contentPath: "reference/extended-diagnostics/NG8109" }, { label: "NG8111: Functions should be invoked in event bindings. ", path: "extended-diagnostics/NG8111", contentPath: "reference/extended-diagnostics/NG8111" }, { label: "NG8113: Unused Standalone Imports", path: "extended-diagnostics/NG8113", contentPath: "reference/extended-diagnostics/NG8113" }, { label: "NG8114: Unparenthesized Nullish Coalescing", path: "extended-diagnostics/NG8114", contentPath: "reference/extended-diagnostics/NG8114" }, { label: "NG8115: Uninvoked Track Function", path: "extended-diagnostics/NG8115", contentPath: "reference/extended-diagnostics/NG8115" }, { label: "NG8116: Missing structural directive", path: "extended-diagnostics/NG8116", contentPath: "reference/extended-diagnostics/NG8116" }, { label: "NG8117: Functions should be invoked in text interpolation. ", path: "extended-diagnostics/NG8117", contentPath: "reference/extended-diagnostics/NG8117" }];

// src/app/sub-navigation-data.ts
var DOCS_SUB_NAVIGATION_DATA = [
  {
    label: "簡介",
    children: [
      {
        label: "什麼是 Angular？",
        path: "overview",
        contentPath: "introduction/what-is-angular"
      },
      {
        label: "安裝",
        path: "installation",
        contentPath: "introduction/installation"
      },
      {
        label: "基本要點",
        children: [
          {
            label: "概覽",
            path: "essentials",
            contentPath: "introduction/essentials/overview"
          },
          {
            label: "用元件搭建應用",
            path: "essentials/components",
            contentPath: "introduction/essentials/components"
          },
          {
            label: "使用 Signals 進行回應式程式設計",
            path: "essentials/signals",
            contentPath: "introduction/essentials/signals"
          },
          {
            label: "使用樣板編寫動態介面",
            path: "essentials/templates",
            contentPath: "introduction/essentials/templates"
          },
          {
            label: "使用依賴注入進行模組化設計",
            path: "essentials/dependency-injection",
            contentPath: "introduction/essentials/dependency-injection"
          },
          {
            label: "後續步驟",
            path: "essentials/next-steps",
            contentPath: "introduction/essentials/next-steps"
          }
        ]
      },
      {
        label: "開始編碼！\u{1F680}",
        path: "tutorials/learn-angular"
      }
    ]
  },
  {
    label: "深度指南",
    children: [
      {
        label: "訊號",
        children: [
          {
            label: "概覽",
            path: "guide/signals",
            contentPath: "guide/signals/overview"
          },
          {
            label: "使用 linkedSignal 管理狀態依賴",
            path: "guide/signals/linked-signal",
            contentPath: "guide/signals/linked-signal"
          },
          {
            label: "用 resources 處理非同步回應",
            path: "guide/signals/resource",
            contentPath: "guide/signals/resource"
          }
        ]
      },
      {
        label: "元件",
        children: [
          {
            label: "元件的剖析",
            path: "guide/components",
            contentPath: "guide/components/anatomy-of-components"
          },
          {
            label: "選擇器",
            path: "guide/components/selectors",
            contentPath: "guide/components/selectors"
          },
          {
            label: "指定樣式",
            path: "guide/components/styling",
            contentPath: "guide/components/styling"
          },
          {
            label: "透過輸入屬性接收資料",
            path: "guide/components/inputs",
            contentPath: "guide/components/inputs"
          },
          {
            label: "使用輸出屬性自定義事件",
            path: "guide/components/outputs",
            contentPath: "guide/components/outputs"
          },
          {
            label: "使用 ng-content 進行內容投影",
            path: "guide/components/content-projection",
            contentPath: "guide/components/content-projection"
          },
          {
            label: "宿主元素",
            path: "guide/components/host-elements",
            contentPath: "guide/components/host-elements"
          },
          {
            label: "生命週期",
            path: "guide/components/lifecycle",
            contentPath: "guide/components/lifecycle"
          },
          {
            label: "使用查詢引用元件的子元素",
            path: "guide/components/queries",
            contentPath: "guide/components/queries"
          },
          {
            label: "使用 DOM API",
            path: "guide/components/dom-apis",
            contentPath: "guide/components/dom-apis"
          },
          {
            label: "繼承",
            path: "guide/components/inheritance",
            contentPath: "guide/components/inheritance"
          },
          {
            label: "以程式設計方式渲染元件",
            path: "guide/components/programmatic-rendering",
            contentPath: "guide/components/programmatic-rendering"
          },
          {
            label: "高階設定",
            path: "guide/components/advanced-configuration",
            contentPath: "guide/components/advanced-configuration"
          },
          {
            label: "自定義元素",
            path: "guide/elements",
            contentPath: "guide/elements"
          }
        ]
      },
      {
        label: "樣板",
        children: [
          {
            label: "概覽",
            path: "guide/templates",
            contentPath: "guide/templates/overview"
          },
          {
            label: "繫結動態文字、屬性、Attribute",
            path: "guide/templates/binding",
            contentPath: "guide/templates/binding"
          },
          {
            label: "新增事件監聽器",
            path: "guide/templates/event-listeners",
            contentPath: "guide/templates/event-listeners"
          },
          {
            label: "雙向繫結",
            path: "guide/templates/two-way-binding",
            contentPath: "guide/templates/two-way-binding"
          },
          {
            label: "控制流",
            path: "guide/templates/control-flow",
            contentPath: "guide/templates/control-flow"
          },
          {
            label: "通道",
            path: "guide/templates/pipes",
            contentPath: "guide/templates/pipes"
          },
          {
            label: "使用 ng-content 實現子內容插槽（slot）",
            path: "guide/templates/ng-content",
            contentPath: "guide/templates/ng-content"
          },
          {
            label: "使用 ng-template 建立樣板碎片",
            path: "guide/templates/ng-template",
            contentPath: "guide/templates/ng-template"
          },
          {
            label: "使用 ng-container 對元素進行分組",
            path: "guide/templates/ng-container",
            contentPath: "guide/templates/ng-container"
          },
          {
            label: "樣板中的變數",
            path: "guide/templates/variables",
            contentPath: "guide/templates/variables"
          },
          {
            label: "使用 @defer 進行延遲載入",
            path: "guide/templates/defer",
            contentPath: "guide/templates/defer"
          },
          {
            label: "表示式語法",
            path: "guide/templates/expression-syntax",
            contentPath: "guide/templates/expression-syntax"
          },
          {
            label: "樣板中的空白字元",
            path: "guide/templates/whitespace",
            contentPath: "guide/templates/whitespace"
          }
        ]
      },
      {
        label: "指令",
        children: [
          {
            label: "概覽",
            path: "guide/directives",
            contentPath: "guide/directives/overview"
          },
          {
            label: "屬性型指令",
            path: "guide/directives/attribute-directives",
            contentPath: "guide/directives/attribute-directives"
          },
          {
            label: "結構型指令",
            path: "guide/directives/structural-directives",
            contentPath: "guide/directives/structural-directives"
          },
          {
            label: "指令組合 API",
            path: "guide/directives/directive-composition-api",
            contentPath: "guide/directives/directive-composition-api"
          },
          {
            label: "用 NgOptimizedImage 最佳化圖片載入",
            path: "guide/image-optimization",
            contentPath: "guide/image-optimization"
          }
        ]
      },
      {
        label: "依賴注入",
        children: [
          {
            label: "概覽",
            path: "guide/di",
            contentPath: "guide/di/overview"
          },
          {
            label: "理解依賴注入",
            path: "guide/di/dependency-injection",
            contentPath: "guide/di/dependency-injection"
          },
          {
            label: "建立可注入服務",
            path: "guide/di/creating-injectable-service",
            contentPath: "guide/di/creating-injectable-service"
          },
          {
            label: "定義依賴提供者",
            path: "guide/di/dependency-injection-providers",
            contentPath: "guide/di/dependency-injection-providers"
          },
          {
            label: "注入上下文",
            path: "guide/di/dependency-injection-context",
            contentPath: "guide/di/dependency-injection-context"
          },
          {
            label: "分層注入器",
            path: "guide/di/hierarchical-dependency-injection",
            contentPath: "guide/di/hierarchical-dependency-injection"
          },
          {
            label: "最佳化注入令牌",
            path: "guide/di/lightweight-injection-tokens",
            contentPath: "guide/di/lightweight-injection-tokens"
          },
          {
            label: "DI 的實際應用",
            path: "guide/di/di-in-action",
            contentPath: "guide/di/di-in-action"
          }
        ]
      },
      {
        label: "路由",
        status: "updated",
        children: [
          {
            label: "概覽",
            path: "guide/routing",
            contentPath: "guide/routing/overview"
          },
          {
            label: "定義路由",
            path: "guide/routing/define-routes",
            contentPath: "guide/routing/define-routes"
          },
          {
            label: "以路由出口展示路由",
            path: "guide/routing/show-routes-with-outlets",
            contentPath: "guide/routing/show-routes-with-outlets"
          },
          {
            label: "導向到路由",
            path: "guide/routing/navigate-to-routes",
            contentPath: "guide/routing/navigate-to-routes"
          },
          {
            label: "讀取路由狀態",
            path: "guide/routing/read-route-state",
            contentPath: "guide/routing/read-route-state"
          },
          {
            label: "重導向路由",
            path: "guide/routing/redirecting-routes",
            contentPath: "guide/routing/redirecting-routes"
          },
          {
            label: "使用守衛控制路由訪問",
            path: "guide/routing/route-guards",
            contentPath: "guide/routing/route-guards"
          },
          {
            label: "路由資料解析器",
            path: "guide/routing/data-resolvers",
            contentPath: "guide/routing/data-resolvers"
          },
          {
            label: "生命週期與事件",
            path: "guide/routing/lifecycle-and-events",
            contentPath: "guide/routing/lifecycle-and-events"
          },
          {
            label: "測試路由與導向",
            path: "guide/routing/testing",
            contentPath: "guide/routing/testing",
            status: "new"
          },
          {
            label: "其他路由任務",
            path: "guide/routing/common-router-tasks",
            contentPath: "guide/routing/common-router-tasks"
          },
          {
            label: "建立自定義路由對應器",
            path: "guide/routing/routing-with-urlmatcher",
            contentPath: "guide/routing/routing-with-urlmatcher"
          },
          {
            label: "渲染策略",
            path: "guide/routing/rendering-strategies",
            contentPath: "guide/routing/rendering-strategies",
            status: "new"
          },
          {
            label: "自定義路由行為",
            path: "guide/routing/customizing-route-behavior",
            contentPath: "guide/routing/customizing-route-behavior",
            status: "new"
          },
          {
            label: "路由器參考手冊",
            path: "guide/routing/router-reference",
            contentPath: "guide/routing/router-reference"
          },
          {
            label: "路由轉換動畫",
            path: "guide/routing/route-transition-animations",
            contentPath: "guide/routing/route-transition-animations"
          }
        ]
      },
      {
        label: "表單",
        children: [
          {
            label: "概覽",
            path: "guide/forms",
            contentPath: "guide/forms/overview"
          },
          {
            label: "回應式表單",
            path: "guide/forms/reactive-forms",
            contentPath: "guide/forms/reactive-forms"
          },
          {
            label: "嚴格型別化的回應式表單",
            path: "guide/forms/typed-forms",
            contentPath: "guide/forms/typed-forms"
          },
          {
            label: "樣板驅動表單",
            path: "guide/forms/template-driven-forms",
            contentPath: "guide/forms/template-driven-forms"
          },
          {
            label: "驗證表單輸入",
            path: "guide/forms/form-validation",
            contentPath: "guide/forms/form-validation"
          },
          {
            label: "繫結動態表單",
            path: "guide/forms/dynamic-forms",
            contentPath: "guide/forms/dynamic-forms"
          }
        ]
      },
      {
        label: "HTTP 用戶端",
        children: [
          {
            label: "概覽",
            path: "guide/http",
            contentPath: "guide/http/overview"
          },
          {
            label: "設定 HttpClient",
            path: "guide/http/setup",
            contentPath: "guide/http/setup"
          },
          {
            label: "發起請求",
            path: "guide/http/making-requests",
            contentPath: "guide/http/making-requests"
          },
          {
            label: "Reactive data fetching with httpResource",
            path: "guide/http/http-resource",
            contentPath: "guide/http/http-resource"
          },
          {
            label: "攔截請求與回應",
            path: "guide/http/interceptors",
            contentPath: "guide/http/interceptors"
          },
          {
            label: "測試",
            path: "guide/http/testing",
            contentPath: "guide/http/testing"
          }
        ]
      },
      {
        label: "伺服器端渲染與混合渲染",
        children: [
          {
            label: "概覽",
            path: "guide/performance",
            contentPath: "guide/performance/overview"
          },
          {
            label: "伺服器端渲染與混合渲染",
            path: "guide/ssr",
            contentPath: "guide/ssr"
          },
          {
            label: "水合",
            path: "guide/hydration",
            contentPath: "guide/hydration"
          },
          {
            label: "增量水合",
            path: "guide/incremental-hydration",
            contentPath: "guide/incremental-hydration"
          }
        ]
      },
      {
        label: "測試",
        children: [
          {
            label: "概覽",
            path: "guide/testing",
            contentPath: "guide/testing/overview"
          },
          {
            label: "測試覆蓋率",
            path: "guide/testing/code-coverage",
            contentPath: "guide/testing/code-coverage"
          },
          {
            label: "測試服務",
            path: "guide/testing/services",
            contentPath: "guide/testing/services"
          },
          {
            label: "元件測試基礎",
            path: "guide/testing/components-basics",
            contentPath: "guide/testing/components-basics"
          },
          {
            label: "元件測試場景",
            path: "guide/testing/components-scenarios",
            contentPath: "guide/testing/components-scenarios"
          },
          {
            label: "測試屬性型指令",
            path: "guide/testing/attribute-directives",
            contentPath: "guide/testing/attribute-directives"
          },
          {
            label: "測試通道",
            path: "guide/testing/pipes",
            contentPath: "guide/testing/pipes"
          },
          {
            label: "Testing routing and navigation",
            path: "guide/routing/testing",
            contentPath: "guide/routing/testing",
            status: "new"
          },
          {
            label: "除錯測試程式碼",
            path: "guide/testing/debugging",
            contentPath: "guide/testing/debugging"
          },
          {
            label: "測試實用工具 API",
            path: "guide/testing/utility-apis",
            contentPath: "guide/testing/utility-apis"
          },
          {
            label: "Experimental unit testing integration",
            path: "guide/testing/unit-tests",
            contentPath: "guide/testing/experimental-unit-test"
          },
          {
            label: "元件測試工具概覽",
            path: "guide/testing/component-harnesses-overview",
            contentPath: "guide/testing/component-harnesses-overview"
          },
          {
            label: "在測試中使用元件測試工具",
            path: "guide/testing/using-component-harnesses",
            contentPath: "guide/testing/using-component-harnesses"
          },
          {
            label: "為你的元件建立元件測試工具",
            path: "guide/testing/creating-component-harnesses",
            contentPath: "guide/testing/creating-component-harnesses"
          },
          {
            label: "為其他測試環境新增元件測試工具的支援",
            path: "guide/testing/component-harnesses-testing-environments",
            contentPath: "guide/testing/component-harnesses-testing-environments"
          }
        ]
      },
      {
        label: "國際化",
        children: [
          {
            label: "概覽",
            path: "guide/i18n",
            contentPath: "guide/i18n/overview"
          },
          {
            label: "新增 localize 套件",
            path: "guide/i18n/add-package",
            contentPath: "guide/i18n/add-package"
          },
          {
            label: "透過 ID 引用語言環境",
            path: "guide/i18n/locale-id",
            contentPath: "guide/i18n/locale-id"
          },
          {
            label: "基於語言環境格式化資料",
            path: "guide/i18n/format-data-locale",
            contentPath: "guide/i18n/format-data-locale"
          },
          {
            label: "為翻譯準備元件",
            path: "guide/i18n/prepare",
            contentPath: "guide/i18n/prepare"
          },
          {
            label: "使用翻譯結果檔案",
            path: "guide/i18n/translation-files",
            contentPath: "guide/i18n/translation-files"
          },
          {
            label: "把翻譯結果併入應用",
            path: "guide/i18n/merge",
            contentPath: "guide/i18n/merge"
          },
          {
            label: "部署多個語言環境",
            path: "guide/i18n/deploy",
            contentPath: "guide/i18n/deploy"
          },
          {
            label: "匯入語言環境資料的全域變體",
            path: "guide/i18n/import-global-variants",
            contentPath: "guide/i18n/import-global-variants"
          },
          {
            label: "使用自定義 ID 管理已標記的文字",
            path: "guide/i18n/manage-marked-text",
            contentPath: "guide/i18n/manage-marked-text"
          },
          {
            label: "範例 Angular 應用",
            path: "guide/i18n/example",
            contentPath: "guide/i18n/example"
          }
        ]
      },
      {
        label: "動畫",
        status: "updated",
        children: [
          {
            label: "進場與離場動畫",
            path: "guide/animations",
            contentPath: "guide/animations/enter-and-leave",
            status: "new"
          },
          {
            label: "使用 CSS 實現複雜動畫",
            path: "guide/animations/css",
            contentPath: "guide/animations/css"
          },
          {
            label: "路由轉場動畫",
            path: "guide/routing/route-transition-animations",
            contentPath: "guide/routing/route-transition-animations"
          }
        ]
      },
      {
        label: "拖放",
        path: "guide/drag-drop",
        contentPath: "guide/drag-drop"
      }
    ]
  },
  {
    label: "利用 AI 建立",
    status: "new",
    children: [
      {
        label: "快速上手",
        path: "ai",
        contentPath: "ai/overview"
      },
      {
        label: "LLM 提示詞和 AI IDE 設定",
        path: "ai/develop-with-ai",
        contentPath: "ai/develop-with-ai"
      },
      {
        label: "設計模式",
        path: "ai/design-patterns",
        contentPath: "ai/design-patterns"
      },
      {
        label: "Angular CLI MCP 伺服器設定",
        path: "ai/mcp",
        contentPath: "ai/mcp-server-setup"
      }
    ]
  },
  {
    label: "開發者工具",
    children: [
      {
        label: "Angular CLI",
        children: [
          {
            label: "概覽",
            path: "tools/cli",
            contentPath: "tools/cli/overview"
          },
          {
            label: "本地安裝",
            path: "tools/cli/setup-local",
            contentPath: "tools/cli/setup-local"
          },
          {
            label: "建立 Angular 應用",
            path: "tools/cli/build",
            contentPath: "tools/cli/build"
          },
          {
            label: "為 Angular 應用啟動開發伺服器",
            path: "tools/cli/serve",
            contentPath: "tools/cli/serve"
          },
          {
            label: "部署",
            path: "tools/cli/deployment",
            contentPath: "tools/cli/deployment"
          },
          {
            label: "端到端測試",
            path: "tools/cli/end-to-end",
            contentPath: "tools/cli/end-to-end"
          },
          {
            label: "遷移到新的建立體系",
            path: "tools/cli/build-system-migration",
            contentPath: "tools/cli/build-system-migration"
          },
          {
            label: "建立環境",
            path: "tools/cli/environments",
            contentPath: "tools/cli/environments"
          },
          {
            label: "Angular CLI 建構式",
            path: "tools/cli/cli-builder",
            contentPath: "tools/cli/cli-builder"
          },
          {
            label: "使用原理圖生成程式碼",
            path: "tools/cli/schematics",
            contentPath: "tools/cli/schematics"
          },
          {
            label: "製作原理圖",
            path: "tools/cli/schematics-authoring",
            contentPath: "tools/cli/schematics-authoring"
          },
          {
            label: "各種函式庫的原理圖",
            path: "tools/cli/schematics-for-libraries",
            contentPath: "tools/cli/schematics-for-libraries"
          },
          {
            label: "樣板型別檢查",
            path: "tools/cli/template-typecheck",
            contentPath: "tools/cli/template-typecheck"
          },
          {
            label: "預先編譯（AOT）",
            path: "tools/cli/aot-compiler",
            contentPath: "tools/cli/aot-compiler"
          },
          {
            label: "AOT 元資料錯誤",
            path: "tools/cli/aot-metadata-errors",
            contentPath: "tools/cli/aot-metadata-errors"
          }
        ]
      },
      {
        label: "函式庫",
        children: [
          {
            label: "概覽",
            path: "tools/libraries",
            contentPath: "tools/libraries/overview"
          },
          {
            label: "建立函式庫",
            path: "tools/libraries/creating-libraries",
            contentPath: "tools/libraries/creating-libraries"
          },
          {
            label: "使用函式庫",
            path: "tools/libraries/using-libraries",
            contentPath: "tools/libraries/using-libraries"
          },
          {
            label: "Angular 套件格式",
            path: "tools/libraries/angular-package-format",
            contentPath: "tools/libraries/angular-package-format"
          }
        ]
      },
      {
        label: "開發工具",
        children: [
          {
            label: "概覽",
            path: "tools/devtools",
            contentPath: "tools/devtools/overview"
          },
          {
            label: "元件",
            path: "tools/devtools/component",
            contentPath: "tools/devtools/component"
          },
          {
            label: "剖析器",
            path: "tools/devtools/profiler",
            contentPath: "tools/devtools/profiler"
          }
          // TODO: create those guides
          // The signal debugging docs should also be added to the signal section
          // {
          //   label: 'Signals',
          //   path: 'tools/devtools/signals',
          //   contentPath: 'tools/devtools/signals',
          // },
          // {
          //   label: 'Router',
          //   path: 'tools/devtools/router',
          //   contentPath: 'tools/devtools/router',
          // }
        ]
      },
      {
        label: "語言服務",
        path: "tools/language-service",
        contentPath: "tools/language-service"
      }
    ]
  },
  {
    label: "最佳實踐",
    children: [
      {
        label: "風格指南",
        path: "style-guide",
        contentPath: "best-practices/style-guide",
        status: "updated"
      },
      {
        label: "安全性",
        path: "best-practices/security",
        contentPath: "guide/security"
        // Have not refactored due to build issues
      },
      {
        label: "無障礙性",
        path: "best-practices/a11y",
        contentPath: "best-practices/a11y"
      },
      {
        label: "Angular 中的未處理錯誤",
        path: "best-practices/error-handling",
        contentPath: "best-practices/error-handling"
      },
      {
        label: "效能",
        children: [
          {
            label: "概覽",
            path: "best-practices/runtime-performance",
            contentPath: "best-practices/runtime-performance/overview"
          },
          {
            label: "Zone 汙染",
            path: "best-practices/zone-pollution",
            contentPath: "best-practices/runtime-performance/zone-pollution"
          },
          {
            label: "慢速計算",
            path: "best-practices/slow-computations",
            contentPath: "best-practices/runtime-performance/slow-computations"
          },
          {
            label: "跳過元件的子樹",
            path: "best-practices/skipping-subtrees",
            contentPath: "best-practices/runtime-performance/skipping-subtrees"
          },
          {
            label: "使用 Chrome DevTools 進行剖析",
            path: "best-practices/profiling-with-chrome-devtools",
            contentPath: "best-practices/runtime-performance/profiling-with-chrome-devtools"
          },
          { label: "Zoneless", path: "guide/zoneless", contentPath: "guide/zoneless" }
        ]
      },
      {
        label: "保持更新",
        path: "update",
        contentPath: "best-practices/update"
      }
    ]
  },
  {
    label: "擴充套件生態系統",
    children: [
      {
        label: "NgModules",
        path: "guide/ngmodules/overview",
        contentPath: "guide/ngmodules/overview"
      },
      {
        label: "動畫技術（遺留）",
        children: [
          {
            label: "概覽",
            path: "guide/legacy-animations",
            contentPath: "guide/animations/overview"
          },
          {
            label: "轉場動畫與觸發器",
            path: "guide/legacy-animations/transition-and-triggers",
            contentPath: "guide/animations/transition-and-triggers"
          },
          {
            label: "複雜序列",
            path: "guide/legacy-animations/complex-sequences",
            contentPath: "guide/animations/complex-sequences"
          },
          {
            label: "可複用動畫",
            path: "guide/legacy-animations/reusable-animations",
            contentPath: "guide/animations/reusable-animations"
          },
          {
            label: "遷移到原生 CSS 動畫",
            path: "guide/animations/migration",
            contentPath: "guide/animations/migration"
          }
        ]
      },
      {
        label: "在 Angular 中使用 RxJS",
        children: [
          {
            label: "與訊號互操作",
            path: "ecosystem/rxjs-interop",
            contentPath: "ecosystem/rxjs-interop/signals-interop"
          },
          {
            label: "與元件的輸出屬性互操作",
            path: "ecosystem/rxjs-interop/output-interop",
            contentPath: "ecosystem/rxjs-interop/output-interop"
          },
          {
            label: "Unsubscribing with takeUntilDestroyed",
            path: "ecosystem/rxjs-interop/take-until-destroyed",
            contentPath: "ecosystem/rxjs-interop/take-until-destroyed"
          }
        ]
      },
      {
        label: "Service Worker 與 PWA",
        children: [
          {
            label: "概覽",
            path: "ecosystem/service-workers",
            contentPath: "ecosystem/service-workers/overview"
          },
          {
            label: "快速上手",
            path: "ecosystem/service-workers/getting-started",
            contentPath: "ecosystem/service-workers/getting-started"
          },
          {
            label: "Custom service worker scripts",
            path: "ecosystem/service-workers/custom-service-worker-scripts",
            contentPath: "ecosystem/service-workers/custom-service-worker-scripts"
          },
          {
            label: "設定檔案",
            path: "ecosystem/service-workers/config",
            contentPath: "ecosystem/service-workers/config"
          },
          {
            label: "與 Service Worker 通訊",
            path: "ecosystem/service-workers/communications",
            contentPath: "ecosystem/service-workers/communications"
          },
          {
            label: "推送通知",
            path: "ecosystem/service-workers/push-notifications",
            contentPath: "ecosystem/service-workers/push-notifications"
          },
          {
            label: "Service Worker 的 DevOps",
            path: "ecosystem/service-workers/devops",
            contentPath: "ecosystem/service-workers/devops"
          },
          {
            label: "App 外殼模式",
            path: "ecosystem/service-workers/app-shell",
            contentPath: "ecosystem/service-workers/app-shell"
          }
        ]
      },
      {
        label: "Web worker",
        path: "ecosystem/web-workers",
        contentPath: "ecosystem/web-workers"
      },
      {
        label: "自定義建立流水線",
        path: "ecosystem/custom-build-pipeline",
        contentPath: "ecosystem/custom-build-pipeline"
      },
      {
        label: "Tailwind",
        path: "guide/tailwind",
        contentPath: "guide/tailwind",
        status: "new"
      },
      {
        label: "Angular Fire",
        path: "https://github.com/angular/angularfire#readme"
      },
      {
        label: "Google 地圖",
        path: "https://github.com/angular/components/tree/main/src/google-maps#readme"
      },
      {
        label: "Google 支付",
        path: "https://github.com/google-pay/google-pay-button#angular"
      },
      {
        label: "YouTube 播放器",
        path: "https://github.com/angular/components/blob/main/src/youtube-player/README.md"
      },
      {
        label: "Angular CDK",
        path: "https://material.angular.dev/cdk/categories"
      },
      {
        label: "Angular Material",
        path: "https://material.angular.dev/"
      }
    ]
  },
  ...isDevMode() ? [
    {
      label: "Adev 開發者指南",
      children: [
        {
          label: "大雜燴",
          path: "kitchen-sink",
          contentPath: "kitchen-sink"
        }
      ]
    }
  ] : []
];
var TUTORIALS_SUB_NAVIGATION_DATA = [
  routes_default,
  routes_default2,
  routes_default3,
  routes_default4,
  {
    path: DEFAULT_PAGES.TUTORIALS,
    contentPath: "tutorials/home",
    label: "教程"
  }
];
var REFERENCE_SUB_NAVIGATION_DATA = [
  {
    label: "路線圖",
    path: "roadmap",
    contentPath: "reference/roadmap"
  },
  {
    label: "參與開發",
    path: "https://github.com/angular/angular/blob/main/CONTRIBUTING.md"
  },
  {
    label: "API 參考手冊",
    children: [
      {
        label: "概覽",
        path: "api"
      },
      ...getApiNavigationItems()
    ]
  },
  {
    label: "CLI 參考手冊",
    children: [
      {
        label: "概覽",
        path: "cli",
        contentPath: "reference/cli"
      },
      {
        label: "ng add",
        path: "cli/add"
      },
      {
        label: "ng analytics",
        children: [
          {
            label: "概覽",
            path: "cli/analytics"
          },
          {
            label: "disable",
            path: "cli/analytics/disable"
          },
          {
            label: "enable",
            path: "cli/analytics/enable"
          },
          {
            label: "info",
            path: "cli/analytics/info"
          },
          {
            label: "prompt",
            path: "cli/analytics/prompt"
          }
        ]
      },
      {
        label: "ng build",
        path: "cli/build"
      },
      {
        label: "ng cache",
        children: [
          {
            label: "概覽",
            path: "cli/cache"
          },
          {
            label: "clean",
            path: "cli/cache/clean"
          },
          {
            label: "disable",
            path: "cli/cache/disable"
          },
          {
            label: "enable",
            path: "cli/cache/enable"
          },
          {
            label: "info",
            path: "cli/cache/info"
          }
        ]
      },
      {
        label: "ng completion",
        children: [
          {
            label: "概覽",
            path: "cli/completion"
          },
          {
            label: "script",
            path: "cli/completion/script"
          }
        ]
      },
      {
        label: "ng config",
        path: "cli/config"
      },
      {
        label: "ng deploy",
        path: "cli/deploy"
      },
      {
        label: "ng e2e",
        path: "cli/e2e"
      },
      {
        label: "ng extract-i18n",
        path: "cli/extract-i18n"
      },
      {
        label: "ng generate",
        children: [
          {
            label: "概覽",
            path: "cli/generate"
          },
          {
            label: "ai-config",
            path: "cli/generate/ai-config"
          },
          {
            label: "app-shell",
            path: "cli/generate/app-shell"
          },
          {
            label: "application",
            path: "cli/generate/application"
          },
          {
            label: "class",
            path: "cli/generate/class"
          },
          {
            label: "component",
            path: "cli/generate/component"
          },
          {
            label: "config",
            path: "cli/generate/config"
          },
          {
            label: "directive",
            path: "cli/generate/directive"
          },
          {
            label: "enum",
            path: "cli/generate/enum"
          },
          {
            label: "environments",
            path: "cli/generate/environments"
          },
          {
            label: "guard",
            path: "cli/generate/guard"
          },
          {
            label: "interceptor",
            path: "cli/generate/interceptor"
          },
          {
            label: "interface",
            path: "cli/generate/interface"
          },
          {
            label: "library",
            path: "cli/generate/library"
          },
          {
            label: "module",
            path: "cli/generate/module"
          },
          {
            label: "pipe",
            path: "cli/generate/pipe"
          },
          {
            label: "resolver",
            path: "cli/generate/resolver"
          },
          {
            label: "service-worker",
            path: "cli/generate/service-worker"
          },
          {
            label: "service",
            path: "cli/generate/service"
          },
          {
            label: "web-worker",
            path: "cli/generate/web-worker"
          }
        ]
      },
      {
        label: "ng lint",
        path: "cli/lint"
      },
      {
        label: "ng new",
        path: "cli/new"
      },
      {
        label: "ng run",
        path: "cli/run"
      },
      {
        label: "ng serve",
        path: "cli/serve"
      },
      {
        label: "ng test",
        path: "cli/test"
      },
      {
        label: "ng update",
        path: "cli/update"
      },
      {
        label: "ng version",
        path: "cli/version"
      }
    ]
  },
  {
    label: "錯誤百科",
    children: [
      {
        label: "概覽",
        path: "errors",
        contentPath: "reference/errors/overview"
      },
      ...routes_default5
    ]
  },
  {
    label: "擴充套件診斷",
    children: [
      {
        label: "概覽",
        path: "extended-diagnostics",
        contentPath: "reference/extended-diagnostics/overview"
      },
      ...routes_default6
    ]
  },
  {
    label: "版本與發布",
    path: "reference/releases",
    contentPath: "reference/releases"
  },
  {
    label: "版本相容性",
    path: "reference/versions",
    contentPath: "reference/versions"
  },
  {
    label: "更新指南",
    path: "update-guide"
  },
  {
    label: "設定",
    children: [
      {
        label: "檔案結構",
        path: "reference/configs/file-structure",
        contentPath: "reference/configs/file-structure"
      },
      {
        label: "工作區設定",
        path: "reference/configs/workspace-config",
        contentPath: "reference/configs/workspace-config"
      },
      {
        label: "Angular 編譯器選項",
        path: "reference/configs/angular-compiler-options",
        contentPath: "reference/configs/angular-compiler-options"
      },
      {
        label: "npm 依賴",
        path: "reference/configs/npm-packages",
        contentPath: "reference/configs/npm-packages"
      }
    ]
  },
  {
    label: "遷移",
    children: [
      {
        label: "概覽",
        path: "reference/migrations",
        contentPath: "reference/migrations/overview"
      },
      {
        label: "獨立版",
        path: "reference/migrations/standalone",
        contentPath: "reference/migrations/standalone"
      },
      {
        label: "控制流語法",
        path: "reference/migrations/control-flow",
        contentPath: "reference/migrations/control-flow"
      },
      {
        label: "inject() 函式",
        path: "reference/migrations/inject-function",
        contentPath: "reference/migrations/inject-function"
      },
      {
        label: "延遲載入路由",
        path: "reference/migrations/route-lazy-loading",
        contentPath: "reference/migrations/route-lazy-loading"
      },
      {
        label: "訊號型輸入屬性",
        path: "reference/migrations/signal-inputs",
        contentPath: "reference/migrations/signal-inputs"
      },
      {
        label: "輸出屬性",
        path: "reference/migrations/outputs",
        contentPath: "reference/migrations/outputs"
      },
      {
        label: "訊號型查詢",
        path: "reference/migrations/signal-queries",
        contentPath: "reference/migrations/signal-queries"
      },
      {
        label: "清理未用匯入",
        path: "reference/migrations/cleanup-unused-imports",
        contentPath: "reference/migrations/cleanup-unused-imports"
      },
      {
        label: "自閉合標籤",
        path: "reference/migrations/self-closing-tags",
        contentPath: "reference/migrations/self-closing-tags"
      }
    ]
  }
];
var FOOTER_NAVIGATION_DATA = [
  {
    label: "宣傳資料",
    path: "press-kit",
    contentPath: "reference/press-kit"
  },
  {
    label: "授權方式",
    path: "license",
    contentPath: "reference/license"
  }
];
var SUB_NAVIGATION_DATA = {
  docs: DOCS_SUB_NAVIGATION_DATA,
  reference: REFERENCE_SUB_NAVIGATION_DATA,
  tutorials: TUTORIALS_SUB_NAVIGATION_DATA,
  footer: FOOTER_NAVIGATION_DATA
};

// src/app/main.component.ts
var _MainComponent = class _MainComponent {
  displaySearchDialog = inject(IS_SEARCH_DIALOG_OPEN);
  searchService = inject(Search);
  search = model("", ...ngDevMode ? [{ debugName: "search" }] : []);
  constructor() {
    effect(() => {
      const search = this.search();
      if (search !== void 0) {
        this.displaySearchDialog.set(true);
        this.searchService.searchQuery.set(search);
      }
    });
  }
};
__name(_MainComponent, "MainComponent");
__publicField(_MainComponent, "ɵfac", /* @__PURE__ */ __name(function MainComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MainComponent)();
}, "MainComponent_Factory"));
__publicField(_MainComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _MainComponent, selectors: [["adev-main"]], inputs: { search: [1, "search"] }, outputs: { search: "searchChange" }, decls: 1, vars: 0, template: /* @__PURE__ */ __name(function MainComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "router-outlet");
  }
}, "MainComponent_Template"), dependencies: [RouterOutlet], encapsulation: 2 }));
var MainComponent = _MainComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "adev-main",
      imports: [RouterOutlet],
      template: `<router-outlet />`
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "src/app/main.component.ts", lineNumber: 19 });
})();

// src/app/routes.ts
var DOCS_ROUTES = mapNavigationItemsToRoutes(flatNavigationData(SUB_NAVIGATION_DATA.docs).filter((route) => !route.path?.startsWith(PAGE_PREFIX.TUTORIALS) && route.path !== PAGE_PREFIX.PLAYGROUND), __spreadValues({
  loadComponent: /* @__PURE__ */ __name(() => import("./chunk-ISB5AJOI.js"), "loadComponent"),
  data: {
    displaySecondaryNav: true
  }
}, false ? { ɵentryName: "src/app/features/docs/docs.component.ts" } : {}));
var referenceNavigationItems = flatNavigationData(SUB_NAVIGATION_DATA.reference);
var commonReferenceRouteData = {
  displaySecondaryNav: true
};
var referencePageRoutes = mapNavigationItemsToRoutes(referenceNavigationItems.filter((r) => r.path === DEFAULT_PAGES.REFERENCE), __spreadValues({
  loadComponent: /* @__PURE__ */ __name(() => import("./chunk-3WUAYQCQ.js"), "loadComponent"),
  data: commonReferenceRouteData
}, false ? { ɵentryName: "src/app/features/references/api-reference-list/api-reference-list.component.ts" } : {}));
var updateGuidePageRoute = __spreadValues({
  path: referenceNavigationItems.find((r) => r.path === DEFAULT_PAGES.UPDATE).path,
  loadComponent: /* @__PURE__ */ __name(() => import("./chunk-HLQ4X4FP.js"), "loadComponent"),
  data: commonReferenceRouteData
}, false ? { ɵentryName: "src/app/features/update/update.component.ts" } : {});
var cliReferencePageRoutes = mapNavigationItemsToRoutes(referenceNavigationItems.filter((r) => r.path?.startsWith(`${PAGE_PREFIX.CLI}/`)), __spreadValues({
  loadComponent: /* @__PURE__ */ __name(() => import("./chunk-BM7OP7FY.js"), "loadComponent"),
  data: commonReferenceRouteData
}, false ? { ɵentryName: "src/app/features/references/cli-reference-details-page/cli-reference-details-page.component.ts" } : {})).map((route) => __spreadProps(__spreadValues({}, route), {
  resolve: {
    docContent: contentResolver(`${route.path}.html`)
  }
}));
var docsReferencePageRoutes = mapNavigationItemsToRoutes(referenceNavigationItems.filter((r) => r.path !== DEFAULT_PAGES.REFERENCE && r.path !== DEFAULT_PAGES.UPDATE && !r.path?.startsWith(`${PAGE_PREFIX.API}/`) && !r.path?.startsWith(`${PAGE_PREFIX.CLI}/`)), __spreadValues({
  loadComponent: /* @__PURE__ */ __name(() => import("./chunk-ISB5AJOI.js"), "loadComponent"),
  data: __spreadValues({}, commonReferenceRouteData)
}, false ? { ɵentryName: "src/app/features/docs/docs.component.ts" } : {}));
var REFERENCE_ROUTES = [
  ...referencePageRoutes,
  ...docsReferencePageRoutes,
  ...cliReferencePageRoutes
];
var tutorialsNavigationItems = flatNavigationData(SUB_NAVIGATION_DATA.tutorials);
var commonTutorialRouteData = {
  hideFooter: true
};
var docsTutorialsRoutes = mapNavigationItemsToRoutes(tutorialsNavigationItems.filter((route) => route.path === DEFAULT_PAGES.TUTORIALS), __spreadValues({
  loadComponent: /* @__PURE__ */ __name(() => import("./chunk-ISB5AJOI.js"), "loadComponent"),
  data: __spreadValues({}, commonTutorialRouteData)
}, false ? { ɵentryName: "src/app/features/docs/docs.component.ts" } : {}));
var tutorialComponentRoutes = mapNavigationItemsToRoutes(tutorialsNavigationItems.filter((route) => route.path !== DEFAULT_PAGES.TUTORIALS), __spreadValues({
  loadComponent: /* @__PURE__ */ __name(() => import("./chunk-3BGK2WSD.js"), "loadComponent"),
  data: __spreadValues({}, commonTutorialRouteData)
}, false ? { ɵentryName: "src/app/features/tutorial/tutorial.component.ts" } : {}));
var TUTORIALS_ROUTES = [...docsTutorialsRoutes, ...tutorialComponentRoutes];
var SUB_NAVIGATION_ROUTES = [
  ...DOCS_ROUTES,
  ...REFERENCE_ROUTES,
  ...TUTORIALS_ROUTES
];
var FOOTER_ROUTES = mapNavigationItemsToRoutes(flatNavigationData(SUB_NAVIGATION_DATA.footer), __spreadValues({ loadComponent: /* @__PURE__ */ __name(() => import("./chunk-ISB5AJOI.js"), "loadComponent") }, false ? { ɵentryName: "src/app/features/docs/docs.component.ts" } : {}));
var API_REFERENCE_ROUTES = mapApiManifestToRoutes();
var REDIRECT_ROUTES = [
  {
    path: "guide/defer",
    redirectTo: "/guide/templates/defer"
  },
  {
    path: "guide/components/importing",
    redirectTo: "/guide/components/anatomy-of-components#using-components"
  },
  {
    path: "guide/templates/attribute-binding",
    redirectTo: "/guide/templates/binding#binding-dynamic-properties-and-attributes"
  },
  {
    path: "guide/templates/interpolation",
    redirectTo: "/guide/templates/binding#render-dynamic-text-with-text-interpolation"
  },
  {
    path: "guide/templates/class-binding",
    redirectTo: "/guide/templates/binding#css-class-and-style-property-bindings"
  },
  {
    path: "guide/templates/event-binding",
    redirectTo: "/guide/templates/event-listeners"
  },
  {
    path: "guide/templates/let-template-variables",
    redirectTo: "/guide/templates/variables#local-template-variables-with-let"
  },
  {
    path: "guide/templates/property-binding",
    redirectTo: "/guide/templates/binding#binding-dynamic-properties-and-attributes"
  },
  {
    path: "guide/templates/property-binding-best-practices",
    redirectTo: "/guide/templates/binding#binding-dynamic-properties-and-attributes"
  },
  {
    path: "guide/templates/reference-variables",
    redirectTo: "/guide/templates/variables#template-reference-variables"
  },
  {
    path: "guide/templates/svg-in-templates",
    redirectTo: "/guide/templates/binding"
  },
  {
    path: "guide/templates/template-statements",
    redirectTo: "/guide/templates/event-listeners"
  },
  {
    path: "guide/signals/rxjs-interop",
    redirectTo: "/ecosystem/rxjs-interop"
  },
  {
    path: "guide/components/output-function",
    redirectTo: "/guide/components/outputs"
  },
  {
    path: "guide/signals/queries",
    redirectTo: "/guide/components/queries"
  },
  {
    path: "guide/signals/model",
    redirectTo: "/guide/signals/inputs"
  },
  {
    path: "guide/signals/inputs",
    redirectTo: "/guide/components/inputs"
  },
  {
    path: "guide/ngmodules",
    redirectTo: "/guide/ngmodules/overview"
  },
  {
    path: "guide/ngmodules/providers",
    redirectTo: "/guide/ngmodules/overview"
  },
  {
    path: "guide/ngmodules/singleton-services",
    redirectTo: "/guide/ngmodules/overview"
  },
  {
    path: "guide/ngmodules/lazy-loading",
    redirectTo: "/guide/ngmodules/overview"
  },
  {
    path: "guide/ngmodules/faq",
    redirectTo: "/guide/ngmodules/overview"
  },
  {
    path: "guide/components/anatomy-of-components",
    redirectTo: "/guide/components"
  },
  {
    path: "guide/hybrid-rendering",
    redirectTo: "/guide/ssr"
  },
  {
    path: "guide/prerendering",
    redirectTo: "/guide/ssr"
  },
  {
    path: "hmr",
    redirectTo: "/tools/cli/build-system-migration#hot-module-replacement"
  },
  {
    path: "guide",
    children: [
      {
        path: "pipes",
        redirectTo: "/guide/templates/pipes"
      }
    ]
  },
  {
    path: "guide/experimental/zoneless",
    redirectTo: "/guide/zoneless"
  },
  {
    path: "guide/animations/route-animations",
    redirectTo: "/guide/routing/route-transition-animations"
  },
  {
    path: "guide/animations/enter-and-leave",
    redirectTo: "/guide/animations"
  },
  {
    path: "guide/animations/transitions-and-triggers",
    redirectTo: "/guide/legacy-animations/transitions-and-triggers"
  },
  {
    path: "guide/animations/complex-sequences",
    redirectTo: "/guide/legacy-animations/complex-sequences"
  },
  {
    path: "guide/animations/reusable-animations",
    redirectTo: "/guide/legacy-animations/reusable-animations"
  }
];
var routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      __spreadValues({
        path: "",
        loadComponent: /* @__PURE__ */ __name(() => import("./chunk-UVMHHQTK.js"), "loadComponent"),
        data: { label: "Home" }
      }, false ? { ɵentryName: "src/app/features/home/home.component.ts" } : {}),
      {
        path: PAGE_PREFIX.DOCS,
        redirectTo: DEFAULT_PAGES.DOCS
      },
      {
        path: PAGE_PREFIX.REFERENCE,
        redirectTo: DEFAULT_PAGES.REFERENCE
      },
      __spreadValues({
        path: PAGE_PREFIX.PLAYGROUND,
        loadComponent: /* @__PURE__ */ __name(() => import("./chunk-TNYENHQP.js"), "loadComponent"),
        data: __spreadProps(__spreadValues({}, commonTutorialRouteData), { label: "Playground" })
      }, false ? { ɵentryName: "src/app/features/playground/playground.component.ts" } : {}),
      ...SUB_NAVIGATION_ROUTES,
      ...API_REFERENCE_ROUTES,
      ...FOOTER_ROUTES,
      updateGuidePageRoute,
      ...REDIRECT_ROUTES
    ]
  },
  // Error page
  __spreadValues({
    path: "**",
    loadComponent: /* @__PURE__ */ __name(() => import("./chunk-ISB5AJOI.js"), "loadComponent"),
    resolve: { "docContent": contentResolver("error") }
  }, false ? { ɵentryName: "src/app/features/docs/docs.component.ts" } : {})
];

// src/app/core/services/a-dev-title-strategy.ts
var TITLE_SUFFIX = "Angular";
var TITLE_SEPARATOR = " • ";
var DEFAULT_PAGE_TITLE = "概覽";
var _ADevTitleStrategy = class _ADevTitleStrategy extends TitleStrategy {
  title = inject(Title);
  constructor() {
    super();
  }
  updateTitle(routerState) {
    const title = this.buildTitle(routerState);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
  buildTitle(snapshot) {
    let route = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const data = route.data;
    const routeTitle = data.label ?? "";
    const prefix = routeTitle.startsWith(DEFAULT_PAGE_TITLE) && data.parent ? `${data.parent.label}${TITLE_SEPARATOR}` : "";
    return !!routeTitle ? `${prefix}${routeTitle}${TITLE_SEPARATOR}${TITLE_SUFFIX}` : TITLE_SUFFIX;
  }
};
__name(_ADevTitleStrategy, "ADevTitleStrategy");
__publicField(_ADevTitleStrategy, "ɵfac", /* @__PURE__ */ __name(function ADevTitleStrategy_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ADevTitleStrategy)();
}, "ADevTitleStrategy_Factory"));
__publicField(_ADevTitleStrategy, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({ token: _ADevTitleStrategy, factory: _ADevTitleStrategy.ɵfac, providedIn: "root" }));
var ADevTitleStrategy = _ADevTitleStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ADevTitleStrategy, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/features/tutorial/tutorials-route-reuse-strategy.ts
var IS_TUTORIAL_PAGE_RULE = /(^tutorials)\/(\S*)/s;
var _ReuseTutorialsRouteStrategy = class _ReuseTutorialsRouteStrategy extends BaseRouteReuseStrategy {
  // reuse route when not navigating to a new one or when navigating between tutorial pages
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig || this.isTutorialPage(this.getPathFromActivatedRouteSnapshot(future)) && this.isTutorialPage(this.getPathFromActivatedRouteSnapshot(curr));
  }
  isTutorialPage(path) {
    if (!path) {
      return false;
    }
    return IS_TUTORIAL_PAGE_RULE.test(path);
  }
  getPathFromActivatedRouteSnapshot(snapshot) {
    let route = snapshot;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.routeConfig?.path;
  }
};
__name(_ReuseTutorialsRouteStrategy, "ReuseTutorialsRouteStrategy");
var ReuseTutorialsRouteStrategy = _ReuseTutorialsRouteStrategy;

// src/app/app-scroller.ts
var _AppScroller = class _AppScroller {
  router = inject(Router);
  viewportScroller = inject(ViewportScroller);
  appRef = inject(ApplicationRef);
  injector = inject(EnvironmentInjector);
  _lastScrollEvent;
  canScroll = false;
  cancelScroll;
  get lastScrollEvent() {
    return this._lastScrollEvent;
  }
  constructor() {
    this.viewportScroller.setHistoryScrollRestoration("manual");
    this.router.events.pipe(filter((e) => e instanceof Scroll), tap((e) => {
      this.cancelScroll?.();
      this.canScroll = true;
      this._lastScrollEvent = e;
    }), filter(() => {
      const info = this.router.lastSuccessfulNavigation?.extras.info;
      return !info?.["disableScrolling"];
    }), switchMap((e) => {
      return firstValueFrom(this.appRef.isStable.pipe(filter((stable) => stable), map(() => e)));
    })).subscribe(() => {
      this.scroll();
    });
  }
  scroll(injector) {
    if (!this._lastScrollEvent || !this.canScroll) {
      return;
    }
    this.canScroll = false;
    const { anchor, position } = this._lastScrollEvent;
    const ref = afterNextRender(
      {
        write: /* @__PURE__ */ __name(() => {
          if (position) {
            this.viewportScroller.scrollToPosition(position);
          } else if (anchor) {
            this.viewportScroller.scrollToAnchor(anchor);
          } else {
            this.viewportScroller.scrollToPosition([0, 0]);
          }
        }, "write")
      },
      // Use the component injector when provided so that the manager can
      // deregister the sequence once the component is destroyed.
      { injector: injector ?? this.injector }
    );
    this.cancelScroll = () => {
      ref.destroy();
    };
  }
};
__name(_AppScroller, "AppScroller");
__publicField(_AppScroller, "ɵfac", /* @__PURE__ */ __name(function AppScroller_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppScroller)();
}, "AppScroller_Factory"));
__publicField(_AppScroller, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({ token: _AppScroller, factory: _AppScroller.ɵfac, providedIn: "root" }));
var AppScroller = _AppScroller;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppScroller, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/router_providers.ts
var transitionCreated = new Subject();
var routerProviders = [
  provideRouter(routes, withInMemoryScrolling(), withRouterConfig({ canceledNavigationResolution: "computed" }), withNavigationErrorHandler(({ error }) => {
    if (error instanceof HttpErrorResponse) {
      return new RedirectCommand(inject(Router).parseUrl("/404"));
    }
    return void 0;
  }), withViewTransitions({
    onViewTransitionCreated: /* @__PURE__ */ __name(({ transition, to }) => {
      transitionCreated.next();
      const router = inject(Router);
      const toTree = createUrlTreeFromSnapshot(to, []);
      if (router.isActive(toTree, {
        paths: "exact",
        matrixParams: "exact",
        fragment: "ignored",
        queryParams: "ignored"
      })) {
        transition.skipTransition();
      }
    }, "onViewTransitionCreated")
  }), withComponentInputBinding()),
  {
    provide: RouteReuseStrategy,
    useClass: ReuseTutorialsRouteStrategy
  },
  { provide: TitleStrategy, useClass: ADevTitleStrategy },
  provideEnvironmentInitializer(() => inject(AppScroller)),
  provideEnvironmentInitializer(() => initializeNavigationAdapter())
];
var initializeNavigationAdapter = /* @__PURE__ */ __name(() => {
  const router = inject(Router);
  const window2 = inject(WINDOW);
  const navigation = window2.navigation;
  if (!navigation || !inject(DOCUMENT).startViewTransition) {
    return;
  }
  let intercept = false;
  let clearNavigation;
  navigation.addEventListener("navigateerror", async () => {
    if (!clearNavigation) {
      return;
    }
    clearNavigation = void 0;
    router.currentNavigation()?.abort();
  });
  navigation.addEventListener("navigate", (navigateEvent) => {
    if (!intercept) {
      return;
    }
    navigateEvent.intercept({
      handler: /* @__PURE__ */ __name(() => new Promise((_, reject) => {
        clearNavigation = /* @__PURE__ */ __name(() => {
          clearNavigation = void 0;
          reject();
        }, "clearNavigation");
      }), "handler")
    });
  });
  merge(transitionCreated.pipe(map(() => "viewtransition")), router.events).subscribe((e) => {
    const currentNavigation = router.currentNavigation();
    if (currentNavigation?.trigger === "popstate" || currentNavigation?.extras.replaceUrl) {
      return;
    }
    if (e instanceof NavigationStart) {
      intercept = true;
      window2.history.replaceState(window2.history.state, "", window2.location.href);
      intercept = false;
    } else if (
      // viewtransition happens before NavigateEnd
      e === "viewtransition" || e instanceof NavigationCancel || e instanceof NavigationError
    ) {
      clearNavigation?.();
    }
  });
}, "initializeNavigationAdapter");

// src/app/app.config.ts
var appConfig = {
  providers: [
    routerProviders,
    provideZonelessChangeDetection(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideEnvironmentInitializer(() => inject(AnalyticsService)),
    provideAlgoliaSearchClient(environment_default),
    { provide: ENVIRONMENT, useValue: environment_default },
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: PREVIEWS_COMPONENTS, useValue: PREVIEWS_COMPONENTS_MAP },
    { provide: DOCS_CONTENT_LOADER, useClass: ContentLoader },
    { provide: EXAMPLE_VIEWER_CONTENT_LOADER, useClass: ExampleContentLoader },
    {
      provide: WINDOW,
      useFactory: /* @__PURE__ */ __name((document) => windowProvider(document), "useFactory"),
      deps: [DOCUMENT]
    }
  ]
};

// src/app/core/constants/links.ts
var ANGULAR_LINKS = {
  GITHUB: "https://github.com/angular/angular",
  X: "https://x.com/angular",
  MEDIUM: "https://blog.angular.dev",
  YOUTUBE: "https://www.youtube.com/angular",
  DISCORD: "https://discord.gg/angular",
  BLUESKY: "https://bsky.app/profile/angular.dev",
  STACKOVERFLOW: "https://stackoverflow.com/questions/tagged/angular"
};

// src/app/core/layout/footer/footer.component.ts
var _c0 = ["adev-footer", ""];
var _Footer = class _Footer {
  ngLinks = ANGULAR_LINKS;
};
__name(_Footer, "Footer");
__publicField(_Footer, "ɵfac", /* @__PURE__ */ __name(function Footer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Footer)();
}, "Footer_Factory"));
__publicField(_Footer, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _Footer, selectors: [["footer", "adev-footer", ""]], attrs: _c0, decls: 80, vars: 7, consts: [[1, "adev-footer-container"], [1, "adev-footer-columns"], ["title", "Angular 部落格", 3, "href"], ["title", "X (前 Twitter)", 3, "href"], ["title", "Bluesky", 3, "href"], ["title", "YouTube", 3, "href"], ["title", "加入 Angular 社群 Discord 伺服器的討論吧！", 3, "href"], ["title", "GitHub", 3, "href"], ["title", "Stack Overflow：社群為你解答技術上的 Angular 問題。", 3, "href"], ["href", "https://github.com/angular/angular/blob/main/CONTRIBUTING.md", "title", "向 Angular 做貢獻"], ["href", "https://github.com/angular/code-of-conduct/blob/main/CODE_OF_CONDUCT.md", "title", "彼此尊重"], ["href", "https://github.com/angular/angular/issues", "title", "在 Github 上報告問題或提建議"], ["href", "https://devlibrary.withgoogle.com/products/angular?sort=updated", "title", "Google 的開發函式庫"], ["href", "https://developers.google.com/community/experts/directory?specialization=angular", "title", "Angular Google 開發技術專家"], ["routerLink", "/press-kit", "title", "媒體聯絡、標誌和品牌形象。"], ["routerLink", "/roadmap", "title", "路線圖"], ["href", "https://angular.dev/", "title", "English Version"], ["href", "https://dev.angular.tw/", "title", "正體中文版"], ["href", "https://angular.jp/", "title", "日本語版"], ["href", "https://angular.kr/", "title", "한국어"], [1, "docs-license"], ["routerLink", "/license", "title", "協定文字"], ["href", "https://creativecommons.org/licenses/by/4.0/"]], template: /* @__PURE__ */ __name(function Footer_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
    ɵɵtext(4, "社交媒體");
    ɵɵelementEnd();
    ɵɵelementStart(5, "ul")(6, "li")(7, "a", 2);
    ɵɵtext(8, "部落格");
    ɵɵelementEnd()();
    ɵɵelementStart(9, "li")(10, "a", 3);
    ɵɵtext(11, "X (前 Twitter)");
    ɵɵelementEnd()();
    ɵɵelementStart(12, "li")(13, "a", 4);
    ɵɵtext(14, "Bluesky");
    ɵɵelementEnd()();
    ɵɵelementStart(15, "li")(16, "a", 5);
    ɵɵtext(17, "YouTube");
    ɵɵelementEnd()();
    ɵɵelementStart(18, "li")(19, "a", 6);
    ɵɵtext(20, " Discord ");
    ɵɵelementEnd()();
    ɵɵelementStart(21, "li")(22, "a", 7);
    ɵɵtext(23, "GitHub");
    ɵɵelementEnd()();
    ɵɵelementStart(24, "li")(25, "a", 8);
    ɵɵtext(26, " Stack Overflow ");
    ɵɵelementEnd()()()();
    ɵɵelementStart(27, "div")(28, "h2");
    ɵɵtext(29, "社群");
    ɵɵelementEnd();
    ɵɵelementStart(30, "ul")(31, "li")(32, "a", 9);
    ɵɵtext(33, " 做貢獻 ");
    ɵɵelementEnd()();
    ɵɵelementStart(34, "li")(35, "a", 10);
    ɵɵtext(36, " 行為準則 ");
    ɵɵelementEnd()();
    ɵɵelementStart(37, "li")(38, "a", 11);
    ɵɵtext(39, " 報告問題 ");
    ɵɵelementEnd()();
    ɵɵelementStart(40, "li")(41, "a", 12);
    ɵɵtext(42, " Google 的 開發函式庫 ");
    ɵɵelementEnd()();
    ɵɵelementStart(43, "li")(44, "a", 13);
    ɵɵtext(45, " Angular Google 開發技術專家 ");
    ɵɵelementEnd()()()();
    ɵɵelementStart(46, "div")(47, "h2");
    ɵɵtext(48, "資源");
    ɵɵelementEnd();
    ɵɵelementStart(49, "ul")(50, "li")(51, "a", 14);
    ɵɵtext(52, "宣傳資料");
    ɵɵelementEnd()();
    ɵɵelementStart(53, "li")(54, "a", 15);
    ɵɵtext(55, "路線圖");
    ɵɵelementEnd()()()();
    ɵɵelementStart(56, "div")(57, "h2");
    ɵɵtext(58, "多語言");
    ɵɵelementEnd();
    ɵɵelementStart(59, "ul")(60, "li")(61, "a", 16);
    ɵɵtext(62, "English Version");
    ɵɵelementEnd()();
    ɵɵelementStart(63, "li")(64, "a", 17);
    ɵɵtext(65, "正體中文版");
    ɵɵelementEnd()();
    ɵɵelementStart(66, "li")(67, "a", 18);
    ɵɵtext(68, "日本語版");
    ɵɵelementEnd()();
    ɵɵelementStart(69, "li")(70, "a", 19);
    ɵɵtext(71, "한국어");
    ɵɵelementEnd()()()()();
    ɵɵelementStart(72, "p", 20);
    ɵɵtext(73, " 由 Google 強力賦能 \xA92010-2025。程式碼以");
    ɵɵelementStart(74, "a", 21);
    ɵɵtext(75, "MIT-style 協定");
    ɵɵelementEnd();
    ɵɵtext(76, "授權。文件以 ");
    ɵɵelementStart(77, "a", 22);
    ɵɵtext(78, "CC BY 4.0");
    ɵɵelementEnd();
    ɵɵtext(79, " 授權。 ");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(7);
    ɵɵproperty("href", ctx.ngLinks.MEDIUM, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵproperty("href", ctx.ngLinks.X, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵproperty("href", ctx.ngLinks.BLUESKY, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵproperty("href", ctx.ngLinks.YOUTUBE, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵproperty("href", ctx.ngLinks.DISCORD, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵproperty("href", ctx.ngLinks.GITHUB, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵproperty("href", ctx.ngLinks.STACKOVERFLOW, ɵɵsanitizeUrl);
  }
}, "Footer_Template"), dependencies: [ExternalLink, RouterLink], styles: ["\n\n.adev-footer-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@container footer (max-width: 600px) {\n  .adev-footer-columns[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr) !important;\n  }\n}\n.adev-footer-container[_ngcontent-%COMP%] {\n  container: footer/inline-size;\n  position: relative;\n  justify-content: center;\n  padding: var(--layout-padding);\n  padding-inline-end: 1rem;\n  background-color: var(--page-background);\n  transition: background-color 0.3s ease;\n}\n@media (min-width: 1430.01px) {\n  .adev-footer-container[_ngcontent-%COMP%] {\n    width: calc(100% - 195px - var(--layout-padding) * 3);\n  }\n}\n.adev-footer-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-block-end: 1.75rem;\n  letter-spacing: -0.00875rem;\n}\n.adev-footer-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.95rem;\n}\n.adev-footer-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n.adev-footer-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--quaternary-contrast);\n  font-weight: 300;\n  transition: color 0.3s ease;\n}\n.adev-footer-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-contrast);\n}\n.adev-footer-container[_ngcontent-%COMP%]   p.docs-license[_ngcontent-%COMP%] {\n  transition: color 0.3s ease;\n  color: var(--quaternary-contrast);\n  font-weight: 300;\n  grid-column: span 4;\n  font-size: 0.75rem;\n  margin-block-start: 2rem;\n}\n/*# sourceMappingURL=footer.component.css.map */"], changeDetection: 0 }));
var Footer = _Footer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "footer[adev-footer]", imports: [ExternalLink, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="adev-footer-container">\n  <div class="adev-footer-columns">\n    <div>\n      <h2>社交媒體</h2>\n      <ul>\n        <li>\n          <a [href]="ngLinks.MEDIUM" title="Angular 部落格">部落格</a>\n        </li>\n        <li>\n          <a [href]="ngLinks.X" title="X (前 Twitter)">X (前 Twitter)</a>\n        </li>\n        <li>\n          <a [href]="ngLinks.BLUESKY" title="Bluesky">Bluesky</a>\n        </li>\n        <li>\n          <a [href]="ngLinks.YOUTUBE" title="YouTube">YouTube</a>\n        </li>\n        <li>\n          <a\n            [href]="ngLinks.DISCORD"\n            title="加入 Angular 社群 Discord 伺服器的討論吧！"\n          >\n            Discord\n          </a>\n        </li>\n        <li>\n          <a [href]="ngLinks.GITHUB" title="GitHub">GitHub</a>\n        </li>\n        <li>\n          <a\n            [href]="ngLinks.STACKOVERFLOW"\n            title="Stack Overflow：社群為你解答技術上的 Angular 問題。"\n          >\n            Stack Overflow\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div>\n      <h2>社群</h2>\n      <ul>\n        <li>\n          <a\n            href="https://github.com/angular/angular/blob/main/CONTRIBUTING.md"\n            title="向 Angular 做貢獻"\n          >\n            做貢獻\n          </a>\n        </li>\n        <li>\n          <a\n            href="https://github.com/angular/code-of-conduct/blob/main/CODE_OF_CONDUCT.md"\n            title="彼此尊重"\n          >\n            行為準則\n          </a>\n        </li>\n        <li>\n          <a\n            href="https://github.com/angular/angular/issues"\n            title="在 Github 上報告問題或提建議"\n          >\n            報告問題\n          </a>\n        </li>\n        <li>\n          <a\n            href="https://devlibrary.withgoogle.com/products/angular?sort=updated"\n            title="Google 的開發函式庫"\n          >\n            Google 的 開發函式庫\n          </a>\n        </li>\n        <li>\n          <a\n            href="https://developers.google.com/community/experts/directory?specialization=angular"\n            title="Angular Google 開發技術專家"\n          >\n            Angular Google 開發技術專家\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div>\n      <h2>資源</h2>\n      <ul>\n        <li>\n          <a routerLink="/press-kit" title="媒體聯絡、標誌和品牌形象。">宣傳資料</a>\n        </li>\n        <li>\n          <a routerLink="/roadmap" title="路線圖">路線圖</a>\n        </li>\n      </ul>\n    </div>\n    <div>\n      <h2>多語言</h2>\n      <ul>\n        <li>\n          <a href="https://angular.dev/" title="English Version">English Version</a>\n        </li>\n        <li>\n          <a href="https://dev.angular.tw/" title="正體中文版">正體中文版</a>\n        </li>\n        <li>\n          <a href="https://angular.jp/" title="日本語版">日本語版</a>\n        </li>\n        <li>\n          <a href="https://angular.kr/" title="한국어">한국어</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <p class="docs-license">\n    由 Google 強力賦能 \xA92010-2025。程式碼以<a routerLink="/license" title="協定文字">MIT-style 協定</a>授權。文件以\n    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> 授權。\n  </p>\n</div>\n', styles: ["/* src/app/core/layout/footer/footer.component.scss */\n.adev-footer-columns {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@container footer (max-width: 600px) {\n  .adev-footer-columns {\n    grid-template-columns: repeat(2, 1fr) !important;\n  }\n}\n.adev-footer-container {\n  container: footer/inline-size;\n  position: relative;\n  justify-content: center;\n  padding: var(--layout-padding);\n  padding-inline-end: 1rem;\n  background-color: var(--page-background);\n  transition: background-color 0.3s ease;\n}\n@media (min-width: 1430.01px) {\n  .adev-footer-container {\n    width: calc(100% - 195px - var(--layout-padding) * 3);\n  }\n}\n.adev-footer-container h2 {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-block-end: 1.75rem;\n  letter-spacing: -0.00875rem;\n}\n.adev-footer-container ul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.95rem;\n}\n.adev-footer-container ul li {\n  font-size: 0.8125rem;\n}\n.adev-footer-container a {\n  color: var(--quaternary-contrast);\n  font-weight: 300;\n  transition: color 0.3s ease;\n}\n.adev-footer-container a:hover {\n  color: var(--primary-contrast);\n}\n.adev-footer-container p.docs-license {\n  transition: color 0.3s ease;\n  color: var(--quaternary-contrast);\n  font-weight: 300;\n  grid-column: span 4;\n  font-size: 0.75rem;\n  margin-block-start: 2rem;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/core/layout/footer/footer.component.ts", lineNumber: 21 });
})();

// src/app/core/services/theme-manager.service.ts
var THEME_PREFERENCE_LOCAL_STORAGE_KEY = "themePreference";
var DARK_MODE_CLASS_NAME = "docs-dark-mode";
var LIGHT_MODE_CLASS_NAME = "docs-light-mode";
var PREFERS_COLOR_SCHEME_DARK = "(prefers-color-scheme: dark)";
var _ThemeManager = class _ThemeManager {
  document = inject(DOCUMENT);
  localStorage = inject(LOCAL_STORAGE);
  platformId = inject(PLATFORM_ID);
  theme = signal(this.getThemeFromLocalStorageValue(), ...ngDevMode ? [{ debugName: "theme" }] : []);
  // Zoneless - it's required to notify that theme was changed. It could be removed when signal-based components will be available.
  themeChanged$ = new Subject();
  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.loadThemePreference();
    this.watchPreferredColorScheme();
  }
  setTheme(theme) {
    this.theme.set(theme);
    this.setThemeInLocalStorage();
    this.setThemeBodyClasses(theme === "auto" ? preferredScheme() : theme);
  }
  // 1. Read theme preferences stored in localStorage
  // 2. In case when there are no stored user preferences, then read them from device preferences.
  loadThemePreference() {
    const savedUserPreference = this.getThemeFromLocalStorageValue();
    const useTheme = savedUserPreference ?? "auto";
    this.theme.set(useTheme);
    this.setThemeBodyClasses(useTheme === "auto" ? preferredScheme() : useTheme);
  }
  // Set theme classes on the body element
  setThemeBodyClasses(theme) {
    const documentClassList = this.document.documentElement.classList;
    if (theme === "dark") {
      documentClassList.add(DARK_MODE_CLASS_NAME);
      documentClassList.remove(LIGHT_MODE_CLASS_NAME);
    } else {
      documentClassList.add(LIGHT_MODE_CLASS_NAME);
      documentClassList.remove(DARK_MODE_CLASS_NAME);
    }
    this.themeChanged$.next();
  }
  getThemeFromLocalStorageValue() {
    const theme = this.localStorage?.getItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY);
    return theme ?? null;
  }
  setThemeInLocalStorage() {
    if (this.theme()) {
      this.localStorage?.setItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY, this.theme());
    }
  }
  watchPreferredColorScheme() {
    window.matchMedia(PREFERS_COLOR_SCHEME_DARK).addEventListener("change", (event) => {
      const preferredScheme2 = event.matches ? "dark" : "light";
      this.setThemeBodyClasses(preferredScheme2);
    });
  }
};
__name(_ThemeManager, "ThemeManager");
__publicField(_ThemeManager, "ɵfac", /* @__PURE__ */ __name(function ThemeManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeManager)();
}, "ThemeManager_Factory"));
__publicField(_ThemeManager, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({ token: _ThemeManager, factory: _ThemeManager.ɵfac, providedIn: "root" }));
var ThemeManager = _ThemeManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function preferredScheme() {
  return window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches ? "dark" : "light";
}
__name(preferredScheme, "preferredScheme");

// src/assets/others/versions.json
var versions_default = [
  {
    version: "next",
    url: "https://next.angular.dev/overview"
  },
  {
    version: "v20",
    url: "https://v20.angular.cn/overview"
  },
  {
    version: "v19",
    url: "https://v19.angular.cn/overview"
  },
  {
    version: "v18",
    url: "https://v18.angular.cn/overview"
  },
  {
    version: "v17",
    url: "https://v17.angular.cn/docs"
  },
  {
    version: "v16",
    url: "https://v16.angular.cn/docs"
  },
  {
    version: "v15",
    url: "https://v15.angular.cn/docs"
  },
  {
    version: "v14",
    url: "https://v14.angular.cn/docs"
  },
  {
    version: "v13",
    url: "https://v13.angular.cn/docs"
  },
  {
    version: "v12",
    url: "https://v12.angular.cn/docs"
  },
  {
    version: "v11",
    url: "https://v11.angular.cn/docs"
  },
  {
    version: "v10",
    url: "https://v10.angular.cn/docs"
  },
  {
    version: "v9",
    url: "https://v9.angular.cn/docs"
  },
  {
    version: "v8",
    url: "https://v8.angular.cn/docs"
  },
  {
    version: "v7",
    url: "https://v7.angular.cn/docs"
  },
  {
    version: "v6",
    url: "https://v6.angular.cn/docs"
  },
  {
    version: "v5",
    url: "https://v5.angular.cn/docs"
  },
  {
    version: "v4",
    url: "https://v4.angular.cn/docs"
  },
  {
    version: "v2",
    url: "https://v2.angular.cn/docs"
  }
];

// src/app/core/services/version-manager.service.ts
var _VersionManager = class _VersionManager {
  document = inject(DOCUMENT);
  get currentDocsVersionMode() {
    const hostname = this.document.location.hostname;
    if (hostname.startsWith("v"))
      return "deprecated";
    if (hostname.startsWith("rc"))
      return "rc";
    if (hostname.startsWith("next"))
      return "next";
    return "stable";
  }
  localVersions = versions_default.map((v) => {
    return {
      displayName: v.version,
      url: v.url
    };
  });
  // This handle the fallback if the resource fails.
  versions = computed(() => {
    return this.remoteVersions.hasValue() ? this.remoteVersions.value() : this.localVersions;
  }, ...ngDevMode ? [{ debugName: "versions" }] : []);
  // Yes this will trigger a cors error on localhost
  // but this is fine as we'll fallback to the local versions.json
  // which is the most up-to-date anyway.
  remoteVersions = httpResource(() => ({
    url: "/assets/others/versions.json",
    transferCache: false,
    cache: "no-cache"
  }), {
    parse: /* @__PURE__ */ __name((json) => {
      if (!Array.isArray(json)) {
        throw new Error("Invalid version data");
      }
      return json.map((v) => {
        if (v === void 0 || v === null || typeof v !== "object" || !("version" in v) || !("url" in v) || typeof v.version !== "string" || typeof v.url !== "string") {
          throw new Error("Invalid version data");
        }
        return {
          displayName: v.version,
          url: v.url
        };
      });
    }, "parse")
  });
  currentDocsVersion = computed(() => {
    if (VERSION.major === "0") {
      return this.versions()[0];
    }
    return this.versions().find((v) => v.displayName.includes(VERSION.major)) ?? this.versions()[0];
  }, ...ngDevMode ? [{ debugName: "currentDocsVersion" }] : []);
};
__name(_VersionManager, "VersionManager");
__publicField(_VersionManager, "ɵfac", /* @__PURE__ */ __name(function VersionManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VersionManager)();
}, "VersionManager_Factory"));
__publicField(_VersionManager, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({ token: _VersionManager, factory: _VersionManager.ɵfac, providedIn: "root" }));
var VersionManager = _VersionManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VersionManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/constants/element-ids.ts
var PRIMARY_NAV_ID = "primaryNav";
var SECONDARY_NAV_ID = "secondaryNav";

// src/app/core/constants/keys.ts
var COMMAND = "Command";
var CONTROL = "Control";
var ESCAPE = "Escape";
var SEARCH_TRIGGER_KEY = "k";

// src/app/core/layout/navigation/navigation.component.ts
var _c02 = ["class", "adev-nav"];
var _c1 = /* @__PURE__ */ __name((a0) => [a0], "_c1");
function Navigation_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 28)(1, "g", 50);
    ɵɵelement(2, "path", 51)(3, "path", 52);
    ɵɵelementEnd();
    ɵɵelementStart(4, "defs")(5, "linearGradient", 53);
    ɵɵelement(6, "stop", 11)(7, "stop", 12)(8, "stop", 13)(9, "stop", 14)(10, "stop", 15)(11, "stop", 16);
    ɵɵelementEnd();
    ɵɵelementStart(12, "linearGradient", 54);
    ɵɵelement(13, "stop", 18)(14, "stop", 19);
    ɵɵelementEnd();
    ɵɵelementStart(15, "clipPath", 55);
    ɵɵelement(16, "path", 21);
    ɵɵelementEnd()()();
  }
}
__name(Navigation_Conditional_29_Template, "Navigation_Conditional_29_Template");
function Navigation_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 29);
  }
}
__name(Navigation_Conditional_30_Template, "Navigation_Conditional_30_Template");
function Navigation_ng_template_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li")(1, "a", 57)(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("href", item_r2.url, ɵɵsanitizeUrl);
    ɵɵattribute("aria-label", item_r2.displayName);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r2.displayName);
  }
}
__name(Navigation_ng_template_36_For_2_Template, "Navigation_ng_template_36_For_2_Template");
function Navigation_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 56);
    ɵɵrepeaterCreate(1, Navigation_ng_template_36_For_2_Template, 4, 3, "li", null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r2.versions());
  }
}
__name(Navigation_ng_template_36_Template, "Navigation_ng_template_36_Template");
function Navigation_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 58)(1, "li")(2, "a", 59);
    ɵɵnamespaceSVG();
    ɵɵelementStart(3, "svg", 60);
    ɵɵelement(4, "path", 61);
    ɵɵelementEnd()()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(5, "li")(6, "a", 62);
    ɵɵnamespaceSVG();
    ɵɵelementStart(7, "svg", 63);
    ɵɵelement(8, "path", 64);
    ɵɵelementEnd()()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(9, "li")(10, "a", 65);
    ɵɵnamespaceSVG();
    ɵɵelementStart(11, "svg", 66);
    ɵɵelement(12, "path", 67);
    ɵɵelementEnd()()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(13, "li")(14, "a", 68);
    ɵɵnamespaceSVG();
    ɵɵelementStart(15, "svg", 69);
    ɵɵelement(16, "path", 70);
    ɵɵelementEnd()()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(17, "li")(18, "a", 71);
    ɵɵnamespaceSVG();
    ɵɵelementStart(19, "svg", 72);
    ɵɵelement(20, "path", 73);
    ɵɵelementEnd()()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(21, "li")(22, "a", 74);
    ɵɵnamespaceSVG();
    ɵɵelementStart(23, "svg", 75);
    ɵɵelement(24, "path", 76);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("href", ctx_r2.ngLinks.YOUTUBE, ɵɵsanitizeUrl);
    ɵɵadvance(4);
    ɵɵproperty("href", ctx_r2.ngLinks.X, ɵɵsanitizeUrl);
    ɵɵadvance(4);
    ɵɵproperty("href", ctx_r2.ngLinks.BLUESKY, ɵɵsanitizeUrl);
    ɵɵadvance(4);
    ɵɵproperty("href", ctx_r2.ngLinks.MEDIUM, ɵɵsanitizeUrl);
    ɵɵadvance(4);
    ɵɵproperty("href", ctx_r2.ngLinks.GITHUB, ɵɵsanitizeUrl);
    ɵɵadvance(4);
    ɵɵproperty("href", ctx_r2.ngLinks.DISCORD, ɵɵsanitizeUrl);
  }
}
__name(Navigation_ng_template_76_Template, "Navigation_ng_template_76_Template");
function Navigation_Case_81_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", "light_mode", " ");
  }
}
__name(Navigation_Case_81_Template, "Navigation_Case_81_Template");
function Navigation_Case_82_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", "dark_mode", " ");
  }
}
__name(Navigation_Case_82_Template, "Navigation_Case_82_Template");
function Navigation_Case_83_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", "routine", " ");
  }
}
__name(Navigation_Case_83_Template, "Navigation_Case_83_Template");
function Navigation_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 58)(1, "li")(2, "button", 77);
    ɵɵlistener("click", /* @__PURE__ */ __name(function Navigation_ng_template_84_Template_button_click_2_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.setTheme("auto"));
    }, "Navigation_ng_template_84_Template_button_click_2_listener"));
    ɵɵelementStart(3, "docs-icon", 78);
    ɵɵtext(4, "routine");
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtext(6, "系統");
    ɵɵelementEnd()()();
    ɵɵelementStart(7, "li")(8, "button", 79);
    ɵɵlistener("click", /* @__PURE__ */ __name(function Navigation_ng_template_84_Template_button_click_8_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.setTheme("dark"));
    }, "Navigation_ng_template_84_Template_button_click_8_listener"));
    ɵɵelementStart(9, "docs-icon", 78);
    ɵɵtext(10, "dark_mode");
    ɵɵelementEnd();
    ɵɵelementStart(11, "span");
    ɵɵtext(12, "暗黑");
    ɵɵelementEnd()()();
    ɵɵelementStart(13, "li")(14, "button", 80);
    ɵɵlistener("click", /* @__PURE__ */ __name(function Navigation_ng_template_84_Template_button_click_14_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.setTheme("light"));
    }, "Navigation_ng_template_84_Template_button_click_14_listener"));
    ɵɵelementStart(15, "docs-icon", 78);
    ɵɵtext(16, "light_mode");
    ɵɵelementEnd();
    ɵɵelementStart(17, "span");
    ɵɵtext(18, "明亮");
    ɵɵelementEnd()()()();
  }
}
__name(Navigation_ng_template_84_Template, "Navigation_ng_template_84_Template");
function Navigation_Conditional_86_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "文件");
    ɵɵelementEnd();
  }
}
__name(Navigation_Conditional_86_Conditional_4_Template, "Navigation_Conditional_86_Conditional_4_Template");
function Navigation_Conditional_86_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "API");
    ɵɵelementEnd();
  }
}
__name(Navigation_Conditional_86_Conditional_5_Template, "Navigation_Conditional_86_Conditional_5_Template");
function Navigation_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 49)(1, "button", 81);
    ɵɵlistener("click", /* @__PURE__ */ __name(function Navigation_Conditional_86_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.openMobileNav($event));
    }, "Navigation_Conditional_86_Template_button_click_1_listener"));
    ɵɵelementStart(2, "docs-icon", 78);
    ɵɵtext(3, "menu");
    ɵɵelementEnd();
    ɵɵconditionalCreate(4, Navigation_Conditional_86_Conditional_4_Template, 2, 0, "span");
    ɵɵconditionalCreate(5, Navigation_Conditional_86_Conditional_5_Template, 2, 0, "span");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵconditional(ctx_r2.activeRouteItem() === ctx_r2.PAGE_PREFIX.DOCS ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.activeRouteItem() === ctx_r2.PAGE_PREFIX.REFERENCE ? 5 : -1);
  }
}
__name(Navigation_Conditional_86_Template, "Navigation_Conditional_86_Template");
var _Navigation = class _Navigation {
  destroyRef = inject(DestroyRef);
  document = inject(DOCUMENT);
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  navigationState = inject(NavigationState);
  router = inject(Router);
  location = inject(Location);
  themeManager = inject(ThemeManager);
  isSearchDialogOpen = inject(IS_SEARCH_DIALOG_OPEN);
  versionManager = inject(VersionManager);
  PAGE_PREFIX = PAGE_PREFIX;
  ngLinks = ANGULAR_LINKS;
  PRIMARY_NAV_ID = PRIMARY_NAV_ID;
  SECONDARY_NAV_ID = SECONDARY_NAV_ID;
  // We can't use the ActivatedRouter queryParams as we're outside the router outlet
  isUwu = "location" in globalThis ? location.search.includes("uwu") : false;
  miniMenuPositions = [
    new ConnectionPositionPair({ originX: "end", originY: "center" }, { overlayX: "start", overlayY: "center" }),
    new ConnectionPositionPair({ originX: "end", originY: "top" }, { overlayX: "start", overlayY: "top" })
  ];
  APPLE_SEARCH_LABEL = `⌘`;
  DEFAULT_SEARCH_LABEL = `ctrl`;
  activeRouteItem = this.navigationState.primaryActiveRouteItem;
  theme = this.themeManager.theme;
  openedMenu = null;
  currentDocsVersion = this.versionManager.currentDocsVersion;
  currentDocsVersionMode = this.versionManager.currentDocsVersionMode;
  // Set the values of the search label and title only on the client, because the label is user-agent specific.
  searchLabel = this.isBrowser ? isApple ? this.APPLE_SEARCH_LABEL : this.DEFAULT_SEARCH_LABEL : "";
  searchTitle = this.isBrowser ? isApple ? `${COMMAND} ${SEARCH_TRIGGER_KEY.toUpperCase()}` : `${CONTROL} ${SEARCH_TRIGGER_KEY.toUpperCase()}` : "";
  versions = this.versionManager.versions;
  isMobileNavigationOpened = this.navigationState.isMobileNavVisible;
  isMobileNavigationOpened$ = toObservable(this.isMobileNavigationOpened);
  primaryRouteChanged$ = toObservable(this.activeRouteItem);
  constructor() {
    this.listenToRouteChange();
    this.preventToScrollContentWhenSecondaryNavIsOpened();
    this.closeMobileNavOnPrimaryRouteChange();
  }
  setTheme(theme) {
    this.themeManager.setTheme(theme);
  }
  openVersionMenu($event) {
    $event.stopImmediatePropagation();
    $event.preventDefault();
    this.openMenu("version-picker");
  }
  openMenu(menuType) {
    this.openedMenu = menuType;
  }
  closeMenu() {
    this.openedMenu = null;
  }
  openMobileNav($event) {
    $event.stopPropagation();
    this.navigationState.setMobileNavigationListVisibility(true);
  }
  closeMobileNav() {
    this.navigationState.setMobileNavigationListVisibility(false);
  }
  toggleSearchDialog(event) {
    event.stopPropagation();
    this.isSearchDialogOpen.update((isOpen) => !isOpen);
  }
  closeMobileNavOnPrimaryRouteChange() {
    this.primaryRouteChanged$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.closeMobileNav();
    });
  }
  listenToRouteChange() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map((event) => event.urlAfterRedirects)).pipe(
      takeUntilDestroyed(this.destroyRef),
      //using location because router.url will only return "/" here
      startWith(this.location.path())
    ).subscribe((url) => {
      this.setActivePrimaryRoute(getBaseUrlAfterRedirects(url, this.router));
    });
  }
  // Set active route item, based on urlAfterRedirects.
  // First check if url starts with the main prefixes (docs, reference, tutorials).
  // (*) Docs navigation tree contains items which will navigate to /tutorials.
  // In that case after click on such link we should mark as active item, and display tutorials navigation tree.
  // If it's not starting with prefix then check if specific path exist in the array of defined routes
  // (*) Reference navigation tree contains items which are not start with prefix like /migrations or /errors.
  setActivePrimaryRoute(urlAfterRedirects) {
    if (urlAfterRedirects === "") {
      this.activeRouteItem.set(PAGE_PREFIX.HOME);
    } else if (urlAfterRedirects.startsWith(PAGE_PREFIX.DOCS)) {
      this.activeRouteItem.set(PAGE_PREFIX.DOCS);
    } else if (urlAfterRedirects.startsWith(PAGE_PREFIX.REFERENCE) || urlAfterRedirects.startsWith(PAGE_PREFIX.API) || urlAfterRedirects.startsWith(PAGE_PREFIX.UPDATE)) {
      this.activeRouteItem.set(PAGE_PREFIX.REFERENCE);
    } else if (urlAfterRedirects === PAGE_PREFIX.PLAYGROUND) {
      this.activeRouteItem.set(PAGE_PREFIX.PLAYGROUND);
    } else if (urlAfterRedirects.startsWith(PAGE_PREFIX.TUTORIALS)) {
      this.activeRouteItem.set(PAGE_PREFIX.TUTORIALS);
    } else if (DOCS_ROUTES.some((route) => route.path === urlAfterRedirects)) {
      this.activeRouteItem.set(PAGE_PREFIX.DOCS);
    } else if (REFERENCE_ROUTES.some((route) => route.path === urlAfterRedirects)) {
      this.activeRouteItem.set(PAGE_PREFIX.REFERENCE);
    } else if (TUTORIALS_ROUTES.some((route) => route.path === urlAfterRedirects)) {
      this.activeRouteItem.set(PAGE_PREFIX.TUTORIALS);
    } else {
      this.activeRouteItem.set(null);
    }
  }
  preventToScrollContentWhenSecondaryNavIsOpened() {
    this.isMobileNavigationOpened$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((opened) => {
      if (opened) {
        this.document.body.style.overflowY = "hidden";
      } else {
        this.document.body.style.removeProperty("overflow-y");
      }
    });
  }
};
__name(_Navigation, "Navigation");
__publicField(_Navigation, "ɵfac", /* @__PURE__ */ __name(function Navigation_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Navigation)();
}, "Navigation_Factory"));
__publicField(_Navigation, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _Navigation, selectors: [["div", 8, "adev-nav"]], attrs: _c02, decls: 87, vars: 44, consts: [["docsVersionMiniMenu", ""], ["socialMiniMenu", ""], ["themeMiniMenu", ""], [1, "wrapper", 3, "docsClickOutside", "docsClickOutsideIgnore"], [1, "adev-mobile-nav-bar"], ["type", "button", "aria-label", "切換行動端導向", 1, "adev-mobile-nav-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 223 236", "width", "32"], ["clip-path", "url(#2a)"], ["fill", "url(#2b)", "d", "m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"], ["fill", "url(#2c)", "d", "m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"], ["id", "2b", "x1", "49.009", "x2", "225.829", "y1", "213.75", "y2", "129.722", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#E40035"], ["offset", ".24", "stop-color", "#F60A48"], ["offset", ".352", "stop-color", "#F20755"], ["offset", ".494", "stop-color", "#DC087D"], ["offset", ".745", "stop-color", "#9717E7"], ["offset", "1", "stop-color", "#6C00F5"], ["id", "2c", "x1", "41.025", "x2", "156.741", "y1", "28.344", "y2", "160.344", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FF31D9"], ["offset", "1", "stop-color", "#FF5BE1", "stop-opacity", "0"], ["id", "2a"], ["fill", "#fff", "d", "M0 0h223v236H0z"], ["role", "presentation"], [1, "adev-nav-primary", "docs-scroll-hide"], ["type", "button", "aria-label", "關閉導向", 1, "adev-close-nav", 3, "click"], [1, "adev-nav__top"], [1, "adev-nav-item", "adev-nav-item--logo"], ["aria-label", "Angular 首頁", "routerLink", "/"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 223 236", "width", "32", 1, "angular-logo"], ["src", "assets/images/uwu.png", "alt", "Angular logo", "height", "34", 1, "uwu-logo", 2, "width", "auto", "margin", "0"], [1, "adev-nav-item"], ["type", "button", "aria-label", "選擇 Angular 版本", "role", "menu", 1, "adev-version-button", 3, "cdkMenuClosed", "click", "cdkMenuTriggerFor", "cdkMenuPosition"], ["xmlns", "http://www.w3.org/2000/svg", "height", "15", "viewBox", "0 -960 960 960", "width", "15", "fill", "inherit"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"], ["type", "button", "title", "搜尋文件", 1, "adev-nav-button", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "inherit"], ["d", "M14.583 15.48 9.104 10a4.591 4.591 0 0 1-1.458.844 5.156 5.156 0 0 1-1.771.302c-1.5 0-2.77-.52-3.813-1.563C1.022 8.542.5 7.285.5 5.813c0-1.473.52-2.73 1.563-3.771C3.103 1 4.367.479 5.854.479 7.326.48 8.58 1 9.614 2.042c1.035 1.041 1.553 2.298 1.553 3.77 0 .598-.098 1.174-.292 1.73A5.287 5.287 0 0 1 10 9.104l5.5 5.459-.917.916ZM5.854 9.895c1.125 0 2.083-.4 2.875-1.198a3.95 3.95 0 0 0 1.188-2.885 3.95 3.95 0 0 0-1.188-2.886C7.938 2.13 6.98 1.73 5.854 1.73c-1.139 0-2.107.4-2.906 1.198-.799.799-1.198 1.76-1.198 2.886 0 1.125.4 2.086 1.198 2.885.799.799 1.767 1.198 2.906 1.198Z"], [1, "adev-nav-item__label", "adev-search-desktop"], [3, "routerLink"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "18", "fill", "inherit"], ["d", "M3.645 13.792h6.708v-1.25H3.645v1.25Zm0-3.542h6.708V9H3.645v1.25Zm-2.063 7.083a1.2 1.2 0 0 1-.875-.375 1.2 1.2 0 0 1-.375-.875V1.917a1.2 1.2 0 0 1 .375-.875 1.2 1.2 0 0 1 .875-.375h7.52l4.563 4.562v10.854a1.2 1.2 0 0 1-.375.875 1.2 1.2 0 0 1-.875.375H1.582ZM8.478 5.792V1.917H1.582v14.166h10.833V5.792H8.478Z"], [1, "adev-nav-item__label"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "10", "fill", "inherit"], ["d", "m5.668 10-5-5 5-5 1.187 1.188L3.022 5.02l3.813 3.812L5.668 10Zm6.667 0-1.188-1.188L14.98 4.98l-3.812-3.812L12.335 0l5 5-5 5Z"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 -960 960 960", "width", "24"], ["d", "M450.001-611.691v-32.386q-39.385-9.923-64.692-41.897-25.308-31.975-25.308-74.025 0-49.922 35.038-84.96 35.039-35.038 84.961-35.038t84.961 35.038q35.038 35.038 35.038 84.96 0 42.05-25.308 74.025-25.307 31.974-64.692 41.897v32.386l273.846 157.538q17.173 9.912 26.663 26.582 9.491 16.671 9.491 36.495v62.152q0 19.824-9.491 36.495-9.49 16.67-26.663 26.582L516.154-111.771q-17.203 9.846-36.217 9.846t-36.091-9.846L176.155-265.847q-17.173-9.912-26.663-26.582-9.491-16.671-9.491-36.495v-62.152q0-19.824 9.491-36.495 9.49-16.67 26.663-26.582l273.846-157.538Zm-6.155 364.537L200-387.461v58.537q0 3.078 1.539 5.962 1.538 2.885 4.615 4.808l267.692 154.692q3.077 1.923 6.154 1.923t6.154-1.923l267.692-154.692q3.077-1.923 4.615-4.808 1.539-2.884 1.539-5.962v-58.537L516.154-247.154q-17.203 9.847-36.217 9.847t-36.091-9.847Zm6.155-162.847V-542.77L250.46-427.691l223.386 128.846q3.077 1.924 6.154 1.924t6.154-1.924l223.001-128.846L509.999-542.77v132.769h-59.998ZM480-699.999q25 0 42.5-17.5t17.5-42.5q0-25-17.5-42.5t-42.5-17.5q-25 0-42.5 17.5t-17.5 42.5q0 25 17.5 42.5t42.5 17.5Zm-2.308 538.46Z"], [1, "adev-nav__bottom"], ["type", "button", "aria-label", "開啟社交媒體連結", 3, "cdkMenuClosed", "cdkMenuOpened", "cdkMenuTriggerFor", "cdkMenuPosition"], ["type", "button", "aria-label", "開啟主題選取器", 3, "cdkMenuClosed", "cdkMenuOpened", "cdkMenuTriggerFor", "cdkMenuPosition"], [1, "adev-secondary-tablet-bar"], ["clip-path", "url(#a)"], ["fill", "url(#b)", "d", "m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"], ["fill", "url(#c)", "d", "m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"], ["id", "b", "x1", "49.009", "x2", "225.829", "y1", "213.75", "y2", "129.722", "gradientUnits", "userSpaceOnUse"], ["id", "c", "x1", "41.025", "x2", "156.741", "y1", "28.344", "y2", "160.344", "gradientUnits", "userSpaceOnUse"], ["id", "a"], ["cdkMenu", "", 1, "adev-mini-menu", "adev-version-picker"], ["type", "button", "cdkMenuItem", "", 3, "href"], ["cdkMenu", "", 1, "adev-mini-menu"], ["cdkMenuItem", "", "title", "Angular YouTube 頻道", "target", "_blank", "rel", "noopener", 3, "href"], ["width", "20", "height", "15", "viewBox", "0 0 20 15", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18.7556 2.94783C18.5803 1.98018 17.745 1.27549 16.7756 1.05549C15.325 0.747832 12.6403 0.527832 9.73563 0.527832C6.83266 0.527832 4.105 0.747832 2.65266 1.05549C1.685 1.27549 0.847969 1.93549 0.672656 2.94783C0.495625 4.04783 0.320312 5.58783 0.320312 7.56783C0.320312 9.54783 0.495625 11.0878 0.715625 12.1878C0.892656 13.1555 1.72797 13.8602 2.69563 14.0802C4.23563 14.3878 6.87563 14.6078 9.78031 14.6078C12.685 14.6078 15.325 14.3878 16.865 14.0802C17.8327 13.8602 18.668 13.2002 18.845 12.1878C19.0203 11.0878 19.2403 9.50314 19.285 7.56783C19.1956 5.58783 18.9756 4.04783 18.7556 2.94783ZM7.36031 10.6478V4.48783L12.728 7.56783L7.36031 10.6478Z"], ["cdkMenuItem", "", "title", "Angular X (前 Twitter) 檔案", "target", "_blank", "rel", "noopener", 3, "href"], ["width", "17", "height", "16", "viewBox", "0 0 17 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0.04145 0.04432l6.56351 8.77603L0 15.95564h1.48651l5.78263-6.24705 4.6722 6.24705h5.05865l-6.9328-9.26967L16.21504.04432h-1.48651l-5.32552 5.75341L5.1001.04432H.04145Zm2.18602 1.09497h2.32396l10.26221 13.72122h-2.32396L2.22747 1.13928Z"], ["cdkMenuItem", "", "title", "Angular Bluesky 檔案", "target", "_blank", "rel", "noopener", 3, "href"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.697-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948Z"], ["cdkMenuItem", "", "title", "Angular Medium 部落格", "target", "_blank", "rel", "noopener", 3, "href"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7 6A7 7 0 107 20 7 7 0 107 6zM18 6.5A3 6.5 0 1018 19.5 3 6.5 0 1018 6.5zM23 8A1 5 0 1023 18 1 5 0 1023 8z"], ["cdkMenuItem", "", "title", "Angular Github", "target", "_blank", "rel", "noopener", 3, "href"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.59948 19.0428C7.59948 18.8069 7.59118 18.182 7.58656 17.3526C4.89071 17.9526 4.32164 16.0201 4.32164 16.0201C3.88087 14.8718 3.24533 14.5663 3.24533 14.5663C2.36518 13.9492 3.31179 13.9621 3.31179 13.9621C4.28471 14.0323 4.79656 14.9868 4.79656 14.9868C5.66102 16.5052 7.06456 16.0672 7.61748 15.8125C7.70564 15.17 7.95579 14.732 8.23271 14.4837C6.08056 14.2331 3.81764 13.3801 3.81764 9.57199C3.81764 8.48737 4.19564 7.6003 4.81548 6.90522C4.71625 6.65414 4.38302 5.64384 4.91056 4.27537C4.91056 4.27537 5.72471 4.00814 7.57594 5.29399C8.34856 5.07384 9.17795 4.96307 10.0027 4.95937C10.8256 4.96307 11.6546 5.07384 12.429 5.29399C14.2793 4.00814 15.0921 4.27537 15.0921 4.27537C15.621 5.64337 15.2883 6.65368 15.1881 6.90522C15.8093 7.6003 16.1841 8.48737 16.1841 9.57199C16.1841 13.3898 13.9179 14.2298 11.7589 14.4758C12.1073 14.7828 12.4166 15.3892 12.4166 16.3165C12.4166 17.6452 12.4041 18.7174 12.4041 19.0428C12.4041 19.3091 12.579 19.6178 13.071 19.5205C16.9193 18.2041 19.6936 14.4814 19.6936 10.0926C19.6936 4.60353 15.3538 0.154297 10.0009 0.154297C4.64887 0.154297 0.309021 4.60353 0.309021 10.0926C0.309483 14.4828 3.08656 18.2078 6.9381 19.5218C7.42225 19.6128 7.59948 19.3058 7.59948 19.0428Z"], ["cdkMenuItem", "", "title", "Angular Discord", "target", "_blank", "rel", "noopener", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 127.14 96.36", "width", "20", "height", "20", "fill", "none"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,110.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"], ["type", "button", "cdkMenuItem", "", "aria-label", "設定為系統預設主題", 3, "click"], [1, "docs-icon_high-contrast"], ["type", "button", "cdkMenuItem", "", "aria-label", "設定為暗黑主題", 3, "click"], ["type", "button", "cdkMenuItem", "", "aria-label", "設定為明亮主題", 3, "click"], ["type", "button", 3, "click"]], template: /* @__PURE__ */ __name(function Navigation_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("docsClickOutside", /* @__PURE__ */ __name(function Navigation_Template_div_docsClickOutside_0_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.closeMobileNav());
    }, "Navigation_Template_div_docsClickOutside_0_listener"));
    ɵɵelementStart(1, "div", 4)(2, "button", 5);
    ɵɵlistener("click", /* @__PURE__ */ __name(function Navigation_Template_button_click_2_listener($event) {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.openMobileNav($event));
    }, "Navigation_Template_button_click_2_listener"));
    ɵɵnamespaceSVG();
    ɵɵelementStart(3, "svg", 6)(4, "g", 7);
    ɵɵelement(5, "path", 8)(6, "path", 9);
    ɵɵelementEnd();
    ɵɵelementStart(7, "defs")(8, "linearGradient", 10);
    ɵɵelement(9, "stop", 11)(10, "stop", 12)(11, "stop", 13)(12, "stop", 14)(13, "stop", 15)(14, "stop", 16);
    ɵɵelementEnd();
    ɵɵelementStart(15, "linearGradient", 17);
    ɵɵelement(16, "stop", 18)(17, "stop", 19);
    ɵɵelementEnd();
    ɵɵelementStart(18, "clipPath", 20);
    ɵɵelement(19, "path", 21);
    ɵɵelementEnd()()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(20, "docs-icon", 22);
    ɵɵtext(21, "menu");
    ɵɵelementEnd()()();
    ɵɵelementStart(22, "nav", 23)(23, "button", 24);
    ɵɵlistener("click", /* @__PURE__ */ __name(function Navigation_Template_button_click_23_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.closeMobileNav());
    }, "Navigation_Template_button_click_23_listener"));
    ɵɵelementStart(24, "docs-icon", 22);
    ɵɵtext(25, "close");
    ɵɵelementEnd()();
    ɵɵelementStart(26, "ul", 25)(27, "li", 26)(28, "a", 27);
    ɵɵconditionalCreate(29, Navigation_Conditional_29_Template, 17, 0, ":svg:svg", 28)(30, Navigation_Conditional_30_Template, 1, 0, "img", 29);
    ɵɵelementEnd();
    ɵɵelementStart(31, "div", 30)(32, "button", 31);
    ɵɵlistener("cdkMenuClosed", /* @__PURE__ */ __name(function Navigation_Template_button_cdkMenuClosed_32_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.closeMenu());
    }, "Navigation_Template_button_cdkMenuClosed_32_listener"))("click", /* @__PURE__ */ __name(function Navigation_Template_button_click_32_listener($event) {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.openVersionMenu($event));
    }, "Navigation_Template_button_click_32_listener"));
    ɵɵtext(33);
    ɵɵnamespaceSVG();
    ɵɵelementStart(34, "svg", 32);
    ɵɵelement(35, "path", 33);
    ɵɵelementEnd()();
    ɵɵtemplate(36, Navigation_ng_template_36_Template, 3, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(38, "li", 30)(39, "button", 34);
    ɵɵlistener("click", /* @__PURE__ */ __name(function Navigation_Template_button_click_39_listener($event) {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.toggleSearchDialog($event));
    }, "Navigation_Template_button_click_39_listener"));
    ɵɵnamespaceSVG();
    ɵɵelementStart(40, "svg", 35);
    ɵɵelement(41, "path", 36);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(42, "span", 37)(43, "kbd");
    ɵɵtext(44);
    ɵɵelementEnd();
    ɵɵelementStart(45, "kbd");
    ɵɵtext(46, "K");
    ɵɵelementEnd()()()();
    ɵɵelementStart(47, "li", 30)(48, "a", 38);
    ɵɵnamespaceSVG();
    ɵɵelementStart(49, "svg", 39);
    ɵɵelement(50, "path", 40);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(51, "span", 41);
    ɵɵtext(52, "文件");
    ɵɵelementEnd()()();
    ɵɵelementStart(53, "li", 30)(54, "a", 38);
    ɵɵnamespaceSVG();
    ɵɵelementStart(55, "svg", 42);
    ɵɵelement(56, "path", 43);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(57, "span", 41);
    ɵɵtext(58, "教程");
    ɵɵelementEnd()()();
    ɵɵelementStart(59, "li", 30)(60, "a", 38);
    ɵɵnamespaceSVG();
    ɵɵelementStart(61, "svg", 44);
    ɵɵelement(62, "path", 45);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(63, "span", 41);
    ɵɵtext(64, "演練場");
    ɵɵelementEnd()()();
    ɵɵelementStart(65, "li", 30)(66, "a", 38);
    ɵɵnamespaceSVG();
    ɵɵelementStart(67, "svg", 39);
    ɵɵelement(68, "path", 40);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(69, "span", 41);
    ɵɵtext(70, "參考手冊");
    ɵɵelementEnd()()()();
    ɵɵelementStart(71, "div", 46)(72, "div", 30)(73, "button", 47);
    ɵɵlistener("cdkMenuClosed", /* @__PURE__ */ __name(function Navigation_Template_button_cdkMenuClosed_73_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.closeMenu());
    }, "Navigation_Template_button_cdkMenuClosed_73_listener"))("cdkMenuOpened", /* @__PURE__ */ __name(function Navigation_Template_button_cdkMenuOpened_73_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.openMenu("social"));
    }, "Navigation_Template_button_cdkMenuOpened_73_listener"));
    ɵɵelementStart(74, "docs-icon", 22);
    ɵɵtext(75, "more_horiz");
    ɵɵelementEnd()();
    ɵɵtemplate(76, Navigation_ng_template_76_Template, 25, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(78, "div", 30)(79, "button", 48);
    ɵɵlistener("cdkMenuClosed", /* @__PURE__ */ __name(function Navigation_Template_button_cdkMenuClosed_79_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.closeMenu());
    }, "Navigation_Template_button_cdkMenuClosed_79_listener"))("cdkMenuOpened", /* @__PURE__ */ __name(function Navigation_Template_button_cdkMenuOpened_79_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(ctx.openMenu("theme-picker"));
    }, "Navigation_Template_button_cdkMenuOpened_79_listener"));
    ɵɵelementStart(80, "docs-icon", 22);
    ɵɵconditionalCreate(81, Navigation_Case_81_Template, 1, 1)(82, Navigation_Case_82_Template, 1, 1)(83, Navigation_Case_83_Template, 1, 1);
    ɵɵelementEnd()();
    ɵɵtemplate(84, Navigation_ng_template_84_Template, 19, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()()();
    ɵɵconditionalCreate(86, Navigation_Conditional_86_Template, 6, 2, "div", 49);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_31_0;
    const docsVersionMiniMenu_r6 = ɵɵreference(37);
    const socialMiniMenu_r7 = ɵɵreference(77);
    const themeMiniMenu_r8 = ɵɵreference(85);
    ɵɵproperty("docsClickOutsideIgnore", ɵɵpureFunction1(42, _c1, ctx.SECONDARY_NAV_ID));
    ɵɵattribute("id", ctx.PRIMARY_NAV_ID);
    ɵɵadvance(22);
    ɵɵclassProp("adev-nav-primary--open", ctx.isMobileNavigationOpened())("adev-nav-primary--rc", ctx.currentDocsVersionMode === "rc")("adev-nav-primary--next", ctx.currentDocsVersionMode === "next")("adev-nav-primary--deprecated", ctx.currentDocsVersionMode === "deprecated");
    ɵɵadvance(5);
    ɵɵclassProp("adev-nav-item--active", ctx.activeRouteItem() === ctx.PAGE_PREFIX.HOME);
    ɵɵadvance(2);
    ɵɵconditional(!ctx.isUwu ? 29 : 30);
    ɵɵadvance(3);
    ɵɵclassProp("adev-mini-menu-open", ctx.openedMenu === "version-picker");
    ɵɵproperty("cdkMenuTriggerFor", docsVersionMiniMenu_r6)("cdkMenuPosition", ctx.miniMenuPositions);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx.currentDocsVersion().displayName, " ");
    ɵɵadvance(9);
    ɵɵattribute("aria-label", "Open search dialog with " + ctx.searchTitle);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx.searchLabel);
    ɵɵadvance(3);
    ɵɵclassProp("adev-nav-item--active", ctx.activeRouteItem() === ctx.PAGE_PREFIX.DOCS);
    ɵɵadvance();
    ɵɵproperty("routerLink", ctx.PAGE_PREFIX.DOCS);
    ɵɵadvance(5);
    ɵɵclassProp("adev-nav-item--active", ctx.activeRouteItem() === ctx.PAGE_PREFIX.TUTORIALS);
    ɵɵadvance();
    ɵɵproperty("routerLink", ctx.PAGE_PREFIX.TUTORIALS);
    ɵɵadvance(5);
    ɵɵclassProp("adev-nav-item--active", ctx.activeRouteItem() === ctx.PAGE_PREFIX.PLAYGROUND);
    ɵɵadvance();
    ɵɵproperty("routerLink", ctx.PAGE_PREFIX.PLAYGROUND);
    ɵɵadvance(5);
    ɵɵclassProp("adev-nav-item--active", ctx.activeRouteItem() === ctx.PAGE_PREFIX.REFERENCE);
    ɵɵadvance();
    ɵɵproperty("routerLink", ctx.PAGE_PREFIX.REFERENCE);
    ɵɵadvance(6);
    ɵɵclassProp("adev-nav-item--active", ctx.openedMenu === "social");
    ɵɵadvance();
    ɵɵproperty("cdkMenuTriggerFor", socialMiniMenu_r7)("cdkMenuPosition", ctx.miniMenuPositions);
    ɵɵadvance(5);
    ɵɵclassProp("adev-nav-item--active", ctx.openedMenu === "theme-picker");
    ɵɵadvance();
    ɵɵproperty("cdkMenuTriggerFor", themeMiniMenu_r8)("cdkMenuPosition", ctx.miniMenuPositions);
    ɵɵadvance(2);
    ɵɵconditional((tmp_31_0 = ctx.theme()) === "light" ? 81 : tmp_31_0 === "dark" ? 82 : tmp_31_0 === "auto" ? 83 : -1);
    ɵɵadvance(5);
    ɵɵconditional(ctx.activeRouteItem() === ctx.PAGE_PREFIX.DOCS || ctx.activeRouteItem() === ctx.PAGE_PREFIX.REFERENCE ? 86 : -1);
  }
}, "Navigation_Template"), dependencies: [RouterLink, ClickOutside, CdkMenu, CdkMenuItem, CdkMenuTrigger, IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  position: sticky;\n  top: 0;\n  z-index: var(--z-index-nav);\n}\n[_nghost-%COMP%]   .adev-mobile-nav-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  [_nghost-%COMP%]:has(.adev-nav-primary--open) {\n    z-index: 50;\n  }\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.adev-mobile-nav-bar[_ngcontent-%COMP%] {\n  display: none;\n  gap: 0.75rem;\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  background-color: color-mix(in srgb, var(--page-background) 70%, transparent);\n  position: relative;\n  width: 100%;\n  padding-block: 0.75rem;\n  padding-inline: var(--layout-padding);\n  border-block-end: 1px solid var(--septenary-contrast);\n  box-sizing: border-box;\n  transform: translateY(0);\n  transition: transform 0.3s ease-out 0.6s;\n}\n@media (max-width: 700px) {\n  .adev-mobile-nav-bar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.adev-mobile-nav-bar[_ngcontent-%COMP%]:has(+ .adev-nav-primary--open) {\n  transform: translateY(-100%);\n  transition: transform 0.3s ease-in;\n}\n.adev-mobile-nav-bar[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n}\n.adev-nav-primary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-height: 100vh;\n  overflow: auto;\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  background-color: color-mix(in srgb, var(--page-background) 70%, transparent);\n  z-index: 250;\n  position: relative;\n  transition: background-color 0.3s ease, border-color 0.3s ease;\n  height: 100dvh;\n  padding-block-start: 1rem;\n  padding-block-end: 2rem;\n  box-sizing: border-box;\n  border-block-end: 1px solid var(--septenary-contrast);\n}\n@media (min-width: 900.01px) {\n  .adev-nav-primary[_ngcontent-%COMP%] {\n    border-inline-end: 1px solid var(--septenary-contrast);\n  }\n}\n@media (max-width: 700px) {\n  .adev-nav-primary[_ngcontent-%COMP%] {\n    border-inline-end: 1px solid var(--septenary-contrast);\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-primary[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: 100%;\n    padding-inline: calc(var(--layout-padding) - 1.25rem);\n    height: auto;\n    padding-block: 0;\n  }\n}\n.adev-nav-primary.adev-nav-primary--next[_ngcontent-%COMP%], \n.adev-nav-primary.adev-nav-primary--rc[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      140deg,\n      color-mix(in srgb, var(--orange-red), transparent 60%) 0%,\n      color-mix(in srgb, var(--vivid-pink), transparent 40%) 15%,\n      color-mix(in srgb, var(--electric-violet), transparent 70%) 25%,\n      color-mix(in srgb, var(--bright-blue), transparent 60%) 90%);\n}\n.adev-nav-primary.adev-nav-primary--deprecated[_ngcontent-%COMP%] {\n  background-color: var(--deprecated-docs-bg);\n}\n.adev-nav-primary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 700px) {\n  .adev-nav-primary[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    background-color: var(--page-background);\n    box-shadow: 10px 4px 3px 0 rgba(0, 0, 0, 0.001);\n    transform: translateX(-100%);\n    transition: transform 0.3s ease-in 0.38s;\n  }\n  .adev-nav-primary.adev-nav-primary--open[_ngcontent-%COMP%] {\n    transform: translateX(0%);\n    transition: transform 0.3s ease-out 0.1s;\n  }\n}\n@media (max-width: 700px) and (prefers-reduced-motion: reduce-motion) {\n  .adev-nav-primary[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.adev-nav__top[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav__top[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.adev-nav__top[_ngcontent-%COMP%]   .adev-version-button[_ngcontent-%COMP%] {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  width: fit-content;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  gap: 0.25rem;\n  color: var(--quaternary-contrast);\n  fill: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.adev-nav__top[_ngcontent-%COMP%]   .adev-version-button[_ngcontent-%COMP%]:hover {\n  color: var(--primary-contrast);\n}\n.adev-nav__top[_ngcontent-%COMP%]   .adev-version-button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  font-size: inherit;\n  line-height: inherit;\n  transition: transform 0.2s ease;\n}\n@media (max-width: 700px) {\n  .adev-nav__top[_ngcontent-%COMP%]   .adev-version-button.adev-mini-menu-open[_ngcontent-%COMP%]::after {\n    transform: rotate(-90deg);\n  }\n}\n@media (min-width: 900.01px) {\n  .adev-nav__top[_ngcontent-%COMP%]   .adev-version-button.adev-mini-menu-open[_ngcontent-%COMP%]::after {\n    transform: rotate(-90deg);\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav__top[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-of-type {\n    padding-inline-start: 1.25rem;\n  }\n  .adev-nav__top[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-inline: 0.875rem;\n  }\n}\n.adev-nav__bottom[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav__bottom[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    margin-inline-end: 1.25rem;\n    gap: 0.75rem;\n  }\n}\n.adev-nav__bottom[_ngcontent-%COMP%]   .adev-nav-item--active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n}\n.adev-nav__bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  width: 100%;\n  padding-inline: 1rem;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav__bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding-inline: 0.5rem;\n  }\n}\n.adev-nav__bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  color: var(--quaternary-contrast);\n  font-size: 1.5rem;\n}\n@media (max-width: 900px) {\n  .adev-nav__bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n.adev-nav__bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   docs-icon[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n}\n.adev-nav-item--logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 34px;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item--logo[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n}\n.adev-close-nav[_ngcontent-%COMP%] {\n  display: none;\n  color: var(--primary-contrast);\n}\n@media (max-width: 700px) {\n  .adev-close-nav[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.adev-search-desktop[_ngcontent-%COMP%] {\n  height: 1.375rem;\n  text-transform: capitalize;\n}\n@media (max-width: 900px) {\n  .adev-search-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.adev-sub-navigation-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.adev-secondary-tablet-bar[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  background-color: color-mix(in srgb, var(--page-background) 70%, transparent);\n  border-block-end: 1px solid var(--septenary-contrast);\n  padding-block: 1rem;\n  padding-inline: var(--layout-padding);\n  transition: background-color 0.3s ease, border-color 0.3s ease;\n}\n.adev-secondary-tablet-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  color: var(--primary-contrast);\n  padding: 0;\n  font-weight: 500;\n}\n@media (min-width: 900.01px) {\n  .adev-secondary-tablet-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 700px) {\n  .adev-secondary-tablet-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=navigation.component.css.map */", "\n\n.adev-mini-menu[_ngcontent-%COMP%] {\n  padding: 0;\n  color: var(--primary-contrast);\n  background-color: var(--page-background);\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  z-index: var(--z-index-mini-menu);\n  box-shadow: 10px 4px 40px 0 rgba(0, 0, 0, 0.075);\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-mini-menu[_ngcontent-%COMP%] {\n    top: 75px;\n    left: 5px;\n  }\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 1rem;\n  min-width: 75px;\n  min-height: 75px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--senary-contrast);\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], \n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   docs-icon[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  min-width: 50px;\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: var(--quaternary-contrast);\n  transition: fill 0.3s ease;\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--senary-contrast);\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: var(--primary-contrast);\n}\n.adev-mini-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-mini-menu-open[_ngcontent-%COMP%] {\n  display: block;\n}\n.adev-version-picker[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 90vh;\n  top: 30px;\n  left: 10px;\n  position: absolute;\n  bottom: auto;\n}\n.adev-version-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-inline: 0;\n}\n.adev-version-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 1em;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-version-picker[_ngcontent-%COMP%] {\n    top: 30px;\n    left: auto;\n    bottom: auto;\n  }\n}\n/*# sourceMappingURL=mini-menu.css.map */", '\n\n.adev-nav-item[_ngcontent-%COMP%] {\n  color: var(--quaternary-contrast);\n  position: relative;\n  width: 6.875rem;\n}\n@media (max-width: 700px) {\n  .adev-nav-item[_ngcontent-%COMP%] {\n    width: 5.05rem;\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n}\n.adev-nav-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  width: 2px;\n  background-color: var(--primary-contrast);\n  opacity: 0;\n  transform: scale(0.9);\n  transform-origin: center;\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item[_ngcontent-%COMP%]::before {\n    width: auto;\n    top: auto;\n    right: 0;\n    height: 2px;\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item[_ngcontent-%COMP%]:not(.adev-nav-item--logo)   a[_ngcontent-%COMP%], \n   .adev-nav-item[_ngcontent-%COMP%]:not(.adev-nav-item--logo)   .adev-nav-button[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n}\n.adev-nav-item[_ngcontent-%COMP%]   .adev-nav-button[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: 500;\n}\n.adev-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.adev-nav-item[_ngcontent-%COMP%]   .adev-nav-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n  padding-block: 1.25rem;\n  text-decoration: none;\n  fill: var(--quaternary-contrast);\n  color: inherit;\n  cursor: pointer;\n  transition: fill 0.3s ease;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .adev-nav-item[_ngcontent-%COMP%]   .adev-nav-button[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.adev-nav-item__label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.813;\n  color: inherit;\n}\n.adev-nav-item__label[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%] {\n  font-size: 0.688;\n}\n.adev-nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.adev-nav-item[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%] {\n  transition: color 0.3s ease;\n}\n.adev-nav-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], \n.adev-nav-item[_ngcontent-%COMP%]:hover   .adev-nav-button[_ngcontent-%COMP%] {\n  fill: var(--primary-contrast);\n}\n.adev-nav-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], \n.adev-nav-item[_ngcontent-%COMP%]:hover   abbr[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n}\n.adev-nav-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n}\n.adev-nav-item--active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.adev-nav-item--active[_ngcontent-%COMP%]:not(.adev-nav-item--logo)   path[_ngcontent-%COMP%] {\n  fill: var(--primary-contrast);\n}\n.adev-nav-item--active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.adev-nav-item--active[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%], \n.adev-nav-item--active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n}\n/*# sourceMappingURL=nav-item.css.map */'], changeDetection: 0 }));
var Navigation = _Navigation;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navigation, [{
    type: Component,
    args: [{ selector: "div.adev-nav", imports: [RouterLink, ClickOutside, CdkMenu, CdkMenuItem, CdkMenuTrigger, IconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- Primary Nav -->
<div
  [attr.id]="PRIMARY_NAV_ID"
  class="wrapper"
  (docsClickOutside)="closeMobileNav()"
  [docsClickOutsideIgnore]="[SECONDARY_NAV_ID]"
>
  <!-- Mobile nav bar -->
  <div class="adev-mobile-nav-bar">
    <!-- Logo icon -->
    <button
      type="button"
      class="adev-mobile-nav-button"
      aria-label="切換行動端導向"
      (click)="openMobileNav($event)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 223 236" width="32">
        <g clip-path="url(#2a)">
          <path
            fill="url(#2b)"
            d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
          />
          <path
            fill="url(#2c)"
            d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
          />
        </g>
        <defs>
          <linearGradient
            id="2b"
            x1="49.009"
            x2="225.829"
            y1="213.75"
            y2="129.722"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E40035" />
            <stop offset=".24" stop-color="#F60A48" />
            <stop offset=".352" stop-color="#F20755" />
            <stop offset=".494" stop-color="#DC087D" />
            <stop offset=".745" stop-color="#9717E7" />
            <stop offset="1" stop-color="#6C00F5" />
          </linearGradient>
          <linearGradient
            id="2c"
            x1="41.025"
            x2="156.741"
            y1="28.344"
            y2="160.344"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF31D9" />
            <stop offset="1" stop-color="#FF5BE1" stop-opacity="0" />
          </linearGradient>
          <clipPath id="2a"><path fill="#fff" d="M0 0h223v236H0z" /></clipPath>
        </defs>
      </svg>
      <docs-icon role="presentation">menu</docs-icon>
    </button>
  </div>

  <nav
    class="adev-nav-primary docs-scroll-hide"
    [class.adev-nav-primary--open]="isMobileNavigationOpened()"
    [class.adev-nav-primary--rc]="currentDocsVersionMode === 'rc'"
    [class.adev-nav-primary--next]="currentDocsVersionMode === 'next'"
    [class.adev-nav-primary--deprecated]="currentDocsVersionMode === 'deprecated'"
  >
    <button
      type="button"
      class="adev-close-nav"
      (click)="closeMobileNav()"
      aria-label="關閉導向"
    >
      <docs-icon role="presentation">close</docs-icon>
    </button>
    <!-- Top section of primary nav -->
    <ul class="adev-nav__top">
      <!-- Home / Angular logo -->
      <li
        class="adev-nav-item adev-nav-item--logo"
        [class.adev-nav-item--active]="activeRouteItem() === PAGE_PREFIX.HOME"
      >
        <a aria-label="Angular 首頁" routerLink="/">
          <!-- Logo Symbol -->
          @if (!isUwu) {
            <svg
              class="angular-logo"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 223 236"
              width="32"
            >
              <g clip-path="url(#a)">
                <path
                  fill="url(#b)"
                  d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
                />
                <path
                  fill="url(#c)"
                  d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
                />
              </g>
              <defs>
                <linearGradient
                  id="b"
                  x1="49.009"
                  x2="225.829"
                  y1="213.75"
                  y2="129.722"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E40035" />
                  <stop offset=".24" stop-color="#F60A48" />
                  <stop offset=".352" stop-color="#F20755" />
                  <stop offset=".494" stop-color="#DC087D" />
                  <stop offset=".745" stop-color="#9717E7" />
                  <stop offset="1" stop-color="#6C00F5" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="41.025"
                  x2="156.741"
                  y1="28.344"
                  y2="160.344"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF31D9" />
                  <stop offset="1" stop-color="#FF5BE1" stop-opacity="0" />
                </linearGradient>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h223v236H0z" />
                </clipPath>
              </defs>
            </svg>
          } @else {
            <img
              src="assets/images/uwu.png"
              style="width: auto; margin: 0"
              class="uwu-logo"
              alt="Angular logo"
              height="34"
            />
          }
        </a>

        <!-- Version picker for v18+ -->
        <div class="adev-nav-item">
          <button
            type="button"
            aria-label="選擇 Angular 版本"
            role="menu"
            class="adev-version-button"
            [class.adev-mini-menu-open]="openedMenu === 'version-picker'"
            [cdkMenuTriggerFor]="docsVersionMiniMenu"
            [cdkMenuPosition]="miniMenuPositions"
            (cdkMenuClosed)="closeMenu()"
            (click)="openVersionMenu($event)"
          >
            {{ currentDocsVersion().displayName }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              viewBox="0 -960 960 960"
              width="15"
              fill="inherit"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </button>

          <ng-template #docsVersionMiniMenu>
            <ul class="adev-mini-menu adev-version-picker" cdkMenu>
              @for (item of versions(); track item) {
              <li>
                <a
                  type="button"
                  cdkMenuItem
                  [href]="item.url"
                  [attr.aria-label]="item.displayName"
                >
                  <span>{{ item.displayName }}</span>
              </a>
              </li>
              }
            </ul>
          </ng-template>
        </div>
      </li>

      <!-- Search -->
      <li class="adev-nav-item">
        <button
          class="adev-nav-button"
          type="button"
          (click)="toggleSearchDialog($event)"
          title="搜尋文件"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="inherit"
          >
            <path
              d="M14.583 15.48 9.104 10a4.591 4.591 0 0 1-1.458.844 5.156 5.156 0 0 1-1.771.302c-1.5 0-2.77-.52-3.813-1.563C1.022 8.542.5 7.285.5 5.813c0-1.473.52-2.73 1.563-3.771C3.103 1 4.367.479 5.854.479 7.326.48 8.58 1 9.614 2.042c1.035 1.041 1.553 2.298 1.553 3.77 0 .598-.098 1.174-.292 1.73A5.287 5.287 0 0 1 10 9.104l5.5 5.459-.917.916ZM5.854 9.895c1.125 0 2.083-.4 2.875-1.198a3.95 3.95 0 0 0 1.188-2.885 3.95 3.95 0 0 0-1.188-2.886C7.938 2.13 6.98 1.73 5.854 1.73c-1.139 0-2.107.4-2.906 1.198-.799.799-1.198 1.76-1.198 2.886 0 1.125.4 2.086 1.198 2.885.799.799 1.767 1.198 2.906 1.198Z"
            />
          </svg>
          <span
            class="adev-nav-item__label adev-search-desktop"
            [attr.aria-label]="'Open search dialog with ' + searchTitle"
          >
            <kbd>{{ searchLabel }}</kbd>
            <kbd>K</kbd>
          </span>
        </button>
      </li>

      <!-- Docs -->
      <li
        class="adev-nav-item"
        [class.adev-nav-item--active]="activeRouteItem() === PAGE_PREFIX.DOCS"
      >
        <a [routerLink]="PAGE_PREFIX.DOCS">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="18"
            fill="inherit"
          >
            <path
              d="M3.645 13.792h6.708v-1.25H3.645v1.25Zm0-3.542h6.708V9H3.645v1.25Zm-2.063 7.083a1.2 1.2 0 0 1-.875-.375 1.2 1.2 0 0 1-.375-.875V1.917a1.2 1.2 0 0 1 .375-.875 1.2 1.2 0 0 1 .875-.375h7.52l4.563 4.562v10.854a1.2 1.2 0 0 1-.375.875 1.2 1.2 0 0 1-.875.375H1.582ZM8.478 5.792V1.917H1.582v14.166h10.833V5.792H8.478Z"
            />
          </svg>
          <span class="adev-nav-item__label">文件</span>
        </a>
      </li>

      <!-- Tutorials -->
      <li
        class="adev-nav-item"
        [class.adev-nav-item--active]="activeRouteItem() === PAGE_PREFIX.TUTORIALS"
      >
        <a [routerLink]="PAGE_PREFIX.TUTORIALS">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            fill="inherit"
          >
            <path
              d="m5.668 10-5-5 5-5 1.187 1.188L3.022 5.02l3.813 3.812L5.668 10Zm6.667 0-1.188-1.188L14.98 4.98l-3.812-3.812L12.335 0l5 5-5 5Z"
            />
          </svg>
          <span class="adev-nav-item__label">教程</span>
        </a>
      </li>

      <!-- Playground -->
      <li
        class="adev-nav-item"
        [class.adev-nav-item--active]="activeRouteItem() === PAGE_PREFIX.PLAYGROUND"
      >
        <a [routerLink]="PAGE_PREFIX.PLAYGROUND">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M450.001-611.691v-32.386q-39.385-9.923-64.692-41.897-25.308-31.975-25.308-74.025 0-49.922 35.038-84.96 35.039-35.038 84.961-35.038t84.961 35.038q35.038 35.038 35.038 84.96 0 42.05-25.308 74.025-25.307 31.974-64.692 41.897v32.386l273.846 157.538q17.173 9.912 26.663 26.582 9.491 16.671 9.491 36.495v62.152q0 19.824-9.491 36.495-9.49 16.67-26.663 26.582L516.154-111.771q-17.203 9.846-36.217 9.846t-36.091-9.846L176.155-265.847q-17.173-9.912-26.663-26.582-9.491-16.671-9.491-36.495v-62.152q0-19.824 9.491-36.495 9.49-16.67 26.663-26.582l273.846-157.538Zm-6.155 364.537L200-387.461v58.537q0 3.078 1.539 5.962 1.538 2.885 4.615 4.808l267.692 154.692q3.077 1.923 6.154 1.923t6.154-1.923l267.692-154.692q3.077-1.923 4.615-4.808 1.539-2.884 1.539-5.962v-58.537L516.154-247.154q-17.203 9.847-36.217 9.847t-36.091-9.847Zm6.155-162.847V-542.77L250.46-427.691l223.386 128.846q3.077 1.924 6.154 1.924t6.154-1.924l223.001-128.846L509.999-542.77v132.769h-59.998ZM480-699.999q25 0 42.5-17.5t17.5-42.5q0-25-17.5-42.5t-42.5-17.5q-25 0-42.5 17.5t-17.5 42.5q0 25 17.5 42.5t42.5 17.5Zm-2.308 538.46Z"
            />
          </svg>
          <span class="adev-nav-item__label">演練場</span>
        </a>
      </li>

      <!-- API Ref -->
      <li
        class="adev-nav-item"
        [class.adev-nav-item--active]="activeRouteItem() === PAGE_PREFIX.REFERENCE"
      >
        <a [routerLink]="PAGE_PREFIX.REFERENCE">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="18"
            fill="inherit"
          >
            <path
              d="M3.645 13.792h6.708v-1.25H3.645v1.25Zm0-3.542h6.708V9H3.645v1.25Zm-2.063 7.083a1.2 1.2 0 0 1-.875-.375 1.2 1.2 0 0 1-.375-.875V1.917a1.2 1.2 0 0 1 .375-.875 1.2 1.2 0 0 1 .875-.375h7.52l4.563 4.562v10.854a1.2 1.2 0 0 1-.375.875 1.2 1.2 0 0 1-.875.375H1.582ZM8.478 5.792V1.917H1.582v14.166h10.833V5.792H8.478Z"
            />
          </svg>
          <span class="adev-nav-item__label">參考手冊</span>
        </a>
      </li>
    </ul>

    <!-- Bottom section of primary nav -->
    <div class="adev-nav__bottom">
      <!-- Social Icons Dots -->
      <div class="adev-nav-item" [class.adev-nav-item--active]="openedMenu === 'social'">
        <button
          type="button"
          [cdkMenuTriggerFor]="socialMiniMenu"
          [cdkMenuPosition]="miniMenuPositions"
          aria-label="開啟社交媒體連結"
          (cdkMenuClosed)="closeMenu()"
          (cdkMenuOpened)="openMenu('social')"
        >
          <docs-icon role="presentation">more_horiz</docs-icon>
        </button>

        <ng-template #socialMiniMenu>
          <ul class="adev-mini-menu" cdkMenu>
            <li>
              <a
                [href]="ngLinks.YOUTUBE"
                cdkMenuItem
                title="Angular YouTube 頻道"
                target="_blank"
                rel="noopener"
              >
                <!-- Youtube Icon -->
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7556 2.94783C18.5803 1.98018 17.745 1.27549 16.7756 1.05549C15.325 0.747832 12.6403 0.527832 9.73563 0.527832C6.83266 0.527832 4.105 0.747832 2.65266 1.05549C1.685 1.27549 0.847969 1.93549 0.672656 2.94783C0.495625 4.04783 0.320312 5.58783 0.320312 7.56783C0.320312 9.54783 0.495625 11.0878 0.715625 12.1878C0.892656 13.1555 1.72797 13.8602 2.69563 14.0802C4.23563 14.3878 6.87563 14.6078 9.78031 14.6078C12.685 14.6078 15.325 14.3878 16.865 14.0802C17.8327 13.8602 18.668 13.2002 18.845 12.1878C19.0203 11.0878 19.2403 9.50314 19.285 7.56783C19.1956 5.58783 18.9756 4.04783 18.7556 2.94783ZM7.36031 10.6478V4.48783L12.728 7.56783L7.36031 10.6478Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                [href]="ngLinks.X"
                cdkMenuItem
                title="Angular X (前 Twitter) 檔案"
                target="_blank"
                rel="noopener"
              >
                <!-- X Icon -->
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.04145 0.04432l6.56351 8.77603L0 15.95564h1.48651l5.78263-6.24705 4.6722 6.24705h5.05865l-6.9328-9.26967L16.21504.04432h-1.48651l-5.32552 5.75341L5.1001.04432H.04145Zm2.18602 1.09497h2.32396l10.26221 13.72122h-2.32396L2.22747 1.13928Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                [href]="ngLinks.BLUESKY"
                cdkMenuItem
                title="Angular Bluesky 檔案"
                target="_blank"
                rel="noopener"
              >
                <!-- Bluesky Icon -->
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.697-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948Z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                [href]="ngLinks.MEDIUM"
                cdkMenuItem
                title="Angular Medium 部落格"
                target="_blank"
                rel="noopener"
              >
                <!-- Medium Icon -->
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 6A7 7 0 107 20 7 7 0 107 6zM18 6.5A3 6.5 0 1018 19.5 3 6.5 0 1018 6.5zM23 8A1 5 0 1023 18 1 5 0 1023 8z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                [href]="ngLinks.GITHUB"
                cdkMenuItem
                title="Angular Github"
                target="_blank"
                rel="noopener"
              >
                <!-- Github Icon -->
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.59948 19.0428C7.59948 18.8069 7.59118 18.182 7.58656 17.3526C4.89071 17.9526 4.32164 16.0201 4.32164 16.0201C3.88087 14.8718 3.24533 14.5663 3.24533 14.5663C2.36518 13.9492 3.31179 13.9621 3.31179 13.9621C4.28471 14.0323 4.79656 14.9868 4.79656 14.9868C5.66102 16.5052 7.06456 16.0672 7.61748 15.8125C7.70564 15.17 7.95579 14.732 8.23271 14.4837C6.08056 14.2331 3.81764 13.3801 3.81764 9.57199C3.81764 8.48737 4.19564 7.6003 4.81548 6.90522C4.71625 6.65414 4.38302 5.64384 4.91056 4.27537C4.91056 4.27537 5.72471 4.00814 7.57594 5.29399C8.34856 5.07384 9.17795 4.96307 10.0027 4.95937C10.8256 4.96307 11.6546 5.07384 12.429 5.29399C14.2793 4.00814 15.0921 4.27537 15.0921 4.27537C15.621 5.64337 15.2883 6.65368 15.1881 6.90522C15.8093 7.6003 16.1841 8.48737 16.1841 9.57199C16.1841 13.3898 13.9179 14.2298 11.7589 14.4758C12.1073 14.7828 12.4166 15.3892 12.4166 16.3165C12.4166 17.6452 12.4041 18.7174 12.4041 19.0428C12.4041 19.3091 12.579 19.6178 13.071 19.5205C16.9193 18.2041 19.6936 14.4814 19.6936 10.0926C19.6936 4.60353 15.3538 0.154297 10.0009 0.154297C4.64887 0.154297 0.309021 4.60353 0.309021 10.0926C0.309483 14.4828 3.08656 18.2078 6.9381 19.5218C7.42225 19.6128 7.59948 19.3058 7.59948 19.0428Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                [href]="ngLinks.DISCORD"
                cdkMenuItem
                title="Angular Discord"
                target="_blank"
                rel="noopener"
              >
                <!-- Discord Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,110.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </ng-template>
      </div>
      <!-- TODO: Refactor this and make it better. Accessible, animated, etc. -->
      <div class="adev-nav-item" [class.adev-nav-item--active]="openedMenu === 'theme-picker'">
        <button
          type="button"
          [cdkMenuTriggerFor]="themeMiniMenu"
          [cdkMenuPosition]="miniMenuPositions"
          aria-label="開啟主題選取器"
          (cdkMenuClosed)="closeMenu()"
          (cdkMenuOpened)="openMenu('theme-picker')"
        >
          <docs-icon role="presentation">
            @switch (theme()) {
              @case ('light') {
                {{ 'light_mode' }}
              }
              @case ('dark') {
                {{ 'dark_mode' }}
              }
              @case ('auto') {
                {{ 'routine' }}
              }
            }
          </docs-icon>
        </button>

        <ng-template #themeMiniMenu>
          <ul class="adev-mini-menu" cdkMenu>
            <li>
              <button
                type="button"
                cdkMenuItem
                (click)="setTheme('auto')"
                aria-label="設定為系統預設主題"
              >
                <docs-icon class="docs-icon_high-contrast">routine</docs-icon>
                <span>系統</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                cdkMenuItem
                (click)="setTheme('dark')"
                aria-label="設定為暗黑主題"
              >
                <docs-icon class="docs-icon_high-contrast">dark_mode</docs-icon>
                <span>暗黑</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                cdkMenuItem
                (click)="setTheme('light')"
                aria-label="設定為明亮主題"
              >
                <docs-icon class="docs-icon_high-contrast">light_mode</docs-icon>
                <span>明亮</span>
              </button>
            </li>
          </ul>
        </ng-template>
      </div>
    </div>
  </nav>

  <!-- Tablet: Second horizontal nav layer which opens the secondary nav -->
  @if (activeRouteItem() === PAGE_PREFIX.DOCS || activeRouteItem() === PAGE_PREFIX.REFERENCE) {
    <div class="adev-secondary-tablet-bar">
      <button type="button" (click)="openMobileNav($event)">
        <docs-icon class="docs-icon_high-contrast">menu</docs-icon>
        @if (activeRouteItem() === PAGE_PREFIX.DOCS) {
          <span>文件</span>
        }
        @if (activeRouteItem() === PAGE_PREFIX.REFERENCE) {
          <span>API</span>
        }
      </button>
    </div>
  }
</div>
`, styles: ["/* src/app/core/layout/navigation/navigation.component.scss */\n:host {\n  display: flex;\n  position: sticky;\n  top: 0;\n  z-index: var(--z-index-nav);\n}\n:host .adev-mobile-nav-button {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  :host:has(.adev-nav-primary--open) {\n    z-index: 50;\n  }\n}\n@media (max-width: 900px) {\n  :host {\n    width: 100%;\n  }\n  :host .wrapper {\n    width: 100%;\n  }\n}\n.adev-mobile-nav-bar {\n  display: none;\n  gap: 0.75rem;\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  background-color: color-mix(in srgb, var(--page-background) 70%, transparent);\n  position: relative;\n  width: 100%;\n  padding-block: 0.75rem;\n  padding-inline: var(--layout-padding);\n  border-block-end: 1px solid var(--septenary-contrast);\n  box-sizing: border-box;\n  transform: translateY(0);\n  transition: transform 0.3s ease-out 0.6s;\n}\n@media (max-width: 700px) {\n  .adev-mobile-nav-bar {\n    display: flex;\n  }\n}\n.adev-mobile-nav-bar:has(+ .adev-nav-primary--open) {\n  transform: translateY(-100%);\n  transition: transform 0.3s ease-in;\n}\n.adev-mobile-nav-bar docs-icon {\n  color: var(--primary-contrast);\n}\n.adev-nav-primary {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-height: 100vh;\n  overflow: auto;\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  background-color: color-mix(in srgb, var(--page-background) 70%, transparent);\n  z-index: 250;\n  position: relative;\n  transition: background-color 0.3s ease, border-color 0.3s ease;\n  height: 100dvh;\n  padding-block-start: 1rem;\n  padding-block-end: 2rem;\n  box-sizing: border-box;\n  border-block-end: 1px solid var(--septenary-contrast);\n}\n@media (min-width: 900.01px) {\n  .adev-nav-primary {\n    border-inline-end: 1px solid var(--septenary-contrast);\n  }\n}\n@media (max-width: 700px) {\n  .adev-nav-primary {\n    border-inline-end: 1px solid var(--septenary-contrast);\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-primary {\n    flex-direction: row;\n    width: 100%;\n    padding-inline: calc(var(--layout-padding) - 1.25rem);\n    height: auto;\n    padding-block: 0;\n  }\n}\n.adev-nav-primary.adev-nav-primary--next,\n.adev-nav-primary.adev-nav-primary--rc {\n  background:\n    linear-gradient(\n      140deg,\n      color-mix(in srgb, var(--orange-red), transparent 60%) 0%,\n      color-mix(in srgb, var(--vivid-pink), transparent 40%) 15%,\n      color-mix(in srgb, var(--electric-violet), transparent 70%) 25%,\n      color-mix(in srgb, var(--bright-blue), transparent 60%) 90%);\n}\n.adev-nav-primary.adev-nav-primary--deprecated {\n  background-color: var(--deprecated-docs-bg);\n}\n.adev-nav-primary > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 700px) {\n  .adev-nav-primary {\n    position: absolute;\n    top: 0;\n    background-color: var(--page-background);\n    box-shadow: 10px 4px 3px 0 rgba(0, 0, 0, 0.001);\n    transform: translateX(-100%);\n    transition: transform 0.3s ease-in 0.38s;\n  }\n  .adev-nav-primary.adev-nav-primary--open {\n    transform: translateX(0%);\n    transition: transform 0.3s ease-out 0.1s;\n  }\n}\n@media (max-width: 700px) and (prefers-reduced-motion: reduce-motion) {\n  .adev-nav-primary {\n    transition: none;\n  }\n}\n.adev-nav__top {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav__top {\n    flex-direction: row;\n  }\n}\n.adev-nav__top .adev-version-button {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  width: fit-content;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  gap: 0.25rem;\n  color: var(--quaternary-contrast);\n  fill: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.adev-nav__top .adev-version-button:hover {\n  color: var(--primary-contrast);\n}\n.adev-nav__top .adev-version-button docs-icon {\n  font-size: inherit;\n  line-height: inherit;\n  transition: transform 0.2s ease;\n}\n@media (max-width: 700px) {\n  .adev-nav__top .adev-version-button.adev-mini-menu-open::after {\n    transform: rotate(-90deg);\n  }\n}\n@media (min-width: 900.01px) {\n  .adev-nav__top .adev-version-button.adev-mini-menu-open::after {\n    transform: rotate(-90deg);\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav__top > li:first-of-type {\n    padding-inline-start: 1.25rem;\n  }\n  .adev-nav__top li {\n    padding-inline: 0.875rem;\n  }\n}\n.adev-nav__bottom {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav__bottom {\n    flex-direction: row !important;\n    margin-inline-end: 1.25rem;\n    gap: 0.75rem;\n  }\n}\n.adev-nav__bottom .adev-nav-item--active button docs-icon {\n  color: var(--primary-contrast);\n}\n.adev-nav__bottom button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  width: 100%;\n  padding-inline: 1rem;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav__bottom button {\n    padding-inline: 0.5rem;\n  }\n}\n.adev-nav__bottom button docs-icon {\n  color: var(--quaternary-contrast);\n  font-size: 1.5rem;\n}\n@media (max-width: 900px) {\n  .adev-nav__bottom button docs-icon {\n    font-size: 1.25rem;\n  }\n}\n.adev-nav__bottom button:hover docs-icon {\n  color: var(--primary-contrast);\n}\n.adev-nav-item--logo a {\n  height: 34px;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item--logo {\n    gap: 0.75rem;\n  }\n}\n.adev-close-nav {\n  display: none;\n  color: var(--primary-contrast);\n}\n@media (max-width: 700px) {\n  .adev-close-nav {\n    display: block;\n  }\n}\n.adev-search-desktop {\n  height: 1.375rem;\n  text-transform: capitalize;\n}\n@media (max-width: 900px) {\n  .adev-search-desktop {\n    display: none;\n  }\n}\n.adev-sub-navigation-hidden {\n  display: none;\n}\n.adev-secondary-tablet-bar {\n  font-size: 0.875rem;\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  background-color: color-mix(in srgb, var(--page-background) 70%, transparent);\n  border-block-end: 1px solid var(--septenary-contrast);\n  padding-block: 1rem;\n  padding-inline: var(--layout-padding);\n  transition: background-color 0.3s ease, border-color 0.3s ease;\n}\n.adev-secondary-tablet-bar button {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  color: var(--primary-contrast);\n  padding: 0;\n  font-weight: 500;\n}\n@media (min-width: 900.01px) {\n  .adev-secondary-tablet-bar {\n    display: none;\n  }\n}\n@media (max-width: 700px) {\n  .adev-secondary-tablet-bar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=navigation.component.css.map */\n", "/* src/app/core/layout/navigation/mini-menu.scss */\n.adev-mini-menu {\n  padding: 0;\n  color: var(--primary-contrast);\n  background-color: var(--page-background);\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  z-index: var(--z-index-mini-menu);\n  box-shadow: 10px 4px 40px 0 rgba(0, 0, 0, 0.075);\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-mini-menu {\n    top: 75px;\n    left: 5px;\n  }\n}\n.adev-mini-menu li {\n  list-style: none;\n}\n.adev-mini-menu li button {\n  padding: 1rem;\n  min-width: 75px;\n  min-height: 75px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.adev-mini-menu li button docs-icon {\n  font-size: 1.5rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-mini-menu li button:hover {\n  background-color: var(--senary-contrast);\n}\n.adev-mini-menu li button:hover span,\n.adev-mini-menu li button:hover docs-icon {\n  color: var(--primary-contrast);\n}\n.adev-mini-menu li a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  min-width: 50px;\n}\n.adev-mini-menu li a svg {\n  fill: var(--quaternary-contrast);\n  transition: fill 0.3s ease;\n}\n.adev-mini-menu li a:hover {\n  background-color: var(--senary-contrast);\n}\n.adev-mini-menu li a:hover svg {\n  fill: var(--primary-contrast);\n}\n.adev-mini-menu li span {\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-mini-menu-open {\n  display: block;\n}\n.adev-version-picker {\n  overflow-y: auto;\n  max-height: 90vh;\n  top: 30px;\n  left: 10px;\n  position: absolute;\n  bottom: auto;\n}\n.adev-version-picker li {\n  padding-inline: 0;\n}\n.adev-version-picker li a {\n  line-height: 1em;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-version-picker {\n    top: 30px;\n    left: auto;\n    bottom: auto;\n  }\n}\n/*# sourceMappingURL=mini-menu.css.map */\n", '/* src/app/core/layout/navigation/nav-item.scss */\n.adev-nav-item {\n  color: var(--quaternary-contrast);\n  position: relative;\n  width: 6.875rem;\n}\n@media (max-width: 700px) {\n  .adev-nav-item {\n    width: 5.05rem;\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n}\n.adev-nav-item::before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  width: 2px;\n  background-color: var(--primary-contrast);\n  opacity: 0;\n  transform: scale(0.9);\n  transform-origin: center;\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item::before {\n    width: auto;\n    top: auto;\n    right: 0;\n    height: 2px;\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item:not(.adev-nav-item--logo) a,\n  .adev-nav-item:not(.adev-nav-item--logo) .adev-nav-button {\n    gap: 0.25rem;\n  }\n}\n.adev-nav-item .adev-nav-button {\n  width: 100%;\n  font-weight: 500;\n}\n.adev-nav-item a,\n.adev-nav-item .adev-nav-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n  padding-block: 1.25rem;\n  text-decoration: none;\n  fill: var(--quaternary-contrast);\n  color: inherit;\n  cursor: pointer;\n  transition: fill 0.3s ease;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .adev-nav-item a,\n  .adev-nav-item .adev-nav-button {\n    flex-direction: row;\n  }\n}\n.adev-nav-item__label {\n  margin: 0;\n  font-size: 0.813;\n  color: inherit;\n}\n.adev-nav-item__label abbr {\n  font-size: 0.688;\n}\n.adev-nav-item i {\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-nav-item span,\n.adev-nav-item abbr {\n  transition: color 0.3s ease;\n}\n.adev-nav-item:hover a,\n.adev-nav-item:hover .adev-nav-button {\n  fill: var(--primary-contrast);\n}\n.adev-nav-item:hover span,\n.adev-nav-item:hover abbr {\n  color: var(--primary-contrast);\n}\n.adev-nav-item:hover i {\n  color: var(--primary-contrast);\n}\n.adev-nav-item--active::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.adev-nav-item--active:not(.adev-nav-item--logo) path {\n  fill: var(--primary-contrast);\n}\n.adev-nav-item--active span,\n.adev-nav-item--active abbr,\n.adev-nav-item--active i {\n  color: var(--primary-contrast);\n}\n/*# sourceMappingURL=nav-item.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(Navigation, { className: "Navigation", filePath: "src/app/core/layout/navigation/navigation.component.ts", lineNumber: 41 });
})();

// src/app/core/layout/secondary-navigation/secondary-navigation.component.ts
var _c03 = /* @__PURE__ */ __name((a0) => [a0], "_c0");
function SecondaryNavigation_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "docs-navigation-list", 4);
    ɵɵlistener("linkClicked", /* @__PURE__ */ __name(function SecondaryNavigation_Conditional_2_Template_docs_navigation_list_linkClicked_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close());
    }, "SecondaryNavigation_Conditional_2_Template_docs_navigation_list_linkClicked_0_listener"));
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("navigationItems", ctx_r1.navigationItems)("displayItemsToLevel", ctx_r1.maxVisibleLevelsOnSecondaryNav())("expandableLevel", ctx_r1.maxVisibleLevelsOnSecondaryNav());
  }
}
__name(SecondaryNavigation_Conditional_2_Template, "SecondaryNavigation_Conditional_2_Template");
function SecondaryNavigation_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "docs-navigation-list", 5);
    ɵɵlistener("linkClicked", /* @__PURE__ */ __name(function SecondaryNavigation_For_4_Template_docs_navigation_list_linkClicked_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close());
    }, "SecondaryNavigation_For_4_Template_docs_navigation_list_linkClicked_0_listener"));
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ɵ$index_8_r5 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("collapsableLevel", ɵ$index_8_r5 + ctx_r1.maxVisibleLevelsOnSecondaryNav())("expandableLevel", ɵ$index_8_r5 + ctx_r1.maxVisibleLevelsOnSecondaryNav() + 1)("navigationItems", ɵɵpureFunction1(4, _c03, item_r4))("displayItemsToLevel", ɵ$index_8_r5 + ctx_r1.maxVisibleLevelsOnSecondaryNav() + 1);
  }
}
__name(SecondaryNavigation_For_4_Template, "SecondaryNavigation_For_4_Template");
var ANIMATION_DURATION = 500;
var _SecondaryNavigation = class _SecondaryNavigation {
  destroyRef = inject(DestroyRef);
  navigationState = inject(NavigationState);
  platformId = inject(PLATFORM_ID);
  router = inject(Router);
  isSecondaryNavVisible = this.navigationState.isMobileNavVisible;
  primaryActiveRouteItem = this.navigationState.primaryActiveRouteItem;
  maxVisibleLevelsOnSecondaryNav = computed(() => this.primaryActiveRouteItem() === PAGE_PREFIX.REFERENCE ? 1 : 2, ...ngDevMode ? [{ debugName: "maxVisibleLevelsOnSecondaryNav" }] : []);
  navigationItemsSlides = this.navigationState.expandedItems;
  navigationItems;
  translateX = computed(() => {
    const level = this.navigationState.level();
    return `translateX(${-level * 100}%)`;
  }, ...ngDevMode ? [{ debugName: "translateX" }] : []);
  transition = signal("0ms", ...ngDevMode ? [{ debugName: "transition" }] : []);
  PRIMARY_NAV_ID = PRIMARY_NAV_ID;
  SECONDARY_NAV_ID = SECONDARY_NAV_ID;
  routeMap = {
    [PAGE_PREFIX.REFERENCE]: getNavigationItemsTree(SUB_NAVIGATION_DATA.reference, (tree) => markExternalLinks(tree)),
    [PAGE_PREFIX.DOCS]: getNavigationItemsTree(SUB_NAVIGATION_DATA.docs, (tree) => markExternalLinks(tree))
  };
  primaryActiveRouteChanged$ = toObservable(this.primaryActiveRouteItem).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef));
  urlAfterRedirects$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map((event) => event.urlAfterRedirects), filter((url) => url !== void 0), startWith(this.getInitialPath(this.router.routerState.snapshot)), takeUntilDestroyed(this.destroyRef));
  constructor() {
    this.navigationState.cleanExpandedState();
    this.listenToPrimaryRouteChange();
    this.setActiveRouteOnNavigationEnd();
    if (isPlatformBrowser(this.platformId)) {
      this.initSlideAnimation();
    }
  }
  close() {
    this.navigationState.setMobileNavigationListVisibility(false);
  }
  setActiveRouteOnNavigationEnd() {
    this.urlAfterRedirects$.subscribe((url) => {
      const activeNavigationItem = this.getActiveNavigationItem(url);
      if (activeNavigationItem?.level && activeNavigationItem.level <= this.maxVisibleLevelsOnSecondaryNav()) {
        this.navigationState.cleanExpandedState();
      } else if (activeNavigationItem) {
        const shouldExpandItem = /* @__PURE__ */ __name((node) => !!node.level && (this.primaryActiveRouteItem() === PAGE_PREFIX.REFERENCE ? node.level > 0 : node.level > 1), "shouldExpandItem");
        const skipExpandPredicateFn = /* @__PURE__ */ __name((node) => node.path === PAGE_PREFIX.API, "skipExpandPredicateFn");
        this.navigationState.expandItemHierarchy(activeNavigationItem, shouldExpandItem, skipExpandPredicateFn);
      }
    });
  }
  getActiveNavigationItem(url) {
    this.setVisibleNavigationItems();
    const activeNavigationItem = findNavigationItem(this.navigationItems, (item) => !!item.path && getBaseUrlAfterRedirects(item.path, this.router) === getBaseUrlAfterRedirects(url, this.router));
    this.navigationState.setActiveNavigationItem(activeNavigationItem);
    return activeNavigationItem;
  }
  initSlideAnimation() {
    if (shouldReduceMotion()) {
      return;
    }
    setTimeout(() => {
      this.transition.set(`${ANIMATION_DURATION}ms`);
    }, ANIMATION_DURATION);
  }
  setVisibleNavigationItems() {
    const routeMap = this.routeMap[this.primaryActiveRouteItem()];
    this.navigationItems = routeMap ? getNavigationItemsTree(routeMap, (item) => {
      item.isExpanded = this.primaryActiveRouteItem() === PAGE_PREFIX.DOCS && item.level === 1;
    }) : [];
  }
  listenToPrimaryRouteChange() {
    this.primaryActiveRouteChanged$.pipe(skip(1)).subscribe(() => {
      this.navigationState.cleanExpandedState();
    });
  }
  getInitialPath(routerState) {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.routeConfig?.path ?? "";
  }
};
__name(_SecondaryNavigation, "SecondaryNavigation");
__publicField(_SecondaryNavigation, "ɵfac", /* @__PURE__ */ __name(function SecondaryNavigation_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SecondaryNavigation)();
}, "SecondaryNavigation_Factory"));
__publicField(_SecondaryNavigation, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _SecondaryNavigation, selectors: [["adev-secondary-navigation"]], decls: 5, vars: 11, consts: [[1, "adev-secondary-nav-mask", 3, "docsClickOutside", "docsClickOutsideIgnore"], [1, "docs-nav-secondary", "docs-scroll-track-transparent"], [3, "navigationItems", "displayItemsToLevel", "expandableLevel"], [3, "collapsableLevel", "expandableLevel", "navigationItems", "displayItemsToLevel"], [3, "linkClicked", "navigationItems", "displayItemsToLevel", "expandableLevel"], [3, "linkClicked", "collapsableLevel", "expandableLevel", "navigationItems", "displayItemsToLevel"]], template: /* @__PURE__ */ __name(function SecondaryNavigation_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵlistener("docsClickOutside", /* @__PURE__ */ __name(function SecondaryNavigation_Template_div_docsClickOutside_0_listener() {
      return ctx.close();
    }, "SecondaryNavigation_Template_div_docsClickOutside_0_listener"));
    ɵɵelementStart(1, "div", 1);
    ɵɵconditionalCreate(2, SecondaryNavigation_Conditional_2_Template, 1, 3, "docs-navigation-list", 2);
    ɵɵrepeaterCreate(3, SecondaryNavigation_For_4_Template, 1, 6, "docs-navigation-list", 3, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵclassProp("docs-nav-secondary--open", ctx.isSecondaryNavVisible());
    ɵɵproperty("docsClickOutsideIgnore", ɵɵpureFunction1(9, _c03, ctx.PRIMARY_NAV_ID));
    ɵɵattribute("id", ctx.SECONDARY_NAV_ID);
    ɵɵadvance();
    ɵɵstyleProp("transform", ctx.translateX())("transition", ctx.transition());
    ɵɵadvance();
    ɵɵconditional(ctx.navigationItems && ctx.navigationItems.length > 0 ? 2 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx.navigationItemsSlides());
  }
}, "SecondaryNavigation_Template"), dependencies: [NavigationList, ClickOutside], styles: ["\n\n[_nghost-%COMP%] {\n  z-index: 100;\n}\n@media (min-width: 900.01px) {\n  [_nghost-%COMP%] {\n    position: sticky;\n    top: 0;\n  }\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%] {\n    position: fixed;\n  }\n}\n@media (max-width: 700px) {\n  [_nghost-%COMP%] {\n    transform: translateX(0);\n    transition: transform 0.3s ease;\n  }\n  [_nghost-%COMP%]:has(.docs-nav-secondary--open) {\n    transform: translateX(82px);\n    transition: transform 0.3s ease-in 0.3s;\n  }\n}\n.adev-secondary-nav-mask[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  overflow-x: hidden;\n  min-width: var(--secondary-nav-width);\n  border-inline-end: 1px solid var(--septenary-contrast);\n  background-color: var(--page-background);\n  z-index: var(--z-index-nav);\n  transition: transform 0.45s ease;\n}\n@media (max-width: 900px) {\n  .adev-secondary-nav-mask[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n}\n@media (prefers-reduced-motion: no-preference) {\n  .adev-secondary-nav-mask[_ngcontent-%COMP%] {\n    transition:\n      transform 0.45s ease,\n      background-color 0.3s ease,\n      border-color 0.3s ease;\n  }\n}\n@media (max-width: 900px) {\n  .adev-secondary-nav-mask[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .adev-secondary-nav-mask.docs-nav-secondary--open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n@media (max-width: 700px) {\n  .adev-secondary-nav-mask[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: transform 0.45s ease-in;\n  }\n  .adev-secondary-nav-mask.docs-nav-secondary--open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    transition: transform 0.45s ease-out 0.2s;\n  }\n}\n.docs-nav-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  max-width: var(--secondary-nav-width);\n}\n/*# sourceMappingURL=secondary-navigation.component.css.map */"], changeDetection: 0 }));
var SecondaryNavigation = _SecondaryNavigation;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecondaryNavigation, [{
    type: Component,
    args: [{ selector: "adev-secondary-navigation", imports: [NavigationList, ClickOutside], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div [attr.id]="SECONDARY_NAV_ID" class="adev-secondary-nav-mask" [class.docs-nav-secondary--open]="isSecondaryNavVisible()" (docsClickOutside)="close()" [docsClickOutsideIgnore]="[PRIMARY_NAV_ID]">\n  <div class="docs-nav-secondary docs-scroll-track-transparent" [style.transform]="translateX()" [style.transition]="transition()">\n    <!-- Secondary Nav -->\n    @if (navigationItems && navigationItems.length > 0) {\n      <docs-navigation-list\n        [navigationItems]="navigationItems"\n        [displayItemsToLevel]="maxVisibleLevelsOnSecondaryNav()"\n        [expandableLevel]="maxVisibleLevelsOnSecondaryNav()"\n        (linkClicked)="close()"\n      />\n    }\n\n    <!-- Third, fourth and next levels of navigation -->\n    @for (item of navigationItemsSlides(); track item; let level = $index) {\n      <docs-navigation-list\n        [collapsableLevel]="level + maxVisibleLevelsOnSecondaryNav()"\n        [expandableLevel]="level + maxVisibleLevelsOnSecondaryNav() + 1"\n        [navigationItems]="[item]"\n        [displayItemsToLevel]="level + maxVisibleLevelsOnSecondaryNav() + 1"\n        (linkClicked)="close()"\n      />\n    }\n  </div>\n</div>\n', styles: ["/* src/app/core/layout/secondary-navigation/secondary-navigation.component.scss */\n:host {\n  z-index: 100;\n}\n@media (min-width: 900.01px) {\n  :host {\n    position: sticky;\n    top: 0;\n  }\n}\n@media (max-width: 900px) {\n  :host {\n    position: fixed;\n  }\n}\n@media (max-width: 700px) {\n  :host {\n    transform: translateX(0);\n    transition: transform 0.3s ease;\n  }\n  :host:has(.docs-nav-secondary--open) {\n    transform: translateX(82px);\n    transition: transform 0.3s ease-in 0.3s;\n  }\n}\n.adev-secondary-nav-mask {\n  position: sticky;\n  top: 0;\n  overflow-x: hidden;\n  min-width: var(--secondary-nav-width);\n  border-inline-end: 1px solid var(--septenary-contrast);\n  background-color: var(--page-background);\n  z-index: var(--z-index-nav);\n  transition: transform 0.45s ease;\n}\n@media (max-width: 900px) {\n  .adev-secondary-nav-mask {\n    position: absolute;\n  }\n}\n@media (prefers-reduced-motion: no-preference) {\n  .adev-secondary-nav-mask {\n    transition:\n      transform 0.45s ease,\n      background-color 0.3s ease,\n      border-color 0.3s ease;\n  }\n}\n@media (max-width: 900px) {\n  .adev-secondary-nav-mask {\n    transform: translateX(-100%);\n  }\n  .adev-secondary-nav-mask.docs-nav-secondary--open {\n    transform: translateX(0);\n  }\n}\n@media (max-width: 700px) {\n  .adev-secondary-nav-mask {\n    transform: translateX(-100%);\n    transition: transform 0.45s ease-in;\n  }\n  .adev-secondary-nav-mask.docs-nav-secondary--open {\n    transform: translateX(0);\n    transition: transform 0.45s ease-out 0.2s;\n  }\n}\n.docs-nav-secondary {\n  display: flex;\n  flex-direction: row;\n  max-width: var(--secondary-nav-width);\n}\n/*# sourceMappingURL=secondary-navigation.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(SecondaryNavigation, { className: "SecondaryNavigation", filePath: "src/app/core/layout/secondary-navigation/secondary-navigation.component.ts", lineNumber: 46 });
})();

// src/app/core/services/header.service.ts
var ANGULAR_DEV = "https://angular.dev";
var _HeaderService = class _HeaderService {
  document = inject(DOCUMENT);
  /**
   * Sets the canonical link in the header.
   * It supposes the header link is already present in the index.html
   *
   * The function behave invariably and will always point to angular.dev,
   * no matter if it's a specific version build
   */
  setCanonical(absolutePath) {
    const pathWithoutFragment = this.normalizePath(absolutePath).split("#")[0];
    const fullPath = `${ANGULAR_DEV}/${pathWithoutFragment}`;
    this.document.querySelector("link[rel=canonical]")?.setAttribute("href", fullPath);
  }
  normalizePath(path) {
    if (path[0] === "/") {
      return path.substring(1);
    }
    return path;
  }
};
__name(_HeaderService, "HeaderService");
__publicField(_HeaderService, "ɵfac", /* @__PURE__ */ __name(function HeaderService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderService)();
}, "HeaderService_Factory"));
__publicField(_HeaderService, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({ token: _HeaderService, factory: _HeaderService.ɵfac, providedIn: "root" }));
var HeaderService = _HeaderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/app.component.ts
var AppComponent_Defer_3_DepsFn = /* @__PURE__ */ __name(() => [import("./chunk-Y4MJZCKD.js").then((m) => m.ProgressBarComponent), TopLevelBannerComponent], "AppComponent_Defer_3_DepsFn");
var AppComponent_Defer_9_DepsFn = /* @__PURE__ */ __name(() => [CookiePopup], "AppComponent_Defer_9_DepsFn");
var AppComponent_Defer_8_Defer_2_DepsFn = /* @__PURE__ */ __name(() => [SearchDialog], "AppComponent_Defer_8_Defer_2_DepsFn");
function AppComponent_Defer_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "adev-progress-bar")(1, "docs-top-level-banner", 4);
  }
}
__name(AppComponent_Defer_2_Template, "AppComponent_Defer_2_Template");
function AppComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "adev-secondary-navigation");
  }
}
__name(AppComponent_Conditional_6_Template, "AppComponent_Conditional_6_Template");
function AppComponent_Defer_8_Defer_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "docs-search-dialog", 5);
    ɵɵlistener("onClose", /* @__PURE__ */ __name(function AppComponent_Defer_8_Defer_1_Conditional_0_Template_docs_search_dialog_onClose_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.displaySearchDialog.set(false));
    }, "AppComponent_Defer_8_Defer_1_Conditional_0_Template_docs_search_dialog_onClose_0_listener"));
    ɵɵelementEnd();
  }
}
__name(AppComponent_Defer_8_Defer_1_Conditional_0_Template, "AppComponent_Defer_8_Defer_1_Conditional_0_Template");
function AppComponent_Defer_8_Defer_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, AppComponent_Defer_8_Defer_1_Conditional_0_Template, 1, 0, "docs-search-dialog");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.displaySearchDialog() ? 0 : -1);
  }
}
__name(AppComponent_Defer_8_Defer_1_Template, "AppComponent_Defer_8_Defer_1_Template");
function AppComponent_Defer_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "docs-cookie-popup");
    ɵɵdomTemplate(1, AppComponent_Defer_8_Defer_1_Template, 1, 1);
    ɵɵdefer(2, 1, AppComponent_Defer_8_Defer_2_DepsFn);
    ɵɵdeferPrefetchOnIdle();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵdeferWhen(ctx_r1.displaySearchDialog());
  }
}
__name(AppComponent_Defer_8_Template, "AppComponent_Defer_8_Template");
function AppComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "footer", 3);
  }
}
__name(AppComponent_Conditional_12_Template, "AppComponent_Conditional_12_Template");
var _AppComponent = class _AppComponent {
  document = inject(DOCUMENT);
  router = inject(Router);
  headerService = inject(HeaderService);
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  displaySecondaryNav = signal(false, ...ngDevMode ? [{ debugName: "displaySecondaryNav" }] : []);
  displayFooter = signal(false, ...ngDevMode ? [{ debugName: "displayFooter" }] : []);
  displaySearchDialog = inject(IS_SEARCH_DIALOG_OPEN);
  constructor() {
    this.closeSearchDialogOnNavigationSkipped();
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map((event) => event.urlAfterRedirects)).subscribe((url) => {
      const activatedRoute = getActivatedRouteSnapshotFromRouter(this.router);
      this.displayFooter.set(!activatedRoute.data["hideFooter"]);
      this.displaySecondaryNav.set(activatedRoute.data["displaySecondaryNav"]);
      this.displaySearchDialog.set(false);
      this.updateCanonicalLink(url);
    });
  }
  focusFirstHeading() {
    const h1 = this.document.querySelector("h1:not(docs-top-level-banner h1)");
    h1?.focus();
  }
  setSearchDialogVisibilityOnKeyPress(event) {
    if (event.key === SEARCH_TRIGGER_KEY && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      this.displaySearchDialog.update((display) => !display);
    }
    if (event.key === ESCAPE && this.displaySearchDialog()) {
      event.preventDefault();
      this.displaySearchDialog.set(false);
    }
    if (isDevMode() && event.key === "o" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      window.open(`https://angular.dev/${location.pathname}`, "_blank");
    }
  }
  updateCanonicalLink(absoluteUrl) {
    this.headerService.setCanonical(absoluteUrl);
  }
  closeSearchDialogOnNavigationSkipped() {
    this.router.events.pipe(filter((event) => event instanceof NavigationSkipped)).subscribe(() => {
      this.displaySearchDialog.set(false);
    });
  }
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "ɵfac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({ type: _AppComponent, selectors: [["adev-root"]], hostBindings: /* @__PURE__ */ __name(function AppComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    ɵɵlistener("keydown", /* @__PURE__ */ __name(function AppComponent_keydown_HostBindingHandler($event) {
      return ctx.setSearchDialogVisibilityOnKeyPress($event);
    }, "AppComponent_keydown_HostBindingHandler"), ɵɵresolveWindow);
  }
}, "AppComponent_HostBindings"), decls: 13, vars: 4, consts: [[1, "adev-skip", 3, "click"], [1, "adev-nav"], [1, "docs-app-main-content"], ["adev-footer", ""], ["expiry", "2024-12-10", "id", "state-of-js-2024", "link", "https://survey.devographics.com/en-US/survey/state-of-js/2024?source=angular_homepage", "text", "在 The State of JavaScript 2024 survey 中分享您的 Angular 體驗"], [3, "onClose"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 0);
    ɵɵlistener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_0_listener() {
      return ctx.focusFirstHeading();
    }, "AppComponent_Template_button_click_0_listener"));
    ɵɵtext(1, "跳轉到主要內容");
    ɵɵelementEnd();
    ɵɵdomTemplate(2, AppComponent_Defer_2_Template, 2, 0);
    ɵɵdefer(3, 2, AppComponent_Defer_3_DepsFn);
    ɵɵelement(5, "div", 1);
    ɵɵconditionalCreate(6, AppComponent_Conditional_6_Template, 1, 0, "adev-secondary-navigation");
    ɵɵelementStart(7, "div", 2);
    ɵɵdomTemplate(8, AppComponent_Defer_8_Template, 4, 1);
    ɵɵdefer(9, 8, AppComponent_Defer_9_DepsFn);
    ɵɵelement(11, "router-outlet");
    ɵɵconditionalCreate(12, AppComponent_Conditional_12_Template, 1, 0, "footer", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵdeferWhen(ctx.isBrowser);
    ɵɵadvance(3);
    ɵɵconditional(ctx.displaySecondaryNav() ? 6 : -1);
    ɵɵadvance(3);
    ɵɵdeferWhen(ctx.isBrowser);
    ɵɵadvance(3);
    ɵɵconditional(ctx.displayFooter() ? 12 : -1);
  }
}, "AppComponent_Template"), dependencies: [
  Navigation,
  Footer,
  SecondaryNavigation,
  RouterOutlet
], styles: ['\n\n[_nghost-%COMP%] {\n  margin-inline: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  min-height: 100vh;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  [_nghost-%COMP%]   docs-top-level-banner[_ngcontent-%COMP%] {\n    top: 4.6875rem;\n  }\n}\n@media (max-width: 700px) {\n  [_nghost-%COMP%]   docs-top-level-banner[_ngcontent-%COMP%] {\n    top: 3.75rem;\n    transform: translateY(0);\n    transition: transform 0.3s ease-out 0.6s;\n  }\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%]   docs-top-level-banner[_ngcontent-%COMP%] {\n    z-index: calc(var(--z-index-nav) - 1);\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  [_nghost-%COMP%]:has(adev-secondary-navigation)   docs-top-level-banner[_ngcontent-%COMP%] {\n    top: 8.125rem;\n  }\n}\n@media (max-width: 700px) {\n  [_nghost-%COMP%]:has(.adev-nav-primary--open)   docs-top-level-banner[_ngcontent-%COMP%] {\n    transform: translateY(-3.75rem);\n    transition: transform 0.3s ease-in;\n  }\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]:has(.docs-nav-secondary--open)   .docs-app-main-content[_ngcontent-%COMP%]::after, \n[_nghost-%COMP%]:has(.adev-nav-primary--open)   .docs-app-main-content[_ngcontent-%COMP%]::after {\n  visibility: visible;\n  opacity: 1;\n}\n[_nghost-%COMP%]:has(.adev-home)   .adev-nav[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n}\n@media (min-width: 900.01px) {\n  [_nghost-%COMP%]:has(.adev-home)   footer[_ngcontent-%COMP%] {\n    margin-left: var(--primary-nav-width);\n  }\n}\n.adev-skip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n  z-index: 1000;\n  background: var(--primary-contrast);\n  color: var(--page-background);\n  border: 1px solid var(--vivid-pink);\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  font-size: 0.875rem;\n  transform: translateY(-150%);\n  transition: transform 0.3s ease-out;\n}\n.adev-skip[_ngcontent-%COMP%]:focus {\n  transform: translateY(0);\n}\n.docs-app-main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100%;\n  max-width: 2560px;\n}\n.docs-app-main-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::after {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  background-color: color-mix(in srgb, var(--gray-1000) 5%, transparent);\n  z-index: 50;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .docs-app-main-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n/*# sourceMappingURL=app.component.css.map */'], changeDetection: 0 }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(AppComponent, () => [import("./chunk-Y4MJZCKD.js").then((m) => m.ProgressBarComponent)], (ProgressBarComponent) => {
    setClassMetadata(AppComponent, [{
      type: Component,
      args: [{ selector: "adev-root", changeDetection: ChangeDetectionStrategy.OnPush, imports: [
        CookiePopup,
        Navigation,
        Footer,
        SecondaryNavigation,
        RouterOutlet,
        SearchDialog,
        ProgressBarComponent,
        TopLevelBannerComponent
      ], host: {
        "(window:keydown)": "setSearchDialogVisibilityOnKeyPress($event)"
      }, template: '<button (click)="focusFirstHeading()" class="adev-skip">跳轉到主要內容</button>\n\n@defer (when isBrowser) {\n  <adev-progress-bar />\n  <docs-top-level-banner expiry="2024-12-10" id="state-of-js-2024" link="https://survey.devographics.com/en-US/survey/state-of-js/2024?source=angular_homepage" text="在 The State of JavaScript 2024 survey 中分享您的 Angular 體驗"  />\n}\n\n<div class="adev-nav"></div>\n@if (displaySecondaryNav()) {\n  <adev-secondary-navigation />\n}\n<div class="docs-app-main-content">\n  <!--\n    Avoid rendering cookies popup on the server,\n    since there is no benefit of doing this and\n    it requires additional state management.\n  -->\n  @defer (when isBrowser) {\n    <docs-cookie-popup />\n\n    @defer (when displaySearchDialog(); prefetch on idle) {\n      @if (displaySearchDialog()) {\n        <docs-search-dialog (onClose)="displaySearchDialog.set(false)" />\n      }\n    }\n  }\n  <router-outlet />\n\n  @if (displayFooter()) {\n    <footer adev-footer></footer>\n  }\n</div>\n', styles: ['/* src/app/app.component.scss */\n:host {\n  margin-inline: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  min-height: 100vh;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  :host docs-top-level-banner {\n    top: 4.6875rem;\n  }\n}\n@media (max-width: 700px) {\n  :host docs-top-level-banner {\n    top: 3.75rem;\n    transform: translateY(0);\n    transition: transform 0.3s ease-out 0.6s;\n  }\n}\n@media (max-width: 900px) {\n  :host docs-top-level-banner {\n    z-index: calc(var(--z-index-nav) - 1);\n  }\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  :host:has(adev-secondary-navigation) docs-top-level-banner {\n    top: 8.125rem;\n  }\n}\n@media (max-width: 700px) {\n  :host:has(.adev-nav-primary--open) docs-top-level-banner {\n    transform: translateY(-3.75rem);\n    transition: transform 0.3s ease-in;\n  }\n}\n@media (max-width: 900px) {\n  :host {\n    flex-direction: column;\n  }\n}\n:host:has(.docs-nav-secondary--open) .docs-app-main-content::after,\n:host:has(.adev-nav-primary--open) .docs-app-main-content::after {\n  visibility: visible;\n  opacity: 1;\n}\n:host:has(.adev-home) .adev-nav {\n  width: 0;\n  height: 0;\n}\n@media (min-width: 900.01px) {\n  :host:has(.adev-home) footer {\n    margin-left: var(--primary-nav-width);\n  }\n}\n.adev-skip {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n  z-index: 1000;\n  background: var(--primary-contrast);\n  color: var(--page-background);\n  border: 1px solid var(--vivid-pink);\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  font-size: 0.875rem;\n  transform: translateY(-150%);\n  transition: transform 0.3s ease-out;\n}\n.adev-skip:focus {\n  transform: translateY(0);\n}\n.docs-app-main-content {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100%;\n  max-width: 2560px;\n}\n.docs-app-main-content ::after {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  background-color: color-mix(in srgb, var(--gray-1000) 5%, transparent);\n  z-index: 50;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  .docs-app-main-content {\n    width: 100%;\n  }\n}\nfooter {\n  margin-top: auto;\n}\n/*# sourceMappingURL=app.component.css.map */\n'] }]
    }], () => [], null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 53 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=main.js.map
