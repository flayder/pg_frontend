export default defineNuxtPlugin(async () => {
    const client = useClient()
    const user = useUser()

    const data = await client.auth.getStatus()

    console.log('data.value', data.value)

    user.value = (data.value) ? true : false
})
