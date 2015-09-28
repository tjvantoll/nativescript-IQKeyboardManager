# NativeScript IQKeyboardManager Plugin

NativeScript wrapper for the popular [IQKeyboardManager](https://cocoapods.org/pods/IQKeyboardManager) iOS framework, which provides an elegant solution for preventing the iOS keyboard from covering `UITextView` controls.

![Example of using the IQKeyBoardManager NativeScript plugin on an iOS device](screenshot.gif)

## Installation

```
$ tns plugin add nativescript-iqkeyboardmanager
```

## Usage

Set `IQKeyboardManager.sharedManager().enable` to `true` in your first view's `loaded` event handler. For example:

```
<!-- main-page.xml -->
<Page loaded="loaded">
    ...
</Page>
```

```
// main-page.js
exports.loaded = function(args) {
    // Guard against errors when running on Android
    if (typeof IQKeyboardManager != "undefined") {
        IQKeyboardManager.sharedManager().enable = true;
    }
};
```

## Documentation

For more details on how IQKeyboardManager works, including more detailed API documentation, refer to [the library's CocoaPod page](https://cocoapods.org/pods/IQKeyboardManager).
