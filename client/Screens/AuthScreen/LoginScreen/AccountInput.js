import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { connect, useSelector, useDispatch } from 'react-redux';
import axios from 'axios';


import { Register as styles } from '../RegisterScreen/Styles'
import { API_IP } from '../../../constants.js';
import { login } from '../../../Redux/actions';

const loginEndpoint = `http://${API_IP}/user/login/password`;

export default function AccountInput(){
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const screen = useSelector(state => state.authScreen);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
     console.log('endpoint', loginEndpoint);
     console.log('username', username);
     console.log('password', password);
  }

  axios.post(loginEndpoint, {
    username: username,
    password: password
  })
  .then(function (response) {
    dispatch(login())
    console.log('successfully sent login data to backend');
  })
  .catch(function (error) {
    console.log('error sending login', error);
    console.log(error.response.data)
  });



  const handleForgotPassword = async () => {
    console.log('handleForgotPassword was called');
  }

  const handleSignUpRedirect= async () => {
    console.log('handleSignUpRedirect was called');
  }

  return (
    <View style={styles.fields}>
    <Text>Account name</Text>
    <TextInput
      style={styles.field}
      onChangeText={text => setUsername(text)}

    />
    <Text>Password</Text>
    <TextInput
      style={styles.field}
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}

    />
    <Button title={'ForgotPassword'} onPress={() => handleForgotPassword()}>Forgot password?</Button>

    <Button title={'Continue'} onPress={() => handleLogin()}>Continue</Button>
    <Text>Don't have an account?</Text>
    <Button title={'SignUp'} onPress={() => handleSignUpRedirect()}>Sign Up</Button>

    </View>
  )




}