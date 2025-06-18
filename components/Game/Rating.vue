<script setup lang="ts">
const props = defineProps<{
    path: string
    likes: number
    liked: boolean
    dislikes: number
    disliked: boolean
}>()

const likes = ref(props.likes)
const liked = ref(props.liked)
const dislikes = ref(props.dislikes)
const disliked = ref(props.disliked)

const client = useClient()
const user = useUser()
const dialogAuth = useDialogAuth()

watch(props, () => {
    likes.value = props.likes
    liked.value = props.liked
    dislikes.value = props.dislikes
    disliked.value = props.disliked
})

function updateRating(rating: {success: boolean, likes: number, dislikes: number}) {
    likes.value = rating.likes
    dislikes.value = rating.dislikes
}

async function handleClick(type: 'like' | 'dislike') {
    if (user.value) {
        if (type === 'like') {
            const response = await client.send.like(props.path)
            if (response.success) {
                disliked.value = false
                liked.value = !liked.value
                updateRating(response)
            }
            return
        }

        if (type === 'dislike') {
            const response = await client.send.dislike(props.path)
            if (response.success) {
                liked.value = false
                disliked.value = !disliked.value
                updateRating(response)
            }
            return
        }
    }

    dialogAuth.open('Log in')
}
</script>

<template>
    <div class="rating">
        <UIButton icon="like" class="rating__button" :class="{ 'rating__button--checked': liked }"
            @click="() => handleClick('like')" />
        <div class="rating__amount" :class="{ 'rating__amount--checked': liked }">{{ likes }}</div>
        <UIButton icon="dislike" class="rating__button" :class="{ 'rating__button--checked': disliked }"
            @click="() => handleClick('dislike')" />
        <div class="rating__amount" :class="{ 'rating__amount--checked': disliked }">{{ dislikes }}</div>
    </div>
</template>

<style lang="scss" scoped>
.rating {
    display: flex;
    gap: 0.5em;
    align-items: center;
    font-weight: bold;
    color: var(--color-tertiary);

    &__button {
        color: var(--color-tertiary);
    }

    &__button--checked {
        color: var(--color-checked);
    }

    &__amount--checked {
        color: var(--color-accent);
    }
}
</style>