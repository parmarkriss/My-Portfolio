import React from "react"
import { Container} from "react-bootstrap";
import Header from "./components/header/Header"
import SideBar from "./components/sidebar/SideBar"
import HomeScreen from "./screen/HomeScreen";
import "./__app.scss";

function App() {
 

  return (
    <>
      <Header/>
      <div className="app_container border border-info">
        <SideBar/>
      <Container fluid className="app_main border border-warning">
         <HomeScreen/>
      </Container>
      </div>
    </>
  )
}

export default App
