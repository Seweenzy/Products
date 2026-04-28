import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const Tests = ({ texts }) => {
  const [isPressed, setIsPressed] = useState(null);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Pressable onPress={() => setIsPressed} style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", marginTop: 20, padding: 10 }}>
          {texts.map((text, textIndex) => (
            <Text key={textIndex}>
              <Text
                style={{
                  color: isPressed === textIndex ? "green" : "black",
                  fontWeight: "bold",
                  fontSize: 18,
                  flexWrap: "nowrap",
                }}
              >
                {text}
              </Text>
            </Text>
          ))}
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Tests;
