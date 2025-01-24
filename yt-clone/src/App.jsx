import React, { useEffect, useState } from "react";
import './_app.scss';
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
import LoginScreen from "./screen/LoginScreen/LoginScreen";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, setTogglesidebar] = useState(false);

  const handleTogglesidebar = () => {
    setTogglesidebar((prevValue) => !prevValue);
  };

  return (
    <>
      <Header handleTogglesidebar={handleTogglesidebar} />
      <div className="app__container">
        <SideBar sideBar={sidebar} handleTogglesidebar={handleTogglesidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  
  const {accessToken, loading } = useSelector(state => state.auth)

  const navigate = useNavigate();

  useEffect(()=>{
    
    if(!loading && !accessToken) {
        navigate('/auth')
    }


  },[accessToken,loading,navigate]);


  return (
    
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        ></Route>

        {/* Route for Login Screen */}
        <Route path="/auth" element={<LoginScreen />} />

        {/* Route for Search Results */}
        <Route
          path="/search"
          element={
            <Layout>
              <h1>Search Results</h1>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
           <Navigate to='/'/>
          }
        />
      </Routes>
  
  );
}

export default App;
