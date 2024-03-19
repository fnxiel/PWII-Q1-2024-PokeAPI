import { IPokemonSprites } from "./IPokemonSprites"

export interface IPokemonDetalle{
    id: number
    name: string
    height: number
    weight: number
    sprites: IPokemonSprites
}