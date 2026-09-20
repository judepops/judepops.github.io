---
title: "DPhil in Medical Science, University of Oxford"
start_date: "2025-10-01"
end_date: "2029-05-01"
excerpt: "<strong>University of Oxford</strong>. Doctoral research in the lab of <strong>Prof. James Davies</strong>, academic co-founder of Nucleome Therapeutics, co-supervised by <strong>Prof. Christopher Yau</strong>, who directs the Ellison Institute of Technology CDT in Fundamentals of AI. Scaling base-pair-resolution 3D genomics (Micro-Capture-C) across the CD4+ T cell genome with machine learning, to read gene regulation out of chromatin structure."
collection: portfolio
category: dphil
organisation: "MRC WIMM Centre for Computational Biology, University of Oxford"
---

Doctoral research at the [MRC WIMM Centre for Computational
Biology](https://www.imm.ox.ac.uk/research/units-and-centres/mrc-wimm-centre-for-computational-biology),
University of Oxford, in the lab of **Prof. James Davies**, academic co-founder of
[Nucleome Therapeutics](https://nucleome.com/).

## Supervision and training

My co-supervisor is **[Prof. Christopher Yau](https://www.bdi.ox.ac.uk/Team/christopher-yau)**,
Professor of Artificial Intelligence at the Big Data Institute, who directs the
[Ellison Institute of Technology Centre for Doctoral Training in Fundamentals of
AI](https://www.eitcdt.ox.ac.uk/) and is a Turing AI Fellow.

Alongside the research I completed the AI modules of that CDT, whose taught component covers the
foundations rather than applications: computational statistics including **Bayesian statistics**,
machine learning and learning theory, and optimisation. The programme also runs on rotation
projects with different supervisors before a DPhil topic is settled.

The pairing is the point. The genomics side supplies an assay that resolves regulatory contacts
to the base pair; the AI side supplies the methods to learn from data at that resolution and to
be honest about the uncertainty in what comes out.

## The assay the company was built on

The lab's **Micro-Capture-C (MCC)** assay maps the 3D genome at **single base pair resolution**,
published in *Nature* in 2021 and invented in the founders' Oxford laboratories. Nucleome holds
an exclusive licence to it from the University, and the method is the technical foundation the
company was spun out around.

Resolution is the whole point. Most chromosome conformation methods resolve interactions to
kilobase-scale bins, which is enough to say that a region contacts a promoter but not enough to
say which base does. At base pair resolution, an enhancer-promoter interaction can be tied to the
specific variant sitting inside it, which is what turns a non-coding GWAS association into a
testable target.

## The project

I am developing AI architectures to scale that data from the handful of loci an assay can
interrogate directly towards **roughly 20,000 genes across the CD4+ T cell genome**, learning gene
regulation from sequence and chromatin accessibility.

This is the research side of the question rather than a production pipeline. My industry work was
applied: models that had to run, and predictions a drug discovery team would act on. Here the
scaling is the open problem, and generating training data at that scale is as much a data
engineering question as a modelling one.

The DPhil follows directly from doing this work in industry first: I spent a year at Nucleome on
exactly this problem, training and validating chromatin-accessibility models, before returning to
the lab the technology came from.

## Teaching and additional modules

Alongside the research I teach and take additional modules. Write-ups will appear under
[teaching on the Projects page]({{ base_path }}/projects/#teaching).

## Where this sits

This is **epigenetics**: not which genes are present, but which are reachable, and which
regulatory element is talking to which promoter in three-dimensional space. It is the layer
upstream of the transcriptome, deciding what gets transcribed before any of the downstream omics
have anything to measure.

My first research project was on splicing and nonsense-mediated decay, which is gene regulation
read off the RNA after the fact. This asks a similar question one layer earlier, of the chromatin
that determines what is transcribed at all.
