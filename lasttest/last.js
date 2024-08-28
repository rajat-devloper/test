import json

def lambda_handler(event, context):
    # input from request event
    message = event['body']

    # Extracting data between 3rd and 4th semicolons
    data = message.split(';')[3]

    # Extracting DOB and Passport number
    pasbirth = data[31:39]  
    pasdocnu = data[39:51].strip()

    # Generate json output
    output = {
        "PassportNumber": pasdocnu,
        "DateOfBirth": pasbirth
    }
    
    return {
        'statusCode': 200,
        'body': json.dumps(output)
    }