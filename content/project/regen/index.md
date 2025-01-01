---
title: Regenerative Cooling Solver
summary: Electronics Programming and Testing for first rocket of RTU HPR.
tags:
  - DA
date: '2023-11-01T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: Regenerative Cooling Solver Output
  focal_point: Smart

links:
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/Project-Liquid/TheRocket/tree/main/RegenSolver
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

The 2023-2024 [Yale Project Liquid Team](https://yaleaerospace.org/main/project-liquid) aimed to develop a liquid-propellant rocket. As part of the Propulsion team worked on developing the regeneratively-cooled Nitrous Oxide-Ethane liquid rocket engine. 

My main focus was reviewing and revamping the methodology used by the team to size the engine.

Effectively, I:
1) Made a summary of literature and equations to be used by the team for sizing the engine. {{< staticref "uploads/documents/regen/cheatsheet.pdf" "newtab" >}}(summary visible here){{< /staticref >}}
2) Created a Python sizing script that (given propellant properties, target thrust, and target chamber pressure) used said equations along with thermodynamics libraries to produce the innner engine geometry.
3) Developed an iterative solver that (based on known temperature limits for safe operation of the engine) generated the geometry of cooling channels as well as solved/simulated the properties of the coolant along the engine. {{< staticref "uploads/documents/regen/solveroverview.pdf" "newtab" >}}(overview visible here){{< /staticref >}}

The geometry was then outputed to be directly used in the CAD file of the rocket. The main solver code can be viewed [here](https://github.com/Project-Liquid/TheRocket/blob/main/RegenSolver/hemsolver.ipynb).

A core aspect of the solver is its aim to model a two-phase flow of coolant. We use our oxidizer N2O as coolant, but due to its high vapor pressure, it would likely flow in a two-phase state within the cooling channels. We aim to estimate its properties in such states using the HEM Model discussed in the overview linked above.

*2D and 3D images of final solved-for channels and wall contours:*
![2d](/uploads/images/regen/channel2d.png)
![3d](/uploads/images/regen/channel3d.png)

*Solved-for channels and wall contours in CAD:*
![engine](/uploads/images/regen/engine.png)

*Final printed engine:*
![printed](/uploads/images/regen/printed.webp)

