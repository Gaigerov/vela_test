<template>
    <div ref="menuRef" :class="styles.menuPopup" :style="positionStyle" @mouseleave="closeSubMenu">
        <div :class="styles.menuContent">
            <ul :class="styles.menuList">
                <li
                    v-for="(column, index) in popupData.columns"
                    :key="index"
                    :class="[styles.menuItem, {[styles.active]: activeIndex === index}]"
                    @mouseenter="showSubMenu(index, column)"
                >
                    <div :class="styles.menuItemContent">
                        <img v-if="column.icon" :src="getIconUrl(column.icon)" :class="styles.itemIcon" alt="" />
                        <span>{{ column.title }}</span>
                    </div>
                    <img
                        v-if="hasSubItems(column)"
                        :src="getIconUrl('chevronRight.svg')"
                        :class="styles.chevronIcon"
                        alt=""
                    />
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
                        <li v-for="(item, itemIndex) in sub.items" :key="itemIndex" :class="styles.submenuItem">
                            {{ item }}
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
import {ref, computed, onMounted, onBeforeUnmount, nextTick} from 'vue';
import type {PropType} from 'vue';
import styles from './MenuLinkPopup.module.scss';

import chevronRightIcon from '@/icons/chevronRight.svg';
import peopleIcon from '@/icons/people.svg';
import gamesIcon from '@/icons/games.svg';
import cubeIcon from '@/icons/cube.svg';

export interface PopupColumn {
    title: string;
    icon?: string;
    items: string[];
}

export interface PopupData {
    title: string;
    columns: PopupColumn[];
}

const props = defineProps({
    buttonElement: {
        type: Object as PropType<HTMLElement | null>,
        default: null
    },
    popupData: {
        type: Object as PropType<PopupData>,
        required: true
    }
});

const emit = defineEmits(['close']);

const activeIndex = ref<number | null>(null);
const activeSubs = ref<PopupColumn[] | null>(null);
const menuRef = ref<HTMLElement | null>(null);
const submenuRef = ref<HTMLElement | null>(null);
const submenuWidth = ref(0);
const isSubMenuHovered = ref(false);

const iconMap: Record<string, string> = {
    'people.svg': peopleIcon,
    'games.svg': gamesIcon,
    'cube.svg': cubeIcon,
    'chevronRight.svg': chevronRightIcon
};

const hasSubItems = (column: PopupColumn) => {
    return column.items && column.items.length > 0;
};

const positionStyle = computed(() => {
    if (!props.buttonElement || !menuRef.value) return {};

    const rect = props.buttonElement.getBoundingClientRect();
    return {
        top: `${rect.bottom + window.scrollY + 21}px`,
        left: `${rect.left + window.scrollX}px`,
        '--submenu-width': `${submenuWidth.value}px`
    };
});

const getIconUrl = (iconName: string) => {
    return iconMap[iconName] || `/icons/${iconName}`;
};

const showSubMenu = (index: number, column: PopupColumn) => {
    activeIndex.value = index;
    isSubMenuHovered.value = false;


    if (hasSubItems(column)) {
        activeSubs.value = [
            {
                title: column.title,
                items: column.items,
                icon: column.icon
            }
        ];

        nextTick(() => {
            if (submenuRef.value) {
                submenuWidth.value = submenuRef.value.offsetWidth;
            }
        });
    } else {
        activeSubs.value = null;
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

    if (!menuRef.value.contains(target) && !props.buttonElement.contains(target)) {
        emit('close');
    }
};

const updatePosition = () => {
    if (menuRef.value && props.buttonElement) {
        const rect = props.buttonElement.getBoundingClientRect();
        menuRef.value.style.top = `${rect.bottom + window.scrollY + 21}px`;
        menuRef.value.style.left = `${rect.left + window.scrollX}px`;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', updatePosition);
    updatePosition();
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
    window.removeEventListener('resize', updatePosition);
});
</script>
