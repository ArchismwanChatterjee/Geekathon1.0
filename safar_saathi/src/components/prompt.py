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
person = input("Enter the number of person travelling:\n")

# Create a prompt for the API
selected_destinations = [data.iloc[loc]['name'] for loc in locs]
destinations_str = ', '.join(selected_destinations)
dest = len(destinations_str)
prompt = f'''Create an Itinerary for a {x}-day trip to {destinations_str}. Make sure to include the most beautiful yet safe places I can explore. Include a moderate amount of things to do since I also want some time to relax.
If the number of destinations is double the number of days it is very hectic for me to visit all the places. Also provide the contact details of Tourism Development Corporation of that place.'''

# prompt = f'''Create an Itinerary for a {x}-day trip to {destinations_str}. Make sure to include the most beautiful yet safe places I can explore. Include a moderate amount of things to do since I also want some time to relax.
#  If {dest} is double the {x} it is very hectic for me to visit all the places. Based on the trip you created, what will be the total expense of traveling around and just enjoying for {person} person? Include the prices for {hotel}'''

# Replace with your OpenAI API key
api_key = os.environ.get("key")

# os.environ.get

# Send a request to the API
response = openai.Completion.create(
    engine="text-davinci-003",
    prompt=prompt,
    # temperature=0.5,
    max_tokens=500,  # Adjust the max tokens as needed
    api_key=api_key
)

# Get the generated text from the API response
generated_text = response.choices[0].text

# Print the generated tour plan
print("\nGenerated Tour Plan:")
print(generated_text)

'''
Generated Tour Plan:


Day 1

• Visit Belur Math: Visit the Kali Temple, the main prayer hall and the sacred water tank
• Tour the Rammohan Mission Museum at Belur Math
• Check in to a safe and comfortable hotel for relaxation

Day 2

• Explore Marble Palace
• Take a pedicab to Fort William then take a walk through the fort and learn about its history
• Check in at Eco Park after exploring

Day 3

• Check out from Eco Park and go sightseeing at Eco Park
• Shopping and dinner around Eco Park

Contact Details of Tourism Development Corporation
West Bengal Tourism Development Corporation
Address: 1,NBT Building, A.J.C. Bose Road, Kolkata-700020
Phone: 22317408/ 22317409/ 63296264
Email: info@wbtdc.gov.in

'''
