function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    if (noteText === '') {
        return;
    }
    
    const notesContainer = document.getElementById('notesContainer');
    
    // Create note element
    const noteElement = document.createElement('div');
    noteElement.className = 'note';
    noteElement.innerHTML = `
        <div class="note-content">${noteText}</div>
        <div class="note-buttons">
            <button class="edit" onclick="editNote(this)">Edit</button>
            <button onclick="deleteNote(this)">Delete</button>
        </div>
    `;
    
    notesContainer.appendChild(noteElement);
    
    // Clear the input
    noteInput.value = '';
}

function deleteNote(button) {
    const noteElement = button.closest('.note');
    noteElement.remove();
}

function editNote(button) {
    const noteElement = button.closest('.note');
    const noteContent = noteElement.querySelector('.note-content');
    const newText = prompt('Edit note:', noteContent.textContent);
    if (newText !== null && newText.trim() !== '') {
        noteContent.textContent = newText.trim();
    }
}
