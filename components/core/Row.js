// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Spacer from './Spacer';

type Props = {|
  children: React.Node,
  rhythm?: number,
|};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
});

class Row extends React.PureComponent<Props> {
  render() {
    const { children, rhythm } = this.props;
    return (
      <View style={styles.view}>
        <Spacer rhythm={rhythm}>{children}</Spacer>
      </View>
    );
  }
}

export default Row;
