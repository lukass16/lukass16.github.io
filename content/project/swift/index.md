---
title: Flight Computer SWIFT
summary: Electronics programming and testing for the second rocket launch campaign of Riga Technical University rocketry team.
tags:
  - SW
date: '2022-12-01T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: SWIFT rocket before launch
  focal_point: Smart

links:
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/lukass16/VIP-SPACE-2022
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

---
The **second fully student-developed rocket** of the Riga Technical University High Power Rocketry Team (RTU HPR) aimed to reach a target altitude of 1.6 km. Other goals included using a dual deployment sequence and demonstrating and testing self-developed components in flight.

The avionics team  developed a custom flight computer (FC), as well as a new base station (BS), and separate camera module (CAM). In my position of avionics team lead, I was mainly responsible for design and flight planning, electronics testing, and writing all the software for FC as well as other components. The rocket was launched in November 2022 and was safely recovered after achieving an apogee of 1930 m, and a top speed of 1006 km/h. Here is a video from the launch:

{{< youtube cE6f3ft5kpY >}} <br>

Among other things the **development of the FC** included:
- creating a 2 thread **state machine** code architecture
- writing and testing a **Kalman filter** for apogee detection
- communicating with the ground via **LoRa**
- **storing flight data**

Code developed for the FC, RS, and CAM is available on the 2022 Avionics Team [Github Folder](https://github.com/lukass16/VIP-SPACE-2022), as well as a full *.pdf* file with the code schematic can be viewed {{< staticref "uploads/swiftschematic.pdf" "newtab" >}}here{{< /staticref >}}. 

Some data from the flight is visualized below:

![Altitude](/uploads/images/swift/altitude.png)

![GPS](/uploads/images/swift/gps.png)

![General Data](/uploads/images/swift/data.png)


Finally, here is an image of the FC PCB, and RTU HPR 2022 team.

![FC](/uploads/images/swift/FC.jpg)

![team](/uploads/images/swift/team.jpg)
