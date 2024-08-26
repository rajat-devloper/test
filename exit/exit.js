exports.handler = async (event) => {
  try {
    // Extract the raw message between the 3rd and 4th semicolons
    const inputText = event.queryStringParameters && event.queryStringParameters.text;
    if (!inputText) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const parts = inputText.split(';');
    if (parts.length < 5) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input format' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const rawMessage = parts[3];  // Extracting the text between 3rd and 4th semicolons

    // Extract date of birth and passport number
    const dateOfBirth = rawMessage.substring(31, 39);  // Birth Date (YYYYMMDD)
    const passportNumber = rawMessage.substring(39, 51).trim();  // Passport Number

    // Create the response JSON
    const response = {
      PassportNumber: passportNumber,
      DateOfBirth: dateOfBirth,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(response),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};