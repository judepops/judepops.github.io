---
title: "VCF and SAM Parsing with grep, sort and awk, plus API Retrieval in R"
collection: projects
category: coding
type: "Project"
permalink: /projects/coursework-unix-for-bioinformatics
date: 2022-11-04
pdfurl: "/files/cw/Y3_BFB_C1.pdf"
excerpt: "Command-line and R exercises on real files: parsing VCF and SAM, fixing malformed CSV with awk, and pulling live COVID-19 case data from an API."
---

Command-line and R work on real genomic files, written up in R Markdown.

The exercises are deliberately unglamorous and, for that reason, the ones that get used daily:

- **Reading large files without opening them.** Pulling the header out of a large VCF with `grep`
  and `tail`. Sequence data routinely exceeds what an editor will load, so the shell is what
  lets you inspect and subset a file you cannot open.
- **Counting what is actually there.** A SAM file with 17,608 lines but only 8,804 unique read
  names, established with `sort` and `uniq`. The gap between those two numbers is the point.
- **Repairing malformed data** with `awk`.
- **R fundamentals**: vectors, loops and data cleaning.
- **Working against a live API**: retrieving UK COVID-19 case data from the
  coronavirus.data.gov.uk API and filtering it by date.
