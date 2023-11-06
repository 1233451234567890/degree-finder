input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
let minimum_temperature = -5
let Maximum_Temperature = 50
basic.forever(function () {
    if (input.temperature() > minimum_temperature) {
        Maximum_Temperature = input.temperature()
    }
})
