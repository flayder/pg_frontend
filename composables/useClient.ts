import type { LocationQueryValue } from 'vue-router'
import type { IError } from '~/types/error'
import type { IGame, IGameLink } from '~/types/game'
import type { ITag } from '~/types/tag'
import type { IProfile } from '~/types/profile'
import type { IUser } from '~/types/user'

export default function () {
    const config = useRuntimeConfig()
    const toast = useToast()
    const user = useUser()
    const dialogAuth = useDialogAuth()

    const responseObj = {
        auth: {
            async forgot(email: string) {
                return await $fetch(`${config.public.apiBase}/api/auth/forgot-password`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: { email },
                    onResponse: ({ response }) => {
                        if(response.ok)
                            responseObj.metrica.handleMetrica('forgot')
                    },
                    onResponseError({ response }) {
                        toast.error(response._data.message)
                    },
                }).catch(() => null)
            },
            async reset(token: string, password: string) {
                return await $fetch(`${config.public.apiBase}/api/auth/reset/${token}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: { password },
                    onResponse: ( {response} ) => {
                        if(response.ok) {
                            toast.success(response._data.message)
                            navigateTo('/')
                            responseObj.metrica.handleMetrica('reset')
                        }
                    },
                    onResponseError({ response }) {
                        toast.error(response._data.message)
                    },
                }).catch(() => null)
            },
            async login(email: string, password: string, captcha: string) {
                return await $fetch(`${config.public.apiBase}/api/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: { email, password, captcha },
                    onResponse: ({ response }) => {
                        if (response.ok) {
                            //console.log('response._data', response._data)
                            dialogAuth.close()
                            user.value = true
                            toast.success(response._data.message)
                            responseObj.metrica.handleMetrica('login')
                        }
                    },
                    onResponseError({ response }) {
                        if (
                            response._data.message ===
                            'Max 3 sessions. Please confirm your session.'
                        ) {
                            dialogAuth.close()
                            navigateTo('/session')
                        }
                        toast.error(response._data.message)
                    },
                }).catch(() => null)
            },

            async confirmSession(code: number) {
                return await $fetch(
                    `${config.public.apiBase}/api/auth/confirm-session/${code}`,
                    {
                        onResponse({ response }) {
                            if (response.ok) {
                                toast.success(response._data.message)
                            }
                        },
                        onResponseError({ response }) {
                            toast.error(response._data.message)
                        },
                    }
                ).catch(() => null)
            },

            async register(
                email: string,
                nickname: string,
                birthdate: string,
                password: string,
                captcha: string
            ) {
                return await $fetch(
                    `${config.public.apiBase}/api/auth/register`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: { email, nickname, birthdate, password, captcha },
                        onResponse: ({ response }) => {
                            if (response.ok) {
                                dialogAuth.close()
                                responseObj.metrica.handleMetrica('register')
                                navigateTo('/confirm')
                                toast.success(response._data.message)
                            }
                        },
                        onResponseError({ response }) {
                            toast.error(response._data.message)
                        },
                    }
                ).catch(() => null)
            },

            async confirm(code: number) {
                return await $fetch(
                    `${config.public.apiBase}/api/auth/confirm/${code}`,
                    {
                        onResponse({ response }) {
                            if (response.ok) {
                                user.value = true
                                toast.success(response._data.message)
                            }
                        },
                        onResponseError({ response }) {
                            toast.error(response._data.message)
                        },
                    }
                ).catch(() => null)
            },

            async logout() {
                return await $fetch(
                    `${config.public.apiBase}/api/auth/logout`,
                    {
                        method: 'POST',
                        headers: useRequestHeaders(['cookie']),
                        credentials: 'include',
                        onResponse({ response }) {
                            if (response.ok) {
                                user.value = false
                                toast.success(response._data.message)
                            }
                        },
                        onResponseError({ response }) {
                            toast.error(response._data.message)
                        },
                    }
                ).catch((error) => error.data)
            },

            async getStatus() {
                const { data } = await useLazyFetch<IUser>(
                    `${config.public.apiBase}/api/auth/status`,
                    {
                        headers: useRequestHeaders(['cookie']),
                        credentials: 'include',
                    }
                )

                return data
            },
        },

        get: {
            async random(id?: string) {
                const cloneId = id ?? ''
                return await useAsyncData(
                    `random${cloneId}`,
                    () =>
                        $fetch<IGame | IError>(
                            `${config.public.apiBase}/api/games/random?id=${cloneId}`,
                            {
                                headers: useRequestHeaders(['cookie']),
                                credentials: 'include',
                            }
                        ),
                    {
                        watch: [user],
                    }
                )
            },

            async games() {
                return await useAsyncData(
                    'games',
                    () =>
                        $fetch<IGame[] | IError>(
                            `${config.public.apiBase}/api/games/get-games`,
                            {
                                headers: useRequestHeaders(['cookie']),
                                credentials: 'include',
                            }
                        ),
                    {
                        watch: [user],
                    }
                )
            },

            async game(path: string) {
                return await useAsyncData(
                    `game${path}`,
                    () =>
                        $fetch<IGame | IError>(
                            `${config.public.apiBase}/api/games/game/${path}  `,
                            {
                                headers: useRequestHeaders(['cookie']),
                                credentials: 'include',
                            }
                        ),
                    {
                        watch: [user],
                    }
                )
            },

            async tags() {
                const { data } = await useLazyFetch<ITag[]>(
                    `${config.public.apiBase}/api/games/tags`
                )

                return data
            },

            async gamesByTags(query: LocationQueryValue) {
                return await useAsyncData(
                    `gamesByTags${query}`,
                    () => {
                        return $fetch<IGame[]>(
                            `${config.public.apiBase}/api/games/games-by-tags?tags=${query}`,
                            {
                                headers: useRequestHeaders(['cookie']),
                                credentials: 'include',
                            }
                        )},
                    {
                        watch: [user],
                    }
                )
            },

            async profile() {
                return await useAsyncData(
                    'profile',
                    () =>
                        $fetch<IProfile | IError>(
                            `${config.public.apiBase}/api/games/profile`,
                            {
                                headers: useRequestHeaders(['cookie']),
                                credentials: 'include',
                            }
                        ),
                    {
                        watch: [user],
                    }
                )
            },
        },

        metrica: {
            async handleMetrica(event: string, value: string = '', ip: string = '') {
                return await $fetch(
                    `${config.public.apiBase}/api/metrica`,
                    {
                        method: 'POST',
                        headers: {'Content-type': 'application/json'},
                        body: {event, value, ip}
                    }
                )
            },
        },

        search: {
            async games(query: string) {
                return await $fetch<IGameLink[] | IError>(
                    `${config.public.apiBase}/api/games/search?query=${query}`
                ).catch((error) => error.data)
            },
        },

        send: {
            async gameProblem(email: string, message: string, captcha: string) {
                return await $fetch<IGame[] | never[]>(
                    `${config.public.apiBase}/api/games/send`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: { email, message, captcha },
                        onResponse: async ({response}) => {
                            await responseObj.metrica.handleMetrica('contact_form')
                        },
                        onResponseError({ response }) {
                            toast.error(response._data.message)
                        },
                    }
                ).catch(() => [])
            },

            async like(path: string) {
                return await $fetch<IError>(
                    `${config.public.apiBase}/api/games/like/${path}`,
                    {
                        method: 'POST',
                        headers: useRequestHeaders(['cookie']),
                        credentials: 'include',
                        onResponse: ({ response }) => {
                            responseObj.metrica.handleMetrica('like', path)
                        },
                        onResponseError({ response }) {
                            toast.error(response._data.message)
                        },
                    }
                ).catch((error) => error.data)
            },

            async dislike(path: string) {
                return await $fetch<IError>(
                    `${config.public.apiBase}/api/games/dislike/${path}`,
                    {
                        method: 'POST',
                        headers: useRequestHeaders(['cookie']),
                        credentials: 'include',
                        onResponse: ({ response }) => {
                            responseObj.metrica.handleMetrica('dislike', path)
                        },
                        onResponseError({ response }) {
                            toast.error(response._data.message)
                        },
                    }
                ).catch((error) => error.data)
            },
        },
    }

    return responseObj
}
