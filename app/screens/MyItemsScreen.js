import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer } from '../components/common';
import ListView from '../components/ListView';
import PushController from '../components/PushController'

class MyItemsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <ListView deleteItem={this.deleteItem}/>
        </UpperContainer>
        <LowerContainer>
          <SubmitButton onPress={() => Actions.add() }>
            ADD ITEM
          </SubmitButton>
        </LowerContainer>
        <PushController />
      </ViewContainer>
    );
  }

}

export default MyItemsScreen;
