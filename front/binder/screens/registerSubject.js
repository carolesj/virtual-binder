import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, Picker, Button, TouchableOpacity } from 'react-native';
import { AppLoading, Asset, Icon } from 'expo';
import * as Font from 'expo-font';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      text2: '',
      text3: '',
    };
  } 

  render() {
    return(
      <View style={{backgroundColor: '#FAF36C50', flex: 1}}>
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
          <TouchableOpacity style = {[styles.button , {justifyContent: "flex-start"}]}>
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
          <TouchableOpacity style = {[styles.button , {justifyContent: "flex-end"} ]}>
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
const styles = StyleSheet.create({
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
  }
});