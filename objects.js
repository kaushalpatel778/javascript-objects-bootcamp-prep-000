var playlist = new Object({artistName: "songTitle"});
/*var playlist = {
artistName: "songTitle"};
*/

function updatePlaylist(playlist, artistName, songTitle) {
<<<<<<< HEAD

playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
=======
  playlist.artistName = "kaushal";
  playlist.songTitle = "Hum tum";
>>>>>>> 31ced431e79d40d5a52102fc0cab3401bdcf2252
  return playlist;
}
