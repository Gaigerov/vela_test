<script setup lang="ts">
import {ref} from 'vue';
import HeaderTopLine from './HeaderTopLine/HeaderTopLine.vue';
import HeaderMainLine from './HeaderMainLine/HeaderMainLine.vue';
import styles from './Header.module.scss';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
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
                <HeaderMainLine @toggle-mobile-menu="toggleMobileMenu" />
            </div>
        </div>
        <MobileMenu :is-open="isMobileMenuOpen" />
    </header>
</template>
