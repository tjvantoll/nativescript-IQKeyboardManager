# NativeScript IQKeyboardManager Plugin

NativeScript wrapper for the popular [IQKeyboardManager](https://cocoapods.org/pods/IQKeyboardManager) iOS framework, which provides an elegant solution for preventing the iOS keyboard from covering `UITextView` controls.

![Example of using the IQKeyBoardManager NativeScript plugin on an iOS device](screenshot.gif)

## Installation

```
$ tns plugin add nativescript-iqkeyboardmanager
```

## Usage

That's it! IQKeyboardManager takes care of all initialization when your app starts up by default.

## Advanced usage

Want to tweak the appearance and/or behavior?

Start by adding the following two paths into your app’s `references.d.ts` file. (See this repo’s demo app for a specific example.)

```
/// <reference path="./node_modules/tns-platform-declarations/ios/ios.d.ts" />
/// <reference path="./node_modules/nativescript-iqkeyboardmanager/index.d.ts" />
```

> **NOTE**: You might also need to `npm install --save-dev tns-platform-declarations` to bring in NativeScript’s TypeScript definitions for native iOS development.

Next, initialize an instance of `IQKeyboardManager` with the following line of code.

```typescript
const iqKeyboard = IQKeyboardManager.sharedManager();
```

You now have the full IQKeyboardManager APIs available for you to use. For example you could use the following code to switch to a dark keyboard.

```typescript
const iqKeyboard = IQKeyboardManager.sharedManager();
iqKeyboard.overrideKeyboardAppearance = true;
iqKeyboard.keyboardAppearance = UIKeyboardAppearance.Dark;
```

For more examples of what's possible, run the demo app (shown in the gif below) and check out the [app's `main-view-model.ts` file](demo/app/main-view-model.ts).

<img src="https://github.com/tjvantoll/nativescript-IQKeyboardManager/raw/master/demo.gif" width="320px"/> 

## Documentation

For more details on how IQKeyboardManager works, including more detailed API documentation, refer to [the library's CocoaPod page](https://cocoapods.org/pods/IQKeyboardManager).

## Maintainers

For maintainer’s of this plugin’s source code: when the [IQKeyboardManager Podfile](platforms/ios/Podfile) updates, you should generate new typings for for this plugin to reflect those changes.

To do so, execute these commands.

```bash
cd demo
TNS_DEBUG_METADATA_PATH="$(pwd)/metadata" tns build ios
TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" tns build ios
```

Next, locate IQKeyboardManager’s generated typings file in the `demo/typings` folder and override the `IQKeyboardManager.d.ts` file in this repo’s root.