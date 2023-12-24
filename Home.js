import React from 'react';
import {View, Text, Button,ImageBackground,Image,StyleSheet} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export default function Home({navigation, route}) {

return (
<ImageBackground source={require('./assets/home1.png')} style={{flex:1}}>
<ScrollView >   
<View  style={styles.con1}   >

<TouchableOpacity onPress={()=>navigation.navigate('Pet Animals')}  style={{borderWidth:8,borderColor:'green',borderRadius:20,marginBottom:20}} >
<ImageBackground source={require('./assets/farm1.jpg')} style={{borderRadius:70,width:260,height:210,borderColor:'red'}}>
  <Button  title='Pet Animals' color={'red'}> 
</Button>  
</ImageBackground>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Wild Animals')}  style={{borderWidth:8,borderColor:'green',borderRadius:20,marginBottom:20}}>
<ImageBackground  source={require('./assets/wild3.jpg')} style={{borderRadius:20,width:260,height:210,borderColor:'red'}}>
<Button  title='Wild Animals' color={'red'}>
<Text style={{fontSize:38,fontWeight:700,fontFamily:'cursive',color:'rgb(255,0,255)'}}> </Text>   
</Button>
</ImageBackground>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('Bird Animals')} style={{borderWidth:8,borderColor:'green',borderRadius:20,marginBottom:20}}>
<ImageBackground source={require('./assets/OIP.jpg')} style={{borderRadius:20,width:260,height:210,borderColor:'red'}}>
<Button  title='Bird Animals' color={'red'}>
 
</Button>
</ImageBackground>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('Water Animals')} style={{borderWidth:8,borderColor:'green',borderRadius:20}}>
<ImageBackground source={require('./assets/water.jpg')} style={{borderRadius:20,width:260,height:210,borderColor:'red'}}>
<Button  title='Water Animals' color={'red'}>
  
</Button>
</ImageBackground>
</TouchableOpacity>

</View>
</ScrollView>
</ImageBackground> 
);
}
const styles=StyleSheet.create({
    con1:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    },
    tex:{
    fontSize:80,
    fontFamily:'cursive' 
    }
    })