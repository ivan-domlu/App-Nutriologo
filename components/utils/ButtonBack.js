import { View } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import styles from '../../css/styles';

const ButtonBack = ({navigation}) => {
    return (
        <View style={styles.backButtonContainer}>
            <HeaderBackButton 
                onPress={() => navigation.goBack()} 
                tintColor='#576E40'                     
            />
        </View> 
    );
}

export default ButtonBack;