<script setup lang="ts">
const popover = useTemplateRef('toast')
const message = ref('')
const type = ref('')
const trigger = useState('toast', () => ({ type: '', message: '' }))

watch(trigger, () => {
    if (trigger.value.message) {
        type.value = trigger.value.type
        message.value = trigger.value.message
        popover.value?.showPopover()
        setTimeout(() => popover.value?.hidePopover(), 3000)
        trigger.value = { type: '', message: '' }
    }
})
</script>

<template>
    <div ref="toast" class="toast" :class="{ 'toast--error': type === 'error', 'toast--success': type === 'success' }" popover="manual">{{ message }}</div>
</template>

<style lang="scss" scoped>
.toast {
    inset: unset;
    bottom: 2rem;
    right: 2rem;
    color: var(--color-text);
    border: 0;
    border-radius: 0.5rem;
    padding: 2rem 1rem;
}

.toast--error {
    background-color: var(--color-error);
}

.toast--success {
    background-color: var(--color-success);
}
</style>