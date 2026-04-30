import React from "react";
interface buttonProps {
    onClick: () => void
}

class Button extends React.Component<buttonProps> {
    render() {
        return (
                <button onClick={this.props.onClick}
                 className="rounded-full px-4 py-2 border border-gray-300 w-16 cursor-pointer">Find</button>
        )
    }
}


export default Button

