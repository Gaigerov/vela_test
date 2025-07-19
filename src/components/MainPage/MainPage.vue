<script setup lang="ts">
import { ref } from 'vue';
import Menu from '../../components/Menu/Menu.vue';
import styles from './MainPage.module.scss';

const isMenuVisible = ref(false);
const menuButton = ref<HTMLButtonElement | null>(null);

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};

const closeMenu = () => {
    isMenuVisible.value = false;
};
</script>

<template>
    <main :class="styles.mainPage">
        <div :class="styles.contentWrapper">
            <h1 :class="styles.title">Отправляйся в приключения с нашими эпическими лут-корзинами и наборами!</h1>
            <p :class="styles.description">
                Развивай свои навыки, следуя мудрым стратегиям мастеров, и поднимайся на новый уровень мастерства! С
                нашей поддержкой каждое твое действие станет частью великого искусства, а победы — результатом точного
                плана и безупречной подготовки!
            </p>
            <div :class="styles.buttonContainer">
                <button ref="menuButton" :class="styles.button" @click="toggleMenu">В каталог</button>
            </div>
        </div>

        <Menu 
            v-if="isMenuVisible" 
            :is-open="isMenuVisible"
            :button-element="menuButton" 
            @close="closeMenu" 
        />

        <div :class="styles.imageWrapper">
            <img src="../../assets/gamepad.png" alt="gamepad" :class="styles.mainImage" />
        </div>
    </main>
</template>