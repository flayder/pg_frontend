<script setup lang="ts">
const title = ref(`Session Confirmation`)
const description = ref(`We detected a login attempt from a new device. To confirm it's really you, please enter the 6-digit confirmation code we sent to your email.\n\nIf you haven't received the email, please check your spam folder.\n\nFor security reasons, once you confirm your session, your oldest session will be automatically logged out.`)
const confirmed = ref(false)

async function handleConfirmation(code: number) {
    const client = useClient()

    if (await client.auth.confirmSession(code)) {
        title.value = `Session Confirmed`
        description.value = `You can now continue using your account on this device.\n\nYou will be automatically redirected to the homepage in 5 seconds. If the redirection doesn't happen, please click the button.`
        setTimeout(() => navigateTo('/'), 5000)
        confirmed.value = true
    }
}
</script>

<template>
    <PageConfirmation :title :description :confirmed @confirmation="(code) => handleConfirmation(code)" />
</template>