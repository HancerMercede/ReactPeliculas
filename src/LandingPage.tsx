import { useEffect, useState } from "react";
import ListadoPeliculas from "./Peliculas/ListadoPeliculas";
import { LandingPageDto } from "./Peliculas/Pelicula.model";

export default function LandingPage() {

    const [peliculas, setPeliculas] = useState<LandingPageDto>({})

    useEffect(() => {
        const TimerId = setTimeout(() => {
            setPeliculas({
                Encartelera: [
                    {
                        Id: 1, Titulo: "Top Gun Maverik",
                        Poster: "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY562_CR3,0,380,562_.jpg",
                    },
                    {
                        Id: 2, Titulo: "She Hulk",
                        Poster: "https://m.media-amazon.com/images/M/MV5BMjU4MTkxNzktNzUyYy00NDM2LWE5NGQtNjJlN2Q0N2MxZDAxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg"
                    },
                    {
                        Id: 3, Titulo: "Thor Love and Thunder",
                        Poster: "https://as01.epimg.net/meristation/imagenes/2022/06/21/album/1655806943_271417_1655807128_album_grande.jpg"
                    },
                    {
                        Id: 4, Titulo: "DayShift",
                        Poster: "https://upload.wikimedia.org/wikipedia/en/5/58/Day_Shift_%28film%29.jpg"
                    },
                    {
                        Id: 5, Titulo: "Pray", Poster: "https://upload.wikimedia.org/wikipedia/en/f/f4/Prey_2022_poster.png"
                    }
                ],
                ProximosEstrenos: [
                    {
                        Id: 6, Titulo: "Black Adam", Poster: "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg"
                    },
                    {
                        Id: 7, Titulo: "Andor", Poster: "https://m.media-amazon.com/images/M/MV5BNDgxNTIyZTMtMzYxNi00NmRjLWFiMTEtM2U4MTFmODkzNzM1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            })

        }, 500);

        return () => clearTimeout(TimerId);
    });
    return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.Encartelera} />

            <h3>Próximos Estremos</h3>
            <ListadoPeliculas peliculas={peliculas.ProximosEstrenos} />
        </>
    )
}