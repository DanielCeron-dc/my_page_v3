import { config } from './config';
import { IProject } from './IProject';
import { S3 } from 'aws-sdk';


export class Services {

    private static getSigendUrl = async (imgName: string): Promise<string> => {

        const s3 = new S3({
            accessKeyId: config.aws.accessKeyId,
            secretAccessKey: config.aws.secretAccessKey,
            region: config.aws.region,
        });

        const signedUrl = await s3.getSignedUrlPromise('getObject', {
            Bucket: config.aws.bucket,
            Key: imgName,
            Expires: config.aws.expires,
        });
        
        return signedUrl;
    }
    
    private static convertProjectsImgToSignedUrl = async (projects: IProject[]): Promise<IProject[]> => {
        const projectsWithSignedUrl = await Promise.all(projects.map(async (project: IProject) => {
            const imgLink = await Services.getSigendUrl(project.imgLink);
            return {
                ...project,
                imgLink,
            };
        }));
        return projectsWithSignedUrl;
    }

    static fetchProjects = async (): Promise<IProject[]> => {
        try {
            const apiUrl = config.apiUrl + '/projects';
            const projects: Response = await fetch(apiUrl);
            const projectsJson: IProject[] = await projects.json();
            const projectsWithSignedUrl = await Services.convertProjectsImgToSignedUrl(projectsJson);
            return projectsWithSignedUrl;
        } catch (error) {
            return [];
        }
    }

}