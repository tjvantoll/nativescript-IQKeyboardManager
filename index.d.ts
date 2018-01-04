
declare const enum IQAutoToolbarManageBehaviour {

	BySubviews = 0,

	ByTag = 1,

	ByPosition = 2
}

declare class IQBarButtonItem extends UIBarButtonItem {

	static alloc(): IQBarButtonItem; // inherited from NSObject

	static appearance(): IQBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): IQBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): IQBarButtonItem; // inherited from UIAppearance

	static new(): IQBarButtonItem; // inherited from NSObject

	invocation: NSInvocation;

	readonly isSystemItem: boolean;

	setTargetAction(target: any, action: string): void;
}

declare class IQKeyboardManager extends NSObject {

	static alloc(): IQKeyboardManager; // inherited from NSObject

	static new(): IQKeyboardManager; // inherited from NSObject

	static sharedManager(): IQKeyboardManager;

	canAdjustAdditionalSafeAreaInsets: boolean;

	readonly canGoNext: boolean;

	readonly canGoPrevious: boolean;

	readonly disabledDistanceHandlingClasses: NSMutableSet<typeof NSObject>;

	readonly disabledToolbarClasses: NSMutableSet<typeof NSObject>;

	readonly disabledTouchResignedClasses: NSMutableSet<typeof NSObject>;

	enable: boolean;

	enableAutoToolbar: boolean;

	enableDebugging: boolean;

	readonly enabledDistanceHandlingClasses: NSMutableSet<typeof NSObject>;

	readonly enabledToolbarClasses: NSMutableSet<typeof NSObject>;

	readonly enabledTouchResignedClasses: NSMutableSet<typeof NSObject>;

	keyboardAppearance: UIKeyboardAppearance;

	keyboardDistanceFromTextField: number;

	readonly keyboardShowing: boolean;

	layoutIfNeededOnUpdate: boolean;

	readonly movedDistance: number;

	overrideKeyboardAppearance: boolean;

	placeholderFont: UIFont;

	preventShowingBottomBlankSpace: boolean;

	previousNextDisplayMode: IQPreviousNextDisplayMode;

	readonly resignFirstResponderGesture: UITapGestureRecognizer;

	shouldFixInteractivePopGestureRecognizer: boolean;

	shouldPlayInputClicks: boolean;

	shouldResignOnTouchOutside: boolean;

	shouldShowTextFieldPlaceholder: boolean;

	shouldShowToolbarPlaceholder: boolean;

	shouldToolbarUsesTextFieldTintColor: boolean;

	toolbarBarTintColor: UIColor;

	toolbarDoneBarButtonItemImage: UIImage;

	toolbarDoneBarButtonItemText: string;

	toolbarManageBehaviour: IQAutoToolbarManageBehaviour;

	readonly toolbarPreviousNextAllowedClasses: NSMutableSet<typeof NSObject>;

	toolbarTintColor: UIColor;

	readonly touchResignedGestureIgnoreClasses: NSMutableSet<typeof NSObject>;

	goNext(): boolean;

	goPrevious(): boolean;

	registerAllNotifications(): void;

	registerTextFieldViewClassDidBeginEditingNotificationNameDidEndEditingNotificationName(aClass: typeof NSObject, didBeginEditingNotificationName: string, didEndEditingNotificationName: string): void;

	reloadInputViews(): void;

	reloadLayoutIfNeeded(): void;

	resignFirstResponder(): boolean;

	unregisterAllNotifications(): void;

	unregisterTextFieldViewClassDidBeginEditingNotificationNameDidEndEditingNotificationName(aClass: typeof NSObject, didBeginEditingNotificationName: string, didEndEditingNotificationName: string): void;
}

declare var IQKeyboardManagerVersionNumber: number;

declare var IQKeyboardManagerVersionString: interop.Reference<number>;

declare class IQKeyboardReturnKeyHandler extends NSObject {

	static alloc(): IQKeyboardReturnKeyHandler; // inherited from NSObject

	static new(): IQKeyboardReturnKeyHandler; // inherited from NSObject

	delegate: any;

	lastTextFieldReturnKeyType: UIReturnKeyType;

	constructor(o: { viewController: UIViewController; });

	addResponderFromView(view: UIView): void;

	addTextFieldView(textFieldView: UIView): void;

	initWithViewController(controller: UIViewController): this;

	removeResponderFromView(view: UIView): void;

	removeTextFieldView(textFieldView: UIView): void;
}

declare const enum IQPreviousNextDisplayMode {

	Default = 0,

	AlwaysHide = 1,

	AlwaysShow = 2
}

declare class IQPreviousNextView extends UIView {

	static alloc(): IQPreviousNextView; // inherited from NSObject

	static appearance(): IQPreviousNextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQPreviousNextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQPreviousNextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): IQPreviousNextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQPreviousNextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): IQPreviousNextView; // inherited from UIAppearance

	static new(): IQPreviousNextView; // inherited from NSObject
}

declare class IQTextView extends UITextView {

	static alloc(): IQTextView; // inherited from NSObject

	static appearance(): IQTextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): IQTextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQTextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): IQTextView; // inherited from UIAppearance

	static new(): IQTextView; // inherited from NSObject

	placeholder: string;
}

declare class IQTitleBarButtonItem extends IQBarButtonItem {

	static alloc(): IQTitleBarButtonItem; // inherited from NSObject

	static appearance(): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): IQTitleBarButtonItem; // inherited from UIAppearance

	static new(): IQTitleBarButtonItem; // inherited from NSObject

	selectableTextColor: UIColor;

	titleFont: UIFont;

	constructor(o: { title: string; });

	initWithTitle(title: string): this;
}

declare class IQToolbar extends UIToolbar implements UIInputViewAudioFeedback {

	static alloc(): IQToolbar; // inherited from NSObject

	static appearance(): IQToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): IQToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): IQToolbar; // inherited from UIAppearance

	static new(): IQToolbar; // inherited from NSObject

	doneBarButton: IQBarButtonItem;

	nextBarButton: IQBarButtonItem;

	previousBarButton: IQBarButtonItem;

	readonly titleBarButton: IQTitleBarButtonItem;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly enableInputClicksWhenVisible: boolean; // inherited from UIInputViewAudioFeedback

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var kIQDoneButtonToolbarTag: number;

declare var kIQPreviousNextButtonToolbarTag: number;

declare var kIQUseDefaultKeyboardDistance: number;
