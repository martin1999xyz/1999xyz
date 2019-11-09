

var getTopRatedFilms = user =>
  user.videoLists
    .map(videoList => videoList.vidoes.filter(video => video.rating === 5.0))
    .concatAll();

    getTopRatedFilms(user).forEach(film => console.log(film));
