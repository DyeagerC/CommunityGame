import React from 'react'
import "./navbar.css";
import logo from "./../../assets/logo.PNG";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <div className="cont_menu">
                        <div className="menu_li">
                            <li>Home</li>
                        </div>
                        <div className="menu_li">
                            <li>PC</li>
                        </div>
                        <div className="menu_li">
                            <li>PS5</li>
                        </div>
                        <div className="menu_li">
                            <li>PS4</li>
                        </div>
                        <div className="menu_li">
                            <li>Xbox X</li>
                        </div>
                        <div className="menu_li">
                            <li>Xbox One</li>
                        </div>
                        <div className="menu_li">
                            <li>Android</li>
                        </div>
                        <div className="menu_li">
                            <li>Comunidad</li>
                        </div>
                        <div className="menu_li">
                            <li>Preguntas</li>
                        </div>
                    </div>
                </ul>
            </nav>
            <nav className="nav_button">
                <ul>
                    <div className="cont_menu">
                        <div className="menu_li">
                            <li>Inicio</li>
                        </div>
                        <div className="menu_li">
                            <li>Noticias</li>
                        </div>
                        <div className="menu_li">
                            <li>Lanzamientos</li>
                        </div>
                        <div className="menu_li">
                            <li>Juegos</li>
                        </div>
                        <div className="menu_li">
                            <li>Imagenes</li>
                        </div>
                        <div className="menu_li">
                            <li>Videos</li>
                        </div>
                    </div>
                </ul>
            </nav>

        </div>
    )
}
