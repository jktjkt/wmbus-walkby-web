# WebSerial WM-Bus packet sniffer for IMST iU891A-XL

This thing is useful for walk-by WM-Bus meter reading.
Unlike some fancy professional tools, it shows you nicely which meters have been read already, and which are still pending.

You'll need [this specific USB stick](https://shop.imst.de/wireless-solutions/usb-radio-products/89/iu891a-xl-wireless-m-bus-usb-adapter-868-mhz) and a browser which supports [Web Serial API](https://wicg.github.io/serial/).
As of 2025, this really means "Chrome".
On Android, you might need to click the "Activate WebUSB Polyfill", or you might be out of luck.
This tool performs no packer parsing/decoding, it simply produces a JSON log of all captured packets.
The log can be post-processed and fed to [`wmbusmeters`](https://github.com/wmbusmeters/wmbusmeters) for further processing.
