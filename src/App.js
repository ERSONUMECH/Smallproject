import React from 'react';
import logo from "./logo.svg";
import './App.css';
import {Button, Col, Container, Form, Row} from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from "./components/Allcourses";
import AddCourse from './components/AddCourse';
import Header from "./components/Header";
import Menus from './components/Menus';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {

  const btnHandle=()=>
  {
       toast.error("done",{
        position: "top-center",
       });
  };
  return (
    <div>
      <Router>
      <ToastContainer/>
      <Container>
        <Header/>
        <Row>
          <Col md={4}> 
        <Menus/>
          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact/>
            <Route path="/add-course" component={AddCourse} exact/>
            <Route path="/view-courses" component={Allcourses} exact/>
             </Col>
             <Home/>
        </Row>
      </Container>
      </Router>
      </div>
  );
}

export default App;
