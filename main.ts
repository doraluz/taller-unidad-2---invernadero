basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 26 && input.temperature() < 34) {
        basic.showString("T. Normal")
    } else if (input.temperature() <= 26) {
        basic.showString("T. Baja")
        music.ringTone(262)
    } else if (input.temperature() >= 34) {
        basic.showString("T. Alta")
        music.ringTone(880)
    }
})
