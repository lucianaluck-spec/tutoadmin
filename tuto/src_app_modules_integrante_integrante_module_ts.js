"use strict";
(self["webpackChunkadminlte"] = self["webpackChunkadminlte"] || []).push([["src_app_modules_integrante_integrante_module_ts"],{

/***/ 6793:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/integrante/components/integrante-form/integrante-form.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegranteFormComponent": () => (/* binding */ IntegranteFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/model/integrante.model  */ 7492);
/* harmony import */ var _shared_model_grupo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/model/grupo.model */ 2838);
/* harmony import */ var _shared_model_profissao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/model/profissao.model */ 8572);
/* harmony import */ var _shared_model_signo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/model/signo.model */ 811);
/* harmony import */ var _shared_model_localizacao_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/model/localizacao.model */ 7304);
/* harmony import */ var _shared_model_introducao_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/model/introducao.model */ 7228);
/* harmony import */ var _shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/services/app-message.service */ 358);
/* harmony import */ var _modules_integrante_services_integrante_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/integrante/services/integrante.service */ 2175);
/* harmony import */ var _modules_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/grupo/services/grupo.service */ 1656);
/* harmony import */ var _modules_profissao_services_profissao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/profissao/services/profissao.service */ 7429);
/* harmony import */ var _modules_signo_services_signo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/signo/services/signo.service */ 7866);
/* harmony import */ var _modules_localizacao_services_localizacao_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/localizacao/services/localizacao.service */ 2758);
/* harmony import */ var _modules_religiao_services_religiao_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/religiao/services/religiao.service */ 1911);
/* harmony import */ var _modules_politica_services_politica_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/politica/services/politica.service */ 7963);
/* harmony import */ var _modules_timeFutebol_services_time_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/timeFutebol/services/time.service */ 380);
/* harmony import */ var _modules_estiloMusical_services_estiloMusical_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/estiloMusical/services/estiloMusical.service */ 8665);
/* harmony import */ var _modules_habilitacao_services_habilitacao_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/habilitacao/services/habilitacao.service */ 9486);
/* harmony import */ var _modules_temperamento_services_temperamento_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/temperamento/services/temperamento.service */ 9109);
/* harmony import */ var _modules_habitoAlimentar_services_habitoAlimentar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/habitoAlimentar/services/habitoAlimentar.service */ 3324);
/* harmony import */ var _modules_introducao_services_introducao_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/introducao/services/introducao.service */ 3911);
/* harmony import */ var _modules_tipoSanguineo_services_tipo_sanguineo_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @modules/tipoSanguineo/services/tipo-sanguineo.service */ 6680);
/* harmony import */ var _modules_status_services_status_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @modules/status/services/status.service */ 5716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/button */ 2150);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/tabview */ 3397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/fileupload */ 3735);
/* harmony import */ var _enter_to_tab_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/enter-to-tab.directive */ 3282);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/dropdown */ 5596);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/inputmask */ 9712);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/checkbox */ 7588);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/tooltip */ 9243);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/toolbar */ 7225);










































function IntegranteFormComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "Sequencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return ctx_r30.excluiFoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return ctx_r32.excluiFotoConjuge(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "small", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1, "campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "1o Ancestral");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "label", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "2o Ancestral");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_div_173_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "p-dropdown", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("onChange", function IntegranteFormComponent_ng_template_1_div_173_Template_p_dropdown_onChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return ctx_r34.onChangeStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("showClear", true)("options", ctx_r26.todosStatus);
} }
function IntegranteFormComponent_ng_template_1_div_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "Motivo Cancelamento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "textarea", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4, "                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_184_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", ctx_r36.initialFormData.nomeAtual, " ");
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_184_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_p_tabPanel_184_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3); return ctx_r39.viewImages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_184_div_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", img_r41.descricao, " ");
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_184_div_5_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_p_tabPanel_184_div_5_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r47); const img_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3); return ctx_r45.excluiImagem(img_r41.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_184_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "p-toolbar", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, IntegranteFormComponent_ng_template_1_p_tabPanel_184_div_5_ng_template_4_Template, 2, 1, "ng-template", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](5, IntegranteFormComponent_ng_template_1_p_tabPanel_184_div_5_ng_template_5_Template, 1, 0, "ng-template", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("src", img_r41.previewImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeUrl"])("alt", img_r41.descricao);
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_184_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p-tabPanel", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "p-toolbar", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, IntegranteFormComponent_ng_template_1_p_tabPanel_184_ng_template_2_Template, 2, 1, "ng-template", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, IntegranteFormComponent_ng_template_1_p_tabPanel_184_ng_template_3_Template, 1, 0, "ng-template", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](5, IntegranteFormComponent_ng_template_1_p_tabPanel_184_div_5_Template, 6, 2, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "p-panel", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "textarea", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_ng_template_1_p_tabPanel_184_Template_textarea_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return ctx_r48.descricaoImagem = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](9, "p-fileUpload", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("onUpload", function IntegranteFormComponent_ng_template_1_p_tabPanel_184_Template_p_fileUpload_onUpload_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return ctx_r50.onUploadImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r28.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx_r28.descricaoImagem);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("auto", true);
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_185_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", ctx_r51.initialFormData.nomeAtual, " ");
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_185_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_p_tabPanel_185_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3); return ctx_r54.viewDoctos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_185_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", item_r56.descricao, " ");
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_185_div_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_p_tabPanel_185_div_4_ng_template_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r62); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3); return ctx_r60.excluiImagem(item_r56.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_185_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "iframe", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "p-toolbar", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, IntegranteFormComponent_ng_template_1_p_tabPanel_185_div_4_ng_template_3_Template, 2, 1, "ng-template", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, IntegranteFormComponent_ng_template_1_p_tabPanel_185_div_4_ng_template_4_Template, 1, 0, "ng-template", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("src", item_r56.thumbnailImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeResourceUrl"]);
} }
function IntegranteFormComponent_ng_template_1_p_tabPanel_185_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p-tabPanel", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "p-toolbar", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, IntegranteFormComponent_ng_template_1_p_tabPanel_185_ng_template_2_Template, 2, 1, "ng-template", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, IntegranteFormComponent_ng_template_1_p_tabPanel_185_ng_template_3_Template, 1, 0, "ng-template", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, IntegranteFormComponent_ng_template_1_p_tabPanel_185_div_4_Template, 5, 1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "p-panel", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](7, "textarea", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_ng_template_1_p_tabPanel_185_Template_textarea_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return ctx_r63.descricaoDocto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "p-fileUpload", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("onUpload", function IntegranteFormComponent_ng_template_1_p_tabPanel_185_Template_p_fileUpload_onUpload_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2); return ctx_r65.onUploadDocto($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r29.doctos);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx_r29.descricaoDocto);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("auto", true);
} }
const _c0 = function (a0) { return { "border-color": a0 }; };
function IntegranteFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p-tabView");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "p-tabPanel", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "form", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](5, IntegranteFormComponent_ng_template_1_div_5_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](7, IntegranteFormComponent_ng_template_1_div_7_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](9, IntegranteFormComponent_ng_template_1_div_9_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](10, "p-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](13, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](15, "p-fileUpload", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("onUpload", function IntegranteFormComponent_ng_template_1_Template_p_fileUpload_onUpload_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r66.onUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](16, IntegranteFormComponent_ng_template_1_button_16_Template, 1, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](18, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](20, "p-fileUpload", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("onUpload", function IntegranteFormComponent_ng_template_1_Template_p_fileUpload_onUpload_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r68.onUploadConjuge($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](21, IntegranteFormComponent_ng_template_1_button_21_Template, 1, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](23, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](24, "Nome Atual");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](25, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](26, IntegranteFormComponent_ng_template_1_small_26_Template, 2, 0, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](28, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](29, "Nome Solteiro");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](30, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](32, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](33, "Conjuge");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](34, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("keydown.enter", function IntegranteFormComponent_ng_template_1_Template_input_keydown_enter_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r69.focusNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](36, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](37, "Gera\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](38, "p-dropdown", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_p_dropdown_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r70.buscaAncestrais(); })("onBlur", function IntegranteFormComponent_ng_template_1_Template_p_dropdown_onBlur_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r71.onChangeAncestral(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](39, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](40, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](41, "Ancestral");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](42, "p-dropdown", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_p_dropdown_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r72.onChangeAncestral(); })("onBlur", function IntegranteFormComponent_ng_template_1_Template_p_dropdown_onBlur_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r73.onChangeAncestral(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](44, IntegranteFormComponent_ng_template_1_div_44_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](45, IntegranteFormComponent_ng_template_1_div_45_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](46, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](47, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](48, "Data Nascimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](49, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("blur", function IntegranteFormComponent_ng_template_1_Template_input_blur_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r74.buscaSigno(); })("keydown.enter", function IntegranteFormComponent_ng_template_1_Template_input_keydown_enter_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r75.focusNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](50, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](51, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](52, "Signo");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](53, "p-dropdown", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](54, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](55, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](56, "Data Falecimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](57, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("keydown.enter", function IntegranteFormComponent_ng_template_1_Template_input_keydown_enter_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r76.focusNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](58, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](59, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](60, "Sexo");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](61, "p-dropdown", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](62, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](63, "Telefone");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](64, "p-inputMask", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("keydown.enter", function IntegranteFormComponent_ng_template_1_Template_p_inputMask_keydown_enter_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r77.focusNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](65, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](66, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](67, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](68, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](69, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](70, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](71, "Conjuge Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](72, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("keydown.enter", function IntegranteFormComponent_ng_template_1_Template_input_keydown_enter_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r78.focusNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](73, "p-panel", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](74, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](75, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](76, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](77, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](78, "Pa\u00EDs");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](79, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("blur", function IntegranteFormComponent_ng_template_1_Template_input_blur_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r79.loadEstados(1); })("keydown.enter", function IntegranteFormComponent_ng_template_1_Template_input_keydown_enter_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r80.focusNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](80, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](81, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](82, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](83, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](84, "p-dropdown", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("onChange", function IntegranteFormComponent_ng_template_1_Template_p_dropdown_onChange_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r81.loadLocalizacoes(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](86, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](87, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](88, "Local:");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](89, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](90, "p-dropdown", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](91, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r82.incluiLocalizacaoOnClick(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](92, "p-panel", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](93, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](94, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](95, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](96, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](97, "Pa\u00EDs");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](98, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("blur", function IntegranteFormComponent_ng_template_1_Template_input_blur_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r83.loadEstados(2); })("keydown.enter", function IntegranteFormComponent_ng_template_1_Template_input_keydown_enter_98_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r84.focusNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](99, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](100, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](101, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](102, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](103, "p-dropdown", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("onChange", function IntegranteFormComponent_ng_template_1_Template_p_dropdown_onChange_103_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r85.loadLocalizacoes(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](104, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](105, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](106, "Local:");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](107, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](108, "p-dropdown", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](109, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r86.incluiLocalizacaoOnClick(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](110, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](111, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](112, "Profiss\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](113, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](114, "p-dropdown", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](115, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_115_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r87.viewIntroducaoOnClick("PROFISSAO"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](116, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_116_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r88.filterProfissaoOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](117, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](118, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](119, "Religi\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](120, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](121, "p-dropdown", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](122, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r89.viewIntroducaoOnClick("RELIGIAO"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](123, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_123_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r90.viewInformacaoOnClick("RELIGIAO"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](124, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](125, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](126, "Ideologia Politica");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](127, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](128, "p-dropdown", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](129, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_129_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r91.viewIntroducaoOnClick("POLITICA"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](130, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_130_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r92.viewInformacaoOnClick("POLITICA"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](131, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](132, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](133, "Time de Futebol");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](134, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](135, "p-dropdown", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](136, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_136_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r93.viewIntroducaoOnClick("TIME"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](137, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_137_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r94.viewInformacaoOnClick("TIME"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](138, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](139, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](140, "Genero Musical");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](141, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](142, "p-dropdown", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](143, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r95.viewIntroducaoOnClick("Genero"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](144, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_144_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r96.viewInformacaoOnClick("GENERO_MUSICAL"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](145, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](146, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](147, "Temperamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](148, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](149, "p-dropdown", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](150, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_150_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r97.viewIntroducaoOnClick("TEMPERAMENTO"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](151, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_151_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r98.viewInformacaoOnClick("TEMPERAMENTO"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](152, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](153, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](154, "Habito Alimentar");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](155, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](156, "p-dropdown", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](157, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_157_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r99.viewIntroducaoOnClick("HABITO_ALIMENTAR"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](158, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_158_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r100.viewInformacaoOnClick("HABITO_ALIMENTAR"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](159, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](160, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](161, "Tipo Sanguineo");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](162, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](163, "p-dropdown", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](164, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_164_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r101.viewIntroducaoOnClick("TIPO_SANGUINEO"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](165, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_165_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r102.viewInformacaoOnClick("TIPO_SANGUINEO"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](166, "p-panel", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](167, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](168, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](169, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](170, "Data Cadastro: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](171, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](172, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](173, IntegranteFormComponent_ng_template_1_div_173_Template, 4, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](174, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](175, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](176, "Aceito: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](177, "p-checkbox", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](178, IntegranteFormComponent_ng_template_1_div_178_Template, 5, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](179, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](180, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](181, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_181_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r103.saveOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](182, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](183, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_1_Template_button_click_183_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r67); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r104.cancelOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](184, IntegranteFormComponent_ng_template_1_p_tabPanel_184_Template, 10, 3, "p-tabPanel", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](185, IntegranteFormComponent_ng_template_1_p_tabPanel_185_Template, 9, 3, "p-tabPanel", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("src", ctx_r0.imgRecourse, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("auto", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.editing && ctx_r0.imgRecourse !== "/assets/img/default-profile.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("src", ctx_r0.imgRecourseConjuge, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("auto", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.editing && ctx_r0.imgRecourseConjuge !== "/assets/img/default-profile.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction1"](66, _c0, ctx_r0.submitted && ctx_r0.form.controls.nomeAtual.errors ? "red" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.submitted && !ctx_r0.form.controls.nomeAtual.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.grupos)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.ancestrais)("showClear", true)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.empesquisa);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.empesquisa);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filter", true)("options", ctx_r0.signos)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.sexoOptions)("showClear", true)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.estados)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.localizacoes)("showClear", true)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.estadosOrigem)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.localizacoesOrigem)("showClear", true)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.profissoes)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.religioes)("showClear", true)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("options", ctx_r0.politicas)("filter", true)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filter", true)("options", ctx_r0.timesFutebol)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filter", true)("options", ctx_r0.estilosMusicais)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filter", true)("filter", true)("options", ctx_r0.temperamentos)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filter", true)("filter", true)("options", ctx_r0.habitosAlimentar)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filter", true)("filter", true)("options", ctx_r0.tiposSanguineo)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.cancelado);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.editing == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.editing == true);
} }
function IntegranteFormComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "p-button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_19_Template_p_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](18); return ctx_r105.clear(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](5, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_ng_template_19_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r106); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r107.searchProfissao = $event; })("input", function IntegranteFormComponent_ng_template_19_Template_input_input_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r106); _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](18); return _r1.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](7, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "p-button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_19_Template_p_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r106); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r109.salvarNovaProfissao(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx_r2.searchProfissao);
} }
function IntegranteFormComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "th", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "th", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](5, "p-sortIcon", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "th", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](7, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](8, "p-sortIcon", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "td", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_21_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r112); const selectedRecord_r110 = restoredCtx.$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r111.captureProfissao(selectedRecord_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "td", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedRecord_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](selectedRecord_r110.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](selectedRecord_r110.descricao);
} }
function IntegranteFormComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" Total de registros: ", ctx_r5.profissoes ? ctx_r5.profissoes.length : 0, " ");
} }
function IntegranteFormComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_ng_template_29_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r113.searchValue = $event; })("input", function IntegranteFormComponent_ng_template_29_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r114); _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](28); return _r6.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "p-button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_29_Template_p_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r114); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](28); return ctx_r116.clearSearch(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx_r7.searchValue);
} }
function IntegranteFormComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "th", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "th", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](5, "p-sortIcon", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "th", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](7, "Informa\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](8, "p-sortIcon", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "td", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_31_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r119); const selectedRecord_r117 = restoredCtx.$implicit; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r118.captureItem(selectedRecord_r117); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "textarea", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_ng_template_31_Template_textarea_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r119); const selectedRecord_r117 = restoredCtx.$implicit; return selectedRecord_r117.informacao = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedRecord_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](selectedRecord_r117.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", selectedRecord_r117.informacao);
} }
function IntegranteFormComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" Total de registros: ", ctx_r10.informacoes ? ctx_r10.informacoes.length : 0, " ");
} }
function IntegranteFormComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_ng_template_38_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r121.searchValue = $event; })("input", function IntegranteFormComponent_ng_template_38_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r122); _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](37); return _r11.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "p-button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_38_Template_p_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r122); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](37); return ctx_r124.clearSearch(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx_r12.searchValue);
} }
function IntegranteFormComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "th", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "th", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](5, "p-sortIcon", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "th", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](7, "Informa\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](8, "p-sortIcon", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} }
function IntegranteFormComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "td", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_ng_template_40_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r127); const selectedRecord_r125 = restoredCtx.$implicit; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r126.captureItem(selectedRecord_r125); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "textarea", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_ng_template_40_Template_textarea_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r127); const selectedRecord_r125 = restoredCtx.$implicit; return selectedRecord_r125.informacao = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedRecord_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](selectedRecord_r125.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", selectedRecord_r125.informacao);
} }
function IntegranteFormComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" Total de registros: ", ctx_r15.informacoes ? ctx_r15.informacoes.length : 0, " ");
} }
const _c1 = function () { return { width: "50vw" }; };
const _c2 = function () { return { "960px": "75vw", "640px": "100vw" }; };
const _c3 = function () { return { width: "100vw" }; };
const _c4 = function () { return { "860px": "75vw", "540px": "100vw" }; };
const _c5 = function () { return { "760px": "75vw", "540px": "100vw" }; };
const _c6 = function () { return ["descricao"]; };
const _c7 = function () { return [10, 20, 50, 100]; };
const _c8 = function () { return { width: "1000vw" }; };
const _c9 = function () { return ["descricao", "informacao"]; };
const _c10 = function () { return ["nome", "informacao"]; };
class IntegranteFormComponent {
    constructor(messageService, integranteService, grupoService, profissaoService, signoService, localizacaoService, religiaoService, politicaService, timeService, estiloMusicalService, habilitacaoService, temperamentoService, habitoAlimentarService, introducaoService, tipoSanguineoService, statusService, sanitizer) {
        this.messageService = messageService;
        this.integranteService = integranteService;
        this.grupoService = grupoService;
        this.profissaoService = profissaoService;
        this.signoService = signoService;
        this.localizacaoService = localizacaoService;
        this.religiaoService = religiaoService;
        this.politicaService = politicaService;
        this.timeService = timeService;
        this.estiloMusicalService = estiloMusicalService;
        this.habilitacaoService = habilitacaoService;
        this.temperamentoService = temperamentoService;
        this.habitoAlimentarService = habitoAlimentarService;
        this.introducaoService = introducaoService;
        this.tipoSanguineoService = tipoSanguineoService;
        this.statusService = statusService;
        this.sanitizer = sanitizer;
        this.afterSave = new _angular_core__WEBPACK_IMPORTED_MODULE_23__.EventEmitter();
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
        this.submitted = false;
        this.detailError = '';
        this.introducaoVisible = false;
        this.filtroProfissaoVisible = false;
        this.viewInformacaoDescricao = false;
        this.viewInformacaoNome = false;
        this.newLocalizacao = false;
        this.introducao = new _shared_model_introducao_model__WEBPACK_IMPORTED_MODULE_5__.IntroducaoDTO();
        this.images = [];
        this.doctos = [];
        this.sexoOptions = [
            { name: 'Masculino', code: 'MASCULINO' },
            { name: 'Feminino', code: 'FEMININO' },
            // ... more options
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormGroup({
            'pais': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl('Brasil'),
            'paisOrigem': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl('Brasil'),
            'estado': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'estadoOrigem': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl({ value: null, disabled: true }),
            'nroCadastro': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl({ value: null, disabled: true }),
            'sequencia': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl({ value: null, disabled: true }),
            'nomeAtual': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]),
            'nomeSolteiro': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'nomeConjugeAtual': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'nomeConjugeAnterior': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'dataNascimento': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(null),
            'dataFalecimento': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(null),
            'idGrupo': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idAncestral': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'sexo': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(null),
            'telefone': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idProfissao': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idReligiao': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idSigno': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idPolitica': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idTimeFutebol': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idLocalizacaoOrigem': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idLocalizacaoAtual': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idHabilitacao': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idTemperamento': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idHabitoAlimentar': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idTipoSanguineo': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'idEstiloMusical': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'dataCadastro': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(null),
            'idStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(null),
            'motivoCancelamento': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(null),
            'nome1Ancestral': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'nome2Ancestral': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(''),
            'aceito': new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]),
        });
        this.loadGrupos();
        this.loadProfissoes();
        this.loadSignos();
        this.loadReligioes();
        this.loadPoliticas();
        this.loadTimes();
        this.loadEstilosMusicais();
        this.loadHabilitacao();
        this.loadHabitoAlimentar();
        this.loadTiposSanguineo();
        this.loadTemperamentos();
        this.loadTodosStatus();
    }
    focusByID(event, id) {
        event.preventDefault(); // Impede o submit do formulário
        const element = document.getElementById(id);
        if (element) {
            element.focus();
        }
    }
    loadGrupos() {
        this.grupoService.listAll().then(data => this.grupos = data);
    }
    loadProfissoes() {
        this.profissaoService.listAll().then(data => this.profissoes = data);
    }
    loadSignos() {
        this.signoService.listAll().then(data => this.signos = data);
    }
    loadTiposSanguineo() {
        this.tipoSanguineoService.listAll().then(data => this.tiposSanguineo = data);
    }
    loadReligioes() {
        this.religiaoService.listAll().then(data => this.religioes = data);
    }
    loadPoliticas() {
        this.politicaService.listAll().then(data => this.politicas = data);
    }
    loadEstilosMusicais() {
        this.estiloMusicalService.listAll().then(data => this.estilosMusicais = data);
    }
    loadHabilitacao() {
        this.habilitacaoService.listAll().then(data => this.habilitacoes = data);
    }
    loadHabitoAlimentar() {
        this.habitoAlimentarService.listAll().then(data => this.habitosAlimentar = data);
    }
    loadTemperamentos() {
        this.temperamentoService.listAll().then(data => this.temperamentos = data);
    }
    loadTodosStatus() {
        this.statusService.listAll().then(data => this.todosStatus = data);
    }
    loadTimes() {
        this.timeService.listAll().then(data => this.timesFutebol = data);
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
        this.cancelado = false;
        this.empesquisa = false;
        this.title = null;
        this.initialFormData = null;
    }
    create(toCreate) {
        this.integranteService.create(toCreate)
            .then(data => {
            this.messageService.showSuccess('Novo registro incluído com sucesso!');
            //this.hideDialog();
            this.atualizaFoto(data);
            this.showDialog(data);
            this.afterSave.emit(data);
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    update(toUpdate) {
        this.integranteService.update(toUpdate)
            .then(data => {
            this.messageService.showSuccess('Registro atualizado com sucesso!');
            //this.hideDialog();
            this.atualizaFoto(data);
            this.afterSave.emit(toUpdate);
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    ngOnInit() {
        this.items = [
            { label: 'Exclui', icon: 'pi pi-times' }
        ];
    }
    showDialog(record) {
        this.editing = record !== null && record !== undefined;
        this.initialFormData = record || new _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__.IntegranteDTO();
        record = record === undefined ? new _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__.IntegranteResponseDTO() : record;
        this.initialFormData.idGrupo = (this.editing &&
            (record.grupo !== undefined) &&
            (record.grupo !== null)) ? record.grupo.id : null;
        this.idGrupo = (record.grupo !== undefined) &&
            (record.grupo !== null) ? record.grupo.id : null;
        this.initialFormData.idAncestral = (this.editing &&
            record.ancestral !== null) ? record.ancestral.id : null;
        this.initialFormData.idProfissao = (this.editing &&
            record.profissao !== null) ? record.profissao.id : null;
        this.initialFormData.idSigno = (this.editing &&
            record.signo !== null) ? record.signo.id : null;
        this.initialFormData.idLocalizacaoOrigem = (this.editing &&
            record.localizacaoOrigem !== null) ? record.localizacaoOrigem.id : null;
        this.initialFormData.idLocalizacaoAtual = (this.editing &&
            record.localizacaoAtual !== null) ? record.localizacaoAtual.id : null;
        this.initialFormData.idReligiao = (this.editing &&
            record.religiao !== null) ? record.religiao.id : null;
        this.initialFormData.idPolitica = (this.editing &&
            record.politica !== null) ? record.politica.id : null;
        this.initialFormData.idTimeFutebol = (this.editing &&
            record.timeFutebol !== null) ? record.timeFutebol.id : null;
        this.initialFormData.idHabilitacao = (this.editing &&
            record.habilitacao !== null) ? record.habilitacao.id : null;
        this.initialFormData.idHabilitacao = (this.editing &&
            record.habilitacao !== null) ? record.habilitacao.id : null;
        this.initialFormData.idHabitoAlimentar = (this.editing &&
            record.habitoAlimentar !== null) ? record.habitoAlimentar.id : null;
        this.initialFormData.idEstiloMusical = (this.editing &&
            record.estiloMusical !== null) ? record.estiloMusical.id : null;
        this.initialFormData.idTemperamento = (this.editing &&
            record.temperamento !== null) ? record.temperamento.id : null;
        this.initialFormData.idTipoSanguineo = (this.editing &&
            record.tipoSanguineo !== null) ? record.tipoSanguineo.id : null;
        this.initialFormData.idStatus = (this.editing &&
            record.status !== null) ? record.status.id : null;
        this.title = "Ficha Cadastral";
        this.form.reset();
        this.loadFormData();
        this.formVisible = true;
        this.buscaAncestrais();
        this.atualizaFoto(record);
        this.descricaoImagem = "";
        this.viewImages();
        this.viewDoctos();
        if (this.editing) {
            if (record.localizacaoAtual !== null) {
                this.form.get("pais").setValue(record.localizacaoAtual.pais);
                this.form.get("estado").setValue(record.localizacaoAtual.estado);
                this.form.get("idLocalizacaoAtual").setValue(record.localizacaoAtual.id);
            }
            else {
                this.form.get("pais").setValue("Brasil");
                this.form.get("estado").setValue("");
            }
            if (record.localizacaoOrigem !== null) {
                this.form.get("paisOrigem").setValue(record.localizacaoOrigem.pais);
                this.form.get("estadoOrigem").setValue(record.localizacaoOrigem.estado);
                this.form.get("idLocalizacaoOrigem").setValue(record.localizacaoOrigem.id);
            }
            else {
                this.form.get("paisOrigem").setValue("Brasil");
                this.form.get("estadoOrigem").setValue("");
            }
        }
        else {
            this.form.get("pais").setValue("Brasil");
            this.form.get("estado").setValue("");
            this.form.get("paisOrigem").setValue("Brasil");
            this.form.get("estadoOrigem").setValue("");
            this.empesquisa = false;
        }
        this.loadEstados(2);
        this.loadEstados(1);
        this.introducao = new _shared_model_introducao_model__WEBPACK_IMPORTED_MODULE_5__.IntroducaoDTO();
        this.cancelado = (this.editing &&
            record.status.nome == 'CANCELADO');
        this.empesquisa = (this.form.get("idGrupo").value === null ||
            this.form.get("idAncestral").value === null);
        this.loadLocalizacoes(1);
        this.loadLocalizacoes(2);
        console.log("Aceito ", this.initialFormData.aceito);
        console.log("Aceito form ", this.form.get("aceito").value);
    }
    excluiImagem(idImagem) {
        this.messageService.showConfirmation('Confirma a exclusão da Imagem/Docto associado ao Integrante?', () => {
            this.integranteImagem = new _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__.IntegranteImagemDTO();
            this.integranteImagem.id = idImagem;
            this.integranteImagem.descricao = "imagem excluida";
            this.integranteImagem.usuarioCadastro = "tuto admin";
            this.excluirImagem();
        });
    }
    excluirImagem() {
        this.integranteService.deleteImagem(this.integranteImagem.id)
            .then(data => {
            this.messageService.showSuccess('Imagem/Documento excluido com sucesso!');
            this.viewImages();
            this.viewDoctos();
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    addImg() {
        if (this.integranteImagem.descricao === '') {
            this.messageService.showError("Descrição precisa ser preenchida");
        }
        else {
            this.integranteService.addImagem(this.integranteImagem)
                .then(data => {
                this.messageService.showSuccess('Imagem Adicionada com sucesso!');
                this.viewImages();
            })
                .catch(e => {
                console.error(e);
                this.messageService.showApiError(e.error);
            });
        }
    }
    viewImages() {
        var idIntegrante = this.initialFormData.id;
        this.images = [];
        if ((idIntegrante !== undefined) && (idIntegrante !== null)) {
            const filtro = new _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__.ConsultarImagemIntegranteRequestDTO();
            filtro.idIntegrante = idIntegrante;
            filtro.tipo = "png";
            this.integranteService.listImagensByIntegrante(filtro).then(data => {
                for (var i = 0; i < data.length; i++) {
                    var item = new _shared_model_grupo_model__WEBPACK_IMPORTED_MODULE_1__.ImagemView();
                    item.alt = "imagem do Integrante";
                    item.title = "imagem " + i;
                    item.origem = data[i].imagemString;
                    item.descricao = data[i].descricao;
                    item.id = data[i].id;
                    this.imgRecourseImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +
                        data[i].imagemString);
                    item.thumbnailImageSrc = this.imgRecourseImage;
                    item.previewImageSrc = this.imgRecourseImage;
                    this.images[i] = item;
                }
            });
        }
    }
    viewDoctos() {
        var idIntegrante = this.initialFormData.id;
        this.doctos = [];
        if ((idIntegrante !== undefined) && (idIntegrante !== null)) {
            const filtro = new _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__.ConsultarImagemIntegranteRequestDTO();
            filtro.idIntegrante = idIntegrante;
            filtro.tipo = "pdf";
            this.integranteService.listImagensByIntegrante(filtro).then(data => {
                for (var i = 0; i < data.length; i++) {
                    var item = new _shared_model_grupo_model__WEBPACK_IMPORTED_MODULE_1__.ImagemView();
                    item.alt = "Documento do Integrante";
                    item.title = "imagem " + i;
                    item.origem = data[i].imagemString;
                    item.descricao = data[i].descricao;
                    item.id = data[i].id;
                    this.pdfRecourseImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' +
                        data[i].imagemString);
                    item.thumbnailImageSrc = this.pdfRecourseImage;
                    item.previewImageSrc = this.pdfRecourseImage;
                    this.doctos[i] = item;
                }
            });
        }
    }
    buscaAncestrais() {
        this.idGrupo = this.form.get('idGrupo').value;
        if (this.idGrupo !== null) {
            this.grupoService.getByID(this.idGrupo).then(data => {
                this.grupo = data;
                this.integranteService.listAncestraisByGeracao(this.grupo.geracao - 1).then(data => this.ancestrais = data);
            });
        }
        else {
            this.integranteService.listAncestrais();
        }
        this.verPreenchimentoNomesAncestrais();
    }
    verPreenchimentoNomesAncestrais() {
        this.empesquisa = (this.form.get('idGrupo').value === null) ||
            (this.form.get('idAncestral').value === null);
    }
    onChangeAncestral() {
        this.verPreenchimentoNomesAncestrais();
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
        //Cancelado
        if ((this.form.get('idStatus').value === '4') &&
            (this.form.get('motivoCancelamento').value === '')) {
            this.messageService.showWarn('Motivo de Cancelamento precisa ser preenchido', 'Falha na validação');
            return;
        }
        toSave.fotoString = this.foto;
        toSave.fotoStringConjuge = this.fotoConjuge;
        if (this.editing) {
            this.update(toSave);
        }
        else {
            this.create(toSave);
        }
    }
    onUpload(event) {
        for (let file of event.files) {
            file.arrayBuffer().then(data => {
                var base64String = this.arrayBufferToBase64(data);
                this.foto = base64String;
                this.atualizaAvatars();
            });
        }
    }
    onUploadConjuge(event) {
        for (let file of event.files) {
            file.arrayBuffer().then(data => {
                var base64String = this.arrayBufferToBase64(data);
                this.fotoConjuge = base64String;
                this.atualizaAvatars();
            });
        }
    }
    onUploadImage(event) {
        for (let file of event.files) {
            file.arrayBuffer().then(data => {
                var base64String = this.arrayBufferToBase64(data);
                this.integranteImagem = new _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__.IntegranteImagemDTO();
                this.integranteImagem.idIntegrante = this.initialFormData.id;
                this.integranteImagem.imagemString = base64String;
                this.integranteImagem.tipoDocumento = "png";
                this.integranteImagem.usuarioCadastro = "tuto admin";
                this.integranteImagem.descricao = this.descricaoImagem;
                var Hoje = new Date();
                Hoje.setDate(Hoje.getDate() - 1);
                this.addImg();
            });
        }
    }
    onUploadDocto(event) {
        for (let file of event.files) {
            file.arrayBuffer().then(data => {
                var base64String = this.arrayBufferToBase64(data);
                this.integranteImagem = new _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__.IntegranteImagemDTO();
                this.integranteImagem.idIntegrante = this.initialFormData.id;
                this.integranteImagem.imagemString = base64String;
                this.integranteImagem.tipoDocumento = "pdf";
                this.integranteImagem.usuarioCadastro = "tuto admin";
                this.integranteImagem.descricao = this.descricaoDocto;
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
    atualizaAvatars() {
        var integranteAvatar = new _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__.IntegranteAvatarRequestDTO();
        integranteAvatar.fotoString = this.foto;
        integranteAvatar.fotoStringConjuge = this.fotoConjuge;
        integranteAvatar.id = this.initialFormData.id;
        this.integranteService.atualizaAvatars(integranteAvatar)
            .then(data => {
            this.messageService.showSuccess('Avatar atualizado com sucesso!');
            this.afterSave.emit(data);
            this.atualizaFoto(data);
        })
            .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
        });
    }
    excluiFoto() {
        this.foto = "";
        this.atualizaAvatars();
    }
    excluiFotoConjuge() {
        this.fotoConjuge = "";
        this.atualizaAvatars();
    }
    atualizaFoto(record) {
        if ((record.fotoString !== undefined) && (record.fotoString !== '') && (record.fotoString !== null)) {
            this.foto = record.fotoString;
            this.imgRecourse = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + record.fotoString);
        }
        else {
            this.foto = "";
            this.imgRecourse = "/assets/img/default-profile.png";
        }
        if ((record.fotoStringConjuge !== undefined) && (record.fotoStringConjuge !== '') && (record.fotoStringConjuge !== null)) {
            this.fotoConjuge = record.fotoStringConjuge;
            this.imgRecourseConjuge = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + record.fotoStringConjuge);
        }
        else {
            this.fotoConjuge = "";
            this.imgRecourseConjuge = "/assets/img/default-profile.png";
        }
    }
    buscaSigno() {
        if (this.form.get("dataNascimento").value !== null) {
            let mes = this.form.get("dataNascimento").value.substring(5, 7);
            let dia = this.form.get("dataNascimento").value.substring(8, 10);
            var dto = new _shared_model_signo_model__WEBPACK_IMPORTED_MODULE_3__.SignoByDiaMesDTO();
            dto.mesNascimento = mes;
            dto.diaNascimento = dia;
            this.signoService.buscaSigno(dto)
                .then(data => {
                console.log(data);
                this.form.get("idSigno").setValue(data.id);
            })
                .catch(e => {
                console.error(e);
                this.messageService.showApiError(e.error);
            });
        }
        else {
            this.form.get("idSigno").setValue(null);
        }
    }
    salvarNovaProfissao() {
        if (this.searchProfissao.length > 0) {
            const toSave = new _shared_model_profissao_model__WEBPACK_IMPORTED_MODULE_2__.ProfissaoDTO();
            toSave.descricao = this.searchProfissao;
            this.profissaoService.create(toSave)
                .then(data => {
                this.messageService.showSuccess('Nova Profissao incluída com sucesso!');
                this.loadProfissoes();
            })
                .catch(e => {
                console.error(e);
                this.messageService.showApiError(e.error);
            });
        }
    }
    loadLocalizacoes(tipo) {
        var itemBusca = new _shared_model_localizacao_model__WEBPACK_IMPORTED_MODULE_4__.EstadoPaisRequestDTO();
        if (tipo === 1) {
            itemBusca.estado = this.form.get("estado").value;
            itemBusca.pais = this.form.get("pais").value;
        }
        else {
            itemBusca.estado = this.form.get("estadoOrigem").value;
            itemBusca.pais = this.form.get("paisOrigem").value;
        }
        this.localizacaoService.listAllByPaisEstado(itemBusca).then(data => {
            if (tipo === 1) {
                this.localizacoes = data;
            }
            else {
                this.localizacoesOrigem = data;
            }
        });
    }
    loadEstados(tipo) {
        var pais = tipo === 1 ? this.form.get("pais").value : this.form.get("paisOrigem").value;
        this.localizacaoService.listEstadosByPais(pais).then(data => {
            if (tipo === 1) {
                this.estados = data;
            }
            else {
                this.estadosOrigem = data;
            }
        });
    }
    viewIntroducaoOnClick(tema) {
        this.titleIntroducao = tema;
        this.introducaoVisible = true;
        this.introducaoService.getByTema(tema).then(data => {
            this.introducao = data;
            if (data === null) {
                this.introducao = new _shared_model_introducao_model__WEBPACK_IMPORTED_MODULE_5__.IntroducaoDTO();
                this.introducao.explicacao = "Explicação Geral não cadastrada";
            }
        });
    }
    clear(table) {
        table.clear();
        this.searchProfissao = '';
    }
    clearSearch(table) {
        table.clear();
        this.searchValue = '';
    }
    filterProfissaoOnClick() {
        this.filtroProfissaoVisible = true;
        this.introducaoService.getByTema("PROFISSAO").then(data => {
            this.introducao = data;
        });
    }
    refreshProfissaoOnClick() {
        this.loadProfissoes();
    }
    captureProfissao(prof) {
        this.form.get("idProfissao").setValue(prof.id);
        this.filtroProfissaoVisible = false;
    }
    viewInformacaoOnClick(tema) {
        this.titleIntroducao = tema;
        this.introducaoService.getByTema(tema).then(data => {
            this.introducao = data;
            if (data === null) {
                this.introducao = new _shared_model_introducao_model__WEBPACK_IMPORTED_MODULE_5__.IntroducaoDTO();
                this.introducao.explicacao = "Explicação Geral não cadastrada";
            }
            switch (tema) {
                case "RELIGIAO": {
                    this.informacoes = this.religioes;
                    this.viewInformacaoNome = true;
                    break;
                }
                case "POLITICA": {
                    this.informacoes = this.politicas;
                    this.viewInformacaoDescricao = true;
                    break;
                }
                case "TIME": {
                    this.informacoes = this.timesFutebol;
                    this.viewInformacaoNome = true;
                    break;
                }
                case "TEMPERAMENTO": {
                    this.informacoes = this.temperamentos;
                    this.viewInformacaoDescricao = true;
                    break;
                }
                case "ESTILO_MUSICAL": {
                    this.informacoes = this.estilosMusicais;
                    this.viewInformacaoNome = true;
                    break;
                }
                case "TIPO_SANGUINEO": {
                    this.informacoes = this.tiposSanguineo;
                    this.viewInformacaoNome = true;
                    break;
                }
                default: {
                    this.informacoes = null;
                    break;
                }
            }
        });
    }
    captureItem(item) {
        this.viewInformacaoNome = false;
        this.viewInformacaoDescricao = false;
        switch (this.titleIntroducao) {
            case "RELIGIAO": {
                this.form.get("idReligiao").setValue(item.id);
                break;
            }
            case "POLITICA": {
                this.form.get("idPolitica").setValue(item.id);
                break;
            }
            case "TIME": {
                this.form.get("idTimeFutebol").setValue(item.id);
                break;
            }
            case "HABITO_ALIMENTAR": {
                this.form.get("idHabitoAlimentar").setValue(item.id);
                break;
            }
            case "TEMPERAMENTO": {
                this.form.get("idTemperamento").setValue(item.id);
                break;
            }
            case "TIPO_SANGUINEO": {
                this.form.get("idTipoSanguineo").setValue(item.id);
                break;
            }
            default: {
                this.informacoes = null;
                break;
            }
        }
    }
    incluiLocalizacaoOnClick(nro) {
        this.newLocalizacao = true;
        this.nroLocalizacao = nro;
        switch (nro) {
            case 1: {
                this.pais = this.form.get('pais').value;
                break;
            }
            case 2: {
                this.pais = this.form.get('paisOrigem').value;
                break;
            }
        }
    }
    salvarLocalizacaoOnClick() {
        this.messageService.showConfirmation('Confirma inclusão de nova localização?', () => {
            let localizacao = new _shared_model_localizacao_model__WEBPACK_IMPORTED_MODULE_4__.LocalizacaoDTO();
            localizacao.estado = this.estado.toUpperCase();
            localizacao.pais = this.pais.toUpperCase();
            localizacao.nome = this.local.toUpperCase();
            this.localizacaoService.create(localizacao)
                .then(data => {
                this.messageService.showSuccess('Novo Localizacao incluído com sucesso!');
                //this.hideDialog();
                if (this.nroLocalizacao === 1) {
                    this.form.get("idLocalizacaoAtual").setValue(data.id);
                    this.form.get("pais").setValue(this.pais.toUpperCase());
                    this.form.get("estado").setValue(this.estado.toUpperCase());
                    this.loadEstados(1);
                    this.loadLocalizacoes(1);
                }
                else {
                    this.form.get("idLocalizacaoOrigem").setValue(data.id);
                    this.form.get("paisOrigem").setValue(this.pais.toUpperCase());
                    this.form.get("estadoOrigem").setValue(this.estado.toUpperCase());
                    this.loadEstados(2);
                    this.loadLocalizacoes(2);
                }
                this.newLocalizacao = false;
            })
                .catch(e => {
                console.error(e);
                this.messageService.showApiError(e.error);
            });
        });
    }
    focusNext(event) {
        event.preventDefault(); // Impede o "Enter" de submeter o form
        event.stopPropagation();
        if (event.target.parentElement.nextElementSibling) {
            console.log("pai :", event.target.parentElement.nextElementSibling);
            const nextInput = event.target.parentElement.nextElementSibling.querySelector('input', 'select', 'textarea');
            if (nextInput) {
                nextInput.focus();
            }
        }
        else {
            if (event.target.nextElementSibling) {
                const nextInput = event.target.nextElementSibling.querySelector('input', 'select', 'textarea');
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    }
    onChangeStatus(event) {
        this.cancelado = this.form.get('idStatus').value === '4';
    }
}
IntegranteFormComponent.ɵfac = function IntegranteFormComponent_Factory(t) { return new (t || IntegranteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_6__.AppMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_integrante_services_integrante_service__WEBPACK_IMPORTED_MODULE_7__.IntegranteService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_8__.GrupoService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_profissao_services_profissao_service__WEBPACK_IMPORTED_MODULE_9__.ProfissaoService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_signo_services_signo_service__WEBPACK_IMPORTED_MODULE_10__.SignoService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_localizacao_services_localizacao_service__WEBPACK_IMPORTED_MODULE_11__.LocalizacaoService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_religiao_services_religiao_service__WEBPACK_IMPORTED_MODULE_12__.ReligiaoService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_politica_services_politica_service__WEBPACK_IMPORTED_MODULE_13__.PoliticaService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_timeFutebol_services_time_service__WEBPACK_IMPORTED_MODULE_14__.TimeFutebolService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_estiloMusical_services_estiloMusical_service__WEBPACK_IMPORTED_MODULE_15__.EstiloMusicalService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_habilitacao_services_habilitacao_service__WEBPACK_IMPORTED_MODULE_16__.HabilitacaoService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_temperamento_services_temperamento_service__WEBPACK_IMPORTED_MODULE_17__.TemperamentoService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_habitoAlimentar_services_habitoAlimentar_service__WEBPACK_IMPORTED_MODULE_18__.HabitoAlimentarService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_introducao_services_introducao_service__WEBPACK_IMPORTED_MODULE_19__.IntroducaoService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_tipoSanguineo_services_tipo_sanguineo_service__WEBPACK_IMPORTED_MODULE_20__.TipoSanguineoService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_modules_status_services_status_service__WEBPACK_IMPORTED_MODULE_21__.StatusService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.DomSanitizer)); };
IntegranteFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({ type: IntegranteFormComponent, selectors: [["integrante-form"]], inputs: { formVisible: ["visible", "formVisible"], initialFormData: ["formData", "initialFormData"] }, outputs: { afterSave: "afterSave" }, decls: 58, vars: 96, consts: [["styleClass", "p-fluid", 3, "header", "breakpoints", "closeOnEscape", "maximizable", "modal", "visible", "visibleChange"], ["pTemplate", "content"], ["styleClass", "p-fluid", 3, "breakpoints", "maximizable", "modal", "visible", "visibleChange"], [1, "row"], [1, "col-4"], [1, "col-8"], [1, "col-12"], ["type", "text", "pInputTextarea", "", "autofocus", "", "rows", "10", "cols", "150", "disabled", "true", 2, "-webkit-box-sizing", "border-box", "-moz-box-sizing", "border-box", "box-sizing", "border-box", "width", "100%", 3, "ngModel", "ngModelChange"], ["header", "Pesquisar Profiss\u00F5es", "styleClass", "p-fluid", 3, "breakpoints", "maximizable", "modal", "visible", "visibleChange"], ["header", "Informa\u00E7\u00E3o"], [1, "card"], ["type", "text", "pInputTextarea", "", "autofocus", "", "rows", "3", "disabled", "true", 2, "-webkit-box-sizing", "border-box", "-moz-box-sizing", "border-box", "box-sizing", "border-box", "width", "100%", 3, "ngModel", "ngModelChange"], ["dataKey", "id", "sortMode", "multiple", "responsiveLayout", "stack", "styleClass", "p-datatable-sm", "currentPageReportTemplate", "Listando {first} a {last} de {totalRecords} registros", 3, "value", "globalFilterFields", "paginator", "rows", "rowsPerPageOptions", "scrollable", "resizableColumns", "rowHover", "responsive", "showCurrentPageReport"], ["dtProfissao", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], ["styleClass", "p-fluid", 3, "header", "breakpoints", "maximizable", "modal", "visible", "visibleChange"], ["dtInformacao1", ""], ["dtInformacao2", ""], ["header", "Nova Localiza\u00E7\u00E3o", "styleClass", "p-fluid", 3, "breakpoints", "maximizable", "modal", "visible", "visibleChange"], [1, "p-field"], ["for", "paisNew"], ["id", "paisNew", "type", "text", "pInputText", "", "autofocus", "", 1, "to-upper-case", 3, "ngModel", "ngModelChange"], ["for", "estadoNew"], ["id", "estadoNew", "type", "text", "pInputText", "", "autofocus", "", 1, "to-upper-case", 3, "ngModel", "ngModelChange"], ["for", "LocalNew"], ["id", "localNew", "type", "text", "pInputText", "", "autofocus", "", 1, "to-upper-case", 3, "ngModel", "ngModelChange"], [1, "col-3"], ["pButton", "", "pRipple", "", "label", "Salvar Localiza\u00E7\u00E3o", "icon", "pi pi-check", 1, "p-button-sm", 3, "click"], ["header", "Dados Gerais"], [3, "formGroup"], ["class", "p-field", 4, "ngIf"], ["header", "Avatar", 1, "card", "flex", "justify-content-center"], [1, "col-2", 2, "text-align", "center"], ["width", "80px", 3, "src"], ["mode", "basic", "name", "demo[]", "chooseIcon", "pi pi-upload", "url", "https://www.primefaces.org/cdn/api/upload.php", "accept", "image/*", "maxFileSize", "1000000", "chooseLabel", "Pr\u00F3prio", 3, "auto", "onUpload"], ["pButton", "", "pRipple", "", "pTooltip", "Apaga a Foto", "tooltipPosition", "top", "icon", "pi pi-eye-slash", "class", "p-button-sm p-button-rounded p-button-outlined p-button-danger", 3, "click", 4, "ngIf"], ["mode", "basic", "name", "demo2[]", "chooseIcon", "pi pi-upload", "url", "https://www.primefaces.org/cdn/api/upload.php", "accept", "image/*", "maxFileSize", "1000000", "chooseLabel", "Conjuge", 3, "auto", "onUpload"], ["pButton", "", "pRipple", "", "pTooltip", "Apaga a Foto Conjuge", "tooltipPosition", "top", "icon", "pi pi-eye-slash", "class", "p-button-sm p-button-rounded p-button-outlined p-button-danger", 3, "click", 4, "ngIf"], ["for", "nomeAtual"], ["id", "nomeAtual", "type", "text", "formControlName", "nomeAtual", "pInputText", "", "required", "", "autofocus", "", "enterToTab", "", 1, "to-upper-case", 3, "ngStyle"], ["class", "p-invalid", "style", "color: red", 4, "ngIf"], ["for", "nomeSolteiro"], ["id", "nomeSolteiro", "type", "text", "formControlName", "nomeSolteiro", "pInputText", "", "autofocus", "", "enterToTab", "", 1, "to-upper-case"], ["for", "conjugeAtual"], ["id", "conjugeAtual", "type", "text", "formControlName", "nomeConjugeAtual", "pInputText", "", "autofocus", "", 1, "to-upper-case", 3, "keydown.enter"], ["for", "idGrupo"], ["id", "idGrupo", "formControlName", "idGrupo", "optionValue", "id", "optionLabel", "descricao", "placeholder", "Selecione", "enterToTab", "", 3, "options", "showClear", "click", "onBlur"], ["for", "idAncestral"], ["id", "idAncestral", "formControlName", "idAncestral", "optionValue", "id", "optionLabel", "nomeCodigo", "placeholder", "Selecione", "filterBy", "nomeCodigo", "enterToTab", "", 3, "options", "showClear", "filter", "click", "onBlur"], ["ancestralDrop", ""], ["for", "dataNascimento"], ["pInputText", "", "id", "dataNascimento", "formControlName", "dataNascimento", "type", "date", 3, "blur", "keydown.enter"], ["for", "signo"], ["id", "signo", "formControlName", "idSigno", "optionValue", "id", "filterBy", "nome", "optionLabel", "nome", "placeholder", "Selecione", "readonly", "true", "enterToTab", "", 3, "filter", "options", "showClear"], ["for", "dataFalecimento"], ["pInputText", "", "id", "dataFalecimento", "formControlName", "dataFalecimento", "type", "date", 3, "keydown.enter"], ["for", "sexo"], ["id", "sexo", "formControlName", "sexo", "placeholder", "Selecione", "optionValue", "code", "optionLabel", "name", "filterBy", "name,code", "enterToTab", "", 3, "options", "showClear", "filter"], ["for", "telefone"], ["pInputText", "", "mask", "(99) 99999-9999", "id", "telefone", "formControlName", "telefone", 3, "keydown.enter"], ["for", "email"], ["pInputText", "", "email", "", "id", "email", "type", "text", "formControlName", "email", "enterToTab", ""], ["for", "conjugeAnterior"], ["id", "conjugeAnterior", "type", "text", "formControlName", "nomeConjugeAnterior", "pInputText", "", "autofocus", "", 1, "to-upper-case", 3, "keydown.enter"], ["header", "Localiza\u00E7\u00E3o Atual"], [1, "col-6"], ["for", "pais"], ["id", "pais", "type", "text", "formControlName", "pais", "pInputText", "", "autofocus", "", 1, "to-upper-case", 3, "blur", "keydown.enter"], ["for", "estado"], ["id", "estado", "formControlName", "estado", "placeholder", "Selecione", "enterToTab", "", 3, "options", "showClear", "onChange"], ["estadoDrop", ""], ["for", "idLocalizacaoAtual"], [1, "p-inputgroup"], ["id", "idLocalizacaoAtual", "formControlName", "idLocalizacaoAtual", "optionValue", "id", "optionLabel", "nomeEstadoPais", "placeholder", "Selecione", "filterBy", "nomeEstadoPais", 3, "options", "showClear", "filter"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus-circle", 1, "p-button-sm", "mr-1", 3, "click"], ["header", "Localiza\u00E7\u00E3o Origem"], ["for", "paisOrigem"], ["id", "paisOrigem", "type", "text", "formControlName", "paisOrigem", "pInputText", "", "autofocus", "true", 1, "to-upper-case", 3, "blur", "keydown.enter"], ["for", "estadoOrigem"], ["id", "estadoOrigem", "formControlName", "estadoOrigem", "placeholder", "Selecione", "autofocus", "true", 3, "options", "showClear", "onChange"], ["for", "idLocalizacaoOrigem"], ["id", "idLocalizacaoOrigem", "formControlName", "idLocalizacaoOrigem", "optionValue", "id", "optionLabel", "nomeEstadoPais", "placeholder", "Selecione", "filterBy", "nomeEstadoPais", 3, "options", "showClear", "filter"], ["for", "idProfissao"], ["id", "idProfissao", "formControlName", "idProfissao", "optionValue", "id", "optionLabel", "descricao", "placeholder", "Selecione", "variant", "filled", "readonly", "", 3, "options", "showClear"], ["pButton", "", "pRipple", "", "icon", "pi pi-info-circle", 1, "p-button-sm", "mr-1", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", 1, "p-button-sm", "mr-1", 3, "click"], ["for", "religiao"], ["id", "religiao", "formControlName", "idReligiao", "optionValue", "id", "optionLabel", "nome", "placeholder", "Selecione", "filterBy", "nome", "enterToTab", "", 3, "options", "showClear", "filter"], ["for", "politica"], ["id", "politica", "formControlName", "idPolitica", "optionValue", "id", "optionLabel", "descricao", "filterBy", "descricao", "placeholder", "Selecione", "enterToTab", "", 3, "options", "filter", "showClear"], ["for", "time"], ["id", "time", "formControlName", "idTimeFutebol", "optionValue", "id", "filterBy", "nomeEstado", "optionLabel", "nomeEstado", "placeholder", "Selecione", "enterToTab", "", 3, "filter", "options", "showClear"], ["for", "estilo"], ["id", "estilo", "formControlName", "idEstiloMusical", "optionValue", "id", "filterBy", "nome", "optionLabel", "nome", "placeholder", "Selecione", "enterToTab", "", 3, "filter", "options", "showClear"], ["for", "temperamento"], ["id", "temperamento", "formControlName", "idTemperamento", "optionValue", "id", "filterBy", "descricao", "optionLabel", "descricao", "filterBy", "descricao", "placeholder", "Selecione", "enterToTab", "", 3, "filter", "options", "showClear"], ["for", "habitoAlimentar"], ["id", "habitoAlimentar", "formControlName", "idHabitoAlimentar", "optionValue", "id", "filterBy", "descricao", "optionLabel", "descricao", "filterBy", "descricao", "placeholder", "Selecione", "autoShowPanelOnPrintableCharacterKeyDown", "false", 3, "filter", "options", "showClear"], ["id", "tipoSanguineo", "formControlName", "idTipoSanguineo", "optionValue", "id", "filterBy", "descricao", "optionLabel", "descricao", "filterBy", "descricao", "placeholder", "Selecione", "autoShowPanelOnPrintableCharacterKeyDown", "false", 3, "filter", "options", "showClear"], ["header", "Dados de Sistema"], ["pInputText", "", "formControlName", "dataCadastro", "type", "date", "disabled", "true"], ["formControlName", "aceito", "inputId", "binary", 3, "binary"], ["pButton", "", "pRipple", "", "label", "Salvar", "icon", "pi pi-check", 1, "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-sm", "p-button-secondary", 3, "click"], ["header", "Imagens", 4, "ngIf"], ["header", "PDF's", 4, "ngIf"], ["for", "id"], ["type", "text", "formControlName", "id", "pInputText", "", "id", "id", "disabled", "true"], ["for", "nroCadastro"], ["type", "text", "formControlName", "nroCadastro", "pInputText", "", "id", "nroCadastro", "disabled", "true"], ["for", "sequencia"], ["type", "text", "formControlName", "sequencia", "pInputText", "", "id", "sequencia", "disabled", "true"], ["pButton", "", "pRipple", "", "pTooltip", "Apaga a Foto", "tooltipPosition", "top", "icon", "pi pi-eye-slash", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-danger", 3, "click"], ["pButton", "", "pRipple", "", "pTooltip", "Apaga a Foto Conjuge", "tooltipPosition", "top", "icon", "pi pi-eye-slash", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-danger", 3, "click"], [1, "p-invalid", 2, "color", "red"], ["for", "nome1Ancestral"], ["id", "nome1Ancestral", "type", "text", "formControlName", "nome1Ancestral", "pInputText", "", "autofocus", "", "enterToTab", "", "placeholder", "Pai ou M\u00E3e", 1, "to-upper-case"], ["for", "nome2Ancestral"], ["id", "nome2Ancestral", "type", "text", "formControlName", "nome2Ancestral", "pInputText", "", "autofocus", "", "enterToTab", "", "placeholder", "Av\u00F4 ou Av\u00F3", 1, "to-upper-case"], ["fo0r", "status"], ["id", "status", "formControlName", "idStatus", "placeholder", "Status", "optionValue", "id", "optionLabel", "nome", 3, "showClear", "options", "onChange"], ["for", "motivoCancelamento"], ["id", "motivoCancelamento", "type", "text", "formControlName", "motivoCancelamento", "pInputTextarea", "", "autofocus", "", "rows", "5", "cols", "50"], ["header", "Imagens"], ["styleClass", "mb-4"], ["pTemplate", "left"], ["pTemplate", "right"], [4, "ngFor", "ngForOf"], ["header", "Para adicionar uma Imagem, digite uma descri\u00E7\u00E3o(identificando as pessoas da esquerda pra direita) e depois escolha a imagem"], ["type", "text", "pInputTextarea", "", "autofocus", "", "rows", "3", 2, "-webkit-box-sizing", "border-box", "-moz-box-sizing", "border-box", "box-sizing", "border-box", "width", "100%", 3, "ngModel", "ngModelChange"], ["mode", "basic", "name", "demo3[]", "chooseIcon", "pi pi-upload", "url", "https://www.primefaces.org/cdn/api/upload.php", "accept", "image/*,application/pdf", "maxFileSize", "2000000", "chooseLabel", "Adicionar", 3, "auto", "onUpload"], [1, "m-0"], ["pButton", "", "pRipple", "", "label", "refresh", "icon", "pi pi-times", 1, "p-button-sm", "p-button-secondary", 3, "click"], [1, "border-1", "surface-border", "border-round", "m-2", "p-3"], [1, "w-full", "rounded", 2, "width", "300px", "/* largura fixa */\n                                                                      height", "200px", "/* altura fixa */\n                                                                      object-fit", "cover", "/* corta a imagem para preencher sem distorcer */\n                                                                      border", "2px solid #ccc", 3, "src", "alt"], ["pButton", "", "pRipple", "", "label", "Excluir", "icon", "pi pi-times", 1, "p-button-sm", "p-button-secondary", 3, "click"], ["header", "PDF's"], ["header", "Para adicionar um PDF, digite uma descri\u00E7\u00E3o(identificando o documento)"], ["width", "100%", "height", "600px", 3, "src"], [1, "col-2"], ["title", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-sm", "mr-1", 3, "click"], [1, "p-input-icon-left", "ml-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "palavra chave", 3, "ngModel", "ngModelChange", "input"], ["title", "Novo Item", "icon", "pi pi-plus", 1, "p-button-sm", "mr-1", 3, "click"], [1, "table-acoes"], ["pResizableColumn", "", "pSortableColumn", "id", 1, "table-id"], ["field", "id"], ["pResizableColumn", "", "pSortableColumn", "descricao"], ["field", "descricao"], ["pButton", "", "pRipple", "", "icon", "pi pi-download", 1, "p-button-rounded", "p-button-outlined", "p-button-info", "mr-1", 3, "click"], [1, "table-id"], [1, "p-d-flex", "p-ai-center", "p-jc-between"], ["title", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-rounded", "p-button-outlined", "p-button-info", "mr-1", 3, "click"], ["pResizableColumn", "", "pSortableColumn", "informacao"], ["type", "text", "pInputTextarea", "", "autofocus", "", "rows", "3", "cols", "100", "disabled", "true", 2, "-webkit-box-sizing", "border-box", "-moz-box-sizing", "border-box", "box-sizing", "border-box", "width", "100%", 3, "ngModel", "ngModelChange"], ["pResizableColumn", "", "pSortableColumn", "nome"], ["field", "nome"], ["field", "informacao"]], template: function IntegranteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("visibleChange", function IntegranteFormComponent_Template_p_dialog_visibleChange_0_listener($event) { return ctx.formVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, IntegranteFormComponent_ng_template_1_Template, 186, 68, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "p-dialog", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("visibleChange", function IntegranteFormComponent_Template_p_dialog_visibleChange_2_listener($event) { return ctx.introducaoVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](6, "Tema:");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](12, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.introducao.explicacao = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](13, "p-dialog", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("visibleChange", function IntegranteFormComponent_Template_p_dialog_visibleChange_13_listener($event) { return ctx.filtroProfissaoVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](14, "p-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](16, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_Template_textarea_ngModelChange_16_listener($event) { return ctx.introducao.explicacao = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](17, "p-table", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](19, IntegranteFormComponent_ng_template_19_Template, 9, 1, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](20, IntegranteFormComponent_ng_template_20_Template, 9, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](21, IntegranteFormComponent_ng_template_21_Template, 7, 2, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](22, IntegranteFormComponent_ng_template_22_Template, 2, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](23, "p-dialog", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("visibleChange", function IntegranteFormComponent_Template_p_dialog_visibleChange_23_listener($event) { return ctx.viewInformacaoDescricao = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](24, "p-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](26, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_Template_textarea_ngModelChange_26_listener($event) { return ctx.introducao.explicacao = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](27, "p-table", 12, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](29, IntegranteFormComponent_ng_template_29_Template, 5, 1, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](30, IntegranteFormComponent_ng_template_30_Template, 9, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](31, IntegranteFormComponent_ng_template_31_Template, 7, 2, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](32, IntegranteFormComponent_ng_template_32_Template, 2, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](33, "p-dialog", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("visibleChange", function IntegranteFormComponent_Template_p_dialog_visibleChange_33_listener($event) { return ctx.viewInformacaoNome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](35, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_Template_textarea_ngModelChange_35_listener($event) { return ctx.introducao.explicacao = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](36, "p-table", 12, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](38, IntegranteFormComponent_ng_template_38_Template, 5, 1, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](39, IntegranteFormComponent_ng_template_39_Template, 9, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](40, IntegranteFormComponent_ng_template_40_Template, 7, 2, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](41, IntegranteFormComponent_ng_template_41_Template, 2, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](42, "p-dialog", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("visibleChange", function IntegranteFormComponent_Template_p_dialog_visibleChange_42_listener($event) { return ctx.newLocalizacao = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](44, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](45, "Pais");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](46, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_Template_input_ngModelChange_46_listener($event) { return ctx.pais = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](48, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](49, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](50, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_Template_input_ngModelChange_50_listener($event) { return ctx.estado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](53, "Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](54, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function IntegranteFormComponent_Template_input_ngModelChange_54_listener($event) { return ctx.local = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](57, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IntegranteFormComponent_Template_button_click_57_listener() { return ctx.salvarLocalizacaoOnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](78, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("header", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](79, _c2))("closeOnEscape", false)("maximizable", true)("modal", true)("visible", ctx.formVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](80, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](81, _c4))("maximizable", true)("modal", true)("visible", ctx.introducaoVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx.introducao.tema);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.introducao.explicacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](82, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](83, _c5))("maximizable", true)("modal", true)("visible", ctx.filtroProfissaoVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.introducao.explicacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("value", ctx.profissoes)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](84, _c6))("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](85, _c7))("scrollable", true)("resizableColumns", true)("rowHover", true)("responsive", true)("showCurrentPageReport", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](86, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate1"]("header", "Explica\u00E7\u00E3o ", ctx.titleIntroducao, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](87, _c4))("maximizable", true)("modal", true)("visible", ctx.viewInformacaoDescricao);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.introducao.explicacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("value", ctx.informacoes)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](88, _c9))("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](89, _c7))("scrollable", true)("resizableColumns", true)("rowHover", true)("responsive", true)("showCurrentPageReport", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](90, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate1"]("header", "Explica\u00E7\u00E3o ", ctx.titleIntroducao, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](91, _c4))("maximizable", true)("modal", true)("visible", ctx.viewInformacaoNome);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.introducao.explicacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("value", ctx.informacoes)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](92, _c10))("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](93, _c7))("scrollable", true)("resizableColumns", true)("rowHover", true)("responsive", true)("showCurrentPageReport", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](94, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](95, _c4))("maximizable", true)("modal", true)("visible", ctx.newLocalizacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.local);
    } }, directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_26__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_27__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, primeng_panel__WEBPACK_IMPORTED_MODULE_28__.Panel, primeng_table__WEBPACK_IMPORTED_MODULE_29__.Table, primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_31__.ButtonDirective, primeng_tabview__WEBPACK_IMPORTED_MODULE_32__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_32__.TabPanel, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgIf, primeng_fileupload__WEBPACK_IMPORTED_MODULE_34__.FileUpload, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.RequiredValidator, _enter_to_tab_directive__WEBPACK_IMPORTED_MODULE_22__.EnterToTabDirective, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgStyle, primeng_dropdown__WEBPACK_IMPORTED_MODULE_35__.Dropdown, primeng_inputmask__WEBPACK_IMPORTED_MODULE_36__.InputMask, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.EmailValidator, primeng_checkbox__WEBPACK_IMPORTED_MODULE_37__.Checkbox, primeng_tooltip__WEBPACK_IMPORTED_MODULE_38__.Tooltip, primeng_toolbar__WEBPACK_IMPORTED_MODULE_39__.Toolbar, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_31__.Button, primeng_table__WEBPACK_IMPORTED_MODULE_29__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_29__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_29__.SortIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlZ3JhbnRlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5242:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/integrante/components/integrante-grid/integrante-grid.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegranteGridComponent": () => (/* binding */ IntegranteGridComponent)
/* harmony export */ });
/* harmony import */ var _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/model/integrante.model  */ 7492);
/* harmony import */ var _integrante_form_integrante_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../integrante-form/integrante-form.component */ 6793);
/* harmony import */ var _shared_model_paginacao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/model/paginacao.model */ 6405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _modules_integrante_services_integrante_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/integrante/services/integrante.service */ 2175);
/* harmony import */ var _modules_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/grupo/services/grupo.service */ 1656);
/* harmony import */ var _shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/services/app-message.service */ 358);
/* harmony import */ var _modules_status_services_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/status/services/status.service */ 5716);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 7225);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 5132);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 5596);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _enter_to_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/enter-to-tab.directive */ 3282);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 2150);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ 9243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 8267);



















function IntegranteGridComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-dropdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function IntegranteGridComponent_ng_template_3_Template_p_dropdown_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.idGrupo = $event; })("onChange", function IntegranteGridComponent_ng_template_3_Template_p_dropdown_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function IntegranteGridComponent_ng_template_3_Template_p_dropdown_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.idAncestral = $event; })("onChange", function IntegranteGridComponent_ng_template_3_Template_p_dropdown_onChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r10.onChangeAncestral($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function IntegranteGridComponent_ng_template_3_Template_p_dropdown_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.idStatus = $event; })("onChange", function IntegranteGridComponent_ng_template_3_Template_p_dropdown_onChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r12.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function IntegranteGridComponent_ng_template_3_Template_p_dropdown_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.aceito = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.idGrupo)("showClear", true)("options", ctx_r0.grupos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.idAncestral)("showClear", true)("options", ctx_r0.ancestrais);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.idStatus)("showClear", true)("options", ctx_r0.todosStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.aceito)("options", ctx_r0.aceitoOptions)("showClear", false)("filter", true);
} }
function IntegranteGridComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IntegranteGridComponent_ng_template_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r14.createOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IntegranteGridComponent_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r16.deleteBulkOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IntegranteGridComponent_ng_template_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r17.refreshOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "button", 18);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.selectedRecords || !ctx_r1.selectedRecords.length);
} }
function IntegranteGridComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "p-sortIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Ancestral(Pai)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Data Nascto");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Nro");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "p-columnFilter", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function IntegranteGridComponent_ng_template_7_Template_p_columnFilter_input_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6); return _r2.filter($event.target.value, "nomeAtual", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showMenu", false);
} }
function IntegranteGridComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "p-tableCheckbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IntegranteGridComponent_ng_template_8_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const selectedRecord_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r21.editOnClick(selectedRecord_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IntegranteGridComponent_ng_template_8_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const selectedRecord_r20 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r23.deleteOnClick(selectedRecord_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedRecord_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", selectedRecord_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](selectedRecord_r20.nomeAtual);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](selectedRecord_r20.nomeAncestral);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 7, selectedRecord_r20.dataNascimento, "dd/MM/YYYY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](selectedRecord_r20.nameStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](selectedRecord_r20.nomeGrupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](selectedRecord_r20.nroCadastro);
} }
function IntegranteGridComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Total de registros: ", ctx_r5.records ? ctx_r5.records.length : 0, " ");
} }
const _c0 = function () { return [10, 20, 50, 100]; };
const _c1 = function () { return { field: "nomeAtual", order: 1 }; };
const _c2 = function (a0) { return [a0]; };
class IntegranteGridComponent {
    constructor(integranteService, grupoService, messageService, statusService) {
        this.integranteService = integranteService;
        this.grupoService = grupoService;
        this.messageService = messageService;
        this.statusService = statusService;
        this.idGrupo = null;
        this.idAncestral = null;
        this.idStatus = null;
        this.aceito = 'TODOS';
        this.aceitoOptions = [
            { name: 'TODOS', code: 'TODOS' },
            { name: 'ACEITO', code: 'ACEITO' },
            { name: 'AGUARDANDO', code: 'NÃO ACEITO' },
        ];
        this.loadTodosStatus();
    }
    ngOnInit() {
        this.paginateFilter = new _shared_model_integrante_model___WEBPACK_IMPORTED_MODULE_0__.ConsultarIntegranteRequestDTO();
        this.paginateFilter.paginacao = new _shared_model_paginacao_model__WEBPACK_IMPORTED_MODULE_2__.PaginacaoRequestDTO();
        this.paginateFilter.paginacao.camposOrdenacao = ["nomeAtual"];
        this.paginateFilter.nomeAtual = null;
        this.paginateFilter.nomeConjuge = null;
        this.paginateFilter.idGrupo = null;
        this.paginateFilter.idAncestral = null;
        this.paginateFilter.idStatus = null;
        this.paginateFilter.aceito = null;
        this.rows = 10;
        this.pageActual = 1;
        this.loadGrupos();
        this.loadAncestrais();
        this.loadRecordList();
        this.loadTodosStatus();
    }
    deleteRecords(toDelete) {
        let errors = 0;
        toDelete.forEach(each => this.integranteService.delete(each.id)
            .then(() => this.records = this.records.filter(val => val.id !== each.id))
            .catch(error => {
            errors++;
            console.error(error);
        }));
        return errors === 0;
    }
    loadRecordList() {
        this.loading = true;
        this.paginateFilter.paginacao.itensPorPagina = this.rows;
        this.paginateFilter.paginacao.paginaAtual = this.pageActual;
        this.paginateFilter.idGrupo = this.idGrupo;
        this.paginateFilter.idAncestral = this.idAncestral;
        this.paginateFilter.idStatus = this.idStatus;
        if (this.aceito !== 'TODOS') {
            this.paginateFilter.aceito = this.aceito == 'ACEITO';
        }
        else {
            this.paginateFilter.aceito = null;
        }
        this.integranteService.listAll(this.paginateFilter)
            .then(item => {
            this.itemsPaginated = item;
            this.records = this.itemsPaginated.itens;
            this.totalRecords = this.itemsPaginated.paginacao.totalItens;
            this.loading = false;
        });
    }
    onChange(event) {
        this.loadAncestrais();
        this.loadRecordList();
    }
    onChangeAncestral(event) {
        this.loadRecordList();
    }
    onLazyLoad(event) {
        this.rows = event.rows;
        this.pageActual = (event.first / event.rows) + 1;
        //Ordenação
        this.paginateFilter.paginacao.camposOrdenacao = [];
        if (event.sortField === undefined) {
            if (event.multiSortMeta !== undefined) {
                for (let i = 0; i < event.multiSortMeta.length; i++) {
                    this.paginateFilter.paginacao.camposOrdenacao[i] =
                        event.multiSortMeta[i].order == 1
                            ? event.multiSortMeta[i].field
                            : event.multiSortMeta[i].field + " DESC";
                }
            }
            else
                this.paginateFilter.paginacao.camposOrdenacao[0] = event.sortField;
        }
        //Inicializa Filtro
        this.paginateFilter.nomeAtual = null;
        this.paginateFilter.nomeConjuge = null;
        if (event.filters !== undefined) {
            for (let prop in event.filters) {
                let filterField = prop;
                let filterMeta = event.filters[filterField];
                if (filterMeta.value !== null) {
                    if (filterField === 'nomeAtual') {
                        this.paginateFilter.nomeAtual = filterMeta.value;
                    }
                    if (filterField === 'nomeConjuge') {
                        this.paginateFilter.nomeConjuge = filterMeta.value;
                    }
                }
            }
        }
        this.loadRecordList();
    }
    loadGrupos() {
        this.grupoService.listAll().then(data => this.grupos = data);
    }
    loadTodosStatus() {
        this.statusService.listAll().then(data => this.todosStatus = data);
    }
    loadAncestrais() {
        if (this.idGrupo !== null) {
            this.integranteService.listAncestraisByGrupo(this.idGrupo).then(data => this.ancestrais = data);
        }
        else {
            this.integranteService.listAncestrais().then(data => this.ancestrais = data);
        }
    }
    refreshOnClick() {
        this.loadRecordList();
        this.messageService.showSuccess('Lista atualizada com sucesso');
    }
    createOnClick() {
        this.form.showDialog();
    }
    editOnClick(integrante) {
        this.form.showDialog(integrante);
    }
    deleteOnClick(integrante) {
        this.messageService.showConfirmation('Confirma a exclusão do registro"' + integrante.nomeAtual + '"?', () => {
            this.deleteById(integrante.id);
        });
    }
    deleteById(toDelete) {
        this.integranteService.delete(toDelete)
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
IntegranteGridComponent.ɵfac = function IntegranteGridComponent_Factory(t) { return new (t || IntegranteGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_modules_integrante_services_integrante_service__WEBPACK_IMPORTED_MODULE_3__.IntegranteService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_modules_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_4__.GrupoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_app_message_service__WEBPACK_IMPORTED_MODULE_5__.AppMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_modules_status_services_status_service__WEBPACK_IMPORTED_MODULE_6__.StatusService)); };
IntegranteGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: IntegranteGridComponent, selectors: [["integrante-grid"]], viewQuery: function IntegranteGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_integrante_form_integrante_form_component__WEBPACK_IMPORTED_MODULE_1__.IntegranteFormComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 11, vars: 18, consts: [[1, "content-header"], ["header", "Cadastro de Integrantes/Candidatos"], ["styleClass", "mb-4"], ["pTemplate", "left"], ["pTemplate", "right"], ["dataKey", "id", "sortMode", "multiple", "scrollHeight", "400px", "responsiveLayout", "scroll", "styleClass", "p-datatable-sm p-datatable-gridlines", "currentPageReportTemplate", "Listando {first} a {last} de {totalRecords} registros", 3, "value", "lazy", "selection", "paginator", "rows", "totalRecords", "loading", "rowsPerPageOptions", "scrollable", "resizableColumns", "responsive", "showCurrentPageReport", "multiSortMeta", "selectionChange", "onLazyLoad"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], [3, "formData", "afterSave"], ["id", "idGrupo", "placeholder", "Grupos", "optionValue", "id", "optionLabel", "descricao", 3, "ngModel", "showClear", "options", "ngModelChange", "onChange"], ["id", "idAncestral", "placeholder", "Ancestral", "optionValue", "id", "optionLabel", "nomeAtual", 3, "ngModel", "showClear", "options", "ngModelChange", "onChange"], ["id", "status", "placeholder", "Status", "optionValue", "id", "optionLabel", "nome", 3, "ngModel", "showClear", "options", "ngModelChange", "onChange"], ["id", "aceito", "placeholder", "TODOS", "optionValue", "code", "optionLabel", "name", "filterBy", "name,code", "enterToTab", "", 3, "ngModel", "options", "showClear", "filter", "ngModelChange"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "cria um novo registro", "tooltipPosition", "top", "icon", "pi pi-plus", 1, "p-button-sm", "p-button-success", "mr-1", 3, "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "exclui os registros selecionados", "tooltipPosition", "top", "icon", "pi pi-trash", 1, "p-button-sm", "p-button-danger", "mr-1", 3, "disabled", "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "atualiza a lista de registros", "tooltipPosition", "top", "icon", "pi pi-refresh", 1, "p-button-sm", "p-button-info", 3, "click"], ["pButton", "", "pRipple", "", "label", "", "pTooltip", "Prepara consulta para Impress\u00E3o", "tooltipPosition", "top", "icon", "pi pi-print", "onclick", "window.print();", 1, "p-button-sm", "p-button-secondary"], ["pResizableColumn", "", 1, "table-check-selected"], [1, "table-acoes"], ["pResizableColumn", "", "pSortableColumn", "nomeAtual"], ["field", "nomeAtual"], ["pResizableColumn", ""], ["pResizableColumn", "", "pSortableColumn", "dataNascimento", 1, "table-acoes"], ["field", "dataNascto"], ["pResizableColumn", "", 1, "table-acoes"], [1, "table-check-selected"], ["type", "text", "field", "nomeAtual", 3, "showMenu", "input"], [3, "value"], ["pButton", "", "pRipple", "", "pTooltip", "Edita Dados dos Integrante", "tooltipPosition", "top", "icon", "pi pi-pencil", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-info", "mr-1", 3, "click"], ["pButton", "", "pRipple", "", "pTooltip", "Exclui Registro", "tooltipPosition", "top", "icon", "pi pi-trash", 1, "p-button-sm", "p-button-rounded", "p-button-outlined", "p-button-danger", 3, "click"], [1, "p-d-flex", "p-ai-center", "p-jc-between"]], template: function IntegranteGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, IntegranteGridComponent_ng_template_3_Template, 4, 13, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, IntegranteGridComponent_ng_template_4_Template, 4, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function IntegranteGridComponent_Template_p_table_selectionChange_5_listener($event) { return ctx.selectedRecords = $event; })("onLazyLoad", function IntegranteGridComponent_Template_p_table_onLazyLoad_5_listener($event) { return ctx.onLazyLoad($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, IntegranteGridComponent_ng_template_7_Template, 29, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, IntegranteGridComponent_ng_template_8_Template, 19, 10, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, IntegranteGridComponent_ng_template_9_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "integrante-form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("afterSave", function IntegranteGridComponent_Template_integrante_form_afterSave_10_listener() { return ctx.loadRecordList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.records)("lazy", true)("selection", ctx.selectedRecords)("paginator", true)("rows", ctx.rows)("totalRecords", ctx.totalRecords)("loading", ctx.loading)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](14, _c0))("scrollable", true)("resizableColumns", true)("responsive", true)("showCurrentPageReport", true)("multiSortMeta", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](15, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formData", ctx.selectedRecord);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, _integrante_form_integrante_form_component__WEBPACK_IMPORTED_MODULE_1__.IntegranteFormComponent, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _enter_to_tab_directive__WEBPACK_IMPORTED_MODULE_7__.EnterToTabDirective, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_12__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableHeaderCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_12__.ColumnFilter, primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableCheckbox], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlZ3JhbnRlLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1764:
/*!*****************************************************************!*\
  !*** ./src/app/modules/integrante/integrante-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegranteRoutingModule": () => (/* binding */ IntegranteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_integrante_grid_integrante_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/integrante-grid/integrante-grid.component */ 5242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        children: [{
                path: '',
                component: _components_integrante_grid_integrante_grid_component__WEBPACK_IMPORTED_MODULE_0__.IntegranteGridComponent,
                data: {
                    breadcrumb: null,
                },
            }
        ]
    },
];
class IntegranteRoutingModule {
}
IntegranteRoutingModule.ɵfac = function IntegranteRoutingModule_Factory(t) { return new (t || IntegranteRoutingModule)(); };
IntegranteRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IntegranteRoutingModule });
IntegranteRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IntegranteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1029:
/*!*********************************************************!*\
  !*** ./src/app/modules/integrante/integrante.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegranteModule": () => (/* binding */ IntegranteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_integrante_grid_integrante_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/integrante-grid/integrante-grid.component */ 5242);
/* harmony import */ var _components_integrante_form_integrante_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/integrante-form/integrante-form.component */ 6793);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ 3581);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 3750);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toolbar */ 7225);
/* harmony import */ var _integrante_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integrante-routing.module */ 1764);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 1599);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 1849);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 9812);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 9243);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 5596);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 3494);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputnumber */ 3932);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/checkbox */ 7588);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/fileupload */ 3735);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputmask */ 9712);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/image */ 8907);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/carousel */ 1460);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/galleria */ 4360);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tabview */ 3397);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/button */ 2150);
/* harmony import */ var _shared_shared_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/shared-directive.module */ 9867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);

























class IntegranteModule {
}
IntegranteModule.ɵfac = function IntegranteModule_Factory(t) { return new (t || IntegranteModule)(); };
IntegranteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: IntegranteModule });
IntegranteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _integrante_routing_module__WEBPACK_IMPORTED_MODULE_2__.IntegranteRoutingModule,
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
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule,
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.CheckboxModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumberModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__.FileUploadModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__.InputMaskModule,
            primeng_galleria__WEBPACK_IMPORTED_MODULE_20__.GalleriaModule,
            primeng_tabview__WEBPACK_IMPORTED_MODULE_21__.TabViewModule,
            primeng_image__WEBPACK_IMPORTED_MODULE_22__.ImageModule,
            primeng_carousel__WEBPACK_IMPORTED_MODULE_23__.CarouselModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_24__.ButtonModule,
            _shared_shared_directive_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectiveModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](IntegranteModule, { declarations: [_components_integrante_grid_integrante_grid_component__WEBPACK_IMPORTED_MODULE_0__.IntegranteGridComponent,
        _components_integrante_form_integrante_form_component__WEBPACK_IMPORTED_MODULE_1__.IntegranteFormComponent], imports: [_integrante_routing_module__WEBPACK_IMPORTED_MODULE_2__.IntegranteRoutingModule,
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
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.CheckboxModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumberModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__.FileUploadModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__.InputMaskModule,
        primeng_galleria__WEBPACK_IMPORTED_MODULE_20__.GalleriaModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_21__.TabViewModule,
        primeng_image__WEBPACK_IMPORTED_MODULE_22__.ImageModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_23__.CarouselModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_24__.ButtonModule,
        _shared_shared_directive_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectiveModule] }); })();


/***/ }),

/***/ 2175:
/*!*******************************************************************!*\
  !*** ./src/app/modules/integrante/services/integrante.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegranteService": () => (/* binding */ IntegranteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class IntegranteService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'integrantes';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll(paginateFilter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.urlPrepared = this.URL + "?paginacao.paginaAtual=" +
                paginateFilter.paginacao.paginaAtual +
                "&paginacao.itensPorPagina=" +
                paginateFilter.paginacao.itensPorPagina;
            if (paginateFilter.paginacao.camposOrdenacao.length > 0) {
                for (let i = 0; i < paginateFilter.paginacao.camposOrdenacao.length; i++) {
                    this.urlPrepared = this.urlPrepared +
                        "&paginacao.camposOrdenacao=" + paginateFilter.paginacao.camposOrdenacao[i];
                }
            }
            if (paginateFilter.nomeAtual !== null) {
                this.urlPrepared = this.urlPrepared +
                    "&nomeAtual=" + paginateFilter.nomeAtual;
            }
            if (paginateFilter.nomeConjuge !== null) {
                this.urlPrepared = this.urlPrepared +
                    "&nomeConjuge=" + paginateFilter.nomeConjuge;
            }
            if (paginateFilter.idGrupo !== null) {
                this.urlPrepared = this.urlPrepared +
                    "&idGrupo=" + paginateFilter.idGrupo;
            }
            if (paginateFilter.idAncestral !== null) {
                this.urlPrepared = this.urlPrepared +
                    "&idAncestral=" + paginateFilter.idAncestral;
            }
            if (paginateFilter.idStatus !== null) {
                this.urlPrepared = this.urlPrepared +
                    "&idStatus=" + paginateFilter.idStatus;
            }
            if (paginateFilter.aceito !== null) {
                this.urlPrepared = this.urlPrepared +
                    "&aceito=" + paginateFilter.aceito;
            }
            if (paginateFilter.idAncestral !== null) {
                this.urlPrepared = this.urlPrepared +
                    "&idAncestral=" + paginateFilter.idAncestral;
            }
            return yield this.http.get(this.urlPrepared)
                .toPromise()
                .then(data => { return data; });
        });
    }
    listAncestrais() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + "/ancestrais/")
                .toPromise()
                .then(data => { return data; });
        });
    }
    listAncestraisByGrupo(idgrupo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + "/ancestrais_grupo/" + idgrupo)
                .toPromise()
                .then(data => { return data; });
        });
    }
    listAncestraisByGeracao(geracao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + "/geracao_grupo/" + geracao)
                .toPromise()
                .then(data => { return data; });
        });
    }
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.delete(this.URL + "/" + id)
                .toPromise()
                .then(data => { return data; });
        });
    }
    create(integrante) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, integrante)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(integrante) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + integrante.id, integrante)
                .toPromise()
                .then(data => { return data; });
        });
    }
    atualizaAvatars(atualizar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/avatar/ ", atualizar)
                .toPromise()
                .then(data => { return data; });
        });
    }
    listDocumentosByIntegrante(idIntegrante) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + "/docto/" + idIntegrante)
                .toPromise()
                .then(data => { return data; });
        });
    }
    addImagem(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/addimagem/", item)
                .toPromise()
                .then(data => { return data; });
        });
    }
    deleteImagem(idImagem) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.delete(this.URL + "/imagem/" + idImagem)
                .toPromise()
                .then(data => { return data; });
        });
    }
    listImagensByIntegrante(dto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + "/images/?tipo=" + dto.tipo + "&idIntegrante=" +
                dto.idIntegrante)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
IntegranteService.ɵfac = function IntegranteService_Factory(t) { return new (t || IntegranteService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
IntegranteService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IntegranteService, factory: IntegranteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6405:
/*!*************************************************!*\
  !*** ./src/app/shared/model/paginacao.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginacaoRequestDTO": () => (/* binding */ PaginacaoRequestDTO),
/* harmony export */   "PaginacaoResponseDTO": () => (/* binding */ PaginacaoResponseDTO)
/* harmony export */ });
class PaginacaoRequestDTO {
}
class PaginacaoResponseDTO {
}


/***/ }),

/***/ 7588:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-checkbox.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECKBOX_VALUE_ACCESSOR": () => (/* binding */ CHECKBOX_VALUE_ACCESSOR),
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox),
/* harmony export */   "CheckboxModule": () => (/* binding */ CheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 6197);






const _c0 = ["cb"];

const _c1 = function (a1, a2, a3) {
  return {
    "p-checkbox-label": true,
    "p-checkbox-label-active": a1,
    "p-disabled": a2,
    "p-checkbox-label-focus": a3
  };
};

function Checkbox_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Checkbox_label_6_Template_label_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

      return ctx_r2.onClick($event, _r0, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.labelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c1, ctx_r1.checked(), ctx_r1.disabled, ctx_r1.focused));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r1.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.label);
  }
}

const _c2 = function (a1, a2, a3) {
  return {
    "p-checkbox p-component": true,
    "p-checkbox-checked": a1,
    "p-checkbox-disabled": a2,
    "p-checkbox-focused": a3
  };
};

const _c3 = function (a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-disabled": a1,
    "p-focus": a2
  };
};

const CHECKBOX_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Checkbox),
  multi: true
};

class Checkbox {
  constructor(cd) {
    this.cd = cd;
    this.checkboxIcon = 'pi pi-check';
    this.trueValue = true;
    this.falseValue = false;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    this.onModelChange = () => {};

    this.onModelTouched = () => {};

    this.focused = false;
  }

  onClick(event, checkbox, focus) {
    event.preventDefault();

    if (this.disabled || this.readonly) {
      return;
    }

    this.updateModel(event);

    if (focus) {
      checkbox.focus();
    }
  }

  updateModel(event) {
    let newModelValue;

    if (!this.binary) {
      if (this.checked()) newModelValue = this.model.filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, this.value));else newModelValue = this.model ? [...this.model, this.value] : [this.value];
      this.onModelChange(newModelValue);
      this.model = newModelValue;

      if (this.formControl) {
        this.formControl.setValue(newModelValue);
      }
    } else {
      newModelValue = this.checked() ? this.falseValue : this.trueValue;
      this.model = newModelValue;
      this.onModelChange(newModelValue);
    }

    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event
    });
  }

  handleChange(event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }

  focus() {
    this.inputViewChild.nativeElement.focus();
  }

  writeValue(model) {
    this.model = model;
    this.cd.markForCheck();
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }

  checked() {
    return this.binary ? this.model === this.trueValue : primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.contains(this.value, this.model);
  }

}

Checkbox.ɵfac = function Checkbox_Factory(t) {
  return new (t || Checkbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

Checkbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Checkbox,
  selectors: [["p-checkbox"]],
  viewQuery: function Checkbox_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    value: "value",
    name: "name",
    disabled: "disabled",
    binary: "binary",
    label: "label",
    ariaLabelledBy: "ariaLabelledBy",
    ariaLabel: "ariaLabel",
    tabindex: "tabindex",
    inputId: "inputId",
    style: "style",
    styleClass: "styleClass",
    labelStyleClass: "labelStyleClass",
    formControl: "formControl",
    checkboxIcon: "checkboxIcon",
    readonly: "readonly",
    required: "required",
    trueValue: "trueValue",
    falseValue: "falseValue"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])],
  decls: 7,
  vars: 26,
  consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "readonly", "value", "checked", "disabled", "focus", "blur", "change"], ["cb", ""], [1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"]],
  template: function Checkbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Checkbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function Checkbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      })("change", function Checkbox_Template_input_change_2_listener($event) {
        return ctx.handleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Checkbox_Template_div_click_4_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        return ctx.onClick($event, _r0, true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Checkbox_label_6_Template, 2, 9, "label", 6);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](18, _c2, ctx.checked(), ctx.disabled, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.readonly)("value", ctx.value)("checked", ctx.checked())("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-checked", ctx.checked())("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c3, ctx.checked(), ctx.disabled, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.checked() ? ctx.checkboxIcon : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Checkbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-checkbox',
      template: `
        <div [ngStyle]="style" [ngClass]="{'p-checkbox p-component': true, 'p-checkbox-checked': checked(), 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused}" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [readonly]="readonly" [value]="value" [checked]="checked()" (focus)="onFocus()" (blur)="onBlur()"
                (change)="handleChange($event)" [disabled]="disabled" [attr.tabindex]="tabindex" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-label]="ariaLabel" [attr.aria-checked]="checked()" [attr.required]="required">
            </div>
            <div class="p-checkbox-box" (click)="onClick($event,cb,true)"
                        [ngClass]="{'p-highlight': checked(), 'p-disabled': disabled, 'p-focus': focused}">
                <span class="p-checkbox-icon" [ngClass]="checked() ? checkboxIcon : null"></span>
            </div>
        </div>
        <label (click)="onClick($event,cb,true)" [class]="labelStyleClass"
                [ngClass]="{'p-checkbox-label': true, 'p-checkbox-label-active':checked(), 'p-disabled':disabled, 'p-checkbox-label-focus':focused}"
                *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
      providers: [CHECKBOX_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      },
      styles: [".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    binary: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkboxIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trueValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    falseValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['cb']
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class CheckboxModule {}

CheckboxModule.ɵfac = function CheckboxModule_Factory(t) {
  return new (t || CheckboxModule)();
};

CheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CheckboxModule
});
CheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [Checkbox],
      declarations: [Checkbox]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_modules_integrante_integrante_module_ts.js.map