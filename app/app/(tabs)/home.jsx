import {
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmitButton = () => {
    if (!name.trim()) {
      Alert.alert("Error", "Enter a valid name");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      Alert.alert("Error", "Enter a valid email");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Error", "Enter a valid password");
      return;
    }

    console.log("Form Submitted", { name, email });

    Alert.alert("Success", `Welcome ${name}!`);

    setName("");
    setConfirmPassword("");
    setEmail("");
    setPassword("");
  };
  console.log("Name", name);
  console.log("Email", email);
  console.log("Password", password);
  console.log("ConfirmPassword", confirmPassword);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ marginHorizontal: 20, flex: 1 }}>
        <Text>This is Homepage screen</Text>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TextInput
            placeholder="Enter your name"
            onChangeText={setName}
            value={name}
            style={{
              borderWidth: 1,
              height: 50,
              flex: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
            style={{
              borderWidth: 1,
              height: 50,
              borderRadius: 8,
              flex: 1,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            paddingHorizontal: 10,
            borderWidth: 1,
            height: 50,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <TextInput
            onChangeText={setPassword}
            value={password}
            secureTextEntry={!showPassword}
            placeholder="Enter your password"
            style={{
              flex: 1,
            }}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="red"
            />
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            borderWidth: 1,
            height: 50,
            borderRadius: 8,
            paddingHorizontal: 10,
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Confirm your password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry={!showconfirmPassword}
            style={{
              flex: 1,
            }}
          />
          <Pressable
            onPress={() => setShowConfirmPassword(!showconfirmPassword)}
          >
            <Ionicons
              name={showconfirmPassword ? "eye" : "eye-off"}
              size={20}
              color="red"
            />
          </Pressable>
        </View>

        <View
          style={{
            marginTop: 50,
            backgroundColor: "pink",

            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            position: "relative",
          }}
        >
          <Pressable onPress={handleSubmitButton}>
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                fontSize: 16,
              }}
            >
              Submit
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
