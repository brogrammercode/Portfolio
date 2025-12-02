export interface Points {
    point: string
    index: number
    underline: string
}

export interface Tech {
    name: string
    image: string
}

export interface Project {
    name: string
    description: string
    points: Points[]
    github: string
    web: string
    image: string
    techs: Tech[]
}
