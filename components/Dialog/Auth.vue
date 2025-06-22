<script setup lang="ts">
const modal = useTemplateRef('dialog')

const trigger = useState('dialogAuth', () => '')

const type = ref('')

watch(trigger, () => {
    if (trigger.value === 'Close') {
        modal.value?.close()
        trigger.value = ''
    }

    if (trigger.value == 'Log in' || trigger.value == 'Register') {
        type.value = trigger.value
        modal.value?.showModal()
        trigger.value = ''
    }
})

const reverseType = computed(() =>
    type.value === 'Log in' ? 'Register' : 'Log in'
)

function close() {
    modal.value?.close()
}

const client = useClient()

const nickname = ref('')
const email = ref('')
const birthday = ref('')
const password = ref('')
const confirm = ref('')

async function handleFormSubmit(event: Event) {
    const formData = new FormData(event.target as HTMLFormElement)
    const captcha = formData.get('h-captcha-response')?.toString() ?? ''

    if (type.value === 'Log in') {
        try {
            client.auth.login(email.value, password.value, captcha)
        } catch (e) {
            console.log(e)
        }
    }

    if (type.value === 'Register') {
        try {
            client.auth.register(email.value, nickname.value, birthday.value, password.value, captcha)
        } catch (e) {
            console.log(e)
        }
    }
}

</script>

<template>
    <dialog ref="dialog" class="modal">
        <div class="modal__content" @click.self="close">
            <UICard :title="type">
                <form class="form" @submit.prevent="handleFormSubmit">
                    <div v-if="type === 'Log in'" class="form__fields">
                        <UIField v-model.trim="email" type="email" name="email" placeholder="Email" required/>
                        <UIField v-model.trim="password" type="password" name="password" placeholder="Password" required/>
                        <HCaptcha id="auth" />
                    </div>

                    <div v-else class="form__fields">
                        <UIField v-model.trim="nickname" type="text" name="nickname" placeholder="Nickname" required/>
                        <UIField v-model.trim="email" type="email" name="email" placeholder="Email" required/>
                        <UIField v-model.trim="birthday" type="date" name="birthday" placeholder="Birthday" required/>
                        <UIField v-model.trim="password" type="password" name="password" placeholder="Password" required/>
                        <UIField v-model.trim="confirm" type="password" name="confirm" placeholder="Confirm password" required/>
                        <HCaptcha id="auth" />
                    </div>

                    <NuxtLink v-if="type === 'Log in'" class="form__link" to="/forgot-password" @click="close">
                        Forgot password?
                    </NuxtLink>

                    <UIButton class="form__submit" type="submit" gradient>
                        {{ type }}
                    </UIButton>
                </form>
                <div class="separator">
                    or
                </div>
                <UIButton class="toggle" outline @click="type = reverseType">
                    {{ reverseType }}
                </UIButton>
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

.separator {
    color: var(--color-text);
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    padding: 0.75rem 0;
}

.toggle {
    width: 100%;
    font-size: 1.25rem;
    line-height: 2rem;
}
</style>
