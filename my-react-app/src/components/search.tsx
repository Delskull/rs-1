import React from "react";

interface SearchState {
    searchTerm: string
}
class Search extends React.Component<any, SearchState> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            searchTerm: localStorage.getItem('searchTerm') || ''
        }
        
    }
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTerm = event.target.value
        this.setState({
            searchTerm: newTerm
        })
        localStorage.setItem('searchTerm', newTerm)
    }
    render() {
        return (
            <div>
                <input
                 type="text"
                  placeholder="Search"
                   className="rounded-full px-4 py-2 border border-gray-300 w-64"
                   value = {this.state.searchTerm || ""}
                   onChange = {this.handleInputChange}
                   />
            </div>
        )
    }
}

export default Search