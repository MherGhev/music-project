class Song{
    constructor(id, songName, artist, description) {
        this.id = id; // this will be retrieved from the db;
        this.songName = songName;
        this.artist = artist;
        this.description = description
    }
}

const d1 = new Song(1, "Hips don't lie", "Shakira", "description1");
const d2 = new Song(2, "Balance", "Anathema", "description2");
const d3 = new Song(3, "Closer", "Anathema", "description3");

const discoverSongs = [d1, d2, d3];


const m1 = new Song(4, "Thriller", "Michael Jackson", "description4");
const m2 = new Song(5, "Beat it", "Michael Jackson", "description5");

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