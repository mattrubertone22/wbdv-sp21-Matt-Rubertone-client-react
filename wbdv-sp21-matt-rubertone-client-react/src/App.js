import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
// import {BrowserRouter, Route} from "react-router-dom";
// import Home from "./components/home"

function App() {
  return (
    <div className="container-fluid">
      <CourseManager />
      <CourseEditor />
    </div>
  );
}

export default App;
