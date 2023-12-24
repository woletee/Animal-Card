import { StatusBar } from 'expo-status-bar';
import {ImageBackground,StyleSheet, Text, View,Image} from 'react-native';
import { Button,button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Component } from 'react/cjs/react.production.min';

export default class Farm extends Component{
constructor(){
super()
this.forward=this.forward.bind(this);
this.backward=this.backward.bind(this);

const img0=require('./assets/cat9.jpg');
const img1=require('./assets/cow8.jpg');
const img2=require('./assets/camel7.jpg');
const img3=require('./assets/cock8.jpg');
const img4=require('./assets/dog7.jpg');
const img5=require('./assets/donkey7.jpg');
const img6=require('./assets/duck7.jpg');
const img7=require('./assets/goat7.jpg');
const img8=require('./assets/hen7.jpg');
const img9=require('./assets/hor7.jpg');
const tex1="Cat";
const tex2="Cow";
const tex3="Camel";
const tex4="Cock";
const tex5="Dog";
const tex6="Donkey";
const tex7="Duck";
const tex8="Goat";
const tex9="Hen";
const tex10="Horse";

this.state={
index:0,
imgList:[img0,img1,img2,img3,img4,img5,img6,img7,img8,img9],
texList:[tex1,tex2,tex3,tex4,tex5,tex6,tex7,tex8,tex9,tex10],
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
else{
this.setState({
index:this.state.index - 1,
})
}
}
    render(){

return (
<ImageBackground source={require('./assets/farm8.jpg')} style={{flex:1}}>
<View style={styles.con1} >
<Image source={this.state.imgList[this.state.index]} alt=""  style={{width:290,height:270}}/>

<Text style={styles.tex} >{this.state.texList[this.state.index]}</Text>
<Text>
<TouchableOpacity onPress={this.backward} style={{marginRight:180,marginTop:60}}>
<ImageBackground source={require('./assets/btn7.jpg')} style={{width:60,height:50}}>
 <Button title='' >

</Button> 
</ImageBackground>

</TouchableOpacity>

<TouchableOpacity onPress={this.forward}>
<ImageBackground source={require('./assets/fbtn7.jpg')} style={{width:80,height:50}}>
 <Button title='' >

</Button> 
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
        
    