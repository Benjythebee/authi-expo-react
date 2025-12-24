# Summary

This is an Expo react native app that first comes from a boilerplate and modified to include only what I needed.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## Running on Different Platforms

### Web Development
To run the app in a web browser:

```bash
npm run web
```

This will start the development server and open the app in your default browser.

### Android Emulator Setup

1. **Install Android Studio**
   - Download from [developer.android.com](https://developer.android.com/studio)
   - Follow the installation wizard

2. **Set up an Android Virtual Device (AVD)**
   - Open Android Studio
   - Go to Tools > AVD Manager
   - Click "Create Virtual Device"
   - Select a device definition and system image
   - Click "Finish"

3. **Run on Android Emulator**
   - Start your AVD from Android Studio
   - In your project terminal, run:
   ```bash
   npx expo start
   ```
   - Press `a` to open in Android emulator

### iOS Simulator (macOS only)
- Install Xcode from the Mac App Store
- Run `npx expo start` and press `i` to open in iOS simulator



## AI Disclaimer

I've used AI in situations where the code is in my opinion, repetitive or can be easily reproduced.
Such example is when generating a basic layout for the context in `context/config.tsx` using the prompt `Generate a react context that will fetch http... and save the data locally on mount`

Another example is `"Generate a helper class that will log custom data to http..."` to generate apiLogger.ts
