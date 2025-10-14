# Firebase Firestore Setup for Lubeck Elevators Apps

## Firestore Document Structure

Create a collection called `updates` in your Firestore database with the following documents:

### Document: `updates/client` (Lubeck Elevators Digital - Customer App)
```json
{
  "url": "https://your-firebase-storage-url/lubeck-digital.apk",
  "version": "1.2.0"
}
```

### Document: `updates/team` (Lubeck Elevators Team - Internal App)
```json
{
  "url": "https://your-firebase-storage-url/lubeck-team.apk",
  "version": "1.1.5"
}
```

## Firebase Configuration

The Firebase configuration has been set up in `lib/firebase.ts` with the following settings:
- Project ID: `lubeck-elevators`
- Storage Bucket: `lubeck-elevators.firebasestorage.app`

## Data Fetching

The app fetches version and URL data from these specific Firestore document paths:
- `updates/client` - Contains `url` and `version` for customer app
- `updates/team` - Contains `url` and `version` for team app

## Security Rules

Go to Firebase Console → Firestore Database → Rules and update them to:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /updates/{document} {
      allow read: if true; // Allow public read access
      allow write: if false; // Restrict writes to admin only
    }
  }
}
```

**IMPORTANT:** Click "Publish" after updating the rules!

## Firebase Storage

Upload your APK files to Firebase Storage and get the download URLs. Update the `url` field in the respective Firestore documents with these Firebase Storage URLs.

## Download Behavior

When users click "Download APK", it opens the Firebase Storage URL directly in a new tab for APK download.
