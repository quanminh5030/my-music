import axios from 'axios';
import {main_url, api_key} from '../../config/keysConfig';

const getAlbums = artistId => {
    const url = `${main_url}/artist.albums.get?artist_id=${artistId}&apikey=${api_key}`;
    const request = axios.get(url)

    return request.then(response => response.data)
}

const getLyrics = songId => {
    const url = `${main_url}/track.lyrics.get?track_id=${songId}&apikey=${api_key}`;
    const request = axios.get(url)
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

const getSongId = songName => {
    const url = `${main_url}/track.search?q_track=${songName}&s_artist_rating=desc&s_track_rating=desc&apikey=${api_key}`;
    const request = axios.get(url);
    return request.then(response => response.data)
}

//full lyric but different api. also poor data.
const getLyrics2 = (artist, song) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    const request = axios.get(url);
    return request.then(response => response.data)
}

const getTopSongsByCountry = country => {
    const url = `${main_url}/chart.tracks.get?chart_name=hot&page_size=10&country=${country}&f_has_lyrics=1&apikey=${api_key}`;
    const request = axios.get(url);
    return request.then(response => response.data)
}

const getSongsByGenre = genreId => {
    const url = `${main_url}/track.search?f_music_genre_id=${genreId}&f_has_lyrics=1&page_size=10&apikey=${api_key}`;
    const request = axios.get(url);
    return request.then(response => response.data)
}

const FetchServices = {
    getAlbums,
    getLyrics,
    getArtistId,
    getTracks,
    getArtistInfo,
    getSongId,
    getLyrics2,
    getTopSongsByCountry,
    getSongsByGenre
}

export default FetchServices;
