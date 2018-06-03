import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput, Te} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
          style={styles.stretch}
          source={{uri:'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&h=350'}}/>
          </View>
          
          <View style={{backgroundColor:'burlywood',alignItems:'center', height:60, width:360,justifyContent:'center'}}>
            <Text style={{ fontStyle:'italic', fontWeight:'bold', fontSize:25, textAlign:'center'}}> Books world is Ready for You just need to Login </Text></View>
            
          


<TextInput placeholder="Email"
style={{ height:40,width:200, marginTop:40, marginLeft:80, backgroundColor:'burlywood'}}></TextInput>

<TextInput placeholder="Pssword"
style={{ height:40,width:200, marginTop:30, marginLeft:80, backgroundColor:'burlywood'}}></TextInput>



<TouchableOpacity style=
{{ height:40, width:90, backgroundColor:'burlywood', marginLeft:140, marginTop:40}}>
  <Text style={{fontWeight:'bold', fontSize:30, marginLeft:5}}>LogIn</Text>
</TouchableOpacity>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  stretch:{
    height:250,
    width:400,
  },
});