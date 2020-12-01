while (true) {
    console.log("Current Room Temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + "°F" + " - " + input.temperature(TemperatureUnit.Celsius) + "°C")
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 60) {
        light.setAll(light.rgb(255, 0, 0))
        console.log("too hot")
    } else if (input.temperature(TemperatureUnit.Fahrenheit) >= 30) {
        light.setAll(light.rgb(0, 255, 0))
        console.log("just right")
    } else {
        light.setAll(light.rgb(0, 0, 255))
        console.log("too cold")
    }
    
}
