import axios from 'axios';

const main_url = 'https://api.musixmatch.com/ws/1.1';
const api_key = 'a4a2831420d51c4a4caca438f289f647';

const getAlbums = artistId => {
    const url = `${main_url}/artist.albums.get?artist_id=${artistId}&apikey=${api_key}`;
    const request = axios.get(url)
    return request.then(response => response.data)
}

const getLyrics = (song, author) => {
    const url = `https://api.lyrics.ovh/v1/${author}/${song}`;
    const request = axios.get(url);
    return request.then(response => response.data)
}

const getArtistId = artistName => {
    const url = `${main_url}/artist.search?q_artist=${artistName}&apikey=${api_key}`;
    const request = axios.get(url);
    return request.then(response => response.data)
}

const getTracks = albumId => {
    const url = `${main_url}/album.tracks.get?album_id=${albumId}&apikey=${api_key}`;
    const request = axios.get(url);
    return request.then(response => response.data)
}

const getArtistInfo = artistName => {
    const url = `${main_url}/artist.search?q_artist=${artistName}&apikey=${api_key}`;
    const request = axios.get(url);
    return request.then(response => response.data)
}

const FetchServices = {
    getAlbums,
    getLyrics,
    getArtistId,
    getTracks,
    getArtistInfo
}

export default FetchServices;
