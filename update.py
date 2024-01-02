
import google.generativeai as genai
import json
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("MY_SECRET_KEY")) 

# Set up the model
generation_config = {
  "temperature": 0.9,
  "top_p": 1,
  "top_k": 1,
  "max_output_tokens": 2048,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  }
]

model = genai.GenerativeModel(model_name="gemini-pro",
                              generation_config=generation_config,
                              safety_settings=safety_settings)

x=input("Enter the number of days for your trip : ")
dest= input("Enter the places you want to visit : ")

prompt_parts=f'''Create an Itinerary for a {x}-day trip to {dest}. Make sure to include the most beautiful yet safe places I can explore. Include a moderate amount of things to do since I also want some time to relax.
If the number of destinations is double the number of days it is very hectic for me to visit all the places. Also provide the contact details of Tourism Development Corporation of that place. Provide me the output in json format for each day'''


response = model.generate_content(prompt_parts)

# Specify the file path where you want to save the JSON file
json_file_path = "output.json"

# Open the file in write mode and use the json.dump() function to save the data
with open(json_file_path, 'w') as json_file:
    json.dump(response.text, json_file)


print(response.text)

'''
Enter the number of days for your trip : 3
Enter the places you want to visit Eco Park, Victoria Memorial, Belur Math, Kalighat Temple, Princep Ghat
**Day 1:**

* Morning: Visit the Eco Park, a sprawling urban park with lush greenery, water bodies, and various recreational facilities.
* Afternoon: Explore the Victoria Memorial, a majestic marble palace that houses a vast collection of artifacts and exhibits related to Indian history.
* Evening: Take a leisurely walk along Princep Ghat, a riverside promenade adorned with antique statues and offering panoramic views of the Hooghly River.

**Day 2:**

* Morning: Visit the Belur Math, the headquarters of the Ramakrishna Math and Mission, a spiritual organization founded by Swami Vivekananda.
* Afternoon: Relax and rejuvenate with a traditional Indian spa treatment at a local wellness center.
* Evening: Enjoy a cultural evening by attending a traditional Bengali dance performance or a classical music concert.

**Day 3:**

* Morning: Visit the Kalighat Temple, one of the most revered Hindu temples in Kolkata, dedicated to the goddess Kali.
* Afternoon: Explore the bustling markets of Kolkata, such as the New Market or the Gariahat Market, for souvenirs and local delicacies.
* Evening: Conclude your trip with a memorable dinner at a traditional Bengali restaurant, savoring the unique flavors of Bengali cuisine.

**Contact Details of Tourism Development Corporation:**

* Address: West Bengal Tourism Development Corporation Ltd., DG Block, Sector II, Salt Lake City, Kolkata - 700091, West Bengal, India
* Phone: +91-33-2358-5180
* Email: wbtourismtdc@gmail.com
* Website: https://www.wbtdc.gov.in/

'''