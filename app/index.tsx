import { Link } from "expo-router";
import styles from "./index.style"
import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Index() {
  const [name, setName] = useState("")
  const handleSignUp = () => {
    console.log(name)
  }
  return (
    <View style={styles.container}>
      <Text style={{ margin: 20, fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Sign Up</Text>

      <View style={styles.registrationBox}>
        <Text style={styles.regHeader}>Registration Form</Text>

        {/* name */}
        <TextInput onChangeText={(text) => setName(text)} value={name} style={styles.regName} placeholder="Enter your Full Name" />

        {/* email */}
        <TextInput style={styles.regName} placeholder="Enter your Email"
          keyboardType="email-address"
          autoCapitalize="none" />

        {/* password */}
        <TextInput style={styles.regName} placeholder="Enter your Password" secureTextEntry
          autoCapitalize="none" />

        <View style={styles.regBtn}>
          <Button onPress={handleSignUp} color="#5459AC" title="Sign up" ></Button>
        </View>
      </View>
    </View>
  );
}
