import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { GoBackIcon } from '../Icons/Icons';

export function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <GoBackIcon />
    </TouchableOpacity>
  );
}
