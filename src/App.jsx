import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Resources from "./components/Resources.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Team from "./components/Team.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/team" element={<Team />} />
      </Route>
      <Route path="/" element={<Layout/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
