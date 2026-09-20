---
title: "AMBER99 Energy Minimisation and Manual Docking of Antifolates into DHFR"
collection: projects
category: protein_design
type: "Project"
permalink: /projects/coursework-dhfr-inhibitor-docking
date: 2022-12-11
pdfurl: "/files/cw/Y3_PSD_CW.pdf"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/courseworks/protein-design/dhfr-docking-tmp-vs-pyr.jpg' style='width:49%;height:auto;'><img src='/images/courseworks/protein-design/dhfr-methotrexate-structure.jpg' style='width:49%;height:auto;'></div> \n \n A YASARA practical running from why left-handed helices are rare to manually docking trimethoprim and pyrimethamine into the dihydrofolate reductase active site and counting their contacts."
---

Molecular mechanics and manual docking in **YASARA** (Krieger, Koraimann & Vriend, *Proteins*
47, 393-402), using the AMBER99 force field and steepest-descent minimisation.

## Conformational energies

The first half establishes that structure has an energetic cost, by measuring it:

- **Why left-handed helices are rare.** A right-handed alpha helix of L-alanines scored
  1,520.54 kJ/mol against 1,979.93 kJ/mol for the D-alanine equivalent.
- **Why the Ramachandran plot has forbidden regions.** An alanine dipeptide at a disallowed
  phi/psi point cost over 20,000 kJ/mol, against roughly 15 to 130 kJ/mol at the three allowed
  points. The blank areas of a Ramachandran plot are steric impossibility, not convention.
- **Ethane**, eclipsed at 20.15 kJ/mol against staggered at 7.56 kJ/mol after minimisation.

These are single force-field values from one program, useful for comparing conformations
against each other rather than as absolute energies.

## Dihydrofolate reductase and methotrexate

<img src="/images/courseworks/protein-design/dhfr-methotrexate-structure.jpg" alt="DHFR bound to methotrexate, PDB 3DFR, beta sheet highlighted" loading="lazy" width="100%">

*Dihydrofolate reductase bound to methotrexate (PDB 3DFR), the eight-stranded beta sheet in red and ligands as sticks.*

Mapping the interactions gave hydrogen bonds from the pteridine ring to Asp26, Thr116, Leu4 and
Ala97 plus two through bridging waters, an electrostatic contact with Asp26, stacking against a
tryptophan, and the glutamate tail held by His28 and Arg57.

## Trimethoprim: bound conformations are strained

Minimising trimethoprim from a high-energy start reached -1,354.90 kJ/mol, a local rather than
global minimum on the published energy surface. The crystal conformation scored -1,055.98
kJ/mol and the DHFR-bound conformation -990.36 kJ/mol. The drug binds in a shape it would not
adopt on its own, and the binding contacts are what pay for the strain.

## Docking by hand

<img src="/images/courseworks/protein-design/dhfr-docking-tmp-vs-pyr.jpg" alt="Trimethoprim and pyrimethamine docked into a simplified DHFR active site" loading="lazy" width="100%">

*Trimethoprim (left) and pyrimethamine (right) manually docked into a simplified active site in YASARA. Arrows mark hydrogen bonds (yellow), electrostatic contacts (white) and ring stacking (red), with distances in angstroms.*

Trimethoprim docked into a simplified site built from an aspartate, a phenylalanine, a leucine
and three isoleucines made four hydrogen bonds of 2.8 to 3.2 Angstroms, two of them to the
aspartate, plus an electrostatic contact at 3.5 Angstroms and stacking with the phenylalanine at
about 4 Angstroms. That dependence on the aspartate is consistent with the reported 30-fold loss
of affinity when it is mutated to asparagine.

**Pyrimethamine**, built and minimised separately (-1,413.90 kJ/mol), cannot adopt the same
pose. It has less rotational freedom and its ethyl group clashes with the aspartate, so it loses
both hydrogen bonds to it (3.6 Angstroms), while its chlorine adds contacts elsewhere. The
overall affinity comes out similar to, or slightly above, trimethoprim's.

<img src="/images/courseworks/protein-design/dhfr-docking-surfaces.jpg" alt="Surface views showing why pyrimethamine cannot bind like trimethoprim" loading="lazy" width="100%">

*Top: both drugs docked the same way with measured distances. Bottom: surface views, where pyrimethamine's overlap with the site shows directly why it cannot bind as trimethoprim does.*

Methotrexate makes up to eight hydrogen bonds, six from the pteridine ring and two from the
glutamate tail, against four for trimethoprim.

## Binding energetics

From dG = -RT ln Ka at 310 K, methotrexate (Ka 2 x 10^8 per M) gives -47.4 kJ/mol and folate
(1 x 10^5 per M) gives -28.6 kJ/mol, a gap of about 19 kJ/mol. Their hydrogen bond counts are
similar, so the difference comes from electrostatics, van der Waals contacts and shape, folate
being planar. Counting hydrogen bonds is not the same as predicting affinity.

All docking here was manual, moving and rotating the ligand in YASARA, not an automated docking
program with scoring functions.
