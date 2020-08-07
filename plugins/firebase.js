import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

if (!firebase.apps.length) {
	firebase.initializeApp(
		{
			apiKey: process.env.APIKEY,
			authDomain: process.env.AUTHDOMAIN,
			databaseURL: process.env.DATABASEURL,
			projectId: process.env.PROJECTID,
			storageBucket: process.env.STORAGEBUCKET,
			appId: process.env.APPID,
			messagingSenderId: process.env.MESSAGINGSENDERID,
		},
	);
}

export default firebase;
export const auth = firebase.auth();
export const database = firebase.database();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
