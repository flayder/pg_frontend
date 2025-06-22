<script setup lang="ts">
const { name } = defineProps<{
    name: string
}>()

const route = useRoute()

const active = computed(() => route.query.tags?.toString().split(',').includes(name))

const query = computed(() => {
    var tags = new Set(route.query.tags?.toString().split(','))

    if (route.query.tags) {
        if (active.value) {
            tags.delete(name)
            
            return Array.from(tags).join(',')
        }
        
        tags.add(name)

        if(Array.from(tags).length > 3) {
            console.log(route.query.tags?.toString().split(','))
            console.log(Array.from(tags).length - 2)
            tags = new Set(route.query.tags?.toString().split(',').splice(1, 2))
            tags.add(name)
        }

        return Array.from(tags).join(',')
    }

    return name
})
</script>

<template>
    <NuxtLink class="tag" :class="{ 'tag--active': active }" :to="`/tags?tags=${query}`">
        + {{ name }}
    </NuxtLink>
</template>

<style lang="scss" scoped>
.tag {
    display: inline-block;
    text-decoration: none;
    color: var(--color-text);
    font-family: 'Bullet Trace 7';
    padding: 0.25rem 1rem;
    background-color: var(--color-tertiary);
    border-radius: 0.5rem;
}

.tag--active {
    background-color: var(--color-accent);
}
</style>