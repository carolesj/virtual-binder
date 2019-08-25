import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MenuLateral } from '../components/menuLateral';
import { Materia } from '../components/materia';

export class MenuCalc extends React.Component {
    constructor(props){
        super(props);
        this.botoes = [
            {name:"+" , img:"calc1", bgColor:"rgba(242, 136, 100, 0.32)" ,brColor:"#F28864" , click:()=>{Alert.alert("ciclo")}},
            {name:"List", img:"calc1" , bgColor:"rgba(250, 243, 108, 0.56)", brColor:"#FAF36C",click:()=>{Alert.alert("cliclo")}},
            {name:"Prov", img:"calc1" , bgColor:"rgba(250, 243, 108, 0.56)", brColor:"#FAF36C", click:()=>{Alert.alert("cliclo")}},
            {name:"Slid" , img:"calc1" , bgColor:"rgba(250, 243, 108, 0.56)", brColor:"#FAF36C", click:()=>{Alert.alert("cliclo")}}]
    };

    render(){

        return (
            <View style={styles.root}>
                <Materia materia="Calculo II" prof="Farid tarid" atendimento="Quarta feira 16h, sala 5-301" lista={[]}></Materia>
                <MenuLateral botoes={this.botoes}></MenuLateral>
            </View>
        );
    };
};


const styles = StyleSheet.create({
    root:{
        paddingTop:Expo.Constants.statusBarHeight,
        flex:1,
        backgroundColor:"rgba(250, 243, 108, 0.05)"
    },
    container1:{
        flex:1,
    },
});
