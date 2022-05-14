import "./App.css";
import { useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";

import Dashboard from "./component/Admin/Dashboard";  
import LoginSignUp from "./component/User/LoginSignUp"; 
import ViewResults from "./component/Admin/ViewResults"; 
import ViewStudents from "./component/Admin/ViewStudents"; 
import AddQuestionQuiz from "./component/Admin/AddQuestionQuiz";  
import NewClasses from "./component/Admin/NewClasses";  
import ViewClasses from "./component/Admin/ViewClasses";  
import NewCourses from "./component/Admin/NewCourses";  
import ViewCourses from "./component/Admin/ViewCourses";  
import AddCalander from "./component/Admin/Calander";  
import AddTopic from "./component/Admin/NewTopic";  

import StudentDashboard from "./component/Students/Dashboard2"; 
import Login from "./component/User2/Login"; 
import Calander from "./component/Students/Calander"; 
import Classes from "./component/Students/Classes"; 
import ClassDetails from "./component/Students/ClassDetails"; 
import CoursesDetails from "./component/Students/CoursesDetails"; 
import Courses from "./component/Students/Courses"; 
import Quiz from "./component/Students/Quiz"; 
import Test from "./component/Students/Test"; 
import QuizDetails from "./component/Students/QuizDetails"; 
import QuizAnswer from "./component/Students/QuizAnswer"; 
import TestDetails from "./component/Students/TestDetails"; 
import TestAnswer from "./component/Students/TestAnswer"; 
import Name from "./component/Students/Name"; 
import Store from "./component/Students/NameStore"; 

import NotFound from "./component/layout/Not Found/NotFound";

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />

       
        <Route exact path="/admin/dashboard" component={ Dashboard } />  
        <Route exact path="/login" component={LoginSignUp} />  
        <Route exact path="/admin/add-question" component={ AddQuestionQuiz } />  
        <Route exact path="/admin/view-results" component={ ViewResults } />  
        <Route exact path="/admin/view-students" component={ ViewStudents } />  
        <Route exact path="/admin/new-classes" component={ NewClasses } />  
        <Route exact path="/admin/view-classes" component={ ViewClasses } />  
        <Route exact path="/student/classes/:id" component={ ClassDetails } />  
        <Route exact path="/student/courses/:id" component={ CoursesDetails } />  
        <Route exact path="/admin/new-courses" component={ NewCourses } />  
        <Route exact path="/admin/view-courses" component={ ViewCourses } />  
        <Route exact path="/admin/courses/:id" component={ AddTopic } />  
        <Route exact path="/admin/add-calander" component={ AddCalander } />  

        <Route exact path="/student/dashboard" component={ StudentDashboard } />  
        <Route exact path="/student/login" component={Login} />  
        <Route exact path="/student/calander" component={ Calander } />  
        <Route exact path="/student/classes" component={ Classes } />  
        <Route exact path="/student/courses" component={ Courses } />  
        <Route exact path="/student/quiz" component={ Quiz } />  
        <Route exact path="/student/test" component={ Test } />  
        <Route exact path="/student/quiz/:id" component={ QuizDetails } /> 
        <Route exact path="/student/quiz/answer/:id" component={ QuizAnswer } /> 
        <Route exact path="/student/test/:id" component={ TestDetails } /> 
        <Route exact path="/student/test/answer/:id" component={ TestAnswer } /> 
        <Route exact path="/student/name" component={ Name } /> 
        <Route exact path="/student/store" component={ Store } /> 
        
        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;