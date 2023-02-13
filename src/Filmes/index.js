import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image} from 'react-native';

class Filmes extends Component{
    render(){
        const {nome,foto} = this.props.data
        return(
            <View>
                <View styles={styles.card}>
                    <Text styles={styles.titulo}>{nome}</Text>
                    <Image
                    source={{uri:foto}}
                    style={styles.capa}
                    >
                    </Image>            
                </View>
                <View styles={styles.AreaBotao}>
                    <TouchableOpacity styles={styles.botao} onPress={()=>alert(nome)}>
                        <Text styles={styles.botaoTexto}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    card:{
        shadowColor:'black',
        backgroundColor:'white',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        margin:15,
        shadowRadius:5,
        borderRadius:5,
        elevation:3,

    },
    titulo:{
        fontSize:18,
        padding:15,

    },
    capa:{
        height:250,
        zIndex:2,

    },
    botao:{
        width:100,
        backgroundColor:'darkblue',
        opacity:1,
        padding:8,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,

    },
    botaoTexto:{
        textAlign:'center',
        color:'white',

    },
    AreaBotao:{
        alignItems:'flex-end',
        marginTop:-40,
        zIndex:9,
        
    }
    
  })

export default Filmes;