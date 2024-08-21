

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="h-[20vh] w-full flex items-center justify-between ">
            <img
                className="h-[100%] w-[20%]"
                src="https://static.vecteezy.com/system/resources/previews/027/009/016/original/painting-art-paint-logo-design-painting-palette-icon-with-mountain-concept-vector.jpg"
                alt=""
            />
            <div className="flex gap-x-10 text-md item-center">
                <Link className="font-extrabold hover:text-violet-400 duration-200 " to="/">
                    Home
                </Link>
                <Link
                    className="font-extrabold hover:text-violet-400 duration-200"
                    to="/paintings"
                >
                    Paintings
                </Link>
                <Link className="font-extrabold hover:text-violet-400 duration-200" to="/about">
                    About
                </Link>
                <Link
                    className="font-extrabold hover:text-violet-400 duration-200"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <i className=""></i>
        </nav>
    );
};

export default Nav;