var playlist = {
  'Beach House': 'Black Car',
  'Jesus and Mary Chain': 'April Skies'
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
