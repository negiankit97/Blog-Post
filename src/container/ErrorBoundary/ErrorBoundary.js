import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: props.error || false
        }
    }

    componentDidCatch(err, info) {
        this.setState({hasError: true});
    }

    renderErrorUI(error){
        if(error) {
            return <h1>Something went wrong!</h1>
        }
        return this.props.children;
    }

    render() {
        return (
            this.renderErrorUI(this.state.hasError)
        )
    }
}

export default ErrorBoundary;