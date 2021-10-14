import Card from 'components/ui/Card/Card';
import React from 'react';
import { projects } from 'tools/informationProjects';

type ProjectsSubSectionProps = {
    
};

const ProjectsSubSection:React.FC<ProjectsSubSectionProps> = () => {
    
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
export default ProjectsSubSection;