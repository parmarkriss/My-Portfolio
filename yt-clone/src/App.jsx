import React, { useState } from "react"
import { Container} from "react-bootstrap";
import Header from "./components/header/Header"
import SideBar from "./components/sidebar/SideBar"
import HomeScreen from "./screen/HomeScreen";
import "./__app.scss";

function App() {
  const [sidebar, setTogglesidebar] = useState(false);

  const handleTogglesidebar = () => {
    setTogglesidebar((prevValue) => !prevValue);
  };

  return (
    <>
      <Header handleTogglesidebar={handleTogglesidebar} />
      <div className="app_container">
        <SideBar sideBar={sidebar} handleTogglesidebar={handleTogglesidebar}/>
        <Container fluid className="app_main">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App
