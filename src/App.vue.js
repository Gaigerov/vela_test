import Header from './components/Header/Header.vue';
import MainPage from './components/MainPage/MainPage.vue';
import styles from './App.module.scss';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.app) },
});
/** @type {[typeof Header, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof MainPage, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(MainPage, new MainPage({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Header: Header,
            MainPage: MainPage,
            styles: styles,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=App.vue.js.map