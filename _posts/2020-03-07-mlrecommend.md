---
layout: post
title: "(#18) Making sense of recommendations"
categories: misc
---

You can download the pdf file [here](https://jjgecon.github.io/files/opecon_pdfs/18.pdf).

Netflix uses machine learning models to recommend movies and series to its clients. On 2009 Netflix hosted a competition to increase the accuracy (how well does it recommend) of their recommended system with $1 million prize . Before improving the model, one could ask: Do people like recommendations coming from machines or from other people?

## One Sentence Summary

Machines are better at recommending jokes to humans than other humans. But humans prefer to receive recommendation from other humans. Furthermore, humans will potentially use machine recommendations only when they have a better understanding of  the recommendation process.

## Main Findings

The authors created five experiments to measure if machines recommending jokes to humans. In the first experiment they invited 75 pairs of close friends, couples or family members. Every subject needed to receive recommendations and then become the recommender. The recommended subject saw 12 jokes and rated them according to their preferences. After, the participants became the recommender. In this stage they saw 4 of the 12 jokes with the rating their partner chose. For remainder 8 jokes the recommender needed to predict if their partner would like those jokes. Meanwhile, a simple statistical model used the same  jokes the recommender saw to predict  the remaining jokes.

The model gave better joke recommendations than the participants across all five experiments. Interestingly, people were reluctant to use the machine predictions to improve their recommendations. In study two the recommender could see the machine prediction and their partners rating. However, the model still did a better job than closely related participants.

In subsequent experiments they explored the question: Why don’t people use the machine predictions? In study five, a group of subjects received an ambiguous explanation of how the machine model recommended jokes. Another group got a rich explanation of the inner working of the recommender system. Those participants who got a rich explanation where more likely to use the machine recommendations. The authors hypothesize that people don’t use machine recommendation because a lack of understanding. People can intuitively guess the process of a human recommendation, as they themselves have recommended something. To most people the statistical process of a machine learning model is foreign to most people.

## Concluding Remarks

Even at recommending jokes, which is a highly subjective matter, machines have several advantages over human recommenders. Still people prefer to receive recommendation from humans. With this insight it is more effective to make people more open to receive machine recommendations than to improve the model. As a concrete example, Netflix should be focused on how to make people accept the recommendation, rather than improving the accuracy. If only a few are open to use the improved system, there is no point in improving the accuracy of the model before giving a brief explanation of how the machine recommendations work. 

## References

* Yeomans, M., Shah, A., Mullainathan, S., Kleinberg, J., 2019. Making sense of recommendations. J. Behav. Decis. Mak. [https://doi.org/10.1002/bdm.2118](https://doi.org/10.1002/bdm.2118).


