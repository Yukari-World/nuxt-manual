import firebase from 'firebase';

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
