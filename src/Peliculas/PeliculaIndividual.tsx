import React from "react"
import { Pelicula } from "./Pelicula.model"
import PeliculaIndividualcss from "./PeliculaIndividual.module.css"

interface PeliculaIndividualProps {
    pelicula: Pelicula;
}
export default function PeliculaIndividual(props: PeliculaIndividualProps) {

    const construirLink = () => `/pelicula/${props.pelicula.Id}`;
    return (
        <div className={PeliculaIndividualcss.div}>
            <a href={construirLink()}>
                <img src={props.pelicula.Poster} alt="Poster"></img>
            </a>
            <p>
                <a href={construirLink()}>{props.pelicula.Titulo}</a>
            </p>
        </div >
    )
}