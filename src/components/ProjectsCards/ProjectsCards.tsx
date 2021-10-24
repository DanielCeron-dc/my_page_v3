import Card from 'components/ui/Card/Card';
import React from 'react';
import { useAppStore } from 'store/App.store';


const ProjectsCards:React.FC = () => {
    const {projects , isLoadingProjects} = useAppStore(); 
    return !isLoadingProjects ? <>
        {projects.map((project, index) => {
            return <Card
                position={index}
                key={index}
                title={project.title}
                description={project.description}
                img={project.imgLink}
                labels={project.labels}
                link={project.link}
            />
        })}
    </> : null; 
}
export default ProjectsCards;