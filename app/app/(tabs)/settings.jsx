import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
      <Text>This is Settings screen</Text>
    </SafeAreaView>
  );
};

export default Settings;
