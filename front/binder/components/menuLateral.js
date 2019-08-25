import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { BotaoMenuLateral } from './botaoMenuLateral';

export class MenuLateral extends React.Component {

    constructor(props){
        super(props);
        this.botoes = props.botoes;
        this.state = {
            mostra:0,
        };
        for (var i = 0, len = this.botoes.length; i < len; i++) {
            console.log(this.botoes[i]);
        }
    }


    render(){
        if(this.state.mostra == 1){
            return (
                <View style={ styles.container }>
                    {this.botoes.map( item => (
                        <BotaoMenuLateral attr={item} key={item.name} ></BotaoMenuLateral>
                    ))}
                    <BotaoMenuLateral attr={
                        {name:"▲" , img:"calc1" , bgColor:"rgba(250,243,108,0.56)",brColor:"#FAF36C",click:()=>{this.setState({mostra:0})}}}/>
                </View>
            );
        }else{
            return (
                <View style={ styles.container }>
                    <BotaoMenuLateral attr={{name:"▼" , img:"calc1" , bgColor:"rgba(242,136,100,0.32)" , brColor:"#F28864" , click:()=>{
                        this.setState( { mostra:1 })
                    },}}></BotaoMenuLateral>
                </View>
            );
        };
    }
};


const styles = StyleSheet.create({
    container:{
        position:'absolute',
        backgroundColor: '#fff',
        right:0,
        paddingTop:Expo.Constants.statusBarHeight,
    },
});
