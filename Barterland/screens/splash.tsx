import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <ImageBackground
          source={require('./assets/header.png')}
          style={styles.backgroundImage}
        >
        </ImageBackground>
      </View>

      {/* Lower part with white background */}
      <View style={styles.lower}>
        {/* Text and Get Started button */}
        <Text style={styles.title}>Swap with ease</Text>
        <Text style={styles.subtitle}>Give your items a second chance, join users to swap items in exhange of other items that you want</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  upper: {
    flex: 1,
  },
  lower: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    alignSelf: 'center',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Splash;
