import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerImageContainer}>
        <Image
          source={require('./assets/Barterland.png')}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Lets get you started</Text>

     <Text style={styles.subtitle}>
        Sign up to begin swapping on barter land
      </Text>

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up with Email</Text>
      </TouchableOpacity>

      <Text style={styles.signInLink}>
        Already have an account? <Text style={styles.signInText}>Sign In</Text>
      </Text>

      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.lineText}>Or Sign Up with</Text>
        <View style={styles.line} />
      </View>

      {/* Four horizontally aligned boxes with images */}
      <View style={styles.imageContainer}>
        {/* Box 1 */}
        <View style={styles.imageBox}>
          <Image
            source={require('./assets/google.png')}
          />
        </View>

        {/* Box 2 */}
        <View style={styles.imageBox}>
          <Image
            source={require('./assets/facebook.png')}
          />
        </View>

        {/* Box 3 */}
        <View style={styles.imageBox}>
          <Image
            source={require('./assets/apple.png')}
          />
        </View>

        {/* Box 4 */}
        <View style={styles.imageBox}>
          <Image
            source={require('./assets/phone.png')}
          />
        </View>
      </View>

      {/* Footer text */}
      <Text style={styles.footerText}>
        By Signing up, I accept Barter Land’s <Text style={styles.signInText}>Terms of Use </Text> and <Text style={styles.signInText}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  headerImageContainer: {
    height: 40,
    marginTop: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 20,
  },
  signupButton: {
    width: 400,
    backgroundColor: '#007AFF',
    marginTop: 180,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  signupButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInLink: {
    marginTop: 40,
    fontSize: 16,
  },
  signInText: {
    color: '#FF8811',
    fontWeight: 'bold',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    flex: 1,
    marginTop: 40,
    height: 1,
    backgroundColor: '#CCC',
  },
  lineText: {
    marginTop: 40,
    fontSize: 16,
    color: '#666',
    marginHorizontal: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  imageBox: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    height: 70,
    marginVertical: 40,
    marginHorizontal: 5,
    paddingVertical: 25,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  footerText: {
    marginTop: 40,
    paddingHorizontal: 60,
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
});

export default SignupScreen;