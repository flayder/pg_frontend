<script setup lang="ts">
const client = useClient()
const { data: games } = await client.get.games()

const sortBy = ref('')

const sortedGames = computed(() => (sortBy.value === 'views') ? games.value?.toSorted((a, b) => -(a.views - b.views)) : games.value)
</script>

<template>
    <PageMain title="Our Exclusive Porn Games. Don’t Waste Any Time!">
        <template #menu>
            <UIField v-model="sortBy" name="sort">
                <option value="" selected>Sort by ...</option>
                <option value="views" selected>Sort by views</option>
            </UIField>
        </template>
        <ul class="games-list">
            <li v-for="game in sortedGames" :key="game.id" class="games-list__item">
                <GameCard :game />
            </li>
        </ul>
    </PageMain>
</template>

<style lang="scss" scoped>
.games-list {
    list-style: none;
    padding: 2rem 0 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (width < $desktop) {
        grid-template-columns: auto;
    }
}
</style>