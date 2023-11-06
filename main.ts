input.onButtonPressed(Button.A, function () {
    basic.showNumber(Maximum_Temperature)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(minimum_temperature)
})
let minimum_temperature = 0
let Maximum_Temperature = 0
Maximum_Temperature = 50
minimum_temperature = -5
basic.forever(function () {
    if (input.temperature() < minimum_temperature) {
        Maximum_Temperature = input.temperature()
    } else {
        minimum_temperature = input.temperature()
    }
})
