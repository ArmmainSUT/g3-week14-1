input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() - 25)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(led.brightness())
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(led.brightness() + 25)
})
led.setBrightness(255)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
