import { useState } from "react";
import { CustomView } from "../../components/ui/CustomView"
import { Switch } from "react-native";
import { Card } from "../../components/ui/Card";
import { CustomSwitch } from "../../components/ui/CustomSwitch";

export const SwitchScreen = () => {
  const [ state, setState ] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  return (
    <CustomView styles={{ marginTop: 100, paddingHorizontal: 10 }}>
      <Card>
        <CustomSwitch 
          isOn={ state.isActive }
          onChange={ ( value ) => setState({ ...state, isActive: value }) }
          text="¿Esta Activo?"
        />
        
        <CustomSwitch 
          isOn={ state.isHungry }
          onChange={ ( value ) => setState({ ...state, isHungry: value }) }
          text="¿Tiene Hambre?"
        />

        <CustomSwitch 
          isOn={ state.isHappy }
          onChange={ ( value ) => setState({ ...state, isHappy: value }) }
          text="¿Es Feliz?"
        />
      </Card>
    </CustomView>
  )
}
