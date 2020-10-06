import firebase from 'firebase/app';
import 'firebase/functions';

const config = {
 apikey:'AIzaSyA4eB8JJ-WuBnxNSsJ1AUgD3lef9UHr-Qg',
 projectId: 'ut-travel-ui'
}

firebase.initializeApp(config);

export const app = firebase.app();
export const functions = firebase.functions();