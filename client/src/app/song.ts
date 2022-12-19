
export class Song {
    public id: number;
    public name: string;
    public artist: string;
    constructor(id: number, name: string, artist: string) {
        this.id = id;
        this.name = name;
        this.artist = artist;
    }
    equals(otherSong: Song): boolean {
        console.log("this", this.name, this.artist);
        console.log("other", otherSong.name, otherSong.artist);
        return this.name === otherSong.name && this.artist === otherSong.artist;
    }
}