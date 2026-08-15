// ============================================
// Firebase Configuration
// ============================================
// 1. Go to https://console.firebase.google.com
// 2. Create a project (or select existing)
// 3. Add a Web app → copy the config below
// 4. Replace the placeholder values
// ============================================

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase (compat SDK for simple static HTML)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
