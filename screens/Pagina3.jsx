import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const Pagina3 = () => {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <>
    <Card style= {{marginBottom:10}}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>

  <Card style= {{marginBottom:10}}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  <Card style= {{marginBottom:10}}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
    </>
  )
}

export default Pagina3