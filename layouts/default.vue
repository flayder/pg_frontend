<script setup lang="ts">
</script>

<template>
    <div class="layout">
        <SvgSprite />
        <DialogAuth />
        <DialogContact />
        <PopoverToast />
        <PageHeader />
        <div class="layout__content">
            <div class="layout__banner layout__banner--left" />
            <slot />
            <div class="layout__banner layout__banner--right" />
        </div>
        <PageFooter />
    </div>
</template>

<style lang="scss" scoped>
.layout {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);

    &__content {
        flex-grow: 1;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr min(100%, var(--container)) 1fr;
    }

    &__banner {
        background-size: cover;
    }

    &__banner--left {
        background-image: url("/images/banner1.svg");
    }

    &__banner--right {
        background-image: url("/images/banner2.svg");
    }
}
</style>
