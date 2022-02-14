import React from "react";
import logo from "../../assets/logo.png";

const Home = () => {
    return (
        <div className="homeContainer">
            <img className="home" src={logo} alt="logo" />
            <h2>
                Digigames es la plataforma ideal para encontrar todos los
                ultimos lanzamientos en videojuegos al mejor precio.
            </h2>
        </div>
    );
};

export default Home;
