<script setup lang="ts">
import type { IGame } from '~/types/game';

    const client = useClient()

    const {data: game} = await client.get.random()

    const updateGame = async () => {
        var id = ''
        if(game.value?.id) {
            id = game.value.id
        }

        const {data: response} = await client.get.random(id as string)
        game.value = response.value
    }

</script>

<template>
    <PageMain title="Test your luck and play our random game">
        <template #menu>
            <UIButton gradient icon="rotate" @click="updateGame">
                Update
            </UIButton>
        </template>
        <div class="game random-game" v-if="game">
            <GameCard :game="game as IGame"/>
        </div>
    </PageMain>
</template>

<style scoped lang="scss">
    .game {
        padding: 2rem 0;
    }
</style>