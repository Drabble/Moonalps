export interface IBand {
    name: string
    description: string
    url: string
    style: string
    location: string
    video: string
    image: string
    time?: string
    year: number
}
export interface IGallery {
    credits: string
    videos: [string]
    pictures: [string]
    video: string
    year: number
}
export interface ISponsor {
    name: string
    logo: string
    url: string
    principal: boolean
}
export interface IPartner {
    name: string
    logo: string
    supporter: boolean
    url: string
}
export interface IDonator {
    name: string
    location: string
}