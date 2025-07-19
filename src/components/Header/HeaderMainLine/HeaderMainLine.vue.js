import { defineEmits, defineProps, ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import MenuLinkPopup from '../../MenuLinkPopup/MenuLinkPopup.vue';
import styles from './HeaderMainLine.module.scss';
import burgerIcon from '@/icons/burger.svg';
import xIcon from '@/icons/x.svg';
import telegramIcon from '@/icons/telegram.svg';
import whatsappIcon from '@/icons/whatsapp.svg';
import globeIcon from '@/icons/globe.svg';
import heartIcon from '@/icons/heart.svg';
import userIcon from '@/icons/user.svg';
import cartIcon from '@/icons/cart.svg';
import logoIcon from '@/icons/logo.svg';
import lupaIcon from '@/icons/lupa.svg';
// Иконки для меню
import FlameIcon from '@/icons/Flame.svg';
import lightningIcon from '@/icons/lightning.svg';
import cart2Icon from '@/icons/cart2.svg';
import questIcon from '@/icons/quest.svg';
import orcIcon from '@/icons/orc.svg';
// Объект для доступа к иконкам меню
const menuIconMap = {
    Flame: FlameIcon,
    lightning: lightningIcon,
    cart2: cart2Icon,
    quest: questIcon,
    orc: orcIcon
};
// Объект для социальных иконок
const socialIcons = {
    telegram: telegramIcon,
    whatsapp: whatsappIcon
};
// Объект для иконок профиля
const profileIcons = {
    heart: heartIcon,
    user: userIcon,
    cart: cartIcon
};
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
    const currentButton = window.innerWidth >= 1420 ? desktopBurgerButton.value : mobileBurgerButton.value;
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
            const currentButton = window.innerWidth >= 1420 ? desktopBurgerButton.value : mobileBurgerButton.value;
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
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "burgerIcon",
    mode: "out-in",
}));
const __VLS_2 = __VLS_1({
    name: "burgerIcon",
    mode: "out-in",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (!props.isMenuOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.burgerIcon),
        ...{ class: (__VLS_ctx.styles.burgerIcon) },
        alt: "Menu",
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.xIcon),
        ...{ class: (__VLS_ctx.styles.burgerIcon) },
        alt: "Close",
    });
}
var __VLS_3;
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
        src: (__VLS_ctx.socialIcons[icon]),
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
    src: (__VLS_ctx.globeIcon),
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
        src: (__VLS_ctx.profileIcons[icon]),
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
        src: (__VLS_ctx.menuIconMap[item.icon]),
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
const __VLS_4 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    name: "burgerIcon",
    mode: "out-in",
}));
const __VLS_6 = __VLS_5({
    name: "burgerIcon",
    mode: "out-in",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
if (!props.isMenuOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.burgerIcon),
        ...{ class: (__VLS_ctx.styles.burgerIcon) },
        alt: "Menu",
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.xIcon),
        ...{ class: (__VLS_ctx.styles.burgerIcon) },
        alt: "Close",
    });
}
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.userIconCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: (__VLS_ctx.styles.iconLink) },
    href: "#",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.userIcon),
    ...{ class: (__VLS_ctx.styles.icon) },
    alt: "user",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.logoCell) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.logoIcon),
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
    src: (__VLS_ctx.heartIcon),
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
    src: (__VLS_ctx.cartIcon),
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
    src: (__VLS_ctx.lupaIcon),
    alt: "Search",
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.popupItems))) {
    (item.id);
    if (__VLS_ctx.activePopup === item.id && __VLS_ctx.activePopupElement) {
        /** @type {[typeof MenuLinkPopup, ]} */ ;
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(MenuLinkPopup, new MenuLinkPopup({
            ...{ 'onClose': {} },
            buttonElement: (__VLS_ctx.activePopupElement),
            popupData: (item.popupData),
            ...{ class: "menu-link-popup" },
        }));
        const __VLS_9 = __VLS_8({
            ...{ 'onClose': {} },
            buttonElement: (__VLS_ctx.activePopupElement),
            popupData: (item.popupData),
            ...{ class: "menu-link-popup" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        let __VLS_11;
        let __VLS_12;
        let __VLS_13;
        const __VLS_14 = {
            onClose: (__VLS_ctx.closePopup)
        };
        var __VLS_10;
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
            burgerIcon: burgerIcon,
            xIcon: xIcon,
            globeIcon: globeIcon,
            heartIcon: heartIcon,
            userIcon: userIcon,
            cartIcon: cartIcon,
            logoIcon: logoIcon,
            lupaIcon: lupaIcon,
            menuIconMap: menuIconMap,
            socialIcons: socialIcons,
            profileIcons: profileIcons,
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