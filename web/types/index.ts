export interface IPost {
    id: number,
    attributes: {
        title: string
        content: string
        slug: string 
        image: {
            data: IImage
        }
        createdAt: string
        locale: string
        publishedAt: string
        updatedAt: string}
}
export interface IBand {
    id: number,
    attributes: {
        name: string
        description: string
        url: string 
        video: string 
        image: {
            data: IImage
        }
        createdAt: string
        locale: string
        publishedAt: string
        updatedAt: string}
}
export interface IGallery {
    id: number,
    attributes: {
        year: string
        credits: string
        videos: {
            data: [IImage]
        }
        pictures: {
            data: [IImage]
        }
        createdAt: string
        locale: string
        publishedAt: string
        updatedAt: string}
}
export interface IHome {
    id: number,
    attributes: {
        dates: string
        location: string
        copyright: string 
        youtubeUrl: string 
        trailerYoutubeUrl: string 
        instagramUrl: string 
        facebookUrl: string 
        cover: {
            data: IImage
        }
        coverText: {
            data: IImage
        }
        tree: {
            data: IImage
        }
        createdAt: string
        locale: string
        publishedAt: string
        updatedAt: string}
}
export interface ISponsor {
    id: number,
    attributes: {
        name: string
        logo: {
            data: IImage
        }
        url: string 
        createdAt: string
        locale: string
        publishedAt: string
        updatedAt: string
    }
}
export interface IPartner {
    id: number,
    attributes: {
        name: string
        logo: {
            data: IImage
        }
        url: string 
        createdAt: string
        locale: string
        publishedAt: string
        updatedAt: string
    }
}
export interface IAbout {
    id: number,
    attributes: {
        content: string
        createdAt: string
        locale: string
        publishedAt: string
        updatedAt: string
    }
}
export interface IImage {
    id: number,
    attributes: {
        name: String,
        alternativeText: String,
        caption: String,
        width: number,
        height: number,
        formats: {
        thumbnail: [Object],
        large: [Object],
        medium: [Object],
        small: [Object]
        },
        hash: String,
        ext: String,
        mime: StringConstructor,
        size: 30.93,
        url: String,
        previewUrl: String,
        provider: String,
        provider_metadata: String,
        createdAt: String,
        updatedAt: String
    }
}