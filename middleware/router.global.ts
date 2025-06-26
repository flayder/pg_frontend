export default defineNuxtRouteMiddleware(async (to, from) => {
  if(!import.meta.server && to.fullPath) {
    if(window?.myAppConfig?.initiation) {
      const client = useClient()
      await client.metrica.handleMetrica('link', to.fullPath)
    } else {
      window.myAppConfig = {
        initiation: true
      }
    }
  }
})