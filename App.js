/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

var usersData = [];
var userTransactions = [];


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      finalResultArr: [],
      transactions:'',
      users: '',
      text: '',
      viewSection: false,
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

  

  handleTransactions = text => {
    this.setState({ transactions: text });
  };
  handleUsers = text => {
    this.setState({ users: text });
  };



  findMerchantTransactionCount(userTransactions) {
    var arrayToShow =[];
    const merchantTransCount = userTransactions.reduce(function(result, value) {
      if  (!result[value.merchant]) {
        result[value.merchant] = 1;
    
      } else  {
        result[value.merchant] = result[value.merchant] + 1;
       

      }
      return result;
    }, {});
    
    for (let [key, value] of Object.entries(merchantTransCount)) {
       arrayToShow.push("{" + key + ":" + value + "}");
      
    }
    this.setState({
      finalResultArr: "[" + arrayToShow + ']',
      viewSection:true
    });
  }



  findUserHappinessPercentage(userTransactions, usersData) {

    //update the reflected value
    const updated = userTransactions.map(item => {
      var temp = Object.assign({}, item);
      if (temp.reflected === 'GOOD') {
        temp.reflected = 100;
      } else if (temp.reflected === 'BAD') {
        temp.reflected = -100;
      } else {
        temp.reflected = 0;
      }
      return temp;
    });
    

    //calculate the frequency of reflected for each user
    const freq = userTransactions.reduce(function(result, value) {
      if (!result[value.user_id]) {
        if (value.reflected === "NEUTRAL") result[value.user_id] = 0;
        else result[value.user_id] = 1;
      } else  {
        if  (value.reflected === 'NEUTRAL')
          result[value.user_id] = result[value.user_id] + 0;
        else result[value.user_id] = result[value.user_id] + 1;
      }

    return result;
    }, []);

    
    //calculate the value of Happiness for each user
    const reducedTrans = userTransactions.reduce(function(result, value) {
      if (!result[value.user_id]) {

        if (value.reflected === "GOOD") result[value.user_id] = 100;
        else if (value.reflected === "BAD") result[value.user_id] = -100;
        else result[value.user_id] = 0;

      } 
      else  {

        if(value.reflected === 'GOOD')
        result[value.user_id] = result[value.user_id]+100;

        else if(value.reflected === 'BAD')
          result[value.user_id] = result[value.user_id] - 100 ;

        else result[value.user_id] = result[value.user_id] + 0 ;
      }

      return result;
    }, []);
    

    // map the values of Happiness with respective user name
    var sum = reducedTrans.map(function(num, idx) {
      return num / freq[idx];
    });

    
    var arrayToShow = [];
    var resultArray = usersData.reduce(function(result, value) {
    for (let i = 0; i < sum.length; i++) {
        if (value.id === i) {
          result[value.name] = sum[i] + '%';
          arrayToShow.push("{" + value.name + ":" + result[value.name] + "}");

  }
      }
      
      return result;
    }, []);

    this.setState({
      finalResultArr: "[" + arrayToShow + ']',
      viewSection:true
    });
}


  finalresult(test) {

if(this.state.users == [] && this.state.transactions == [])
 {
  alert("Please Enter Endpoints")
 }
 else if(this.state.transactions != [] && this.state.users == [])
 {
     
   userTransactions = JSON.parse(this.state.transactions);
   this.findMerchantTransactionCount(userTransactions)
 }
 else
 {
   
 
  userTransactions = JSON.parse(this.state.transactions);
  usersData =  JSON.parse(this.state.users);
   this.findUserHappinessPercentage(userTransactions,usersData);
 }
 
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
    marginTop: 40
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    alignItems:'center'
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems:'center'
  },
  submitButtonText: {
    color: 'white',
    
  },
  resultText: {
    margin: 15,
    fontSize: 20,
  },
});
