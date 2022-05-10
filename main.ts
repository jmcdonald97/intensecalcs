let StartTime = 0
let DivideAnswer = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    StartTime = input.runningTimeMicros()
    for (let index = 0; index < 10000000; index++) {
        DivideAnswer = 1000000 / 77
    }
    basic.showNumber((input.runningTimeMicros() - StartTime) / 1000000)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Tortoise)
})
