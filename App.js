import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, Button } from '@react-native-material/core';
import { TextInput } from "@react-native-material/core";



const App = () => (
  
  <Stack fill center spacing={4}>
    
    <Text variant="h1" style={{ margin: 16 }}>
    Registration
    </Text>
    <TextInput label="Username" style={{ margin: 16 }} />
    <TextInput label="Password" style={{ margin: 16 }} />
    <Button title="Sign Up" onPress={() => alert("Sign up Successfully")}/>
    <Text variant="h3" style={{ margin: 16 }}>
    Don't have an account yet?
    </Text>
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
