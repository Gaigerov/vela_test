import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
import styles from './MenuLinkPopup.module.scss';
import chevronRightIcon from '@/icons/chevronRight.svg';
import peopleIcon from '@/icons/people.svg';
import gamesIcon from '@/icons/games.svg';
import cubeIcon from '@/icons/cube.svg';
const props = defineProps({
    buttonElement: {
        type: Object,
        default: null
    },
    popupData: {
        type: Object,
        required: true
    }
});
const emit = defineEmits(['close']);
const activeIndex = ref(null);
const activeSubs = ref(null);
const menuRef = ref(null);
const submenuRef = ref(null);
const submenuWidth = ref(0);
const isSubMenuHovered = ref(false);
const iconMap = {
    'people.svg': peopleIcon,
    'games.svg': gamesIcon,
    'cube.svg': cubeIcon,
    'chevronRight.svg': chevronRightIcon
};
const hasSubItems = (column) => {
    return column.items && column.items.length > 0;
};
const positionStyle = computed(() => {
    if (!props.buttonElement || !menuRef.value)
        return {};
    const rect = props.buttonElement.getBoundingClientRect();
    return {
        top: `${rect.bottom + window.scrollY + 21}px`,
        left: `${rect.left + window.scrollX}px`,
        '--submenu-width': `${submenuWidth.value}px`
    };
});
const getIconUrl = (iconName) => {
    return iconMap[iconName] || `/icons/${iconName}`;
};
const showSubMenu = (index, column) => {
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
    }
    else {
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
const handleClickOutside = (event) => {
    if (!menuRef.value || !props.buttonElement)
        return;
    const target = event.target;
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onMouseleave: (__VLS_ctx.closeSubMenu) },
    ref: "menuRef",
    ...{ class: (__VLS_ctx.styles.menuPopup) },
    ...{ style: (__VLS_ctx.positionStyle) },
});
/** @type {typeof __VLS_ctx.menuRef} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.styles.menuContent) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: (__VLS_ctx.styles.menuList) },
});
for (const [column, index] of __VLS_getVForSourceType((__VLS_ctx.popupData.columns))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ onMouseenter: (...[$event]) => {
                __VLS_ctx.showSubMenu(index, column);
            } },
        key: (index),
        ...{ class: ([__VLS_ctx.styles.menuItem, { [__VLS_ctx.styles.active]: __VLS_ctx.activeIndex === index }]) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: (__VLS_ctx.styles.menuItemContent) },
    });
    if (column.icon) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: (__VLS_ctx.getIconUrl(column.icon)),
            ...{ class: (__VLS_ctx.styles.itemIcon) },
            alt: "",
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (column.title);
    if (__VLS_ctx.hasSubItems(column)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: (__VLS_ctx.getIconUrl('chevronRight.svg')),
            ...{ class: (__VLS_ctx.styles.chevronIcon) },
            alt: "",
        });
    }
}
if (__VLS_ctx.activeSubs) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onMouseenter: (__VLS_ctx.keepSubMenuOpen) },
        ...{ onMouseleave: (__VLS_ctx.closeSubMenu) },
        ref: "submenuRef",
        ...{ class: (__VLS_ctx.styles.submenuContainer) },
    });
    /** @type {typeof __VLS_ctx.submenuRef} */ ;
    for (const [sub, subIndex] of __VLS_getVForSourceType((__VLS_ctx.activeSubs))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (subIndex),
            ...{ class: (__VLS_ctx.styles.submenuColumn) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: (__VLS_ctx.styles.submenuTitle) },
        });
        (sub.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: (__VLS_ctx.styles.submenuList) },
        });
        for (const [item, itemIndex] of __VLS_getVForSourceType((sub.items))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: (itemIndex),
                ...{ class: (__VLS_ctx.styles.submenuItem) },
            });
            (item);
        }
        if (subIndex < __VLS_ctx.activeSubs.length - 1) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
                src: (__VLS_ctx.getIconUrl('chevronRight.svg')),
                ...{ class: (__VLS_ctx.styles.submenuDivider) },
                alt: "",
            });
        }
    }
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            styles: styles,
            activeIndex: activeIndex,
            activeSubs: activeSubs,
            menuRef: menuRef,
            submenuRef: submenuRef,
            hasSubItems: hasSubItems,
            positionStyle: positionStyle,
            getIconUrl: getIconUrl,
            showSubMenu: showSubMenu,
            closeSubMenu: closeSubMenu,
            keepSubMenuOpen: keepSubMenuOpen,
        };
    },
    emits: {},
    props: {
        buttonElement: {
            type: Object,
            default: null
        },
        popupData: {
            type: Object,
            required: true
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        buttonElement: {
            type: Object,
            default: null
        },
        popupData: {
            type: Object,
            required: true
        }
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=MenuLinkPopup.vue.js.map