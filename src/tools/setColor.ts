import colors from "./colors";

export const setColor = (color: 'orange' | 'blue' | 'pink') => {
    switch (color) {
        case 'orange':
            document.documentElement.style.setProperty('--theme', '#cc8800');
            document.documentElement.style.setProperty('--theme-dark', '#af7500');
            break;
        case 'blue':
            document.documentElement.style.setProperty('--theme', colors.blue);
            document.documentElement.style.setProperty('--theme-dark', colors.blue);
            break;
        case 'pink':
            document.documentElement.style.setProperty('--theme', '#f28579');
            document.documentElement.style.setProperty('--theme-dark', 'rgb(1, 134, 117)');
            break;
    }
}