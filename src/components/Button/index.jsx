import './styles.css'
import { Component } from "react";

export class Button extends Component {
    
    render() {
        const { text, onClick, disabled } = this.props;

        return (
            <div className='button-container'>
                <button
                    disabled={disabled}
                    onClick={onClick}
                >
                    {text}
                </button>
            </div>
        )
    }
}