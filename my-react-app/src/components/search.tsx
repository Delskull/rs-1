import React from "react";
import Button from "./button";
interface SearchState {
    searchTerm: string
}
interface SearchProps {
    onSearch: (value:string) => void
}
class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            searchTerm: localStorage.getItem('searchTerm') || ''
        }
        
    }

    startSearch = () => {
      this.props.onSearch(this.state.searchTerm)

    }
    handleKyeDown = (e:React.KeyboardEvent) => {
        e.key === "Enter" ? this.startSearch() : ''
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
            <div className="flex justify-around w-lg">
                <input
                 type="text"
                  placeholder="Search"
                   className="rounded-full px-4 py-2 border border-gray-300 w-auto"
                   value = {this.state.searchTerm}
                   onChange = {this.handleInputChange}
                   onKeyDown={this.handleKyeDown}

                   />
                   <Button onClick={this.startSearch}/>
            </div>
        )
    }
}

export default Search