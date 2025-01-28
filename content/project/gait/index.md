---
title: SciML Turbulence Simulation Surrogate Model
summary: Development of ML model to enable faster simulation of plasma turbulence  
tags:
  - DA
date: '2024-10-01T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: 
  focal_point: Smart

links:
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/iangill11/MLuSHrooM
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

As part of final project for the Scientific Machine Learning (S&DS 689) class at Yale University, worked on a machine learning model to more efficiently simulate plasma turbulence.

Full Writeup/Paper: {{< staticref "uploads/documents/gait/final.pdf" "newtab" >}}Here{{< /staticref >}}

Code Repository: [Here](https://github.com/iangill11/MLuSHrooM/tree/main/model)

I specifically worked on the development and implementation of the convolutional variational autoencoder (CVAE) and the coupled dense neural network (DNN) in PyTorch—which are summarized in the final paper—and the training of these respective models.

We hope to continue our work and explore other multi-physics models with my specific focus being the exploration of using DeepM&Mnets.

