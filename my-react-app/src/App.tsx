import React from "react";
import Search from "./components/search"
import Results from "./components/results";
  interface character {
    id: number
    name: string
    image: string
}
interface state {
    results: character[]
    isLoading: boolean
}


class App extends React.Component<{},state> {
  constructor(props: {}){
    super(props)
    this.state = {
      results: [],
      isLoading: false
    }
  }
  
  handleSearch = (value:string) => {
    this.setState({isLoading:true})
    fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
    .then((response) => response.json())
    .then((data) => this.setState({results: data.results, isLoading: false}))
    .catch((error) => {
  console.error("Ошибка:", error);
  this.setState({ isLoading: false });
});
    
  }

  
  render(){
  
    return (
      <div>
          <div  className="flex flex-col  items-center h-64 gap-4">
        <h1> Top controls</h1>
        <Search onSearch={this.handleSearch}/>
         </div>
         {this.state.isLoading === true ?
          <div className="flex justify-center">Loading...</div> : 
         <Results items={this.state.results}/>
         }
        
      </div>
    )
  }
}
export default App