import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import React from 'react'
import { useRouter } from "expo-router";

const Home = () => {
  const router =useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://images.pexels.com/photos/9566409/pexels-photo-9566409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>NewsHub</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.subtitle}>
              NewsHub is your go-to source for breaking news, top stories, and personalized content. With a sleek, user-friendly interface, stay updated on current events, sports, entertainment, and more.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                router.push("/categories");
              }}
            >
              <Text style={styles.buttonText}>Browse By Category</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                router.push("/categories/countryCategories")
              }}
            >
              <Text style={styles.buttonText}>Browse By Country</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 43,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});
