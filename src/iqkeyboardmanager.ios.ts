import { ContentView } from "tns-core-modules/ui/content-view";

export class PreviousNextView extends ContentView {
  createNativeView() {
    return IQPreviousNextView.new();
  }
}
