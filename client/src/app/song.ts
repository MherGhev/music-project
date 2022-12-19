
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
        console.log(this.name, otherSong.name);
        console.log(this.artist, otherSong.artist);
        return this.name === otherSong.name && this.artist === otherSong.artist;
    }
    static toSong(obj: any): Song{
        return new Song(obj.id, obj.name, obj.artist);
    }
}