# talead-medical
A ionic-angular project application

# Getting Started
- Clone this repository.
- Run `npm install` from the project root.
- Install the ionic CLI (`npm install -g ionic@latest`).
- Run `ionic serve` in a terminal from the project root.

# Run & Emulate on Android
```
npm install -g cordova@latest
ionic cordova platform add android
ionic cordova run android
```

# Development Environment

### > ionic info
```
cli packages: (C:\Users\YBR\AppData\Roaming\npm\node_modules)

    @ionic/cli-utils  : 1.19.0
    ionic (Ionic CLI) : 3.0.0

global packages:

    cordova (Cordova CLI) : 7.1.0

local packages:

    @ionic/app-scripts : 2.1.4
    Cordova Platforms  : android 6.1.2
    Ionic Framework    : ionic-angular 3.6.1

System:

    Android SDK Tools : 26.1.1
    Node              : v6.9.1
    npm               : 5.3.0
    OS                : Windows 10

Environment Variables:

    ANDROID_HOME : D:\software\Android\sdk\

Misc:

    backend : pro
```

### Access-Control-Allow-Origin Issue Solution
- For Windows: "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --args --disable-web-security --user-data-dir=C:\Temp
- For MacOS: open -a "Google Chrome" --args --disable-web-security --user-data-dir=$HOME/Temp

### Android Publishing (Password: R0adshare)
```
ionic cordova platform rm android
ionic cordova platform add android
ionic cordova build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk platforms/android/build/outputs/apk/talead-medical.apk
```

### iOS Release (Apple Cert Password: R0adshare)
```
ionic cordova platform rm ios
ionic cordova platform add ios
```
- Xcode: Open project, General > Signing, Capabilities > Push Notification > On, Info > Localization native development region: China, Product > build
- Xcode: Archive > Upload to App Store...