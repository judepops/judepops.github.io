---
title: "Regulation and Biological Functions of Alternative Splicing in Neurons of the Adult Mouse Visual Cortex"
start_date: "2022-06-01"
end_date: "2022-09-01"
excerpt: "
<div> 
<embed src='/images/kurf_poster.pdf' width='600' height='400' type='application/pdf' />
</div> \n \n <strong>Figure 4:</strong> Poster displaying the outcome of this project investigating alternative splicing during Neurogenesis. Please click the title for more detailed information on results and outcomes."
collection: portfolio
category: undergrad
aims:     
- Process 4 single cell/single nuclear datasets from the Allen Brain Institute in R 
- Generate high throughput splicing data using specialised tools in Unix (e.g Whippet). 
- Identify evidence to support the mechanism and presence of NMD containing transcripts in the nuclei of PV interneurons 
- Map different isoform profiles of GABAergic and glutamatergic layers
- Validate the utility of Single-Cell data for splicing analysis compared to Bulk RNA-seq
skills:
  - task: "Single-cell and Single-nucleus RNA-Seq"
    tools:
      - "Seurat v3 (R)"
      - "QC, normalisation, PCA, clustering, UMAP, marker genes"
  - task: "Splicing Quantification"
    tools:
      - "Whippet"
      - "Unix shell pipelines"
  - task: "Functional Interpretation"
    tools:
      - "Gene ontology enrichment"
---

King's Undergraduate Research Fellowship, summer 2022, at the Centre for Developmental
Neurobiology, King's College London, with Prof. Eugene Makeyev and day-to-day bioinformatics
mentoring from Dr Fursham Hamid. The project was one I conceptualised and took to the KURF board
for funding.

## The question

Neurons produce many RNA isoforms from a single gene by alternative splicing. Some splicing
events introduce a premature stop codon, so the transcript is destroyed by nonsense-mediated
decay, which makes splicing a mechanism for tuning expression rather than only for diversifying
protein products.

The idea the project rests on is a consequence of where NMD happens. Because it operates after
export to the cytoplasm, transcripts targeted by NMD should be **relatively enriched in the
nucleus**. So comparing single-nucleus against single-cell RNA-seq of the same neuron types
should flag candidate NMD-regulated exons, without needing to block NMD experimentally.

## Data and processing

Matched single-cell and single-nucleus full-length RNA-seq from adult mouse primary visual cortex
(Bakken et al. 2018, Allen Institute), as four count matrices: cell and nucleus, exon and intron.
Processing in Seurat v3 covered quality control, normalisation, variable feature selection, PCA,
clustering, UMAP and marker identification. Splicing was quantified with **Whippet**, using an
index and wrapper provided by Dr Hamid.

## Findings

Exon counts from cells and nuclei integrated cleanly, and longer exons were enriched in nuclei,
consistent with incomplete splicing of nascent transcripts still in the nucleus.

Comparing neuron subclasses by gene ontology: L4 neurons were enriched for glutamate receptor
activity and myosin binding, L5 for scaffold protein and actin binding. Among GABAergic
interneurons, Pvalb cells were more enriched for GABAergic functions and Sst for glutamatergic,
with both enriched for cytoskeletal anchoring.

The splicing comparison is the part the project was built for. Of all splicing event types,
**cassette exons** showed the strongest positive relationship between splicing change and nuclear
enrichment. That is the expected direction, since cassette exons generate the most NMD-targeted
transcripts. **Sf3b1** is the worked example: a cassette exon between exons 4 and 5 that
introduces a premature stop codon, in a splicing factor that regulates its own expression this
way.

## What this does and does not show

This is a candidate list rather than a result. The splicing analysis used 80 randomly sampled
cells and nuclei, too few points for a correlation test, so the relationship is reported as a
visible trend with no coefficient attached. Nuclear enrichment also has explanations other than
NMD, including nuclear retention and slow export, which this comparison cannot separate.

I also helped run a Centre workshop for Year 12 students using the Allen Brain Atlas.
