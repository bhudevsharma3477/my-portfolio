import React, { useState } from "react";

const About = () => {
    let [toggle_button, set_toggle_button] = useState(false);

    const toggle_button_fn = () => set_toggle_button(toggle_button = !toggle_button);
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="inner_col">
                            <img src="https://myfrontendportfolio.vercel.app/_next/image?url=%2Fmy_img.png&w=256&q=75" alt="my dp" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="inner_col">
                            <h1>About <span>Me</span></h1>
                            <p className="p1">Frontend Developer!</p>
                            <p className="para">I proudly hold a B.Tech in Computer Science, earned from the esteemed Mata Raj Kaur Institute of Engineering and Technology in Rewari, Haryana, in 2020. My academic journey showcases a dedication to excellence, reflected in my commendable overall B.Tech percentage of 61%. <span style={toggle_button === false ? { display: "none" } : { display: "block" }}>As a proactive learner, I honed my web development prowess through self-driven initiatives, harnessing the power of YouTube to cultivate practical skills.
                                Driven by a profound passion for creating immersive digital experiences, I am fueled by an unwavering ambition to excel as a front-end web developer. My journey is a testament to my commitment to growth, innovation and making a tangible impact in the world of web development.</span>
                            </p>
                            <button onClick={toggle_button_fn}>Read {toggle_button === false ? "More" : "Less"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;