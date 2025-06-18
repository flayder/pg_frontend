export interface IProfile {
    _id: string
    email: string
    nickname: string
    birthdate: Date
    subscriptionStatus: string
    flexId?: string
    priceDescription?: string
    subscriptionExpires?: string
    subscriptionId?: string
    accountingInitialPrice?: string
    role: string
    isActive: boolean
    sessions: ISession[]
    __v: number
}

interface ISession {
    token: string
    _id: string
    createdAt: Date
}
