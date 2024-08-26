exports.handler = async (event) => {
    try {
        const input = event.body;
        const parts = input.split(';');
        if (parts.length < 5) {
            throw new Error('Invalid input format');
        }
        const raw_message = parts[3];
        const dateOfBirth = raw_message.substring(31, 39);
        const passportNumber = raw_message.substring(39, 51).trim();
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
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal Server Error',
                error: error.message
            }),
        };
    }
};