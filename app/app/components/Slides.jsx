import { View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-safe-area-context";
import { useState } from "react";

const Slides = ({ image }) => {
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20 }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Pressable
          onPress={() => setIsSelectedIndex(0)}
          style={{
            borderWidth: isSelectedIndex === 0 ? 3 : 1,
            borderColor: isSelectedIndex === 0 ? "blue" : "gray",
            borderRadius: 8,
            padding: 2,
          }}
        >
          <Image
            source={image}
            style={{ width: 80, height: 80, resizeMode: "contain" }}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Slides;
