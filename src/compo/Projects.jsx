import React from 'react';
import portfolioContent from '../Content';


const Projects = () => {
    return (
        <section className='niic_section'>
            <div className="container">
                <div className="title_wrap">
                    <h2 className="ntrn_title">Projects</h2>
                </div>
                <div className="projects_list">
                    {portfolioContent.map((project) => (
                        <div key={project.id}>
                            <img src={project.image} alt={project.title} />
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;


