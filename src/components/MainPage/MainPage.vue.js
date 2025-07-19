import { ref } from 'vue';
import Menu from '../../components/Menu/Menu.vue';
import styles from './MainPage.module.scss';
const isMenuVisible = ref(false);
const menuButton = ref(null);
const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};
const closeMenu = () => {
    isMenuVisible.value = false;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: (__VLS_ctx.styles.mainPage) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.contentWrapper) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: (__VLS_ctx.styles.title) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: (__VLS_ctx.styles.description) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.buttonContainer) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toggleMenu) },
    ref: "menuButton",
    ...{ class: (__VLS_ctx.styles.button) },
});
/** @type {typeof __VLS_ctx.menuButton} */ ;
if (__VLS_ctx.isMenuVisible) {
    /** @type {[typeof Menu, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Menu, new Menu({
        ...{ 'onClose': {} },
        isOpen: (__VLS_ctx.isMenuVisible),
        buttonElement: (__VLS_ctx.menuButton),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onClose': {} },
        isOpen: (__VLS_ctx.isMenuVisible),
        buttonElement: (__VLS_ctx.menuButton),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    let __VLS_5;
    const __VLS_6 = {
        onClose: (__VLS_ctx.closeMenu)
    };
    var __VLS_2;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.imageWrapper) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "../../assets/gamepad.png",
    alt: "gamepad",
    ...{ class: (__VLS_ctx.styles.mainImage) },
});
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Menu: Menu,
            styles: styles,
            isMenuVisible: isMenuVisible,
            menuButton: menuButton,
            toggleMenu: toggleMenu,
            closeMenu: closeMenu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=MainPage.vue.js.map