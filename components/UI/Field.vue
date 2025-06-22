<script setup lang="ts">
defineProps<{
    name: string
    label?: string
    placeholder?: string
    type?: FieldTypeAttribute | 'code' | 'textarea'
}>()

const model = defineModel<string | number>()

const active = ref(false)
</script>

<template>
    <div v-if="$slots.default" class="select" :class="{ 'select--active': active }">
        <select v-model="model" class="select__field" :name="name" @click="active = true" @blur="active = false">
            <slot />
        </select>
    </div>

    <input v-else-if="type === 'code'" v-model="model" class="code" :name="name" placeholder="_ _ _ _ _ _" type="text"
        maxlength="6">

    <input v-else-if="type === 'date'" v-model="model" class="field" :name="name" :label="label"
        :placeholder="placeholder" type="text" onfocus="this.type = 'date';this.local = 'en-EN'"
        onblur="if (!this.value) this.type = 'text'">

    <textarea v-else-if="type === 'textarea'" v-model="model" class="textarea" :name="name"
        :placeholder="placeholder" rows="5" />

    <input v-else v-model="model" class="field" :name="name" :label="label" :placeholder="placeholder" :type="type">
</template>

<style lang="scss" scoped>
.select {
    display: inline-block;
    position: relative;

    &::after {
        content: "▼";
        font-size: 0.5rem;
        color: var(--color-text);
        top: 50%;
        right: 1rem;
        translate: 0 -50%;
        position: absolute;
    }

    &__field {
        color: var(--color-text);
        font-weight: bold;
        background-color: var(--color-secondary);
        border: 1px solid var(--color-accent);
        border-radius: 0.5rem;
        padding: 0.25rem 2.25rem 0.25rem 1rem;
        appearance: none;
    }
}

.select--active {
    &::after {
        rotate: 180deg;
    }
}

.code {
    width: 100%;
    color: var(--color-text);
    font-weight: bold;
    background-color: var(--color-secondary);
    border: 1px solid var(--color-accent);
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 2.5rem;
    text-align: center;
}

.textarea {
    width: 100%;
    color: var(--color-text);
    font-weight: bold;
    background-color: var(--color-secondary);
    border: 1px solid var(--color-accent);
    border-radius: 0.5rem;
    padding: 1rem;
    resize: vertical;
}

.field {
    width: 100%;
    color: var(--color-text);
    font-weight: bold;
    background-color: var(--color-secondary);
    border: 1px solid var(--color-accent);
    border-radius: 0.5rem;
    padding: 1rem;

    &[type='search'] {
        border-color: var(--color-tertiary);

        &::-webkit-search-cancel-button {
            display: none;
        }
    }

    &::-webkit-datetime-edit-fields-wrapper {
        padding: 0;
    }

    &::-webkit-calendar-picker-indicator {
        padding: 0;
        filter: invert(1);
    }
}
</style>