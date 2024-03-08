import { IProject } from 'api/IProject';
import ModalProject from 'components/Modals/ModalProject';
import Card from 'components/ui/Card/Card';
import React from 'react';
import { useAppStore } from 'store/App.store';


const ProjectCard = (props: { project: IProject }) => {
    const [isOpened, setIsOpened] = React.useState(false);

    return <>
        <ModalProject
            onClose={() => setIsOpened(false)}
            show={isOpened}
            project={props.project}
        />

        <Card
            onClick={() => setIsOpened(true)}
            title={props.project.title}
            description={props.project.description}
            img={props.project.imgLink}
            labels={props.project.labels}
            position={0}
        />
    </>
}

const ProjectsCards: React.FC = () => {
    const { projects, isLoadingProjects } = useAppStore();
    return <>

        {
            !isLoadingProjects ? <>
                {projects.map((project) => {
                    return <ProjectCard key={project._id} project={project} />
                })}
            </> : null
        }
    </>
}
export default ProjectsCards;