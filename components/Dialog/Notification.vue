<script setup lang="ts">
const modal = useTemplateRef('dialog')
const acceptedUser = useCookie('acceptedUser')

const trigger = useState('dialogNotification', () => '')

watch(trigger, () => {
    if (trigger.value === 'Close') {
        modal.value?.close()
        trigger.value = ''
    }

    if (trigger.value) {
        modal.value?.showModal()
        trigger.value = ''
    }
})

function close() {
    modal.value?.close()
}

const accepted = () => {
    acceptedUser.value = 'Y'
    close()
}

const client = useClient()
</script>

<template>
    <dialog ref="dialog" class="modal" open v-if="!acceptedUser">
        <div class="modal__content" @click.self="close">
            <UICard class="card__content">
                <div class="card__icon">
                    <UIIcon name="mature" class="svg__icon" />
                </div>
                <header class="card__title">This website contains content intended for individuals of legal age.</header>
                <div class="modal__text">
                    <p>If you are under 18 years old or below the age of majority in your location, you are not authorized to enter this website or access any of its materials. </p>
                    <p> Additionally, by proceeding, you confirm that you are not offended by nudity and explicit depictions of sexual activity. </p>
                    <p> By clicking the "Enter" button and accessing this website, you affirm your agreement with the aforementioned conditions and certify, under penalty of perjury, that you are an adult. </p>
                </div>
                <div class="modal__control">
                    <UIButton gradient class="btn-gradient" @click="accepted">
                        Yes, i’m over 18
                    </UIButton>
                    <UIButtonLink to="https://google.com/" class="modal__button modal__button--deny">
                        Go away
                    </UIButtonLink>
                </div>
            </UICard>
        </div>
    </dialog>
</template>

<style lang="scss" scoped>

.card {
    &__title {
        color: var(--color-text);
        font-family: "Bullet Trace 7";
        font-size: 1.5rem;
        text-align: center;

        @media(width > $desktop) {
            font-size: 2rem;
        }
    }
    &__icon {
        display: flex;
        justify-content: center;
        width: 100%;
        order: -1;
    }
}
.svg__icon {
    
    fill: none;
    color: var(--color-accent);
    display: flex;
    font-size: 3rem;
    justify-content: center;
    padding-bottom: 1rem;

    @media(width > $desktop) {
        font-size: 4rem;
    }
}

.modal__content {
    color: var(--color-text);
    line-height: 1.5;
}

.modal__control {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
}

.btn-gradient {
    padding-left: inherit;
    padding-right: inherit;
    outline: none;
}

.modal__button {
    border-radius: .5rem;
    &--deny {
        background-color: var(--color-tertiary);
    }
}
</style>
