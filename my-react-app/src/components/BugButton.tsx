import React from "react";


class BugButton extends React.Component{
    state = {
        isThrow: false
    }

    handleClick = () => {
        this.setState({ isThrow: true})
        this.setState({results: {}})
    }

    render() {
        if (this.state.isThrow) {
            throw new Error('critical error')
        }
        return (
            <div className="flex w-5xl justify-end">
                <button onClick={this.handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"> Error Boundary</button>
                </div>
        )
    }
}

export default BugButton