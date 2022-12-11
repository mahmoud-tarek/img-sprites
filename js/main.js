const icons = document.getElementById('icons');
const stage = document.getElementById('stage');

sprites({
    element: icons,
    event: 'click',
    stage,
    img: 'imgs/icons.png',
    spacer: {
        x: 200,
        y: 188
    }
});