import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/imagens/logo.png')}
        style={styles.logo}
      />
      
      <Text style={styles.title}>Faça seu cadastro</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu endereço de email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Insira seu telefone"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('TabRoutes')}
      >
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Faça login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    gap: 15,
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#666',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: '#666',
    fontSize: 14,
  },
  loginLink: {
    color: '#666',
    fontSize: 14,
    fontWeight: '600',
  }
});
