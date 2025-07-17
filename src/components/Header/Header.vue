<script setup lang="ts">
import { ref } from 'vue';
import HeaderTopLine from './HeaderTopLine/HeaderTopLine.vue';
import HeaderMainLine from './HeaderMainLine/HeaderMainLine.vue';
import Menu from '@/components/Menu/Menu.vue';
import styles from './Header.module.scss';

const isMobileMenuOpen = ref(false);
const burgerButton = ref<HTMLButtonElement | null>(null);

const toggleMobileMenu = (button: HTMLButtonElement) => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    burgerButton.value = button;
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
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
                <HeaderMainLine 
                    :is-menu-open="isMobileMenuOpen" 
                    @toggle-mobile-menu="toggleMobileMenu" 
                />
            </div>
        </div>
        <Menu 
            v-if="isMobileMenuOpen"
            :button-element="burgerButton"
            @close="closeMobileMenu"
        />
    </header>
</template>
