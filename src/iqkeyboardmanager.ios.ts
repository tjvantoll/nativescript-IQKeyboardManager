import { ContentView } from "tns-core-modules/ui/content-view";
import { TextView } from "tns-core-modules/ui/text-view";

export class PreviousNextView extends ContentView {
  createNativeView() {
    return IQPreviousNextView.new();
  }
}

export class TextViewWithHint extends TextView {
  createNativeView() {
    const view = IQTextView.new();
    this.nativeView = view;
    view.placeholder = this.hint;
    return view;
  }
}
