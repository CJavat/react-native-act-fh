import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  color?: string;
  size?: number;
}

export const IonIcon = ( { name, color = 'black', size = 20 }: Props ) => {
  return (
    <Icon 
      name={ name }
      size={ size }
      color={ color }
    />
  )
}
