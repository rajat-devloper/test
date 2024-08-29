import json

def lambda_handler(event, context):
    # Step 1: Extract the data between the 3rd and 4th semicolons
    raw_message = event['queryStringParameters']['text']
    raw_fields = raw_message.split(';')
    raw_text = raw_fields[3]
    
    # Step 2: Extract data from the raw text
    pasbirth = raw_text[31:39]  # Birth Date (YYYYMMDD)
    pasdocnu = raw_text[39:51].strip()  # Passport Document Number
    
    # Transform data into JSON
    result = {
        'PassportNumber': pasdocnu,
        'DateOfBirth': pasbirth
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': json.dumps(result)
    }