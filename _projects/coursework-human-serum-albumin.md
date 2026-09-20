---
title: "APBS Electrostatic Mapping of Albumin Binding Sites and YASARA Docking of Gallic Acid"
collection: projects
category: protein_design
type: "Project"
permalink: /projects/coursework-human-serum-albumin
date: 2022-12-11
pdfurl: "/files/cw/human-serum-albumin.pdf"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/courseworks/protein-design/hsa-domains-and-electrostatics.jpg' style='width:49%;height:auto;'><img src='/images/courseworks/protein-design/hsa-fatty-acid-binding-sites.jpg' style='width:49%;height:auto;'></div> \n \n How a protein with three copies of one domain, no beta sheet at all, and a strongly negative surface manages to carry fatty acids, metals, hormones and much of the drug pharmacopoeia."
---

A structure-function study in PyMOL (cartoon, ribbon and surface representations, with the APBS
plugin for electrostatics) and YASARA for docking. Structures: PDB 1AO6, 1E7H, 5IJF and 2BXG.

## The paradox

Human serum albumin is 585 amino acids and 66.4 kDa, the most abundant protein in plasma. Its
architecture is strikingly repetitive: three homologous domains, each split into subdomains A
and B, **68% alpha helix across 28 helices and no beta sheet at all**, held by 17 disulphide
bonds plus a free Cys34, at a net charge of about -15 (pI 4.7).

A simple, repeated, uniformly negative structure should not be a general-purpose carrier. It is.

<img src="/images/courseworks/protein-design/hsa-domains-and-electrostatics.jpg" alt="HSA subdomains, APBS surface electrostatics and the domain junctions" loading="lazy" width="100%">

*Human serum albumin in PyMOL: the six subdomains (A), surface electrostatics from APBS (B), and the Y-shaped (C) and T-shaped (D) domain junctions. The resolution to the paradox is in C and D. Duplicating one domain three times and arranging the copies asymmetrically produces pockets of differing character without inventing new architecture.*

## Seven fatty acid sites

The fatty acid sites FA1 to FA7 include the classical drug sites **Sudlow I and II**. Palmitate
in FA1 is anchored by Tyr161, Leu182, Arg117 and a bridging water, and a salt-bridge strap from
Arg209 holds the fatty acid in FA6.

<img src="/images/courseworks/protein-design/hsa-fatty-acid-binding-sites.jpg" alt="Disulphide bonds and fatty acids bound across the seven sites" loading="lazy" width="100%">

*The 17 disulphide bonds and the free Cys34 (A), and fatty acids occupying the seven fatty acid sites including the drug sites Sudlow I and II (B).*

Metal binding adds the N-terminal site, Cys34, and site A, where His67, Asn99, His247 and Asp249
coordinate zinc, with a site B that has never been located. Ibuprofen binds at FA3/4 and FA6.

## Docking gallic acid

Gallic acid is a dietary phenolic acid from tea and fruit, absorbed in the intestine and carried
by albumin. Built from a SMILES string and docked into ligand-free HSA in YASARA, it sits in
**subdomain IIA about 10 Angstroms from Trp214**, contacting Tyr150, Arg222, Arg257, Leu219,
Leu238 and Ala261.

The proximity to Trp214 is what makes the interaction experimentally tractable. Albumin has a
single tryptophan where a protein of its size would usually have several, so there is one
intrinsic fluorescence signal, and quenching on binding reports on that site specifically rather
than averaging over many.

<img src="/images/courseworks/protein-design/hsa-gallic-acid-docking.jpg" alt="Gallic acid docked into subdomain IIA with surrounding residues" loading="lazy" width="100%">

*Gallic acid docked into subdomain IIA in YASARA (A) and the residues surrounding it (B).*
