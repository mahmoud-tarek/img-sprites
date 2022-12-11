const sprites = function (options) {
    options.element.addEventListener(options.event, function (e) {
        const position = {};
        position.x = e.clientX - e.target.offsetLeft;
        position.y = e.clientY - e.target.offsetTop;

        const bgPosition = {};

        bgPosition.x = Math.floor(position.x / options.spacer.x) * -options.spacer.x;
        bgPosition.y = Math.floor(position.y / options.spacer.y) * -options.spacer.y;

        options.stage.style.backgroundImage = `url(${options.img})`;
        options.stage.style.backgroundPositionX = bgPosition.x + 'px';
        options.stage.style.backgroundPositionY = bgPosition.y + 'px';
    });
};