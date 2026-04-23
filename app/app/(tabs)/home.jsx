import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slides from "../components/Slides";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>This is Homepage screen</Text>

      <Slides image={require("../assets/images/delivery.png")} />
    </SafeAreaView>
  );
};

export default Home;
