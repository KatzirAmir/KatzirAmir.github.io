---
title: "A Short Note on Modeling Risk in the Real World"
date: "2026-06-12"
tags: ["data-science", "risk", "modeling"]
excerpt: "Why the prettiest model in the notebook is often the most dangerous one in production."
readTime: "4 min"
---

# A Short Note on Modeling Risk in the Real World

The best model I ever built in school got a near-perfect AUC on the holdout set.

It was also completely useless.

We had beautiful features, careful cross-validation, and a loss function that looked like it came from a research paper. The problem? The data stopped in 2019. When we tried to use it on 2022 claims, the world had changed and the model confidently predicted the old reality.

That experience taught me three things that still guide how I think about risk models:

## 1. Distribution shift is the default, not the exception

Insurance data is especially brutal here. A pandemic, a new law, a recession, or even a viral TikTok trend can move the goalposts. The models that survive are the ones built with an explicit story about *why* the past might not look like the future.

## 2. Uncertainty communication matters more than point predictions

Telling a product team "this segment has a 12.4% loss ratio" feels precise. Telling them "our 90% interval is 7%–19% and the tail is fat because of three recent large claims" is honest. Guess which one leads to better decisions.

## 3. Simple models with good monitoring beat complex models with blind faith

I now default to starting simpler than feels comfortable, then adding complexity only where it earns its keep. And I spend embarrassing amounts of time on monitoring and backtesting.

The prettiest notebook model is usually the most dangerous one once real money and real policyholders are on the line.

This is part of why I still love the actuarial discipline even as the tooling gets more "data science." The culture of professional skepticism and long-term accountability is a feature, not a bug.

More technical posts coming (including some actual code patterns we use). If you have a specific modeling war story or question, feel free to reach out on GitHub or LinkedIn.
