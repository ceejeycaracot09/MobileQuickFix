import { StyleSheet, Text, View, Image, ImageBackground,
} from 'react-native';
import { Stack, Button } from '@react-native-material/core';
import { TextInput } from "@react-native-material/core";

const image = { uri: "https://www.teahub.io/photos/full/105-1053350_background-hd-image-for-android-app.jpg" };
const signup = () => (


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
 Registration
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
 <Button title="Sign Up" onPress={() => alert("Sign up Successfully")}/>
 

 
 <Text variant="h3" style={{color: 'blue'}} 
 onPress={() => Linking.openUrl(url)}
>
 Already have an account?
 </Text>
 </ImageBackground>
 </View>
</Stack>
)
export default signup;

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