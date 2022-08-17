import React, { useState, useEffect } from "react";
import { jumbotron, Container, Button } from "reactstrap";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || LearnCodewith our Courses";
       },[]);
    return(
        <div>
           <jumbotron className="text-center">
            <h1 >LearnCode with Our Courses</h1>
            <p>This Course is developed and designed by our scalable and highly professional trained Team which will really scale you through the industry driven curriculam</p>
            <Container>
                <Button color="primary" outline>Start Using </Button>
            </Container>
           </jumbotron>
        </div>
    );
}

export default Home;