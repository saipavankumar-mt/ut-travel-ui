import firebase from 'firebase/app';
import 'firebase/functions';

const config = {
 apikey:'AIzaSyCwhmdqRWbK8MWTjQtrIzUOua9Da8YNzMc',
 projectId: 'uttranchalholidays-41e55'
}

firebase.initializeApp(config);

export const app = firebase.app();
export const functions = firebase.functions();