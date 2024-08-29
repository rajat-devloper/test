import json

def lambda_handler(event, context):
    # Parse the request body
    try:
        body = json.loads(event['body'])
    except (json.JSONDecodeError, KeyError):
        return {
            'statusCode': 400,
            'body': json.dumps('Invalid request: JSON body is required')
        }

    # Extract values of a and b from the body
    a = body.get('a')
    b = body.get('b')
    
    # Ensure a and b are provided and are numbers
    if a is None or b is None:
        return {
            'statusCode': 400,
            'body': json.dumps('Error: Missing required parameters a or b')
        }
    
    try:
        result = a + b
    except TypeError:
        return {
            'statusCode': 400,
            'body': json.dumps('Error: Parameters a and b must be numbers')
        }
    
    # Return the sum as the response
    return {
        'statusCode': 200,
        'body': json.dumps({'sum': result})
    }
