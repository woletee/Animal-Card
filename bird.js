import { StatusBar } from 'expo-status-bar';
import {ImageBackground,StyleSheet, Text, View,Image} from 'react-native';
import { Button,button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Component } from 'react/cjs/react.production.min';
export default class Bird extends Component{
 constructor(){
super()


this.forward=this.forward.bind(this);
this.backward=this.backward.bind(this);

const img0=require('./assets/bluee.jpg');
const img1=require('./assets/dove7.jpg');
const img2=require('./assets/eagle7.jpg');
const img3=require('./assets/pa8.jpg');
const img4=require('./assets/pig7.jpg');
const tex1="Bluebird";
const tex2="Dove";
const tex3="Eagle";
const tex4="Parrot";
const tex5="Pigeon";

this.state={
name:"React",
index:0,
imgList:[img0,img1,img2,img3,img4],
texList:[tex1,tex2,tex3,tex4,tex5],
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
<ImageBackground source={require('./assets/bird.jpg')} style={{flex:1}}>
<View style={styles.con1} >
<Image source={this.state.imgList[this.state.index]} alt=""  style={{width:310,height:290}}/>
<Text style={styles.tex} >{this.state.texList[this.state.index]}</Text>

<Text>
<TouchableOpacity onPress={this.backward} style={{marginRight:180}}>
<ImageBackground source={require('./assets/btn7.jpg')} style={{width:50,height:50}}>
<Button title=''  style={{marginRight:900}} ></Button>
</ImageBackground>
</TouchableOpacity>

<TouchableOpacity onPress={this.forward}>
<ImageBackground  source={require('./assets/fbtn7.jpg')} style={{width:65,height:50}}>
<Button title=''  style={{}}></Button>
</ImageBackground>

</TouchableOpacity>
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
        
    