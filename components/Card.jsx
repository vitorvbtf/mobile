import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Text } from 'react-native'

const Card = (props) => {

 

  return (
    <>
      <View style={styles.card}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        {props.children}

        <StatusBar style="auto" />
      </View>
    </>
  )
}

export default Card



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

  