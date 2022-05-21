import React from "react";

import "../styles/Article/article.css"
import "../styles/Article/info.css"
import "../styles/Article/about.css"
import "../styles/Article/intrests.css"

export default function Article() {
    return (
        <article>
            {/* info contains name and links */}
            <div id="info">
                <div id="name">
                    <h2>Sibindra Timalsina</h2>
                    <h3 className="title">Developer</h3>
                </div>

                <div id="links">
                    <button id="btn1" className="btn"><a href="mailto: timalsinasibindra@gmail.com">Email</a></button>
                    <button id="btn2" className="btn"><a href="https://github.com/Sibindra">Github</a></button>
                </div>
            </div>

            <div id="about">
              <h2 className="title">About</h2>

              <p>I am a developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>

            <div id="intrests">
                <h2 className="title">Intrests</h2>

                <p>Internet, Coding, Food Memes and Memes and Memes </p>
            </div>
        </article>
    );
}
