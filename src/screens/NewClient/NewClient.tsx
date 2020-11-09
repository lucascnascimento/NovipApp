/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import {ScrollView} from 'react-native-gesture-handler';
import {useFormik} from 'formik';
import {format} from 'date-fns';
import * as Yup from 'yup';

import {Props} from './types';
import {states} from '../../assets/states';
import {cpfMask, validateCpf} from '../../utils/cpfMask';
import {rgMask, validateRg} from '../../utils/rgMask';
import {phoneMask} from '../../utils/phoneMask';
import {cellphoneMask} from '../../utils/cellphoneMask';

import {
  SafeContainer,
  RgFields,
  RgInput,
  RgUFPicker,
  DateView,
  DateTextInput,
  TouchableOpacityButton,
  ButtonText,
} from './styles';
import PhoneField from '../../components/PhoneField';

const NewClient: React.FC<Props> = ({route}: Props) => {
  const {uf} = route.params;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [countPhone, setCountPhone] = useState(1);
  const [countCellphones, setCountCellphones] = useState(1);

  // Form initial values
  const initialValues = {
    name: '',
    cpf: '',
    rg: '',
    rgUf: states[0],
    birth: format(new Date(), "dd 'de' MMM 'de' uuuu"),
    phones: [] as Array<string>,
    cellphones: [] as Array<string>,
    createdAt: new Date(),
  };

  // Form validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('*Obrigatório'),
    cpf: Yup.string().matches(validateCpf).required('*Obrigatório'),
    rg: Yup.string().matches(validateRg).required('*Obrigatório'),
    rgUf: Yup.string().max(2),
    birth: Yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => Alert.alert('Chamada à API', JSON.stringify(values)),
  });

  // Handle DatePicker selection
  const handleDateChange = (event: Event, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      formik.setFieldValue(
        'birth',
        format(selectedDate, "dd 'de' MMM 'de' uuuu"),
      );
    }
  };

  // Render Phones Dynamic fields
  const renderPhones = () => {
    const elements = [];
    for (let index = 0; index < countPhone; index++) {
      elements.push(
        <PhoneField
          key={`phone_${index}`}
          label="Telefone"
          onChangeText={(text) => {
            formik.setFieldValue(`phones[${index}]`, phoneMask(text));
          }}
          value={formik.values.phones[index]}
          minusAction={() => {
            if (index !== 0) {
              formik.values.phones.splice(index, 1);
              setCountPhone(countPhone - 1);
            }
          }}
          plusAction={() => setCountPhone(countPhone + 1)}
        />,
      );
    }
    return elements;
  };

  // Render CellPhones Dynamic fields
  const renderCellphones = () => {
    const elements = [];
    for (let index = 0; index < countCellphones; index++) {
      elements.push(
        <PhoneField
          key={`cellphone_${index}`}
          label="Celular"
          onChangeText={(text) => {
            formik.setFieldValue(`cellphones[${index}]`, cellphoneMask(text));
          }}
          value={formik.values.cellphones[index]}
          minusAction={() => {
            if (index !== 0) {
              formik.values.phones.splice(index, 1);
              setCountCellphones(countPhone - 1);
            }
          }}
          plusAction={() => setCountCellphones(countPhone + 1)}
        />,
      );
    }
    return elements;
  };

  return (
    <SafeContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
          label="Nome"
          placeholder="Nome"
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
          onBlur={formik.handleBlur('name')}
          error={!!formik.errors.name && formik.touched.name}
          style={{marginTop: 24}}
        />
        <HelperText
          type="error"
          visible={!!formik.errors.name && formik.touched.name}>
          {formik.errors.name}
        </HelperText>

        <TextInput
          label="CPF"
          placeholder="111.111.111-11"
          onChangeText={(text) => {
            formik.setFieldValue('cpf', cpfMask(text));
          }}
          value={formik.values.cpf}
          onBlur={formik.handleBlur('cpf')}
          error={!!formik.errors.cpf && formik.touched.cpf}
        />
        <HelperText
          type="error"
          visible={!!formik.errors.cpf && formik.touched.cpf}>
          {formik.errors.cpf}
        </HelperText>

        {uf === 'SC' && (
          <View>
            <RgFields>
              <RgInput
                label="RG"
                placeholder="11.111.111"
                onChangeText={(text) => {
                  formik.setFieldValue('rg', rgMask(text));
                }}
                value={formik.values.rg}
                onBlur={formik.handleBlur('rg')}
                error={!!formik.errors.rg && formik.touched.rg}
              />
              <RgUFPicker
                selectedValue={formik.values.rgUf}
                onValueChange={(itemValue, _) =>
                  formik.setFieldValue('rgUf', itemValue)
                }
                style={{height: 50, width: 100}}>
                {states.map((state) => (
                  <RgUFPicker.Item label={state} value={state} key={state} />
                ))}
              </RgUFPicker>
            </RgFields>
            <HelperText
              type="error"
              visible={!!formik.errors.rg && formik.touched.rg}>
              {formik.errors.rg}
            </HelperText>
          </View>
        )}

        <DateView>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
              maximumDate={new Date()}
            />
          )}
          <DateTextInput
            label="Data de nascimento"
            placeholder="Data de nascimento"
            disabled
            value={formik.values.birth}
            onBlur={formik.handleBlur('birth')}
          />
          <TouchableOpacityButton onPress={() => setShowDatePicker(true)}>
            <ButtonText>+</ButtonText>
          </TouchableOpacityButton>
        </DateView>

        {renderPhones()}

        {renderCellphones()}

        <Button
          mode="contained"
          onPress={formik.handleSubmit}
          style={{marginBottom: 24}}>
          Cadastrar
        </Button>
      </ScrollView>
    </SafeContainer>
  );
};

export default NewClient;
