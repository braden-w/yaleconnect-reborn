import os
import json
import sys
import re

def main():
    # parse through json file and return a list of dictionaries
    # each dictionary contains the name of the file and the path
    # to the file
    with open(os.path.join(os.path.dirname(__file__), 'club_data_new.json'), 'r') as f:
        data = json.load(f)
    lst = []
    for key in data:
        obj = key['categories']
        try:
            lst.append(obj[0])
        except IndexError:
            continue
    print(lst)

if __name__ == '__main__':
    main()
    
