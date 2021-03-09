class ButtonText {
    constructor(type){
        this.type = type
        this.buttonElement = $(`.${this.type}:first`)
        this.pressed = false
    }
    applyEffect = function() {
        document.execCommand(this.type)
    }

    addClickEvent = function() {
        this.buttonElement.on("click", this.pressButton)
        return this
    }

    pressButton = function() {
        if (/justify([A-Z]+)/i.test(this.type)) {

        }
        else {
            this.pressed ? this.buttonElement.removeClass("pressed-button") : this.buttonElement.addClass("pressed-button")
            this.pressed = !this.pressed
        }
        this.applyEffect(this.type)
        return this
    }
}

const buttonsText = [new ButtonText("bold"),new ButtonText("italic"),new ButtonText("underline"),
                   new ButtonText("justifyLeft"), new ButtonText("justifyRight"),
                   new ButtonText("justifyCenter"), new ButtonText("justifyFull")]

for (let button of buttonsText) {
    button.addClickEvent()
}

const changeThemeButton = $(".change-theme")
switchDarkMode.darkMode = false

function switchDarkMode (styleName) {
    var htmlTag = $("html:first")
    switchDarkMode.darkMode ? htmlTag.removeClass(styleName) : htmlTag.addClass(styleName)
    switchDarkMode.darkMode = !switchDarkMode.darkMode
}
changeThemeButton.on("click", ()=> {switchDarkMode.darkMode ? switchDarkMode("dark-mode") : switchDarkMode("dark-mode")})