import admin from 'firebase-admin';
import path from 'path';


const serviceAccountPath = path.resolve(__dirname, '../../cursorwand-firebase-adminsdk-ag3rf-f8f5ea7c08.json');

if(!serviceAccountPath) {
    throw new Error('Service Account Path not found');
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath as admin.ServiceAccount),
});

export const db = admin.firestore();
