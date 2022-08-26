
interface ButtonProps {
    children: React.ReactNode
}
export default function Button(props: ButtonProps) {
    return (
        <button className="btn btn-primary" type="button">Mi Boton</button>
    )
}