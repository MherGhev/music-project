class Song{
    constructor(id, songName, artist) {
        this.id = id; // this will be retrieved from the db;
        this.songName = songName;
        this.artist = artist;
    }
}

const d1 = new Song(1, "song1", "artist1");
const d2 = new Song(2, "song2", "artist2");
const d3 = new Song(3, "song3", "artist3");
const d4 = new Song(4, "song4", "artist4");

const discoverSongs = [d1, d2, d3, d4];


const m1 = new Song(5, "Thriller", "Michael Jackson");
const m2 = new Song(6, "Beat it", "Michael Jackson");

const myMusic = [m1, m2]; // from db

export function getDiscoverSongs() {
    return new Promise((resolve, reject) => {
        return resolve(discoverSongs);
    })
}

export function getMyMusic() {
    return new Promise((resolve, reject) => {
        return resolve(myMusic);
    })
}