import { ReactElement } from "react";
import Cargando from "./Cargando";

interface ListadoGenericoProps {
    Listado?: any;
    children: ReactElement;
    CargandoUI?: ReactElement;
    ListadoVacioUI?: ReactElement;
}
export default function ListadoGenerico(props: ListadoGenericoProps) {

    if (!props.Listado) {
        if (props.CargandoUI) {
            return props.CargandoUI;
        }
        return <Cargando />
    }
    else if (props.Listado.length === 0) {
        if (props.ListadoVacioUI) {
            return props.ListadoVacioUI;
        }
        return <>No hay elementos para mostrar</>
    }
    return (
        <>
            {props.children}
        </>
    )
}