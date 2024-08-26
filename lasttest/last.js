exports.handler = async (event) => {
  try {
    const inputText = event.body;
    const parts = inputText.split(';');

    if (parts.length < 5) {
      throw new Error('Input text does not contain enough semicolons');
    }

    const rawMessage = parts[3];

    const pasbirth = rawMessage.slice(31, 39);
    const pasdocnu = rawMessage.slice(39, 51).trim();

    const outputJSON = {
      PassportNumber: pasdocnu,
      DateOfBirth: pasbirth
    };

    return {
      statusCode: 200,
      body: JSON.stringify(outputJSON),
      headers: {
        'Content-Type': 'application/json'
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
      }),
    };
  }
};