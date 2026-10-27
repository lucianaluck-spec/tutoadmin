"use strict";
(self["webpackChunkadminlte"] = self["webpackChunkadminlte"] || []).push([["src_app_config_api_config_ts-src_app_modules_signo_signo_module_ts"],{

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

/***/ 3414:
/*!************************************************!*\
  !*** ./src/app/config/appComponentTabEnter.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponentTabEnter": () => (/* binding */ AppComponentTabEnter)
/* harmony export */ });
class AppComponentTabEnter {
    focusNext(event) {
        event.preventDefault(); // Impede o "Enter" de submeter o form
        event.stopPropagation();
        console.log(event.target);
        console.log(event.target.nextElementSibling);
        if (event.target.parentElement.nextElementSibling) {
            console.log("pai :", event.target.parentElement.nextElementSibling);
            const nextInput = event.target.parentElement.nextElementSibling.querySelector('input', 'select', 'textarea');
            console.log("nextInput ", nextInput);
            if (nextInput) {
                nextInput.focus();
            }
        }
        else {
            if (event.target.nextElementSibling) {
                const nextInput = event.target.nextElementSibling.querySelector('input', 'select', 'textarea');
                if (nextInput) {
                    console.log("nextInput ", nextInput);
                    nextInput.focus();
                }
            }
        }
    }
    focusNextDropDown(event) {
        event.preventDefault(); // Impede o submit do formulário
        const target = event.target;
        const elements = Array.from(document.querySelectorAll('input, select, button, textarea'));
        const index = elements.indexOf(target);
        if (index > -1 && index < elements.length - 1) {
            elements[index].focus();
        }
    }
    focusNextByID(event, id) {
        event.preventDefault(); // Impede o submit do formulário
        console.log(" ID ", id);
        const element = document.getElementById(id);
        if (element) {
            console.log("foca nele");
            console.log(element);
            element.focus();
        }
    }
}


/***/ }),

/***/ 5319:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/signo/components/signo-form/signo-form.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignoFormComponent": () => (/* binding */ SignoFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _shared_model_signo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/model/signo.model */ 811);
/* harmony import */ var _config_appComponentTabEnter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/appComponentTabEnter */ 3414);
/* harmony import */ var _shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/services/app-message.service */ 358);
/* harmony import */ var _modules_signo_services_signo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/signo/services/signo.service */ 7866);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 5596);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 2150);














function SignoFormComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SignoFormComponent_ng_template_1_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-color": a0 }; };
function SignoFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignoFormComponent_ng_template_1_div_1_Template, 4, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function SignoFormComponent_ng_template_1_Template_input_keydown_enter_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.focusNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SignoFormComponent_ng_template_1_small_6_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Dia Periodo Inicial");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "p-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "M\u00EAs Periodo Inicial");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "p-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Dia Periodo Final");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "p-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "M\u00EAs Periodo Final");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "p-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx_r0.submitted && ctx_r0.form.controls.nome.errors ? "red" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted && !ctx_r0.form.controls.nome.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.diaOptions)("showClear", true)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.mesOptions)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.diaOptions)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.mesOptions)("showClear", true);
} }
function SignoFormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignoFormComponent_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.saveOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignoFormComponent_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.cancelOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { width: "50vw" }; };
const _c2 = function () { return { "960px": "75vw", "640px": "100vw" }; };
class SignoFormComponent extends _config_appComponentTabEnter__WEBPACK_IMPORTED_MODULE_1__.AppComponentTabEnter {
    constructor(messageService, signoService) {
        super();
        this.messageService = messageService;
        this.signoService = signoService;
        this.afterSave = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.submitted = false;
        this.detailError = '';
        this.diaOptions = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
        ];
        this.mesOptions = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12'
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({ value: null, disabled: true }),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            diaPeriodo1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            mesPeriodo1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            diaPeriodo2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            mesPeriodo2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
        });
    }
    onEnterKey(event) {
        // Verifica se o alvo é o dropdown que você quer bloquear
        event.preventDefault();
        event.stopPropagation();
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
        this.signoService.create(toCreate)
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
        this.signoService.update(toUpdate)
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
        this.initialFormData = record || new _shared_model_signo_model__WEBPACK_IMPORTED_MODULE_0__.SignoDTO();
        this.title = this.editing ? 'Editar' : 'Criar Novo';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({ value: null, disabled: true }),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            diaPeriodo1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            mesPeriodo1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            diaPeriodo2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            mesPeriodo2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
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
SignoFormComponent.ɵfac = function SignoFormComponent_Factory(t) { return new (t || SignoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_2__.AppMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_modules_signo_services_signo_service__WEBPACK_IMPORTED_MODULE_3__.SignoService)); };
SignoFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SignoFormComponent, selectors: [["signo-form"]], hostBindings: function SignoFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function SignoFormComponent_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKey($event); });
    } }, inputs: { formVisible: ["visible", "formVisible"], initialFormData: ["formData", "initialFormData"] }, outputs: { afterSave: "afterSave" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 9, consts: [["styleClass", "p-fluid", 3, "header", "breakpoints", "maximizable", "modal", "visible", "visibleChange"], ["pTemplate", "content"], ["pTemplate", "footer"], [3, "formGroup"], ["class", "p-field", 4, "ngIf"], [1, "p-field"], ["for", "nome"], ["id", "nome", "type", "text", "formControlName", "nome", "pInputText", "", "id", "nome", "required", "", "autofocus", "", 3, "ngStyle", "keydown.enter"], ["class", "p-invalid", "style", "color: red", 4, "ngIf"], ["for", "diaPeriodo1"], ["id", "diaPeriodo1", "formControlName", "diaPeriodo1", "placeholder", "Selecione", 3, "options", "showClear", "filter"], ["for", "mesPeriodo1"], ["id", "mesPeriodo1", "formControlName", "mesPeriodo1", "placeholder", "Selecione", 3, "options", "showClear"], ["for", "diaPeriodo2"], ["id", "diaPeriodo2", "formControlName", "diaPeriodo2", "placeholder", "Selecione", 3, "options", "showClear"], ["for", "mesPeriodo2"], ["id", "mesPeriodo2", "formControlName", "mesPeriodo2", "placeholder", "Selecione", 3, "options", "showClear"], ["for", "id"], ["type", "text", "formControlName", "id", "pInputText", "", "id", "id", "disabled", "true"], [1, "p-invalid", 2, "color", "red"], ["pButton", "", "pRipple", "", "label", "Salvar", "icon", "pi pi-check", 1, "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-sm", "p-button-secondary", 3, "click"]], template: function SignoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function SignoFormComponent_Template_p_dialog_visibleChange_0_listener($event) { return ctx.formVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignoFormComponent_ng_template_1_Template, 23, 15, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignoFormComponent_ng_template_2_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("header", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c2))("maximizable", true)("modal", true)("visible", ctx.formVisible);
    } }, directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduby1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3074:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/signo/components/signo-grid/signo-grid.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignoGridComponent": () => (/* binding */ SignoGridComponent)
/* harmony export */ });
/* harmony import */ var _signo_form_signo_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../signo-form/signo-form.component */ 5319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _modules_signo_services_signo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/signo/services/signo.service */ 7866);
/* harmony import */ var _shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/services/app-message.service */ 358);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 7225);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2150);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 9243);












function SignoGridComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function SignoGridComponent_ng_template_3_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6); return _r2.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignoGridComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignoGridComponent_ng_template_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.createOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignoGridComponent_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.deleteBulkOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignoGridComponent_ng_template_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.refreshOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "button", 15);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.selectedRecords || !ctx_r1.selectedRecords.length);
} }
function SignoGridComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Periodo Inicial");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Periodo Final");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignoGridComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-tableCheckbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignoGridComponent_ng_template_8_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const selectedRecord_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.editOnClick(selectedRecord_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignoGridComponent_ng_template_8_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const selectedRecord_r12 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.deleteOnClick(selectedRecord_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedRecord_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", selectedRecord_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](selectedRecord_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](selectedRecord_r12.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](selectedRecord_r12.periodo1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](selectedRecord_r12.periodo2);
} }
function SignoGridComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total de registros: ", ctx_r5.records ? ctx_r5.records.length : 0, " ");
} }
const _c0 = function () { return ["id", "nome"]; };
const _c1 = function () { return [15, 20, 50, 100]; };
class SignoGridComponent {
    constructor(signoService, messageService) {
        this.signoService = signoService;
        this.messageService = messageService;
    }
    deleteRecords(toDelete) {
        let errors = 0;
        toDelete.forEach(each => this.signoService.delete(each.id)
            .then(() => this.records = this.records.filter(val => val.id !== each.id))
            .catch(error => {
            errors++;
            console.error(error);
        }));
        return errors === 0;
    }
    loadRecordList() {
        this.signoService.listAll().then(data => this.records = data);
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
    deleteOnClick(signo) {
        this.messageService.showConfirmation('Confirma a exclusão do registro"' + signo.nome + '"?', () => {
            this.deleteById(signo.id);
        });
    }
    deleteById(toDelete) {
        this.signoService.delete(toDelete)
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
SignoGridComponent.ɵfac = function SignoGridComponent_Factory(t) { return new (t || SignoGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_modules_signo_services_signo_service__WEBPACK_IMPORTED_MODULE_1__.SignoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_2__.AppMessageService)); };
SignoGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignoGridComponent, selectors: [["signo-grid"]], viewQuery: function SignoGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_signo_form_signo_form_component__WEBPACK_IMPORTED_MODULE_0__.SignoFormComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 11, vars: 14, consts: [[1, "content-header"], ["header", "Cadastro de Signo"], ["styleClass", "mb-4"], ["pTemplate", "left"], ["pTemplate", "right"], ["dataKey", "id", "sortMode", "multiple", "responsiveLayout", "stack", "styleClass", "p-datatable-sm", "currentPageReportTemplate", "Listando {first} a {last} de {totalRecords} registros", 3, "value", "selection", "globalFilterFields", "paginator", "rows", "rowsPerPageOptions", "scrollable", "resizableColumns", "rowHover", "responsive", "showCurrentPageReport", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], [3, "formData", "afterSave"], ["pInputText", "", "type", "text", "placeholder", "Pesquisar...", 3, "input"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "cria um novo registro", "tooltipPosition", "top", "icon", "pi pi-plus", 1, "p-button-sm", "p-button-success", "mr-1", 3, "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "exclui os registros selecionados", "tooltipPosition", "top", "icon", "pi pi-trash", 1, "p-button-sm", "p-button-danger", "mr-1", 3, "disabled", "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "atualiza a lista de registros", "tooltipPosition", "top", "icon", "pi pi-refresh", 1, "p-button-sm", "p-button-info", 3, "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "Prepara consulta para Impress\u00E3o", "tooltipPosition", "top", "icon", "pi pi-print", "onclick", "window.print();", 1, "p-button-sm", "p-button-secondary"], ["pResizableColumn", "", 1, "table-check-selected"], [1, "table-acoes"], ["pResizableColumn", "", "pSortableColumn", "id", 1, "table-id"], ["field", "id"], ["pResizableColumn", "", "pSortableColumn", "nome"], ["field", "nome"], ["pResizableColumn", ""], [1, "table-check-selected"], [3, "value"], ["pButton", "", "pRipple", "", "pTooltip", "Edita dados do Signo", "tooltipPosition", "top", "icon", "pi pi-pencil", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-info", "mr-1", 3, "click"], ["pButton", "", "pRipple", "", "pTooltip", "Exclui Registro", "tooltipPosition", "top", "icon", "pi pi-trash", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-danger", 3, "click"], [1, "table-id"], [1, "p-d-flex", "p-ai-center", "p-jc-between"]], template: function SignoGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SignoGridComponent_ng_template_3_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SignoGridComponent_ng_template_4_Template, 4, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function SignoGridComponent_Template_p_table_selectionChange_5_listener($event) { return ctx.selectedRecords = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SignoGridComponent_ng_template_7_Template, 15, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SignoGridComponent_ng_template_8_Template, 14, 5, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SignoGridComponent_ng_template_9_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "signo-form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("afterSave", function SignoGridComponent_Template_signo_form_afterSave_10_listener() { return ctx.loadRecordList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.records)("selection", ctx.selectedRecords)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0))("paginator", true)("rows", 15)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c1))("scrollable", true)("resizableColumns", true)("rowHover", true)("responsive", true)("showCurrentPageReport", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formData", ctx.selectedRecord);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_4__.Panel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, _signo_form_signo_form_component__WEBPACK_IMPORTED_MODULE_0__.SignoFormComponent, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_7__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableHeaderCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduby1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3913:
/*!*******************************************************!*\
  !*** ./src/app/modules/signo/signo-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignoRoutingModule": () => (/* binding */ SignoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_signo_grid_signo_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/signo-grid/signo-grid.component */ 3074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        children: [{
                path: '',
                component: _components_signo_grid_signo_grid_component__WEBPACK_IMPORTED_MODULE_0__.SignoGridComponent,
                data: {
                    breadcrumb: null,
                },
            }
        ]
    },
];
class SignoRoutingModule {
}
SignoRoutingModule.ɵfac = function SignoRoutingModule_Factory(t) { return new (t || SignoRoutingModule)(); };
SignoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SignoRoutingModule });
SignoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3851:
/*!***********************************************!*\
  !*** ./src/app/modules/signo/signo.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignoModule": () => (/* binding */ SignoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_signo_grid_signo_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/signo-grid/signo-grid.component */ 3074);
/* harmony import */ var _components_signo_form_signo_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/signo-form/signo-form.component */ 5319);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ 7225);
/* harmony import */ var _signo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signo-routing.module */ 3913);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ 1599);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmdialog */ 1849);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 9243);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputnumber */ 3932);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 5596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
















class SignoModule {
}
SignoModule.ɵfac = function SignoModule_Factory(t) { return new (t || SignoModule)(); };
SignoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SignoModule });
SignoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _signo_routing_module__WEBPACK_IMPORTED_MODULE_2__.SignoRoutingModule,
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
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__.InputNumberModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SignoModule, { declarations: [_components_signo_grid_signo_grid_component__WEBPACK_IMPORTED_MODULE_0__.SignoGridComponent,
        _components_signo_form_signo_form_component__WEBPACK_IMPORTED_MODULE_1__.SignoFormComponent], imports: [_signo_routing_module__WEBPACK_IMPORTED_MODULE_2__.SignoRoutingModule,
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
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__.InputNumberModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule] }); })();


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
//# sourceMappingURL=src_app_config_api_config_ts-src_app_modules_signo_signo_module_ts.js.map