/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

const transactions = [
  {
    id: 1,
    merchant: "starbucks",
    amount: 1.78,
    date: "2018-01-01",
    reflected: "GOOD",
    user_id: 1
  },
  {
    id: 2,
    merchant: "starbucks",
    amount: 5.76,
    date: "2018-01-02",
    reflected: "GOOD",
    user_id: 1
  },
  {
    id: 3,
    merchant: "TimHortons",
    amount: 8.76,
    date: "2018-01-03",
    reflected: "NEUTRAL",
    user_id: 1
  },
  {
    id: 4,
    merchant: "TimHortons",
    amount: 5.67,
    date: "2018-01-04",
    reflected: "BAD",
    user_id: 1
  },
  {
    id: 5,
    merchant: "TimHortons",
    amount: 11.76,
    date: "2018-01-06",
    reflected: "GOOD",
    user_id: 1
  },
  {
    id: 5,
    merchant: "starbucks",
    amount: 12.36,
    date: "2018-01-07",
    reflected: "GOOD",
    user_id: 2
  },
  {
    id: 5,
    merchant: "TimHortons",
    amount: 1.45,
    date: "2018-01-08",
    reflected: "GOOD",
    user_id: 2
  },
];

const users = [{ id: 1, name: "John" }, { id: 2, name: "Luke" }];
var freq =[];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      finalResultArr: "Abhi",
      //transactions: "",
      //users: "",
      viewSection: false
    };
    
  }

  renderBottomComponent() {
    if (this.state.viewSection) {
      return (
        <View style={styles.input}>
          <Text>{this.state.finalResultArr}</Text>
        </View>
      );
    }
  }

  // componentDidMount() {

  // }

  handleTransactions = text => {
    this.setState({ transactions: text });
  };
  handleUsers = text => {
    this.setState({ users: text });
  };

  finalresult(test) {
    
    freq = transactions.reduce(function(result, value) {
      if (!result[value.merchant]) {
        result[value.merchant] = 1;
      } else {
        result[value.merchant] = result[value.merchant] + 1;
      }
      return result;
    }, []);
    console.log(JSON.stringify(freq));
    
    this.setState({
      finalResultArr: freq,
      viewSection: true

    });
    
    
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="transactions"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleTransactions}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="users"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleUsers}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.finalresult(this.state.finalResultArr)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <Text style={styles.resultText}>Results: </Text>
        {this.renderBottomComponent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    marginTop: 40,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white",
  },
  resultText: {
    margin: 15,
    fontSize: 20
  }
});
