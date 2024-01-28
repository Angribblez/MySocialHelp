//imports
import { StyleSheet } from 'react-native';

//styles
const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFF0DB',
    },
    titleBar: {
        marginTop: 10,
        flex: 0.1,
        backgroundColor: '#2A3C2C',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        width: '90%'
    },
    titleText: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 30,
        color: '#FEF196',
        fontWeight: 'bold',
    },
    ageBar: {
        flex: 0.4,
        alignSelf: 'center',
        borderRadius: 15,
        width: '90%'
    },
    ageRow: {
        height: '50%',
        flexDirection: 'row'
    },
    ageButton: {
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        backgroundColor: '#2A3C2C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: '80%',
        width: '45%'
    },
    menuButton: {
        marginTop: 5,
        marginBottom: 5,
        flex: 0.15,
        backgroundColor: '#2A3C2C',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: '90%'
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20,
        width: '90%'
    },
    ageScreenImageHolder: {
        flex: 0.4,
        marginTop: 10,
        marginBottom: 5,
        alignSelf: 'center',
        width: '90%'
    },
    ageScreenMenu: {
        flex: 0.5
    },
    ageScreenMenuButtonHolder :{
        width: '90%',
        flex: 0.33,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5
    },
    ageScreenMenuButtonSplit: {
        height: '100%',
        backgroundColor: '#2A3C2C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: '47.5%'
    },
    ageScreenMenuButton: {
        marginTop: 5,
        marginBottom: 5,
        flex: 0.33,
        backgroundColor: '#2A3C2C',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: '90%'
    },
    essayScroll: {
        flex: 0.9,
    },
    essayText: {
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        width: '90%'
    },
});

//export
module.exports = styles;