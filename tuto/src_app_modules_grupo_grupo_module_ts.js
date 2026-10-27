"use strict";
(self["webpackChunkadminlte"] = self["webpackChunkadminlte"] || []).push([["src_app_modules_grupo_grupo_module_ts"],{

/***/ 745:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/grupo/components/grupo-form/grupo-form.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrupoFormComponent": () => (/* binding */ GrupoFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _shared_model_grupo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/model/grupo.model */ 2838);
/* harmony import */ var _shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/services/app-message.service */ 358);
/* harmony import */ var _modules_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/grupo/services/grupo.service */ 1656);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tabview */ 3397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var _enter_to_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/enter-to-tab.directive */ 3282);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 2150);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/galleria */ 4360);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/fileupload */ 3735);


















function GrupoFormComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GrupoFormComponent_ng_template_1_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GrupoFormComponent_ng_template_1_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GrupoFormComponent_ng_template_1_p_tabPanel_19_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrupoFormComponent_ng_template_1_p_tabPanel_19_ng_template_3_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r8.excluiImagem(item_r7.origem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r7.previewImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", item_r7.descricao)("title", item_r7.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r7.descricao, " ");
} }
function GrupoFormComponent_ng_template_1_p_tabPanel_19_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r10.thumbnailImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { "max-width": "640px" }; };
function GrupoFormComponent_ng_template_1_p_tabPanel_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-tabPanel", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-panel", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p-galleria", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function GrupoFormComponent_ng_template_1_p_tabPanel_19_Template_p_galleria_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.images = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GrupoFormComponent_ng_template_1_p_tabPanel_19_ng_template_3_Template, 9, 4, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GrupoFormComponent_ng_template_1_p_tabPanel_19_ng_template_4_Template, 1, 1, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p-panel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GrupoFormComponent_ng_template_1_p_tabPanel_19_Template_textarea_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r13.descricaoImagem = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p-fileUpload", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onUpload", function GrupoFormComponent_ng_template_1_p_tabPanel_19_Template_p_fileUpload_onUpload_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.onUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("header", ctx_r4.initialFormData.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r4.images)("responsiveOptions", ctx_r4.responsiveOptions)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0))("numVisible", 7)("circular", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.descricaoImagem);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("auto", true);
} }
const _c1 = function (a0) { return { "border-color": a0 }; };
function GrupoFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-tabView");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-tabPanel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GrupoFormComponent_ng_template_1_div_3_Template, 4, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, GrupoFormComponent_ng_template_1_small_8_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Gera\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, GrupoFormComponent_ng_template_1_small_13_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrupoFormComponent_ng_template_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.saveOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrupoFormComponent_ng_template_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.cancelOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, GrupoFormComponent_ng_template_1_p_tabPanel_19_Template, 9, 9, "p-tabPanel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c1, ctx_r0.submitted && ctx_r0.form.controls.descricao.errors ? "red" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted && !ctx_r0.form.controls.descricao.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c1, ctx_r0.submitted && ctx_r0.form.controls.geracao.errors ? "red" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.form.controls.geracao.value === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.editing == true);
} }
const _c2 = function () { return { width: "50vw" }; };
const _c3 = function () { return { "960px": "75vw", "640px": "100vw" }; };
class GrupoFormComponent {
    constructor(messageService, grupoService, sanitizer) {
        this.messageService = messageService;
        this.grupoService = grupoService;
        this.sanitizer = sanitizer;
        this.responsiveOptions = [
            {
                breakpoint: '1300px',
                numVisible: 4
            },
            {
                breakpoint: '575px',
                numVisible: 1
            }
        ];
        this.afterSave = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.uploadedFiles = [];
        this.fotosAProcessar = [];
        this.images = [];
        this.submitted = false;
        this.detailError = '';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({ value: null, disabled: true }),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            geracao: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            tipoSequencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
        });
    }
    ngOnInit() {
    }
    showDialog(record) {
        this.editing = record !== null && record !== undefined;
        this.form.reset();
        this.initialFormData = this.editing ? record : new _shared_model_grupo_model__WEBPACK_IMPORTED_MODULE_0__.GrupoDTO();
        record = this.editing ? record : new _shared_model_grupo_model__WEBPACK_IMPORTED_MODULE_0__.GrupoDTO();
        this.title = this.editing ? 'Editar' : 'Criar Novo';
        this.loadFormData();
        this.formVisible = true;
        this.uploadedFiles = [];
        this.idGrupo = this.initialFormData.id;
        this.viewImages(record);
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
        this.grupoService.create(toCreate)
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
        this.grupoService.update(toUpdate)
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
    excluiImagem(imagemStr) {
        this.messageService.showConfirmation('Confirma a exclusão da Imagem associado ao Grupo?', () => {
            this.grupoImagem = new _shared_model_grupo_model__WEBPACK_IMPORTED_MODULE_0__.GrupoImagemDTO();
            this.grupoImagem.idGrupo = this.idGrupo;
            this.grupoImagem.imagemString = imagemStr;
            this.grupoImagem.descricao = "imagem excluida";
            this.grupoImagem.usuarioCadastro = "tuto admin";
            this.excluirImagem();
        });
    }
    excluirImagem() {
        this.grupoService.deleteImagem(this.grupoImagem)
            .then(data => {
            this.messageService.showSuccess('Imagem excluida com sucesso!');
            this.viewImages(data);
            this.afterSave.emit(data);
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    addImg() {
        this.grupoService.addImagem(this.grupoImagem)
            .then(data => {
            this.messageService.showSuccess('Imagem Adicionada com sucesso!');
            this.viewImages(data);
            this.afterSave.emit(data);
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    viewImages(record) {
        this.images = [];
        if ((record.fotosString !== null) &&
            (record.fotosString !== undefined) &&
            (record.fotosString.length > 0)) {
            for (var i = 0; i < record.fotosString.length; i++) {
                var item = new _shared_model_grupo_model__WEBPACK_IMPORTED_MODULE_0__.ImagemView();
                item.alt = "imagem do Grupo";
                item.title = "imagem " + i;
                item.origem = record.fotosString[i].imagemString;
                item.descricao = record.fotosString[i].descricao;
                this.imgRecourse =
                    this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + record.fotosString[i].imagemString);
                item.thumbnailImageSrc = this.imgRecourse;
                item.previewImageSrc = this.imgRecourse;
                this.images[i] = item;
            }
        }
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
            toSave.tipoSequencia = 'ALFABETICO';
            this.create(toSave);
        }
    }
    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
            file.arrayBuffer().then(data => {
                var base64String = this.arrayBufferToBase64(data);
                this.foto = base64String;
                this.fotosAProcessar[this.fotosAProcessar.length] = this.foto;
                this.grupoImagem = new _shared_model_grupo_model__WEBPACK_IMPORTED_MODULE_0__.GrupoImagemDTO();
                this.grupoImagem.idGrupo = this.idGrupo;
                this.grupoImagem.imagemString = this.foto;
                this.grupoImagem.usuarioCadastro = "tuto admin";
                this.grupoImagem.descricao = this.descricaoImagem;
                var Hoje = new Date();
                Hoje.setDate(Hoje.getDate() - 1);
                this.addImg();
            });
        }
    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
}
GrupoFormComponent.ɵfac = function GrupoFormComponent_Factory(t) { return new (t || GrupoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_1__.AppMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_modules_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_2__.GrupoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer)); };
GrupoFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GrupoFormComponent, selectors: [["grupo-form"]], inputs: { formVisible: ["visible", "formVisible"], initialFormData: ["formData", "initialFormData"] }, outputs: { afterSave: "afterSave" }, decls: 2, vars: 9, consts: [["styleClass", "p-fluid", 3, "header", "breakpoints", "maximizable", "modal", "visible", "visibleChange"], ["pTemplate", "content"], ["header", "Dados Gerais"], [3, "formGroup"], ["class", "p-field", 4, "ngIf"], [1, "p-field"], ["for", "descricao"], ["id", "nome", "type", "text", "formControlName", "descricao", "pInputText", "", "id", "descricao", "required", "", "autofocus", "", "enterToTab", "", 3, "ngStyle"], ["class", "p-invalid", "style", "color: red", 4, "ngIf"], ["for", "geracao"], ["type", "text", "formControlName", "geracao", "pInputText", "", "id", "geracao", "required", "", "autofocus", "", "enterToTab", "", 3, "ngStyle"], [1, "row"], [1, "col-3"], ["pButton", "", "pRipple", "", "label", "Salvar", "icon", "pi pi-check", 1, "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-sm", "p-button-secondary", 3, "click"], ["header", "Imagens ", 4, "ngIf"], ["for", "id"], ["type", "text", "formControlName", "id", "pInputText", "", "id", "id", "disabled", "true"], [1, "p-invalid", 2, "color", "red"], ["header", "Imagens "], [3, "header"], [3, "value", "responsiveOptions", "containerStyle", "numVisible", "circular", "valueChange"], ["pTemplate", "item"], ["pTemplate", "thumbnail"], ["header", "Para adicionar uma Imagem, digite uma descri\u00E7\u00E3o(identificando as pessoas da esquerda pra direita) e depois escolha a imagem"], ["type", "text", "pInputTextarea", "", "autofocus", "", "rows", "3", 2, "-webkit-box-sizing", "border-box", "-moz-box-sizing", "border-box", "box-sizing", "border-box", "width", "100%", 3, "ngModel", "ngModelChange"], ["mode", "basic", "name", "demo[]", "chooseIcon", "pi pi-upload", "url", "https://www.primefaces.org/cdn/api/upload.php", "accept", "image/*", "maxFileSize", "2000000", "chooseLabel", "Adicionar", 3, "auto", "onUpload"], [1, "border-1", "surface-border", "border-round", "m-2", "p-3"], [1, "mb-3"], [2, "width", "100%", "height", "300px", "display", "block", 3, "src", "alt", "title"], [1, "relative", "mx-auto"], [1, "mb-6", "font-medium"], [1, "mb-3", "font-medium"], ["pButton", "", "pRipple", "", "label", "Excluir", "icon", "pi pi-times", 1, "p-button-sm", "p-button-secondary", 3, "click"], [2, "width", "25%", "height", "25%", "display", "block", 3, "src"]], template: function GrupoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function GrupoFormComponent_Template_p_dialog_visibleChange_0_listener($event) { return ctx.formVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GrupoFormComponent_ng_template_1_Template, 20, 11, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("header", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c3))("maximizable", true)("modal", true)("visible", ctx.formVisible);
    } }, directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_tabview__WEBPACK_IMPORTED_MODULE_9__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_9__.TabPanel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _enter_to_tab_directive__WEBPACK_IMPORTED_MODULE_3__.EnterToTabDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_galleria__WEBPACK_IMPORTED_MODULE_14__.Galleria, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__.FileUpload], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncnVwby1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2216:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/grupo/components/grupo-grid/grupo-grid.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrupoGridComponent": () => (/* binding */ GrupoGridComponent)
/* harmony export */ });
/* harmony import */ var _grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grupo-form/grupo-form.component */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _modules_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/grupo/services/grupo.service */ 1656);
/* harmony import */ var _shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/services/app-message.service */ 358);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 7225);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2150);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 9243);












function GrupoGridComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function GrupoGridComponent_ng_template_3_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6); return _r2.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GrupoGridComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GrupoGridComponent_ng_template_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.createOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GrupoGridComponent_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.refreshOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "button", 14);
} }
function GrupoGridComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GrupoGridComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GrupoGridComponent_ng_template_8_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const selectedRecord_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.editOnClick(selectedRecord_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GrupoGridComponent_ng_template_8_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const selectedRecord_r11 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.deleteOnClick(selectedRecord_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedRecord_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](selectedRecord_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](selectedRecord_r11.descricao);
} }
function GrupoGridComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total de registros: ", ctx_r5.records ? ctx_r5.records.length : 0, " ");
} }
const _c0 = function () { return ["id", "descricao"]; };
const _c1 = function () { return [10, 20, 50, 100]; };
class GrupoGridComponent {
    constructor(grupoService, messageService) {
        this.grupoService = grupoService;
        this.messageService = messageService;
    }
    deleteRecords(toDelete) {
        let errors = 0;
        toDelete.forEach(each => this.grupoService.delete(each.id)
            .then(() => this.records = this.records.filter(val => val.id !== each.id))
            .catch(error => {
            errors++;
            console.error(error);
        }));
        return errors === 0;
    }
    loadRecordList() {
        this.grupoService.listAll().then(data => this.records = data);
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
    editOnClick(grupo) {
        this.grupoService.getByID(grupo.id).then(data => this.form.showDialog(data));
    }
    deleteOnClick(grupo) {
        this.messageService.showConfirmation('Confirma a exclusão do registro"' + grupo.descricao + '"?', () => {
            this.deleteById(grupo.id);
        });
    }
    deleteById(toDelete) {
        this.grupoService.delete(toDelete)
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
GrupoGridComponent.ɵfac = function GrupoGridComponent_Factory(t) { return new (t || GrupoGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_modules_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_1__.GrupoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_2__.AppMessageService)); };
GrupoGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GrupoGridComponent, selectors: [["grupo-grid"]], viewQuery: function GrupoGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_0__.GrupoFormComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 11, vars: 14, consts: [[1, "content-header"], ["header", "Cadastro de Gera\u00E7\u00F5es"], ["styleClass", "mb-4"], ["pTemplate", "left"], ["pTemplate", "right"], ["dataKey", "id", "sortMode", "multiple", "responsiveLayout", "stack", "styleClass", "p-datatable-sm", "currentPageReportTemplate", "Listando {first} a {last} de {totalRecords} registros", 3, "value", "selection", "globalFilterFields", "paginator", "rows", "rowsPerPageOptions", "scrollable", "resizableColumns", "rowHover", "showCurrentPageReport", "responsive", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], [3, "formData", "afterSave"], ["pInputText", "", "type", "text", "placeholder", "Pesquisar...", 3, "input"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "cria um novo registro", "tooltipPosition", "top", "icon", "pi pi-plus", 1, "p-button-sm", "p-button-success", "mr-1", 3, "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "atualiza a lista de registros", "tooltipPosition", "top", "icon", "pi pi-refresh", 1, "p-button-sm", "p-button-info", 3, "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "Prepara consulta para Impress\u00E3o", "tooltipPosition", "top", "icon", "pi pi-print", "onclick", "window.print();", 1, "p-button-sm", "p-button-secondary"], [1, "table-acoes"], ["pResizableColumn", "", "pSortableColumn", "id", 1, "table-id"], ["field", "id"], ["pResizableColumn", "", "pSortableColumn", "descricao"], ["field", "descricao"], ["pButton", "", "pRipple", "", "pTooltip", "Edita dados do Grupo", "tooltipPosition", "top", "icon", "pi pi-pencil", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-info", "mr-1", 3, "click"], ["pButton", "", "pRipple", "", "pTooltip", "Exclui Registro", "tooltipPosition", "top", "icon", "pi pi-trash", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-danger", 3, "click"], [1, "table-id"], [1, "p-d-flex", "p-ai-center", "p-jc-between"]], template: function GrupoGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, GrupoGridComponent_ng_template_3_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GrupoGridComponent_ng_template_4_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function GrupoGridComponent_Template_p_table_selectionChange_5_listener($event) { return ctx.selectedRecords = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GrupoGridComponent_ng_template_7_Template, 9, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, GrupoGridComponent_ng_template_8_Template, 8, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, GrupoGridComponent_ng_template_9_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "grupo-form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("afterSave", function GrupoGridComponent_Template_grupo_form_afterSave_10_listener() { return ctx.loadRecordList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.records)("selection", ctx.selectedRecords)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0))("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c1))("scrollable", true)("resizableColumns", true)("rowHover", true)("showCurrentPageReport", true)("responsive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formData", ctx.selectedRecord);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_4__.Panel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, _grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_0__.GrupoFormComponent, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_7__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncnVwby1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6757:
/*!*******************************************************!*\
  !*** ./src/app/modules/grupo/grupo-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrupoRoutingModule": () => (/* binding */ GrupoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_grupo_grid_grupo_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/grupo-grid/grupo-grid.component */ 2216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        children: [{
                path: '',
                component: _components_grupo_grid_grupo_grid_component__WEBPACK_IMPORTED_MODULE_0__.GrupoGridComponent,
                data: {
                    breadcrumb: null,
                },
            }
        ]
    },
];
class GrupoRoutingModule {
}
GrupoRoutingModule.ɵfac = function GrupoRoutingModule_Factory(t) { return new (t || GrupoRoutingModule)(); };
GrupoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GrupoRoutingModule });
GrupoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GrupoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9786:
/*!***********************************************!*\
  !*** ./src/app/modules/grupo/grupo.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrupoModule": () => (/* binding */ GrupoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_grupo_grid_grupo_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/grupo-grid/grupo-grid.component */ 2216);
/* harmony import */ var _components_grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/grupo-form/grupo-form.component */ 745);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toolbar */ 7225);
/* harmony import */ var _grupo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupo-routing.module */ 6757);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 1599);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 1849);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 9243);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputnumber */ 3932);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/fileupload */ 3735);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tabview */ 3397);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/image */ 8907);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/card */ 3506);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/carousel */ 1460);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/galleria */ 4360);
/* harmony import */ var _shared_shared_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/shared-directive.module */ 9867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);






















class GrupoModule {
}
GrupoModule.ɵfac = function GrupoModule_Factory(t) { return new (t || GrupoModule)(); };
GrupoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GrupoModule });
GrupoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _grupo_routing_module__WEBPACK_IMPORTED_MODULE_2__.GrupoRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule,
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__.ToolbarModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_8__.PanelModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.DialogModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.TooltipModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__.InputNumberModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__.FileUploadModule,
            primeng_image__WEBPACK_IMPORTED_MODULE_17__.ImageModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_18__.CardModule,
            primeng_carousel__WEBPACK_IMPORTED_MODULE_19__.CarouselModule,
            primeng_tabview__WEBPACK_IMPORTED_MODULE_20__.TabViewModule,
            primeng_galleria__WEBPACK_IMPORTED_MODULE_21__.GalleriaModule,
            _shared_shared_directive_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectiveModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GrupoModule, { declarations: [_components_grupo_grid_grupo_grid_component__WEBPACK_IMPORTED_MODULE_0__.GrupoGridComponent,
        _components_grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_1__.GrupoFormComponent], imports: [_grupo_routing_module__WEBPACK_IMPORTED_MODULE_2__.GrupoRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__.ToolbarModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_8__.PanelModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.DialogModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.TooltipModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__.InputNumberModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__.FileUploadModule,
        primeng_image__WEBPACK_IMPORTED_MODULE_17__.ImageModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_18__.CardModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_19__.CarouselModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_20__.TabViewModule,
        primeng_galleria__WEBPACK_IMPORTED_MODULE_21__.GalleriaModule,
        _shared_shared_directive_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectiveModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_grupo_grupo_module_ts.js.map