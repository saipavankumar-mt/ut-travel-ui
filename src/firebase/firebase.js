import firebase from 'firebase/app';
import 'firebase/functions';
import * as firebasefunctions from 'firebase-functions';

const config = {
 apikey: firebasefunctions.config().project.key,
 projectId: firebasefunctions.config().project.id
}

firebase.initializeApp(config);

export const app = firebase.app();
export const functions = firebase.functions();