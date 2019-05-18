![travis-build](https://travis-ci.org/happy-chickpeas/happy-cow-chat.svg?branch=master)
# happy-cow-chat

Scope: Create a demo chat app that can be the basis of future developments for
the HappyCow Team.

## Start Development

Please read the [`CONTRIBUTING.md`](CONTRIBUTING.md) for contribution
guidelines.

### Setup Development environment

  - Install Node.js
  - Install expo (`npm install -g expo-cli`)
  - Clone the Project
  - `cd <path/to/your/code>`
  - `cd app`
  - `npm install`
  - `npm start`

for running the tests

  - `npm test`

## Building the applications

  - `npm run build:ios` - builds the iOS application (`.ipa` file)

  - `npm run build:android` - builds the Android application (`.apk` file)

  - `npm run build:all` - builds both applications

### Environment variables to set

  - `EXPO_USER` - your Expo username
  - `EXPO_PASSWORD` - your Expo password
  - `EXPO_APPLE_ID` - your AppleID to publish the iOS application
  - `EXPO_APPLE_PASSWORD` - your AppleID password
