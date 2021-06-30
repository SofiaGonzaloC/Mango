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
                    placeholderTextColor={Colors.white}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '95%',
        marginTop: 10,
        color: Colors.white,
    },
    TextInput:{
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        backgroundColor: Colors.red,
        color: Colors.blue,
    },
});

export default BadgesSearch;
