---
title: "PyMOL Structural Analysis of the KcsA TVGYG Selectivity Filter"
collection: projects
category: protein_design
type: "Project"
permalink: /projects/coursework-kcsa-potassium-channel
date: 2022-03-17
pdfurl: "/files/cw/Y2_PSF_CW.pdf"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/courseworks/protein-design/kcsa-channel-structure.jpg' style='width:49%;height:auto;'><img src='/images/courseworks/protein-design/kcsa-selectivity-filter.jpg' style='width:49%;height:auto;'></div> \n \n How a 3 Angstrom filter rejects an ion smaller than the one it passes, while still conducting at roughly 10^8 ions per second."
---

A structure-function study of **KcsA**, with figures made in PyMOL from PDB 1BL8 and 1J95,
using MthK for the open state.

## Architecture

KcsA is a tetramer with a pore 45 Angstroms long, containing a 10 Angstrom central cavity and a
selectivity filter just 3 Angstroms wide and 12 Angstroms long.

<img src="/images/courseworks/protein-design/kcsa-channel-structure.jpg" alt="KcsA in the membrane with pore dimensions, and with one subunit hidden" loading="lazy" width="100%">

*KcsA in the membrane with its pore dimensions (A), and with one subunit hidden to expose the pore helices and the helix bundle crossing (B).*

## The selectivity paradox

The channel selects potassium over sodium by roughly **10,000-fold** while conducting at close
to the diffusion limit, about **10^8 ions per second**. Both halves of that are surprising
together: a filter selective enough to reject an ion is normally slow. And the rejected ion,
sodium, is the *smaller* one.

<img src="/images/courseworks/protein-design/kcsa-selectivity-filter.jpg" alt="The selectivity filter with its four potassium binding sites" loading="lazy" width="100%">

*The selectivity filter: four potassium binding sites, S1 to S4, formed by backbone carbonyl oxygens and the Thr75 hydroxyl.*

The resolution lies in the **TVGYG** signature sequence, conserved across prokaryotes, eukaryotes
and archaea. Backbone carbonyl oxygens are spaced to mimic a potassium ion's hydration shell
almost exactly, so stripping the shell costs the ion almost nothing. Sodium is too small to
contact all of them at once, so the cost of shedding its more tightly held hydration shell is
never repaid. Selection is energetic, not a physical sieve, which is also why it can be fast.

Pore-helix dipoles stabilise potassium in the central cavity. Gating runs through a pH sensor
and a glycine hinge, and the channel is blocked by tetrabutylammonium.
