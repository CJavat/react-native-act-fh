import prompt from "react-native-prompt-android";


interface Options {
  title: string;
  subTitle: string;
  buttons: PromptButton[];
  promptType?: 'default' | 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: "cancel" | "default" | "destructive";
}

export const showPropmt = ( { buttons, promptType = 'plain-text', subTitle, title, placeholder, defaultValue }: Options ) => {
  prompt(
    title,
    subTitle,
    buttons,
    {
      type: promptType,
      cancelable: false,
      defaultValue,
      placeholder
    }
  );
};