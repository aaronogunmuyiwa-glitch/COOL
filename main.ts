input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1e+50; index++) {
        music.play(music.stringPlayable("C D E F F E D C ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.stringPlayable("C5 B A G G A B C5 ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.stringPlayable("C5 B A G G A B C5 ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.stringPlayable("C D E F F E D C ", 120), music.PlaybackMode.LoopingInBackground)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
