import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Create from "../components/Create";
import Update from "../components/Update";
import Paintings from "../components/Paintings.jsx";
import Details from "../components/Details";
import About from "../components/About";
import Contact from "../components/Contact";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="/paintings/:id" element={<Details />} />
            <Route path="/update-painting/:id" element={<Update />} />
            <Route path="/create-painting" element={<Create />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default MainRoute;