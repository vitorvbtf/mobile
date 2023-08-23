import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import { Botoes } from './components/Botoes';
import Pagina1 from './screens/Pagina1';
import Pagina2 from './screens/Pagina2';




export default function App() {
  return (
    <ScrollView style={{marginTop: 50}}>

      <Pagina2/>

      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom:20
  },
  titulo: {
    color: 'white',
    borderBottomColor: 'red',
    fontSize: 30,
    borderStyle:'dashed',
    borderWidth: 1,
    borderTopLeftRadius: 2,
    padding: 20,
    marginBottom:30,
    fontFamily: "arial",
    textAlign:'center',
    backgroundColor:'red'
  }, 
  texto:{
    fontSize:18,
    textAlign: 'center'
  }
});

