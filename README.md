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

As an example, to initialize an IQKeyboardManager with a dark keyboard you could use the following code.

```typescript
const iqKeyboard = IQKeyboardManager.sharedManager();
iqKeyboard.overrideKeyboardAppearance = true;
iqKeyboard.keyboardAppearance = UIKeyboardAppearance.Dark;
```

For more examples of what's possible, run the demo app (shown below) and check out the [app's `main-view-model.ts` file](demo/app/main-view-model.ts).

<img src="https://github.com/tjvantoll/nativescript-IQKeyboardManager/raw/master/demo.gif" width="320px"/> 

### Updating the `IQKeyboardManager.d.ts` file
Plugin developer note: when the [IQKeyboardManager Podfile](platforms/ios/Podfile) is updated,
you should generate new typings for it as well.

Execute these commands in a Terminal window:

```bash
cd demo
TNS_DEBUG_METADATA_PATH="$(pwd)/metadata" tns build ios
TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" tns build ios
```

Then locate the generated typings file in demo/typings and override the one in the plugin sources.

## Documentation

For more details on how IQKeyboardManager works, including more detailed API documentation, refer to [the library's CocoaPod page](https://cocoapods.org/pods/IQKeyboardManager).
