import Card from 'components/ui/Card/Card';
import React from 'react';
import { projects } from 'tools/informationProjects';

const ProjectsCards:React.FC = () => {
    
    return <>
        {projects.map((project, index) => {
            return <Card
                position={index}
                key={index}
                title={project.name}
                description={project.description}
                img={project.img}
                labels={project.labels}
                link={project.link}
            />
        })}
    </>
    
}
export default ProjectsCards;