---
title: "Raw RNA-Seq Data Analysis Project (R and Unix)"
collection: teaching
permalink: /teaching/RNA-Seq_Analysis.md
---

For this project, I conducted a comprehensive RNA-seq data analysis to explore gene expression differences between experimental groups. First, I carried out quality control checks on the raw sequencing data to assess read quality, using tools such as Rsubread to extract quality scores and visualize them with boxplots. This step ensured that the data was of sufficient quality for reliable downstream analysis.

Next, I performed differential expression analysis (DEA) using the DESeq2 package. I prepared the count matrix and metadata, applied normalization techniques, and identified differentially expressed genes between case and control groups. The top 10 genes were ranked based on their log2 fold changes, and I further analyzed their biological significance using gene ontology tools like BioMart.

This analysis was crucial in identifying key genes involved in specific biological processes, helping me understand the molecular mechanisms at play. By applying RNA-seq data processing and statistical analysis, this project demonstrated the power of high-throughput sequencing in uncovering novel insights into gene regulation.

'''R


