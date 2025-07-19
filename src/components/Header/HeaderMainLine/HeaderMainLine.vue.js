import { defineEmits, defineProps, ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import MenuLinkPopup from '../../MenuLinkPopup/MenuLinkPopup.vue';
import styles from './HeaderMainLine.module.scss';
const props = defineProps({
    isMenuOpen: Boolean
});
const emit = defineEmits(['toggleMobileMenu']);
const desktopBurgerButton = ref(null);
const mobileBurgerButton = ref(null);
const activePopup = ref(null);
const activePopupElement = ref(null);
const isClickHandled = ref(false);
const handleBurgerClick = (event) => {
    event.stopPropagation();
    const currentButton = window.innerWidth >= 1420
        ? desktopBurgerButton.value
        : mobileBurgerButton.value;
    if (currentButton) {
        emit('toggleMobileMenu', currentButton);
    }
    closePopup();
    isClickHandled.value = true;
};
const handleMenuLinkClick = (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    if (activePopup.value === id) {
        closePopup();
    }
    else {
        if (props.isMenuOpen) {
            const currentButton = window.innerWidth >= 1420
                ? desktopBurgerButton.value
                : mobileBurgerButton.value;
            if (currentButton) {
                emit('toggleMobileMenu', currentButton);
            }
        }
        activePopup.value = id;
        activePopupElement.value = event.currentTarget;
    }
    isClickHandled.value = true;
};
const closePopup = () => {
    activePopup.value = null;
};
const handleDocumentClick = (event) => {
    if (isClickHandled.value) {
        isClickHandled.value = false;
        return;
    }
    if (activePopup.value) {
        const target = event.target;
        if (!target.closest('.menu-link-popup') && !target.closest('.menu-link')) {
            closePopup();
        }
    }
};
const handleResize = () => {
    closePopup();
};
onMounted(() => {
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
    document.removeEventListener('click', handleDocumentClick);
    window.removeEventListener('resize', handleResize);
});
watch(() => props.isMenuOpen, newVal => {
    if (newVal) {
        closePopup();
    }
});
const menuItems = [
    {
        text: 'Акции',
        icon: 'Flame',
        id: 'sales'
    },
    {
        text: 'Горячее предложение',
        icon: 'lightning',
        id: 'hot-offers'
    },
    {
        text: 'Подарочные наборы',
        icon: 'cart2',
        id: 'gift-sets',
        popupData: {
            title: 'Подарочные наборы',
            columns: [
                {
                    title: 'Кому',
                    icon: 'people.svg',
                    items: [
                        'Для мужчин 123',
                        'Для женщин 63',
                        'Папе 120',
                        'Сотрудникам 30',
                        'Мужу 120',
                        'Корпоративный 100'
                    ]
                },
                {
                    title: 'Повод',
                    icon: 'games.svg',
                    items: ['День рождения', 'Новый год', '23 февраля', '8 марта', 'Юбилей', 'Свадьба']
                },
                {
                    title: 'Наполнение',
                    icon: 'cube.svg',
                    items: ['Игровые наборы', 'Гаджеты', 'Аксессуары', 'Одежда', 'Сувениры', 'Коллекционные']
                }
            ]
        }
    },
    {
        text: 'События',
        icon: 'quest',
        id: 'events',
        popupData: {
            title: 'События',
            columns: [
                {
                    title: 'ИгроМИР',
                    items: ['ИгроМИР 2024', 'Фотоотчеты', 'Видео', 'Участники', 'Расписание']
                },
                {
                    title: 'Мероприятия',
                    items: ['Ланчи', 'Встречи', 'Турниры', 'Конференции', 'Выставки']
                },
                {
                    title: 'Мастер-классы',
                    items: ['Создание игр', 'Геймдизайн', 'Программирование', '3D-моделирование', 'Сторителлинг']
                }
            ]
        }
    },
    {
        text: 'Наши бренды',
        icon: 'orc',
        id: 'brands'
    }
];
const popupItems = computed(() => menuItems.filter(item => item.popupData));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.desktopContainer) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.burgerCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.handleBurgerClick) },
    ref: "desktopBurgerButton",
    ...{ class: (__VLS_ctx.styles.burger) },
});
/** @type {typeof __VLS_ctx.desktopBurgerButton} */ ;
if (!props.isMenuOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "../../../icons/burger.svg",
        ...{ class: (__VLS_ctx.styles.burgerIcon) },
        alt: "Menu",
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "../../../icons/x.svg",
        ...{ class: (__VLS_ctx.styles.burgerIcon) },
        alt: "Close",
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.searchCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.search) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    ...{ class: (__VLS_ctx.styles.searchInput) },
    placeholder: "Поиск товаров...",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: (__VLS_ctx.styles.searchButton) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.socialsCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.socials) },
});
for (const [icon, index] of __VLS_getVForSourceType((['telegram', 'whatsapp']))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        key: (index),
        ...{ class: (__VLS_ctx.styles.socialLink) },
        href: "#",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (`/icons/${icon}.svg`),
        ...{ class: (__VLS_ctx.styles.socialIcon) },
        alt: (icon),
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.langCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.lang) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/icons/globe.svg",
    ...{ class: (__VLS_ctx.styles.langIcon) },
    alt: "Globe",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: (__VLS_ctx.styles.activeLang) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.iconsCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.icons) },
});
for (const [icon, index] of __VLS_getVForSourceType((['heart', 'user', 'cart']))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        key: (index),
        ...{ class: (__VLS_ctx.styles.iconLink) },
        href: "#",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (`/icons/${icon}.svg`),
        ...{ class: (__VLS_ctx.styles.icon) },
        alt: (icon),
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.menuCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: (__VLS_ctx.styles.menu) },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleMenuLinkClick($event, item.id);
            } },
        key: (index),
        ...{ class: ([__VLS_ctx.styles.menuLink, { [__VLS_ctx.styles.active]: __VLS_ctx.activePopup === item.id }]) },
        href: "#",
        ...{ class: "menu-link" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (`/icons/${item.icon}.svg`),
        ...{ class: (__VLS_ctx.styles.menuIcon) },
        alt: (item.icon),
    });
    (item.text);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.emptyCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.buttonCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: (__VLS_ctx.styles.buildBtn) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/icons/plus.svg",
    ...{ class: (__VLS_ctx.styles.buildIcon) },
    alt: "Plus",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.mobileContainer) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.burgerCellMobile) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.handleBurgerClick) },
    ref: "mobileBurgerButton",
    ...{ class: (__VLS_ctx.styles.burger) },
});
/** @type {typeof __VLS_ctx.mobileBurgerButton} */ ;
if (!props.isMenuOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "../../../icons/burger.svg",
        ...{ class: (__VLS_ctx.styles.burgerIcon) },
        alt: "Menu",
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "../../../icons/x.svg",
        ...{ class: (__VLS_ctx.styles.burgerIcon) },
        alt: "Close",
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.userIconCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: (__VLS_ctx.styles.iconLink) },
    href: "#",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/icons/user.svg",
    ...{ class: (__VLS_ctx.styles.icon) },
    alt: "user",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.logoCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/icons/logo.svg",
    ...{ class: (__VLS_ctx.styles.logo) },
    alt: "Logo",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.heartIconCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: (__VLS_ctx.styles.iconLink) },
    href: "#",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/icons/heart.svg",
    ...{ class: (__VLS_ctx.styles.icon) },
    alt: "heart",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.cartIconCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: (__VLS_ctx.styles.iconLink) },
    href: "#",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/icons/cart.svg",
    ...{ class: (__VLS_ctx.styles.icon) },
    alt: "cart",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.mobileSearchCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.search) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    ...{ class: (__VLS_ctx.styles.searchInput) },
    placeholder: "Поиск товаров...",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: (__VLS_ctx.styles.searchButton) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: (__VLS_ctx.styles.searchIcon) },
    src: "../../../icons/lupa.svg",
    alt: "Search",
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.popupItems))) {
    (item.id);
    if (__VLS_ctx.activePopup === item.id && __VLS_ctx.activePopupElement) {
        /** @type {[typeof MenuLinkPopup, ]} */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(MenuLinkPopup, new MenuLinkPopup({
            ...{ 'onClose': {} },
            buttonElement: (__VLS_ctx.activePopupElement),
            popupData: (item.popupData),
            ...{ class: "menu-link-popup" },
        }));
        const __VLS_1 = __VLS_0({
            ...{ 'onClose': {} },
            buttonElement: (__VLS_ctx.activePopupElement),
            popupData: (item.popupData),
            ...{ class: "menu-link-popup" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        let __VLS_3;
        let __VLS_4;
        let __VLS_5;
        const __VLS_6 = {
            onClose: (__VLS_ctx.closePopup)
        };
        var __VLS_2;
    }
}
/** @type {__VLS_StyleScopedClasses['menu-link']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-link-popup']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MenuLinkPopup: MenuLinkPopup,
            styles: styles,
            desktopBurgerButton: desktopBurgerButton,
            mobileBurgerButton: mobileBurgerButton,
            activePopup: activePopup,
            activePopupElement: activePopupElement,
            handleBurgerClick: handleBurgerClick,
            handleMenuLinkClick: handleMenuLinkClick,
            closePopup: closePopup,
            menuItems: menuItems,
            popupItems: popupItems,
        };
    },
    emits: {},
    props: {
        isMenuOpen: Boolean
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        isMenuOpen: Boolean
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=HeaderMainLine.vue.js.map