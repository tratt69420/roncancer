input.onButtonPressed(Button.A, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(131, music.beat(BeatFraction.Breve))
})
basic.forever(function () {
    music.setVolume(255)
})
basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P1) - 511,
    512
    )
})
