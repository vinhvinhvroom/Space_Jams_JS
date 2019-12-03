let TRACKS = require('./space-jams-tracks');

class Album {
  constructor(id, title, artists, tracks, duration_ms){
    this.id = id
    this.title = title
    this.artists = artists
    this.tracks = []
    this.duration_ms = duration_ms
  }

  durationMin(song){
    let ms = 0
    this.tracks.forEach((song) => {
      ms += parseFloat(song.duration_ms)
    })
    return (ms/60000).toFixed(2)
  }

  summary(){
    let songTitle = this.tracks.map((song) => {
      return(`-${song.title}\n`)
    })
    return `Name: ${this.title}\nArtist(s): ${this.artists}\nDuration(min): ${this.durationMin(this.tracks)}\nTitle:\n${songTitle.join('')}`
  }

}

module.exports = Album;
