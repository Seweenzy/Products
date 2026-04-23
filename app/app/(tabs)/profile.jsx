import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Switch,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  const [selectTab, setSelectTab] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [showText, setShowText] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert("Error", "Name is required");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      Alert.alert("Error", "Enter a valid email");
      return;
    }

    console.log("Form Submitted", { name, email });

    Alert.alert("Success", `Welcome ${name}!`);

    setEmail("");
    setName("");
    setPassword("");
  };

  console.log("Name", name);
  console.log("Email", email);
  console.log("Password", password);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={{
          flex: 1,

          paddingHorizontal: 10,
          backgroundColor: isSwitchOn ? "lightgrey" : "white",
        }}
      >
        <Text>This is Profile screen</Text>

        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20 }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Pressable onPress={() => setIsSelectedIndex(0)}>
                <Image
                  source={require("../assets/images/delivery.png")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: isSelectedIndex === 0 ? "red" : "blue",
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => setIsSelectedIndex(1)}>
                <Image
                  source={require("../assets/images/delivery.png")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: isSelectedIndex === 1 ? "red" : "blue",
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => setIsSelectedIndex(2)}>
                <Image
                  source={require("../assets/images/delivery.png")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: isSelectedIndex === 2 ? "red" : "blue",
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => setIsSelectedIndex(3)}>
                <Image
                  source={require("../assets/images/delivery.png")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: isSelectedIndex === 3 ? "red" : "blue",
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => setIsSelectedIndex(4)}>
                <Image
                  source={require("../assets/images/delivery.png")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: isSelectedIndex === 4 ? "red" : "blue",
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => setIsSelectedIndex(5)}>
                <Image
                  source={require("../assets/images/delivery.png")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: isSelectedIndex === 5 ? "red" : "blue",
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => setIsSelectedIndex(6)}>
                <Image
                  source={require("../assets/images/delivery.png")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: isSelectedIndex === 6 ? "red" : "blue",
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => setIsSelectedIndex(7)}>
                <Image
                  source={require("../assets/images/delivery.png")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: isSelectedIndex === 7 ? "red" : "blue",
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => setIsSelectedIndex(8)}>
                <Image
                  source={require("../assets/images/delivery.png")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: isSelectedIndex === 8 ? "red" : "blue",
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-around",
            paddingHorizontal: 10,
          }}
        >
          <Pressable
            onPress={() => setSelectTab("Contact")}
            style={{
              padding: 12,
              backgroundColor: selectTab === "Contact" ? "lightblue" : "pink",
              borderRadius: 8,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Contact Me!
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setSelectTab("Repair")}
            style={{
              padding: 12,
              backgroundColor:
                selectTab === "Repair" ? "lightblue" : "lightgreen",
              borderRadius: 8,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Repair Me!</Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: "row", marginTop: 20, padding: 10 }}>
          <Switch
            value={isSwitchOn}
            onValueChange={() => setIsSwitchOn(!isSwitchOn)}
          />
        </View>

        <View>
          <Pressable onPress={() => setShowText(!showText)}>
            <Text>
              You can also customize the icons by changing their color, size,
              and other properties to fit your design needs.
              {!showText ? "Read More" : "Read Less"}
            </Text>
          </Pressable>
          {showText && (
            <Text>
              This is some detailed information.These royalty-free high-quality
              Expo Icons are available in SVG, PNG, EPS, ICO, ICNS, AI, or PDF
              and are available as individual or icon packs.. You can also
              customize …
            </Text>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 8,
            paddingHorizontal: 10,
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="Enter your name here..."
            style={{ flex: 1 }}
            onChangeText={setName}
            value={name}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 8,
            paddingHorizontal: 10,
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="Enter your email here..."
            style={{ flex: 1 }}
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 8,
            paddingHorizontal: 10,
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="Enter your password here..."
            secureTextEntry={!showPassword}
            style={{ flex: 1 }}
            value={password}
            onChangeText={setPassword}
          />

          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="black"
            />
          </Pressable>
        </View>

        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              height: 50,
              padding: 10,
              borderRadius: 10,
              backgroundColor: "lightblue",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Profile;
