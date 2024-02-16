import { initializeApp } from 'firebase/app';

export default defineNuxtPlugin(function() {
	const config = useRuntimeConfig();

	const firebaseConfig = {
		apiKey: config.FIREBASE_API_KEY,
		authDomain: config.FIREBASE_AUTH_DOMAIN,
		databaseURL: config.FIREBASE_DATABASE_URL,
		projectId: config.FIREBASE_PROJECT_ID,
		storageBucket: config.FIREBASE_STORAGE_BUCKET,
		appId: config.FIREBASE_API_ID,
		messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
	};
	initializeApp(firebaseConfig);
});
