<script setup lang="ts">
import styles from './HeaderTopLine.module.scss';

const contactItems = [
    {icon: 'location', text: 'Сайлент-Хилл'},
    {icon: 'phone', text: '+7 555 555-37-50'}
];

const navItems = ['Доставка', 'Оплата', 'Контакты'];
const phoneContact = contactItems.find(item => item.icon === 'phone')!;
</script>

<template>
    <div :class="styles.topLine">
        <div :class="styles.langCell">
            <div :class="styles.lang">
                <img src="/icons/globe.svg" :class="styles.langIcon" alt="Globe" />
                <span :class="styles.activeLang">RU</span> |
                <span>EN</span>
            </div>
        </div>

        <div :class="styles.contacts">
            <div v-for="(item, index) in contactItems" :key="index" :class="styles.contactItem">
                <img :src="`/icons/${item.icon}.svg`" :class="styles.contactIcon" :alt="item.icon" />
                <span>{{ item.text }}</span>
            </div>
        </div>
        <div :class="styles.schedule">Ежедневно 9:00-21:00</div>
        <nav :class="styles.navTop">
            <a v-for="(item, index) in navItems" :key="index" :class="styles.navLink" href="#">
                {{ item }}
            </a>
        </nav>

        <div :class="styles.mobileContact">
            <div :class="styles.contactItem">
                <img src="/icons/phone.svg" :class="styles.contactIcon" alt="phone" />
                <span>{{ phoneContact.text }}</span>
            </div>
        </div>
    </div>
</template>
