import React from "react";
import projects_data from "../projects section data/projects_data";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <h1>My <span>Projects</span></h1>
                <div className="row">
                    {projects_data.map((value, index) => {
                        return <div key={index + 1} className="col-sm-4">
                                <div className="inner_col">
                                    <img src={value.background_image} alt="project_bg_image" />
                                    <div className="content">
                                        <h4>{value.heading_name}</h4>
                                        <p>{value.content}</p>
                                        <a href={value.link}><i className="fa-solid fa-arrow-up-right-from-square" /></a>
                                    </div>
                                </div>
                            </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;