import axios from 'axios';

export default async function fetchPlaylistData(id, etag) {
  const baseApiUrl = 'https://www.googleapis.com/youtube/v3';
  const apiKey =
    process.env.API_KEY || 'AIzaSyDF6ZGCNQ0oWuyIVcu7LMqzPfy6Df6ZlQI';
  console.log(process.env.API_KEY);
  let playlistDetailsObject = {};
  try {
    const playlistDetailsQuery = await axios.get(`${baseApiUrl}/playlists`, {
      params: {
        part: 'snippet',
        id,
        key: apiKey,
      },
    });
    playlistDetailsObject = {
      playlistName: playlistDetailsQuery.data.items[0].snippet.title,
      playlistId: playlistDetailsQuery.data.items[0].id,
      playlistImage:
        playlistDetailsQuery.data.items[0].snippet.thumbnails.medium.url,
      playlistEtag: etag,
      currentIndex: 0,
    };
  } catch (error) {
    return null;
  }

  return playlistDetailsObject;
}
