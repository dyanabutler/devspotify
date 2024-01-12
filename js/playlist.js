getSongs = () => {
  let dir = "music";
  let ext = ".mp3";
  let songs = [];

  $.ajax({
    url: dir,
    success: function (data) {
      $(data).find(`a:contains(${ext})`).each(function () {
        let filename = this.href.slice(this.href.lastIndexOf('/') + 1, this.href.length);
        songs.push(filename);
      });
    }
  });

  return songs;
}