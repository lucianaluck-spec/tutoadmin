"use strict";
(self["webpackChunkadminlte"] = self["webpackChunkadminlte"] || []).push([["common"],{

/***/ 8665:
/*!*************************************************************************!*\
  !*** ./src/app/modules/estiloMusical/services/estiloMusical.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstiloMusicalService": () => (/* binding */ EstiloMusicalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class EstiloMusicalService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'estiloMusicals';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(estiloMusical) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, estiloMusical)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(estiloMusical) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + estiloMusical.id, estiloMusical)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
EstiloMusicalService.ɵfac = function EstiloMusicalService_Factory(t) { return new (t || EstiloMusicalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
EstiloMusicalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EstiloMusicalService, factory: EstiloMusicalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9486:
/*!*********************************************************************!*\
  !*** ./src/app/modules/habilitacao/services/habilitacao.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HabilitacaoService": () => (/* binding */ HabilitacaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class HabilitacaoService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'habilitacaos';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(habilitacao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, habilitacao)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(habilitacao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + habilitacao.id, habilitacao)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
HabilitacaoService.ɵfac = function HabilitacaoService_Factory(t) { return new (t || HabilitacaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
HabilitacaoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HabilitacaoService, factory: HabilitacaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3324:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/habitoAlimentar/services/habitoAlimentar.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HabitoAlimentarService": () => (/* binding */ HabitoAlimentarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class HabitoAlimentarService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'habitoAlimentars';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(habitoalimentar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, habitoalimentar)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(habitoalimentar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + habitoalimentar.id, habitoalimentar)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
HabitoAlimentarService.ɵfac = function HabitoAlimentarService_Factory(t) { return new (t || HabitoAlimentarService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
HabitoAlimentarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HabitoAlimentarService, factory: HabitoAlimentarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3911:
/*!*******************************************************************!*\
  !*** ./src/app/modules/introducao/services/introducao.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroducaoService": () => (/* binding */ IntroducaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class IntroducaoService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'introducaos';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(introducao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, introducao)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(introducao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + introducao.id, introducao)
                .toPromise()
                .then(data => { return data; });
        });
    }
    getByTema(tema) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + "/tema/" + tema)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
IntroducaoService.ɵfac = function IntroducaoService_Factory(t) { return new (t || IntroducaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
IntroducaoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IntroducaoService, factory: IntroducaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2758:
/*!*********************************************************************!*\
  !*** ./src/app/modules/localizacao/services/localizacao.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizacaoService": () => (/* binding */ LocalizacaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class LocalizacaoService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'localizacaos';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(Localizacao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, Localizacao)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(Localizacao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + Localizacao.id, Localizacao)
                .toPromise()
                .then(data => { return data; });
        });
    }
    listAllByPaisEstado(dto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let urlPrepared = this.URL + "/locais?estado=" + dto.estado +
                "&pais=" + dto.pais;
            return yield this.http.get(urlPrepared)
                .toPromise()
                .then(data => { return data; });
        });
    }
    listEstadosByPais(pais) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let urlPrepared = this.URL + "/estados/" + pais;
            return yield this.http.get(urlPrepared)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
LocalizacaoService.ɵfac = function LocalizacaoService_Factory(t) { return new (t || LocalizacaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
LocalizacaoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LocalizacaoService, factory: LocalizacaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7963:
/*!***************************************************************!*\
  !*** ./src/app/modules/politica/services/politica.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliticaService": () => (/* binding */ PoliticaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class PoliticaService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'politicas';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(politica) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, politica)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(politica) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + politica.id, politica)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
PoliticaService.ɵfac = function PoliticaService_Factory(t) { return new (t || PoliticaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
PoliticaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PoliticaService, factory: PoliticaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7429:
/*!*****************************************************************!*\
  !*** ./src/app/modules/profissao/services/profissao.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfissaoService": () => (/* binding */ ProfissaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class ProfissaoService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'profissaos';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(profissao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, profissao)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(admCartao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + admCartao.id, admCartao)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
ProfissaoService.ɵfac = function ProfissaoService_Factory(t) { return new (t || ProfissaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ProfissaoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProfissaoService, factory: ProfissaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1911:
/*!***************************************************************!*\
  !*** ./src/app/modules/religiao/services/religiao.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReligiaoService": () => (/* binding */ ReligiaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class ReligiaoService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'religiaos';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(religiao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, religiao)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(religiao) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + religiao.id, religiao)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
ReligiaoService.ɵfac = function ReligiaoService_Factory(t) { return new (t || ReligiaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ReligiaoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReligiaoService, factory: ReligiaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7866:
/*!*********************************************************!*\
  !*** ./src/app/modules/signo/services/signo.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignoService": () => (/* binding */ SignoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class SignoService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'signos';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(signo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, signo)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(signo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + signo.id, signo)
                .toPromise()
                .then(data => { return data; });
        });
    }
    buscaSigno(dto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let urlPrepared = this.URL + "/diames/?dia=" +
                dto.diaNascimento +
                "&mes=" + dto.mesNascimento;
            return yield this.http.get(urlPrepared)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
SignoService.ɵfac = function SignoService_Factory(t) { return new (t || SignoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
SignoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SignoService, factory: SignoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5716:
/*!***********************************************************!*\
  !*** ./src/app/modules/status/services/status.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusService": () => (/* binding */ StatusService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class StatusService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'status';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + status.id, status)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
StatusService.ɵfac = function StatusService_Factory(t) { return new (t || StatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
StatusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StatusService, factory: StatusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9109:
/*!***********************************************************************!*\
  !*** ./src/app/modules/temperamento/services/temperamento.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemperamentoService": () => (/* binding */ TemperamentoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class TemperamentoService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'temperamentos';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(temperamento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, temperamento)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(temperamento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + temperamento.id, temperamento)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
TemperamentoService.ɵfac = function TemperamentoService_Factory(t) { return new (t || TemperamentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
TemperamentoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TemperamentoService, factory: TemperamentoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 380:
/*!**************************************************************!*\
  !*** ./src/app/modules/timeFutebol/services/time.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeFutebolService": () => (/* binding */ TimeFutebolService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class TimeFutebolService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'times';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, time)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + time.id, time)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
TimeFutebolService.ɵfac = function TimeFutebolService_Factory(t) { return new (t || TimeFutebolService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
TimeFutebolService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TimeFutebolService, factory: TimeFutebolService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6680:
/*!**************************************************************************!*\
  !*** ./src/app/modules/tipoSanguineo/services/tipo-sanguineo.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipoSanguineoService": () => (/* binding */ TipoSanguineoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class TipoSanguineoService {
    constructor(http) {
        this.http = http;
        this.ENDPOINT = 'sanguineos';
        this.URL = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_URL
            + "/"
            + _config_api_config__WEBPACK_IMPORTED_MODULE_0__.APIConfig.CADASTROS_API_VERSION
            + "/"
            + this.ENDPOINT;
    }
    listAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL)
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
    create(time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(this.URL, time)
                .toPromise()
                .then(data => { return data; });
        });
    }
    update(time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.put(this.URL + "/" + time.id, time)
                .toPromise()
                .then(data => { return data; });
        });
    }
}
TipoSanguineoService.ɵfac = function TipoSanguineoService_Factory(t) { return new (t || TipoSanguineoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
TipoSanguineoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TipoSanguineoService, factory: TipoSanguineoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7492:
/*!***************************************************!*\
  !*** ./src/app/shared/model/integrante.model .ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegranteDTO": () => (/* binding */ IntegranteDTO),
/* harmony export */   "IntegranteResponseDTO": () => (/* binding */ IntegranteResponseDTO),
/* harmony export */   "StatusDTO": () => (/* binding */ StatusDTO),
/* harmony export */   "IntegranteAncestralResponseDTO": () => (/* binding */ IntegranteAncestralResponseDTO),
/* harmony export */   "IntegranteAvatarRequestDTO": () => (/* binding */ IntegranteAvatarRequestDTO),
/* harmony export */   "ConsultarIntegranteRequestDTO": () => (/* binding */ ConsultarIntegranteRequestDTO),
/* harmony export */   "ConsultarImagemIntegranteRequestDTO": () => (/* binding */ ConsultarImagemIntegranteRequestDTO),
/* harmony export */   "ConsultarIntegranteResponseDTO": () => (/* binding */ ConsultarIntegranteResponseDTO),
/* harmony export */   "IntegranteImagemDTO": () => (/* binding */ IntegranteImagemDTO)
/* harmony export */ });
class IntegranteDTO {
}
class IntegranteResponseDTO {
}
class StatusDTO {
}
class IntegranteAncestralResponseDTO {
}
class IntegranteAvatarRequestDTO {
}
class ConsultarIntegranteRequestDTO {
}
class ConsultarImagemIntegranteRequestDTO {
}
class ConsultarIntegranteResponseDTO {
}
class IntegranteImagemDTO {
}


/***/ }),

/***/ 7228:
/*!**************************************************!*\
  !*** ./src/app/shared/model/introducao.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroducaoDTO": () => (/* binding */ IntroducaoDTO)
/* harmony export */ });
class IntroducaoDTO {
}


/***/ }),

/***/ 7304:
/*!***************************************************!*\
  !*** ./src/app/shared/model/localizacao.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizacaoDTO": () => (/* binding */ LocalizacaoDTO),
/* harmony export */   "EstadoPaisRequestDTO": () => (/* binding */ EstadoPaisRequestDTO)
/* harmony export */ });
class LocalizacaoDTO {
}
class EstadoPaisRequestDTO {
}


/***/ }),

/***/ 8572:
/*!*************************************************!*\
  !*** ./src/app/shared/model/profissao.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfissaoDTO": () => (/* binding */ ProfissaoDTO)
/* harmony export */ });
class ProfissaoDTO {
}


/***/ }),

/***/ 811:
/*!*********************************************!*\
  !*** ./src/app/shared/model/signo.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignoDTO": () => (/* binding */ SignoDTO),
/* harmony export */   "SignoByDiaMesDTO": () => (/* binding */ SignoByDiaMesDTO)
/* harmony export */ });
class SignoDTO {
}
class SignoByDiaMesDTO {
}


/***/ })

}]);
//# sourceMappingURL=common.js.map