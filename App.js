import React, {Component} from 'react';
import {creatStackNavigation} from 'react-navigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Details from './Details'

import {Platform, Alert, Button, TouchableHighlight,ActivityIndicator,StyleSheet, FlatList,Text, Image,View,Dimensions,TextInput,TouchableOpacity} from 'react-native';
const screenWidth = Dimensions.get('window').width;


class App extends Component{

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
    <TouchableHighlight
  	onShowUnderlay={separators.highlight}
  	onHideUnderlay={separators.unhighlight}
    onPress={()=> this.props.navigation.navigate('Details')}>
    <View style={styles.flatListItem}>
    <Image style={styles.image}
            source={{uri: item.Poster}}
        	/>
          </View>
          </TouchableHighlight>
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
       
       <View style= {{flexDirection:'row',alignSelf:'center',paddingTop:10}}>
       <TextInput style={styles.input} onChange = {this.handleInput}/>
       
       <TouchableOpacity  style={styles.icon} onPress={this.handleSearch}><FontAwesome  name="search" color={'black'} size={24}/></TouchableOpacity>
       {
            this.state.isLoading ? <ActivityIndicator size = "small" color ="black" style={styles.activityIndicator}/> : null
          }
          
        {/* <TouchableOpacity
          onPress={()=>this.navigation.navigate('Details')} >
          <Text>click</Text>
          </TouchableOpacity>  */}
       </View>  
      </View>
      <View style={styles.output}>
      {this.renderOutputUsingFlatList()}

      </View>
     
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  veriables:{
    backgroundColor:'#E1F5FE',
    borderRadius:8,
    margin:10,
    height:155,


  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    marginLeft:19,
    fontWeight:'bold'
  },
  input:{
    width:300,
    height:50,
    borderColor:'#000000',
    borderWidth:1,
    borderRadius:8,
    alignSelf:'center',
    
  },
  output:{
backgroundColor:'#E1F5FE',
flex:1,
margin:10,
borderRadius:8
  },
  image: {
    width: 105,
    height: 150,
    margin:2,
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
    icon:{
      position:'absolute', 
    left:255,
    top:25,
    },
    activityIndicator:{
      
    }

});
