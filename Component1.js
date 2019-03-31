import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

type Props = {};
export default class Component1 extends Component<Props> {
  render() {
    const data = {characters: [
      {id: 123, name:'Michael Scott',profession:'Regional Manager'},
      {id: 234, name:'Dwight Schrute',profession:'Assistant to the Regional Manager'},
      {id: 345, name:'Jim Halpert',profession:'Sales'},
      {id: 456, name:'Pam Beesly',profession:'Receptionist'},
      {id: 567, name:'Ryan Howard',profession:'Intern'},
      {id: 678, name:'Andy Bernard',profession:'Accounting'},
    ]}
    return (
      <ScrollView style={styles.container}>
        { data.characters.length > 0 ?
          data.characters.map(character => (
            <Character key = {character.id}
              name={character.name}
              profession={character.profession}
            />
          )):
          <Text style={{fontSize:48, color:'red'}}>No Characters Available</Text>
        }
      </ScrollView>
    );
  }
}

const Character = (props) => {
  return (
    <View style={{borderBottomColor:'#999', padding:10}}>
      <Text style={{fontSize:60, fontWeight:'bold', color:'#333'}}>
        {props.name}
    </Text>
    <Text style={{fontSize:36, color:'#999'}}>
      {props.profession}
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
