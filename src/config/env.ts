import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT ,
    firebasewebkey: process.env.FIREBASE_API_KEY || '',
    serverstatus: process.env.SERVER_STATUS || '',

};

export default config;