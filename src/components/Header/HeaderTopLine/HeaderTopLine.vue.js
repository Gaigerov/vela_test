import styles from './HeaderTopLine.module.scss';
// Импорт иконок
import globeIcon from '@/icons/globe.svg';
import locationIcon from '@/icons/location.svg';
import phoneIcon from '@/icons/phone.svg';
const contactItems = [
    { icon: 'location', text: 'Сайлент-Хилл', iconSrc: locationIcon },
    { icon: 'phone', text: '+7 555 555-37-50', iconSrc: phoneIcon }
];
const navItems = ['Доставка', 'Оплата', 'Контакты'];
const phoneContact = contactItems.find(item => item.icon === 'phone');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.topLine) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.langCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.lang) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.globeIcon),
    ...{ class: (__VLS_ctx.styles.langIcon) },
    alt: "Globe",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: (__VLS_ctx.styles.activeLang) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.contacts) },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.contactItems))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (index),
        ...{ class: (__VLS_ctx.styles.contactItem) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (item.iconSrc),
        ...{ class: (__VLS_ctx.styles.contactIcon) },
        alt: (item.icon),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (item.text);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.schedule) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: (__VLS_ctx.styles.navTop) },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.navItems))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        key: (index),
        ...{ class: (__VLS_ctx.styles.navLink) },
        href: "#",
    });
    (item);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.mobileContact) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.contactItem) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.phoneContact.iconSrc),
    ...{ class: (__VLS_ctx.styles.contactIcon) },
    alt: "phone",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.phoneContact.text);
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            styles: styles,
            globeIcon: globeIcon,
            contactItems: contactItems,
            navItems: navItems,
            phoneContact: phoneContact,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=HeaderTopLine.vue.js.map