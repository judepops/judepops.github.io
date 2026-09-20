---
title: "Phred+64 FASTQ Filtering and IUPAC Regex Motif Search in Core Python"
collection: projects
category: coding
type: "Project"
permalink: /projects/fastq-filtering-regex-motif-search
date: 2023-11-20
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/courseworks/coding/fastq-pair-quality-split.png' style='width:49%;height:auto;'><img src='/images/courseworks/coding/motif-hits-map.png' style='width:49%;height:auto;'></div> \n \n Two sequence-processing tools written in core Python only, with BioPython and PyCogent banned: a paired-end quality filter and an IUPAC motif searcher that reads both strands."
---

Two sequence-processing exercises with third-party libraries restricted, BioPython and PyCogent
banned by name, so everything had to be written from first principles with core Python and the
`re` module.

## Paired-end FASTQ quality filtering

Read a paired-end Illumina FASTQ file, decode the quality string, and split the read pairs by
average quality: pairs where both reads average Q30 or above to one file, pairs where either
read falls below to another. On the sample file, **69 of 94 pairs were kept and 25 filtered**.

<img src="/images/courseworks/coding/fastq-pair-quality-split.png" alt="Distribution of per-pair mean quality, split at Q30" loading="lazy" width="100%">

*Every read pair in the sample file by its weaker read. The split is clean rather than marginal: the kept pairs cluster around Q35 to Q38 while the filtered ones spread from Q1 to Q30, so the threshold is not cutting through a dense part of the distribution.*

Filtering by *pair* rather than by read is the other constraint: the two files have to stay in
step, so a read whose mate fails goes with it. That is why the plot keys each pair on its weaker
read.

The detail that decides whether this works at all is the encoding. Quality is not stored as
numbers but as ASCII characters, and this file used **Phred+64** rather than the now more common
Phred+33. Assume the wrong offset and every score is out by 31, which is the difference between
keeping a read and discarding it: decoded as Phred+33 this file has no failing pairs at all,
and the filter silently does nothing.

<img src="/images/courseworks/coding/fastq-quality-by-position.png" alt="Mean quality by position for kept and filtered read pairs" loading="lazy" width="100%">

*Mean quality along the read. Both groups decline towards the 3' end, which is a property of the sequencing chemistry rather than of these particular reads. The filtered pairs start lower and fall faster, so the failure is whole-read rather than a bad tail.*

Filtering by *pair* rather than by read is the other constraint: the two files have to stay in
step, so a read whose mate fails goes with it.

## Motif searching with regular expressions

Search FASTA sequences for transcription factor binding motifs written in IUPAC ambiguity codes:
RUNX1 `BHTGTGGTYW`, TGIF1 `WGACAGB` and IKZF1 `BTGGGARD`.

Each ambiguity code translates to a regex character class, so `B` becomes `[CGT]`, `W` becomes
`[AT]`, and the motif becomes a pattern. This is what regular expressions are for: a binding site
is a consensus with degenerate positions, not a fixed string.

Binding sites also occur on either strand, so each sequence is searched again via its reverse
complement, with hits mapped back to forward-strand coordinates so both sets are reported in the
same frame. Each hit is reported with its factor, start and end, matched bases and strand, and
the parser handles any number of motifs and sequences.

<img src="/images/courseworks/coding/motif-hits-map.png" alt="Binding site positions for three transcription factors across three sequences" loading="lazy" width="100%">

*The 13 sites the search returns across the three sequences. Five of them are on the reverse strand and would be missed entirely by a forward-only search, which is the reason the reverse complement pass is not optional.*

