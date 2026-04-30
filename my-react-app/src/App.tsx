import React from "react";
import Search from "./components/search"
class App extends React.Component {
  handleSearch = (value:string) => {
    console.log("Сообщение из APP, ищем", value)
  }
  render(){
    return (
      <div className="flex flex-col justify-center items-center h-64 gap-4">
        <h1> Top controls</h1>
        <Search onSearch={this.handleSearch}/>
      </div>
    )
  }
}
export default App