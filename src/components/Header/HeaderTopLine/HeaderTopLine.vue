<script setup lang="ts">
import styles from './HeaderTopLine.module.scss';

// Импорт иконок
import globeIcon from '@/icons/globe.svg';
import locationIcon from '@/icons/location.svg';
import phoneIcon from '@/icons/phone.svg';

// Определение типа для элементов контактов
interface ContactItem {
    icon: string;
    text: string;
    iconSrc: string; // Явно добавляем новое свойство
}

const contactItems: ContactItem[] = [
    {icon: 'location', text: 'Сайлент-Хилл', iconSrc: locationIcon},
    {icon: 'phone', text: '+7 555 555-37-50', iconSrc: phoneIcon}
];

const navItems = ['Доставка', 'Оплата', 'Контакты'];
const phoneContact = contactItems.find(item => item.icon === 'phone')!;
</script>

<template>
    <div :class="styles.topLine">
        <div :class="styles.langCell">
            <div :class="styles.lang">
                <img :src="globeIcon" :class="styles.langIcon" alt="Globe" />
                <span :class="styles.activeLang">RU</span> |
                <span>EN</span>
            </div>
        </div>

        <div :class="styles.contacts">
            <div v-for="(item, index) in contactItems" :key="index" :class="styles.contactItem">
                <img :src="item.iconSrc" :class="styles.contactIcon" :alt="item.icon" />
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
                <img :src="phoneContact.iconSrc" :class="styles.contactIcon" alt="phone" />
                <span>{{ phoneContact.text }}</span>
            </div>
        </div>
    </div>
</template>
