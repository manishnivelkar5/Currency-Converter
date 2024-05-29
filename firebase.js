const firebaseConfig = {
    apiKey: "AIzaSyD93HYcyhiw1Hwi5uteB-jvWHxuPoSFB5c",
    authDomain: "news-aggregator-b26d4.firebaseapp.com",
    projectId: "news-aggregator-b26d4",
    storageBucket: "news-aggregator-b26d4.appspot.com",
    messagingSenderId: "933358202406",
    appId: "1:933358202406:web:939c611bab31868db840e7",
    measurementId: "G-VJGEPT43RB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);