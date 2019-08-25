import React from 'react';
import { Image, Alert , StyleSheet, Button, Text, View , TouchableHighlight } from 'react-native';


export class BotaoMenuLateral extends React.Component {
    constructor(props){
        super(props);
        this.nome = props.attr.name;
        this.img = "asset:/" + props.attr.img;
        this.click =  props.attr.click;
        this.color = props.attr.bgColor;
        this.brColor = props.attr.brColor;
    }

    //<Image source={{uri: this.img}} style={{width: 40, height: 40}}/>
    //<TouchableHighlight onPress={this.click}>
    //    <View>
    //        <Text>{this.nome}</Text>
    //    </View>
    //</TouchableHighlight>

    render (){
        return (

            <TouchableHighlight style={{backgroundColor:this.color , borderStyle:'solid' , borderColor:this.brColor , borderWidth:1 , padding:5}} onPress={this.click}>
                <Text>{this.nome}</Text>
            </TouchableHighlight>


        );
    };

}
const styles = StyleSheet.create(
    {
        containerBotao:{
            backgroundColor:"#000",
        },
    }
);
