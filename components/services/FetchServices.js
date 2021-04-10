import axios from 'axios';

const getAlbums = author => {
    const url = `https://www.songsterr.com/a/ra/songs/byartists.json?artists="${author}"`;
    const request = axios.get(url)
    return request.then(response => response.data)
}

const getLyrics = (song, author) => {
    const request = axios.get(`https://api.lyrics.ovh/v1/${author}/${song}`);
    return request.then(response => response.data)
}

const FetchServices = {
    getAlbums,
    getLyrics
}

export default FetchServices;
