while True:
    print("Current Room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F" + " - " + input.temperature(TemperatureUnit.CELSIUS) + "°C")
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 81:
        light.set_all(light.rgb(255,128,0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) > 50:
        light.set_all(light.rgb(255,0,255))
    else:
        light.set_all(light.rgb(0,0,255))
 