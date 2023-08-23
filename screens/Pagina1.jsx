import React from 'react'
import Card from '../components/Card'
import { Button, Text } from 'react-native'

const Pagina1 = () => {
  return (
    <>
    <Card titulo = "Sem conteúdo"/>
      <Card titulo = "Mobile">
        <Text>React Native</Text>
      </Card>


      <Card titulo = "Principal" nome="Vitor">
          <Text>Parágrafo 1</Text>
          <Text>Parágrafo 1</Text>
          <Text>Parágrafo 1</Text>
          <Button title='Detalhes'/>
      </Card>

      <Card titulo = "Parágrafo" nome = "Mariana"></Card>
      
      <Card titulo = "Cruzeiro"></Card>

    </>
  )
}

export default Pagina1