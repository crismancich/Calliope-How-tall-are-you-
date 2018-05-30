let Größe_in_cm = 0
let Gemessene_Entfernung = 0
let Entfernung_des_Sensors_zum_Boden = 0
input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(1000)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(900)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(800)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(700)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(600)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(500)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(400)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(300)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(200)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(100)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(90)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(80)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(70)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(60)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(50)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(40)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(20)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.pause(20)
    music.playTone(988, music.beat(BeatFraction.Double))
    Entfernung_des_Sensors_zum_Boden = 200
    Gemessene_Entfernung = grove.measureInCentimeters(DigitalPin.C16)
    Größe_in_cm = Entfernung_des_Sensors_zum_Boden - Gemessene_Entfernung
    basic.pause(1000)
    basic.showNumber(Größe_in_cm)
    basic.pause(1000)
    basic.showNumber(Größe_in_cm)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
})
basic.showLeds(`
    . . # . .
    . # # . .
    # # # # #
    . # # . .
    . . # . .
    `)
