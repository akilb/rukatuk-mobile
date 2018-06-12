# Ruk-A-Tuk iOS & Android App

[![App Store](https://linkmaker.itunes.apple.com/htmlResources/assets/en_us//images/web/linkmaker/badge_appstore-lrg.svg)][appstore]
[![Google Play](https://play.google.com/intl/en_gb/badges/images/badge_new.png)][googleplay]

[appstore]: https://itunes.apple.com/us/app/ruk-a-tuk/id1273614449?ls=1&mt=8
[googleplay]: https://play.google.com/store/apps/details?id=com.rukatuk.app&hl=en_GB

The official iOS and Android mobile App for Ruk-A-Tuk Promotions.

![screenshots](https://user-images.githubusercontent.com/510174/29857420-7f34880c-8d50-11e7-8baa-feb5659534d5.png)

## Requirements
- [Node](https://nodejs.org) `4.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android SDK](https://developer.android.com/sdk/) `26.0.0` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation
- [YARN](https://yarnpkg.com/) - for dependency management

## Installation

Clone this repo

```sh
$ git clone git@github.com:akilb/rukatuk-mobile.git
$ cd rukatuk-mobile
$ yarn install or npm install
$ cd rukatuk-mobile/ios # iOS only
$ pod install           # iOS only
```

Create a `.env` file and add the following:

```
GOOGLE_MAPS_API_KEY_ANDROID=ENTER_GOOGLE_MAPS_API_KEY
GOOGLE_MAPS_API_KEY_IOS=ENTER_GOOGLE_MAPS_API_KEY
```

## How to start

```sh
$ react-native run-android
$ react-native run-ios
```
