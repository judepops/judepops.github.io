---
published: false
---

# Genome annotation coursework figures

Figures from an MRes bioinformatics coursework at Imperial College London (November 2023):
annotating an unknown 13.8 kbp fungal contig. The sequence was repeat-masked, identified as
Blumeria graminis by BLAST, and its genes predicted with AUGUSTUS and FGENESH, then combined
with BLASTx evidence into a putative gene model.

For a coursework page in `_projects/` (not yet written).

| Image | What it shows | Source |
| --- | --- | --- |
| `fgenesh-gene-models.png` (hero) | The five genes FGENESH predicted, with their exon structures, coding strand and exon counts (13 protein-coding exons) | Coursework Fig 5 |
| `augustus-gene-predictions.png` | AUGUSTUS predictions in the genome browser, annotated with each gene's reading frame and exon count: 4 genes, 7 transcripts, 32 exons | Coursework Fig 4B |
| `blastx-protein-hits.png` | Where the top 132 BLASTx hits fall along the sequence, annotated with the four proteins they point to | Coursework Fig 3B |
| `blastn-distance-tree.png` | BLASTn distance tree placing the query among Blumeria graminis genome assemblies | Coursework Fig 1A |

Annotations on the tool outputs are Jude's own. Crops and sizes are recorded in
`_cowork/scripts/prepare_postgrad_images.py`; captions, numbers and context are in
`_cowork/notes/postgrad/05_courseworks_bioinformatics.txt` (local only).
