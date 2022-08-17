import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse=()=>{
       useEffect(()=>{
        document.title="All Courses || LearnCodewith our Courses";
       },[]);
       //function to call server
       const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
             console.log(response.data);
             toast.success("courses has been loaded",{
                position:"bottom-center",
             });
             setCourses(response.data);

            },
            (error)=>{
             console.log(error);
             toast.error("Something Went Wrong",{
                position:"bottom-center",
             });
            }
        )
       };

       useEffect(()=>{
        getAllCoursesFromServer();
       }, []);


    const [courses,setCourses]=useState([]);
    

    const updatecourses=(id)=>{
        setCourses(courses.filter((c)=>c.id !=id));
    };
    return(
        <div>
           
            <h1>All Course</h1>
            <p>List Of Courses are as follows</p>
            {
                courses.length>0? courses.map((item)=><Course key={item.id} course={item} update={updatecourses}/>):"No Courses"
            }
        </div>
    )
}
export default Allcourse;