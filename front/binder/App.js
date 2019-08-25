import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, Picker, Button, TouchableOpacity, ImageBackground, TouchableHighlight } from 'react-native';
import { AppLoading, Asset, Icon } from 'expo';
import * as Font from 'expo-font';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Materia} from './components/materia';
import {IcoLi} from './components/icoLi';
import {MenuLateral} from './components/menuLateral';
import { SwitchDay } from "./components/switchDay";
import { Grade } from "./components/grade";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      text2: '',
      text3: '',
      isLoadingComplete: false,
    };
  } 

  render() {
      if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
        return (
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        );
      }
        else{
          return(
            <View style={{backgroundColor: '#FFF7DF', flex: 1}}>
              <Text style = {styles.textHeader}>Adicionar Arquivo</Text>
              <View style={{flexDirection:"row", justifyContent: 'center'}}>
                <View>
                  <Text style={[styles.text,{width: 130}]}>Nome do Professor:</Text>
                </View>
                <View>
                  <TextInput
                    style={[styles.textInput]}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </View>
              </View>
              <View style={{flexDirection:"row", justifyContent: 'center'}}>
                <View>
                  <Text style={[styles.text,{width: 130}]}>Nome da Disciplina:</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text2) => this.setState({text2})}
                    value={this.state.text2}
                  />
                </View>
              </View>

              <Text style={[styles.text,{marginLeft: 20}]}>Tipo de recurso:</Text>
              <Picker
                selectedValue={this.state.language}
                style={styles.picker}
                mode = "dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Listas" color='#F28864' fontFamily = 'Kanit' value="listas" />
                <Picker.Item label="Provas" color='#F28864'  value="provas" />
                <Picker.Item label="Material" color='#F28864' value="material" />
                <Picker.Item label="Outros" color='#F28864'  value="outros" />
              </Picker>
              <View style={{flexDirection:"row", justifyContent: 'center', paddingTop: -80, paddingRight: 60}}>
                <View>
                  <Text style={[styles.text,{width: 40}]}>Tags:</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text3) => this.setState({text3})}
                    value={this.state.text3}
                  />
                </View>
              </View>
              <TouchableOpacity style = {styles.button}>
                <Text style = {{backgroundColor: '#965D5D', color: 'white', fontFamily: 'Kanit', paddingHorizontal: 20}}>
                  Buscar Arquivos
                </Text>
              </TouchableOpacity>
              <View style={{justifyContent:"flex-end", flexDirection: 'row'}}>
                <TouchableOpacity style = {[styles.button , {justifyContent: "flex-start"}]}
                  onPress={() => this.props.navigation.navigate('Calc')}>
                  <Text style = {{
                      backgroundColor: 'white', 
                      color: '#F28864', 
                      fontFamily: 'Kanit', 
                      paddingHorizontal: 20, 
                      borderColor: '#F28864',
                      borderWidth: 0.5,
                      padding: 10
                    }}>
                    Voltar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.button , {justifyContent: "flex-end"}]}
                onPress={() => this.props.navigation.navigate('Calc')}>
                  <Text style = {{
                      backgroundColor: '#F28864', 
                      color: 'white', 
                      fontFamily: 'Kanit', 
                      paddingHorizontal: 10, 
                      borderColor: '#F28864',
                      borderWidth: 0.5,
                      padding: 10
                    }}>
                    Adicionar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }
  }
  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'Kanit': require('./assets/fonts/Kanit/Kanit-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

class MenuCalc extends React.Component {
  constructor(props){
      super(props);
      this.botoes = [
          {name:"+" , img:"calc1", bgColor:"rgba(242, 136, 100, 0.32)" ,brColor:"#F28864" , click:() => {props.navigation.navigate('Sub')}},
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

class BotaoMenuLateral extends React.Component {
  constructor(props){
      super(props);
      this.nome = props.attr.name;
      //this.img = "asset:/" + props.attr.img;
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

class menuScreen extends React.Component{
	constructor(props){
		super(props);
		this.botoes = [
			{name:"+", img:"calc1", bgColor:"rgba(242, 136, 100, 0.32)", brColor:"#F28864", click:() => {props.navigation.navigate('Sub')}},
			{name:"calc", img:"calc1", bgColor:"rgba(250, 243, 108, 0.56)", brColor:"#FAF36C", click:() => {props.navigation.navigate('Calc')}},
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
class TelaInicial extends React.Component {
  render(){
      return(
          <ImageBackground source={require('./assets/plano.png')} style={styles.root1}>
              <TouchableHighlight style={styles.button2} onPress={() => this.props.navigation.navigate('Main')}>
                  <Text style={styles.text1}>Iniciar</Text>
              </TouchableHighlight>
          </ImageBackground>
      );
  }
};


const AppNavigator = createStackNavigator({
  Sub: {
    screen: HomeScreen
  },
  Calc:{
    screen: MenuCalc
  },
  Main:{
    screen: menuScreen
  },
  Init:{
    screen: TelaInicial
  },
}, {
    initialRouteName: "Init"
  
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  root1:{
    backgroundColor: '#ccc',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2:{
    marginTop: '70%',
    width: 100,
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'transparent',
    borderStyle:'solid',
    borderWidth:3,
    borderColor:'#FFF',
  },
  text1:{
    textAlign: 'center',
    color:"#FFF",
  },
  peso2:{
    flex:2
  },
  peso4:{
    flex:4
  },
  peso1:{
    flex:1
    },
  containerBotao:{
    backgroundColor:"#000",
  },
  textInput: {
    marginTop: 17,
    height: 20,
    width: 100,
    borderBottomColor: '#F28864',
    fontFamily: 'Kanit',
    borderBottomWidth: 1,
    justifyContent:"center",
    marginRight: 100,
  },
  textHeader: {
    paddingTop: 30,
    fontFamily: 'Kanit',
    fontSize: 24,
    color: '#F28864',
    textAlign: "center", 
  },
  text: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Kanit',
    color: 'brown'
  },
  picker: {
    fontFamily: 'Kanit',
    color: 'brown',
    marginLeft: 10,
    justifyContent: 'center',
    height: 40, 
    width: 250,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    width: 250,
    padding: 10,
    marginBottom: 20
  },
  root:{
    paddingTop:Expo.Constants.statusBarHeight,
    flex:1,
    backgroundColor: '#FFF7DF'
  },
  container1:{
    flex:1,
  },
  container: {
	  flex: 1,
	  paddingTop: Expo.Constants.statusBarHeight,
	  backgroundColor: '#FFF7DF',
	}
});