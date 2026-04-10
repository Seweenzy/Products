import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#004ea3",
        tabBarInActiveTintColor: "#49454f",
        tabBarStyle: {
          height: 70,
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Homepage",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={focused ? size + 8 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={focused ? size + 4 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={focused ? size + 4 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recruits"
        options={{
          title: "Recruits",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
