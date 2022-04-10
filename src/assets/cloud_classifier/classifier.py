from google.cloud import language
import json

def classify_text(text):
    client = language.LanguageServiceClient()
    document = language.Document(content=text, type_=language.Document.Type.PLAIN_TEXT)
    
    return client.classify_text(document=document)

    # response = client.classify_text(document=document)

    # for category in response.categories:
    #     print("=" * 80)
    #     print(f"category  : {category.name}")
    #     print(f"confidence: {category.confidence:.0%}")

def main():
    with open('club_data.json', 'r') as read_file:
        clubs = json.load(read_file)
        # clubs = clubs[0:5]

        for i, club in enumerate(clubs):
            club_string = club['name'] + ' ' + club['mission']
            while len(club_string.split()) < 25:
                club_string += (" " + club_string)

            try:
                response = classify_text(club_string)
            except Exception:
                continue

            clubs[i]['categories'] = []
            for category in response.categories:
                clubs[i]['categories'].append({
                    "category": category.name,
                    "confidence": category.confidence
                })

        with open('club_data_new.json', 'w') as write_file:
            json.dump(clubs, write_file)
            
if __name__ == '__main__':
    main()
