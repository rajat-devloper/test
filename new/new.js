import json

def lambda_handler(event, context):
    # get the number1 and number2 parameters from the event object
    number1 = event["number1"]
    number2 = event["number2"]

    # calculate the sum
    sum_result = number1 + number2

    return {
        'statusCode': 200,
        'body': json.dumps('The sum is '+ str(sum_result))
    }