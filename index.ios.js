import { AppRegistry } from 'react-native';
import App from './app/app';

// export default class EatMe extends Component {
//   render() {
//     return (
//       <Provider store={createStore(reducers)}> // provider works with the store. translates the data in the store to be used by react
//         <View>
//           <AddItemScreen />
//         </View>
//       </Provider>
//     );
//   }
// }

AppRegistry.registerComponent('EatMe', () => App);
