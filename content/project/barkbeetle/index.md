---
title: Remote Sensing Research
summary: Independent research conducted on Forest Damage – Bark Beetle Identification Using Remote Sensing in Latvian Territories
tags:
  - DA
date: '2022-09-01T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: Close up of specific region of detection results in study area
  focal_point: Smart

links:
  - icon: github
    icon_pack: fab
    name: Code
    url: https://github.com/lukass16/Bark-Beetle-Detection-in-Latvia
  # - icon: file
  #   icon_pack: far
  #   name: Paper
  #   url: https://github.com/lukass16/Bark-Beetle-Detection-in-Latvia/blob/master/study/ENG%20Full%20Project%20Forest%20Damage%20%E2%80%93%20Bark%20Beetle%20Identification%20Using%20Remote%20Sensing%20in%20Latvian%20Territories.pdf
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
### Summary
Throughout the 2021-2022 academic year I decided to engage in Remote Sensing research after becoming interested in the topic from a previous project. In looking for a potential research question I came upon the problem of bark beetle infestations and their early and precise detection in European forests. Looking further into the problem in the context of Latvia, I had the idea of analyzing whether a certain publicly available image dataset could be potentially used to detect infested trees with higher spatial resolution.

Indeed, **my final project and paper revolved around creating a computer model to classify/detect infested areas using this novel dataset** and to analyze the respective results and viability of the method.

Here is a slightly more detailed {{< staticref "uploads/documents/barkbeetle/summary.pdf" "newtab" >}}summary{{< /staticref >}} and the {{< staticref "uploads/documents/barkbeetle/paper.pdf" "newtab" >}}paper{{< /staticref >}} itself. Most code developed during the project can be viewed on my [Github](https://github.com/lukass16/Bark-Beetle-Detection-in-Latvia).

### Results
The developed algorithmic model was able to discriminate between healthy and red-attacked trees on a pixel by-pixel basis with an accuracy of 99% for the study area. The study highlighted the potential use of such local remote sensing imagery – which many European countries currently produce - as an effective tool for red-attack stage bark beetle outbreak identification. 

Additionally, it highlights the necessity of increased temporal resolution of this data, as well as more detailed in-situ data for future implementation and augmentation of this method in Latvia.

*A confusion matrix on the test data of the resulting model can be seen below:* ![confusion matrix](/uploads/images/barkbeetle/confusion.png)

*As well as a close up of a specific region of the study area, showing the surveyed bark 
beetle damage areas (yellow dotted line) and the bark beetle red-attack areas identified by the model (red):* ![example](/uploads/images/barkbeetle/example.png)

### Other

The study received a perfect score and the highest award in the National Research Competition under the category *Earth and Environmental Sciences* and was chosen to represent Latvia at the *EU Contest for Young Scientists 2022 (EUCYS2022)* in which it received the *Natural Biodiversity Award 2022*.

*If you've scrolled so far down, as a reward, here is me posing at my research booth with my two colleagues Stuart and Kevin:* ![booth at EUCYS2022](/uploads/images/barkbeetle/booth.jpg)




A special thank you goes out to my physics teacher Elza Līna Liniņa for her help in reviewing the paper and my scientific consultant Dr. Juris Siņica-Siņavskis who helped answer any questions I had regarding existing approaches and provided feedback on my paper.