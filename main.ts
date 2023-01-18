input.onButtonPressed(Button.A, function () {
    Humidity = tinkercademy.MoistureSensor(AnalogPin.P1)
    OLED.writeStringNewLine("Humidity:")
    OLED.newLine()
    OLED.writeNumNewLine(tinkercademy.MoistureSensor(AnalogPin.P0))
    if (input.buttonIsPressed(Button.B)) {
        OLED.clear()
    }
})
let Humidity = 0
OLED.init(128, 64)
OLED.clear()
