
import favoritePlacesP from "../assets/ProjectsImages/favoritePlacesP.png"
import boardP from "../assets/ProjectsImages/boardP.png"
import BurgerP from "../assets/ProjectsImages/BurgerP.png"
import ValorantP from "../assets/ProjectsImages/valorantP.png"
import portfolioP from "../assets/ProjectsImages/portfolioP.png"
/* import CatalogoP2 from "../Assets/ProjectsImages/CatalogoP2.png" */


export interface IProjects {
    name: string;
    description: string;
    img: string;
    labels: string[];
    link: string;
}

export const projects: IProjects[] = [
    {
        name: 'My Portfolio',
        description: 'mi propia App',
        img: portfolioP,
        labels: ['#React', '#PureCss', 'nodejs', 'mongoDB'],
        link: 'https://danielceron-dc.me/'
    },
    {
        name: 'Your Favorite Places',
        description: 'Una pagina web para explorar este mundo',
        img: favoritePlacesP,
        labels: ['#React', '#PureCss', 'nodejs', 'mongoDB'],
        link: 'https://your-favorite-places-fcde3.web.app/auth'
    },
    {
        name: 'Math Board',
        description: 'un Tablero online para trabajar cooperativamente',
        img: boardP,
        labels: ['#React', '#PureCss'],
        link: 'https://math-board-53de4.web.app/auth'
    },
    {
        name: 'Burger App',
        description: 'una aplicacion para pedir deliciosas hamburguesas',
        img: BurgerP,
        labels: ['#React', '#PureCss'],
        link: 'https://burgersita.web.app/'
    },
    {
        name: 'Valorant Menu Copy',
        description: 'Una App que copia el menu principal del popular juego Valorant',
        img: ValorantP,
        labels: ['#React', '#PureCss'],
        link: 'https://valorant-menu-copy.web.app/'
    },


]

