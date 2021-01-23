import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import SinglePost from "./Components/SinglePost";
import Post from "./Components/Post";
import Project from "./Components/Project";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={About} path='/About' />
      <Route component={SinglePost} path='/Post/:slug' />
      <Route component={Post} path='/Post' />
      <Route component={Project} path='/Project' />
    </Switch>
    
    </BrowserRouter>
 
  )
    
}

export default App;
