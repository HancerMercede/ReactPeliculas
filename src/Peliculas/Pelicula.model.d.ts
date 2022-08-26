export interface Pelicula {
    Id: number;
    Titulo: string;
    Poster: string;
}

export interface LandingPageDto {
    Encartelera?: Pelicula[];
    ProximosEstrenos?: Pelicula[];
}