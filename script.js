let audioPlayer = document.getElementById("audioPlayer");
let playlistElement = document.getElementById("playlist");
let playlist = [];

function addSong() {
  let input = document.getElementById("audioInput");

  if (input.files.length > 0) {
    let song = {
      name: input.files[0].name,
      src: URL.createObjectURL(input.files[0])
    };

    playlist.push(song);
    displayPlaylist();
  }

  input.value = "";
}

function displayPlaylist() {
  playlistElement.innerHTML = "";

  playlist.forEach((song, index) => {
    let listItem = document.createElement("li");
    listItem.innerText = song.name;
    listItem.onclick = () => playSong(index);
    playlistElement.appendChild(listItem);
  });
}

function playSong(index) {
  audioPlayer.src = playlist[index].src;
  audioPlayer.play();
}
