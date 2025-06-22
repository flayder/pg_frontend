<script setup lang="ts">
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'

defineProps<{
    id: string
}>()

const isCaptchaOpened = ref(false)
</script>

<template>
<div class="captcha">
    <VueHcaptcha class="captcha__trigger" sitekey="cdf299a4-18a6-459e-95a6-10a26528c812" size="normal" theme="dark" :challenge-container="`h-captcha-${id}`" @opened="isCaptchaOpened = true" @verify="isCaptchaOpened = false"/>
    <div v-show="isCaptchaOpened" :id="`h-captcha-${id}`" class="captcha__container" />
</div>
</template>

<style lang="scss" scoped>
</style>