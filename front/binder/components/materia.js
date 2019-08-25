import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IcoLi } from './icoLi';

export class Materia extends React.Component{
    constructor(props){
        super(props)
        this.materia = props.materia;
        this.prof = props.prof;
        this.atendimento = props.atendimento;
    };

    render (){
        return (
            <View style={styles.cotainerMateria}>
                <Text style={styles.titulo}>{this.materia}</Text>
                <Text style={styles.texto}>{this.prof} - Atendimento</Text>
                <Text style={styles.texto}>{this.atendimento}</Text>
                <View style={styles.linha}>
                    <IcoLi titulo="lista1.pdf"/>
                    <IcoLi titulo="lista4.pdf"/>
                </View>
                <View style={styles.linha}>
                    <IcoLi titulo="listaLivros.pdf"/>
                    <IcoLi titulo="lista6.pdf"/>
                </View>
                </View>
        );
    };
};

const styles = StyleSheet.create({
    cotainerMateria:{
        flex:1,
        alignItems:'center',
        backgroundColor:"rgba(250, 243, 108, 0)",
    },
    titulo:{
        color:"#F28864",
        fontSize:20,
        fontWeight:'bold',
    },
    texto:{
        color:"#965D5D",
    },
    linha:{
        flexDirection:'row',
        marginTop:4,
    },
});
