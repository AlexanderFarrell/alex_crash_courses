class Tabs {
    constructor() {
        this.Buttons = []
        this.ActiveButton = null

        this.Screens = []
        this.ActiveScreen = null;
    }

    AddScreenById(button, screen) {
        this.AddScreen(document.getElementById(button), document.getElementById(screen))
    }

    AddScreen(button, screen) {
        this.Buttons.push(button);
        this.Screens.push(screen);

        screen.style.display = 'none'

        button.addEventListener('click', event => {
            this.Activate(button, screen);
        })
    }

    Activate(button, screen) {
        if (this.ActiveScreen != null) {
            this.ActiveScreen.style.display = 'none';
        }

        this.ActiveButton = button;
        this.ActiveScreen = screen;

        this.ActiveScreen.style.display = 'initial';
    }
}