import React from 'react';
import { StyleSheet , Image , Text ,View } from 'react-native';


export class IcoLi extends React.Component {
    constructor(props){
        super(props);
        this.titulo = props.titulo;
    };

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../assets/pdf.png')}  style={{width:80 , height:80}}/>
                <Text style={styles.texto}>{this.titulo}</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container:{
        margin:5,
        alignItems:'center',
    },
    texto:{
        color:"#F28864",
    },
});
