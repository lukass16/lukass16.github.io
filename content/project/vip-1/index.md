---
title: Flight Computer VIP-1
summary: Electronics programming and testing for the rocket launch campaign of Riga Technical University rocketry team.
tags:
  - SW
date: '2021-11-01T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: VIP-1 rocket in its final stages of testing
  focal_point: Smart

links:
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/lukass16/C-VIP-ROCKET
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

---
Throughout 2021 the Riga Technical University High Power Rocketry Team (RTU HPR) aimed to create a fully student-developed rocket (named VIP-1) to reach 1 km altitude and would then be the first such rocket by a university team in the Baltic states.

Part of the project involved developing our own custom flight computer (FC), as well as a stationary base station (BS) and mobile receiving station (RS) for communications with the rocket. The rocket reached an apogee of 1200m, exceeding the original mission goal of 1000 m. The maximum speed was 800 km/h. Despite the successful ascent, the recovery system malfunctioned and VIP-1 was not recovered.

The project was a good first learning opportunity for me. It involved testing the electronics and working first-hand with sensors, their calibration, and the implementation of various software logic. This included:
- implementation of a **state machine** with **2 parallel threads**
- use of **LoRa** for radio communications
- creation of an **apogee detection mechanism** using magnetometer data
- **data storage**

All code developed for the flight computer is available on my [Github](https://github.com/lukass16/C-VIP-ROCKET), as well as a full *.pdf* file with the code schematic can be viewed {{< staticref "uploads/vip1schematic.pdf" "newtab" >}}here{{< /staticref >}}. Within the schematic the various states of the code can be seen, which relate to the respective planned flight stages and potential outcomes, which I also worked on. 

Here are some pictures of the FC (with some questionable soldering) and RS, as well as some "media day" pictures of our team. 

![FC](/uploads/images/vip1/FC.jpg)

![RS](/uploads/images/vip1/RS.jpg)

![working](/uploads/images/vip1/working.jpg)

![team](/uploads/images/vip1/team.jpg)
