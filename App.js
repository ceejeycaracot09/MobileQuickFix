
import { StyleSheet, Text, View, Image, ImageBackground,
   } from 'react-native';
import { Stack, Button } from '@react-native-material/core';
import { TextInput } from "@react-native-material/core";
import signup from "./components/signup.js";

const image = { uri: "https://www.teahub.io/photos/full/105-1053350_background-hd-image-for-android-app.jpg" };
const App = () => (
  
  
  <Stack fill center spacing={4}>
      <View>
    <ImageBackground resizeMode="cover" style={styles.container} source={image}>
    <Image 
        source={{
          uri: 'https://adoxsolutions.com/images/quickfix-logo.png',
        }}
        style={{ resizeMode: 'contain', width: 200, height: 200,}}
      />
    <Text variant="h1" style={{ 
      margin: 16,
      fontSize: 20,
      fontWeight:'bold'
      }}>
    Please Login
    </Text>
    <TextInput label="Username" 
    style={{ 
      margin: 16,
      width: 300,
      borderWidth: 1, 
      borderStyle:'dotted'}} />
    <TextInput label="Password" 
    style={{ 
      margin: 10,
      width: 300,
      borderWidth: 1, 
      borderStyle:'dotted' }} />
    <Button title="Login" onPress={() => alert("Sign up Successfully")}/>
    

    {/* <Button
  title="Don't have an account yet?"
  onPress={() => navigation.push('Details')}
/> */}
     <Text variant="h3" style={{color: 'blue'}} 
    onPress={() => Linking.openUrl(signup)}
  >
    Don't have an account yet?
    </Text> 
    </ImageBackground>
    </View>
  </Stack>
)
export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Quick Fix</Text>
      

//       <StatusBar style="auto" />
//     </View>
//   );
//}

const styles = StyleSheet.create({
   container: {
     flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
     justifyContent: 'center',
   },
  
});