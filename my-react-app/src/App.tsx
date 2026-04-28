import React from "react";
import Search from "./components/search"
class App extends React.Component {
  render(){
    return (
      <div className="flex flex-col justify-center items-center h-64 gap-4">
        <h1> Top controls</h1>

        <Search/>
      </div>
    )
  }
}
export default App