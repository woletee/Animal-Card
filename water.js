import { StatusBar } from 'expo-status-bar';
import {ImageBackground,StyleSheet, Text, View,Image} from 'react-native';
import { Button,button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Component } from 'react/cjs/react.production.min';

export default class Water extends Component{
 constructor(){
super()


this.forward=this.forward.bind(this);
this.backward=this.backward.bind(this);

const img0=require('./assets/bluee8.jpg');
const img1=require('./assets/fish7.jpg');
const img2=require('./assets/octo7.jpg');
const img3=require('./assets/sha7.jpg');
const tex1="Bluewhale";
const tex2="Fish";
const tex3="Jellyfish";
const tex4="Shark";


this.state={
index:0,
imgList:[img0,img1,img2,img3],
texList:[tex1,tex2,tex3,tex4],
showcomp : false,
};
this.onbtn=this.onbtn.bind(this);
 }
 onbtn(){
      this.setState({
         showcomp : true,
         
     })
 }

 
 forward(){
if(this.state.index + 1== this.state.imgList.length || this.state.index + 1 ==this.state.texList){
    this.setState({
        index:0
    })
}
else{
    this.setState({
index:this.state.index + 1

    })
}

 }
  backward(){
      if(this.state.index - 1 == -1){
          this.setState({
              index:this.state.imgList.length -1 ,
          }) 
      }
      else {
          this.setState({
              index:this.state.index - 1,
          })
      }
  }
 
 
    render(){

   return (
<ImageBackground source={require('./assets/water7.jpg')} style={{flex:1}}>
<View style={styles.con1} >
<Image source={this.state.imgList[this.state.index]} alt=""  style={{width:370,height:299}}/>
<Text style={styles.tex} >{this.state.texList[this.state.index]}</Text>
<Text>
<TouchableOpacity onPress={this.backward} style={{marginRight:180}}>
    <ImageBackground source={require('./assets/btn7.jpg')} style={{width:50,height:50}}>
    <Button title=''></Button>
    </ImageBackground>
</TouchableOpacity>
<TouchableOpacity onPress={this.forward} s>
    <ImageBackground source={require('./assets/fbtn7.jpg')} style={{width:60,height:50}}>

    </ImageBackground>
</TouchableOpacity>
<Button title='' ></Button>
</Text>

</View>
</ImageBackground>

  );


 }
}
const styles=StyleSheet.create({
    con1:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    },
    tex:{
      fontSize:80,
     
    }
    
    
    
    })
        
    