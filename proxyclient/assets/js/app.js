/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/Abstracts/Abstracts/ComponentEventsAbstract.ts":
/*!****************************************************************!*\
  !*** ./src/App/Abstracts/Abstracts/ComponentEventsAbstract.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentEventsAbstract: () => (/* binding */ ComponentEventsAbstract)
/* harmony export */ });
class ComponentEventsAbstract {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
}


/***/ }),

/***/ "./src/App/Abstracts/Abstracts/ComponentHTMLElementAbstract.ts":
/*!*********************************************************************!*\
  !*** ./src/App/Abstracts/Abstracts/ComponentHTMLElementAbstract.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentHTMLElementAbstract: () => (/* binding */ ComponentHTMLElementAbstract)
/* harmony export */ });
class ComponentHTMLElementAbstract extends HTMLElement {
    root;
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
    }
    initEvent() {
        const PublicCustomEventInstance = new CustomEvent(this.htmlTag + '-init', {
            bubbles: true,
            composed: true,
            detail: {
                element: this
            }
        });
        this.root.dispatchEvent(PublicCustomEventInstance);
        const PrivateCustomEventInstance = new CustomEvent('init', {
            bubbles: false,
            composed: false
        });
        this.root.dispatchEvent(PrivateCustomEventInstance);
    }
    connectedCallback() {
        this.customConnectedCallback();
        this.initEvent();
    }
    getTag() {
        return this.htmlTag;
    }
}


/***/ }),

/***/ "./src/App/Abstracts/Abstracts/ComponentInitializerAbstract.ts":
/*!*********************************************************************!*\
  !*** ./src/App/Abstracts/Abstracts/ComponentInitializerAbstract.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentInitializerAbstract: () => (/* binding */ ComponentInitializerAbstract)
/* harmony export */ });
class ComponentInitializerAbstract {
    htmlTag;
    constructor(htmlTag) {
        this.htmlTag = htmlTag;
    }
    init() {
        customElements.define(this.htmlTag, this.FactoryInstance.create(this.htmlTag));
    }
}


/***/ }),

/***/ "./src/App/Abstracts/Abstracts/ComponentStylesAbstract.ts":
/*!****************************************************************!*\
  !*** ./src/App/Abstracts/Abstracts/ComponentStylesAbstract.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentStylesAbstract: () => (/* binding */ ComponentStylesAbstract)
/* harmony export */ });
class ComponentStylesAbstract {
    styles;
    constructor() {
        this.styles = new CSSStyleSheet();
        this.styles.replaceSync(this.css());
    }
    renderStyles(root) {
        root.adoptedStyleSheets = [this.styles];
    }
}


/***/ }),

/***/ "./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts":
/*!******************************************************************!*\
  !*** ./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentTemplateAbstract: () => (/* binding */ ComponentTemplateAbstract)
/* harmony export */ });
class ComponentTemplateAbstract {
    template;
    constructor() {
        this.template = document.createElement('template');
        this.template.innerHTML = this.html();
    }
    renderTemplate(root) {
        root.appendChild(this.template.content.cloneNode(true));
        return root.querySelector(':scope > :last-child');
    }
}


/***/ }),

/***/ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts":
/*!*******************************************************************!*\
  !*** ./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImmutableContainerAbstract: () => (/* binding */ ImmutableContainerAbstract)
/* harmony export */ });
class ImmutableContainerAbstract {
    items;
    keys;
    constructor(items) {
        this.items = items;
        this.keys = Object.keys(this.items);
    }
    get(key) {
        return this.items[key];
    }
    getKeys() {
        return this.keys;
    }
}


/***/ }),

/***/ "./src/App/Abstracts/Abstracts/MutableContainerAbstract.ts":
/*!*****************************************************************!*\
  !*** ./src/App/Abstracts/Abstracts/MutableContainerAbstract.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutableContainerAbstract: () => (/* binding */ MutableContainerAbstract)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");

class MutableContainerAbstract extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    change(key, value) {
        this.items[key] = value;
    }
}


/***/ }),

/***/ "./src/App/Abstracts/Abstracts/StorageAbstract.ts":
/*!********************************************************!*\
  !*** ./src/App/Abstracts/Abstracts/StorageAbstract.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageAbstract: () => (/* binding */ StorageAbstract)
/* harmony export */ });
class StorageAbstract {
    DataFieldInstance;
    IDFieldInstance;
    id;
    constructor(DataFieldInstance, IDFieldInstance) {
        this.DataFieldInstance = DataFieldInstance;
        this.IDFieldInstance = IDFieldInstance;
        this.id = this.IDFieldInstance.get();
    }
    add(item) {
        const data = this.DataFieldInstance.get();
        const newItem = {};
        Object.assign(newItem, item, { id: this.id });
        data[this.id] = newItem;
        this.DataFieldInstance.set(data);
        this.id++;
        this.IDFieldInstance.set(this.id);
        return newItem;
    }
    set(item) {
        const data = this.DataFieldInstance.get();
        data[item.id] = item;
        this.DataFieldInstance.set(data);
    }
    get(id) {
        const data = this.DataFieldInstance.get();
        const item = data[id];
        if (!item) {
            return false;
        }
        return item;
    }
    getAll() {
        return this.DataFieldInstance.get();
    }
    delete(id) {
        const data = this.DataFieldInstance.get();
        const item = this.get(id);
        if (!item) {
            return false;
        }
        delete data[id];
        this.DataFieldInstance.set(data);
        return item;
    }
    deleteAll() {
        this.DataFieldInstance.clear();
    }
}


/***/ }),

/***/ "./src/App/Abstracts/Abstracts/StorageFieldAbstract.ts":
/*!*************************************************************!*\
  !*** ./src/App/Abstracts/Abstracts/StorageFieldAbstract.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageFieldAbstract: () => (/* binding */ StorageFieldAbstract)
/* harmony export */ });
class StorageFieldAbstract {
    storage;
    field;
    initValue;
    constructor(field, initValue) {
        this.storage = localStorage;
        this.field = field;
        this.initValue = initValue;
        this.init();
    }
    init() {
        const data = this.storage.getItem(this.field);
        if (!data) {
            this.clear();
        }
    }
    toJSON(data) {
        return JSON.stringify(data);
    }
    toData(json) {
        return JSON.parse(json);
    }
    get() {
        const data = this.storage.getItem(this.field);
        return this.toData(data);
    }
    set(data) {
        const jsonData = this.toJSON(data);
        this.storage.setItem(this.field, jsonData);
    }
    clear() {
        const data = this.get();
        this.storage.setItem(this.field, this.toJSON(this.initValue));
        return data;
    }
}


/***/ }),

/***/ "./src/App/App.ts":
/*!************************!*\
  !*** ./src/App/App.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _App_Components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Components/Accordion/Accordion */ "./src/App/Components/Accordion/Accordion.ts");
/* harmony import */ var _App_Components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/App/Components/Page/Page */ "./src/App/Components/Page/Page.ts");
/* harmony import */ var _App_Components_ProxySettings_ProxySettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/App/Components/ProxySettings/ProxySettings */ "./src/App/Components/ProxySettings/ProxySettings.ts");
/* harmony import */ var _App_Components_ProxyList_ProxyList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/App/Components/ProxyList/ProxyList */ "./src/App/Components/ProxyList/ProxyList.ts");
/* harmony import */ var _App_Components_ConnectionButton_ConnectionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/App/Components/ConnectionButton/ConnectionButton */ "./src/App/Components/ConnectionButton/ConnectionButton.ts");
/* harmony import */ var _App_Components_Error_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/App/Components/Error/Error */ "./src/App/Components/Error/Error.ts");
/* harmony import */ var _App_Router_Router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/App/Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _App_Router_RouterRules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/App/Router/RouterRules */ "./src/App/Router/RouterRules.ts");
/* harmony import */ var _App_Router_PagesController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/App/Router/PagesController */ "./src/App/Router/PagesController.ts");
/* harmony import */ var _App_Storage_ProxyIDField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/App/Storage/ProxyIDField */ "./src/App/Storage/ProxyIDField.ts");
/* harmony import */ var _App_Storage_ProxySelectedIDField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/App/Storage/ProxySelectedIDField */ "./src/App/Storage/ProxySelectedIDField.ts");
/* harmony import */ var _App_Storage_ProxyListField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/App/Storage/ProxyListField */ "./src/App/Storage/ProxyListField.ts");
/* harmony import */ var _App_Storage_ProxyStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/App/Storage/ProxyStorage */ "./src/App/Storage/ProxyStorage.ts");
/* harmony import */ var _App_Handlers_ProxyPageOpenHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/App/Handlers/ProxyPageOpenHandler */ "./src/App/Handlers/ProxyPageOpenHandler.ts");
/* harmony import */ var _App_Handlers_SettingsPageOpenHandler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/App/Handlers/SettingsPageOpenHandler */ "./src/App/Handlers/SettingsPageOpenHandler.ts");
/* harmony import */ var _App_Handlers_RouterLinkClickHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/App/Handlers/RouterLinkClickHandler */ "./src/App/Handlers/RouterLinkClickHandler.ts");
/* harmony import */ var _App_Handlers_ErrorsHandler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/App/Handlers/ErrorsHandler */ "./src/App/Handlers/ErrorsHandler.ts");

















class App {
    constructor() {
        this.init();
    }
    init() {
        const ProxyIDFieldInstance = new _App_Storage_ProxyIDField__WEBPACK_IMPORTED_MODULE_9__.ProxyIDField('proxyIDIncrement');
        const ProxySelectedIDFieldInstance = new _App_Storage_ProxySelectedIDField__WEBPACK_IMPORTED_MODULE_10__.ProxySelectedIDField('proxySelectedID');
        const ProxyListFieldInstance = new _App_Storage_ProxyListField__WEBPACK_IMPORTED_MODULE_11__.ProxyListField('proxyList');
        const ProxyStorageInstance = new _App_Storage_ProxyStorage__WEBPACK_IMPORTED_MODULE_12__.ProxyStorage(ProxyListFieldInstance, ProxyIDFieldInstance, ProxySelectedIDFieldInstance);
        const RouterRulesInstance = new _App_Router_RouterRules__WEBPACK_IMPORTED_MODULE_7__.RouterRules();
        const RouterInstance = new _App_Router_Router__WEBPACK_IMPORTED_MODULE_6__.Router();
        const PagesControllerInstance = new _App_Router_PagesController__WEBPACK_IMPORTED_MODULE_8__.PagesController(RouterInstance, RouterRulesInstance);
        const AccordionInitializerInstance = new _App_Components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionInitializer();
        const PageInitializerInstance = new _App_Components_Page_Page__WEBPACK_IMPORTED_MODULE_1__.PageInitializer(RouterInstance);
        const ProxySettingsInitializerInstance = new _App_Components_ProxySettings_ProxySettings__WEBPACK_IMPORTED_MODULE_2__.ProxySettingsInitializer(ProxyStorageInstance, 5);
        const ProxyListInitializerInstance = new _App_Components_ProxyList_ProxyList__WEBPACK_IMPORTED_MODULE_3__.ProxyListInitializer(ProxyStorageInstance);
        const ConnectionButtonInitializerInstance = new _App_Components_ConnectionButton_ConnectionButton__WEBPACK_IMPORTED_MODULE_4__.ConnectionButtonInitializer(ProxyStorageInstance);
        const ErrorInitializerInstance = new _App_Components_Error_Error__WEBPACK_IMPORTED_MODULE_5__.ErrorInitializer();
        const ProxyPageOpenHandlerInstance = new _App_Handlers_ProxyPageOpenHandler__WEBPACK_IMPORTED_MODULE_13__.ProxyPageOpenHandler();
        const SettingsPageOpenHandlerInstance = new _App_Handlers_SettingsPageOpenHandler__WEBPACK_IMPORTED_MODULE_14__.SettingsPageOpenHandler();
        const RouterLinkClickHandlerInstance = new _App_Handlers_RouterLinkClickHandler__WEBPACK_IMPORTED_MODULE_15__.RouterLinkClickHandler(PagesControllerInstance);
        const ErrorsHandlerInstance = new _App_Handlers_ErrorsHandler__WEBPACK_IMPORTED_MODULE_16__.ErrorsHandler();
        RouterRulesInstance.add('#startPage', (route) => {
            if (ProxyStorageInstance.getCount()) {
                return '#proxyPage';
            }
            return route;
        });
        document.addEventListener('#proxyPageOpen', (e) => {
            ProxyPageOpenHandlerInstance.handle(undefined, e);
        });
        document.addEventListener('#settingsPageOpen', (e) => {
            SettingsPageOpenHandlerInstance.handle(undefined, e);
        });
        document.addEventListener('click', (e) => {
            RouterLinkClickHandlerInstance.handle(undefined, e);
        });
        window.onerror = (message) => {
            ErrorsHandlerInstance.handle(message);
        };
        AccordionInitializerInstance.init();
        PageInitializerInstance.init();
        ProxySettingsInitializerInstance.init();
        ProxyListInitializerInstance.init();
        ConnectionButtonInitializerInstance.init();
        ErrorInitializerInstance.init();
        PagesControllerInstance.switch('#startPage');
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Accordion.ts":
/*!***************************************************!*\
  !*** ./src/App/Components/Accordion/Accordion.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionInitializer: () => (/* reexport safe */ _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__.Initializer)
/* harmony export */ });
/* harmony import */ var _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Structure/Initializer */ "./src/App/Components/Accordion/Structure/Initializer.ts");




/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Behaviors/ExpandBehavior.ts":
/*!****************************************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Behaviors/ExpandBehavior.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandBehavior: () => (/* binding */ ExpandBehavior)
/* harmony export */ });
class ExpandBehavior {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
    do() {
        const activeClass = 'accordion-item-active';
        const wrapper = this.CustomHTMLElementInstance.root.querySelector('.accordion-item-wrapper');
        const contentWrapper = this.CustomHTMLElementInstance.root.querySelector('.accordion-item-content-wrapper');
        const content = this.CustomHTMLElementInstance.root.querySelector('.accordion-item-content');
        if (!wrapper || !contentWrapper || !content) {
            return;
        }
        if (!this.CustomHTMLElementInstance.StateInstance.get('expand')) {
            wrapper.classList.add(activeClass);
            contentWrapper.style['height'] = content.offsetHeight + 'px';
            this.CustomHTMLElementInstance.StateInstance.change('expand', true);
        }
        else {
            wrapper.classList.remove(activeClass);
            contentWrapper.style['height'] = '0';
            this.CustomHTMLElementInstance.StateInstance.change('expand', false);
        }
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Factory.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Factory.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: () => (/* binding */ Factory)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentHTMLElementAbstract */ "./src/App/Abstracts/Abstracts/ComponentHTMLElementAbstract.ts");
/* harmony import */ var _Main_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/State */ "./src/App/Components/Accordion/Structure/Main/State.ts");
/* harmony import */ var _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main/Behaviors */ "./src/App/Components/Accordion/Structure/Main/Behaviors.ts");
/* harmony import */ var _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main/Handlers */ "./src/App/Components/Accordion/Structure/Main/Handlers.ts");
/* harmony import */ var _Main_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main/Events */ "./src/App/Components/Accordion/Structure/Main/Events.ts");
/* harmony import */ var _Main_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main/Template */ "./src/App/Components/Accordion/Structure/Main/Template.ts");
/* harmony import */ var _Main_Styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main/Styles */ "./src/App/Components/Accordion/Structure/Main/Styles.ts");







class Factory {
    create(htmlTag) {
        const TemplateInstance = new _Main_Template__WEBPACK_IMPORTED_MODULE_5__.Template();
        const StylesInstance = new _Main_Styles__WEBPACK_IMPORTED_MODULE_6__.Styles();
        return class AccordionHTMLElement extends _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentHTMLElementAbstract {
            htmlTag;
            StateInstance;
            BehaviorsInstance;
            HandlersInstance;
            EventsInstance;
            constructor() {
                super();
                this.htmlTag = htmlTag;
                this.StateInstance = new _Main_State__WEBPACK_IMPORTED_MODULE_1__.State();
                this.BehaviorsInstance = new _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__.Behaviors(this);
                this.HandlersInstance = new _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__.Handlers(this);
                this.EventsInstance = new _Main_Events__WEBPACK_IMPORTED_MODULE_4__.Events(this);
            }
            customConnectedCallback() {
                TemplateInstance.renderTemplate(this.root);
                StylesInstance.renderStyles(this.root);
                this.EventsInstance.initEvents(this.root);
            }
        };
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Handlers/ExpandHandler.ts":
/*!**************************************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Handlers/ExpandHandler.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandHandler: () => (/* binding */ ExpandHandler)
/* harmony export */ });
class ExpandHandler {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
    handle() {
        const ExpandBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('expand');
        ExpandBehaviorInstance.do();
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Initializer.ts":
/*!***************************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Initializer.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Initializer: () => (/* binding */ Initializer)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentInitializerAbstract */ "./src/App/Abstracts/Abstracts/ComponentInitializerAbstract.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/App/Components/Accordion/Structure/Factory.ts");


class Initializer extends _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentInitializerAbstract {
    FactoryInstance;
    constructor() {
        super('custom-accordion');
        this.FactoryInstance = new _Factory__WEBPACK_IMPORTED_MODULE_1__.Factory();
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Main/Behaviors.ts":
/*!******************************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Main/Behaviors.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Behaviors: () => (/* binding */ Behaviors)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Behaviors_ExpandBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Behaviors/ExpandBehavior */ "./src/App/Components/Accordion/Structure/Behaviors/ExpandBehavior.ts");


class Behaviors extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance) {
        super({
            expand: new _Behaviors_ExpandBehavior__WEBPACK_IMPORTED_MODULE_1__.ExpandBehavior(CustomHTMLElementInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Main/Events.ts":
/*!***************************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Main/Events.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentEventsAbstract */ "./src/App/Abstracts/Abstracts/ComponentEventsAbstract.ts");

class Events extends _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentEventsAbstract {
    initEvents(root) {
        const titleWrapper = root.querySelector('.accordion-item-title-wrapper');
        if (titleWrapper) {
            titleWrapper.addEventListener('click', (e) => {
                const ExpandHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('expand');
                ExpandHandlerInstance.handle();
            });
        }
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Main/Handlers.ts":
/*!*****************************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Main/Handlers.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handlers: () => (/* binding */ Handlers)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Handlers_ExpandHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handlers/ExpandHandler */ "./src/App/Components/Accordion/Structure/Handlers/ExpandHandler.ts");


class Handlers extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance) {
        super({
            expand: new _Handlers_ExpandHandler__WEBPACK_IMPORTED_MODULE_1__.ExpandHandler(CustomHTMLElementInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Main/State.ts":
/*!**************************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Main/State.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/MutableContainerAbstract */ "./src/App/Abstracts/Abstracts/MutableContainerAbstract.ts");

class State extends _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.MutableContainerAbstract {
    constructor() {
        super({
            expand: false
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Main/Styles.ts":
/*!***************************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Main/Styles.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Styles: () => (/* binding */ Styles)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentStylesAbstract */ "./src/App/Abstracts/Abstracts/ComponentStylesAbstract.ts");

class Styles extends _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentStylesAbstract {
    css() {
        return `
			:host {
				display: block;
			}

			:host(:not(:last-child)) {
				padding-bottom: 15px;
				margin-bottom: 15px;
				border-bottom: 1px solid var(--textColor);
			}

			.accordion-item-wrapper {
				color: var(--textColor);
			}

			.accordion-item-button {
				background-color: transparent;
				padding: 5px 10px;
				margin-right: -10px;
				border: none;
				transition: 0.5s;
			}

			.accordion-item-button svg {
				display: block;
				width: 15px;
				height: 15px;
			}

			.accordion-item-button svg path {
				fill: var(--textColor);
			}

			.accordion-item-active .accordion-item-button {
				transform: rotate(180deg);
			}

			.accordion-item-title {
				padding-right: 15px;
			}

			.accordion-item-title-wrapper {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				cursor: pointer;
			}

			.accordion-item-content h4 {
				font-size: 18px;
			}

			.accordion-item-content *:not(:last-child) {
				margin-bottom: 10px;
			}

			.accordion-item-content-wrapper {
				overflow: hidden;
				height: 0;
				transition: 0.5s;
			}

			.accordion-item-wrapper:not(:last-child) {
				padding-bottom: 20px;
				margin-bottom: 20px;
				border-bottom: 1px solid var(--textColor);
			}

			.accordion-item-content {
				padding-top: 10px;
			}
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/Accordion/Structure/Main/Template.ts":
/*!*****************************************************************!*\
  !*** ./src/App/Components/Accordion/Structure/Main/Template.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentTemplateAbstract */ "./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts");

class Template extends _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentTemplateAbstract {
    html() {
        return `
			<div class="accordion-item-wrapper">
				<div class="accordion-item">
					<div class="accordion-item-title-wrapper">
						<span class="accordion-item-title">
							<slot name="accordion-title"></slot>
						</span>
						<button type="button" class="accordion-item-button">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
						</button>
					</div>
					<div class="accordion-item-content-wrapper">
						<div class="accordion-item-content">
							<slot name="accordion-content"></slot>
						</div>
					</div>
				</div>
			</div>
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/ConnectionButton.ts":
/*!*****************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/ConnectionButton.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionButtonInitializer: () => (/* reexport safe */ _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__.Initializer)
/* harmony export */ });
/* harmony import */ var _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Structure/Initializer */ "./src/App/Components/ConnectionButton/Structure/Initializer.ts");




/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Behaviors/ConnectionBehavior.ts":
/*!***************************************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Behaviors/ConnectionBehavior.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionBehavior: () => (/* binding */ ConnectionBehavior)
/* harmony export */ });
class ConnectionBehavior {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
    do() {
        const connectionButton = this.CustomHTMLElementInstance.root.querySelector('.proxy-connect-button');
        const statusLabel = this.CustomHTMLElementInstance.root.querySelector('.proxy-status');
        const status = this.CustomHTMLElementInstance.StateInstance.get('status');
        if (!connectionButton || !statusLabel) {
            return;
        }
        connectionButton.setAttribute('data-status', status);
        statusLabel.innerText = statusLabel.getAttribute('data-' + status);
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Factory.ts":
/*!******************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Factory.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: () => (/* binding */ Factory)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentHTMLElementAbstract */ "./src/App/Abstracts/Abstracts/ComponentHTMLElementAbstract.ts");
/* harmony import */ var _Main_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/State */ "./src/App/Components/ConnectionButton/Structure/Main/State.ts");
/* harmony import */ var _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main/Behaviors */ "./src/App/Components/ConnectionButton/Structure/Main/Behaviors.ts");
/* harmony import */ var _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main/Handlers */ "./src/App/Components/ConnectionButton/Structure/Main/Handlers.ts");
/* harmony import */ var _Main_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main/Events */ "./src/App/Components/ConnectionButton/Structure/Main/Events.ts");
/* harmony import */ var _Main_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main/Template */ "./src/App/Components/ConnectionButton/Structure/Main/Template.ts");
/* harmony import */ var _Main_Styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main/Styles */ "./src/App/Components/ConnectionButton/Structure/Main/Styles.ts");







class Factory {
    ProxySorageInstance;
    constructor(ProxySorageInstance) {
        this.ProxySorageInstance = ProxySorageInstance;
    }
    create(htmlTag) {
        const TemplateInstance = new _Main_Template__WEBPACK_IMPORTED_MODULE_5__.Template();
        const StylesInstance = new _Main_Styles__WEBPACK_IMPORTED_MODULE_6__.Styles();
        const ProxySorageInstance = this.ProxySorageInstance;
        return class ConnectionButtonHTMLElement extends _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentHTMLElementAbstract {
            htmlTag;
            StateInstance;
            BehaviorsInstance;
            HandlersInstance;
            EventsInstance;
            constructor() {
                super();
                this.htmlTag = htmlTag;
                this.StateInstance = new _Main_State__WEBPACK_IMPORTED_MODULE_1__.State();
                this.BehaviorsInstance = new _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__.Behaviors(this);
                this.HandlersInstance = new _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__.Handlers(this, ProxySorageInstance);
                this.EventsInstance = new _Main_Events__WEBPACK_IMPORTED_MODULE_4__.Events(this);
            }
            customConnectedCallback() {
                TemplateInstance.renderTemplate(this.root);
                StylesInstance.renderStyles(this.root);
                this.EventsInstance.initEvents(this.root);
            }
        };
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Handlers/ConnectionHandler.ts":
/*!*************************************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Handlers/ConnectionHandler.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionHandler: () => (/* binding */ ConnectionHandler)
/* harmony export */ });
class ConnectionHandler {
    CustomHTMLElementInstance;
    ProxyStorageInstance;
    timeoutID;
    constructor(CustomHTMLElementInstance, ProxyStorageInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
        this.ProxyStorageInstance = ProxyStorageInstance;
        this.timeoutID = false;
    }
    handle(forceStatus) {
        const ConnectionBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('connection');
        const proxyItem = this.ProxyStorageInstance.getSelectedProxy();
        const status = this.CustomHTMLElementInstance.StateInstance.get('status');
        if (!forceStatus && status === 'disconnected') {
            if (!proxyItem) {
                throw new Error('Прокси сервер не выбран');
            }
            this.CustomHTMLElementInstance.StateInstance.change('status', 'connection');
            chrome.runtime.sendMessage(proxyItem);
            // to do: add real connection check
            // to do: add save connection state to storage
            this.timeoutID = setTimeout(() => {
                this.CustomHTMLElementInstance.StateInstance.change('status', 'connected');
                ConnectionBehaviorInstance.do();
            }, 2000);
        }
        else {
            this.CustomHTMLElementInstance.StateInstance.change('status', 'disconnected');
            chrome.runtime.sendMessage(false);
            if (this.timeoutID) {
                clearTimeout(this.timeoutID);
            }
        }
        ConnectionBehaviorInstance.do();
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Handlers/ProxyChangeHandler.ts":
/*!**************************************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Handlers/ProxyChangeHandler.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyChangeHandler: () => (/* binding */ ProxyChangeHandler)
/* harmony export */ });
class ProxyChangeHandler {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
    handle() {
        const ConnectionBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('connection');
        this.CustomHTMLElementInstance.StateInstance.change('status', 'disconnected');
        ConnectionBehaviorInstance.do();
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Initializer.ts":
/*!**********************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Initializer.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Initializer: () => (/* binding */ Initializer)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentInitializerAbstract */ "./src/App/Abstracts/Abstracts/ComponentInitializerAbstract.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/App/Components/ConnectionButton/Structure/Factory.ts");


class Initializer extends _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentInitializerAbstract {
    FactoryInstance;
    constructor(ProxySorageInstance) {
        super('custom-connection-button');
        this.FactoryInstance = new _Factory__WEBPACK_IMPORTED_MODULE_1__.Factory(ProxySorageInstance);
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Main/Behaviors.ts":
/*!*************************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Main/Behaviors.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Behaviors: () => (/* binding */ Behaviors)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Behaviors_ConnectionBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Behaviors/ConnectionBehavior */ "./src/App/Components/ConnectionButton/Structure/Behaviors/ConnectionBehavior.ts");


class Behaviors extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance) {
        super({
            connection: new _Behaviors_ConnectionBehavior__WEBPACK_IMPORTED_MODULE_1__.ConnectionBehavior(CustomHTMLElementInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Main/Events.ts":
/*!**********************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Main/Events.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentEventsAbstract */ "./src/App/Abstracts/Abstracts/ComponentEventsAbstract.ts");

class Events extends _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentEventsAbstract {
    initEvents(root) {
        const connectionButton = root.querySelector('.proxy-connect-button');
        if (connectionButton) {
            connectionButton.addEventListener('click', (e) => {
                const ConnectionHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('connection');
                ConnectionHandlerInstance.handle();
            });
        }
        const proxyList = document.querySelector('custom-proxy-list');
        if (proxyList) {
            proxyList.addEventListener('proxyListChange', (e) => {
                const ProxyChangeHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('proxyChange');
                ProxyChangeHandlerInstance.handle();
            });
        }
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Main/Handlers.ts":
/*!************************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Main/Handlers.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handlers: () => (/* binding */ Handlers)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Handlers_ConnectionHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handlers/ConnectionHandler */ "./src/App/Components/ConnectionButton/Structure/Handlers/ConnectionHandler.ts");
/* harmony import */ var _Handlers_ProxyChangeHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Handlers/ProxyChangeHandler */ "./src/App/Components/ConnectionButton/Structure/Handlers/ProxyChangeHandler.ts");



class Handlers extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance, ProxySorageInstance) {
        super({
            connection: new _Handlers_ConnectionHandler__WEBPACK_IMPORTED_MODULE_1__.ConnectionHandler(CustomHTMLElementInstance, ProxySorageInstance),
            proxyChange: new _Handlers_ProxyChangeHandler__WEBPACK_IMPORTED_MODULE_2__.ProxyChangeHandler(CustomHTMLElementInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Main/State.ts":
/*!*********************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Main/State.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/MutableContainerAbstract */ "./src/App/Abstracts/Abstracts/MutableContainerAbstract.ts");

class State extends _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.MutableContainerAbstract {
    constructor() {
        super({
            status: 'disconnected'
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Main/Styles.ts":
/*!**********************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Main/Styles.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Styles: () => (/* binding */ Styles)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentStylesAbstract */ "./src/App/Abstracts/Abstracts/ComponentStylesAbstract.ts");

class Styles extends _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentStylesAbstract {
    css() {
        return `
			:host {
				display: block;
			}

			* {
				box-sizing: border-box;
			}

			.proxy-connect-button {
				background-color: transparent;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				position: relative;
				width: 92px;
				height: 92px;
				padding: 0;
				border: none;
				cursor: pointer;
			}

			.proxy-connect-button:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 85px;
				height: 85px;
				border-radius: 100%;
				border: 4px dotted var(--textColor);
				transition: 0.5s;
			}

			.proxy-connect-button svg {
				display: block;
				width: 60px;
				height: 60px;
			}

			.proxy-connect-button svg path {
				fill: var(--textColor);
				transition: 0.5s;
			}

			.proxy-connect-button[data-status="connection"]:before {
				border-color: var(--primaryColor);
				animation: rotate 5s linear infinite;
			}

			.proxy-connect-button[data-status="connected"]:before {
				border-color: var(--green);
			}

			.proxy-connect-button[data-status="connection"] svg path {
				fill: var(--primaryColor);
			}

			.proxy-connect-button[data-status="connected"] svg path {
				fill: var(--green);
			}

			@keyframes rotate {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}

			.proxy-connection-button-wrapper {
				display: flex;
				justify-content: center;
			}

			.proxy-connection-info {
				font-size: 10px;
				text-align: center;
				text-transform: uppercase;
				margin-top: 15px;
			}
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/ConnectionButton/Structure/Main/Template.ts":
/*!************************************************************************!*\
  !*** ./src/App/Components/ConnectionButton/Structure/Main/Template.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentTemplateAbstract */ "./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts");

class Template extends _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentTemplateAbstract {
    html() {
        return `
			<div class="proxy-connection-wrapper">
				<div class="proxy-connection-button-wrapper">
					<button class="proxy-connect-button" data-status="disconnected">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"></path></svg>
					</button>
				</div>
				
				<div class="proxy-connection-info">
					<span class="proxy-status" data-disconnected="Отключено" data-connected="Подключено" data-connection="Подключение...">Отключено</span>
				</div>
			</div>
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Error.ts":
/*!*******************************************!*\
  !*** ./src/App/Components/Error/Error.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInitializer: () => (/* reexport safe */ _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__.Initializer)
/* harmony export */ });
/* harmony import */ var _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Structure/Initializer */ "./src/App/Components/Error/Structure/Initializer.ts");




/***/ }),

/***/ "./src/App/Components/Error/Structure/Behaviors/CloseBehavior.ts":
/*!***********************************************************************!*\
  !*** ./src/App/Components/Error/Structure/Behaviors/CloseBehavior.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseBehavior: () => (/* binding */ CloseBehavior)
/* harmony export */ });
class CloseBehavior {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
    do() {
        const wrapper = this.CustomHTMLElementInstance.root.host;
        wrapper.style['transition'] = '0.5s';
        wrapper.style['opacity'] = '0';
        setTimeout(() => {
            wrapper.remove();
        }, 500);
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Structure/Factory.ts":
/*!*******************************************************!*\
  !*** ./src/App/Components/Error/Structure/Factory.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: () => (/* binding */ Factory)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentHTMLElementAbstract */ "./src/App/Abstracts/Abstracts/ComponentHTMLElementAbstract.ts");
/* harmony import */ var _Main_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/State */ "./src/App/Components/Error/Structure/Main/State.ts");
/* harmony import */ var _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main/Behaviors */ "./src/App/Components/Error/Structure/Main/Behaviors.ts");
/* harmony import */ var _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main/Handlers */ "./src/App/Components/Error/Structure/Main/Handlers.ts");
/* harmony import */ var _Main_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main/Events */ "./src/App/Components/Error/Structure/Main/Events.ts");
/* harmony import */ var _Main_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main/Template */ "./src/App/Components/Error/Structure/Main/Template.ts");
/* harmony import */ var _Main_Styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main/Styles */ "./src/App/Components/Error/Structure/Main/Styles.ts");







class Factory {
    create(htmlTag) {
        const TemplateInstance = new _Main_Template__WEBPACK_IMPORTED_MODULE_5__.Template();
        const StylesInstance = new _Main_Styles__WEBPACK_IMPORTED_MODULE_6__.Styles();
        return class ErrorHTMLElement extends _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentHTMLElementAbstract {
            htmlTag;
            StateInstance;
            BehaviorsInstance;
            HandlersInstance;
            EventsInstance;
            constructor() {
                super();
                this.htmlTag = htmlTag;
                this.StateInstance = new _Main_State__WEBPACK_IMPORTED_MODULE_1__.State();
                this.BehaviorsInstance = new _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__.Behaviors(this);
                this.HandlersInstance = new _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__.Handlers(this);
                this.EventsInstance = new _Main_Events__WEBPACK_IMPORTED_MODULE_4__.Events(this);
            }
            customConnectedCallback() {
                TemplateInstance.renderTemplate(this.root);
                StylesInstance.renderStyles(this.root);
                this.EventsInstance.initEvents(this.root);
            }
        };
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Structure/Handlers/CloseHandler.ts":
/*!*********************************************************************!*\
  !*** ./src/App/Components/Error/Structure/Handlers/CloseHandler.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseHandler: () => (/* binding */ CloseHandler)
/* harmony export */ });
class CloseHandler {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
    handle() {
        if (this.CustomHTMLElementInstance.StateInstance.get('closed')) {
            return;
        }
        const CloseBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('close');
        CloseBehaviorInstance.do();
        this.CustomHTMLElementInstance.StateInstance.change('closed', true);
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Structure/Initializer.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/Error/Structure/Initializer.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Initializer: () => (/* binding */ Initializer)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentInitializerAbstract */ "./src/App/Abstracts/Abstracts/ComponentInitializerAbstract.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/App/Components/Error/Structure/Factory.ts");


class Initializer extends _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentInitializerAbstract {
    FactoryInstance;
    constructor() {
        super('custom-error');
        this.FactoryInstance = new _Factory__WEBPACK_IMPORTED_MODULE_1__.Factory();
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Structure/Main/Behaviors.ts":
/*!**************************************************************!*\
  !*** ./src/App/Components/Error/Structure/Main/Behaviors.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Behaviors: () => (/* binding */ Behaviors)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Behaviors_CloseBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Behaviors/CloseBehavior */ "./src/App/Components/Error/Structure/Behaviors/CloseBehavior.ts");


class Behaviors extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance) {
        super({
            close: new _Behaviors_CloseBehavior__WEBPACK_IMPORTED_MODULE_1__.CloseBehavior(CustomHTMLElementInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Structure/Main/Events.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/Error/Structure/Main/Events.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentEventsAbstract */ "./src/App/Abstracts/Abstracts/ComponentEventsAbstract.ts");

class Events extends _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentEventsAbstract {
    initEvents(root) {
        const errorWrapper = root.querySelector('.error-wrapper');
        if (errorWrapper) {
            errorWrapper.addEventListener('click', (e) => {
                const CloseHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('close');
                CloseHandlerInstance.handle();
            });
        }
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Structure/Main/Handlers.ts":
/*!*************************************************************!*\
  !*** ./src/App/Components/Error/Structure/Main/Handlers.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handlers: () => (/* binding */ Handlers)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Handlers_CloseHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handlers/CloseHandler */ "./src/App/Components/Error/Structure/Handlers/CloseHandler.ts");


class Handlers extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance) {
        super({
            close: new _Handlers_CloseHandler__WEBPACK_IMPORTED_MODULE_1__.CloseHandler(CustomHTMLElementInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Structure/Main/State.ts":
/*!**********************************************************!*\
  !*** ./src/App/Components/Error/Structure/Main/State.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/MutableContainerAbstract */ "./src/App/Abstracts/Abstracts/MutableContainerAbstract.ts");

class State extends _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.MutableContainerAbstract {
    constructor() {
        super({
            closed: false
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Structure/Main/Styles.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/Error/Structure/Main/Styles.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Styles: () => (/* binding */ Styles)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentStylesAbstract */ "./src/App/Abstracts/Abstracts/ComponentStylesAbstract.ts");

class Styles extends _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentStylesAbstract {
    css() {
        return `
			:host {
				display: block;
				width: 100%;
				margin-bottom: 20px;
			}
				
			:host(:first-child) {
				margin-top: 35px;
			}

			:host(:last-child) {
				margin-bottom: 35px !important;
			}

			* {
				box-sizing: border-box;
			}

			.error-wrapper {
				color: var(--red);
				background-color: var(--blackTransparent2);
				position: relative;
				width: 100%;
				border: 2px solid var(--red);
				border-radius: 20px;
				padding: 20px;
			}

			.error-content {
				padding-right: 20px;
			}

			.error-close {
				background-color: transparent;
				position: absolute;
				top: 5px;
				right: 5px;
				padding: 5px;
				border: none;
				cursor: pointer;
			}

			.error-close svg {
				display: block;
				width: 20px;
				height: 20px;
			}

			.error-close svg path {
				fill: var(--red);
			}
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/Error/Structure/Main/Template.ts":
/*!*************************************************************!*\
  !*** ./src/App/Components/Error/Structure/Main/Template.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentTemplateAbstract */ "./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts");

class Template extends _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentTemplateAbstract {
    html() {
        return `
			<div class="error-wrapper">
				<button class="error-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
				<div class="error-content">
					<slot></slot>
				</div>
			</div>
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Page.ts":
/*!*****************************************!*\
  !*** ./src/App/Components/Page/Page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageInitializer: () => (/* reexport safe */ _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__.Initializer)
/* harmony export */ });
/* harmony import */ var _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Structure/Initializer */ "./src/App/Components/Page/Structure/Initializer.ts");




/***/ }),

/***/ "./src/App/Components/Page/Structure/Behaviors/CloseBehavior.ts":
/*!**********************************************************************!*\
  !*** ./src/App/Components/Page/Structure/Behaviors/CloseBehavior.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseBehavior: () => (/* binding */ CloseBehavior)
/* harmony export */ });
class CloseBehavior {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
    do() {
        const activeClass = 'page-active';
        const wrapper = this.CustomHTMLElementInstance.root.querySelector('.page-wrapper');
        if (!wrapper) {
            return;
        }
        wrapper.classList.remove(activeClass);
        this.CustomHTMLElementInstance.StateInstance.change('open', false);
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Behaviors/OpenBehavior.ts":
/*!*********************************************************************!*\
  !*** ./src/App/Components/Page/Structure/Behaviors/OpenBehavior.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenBehavior: () => (/* binding */ OpenBehavior)
/* harmony export */ });
class OpenBehavior {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
    do() {
        const activeClass = 'page-active';
        const wrapper = this.CustomHTMLElementInstance.root.querySelector('.page-wrapper');
        const content = wrapper.querySelector('.page-content');
        if (!wrapper || !content) {
            return;
        }
        wrapper.classList.add(activeClass);
        content.scrollTo(0, 0);
        this.CustomHTMLElementInstance.StateInstance.change('open', true);
        const route = this.CustomHTMLElementInstance.root.host.getAttribute('data-route');
        if (route) {
            const ListChangeEventInstance = new CustomEvent(route + 'Open', {
                bubbles: true,
                composed: true
            });
            this.CustomHTMLElementInstance.root.dispatchEvent(ListChangeEventInstance);
        }
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Factory.ts":
/*!******************************************************!*\
  !*** ./src/App/Components/Page/Structure/Factory.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: () => (/* binding */ Factory)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentHTMLElementAbstract */ "./src/App/Abstracts/Abstracts/ComponentHTMLElementAbstract.ts");
/* harmony import */ var _Main_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/State */ "./src/App/Components/Page/Structure/Main/State.ts");
/* harmony import */ var _Main_Handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main/Handlers */ "./src/App/Components/Page/Structure/Main/Handlers.ts");
/* harmony import */ var _Main_Behaviors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main/Behaviors */ "./src/App/Components/Page/Structure/Main/Behaviors.ts");
/* harmony import */ var _Main_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main/Events */ "./src/App/Components/Page/Structure/Main/Events.ts");
/* harmony import */ var _Main_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main/Template */ "./src/App/Components/Page/Structure/Main/Template.ts");
/* harmony import */ var _Main_Styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main/Styles */ "./src/App/Components/Page/Structure/Main/Styles.ts");







class Factory {
    RouterInstance;
    constructor(RouterInstance) {
        this.RouterInstance = RouterInstance;
    }
    create(htmlTag) {
        const TemplateInstance = new _Main_Template__WEBPACK_IMPORTED_MODULE_5__.Template();
        const StylesInstance = new _Main_Styles__WEBPACK_IMPORTED_MODULE_6__.Styles();
        const RouterInstance = this.RouterInstance;
        return class PageHTMLElement extends _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentHTMLElementAbstract {
            htmlTag;
            StateInstance;
            HandlersInstance;
            BehaviorsInstance;
            EventsInstance;
            constructor() {
                super();
                this.htmlTag = htmlTag;
                this.StateInstance = new _Main_State__WEBPACK_IMPORTED_MODULE_1__.State();
                this.HandlersInstance = new _Main_Handlers__WEBPACK_IMPORTED_MODULE_2__.Handlers(this, RouterInstance);
                this.BehaviorsInstance = new _Main_Behaviors__WEBPACK_IMPORTED_MODULE_3__.Behaviors(this);
                this.EventsInstance = new _Main_Events__WEBPACK_IMPORTED_MODULE_4__.Events(this);
            }
            customConnectedCallback() {
                TemplateInstance.renderTemplate(this.root);
                StylesInstance.renderStyles(this.root);
                this.EventsInstance.initEvents(this.root);
            }
        };
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Handlers/InitHandler.ts":
/*!*******************************************************************!*\
  !*** ./src/App/Components/Page/Structure/Handlers/InitHandler.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitHandler: () => (/* binding */ InitHandler)
/* harmony export */ });
class InitHandler {
    CustomHTMLElementInstance;
    RouterInstance;
    constructor(CustomHTMLElementInstance, RouterInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
        this.RouterInstance = RouterInstance;
    }
    handle() {
        const route = this.CustomHTMLElementInstance.root.host.getAttribute('data-route');
        if (!route) {
            return;
        }
        this.RouterInstance.register(route, this.CustomHTMLElementInstance);
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Initializer.ts":
/*!**********************************************************!*\
  !*** ./src/App/Components/Page/Structure/Initializer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Initializer: () => (/* binding */ Initializer)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentInitializerAbstract */ "./src/App/Abstracts/Abstracts/ComponentInitializerAbstract.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/App/Components/Page/Structure/Factory.ts");


class Initializer extends _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentInitializerAbstract {
    FactoryInstance;
    constructor(RouterInstance) {
        super('custom-page');
        this.FactoryInstance = new _Factory__WEBPACK_IMPORTED_MODULE_1__.Factory(RouterInstance);
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Main/Behaviors.ts":
/*!*************************************************************!*\
  !*** ./src/App/Components/Page/Structure/Main/Behaviors.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Behaviors: () => (/* binding */ Behaviors)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Behaviors_OpenBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Behaviors/OpenBehavior */ "./src/App/Components/Page/Structure/Behaviors/OpenBehavior.ts");
/* harmony import */ var _Behaviors_CloseBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Behaviors/CloseBehavior */ "./src/App/Components/Page/Structure/Behaviors/CloseBehavior.ts");



class Behaviors extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance) {
        super({
            open: new _Behaviors_OpenBehavior__WEBPACK_IMPORTED_MODULE_1__.OpenBehavior(CustomHTMLElementInstance),
            close: new _Behaviors_CloseBehavior__WEBPACK_IMPORTED_MODULE_2__.CloseBehavior(CustomHTMLElementInstance),
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Main/Events.ts":
/*!**********************************************************!*\
  !*** ./src/App/Components/Page/Structure/Main/Events.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentEventsAbstract */ "./src/App/Abstracts/Abstracts/ComponentEventsAbstract.ts");

class Events extends _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentEventsAbstract {
    initEvents(root) {
        root.addEventListener('init', (e) => {
            const InitHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('init');
            InitHandlerInstance.handle();
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Main/Handlers.ts":
/*!************************************************************!*\
  !*** ./src/App/Components/Page/Structure/Main/Handlers.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handlers: () => (/* binding */ Handlers)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Handlers_InitHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handlers/InitHandler */ "./src/App/Components/Page/Structure/Handlers/InitHandler.ts");


class Handlers extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance, RouterInstance) {
        super({
            init: new _Handlers_InitHandler__WEBPACK_IMPORTED_MODULE_1__.InitHandler(CustomHTMLElementInstance, RouterInstance),
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Main/State.ts":
/*!*********************************************************!*\
  !*** ./src/App/Components/Page/Structure/Main/State.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/MutableContainerAbstract */ "./src/App/Abstracts/Abstracts/MutableContainerAbstract.ts");

class State extends _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.MutableContainerAbstract {
    constructor() {
        super({
            open: false
        });
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Main/Styles.ts":
/*!**********************************************************!*\
  !*** ./src/App/Components/Page/Structure/Main/Styles.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Styles: () => (/* binding */ Styles)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentStylesAbstract */ "./src/App/Abstracts/Abstracts/ComponentStylesAbstract.ts");

class Styles extends _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentStylesAbstract {
    css() {
        return `
			* {
				box-sizing: border-box;
			}

			:host {
				display: block;
			}

			::-webkit-scrollbar {
				width: 5px;
			}

			::-webkit-scrollbar-track {
				background-color: transparent;
			}

			::-webkit-scrollbar-thumb {
				background-color: var(--secondaryColor);
				border-radius: 10px;
				transition: 0.5s;
			}
		
			::-webkit-scrollbar-thumb:hover {
				background-color: var(--primaryColor);
			}

			.page-wrapper {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;
				width: 100%;
				height: 100%;
				transform: translateX(-100%);
				transition: 0.35s;
			}

			.page-wrapper.page-active {
				z-index: 2;
				transform: none;
			}

			.page {
				position: relative;
				width: 100%;
				height: 100%;
			}

			.page-content-main-wrapper {
			    display: flex;
				flex-wrap: wrap;
    			align-items: flex-end;
				height: 100%;
			}

			.page-footer {
				position: absolute;
				left: 0;
				bottom: 50px;
				width: 100%;
			}

			.page-header {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
				width: 100%;
				padding: 20px 35px 15px 35px;
			}

			.page-content-wrapper {
				color: var(--textColor);
				background-color: var(--blackTransparent1);
				width: 100%;
				height: 100%;
				overflow: hidden;
				padding: 55px 20px 100px 20px;
				backdrop-filter: blur(3px);
			}

			.page-content {
				height: 100%;
				overflow: auto;
				padding: 0 15px;
			}
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/Page/Structure/Main/Template.ts":
/*!************************************************************!*\
  !*** ./src/App/Components/Page/Structure/Main/Template.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentTemplateAbstract */ "./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts");

class Template extends _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentTemplateAbstract {
    html() {
        return `
			<div class="page-wrapper">
				<div class="page">
					<div class="page-content-main-wrapper">
						<div class="page-header">
							<slot name="header"></slot>
						</div>

						<div class="page-content-wrapper">
							<div class="page-content">
								<slot name="content"></slot>
							</div>
						</div>

						<div class="page-footer">
							<slot name="footer"></slot>
						</div>
					</div>
				</div>
			</div>
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/ProxyList.ts":
/*!***************************************************!*\
  !*** ./src/App/Components/ProxyList/ProxyList.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyListInitializer: () => (/* reexport safe */ _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__.Initializer)
/* harmony export */ });
/* harmony import */ var _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Structure/Initializer */ "./src/App/Components/ProxyList/Structure/Initializer.ts");




/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Behaviors/InsertProxyItemsBehavior.ts":
/*!**************************************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Behaviors/InsertProxyItemsBehavior.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsertProxyItemsBehavior: () => (/* binding */ InsertProxyItemsBehavior)
/* harmony export */ });
class InsertProxyItemsBehavior {
    CustomHTMLElementInstance;
    ProxyItemTemplateInstance;
    constructor(CustomHTMLElementInstance, ProxyItemTemplateInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
        this.ProxyItemTemplateInstance = ProxyItemTemplateInstance;
    }
    do(args) {
        const wrapper = this.CustomHTMLElementInstance.root.querySelector('.proxy-list');
        if (!wrapper) {
            return;
        }
        wrapper.innerHTML = '';
        for (const key in args.proxyList) {
            const proxyItem = args.proxyList[key];
            const item = this.ProxyItemTemplateInstance.renderTemplate(wrapper);
            const ipWrapper = item.querySelector('.proxy-list-item-ip');
            const typeWrapper = item.querySelector('.proxy-list-item-type');
            const nameWrapper = item.querySelector('.proxy-list-item-name span');
            const input = item.querySelector('input');
            if (!ipWrapper || !typeWrapper || !nameWrapper || !input) {
                return;
            }
            ipWrapper.innerHTML = proxyItem.ip + ':' + proxyItem.port;
            typeWrapper.innerHTML = proxyItem.type;
            nameWrapper.innerHTML = proxyItem.name;
            input.value = proxyItem.id.toString();
        }
        let selectedID = 0;
        if (args.selectedProxy) {
            const item = wrapper.querySelector('input[value="' + args.selectedProxy.id + '"]');
            selectedID = args.selectedProxy.id;
            if (item) {
                item.checked = true;
            }
        }
        else {
            const item = wrapper.querySelector('.proxy-list-item-wrapper:first-child input');
            if (item) {
                item.checked = true;
                selectedID = parseInt(item.value);
            }
        }
        this.CustomHTMLElementInstance.StateInstance.change('selected', selectedID);
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Factory.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Factory.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: () => (/* binding */ Factory)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentHTMLElementAbstract */ "./src/App/Abstracts/Abstracts/ComponentHTMLElementAbstract.ts");
/* harmony import */ var _Main_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/State */ "./src/App/Components/ProxyList/Structure/Main/State.ts");
/* harmony import */ var _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main/Behaviors */ "./src/App/Components/ProxyList/Structure/Main/Behaviors.ts");
/* harmony import */ var _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main/Handlers */ "./src/App/Components/ProxyList/Structure/Main/Handlers.ts");
/* harmony import */ var _Main_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main/Events */ "./src/App/Components/ProxyList/Structure/Main/Events.ts");
/* harmony import */ var _Main_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main/Template */ "./src/App/Components/ProxyList/Structure/Main/Template.ts");
/* harmony import */ var _Main_ProxyItemTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main/ProxyItemTemplate */ "./src/App/Components/ProxyList/Structure/Main/ProxyItemTemplate.ts");
/* harmony import */ var _Main_Styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Main/Styles */ "./src/App/Components/ProxyList/Structure/Main/Styles.ts");








class Factory {
    ProxySorageInstance;
    constructor(ProxySorageInstance) {
        this.ProxySorageInstance = ProxySorageInstance;
    }
    create(htmlTag) {
        const TemplateInstance = new _Main_Template__WEBPACK_IMPORTED_MODULE_5__.Template();
        const ProxyItemTemplateInstance = new _Main_ProxyItemTemplate__WEBPACK_IMPORTED_MODULE_6__.ProxyItemTemplate();
        const StylesInstance = new _Main_Styles__WEBPACK_IMPORTED_MODULE_7__.Styles();
        const ProxySorageInstance = this.ProxySorageInstance;
        return class ProxyListHTMLElement extends _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentHTMLElementAbstract {
            htmlTag;
            StateInstance;
            BehaviorsInstance;
            HandlersInstance;
            EventsInstance;
            constructor() {
                super();
                this.htmlTag = htmlTag;
                this.StateInstance = new _Main_State__WEBPACK_IMPORTED_MODULE_1__.State();
                this.BehaviorsInstance = new _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__.Behaviors(this, ProxyItemTemplateInstance);
                this.HandlersInstance = new _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__.Handlers(this, ProxySorageInstance);
                this.EventsInstance = new _Main_Events__WEBPACK_IMPORTED_MODULE_4__.Events(this);
            }
            customConnectedCallback() {
                TemplateInstance.renderTemplate(this.root);
                StylesInstance.renderStyles(this.root);
                this.EventsInstance.initEvents(this.root);
            }
        };
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Handlers/ChangeProxyHandler.ts":
/*!*******************************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Handlers/ChangeProxyHandler.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeProxyHandler: () => (/* binding */ ChangeProxyHandler)
/* harmony export */ });
class ChangeProxyHandler {
    CustomHTMLElementInstance;
    ProxySorageInstance;
    constructor(CustomHTMLElementInstance, ProxySorageInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
        this.ProxySorageInstance = ProxySorageInstance;
    }
    handle() {
        const item = this.CustomHTMLElementInstance.root.querySelector('.proxy-list-item-wrapper input[type="radio"]:checked');
        if (!item) {
            return;
        }
        const id = parseInt(item.value);
        this.ProxySorageInstance.setSelectedProxy(id);
        this.CustomHTMLElementInstance.StateInstance.change('selected', id);
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Handlers/InitHandler.ts":
/*!************************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Handlers/InitHandler.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitHandler: () => (/* binding */ InitHandler)
/* harmony export */ });
class InitHandler {
    CustomHTMLElementInstance;
    ProxySorageInstance;
    constructor(CustomHTMLElementInstance, ProxySorageInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
        this.ProxySorageInstance = ProxySorageInstance;
    }
    handle() {
        const InsertProxyItemBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('insertProxyItems');
        const selectedProxy = this.ProxySorageInstance.getSelectedProxy();
        const proxyItems = this.ProxySorageInstance.getAll();
        InsertProxyItemBehaviorInstance.do({
            proxyList: proxyItems,
            selectedProxy: selectedProxy
        });
        this.ProxySorageInstance.setSelectedProxy(this.CustomHTMLElementInstance.StateInstance.get('selected'));
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Initializer.ts":
/*!***************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Initializer.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Initializer: () => (/* binding */ Initializer)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentInitializerAbstract */ "./src/App/Abstracts/Abstracts/ComponentInitializerAbstract.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/App/Components/ProxyList/Structure/Factory.ts");


class Initializer extends _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentInitializerAbstract {
    FactoryInstance;
    constructor(ProxySorageInstance) {
        super('custom-proxy-list');
        this.FactoryInstance = new _Factory__WEBPACK_IMPORTED_MODULE_1__.Factory(ProxySorageInstance);
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Main/Behaviors.ts":
/*!******************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Main/Behaviors.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Behaviors: () => (/* binding */ Behaviors)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Behaviors_InsertProxyItemsBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Behaviors/InsertProxyItemsBehavior */ "./src/App/Components/ProxyList/Structure/Behaviors/InsertProxyItemsBehavior.ts");


class Behaviors extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance, ProxyItemTemplateInstance) {
        super({
            insertProxyItems: new _Behaviors_InsertProxyItemsBehavior__WEBPACK_IMPORTED_MODULE_1__.InsertProxyItemsBehavior(CustomHTMLElementInstance, ProxyItemTemplateInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Main/Events.ts":
/*!***************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Main/Events.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentEventsAbstract */ "./src/App/Abstracts/Abstracts/ComponentEventsAbstract.ts");

class Events extends _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentEventsAbstract {
    initEvents(root) {
        const proxyList = root.querySelector('.proxy-list');
        if (proxyList) {
            proxyList.addEventListener('change', (e) => {
                const ChangeProxyHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('changeProxy');
                const element = e.target;
                const ListChangeEventInstance = new CustomEvent('proxyListChange', {
                    bubbles: true,
                    composed: true,
                    detail: parseInt(element.value)
                });
                ChangeProxyHandlerInstance.handle();
                root.dispatchEvent(ListChangeEventInstance);
            });
        }
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Main/Handlers.ts":
/*!*****************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Main/Handlers.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handlers: () => (/* binding */ Handlers)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Handlers_InitHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handlers/InitHandler */ "./src/App/Components/ProxyList/Structure/Handlers/InitHandler.ts");
/* harmony import */ var _Handlers_ChangeProxyHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Handlers/ChangeProxyHandler */ "./src/App/Components/ProxyList/Structure/Handlers/ChangeProxyHandler.ts");



class Handlers extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance, ProxySorageInstance) {
        super({
            init: new _Handlers_InitHandler__WEBPACK_IMPORTED_MODULE_1__.InitHandler(CustomHTMLElementInstance, ProxySorageInstance),
            changeProxy: new _Handlers_ChangeProxyHandler__WEBPACK_IMPORTED_MODULE_2__.ChangeProxyHandler(CustomHTMLElementInstance, ProxySorageInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Main/ProxyItemTemplate.ts":
/*!**************************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Main/ProxyItemTemplate.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyItemTemplate: () => (/* binding */ ProxyItemTemplate)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentTemplateAbstract */ "./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts");

class ProxyItemTemplate extends _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentTemplateAbstract {
    html() {
        return `
			<div class="proxy-list-item-wrapper">
				<div class="proxy-list-item">
					<div class="proxy-list-item-info">
						<div class="proxy-list-item-data">
							<span class="proxy-list-item-type"></span>
							<span class="proxy-list-item-ip"></span>
						</div>
						<div class="proxy-list-item-name">
							<span></span>
						</div>
					</div>
					<div class="proxy-list-item-checkbox-wrapper">
						<input type="radio" name="proxyItem">
					</div>
				</div>
			</div>
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Main/State.ts":
/*!**************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Main/State.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/MutableContainerAbstract */ "./src/App/Abstracts/Abstracts/MutableContainerAbstract.ts");

class State extends _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.MutableContainerAbstract {
    constructor() {
        super({
            selected: 0
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Main/Styles.ts":
/*!***************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Main/Styles.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Styles: () => (/* binding */ Styles)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentStylesAbstract */ "./src/App/Abstracts/Abstracts/ComponentStylesAbstract.ts");

class Styles extends _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentStylesAbstract {
    css() {
        return `
			:host {
				display: block;
			}

			::-webkit-scrollbar {
				width: 5px;
			}

			::-webkit-scrollbar-track {
				background-color: transparent;
			}

			::-webkit-scrollbar-thumb {
				background-color: var(--secondaryColor);
				border-radius: 10px;
				transition: 0.5s;
			}
		
			::-webkit-scrollbar-thumb:hover {
				background-color: var(--primaryColor);
			}

			* {
				box-sizing: border-box;
			}

			.proxy-list-item-type {
				line-height: 1;
				display: inline-block;
				padding-right: 10px;
				margin-right: 5px;
				border-right: 1px solid var(--textColor);
			}

			.proxy-list-item-name {
				font-size: 12px;
				text-transform: uppercase;
			}

			.proxy-list-item {
				position: relative;
			}

			.proxy-list-item-checkbox-wrapper {
				position: absolute;
				top: calc(50% - 12px);
				right: 0;
				z-index: 1;
			}

			.proxy-list-item-checkbox-wrapper input[type="radio"] {
				width: 24px;
				height: 24px;
				margin: 0;
				cursor: pointer;
			}

			.proxy-list-item-info {
				padding-right: 50px;
			}

			.proxy-list-item-wrapper:not(:last-child) {
				padding-bottom: 25px;
				margin-bottom: 25px;
				border-bottom: 1px solid var(--textColor);
			}

			.proxy-list {
				height: 245px;
				overflow: auto;
				padding: 0 10px;
				margin: 0 -10px;
			}
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/ProxyList/Structure/Main/Template.ts":
/*!*****************************************************************!*\
  !*** ./src/App/Components/ProxyList/Structure/Main/Template.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentTemplateAbstract */ "./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts");

class Template extends _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentTemplateAbstract {
    html() {
        return `
			<div class="proxy-list-wrapper">
				<div class="proxy-list"></div>
			</div>
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/ProxySettings.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/ProxySettings/ProxySettings.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxySettingsInitializer: () => (/* reexport safe */ _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__.Initializer)
/* harmony export */ });
/* harmony import */ var _Structure_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Structure/Initializer */ "./src/App/Components/ProxySettings/Structure/Initializer.ts");




/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Behaviors/InsertProxyItemBehavior.ts":
/*!*****************************************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Behaviors/InsertProxyItemBehavior.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsertProxyItemBehavior: () => (/* binding */ InsertProxyItemBehavior)
/* harmony export */ });
class InsertProxyItemBehavior {
    CustomHTMLElementInstance;
    ProxyItemTemplateInstance;
    constructor(CustomHTMLElementInstance, ProxyItemTemplateInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
        this.ProxyItemTemplateInstance = ProxyItemTemplateInstance;
    }
    do(args) {
        const wrapper = this.CustomHTMLElementInstance.root.querySelector('.settings-proxy-list-wrapper');
        const item = this.ProxyItemTemplateInstance.renderTemplate(wrapper);
        const ipWrapper = item.querySelector('.settings-proxy-list-item-ip');
        const typeWrapper = item.querySelector('.settings-proxy-list-item-type');
        const nameWrapper = item.querySelector('.settings-proxy-list-item-name span');
        if (!wrapper || !ipWrapper || !typeWrapper || !nameWrapper) {
            return;
        }
        item.style['opacity'] = '0';
        item.setAttribute('data-id', args.id.toString());
        ipWrapper.innerHTML = args.ip + ':' + args.port;
        typeWrapper.innerHTML = args.type;
        nameWrapper.innerHTML = args.name;
        // For animation
        item.offsetWidth;
        item.style['opacity'] = '1';
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Behaviors/RemoveProxyItemBehavior.ts":
/*!*****************************************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Behaviors/RemoveProxyItemBehavior.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveProxyItemBehavior: () => (/* binding */ RemoveProxyItemBehavior)
/* harmony export */ });
class RemoveProxyItemBehavior {
    CustomHTMLElementInstance;
    constructor(CustomHTMLElementInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
    }
    do(id) {
        const wrapper = this.CustomHTMLElementInstance.root.querySelector('.settings-proxy-list-item[data-id="' + id + '"]');
        if (!wrapper) {
            return;
        }
        wrapper.style['opacity'] = '0';
        wrapper.style['transition'] = '0.5s';
        setTimeout(() => {
            wrapper.remove();
        }, 500);
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Factory.ts":
/*!***************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Factory.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: () => (/* binding */ Factory)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentHTMLElementAbstract */ "./src/App/Abstracts/Abstracts/ComponentHTMLElementAbstract.ts");
/* harmony import */ var _Main_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/State */ "./src/App/Components/ProxySettings/Structure/Main/State.ts");
/* harmony import */ var _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main/Behaviors */ "./src/App/Components/ProxySettings/Structure/Main/Behaviors.ts");
/* harmony import */ var _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main/Handlers */ "./src/App/Components/ProxySettings/Structure/Main/Handlers.ts");
/* harmony import */ var _Main_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main/Events */ "./src/App/Components/ProxySettings/Structure/Main/Events.ts");
/* harmony import */ var _Main_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main/Template */ "./src/App/Components/ProxySettings/Structure/Main/Template.ts");
/* harmony import */ var _Main_ProxyItemTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main/ProxyItemTemplate */ "./src/App/Components/ProxySettings/Structure/Main/ProxyItemTemplate.ts");
/* harmony import */ var _Main_Styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Main/Styles */ "./src/App/Components/ProxySettings/Structure/Main/Styles.ts");








class Factory {
    ProxySorageInstance;
    maxCount;
    constructor(ProxySorageInstance, maxCount) {
        this.ProxySorageInstance = ProxySorageInstance;
        this.maxCount = maxCount;
    }
    create(htmlTag) {
        const TemplateInstance = new _Main_Template__WEBPACK_IMPORTED_MODULE_5__.Template();
        const ProxyItemTemplateInstance = new _Main_ProxyItemTemplate__WEBPACK_IMPORTED_MODULE_6__.ProxyItemTemplate();
        const StylesInstance = new _Main_Styles__WEBPACK_IMPORTED_MODULE_7__.Styles();
        const ProxySorageInstance = this.ProxySorageInstance;
        const maxCount = this.maxCount;
        return class ProxySettingsHTMLElement extends _App_Abstracts_Abstracts_ComponentHTMLElementAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentHTMLElementAbstract {
            htmlTag;
            StateInstance;
            BehaviorsInstance;
            HandlersInstance;
            EventsInstance;
            constructor() {
                super();
                this.htmlTag = htmlTag;
                this.StateInstance = new _Main_State__WEBPACK_IMPORTED_MODULE_1__.State();
                this.BehaviorsInstance = new _Main_Behaviors__WEBPACK_IMPORTED_MODULE_2__.Behaviors(this, ProxyItemTemplateInstance);
                this.HandlersInstance = new _Main_Handlers__WEBPACK_IMPORTED_MODULE_3__.Handlers(this, ProxySorageInstance, maxCount);
                this.EventsInstance = new _Main_Events__WEBPACK_IMPORTED_MODULE_4__.Events(this);
            }
            customConnectedCallback() {
                TemplateInstance.renderTemplate(this.root);
                StylesInstance.renderStyles(this.root);
                this.EventsInstance.initEvents(this.root);
            }
        };
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Handlers/AddProxyItemHandler.ts":
/*!************************************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Handlers/AddProxyItemHandler.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProxyItemHandler: () => (/* binding */ AddProxyItemHandler)
/* harmony export */ });
class AddProxyItemHandler {
    CustomHTMLElementInstance;
    ProxySorageInstance;
    maxCount;
    constructor(CustomHTMLElementInstance, ProxySorageInstance, maxCount) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
        this.ProxySorageInstance = ProxySorageInstance;
        this.maxCount = maxCount;
    }
    validate(formData) {
        const ip = formData.get('proxyIP') ? formData.get('proxyIP') : '';
        const port = formData.get('proxyPort') ? formData.get('proxyPort') : '';
        const type = formData.get('proxyType') ? formData.get('proxyType') : '';
        const name = formData.get('proxyName') ? formData.get('proxyName') : '';
        const user = formData.get('proxyUser') ? formData.get('proxyUser') : '';
        const password = formData.get('proxyPassword') ? formData.get('proxyPassword') : '';
        const count = this.CustomHTMLElementInstance.StateInstance.get('count');
        if (this.maxCount === count) {
            throw new Error('Максимальное количество элементов в списке ' + this.maxCount);
        }
        if (!ip || !port || !type || !name) {
            throw new Error('Заполните все обязательные поля');
        }
        return {
            ip: ip,
            port: port,
            type: type,
            name: name,
            user: user,
            password: password
        };
    }
    handle(args, event) {
        event.preventDefault();
        const InsertProxyItemBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('insertProxyItem');
        const formElement = event.target;
        const formData = new FormData(formElement);
        const data = this.validate(formData);
        if (!data) {
            return;
        }
        const proxyItem = this.ProxySorageInstance.add(data);
        InsertProxyItemBehaviorInstance.do(proxyItem);
        formElement.reset();
        let count = this.CustomHTMLElementInstance.StateInstance.get('count');
        this.CustomHTMLElementInstance.StateInstance.change('count', count + 1);
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Handlers/InitHandler.ts":
/*!****************************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Handlers/InitHandler.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitHandler: () => (/* binding */ InitHandler)
/* harmony export */ });
class InitHandler {
    CustomHTMLElementInstance;
    ProxySorageInstance;
    constructor(CustomHTMLElementInstance, ProxySorageInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
        this.ProxySorageInstance = ProxySorageInstance;
    }
    handle() {
        const InsertProxyItemBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('insertProxyItem');
        const items = this.ProxySorageInstance.getAll();
        let count = 0;
        for (const key in items) {
            const item = items[key];
            InsertProxyItemBehaviorInstance.do(item);
            count++;
        }
        this.CustomHTMLElementInstance.StateInstance.change('count', count);
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Handlers/RemoveProxyItemHandler.ts":
/*!***************************************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Handlers/RemoveProxyItemHandler.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveProxyItemHandler: () => (/* binding */ RemoveProxyItemHandler)
/* harmony export */ });
class RemoveProxyItemHandler {
    CustomHTMLElementInstance;
    ProxySorageInstance;
    constructor(CustomHTMLElementInstance, ProxySorageInstance) {
        this.CustomHTMLElementInstance = CustomHTMLElementInstance;
        this.ProxySorageInstance = ProxySorageInstance;
    }
    handle(args, event) {
        const RemoveProxyItemBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('removeProxyItem');
        const targetElement = event.target;
        const element = targetElement.closest('.settings-proxy-list-item');
        const removeButton = targetElement.closest('.settings-proxy-list-item-remove');
        const containsClass = targetElement.classList.contains('settings-proxy-list-item-remove');
        const status = element.getAttribute('data-deleted') ?? false;
        if ((!removeButton && !containsClass) || !element || status) {
            return;
        }
        const id = parseInt(element.getAttribute('data-id'));
        element.setAttribute('data-deleted', '1');
        RemoveProxyItemBehaviorInstance.do(id);
        this.ProxySorageInstance.delete(id);
        let count = this.CustomHTMLElementInstance.StateInstance.get('count');
        this.CustomHTMLElementInstance.StateInstance.change('count', count - 1);
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Initializer.ts":
/*!*******************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Initializer.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Initializer: () => (/* binding */ Initializer)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentInitializerAbstract */ "./src/App/Abstracts/Abstracts/ComponentInitializerAbstract.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/App/Components/ProxySettings/Structure/Factory.ts");


class Initializer extends _App_Abstracts_Abstracts_ComponentInitializerAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentInitializerAbstract {
    FactoryInstance;
    constructor(ProxySorageInstance, maxCount) {
        super('custom-proxy-settings');
        this.FactoryInstance = new _Factory__WEBPACK_IMPORTED_MODULE_1__.Factory(ProxySorageInstance, maxCount);
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Main/Behaviors.ts":
/*!**********************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Main/Behaviors.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Behaviors: () => (/* binding */ Behaviors)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Behaviors_InsertProxyItemBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Behaviors/InsertProxyItemBehavior */ "./src/App/Components/ProxySettings/Structure/Behaviors/InsertProxyItemBehavior.ts");
/* harmony import */ var _Behaviors_RemoveProxyItemBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Behaviors/RemoveProxyItemBehavior */ "./src/App/Components/ProxySettings/Structure/Behaviors/RemoveProxyItemBehavior.ts");



class Behaviors extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance, ProxyItemTemplateInstance) {
        super({
            insertProxyItem: new _Behaviors_InsertProxyItemBehavior__WEBPACK_IMPORTED_MODULE_1__.InsertProxyItemBehavior(CustomHTMLElementInstance, ProxyItemTemplateInstance),
            removeProxyItem: new _Behaviors_RemoveProxyItemBehavior__WEBPACK_IMPORTED_MODULE_2__.RemoveProxyItemBehavior(CustomHTMLElementInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Main/Events.ts":
/*!*******************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Main/Events.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentEventsAbstract */ "./src/App/Abstracts/Abstracts/ComponentEventsAbstract.ts");

class Events extends _App_Abstracts_Abstracts_ComponentEventsAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentEventsAbstract {
    initEvents(root) {
        const listWrapper = root.querySelector('.settings-proxy-list-wrapper');
        if (listWrapper) {
            listWrapper.addEventListener('click', (e) => {
                const ExpandHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('removeProxyItem');
                ExpandHandlerInstance.handle(undefined, e);
            });
        }
        const settingsFrom = root.querySelector('.proxy-settings-form');
        if (settingsFrom) {
            settingsFrom.addEventListener('submit', (e) => {
                const AddProxyItemHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('addProxyItem');
                AddProxyItemHandlerInstance.handle(undefined, e);
            });
        }
        root.addEventListener('init', (e) => {
            const InitHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('init');
            InitHandlerInstance.handle();
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Main/Handlers.ts":
/*!*********************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Main/Handlers.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handlers: () => (/* binding */ Handlers)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ImmutableContainerAbstract */ "./src/App/Abstracts/Abstracts/ImmutableContainerAbstract.ts");
/* harmony import */ var _Handlers_RemoveProxyItemHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handlers/RemoveProxyItemHandler */ "./src/App/Components/ProxySettings/Structure/Handlers/RemoveProxyItemHandler.ts");
/* harmony import */ var _Handlers_AddProxyItemHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Handlers/AddProxyItemHandler */ "./src/App/Components/ProxySettings/Structure/Handlers/AddProxyItemHandler.ts");
/* harmony import */ var _Handlers_InitHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Handlers/InitHandler */ "./src/App/Components/ProxySettings/Structure/Handlers/InitHandler.ts");




class Handlers extends _App_Abstracts_Abstracts_ImmutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.ImmutableContainerAbstract {
    constructor(CustomHTMLElementInstance, ProxySorageInstance, maxCount) {
        super({
            removeProxyItem: new _Handlers_RemoveProxyItemHandler__WEBPACK_IMPORTED_MODULE_1__.RemoveProxyItemHandler(CustomHTMLElementInstance, ProxySorageInstance),
            addProxyItem: new _Handlers_AddProxyItemHandler__WEBPACK_IMPORTED_MODULE_2__.AddProxyItemHandler(CustomHTMLElementInstance, ProxySorageInstance, maxCount),
            init: new _Handlers_InitHandler__WEBPACK_IMPORTED_MODULE_3__.InitHandler(CustomHTMLElementInstance, ProxySorageInstance)
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Main/ProxyItemTemplate.ts":
/*!******************************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Main/ProxyItemTemplate.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyItemTemplate: () => (/* binding */ ProxyItemTemplate)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentTemplateAbstract */ "./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts");

class ProxyItemTemplate extends _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentTemplateAbstract {
    html() {
        return `
			<div class="settings-proxy-list-item">
				<div class="settings-proxy-list-item-data">
					<div class="settings-proxy-list-item-info">
						<span class="settings-proxy-list-item-type"></span>
						<span class="settings-proxy-list-item-ip"></span>
					</div>
					<div class="settings-proxy-list-item-name">
						<span></span>
					</div>
				</div>
				<div class="settings-proxy-list-item-remove-wrapper">
					<button class="settings-proxy-list-item-remove" type="button">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
					</button>
				</div>
			</div>
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Main/State.ts":
/*!******************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Main/State.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/MutableContainerAbstract */ "./src/App/Abstracts/Abstracts/MutableContainerAbstract.ts");

class State extends _App_Abstracts_Abstracts_MutableContainerAbstract__WEBPACK_IMPORTED_MODULE_0__.MutableContainerAbstract {
    constructor() {
        super({
            count: 0
        });
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Main/Styles.ts":
/*!*******************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Main/Styles.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Styles: () => (/* binding */ Styles)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentStylesAbstract */ "./src/App/Abstracts/Abstracts/ComponentStylesAbstract.ts");

class Styles extends _App_Abstracts_Abstracts_ComponentStylesAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentStylesAbstract {
    css() {
        return `
			:host {
				display: block;
			}

			* {
				box-sizing: border-box;
			}

			.button {
				color: var(--secondaryTextColor);
				background-color: var(--secondaryColor);
				display: inline-block;
				padding: 15px 15px;
				border: none;
				border-radius: 10px;
				cursor: pointer;
				transition: 0.5s;
			}

			.button-primary {
				color: var(--primaryTextColor);
				background-color: var(--primaryColor);
			}

			.proxy-setting input,
			.proxy-setting select {
				font-family: 'Roboto';
				font-size: 16px;
				color: var(--textColor);
				background-color: transparent;
				width: 100%;
				padding: 15px 20px;
				border: 1px solid var(--textColor);
				border-radius: 10px;
				outline: none;
			}

			.proxy-setting select option {
				background-color: var(--primaryTextColor);
			}

			.proxy-setting ::placeholder {
				color: var(--textColor);
			}

			.proxy-setting-wrapper:not(:last-child) {
				margin-bottom: 15px;
			}

			.settings-proxy-list-wrapper {
				padding-bottom: 25px;
				margin-bottom: 20px;
				border-bottom: 1px solid var(--textColor);
			}

			.proxy-settings-submit {
				width: 100%;
			}

			.settings-proxy-list-item {
				position: relative;
				padding: 15px 35px 15px 15px;
				border: 1px solid var(--textColor);
				border-radius: 10px;
				transition: 0.5s;
			}

			.settings-proxy-list-item:not(:last-child) {
				margin-bottom: 15px;
			}

			.settings-proxy-list-item-type {
				line-height: 1;
				display: inline-block;
				padding-right: 10px;
				margin-right: 5px;
				border-right: 1px solid var(--textColor);
			}

			.settings-proxy-list-item-name {
				font-size: 12px;
				text-transform: uppercase;
			}

			.settings-proxy-list-item-remove-wrapper {
				position: absolute;
				top: calc(50% - 10px);
				right: 8px;
				z-index: 1;
			}

			.settings-proxy-list-item-remove {
				background-color: transparent;
				display: block;
				position: relative;
				border: none;
				cursor: pointer;
			}

			.settings-proxy-list-item-remove svg {
				display: block;
				width: 20px;
				height: 20px;
			}

			.settings-proxy-list-item-remove svg path {
				fill: var(--textColor);
			}
		`;
    }
}


/***/ }),

/***/ "./src/App/Components/ProxySettings/Structure/Main/Template.ts":
/*!*********************************************************************!*\
  !*** ./src/App/Components/ProxySettings/Structure/Main/Template.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/ComponentTemplateAbstract */ "./src/App/Abstracts/Abstracts/ComponentTemplateAbstract.ts");

class Template extends _App_Abstracts_Abstracts_ComponentTemplateAbstract__WEBPACK_IMPORTED_MODULE_0__.ComponentTemplateAbstract {
    html() {
        return `
			<div class="proxy-settings-main-wrapper">
				<div class="settings-proxy-list-wrapper">
					
				</div>

				<div class="proxy-settings-wrapper">
					<form class="proxy-settings-form">
						<h3 class="proxy-settings-title">Добавить прокси</h3>
						
						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyName" placeholder="Название (страна, город)*">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<select name="proxyType">
									<option value="">Выберите тип прокси*</option>
									<option value="HTTP">HTTP</option>
									<option value="HTTPS">HTTPS</option>
									<option value="SOCKS4">SOCKS4</option>
									<option value="SOCKS5">SOCKS5</option>
								</select>
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyIP" placeholder="IP адрес*">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyPort" placeholder="Порт*">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyUser" placeholder="Пользователь (если используется)">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyPassword" placeholder="Пароль (если используется)">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<button type="submit" class="button button-primary proxy-settings-submit">Добавить</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		`;
    }
}


/***/ }),

/***/ "./src/App/Handlers/ErrorsHandler.ts":
/*!*******************************************!*\
  !*** ./src/App/Handlers/ErrorsHandler.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorsHandler: () => (/* binding */ ErrorsHandler)
/* harmony export */ });
class ErrorsHandler {
    handle(message) {
        const errorsWrapper = document.querySelector('.extension-errors-wrapper');
        let errorMessage = '';
        if (typeof message == 'string') {
            errorMessage = message.replace('Uncaught Error: ', '');
        }
        else {
            errorMessage = 'Ошибка, попробуйте ещё раз';
        }
        errorsWrapper?.insertAdjacentHTML('beforeend', '<custom-error>' + errorMessage + '</custom-error>');
    }
}


/***/ }),

/***/ "./src/App/Handlers/ProxyPageOpenHandler.ts":
/*!**************************************************!*\
  !*** ./src/App/Handlers/ProxyPageOpenHandler.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyPageOpenHandler: () => (/* binding */ ProxyPageOpenHandler)
/* harmony export */ });
class ProxyPageOpenHandler {
    handle(args, event) {
        const page = event.target;
        const proxyList = page.querySelector('custom-proxy-list');
        if (!proxyList) {
            return;
        }
        const InitHandlerInstance = proxyList.HandlersInstance.get('init');
        InitHandlerInstance.handle();
    }
}


/***/ }),

/***/ "./src/App/Handlers/RouterLinkClickHandler.ts":
/*!****************************************************!*\
  !*** ./src/App/Handlers/RouterLinkClickHandler.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouterLinkClickHandler: () => (/* binding */ RouterLinkClickHandler)
/* harmony export */ });
class RouterLinkClickHandler {
    PagesControllerInstance;
    constructor(PagesControllerInstance) {
        this.PagesControllerInstance = PagesControllerInstance;
    }
    handle(args, event) {
        let routeLink = event.target;
        if (!routeLink.classList.contains('router-link')) {
            routeLink = routeLink.closest('.router-link');
        }
        if (!routeLink) {
            return;
        }
        event.preventDefault();
        const route = routeLink.getAttribute('href');
        if (!route) {
            return;
        }
        this.PagesControllerInstance.switch(route);
    }
}


/***/ }),

/***/ "./src/App/Handlers/SettingsPageOpenHandler.ts":
/*!*****************************************************!*\
  !*** ./src/App/Handlers/SettingsPageOpenHandler.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPageOpenHandler: () => (/* binding */ SettingsPageOpenHandler)
/* harmony export */ });
class SettingsPageOpenHandler {
    handle(args, event) {
        const connectionButton = document.querySelector('custom-connection-button');
        if (!connectionButton) {
            return;
        }
        const ConnectionHandlerInstance = connectionButton.HandlersInstance.get('connection');
        ConnectionHandlerInstance.handle('disconnected');
    }
}


/***/ }),

/***/ "./src/App/Router/PagesController.ts":
/*!*******************************************!*\
  !*** ./src/App/Router/PagesController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesController: () => (/* binding */ PagesController)
/* harmony export */ });
class PagesController {
    RouterInstance;
    RouterRulesInstance;
    CurrentPageHTMLElementInstance;
    constructor(RouterInstance, RouterRulesInstance) {
        this.RouterInstance = RouterInstance;
        this.RouterRulesInstance = RouterRulesInstance;
        this.CurrentPageHTMLElementInstance = false;
    }
    switch(route) {
        const rewriteRoute = this.RouterRulesInstance.check(route);
        const NextPageHTMLElementInstance = this.RouterInstance.get(rewriteRoute);
        if (NextPageHTMLElementInstance === this.CurrentPageHTMLElementInstance) {
            return;
        }
        NextPageHTMLElementInstance.BehaviorsInstance.get('open').do();
        if (this.CurrentPageHTMLElementInstance) {
            this.CurrentPageHTMLElementInstance.BehaviorsInstance.get('close').do();
        }
        this.CurrentPageHTMLElementInstance = NextPageHTMLElementInstance;
    }
}


/***/ }),

/***/ "./src/App/Router/Router.ts":
/*!**********************************!*\
  !*** ./src/App/Router/Router.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
class Router {
    pages;
    constructor() {
        this.pages = new Map();
    }
    register(route, PageHTMLElementInstance) {
        this.pages.set(route, PageHTMLElementInstance);
    }
    get(route) {
        const PageHTMLElementInstance = this.pages.get(route);
        if (!PageHTMLElementInstance) {
            throw new Error('Страница ' + route + ' не найдена');
        }
        return PageHTMLElementInstance;
    }
}


/***/ }),

/***/ "./src/App/Router/RouterRules.ts":
/*!***************************************!*\
  !*** ./src/App/Router/RouterRules.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouterRules: () => (/* binding */ RouterRules)
/* harmony export */ });
class RouterRules {
    rules;
    constructor() {
        this.rules = new Map();
    }
    add(route, handler) {
        this.rules.set(route, handler);
    }
    delete(route) {
        this.rules.delete(route);
    }
    check(route) {
        const handler = this.rules.get(route);
        if (!handler) {
            return route;
        }
        return handler(route);
    }
}


/***/ }),

/***/ "./src/App/Storage/ProxyIDField.ts":
/*!*****************************************!*\
  !*** ./src/App/Storage/ProxyIDField.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyIDField: () => (/* binding */ ProxyIDField)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_StorageFieldAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/StorageFieldAbstract */ "./src/App/Abstracts/Abstracts/StorageFieldAbstract.ts");

class ProxyIDField extends _App_Abstracts_Abstracts_StorageFieldAbstract__WEBPACK_IMPORTED_MODULE_0__.StorageFieldAbstract {
    constructor(field) {
        super(field, 0);
    }
}


/***/ }),

/***/ "./src/App/Storage/ProxyListField.ts":
/*!*******************************************!*\
  !*** ./src/App/Storage/ProxyListField.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyListField: () => (/* binding */ ProxyListField)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_StorageFieldAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/StorageFieldAbstract */ "./src/App/Abstracts/Abstracts/StorageFieldAbstract.ts");

class ProxyListField extends _App_Abstracts_Abstracts_StorageFieldAbstract__WEBPACK_IMPORTED_MODULE_0__.StorageFieldAbstract {
    constructor(field) {
        super(field, {});
    }
}


/***/ }),

/***/ "./src/App/Storage/ProxySelectedIDField.ts":
/*!*************************************************!*\
  !*** ./src/App/Storage/ProxySelectedIDField.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxySelectedIDField: () => (/* binding */ ProxySelectedIDField)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_StorageFieldAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/StorageFieldAbstract */ "./src/App/Abstracts/Abstracts/StorageFieldAbstract.ts");

class ProxySelectedIDField extends _App_Abstracts_Abstracts_StorageFieldAbstract__WEBPACK_IMPORTED_MODULE_0__.StorageFieldAbstract {
    constructor(field) {
        super(field, 0);
    }
}


/***/ }),

/***/ "./src/App/Storage/ProxyStorage.ts":
/*!*****************************************!*\
  !*** ./src/App/Storage/ProxyStorage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyStorage: () => (/* binding */ ProxyStorage)
/* harmony export */ });
/* harmony import */ var _App_Abstracts_Abstracts_StorageAbstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/Abstracts/Abstracts/StorageAbstract */ "./src/App/Abstracts/Abstracts/StorageAbstract.ts");

class ProxyStorage extends _App_Abstracts_Abstracts_StorageAbstract__WEBPACK_IMPORTED_MODULE_0__.StorageAbstract {
    ProxySelectedIDFieldInstance;
    constructor(ProxyListFieldInstance, ProxyIDFieldInstance, ProxySelectedIDFieldInstance) {
        super(ProxyListFieldInstance, ProxyIDFieldInstance);
        this.ProxySelectedIDFieldInstance = ProxySelectedIDFieldInstance;
    }
    getCount() {
        return Object.keys(this.getAll()).length;
    }
    getSelectedProxy() {
        return this.get(this.ProxySelectedIDFieldInstance.get());
    }
    setSelectedProxy(id) {
        this.ProxySelectedIDFieldInstance.set(id);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App/App */ "./src/App/App.ts");

new _App_App__WEBPACK_IMPORTED_MODULE_0__.App();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEhnRztBQUN6Rix1QkFBdUIseUdBQXlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCc0Y7QUFDL0UsMkJBQTJCLCtGQUFvQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xzRjtBQUMvRSw2QkFBNkIsK0ZBQW9CO0FBQ3hEO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMc0Y7QUFDL0UsbUNBQW1DLCtGQUFvQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0w0RTtBQUNyRSwyQkFBMkIscUZBQWU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDaEMsSUFBSSx5Q0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9Db21wb25lbnRFdmVudHNBYnN0cmFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SW5pdGlhbGl6ZXJBYnN0cmFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50U3R5bGVzQWJzdHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0ltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9NdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL1N0b3JhZ2VBYnN0cmFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvU3RvcmFnZUZpZWxkQWJzdHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9BcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0FjY29yZGlvbi9BY2NvcmRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0FjY29yZGlvbi9TdHJ1Y3R1cmUvQmVoYXZpb3JzL0V4cGFuZEJlaGF2aW9yLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9BY2NvcmRpb24vU3RydWN0dXJlL0ZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0FjY29yZGlvbi9TdHJ1Y3R1cmUvSGFuZGxlcnMvRXhwYW5kSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvQWNjb3JkaW9uL1N0cnVjdHVyZS9Jbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvQWNjb3JkaW9uL1N0cnVjdHVyZS9NYWluL0JlaGF2aW9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvQWNjb3JkaW9uL1N0cnVjdHVyZS9NYWluL0V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvQWNjb3JkaW9uL1N0cnVjdHVyZS9NYWluL0hhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9BY2NvcmRpb24vU3RydWN0dXJlL01haW4vU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0FjY29yZGlvbi9TdHJ1Y3R1cmUvTWFpbi9TdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0FjY29yZGlvbi9TdHJ1Y3R1cmUvTWFpbi9UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ29ubmVjdGlvbkJ1dHRvbi9Db25uZWN0aW9uQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Db25uZWN0aW9uQnV0dG9uL1N0cnVjdHVyZS9CZWhhdmlvcnMvQ29ubmVjdGlvbkJlaGF2aW9yLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Db25uZWN0aW9uQnV0dG9uL1N0cnVjdHVyZS9GYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Db25uZWN0aW9uQnV0dG9uL1N0cnVjdHVyZS9IYW5kbGVycy9Db25uZWN0aW9uSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ29ubmVjdGlvbkJ1dHRvbi9TdHJ1Y3R1cmUvSGFuZGxlcnMvUHJveHlDaGFuZ2VIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Db25uZWN0aW9uQnV0dG9uL1N0cnVjdHVyZS9Jbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ29ubmVjdGlvbkJ1dHRvbi9TdHJ1Y3R1cmUvTWFpbi9CZWhhdmlvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0Nvbm5lY3Rpb25CdXR0b24vU3RydWN0dXJlL01haW4vRXZlbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Db25uZWN0aW9uQnV0dG9uL1N0cnVjdHVyZS9NYWluL0hhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Db25uZWN0aW9uQnV0dG9uL1N0cnVjdHVyZS9NYWluL1N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Db25uZWN0aW9uQnV0dG9uL1N0cnVjdHVyZS9NYWluL1N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ29ubmVjdGlvbkJ1dHRvbi9TdHJ1Y3R1cmUvTWFpbi9UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvRXJyb3IvRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0Vycm9yL1N0cnVjdHVyZS9CZWhhdmlvcnMvQ2xvc2VCZWhhdmlvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvRXJyb3IvU3RydWN0dXJlL0ZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0Vycm9yL1N0cnVjdHVyZS9IYW5kbGVycy9DbG9zZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0Vycm9yL1N0cnVjdHVyZS9Jbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvRXJyb3IvU3RydWN0dXJlL01haW4vQmVoYXZpb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9FcnJvci9TdHJ1Y3R1cmUvTWFpbi9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL0Vycm9yL1N0cnVjdHVyZS9NYWluL0hhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9FcnJvci9TdHJ1Y3R1cmUvTWFpbi9TdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvRXJyb3IvU3RydWN0dXJlL01haW4vU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9FcnJvci9TdHJ1Y3R1cmUvTWFpbi9UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUGFnZS9QYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9QYWdlL1N0cnVjdHVyZS9CZWhhdmlvcnMvQ2xvc2VCZWhhdmlvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUGFnZS9TdHJ1Y3R1cmUvQmVoYXZpb3JzL09wZW5CZWhhdmlvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUGFnZS9TdHJ1Y3R1cmUvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUGFnZS9TdHJ1Y3R1cmUvSGFuZGxlcnMvSW5pdEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1BhZ2UvU3RydWN0dXJlL0luaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9QYWdlL1N0cnVjdHVyZS9NYWluL0JlaGF2aW9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUGFnZS9TdHJ1Y3R1cmUvTWFpbi9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1BhZ2UvU3RydWN0dXJlL01haW4vSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1BhZ2UvU3RydWN0dXJlL01haW4vU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1BhZ2UvU3RydWN0dXJlL01haW4vU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9QYWdlL1N0cnVjdHVyZS9NYWluL1RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Qcm94eUxpc3QvUHJveHlMaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Qcm94eUxpc3QvU3RydWN0dXJlL0JlaGF2aW9ycy9JbnNlcnRQcm94eUl0ZW1zQmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5TGlzdC9TdHJ1Y3R1cmUvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUHJveHlMaXN0L1N0cnVjdHVyZS9IYW5kbGVycy9DaGFuZ2VQcm94eUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5TGlzdC9TdHJ1Y3R1cmUvSGFuZGxlcnMvSW5pdEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5TGlzdC9TdHJ1Y3R1cmUvSW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5TGlzdC9TdHJ1Y3R1cmUvTWFpbi9CZWhhdmlvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5TGlzdC9TdHJ1Y3R1cmUvTWFpbi9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5TGlzdC9TdHJ1Y3R1cmUvTWFpbi9IYW5kbGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUHJveHlMaXN0L1N0cnVjdHVyZS9NYWluL1Byb3h5SXRlbVRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Qcm94eUxpc3QvU3RydWN0dXJlL01haW4vU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5TGlzdC9TdHJ1Y3R1cmUvTWFpbi9TdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5TGlzdC9TdHJ1Y3R1cmUvTWFpbi9UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUHJveHlTZXR0aW5ncy9Qcm94eVNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Qcm94eVNldHRpbmdzL1N0cnVjdHVyZS9CZWhhdmlvcnMvSW5zZXJ0UHJveHlJdGVtQmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5U2V0dGluZ3MvU3RydWN0dXJlL0JlaGF2aW9ycy9SZW1vdmVQcm94eUl0ZW1CZWhhdmlvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUHJveHlTZXR0aW5ncy9TdHJ1Y3R1cmUvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUHJveHlTZXR0aW5ncy9TdHJ1Y3R1cmUvSGFuZGxlcnMvQWRkUHJveHlJdGVtSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUHJveHlTZXR0aW5ncy9TdHJ1Y3R1cmUvSGFuZGxlcnMvSW5pdEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5U2V0dGluZ3MvU3RydWN0dXJlL0hhbmRsZXJzL1JlbW92ZVByb3h5SXRlbUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5U2V0dGluZ3MvU3RydWN0dXJlL0luaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Qcm94eVNldHRpbmdzL1N0cnVjdHVyZS9NYWluL0JlaGF2aW9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0NvbXBvbmVudHMvUHJveHlTZXR0aW5ncy9TdHJ1Y3R1cmUvTWFpbi9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5U2V0dGluZ3MvU3RydWN0dXJlL01haW4vSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5U2V0dGluZ3MvU3RydWN0dXJlL01haW4vUHJveHlJdGVtVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5U2V0dGluZ3MvU3RydWN0dXJlL01haW4vU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Db21wb25lbnRzL1Byb3h5U2V0dGluZ3MvU3RydWN0dXJlL01haW4vU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50cy9Qcm94eVNldHRpbmdzL1N0cnVjdHVyZS9NYWluL1RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvSGFuZGxlcnMvRXJyb3JzSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0hhbmRsZXJzL1Byb3h5UGFnZU9wZW5IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvSGFuZGxlcnMvUm91dGVyTGlua0NsaWNrSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0hhbmRsZXJzL1NldHRpbmdzUGFnZU9wZW5IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvUm91dGVyL1BhZ2VzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1JvdXRlci9Sb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Sb3V0ZXIvUm91dGVyUnVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9TdG9yYWdlL1Byb3h5SURGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1N0b3JhZ2UvUHJveHlMaXN0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9TdG9yYWdlL1Byb3h5U2VsZWN0ZWRJREZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvU3RvcmFnZS9Qcm94eVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tcG9uZW50RXZlbnRzQWJzdHJhY3Qge1xuICAgIEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UgPSBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnRIVE1MRWxlbWVudEFic3RyYWN0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHJvb3Q7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ2Nsb3NlZCcgfSk7XG4gICAgfVxuICAgIGluaXRFdmVudCgpIHtcbiAgICAgICAgY29uc3QgUHVibGljQ3VzdG9tRXZlbnRJbnN0YW5jZSA9IG5ldyBDdXN0b21FdmVudCh0aGlzLmh0bWxUYWcgKyAnLWluaXQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvb3QuZGlzcGF0Y2hFdmVudChQdWJsaWNDdXN0b21FdmVudEluc3RhbmNlKTtcbiAgICAgICAgY29uc3QgUHJpdmF0ZUN1c3RvbUV2ZW50SW5zdGFuY2UgPSBuZXcgQ3VzdG9tRXZlbnQoJ2luaXQnLCB7XG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBvc2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb290LmRpc3BhdGNoRXZlbnQoUHJpdmF0ZUN1c3RvbUV2ZW50SW5zdGFuY2UpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgIH1cbiAgICBnZXRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxUYWc7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudEluaXRpYWxpemVyQWJzdHJhY3Qge1xuICAgIGh0bWxUYWc7XG4gICAgY29uc3RydWN0b3IoaHRtbFRhZykge1xuICAgICAgICB0aGlzLmh0bWxUYWcgPSBodG1sVGFnO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGhpcy5odG1sVGFnLCB0aGlzLkZhY3RvcnlJbnN0YW5jZS5jcmVhdGUodGhpcy5odG1sVGFnKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudFN0eWxlc0Fic3RyYWN0IHtcbiAgICBzdHlsZXM7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3R5bGVzID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgdGhpcy5zdHlsZXMucmVwbGFjZVN5bmModGhpcy5jc3MoKSk7XG4gICAgfVxuICAgIHJlbmRlclN0eWxlcyhyb290KSB7XG4gICAgICAgIHJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gW3RoaXMuc3R5bGVzXTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50VGVtcGxhdGVBYnN0cmFjdCB7XG4gICAgdGVtcGxhdGU7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuaHRtbCgpO1xuICAgIH1cbiAgICByZW5kZXJUZW1wbGF0ZShyb290KSB7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIHJldHVybiByb290LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IDpsYXN0LWNoaWxkJyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IHtcbiAgICBpdGVtcztcbiAgICBrZXlzO1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXModGhpcy5pdGVtcyk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNba2V5XTtcbiAgICB9XG4gICAgZ2V0S2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5cztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbW11dGFibGVDb250YWluZXJBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIE11dGFibGVDb250YWluZXJBYnN0cmFjdCBleHRlbmRzIEltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IHtcbiAgICBjaGFuZ2Uoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLml0ZW1zW2tleV0gPSB2YWx1ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU3RvcmFnZUFic3RyYWN0IHtcbiAgICBEYXRhRmllbGRJbnN0YW5jZTtcbiAgICBJREZpZWxkSW5zdGFuY2U7XG4gICAgaWQ7XG4gICAgY29uc3RydWN0b3IoRGF0YUZpZWxkSW5zdGFuY2UsIElERmllbGRJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLkRhdGFGaWVsZEluc3RhbmNlID0gRGF0YUZpZWxkSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuSURGaWVsZEluc3RhbmNlID0gSURGaWVsZEluc3RhbmNlO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5JREZpZWxkSW5zdGFuY2UuZ2V0KCk7XG4gICAgfVxuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLkRhdGFGaWVsZEluc3RhbmNlLmdldCgpO1xuICAgICAgICBjb25zdCBuZXdJdGVtID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24obmV3SXRlbSwgaXRlbSwgeyBpZDogdGhpcy5pZCB9KTtcbiAgICAgICAgZGF0YVt0aGlzLmlkXSA9IG5ld0l0ZW07XG4gICAgICAgIHRoaXMuRGF0YUZpZWxkSW5zdGFuY2Uuc2V0KGRhdGEpO1xuICAgICAgICB0aGlzLmlkKys7XG4gICAgICAgIHRoaXMuSURGaWVsZEluc3RhbmNlLnNldCh0aGlzLmlkKTtcbiAgICAgICAgcmV0dXJuIG5ld0l0ZW07XG4gICAgfVxuICAgIHNldChpdGVtKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLkRhdGFGaWVsZEluc3RhbmNlLmdldCgpO1xuICAgICAgICBkYXRhW2l0ZW0uaWRdID0gaXRlbTtcbiAgICAgICAgdGhpcy5EYXRhRmllbGRJbnN0YW5jZS5zZXQoZGF0YSk7XG4gICAgfVxuICAgIGdldChpZCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5EYXRhRmllbGRJbnN0YW5jZS5nZXQoKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbaWRdO1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgZ2V0QWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhRmllbGRJbnN0YW5jZS5nZXQoKTtcbiAgICB9XG4gICAgZGVsZXRlKGlkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLkRhdGFGaWVsZEluc3RhbmNlLmdldCgpO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgZGF0YVtpZF07XG4gICAgICAgIHRoaXMuRGF0YUZpZWxkSW5zdGFuY2Uuc2V0KGRhdGEpO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgZGVsZXRlQWxsKCkge1xuICAgICAgICB0aGlzLkRhdGFGaWVsZEluc3RhbmNlLmNsZWFyKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFN0b3JhZ2VGaWVsZEFic3RyYWN0IHtcbiAgICBzdG9yYWdlO1xuICAgIGZpZWxkO1xuICAgIGluaXRWYWx1ZTtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZCwgaW5pdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLmluaXRWYWx1ZSA9IGluaXRWYWx1ZTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmZpZWxkKTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9KU09OKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0b0RhdGEoanNvbikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9XG4gICAgZ2V0KCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy5maWVsZCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRGF0YShkYXRhKTtcbiAgICB9XG4gICAgc2V0KGRhdGEpIHtcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSB0aGlzLnRvSlNPTihkYXRhKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0odGhpcy5maWVsZCwganNvbkRhdGEpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKHRoaXMuZmllbGQsIHRoaXMudG9KU09OKHRoaXMuaW5pdFZhbHVlKSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFjY29yZGlvbkluaXRpYWxpemVyIH0gZnJvbSAnQC9BcHAvQ29tcG9uZW50cy9BY2NvcmRpb24vQWNjb3JkaW9uJztcbmltcG9ydCB7IFBhZ2VJbml0aWFsaXplciB9IGZyb20gJ0AvQXBwL0NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFByb3h5U2V0dGluZ3NJbml0aWFsaXplciB9IGZyb20gJ0AvQXBwL0NvbXBvbmVudHMvUHJveHlTZXR0aW5ncy9Qcm94eVNldHRpbmdzJztcbmltcG9ydCB7IFByb3h5TGlzdEluaXRpYWxpemVyIH0gZnJvbSAnQC9BcHAvQ29tcG9uZW50cy9Qcm94eUxpc3QvUHJveHlMaXN0JztcbmltcG9ydCB7IENvbm5lY3Rpb25CdXR0b25Jbml0aWFsaXplciB9IGZyb20gJ0AvQXBwL0NvbXBvbmVudHMvQ29ubmVjdGlvbkJ1dHRvbi9Db25uZWN0aW9uQnV0dG9uJztcbmltcG9ydCB7IEVycm9ySW5pdGlhbGl6ZXIgfSBmcm9tICdAL0FwcC9Db21wb25lbnRzL0Vycm9yL0Vycm9yJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0AvQXBwL1JvdXRlci9Sb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyUnVsZXMgfSBmcm9tICdAL0FwcC9Sb3V0ZXIvUm91dGVyUnVsZXMnO1xuaW1wb3J0IHsgUGFnZXNDb250cm9sbGVyIH0gZnJvbSAnQC9BcHAvUm91dGVyL1BhZ2VzQ29udHJvbGxlcic7XG5pbXBvcnQgeyBQcm94eUlERmllbGQgfSBmcm9tICdAL0FwcC9TdG9yYWdlL1Byb3h5SURGaWVsZCc7XG5pbXBvcnQgeyBQcm94eVNlbGVjdGVkSURGaWVsZCB9IGZyb20gJ0AvQXBwL1N0b3JhZ2UvUHJveHlTZWxlY3RlZElERmllbGQnO1xuaW1wb3J0IHsgUHJveHlMaXN0RmllbGQgfSBmcm9tICdAL0FwcC9TdG9yYWdlL1Byb3h5TGlzdEZpZWxkJztcbmltcG9ydCB7IFByb3h5U3RvcmFnZSB9IGZyb20gJ0AvQXBwL1N0b3JhZ2UvUHJveHlTdG9yYWdlJztcbmltcG9ydCB7IFByb3h5UGFnZU9wZW5IYW5kbGVyIH0gZnJvbSAnQC9BcHAvSGFuZGxlcnMvUHJveHlQYWdlT3BlbkhhbmRsZXInO1xuaW1wb3J0IHsgU2V0dGluZ3NQYWdlT3BlbkhhbmRsZXIgfSBmcm9tICdAL0FwcC9IYW5kbGVycy9TZXR0aW5nc1BhZ2VPcGVuSGFuZGxlcic7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rQ2xpY2tIYW5kbGVyIH0gZnJvbSAnQC9BcHAvSGFuZGxlcnMvUm91dGVyTGlua0NsaWNrSGFuZGxlcic7XG5pbXBvcnQgeyBFcnJvcnNIYW5kbGVyIH0gZnJvbSAnQC9BcHAvSGFuZGxlcnMvRXJyb3JzSGFuZGxlcic7XG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IFByb3h5SURGaWVsZEluc3RhbmNlID0gbmV3IFByb3h5SURGaWVsZCgncHJveHlJREluY3JlbWVudCcpO1xuICAgICAgICBjb25zdCBQcm94eVNlbGVjdGVkSURGaWVsZEluc3RhbmNlID0gbmV3IFByb3h5U2VsZWN0ZWRJREZpZWxkKCdwcm94eVNlbGVjdGVkSUQnKTtcbiAgICAgICAgY29uc3QgUHJveHlMaXN0RmllbGRJbnN0YW5jZSA9IG5ldyBQcm94eUxpc3RGaWVsZCgncHJveHlMaXN0Jyk7XG4gICAgICAgIGNvbnN0IFByb3h5U3RvcmFnZUluc3RhbmNlID0gbmV3IFByb3h5U3RvcmFnZShQcm94eUxpc3RGaWVsZEluc3RhbmNlLCBQcm94eUlERmllbGRJbnN0YW5jZSwgUHJveHlTZWxlY3RlZElERmllbGRJbnN0YW5jZSk7XG4gICAgICAgIGNvbnN0IFJvdXRlclJ1bGVzSW5zdGFuY2UgPSBuZXcgUm91dGVyUnVsZXMoKTtcbiAgICAgICAgY29uc3QgUm91dGVySW5zdGFuY2UgPSBuZXcgUm91dGVyKCk7XG4gICAgICAgIGNvbnN0IFBhZ2VzQ29udHJvbGxlckluc3RhbmNlID0gbmV3IFBhZ2VzQ29udHJvbGxlcihSb3V0ZXJJbnN0YW5jZSwgUm91dGVyUnVsZXNJbnN0YW5jZSk7XG4gICAgICAgIGNvbnN0IEFjY29yZGlvbkluaXRpYWxpemVySW5zdGFuY2UgPSBuZXcgQWNjb3JkaW9uSW5pdGlhbGl6ZXIoKTtcbiAgICAgICAgY29uc3QgUGFnZUluaXRpYWxpemVySW5zdGFuY2UgPSBuZXcgUGFnZUluaXRpYWxpemVyKFJvdXRlckluc3RhbmNlKTtcbiAgICAgICAgY29uc3QgUHJveHlTZXR0aW5nc0luaXRpYWxpemVySW5zdGFuY2UgPSBuZXcgUHJveHlTZXR0aW5nc0luaXRpYWxpemVyKFByb3h5U3RvcmFnZUluc3RhbmNlLCA1KTtcbiAgICAgICAgY29uc3QgUHJveHlMaXN0SW5pdGlhbGl6ZXJJbnN0YW5jZSA9IG5ldyBQcm94eUxpc3RJbml0aWFsaXplcihQcm94eVN0b3JhZ2VJbnN0YW5jZSk7XG4gICAgICAgIGNvbnN0IENvbm5lY3Rpb25CdXR0b25Jbml0aWFsaXplckluc3RhbmNlID0gbmV3IENvbm5lY3Rpb25CdXR0b25Jbml0aWFsaXplcihQcm94eVN0b3JhZ2VJbnN0YW5jZSk7XG4gICAgICAgIGNvbnN0IEVycm9ySW5pdGlhbGl6ZXJJbnN0YW5jZSA9IG5ldyBFcnJvckluaXRpYWxpemVyKCk7XG4gICAgICAgIGNvbnN0IFByb3h5UGFnZU9wZW5IYW5kbGVySW5zdGFuY2UgPSBuZXcgUHJveHlQYWdlT3BlbkhhbmRsZXIoKTtcbiAgICAgICAgY29uc3QgU2V0dGluZ3NQYWdlT3BlbkhhbmRsZXJJbnN0YW5jZSA9IG5ldyBTZXR0aW5nc1BhZ2VPcGVuSGFuZGxlcigpO1xuICAgICAgICBjb25zdCBSb3V0ZXJMaW5rQ2xpY2tIYW5kbGVySW5zdGFuY2UgPSBuZXcgUm91dGVyTGlua0NsaWNrSGFuZGxlcihQYWdlc0NvbnRyb2xsZXJJbnN0YW5jZSk7XG4gICAgICAgIGNvbnN0IEVycm9yc0hhbmRsZXJJbnN0YW5jZSA9IG5ldyBFcnJvcnNIYW5kbGVyKCk7XG4gICAgICAgIFJvdXRlclJ1bGVzSW5zdGFuY2UuYWRkKCcjc3RhcnRQYWdlJywgKHJvdXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoUHJveHlTdG9yYWdlSW5zdGFuY2UuZ2V0Q291bnQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnI3Byb3h5UGFnZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCcjcHJveHlQYWdlT3BlbicsIChlKSA9PiB7XG4gICAgICAgICAgICBQcm94eVBhZ2VPcGVuSGFuZGxlckluc3RhbmNlLmhhbmRsZSh1bmRlZmluZWQsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignI3NldHRpbmdzUGFnZU9wZW4nLCAoZSkgPT4ge1xuICAgICAgICAgICAgU2V0dGluZ3NQYWdlT3BlbkhhbmRsZXJJbnN0YW5jZS5oYW5kbGUodW5kZWZpbmVkLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIFJvdXRlckxpbmtDbGlja0hhbmRsZXJJbnN0YW5jZS5oYW5kbGUodW5kZWZpbmVkLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5vbmVycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIEVycm9yc0hhbmRsZXJJbnN0YW5jZS5oYW5kbGUobWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbkluaXRpYWxpemVySW5zdGFuY2UuaW5pdCgpO1xuICAgICAgICBQYWdlSW5pdGlhbGl6ZXJJbnN0YW5jZS5pbml0KCk7XG4gICAgICAgIFByb3h5U2V0dGluZ3NJbml0aWFsaXplckluc3RhbmNlLmluaXQoKTtcbiAgICAgICAgUHJveHlMaXN0SW5pdGlhbGl6ZXJJbnN0YW5jZS5pbml0KCk7XG4gICAgICAgIENvbm5lY3Rpb25CdXR0b25Jbml0aWFsaXplckluc3RhbmNlLmluaXQoKTtcbiAgICAgICAgRXJyb3JJbml0aWFsaXplckluc3RhbmNlLmluaXQoKTtcbiAgICAgICAgUGFnZXNDb250cm9sbGVySW5zdGFuY2Uuc3dpdGNoKCcjc3RhcnRQYWdlJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5pdGlhbGl6ZXIgYXMgQWNjb3JkaW9uSW5pdGlhbGl6ZXIgfSBmcm9tICcuL1N0cnVjdHVyZS9Jbml0aWFsaXplcic7XG5leHBvcnQgeyBBY2NvcmRpb25Jbml0aWFsaXplciB9O1xuIiwiZXhwb3J0IGNsYXNzIEV4cGFuZEJlaGF2aW9yIHtcbiAgICBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlID0gQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICB9XG4gICAgZG8oKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gJ2FjY29yZGlvbi1pdGVtLWFjdGl2ZSc7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2Uucm9vdC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0td3JhcHBlcicpO1xuICAgICAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5yb290LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50LXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5yb290LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jyk7XG4gICAgICAgIGlmICghd3JhcHBlciB8fCAhY29udGVudFdyYXBwZXIgfHwgIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5TdGF0ZUluc3RhbmNlLmdldCgnZXhwYW5kJykpIHtcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICBjb250ZW50V3JhcHBlci5zdHlsZVsnaGVpZ2h0J10gPSBjb250ZW50Lm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuU3RhdGVJbnN0YW5jZS5jaGFuZ2UoJ2V4cGFuZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLnN0eWxlWydoZWlnaHQnXSA9ICcwJztcbiAgICAgICAgICAgIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5TdGF0ZUluc3RhbmNlLmNoYW5nZSgnZXhwYW5kJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vTWFpbi9TdGF0ZSc7XG5pbXBvcnQgeyBCZWhhdmlvcnMgfSBmcm9tICcuL01haW4vQmVoYXZpb3JzJztcbmltcG9ydCB7IEhhbmRsZXJzIH0gZnJvbSAnLi9NYWluL0hhbmRsZXJzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vTWFpbi9FdmVudHMnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuL01haW4vVGVtcGxhdGUnO1xuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSAnLi9NYWluL1N0eWxlcyc7XG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XG4gICAgY3JlYXRlKGh0bWxUYWcpIHtcbiAgICAgICAgY29uc3QgVGVtcGxhdGVJbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZSgpO1xuICAgICAgICBjb25zdCBTdHlsZXNJbnN0YW5jZSA9IG5ldyBTdHlsZXMoKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzIEFjY29yZGlvbkhUTUxFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCB7XG4gICAgICAgICAgICBodG1sVGFnO1xuICAgICAgICAgICAgU3RhdGVJbnN0YW5jZTtcbiAgICAgICAgICAgIEJlaGF2aW9yc0luc3RhbmNlO1xuICAgICAgICAgICAgSGFuZGxlcnNJbnN0YW5jZTtcbiAgICAgICAgICAgIEV2ZW50c0luc3RhbmNlO1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxUYWcgPSBodG1sVGFnO1xuICAgICAgICAgICAgICAgIHRoaXMuU3RhdGVJbnN0YW5jZSA9IG5ldyBTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuQmVoYXZpb3JzSW5zdGFuY2UgPSBuZXcgQmVoYXZpb3JzKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuSGFuZGxlcnNJbnN0YW5jZSA9IG5ldyBIYW5kbGVycyh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50c0luc3RhbmNlID0gbmV3IEV2ZW50cyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlSW5zdGFuY2UucmVuZGVyVGVtcGxhdGUodGhpcy5yb290KTtcbiAgICAgICAgICAgICAgICBTdHlsZXNJbnN0YW5jZS5yZW5kZXJTdHlsZXModGhpcy5yb290KTtcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50c0luc3RhbmNlLmluaXRFdmVudHModGhpcy5yb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRXhwYW5kSGFuZGxlciB7XG4gICAgQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSA9IEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgfVxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgY29uc3QgRXhwYW5kQmVoYXZpb3JJbnN0YW5jZSA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5CZWhhdmlvcnNJbnN0YW5jZS5nZXQoJ2V4cGFuZCcpO1xuICAgICAgICBFeHBhbmRCZWhhdmlvckluc3RhbmNlLmRvKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50SW5pdGlhbGl6ZXJBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SW5pdGlhbGl6ZXJBYnN0cmFjdCc7XG5pbXBvcnQgeyBGYWN0b3J5IH0gZnJvbSAnLi9GYWN0b3J5JztcbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplciBleHRlbmRzIENvbXBvbmVudEluaXRpYWxpemVyQWJzdHJhY3Qge1xuICAgIEZhY3RvcnlJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2N1c3RvbS1hY2NvcmRpb24nKTtcbiAgICAgICAgdGhpcy5GYWN0b3J5SW5zdGFuY2UgPSBuZXcgRmFjdG9yeSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9JbW11dGFibGVDb250YWluZXJBYnN0cmFjdCc7XG5pbXBvcnQgeyBFeHBhbmRCZWhhdmlvciB9IGZyb20gJy4uL0JlaGF2aW9ycy9FeHBhbmRCZWhhdmlvcic7XG5leHBvcnQgY2xhc3MgQmVoYXZpb3JzIGV4dGVuZHMgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgZXhwYW5kOiBuZXcgRXhwYW5kQmVoYXZpb3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50RXZlbnRzQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudEV2ZW50c0Fic3RyYWN0JztcbmV4cG9ydCBjbGFzcyBFdmVudHMgZXh0ZW5kcyBDb21wb25lbnRFdmVudHNBYnN0cmFjdCB7XG4gICAgaW5pdEV2ZW50cyhyb290KSB7XG4gICAgICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IHJvb3QucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLXRpdGxlLXdyYXBwZXInKTtcbiAgICAgICAgaWYgKHRpdGxlV3JhcHBlcikge1xuICAgICAgICAgICAgdGl0bGVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBFeHBhbmRIYW5kbGVySW5zdGFuY2UgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuSGFuZGxlcnNJbnN0YW5jZS5nZXQoJ2V4cGFuZCcpO1xuICAgICAgICAgICAgICAgIEV4cGFuZEhhbmRsZXJJbnN0YW5jZS5oYW5kbGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0ltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0JztcbmltcG9ydCB7IEV4cGFuZEhhbmRsZXIgfSBmcm9tICcuLi9IYW5kbGVycy9FeHBhbmRIYW5kbGVyJztcbmV4cG9ydCBjbGFzcyBIYW5kbGVycyBleHRlbmRzIEltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3RvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGV4cGFuZDogbmV3IEV4cGFuZEhhbmRsZXIoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9NdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFN0YXRlIGV4dGVuZHMgTXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgZXhwYW5kOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRTdHlsZXNBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50U3R5bGVzQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFN0eWxlcyBleHRlbmRzIENvbXBvbmVudFN0eWxlc0Fic3RyYWN0IHtcbiAgICBjc3MoKSB7XG4gICAgICAgIHJldHVybiBgXHJcblx0XHRcdDpob3N0IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Omhvc3QoOm5vdCg6bGFzdC1jaGlsZCkpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0Q29sb3IpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYWNjb3JkaW9uLWl0ZW0td3JhcHBlciB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5hY2NvcmRpb24taXRlbS1idXR0b24ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogLTEwcHg7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5hY2NvcmRpb24taXRlbS1idXR0b24gc3ZnIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHR3aWR0aDogMTVweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDE1cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5hY2NvcmRpb24taXRlbS1idXR0b24gc3ZnIHBhdGgge1xyXG5cdFx0XHRcdGZpbGw6IHZhcigtLXRleHRDb2xvcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5hY2NvcmRpb24taXRlbS1hY3RpdmUgLmFjY29yZGlvbi1pdGVtLWJ1dHRvbiB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmFjY29yZGlvbi1pdGVtLXRpdGxlIHtcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYWNjb3JkaW9uLWl0ZW0tdGl0bGUtd3JhcHBlciB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYWNjb3JkaW9uLWl0ZW0tY29udGVudCBoNCB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYWNjb3JkaW9uLWl0ZW0tY29udGVudCAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5hY2NvcmRpb24taXRlbS1jb250ZW50LXdyYXBwZXIge1xyXG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5hY2NvcmRpb24taXRlbS13cmFwcGVyOm5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5hY2NvcmRpb24taXRlbS1jb250ZW50IHtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUZW1wbGF0ZUFic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9Db21wb25lbnRUZW1wbGF0ZUFic3RyYWN0JztcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSBleHRlbmRzIENvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3Qge1xuICAgIGh0bWwoKSB7XG4gICAgICAgIHJldHVybiBgXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taXRlbS13cmFwcGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImFjY29yZGlvbi1pdGVtXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWl0ZW0tdGl0bGUtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImFjY29yZGlvbi1pdGVtLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNsb3QgbmFtZT1cImFjY29yZGlvbi10aXRsZVwiPjwvc2xvdD5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFjY29yZGlvbi1pdGVtLWJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGQ9XCJNMjMzLjQgNDA2LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTkyLTE5MmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMEwyNTYgMzM4LjcgODYuNiAxNjkuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsMTkyIDE5MnpcIi8+PC9zdmc+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWl0ZW0tY29udGVudC13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taXRlbS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PHNsb3QgbmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+PC9zbG90PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdGA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5pdGlhbGl6ZXIgYXMgQ29ubmVjdGlvbkJ1dHRvbkluaXRpYWxpemVyIH0gZnJvbSAnLi9TdHJ1Y3R1cmUvSW5pdGlhbGl6ZXInO1xuZXhwb3J0IHsgQ29ubmVjdGlvbkJ1dHRvbkluaXRpYWxpemVyIH07XG4iLCJleHBvcnQgY2xhc3MgQ29ubmVjdGlvbkJlaGF2aW9yIHtcbiAgICBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlID0gQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICB9XG4gICAgZG8oKSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25CdXR0b24gPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2Uucm9vdC5xdWVyeVNlbGVjdG9yKCcucHJveHktY29ubmVjdC1idXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3RhdHVzTGFiZWwgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2Uucm9vdC5xdWVyeVNlbGVjdG9yKCcucHJveHktc3RhdHVzJyk7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5TdGF0ZUluc3RhbmNlLmdldCgnc3RhdHVzJyk7XG4gICAgICAgIGlmICghY29ubmVjdGlvbkJ1dHRvbiB8fCAhc3RhdHVzTGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCBzdGF0dXMpO1xuICAgICAgICBzdGF0dXNMYWJlbC5pbm5lclRleHQgPSBzdGF0dXNMYWJlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIHN0YXR1cyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vTWFpbi9TdGF0ZSc7XG5pbXBvcnQgeyBCZWhhdmlvcnMgfSBmcm9tICcuL01haW4vQmVoYXZpb3JzJztcbmltcG9ydCB7IEhhbmRsZXJzIH0gZnJvbSAnLi9NYWluL0hhbmRsZXJzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vTWFpbi9FdmVudHMnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuL01haW4vVGVtcGxhdGUnO1xuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSAnLi9NYWluL1N0eWxlcyc7XG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XG4gICAgUHJveHlTb3JhZ2VJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcihQcm94eVNvcmFnZUluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuUHJveHlTb3JhZ2VJbnN0YW5jZSA9IFByb3h5U29yYWdlSW5zdGFuY2U7XG4gICAgfVxuICAgIGNyZWF0ZShodG1sVGFnKSB7XG4gICAgICAgIGNvbnN0IFRlbXBsYXRlSW5zdGFuY2UgPSBuZXcgVGVtcGxhdGUoKTtcbiAgICAgICAgY29uc3QgU3R5bGVzSW5zdGFuY2UgPSBuZXcgU3R5bGVzKCk7XG4gICAgICAgIGNvbnN0IFByb3h5U29yYWdlSW5zdGFuY2UgPSB0aGlzLlByb3h5U29yYWdlSW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBjbGFzcyBDb25uZWN0aW9uQnV0dG9uSFRNTEVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnRIVE1MRWxlbWVudEFic3RyYWN0IHtcbiAgICAgICAgICAgIGh0bWxUYWc7XG4gICAgICAgICAgICBTdGF0ZUluc3RhbmNlO1xuICAgICAgICAgICAgQmVoYXZpb3JzSW5zdGFuY2U7XG4gICAgICAgICAgICBIYW5kbGVyc0luc3RhbmNlO1xuICAgICAgICAgICAgRXZlbnRzSW5zdGFuY2U7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuaHRtbFRhZyA9IGh0bWxUYWc7XG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0ZUluc3RhbmNlID0gbmV3IFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5CZWhhdmlvcnNJbnN0YW5jZSA9IG5ldyBCZWhhdmlvcnModGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5IYW5kbGVyc0luc3RhbmNlID0gbmV3IEhhbmRsZXJzKHRoaXMsIFByb3h5U29yYWdlSW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRzSW5zdGFuY2UgPSBuZXcgRXZlbnRzKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgVGVtcGxhdGVJbnN0YW5jZS5yZW5kZXJUZW1wbGF0ZSh0aGlzLnJvb3QpO1xuICAgICAgICAgICAgICAgIFN0eWxlc0luc3RhbmNlLnJlbmRlclN0eWxlcyh0aGlzLnJvb3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRzSW5zdGFuY2UuaW5pdEV2ZW50cyh0aGlzLnJvb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDb25uZWN0aW9uSGFuZGxlciB7XG4gICAgQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICBQcm94eVN0b3JhZ2VJbnN0YW5jZTtcbiAgICB0aW1lb3V0SUQ7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSwgUHJveHlTdG9yYWdlSW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlID0gQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5Qcm94eVN0b3JhZ2VJbnN0YW5jZSA9IFByb3h5U3RvcmFnZUluc3RhbmNlO1xuICAgICAgICB0aGlzLnRpbWVvdXRJRCA9IGZhbHNlO1xuICAgIH1cbiAgICBoYW5kbGUoZm9yY2VTdGF0dXMpIHtcbiAgICAgICAgY29uc3QgQ29ubmVjdGlvbkJlaGF2aW9ySW5zdGFuY2UgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuQmVoYXZpb3JzSW5zdGFuY2UuZ2V0KCdjb25uZWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IHByb3h5SXRlbSA9IHRoaXMuUHJveHlTdG9yYWdlSW5zdGFuY2UuZ2V0U2VsZWN0ZWRQcm94eSgpO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuU3RhdGVJbnN0YW5jZS5nZXQoJ3N0YXR1cycpO1xuICAgICAgICBpZiAoIWZvcmNlU3RhdHVzICYmIHN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgIGlmICghcHJveHlJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQn9GA0L7QutGB0Lgg0YHQtdGA0LLQtdGAINC90LUg0LLRi9Cx0YDQsNC9Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuU3RhdGVJbnN0YW5jZS5jaGFuZ2UoJ3N0YXR1cycsICdjb25uZWN0aW9uJyk7XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShwcm94eUl0ZW0pO1xuICAgICAgICAgICAgLy8gdG8gZG86IGFkZCByZWFsIGNvbm5lY3Rpb24gY2hlY2tcbiAgICAgICAgICAgIC8vIHRvIGRvOiBhZGQgc2F2ZSBjb25uZWN0aW9uIHN0YXRlIHRvIHN0b3JhZ2VcbiAgICAgICAgICAgIHRoaXMudGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLlN0YXRlSW5zdGFuY2UuY2hhbmdlKCdzdGF0dXMnLCAnY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgQ29ubmVjdGlvbkJlaGF2aW9ySW5zdGFuY2UuZG8oKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLlN0YXRlSW5zdGFuY2UuY2hhbmdlKCdzdGF0dXMnLCAnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShmYWxzZSk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0SUQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIENvbm5lY3Rpb25CZWhhdmlvckluc3RhbmNlLmRvKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFByb3h5Q2hhbmdlSGFuZGxlciB7XG4gICAgQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSA9IEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgfVxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgY29uc3QgQ29ubmVjdGlvbkJlaGF2aW9ySW5zdGFuY2UgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuQmVoYXZpb3JzSW5zdGFuY2UuZ2V0KCdjb25uZWN0aW9uJyk7XG4gICAgICAgIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5TdGF0ZUluc3RhbmNlLmNoYW5nZSgnc3RhdHVzJywgJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICBDb25uZWN0aW9uQmVoYXZpb3JJbnN0YW5jZS5kbygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudEluaXRpYWxpemVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudEluaXRpYWxpemVyQWJzdHJhY3QnO1xuaW1wb3J0IHsgRmFjdG9yeSB9IGZyb20gJy4vRmFjdG9yeSc7XG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6ZXIgZXh0ZW5kcyBDb21wb25lbnRJbml0aWFsaXplckFic3RyYWN0IHtcbiAgICBGYWN0b3J5SW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoUHJveHlTb3JhZ2VJbnN0YW5jZSkge1xuICAgICAgICBzdXBlcignY3VzdG9tLWNvbm5lY3Rpb24tYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuRmFjdG9yeUluc3RhbmNlID0gbmV3IEZhY3RvcnkoUHJveHlTb3JhZ2VJbnN0YW5jZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0ltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0JztcbmltcG9ydCB7IENvbm5lY3Rpb25CZWhhdmlvciB9IGZyb20gJy4uL0JlaGF2aW9ycy9Db25uZWN0aW9uQmVoYXZpb3InO1xuZXhwb3J0IGNsYXNzIEJlaGF2aW9ycyBleHRlbmRzIEltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3RvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb246IG5ldyBDb25uZWN0aW9uQmVoYXZpb3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50RXZlbnRzQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudEV2ZW50c0Fic3RyYWN0JztcbmV4cG9ydCBjbGFzcyBFdmVudHMgZXh0ZW5kcyBDb21wb25lbnRFdmVudHNBYnN0cmFjdCB7XG4gICAgaW5pdEV2ZW50cyhyb290KSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25CdXR0b24gPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5wcm94eS1jb25uZWN0LWJ1dHRvbicpO1xuICAgICAgICBpZiAoY29ubmVjdGlvbkJ1dHRvbikge1xuICAgICAgICAgICAgY29ubmVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgQ29ubmVjdGlvbkhhbmRsZXJJbnN0YW5jZSA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5IYW5kbGVyc0luc3RhbmNlLmdldCgnY29ubmVjdGlvbicpO1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25IYW5kbGVySW5zdGFuY2UuaGFuZGxlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm94eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjdXN0b20tcHJveHktbGlzdCcpO1xuICAgICAgICBpZiAocHJveHlMaXN0KSB7XG4gICAgICAgICAgICBwcm94eUxpc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJveHlMaXN0Q2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBQcm94eUNoYW5nZUhhbmRsZXJJbnN0YW5jZSA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5IYW5kbGVyc0luc3RhbmNlLmdldCgncHJveHlDaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICBQcm94eUNoYW5nZUhhbmRsZXJJbnN0YW5jZS5oYW5kbGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0ltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0JztcbmltcG9ydCB7IENvbm5lY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi4vSGFuZGxlcnMvQ29ubmVjdGlvbkhhbmRsZXInO1xuaW1wb3J0IHsgUHJveHlDaGFuZ2VIYW5kbGVyIH0gZnJvbSAnLi4vSGFuZGxlcnMvUHJveHlDaGFuZ2VIYW5kbGVyJztcbmV4cG9ydCBjbGFzcyBIYW5kbGVycyBleHRlbmRzIEltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3RvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLCBQcm94eVNvcmFnZUluc3RhbmNlKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb246IG5ldyBDb25uZWN0aW9uSGFuZGxlcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLCBQcm94eVNvcmFnZUluc3RhbmNlKSxcbiAgICAgICAgICAgIHByb3h5Q2hhbmdlOiBuZXcgUHJveHlDaGFuZ2VIYW5kbGVyKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE11dGFibGVDb250YWluZXJBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvTXV0YWJsZUNvbnRhaW5lckFic3RyYWN0JztcbmV4cG9ydCBjbGFzcyBTdGF0ZSBleHRlbmRzIE11dGFibGVDb250YWluZXJBYnN0cmFjdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Rpc2Nvbm5lY3RlZCdcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50U3R5bGVzQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudFN0eWxlc0Fic3RyYWN0JztcbmV4cG9ydCBjbGFzcyBTdHlsZXMgZXh0ZW5kcyBDb21wb25lbnRTdHlsZXNBYnN0cmFjdCB7XG4gICAgY3NzKCkge1xuICAgICAgICByZXR1cm4gYFxyXG5cdFx0XHQ6aG9zdCB7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCoge1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1jb25uZWN0LWJ1dHRvbiB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0d2lkdGg6IDkycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA5MnB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnByb3h5LWNvbm5lY3QtYnV0dG9uOmJlZm9yZSB7XHJcblx0XHRcdFx0Y29udGVudDogJyc7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHdpZHRoOiA4NXB4O1xyXG5cdFx0XHRcdGhlaWdodDogODVweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdFx0XHRcdGJvcmRlcjogNHB4IGRvdHRlZCB2YXIoLS10ZXh0Q29sb3IpO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1jb25uZWN0LWJ1dHRvbiBzdmcge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdHdpZHRoOiA2MHB4O1xyXG5cdFx0XHRcdGhlaWdodDogNjBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnByb3h5LWNvbm5lY3QtYnV0dG9uIHN2ZyBwYXRoIHtcclxuXHRcdFx0XHRmaWxsOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1jb25uZWN0LWJ1dHRvbltkYXRhLXN0YXR1cz1cImNvbm5lY3Rpb25cIl06YmVmb3JlIHtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XHJcblx0XHRcdFx0YW5pbWF0aW9uOiByb3RhdGUgNXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucHJveHktY29ubmVjdC1idXR0b25bZGF0YS1zdGF0dXM9XCJjb25uZWN0ZWRcIl06YmVmb3JlIHtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnByb3h5LWNvbm5lY3QtYnV0dG9uW2RhdGEtc3RhdHVzPVwiY29ubmVjdGlvblwiXSBzdmcgcGF0aCB7XHJcblx0XHRcdFx0ZmlsbDogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnByb3h5LWNvbm5lY3QtYnV0dG9uW2RhdGEtc3RhdHVzPVwiY29ubmVjdGVkXCJdIHN2ZyBwYXRoIHtcclxuXHRcdFx0XHRmaWxsOiB2YXIoLS1ncmVlbik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdEBrZXlmcmFtZXMgcm90YXRlIHtcclxuXHRcdFx0XHRmcm9tIHtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0byB7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnByb3h5LWNvbm5lY3Rpb24tYnV0dG9uLXdyYXBwZXIge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1jb25uZWN0aW9uLWluZm8ge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRgO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgQ29tcG9uZW50VGVtcGxhdGVBYnN0cmFjdCB7XG4gICAgaHRtbCgpIHtcbiAgICAgICAgcmV0dXJuIGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cInByb3h5LWNvbm5lY3Rpb24td3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1jb25uZWN0aW9uLWJ1dHRvbi13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwicHJveHktY29ubmVjdC1idXR0b25cIiBkYXRhLXN0YXR1cz1cImRpc2Nvbm5lY3RlZFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTI4OCAzMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDIyNGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMjI0ek0xNDMuNSAxMjAuNmMxMy42LTExLjMgMTUuNC0zMS41IDQuMS00NS4xcy0zMS41LTE1LjQtNDUuMS00LjFDNDkuNyAxMTUuNCAxNiAxODEuOCAxNiAyNTZjMCAxMzIuNSAxMDcuNSAyNDAgMjQwIDI0MHMyNDAtMTA3LjUgMjQwLTI0MGMwLTc0LjItMzMuOC0xNDAuNi04Ni42LTE4NC42Yy0xMy42LTExLjMtMzMuOC05LjQtNDUuMSA0LjFzLTkuNCAzMy44IDQuMSA0NS4xYzM4LjkgMzIuMyA2My41IDgxIDYzLjUgMTM1LjRjMCA5Ny4yLTc4LjggMTc2LTE3NiAxNzZzLTE3Ni03OC44LTE3Ni0xNzZjMC01NC40IDI0LjctMTAzLjEgNjMuNS0xMzUuNHpcIj48L3BhdGg+PC9zdmc+XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktY29ubmVjdGlvbi1pbmZvXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInByb3h5LXN0YXR1c1wiIGRhdGEtZGlzY29ubmVjdGVkPVwi0J7RgtC60LvRjtGH0LXQvdC+XCIgZGF0YS1jb25uZWN0ZWQ9XCLQn9C+0LTQutC70Y7Rh9C10L3QvlwiIGRhdGEtY29ubmVjdGlvbj1cItCf0L7QtNC60LvRjtGH0LXQvdC40LUuLi5cIj7QntGC0LrQu9GO0YfQtdC90L48L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbml0aWFsaXplciBhcyBFcnJvckluaXRpYWxpemVyIH0gZnJvbSAnLi9TdHJ1Y3R1cmUvSW5pdGlhbGl6ZXInO1xuZXhwb3J0IHsgRXJyb3JJbml0aWFsaXplciB9O1xuIiwiZXhwb3J0IGNsYXNzIENsb3NlQmVoYXZpb3Ige1xuICAgIEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UgPSBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgIH1cbiAgICBkbygpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5yb290Lmhvc3Q7XG4gICAgICAgIHdyYXBwZXIuc3R5bGVbJ3RyYW5zaXRpb24nXSA9ICcwLjVzJztcbiAgICAgICAgd3JhcHBlci5zdHlsZVsnb3BhY2l0eSddID0gJzAnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vTWFpbi9TdGF0ZSc7XG5pbXBvcnQgeyBCZWhhdmlvcnMgfSBmcm9tICcuL01haW4vQmVoYXZpb3JzJztcbmltcG9ydCB7IEhhbmRsZXJzIH0gZnJvbSAnLi9NYWluL0hhbmRsZXJzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vTWFpbi9FdmVudHMnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuL01haW4vVGVtcGxhdGUnO1xuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSAnLi9NYWluL1N0eWxlcyc7XG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XG4gICAgY3JlYXRlKGh0bWxUYWcpIHtcbiAgICAgICAgY29uc3QgVGVtcGxhdGVJbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZSgpO1xuICAgICAgICBjb25zdCBTdHlsZXNJbnN0YW5jZSA9IG5ldyBTdHlsZXMoKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzIEVycm9ySFRNTEVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnRIVE1MRWxlbWVudEFic3RyYWN0IHtcbiAgICAgICAgICAgIGh0bWxUYWc7XG4gICAgICAgICAgICBTdGF0ZUluc3RhbmNlO1xuICAgICAgICAgICAgQmVoYXZpb3JzSW5zdGFuY2U7XG4gICAgICAgICAgICBIYW5kbGVyc0luc3RhbmNlO1xuICAgICAgICAgICAgRXZlbnRzSW5zdGFuY2U7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuaHRtbFRhZyA9IGh0bWxUYWc7XG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0ZUluc3RhbmNlID0gbmV3IFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5CZWhhdmlvcnNJbnN0YW5jZSA9IG5ldyBCZWhhdmlvcnModGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5IYW5kbGVyc0luc3RhbmNlID0gbmV3IEhhbmRsZXJzKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRzSW5zdGFuY2UgPSBuZXcgRXZlbnRzKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgVGVtcGxhdGVJbnN0YW5jZS5yZW5kZXJUZW1wbGF0ZSh0aGlzLnJvb3QpO1xuICAgICAgICAgICAgICAgIFN0eWxlc0luc3RhbmNlLnJlbmRlclN0eWxlcyh0aGlzLnJvb3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRzSW5zdGFuY2UuaW5pdEV2ZW50cyh0aGlzLnJvb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDbG9zZUhhbmRsZXIge1xuICAgIEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UgPSBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgIH1cbiAgICBoYW5kbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuU3RhdGVJbnN0YW5jZS5nZXQoJ2Nsb3NlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgQ2xvc2VCZWhhdmlvckluc3RhbmNlID0gdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLkJlaGF2aW9yc0luc3RhbmNlLmdldCgnY2xvc2UnKTtcbiAgICAgICAgQ2xvc2VCZWhhdmlvckluc3RhbmNlLmRvKCk7XG4gICAgICAgIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5TdGF0ZUluc3RhbmNlLmNoYW5nZSgnY2xvc2VkJywgdHJ1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50SW5pdGlhbGl6ZXJBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SW5pdGlhbGl6ZXJBYnN0cmFjdCc7XG5pbXBvcnQgeyBGYWN0b3J5IH0gZnJvbSAnLi9GYWN0b3J5JztcbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplciBleHRlbmRzIENvbXBvbmVudEluaXRpYWxpemVyQWJzdHJhY3Qge1xuICAgIEZhY3RvcnlJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2N1c3RvbS1lcnJvcicpO1xuICAgICAgICB0aGlzLkZhY3RvcnlJbnN0YW5jZSA9IG5ldyBGYWN0b3J5KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0ltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0JztcbmltcG9ydCB7IENsb3NlQmVoYXZpb3IgfSBmcm9tICcuLi9CZWhhdmlvcnMvQ2xvc2VCZWhhdmlvcic7XG5leHBvcnQgY2xhc3MgQmVoYXZpb3JzIGV4dGVuZHMgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgY2xvc2U6IG5ldyBDbG9zZUJlaGF2aW9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudEV2ZW50c0Fic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9Db21wb25lbnRFdmVudHNBYnN0cmFjdCc7XG5leHBvcnQgY2xhc3MgRXZlbnRzIGV4dGVuZHMgQ29tcG9uZW50RXZlbnRzQWJzdHJhY3Qge1xuICAgIGluaXRFdmVudHMocm9vdCkge1xuICAgICAgICBjb25zdCBlcnJvcldyYXBwZXIgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci13cmFwcGVyJyk7XG4gICAgICAgIGlmIChlcnJvcldyYXBwZXIpIHtcbiAgICAgICAgICAgIGVycm9yV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgQ2xvc2VIYW5kbGVySW5zdGFuY2UgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuSGFuZGxlcnNJbnN0YW5jZS5nZXQoJ2Nsb3NlJyk7XG4gICAgICAgICAgICAgICAgQ2xvc2VIYW5kbGVySW5zdGFuY2UuaGFuZGxlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9JbW11dGFibGVDb250YWluZXJBYnN0cmFjdCc7XG5pbXBvcnQgeyBDbG9zZUhhbmRsZXIgfSBmcm9tICcuLi9IYW5kbGVycy9DbG9zZUhhbmRsZXInO1xuZXhwb3J0IGNsYXNzIEhhbmRsZXJzIGV4dGVuZHMgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgY2xvc2U6IG5ldyBDbG9zZUhhbmRsZXIoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9NdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFN0YXRlIGV4dGVuZHMgTXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgY2xvc2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRTdHlsZXNBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50U3R5bGVzQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFN0eWxlcyBleHRlbmRzIENvbXBvbmVudFN0eWxlc0Fic3RyYWN0IHtcbiAgICBjc3MoKSB7XG4gICAgICAgIHJldHVybiBgXHJcblx0XHRcdDpob3N0IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdDpob3N0KDpmaXJzdC1jaGlsZCkge1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDM1cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdDpob3N0KDpsYXN0LWNoaWxkKSB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzVweCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQqIHtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuZXJyb3Itd3JhcHBlciB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXJlZCk7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tUcmFuc3BhcmVudDIpO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1yZWQpO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdFx0cGFkZGluZzogMjBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmVycm9yLWNvbnRlbnQge1xyXG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5lcnJvci1jbG9zZSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogNXB4O1xyXG5cdFx0XHRcdHJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5lcnJvci1jbG9zZSBzdmcge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmVycm9yLWNsb3NlIHN2ZyBwYXRoIHtcclxuXHRcdFx0XHRmaWxsOiB2YXIoLS1yZWQpO1xyXG5cdFx0XHR9XHJcblx0XHRgO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgQ29tcG9uZW50VGVtcGxhdGVBYnN0cmFjdCB7XG4gICAgaHRtbCgpIHtcbiAgICAgICAgcmV0dXJuIGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiZXJyb3ItY2xvc2VcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj48cGF0aCBkPVwiTTM0Mi42IDE1MC42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwTDE5MiAyMTAuNyA4Ni42IDEwNS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0wxNDYuNyAyNTYgNDEuNCAzNjEuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMEwxOTIgMzAxLjMgMjk3LjQgNDA2LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0wyMzcuMyAyNTYgMzQyLjYgMTUwLjZ6XCIvPjwvc3ZnPjwvYnV0dG9uPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8c2xvdD48L3Nsb3Q+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbml0aWFsaXplciBhcyBQYWdlSW5pdGlhbGl6ZXIgfSBmcm9tICcuL1N0cnVjdHVyZS9Jbml0aWFsaXplcic7XG5leHBvcnQgeyBQYWdlSW5pdGlhbGl6ZXIgfTtcbiIsImV4cG9ydCBjbGFzcyBDbG9zZUJlaGF2aW9yIHtcbiAgICBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlID0gQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICB9XG4gICAgZG8oKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gJ3BhZ2UtYWN0aXZlJztcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5yb290LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcbiAgICAgICAgaWYgKCF3cmFwcGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLlN0YXRlSW5zdGFuY2UuY2hhbmdlKCdvcGVuJywgZmFsc2UpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBPcGVuQmVoYXZpb3Ige1xuICAgIEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UgPSBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgIH1cbiAgICBkbygpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSAncGFnZS1hY3RpdmUnO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLnJvb3QucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcucGFnZS1jb250ZW50Jyk7XG4gICAgICAgIGlmICghd3JhcHBlciB8fCAhY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG4gICAgICAgIGNvbnRlbnQuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5TdGF0ZUluc3RhbmNlLmNoYW5nZSgnb3BlbicsIHRydWUpO1xuICAgICAgICBjb25zdCByb3V0ZSA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5yb290Lmhvc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdXRlJyk7XG4gICAgICAgIGlmIChyb3V0ZSkge1xuICAgICAgICAgICAgY29uc3QgTGlzdENoYW5nZUV2ZW50SW5zdGFuY2UgPSBuZXcgQ3VzdG9tRXZlbnQocm91dGUgKyAnT3BlbicsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5yb290LmRpc3BhdGNoRXZlbnQoTGlzdENoYW5nZUV2ZW50SW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vTWFpbi9TdGF0ZSc7XG5pbXBvcnQgeyBIYW5kbGVycyB9IGZyb20gJy4vTWFpbi9IYW5kbGVycyc7XG5pbXBvcnQgeyBCZWhhdmlvcnMgfSBmcm9tICcuL01haW4vQmVoYXZpb3JzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vTWFpbi9FdmVudHMnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuL01haW4vVGVtcGxhdGUnO1xuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSAnLi9NYWluL1N0eWxlcyc7XG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XG4gICAgUm91dGVySW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoUm91dGVySW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5Sb3V0ZXJJbnN0YW5jZSA9IFJvdXRlckluc3RhbmNlO1xuICAgIH1cbiAgICBjcmVhdGUoaHRtbFRhZykge1xuICAgICAgICBjb25zdCBUZW1wbGF0ZUluc3RhbmNlID0gbmV3IFRlbXBsYXRlKCk7XG4gICAgICAgIGNvbnN0IFN0eWxlc0luc3RhbmNlID0gbmV3IFN0eWxlcygpO1xuICAgICAgICBjb25zdCBSb3V0ZXJJbnN0YW5jZSA9IHRoaXMuUm91dGVySW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBjbGFzcyBQYWdlSFRNTEVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnRIVE1MRWxlbWVudEFic3RyYWN0IHtcbiAgICAgICAgICAgIGh0bWxUYWc7XG4gICAgICAgICAgICBTdGF0ZUluc3RhbmNlO1xuICAgICAgICAgICAgSGFuZGxlcnNJbnN0YW5jZTtcbiAgICAgICAgICAgIEJlaGF2aW9yc0luc3RhbmNlO1xuICAgICAgICAgICAgRXZlbnRzSW5zdGFuY2U7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuaHRtbFRhZyA9IGh0bWxUYWc7XG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0ZUluc3RhbmNlID0gbmV3IFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5IYW5kbGVyc0luc3RhbmNlID0gbmV3IEhhbmRsZXJzKHRoaXMsIFJvdXRlckluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLkJlaGF2aW9yc0luc3RhbmNlID0gbmV3IEJlaGF2aW9ycyh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50c0luc3RhbmNlID0gbmV3IEV2ZW50cyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlSW5zdGFuY2UucmVuZGVyVGVtcGxhdGUodGhpcy5yb290KTtcbiAgICAgICAgICAgICAgICBTdHlsZXNJbnN0YW5jZS5yZW5kZXJTdHlsZXModGhpcy5yb290KTtcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50c0luc3RhbmNlLmluaXRFdmVudHModGhpcy5yb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSW5pdEhhbmRsZXIge1xuICAgIEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgUm91dGVySW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSwgUm91dGVySW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlID0gQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5Sb3V0ZXJJbnN0YW5jZSA9IFJvdXRlckluc3RhbmNlO1xuICAgIH1cbiAgICBoYW5kbGUoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLnJvb3QuaG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm91dGUnKTtcbiAgICAgICAgaWYgKCFyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuUm91dGVySW5zdGFuY2UucmVnaXN0ZXIocm91dGUsIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50SW5pdGlhbGl6ZXJBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SW5pdGlhbGl6ZXJBYnN0cmFjdCc7XG5pbXBvcnQgeyBGYWN0b3J5IH0gZnJvbSAnLi9GYWN0b3J5JztcbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplciBleHRlbmRzIENvbXBvbmVudEluaXRpYWxpemVyQWJzdHJhY3Qge1xuICAgIEZhY3RvcnlJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcihSb3V0ZXJJbnN0YW5jZSkge1xuICAgICAgICBzdXBlcignY3VzdG9tLXBhZ2UnKTtcbiAgICAgICAgdGhpcy5GYWN0b3J5SW5zdGFuY2UgPSBuZXcgRmFjdG9yeShSb3V0ZXJJbnN0YW5jZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0ltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0JztcbmltcG9ydCB7IE9wZW5CZWhhdmlvciB9IGZyb20gJy4uL0JlaGF2aW9ycy9PcGVuQmVoYXZpb3InO1xuaW1wb3J0IHsgQ2xvc2VCZWhhdmlvciB9IGZyb20gJy4uL0JlaGF2aW9ycy9DbG9zZUJlaGF2aW9yJztcbmV4cG9ydCBjbGFzcyBCZWhhdmlvcnMgZXh0ZW5kcyBJbW11dGFibGVDb250YWluZXJBYnN0cmFjdCB7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBvcGVuOiBuZXcgT3BlbkJlaGF2aW9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpLFxuICAgICAgICAgICAgY2xvc2U6IG5ldyBDbG9zZUJlaGF2aW9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRFdmVudHNBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50RXZlbnRzQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIENvbXBvbmVudEV2ZW50c0Fic3RyYWN0IHtcbiAgICBpbml0RXZlbnRzKHJvb3QpIHtcbiAgICAgICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdpbml0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IEluaXRIYW5kbGVySW5zdGFuY2UgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuSGFuZGxlcnNJbnN0YW5jZS5nZXQoJ2luaXQnKTtcbiAgICAgICAgICAgIEluaXRIYW5kbGVySW5zdGFuY2UuaGFuZGxlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9JbW11dGFibGVDb250YWluZXJBYnN0cmFjdCc7XG5pbXBvcnQgeyBJbml0SGFuZGxlciB9IGZyb20gJy4uL0hhbmRsZXJzL0luaXRIYW5kbGVyJztcbmV4cG9ydCBjbGFzcyBIYW5kbGVycyBleHRlbmRzIEltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3RvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLCBSb3V0ZXJJbnN0YW5jZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBpbml0OiBuZXcgSW5pdEhhbmRsZXIoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSwgUm91dGVySW5zdGFuY2UpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL011dGFibGVDb250YWluZXJBYnN0cmFjdCc7XG5leHBvcnQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBNdXRhYmxlQ29udGFpbmVyQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRTdHlsZXNBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50U3R5bGVzQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFN0eWxlcyBleHRlbmRzIENvbXBvbmVudFN0eWxlc0Fic3RyYWN0IHtcbiAgICBjc3MoKSB7XG4gICAgICAgIHJldHVybiBgXHJcblx0XHRcdCoge1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdDpob3N0IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcblx0XHRcdFx0d2lkdGg6IDVweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucGFnZS13cmFwcGVyIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiAwLjM1cztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnBhZ2Utd3JhcHBlci5wYWdlLWFjdGl2ZSB7XHJcblx0XHRcdFx0ei1pbmRleDogMjtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IG5vbmU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wYWdlIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucGFnZS1jb250ZW50LW1haW4td3JhcHBlciB7XHJcblx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuICAgIFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wYWdlLWZvb3RlciB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0Ym90dG9tOiA1MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucGFnZS1oZWFkZXIge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDIwcHggMzVweCAxNXB4IDM1cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tUcmFuc3BhcmVudDEpO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDU1cHggMjBweCAxMDBweCAyMHB4O1xyXG5cdFx0XHRcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucGFnZS1jb250ZW50IHtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0b3ZlcmZsb3c6IGF1dG87XHJcblx0XHRcdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRgO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgQ29tcG9uZW50VGVtcGxhdGVBYnN0cmFjdCB7XG4gICAgaHRtbCgpIHtcbiAgICAgICAgcmV0dXJuIGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cInBhZ2Utd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50LW1haW4td3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzbG90IG5hbWU9XCJjb250ZW50XCI+PC9zbG90PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbml0aWFsaXplciBhcyBQcm94eUxpc3RJbml0aWFsaXplciB9IGZyb20gJy4vU3RydWN0dXJlL0luaXRpYWxpemVyJztcbmV4cG9ydCB7IFByb3h5TGlzdEluaXRpYWxpemVyIH07XG4iLCJleHBvcnQgY2xhc3MgSW5zZXJ0UHJveHlJdGVtc0JlaGF2aW9yIHtcbiAgICBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgIFByb3h5SXRlbVRlbXBsYXRlSW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSwgUHJveHlJdGVtVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UgPSBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgICAgICB0aGlzLlByb3h5SXRlbVRlbXBsYXRlSW5zdGFuY2UgPSBQcm94eUl0ZW1UZW1wbGF0ZUluc3RhbmNlO1xuICAgIH1cbiAgICBkbyhhcmdzKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2Uucm9vdC5xdWVyeVNlbGVjdG9yKCcucHJveHktbGlzdCcpO1xuICAgICAgICBpZiAoIXdyYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhcmdzLnByb3h5TGlzdCkge1xuICAgICAgICAgICAgY29uc3QgcHJveHlJdGVtID0gYXJncy5wcm94eUxpc3Rba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLlByb3h5SXRlbVRlbXBsYXRlSW5zdGFuY2UucmVuZGVyVGVtcGxhdGUod3JhcHBlcik7XG4gICAgICAgICAgICBjb25zdCBpcFdyYXBwZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm94eS1saXN0LWl0ZW0taXAnKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVXcmFwcGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJveHktbGlzdC1pdGVtLXR5cGUnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVXcmFwcGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJveHktbGlzdC1pdGVtLW5hbWUgc3BhbicpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpZiAoIWlwV3JhcHBlciB8fCAhdHlwZVdyYXBwZXIgfHwgIW5hbWVXcmFwcGVyIHx8ICFpbnB1dCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlwV3JhcHBlci5pbm5lckhUTUwgPSBwcm94eUl0ZW0uaXAgKyAnOicgKyBwcm94eUl0ZW0ucG9ydDtcbiAgICAgICAgICAgIHR5cGVXcmFwcGVyLmlubmVySFRNTCA9IHByb3h5SXRlbS50eXBlO1xuICAgICAgICAgICAgbmFtZVdyYXBwZXIuaW5uZXJIVE1MID0gcHJveHlJdGVtLm5hbWU7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHByb3h5SXRlbS5pZC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxlY3RlZElEID0gMDtcbiAgICAgICAgaWYgKGFyZ3Muc2VsZWN0ZWRQcm94eSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignaW5wdXRbdmFsdWU9XCInICsgYXJncy5zZWxlY3RlZFByb3h5LmlkICsgJ1wiXScpO1xuICAgICAgICAgICAgc2VsZWN0ZWRJRCA9IGFyZ3Muc2VsZWN0ZWRQcm94eS5pZDtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm94eS1saXN0LWl0ZW0td3JhcHBlcjpmaXJzdC1jaGlsZCBpbnB1dCcpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSUQgPSBwYXJzZUludChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuU3RhdGVJbnN0YW5jZS5jaGFuZ2UoJ3NlbGVjdGVkJywgc2VsZWN0ZWRJRCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vTWFpbi9TdGF0ZSc7XG5pbXBvcnQgeyBCZWhhdmlvcnMgfSBmcm9tICcuL01haW4vQmVoYXZpb3JzJztcbmltcG9ydCB7IEhhbmRsZXJzIH0gZnJvbSAnLi9NYWluL0hhbmRsZXJzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vTWFpbi9FdmVudHMnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuL01haW4vVGVtcGxhdGUnO1xuaW1wb3J0IHsgUHJveHlJdGVtVGVtcGxhdGUgfSBmcm9tICcuL01haW4vUHJveHlJdGVtVGVtcGxhdGUnO1xuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSAnLi9NYWluL1N0eWxlcyc7XG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XG4gICAgUHJveHlTb3JhZ2VJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcihQcm94eVNvcmFnZUluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuUHJveHlTb3JhZ2VJbnN0YW5jZSA9IFByb3h5U29yYWdlSW5zdGFuY2U7XG4gICAgfVxuICAgIGNyZWF0ZShodG1sVGFnKSB7XG4gICAgICAgIGNvbnN0IFRlbXBsYXRlSW5zdGFuY2UgPSBuZXcgVGVtcGxhdGUoKTtcbiAgICAgICAgY29uc3QgUHJveHlJdGVtVGVtcGxhdGVJbnN0YW5jZSA9IG5ldyBQcm94eUl0ZW1UZW1wbGF0ZSgpO1xuICAgICAgICBjb25zdCBTdHlsZXNJbnN0YW5jZSA9IG5ldyBTdHlsZXMoKTtcbiAgICAgICAgY29uc3QgUHJveHlTb3JhZ2VJbnN0YW5jZSA9IHRoaXMuUHJveHlTb3JhZ2VJbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGNsYXNzIFByb3h5TGlzdEhUTUxFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCB7XG4gICAgICAgICAgICBodG1sVGFnO1xuICAgICAgICAgICAgU3RhdGVJbnN0YW5jZTtcbiAgICAgICAgICAgIEJlaGF2aW9yc0luc3RhbmNlO1xuICAgICAgICAgICAgSGFuZGxlcnNJbnN0YW5jZTtcbiAgICAgICAgICAgIEV2ZW50c0luc3RhbmNlO1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxUYWcgPSBodG1sVGFnO1xuICAgICAgICAgICAgICAgIHRoaXMuU3RhdGVJbnN0YW5jZSA9IG5ldyBTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuQmVoYXZpb3JzSW5zdGFuY2UgPSBuZXcgQmVoYXZpb3JzKHRoaXMsIFByb3h5SXRlbVRlbXBsYXRlSW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuSGFuZGxlcnNJbnN0YW5jZSA9IG5ldyBIYW5kbGVycyh0aGlzLCBQcm94eVNvcmFnZUluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50c0luc3RhbmNlID0gbmV3IEV2ZW50cyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlSW5zdGFuY2UucmVuZGVyVGVtcGxhdGUodGhpcy5yb290KTtcbiAgICAgICAgICAgICAgICBTdHlsZXNJbnN0YW5jZS5yZW5kZXJTdHlsZXModGhpcy5yb290KTtcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50c0luc3RhbmNlLmluaXRFdmVudHModGhpcy5yb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ2hhbmdlUHJveHlIYW5kbGVyIHtcbiAgICBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgIFByb3h5U29yYWdlSW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSwgUHJveHlTb3JhZ2VJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UgPSBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgICAgICB0aGlzLlByb3h5U29yYWdlSW5zdGFuY2UgPSBQcm94eVNvcmFnZUluc3RhbmNlO1xuICAgIH1cbiAgICBoYW5kbGUoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2Uucm9vdC5xdWVyeVNlbGVjdG9yKCcucHJveHktbGlzdC1pdGVtLXdyYXBwZXIgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChpdGVtLnZhbHVlKTtcbiAgICAgICAgdGhpcy5Qcm94eVNvcmFnZUluc3RhbmNlLnNldFNlbGVjdGVkUHJveHkoaWQpO1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuU3RhdGVJbnN0YW5jZS5jaGFuZ2UoJ3NlbGVjdGVkJywgaWQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBJbml0SGFuZGxlciB7XG4gICAgQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICBQcm94eVNvcmFnZUluc3RhbmNlO1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UsIFByb3h5U29yYWdlSW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlID0gQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5Qcm94eVNvcmFnZUluc3RhbmNlID0gUHJveHlTb3JhZ2VJbnN0YW5jZTtcbiAgICB9XG4gICAgaGFuZGxlKCkge1xuICAgICAgICBjb25zdCBJbnNlcnRQcm94eUl0ZW1CZWhhdmlvckluc3RhbmNlID0gdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLkJlaGF2aW9yc0luc3RhbmNlLmdldCgnaW5zZXJ0UHJveHlJdGVtcycpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFByb3h5ID0gdGhpcy5Qcm94eVNvcmFnZUluc3RhbmNlLmdldFNlbGVjdGVkUHJveHkoKTtcbiAgICAgICAgY29uc3QgcHJveHlJdGVtcyA9IHRoaXMuUHJveHlTb3JhZ2VJbnN0YW5jZS5nZXRBbGwoKTtcbiAgICAgICAgSW5zZXJ0UHJveHlJdGVtQmVoYXZpb3JJbnN0YW5jZS5kbyh7XG4gICAgICAgICAgICBwcm94eUxpc3Q6IHByb3h5SXRlbXMsXG4gICAgICAgICAgICBzZWxlY3RlZFByb3h5OiBzZWxlY3RlZFByb3h5XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLlByb3h5U29yYWdlSW5zdGFuY2Uuc2V0U2VsZWN0ZWRQcm94eSh0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuU3RhdGVJbnN0YW5jZS5nZXQoJ3NlbGVjdGVkJykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudEluaXRpYWxpemVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudEluaXRpYWxpemVyQWJzdHJhY3QnO1xuaW1wb3J0IHsgRmFjdG9yeSB9IGZyb20gJy4vRmFjdG9yeSc7XG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6ZXIgZXh0ZW5kcyBDb21wb25lbnRJbml0aWFsaXplckFic3RyYWN0IHtcbiAgICBGYWN0b3J5SW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoUHJveHlTb3JhZ2VJbnN0YW5jZSkge1xuICAgICAgICBzdXBlcignY3VzdG9tLXByb3h5LWxpc3QnKTtcbiAgICAgICAgdGhpcy5GYWN0b3J5SW5zdGFuY2UgPSBuZXcgRmFjdG9yeShQcm94eVNvcmFnZUluc3RhbmNlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbW11dGFibGVDb250YWluZXJBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QnO1xuaW1wb3J0IHsgSW5zZXJ0UHJveHlJdGVtc0JlaGF2aW9yIH0gZnJvbSAnLi4vQmVoYXZpb3JzL0luc2VydFByb3h5SXRlbXNCZWhhdmlvcic7XG5leHBvcnQgY2xhc3MgQmVoYXZpb3JzIGV4dGVuZHMgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UsIFByb3h5SXRlbVRlbXBsYXRlSW5zdGFuY2UpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgaW5zZXJ0UHJveHlJdGVtczogbmV3IEluc2VydFByb3h5SXRlbXNCZWhhdmlvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLCBQcm94eUl0ZW1UZW1wbGF0ZUluc3RhbmNlKVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRFdmVudHNBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50RXZlbnRzQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIENvbXBvbmVudEV2ZW50c0Fic3RyYWN0IHtcbiAgICBpbml0RXZlbnRzKHJvb3QpIHtcbiAgICAgICAgY29uc3QgcHJveHlMaXN0ID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcucHJveHktbGlzdCcpO1xuICAgICAgICBpZiAocHJveHlMaXN0KSB7XG4gICAgICAgICAgICBwcm94eUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBDaGFuZ2VQcm94eUhhbmRsZXJJbnN0YW5jZSA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5IYW5kbGVyc0luc3RhbmNlLmdldCgnY2hhbmdlUHJveHknKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgTGlzdENoYW5nZUV2ZW50SW5zdGFuY2UgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Byb3h5TGlzdENoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogcGFyc2VJbnQoZWxlbWVudC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBDaGFuZ2VQcm94eUhhbmRsZXJJbnN0YW5jZS5oYW5kbGUoKTtcbiAgICAgICAgICAgICAgICByb290LmRpc3BhdGNoRXZlbnQoTGlzdENoYW5nZUV2ZW50SW5zdGFuY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbW11dGFibGVDb250YWluZXJBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QnO1xuaW1wb3J0IHsgSW5pdEhhbmRsZXIgfSBmcm9tICcuLi9IYW5kbGVycy9Jbml0SGFuZGxlcic7XG5pbXBvcnQgeyBDaGFuZ2VQcm94eUhhbmRsZXIgfSBmcm9tICcuLi9IYW5kbGVycy9DaGFuZ2VQcm94eUhhbmRsZXInO1xuZXhwb3J0IGNsYXNzIEhhbmRsZXJzIGV4dGVuZHMgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UsIFByb3h5U29yYWdlSW5zdGFuY2UpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgaW5pdDogbmV3IEluaXRIYW5kbGVyKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UsIFByb3h5U29yYWdlSW5zdGFuY2UpLFxuICAgICAgICAgICAgY2hhbmdlUHJveHk6IG5ldyBDaGFuZ2VQcm94eUhhbmRsZXIoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSwgUHJveHlTb3JhZ2VJbnN0YW5jZSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VGVtcGxhdGVBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50VGVtcGxhdGVBYnN0cmFjdCc7XG5leHBvcnQgY2xhc3MgUHJveHlJdGVtVGVtcGxhdGUgZXh0ZW5kcyBDb21wb25lbnRUZW1wbGF0ZUFic3RyYWN0IHtcbiAgICBodG1sKCkge1xuICAgICAgICByZXR1cm4gYFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktbGlzdC1pdGVtLXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktbGlzdC1pdGVtXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktbGlzdC1pdGVtLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb3h5LWxpc3QtaXRlbS1kYXRhXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwcm94eS1saXN0LWl0ZW0tdHlwZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInByb3h5LWxpc3QtaXRlbS1pcFwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1saXN0LWl0ZW0tbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1saXN0LWl0ZW0tY2hlY2tib3gtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByb3h5SXRlbVwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL011dGFibGVDb250YWluZXJBYnN0cmFjdCc7XG5leHBvcnQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBNdXRhYmxlQ29udGFpbmVyQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBzZWxlY3RlZDogMFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRTdHlsZXNBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50U3R5bGVzQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFN0eWxlcyBleHRlbmRzIENvbXBvbmVudFN0eWxlc0Fic3RyYWN0IHtcbiAgICBjc3MoKSB7XG4gICAgICAgIHJldHVybiBgXHJcblx0XHRcdDpob3N0IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcblx0XHRcdFx0d2lkdGg6IDVweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQqIHtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucHJveHktbGlzdC1pdGVtLXR5cGUge1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1saXN0LWl0ZW0tbmFtZSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1saXN0LWl0ZW0ge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnByb3h5LWxpc3QtaXRlbS1jaGVja2JveC13cmFwcGVyIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOiBjYWxjKDUwJSAtIDEycHgpO1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1saXN0LWl0ZW0tY2hlY2tib3gtd3JhcHBlciBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG5cdFx0XHRcdHdpZHRoOiAyNHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMjRweDtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucHJveHktbGlzdC1pdGVtLWluZm8ge1xyXG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1saXN0LWl0ZW0td3JhcHBlcjpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0Q29sb3IpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucHJveHktbGlzdCB7XHJcblx0XHRcdFx0aGVpZ2h0OiAyNDVweDtcclxuXHRcdFx0XHRvdmVyZmxvdzogYXV0bztcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHRcdFx0bWFyZ2luOiAwIC0xMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRgO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgQ29tcG9uZW50VGVtcGxhdGVBYnN0cmFjdCB7XG4gICAgaHRtbCgpIHtcbiAgICAgICAgcmV0dXJuIGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cInByb3h5LWxpc3Qtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1saXN0XCI+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbml0aWFsaXplciBhcyBQcm94eVNldHRpbmdzSW5pdGlhbGl6ZXIgfSBmcm9tICcuL1N0cnVjdHVyZS9Jbml0aWFsaXplcic7XG5leHBvcnQgeyBQcm94eVNldHRpbmdzSW5pdGlhbGl6ZXIgfTtcbiIsImV4cG9ydCBjbGFzcyBJbnNlcnRQcm94eUl0ZW1CZWhhdmlvciB7XG4gICAgQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICBQcm94eUl0ZW1UZW1wbGF0ZUluc3RhbmNlO1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UsIFByb3h5SXRlbVRlbXBsYXRlSW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlID0gQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5Qcm94eUl0ZW1UZW1wbGF0ZUluc3RhbmNlID0gUHJveHlJdGVtVGVtcGxhdGVJbnN0YW5jZTtcbiAgICB9XG4gICAgZG8oYXJncykge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLnJvb3QucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXByb3h5LWxpc3Qtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5Qcm94eUl0ZW1UZW1wbGF0ZUluc3RhbmNlLnJlbmRlclRlbXBsYXRlKHdyYXBwZXIpO1xuICAgICAgICBjb25zdCBpcFdyYXBwZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0taXAnKTtcbiAgICAgICAgY29uc3QgdHlwZVdyYXBwZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0tdHlwZScpO1xuICAgICAgICBjb25zdCBuYW1lV3JhcHBlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXByb3h5LWxpc3QtaXRlbS1uYW1lIHNwYW4nKTtcbiAgICAgICAgaWYgKCF3cmFwcGVyIHx8ICFpcFdyYXBwZXIgfHwgIXR5cGVXcmFwcGVyIHx8ICFuYW1lV3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uc3R5bGVbJ29wYWNpdHknXSA9ICcwJztcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBhcmdzLmlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBpcFdyYXBwZXIuaW5uZXJIVE1MID0gYXJncy5pcCArICc6JyArIGFyZ3MucG9ydDtcbiAgICAgICAgdHlwZVdyYXBwZXIuaW5uZXJIVE1MID0gYXJncy50eXBlO1xuICAgICAgICBuYW1lV3JhcHBlci5pbm5lckhUTUwgPSBhcmdzLm5hbWU7XG4gICAgICAgIC8vIEZvciBhbmltYXRpb25cbiAgICAgICAgaXRlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgaXRlbS5zdHlsZVsnb3BhY2l0eSddID0gJzEnO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBSZW1vdmVQcm94eUl0ZW1CZWhhdmlvciB7XG4gICAgQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSA9IEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgfVxuICAgIGRvKGlkKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2Uucm9vdC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MtcHJveHktbGlzdC1pdGVtW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJyk7XG4gICAgICAgIGlmICghd3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdyYXBwZXIuc3R5bGVbJ29wYWNpdHknXSA9ICcwJztcbiAgICAgICAgd3JhcHBlci5zdHlsZVsndHJhbnNpdGlvbiddID0gJzAuNXMnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vTWFpbi9TdGF0ZSc7XG5pbXBvcnQgeyBCZWhhdmlvcnMgfSBmcm9tICcuL01haW4vQmVoYXZpb3JzJztcbmltcG9ydCB7IEhhbmRsZXJzIH0gZnJvbSAnLi9NYWluL0hhbmRsZXJzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vTWFpbi9FdmVudHMnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuL01haW4vVGVtcGxhdGUnO1xuaW1wb3J0IHsgUHJveHlJdGVtVGVtcGxhdGUgfSBmcm9tICcuL01haW4vUHJveHlJdGVtVGVtcGxhdGUnO1xuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSAnLi9NYWluL1N0eWxlcyc7XG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XG4gICAgUHJveHlTb3JhZ2VJbnN0YW5jZTtcbiAgICBtYXhDb3VudDtcbiAgICBjb25zdHJ1Y3RvcihQcm94eVNvcmFnZUluc3RhbmNlLCBtYXhDb3VudCkge1xuICAgICAgICB0aGlzLlByb3h5U29yYWdlSW5zdGFuY2UgPSBQcm94eVNvcmFnZUluc3RhbmNlO1xuICAgICAgICB0aGlzLm1heENvdW50ID0gbWF4Q291bnQ7XG4gICAgfVxuICAgIGNyZWF0ZShodG1sVGFnKSB7XG4gICAgICAgIGNvbnN0IFRlbXBsYXRlSW5zdGFuY2UgPSBuZXcgVGVtcGxhdGUoKTtcbiAgICAgICAgY29uc3QgUHJveHlJdGVtVGVtcGxhdGVJbnN0YW5jZSA9IG5ldyBQcm94eUl0ZW1UZW1wbGF0ZSgpO1xuICAgICAgICBjb25zdCBTdHlsZXNJbnN0YW5jZSA9IG5ldyBTdHlsZXMoKTtcbiAgICAgICAgY29uc3QgUHJveHlTb3JhZ2VJbnN0YW5jZSA9IHRoaXMuUHJveHlTb3JhZ2VJbnN0YW5jZTtcbiAgICAgICAgY29uc3QgbWF4Q291bnQgPSB0aGlzLm1heENvdW50O1xuICAgICAgICByZXR1cm4gY2xhc3MgUHJveHlTZXR0aW5nc0hUTUxFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50SFRNTEVsZW1lbnRBYnN0cmFjdCB7XG4gICAgICAgICAgICBodG1sVGFnO1xuICAgICAgICAgICAgU3RhdGVJbnN0YW5jZTtcbiAgICAgICAgICAgIEJlaGF2aW9yc0luc3RhbmNlO1xuICAgICAgICAgICAgSGFuZGxlcnNJbnN0YW5jZTtcbiAgICAgICAgICAgIEV2ZW50c0luc3RhbmNlO1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxUYWcgPSBodG1sVGFnO1xuICAgICAgICAgICAgICAgIHRoaXMuU3RhdGVJbnN0YW5jZSA9IG5ldyBTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuQmVoYXZpb3JzSW5zdGFuY2UgPSBuZXcgQmVoYXZpb3JzKHRoaXMsIFByb3h5SXRlbVRlbXBsYXRlSW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuSGFuZGxlcnNJbnN0YW5jZSA9IG5ldyBIYW5kbGVycyh0aGlzLCBQcm94eVNvcmFnZUluc3RhbmNlLCBtYXhDb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudHNJbnN0YW5jZSA9IG5ldyBFdmVudHModGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZUluc3RhbmNlLnJlbmRlclRlbXBsYXRlKHRoaXMucm9vdCk7XG4gICAgICAgICAgICAgICAgU3R5bGVzSW5zdGFuY2UucmVuZGVyU3R5bGVzKHRoaXMucm9vdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudHNJbnN0YW5jZS5pbml0RXZlbnRzKHRoaXMucm9vdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFkZFByb3h5SXRlbUhhbmRsZXIge1xuICAgIEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgUHJveHlTb3JhZ2VJbnN0YW5jZTtcbiAgICBtYXhDb3VudDtcbiAgICBjb25zdHJ1Y3RvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLCBQcm94eVNvcmFnZUluc3RhbmNlLCBtYXhDb3VudCkge1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UgPSBDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlO1xuICAgICAgICB0aGlzLlByb3h5U29yYWdlSW5zdGFuY2UgPSBQcm94eVNvcmFnZUluc3RhbmNlO1xuICAgICAgICB0aGlzLm1heENvdW50ID0gbWF4Q291bnQ7XG4gICAgfVxuICAgIHZhbGlkYXRlKGZvcm1EYXRhKSB7XG4gICAgICAgIGNvbnN0IGlwID0gZm9ybURhdGEuZ2V0KCdwcm94eUlQJykgPyBmb3JtRGF0YS5nZXQoJ3Byb3h5SVAnKSA6ICcnO1xuICAgICAgICBjb25zdCBwb3J0ID0gZm9ybURhdGEuZ2V0KCdwcm94eVBvcnQnKSA/IGZvcm1EYXRhLmdldCgncHJveHlQb3J0JykgOiAnJztcbiAgICAgICAgY29uc3QgdHlwZSA9IGZvcm1EYXRhLmdldCgncHJveHlUeXBlJykgPyBmb3JtRGF0YS5nZXQoJ3Byb3h5VHlwZScpIDogJyc7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ3Byb3h5TmFtZScpID8gZm9ybURhdGEuZ2V0KCdwcm94eU5hbWUnKSA6ICcnO1xuICAgICAgICBjb25zdCB1c2VyID0gZm9ybURhdGEuZ2V0KCdwcm94eVVzZXInKSA/IGZvcm1EYXRhLmdldCgncHJveHlVc2VyJykgOiAnJztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoJ3Byb3h5UGFzc3dvcmQnKSA/IGZvcm1EYXRhLmdldCgncHJveHlQYXNzd29yZCcpIDogJyc7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLlN0YXRlSW5zdGFuY2UuZ2V0KCdjb3VudCcpO1xuICAgICAgICBpZiAodGhpcy5tYXhDb3VudCA9PT0gY291bnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign0JzQsNC60YHQuNC80LDQu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INGN0LvQtdC80LXQvdGC0L7QsiDQsiDRgdC/0LjRgdC60LUgJyArIHRoaXMubWF4Q291bnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXAgfHwgIXBvcnQgfHwgIXR5cGUgfHwgIW5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LUg0L/QvtC70Y8nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXA6IGlwLFxuICAgICAgICAgICAgcG9ydDogcG9ydCxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBoYW5kbGUoYXJncywgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgSW5zZXJ0UHJveHlJdGVtQmVoYXZpb3JJbnN0YW5jZSA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5CZWhhdmlvcnNJbnN0YW5jZS5nZXQoJ2luc2VydFByb3h5SXRlbScpO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy52YWxpZGF0ZShmb3JtRGF0YSk7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3h5SXRlbSA9IHRoaXMuUHJveHlTb3JhZ2VJbnN0YW5jZS5hZGQoZGF0YSk7XG4gICAgICAgIEluc2VydFByb3h5SXRlbUJlaGF2aW9ySW5zdGFuY2UuZG8ocHJveHlJdGVtKTtcbiAgICAgICAgZm9ybUVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLlN0YXRlSW5zdGFuY2UuZ2V0KCdjb3VudCcpO1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuU3RhdGVJbnN0YW5jZS5jaGFuZ2UoJ2NvdW50JywgY291bnQgKyAxKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSW5pdEhhbmRsZXIge1xuICAgIEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgUHJveHlTb3JhZ2VJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3RvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLCBQcm94eVNvcmFnZUluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSA9IEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgICAgIHRoaXMuUHJveHlTb3JhZ2VJbnN0YW5jZSA9IFByb3h5U29yYWdlSW5zdGFuY2U7XG4gICAgfVxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgY29uc3QgSW5zZXJ0UHJveHlJdGVtQmVoYXZpb3JJbnN0YW5jZSA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5CZWhhdmlvcnNJbnN0YW5jZS5nZXQoJ2luc2VydFByb3h5SXRlbScpO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuUHJveHlTb3JhZ2VJbnN0YW5jZS5nZXRBbGwoKTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1trZXldO1xuICAgICAgICAgICAgSW5zZXJ0UHJveHlJdGVtQmVoYXZpb3JJbnN0YW5jZS5kbyhpdGVtKTtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLlN0YXRlSW5zdGFuY2UuY2hhbmdlKCdjb3VudCcsIGNvdW50KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUmVtb3ZlUHJveHlJdGVtSGFuZGxlciB7XG4gICAgQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICBQcm94eVNvcmFnZUluc3RhbmNlO1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UsIFByb3h5U29yYWdlSW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlID0gQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5Qcm94eVNvcmFnZUluc3RhbmNlID0gUHJveHlTb3JhZ2VJbnN0YW5jZTtcbiAgICB9XG4gICAgaGFuZGxlKGFyZ3MsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IFJlbW92ZVByb3h5SXRlbUJlaGF2aW9ySW5zdGFuY2UgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuQmVoYXZpb3JzSW5zdGFuY2UuZ2V0KCdyZW1vdmVQcm94eUl0ZW0nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLnNldHRpbmdzLXByb3h5LWxpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSB0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5zZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0tcmVtb3ZlJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5zQ2xhc3MgPSB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2V0dGluZ3MtcHJveHktbGlzdC1pdGVtLXJlbW92ZScpO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kZWxldGVkJykgPz8gZmFsc2U7XG4gICAgICAgIGlmICgoIXJlbW92ZUJ1dHRvbiAmJiAhY29udGFpbnNDbGFzcykgfHwgIWVsZW1lbnQgfHwgc3RhdHVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGVsZXRlZCcsICcxJyk7XG4gICAgICAgIFJlbW92ZVByb3h5SXRlbUJlaGF2aW9ySW5zdGFuY2UuZG8oaWQpO1xuICAgICAgICB0aGlzLlByb3h5U29yYWdlSW5zdGFuY2UuZGVsZXRlKGlkKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLlN0YXRlSW5zdGFuY2UuZ2V0KCdjb3VudCcpO1xuICAgICAgICB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuU3RhdGVJbnN0YW5jZS5jaGFuZ2UoJ2NvdW50JywgY291bnQgLSAxKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRJbml0aWFsaXplckFic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9Db21wb25lbnRJbml0aWFsaXplckFic3RyYWN0JztcbmltcG9ydCB7IEZhY3RvcnkgfSBmcm9tICcuL0ZhY3RvcnknO1xuZXhwb3J0IGNsYXNzIEluaXRpYWxpemVyIGV4dGVuZHMgQ29tcG9uZW50SW5pdGlhbGl6ZXJBYnN0cmFjdCB7XG4gICAgRmFjdG9yeUluc3RhbmNlO1xuICAgIGNvbnN0cnVjdG9yKFByb3h5U29yYWdlSW5zdGFuY2UsIG1heENvdW50KSB7XG4gICAgICAgIHN1cGVyKCdjdXN0b20tcHJveHktc2V0dGluZ3MnKTtcbiAgICAgICAgdGhpcy5GYWN0b3J5SW5zdGFuY2UgPSBuZXcgRmFjdG9yeShQcm94eVNvcmFnZUluc3RhbmNlLCBtYXhDb3VudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0ltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0JztcbmltcG9ydCB7IEluc2VydFByb3h5SXRlbUJlaGF2aW9yIH0gZnJvbSAnLi4vQmVoYXZpb3JzL0luc2VydFByb3h5SXRlbUJlaGF2aW9yJztcbmltcG9ydCB7IFJlbW92ZVByb3h5SXRlbUJlaGF2aW9yIH0gZnJvbSAnLi4vQmVoYXZpb3JzL1JlbW92ZVByb3h5SXRlbUJlaGF2aW9yJztcbmV4cG9ydCBjbGFzcyBCZWhhdmlvcnMgZXh0ZW5kcyBJbW11dGFibGVDb250YWluZXJBYnN0cmFjdCB7XG4gICAgY29uc3RydWN0b3IoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSwgUHJveHlJdGVtVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBpbnNlcnRQcm94eUl0ZW06IG5ldyBJbnNlcnRQcm94eUl0ZW1CZWhhdmlvcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLCBQcm94eUl0ZW1UZW1wbGF0ZUluc3RhbmNlKSxcbiAgICAgICAgICAgIHJlbW92ZVByb3h5SXRlbTogbmV3IFJlbW92ZVByb3h5SXRlbUJlaGF2aW9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudEV2ZW50c0Fic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9Db21wb25lbnRFdmVudHNBYnN0cmFjdCc7XG5leHBvcnQgY2xhc3MgRXZlbnRzIGV4dGVuZHMgQ29tcG9uZW50RXZlbnRzQWJzdHJhY3Qge1xuICAgIGluaXRFdmVudHMocm9vdCkge1xuICAgICAgICBjb25zdCBsaXN0V3JhcHBlciA9IHJvb3QucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXByb3h5LWxpc3Qtd3JhcHBlcicpO1xuICAgICAgICBpZiAobGlzdFdyYXBwZXIpIHtcbiAgICAgICAgICAgIGxpc3RXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBFeHBhbmRIYW5kbGVySW5zdGFuY2UgPSB0aGlzLkN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UuSGFuZGxlcnNJbnN0YW5jZS5nZXQoJ3JlbW92ZVByb3h5SXRlbScpO1xuICAgICAgICAgICAgICAgIEV4cGFuZEhhbmRsZXJJbnN0YW5jZS5oYW5kbGUodW5kZWZpbmVkLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNldHRpbmdzRnJvbSA9IHJvb3QucXVlcnlTZWxlY3RvcignLnByb3h5LXNldHRpbmdzLWZvcm0nKTtcbiAgICAgICAgaWYgKHNldHRpbmdzRnJvbSkge1xuICAgICAgICAgICAgc2V0dGluZ3NGcm9tLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgQWRkUHJveHlJdGVtSGFuZGxlckluc3RhbmNlID0gdGhpcy5DdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLkhhbmRsZXJzSW5zdGFuY2UuZ2V0KCdhZGRQcm94eUl0ZW0nKTtcbiAgICAgICAgICAgICAgICBBZGRQcm94eUl0ZW1IYW5kbGVySW5zdGFuY2UuaGFuZGxlKHVuZGVmaW5lZCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoJ2luaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgSW5pdEhhbmRsZXJJbnN0YW5jZSA9IHRoaXMuQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZS5IYW5kbGVyc0luc3RhbmNlLmdldCgnaW5pdCcpO1xuICAgICAgICAgICAgSW5pdEhhbmRsZXJJbnN0YW5jZS5oYW5kbGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0ltbXV0YWJsZUNvbnRhaW5lckFic3RyYWN0JztcbmltcG9ydCB7IFJlbW92ZVByb3h5SXRlbUhhbmRsZXIgfSBmcm9tICcuLi9IYW5kbGVycy9SZW1vdmVQcm94eUl0ZW1IYW5kbGVyJztcbmltcG9ydCB7IEFkZFByb3h5SXRlbUhhbmRsZXIgfSBmcm9tICcuLi9IYW5kbGVycy9BZGRQcm94eUl0ZW1IYW5kbGVyJztcbmltcG9ydCB7IEluaXRIYW5kbGVyIH0gZnJvbSAnLi4vSGFuZGxlcnMvSW5pdEhhbmRsZXInO1xuZXhwb3J0IGNsYXNzIEhhbmRsZXJzIGV4dGVuZHMgSW1tdXRhYmxlQ29udGFpbmVyQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UsIFByb3h5U29yYWdlSW5zdGFuY2UsIG1heENvdW50KSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIHJlbW92ZVByb3h5SXRlbTogbmV3IFJlbW92ZVByb3h5SXRlbUhhbmRsZXIoQ3VzdG9tSFRNTEVsZW1lbnRJbnN0YW5jZSwgUHJveHlTb3JhZ2VJbnN0YW5jZSksXG4gICAgICAgICAgICBhZGRQcm94eUl0ZW06IG5ldyBBZGRQcm94eUl0ZW1IYW5kbGVyKEN1c3RvbUhUTUxFbGVtZW50SW5zdGFuY2UsIFByb3h5U29yYWdlSW5zdGFuY2UsIG1heENvdW50KSxcbiAgICAgICAgICAgIGluaXQ6IG5ldyBJbml0SGFuZGxlcihDdXN0b21IVE1MRWxlbWVudEluc3RhbmNlLCBQcm94eVNvcmFnZUluc3RhbmNlKVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUZW1wbGF0ZUFic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9Db21wb25lbnRUZW1wbGF0ZUFic3RyYWN0JztcbmV4cG9ydCBjbGFzcyBQcm94eUl0ZW1UZW1wbGF0ZSBleHRlbmRzIENvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3Qge1xuICAgIGh0bWwoKSB7XG4gICAgICAgIHJldHVybiBgXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1wcm94eS1saXN0LWl0ZW1cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2V0dGluZ3MtcHJveHktbGlzdC1pdGVtLWRhdGFcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0taW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInNldHRpbmdzLXByb3h5LWxpc3QtaXRlbS10eXBlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInNldHRpbmdzLXByb3h5LWxpc3QtaXRlbS1pcFwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNldHRpbmdzLXByb3h5LWxpc3QtaXRlbS1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0tcmVtb3ZlLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJzZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0tcmVtb3ZlXCIgdHlwZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj48cGF0aCBkPVwiTTM0Mi42IDE1MC42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwTDE5MiAyMTAuNyA4Ni42IDEwNS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0wxNDYuNyAyNTYgNDEuNCAzNjEuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMEwxOTIgMzAxLjMgMjk3LjQgNDA2LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0wyMzcuMyAyNTYgMzQyLjYgMTUwLjZ6XCIvPjwvc3ZnPlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNdXRhYmxlQ29udGFpbmVyQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL011dGFibGVDb250YWluZXJBYnN0cmFjdCc7XG5leHBvcnQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBNdXRhYmxlQ29udGFpbmVyQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBjb3VudDogMFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRTdHlsZXNBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvQ29tcG9uZW50U3R5bGVzQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFN0eWxlcyBleHRlbmRzIENvbXBvbmVudFN0eWxlc0Fic3RyYWN0IHtcbiAgICBjc3MoKSB7XG4gICAgICAgIHJldHVybiBgXHJcblx0XHRcdDpob3N0IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0KiB7XHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmJ1dHRvbiB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeVRleHRDb2xvcik7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRwYWRkaW5nOiAxNXB4IDE1cHg7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5idXR0b24tcHJpbWFyeSB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnlUZXh0Q29sb3IpO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1zZXR0aW5nIGlucHV0LFxyXG5cdFx0XHQucHJveHktc2V0dGluZyBzZWxlY3Qge1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0cGFkZGluZzogMTVweCAyMHB4O1xyXG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucHJveHktc2V0dGluZyBzZWxlY3Qgb3B0aW9uIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5VGV4dENvbG9yKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnByb3h5LXNldHRpbmcgOjpwbGFjZWhvbGRlciB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wcm94eS1zZXR0aW5nLXdyYXBwZXI6bm90KDpsYXN0LWNoaWxkKSB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnNldHRpbmdzLXByb3h5LWxpc3Qtd3JhcHBlciB7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDI1cHg7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dENvbG9yKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnByb3h5LXNldHRpbmdzLXN1Ym1pdCB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5zZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0ge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRwYWRkaW5nOiAxNXB4IDM1cHggMTVweCAxNXB4O1xyXG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiAwLjVzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuc2V0dGluZ3MtcHJveHktbGlzdC1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5zZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0tdHlwZSB7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tdGV4dENvbG9yKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnNldHRpbmdzLXByb3h5LWxpc3QtaXRlbS1uYW1lIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnNldHRpbmdzLXByb3h5LWxpc3QtaXRlbS1yZW1vdmUtd3JhcHBlciB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcclxuXHRcdFx0XHRyaWdodDogOHB4O1xyXG5cdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5zZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0tcmVtb3ZlIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnNldHRpbmdzLXByb3h5LWxpc3QtaXRlbS1yZW1vdmUgc3ZnIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHR3aWR0aDogMjBweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5zZXR0aW5ncy1wcm94eS1saXN0LWl0ZW0tcmVtb3ZlIHN2ZyBwYXRoIHtcclxuXHRcdFx0XHRmaWxsOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG5cdFx0XHR9XHJcblx0XHRgO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL0NvbXBvbmVudFRlbXBsYXRlQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgQ29tcG9uZW50VGVtcGxhdGVBYnN0cmFjdCB7XG4gICAgaHRtbCgpIHtcbiAgICAgICAgcmV0dXJuIGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cInByb3h5LXNldHRpbmdzLW1haW4td3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1wcm94eS1saXN0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktc2V0dGluZ3Mtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0PGZvcm0gY2xhc3M9XCJwcm94eS1zZXR0aW5ncy1mb3JtXCI+XHJcblx0XHRcdFx0XHRcdDxoMyBjbGFzcz1cInByb3h5LXNldHRpbmdzLXRpdGxlXCI+0JTQvtCx0LDQstC40YLRjCDQv9GA0L7QutGB0Lg8L2gzPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb3h5LXNldHRpbmctd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1zZXR0aW5nXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJveHlOYW1lXCIgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1ICjRgdGC0YDQsNC90LAsINCz0L7RgNC+0LQpKlwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1zZXR0aW5nLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktc2V0dGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBuYW1lPVwicHJveHlUeXBlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj7QktGL0LHQtdGA0LjRgtC1INGC0LjQvyDQv9GA0L7QutGB0LgqPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJIVFRQXCI+SFRUUDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiSFRUUFNcIj5IVFRQUzwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiU09DS1M0XCI+U09DS1M0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJTT0NLUzVcIj5TT0NLUzU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1zZXR0aW5nLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktc2V0dGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb3h5SVBcIiBwbGFjZWhvbGRlcj1cIklQINCw0LTRgNC10YEqXCI+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb3h5LXNldHRpbmctd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1zZXR0aW5nXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJveHlQb3J0XCIgcGxhY2Vob2xkZXI9XCLQn9C+0YDRgipcIj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktc2V0dGluZy13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb3h5LXNldHRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm94eVVzZXJcIiBwbGFjZWhvbGRlcj1cItCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCAo0LXRgdC70Lgg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1zZXR0aW5nLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktc2V0dGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb3h5UGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjCAo0LXRgdC70Lgg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm94eS1zZXR0aW5nLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJveHktc2V0dGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgcHJveHktc2V0dGluZ3Mtc3VibWl0XCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRgO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFcnJvcnNIYW5kbGVyIHtcbiAgICBoYW5kbGUobWVzc2FnZSkge1xuICAgICAgICBjb25zdCBlcnJvcnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4dGVuc2lvbi1lcnJvcnMtd3JhcHBlcicpO1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCdVbmNhdWdodCBFcnJvcjogJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ9Ce0YjQuNCx0LrQsCwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidGRINGA0LDQtyc7XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3JzV3JhcHBlcj8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPGN1c3RvbS1lcnJvcj4nICsgZXJyb3JNZXNzYWdlICsgJzwvY3VzdG9tLWVycm9yPicpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm94eVBhZ2VPcGVuSGFuZGxlciB7XG4gICAgaGFuZGxlKGFyZ3MsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHByb3h5TGlzdCA9IHBhZ2UucXVlcnlTZWxlY3RvcignY3VzdG9tLXByb3h5LWxpc3QnKTtcbiAgICAgICAgaWYgKCFwcm94eUxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBJbml0SGFuZGxlckluc3RhbmNlID0gcHJveHlMaXN0LkhhbmRsZXJzSW5zdGFuY2UuZ2V0KCdpbml0Jyk7XG4gICAgICAgIEluaXRIYW5kbGVySW5zdGFuY2UuaGFuZGxlKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFJvdXRlckxpbmtDbGlja0hhbmRsZXIge1xuICAgIFBhZ2VzQ29udHJvbGxlckluc3RhbmNlO1xuICAgIGNvbnN0cnVjdG9yKFBhZ2VzQ29udHJvbGxlckluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuUGFnZXNDb250cm9sbGVySW5zdGFuY2UgPSBQYWdlc0NvbnRyb2xsZXJJbnN0YW5jZTtcbiAgICB9XG4gICAgaGFuZGxlKGFyZ3MsIGV2ZW50KSB7XG4gICAgICAgIGxldCByb3V0ZUxpbmsgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghcm91dGVMaW5rLmNsYXNzTGlzdC5jb250YWlucygncm91dGVyLWxpbmsnKSkge1xuICAgICAgICAgICAgcm91dGVMaW5rID0gcm91dGVMaW5rLmNsb3Nlc3QoJy5yb3V0ZXItbGluaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcm91dGVMaW5rKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgcm91dGUgPSByb3V0ZUxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlBhZ2VzQ29udHJvbGxlckluc3RhbmNlLnN3aXRjaChyb3V0ZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNldHRpbmdzUGFnZU9wZW5IYW5kbGVyIHtcbiAgICBoYW5kbGUoYXJncywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2N1c3RvbS1jb25uZWN0aW9uLWJ1dHRvbicpO1xuICAgICAgICBpZiAoIWNvbm5lY3Rpb25CdXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBDb25uZWN0aW9uSGFuZGxlckluc3RhbmNlID0gY29ubmVjdGlvbkJ1dHRvbi5IYW5kbGVyc0luc3RhbmNlLmdldCgnY29ubmVjdGlvbicpO1xuICAgICAgICBDb25uZWN0aW9uSGFuZGxlckluc3RhbmNlLmhhbmRsZSgnZGlzY29ubmVjdGVkJyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBhZ2VzQ29udHJvbGxlciB7XG4gICAgUm91dGVySW5zdGFuY2U7XG4gICAgUm91dGVyUnVsZXNJbnN0YW5jZTtcbiAgICBDdXJyZW50UGFnZUhUTUxFbGVtZW50SW5zdGFuY2U7XG4gICAgY29uc3RydWN0b3IoUm91dGVySW5zdGFuY2UsIFJvdXRlclJ1bGVzSW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5Sb3V0ZXJJbnN0YW5jZSA9IFJvdXRlckluc3RhbmNlO1xuICAgICAgICB0aGlzLlJvdXRlclJ1bGVzSW5zdGFuY2UgPSBSb3V0ZXJSdWxlc0luc3RhbmNlO1xuICAgICAgICB0aGlzLkN1cnJlbnRQYWdlSFRNTEVsZW1lbnRJbnN0YW5jZSA9IGZhbHNlO1xuICAgIH1cbiAgICBzd2l0Y2gocm91dGUpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVJvdXRlID0gdGhpcy5Sb3V0ZXJSdWxlc0luc3RhbmNlLmNoZWNrKHJvdXRlKTtcbiAgICAgICAgY29uc3QgTmV4dFBhZ2VIVE1MRWxlbWVudEluc3RhbmNlID0gdGhpcy5Sb3V0ZXJJbnN0YW5jZS5nZXQocmV3cml0ZVJvdXRlKTtcbiAgICAgICAgaWYgKE5leHRQYWdlSFRNTEVsZW1lbnRJbnN0YW5jZSA9PT0gdGhpcy5DdXJyZW50UGFnZUhUTUxFbGVtZW50SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBOZXh0UGFnZUhUTUxFbGVtZW50SW5zdGFuY2UuQmVoYXZpb3JzSW5zdGFuY2UuZ2V0KCdvcGVuJykuZG8oKTtcbiAgICAgICAgaWYgKHRoaXMuQ3VycmVudFBhZ2VIVE1MRWxlbWVudEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRQYWdlSFRNTEVsZW1lbnRJbnN0YW5jZS5CZWhhdmlvcnNJbnN0YW5jZS5nZXQoJ2Nsb3NlJykuZG8oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkN1cnJlbnRQYWdlSFRNTEVsZW1lbnRJbnN0YW5jZSA9IE5leHRQYWdlSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUm91dGVyIHtcbiAgICBwYWdlcztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYWdlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXIocm91dGUsIFBhZ2VIVE1MRWxlbWVudEluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMucGFnZXMuc2V0KHJvdXRlLCBQYWdlSFRNTEVsZW1lbnRJbnN0YW5jZSk7XG4gICAgfVxuICAgIGdldChyb3V0ZSkge1xuICAgICAgICBjb25zdCBQYWdlSFRNTEVsZW1lbnRJbnN0YW5jZSA9IHRoaXMucGFnZXMuZ2V0KHJvdXRlKTtcbiAgICAgICAgaWYgKCFQYWdlSFRNTEVsZW1lbnRJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQodGC0YDQsNC90LjRhtCwICcgKyByb3V0ZSArICcg0L3QtSDQvdCw0LnQtNC10L3QsCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYWdlSFRNTEVsZW1lbnRJbnN0YW5jZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUm91dGVyUnVsZXMge1xuICAgIHJ1bGVzO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJ1bGVzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQocm91dGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5ydWxlcy5zZXQocm91dGUsIGhhbmRsZXIpO1xuICAgIH1cbiAgICBkZWxldGUocm91dGUpIHtcbiAgICAgICAgdGhpcy5ydWxlcy5kZWxldGUocm91dGUpO1xuICAgIH1cbiAgICBjaGVjayhyb3V0ZSkge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5ydWxlcy5nZXQocm91dGUpO1xuICAgICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlcihyb3V0ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3RvcmFnZUZpZWxkQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL1N0b3JhZ2VGaWVsZEFic3RyYWN0JztcbmV4cG9ydCBjbGFzcyBQcm94eUlERmllbGQgZXh0ZW5kcyBTdG9yYWdlRmllbGRBYnN0cmFjdCB7XG4gICAgY29uc3RydWN0b3IoZmllbGQpIHtcbiAgICAgICAgc3VwZXIoZmllbGQsIDApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFN0b3JhZ2VGaWVsZEFic3RyYWN0IH0gZnJvbSAnQC9BcHAvQWJzdHJhY3RzL0Fic3RyYWN0cy9TdG9yYWdlRmllbGRBYnN0cmFjdCc7XG5leHBvcnQgY2xhc3MgUHJveHlMaXN0RmllbGQgZXh0ZW5kcyBTdG9yYWdlRmllbGRBYnN0cmFjdCB7XG4gICAgY29uc3RydWN0b3IoZmllbGQpIHtcbiAgICAgICAgc3VwZXIoZmllbGQsIHt9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdG9yYWdlRmllbGRBYnN0cmFjdCB9IGZyb20gJ0AvQXBwL0Fic3RyYWN0cy9BYnN0cmFjdHMvU3RvcmFnZUZpZWxkQWJzdHJhY3QnO1xuZXhwb3J0IGNsYXNzIFByb3h5U2VsZWN0ZWRJREZpZWxkIGV4dGVuZHMgU3RvcmFnZUZpZWxkQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkKSB7XG4gICAgICAgIHN1cGVyKGZpZWxkLCAwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdG9yYWdlQWJzdHJhY3QgfSBmcm9tICdAL0FwcC9BYnN0cmFjdHMvQWJzdHJhY3RzL1N0b3JhZ2VBYnN0cmFjdCc7XG5leHBvcnQgY2xhc3MgUHJveHlTdG9yYWdlIGV4dGVuZHMgU3RvcmFnZUFic3RyYWN0IHtcbiAgICBQcm94eVNlbGVjdGVkSURGaWVsZEluc3RhbmNlO1xuICAgIGNvbnN0cnVjdG9yKFByb3h5TGlzdEZpZWxkSW5zdGFuY2UsIFByb3h5SURGaWVsZEluc3RhbmNlLCBQcm94eVNlbGVjdGVkSURGaWVsZEluc3RhbmNlKSB7XG4gICAgICAgIHN1cGVyKFByb3h5TGlzdEZpZWxkSW5zdGFuY2UsIFByb3h5SURGaWVsZEluc3RhbmNlKTtcbiAgICAgICAgdGhpcy5Qcm94eVNlbGVjdGVkSURGaWVsZEluc3RhbmNlID0gUHJveHlTZWxlY3RlZElERmllbGRJbnN0YW5jZTtcbiAgICB9XG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEFsbCgpKS5sZW5ndGg7XG4gICAgfVxuICAgIGdldFNlbGVjdGVkUHJveHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLlByb3h5U2VsZWN0ZWRJREZpZWxkSW5zdGFuY2UuZ2V0KCkpO1xuICAgIH1cbiAgICBzZXRTZWxlY3RlZFByb3h5KGlkKSB7XG4gICAgICAgIHRoaXMuUHJveHlTZWxlY3RlZElERmllbGRJbnN0YW5jZS5zZXQoaWQpO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnQC9BcHAvQXBwJztcbm5ldyBBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==