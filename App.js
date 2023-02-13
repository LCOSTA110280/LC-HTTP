import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert,FlatList,ActivityIndicator} from 'react-native';
import api from './src/services/api'
import Filmes from './src/Filmes';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      filmes:[],
      loading:true,

    }
 
  }

  async componentDidMount(){
    const respone = await api.get('r-api/?api=filmes')
    this.setState({
      filmes:respone.data,
      loading:false,
    })
  }



  render(){
    if(this.loading){
      return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
          <ActivityIndicator color="blue" size={40}>
          </ActivityIndicator>
        </View>
      );

    } 
    else{
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.filmes}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=> <Filmes data={item}/>}
          >
          </FlatList>
    
        </View>
      );

    }
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  
})

export default App;

