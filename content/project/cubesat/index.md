---
title: CubeSat Power Estimation
summary: Simulations and data analysis using Ansys STK and Python
tags:
  - DA
date: '2023-10-01T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: STK
  focal_point: Smart

links:
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/lukass16/CubeSat-Power-Generation-Estimate
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: example
---
During the 2023-2024 academic year, as part of the Yale Undergraduate Aerospace Association (YUAA) CubeSat team I helped analyze the power budget of the to-be-launched satellite. 

The core of the project was:
1) Creating an accurate 3D model of the satellite in Blender, which, along with accurate solar panel parameters would then be converted into a model fit for the Ansys Systems Tool Kit (STK) simulation software.
2) Use Ansys STK to simulate various satellite attitude and rotation scenarios using approximate orbital parameters of the satellite.
3) Analyze the data in Python to provide information about the power budget of the satellite (to help drive design decisions for the electronics of the satellite)

All the developed 3D models, test scenarios, simulations, their results, and data analysis is available in this [Github](https://github.com/lukass16/CubeSat-Power-Generation-Estimate) repository.

For some visuals, here is the 3D Model itself in the simulation software: 
![CubeSat in STK](/uploads/images/cubesat/stk.png) 
![CubeSat in STK 2](/uploads/images/cubesat/cubesatstk.png)
![CubeSat in STK 3](/uploads/images/cubesat/cubesat.png)
as well as an example of one of the main deliverables—a histogram of the total power collected during one sun-phase over a year:
![Histogram](/uploads/images/cubesat/sunphasehistogram.png)

This simulation and data analysis was done in collaboration with the leader of the CubeSat team Elijah Bakaleynik, who also completed the last series of simulation scenarios.