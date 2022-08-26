import React, { Children } from "react";
import { Pelicula } from "./Pelicula.model";
import PeliculaIndividual from "./PeliculaIndividual";
import css from "./ListadoPeliculas.module.css"
import ListadoGenerico from "../Utils/ListadoGenerico";

interface ListadoPeliculasProps {
    peliculas?: Pelicula[]
}
export default function ListadoPeliculas(props: ListadoPeliculasProps) {


    return (
        <ListadoGenerico
            Listado={props.peliculas}>
            <div className={css.div}>
                {props.peliculas?.map(pelicula =>
                    <PeliculaIndividual pelicula={pelicula}
                        key={pelicula.Id} />)
                }
            </div>
        </ListadoGenerico>
    )
}