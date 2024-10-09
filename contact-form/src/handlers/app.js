const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        const { name, email, message } = JSON.parse(event.body);

        const params = {
            Destination: {
                ToAddresses: [process.env.EMAIL_RECIPIENT],
            },
            Message: {
                Body: {
                    Text: {
                        Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                    },
                },
                Subject: {
                    Data: `Kontaktformular Anfrage von ${name}`,
                },
            },
            Source: process.env.EMAIL_RECIPIENT,
        };

        await ses.sendEmail(params).promise();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            body: JSON.stringify({ message: 'E-Mail erfolgreich gesendet' }),
        };
    } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",  // CORS Header
                "Access-Control-Allow-Headers": "Content-Type",
            },
            body: JSON.stringify({ message: 'Fehler beim Senden der E-Mail' }),
        };
    }
};
