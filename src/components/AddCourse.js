import React, { Fragment, useState, useEffect} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course || LearnCodewith our Courses";
       },[]);

       const[course,setCourse]=useState({});

       //from handler function
       const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
         e.preventDefault();
       };

       // creating function to post data on server
       const postDatatoServer=(data)=>{
     axios.post(`${base_url}/courses`,data).then(
        (response)=>{
         console.log(response);   
         console.log("success");
         toast.success("Course Added successfully")
        },(error)=>{
          console.log(error);
          console.log("error");
          toast.error("Error! Something Went Wrong")
        }
     )
       };

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
       <Form on onSubmit={handleForm}>
        <FormGroup>
            <label for="userId">Course ID</label>
            <Input type="text" placeholder="Enter here" name="useId" id="userId"
            onChange={(e)=>{
         setCourse({...course,id:e.target.value})
            }}/>
        </FormGroup>
        <FormGroup>
            <label for="title">Course Title</label>
            <Input type="text" placeholder="Enter Title here" id="title"
            onChange={(e)=>{
                setCourse({...course,title:e.target.value})
            }}/>
        </FormGroup>
       <FormGroup>
        <label for="description">Course Description</label>
        <Input type="textarea" placeholder="Enter description here" id="description"
        style={{height:150}}
        onChange={(e)=>{
            setCourse({...course,description:e.target.value})
        }}/>
       </FormGroup>
       <Container className="text-center">
        <Button type="submit" color="success">Add Course</Button>
        <Button type="reset" color="warning ml-2" onClick={(e)=>{
            setCourse({});}
        }>Clear</Button>
       </Container>
       </Form>
        </Fragment>
    );
}

export default AddCourse;