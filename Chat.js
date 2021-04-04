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
import { GiftedChat } from 'react-native-gifted-chat';


class Chat extends Component {

    render() {

        const { navigation } = this.props;

        return <GiftedChat />;

    }
}
export default Chat;