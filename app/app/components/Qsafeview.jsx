import { Dimensions, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Qsafeview = ({ children, bgColor }) => {
  const { width } = Dimensions.get("screen");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: bgColor ? bgColor : "pink",
        }}
      >
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Qsafeview;
