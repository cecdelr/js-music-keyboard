$(document).ready(() => {
  // your code here
  const NOTES = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

  const playNote = function playNote(note) {
    const noteAudio = $(`#${note.toLowerCase()}Audio`);
    noteAudio[0].play();
  };
  // click function
  $('.note').click((event) => {
    const note = event.target.innerHTML;
    console.log(note);
    playNote(note);
  });

  // key press function
  $('body').keydown((event) => {
    const note = event.key;
    console.log(note);
    playNote(note);
  });
});
