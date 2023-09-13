import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";
const Spring = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current;

//  animated Value
  const spring = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      useNativeDriver:true
    }).start(() => {
      springVal.setValue(0.3);
    });
  };
  return (
        <View style={styles.container}>
           <View></View>
          <View style={{  alignItems:"center", backgroundColor: "white",}}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
        source={require("../assets/IT_Logo.png")}
        />
  </View>
  <View style={  styles.button} >
           <Button title="Spring" onPress={spring} />
  </View>
    </View>
  );
};
export default Spring;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-between",
    },
    button:{
      width:"100%",
      marginBottom:"10%",
    }
  });
