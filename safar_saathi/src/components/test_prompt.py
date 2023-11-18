import openai
import pandas as pd
import os 
from dotenv import load_dotenv

load_dotenv()

data = pd.read_csv("E:\Safar-sathi\safar_saathi\src\components\data.csv")
# Load your data
data = pd.read_csv("E:\Safar-sathi\safar_saathi\src\components\data.csv")

# List travel destinations and get user input
for i, destination in enumerate(data['name']):
    print(f"{i + 1}: {destination}")

locs = input(
    "Pick one or more travel destinations (separated by spaces):\n").split()
locs = [int(loc) - 1 for loc in locs if loc.isdigit()]

# Get the number of days and hotel from the user
x = input("Enter the number of days for your trip:\n")
hotel = input("Enter the name of your hotel:\n")

# Create a prompt for the API
selected_destinations = [data.iloc[loc]['name'] for loc in locs]
destinations_str = ', '.join(selected_destinations)
prompt = f'''You're an online travel bot agent who makes very optimised tour plans with timings divided by you that specializes in helping people plan their upcoming trips.Based on the following travel details:
Provide me with "Open and Close Timings for each {destinations_str}", “Destination activities recommendations with 2 hours tour duration within {x} days and divide the destinations from {destinations_str} among {x} days without repeating any destinations
in {destinations_str} (make an optimised tour plan without destination repetitions)”, “Travel Logistics”, “Check-in and Check-out timings from {hotel} everyday. Include these details day-wise"'''

# Replace with your OpenAI API key
api_key = os.getenv('key')

# Send a request to the API
response = openai.Completion.create(
    engine="text-davinci-003",
    prompt=prompt,
    max_tokens=500,  # Adjust the max tokens as needed
    api_key=api_key
)

# Get the generated text from the API response
generated_text = response.choices[0].text

# Print the generated tour plan
print("\nGenerated Tour Plan:")
print(generated_text)
