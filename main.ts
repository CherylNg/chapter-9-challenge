let tempo = 0
let Delay = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(tempo)
})
basic.forever(function () {
    tempo = Math.round(Math.map(edubitPotentioBit.readPotValue(), 0, 1023, 40, 200))
    Delay = 60 * 1000 / tempo
    edubitMotors.setServoPosition(ServoChannel.S1, 60)
    basic.pause(Delay)
    edubitMotors.setServoPosition(ServoChannel.S1, 120)
    basic.pause(Delay)
})
