---
published: false
---

# Protein annotation coursework figures

Figures from an MRes bioinformatics coursework at Imperial College London (December 2023):
annotating an unknown 462-residue protein from its sequence alone, using DeepTMHMM, BLASTp and
PSI-BLAST, InterPro and PHOBIUS, Phyre2 and AlphaFold. The query turned out to be a bacterial
sensor histidine kinase from a two-component signalling system.

For a coursework page in `_projects/` (not yet written).

| Image | What it shows | Source |
| --- | --- | --- |
| `alphafold-annotated-structure.png` (hero) | The AlphaFold model placed in the membrane, with the transmembrane, HAMP, kinase and extracellular domains labelled | Coursework Fig 6B |
| `alphafold-model-confidence.png` | The same model coloured by AlphaFold confidence (pLDDT) and by secondary structure | Coursework Fig 5 |
| `domain-annotation-summary.png` | The final annotation along the 462 residues: topology, domains and secondary structure, combining PHOBIUS, InterPro and BLAST | Coursework Fig 6B |
| `blastp-vs-psiblast.png` | BLASTp against PSI-BLAST: the profile search finds more distant homologues (lower E-values, higher query cover, lower identity) | Coursework Fig 2 |

The domain graphics and the annotated structure are Jude's own (matplotlib and PyMOL). Crops and
sizes are recorded in `_cowork/scripts/prepare_postgrad_images.py`; captions, numbers and context
are in `_cowork/notes/postgrad/05_courseworks_bioinformatics.txt` (local only).
