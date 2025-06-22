<script setup lang="ts">
const modal = useTemplateRef('dialog')
const toast = useToast()
const trigger = useState('dialogContact', () => '')

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

const client = useClient()

const email = ref('')
const message = ref('')
const captcha = ref('')

async function handleFormSubmit(event: Event) {
    const formData = new FormData(event.target as HTMLFormElement)
    captcha.value = formData.get('h-captcha-response') as string

    const response = await client.send.gameProblem(email.value, message.value, captcha.value)

    if (response.message === "Message received successfully") {
        email.value = ''
        message.value = ''
        toast.success(response.message)
        close()
    }
}

</script>

<template>
    <dialog ref="dialog" class="modal">
        <div class="modal__content" @click.self="close">
            <UICard title="Contact us">
                <form class="form" @submit.prevent="handleFormSubmit">
                    <div class="form__fields">
                        <UIField v-model.trim="email" type="email" name="email" placeholder="Email" required />
                        <UIField v-model="message" type="textarea" name="message" placeholder="Message" required />
                        <HCaptcha id="contact" />
                    </div>

                    <UIButton class="form__submit" type="submit" gradient>
                        Submit
                    </UIButton>
                </form>
            </UICard>
        </div>
    </dialog>
</template>

<style lang="scss" scoped>

.form {
    &__fields {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 2rem 0 0.5rem;
    }

    &__link {
        display: block;
        color: var(--color-text);
        text-align: center;
    }

    &__submit {
        width: 100%;
        font-size: 1.25rem;
        line-height: 2rem;
        margin-top: 1rem;
    }
}
</style>
