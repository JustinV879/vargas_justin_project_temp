while True:
    print("Current Room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F" + " - " + input.temperature(TemperatureUnit.CELSIUS) + "°C")
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 60:
        light.set_all(light.rgb(255,0,0))
        print("too hot")
    elif input.temperature(TemperatureUnit.FAHRENHEIT) >= 30:
        light.set_all(light.rgb(0,255,0))
        print("just right")
    else:
        light.set_all(light.rgb(0,0,255))
        print("too cold")