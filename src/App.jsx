import Layout from "./components/Layout";
import Home from "./Pages/Home";
import { Project } from "./Pages/Project";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects/:id" element={<Project />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
