<script setup lang="ts">
import {defineEmits} from 'vue';
import styles from './HeaderMainLine.module.scss';

const emit = defineEmits(['toggleMobileMenu']);

const socialIcons = ['telegram', 'whatsapp'];
const userIcons = ['heart', 'user', 'cart'];
const menuItems = [
    {text: 'Акции', icon: 'Flame'},
    {text: 'Горячее предложение', icon: 'lightning'},
    {text: 'Подарочные наборы', icon: 'cart2'},
    {text: 'События', icon: 'quest'}
];
</script>

<template>
    <div :class="styles.gridContainer">
        <!-- Первая строка -->
        <!-- Колонка 1: Бургер -->
        <div :class="styles.burgerCell">
            <button :class="styles.burger" @click="emit('toggleMobileMenu')">
                <img src="/icons/burger.svg" :class="styles.burgerIcon" alt="Menu" />
            </button>
        </div>

        <!-- Колонка 2: Поиск -->
        <div :class="styles.searchCell">
            <div :class="styles.search">
                <input type="text" :class="styles.searchInput" placeholder="Поиск товаров..." />
                <button :class="styles.searchButton">Найти</button>
            </div>
        </div>

        <!-- Колонка 3: Соцсети -->
        <div :class="styles.socialsCell">
            <div :class="styles.socials">
                <a v-for="(icon, index) in socialIcons" :key="index" :class="styles.socialLink" href="#">
                    <img :src="`/icons/${icon}.svg`" :class="styles.socialIcon" :alt="icon" />
                </a>
            </div>
        </div>

        <!-- Колонка 4: Язык -->
        <div :class="styles.langCell">
            <div :class="styles.lang">
                <img src="/icons/globe.svg" :class="styles.langIcon" alt="Globe" />
                <span :class="styles.activeLang">RU</span> |
                <span>EN</span>
            </div>
        </div>

        <!-- Колонка 5: Иконки пользователя -->
        <div :class="styles.iconsCell">
            <div :class="styles.icons">
                <a v-for="(icon, index) in userIcons" :key="index" :class="styles.iconLink" href="#">
                    <img :src="`/icons/${icon}.svg`" :class="styles.icon" :alt="icon" />
                    <!-- <span v-if="icon === 'cart'" :class="styles.iconBadge">3</span> -->
                </a>
            </div>
        </div>

        <!-- Вторая строка -->
        <!-- Колонки 1-3: Меню -->
        <div :class="styles.menuCell">
            <nav :class="styles.menu">
                <a v-for="(item, index) in menuItems" :key="index" :class="styles.menuLink" href="#">
                    <img :src="`/icons/${item.icon}.svg`" :class="styles.menuIcon" :alt="item.icon" />
                    {{ item.text }}
                </a>
            </nav>
        </div>

        <!-- Колонка 4: Пустая -->
        <div :class="styles.emptyCell"></div>

        <!-- Колонка 5: Кнопка сборки -->
        <div :class="styles.buttonCell">
            <button :class="styles.buildBtn">
                <img src="/icons/plus.svg" :class="styles.buildIcon" alt="Plus" />
                Собрать компьютер
            </button>
        </div>
    </div>
</template>
