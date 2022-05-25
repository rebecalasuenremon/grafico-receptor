radio.onReceivedString(function (receivedString) {
    led.plotBarGraph(
    Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -90, -20, 0, 9),
    9
    )
})
radio.setGroup(10)
