import json

def lambda_handler(event, context):
    # Extract values of a and b from the input JSON
    a = event.get('a')
    b = event.get('b')
    console.log("hello")
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
