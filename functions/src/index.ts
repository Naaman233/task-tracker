const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.addMessage = functions.https.onRequest(async (request: any, response: any) =>{
    const orginal = "Makafui Kofi Naaman";
    const writeResult = await admin.firestore().collection('messages').add({orginal: orginal})
    response.json({result: `Message with ID: ${writeResult.id} added`})
    // response.json({orginal})
})

