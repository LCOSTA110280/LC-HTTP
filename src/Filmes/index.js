import React, {Component} from 'react';
import { Text, View} from 'react-native';

class Filmes extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.data.nome}</Text>
            </View>

        );
    }
}

export default Filmes;