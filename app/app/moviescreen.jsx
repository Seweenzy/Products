import { useEffect, useState } from "react";
import { Text, StyleSheet, FlatList, View, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MovieScreen = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const URL = "https://imdb236.p.rapidapi.com/api/imdb/top250-movies";

    fetch(URL, {
      headers: {
        "x-rapidapi-key": "7817c7bbf9mshdc5fe79b9867212p131396jsnaeafd38cb778",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Error fetching movies");
        }

        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.body}>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" style={{ alignItems: "center", justifyContent: "center" }} />
      ) : error ? (
        <Text style={{ color: "red", textAlign: "center", marginTop: 20, fontSize: 22 }}>{error}</Text>
      ) : (
        <FlatList
          showVerticalScrollIndicator={false}
          data={movies}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardContainer}>
                <Text style={styles.text}>{item.originalTitle}</Text>
                <Image source={{ uri: item.primaryImage }} style={{ width: "90%", height: 300 }} />
                <Text style={styles.releaseDate}>{item.releaseDate}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default MovieScreen;

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
