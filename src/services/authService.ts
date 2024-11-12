import admin from 'firebase-admin';
import { CustomError } from '../utils/CustomError';
import axios from 'axios';
import config from '../config/env';


const FIREBASE_API_KEY = config.firebasewebkey;

export class AuthService {
    static async register(name: string, email: string, password: string) {
        try {
            const userRecord = await admin.auth().createUser({
                displayName: name,
                email,
                password,
            });
            return { uid: userRecord.uid, email: userRecord.email, name: userRecord.displayName };
        } catch (error) {
            if (error instanceof Error) {
                throw new CustomError(error.message, 400);
            } else {
                throw new CustomError('An unknown error occurred', 400);
            }
        }
    }

    static async login(email: string, password: string) {
        try {
            const response = await axios.post<{ idToken: string; refreshToken: string; localId: string }>(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
                {
                    email,
                    password,
                    returnSecureToken: true,
                }
            );
            return {
                message: 'Login successful',
                idToken: response.data.idToken,
                refreshToken: response.data.refreshToken,
                uid: response.data.localId,
            };
        } catch (error: any) {
            throw new CustomError('Invalid email or password', 401);
        }
    }
}
