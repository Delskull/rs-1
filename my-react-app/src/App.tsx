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
}


class App extends React.Component<{},state> {
  constructor(props: {}){
    super(props)
    this.state = {
      results: []
    }
  }
  
  handleSearch = (value:string) => {
    console.log("Сообщение из APP, ищем", value)
  }

  
  render(){
  
    return (
      <div>
        <div  className="flex flex-col  items-center h-64 gap-4">
        <h1> Top controls</h1>
        <Search onSearch={this.handleSearch}/>
        </div>
        <Results items={this.state.results}/>
      </div>
    )
  }
}
export default App