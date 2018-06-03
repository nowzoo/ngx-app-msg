(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-app-msg/fesm5/nowzoo-ngx-app-msg.js":
/*!******************************************************!*\
  !*** ./dist/ngx-app-msg/fesm5/nowzoo-ngx-app-msg.js ***!
  \******************************************************/
/*! exports provided: NgxAppMsgOptions, NgxAppMsgService, NgxAppMsgComponent, NgxAppMsgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAppMsgOptions", function() { return NgxAppMsgOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAppMsgService", function() { return NgxAppMsgService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAppMsgComponent", function() { return NgxAppMsgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAppMsgModule", function() { return NgxAppMsgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxAppMsgOptions = /** @class */ (function () {
    function NgxAppMsgOptions() {
        this.autohideAfter = 4000;
    }
    return NgxAppMsgOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxAppMsgService = /** @class */ (function () {
    function NgxAppMsgService() {
        this.messages$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    Object.defineProperty(NgxAppMsgService.prototype, "messages$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.messages$$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} context
     * @param {?} message
     * @param {?} autohide
     * @param {?} modal
     * @param {?} dismissible
     * @return {?}
     */
    NgxAppMsgService.prototype._show = /**
     * @param {?} context
     * @param {?} message
     * @param {?} autohide
     * @param {?} modal
     * @param {?} dismissible
     * @return {?}
     */
    function (context, message, autohide, modal, dismissible) {
        this.messages$$.next({
            context: context,
            message: message,
            autohide: autohide,
            modal: modal,
            dismissible: dismissible
        });
    };
    /**
     * @param {?} context
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    NgxAppMsgService.prototype.show = /**
     * @param {?} context
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    function (context, message, autohide, modal, dismissible) {
        if (autohide === void 0) { autohide = true; }
        if (modal === void 0) { modal = false; }
        if (dismissible === void 0) { dismissible = false; }
        this._show(context, message, autohide, modal, dismissible);
    };
    /**
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    NgxAppMsgService.prototype.wait = /**
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    function (message, autohide, modal, dismissible) {
        if (autohide === void 0) { autohide = false; }
        if (modal === void 0) { modal = true; }
        if (dismissible === void 0) { dismissible = false; }
        this._show('wait', message, autohide, modal, dismissible);
    };
    /**
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    NgxAppMsgService.prototype.warn = /**
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    function (message, autohide, modal, dismissible) {
        if (autohide === void 0) { autohide = false; }
        if (modal === void 0) { modal = true; }
        if (dismissible === void 0) { dismissible = true; }
        this._show('warning', message, autohide, modal, dismissible);
    };
    /**
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    NgxAppMsgService.prototype.error = /**
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    function (message, autohide, modal, dismissible) {
        if (autohide === void 0) { autohide = false; }
        if (modal === void 0) { modal = true; }
        if (dismissible === void 0) { dismissible = true; }
        this._show('error', message, autohide, modal, dismissible);
    };
    /**
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    NgxAppMsgService.prototype.success = /**
     * @param {?} message
     * @param {?=} autohide
     * @param {?=} modal
     * @param {?=} dismissible
     * @return {?}
     */
    function (message, autohide, modal, dismissible) {
        if (autohide === void 0) { autohide = true; }
        if (modal === void 0) { modal = false; }
        if (dismissible === void 0) { dismissible = true; }
        this._show('success', message, autohide, modal, dismissible);
    };
    /**
     * @return {?}
     */
    NgxAppMsgService.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.messages$$.next(null);
    };
    NgxAppMsgService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxAppMsgService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxAppMsgService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxAppMsgService_Factory() { return new NgxAppMsgService(); }, token: NgxAppMsgService, providedIn: "root" });
    return NgxAppMsgService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxAppMsgComponent = /** @class */ (function () {
    function NgxAppMsgComponent(service) {
        this.service = service;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.options = new NgxAppMsgOptions();
        this.shown = false;
        this.hideTimeout = null;
    }
    /**
     * @return {?}
     */
    NgxAppMsgComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.messages$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (val) {
            _this.handleChange(val);
        });
    };
    /**
     * @return {?}
     */
    NgxAppMsgComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    NgxAppMsgComponent.prototype.handleChange = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        var _this = this;
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        if (!msg) {
            this.shown = false;
        }
        else {
            this.message = msg.message;
            this.context = msg.context;
            this.dismissible = msg.dismissible;
            this.modal = msg.modal;
            if (msg.autohide) {
                this.hideTimeout = setTimeout(function () { return _this.shown = false; }, this.options.autohideAfter);
            }
            this.shown = true;
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NgxAppMsgComponent.prototype.dismiss = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.preventDefault();
        }
        this.shown = false;
    };
    NgxAppMsgComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-app-msg',
                    exportAs: 'ngxAppMessage',
                    template: "<div class=\"ngx-app-msg-backdrop\" [class.visible]=\"shown && modal\"></div>\n<div class=\"ngx-app-msg-container\" [class.visible]=\"shown\">\n  <div class=\"ngx-app-msg\" [ngClass]=\"'ngx-app-msg ngx-app-msg-' + context\">\n    <div class=\"ngx-app-msg-inner\">\n      <div class=\"ngx-app-msg-icon\" aria-hidden=\"true\"></div>\n      <div class=\"ngx-app-msg-text\">{{message}}</div>\n    </div>\n    <div class=\"ngx-app-msg-dismiss\" role=\"button\" *ngIf=\"dismissible\" title=\"Close\" aria-label=\"Close\" (click)=\"dismiss()\"></div>\n  </div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    NgxAppMsgComponent.ctorParameters = function () { return [
        { type: NgxAppMsgService, },
    ]; };
    NgxAppMsgComponent.propDecorators = {
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgxAppMsgComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxAppMsgModule = /** @class */ (function () {
    function NgxAppMsgModule() {
    }
    /**
     * @return {?}
     */
    NgxAppMsgModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: NgxAppMsgModule, providers: [NgxAppMsgService] };
    };
    NgxAppMsgModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [NgxAppMsgComponent],
                    exports: [NgxAppMsgComponent]
                },] },
    ];
    return NgxAppMsgModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93em9vLW5neC1hcHAtbXNnLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abm93em9vL25neC1hcHAtbXNnL2xpYi9pbnRlcmZhY2VzLnRzIiwibmc6Ly9Abm93em9vL25neC1hcHAtbXNnL2xpYi9uZ3gtYXBwLW1zZy5zZXJ2aWNlLnRzIiwibmc6Ly9Abm93em9vL25neC1hcHAtbXNnL2xpYi9uZ3gtYXBwLW1zZy5jb21wb25lbnQudHMiLCJuZzovL0Bub3d6b28vbmd4LWFwcC1tc2cvbGliL25neC1hcHAtbXNnLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBOZ3hBcHBNc2dDb250ZXh0ID0gJ3dhaXQnIHwgJ3dhcm5pbmcnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcbmV4cG9ydCBpbnRlcmZhY2UgSU5neEFwcE1zZyB7XG4gIGNvbnRleHQ6IE5neEFwcE1zZ0NvbnRleHQ7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgbW9kYWw6IGJvb2xlYW47XG4gIGRpc21pc3NpYmxlOiBib29sZWFuO1xuICBhdXRvaGlkZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU5neEFwcE1zZ09wdGlvbnMge1xuICBhdXRvaGlkZUFmdGVyOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgTmd4QXBwTXNnT3B0aW9ucyBpbXBsZW1lbnRzIElOZ3hBcHBNc2dPcHRpb25zIHtcbiAgYXV0b2hpZGVBZnRlciA9IDQwMDA7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElOZ3hBcHBNc2csIE5neEFwcE1zZ0NvbnRleHQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4QXBwTXNnU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBtZXNzYWdlcyQkOiBCZWhhdmlvclN1YmplY3Q8SU5neEFwcE1zZz47XG4gIGdldCBtZXNzYWdlcyQoKTogT2JzZXJ2YWJsZTxJTmd4QXBwTXNnPiB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXMkJC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc3NhZ2VzJCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdyhjb250ZXh0OiBOZ3hBcHBNc2dDb250ZXh0LCBtZXNzYWdlOiBzdHJpbmcsIGF1dG9oaWRlOiBib29sZWFuLCBtb2RhbDogYm9vbGVhbiwgZGlzbWlzc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1lc3NhZ2VzJCQubmV4dCh7XG4gICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIGF1dG9oaWRlOiBhdXRvaGlkZSxcbiAgICAgIG1vZGFsOiBtb2RhbCxcbiAgICAgIGRpc21pc3NpYmxlOiBkaXNtaXNzaWJsZVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdyhjb250ZXh0OiBOZ3hBcHBNc2dDb250ZXh0LCBtZXNzYWdlOiBzdHJpbmcsIGF1dG9oaWRlID0gdHJ1ZSwgbW9kYWwgPSBmYWxzZSwgZGlzbWlzc2libGUgPSBmYWxzZSkge1xuICAgIHRoaXMuX3Nob3coY29udGV4dCwgbWVzc2FnZSwgYXV0b2hpZGUsIG1vZGFsLCBkaXNtaXNzaWJsZSk7XG4gIH1cblxuICB3YWl0KG1lc3NhZ2U6IHN0cmluZywgYXV0b2hpZGUgPSBmYWxzZSwgbW9kYWwgPSB0cnVlLCBkaXNtaXNzaWJsZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fc2hvdygnd2FpdCcsIG1lc3NhZ2UsIGF1dG9oaWRlLCBtb2RhbCwgZGlzbWlzc2libGUpO1xuICB9XG4gIHdhcm4obWVzc2FnZTogc3RyaW5nLCBhdXRvaGlkZSA9IGZhbHNlLCBtb2RhbCA9IHRydWUsIGRpc21pc3NpYmxlID0gdHJ1ZSkge1xuICAgIHRoaXMuX3Nob3coJ3dhcm5pbmcnLCBtZXNzYWdlLCBhdXRvaGlkZSwgbW9kYWwsIGRpc21pc3NpYmxlKTtcbiAgfVxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGF1dG9oaWRlID0gZmFsc2UsIG1vZGFsID0gdHJ1ZSwgZGlzbWlzc2libGUgPSB0cnVlKSB7XG4gICAgdGhpcy5fc2hvdygnZXJyb3InLCBtZXNzYWdlLCBhdXRvaGlkZSwgbW9kYWwsIGRpc21pc3NpYmxlKTtcbiAgfVxuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgYXV0b2hpZGUgPSB0cnVlLCBtb2RhbCA9IGZhbHNlLCBkaXNtaXNzaWJsZSA9IHRydWUpIHtcbiAgICB0aGlzLl9zaG93KCdzdWNjZXNzJywgbWVzc2FnZSwgYXV0b2hpZGUsIG1vZGFsLCBkaXNtaXNzaWJsZSk7XG4gIH1cbiAgaGlkZSgpIHtcbiAgICB0aGlzLm1lc3NhZ2VzJCQubmV4dChudWxsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5pbXBvcnQgeyBJTmd4QXBwTXNnLCBJTmd4QXBwTXNnT3B0aW9ucywgTmd4QXBwTXNnT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOZ3hBcHBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtYXBwLW1zZy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtYXBwLW1zZycsXG4gIGV4cG9ydEFzOiAnbmd4QXBwTWVzc2FnZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5neC1hcHAtbXNnLWJhY2tkcm9wXCIgW2NsYXNzLnZpc2libGVdPVwic2hvd24gJiYgbW9kYWxcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJuZ3gtYXBwLW1zZy1jb250YWluZXJcIiBbY2xhc3MudmlzaWJsZV09XCJzaG93blwiPlxuICA8ZGl2IGNsYXNzPVwibmd4LWFwcC1tc2dcIiBbbmdDbGFzc109XCInbmd4LWFwcC1tc2cgbmd4LWFwcC1tc2ctJyArIGNvbnRleHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmd4LWFwcC1tc2ctaW5uZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtYXBwLW1zZy1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmd4LWFwcC1tc2ctdGV4dFwiPnt7bWVzc2FnZX19PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5neC1hcHAtbXNnLWRpc21pc3NcIiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCJkaXNtaXNzaWJsZVwiIHRpdGxlPVwiQ2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiZGlzbWlzcygpXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE5neEFwcE1zZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBuZ1Vuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQElucHV0KCkgb3B0aW9uczogSU5neEFwcE1zZ09wdGlvbnMgPSBuZXcgTmd4QXBwTXNnT3B0aW9ucygpO1xuICBzaG93biA9IGZhbHNlO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvbnRleHQ6IHN0cmluZztcbiAgZGlzbWlzc2libGU6IGJvb2xlYW47XG4gIG1vZGFsOiBib29sZWFuO1xuICBoaWRlVGltZW91dDogYW55ID0gbnVsbDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBOZ3hBcHBNc2dTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlcnZpY2UubWVzc2FnZXMkXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5uZ1Vuc3Vic2NyaWJlKSlcbiAgICAgIC5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UodmFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5uZ1Vuc3Vic2NyaWJlLm5leHQoKTtcbiAgICB0aGlzLm5nVW5zdWJzY3JpYmUuY29tcGxldGUoKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShtc2c6IElOZ3hBcHBNc2cpIHtcbiAgICBpZiAodGhpcy5oaWRlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xuICAgICAgdGhpcy5oaWRlVGltZW91dCA9IG51bGw7XG4gICAgfVxuICAgIGlmICghIG1zZykge1xuICAgICAgdGhpcy5zaG93biA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtc2cubWVzc2FnZTtcbiAgICAgIHRoaXMuY29udGV4dCA9IG1zZy5jb250ZXh0O1xuICAgICAgdGhpcy5kaXNtaXNzaWJsZSA9IG1zZy5kaXNtaXNzaWJsZTtcbiAgICAgIHRoaXMubW9kYWwgPSBtc2cubW9kYWw7XG4gICAgICBpZiAobXNnLmF1dG9oaWRlKSB7XG4gICAgICAgIHRoaXMuaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvd24gPSBmYWxzZSwgdGhpcy5vcHRpb25zLmF1dG9oaWRlQWZ0ZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zaG93biA9IHRydWU7XG4gICAgfVxuXG4gIH1cbiAgZGlzbWlzcyhldmVudD86IEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnNob3duID0gZmFsc2U7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hBcHBNc2dDb21wb25lbnQgfSBmcm9tICcuL25neC1hcHAtbXNnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hBcHBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtYXBwLW1zZy5zZXJ2aWNlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hBcHBNc2dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmd4QXBwTXNnQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hBcHBNc2dNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtuZ01vZHVsZTogTmd4QXBwTXNnTW9kdWxlLCBwcm92aWRlcnM6IFtOZ3hBcHBNc2dTZXJ2aWNlXX07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFXQTs7NkJBQ2tCLElBQUk7OzJCQVp0QjtJQWFDOzs7Ozs7QUNiRDtJQVlFO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3QztJQUxELHNCQUFJLHVDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7OztPQUFBOzs7Ozs7Ozs7SUFLTyxnQ0FBSzs7Ozs7Ozs7Y0FBQyxPQUF5QixFQUFFLE9BQWUsRUFBRSxRQUFpQixFQUFFLEtBQWMsRUFBRSxXQUFvQjtRQUMvRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQixPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNo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

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/\">NgxAppMsg</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/nowzoo/ngx-app-msg\" aria-label=\"GitHub Repo\">\n          <i class=\"fab fa-github\"></i>\n          <span class=\"d-inline-block d-lg-none\">GitHub Repo</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/nowzoo/ngx-app-msg#quick-start\">\n          Quick Start\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/nowzoo/ngx-app-msg#api\">\n          API\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/nowzoo/ngx-app-msg#customizing\">\n          Customizing\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div style=\"padding-top: 56px\">\n  <router-outlet></router-outlet>\n</div>\n<ngx-app-msg></ngx-app-msg>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _nowzoo_ngx_app_msg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nowzoo/ngx-app-msg */ "./dist/ngx-app-msg/fesm5/nowzoo-ngx-app-msg.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_route_home_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-route/home-route.component */ "./src/app/home-route/home-route.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_route_home_route_component__WEBPACK_IMPORTED_MODULE_6__["HomeRouteComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_route_home_route_component__WEBPACK_IMPORTED_MODULE_6__["HomeRouteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                ngx_md__WEBPACK_IMPORTED_MODULE_3__["NgxMdModule"].forRoot(),
                _nowzoo_ngx_app_msg__WEBPACK_IMPORTED_MODULE_4__["NgxAppMsgModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-route/home-route.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-route/home-route.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">NgxAppMessage</h1>\n  <p class=\"lead\">Flexible message service and component for Angular 6 apps.</p>\n  <button class=\"btn btn-primary btn-lg\" (click)=\"tryMe()\">Try Me!</button>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <p>\n        <button class=\"btn btn-info btn-sm\" (click)=\"msg.wait('Please wait...', false, false, true)\">wait()</button>\n\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"msg.error('Something awful has happened.', false, false, true)\">error()</button>\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        <button class=\"btn btn-warning btn-sm\" (click)=\"msg.warn('That\\'s not how you spell antidisestablishmentarianism.', false, false, true)\">warn()</button>\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        <button class=\"btn btn-success btn-sm\" (click)=\"msg.success('You are a winner!', false, false, true)\">success()</button>\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        <button class=\"btn btn-light btn-sm\" (click)=\"msg.hide()\">hide()</button>\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-route/home-route.component.scss":
/*!******************************************************!*\
  !*** ./src/app/home-route/home-route.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-route/home-route.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-route/home-route.component.ts ***!
  \****************************************************/
/*! exports provided: HomeRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRouteComponent", function() { return HomeRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nowzoo_ngx_app_msg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nowzoo/ngx-app-msg */ "./dist/ngx-app-msg/fesm5/nowzoo-ngx-app-msg.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeRouteComponent = /** @class */ (function () {
    function HomeRouteComponent(msg) {
        this.msg = msg;
    }
    HomeRouteComponent.prototype.ngOnInit = function () {
    };
    HomeRouteComponent.prototype.tryMe = function () {
        var _this = this;
        this.msg.wait('Doing some arduous and time consuming task...');
        setTimeout(function () {
            _this.msg.success('Done!');
        }, 2000);
    };
    HomeRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-route',
            template: __webpack_require__(/*! ./home-route.component.html */ "./src/app/home-route/home-route.component.html"),
            styles: [__webpack_require__(/*! ./home-route.component.scss */ "./src/app/home-route/home-route.component.scss")]
        }),
        __metadata("design:paramtypes", [_nowzoo_ngx_app_msg__WEBPACK_IMPORTED_MODULE_1__["NgxAppMsgService"]])
    ], HomeRouteComponent);
    return HomeRouteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chris/dev/my_angular_libs/ngx-app-msg/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map