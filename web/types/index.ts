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
        updatedAt: string,
        year: number
    }
}
export interface IGallery {
    id: number,
    attributes: {
        year: number
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
export interface IGeneral {
    id: number,
    attributes: {
        date: string
        address: string
        copyright: string 
        youtubeUrl: string 
        instagramUrl: string 
        facebookUrl: string 
        postulationEmail: string 
        contactEmail: string 
        contactPhone: string 
        about: string 
        president: string 
        metaDescription: string 
        metaTitle: string 
        createdAt: string
        locale: string
        publishedAt: string
        updatedAt: string}
}
export interface IInfo {
    id: number,
    attributes: {
        date: string
        transport: string
        sleep: string
        foodAndBeverage: string
        tickets: string
        accessibility: string
        healthAndSafety: string
    }
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
export interface IImage {
    id: number,
    attributes: {
        name: string,
        alternativeText: string,
        caption: string,
        width: number,
        height: number,
        formats: {
        thumbnail: [any],
        large: [any],
        medium: [any],
        small: [any]
        },
        hash: string,
        ext: string,
        mime: StringConstructor,
        size: 30.93,
        url: string,
        previewUrl: string,
        provider: string,
        provider_metadata: string,
        createdAt: string,
        updatedAt: string
    }
}