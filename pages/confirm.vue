<script setup lang="ts">
const title = ref(`Email Confirmation`)
const description = ref(`Thank you for registering with us! To complete your registration, please confirm your email address by entering the 6-digit confirmation code we sent to your email. Once your email is confirmed, you'll be able to fully access all features of our platform.`)
const confirmed = ref(false)

async function handleConfirmation(code: number) {
    const client = useClient()

    if (await client.auth.confirm(code)) {
        title.value = `Account Confirmed`
        description.value = `Thank you for verifying your email. You now have full access to all features of our platform. You will be automatically redirected to the homepage in 5 seconds. If the redirection doesn't happen, please click the button.`
        setTimeout(() => navigateTo('/'), 5000)
        confirmed.value = true
    }
}
</script>

<template>
    <PageConfirmation :title :description :confirmed @confirmation="(code) => handleConfirmation(code)" />
</template>