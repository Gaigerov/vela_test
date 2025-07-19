<template>
    <div
        ref="menuRef"
        :class="[styles.menuPopup, {[styles.active]: isActive}]"
        :style="{'--submenu-width': `${submenuWidth}px`}"
        @mouseleave="closeSubMenu"
    >
        <div :class="styles.menuContent">
            <ul :class="styles.menuList">
                <li
                    v-for="(item, index) in menuItems"
                    :key="index"
                    :class="[styles.menuItem, {[styles.active]: activeIndex === index}]"
                    @mouseenter="showSubMenu(index, item.subs)"
                >
                    <div :class="styles.menuItemContent">
                        <img :src="getIconUrl(item.icon)" :class="styles.itemIcon" alt="" />
                        <span>{{ item.title }}</span>
                    </div>
                    <img v-if="item.subs" :src="getIconUrl('chevronRight.svg')" :class="styles.chevronIcon" alt="" />
                </li>
            </ul>

            <div
                v-if="activeSubs"
                ref="submenuRef"
                :class="styles.submenuContainer"
                @mouseenter="keepSubMenuOpen"
                @mouseleave="closeSubMenu"
            >
                <div v-for="(sub, subIndex) in activeSubs" :key="subIndex" :class="styles.submenuColumn">
                    <h3 :class="styles.submenuTitle">{{ sub.title }}</h3>
                    <ul :class="styles.submenuList">
                        <li
                            v-for="(product, productIndex) in sub.items"
                            :key="productIndex"
                            :class="styles.submenuItem"
                        >
                            {{ product }}
                        </li>
                    </ul>

                    <img
                        v-if="subIndex < activeSubs.length - 1"
                        :src="getIconUrl('chevronRight.svg')"
                        :class="styles.submenuDivider"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import type { PropType } from 'vue';
import styles from './Menu.module.scss';

interface SubItem {
    title: string;
    items: string[];
}

interface MenuItem {
    title: string;
    icon: string;
    subs?: SubItem[];
}

const props = defineProps({
    buttonElement: {
        type: Object as PropType<HTMLButtonElement | null>,
        default: null
    }
});

const emit = defineEmits(['close']);

const getIconUrl = (iconName: string) => {
    return new URL(`../../icons/${iconName}`, import.meta.url).href;
};



const menuItems: MenuItem[] = [
    {
        title: 'Смартфоны и гаджеты',
        icon: 'phone_menu.svg',
        subs: [
            {
                title: 'Смартфоны',
                items: [
                    'Apple iPhone 123',
                    'Смартфоны 227',
                    'iPhone 16 120',
                    'Складные 30',
                    'realme 120',
                    'Huawei Mate X6 100',
                    'Кнопочные 23',
                    'Домашние 17',
                    'Samsung 27'
                ]
            },
            {
                title: 'Гаджеты',
                items: [
                    'Смарт-часы 15',
                    'Смарт-кольца 34',
                    'Наушники 21',
                    'Гарнитуры 12',
                    'Портативное аудио 42',
                    'Умные гаджеты 46',
                    'Очки VR 49',
                    'Для блогеров 32'
                ]
            }
        ]
    },
    {
        title: 'Ноутбуки и компьютеры',
        icon: 'laptop_menu.svg',
        subs: [
            {
                title: 'Ноутбуки',
                items: ['Игровые', 'Офисные', 'Ультрабуки', 'MacBook']
            },
            {
                title: 'Компьютеры',
                items: ['Системные блоки', 'Мониторы', 'Комплектующие']
            }
        ]
    },
    {
        title: 'Телевизоры и цифровое ТВ',
        icon: 'tv_menu.svg',
        subs: [
            {
                title: 'Телевизоры',
                items: ['4K', 'OLED', 'Smart TV', 'До 32"']
            },
            {
                title: 'Аксессуары',
                items: ['Кронштейны', 'ТВ-приставки', 'Кабели']
            }
        ]
    },
    {
        title: 'Аудиотехника',
        icon: 'speaker_menu.svg',
        subs: [
            {
                title: 'Наушники',
                items: ['Беспроводные', 'Вкладыши', 'Накладные', 'Игровые']
            },
            {
                title: 'Колонки',
                items: ['Портативные', 'Домашние', 'Саундбары']
            }
        ]
    },
    {
        title: 'Акции',
        icon: 'flame_menu.svg'
    },
    {
        title: 'Новинки',
        icon: 'sale_menu.svg'
    }
];

const activeIndex = ref<number | null>(null);
const activeSubs = ref<SubItem[] | null>(null);
const menuRef = ref<HTMLElement | null>(null);
const submenuRef = ref<HTMLElement | null>(null);
const submenuWidth = ref(0);
const isSubMenuHovered = ref(false);
const isActive = ref(false);

const showSubMenu = (index: number, subs?: SubItem[]) => {
    activeIndex.value = index;
    activeSubs.value = subs || null;
    isSubMenuHovered.value = false;

    if (subs) {
        nextTick(() => {
            if (submenuRef.value) {
                submenuWidth.value = submenuRef.value.offsetWidth;
            }
        });
    }
};

const closeSubMenu = () => {
    if (!isSubMenuHovered.value) {
        activeIndex.value = null;
        activeSubs.value = null;
    }
};

const keepSubMenuOpen = () => {
    isSubMenuHovered.value = true;
};

const handleClickOutside = (event: MouseEvent) => {
    if (!menuRef.value || !props.buttonElement) return;
    
    const target = event.target as Node;
    
    if (
        !menuRef.value.contains(target) &&
        !props.buttonElement.contains(target)
    ) {
        emit('close');
    }
};

const updatePosition = () => {
    if (!menuRef.value || !props.buttonElement) return;
    
    const rect = props.buttonElement.getBoundingClientRect();
    
    menuRef.value.style.position = 'fixed';
    menuRef.value.style.top = `${rect.bottom + window.scrollY + 80}px`;
    menuRef.value.style.left = `${rect.left + window.scrollX}px`;
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', updatePosition);
    updatePosition();
    
    setTimeout(() => {
        if (menuRef.value) {
            isActive.value = true;
            menuRef.value.classList.add(styles.active);
        }
    }, 10);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
    window.removeEventListener('resize', updatePosition);
});
</script>