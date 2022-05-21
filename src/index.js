import React from "react";
import ReactDOM from "react-dom";

// components
import Header from "./components/header";
import Article from "./components/article";
import Footer from "./components/footer";

// css import
import "./styles/index.css"

const root = document.getElementById("root");

function Index() {
    return (
        <div id="container">
            <Header />
            <Article />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Index />, root)