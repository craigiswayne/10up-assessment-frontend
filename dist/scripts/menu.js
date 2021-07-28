var Menu = {
    containerSelector: '#site-menu',
    toggleSelector: '#menu-toggle',
    closeSelector: '#menu-close',
    maskSelector: '#site-menu .mask',
    containerEl: null,
    toggleEl: null,
    closeEl: null,
    maskEl: null,
    setup: function () {
        Menu.containerEl = document.querySelector(Menu.containerSelector);
        Menu.toggleEl = document.querySelector(Menu.toggleSelector);
        Menu.closeEl = document.querySelector(Menu.closeSelector);
        Menu.maskEl = document.querySelector(Menu.maskSelector);
        Menu.toggleEl.addEventListener('click', function () {
            Menu.show();
        });
        Menu.closeEl.addEventListener('click', function () {
            Menu.close();
        });
        Menu.maskEl.addEventListener('click', function () {
            Menu.close();
        });
        document.querySelectorAll(Menu.containerSelector + " li a").forEach(function (el) {
            el.addEventListener('click', Menu.close);
        });
    },
    show: function () {
        Menu.containerEl.classList.add('show');
        document.body.classList.add('menu');
    },
    close: function () {
        Menu.containerEl.classList.remove('show');
        document.body.classList.remove('menu');
    }
};
document.addEventListener('DOMContentLoaded', function () {
    Menu.setup();
});
