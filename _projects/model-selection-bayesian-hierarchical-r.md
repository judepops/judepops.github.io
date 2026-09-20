---
title: "AIC Model Averaging with MuMIn and Hierarchical Bayesian Modelling with rstanarm"
collection: projects
category: coding
type: "Project"
permalink: /projects/model-selection-bayesian-hierarchical-r
date: 2023-11-26
excerpt: "Fitting and averaging competing regression models by AIC, then showing with WAIC how badly a model does when it ignores the grouping structure of its own data."
---

Statistical modelling in R, using `lm`, `MuMIn` and `rstanarm`.

## Multiple regression and AIC model averaging

A regression of SARS-CoV-2 reproduction number on temperature, humidity, population density and
intervention strength, on simulated data modelled after Smith et al. 2021 (PNAS).

Rather than fitting one model and reporting it, the candidate set was enumerated and averaged
with `MuMIn` (`dredge`, `model.avg`), then extended with interaction terms. **The interaction
model won decisively, at AICc -56.3 against 8.4.** The effects are not additive, and a model
constrained to additivity would have reported confident, wrong coefficients.

## Bayesian hierarchical modelling

A multilevel model fitted with `rstanarm` (`stan_glmer`, random intercept per group), compared
against the same model with no random effects, using **WAIC: 20.1 against 82.6**, lower being
better.

That gap is the cost of a specific mistake. When observations are grouped, treating them as
independent is not a simplifying assumption but an error, and it inflates confidence in exactly
the estimates you care about. The hierarchical model does not add flexibility for its own sake;
it stops the model claiming more information than the data contain.
