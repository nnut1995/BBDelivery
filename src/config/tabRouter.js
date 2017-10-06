import React, { PureComponent } from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap, TabViewPagerScroll } from 'react-native-tab-view';
// import { width, height, totalSize } from 'react-native-dimension';
import Drink from '../components/home/drink'
import Food from '../components/food/foodRender'
import Checkout from '../components/checkout/Checkout'
import Profile from '../components/home/profile'

const FirstRoute = () => <Drink />;
const SecondRoute = () => <Food />;
const ThirdRoute = () => <Checkout />;
const FourthRoute = () => <Profile />;


export default class TabViewExample extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Drink' },
      { key: '2', title: 'Food' },
      { key: '3', title: 'Checkout' },
      { key: '4', title: 'Profile' },

    ],
  };

  _handleIndexChange = index => this.setState({ index });

  // _renderPager = (props) => {
  //  return (Platform.OS === 'ios') ? <TabViewPagerScroll {...props} /> : <TabViewPagerPan {...props} />
  // }

  _renderHeader = props => <TabBar {...props} />;

//   _initialLayout = {
//   height: 10,
//   width: Dimensions.get('window').width,
// };

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
    '4': FourthRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={this._initialLayout}
        // renderPager={this._renderPager}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
