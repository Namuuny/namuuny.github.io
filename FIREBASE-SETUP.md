# Firebase Auth Setup Guide — Smart City Design

## 1. Create Firebase Project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it (e.g. `smart-city-design`)
3. Disable Google Analytics if you don’t need it (optional)
4. Create the project

## 2. Register a Web App

1. In the project overview click the **Web** icon `</>`
2. App nickname: `Smart City Design Web`
3. Check **Also set up Firebase Hosting** only if you plan to use it
4. Click **Register app**
5. **Copy the `firebaseConfig` object** — you will paste it into `js/firebase-config.js`

## 3. Enable Sign-in Methods

Go to **Authentication** → **Sign-in method** → **Get started**

### Email/Password
1. Click **Email/Password**
2. Enable the first toggle
3. Save

### Google
1. Click **Google**
2. Enable
3. Choose a support email
4. Save
5. Under **Authorized domains** make sure your domain is listed  
   (for local testing `localhost` is already allowed)

### Facebook (optional)
1. Go to [https://developers.facebook.com](https://developers.facebook.com) → Create App → Consumer
2. Add product **Facebook Login**
3. Settings → Basic → copy **App ID** and **App Secret**
4. Back in Firebase → Authentication → Facebook → paste App ID + Secret → Enable
5. Add the OAuth redirect URI that Firebase shows you into Facebook Login → Settings → Valid OAuth Redirect URIs

## 4. Put your config in the site

Open `js/firebase-config.js` and replace the placeholders:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## 5. Authorized domains (for production)

Authentication → Settings → Authorized domains  
Add:
- `localhost` (already there)
- `smart-city.design`
- `yourusername.github.io` (if using GitHub Pages)

## 6. Test

1. Open `signup.html` in a browser (or via local server)
2. Create an account with email + password
3. Or click Google / Facebook
4. You should be redirected to `profile.html` with your name & email shown
5. Click **Log out** → back to login

## Files that use Firebase

| File | Role |
|------|------|
| `js/firebase-config.js` | Shared config + init |
| `login.html` | Email + Google + Facebook login, password reset |
| `signup.html` | Email registration + social signup |
| `profile.html` | Protected page, shows user, logout |

## Notes

- Firebase Auth is free for most small/medium usage (Spark plan).
- Never commit real API keys to a public repo if you later add restricted rules that could be abused — for client-side Auth the apiKey is expected to be public, but you should still set Authorized domains.
- For course progress / paid access later you can add Firestore and security rules.
