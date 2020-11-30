while (true) {
    console.log("Current Room Temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + "°F" + " - " + input.temperature(TemperatureUnit.Celsius) + "°C")
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 81) {
        light.setAll(light.rgb(255, 128, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 50) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
