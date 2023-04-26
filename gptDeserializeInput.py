import openai
openai.api_key = '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'
prompt = "I want to go to somewhere sunny this June, between 14 of 26th for less than 1000€. I want to relax and enjoy the sun but also do some ocean and water activities. I am Moroccan, I don't want a destination that requires me a visa. I'd like to go aborad internationaly, I'm okay with all cities & countries"
completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
    {"role": "system", "content": "You will be used in a web application as a virtual travel assistant.. Users will type text as a prompt: 'I want to go to somewhere sunny this June, between 14 of 26th for less than 1000€. I want to relax and enjoy the sun but also do some ocean and water activities. I am Moroccan, I don't want a destination that requires me a visa. I'd like to go aborad internationaly, I'm okay with all cities & countries.' I will put their prompt in ChatGPT Api and I will programmatically retrieve chatGPT's reponse. For this to work, your reply must always be in the form of JSON. Your goal is to extract information from the user's input, the information you must extract is : Nationality (set value to null if prompt does not mention it), budget( set it to null if not mentionned), destination ( set it to null if not mentionned), vibe (ski, sunny, city)( set it to null if not mentionned), date (starting date, end date,  set it to null if not mentionned). You must always respect the same format (so that I am able to deserialize the json output succuesfuly. ) Starting from now."},
    {"role": "user",
               "content": prompt             }],
)
print(completion.get("choices")[0].get("message").get("content"))

