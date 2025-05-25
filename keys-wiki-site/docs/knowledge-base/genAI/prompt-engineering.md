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

## Prompting Principles

Principle 1: Write clear and specific instructions
Principle 2: Give the model time to “think”

Examples are provided to understand the tactics better.
For the examples below, please find the setup code used:

```python
def get_client() -> OpenAI:
    """Get OpenAI client."""
    return OpenAI(
        base_url=PLATFORM.BASE_URL,
        api_key=API_KEY,
    )


def get_completion(client: OpenAI, prompt: str) -> str:
    """Get completion."""
    messages = [
        {"role": "user", "content": prompt},
    ]
    return (
        client.chat.completions.create(model=PLATFORM.CHAT_COMPLETION_MODEL, messages=messages)
        .choices[0]
        .message.content
    )
```

:::note
All response found below are actual responses from the model with the given prompt.
:::

### Write clear and specific instructions

Write clear and structured prompts that are easy for the model to understand and expect a structured response.

#### Use delimiters to clearly indicate distinct parts of the input

The delimiters can be anything like triple backticks or double quotes.

Prompt:

```python
client = get_client()
text = """
I watched a marvel movie yesterday. The movie had a really good story. There were aliens coming from the future and
the protagonist was a wizard who used a time controlling magic stone."""
prompt = f"""
Analyze the sentiment of the text given below inside triple backticks and provide a maximum of three words to describe
the genre of the movie.
```{text}```
"""
print(get_completion(client, prompt))
```

Response:

```text
**Sentiment:** Positive
**Genre:** Science Fiction Fantasy
```

#### Ask for a structured output

The output structure can be anything like JSON or HTML.

Prompt:

```python
client = get_client()
prompt = """
Generate a made up movies inspired from the movie "The Matrix".
The response should be in JSON format and contains the following keys: title, genre, rating
`rating` can be between 1 and 10, for example 5.5 or 8
"""
print(get_completion(client, prompt))
```

Response:

```json
[
  {
    "title": "Neural Mirage",
    "genre": "Sci-Fi/Thriller",
    "rating": 8.2
  }
]
```

#### Ask the model to check whether conditions are satisfied

Prompt:

```python
client = get_client()
text = """Alan went to school yesterday and he got a B in his math class."""
prompt = f"""
Analyze the review provided below inside triple backticks and provide a sentiment and genre.
Important: If the review is not actually a movie review, just write "Hey, Are you sure it is a movie review?"

Review: ```{text}```
"""
print(get_completion(client, prompt))
```

Response:

```text
Hey, Are you sure it is a movie review?
```

#### "Few-shot" prompting

Prompt:

```python
client = get_client()
prompt = """
Generate a made up fact inspired from Marvel.
Complete the below conversation in the same format. Just stop with one response for the last question.
Limit your responses to 10 words.

Alan: Captain America
Bot: That guy holds the shield and had super serum
Alan: Spiderman
"""
print(get_completion(client, prompt))
```

Response:

```text
Bot: Web-slinger with spider powers from radioactive bite.
```

### Give the model time to “think”

The model should be given time to “think” before it gives a response. Not giving enough steps or time to the model
can result in incorrect responses.

#### Specify the steps required to complete a task

Prompt:

```python
client = get_client()
text = """
Captain America is a great soldier. His original name is Steven Rogers. He is a member of the Avengers. He has a friend
named Bucky. Bucky is a good friend of Captain America.
"""
prompt = f"""
Your task is to perform the following actions:
Step 1: Summarize the following text delimited by <> into a one liner summary.
Step 2: Translate the summary into French.
Step 3: List each names in the french summary.
Step 4: Output a json object containing the following keys: french_summary, names

Use the following format:
Text: <{text}>
Summary: <summary>
Summary Translation: <french_summary>
Names: <names_separated_by_comma>
JSON Output: <json_object>
"""
print(get_completion(client, prompt))
```

Response:

````text
Summary: <Captain America, originally Steven Rogers, is a heroic Avenger and loyal soldier with a close friendship with Bucky.>
Summary Translation: <Captain America, dont le vrai nom est Steven Rogers, est un héros des Avengers et un soldat loyal, lié d'une amitié étroite avec Bucky.>
Names: <Captain America, Steven Rogers, Bucky>
JSON Output:
```json
{
  "french_summary": "Captain America, dont le vrai nom est Steven Rogers, est un héros des Avengers et un soldat loyal, lié d'une amitié étroite avec Bucky.",
  "names": ["Captain America", "Steven Rogers", "Bucky"]
}
```
````

#### Instruct the model to work out its own solution before rushing to a conclusion

Prompt:

````python
client = get_client()
prompt = """
Your task is to determine if the student's solution is correct or not.
To solve the problem do the following:
- First workout the problem by yourself.
- Then compare your solution with the student's solution. Do not answer the question unless your solved the problem
yourself.
Use the following format:
Question:
<question>
Student's Solution:
<student's solution>
Actual Solution:
<actual solution>
Is the student's solution correct?
<Yes/No>
Student Grade:
<Pass/Fail>

Question:
```
I'm building a solar power installation and I need help working out the financial.
- Land costs $100 / square foot
- I can buy solar panels for $250 / square foot
- I negotiated a contract for maintenance that will cost me a flat $100k per year, and an additional $10 / square foot
What is the total cost for the first year of operations as a function of the number of square feet.
```

Student's solution:
```
Let x be the size of the installation in square feet.
Costs:
1. Land cost: 100x
2. Solar panel cost: 250x
3. Maintenance cost: 100,000 + 100x
Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
```

Actual solution:
"""
print(get_completion(client, prompt))
````

Response:

````text
The student made an error in calculating the maintenance cost's variable component. Instead of $10x, they used $100x, leading to an incorrect total cost.

Actual Solution:
```
Total cost = Land cost + Solar Panel cost + Maintenance cost
Total cost = 100x + 250x + (100,000 + 10x) = 360x + 100,000
```
Is the student's solution correct? No
Student Grade: Fail
````

## Iterative Prompt Development

- Start with a simple prompt.
- Test the prompt.
- Analyze the output.
- Improve the prompt.
- Test the prompt.
- Repeat the process.

## Applications

- Summarizing
- Inferring
- Transforming
- Expanding
- ChatBot
