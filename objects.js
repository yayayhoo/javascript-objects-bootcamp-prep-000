var playlist = new Object();
// playlist = {'a':1};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
