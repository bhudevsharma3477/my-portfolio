import React from "react";

const Intro = () => {
    return (
        <section className="intro" id="intro">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="inner_col">
                            <p>Hello It's Me</p>
                            <h1>Bhudev Sharma</h1>
                            <p className="span_p2">And I'm A <span> Front End Web Developer</span></p>
                            <p className="para">I hold a degree of B.Tech in Computer Science and wield the art of frontend with mastery, embracing the React JS library as my creative wand.</p>
                            <a href="/">Download CV</a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="inner_col">
                            <img src="https://myfrontendportfolio.vercel.app/_next/image?url=%2Fmy_img.png&w=256&q=75" alt="my dp" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;