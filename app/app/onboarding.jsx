import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Onboarding = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "green", flex: 1 }}>
      <View>
        <Text>This is Onboarding screen</Text>
      </View>

      <Pressable
        onPress={() => router.push("/recruits")}
        style={{
          backgroundColor: "pink",
          borderRadius: 10,
          height: 40,
          marginHorizontal: 30,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Onboarding;
