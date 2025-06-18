<script setup lang="ts">
const route = useRoute()
const client = useClient()

const query = computed(() => route.query.tags ?? '') 

const tags = await client.get.tags()

const search = useDebounce((query) => client.get.gamesByTags(query), 500)

const { data: games } = await client.get.gamesByTags(query.value as string)

watch(query, async () => {
    const { data: response } = await search(query.value as string)
    games.value = response.value
})

</script>

<template>
    <PageMain title="Tags">
        <ul class="tags-list">
            <li v-for="tag in tags" :key="tag.id" class="tags-list__item">
                <GameTag :name="tag.name"/>
            </li>
        </ul>
        <ul class="games-list">
            <li v-for="game in games" :key="game.id" class="games-list__item">
                <GameCard :game />
            </li>
        </ul>
    </PageMain>
</template>

<style lang="scss" scoped>
.tags-list {
    list-style: none;
    padding: 1rem 0;
    margin: 0;
    font-size: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
.games-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (width < $desktop) {
        grid-template-columns: auto;
    }
}
</style>