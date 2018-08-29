/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Platform, Alert,numColumns,ActivityIndicator,StyleSheet, FlatList,Text, Image,View,Dimensions,TextInput,TouchableOpacity} from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default class App extends Component{
  state = {
    name:'',
    output:[],
    isLoading:false,
  }
  handleInput=(evt) =>{
    this.setState({
      name:evt.nativeEvent.text
    });
  }
  getUserRequest=(name)=>{
    let url=`http://www.omdbapi.com/?s=${name}&apikey=7f4509de`;
    // Alert.alert(url);
    return fetch(url).then((res) => res.json());
  }
  handleSearch = ()=>{
    this.setState({isLoading: true});
   
    this.getUserRequest(this.state.name)
    .then((res)=> {
      this.setState({output: res});
      // Alert.alert(JSON.stringify(this.state.output));
      this.setState({isLoading: false});
    });

  }
  FlatListItemSeparator = () => {
    return(
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#2B2830",
        }}
      />
    );
    }
  renderItem = ({item,index,separators}) =>(
    <View style={styles.flatListItem}>
    <Image style={styles.image}
            source={{uri: item.Poster}}
        	/>
          </View>
  );
   renderOutputUsingFlatList =()=>{
     return(
      <FlatList
      data={this.state.output.Search}
     keyExtractor={ (item, index) => index.toString() }
     ItemSeparatorComponent={ this.FlatListItemSeparator }
     renderItem={ this.renderItem }
     numColumns={3}
     />
     );
   }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.veriables}>
       <Text style={styles.name}>Enter Your Movies or Series Name</Text>
       
       <View style= {{flexDirection:'row',alignSelf:'center',padding:20}}>
       <TextInput style={styles.input} onChange = {this.handleInput}/>
       <TouchableOpacity onPress={this.handleSearch}><Text style={{fontWeight:'bold',paddingLeft:100}}> Search<FontAwesome  name="search" color={'black'} size={24} /></Text></TouchableOpacity>
       {
            this.state.isLoading ? <ActivityIndicator size = "small" color ="black" style={styles.activityIndicator}/> : null
          }
       </View>  
      </View>
      <View style={styles.output}>
      {this.renderOutputUsingFlatList()}

      </View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  veriables:{
    backgroundColor:'#E1F5FE',
    borderRadius:8,
    margin:10,
    height:200,


  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    marginLeft:19,
    fontWeight:'bold'
  },
  input:{
    width:200,
    height:50,
    borderColor:'#000000',
    borderWidth:1,
    borderRadius:8,
    alignSelf:'center',
    position:'absolute',         
  },
  output:{
backgroundColor:'#ffffff',
flex:1,
margin:10,
borderRadius:8
  },
  image: {
    width: 100,
    height: 150,
    padding: 10,
    alignSelf: 'center'
  },
  flatListItem: {
    color: 'white',
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
    borderColor: '#3F51B5',
    height:180,
    },

});
