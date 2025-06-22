<script setup lang="ts">
</script>
<template>
    <div class="text">
        <slot />
    </div>
</template>
<style scoped lang="scss">
    .text {
        color: var(--color-text);
        line-height: 1.5;
        
    }
    a {
        color: var(--color-accent);
        display: inline-block;
        text-decoration: none;
    }
</style>