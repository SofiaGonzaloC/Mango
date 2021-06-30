import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native'
import Colors from '../../res/Colors'
import Http from '../../libs/http'

class BadgesEdit extends React.Component {

    state = {
        loading: false,
        badge: {},
        form: {},
    }

    componentDidMount() {
        this.getBadge()
    }

    getBadge = () => {
        const { item } = this.props.route.params
        this.setState({ badge: item })
        this.props.navigation.setOption({ title: `Edit ${item.name}` })
    }

    handleSubmit = async () =>{
        await Http.instance.put(this.state.badge._id, this.state.form)
        this.props.navigation.replace('Badges')
    }

    render() {

        const { badge, loading } = this.state;

        if (loading === true) {
            return (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator
                        style={styles.loader}
                        color="#234144"
                        size="large"
                    ></ActivityIndicator>
                </View>
            )
        }

        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Image style={styles.header} source={{ uri: `${badge.header_img_url}` }}></Image>
                    <Image style={styles.profileImage} source={{ uri: `${badge.profile_picture_url}` }}></Image>
                    <View style={styles.form}>
                        <Text style={styles.inputText}>{badge.name}</Text>
                        <TextInput
                            style={styles.form}
                            placeholder={`${badge.name}`}
                            onChangeText={text => {
                                this.setState(prevState =>{
                                    let form = Object.assign({}, prevState.form);
                                    form.name = text;
                                    return {form};
                                })
                            }}
                        />
                        <Text style={styles.inputText}>{badge.age}</Text>
                        <TextInput
                            style={styles.form}
                            placeholder={`${badge.age}`}
                            onChangeText={text => {
                                this.setState(prevState =>{
                                    let form = Object.assign({}, prevState.form);
                                    form.age = text;
                                    return {form};
                                })
                            }}
                        />
                        {/* City */}
                        <Text style={styles.inputText}>{badge.ciy}</Text>
                        <TextInput
                            style={styles.form}
                            placeholder={`${badge.city}`}
                            onChangeText={text => {
                                this.setState(prevState =>{
                                    let form = Object.assign({}, prevState.form);
                                    form.city = text;
                                    return {form};
                                })
                            }}
                        />
                        <Text style={styles.inputText}>Followers</Text>
                        <TextInput
                            style={styles.form}
                            placeholder={`${badge.follower}`}
                            onChangeText={text => {
                                this.setState(prevState =>{
                                    let form = Object.assign({}, prevState.form);
                                    form.follower = text;
                                    return {form};
                                })
                            }}
                        />
                        <Text style={styles.inputText}>Likes</Text>
                        <TextInput
                            style={styles.form}
                            placeholder={`${badge.likes}`}
                            onChangeText={text => {
                                this.setState(prevState =>{
                                    let form = Object.assign({}, prevState.form);
                                    form.likes = text;
                                    return {form};
                                })
                            }}
                        />
                        <Text style={styles.inputText}>Posts</Text>
                        <TextInput
                            style={styles.form}
                            placeholder={badge.post ? `${badge.post}` : '0'}
                            onChangeText={text => {
                                this.setState(prevState =>{
                                    let form = Object.assign({}, prevState.form);
                                    form.post = text;
                                    return {form};
                                })
                            }}
                        />
                        <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
                            <Text style={styles.submitText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.red,
    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        margin: 20,
        width: '90%',
        height: 'auto',
        backgroundColor: Colors.white,
        borderRadius: 20,
    },
    form: {
        paddingHorizontal: 20,
    },
    header: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 75,
        borderWidth: 3,
        borderColor: Colors.black,
        position: 'absolute',
        top: 25,
        left: '28%',
    },
    input: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.yellow,
    },
    inputText:{
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
    },
    submitText: {
        fontSize: 16,
        margin: 5,
        textAlign: Colors.white,
        textAlign: 'center',
    }
});

export default BadgesEdit