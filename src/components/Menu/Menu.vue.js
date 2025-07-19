import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import styles from './Menu.module.scss';
const props = defineProps({
    buttonElement: {
        type: Object,
        default: null
    }
});
const emit = defineEmits(['close']);
const getIconUrl = (iconName) => {
    return new URL(`../../icons/${iconName}`, import.meta.url).href;
};
const menuItems = [
    {
        title: 'Смартфоны и гаджеты',
        icon: 'phone_menu.svg',
        subs: [
            {
                title: 'Смартфоны',
                items: [
                    'Apple iPhone 123',
                    'Смартфоны 227',
                    'iPhone 16 120',
                    'Складные 30',
                    'realme 120',
                    'Huawei Mate X6 100',
                    'Кнопочные 23',
                    'Домашние 17',
                    'Samsung 27'
                ]
            },
            {
                title: 'Гаджеты',
                items: [
                    'Смарт-часы 15',
                    'Смарт-кольца 34',
                    'Наушники 21',
                    'Гарнитуры 12',
                    'Портативное аудио 42',
                    'Умные гаджеты 46',
                    'Очки VR 49',
                    'Для блогеров 32'
                ]
            }
        ]
    },
    {
        title: 'Ноутбуки и компьютеры',
        icon: 'laptop_menu.svg',
        subs: [
            {
                title: 'Ноутбуки',
                items: ['Игровые', 'Офисные', 'Ультрабуки', 'MacBook']
            },
            {
                title: 'Компьютеры',
                items: ['Системные блоки', 'Мониторы', 'Комплектующие']
            }
        ]
    },
    {
        title: 'Телевизоры и цифровое ТВ',
        icon: 'tv_menu.svg',
        subs: [
            {
                title: 'Телевизоры',
                items: ['4K', 'OLED', 'Smart TV', 'До 32"']
            },
            {
                title: 'Аксессуары',
                items: ['Кронштейны', 'ТВ-приставки', 'Кабели']
            }
        ]
    },
    {
        title: 'Аудиотехника',
        icon: 'speaker_menu.svg',
        subs: [
            {
                title: 'Наушники',
                items: ['Беспроводные', 'Вкладыши', 'Накладные', 'Игровые']
            },
            {
                title: 'Колонки',
                items: ['Портативные', 'Домашние', 'Саундбары']
            }
        ]
    },
    {
        title: 'Акции',
        icon: 'flame_menu.svg'
    },
    {
        title: 'Новинки',
        icon: 'sale_menu.svg'
    }
];
const activeIndex = ref(null);
const activeSubs = ref(null);
const menuRef = ref(null);
const submenuRef = ref(null);
const submenuWidth = ref(0);
const isSubMenuHovered = ref(false);
const isActive = ref(false);
const showSubMenu = (index, subs) => {
    activeIndex.value = index;
    activeSubs.value = subs || null;
    isSubMenuHovered.value = false;
    if (subs) {
        nextTick(() => {
            if (submenuRef.value) {
                submenuWidth.value = submenuRef.value.offsetWidth;
            }
        });
    }
};
const closeSubMenu = () => {
    if (!isSubMenuHovered.value) {
        activeIndex.value = null;
        activeSubs.value = null;
    }
};
const keepSubMenuOpen = () => {
    isSubMenuHovered.value = true;
};
const handleClickOutside = (event) => {
    if (!menuRef.value || !props.buttonElement)
        return;
    const target = event.target;
    if (!menuRef.value.contains(target) &&
        !props.buttonElement.contains(target)) {
        emit('close');
    }
};
const updatePosition = () => {
    if (!menuRef.value || !props.buttonElement)
        return;
    const rect = props.buttonElement.getBoundingClientRect();
    menuRef.value.style.position = 'fixed';
    menuRef.value.style.top = `${rect.bottom + window.scrollY + 80}px`;
    menuRef.value.style.left = `${rect.left + window.scrollX}px`;
};
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', updatePosition);
    updatePosition();
    setTimeout(() => {
        if (menuRef.value) {
            isActive.value = true;
            menuRef.value.classList.add(styles.active);
        }
    }, 10);
});
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
    window.removeEventListener('resize', updatePosition);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onMouseleave: (__VLS_ctx.closeSubMenu) },
    ref: "menuRef",
    ...{ class: ([__VLS_ctx.styles.menuPopup, { [__VLS_ctx.styles.active]: __VLS_ctx.isActive }]) },
    ...{ style: ({ '--submenu-width': `${__VLS_ctx.submenuWidth}px` }) },
});
/** @type {typeof __VLS_ctx.menuRef} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.menuContent) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: (__VLS_ctx.styles.menuList) },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ onMouseenter: (...[$event]) => {
                __VLS_ctx.showSubMenu(index, item.subs);
            } },
        key: (index),
        ...{ class: ([__VLS_ctx.styles.menuItem, { [__VLS_ctx.styles.active]: __VLS_ctx.activeIndex === index }]) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: (__VLS_ctx.styles.menuItemContent) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.getIconUrl(item.icon)),
        ...{ class: (__VLS_ctx.styles.itemIcon) },
        alt: "",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (item.title);
    if (item.subs) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: (__VLS_ctx.getIconUrl('chevronRight.svg')),
            ...{ class: (__VLS_ctx.styles.chevronIcon) },
            alt: "",
        });
    }
}
if (__VLS_ctx.activeSubs) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onMouseenter: (__VLS_ctx.keepSubMenuOpen) },
        ...{ onMouseleave: (__VLS_ctx.closeSubMenu) },
        ref: "submenuRef",
        ...{ class: (__VLS_ctx.styles.submenuContainer) },
    });
    /** @type {typeof __VLS_ctx.submenuRef} */ ;
    for (const [sub, subIndex] of __VLS_getVForSourceType((__VLS_ctx.activeSubs))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (subIndex),
            ...{ class: (__VLS_ctx.styles.submenuColumn) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: (__VLS_ctx.styles.submenuTitle) },
        });
        (sub.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: (__VLS_ctx.styles.submenuList) },
        });
        for (const [product, productIndex] of __VLS_getVForSourceType((sub.items))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: (productIndex),
                ...{ class: (__VLS_ctx.styles.submenuItem) },
            });
            (product);
        }
        if (subIndex < __VLS_ctx.activeSubs.length - 1) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
                src: (__VLS_ctx.getIconUrl('chevronRight.svg')),
                ...{ class: (__VLS_ctx.styles.submenuDivider) },
                alt: "",
            });
        }
    }
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            styles: styles,
            getIconUrl: getIconUrl,
            menuItems: menuItems,
            activeIndex: activeIndex,
            activeSubs: activeSubs,
            menuRef: menuRef,
            submenuRef: submenuRef,
            submenuWidth: submenuWidth,
            isActive: isActive,
            showSubMenu: showSubMenu,
            closeSubMenu: closeSubMenu,
            keepSubMenuOpen: keepSubMenuOpen,
        };
    },
    emits: {},
    props: {
        buttonElement: {
            type: Object,
            default: null
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        buttonElement: {
            type: Object,
            default: null
        }
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Menu.vue.js.map