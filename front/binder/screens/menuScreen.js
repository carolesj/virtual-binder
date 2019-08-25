import React from 'react';
import { SwitchDay } from "./switchDay";
import { Grade } from "./grade";
import { MenuLateral } from './menuLateral';
import { StyleSheet, Text, View, Alert } from 'react-native';

export class Index extends React.Component{
	constructor(props){
		super(props);
		this.botoes = [
			{name:"+", img:"calc1", bgColor:"rgba(242, 136, 100, 0.32)", brColor:"#F28864", click:()=>{Alert.alert("ciclo")}},
			{name:"calc", img:"calc1", bgColor:"rgba(250, 243, 108, 0.56)", brColor:"#FAF36C", click:()=>{Alert.alert("cliclo")}},
			{name:"ling", img:"calc1", bgColor:"rgba(250, 243, 108, 0.56)", brColor:"#FAF36C", click:()=>{Alert.alert("cliclo")}},
			{name:"web", img:"calc1", bgColor:"rgba(250, 243, 108, 0.56)", brColor:"#FAF36C", click:()=>{Alert.alert("cliclo")}},
			{name:"IUC", img:"calc1", bgColor:"rgba(250, 243, 108, 0.56)", brColor:"#FAF36C", click:()=>{Alert.alert("cliclo")}}
		];
	}

	render() {
		return (
		<View style={styles.container}>
			<SwitchDay></SwitchDay>
			<Grade></Grade>
			<MenuLateral botoes={this.botoes}></MenuLateral>
		</View>
		);
	};
}

  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  paddingTop: Expo.Constants.statusBarHeight,
	  backgroundColor: '#FFF7DF',
	},
  });
