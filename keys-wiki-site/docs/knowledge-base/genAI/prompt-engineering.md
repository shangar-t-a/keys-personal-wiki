---
sidebar_label: 'Prompt Engineering'
sidebar_level: 2
---

# Prompt Engineering

## Introduction

Prompt Engineering is the process of designing and optimizing prompts to improve the performance of a model.

## Improve the efficiency of the model

### In Context Learning (ICL)

In Context Learning is a technique that allows the model to learn from the examples provided in the prompt.

- Can be used to improve the performance of the small models.
- Have to be careful with the context length of the model. As providing too many examples can lead to the context length
  being exceeded.
- When model is not performing well with multiple examples, it is better to fine tune the model.

#### Zero Shot Inference

Zero Shot Inference is a technique that allows the model to infer the output without any examples.

For example:

```text
Prompt:
Classify this review:
"I loved this book, it was great!"
Sentiment:

Completion:
Liked the book
```

In this example, the model is able to complete the prompt with the correct sentiment.

#### One Shot Inference

One Shot Inference is a technique that allows the model to infer the output with one example.

For example:

```text
Prompt:
Classify this review:
"I loved the movie, it was great!"
Sentiment: Positive

Classify this review:
"I hated the movie, it was terrible!"
Sentiment:

Completion:
Negative
```

In this example, the model is able to classify the review as positive with one example. The model had a better
understanding of the task and was able to complete the prompt with the correct sentiment.

#### Few Shot Inference

Few Shot Inference is a technique that allows the model to infer the output with a few examples. Can be used to
improve the performance of the small models.

For example:

```text
Prompt:
Classify this review:
"I loved the movie, it was great!"
Sentiment: Positive

Classify this review:
"I hated the movie, it was terrible!"
Sentiment: Negative

Classify this review:
"I loved the book, it was great!"
Sentiment:

Completion:
Positive
```

## Generative Configuration

The generative configuration is the configuration of the model that is used in the inference process.

- **Max Tokens**: The maximum number of tokens that the model can generate.
- **Top K**: The number of top tokens that the model will consider for the next token. Select the top K tokens with the
  highest probability and then select one from the K tokens with random probability.
- **Top P**: The cumulative probability of the top tokens that the model will consider for the next token. Select the
  top P tokens with the highest probability and then select one from the P tokens with random probability.
- **Temperature**: The temperature of the model. A higher temperature will make the model more creative and a lower
  temperature will make the model more deterministic.

Greedy vs Random Sampling:

- Greedy Sampling: The model will always generate the next token that has the highest probability.
- Random Sampling: The model will generate the next token with random probability.
