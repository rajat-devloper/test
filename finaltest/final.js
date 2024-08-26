exports.handler = async (event) => {
  try {
      const inputText = event.body;
      const parts = inputText.split(';');
      if(parts.length < 5) {
        throw new Error('Invalid input format');
      }
      const rawMessage = parts[3];
      const dateOfBirth = rawMessage.slice(31, 39);
      const passportNumber = rawMessage.slice(39, 51).trim();
      const responseBody = {
          PassportNumber: passportNumber,
          DateOfBirth: dateOfBirth
      };
      return {
          statusCode: 200,
          body: JSON.stringify(responseBody),
          headers: {
              'Content-Type': 'application/json',
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