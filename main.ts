namespace SpriteKind {
    export const Cursor = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
tiles.setCurrentTilemap(tilemap`Nature`)
let Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Cursor)
controller.moveSprite(Cursor)
