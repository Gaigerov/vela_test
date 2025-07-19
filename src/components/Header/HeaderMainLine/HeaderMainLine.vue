<script setup lang="ts">
import {defineEmits, defineProps, ref, computed, onMounted, onBeforeUnmount, watch} from 'vue';
import MenuLinkPopup, {type PopupData, type PopupColumn} from '../../MenuLinkPopup/MenuLinkPopup.vue';
import styles from './HeaderMainLine.module.scss';

const props = defineProps({
    isMenuOpen: Boolean
});

const emit = defineEmits(['toggleMobileMenu']);
const desktopBurgerButton = ref<HTMLButtonElement | null>(null);
const mobileBurgerButton = ref<HTMLButtonElement | null>(null);
const activePopup = ref<string | null>(null);
const activePopupElement = ref<HTMLElement | null>(null);
const isClickHandled = ref(false);

const handleBurgerClick = (event: MouseEvent) => {
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

const handleMenuLinkClick = (event: MouseEvent, id: string) => {
    event.stopPropagation();
    event.preventDefault();

    if (activePopup.value === id) {
        closePopup();
    } else {
        if (props.isMenuOpen) {
            const currentButton = window.innerWidth >= 1420 
                ? desktopBurgerButton.value
                : mobileBurgerButton.value;
            
            if (currentButton) {
                emit('toggleMobileMenu', currentButton);
            }
        }

        activePopup.value = id;
        activePopupElement.value = event.currentTarget as HTMLElement;
    }
    isClickHandled.value = true;
};

const closePopup = () => {
    activePopup.value = null;
};

const handleDocumentClick = (event: MouseEvent) => {
    if (isClickHandled.value) {
        isClickHandled.value = false;
        return;
    }

    if (activePopup.value) {
        const target = event.target as HTMLElement;
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

watch(
    () => props.isMenuOpen,
    newVal => {
        if (newVal) {
            closePopup();
        }
    }
);

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
                } as PopupColumn,
                {
                    title: 'Мероприятия',
                    items: ['Ланчи', 'Встречи', 'Турниры', 'Конференции', 'Выставки']
                } as PopupColumn,
                {
                    title: 'Мастер-классы',
                    items: ['Создание игр', 'Геймдизайн', 'Программирование', '3D-моделирование', 'Сторителлинг']
                } as PopupColumn
            ]
        } as PopupData
    },
    {
        text: 'Наши бренды',
        icon: 'orc',
        id: 'brands'
    }
];

const popupItems = computed(
    () =>
        menuItems.filter(item => item.popupData) as Array<{
            id: string;
            text: string;
            icon: string;
            popupData: PopupData;
        }>
);
</script>

<template>
    <!-- Desktop структура (скрыта на tablet/mobile) -->
    <div :class="styles.desktopContainer">
        <div :class="styles.burgerCell">
            <button 
                ref="desktopBurgerButton" 
                :class="styles.burger" 
                @click="handleBurgerClick"
            >
                <img v-if="!props.isMenuOpen" src="../../../icons/burger.svg" :class="styles.burgerIcon" alt="Menu" />
                <img v-else src="../../../icons/x.svg" :class="styles.burgerIcon" alt="Close" />
            </button>
        </div>

        <div :class="styles.searchCell">
            <div :class="styles.search">
                <input type="text" :class="styles.searchInput" placeholder="Поиск товаров..." />
                <button :class="styles.searchButton">Найти</button>
            </div>
        </div>

        <div :class="styles.socialsCell">
            <div :class="styles.socials">
                <a v-for="(icon, index) in ['telegram', 'whatsapp']" :key="index" :class="styles.socialLink" href="#">
                    <img :src="`/icons/${icon}.svg`" :class="styles.socialIcon" :alt="icon" />
                </a>
            </div>
        </div>

        <div :class="styles.langCell">
            <div :class="styles.lang">
                <img src="/icons/globe.svg" :class="styles.langIcon" alt="Globe" />
                <span :class="styles.activeLang">RU</span> |
                <span>EN</span>
            </div>
        </div>

        <div :class="styles.iconsCell">
            <div :class="styles.icons">
                <a v-for="(icon, index) in ['heart', 'user', 'cart']" :key="index" :class="styles.iconLink" href="#">
                    <img :src="`/icons/${icon}.svg`" :class="styles.icon" :alt="icon" />
                </a>
            </div>
        </div>

        <div :class="styles.menuCell">
            <nav :class="styles.menu">
                <a
                    v-for="(item, index) in menuItems"
                    :key="index"
                    :class="[styles.menuLink, {[styles.active]: activePopup === item.id}]"
                    href="#"
                    @click="handleMenuLinkClick($event, item.id)"
                    class="menu-link"
                >
                    <img :src="`/icons/${item.icon}.svg`" :class="styles.menuIcon" :alt="item.icon" />
                    {{ item.text }}
                </a>
            </nav>
        </div>

        <div :class="styles.emptyCell"></div>

        <div :class="styles.buttonCell">
            <button :class="styles.buildBtn">
                <img src="/icons/plus.svg" :class="styles.buildIcon" alt="Plus" />
                Собрать компьютер
            </button>
        </div>
    </div>

    <!-- Tablet/Mobile структура (скрыта на desktop) -->
    <div :class="styles.mobileContainer">
        <div :class="styles.burgerCellMobile">
            <button 
                ref="mobileBurgerButton" 
                :class="styles.burger" 
                @click="handleBurgerClick"
            >
                <img v-if="!props.isMenuOpen" src="../../../icons/burger.svg" :class="styles.burgerIcon" alt="Menu" />
                <img v-else src="../../../icons/x.svg" :class="styles.burgerIcon" alt="Close" />
            </button>
        </div>

        <div :class="styles.userIconCell">
            <a :class="styles.iconLink" href="#">
                <img src="/icons/user.svg" :class="styles.icon" alt="user" />
            </a>
        </div>

        <div :class="styles.logoCell">
            <img src="/icons/logo.svg" :class="styles.logo" alt="Logo" />
        </div>

        <div :class="styles.heartIconCell">
            <a :class="styles.iconLink" href="#">
                <img src="/icons/heart.svg" :class="styles.icon" alt="heart" />
            </a>
        </div>

        <div :class="styles.cartIconCell">
            <a :class="styles.iconLink" href="#">
                <img src="/icons/cart.svg" :class="styles.icon" alt="cart" />
            </a>
        </div>

        <div :class="styles.mobileSearchCell">
            <div :class="styles.search">
                <input type="text" :class="styles.searchInput" placeholder="Поиск товаров..." />
                <button :class="styles.searchButton">
                    <img :class="styles.searchIcon" src="../../../icons/lupa.svg" alt="Search" />
                </button>
            </div>
        </div>
    </div>

    <template v-for="item in popupItems" :key="item.id">
        <MenuLinkPopup
            v-if="activePopup === item.id && activePopupElement"
            :button-element="activePopupElement"
            :popup-data="item.popupData"
            @close="closePopup"
            class="menu-link-popup"
        />
    </template>
</template>
