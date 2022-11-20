import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider } from 'react-native-paper';
import styles from './styles';

const RepositoryListMenu = ({ listOrder, setListOrder }) => {
  const [visible, setVisible] = React.useState(false);

  const lowest = 'Lowest Rated Repositories';
  const highest = 'Highest Rated Repositories';
  const latest = 'Latest Repositories';
  
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const menuSelection = (title) => {
    closeMenu();
    setListOrder(title);
  };

  const anchorButton = (
    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
      <Button contentStyle={styles.menuBtnHeight} labelStyle={styles.menuBtn} onPress={openMenu}>{listOrder}</Button>
      <Button icon={'dots-vertical'} labelStyle={styles.menuBtn} onPress={openMenu}></Button>
    </View>
  )
  

  return (
      <View
         style={{
          flexDirection: 'column', 
          alignContent: 'space-between',
          backgroundColor: '#767676',
        }}
      >
        <Menu
          style={styles.menu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={anchorButton}
          anchorPosition={'bottom'}
        >
          <Menu.Item style={styles.test} onPress={() => { }} title='Select an item...' titleStyle={styles.menuSelection} />
          <Divider />
          <Menu.Item onPress={() => menuSelection(latest)} title={latest} />
          <Divider />
          <Menu.Item onPress={() => menuSelection(highest)} title={highest} />
          <Divider />
          <Menu.Item onPress={() => menuSelection(lowest)} title={lowest} />
        </Menu>
      </View>
)
};

export default RepositoryListMenu;