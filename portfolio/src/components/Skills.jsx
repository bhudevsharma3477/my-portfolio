import React from "react";
import skills_data from "../skills section data/skills_data";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <h1>My <span>Skills</span></h1>
                <div className="row">
                    {skills_data.map((value, index) => {
                        return <div className="col-lg-4 col-sm-6" key={index + 1}>
                            <div className="inner_col">
                                <i className={value.icon_name} />
                                <h4>{value.skill_name}</h4>
                                <p>Experience: <span>{value.experience}</span></p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;