import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default function App() {
  const [invite, setInvite] = useState('hello');
  const { container, textTest } = styles;

  return (
    <View style={container}>
      <View>
        <Text>test view</Text>
      </View>
      <Text>Open up App.js to start working on your app! {invite}</Text>
      <TextInput value={invite} onChangeText={setInvite} style={textTest}/>
      <Button title='tap me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTest: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1
  }
});
