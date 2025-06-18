export default defineNuxtPlugin(async () => {
    const client = useClient()
    const user = useUser()

    const data = await client.auth.getStatus()

    user.value = (data.value) ? true : false
})
