import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import Colors from '../../res/Colors'

class BadgesSearch extends React.Component{

    state = {
        query:'',
    }

    handleText = query =>{
        this.setState({query});
        if(this.props.onChange){
            this.props.onChange(query);
        }
    }

    render(){

        const {query} = this.state;
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.TextInput}
                    onChangeText={this.handleText}
                    value={query}
                    placeholder = "Search a badge"
                    placeholderTextColor={Colors.black}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '95%',
        marginTop: 40,
        color: Colors.black,
    },
    TextInput:{
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        backgroundColor: Colors.yellow,
        color: Colors.black,
    },
});

export default BadgesSearch;
