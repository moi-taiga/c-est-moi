---
title: "PathPinpointR: Predicting the progression of sc-RNAseq samples through reference trajectories"
type: "tool"
description: "A lightweight R package for predicting and comparing positions of scRNA-seq samples along reference biological trajectories using switching-gene events."
status: "active"
urls:
  github: "https://github.com/moi-taiga/PathPinpointR"
  paper: "https://doi.org/10.64898/2026.04.21.715327"
tags:
  - "R"
  - "scRNA-seq"
  - "pseudotime"
  - "trajectory inference"
---

Single-cell RNA sequencing (scRNA-seq) has transformed our ability to analyse cellular heterogeneity, enabling detailed mapping of cellular progression. Trajectory inference tools construct trajectories from scRNA-seq data, facilitating the tracing of cellular progression through developmental pathways.

PathPinpointR (PPR) is a lightweight and user-friendly R package developed to predict and compare the positions of scRNA-seq samples along reference biological trajectories, such as those created from large cell atlas projects. PPR utilises sets of switching-gene events from reference trajectories as indicators of cellular progression. By applying these positional indicators to query datasets, each cell can be accurately assigned a pseudo-time value, providing predictive insight into its position along a trajectory. This information can be used to stage cells within an established developmental process, or to evaluate how different patient samples compare when mapped onto reference disease or drug response trajectories.

PathPinpointR is available at [https://github.com/moi-taiga/PathPinpointR](https://github.com/moi-taiga/PathPinpointR).