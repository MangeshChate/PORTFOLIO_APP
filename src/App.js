import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import SkillStack from "./components/SkillStack";
import RecommandationSection from "./components/RecommandationSection";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Recommand from "./components/writeRecommandation";
import NotFound from "./components/NotFound";
import ProjectPage from "./components/ProjectPage";
import BlogPage from "./components/BlogPage";
import AddProject from "./components/AddProject";
import AddBlog from "./components/AddBlog";
import { Provider } from "./context";
import AllProjects from "./components/AllProjects";
function App() {
  return (
    <Provider>
      <BrowserRouter>

        <Navbar />
       
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Title
                  name="Mangesh Chate"
                  leadText="I am a Freelancer from India"
                />
                <RecommandationSection />
                <SkillStack />
                <ProjectSection />
                <About />
                <Blogs />
              </div>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <div>
                <Contact />
              </div>
            }
          />
          <Route
            exact
            path="/write-a-Recommandentaion"
            element={
              <div>
                <Recommand />
              </div>
            }
          />
          <Route
            exact
            path="/project/:id"
            element={
              <div>
                <ProjectPage />
              </div>
            }
          />
          <Route
            exact
            path="/all-projects"
            element={
              <div>
                <AllProjects />
              </div>
            }
          />

          <Route
            exact
            path="/project/AddProject"
            element={
              <div>
                <AddProject />
              </div>
            }
          />
          <Route
            exact
            path="/project/:id"
            element={
              <div>
                <ProjectPage />
              </div>
            }
          />
          <Route
            exact
            path="/blog/:id"
            element={
              <div>
                <BlogPage />
              </div>
            }
          />
          <Route
            exact
            path="/blog/AddBlog"
            element={
              <div>
                <AddBlog />
              </div>
            }
          />

          <Route
            path="*"
            element={
              <div>
                <NotFound />
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <span className="App">
//         <h1 className="customStyle">Portfolio Website </h1>
//       </span>
//     );
//   }
// }
