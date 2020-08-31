const API_URLS = {
  BIRD_AUDIO: (birdName) => `https://www.xeno-canto.org/api/2/recordings?query=${birdName}`,
  BIRD_IMG: (birdName) => `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=YOUR API KEY&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=${birdName}`,
};

export default API_URLS;
