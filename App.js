import * as React from 'react';
import { Text, TextInput,View} from 'react-native';
import firebase from 'firebase'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      fortitle:''
    };
  }
  render() {
    return (
      <View>
      <TextInput
        style={{
          backgroundColor: 'white',
          width: 200,
          height: 50,
          marginLeft:50,
        }}
        onChangeText={title=>this.setState({title:this.state.title})}
        placeholder={'          Write your problem'}
                multiline={true}
        numberOfLines={10}
      />
           <TextInput
        style={{
          backgroundColor: 'white',
          width: 200,
          height: 50,
          marginTop:350,
          marginLeft:50,
        }}
        onChangeText={title=>this.setState({title:this.state.fortitle})}
        placeholder={'             Suggestions'}
        multiline={true}
        numberOfLines={10}
      />
      </View>
      
    );
  }
}
