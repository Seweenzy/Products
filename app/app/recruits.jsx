import { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Recruits = ({ item, handleCardPress }) => {
  const [recruits, setRecruits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRecruits();
  }, []);

  async function getRecruits() {
    try {
      const URL = "https://imdb236.p.rapidapi.com/api/imdb/top250-movies";

      const res = await fetch(URL, {
        headers: {
          "x-rapidapi-key":
            "7817c7bbf9mshdc5fe79b9867212p131396jsnaeafd38cb778",
          "x-rapidapi-host": "imdb236.p.rapidapi.com",
        },
      });

      if (res.status !== 200) {
        throw new Error("An error occured");
      }

      const data = await res.json();
      setRecruits(data);
      setIsLoading(false);
      console.log(data[0]);
      console.log("Thumbnail:", data[0]?.thumbnails);
    } catch (error) {
      setError(error.message);
      console.log("There was an error", error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>This is Recruitment page</Text>

      {isLoading ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <ActivityIndicator color="red" size="large" />
        </View>
      ) : error ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text style={{ color: "red" }}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={recruits}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardContainer}>
                <Text style={styles.text}>{item.originalTitle}</Text>

                <Image
                  source={{ uri: item.primaryImage }}
                  style={{ width: "90%", height: 300 }}
                />
                <Text style={styles.releaseDate}>{item.releaseDate}</Text>

                <Text style={styles.description}>{item.description}</Text>
                <View style={{ flexDirection: "row", gap: 5 }}></View>
                <Text style={styles.description}>
                  <Text style={{ fontWeight: "bold" }}>Locations:</Text>{" "}
                  {item.filmingLocations}
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL(item.trailer)}>
                  <Text style={{ textDecoration: "underline", color: "blue" }}>
                    <Text style={{ color: "black", fontSize: 15 }}>
                      Trailer:
                    </Text>
                    {item.trailer}
                  </Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                  Production Companies:
                </Text>

                {item.productionCompanies?.map((company, index) => (
                  <Text key={index}>
                    <Text>{company.name}</Text>
                  </Text>
                ))}

                <View style={{ flexDirection: "row", height: 120 }}>
                  {item.thumbnails?.map((thumb, index) => (
                    <View key={index} style={{ flex: 1, marginRight: 8 }}>
                      <Image
                        source={{ uri: thumb.url }}
                        style={{
                          flex: 1,
                        }}
                        resizeMode="cover"
                      />
                    </View>
                  ))}
                </View>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Recruits;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    alignContent: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    margin: 2,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "black",
    margin: 2,
    textAlign: "justify",
  },
  releaseDate: {
    fontSize: 16,
    color: "blue",
    margin: 2,
    textAlign: "center",
  },
  cardContainer: {
    backgroundColor: "pink",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    shadowColor: "black",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
