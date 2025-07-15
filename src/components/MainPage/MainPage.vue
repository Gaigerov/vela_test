<script setup lang="ts">
import styles from './MainPage.module.scss';
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
            <button :class="styles.button">В каталог</button>
        </div>
        <div :class="styles.imageWrapper">
            <img src="../../assets/gamepad.png" alt="gamepad" :class="styles.mainImage" />
        </div>
    </main>
</template>
