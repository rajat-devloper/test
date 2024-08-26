exports.handler = async (event) => {
    try {
        // Extract the input text from the request
        const inputText = event.body || '';

        // Split the text by semicolons and get the data between the 3rd and 4th semicolons
        const parts = inputText.split(';');
        if (parts.length < 5) {
            throw new Error('Invalid input format');
        }

        const rawMessage = parts[3].trim();

        // Extract the date of birth and passport number
        const pasbirth = rawMessage.slice(31, 39); // Birth Date (YYYYMMDD)
        const pasdocnu = rawMessage.slice(39, 51).trim(); // Passport Document Number

        // Prepare the output JSON
        const output = {
            PassportNumber: pasdocnu,
            DateOfBirth: pasbirth,
        };

        // Return the output
        return {
            statusCode: 200,
            body: JSON.stringify(output),
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
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }
};