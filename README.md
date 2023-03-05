# Zigbee controller for IKEA RIGGAD

This project aims to make a simple lamp smart, so I don't have to turn it off separately.

## Project structure

This follows Zephyr's [T2: Star topology, application is the manifest repository](https://docs.zephyrproject.org/3.1.0/develop/west/workspaces.html?highlight=topology#t2-star-topology-application-is-the-manifest-repository).

The application is based on the [Zigbee: Light bulb](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.2.0/nrf/samples/zigbee/light_bulb/README.html) sample.

It's using a customized board based on the [nRF52840 Dongle](https://docs.zephyrproject.org/3.1.0/boards/arm/nrf52840dongle_nrf52840/doc/index.html), removing all the legacy bootloader stuff and making the partitions work with ZBOSS.

## Wiring
* P0.29 is connected to pin 2 of IC1(XD7468A) to detect whether the lamp is switched on.
* P1.13 is connected to the button (pin 7 of IC1) to simulate button presses.
* A 5V-Step-Down Regulator is connected to the 19V input and the dongle.
* UART is connected to TX=P0.20, RX=P0.24

## Building

This will only work if you already have the setup to build Zephyr projects in general.

```bash
mkdir riggad-zigbee
cd riggad-zigbee
west init -m https://github.com/maz3max/riggad-zigbee.git
west update
cd application/
west build -b dongle -- -DBOARD_ROOT=.
```
