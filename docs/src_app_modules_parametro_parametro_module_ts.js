"use strict";
(self["webpackChunkadminlte"] = self["webpackChunkadminlte"] || []).push([["src_app_modules_parametro_parametro_module_ts"],{

/***/ 3539:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/parametro/components/parametro-form/parametro-form.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametroFormComponent": () => (/* binding */ ParametroFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/services/app-message.service */ 1085);
/* harmony import */ var _modules_parametro_services_parametro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/parametro/services/parametro.service */ 3550);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2150);










function ParametroFormComponent_ng_template_2_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ParametroFormComponent_ng_template_2_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ParametroFormComponent_ng_template_2_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ParametroFormComponent_ng_template_2_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-color": a0 }; };
function ParametroFormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Nome Familia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ParametroFormComponent_ng_template_2_small_6_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Local Origem:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ParametroFormComponent_ng_template_2_small_12_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Possivel Chegada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ParametroFormComponent_ng_template_2_small_18_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Resumo Familia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ParametroFormComponent_ng_template_2_small_25_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx_r0.submitted && ctx_r0.form.controls.nomeFamilia.errors ? "red" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && !ctx_r0.form.controls.nomeFamilia.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx_r0.submitted && ctx_r0.form.controls.localOrigem.errors ? "red" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && !ctx_r0.form.controls.localOrigem.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx_r0.submitted && ctx_r0.form.controls.possivelChegada.errors ? "red" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && !ctx_r0.form.controls.possivelChegada.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ctx_r0.submitted && ctx_r0.form.controls.resumoFamilia.errors ? "red" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && !ctx_r0.form.controls.resumoFamilia.value);
} }
function ParametroFormComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParametroFormComponent_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.saveOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ParametroFormComponent {
    constructor(messageService, parametroService) {
        this.messageService = messageService;
        this.parametroService = parametroService;
        this.detailError = '';
        this.submitted = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: null, disabled: true }),
            'localOrigem': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            'possivelChegada': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            'nomeFamilia': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            'resumoFamilia': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            'urlMidiaPrincipal': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    loadFormData() {
        this.form.patchValue(this.initialFormData);
    }
    extractFormData() {
        return Object.assign(Object.assign({}, this.initialFormData), this.form.value);
    }
    update(toUpdate) {
        this.parametroService.update(toUpdate)
            .then(data => {
            this.messageService.showSuccess('Registro atualizado com sucesso!');
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    ngOnInit() {
        this.parametroService.find()
            .then(data => {
            this.initialFormData = data;
            this.loadFormData();
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    saveOnClick() {
        this.submitted = true;
        const toSave = this.extractFormData();
        if (this.form.invalid) {
            this.messageService.showWarn('Alguns campos estão inválidos', 'Falha na validação');
            return;
        }
        this.update(toSave);
    }
}
ParametroFormComponent.ɵfac = function ParametroFormComponent_Factory(t) { return new (t || ParametroFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_0__.AppMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_modules_parametro_services_parametro_service__WEBPACK_IMPORTED_MODULE_1__.ParametroService)); };
ParametroFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ParametroFormComponent, selectors: [["parametro-form"]], decls: 4, vars: 0, consts: [[1, "content-header"], ["header", "Parametros da Familia"], ["pTemplate", "content"], ["pTemplate", "footer"], [3, "formGroup"], [1, "p-field"], ["for", "nomeFamilia"], ["id", "nomeFamilia", "type", "text", "formControlName", "nomeFamilia", "pInputText", "", "required", "", "autofocus", "", 3, "ngStyle"], ["class", "p-invalid", "style", "color: red", 4, "ngIf"], ["for", "local"], ["id", "local", "type", "text", "formControlName", "localOrigem", "pInputText", "", "required", "", "autofocus", "", 3, "ngStyle"], ["for", "possivelChegada"], ["id", "possivelChegada", "type", "text", "formControlName", "possivelChegada", "pInputText", "", "required", "", "autofocus", "", 3, "ngStyle"], ["for", "resumoFamilia"], ["id", "resumoFamilia", "type", "text", "formControlName", "resumoFamilia", "pInputTextarea", "", "autofocus", "", "rows", "5", "cols", "50", 3, "ngStyle"], [1, "p-invalid", 2, "color", "red"], ["pButton", "", "pRipple", "", "label", "Salvar", "icon", "pi pi-check", 1, "p-button-sm", 3, "click"]], template: function ParametroFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ParametroFormComponent_ng_template_2_Template, 26, 17, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ParametroFormComponent_ng_template_3_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_4__.Panel, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0cm8tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1277:
/*!***************************************************************!*\
  !*** ./src/app/modules/parametro/parametro-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametroRoutingModule": () => (/* binding */ ParametroRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_parametro_form_parametro_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/parametro-form/parametro-form.component */ 3539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        children: [{
                path: '',
                component: _components_parametro_form_parametro_form_component__WEBPACK_IMPORTED_MODULE_0__.ParametroFormComponent,
                data: {
                    breadcrumb: null,
                },
            }
        ]
    },
];
class ParametroRoutingModule {
}
ParametroRoutingModule.ɵfac = function ParametroRoutingModule_Factory(t) { return new (t || ParametroRoutingModule)(); };
ParametroRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ParametroRoutingModule });
ParametroRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ParametroRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8047:
/*!*******************************************************!*\
  !*** ./src/app/modules/parametro/parametro.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametroModule": () => (/* binding */ ParametroModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_parametro_form_parametro_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/parametro-form/parametro-form.component */ 3539);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 3230);
/* harmony import */ var _parametro_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parametro-routing.module */ 1277);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 1599);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmdialog */ 1849);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 9243);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ 3932);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 6582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);















class ParametroModule {
}
ParametroModule.ɵfac = function ParametroModule_Factory(t) { return new (t || ParametroModule)(); };
ParametroModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ParametroModule });
ParametroModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _parametro_routing_module__WEBPACK_IMPORTED_MODULE_1__.ParametroRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule,
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.DialogModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.TooltipModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ParametroModule, { declarations: [_components_parametro_form_parametro_form_component__WEBPACK_IMPORTED_MODULE_0__.ParametroFormComponent], imports: [_parametro_routing_module__WEBPACK_IMPORTED_MODULE_1__.ParametroRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.DialogModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.TooltipModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule] }); })();


/***/ }),

/***/ 3550:
/*!*****************************************************************!*\
  !*** ./src/app/modules/parametro/services/parametro.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametroService": () => (/* binding */ ParametroService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 1106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class ParametroService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'parametros';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    update(par) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL, par)
                .toPromise()
                .then(data => { return data; });
        });
    }
    find() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
ParametroService.ɵfac = function ParametroService_Factory(t) { return new (t || ParametroService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ParametroService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ParametroService, factory: ParametroService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_parametro_parametro_module_ts.js.map