import openai
openai.api_key = 'gptApiKey'
completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user",
               "content": "Summarize this article shorturl.at/ixOZ0 "}]
)

print(completion)
