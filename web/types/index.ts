export interface IPost {
    id: number,
    attributes: {
        title: string
        content: string
        slug: string 
        image: {
            data: IFile
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
        style: string
        video: string 
        image: {
            data: IFile
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
            data: [IFile]
        }
        pictures: {
            data: [IFile]
        }
        video: string  
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
        updatedAt: string,
        enableTickets: boolean, 
        timetable: {
            data: IFile
        }}
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
        stands: string
        map: {
            data: IFile
        }
    }
}
export interface ISponsor {
    id: number,
    attributes: {
        name: string
        logo: {
            data: IFile
        }
        url: string 
        order: number
        principal: boolean
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
            data: IFile
        }
        supporter: boolean
        order: number
        url: string 
        createdAt: string
        locale: string
        publishedAt: string
        updatedAt: string
    }
}
export interface IDonator {
    id: number,
    attributes: {
        name: string
        location: string
        position: number
    }
}
export interface IFile {
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