
import balletApp from "../Assets/ProjectsImages/balletAppP.png"
import boardP from "../Assets/ProjectsImages/boardP.png"
import BurgerP from "../Assets/ProjectsImages/BurgerP.png"
import CatalogoP1 from "../Assets/ProjectsImages/CatalogoP1.png"
/* import CatalogoP2 from "../Assets/ProjectsImages/CatalogoP2.png" */


export interface IProjects {
    name: string;
    description: string;
    img: string;
}

export const projects: IProjects[] = [
    {
        name: 'BalletApp',
        description: 'Una pagina web para gestionar una escuela de ballet',
        img: balletApp
    },
    {
        name: 'Math Board',
        description: 'un Tablero online para trabajar cooperativamente',
        img: boardP
    },
    {
        name: 'Burger App',
        description: 'una aplicacion para pedir deliciosas hamburguesas',
        img: BurgerP
    },
    {
        name: 'Catalogo de botones',
        description: 'un almacen para diferentes botones que he creado',
        img: CatalogoP1
    },


]

