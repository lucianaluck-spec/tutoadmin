"use strict";
(self["webpackChunkadminlte"] = self["webpackChunkadminlte"] || []).push([["src_app_config_api_config_ts-src_app_modules_temperamento_temperamento_module_ts"],{

/***/ 806:
/*!**************************************!*\
  !*** ./src/app/config/api.config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIConfig": () => (/* binding */ APIConfig)
/* harmony export */ });
class APIConfig {
}
APIConfig.CADASTROS_API_URL = "https://tutofamily-api.vps8679.panel.icontainer.cloud/api";
//public static readonly CADASTROS_API_URL: string = "http://localhost:8080/api";
APIConfig.CADASTROS_API_VERSION = "v1";


/***/ }),

/***/ 7598:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/temperamento/components/temperamento-form/temperamento-form.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemperamentoFormComponent": () => (/* binding */ TemperamentoFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _shared_model_temperamento_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/model/temperamento.model */ 2493);
/* harmony import */ var _shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/services/app-message.service */ 358);
/* harmony import */ var _modules_temperamento_services_temperamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/temperamento/services/temperamento.service */ 9109);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2150);












function TemperamentoFormComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TemperamentoFormComponent_ng_template_1_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-color": a0 }; };
function TemperamentoFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TemperamentoFormComponent_ng_template_1_div_1_Template, 4, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TemperamentoFormComponent_ng_template_1_small_6_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Informa\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r0.submitted && ctx_r0.form.controls.descricao.errors ? "red" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && !ctx_r0.form.controls.descricao.value);
} }
function TemperamentoFormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TemperamentoFormComponent_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.saveOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TemperamentoFormComponent_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.cancelOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { width: "50vw" }; };
const _c2 = function () { return { "960px": "75vw", "640px": "100vw" }; };
class TemperamentoFormComponent {
    constructor(messageService, temperamentoService) {
        this.messageService = messageService;
        this.temperamentoService = temperamentoService;
        this.afterSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.submitted = false;
        this.detailError = '';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({ value: null, disabled: true }),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            informacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
    }
    loadFormData() {
        this.form.patchValue(this.initialFormData);
    }
    extractFormData() {
        return Object.assign(Object.assign({}, this.initialFormData), this.form.value);
    }
    resetForm() {
        this.form.reset();
        this.submitted = false;
        this.editing = false;
        this.title = null;
        this.initialFormData = null;
    }
    create(toCreate) {
        this.temperamentoService.create(toCreate)
            .then(data => {
            this.messageService.showSuccess('Novo registro incluído com sucesso!');
            this.hideDialog();
            this.afterSave.emit(toCreate);
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    update(toUpdate) {
        this.temperamentoService.update(toUpdate)
            .then(data => {
            this.messageService.showSuccess('Registro atualizado com sucesso!');
            this.hideDialog();
            this.afterSave.emit(toUpdate);
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    ngOnInit() { }
    showDialog(record) {
        this.editing = record !== null && record !== undefined;
        this.initialFormData = record || new _shared_model_temperamento_model__WEBPACK_IMPORTED_MODULE_0__.TemperamentoDTO();
        this.title = this.editing ? 'Editar' : 'Criar Novo';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({ value: null, disabled: true }),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            informacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
        this.loadFormData();
        this.formVisible = true;
    }
    hideDialog() {
        this.resetForm();
        this.formVisible = false;
    }
    cancelOnClick() {
        this.hideDialog();
    }
    saveOnClick() {
        this.submitted = true;
        const toSave = this.extractFormData();
        if (this.form.invalid) {
            this.messageService.showWarn('Alguns campos estão inválidos', 'Falha na validação');
            return;
        }
        if (this.editing) {
            this.update(toSave);
        }
        else {
            this.create(toSave);
        }
    }
}
TemperamentoFormComponent.ɵfac = function TemperamentoFormComponent_Factory(t) { return new (t || TemperamentoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_1__.AppMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_modules_temperamento_services_temperamento_service__WEBPACK_IMPORTED_MODULE_2__.TemperamentoService)); };
TemperamentoFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TemperamentoFormComponent, selectors: [["temperamento-form"]], inputs: { formVisible: ["visible", "formVisible"], initialFormData: ["formData", "initialFormData"] }, outputs: { afterSave: "afterSave" }, decls: 3, vars: 9, consts: [["styleClass", "p-fluid", 3, "header", "breakpoints", "maximizable", "modal", "visible", "visibleChange"], ["pTemplate", "content"], ["pTemplate", "footer"], [3, "formGroup"], ["class", "p-field", 4, "ngIf"], [1, "p-field"], ["for", "descricao"], ["id", "descricao", "type", "text", "formControlName", "descricao", "pInputText", "", "id", "descricao", "required", "", "autofocus", "", 3, "ngStyle"], ["class", "p-invalid", "style", "color: red", 4, "ngIf"], ["for", "informacao"], ["id", "informacao", "type", "text", "formControlName", "informacao", "pInputTextarea", "", "autofocus", "", "rows", "5", 2, "-webkit-box-sizing", "border-box", "-moz-box-sizing", "border-box", "box-sizing", "border-box", "width", "100%"], ["for", "id"], ["type", "text", "formControlName", "id", "pInputText", "", "id", "id", "disabled", "true"], [1, "p-invalid", 2, "color", "red"], ["pButton", "", "pRipple", "", "label", "Salvar", "icon", "pi pi-check", 1, "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-sm", "p-button-secondary", 3, "click"]], template: function TemperamentoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function TemperamentoFormComponent_Template_p_dialog_visibleChange_0_listener($event) { return ctx.formVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TemperamentoFormComponent_ng_template_1_Template, 12, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TemperamentoFormComponent_ng_template_2_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("header", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2))("maximizable", true)("modal", true)("visible", ctx.formVisible);
    } }, directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wZXJhbWVudG8tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6260:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/temperamento/components/temperamento-grid/temperamento-grid.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemperamentoGridComponent": () => (/* binding */ TemperamentoGridComponent)
/* harmony export */ });
/* harmony import */ var _temperamento_form_temperamento_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../temperamento-form/temperamento-form.component */ 7598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _modules_temperamento_services_temperamento_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/temperamento/services/temperamento.service */ 9109);
/* harmony import */ var _shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/services/app-message.service */ 358);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 7225);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2150);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 9243);












function TemperamentoGridComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function TemperamentoGridComponent_ng_template_3_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6); return _r2.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TemperamentoGridComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TemperamentoGridComponent_ng_template_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.createOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TemperamentoGridComponent_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.deleteBulkOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TemperamentoGridComponent_ng_template_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.refreshOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "button", 15);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.selectedRecords || !ctx_r1.selectedRecords.length);
} }
function TemperamentoGridComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TemperamentoGridComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-tableCheckbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TemperamentoGridComponent_ng_template_8_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const selectedRecord_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.editOnClick(selectedRecord_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TemperamentoGridComponent_ng_template_8_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const selectedRecord_r12 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.deleteOnClick(selectedRecord_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedRecord_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", selectedRecord_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](selectedRecord_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](selectedRecord_r12.descricao);
} }
function TemperamentoGridComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total de registros: ", ctx_r5.records ? ctx_r5.records.length : 0, " ");
} }
const _c0 = function () { return ["id", "descricao"]; };
const _c1 = function () { return [15, 20, 50, 100]; };
class TemperamentoGridComponent {
    constructor(temperamentoService, messageService) {
        this.temperamentoService = temperamentoService;
        this.messageService = messageService;
    }
    deleteRecords(toDelete) {
        let errors = 0;
        toDelete.forEach(each => this.temperamentoService.delete(each.id)
            .then(() => this.records = this.records.filter(val => val.id !== each.id))
            .catch(error => {
            errors++;
            console.error(error);
        }));
        return errors === 0;
    }
    loadRecordList() {
        this.temperamentoService.listAll().then(data => this.records = data);
    }
    ngOnInit() {
        this.loadRecordList();
    }
    refreshOnClick() {
        this.loadRecordList();
        this.messageService.showSuccess('Lista atualizada com sucesso');
    }
    createOnClick() {
        this.form.showDialog();
    }
    editOnClick(funcao) {
        this.form.showDialog(funcao);
    }
    deleteOnClick(temperamento) {
        this.messageService.showConfirmation('Confirma a exclusão do registro"' + temperamento.descricao + '"?', () => {
            this.deleteById(temperamento.id);
        });
    }
    deleteById(toDelete) {
        this.temperamentoService.delete(toDelete)
            .then(() => {
            this.records = this.records.filter(val => val.id !== toDelete);
            this.messageService.showSuccess('Registro excluído');
        })
            .catch(error => {
            console.error(error);
            this.messageService.showError('Erro ao excluir o registro ' + toDelete);
        });
    }
    deleteBulkOnClick() {
        this.messageService.showConfirmation('Confirma a exclusão dos registros selecionados?', () => {
            if (this.deleteRecords(this.selectedRecords)) {
                this.messageService.showSuccess('Registros excluídos com sucesso!');
            }
            else {
                this.messageService.showError('Erro ao excluir o registro');
            }
        });
    }
}
TemperamentoGridComponent.ɵfac = function TemperamentoGridComponent_Factory(t) { return new (t || TemperamentoGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_modules_temperamento_services_temperamento_service__WEBPACK_IMPORTED_MODULE_1__.TemperamentoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_2__.AppMessageService)); };
TemperamentoGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TemperamentoGridComponent, selectors: [["temperamento-grid"]], viewQuery: function TemperamentoGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_temperamento_form_temperamento_form_component__WEBPACK_IMPORTED_MODULE_0__.TemperamentoFormComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 11, vars: 14, consts: [[1, "content-header"], ["header", "Cadastro de Temperamento"], ["styleClass", "mb-4"], ["pTemplate", "left"], ["pTemplate", "right"], ["dataKey", "id", "sortMode", "multiple", "responsiveLayout", "stack", "styleClass", "p-datatable-sm", "currentPageReportTemplate", "Listando {first} a {last} de {totalRecords} registros", 3, "value", "selection", "globalFilterFields", "paginator", "rows", "rowsPerPageOptions", "scrollable", "resizableColumns", "rowHover", "responsive", "showCurrentPageReport", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], [3, "formData", "afterSave"], ["pInputText", "", "type", "text", "placeholder", "Pesquisar...", 3, "input"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "cria um novo registro", "tooltipPosition", "top", "icon", "pi pi-plus", 1, "p-button-sm", "p-button-success", "mr-1", 3, "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "exclui os registros selecionados", "tooltipPosition", "top", "icon", "pi pi-trash", 1, "p-button-sm", "p-button-danger", "mr-1", 3, "disabled", "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "atualiza a lista de registros", "tooltipPosition", "top", "icon", "pi pi-refresh", 1, "p-button-sm", "p-button-info", 3, "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "Prepara consulta para Impress\u00E3o", "tooltipPosition", "top", "icon", "pi pi-print", "onclick", "window.print();", 1, "p-button-sm", "p-button-secondary"], ["pResizableColumn", "", 1, "table-check-selected"], [1, "table-acoes"], ["pResizableColumn", "", "pSortableColumn", "id", 1, "table-id"], ["field", "id"], ["pResizableColumn", "", "pSortableColumn", "descricao"], ["field", "descricao"], [1, "table-check-selected"], [3, "value"], ["pButton", "", "pRipple", "", "pTooltip", "Edita dados do Temperamento", "tooltipPosition", "top", "icon", "pi pi-pencil", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-info", "mr-1", 3, "click"], ["pButton", "", "pRipple", "", "pTooltip", "Exclui Registro", "tooltipPosition", "top", "icon", "pi pi-trash", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-danger", 3, "click"], [1, "table-id"], [1, "p-d-flex", "p-ai-center", "p-jc-between"]], template: function TemperamentoGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TemperamentoGridComponent_ng_template_3_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TemperamentoGridComponent_ng_template_4_Template, 4, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function TemperamentoGridComponent_Template_p_table_selectionChange_5_listener($event) { return ctx.selectedRecords = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TemperamentoGridComponent_ng_template_7_Template, 11, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TemperamentoGridComponent_ng_template_8_Template, 10, 3, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TemperamentoGridComponent_ng_template_9_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "temperamento-form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("afterSave", function TemperamentoGridComponent_Template_temperamento_form_afterSave_10_listener() { return ctx.loadRecordList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.records)("selection", ctx.selectedRecords)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0))("paginator", true)("rows", 15)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c1))("scrollable", true)("resizableColumns", true)("rowHover", true)("responsive", true)("showCurrentPageReport", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formData", ctx.selectedRecord);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_4__.Panel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, _temperamento_form_temperamento_form_component__WEBPACK_IMPORTED_MODULE_0__.TemperamentoFormComponent, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_7__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableHeaderCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wZXJhbWVudG8tZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 313:
/*!*********************************************************************!*\
  !*** ./src/app/modules/temperamento/temperamento-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemperamentoRoutingModule": () => (/* binding */ TemperamentoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_temperamento_grid_temperamento_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/temperamento-grid/temperamento-grid.component */ 6260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        children: [{
                path: '',
                component: _components_temperamento_grid_temperamento_grid_component__WEBPACK_IMPORTED_MODULE_0__.TemperamentoGridComponent,
                data: {
                    breadcrumb: null,
                },
            }
        ]
    },
];
class TemperamentoRoutingModule {
}
TemperamentoRoutingModule.ɵfac = function TemperamentoRoutingModule_Factory(t) { return new (t || TemperamentoRoutingModule)(); };
TemperamentoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TemperamentoRoutingModule });
TemperamentoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TemperamentoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8058:
/*!*************************************************************!*\
  !*** ./src/app/modules/temperamento/temperamento.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemperamentoModule": () => (/* binding */ TemperamentoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_temperamento_grid_temperamento_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/temperamento-grid/temperamento-grid.component */ 6260);
/* harmony import */ var _components_temperamento_form_temperamento_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/temperamento-form/temperamento-form.component */ 7598);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ 7225);
/* harmony import */ var _temperamento_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temperamento-routing.module */ 313);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ 1599);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmdialog */ 1849);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 9243);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputnumber */ 3932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);















class TemperamentoModule {
}
TemperamentoModule.ɵfac = function TemperamentoModule_Factory(t) { return new (t || TemperamentoModule)(); };
TemperamentoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TemperamentoModule });
TemperamentoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _temperamento_routing_module__WEBPACK_IMPORTED_MODULE_2__.TemperamentoRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_5__.TableModule,
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_8__.ToastModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__.InputNumberModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TemperamentoModule, { declarations: [_components_temperamento_grid_temperamento_grid_component__WEBPACK_IMPORTED_MODULE_0__.TemperamentoGridComponent,
        _components_temperamento_form_temperamento_form_component__WEBPACK_IMPORTED_MODULE_1__.TemperamentoFormComponent], imports: [_temperamento_routing_module__WEBPACK_IMPORTED_MODULE_2__.TemperamentoRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_5__.TableModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_8__.ToastModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__.InputNumberModule] }); })();


/***/ }),

/***/ 2493:
/*!****************************************************!*\
  !*** ./src/app/shared/model/temperamento.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemperamentoDTO": () => (/* binding */ TemperamentoDTO)
/* harmony export */ });
class TemperamentoDTO {
}


/***/ }),

/***/ 8388:
/*!***************************************************************!*\
  !*** ./src/app/shared/services/api-error-handling.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiErrorHandlingService": () => (/* binding */ ApiErrorHandlingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ApiErrorHandlingService {
    constructor() {
        this._API_ERROR_SUMMARY = 'Erro API';
        this._UNKNOWN_API_ERROR_DETAIL = 'A API retornou um erro desconhecido';
        this._INTERNAL_API_ERROR_DETAIL = 'Erro interno do servidor';
        this._ACCESS_DENIED_API_ERROR_DETAIL = 'Acesso negado';
    }
    _handleBadRequest(error) {
        if (error.type === 'ValidationFail') {
            return this._handleValidationBadRequest(error);
        }
        else {
            return {
                summary: this._API_ERROR_SUMMARY,
                detail: `${error.detail} (${error.type})`
            };
        }
    }
    _handleValidationBadRequest(error) {
        let detail = 'Violações: ';
        error.violations.forEach(item => detail += `${item.property} (${item.detail}); `);
        return {
            summary: this._API_ERROR_SUMMARY,
            detail
        };
    }
    extractMessageFromError(error) {
        switch (error.status) {
            case 400: {
                return this._handleBadRequest(error);
            }
            case 403: {
                return {
                    summary: this._API_ERROR_SUMMARY,
                    detail: this._ACCESS_DENIED_API_ERROR_DETAIL
                };
            }
            case 500: {
                return {
                    summary: this._API_ERROR_SUMMARY,
                    detail: this._INTERNAL_API_ERROR_DETAIL
                };
            }
            default: {
                return {
                    summary: this._API_ERROR_SUMMARY,
                    detail: `${this._UNKNOWN_API_ERROR_DETAIL} (${error.type})`
                };
            }
        }
    }
}
ApiErrorHandlingService.ɵfac = function ApiErrorHandlingService_Factory(t) { return new (t || ApiErrorHandlingService)(); };
ApiErrorHandlingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiErrorHandlingService, factory: ApiErrorHandlingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 358:
/*!********************************************************!*\
  !*** ./src/app/shared/services/app-message.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMessageService": () => (/* binding */ AppMessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var _api_error_handling_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-error-handling.service */ 8388);



class AppMessageService {
    constructor(messageService, confirmationService, apiErrorHandlingService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.apiErrorHandlingService = apiErrorHandlingService;
        this._LIFE = 5000;
        this._SUCCESS_SEVERITY = 'success';
        this._SUCCESS_SUMMARY = 'Sucesso';
        this._WARNING_SEVERITY = 'warn';
        this._WARNING_SUMMARY = 'Alerta';
        this._ERROR_SEVERITY = 'error';
        this._ERROR_SUMMARY = 'Erro';
    }
    _showMessage(severity, summary, detail) {
        this.messageService.add({ severity, summary, detail, life: this._LIFE });
    }
    showSuccess(message, summary) {
        this._showMessage(this._SUCCESS_SEVERITY, summary || this._SUCCESS_SUMMARY, message);
    }
    showWarn(message, summary) {
        this._showMessage(this._WARNING_SEVERITY, summary || this._WARNING_SUMMARY, message);
    }
    showError(message, summary) {
        this._showMessage(this._ERROR_SEVERITY, summary || this._ERROR_SUMMARY, message);
    }
    showApiError(error) {
        const message = this.apiErrorHandlingService.extractMessageFromError(error);
        this._showMessage(this._ERROR_SEVERITY, message.summary || this._ERROR_SUMMARY, message.detail);
    }
    showCustomMessage(severity, summary, detail) {
        this._showMessage(severity, summary, detail);
    }
    showConfirmation(message, accept, header) {
        this.confirmationService.confirm({
            message,
            header: header || 'Confirmação',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            accept
        });
    }
}
AppMessageService.ɵfac = function AppMessageService_Factory(t) { return new (t || AppMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_error_handling_service__WEBPACK_IMPORTED_MODULE_0__.ApiErrorHandlingService)); };
AppMessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppMessageService, factory: AppMessageService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_config_api_config_ts-src_app_modules_temperamento_temperamento_module_ts.js.map