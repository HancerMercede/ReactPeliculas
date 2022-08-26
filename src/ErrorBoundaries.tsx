import React, { ReactElement } from "react";

interface errorBoundariesState {
    hayError: Boolean;
    mensaje: string;
}
interface errorBoundariesProps {
    errorUI?: ReactElement;
    children: ReactElement;

}
export default class ErrorBoundaries extends React.Component<errorBoundariesProps,
    errorBoundariesState> {
    constructor(props: errorBoundariesProps) {
        super(props)
        this.state = { hayError: false, mensaje: '' }

    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error);
        console.log(errorInfo);
    }

    static getDerivedStateFromError(error: any) {
        console.log(error);
        return { hayerror: true, mensaje: error }
    }

    render() {
        if (this.state.hayError) {
            if (this.props.errorUI) {
                return this.props.errorUI;
            }
            else {
                <h3>{this.state.mensaje}</h3>
            }

        }
        return this.props.children;
    }
}