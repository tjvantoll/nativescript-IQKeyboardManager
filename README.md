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

Take a look at the embedded [demo app](demo/) for a bunch of features.
You can easily access [any other feature](https://github.com/hackiftekhar/IQKeyboardManager/blob/df3afc60ad92a2264dc5e101a3c7966d7f6265ef/PROPERTIES%20%26%20FUNCTIONS.md) because this plugin exposes the entire library through [a TypeScript definition file](demo/references.d.ts).

<img src="https://github.com/tjvantoll/nativescript-IQKeyboardManager/raw/master/demo.gif" width="320px"/> 

## Documentation

For more details on how IQKeyboardManager works, including more detailed API documentation, refer to [the library's CocoaPod page](https://cocoapods.org/pods/IQKeyboardManager).
