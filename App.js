import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
// from 자바스크립트 파일명
// (from 디렉토리명) 일때 실제로는 -> 디렉토리 /index.js 가 로딩된다
// import HelloWorld from './components/HelloWorld'
// import Counter from './components/Counter'
// import LotsOfGreetings from './components/LotsOfGreeting'
import SimpleList from './components/SimpleList'



/* app 컴포넌트 시작부분*/
export default function App() {
  // JSX 
  // UI 템플릿을 작성
  return (
        // 속성={값} 
        // 속성={"문자열"}
        // 속성={{name:"sss", phone;"aaaa"}}
        // 속성={객체변수}
    <View style={styles.container}>
      {/* <HelloWorld></HelloWorld> */}
      {/* <Counter></Counter> */}
      {/* <LotsOfGreetings></LotsOfGreetings> */}
      <SimpleList></SimpleList>
      <StatusBar style="auto" />
    </View>
  );
}
/* app 컴포넌트 끝*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1, //전체공간을자치
    backgroundColor: '#fff',
    alignItems: 'center',  // 세로
    justifyContent: 'center', // 가로
  },
});
