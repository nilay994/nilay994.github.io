---
layout: pages
---

# Publications
_yay!_


### **- Artificial Intelligence behind the winning entry to the 2019 AI Robotic Racing Competition**

The article presents the winning solution of the AI Robotic Racing (AIRR)'s fully autonomous drone races. 

<iframe width="350" height="200" src="https://www.youtube.com/embed/2H1Eo8DTepg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen align="right"></iframe>

<small>The core approach during this research was inspired by how human pilots combine noisy observations of the race gates with mental models of the drone's dynamics to achieve fast control. It achieved so by focussing on gate detection with an efficient deep neural segmentation network coupled with robust state estimation and risk-aware control. Reaching speeds of ~9.2m/s, the solution remained unrivaled by any of the previous autonomous drone race competitions. Despite this, it lost against one of the fastest human pilots, Gab707. The presented approach indicates a promising direction to close the gap with drone pilots, forming an important step in pushing smart vision and advanced control techniques to the real world.</small>

[Link](https://arxiv.org/abs/2109.14985) to the paper. [Comment](https://www.nature.com/articles/s42256-021-00405-z.epdf) by Nature Machine Intelligence.

### **- Control for autonomous drone racing**

Focuses on optimal control and trajectory planning for racing drones and was used in the development of the winning paper above. 

<img src="./img/publications/alphapilot.webp" width="400px" align="right"/>

<small>Racing drones in use are agile autonomous platforms that operate at the limits of computational perception abilities while being at the edge of their aerodynamic flight envelopes. Such challenges make the field of autonomous drone racing prominent among research groups around the world. These races aim to push the boundaries of perception and control algorithms, while simultaneously mitigating the real-world uncertainty of execution on autonomous systems. While perception algorithms face challenges due to limited feature detection, high motion blur and computational requirements, control algorithms face challenges of planning trajectories that squeeze out every millisecond there is and still safely obeying those commands. This thesis addresses the challenge of control for racing, which is responsible for guiding drones to quickly design and track time-optimal trajectories for fast flights. </small> 

[Link](https://repository.tudelft.nl/islandora/object/uuid%3A99f41ef5-f2c9-4a0a-9b89-0245e106f6de) to the thesis.

### **- Li-Fi swarm robots with visual odometry**

Li-Fi can transfer data by modulating the intensity of light at imperceivable rates. The proposed solution achieves closed loop control via Li-Fi/VLC with an overhead camera mocking a GPS in a swarm environment. 

<div style="text-align:center"><img src="./img/publications/swarm-lifi.webp" width="700px"></div>

<small>Motivated by the looming radio frequency spectrum crisis, this project aims to demonstrate that Visible Light Communication (VLC) provided enough bandwidth for closed loop control of multiple robots for indoor RF-free environment. The paper describes the approach used to exploit off-the-shelf components for facilitating a simplex VLC communication. Also discusses a few swarm algorithms which could be tested with the simple localization and control setup. </small>

[Link](https://link.springer.com/chapter/10.1007/978-3-319-67934-1_18) to the paper.


### **- Motor driver using charge pumps**

After burning through a couple of motor drivers, quickly tried making one ourselves. An H-bridge configuration driven by charge pumps controlled by an embedded computer is presented here.

<img src="./img/publications/proteus.webp" width="300px" align="right"/>
<small> N-channel MOSFETs and charge pumps together eliminate the problems of Dead time of MOSFETs and High values of RDS (ON). The embedded system using an ATMEL μC drives the load and monitors the voltages and input PWM to establish a closed loop system by comparing it with the stored threshold state space parameters of the motor, in turn preventing MOSFET damage by synchronized control over the gates.</small> 

&nbsp;
[Link](https://ieeexplore.ieee.org/abstract/document/7443724/) to the paper.



### **- Other projects**
Control and embedded systems interface of the [CNN-based Ego-Motion Estimation for Fast MAV Maneuvers](https://arxiv.org/abs/2101.01841) and later also the [Neuromorphic control for optic-flow-based landings of MAVs using the Loihi processor](https://arxiv.org/abs/2011.00534).

* * *
## Clubs
1. [Society of Robotics and Automation](sra.vjti.info)
2. [MAVLab](mavlab.tudelft.nl)
3. Innovators Club of India
4. Also, posses a :golf: club

* * *

## News

- **AlphaPilot challenge**: 
    [Business Insider](https://markets.businessinsider.com/news/stocks/lockheed-martin-drone-racing-league-announce-a-i-robotic-racing-circuit-champions-give-team-1-million-cash-prize-for-fastest-autonomous-racing-drone-1028747953#), [Lockheed Martin](https://www.lockheedmartin.com/en-us/news/events/ai-innovation-challenge.html), [WIRED magazine](https://www.wired.com/story/coders-versus-human-pilots-drone-race/) and [Bloomberg](https://www.bloomberg.com/news/videos/2018-09-05/lockheed-martin-looks-to-drone-racing-for-the-next-advance-in-ai-video).

    <img src="./img/publications/65.webp" width="300px">

    &nbsp;
  
- **Undergrad robotics chapter**:

    <img src="./img/publications/64.webp" width="200px">
    <img src="./img/publications/62.webp" width="200px">
    <img src="./img/publications/61.webp" width="200px">

[go to projects](./projects)

[home](./)
