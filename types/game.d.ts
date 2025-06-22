import type { ITag } from './tag'

export interface IGame {
    id: string
    title: string
    description: string
    likes: number
    dislikes: number
    views: number
    preview: string
    path: string
    gamePath?: string
    tags?: ITag[]
    likedByUser: boolean
    dislikedByUser: boolean
    images: []
    date: Date
}

export interface IGameLink {
    _id: string
    title: string
    description: string
    image: string
    path: string
}
