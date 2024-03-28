import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Page1 from "../Pages/Page1/Page1";
import Page2 from "../Pages/Page2/Page2";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Community from "../Pages/Community/Community";
import CourseRequest from "../Pages/Course Request/CourseRequest";
import Instructor from "../Pages/Instructor/Instructor";
import MyLearning from "../Pages/My Learning/MyLearning";
import BookMarks from "../Pages/Book Marks/BookMarks";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element: <Home></Home>
        },
        {
            path : "/page1",
            element: <Page1></Page1>
        },
        {
            path : "/page2",
            element: <Page2></Page2>
        },
        {
            path : "/page2",
            element: <Page2></Page2>
        },
        {
            path : "/login",
            element: <LogIn></LogIn>
        },
        {
            path : "/signUp",
            element: <SignUp></SignUp>
        },
        {
          path : "/community",
          element : <Community></Community>
        },
        {
          path : "/courseRequest",
          element : <CourseRequest></CourseRequest>
        },
        {
          path : "/instructor",
          element : <Instructor></Instructor>
        },
        {
          path : "/myLearning",
          element : <MyLearning></MyLearning>
        },
        {
          path : "/bookMarks",
          element : <BookMarks></BookMarks>
        },
        
      ]
    },
  ]);