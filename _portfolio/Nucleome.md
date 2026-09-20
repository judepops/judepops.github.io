---
title: "Computational Biologist, then Junior ML Engineer, Nucleome Therapeutics"
start_date: "2024-09-01"
end_date: "2025-10-01"
excerpt: "<div style=\"display:flex;gap:3%;flex-wrap:wrap;align-items:center;\"><img src='/images/nucleome.jpg' style='width:26%;height:auto;'><img src='/images/nucleome/model-architecture.png' style='width:69%;height:auto;'></div> \n \n <strong>Nucleome Therapeutics</strong>. Joined as a Computational Biologist building the data pipelines behind an in-house target-information portal, then moved into the ML team as a Junior ML Engineer, fine-tuning genomic foundation models on chromatin accessibility data and establishing allelic skewing as a functional validation method. Please click the title for more detailed information on results and outcomes."
collection: portfolio
category: industry
organisation: "Nucleome Therapeutics"
aims:
- Replicate five external genomics data sources inside the in-house target-information portal, exactly as presented on their own web pages, in a format that loads and plots efficiently.
- Fine-tune genomic foundation models, including Enformer and Evo2, on ATAC-seq and DNase-seq data to try to improve on the in-house DeepHaem architecture.
- Establish allelic skewing as a functional validation method for chromatin-accessibility predictions, and use it to compare model versions and direct training protocols.
skills:
  - task: "Columnar Data Engineering"
    tools:
      - "Parquet (row-group optimisation)"
      - "pandas"
  - task: "Cloud Data Engineering"
    tools:
      - "AWS S3"
      - "AWS SageMaker"
  - task: "Web Scraping"
    tools:
      - "BeautifulSoup (static)"
      - "Selenium (dynamic)"
  - task: "Relational Database Querying"
    tools:
      - "PostgreSQL"
      - "ChEMBL schema"
  - task: "Single-Cell Analysis"
    tools:
      - "Scanpy"
      - "AnnData / .h5ad"
      - "Seurat"
  - task: "Genomic Foundation Models"
    tools:
      - "Enformer"
      - "Evo2"
      - "DeepHaem"
      - "PyTorch"
  - task: "Functional Validation"
    tools:
      - "ATAC-seq allelic skewing"
      - "Odds-ratio enrichment analysis"
---

Work at [Nucleome Therapeutics](https://nucleome.com/), an Oxford immunology company using
non-coding human genetics and 3D genomics to find drug targets for inflammatory disease.

I joined in September 2024 as a **Computational Biologist**, working on the data acquisition and
processing behind the in-house target-information portal, and moved into the ML team in January
2025 as a **Junior ML Engineer**. The two strands below follow that progression, and were
presented to the lab in September 2025 as *Computational data challenges, solutions and lessons*.

## Part 1: Application development (Computational Biologist)

The goal was that for a given external data source, the in-house portal should reproduce its
web-page content and plots exactly as shown, prepared so it loads and formats efficiently. Each
source resisted in a different way.

**DepMap, gene knockout survivability.** The files were fragmented and the derivation of the
survivability labels was undocumented, despite the graphs on the site clearly being generated
from something. The answer was in the forums: an undocumented API endpoint returning the gene
dependency summary, from which the CRISPR (Chronos) and RNAi (Demeter) essentiality and
selectivity calls could be reconstructed. *Lesson: read the forums.*

<img src="/images/nucleome/depmap-dependency.png" alt="ARID1A dependency across cell lines, CRISPR and RNAi, rebuilt from the recovered dependency summary" width="100%">

*ARID1A dependency across cell lines, with the CRISPR (Chronos) and RNAi (DEMETER2)
distributions and the selectivity call recovered from the undocumented endpoint.*

**GTEx, tissue expression.** 54 separate TPM files, roughly 60,000 genes by 1,000 samples across
54 tissues, which is over three billion data points and far too wide to plot from directly. The
solution was to scrape and process the 54 files automatically, then concatenate and pivot them
into a single long-format Parquet file with tuned row groups. The columnar layout compresses
repeated gene and tissue IDs into a metadata dictionary, and lets the query engine skip whole row
groups that cannot contain the gene being asked for. Row-group size was tuned between 128 MB and
512 MB, since larger groups mean less fragmentation but weaker skipping.

<img src="/images/nucleome/gtex-tissue-expression.png" alt="Bulk tissue expression for ARID1A across all 54 GTEx tissues" width="100%">

*Bulk tissue expression for ARID1A across all 54 GTEx tissues, served from the pivoted Parquet
store. Every point is one sample, drawn from a corpus of over three billion.*

**HPA, cell type expression and protein summary.** No data files existed for the curated protein
summaries, which are assembled from many upstream sources. Since the pages are static HTML, a
BeautifulSoup scraper walking one URL per gene was enough. The contrast with GTEx is the useful
part: GTEx is a dynamic, JavaScript-driven page where the data only appears after interaction, so
it needed Selenium to simulate the click-and-download sequence across nine pages.

**ChEMBL, drug and molecule availability.** A PostgreSQL schema complex enough to take weeks or
months to learn by hand. Instead: dump the schema alone (`pg_dump -s`), feed that blueprint to an
LLM, and have it work out the join path from a gene target through to the approved molecules
associated with it. A relational schema is a city, where tables are buildings, keys are addresses
and joins are the routes between them, and the model is good at finding routes.

**Single-cell RA/SLE atlas.** Seurat and Scanpy are too heavy for the portal, which can only serve
flat files. So the AnnData object was taken apart into its useful pieces: cell metadata from
`.obs`, UMAP coordinates from `.obsm`, and the normalised expression matrix from `.layers`,
converted from a sparse matrix to Parquet. The package's plots were then re-created from those
flat files directly.

## Part 2: Machine learning and functional validation (Junior ML Engineer)

### Fine-tuning genomic foundation models

[DeepHaem](https://pubmed.ncbi.nlm.nih.gov/33046896/), the convolutional architecture behind this
work, predicts whether chromatin is open or closed for a given 1 kb DNA sequence, trained on
ATAC-seq and DNase-seq accessibility data. At inference it performs
*in silico mutagenesis*: take a 1 kb window centred on a SNP, mutate the middle base to the
alternate allele, and score both sequences. The difference, called the damage score, says whether
the variant is predicted to close chromatin (loss of function) or open it (gain of function), per
cell type.

<img src="/images/nucleome/deephaem-architecture-slide.png" alt="DeepHaem model architecture: input sequence, five convolution blocks, classifier head" loading="lazy" width="100%">

*The published DeepHaem architecture: a 1 kb input sequence through five convolution blocks, each
Conv, ReLU, MaxPool and Dropout, into a classifier head. Published in
[Schwessinger et al., Nature Methods 2020](https://pubmed.ncbi.nlm.nih.gov/33046896/).*

<img src="/images/nucleome/model-architecture.png" alt="The same architecture with the foundation-model fine-tuning path" loading="lazy" width="100%">

*The same model in schematic form, with the parallel question underneath: whether a pretrained
transformer, fine-tuned on the same assays, does better than a convolutional network trained from
scratch. The classifier head predicts openness separately for every cell type.*

A parallel line of work asked whether a general-purpose genomic foundation model, fine-tuned on
the same accessibility assays, could beat a bespoke architecture trained from scratch. I
fine-tuned **Enformer** and **Evo2** on the ATAC-seq and DNase-seq data to benchmark them against
DeepHaem. The appeal is that these models arrive already carrying a representation of regulatory
sequence learned at far greater scale than any single in-house training set, so the fine-tuning
question is how much of that transfers to a specific accessibility prediction task.

### The validation problem

None of these predictions had a gold standard to validate against. Damage scores are
deterministic computational outputs with no p-values, so there was no way to tell a good model
from a bad one, or to know whether a threshold was meaningful. Without that, comparing DeepHaem
against a fine-tuned Enformer or Evo2 is guesswork.

### Allelic skewing as ground truth

In a heterozygous patient, both alleles sit in the same cell under identical conditions,
differing by a single base. During ATAC-seq the transposase can only reach open chromatin, so an
imbalance in reads between the two alleles is direct experimental evidence that the variant
affects accessibility.

<img src="/images/nucleome/allelic-skewing.png" alt="Allelic skewing in chromatin accessibility" width="65%">

After quality filtering, meaning minimum read coverage, consistency across replicates, and a
significance test against the 50:50 null, only about a third of SNPs survive. Those that do
reflect real biology rather than statistical noise.

Matching model inference against the filtered skewing data across B cells, CD4 and CD8 T cells,
NK cells, classical monocytes and macrophages gave a confusion matrix, and from it an odds ratio
measuring enrichment over random chance. That single number made model versions comparable for
the first time, and immediately earned its keep by exposing an indexing bug in one model
generation that had until then been invisible.

## Key takeaways

- There is almost always a way to get the data you need. Check the forums, and if it isn't
  published, it can usually be scraped, especially from a static page.
- If data can be stored as Parquet, store it as Parquet. The compression and query times are not
  close.
- LLMs are genuinely useful for the tedious parts, like learning an unfamiliar database schema.
- Sometimes you have to re-invent the wheel. Just make sure it's worth the time first.
- Imperfect validation beats none. Skewing rests on assumptions, but it diagnosed a
  poor-performing model that nothing else had caught. A negative result is still a result.
