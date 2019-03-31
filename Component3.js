import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

type Props = {};
export default class Component3 extends Component<Props> {
  constructor(props) {
    super(props)

    this.state={
      myval:'abc123'
    }

  }
  // getDerivedStateFromProps(props, state)
  // componentDidMount() - geolocation, fetch
  // shouldComponentUpdate(props, state)
  // componentDidUpdate() - geolocation, fetch
  // componentWillUnmount()

  changeSomething = (e) => {
    this.setState({
      val: Date.now()
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:24}}>React Component Lifecycle Methods</Text>
        <Button title="Change Something" onPress={this.changeSomething} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
