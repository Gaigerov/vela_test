
<script setup lang="ts">
import { ref } from 'vue';
import HeaderTopLine from './HeaderTopLine/HeaderTopLine.vue';
import HeaderMainLine from './HeaderMainLine/HeaderMainLine.vue';
import Menu from '@/components/Menu/Menu.vue'; // Добавьте импорт
import styles from './Header.module.scss';

const isMobileMenuOpen = ref(false);
const burgerButton = ref<HTMLButtonElement | null>(null); // Ref для кнопки бургера

const toggleMobileMenu = (button: HTMLButtonElement) => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    burgerButton.value = button; // Сохраняем кнопку для позиционирования
};
</script>

<template>
    <header :class="styles.header">
        <HeaderTopLine />
        <div :class="styles.mainContainer">
            <a href="#" :class="styles.logo">
                <img src="/icons/logo.svg" :class="styles.logoIcon" alt="Logo" />
            </a>
            <div :class="styles.rightColumn">
                <!-- Передаём кнопку через событие -->
                <HeaderMainLine @toggle-mobile-menu="toggleMobileMenu" />
            </div>
        </div>
        <!-- Добавляем Menu с привязкой к кнопке -->
        <Menu 
            v-if="isMobileMenuOpen"
            :button-element="burgerButton"
            @close="isMobileMenuOpen = false"
        />
    </header>
</template>