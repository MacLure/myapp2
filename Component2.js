import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

type Props = {};
export default class Component1 extends Component<Props> {
  render() {
    const characters2 = [
      {id: 123, key:'Michael Scott',profession:'Regional Manager'},
      {id: 234, key:'Dwight Schrute',profession:'Assistant to the Regional Manager'},
      {id: 345, key:'Jim Halpert',profession:'Sales'},
      {id: 456, key:'Pam Beesly',profession:'Receptionist'},
      {id: 567, key:'Ryan Howard',profession:'Intern'},
      {id: 678, key:'Andy Bernard',profession:'Accounting'},
      {id: 789, key:'Meredith Palmer',profession:'Accounting'},
      {id: 890, key:'Stanley Hudson',profession:'Accounting'},
      {id: 901, key:'Angela Martin',profession:'Accounting'},

    ]
    return (
      <View style={styles.container}>
        { characters2.length > 0 ?
          <FlatList data={characters2} renderItem={({item}) => (
            <View style={{borderBottomColor:'#999', padding:10}}>
            <Text style={{fontSize:60, fontWeight:'bold', color:'#333'}}>
              {item.key}
            </Text>
            <Text style={{fontSize:36, color:'#999'}}>
            {item.profession}
            </Text>
          </View>

          )} /> // FlatLists and Section Lists render items only as they become visible
          :
          <Text style={{fontSize:48, color:'red'}}>No Characters Available</Text>
        }
      </View>
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
