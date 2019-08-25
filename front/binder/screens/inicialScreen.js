import React from 'react';
import { StyleSheet , Text , ImageBackground , TouchableHighlight ,View} from 'react-native';

export class TelaInicial extends React.Component {
    render(){
        return(
            <ImageBackground source={require('./assets/plano.png')} style={styles.root}>
                <View style={styles.peso5}>
                </View>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.text}>Iniciar</Text>
                </TouchableHighlight>
            </ImageBackground>
        );
    }
};


const styles = StyleSheet.create({
    root:{
        backgroundColor: '#ccc',
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        width:'50%',
        marginTop:'70%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'transparent',
        borderStyle:'solid',
        borderWidth:3,
        borderColor:'#FFF',
    },
    text:{
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

});
