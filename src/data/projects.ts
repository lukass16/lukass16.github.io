export type ProjectTag = "ML" | "DA" | "SW" | "OTHER";

export interface ProjectLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: ProjectTag[];
  date: string;
  image: string;
  imageCaption?: string;
  links: ProjectLink[];
  content: string;
}

export const tagLabels: Record<ProjectTag | "*", string> = {
  "*": "All",
  ML: "Machine Learning / SciML",
  DA: "Research / Data Analysis",
  SW: "Software / Electronics",
  OTHER: "Other",
};

export const projects: Project[] = [
//   {
//     slug: "nlse",
//     title: "Unitary Transformations via Temporal Trapping",
//     summary:
//       "Exploring cross-phase modulation (XPM) in Kerr nonlinear media to achieve programmable unitary transformations of temporal pulsed modes.",
//     tags: ["ML", "DA"],
//     date: "2025-12-01",
//     image: "/images/projects/nlse.png",
//     imageCaption: "Simple Schematic of the Project",
//     links: [
//       {
//         name: "Code",
//         url: "https://github.com/lukass16/LGW-Lab-NLSE",
//         icon: "github",
//       },
//     ],
//     content: `**This is an active project**
    
// Research in the Logan Wright Applied Physics Lab. Exploring the use of cross-phase modulation (XPM) to produce unitary transformations of weak input pulses by learning appropriate parametrizations of strong trap pulses.

// After creating an automatically differentiable 1+1D coupled Nonlinear Schrödinger Equation (NLSE) simulation am currently exploring using optimization of the trap pulse parameters to produce arbitrary unitary transformations of the arbitrary input pulses. I'm using input pulses parametrized using 16 Hermite-Gauss basis modes i.e. I'm working in a 16D computational space. In future work I plan will explore the feasibility of realizing unitary transformations within micro-ring resonators.`,
//   },
  {
    slug: "pino",
    title: "Physics-Informed Losses for Neural Operators",
    summary:
      "Research at ETH Zurich CAMLab, exploring physics-informed losses for training and fine-tuning neural operators",
    tags: ["ML"],
    date: "2025-05-01",
    image: "/images/projects/pino.png",
    links: [
      {
        name: "Code",
        url: "https://github.com/lukass16/camlab-pino",
        icon: "github",
      },
      {
        name: "Paper",
        url: "/uploads/documents/pino/camlab_writeup.pdf",
        icon: "document",
      },
    ],
    content: `As part of research at ETH Zurich Computational Applied Mathematics Laboratory CAMLab worked on using physics-informed losses for training and fine-tuning neural operators. See short writeup [here](/uploads/documents/pino/camlab_writeup.pdf).`,
  },
  {
    slug: "gait",
    title: "SciML Turbulence Simulation Surrogate Model",
    summary:
      "Development of ML model to enable faster simulation of plasma turbulence",
    tags: ["ML"],
    date: "2024-10-01",
    image: "/images/projects/gait.png",
    links: [
      {
        name: "Code",
        url: "https://github.com/iangill11/MLuSHrooM",
        icon: "github",
      },
      {
        name: "Paper",
        url: "/uploads/documents/gait/final.pdf",
        icon: "document",
      },
    ],
    content: `As part of final project for the Scientific Machine Learning (S&DS 689) class at Yale University, worked on a machine learning model to more efficiently simulate plasma turbulence.

Full Writeup/Paper: [Here](/uploads/documents/gait/final.pdf)

Code Repository: [Here](https://github.com/iangill11/MLuSHrooM/tree/main/model)

I specifically worked on the development and implementation of the convolutional variational autoencoder (CVAE) and the coupled dense neural network (DNN) in PyTorch—which are summarized in the final paper—and the training of these respective models.

We hope to continue our work and explore other multi-physics models with my specific focus being the exploration of using DeepM&Mnets.`,
  },
  {
    slug: "regen",
    title: "Regenerative Cooling Solver",
    summary:
      "Developed method for simulating fluid flow and combustion in engine, generating optimal engine geometries.",
    tags: ["DA"],
    date: "2023-11-01",
    image: "/images/projects/regen.png",
    imageCaption: "Regenerative Cooling Solver Output",
    links: [
      {
        name: "Code",
        url: "https://github.com/Project-Liquid/TheRocket/tree/main/RegenSolver",
        icon: "github",
      },
    ],
    content: `The 2023-2024 [Yale Project Liquid Team](https://yaleaerospace.org/main/project-liquid) aimed to develop a liquid-propellant rocket. As part of the Propulsion team worked on developing the regeneratively-cooled Nitrous Oxide-Ethane liquid rocket engine.

My main focus was reviewing and revamping the methodology used by the team to size the engine.

Effectively, I:
1) Made a summary of literature and equations to be used by the team for sizing the engine. [(summary visible here)](/uploads/documents/regen/cheatsheet.pdf)
2) Created a Python sizing script that (given propellant properties, target thrust, and target chamber pressure) used said equations along with thermodynamics libraries to produce the inner engine geometry.
3) Developed an iterative solver that (based on known temperature limits for safe operation of the engine) generated the geometry of cooling channels as well as solved/simulated the properties of the coolant along the engine. [(overview visible here)](/uploads/documents/regen/solveroverview.pdf)

The geometry was then output to be directly used in the CAD file of the rocket. The main solver code can be viewed [here](https://github.com/Project-Liquid/TheRocket/blob/main/RegenSolver/hemsolver.ipynb).

A core aspect of the solver is its aim to model a two-phase flow of coolant. We use our oxidizer N2O as coolant, but due to its high vapor pressure, it would likely flow in a two-phase state within the cooling channels. We aim to estimate its properties in such states using the HEM Model discussed in the overview linked above.

*2D and 3D images of final solved-for channels and wall contours:*
![2d](/uploads/images/regen/channel2d.png)
![3d](/uploads/images/regen/channel3d.png)

*Solved-for channels and wall contours in CAD:*
![engine](/uploads/images/regen/engine.png)

*Final printed engine:*
![printed](/uploads/images/regen/printed.webp)`,
  },
  {
    slug: "cubesat",
    title: "CubeSat Power Estimation",
    summary: "Simulations and data analysis using Ansys STK and Python",
    tags: ["DA"],
    date: "2023-10-01",
    image: "/images/projects/cubesat.png",
    imageCaption: "STK",
    links: [
      {
        name: "Code",
        url: "https://github.com/lukass16/CubeSat-Power-Generation-Estimate",
        icon: "github",
      },
    ],
    content: `During the 2023-2024 academic year, as part of the Yale Undergraduate Aerospace Association (YUAA) CubeSat team I helped analyze the power budget of the to-be-launched satellite.

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

This simulation and data analysis was done in collaboration with the leader of the CubeSat team Elijah Bakaleynik, who also completed the last series of simulation scenarios.`,
  },
  {
    slug: "swift",
    title: "Flight Computer SWIFT",
    summary:
      "Electronics programming and testing for the second rocket launch campaign of Riga Technical University rocketry team.",
    tags: ["SW"],
    date: "2022-12-01",
    image: "/images/projects/swift.jpg",
    imageCaption: "SWIFT rocket before launch",
    links: [
      {
        name: "Code",
        url: "https://github.com/lukass16/VIP-SPACE-2022",
        icon: "github",
      },
    ],
    content: `The **second fully student-developed rocket** of the Riga Technical University High Power Rocketry Team (RTU HPR) aimed to reach a target altitude of 1.6 km. Other goals included using a dual deployment sequence and demonstrating and testing self-developed components in flight.

The avionics team developed a custom flight computer (FC), as well as a new base station (BS), and separate camera module (CAM). In my position of avionics team lead, I was mainly responsible for design and flight planning, electronics testing, and writing all the software for FC as well as other components. The rocket was launched in November 2022 and was safely recovered after achieving an apogee of 1930 m, and a top speed of 1006 km/h.

Among other things the **development of the FC** included:
- creating a 2 thread **state machine** code architecture
- writing and testing a **Kalman filter** for apogee detection
- communicating with the ground via **LoRa**
- **storing flight data**

Code developed for the FC, RS, and CAM is available on the 2022 Avionics Team [Github Folder](https://github.com/lukass16/VIP-SPACE-2022), as well as a full *.pdf* file with the code schematic can be viewed [here](/uploads/swiftschematic.pdf).

Some data from the flight is visualized below:

![Altitude](/uploads/images/swift/altitude.png)

![GPS](/uploads/images/swift/gps.png)

![General Data](/uploads/images/swift/data.png)

Finally, here is an image of the FC PCB, and RTU HPR 2022 team.

![FC](/uploads/images/swift/FC.jpg)

![team](/uploads/images/swift/team.jpg)`,
  },
  {
    slug: "barkbeetle",
    title: "Remote Sensing Research",
    summary:
      "Independent research conducted on Forest Damage – Bark Beetle Identification Using Remote Sensing in Latvian Territories",
    tags: ["DA", "ML"],
    date: "2022-09-01",
    image: "/images/projects/barkbeetle.jpeg",
    imageCaption: "Close up of specific region of detection results in study area",
    links: [
      {
        name: "Code",
        url: "https://github.com/lukass16/Bark-Beetle-Detection-in-Latvia",
        icon: "github",
      },
      {
        name: "Paper",
        url: "/uploads/documents/barkbeetle/paper.pdf",
        icon: "document",
      },
    ],
    content: `### Summary
Throughout the 2021-2022 academic year I decided to engage in Remote Sensing research after becoming interested in the topic from a previous project. In looking for a potential research question I came upon the problem of bark beetle infestations and their early and precise detection in European forests. Looking further into the problem in the context of Latvia, I had the idea of analyzing whether a certain publicly available image dataset could be potentially used to detect infested trees with higher spatial resolution.

Indeed, **my final project and paper revolved around creating a computer model to classify/detect infested areas using this novel dataset** and to analyze the respective results and viability of the method.

Here is a slightly more detailed [summary](/uploads/documents/barkbeetle/summary.pdf) and the [paper](/uploads/documents/barkbeetle/paper.pdf) itself. Most code developed during the project can be viewed on my [Github](https://github.com/lukass16/Bark-Beetle-Detection-in-Latvia).

### Results
The developed algorithmic model was able to discriminate between healthy and red-attacked trees on a pixel by-pixel basis with an accuracy of 99% for the study area. The study highlighted the potential use of such local remote sensing imagery – which many European countries currently produce - as an effective tool for red-attack stage bark beetle outbreak identification.

Additionally, it highlights the necessity of increased temporal resolution of this data, as well as more detailed in-situ data for future implementation and augmentation of this method in Latvia.

*A confusion matrix on the test data of the resulting model can be seen below:*
![confusion matrix](/uploads/images/barkbeetle/confusion.png)

*As well as a close up of a specific region of the study area, showing the surveyed bark beetle damage areas (yellow dotted line) and the bark beetle red-attack areas identified by the model (red):*
![example](/uploads/images/barkbeetle/example.png)

### Other

The study received a perfect score and the highest award in the National Research Competition under the category *Earth and Environmental Sciences* and was chosen to represent Latvia at the *EU Contest for Young Scientists 2022 (EUCYS2022)* in which it received the *Natural Biodiversity Award 2022*.

*If you've scrolled so far down, as a reward, here is me posing at my research booth with my two colleagues Stuart and Kevin:*
![booth at EUCYS2022](/uploads/images/barkbeetle/booth.jpg)

A special thank you goes out to my physics teacher Elza Līna Liniņa for her help in reviewing the paper and my scientific consultant Dr. Juris Siņica-Siņavskis who helped answer any questions I had regarding existing approaches and provided feedback on my paper.`,
  },
  {
    slug: "vip-1",
    title: "Flight Computer VIP-1",
    summary:
      "Electronics programming and testing for the rocket launch campaign of Riga Technical University rocketry team.",
    tags: ["SW"],
    date: "2021-11-01",
    image: "/images/projects/vip-1.jpg",
    imageCaption: "VIP-1 rocket in its final stages of testing",
    links: [
      {
        name: "Code",
        url: "https://github.com/lukass16/C-VIP-ROCKET",
        icon: "github",
      },
    ],
    content: `Throughout 2021 the Riga Technical University High Power Rocketry Team (RTU HPR) aimed to create a fully student-developed rocket (named VIP-1) to reach 1 km altitude and would then be the first such rocket by a university team in the Baltic states.

Part of the project involved developing our own custom flight computer (FC), as well as a stationary base station (BS) and mobile receiving station (RS) for communications with the rocket. The rocket reached an apogee of 1200m, exceeding the original mission goal of 1000 m. The maximum speed was 800 km/h. Despite the successful ascent, the recovery system malfunctioned and VIP-1 was not recovered.

The project was a good first learning opportunity for me. It involved testing the electronics and working first-hand with sensors, their calibration, and the implementation of various software logic. This included:
- implementation of a **state machine** with **2 parallel threads**
- use of **LoRa** for radio communications
- creation of an **apogee detection mechanism** using magnetometer data
- **data storage**

All code developed for the flight computer is available on my [Github](https://github.com/lukass16/C-VIP-ROCKET), as well as a full *.pdf* file with the code schematic can be viewed [here](/uploads/vip1schematic.pdf). Within the schematic the various states of the code can be seen, which relate to the respective planned flight stages and potential outcomes, which I also worked on.

Here are some pictures of the FC (with some questionable soldering) and RS, as well as some "media day" pictures of our team.

![FC](/uploads/images/vip1/FC.jpg)

![RS](/uploads/images/vip1/RS.jpg)

![working](/uploads/images/vip1/working.jpg)

![team](/uploads/images/vip1/team.jpg)`,
  },
  {
      slug: "tdl",
      title: "Source Attribution for RAG",
      summary:
        "Exploration of various methods for source attribution in RAG systems.",
      tags: ["ML"],
      date: "2025-10-01",
      image: "/images/projects/tdl.png",
      imageCaption: "Source Attribution for RAG",
      links: [
        {
          name: "Code",
          url: "https://github.com/lukass16/RAG-Attribution",
          icon: "github",
        },
        {
          name: "Paper",
          url: "/uploads/documents/tdl/writeup.pdf",
          icon: "document",
        },
      ],
      content: `Final project for the *Trustworthy Deep Learning class (CPSC 5710)*. We explored various different approaches to perform source attribution for RAG systems i.e. identifying the most relevant informational sources used by an LLM to generate an answer in a RAG system. We implemented and evaluated six source attribution methods comparing *Shapley-based* approaches (Leave-One-Out, Monte Carlo, Permutation) with *white-box* methods (gradient, integrated gradients, attention-based) using Llama-3.2-1B.

I worked on the white-box attribution methods, which leverage model internals like gradients and attention patterns for single-pass attribution. The full writeup is available [here](/uploads/documents/tdl/writeup.pdf).`

  }
];

// Sort projects by date (newest first)
export const sortedProjects = [...projects].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getProjectsByTag(tag: ProjectTag | "*"): Project[] {
  if (tag === "*") return sortedProjects;
  return sortedProjects.filter((project) => project.tags.includes(tag));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

