import { initializeApp } from 'firebase-admin';
import { config } from 'firebase-functions';

// Init cloud function with your current firebase context 
//  (provides your fn with access to firebase resources e.g. DB, storage, ...)
const conf = config().firebase;
initializeApp(conf);

// 2. Export all functions
export * from './hello.function';