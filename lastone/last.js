exports.handler = async (event) => { 
 try { 
 const inputText = event.body; 

 // Extract data between 3rd and 4th semicolons 
 const semicolonParts = inputText.split(';'); 
 const rawMessage = semicolonParts[3].trim(); 

 // Extract the date of birth and passport number 
 const pasbirth = rawMessage.substring(31, 39); 
 const pasdocnu = rawMessage.substring(39, 51).trim(); 

 // Create the output JSON 
 const output = { 
 PassportNumber: pasdocnu, 
 DateOfBirth: pasbirth 
 }; 

 // Return the response 
 return { 
 statusCode: 200, 
 body: JSON.stringify(output), 
 headers: { 
 'Content-Type': 'application/json' 
 }, 
 }; 
 } catch (error) { 
 // Handle any errors 
 return { 
 statusCode: 500, 
 body: JSON.stringify({ 
 message: 'Internal Server Error', 
 error: error.message 
 }), 
 }; 
 } 
};