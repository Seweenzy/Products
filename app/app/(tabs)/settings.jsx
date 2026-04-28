import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import Qsafeview from "../components/Qsafeview";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Tests from "../components/tests";

const Settings = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hasOneSpecial, setHasOneSpecial] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <Qsafeview style={{ flex: 1 }} bgColor="white">
      <View
        style={{
          backgroundColor: "green",
          height: 350,
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ color: "white" }}>Hello Seun Kukoyi</Text>
        </View>
        <View
          style={{ flexDirection: "row", paddingHorizontal: 10, marginTop: 10 }}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Pressable
              onPress={() => setSelectedIndex(0)}
              style={{
                width: 80,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: selectedIndex === 0 ? "pink" : "lightblue",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <Text>Home</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedIndex(1)}
              style={{
                width: 80,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: selectedIndex === 1 ? "blue" : "lightblue",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <Text>About Us</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedIndex(2)}
              style={{
                width: 80,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: selectedIndex === 2 ? "blue" : "lightblue",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <Text>Settings</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedIndex(3)}
              style={{
                width: 80,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: selectedIndex === 3 ? "blue" : "lightblue",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <Text>Search</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedIndex(4)}
              style={{
                width: 80,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: selectedIndex === 4 ? "blue" : "lightblue",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <Text>Profile</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedIndex(5)}
              style={{
                width: 80,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: selectedIndex === 5 ? "blue" : "lightblue",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <Text>Recruits</Text>
            </Pressable>
          </ScrollView>
        </View>

        <View style={{ flexDirection: "row", marginTop: 20, padding: 10 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Pressable
              onPress={() => setHasOneSpecial(0)}
              style={{
                width: 60,
                marginRight: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: hasOneSpecial === 0 ? "red" : "black",
                }}
              >
                Home
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setHasOneSpecial(1)}
              style={{ width: 80, marginRight: 20 }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: hasOneSpecial === 1 ? "red" : "black",
                }}
              >
                About Us
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setHasOneSpecial(2)}
              style={{ width: 60, marginRight: 20 }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: hasOneSpecial === 2 ? "red" : "black",
                }}
              >
                Settings
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setHasOneSpecial(3)}
              style={{ width: 60, marginRight: 20 }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: hasOneSpecial === 3 ? "red" : "black",
                }}
              >
                Search
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setHasOneSpecial(4)}
              style={{ width: 60, marginRight: 20 }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: hasOneSpecial === 4 ? "red" : "black",
                }}
              >
                Profile
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setHasOneSpecial(5)}
              style={{ width: 60, marginRight: 20 }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: hasOneSpecial === 5 ? "red" : "black",
                }}
              >
                Recruits
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          top: 300,
          left: 0,
          right: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: "absolute",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            padding: 20,
            flex: 1,
          }}
        >
          <View
            style={{
              height: 200,
              backgroundColor: "pink",
              flex: 1,
            }}
          ></View>
          <View
            style={{
              height: 200,
              backgroundColor: "yellow",
              flex: 1,
            }}
          ></View>
          <View
            style={{
              height: 200,
              backgroundColor: "blue",
              flex: 1,
            }}
          ></View>
        </View>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: "white",
            marginHorizontal: 20,
            borderColor: "red",
            borderWidth: 1,
            paddingHorizontal: 8,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="enter your password"
            placeholderTextColor="grey"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
          ></TextInput>
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={18}
              color="grey"
              style={{ marginRight: 10 }}
            />
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Tests texts={["Home"]} index={0} />
          <Tests texts={["About Us"]} index={1} />
          <Tests texts={["Contact Us"]} index={2} />
          <Tests texts={["Profile"]} index={3} />
          <Tests texts={["Account"]} index={4} />
          <Tests texts={["Account"]} index={5} />
          <Tests texts={["Account"]} index={6} />
          <Tests texts={["Account"]} index={7} />
          <Tests texts={["Account"]} index={8} />
        </ScrollView>
      </View>
    </Qsafeview>
  );
};

export default Settings;
