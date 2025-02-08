namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(true)
})
music.play(music.createSong(assets.song`song`), music.PlaybackMode.LoopingInBackground)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.follow(null)
tiles.setTilemap(tilemap`level2`)
