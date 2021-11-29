export const setColor = (color: 'orange' | 'blue' | 'pink') => {
    switch (color) {
        case 'orange':
            document.documentElement.style.setProperty('--color2', '#cc8800');
            document.documentElement.style.setProperty('--color2-dark', '#af7500');
            break;
        case 'blue':
            document.documentElement.style.setProperty('--color2', '#009e89');
            document.documentElement.style.setProperty('--color2-dark', 'rgb(1, 134, 117)');
            break;
        case 'pink':
            document.documentElement.style.setProperty('--color2', '#f28579');
            document.documentElement.style.setProperty('--color2-dark', 'rgb(1, 134, 117)');
            break;
    }
}