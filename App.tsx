import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const randomBgGenrator = () => {
    let color = '#';
    const textRange = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += textRange[Math.floor(Math.random() * 16)];
    }
    // console.log(color);
    setBgColor(color);
  };
  useEffect(() => {
    randomBgGenrator();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={bgColor} hidden />
      <View style={[styles.mainContainer, {backgroundColor: bgColor}]}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              randomBgGenrator();
            }}>
            <Text>Click Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: 'grey',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
export default App;
