---
title: "Computer Vision Prototyping for Intra-Operative AI"
start_date: "2019-08-01"
end_date: "2019-09-01"
excerpt: "<img src='/images/touch_surgery.jpg' width='200'> \n \n <strong>Touch Surgery</strong>, acquired by Medtronic for $300M five months later. Pre-training and testing computer vision models for intra-operative video, in support of the company's remote and tele-mentored surgery work."
collection: portfolio
category: industry
organisation: "Touch Surgery (acquired by Medtronic, February 2020)"
aims:
- Build computer vision prototypes for intra-operative AI, working on video from live surgical procedures.
- Pre-train and test models supporting the company's remote and tele-mentored surgery ambitions.
- Contribute to data infrastructure improvements and surgical AI validation protocols.
skills:
  - task: "Computer Vision"
    tools:
      - "OpenCV"
      - "NVIDIA CUDA"
  - task: "Model Training and Evaluation"
    tools:
      - "Model pre-training"
      - "Validation protocol design"
  - task: "Data Infrastructure"
    tools:
      - "Surgical video pipelines"
---

A summer internship as **AI Surgical Devices Intern** at Touch Surgery in London, five months
before the company was acquired by **Medtronic for $300M** in February 2020.

<img src="/images/touch_surgery.jpg" alt="Touch Surgery" loading="lazy" width="200">


## The problem

Touch Surgery's ambition was **remote and tele-mentored surgery**: a senior surgeon guiding or
assessing an operation they are not physically present for. That only works if software can
understand the operative video in something close to real time, recognising the instruments in
view, the anatomy, and which step of the procedure is under way. A remote surgeon watching an
unannotated video feed has no more information than a bystander.

## What I worked on

I built **computer vision prototypes** in OpenCV with CUDA acceleration, working on
intra-operative video, and handled **pre-training and testing** for the models behind them.

Surgical video is an unusually hostile domain for vision models. Illumination changes as the
scope moves, smoke from cautery obscures the field, blood alters the colour distribution mid
procedure, instruments occlude one another, and the camera itself is handheld and moving. Frames
are also heavily correlated in time, so a naive train and test split leaks: adjacent frames from
one operation end up on both sides of it and the reported accuracy is meaningless. Splitting by
**procedure** rather than by frame is what makes an evaluation honest, and that is the kind of
detail that decides whether a result is real.

CUDA mattered for the same practical reason: the target was intra-operative use, so inference
that cannot keep pace with a live video feed is not a solution regardless of its accuracy.

Alongside the modelling I contributed to **data infrastructure improvements** and to the
**validation protocols** used to assess surgical AI, which in a clinical device context is not a
formality but the thing the eventual regulatory case rests on.

## Due diligence

I also observed key operational and due diligence activities in the period preceding the
acquisition. Watching an acquirer stress-test a company's technical claims, its data provenance
and its regulatory position was an early and unusually direct lesson in how technology is
actually valued, and it is a large part of why I later moved towards venture capital.
