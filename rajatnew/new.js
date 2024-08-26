exports.handler = async (event) => {
    try {
        // Extract input text from the event body
        const inputText = event.body;

        // Split the input text by semicolons
        const parts = inputText.split(';');

        if (parts.length < 5) {
            throw new Error('Error: Input text does not contain enough semicolons');
        }

        // Extract the text between 3rd and 4th semicolons
        const rawMessage = parts[3];

        // Extract date of birth and passport number
        const dateOfBirth = rawMessage.substring(31, 39);
        const passportNumber = rawMessage.substring(39, 51).trim();

        // Generate the JSON response
        const response = {
            PassportNumber: passportNumber,
            DateOfBirth: dateOfBirth
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        // Handle any errors
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal Server Error',
                error: error.message,
            }),
        };
    }
};