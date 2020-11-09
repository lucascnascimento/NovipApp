import React from 'react';

import {
  TouchableOpacityButton,
  DynamicInput,
  ButtonGroup,
  ButtonText,
  DynamicInputView,
} from './styles';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  plusAction: () => void;
  minusAction: () => void;
}

const PhoneField: React.FC<Props> = ({
  label,
  value,
  onChangeText,
  plusAction,
  minusAction,
}) => {
  return (
    <DynamicInputView>
      <DynamicInput
        label={label}
        placeholder={label}
        key={label}
        onChangeText={onChangeText}
        value={value}
      />
      <ButtonGroup>
        <TouchableOpacityButton onPress={plusAction} key={`${label}Plus`}>
          <ButtonText>+</ButtonText>
        </TouchableOpacityButton>
        <TouchableOpacityButton onPress={minusAction} key={`${label}Minus`}>
          <ButtonText>-</ButtonText>
        </TouchableOpacityButton>
      </ButtonGroup>
    </DynamicInputView>
  );
};

export default PhoneField;
