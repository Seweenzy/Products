import { FlatList, Text, View, Image } from "react-native";

import Qsafeview from "../components/Qsafeview";
import { useEffect, useState } from "react";

const Search = () => {
  useEffect(() => {
    getSearch();
  }, []);

  const [search, setSearch] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  async function getSearch() {
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
        throw new Error("something went wrong");
      }

      const data = await res.json();
      console.log(data[0]);
      setSearch(data);
    } catch (e) {
      console.log("An error occured", e);
    }
  }

  return (
    <Qsafeview>
      <Text>Hello this is a search Page</Text>

      <FlatList
        data={search}
        renderItem={({ item }) => {
          return (
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {item.originalTitle}
              </Text>
              <Image
                source={{ uri: item.primaryImage }}
                style={{ width: "100%", height: 400, justifyContent: "center" }}
              />
              <Text>{item.description}</Text>
            </View>
          );
        }}
      />
    </Qsafeview>
  );
};

export default Search;
