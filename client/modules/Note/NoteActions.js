import uuid from 'uuid';
import callApi from '../../util/apiCaller';
// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';
// Export Actions
export function createNote(note, laneId) {
    return {
    type: CREATE_NOTE,
    laneId,
    note: {
      id: uuid(),
      ...note,
    },
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note,
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}


export function createNoteRequest(note, laneId) {
  console.log(note.task);
  console.log(laneId);
  return (dispatch) => {
    return callApi('notes', 'post',(note, laneId)).then(noteResp=>{
      dispatch(createNote(note, laneId));
    });
  }
}

export function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    notes: notesData
  };
}