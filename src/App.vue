<script setup lang="ts">
import Header from './components/Header/Header.vue';
import MainPage from './components/MainPage/MainPage.vue';
import styles from './App.module.scss';
</script>

<template>
    <div :class="styles.app">
        <Header />
        <MainPage />
    </div>
</template>
