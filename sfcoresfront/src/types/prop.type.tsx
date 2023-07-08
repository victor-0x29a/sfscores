import { Business, BusinessType } from "./business.type"

export type ContainerProps = {
    business: BusinessType[]
    search: boolean
}

export type CardProps = {
    business: BusinessType
}

export type CorpComponentProps = {
    business: Business
}

export type SearchComponentProps = {
    setSearcher: (query: string) => Promise<any>
}