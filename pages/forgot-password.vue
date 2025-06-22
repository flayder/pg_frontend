<script setup lang="ts">

const client = useClient()
const toast = useToast()

const email = ref('')
const confirmation = ref('')
const password = ref('')
const confirm = ref('')
const forgot = ref(true)

async function handleFormForgotSubmit(event: Event) {
    const formData = new FormData(event.target as HTMLFormElement)
    const response = await client.auth.forgot(email.value)
    forgot.value = false
}

async function handleFormForgotConfirmSubmit(event: Event) {
    const formData = new FormData(event.target as HTMLFormElement)
    await client.auth.reset(confirmation.value, password.value)
}
</script>

<template>
    <div class="recovery">
      <form class="recovery__form" @submit.prevent="handleFormForgotSubmit" v-if="forgot">
        <h1 class="recovery__title">Password Recovery</h1>
        <div class="recovery__description">
            Please enter your email address below, and we will send you a confirmation code. After receiving the code, you will be able to reset your password.
            <br/>
            If you do not receive the email, check your spam folder or click "Resend Code" to get a new one.
        </div>
        <UIField v-model.trim="email" type="email" name="email" placeholder="Email" required />
        
        <UIButton gradient class="recovery__submit">
            Submit
        </UIButton>
      </form>
      <form class="recovery__form" @submit.prevent="handleFormForgotConfirmSubmit" v-else>
        <h1 class="recovery__title">Enter your reset code and new password</h1>
        <div class="recovery__description">
            A password reset code has been sent to your email. Please enter the 6-digit code below to proceed with resetting your password. Please enter your new password below. Make sure it is at least 8 characters long and contains a mix of letters, numbers, and special characters. Once you’ve entered your new password, click «Submit» to complete the password reset process.
        </div>
        <UIField v-model="confirmation" type="code" name="confirm" placeholder="_ _ _ _ _ _" required />
        <UIField v-model="password" type="password" name="password" placeholder="Password" required />
        <UIField v-model="confirm" type="password" name="confirm" placeholder="Confirm password" required />
        <UIButton gradient class="recovery__submit">
            Submit
        </UIButton>
      </form>
    </div>
</template>

<style scoped lang="scss">
.recovery {
    align-content: center;
    margin-inline: auto;
    width: min(100%, 32rem);

    &__form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    &__title,
    &__description {
        color: var(--color-text);
        text-align: center;
    }

    &__title {
        font-family: "Bullet Trace 7";
        font-size: 2.5rem;
        font-weight: 400;
        margin: 0;
    }
}
</style>