class Note {
    id = 0
    constructor(title) {
        this.id = `note-${Note.id++}`
        this.title = title
        this.content = null
    } 
}

class NotesManager {
    constructor() {
        this.notes = new Array()
    }

    addNoteToNotes (note) {
        this.notes.push(note)
    }

    createNote(title) {
        let note = new Note(title)
        this.addNoteToNotes(note)
        const $note = $(`<span class = "note ${note.id}"></span>`)
        $(".notes:first").append($note)
    }
    
    deleteNote() {
        $('.notes').one('click', '.note', (e) => {
                let noteToDelete = e.target
                this.notes = this.notes.filter((note) => {return note.id != noteToDelete.classList[1]})
                noteToDelete.remove();
            })
    }

    updateNote() {
    }
    
    
    // Recuperar notas de localStorage
    saveNotes () {
        localStorage.localNotes = JSON.stringify(notes)
    }
    
    loadNotes () {
        this.notes = JSON.parse(localStorage.localNotes)
        const $noteContainer = $('.notes')
    
        for (note of this.notes){
            let $note = $(`<span class="note ${note.id}">${note.content}</span>`);
            $noteContainer.append($note)
        }
    }
}

notesManager = new NotesManager()
$(".create-note").on("click", () => {notesManager.createNote()})
$(".delete-note").on("click",  () => {notesManager.deleteNote()})

changeThemeButton = $(".change-theme")
switchDarkMode.darkMode = false

function switchDarkMode (styleName) {
    var htmlTag = $("html:first")
    switchDarkMode.darkMode ? htmlTag.removeClass(styleName) : htmlTag.addClass(styleName)
    switchDarkMode.darkMode = !switchDarkMode.darkMode
}

changeThemeButton.on("click", ()=> {switchDarkMode.darkMode ? switchDarkMode("dark-mode") : switchDarkMode("dark-mode")})