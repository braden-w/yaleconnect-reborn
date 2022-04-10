import json
import re

with open('club_data_new.json', 'r') as read_file:
    clubs = json.load(read_file)

    for i, club in enumerate(clubs):
        if (('categories' in club) and (club['categories'])):
            temp_category = club['categories'][0]['category']
            temp_category = temp_category[1:]
            temp_category = re.sub(r'\/.*', '', temp_category)

            clubs[i]['categoryParsed'] = temp_category
        
    with open('club_data_newer.json', 'w') as write_file:
        json.dump(clubs, write_file)
