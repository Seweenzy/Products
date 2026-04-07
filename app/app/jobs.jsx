import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = () => {
    const URL =
      "https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=5&country=us&date_posted=all";

    fetch(URL, {
      headers: {
        "x-rapidapi-key": "7817c7bbf9mshdc5fe79b9867212p131396jsnaeafd38cb778",
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something Went Wrong");
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, textAlign: "center", marginVertical: 10 }}>
        Looking for Jobs??
      </Text>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color="red" size="large" />
        </View>
      ) : error ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "red", fontSize: 18 }}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={jobs}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  margin: 10,
                  padding: 10,
                  backgroundColor: "#f9f9f9",
                  borderRadius: 8,
                }}
              >
                <Image
                  source={{ uri: item.employer_logo }}
                  style={{ width: "90%", height: 200, alignSelf: "center" }}
                />
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.employer_name}
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", marginTop: 10 }}
                >
                  Apply here:
                </Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL(item.job_apply_link)}
                >
                  <Text
                    style={{ color: "blue", textDecorationLine: "underline" }}
                  >
                    {item.job_apply_link}
                  </Text>
                </TouchableOpacity>
                <Text>{item.job_description}</Text>
                <Text>{item.job_google_link}</Text>
                <Text>{item.job_employment_type}</Text>
                <Text>{item.job_publisher}</Text>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};
export default Jobs;
