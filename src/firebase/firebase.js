import firebase from 'firebase/app';
import 'firebase/functions';

const config = {
 apikey: functions.config().project.key,
 projectId: functions.config().project.id
}

firebase.initializeApp(config);

export const app = firebase.app();
export const functions = firebase.functions();