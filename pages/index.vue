<script setup lang="ts">
const client = useClient()
const { data: games } = await client.get.games()
const sortBy = ref('')

const toSorted = () => {
    return (Array.isArray(games.value)) ? games.value.slice().sort((a, b) => {
        switch (sortBy.value) {
          case "Popular":
            return b.views - a.views;
          case "Best":
            return b.likes - a.likes;
          case "Date":
            return new Date(b.date) - new Date(a.date); // date: "YYYY-MM-DD"
          default:
            return 0;
        }
  }) : games.value;
}

const sortedGames = computed(() => toSorted())
</script>

<template>
    <PageMain title="Our Exclusive Porn Games. Don’t Waste Any Time!">
        <template #menu>
            <UIField v-model="sortBy" name="sort">
                <option value="" selected>Sort by ...</option>
                <option value="Popular">Popular</option>
                <option value="Best">Best</option>
                <option value="Date">Date</option>
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