import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderTopLine from './HeaderTopLine/HeaderTopLine.vue';
import HeaderMainLine from './HeaderMainLine/HeaderMainLine.vue';
import Menu from '@/components/Menu/Menu.vue';
import styles from './Header.module.scss';
const isMobileMenuOpen = ref(false);
const burgerButton = ref(null);
const isDesktop = ref(false);
const toggleMobileMenu = (button) => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    burgerButton.value = button;
};
const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
};
const checkScreenSize = () => {
    isDesktop.value = window.innerWidth >= 1420;
};
onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: (__VLS_ctx.styles.header) },
});
/** @type {[typeof HeaderTopLine, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(HeaderTopLine, new HeaderTopLine({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.mainContainer) },
});
if (__VLS_ctx.isDesktop) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: "#",
        ...{ class: (__VLS_ctx.styles.logo) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "/icons/logo.svg",
        ...{ class: (__VLS_ctx.styles.logoIcon) },
        alt: "Logo",
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.rightColumn) },
});
/** @type {[typeof HeaderMainLine, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(HeaderMainLine, new HeaderMainLine({
    ...{ 'onToggleMobileMenu': {} },
    isMenuOpen: (__VLS_ctx.isMobileMenuOpen),
}));
const __VLS_4 = __VLS_3({
    ...{ 'onToggleMobileMenu': {} },
    isMenuOpen: (__VLS_ctx.isMobileMenuOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
let __VLS_6;
let __VLS_7;
let __VLS_8;
const __VLS_9 = {
    onToggleMobileMenu: (__VLS_ctx.toggleMobileMenu)
};
var __VLS_5;
if (__VLS_ctx.isMobileMenuOpen) {
    /** @type {[typeof Menu, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(Menu, new Menu({
        ...{ 'onClose': {} },
        buttonElement: (__VLS_ctx.burgerButton),
    }));
    const __VLS_11 = __VLS_10({
        ...{ 'onClose': {} },
        buttonElement: (__VLS_ctx.burgerButton),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    let __VLS_13;
    let __VLS_14;
    let __VLS_15;
    const __VLS_16 = {
        onClose: (__VLS_ctx.closeMobileMenu)
    };
    var __VLS_12;
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            HeaderTopLine: HeaderTopLine,
            HeaderMainLine: HeaderMainLine,
            Menu: Menu,
            styles: styles,
            isMobileMenuOpen: isMobileMenuOpen,
            burgerButton: burgerButton,
            isDesktop: isDesktop,
            toggleMobileMenu: toggleMobileMenu,
            closeMobileMenu: closeMobileMenu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Header.vue.js.map