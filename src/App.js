import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Assignment from "./components/Assignment";
import Progress from "./components/Progress";
import ForumPage from "./components/ForumPage";
import ResourcesPage from "./components/Resource";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/assignment" element={<Assignment/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/progress" element={<Progress/>}/>
          <Route path="/forumPage" element={<ForumPage/>}/>
          <Route path="/resources" element={<ResourcesPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;