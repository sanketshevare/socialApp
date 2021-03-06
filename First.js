import {
    View,
    Button,
    TextInput,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    ImageBackground,

} from "react-native";


class First extends Component {

    render() {


        const { navigation } = this.props;



        return (
            <ImageBackground style={{ flex: 1, }} source={require('./assets/back.png')}>
                <Text style={{ fontSize: 50, color: 'pink', textAlign: 'center', paddingTop: 20 }}>SocialApp</Text>
            </ImageBackground>
}
