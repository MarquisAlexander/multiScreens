import { Dimensions } from 'react-native';
import {StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    ViewCard: {
        backgroundColor: '#E5E5E5',
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
    },
    titleComment: {

    },
    infoUser: {
        fontSize: 14,
        color: '#707070',
    },
    titleText: {
        fontSize: 12,
        color: '#000',
    },
    commentText: {
        fontSize: 14,
        color: '#707070',
        marginTop: 10,
    },

    //styles for dark mode

    ViewCardDark: {
        backgroundColor: '#707070',
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
    },
    commentTextDark: {
        fontSize: 14,
        color: '#fff',
        marginTop: 10,
    }
});

export default styles;