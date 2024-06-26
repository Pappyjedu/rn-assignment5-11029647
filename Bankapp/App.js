import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load theme from storage or use default
    const storedTheme = 'light'; // Replace with actual storage loading
    setIsDarkMode(storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);

    // Save theme to storage
    // Replace with actual storage saving
    console.log('Theme switched to', newTheme);
  };

  const Home = () => (
    <View style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <Text style={styles.title}>Home</Text>
    </View>
  );

  const Settings = () => (
    <View style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Theme</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
      {/* Add other settings here */}
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Welcome back,</Text>
          <Text style={styles.headerSubtitle}>Eric Atsu</Text>
        </View>
        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('./assets/search.png')}
            style={styles.searchIconImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.chip}>
            <Image
              source={require('./assets/chip.png')}
              style={styles.chipImage}
            />
          </View>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
          <Text style={styles.cardName}>AR Jonson</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardDetail}>Expiry Date</Text>
            <Text style={styles.cardDetail}>24/2000</Text>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.cardDetail}>CVV</Text>
            <Text style={styles.cardDetail}>6986</Text>
          </View>
          <View style={styles.cardMastercard}>
            <Image
              source={require('./assets/Card.png')}
              style={styles.cardMastercardImage}
            />
            <Text style={styles.cardMastercardText}>Mastercard</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('./assets/send.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('./assets/receive.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('./assets/loan.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('./assets/topUp.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Topup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <TouchableOpacity style={styles.sellAllButton}>
          <Text style={styles.sellAllButtonText}>Sell All</Text>
        </TouchableOpacity>
        <View style={styles.transactionItem}>
          <View style={styles.transactionIcon}>
            <Image
              source={require('./assets/appstore.png')}
              style={styles.transactionIconImage}
            />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Apple Store</Text>
            <Text style={styles.transactionDescription}>Entertainment</Text>
          </View>
          <Text style={styles.transactionAmount}>- $5,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <View style={styles.transactionIcon}>
            <Image
              source={require('./assets/spotify.png')}
              style={styles.transactionIconImage}
            />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Spotify</Text>
            <Text style={styles.transactionDescription}>Music</Text>
          </View>
          <Text style={styles.transactionAmount}>- $12,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <View style={styles.transactionIcon}>
            <Image
              source={require('./assets/moneyTransfer.png')}
              style={styles.transactionIconImage}
            />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Money Transfer</Text>
            <Text style={styles.transactionDescription}>Transaction</Text>
          </View>
          <Text style={styles.transactionAmount}>$300</Text>
        </View>
        <View style={styles.transactionItem}>
          <View style={styles.transactionIcon}>
            <Image
              source={require('./assets/grocery.png')}
              style={styles.transactionIconImage}
            />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>Grocery</Text>
          </View>
          <Text style={styles.transactionAmount}>- $ 88</Text>
        </View>
      </View>
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require('./assets/home.png')}
            style={styles.bottomTabIcon}
          />
          <Text style={styles.bottomTabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require('./assets/myCards.png')}
            style={styles.bottomTabIcon}
          />
          <Text style={styles.bottomTabText}>My Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require('./assets/statistics.png')}
            style={styles.bottomTabIcon}
          />
          <Text style={styles.bottomTabText}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require('./assets/settings.png')}
            style={styles.bottomTabIcon}
          />
          <Text style={styles.bottomTabText}>Settings</Text>
        </TouchableOpacity>
      </View>
      {/* Navigation component, pass Home and Settings components for rendering */}
      {/* You can use a library like React Navigation or write your own navigation logic */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000000'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#141414',
  },
  headerContent: {
    flexDirection: 'column',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  searchIcon: {
    padding: 10,
  },
  searchIconImage: {
    width: 24,
    height: 24,
  },
  card: {
    backgroundColor: '#282828',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  chip: {
    backgroundColor: '#424242',
    padding: 10,
    borderRadius: 5,
  },
  chipImage: {
    width: 24,
    height: 24,
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#ffffff',
    marginBottom: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 5,
  },
  cardDetail: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  cardMastercard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  cardMastercardImage: {
    width: 32,
    height: 32,
    marginRight: 5,
  },
  cardMastercardText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonIcon: {
    width: 32,
    height: 32,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  transactionContainer: {
    backgroundColor: '#141414',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  sellAllButton: {
    backgroundColor: '#424242',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    alignSelf: 'flex-end',
  },
  sellAllButtonText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionIcon: {
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 5,
  },
  transactionIconImage: {
    width: 24,
    height: 24,
  },
  transactionDetails: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  transactionDescription: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#141414',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomTab: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
  bottomTabText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  settingText: {
    fontSize: 18,
  },
  lightMode: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  darkMode: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
});

export default App;