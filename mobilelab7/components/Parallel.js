import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button,Text ,Easing} from "react-native";
const Spring = (props) => {
  const springAnim = useRef(new Animated.Value(0.3)).current;
  const TextRoAnim = useRef(new Animated.Value(0)).current;
//  animated Value
const rotate = TextRoAnim.interpolate({
  inputRange: [0,0.5,1],
  outputRange: [0, -75,0],
});

  const animateParallel = () => {
    Animated.parallel( [
    Animated.timing(TextRoAnim, {
      easing: Easing.bounce,
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }),
    Animated.spring(springAnim, {
      toValue: 1,
      friction: 1,
      useNativeDriver:true
    })
    ]).start(()=>{TextRoAnim.setValue(0),springAnim.setValue(0.3)});
  };
  

  

  return (
        <View style={styles.container}>
          <View></View>
          <View style={{  alignItems:"center", backgroundColor: "white",}}>
      <Animated.Image
        style={{  width: 180, height: 150, transform: [{ scale: springAnim }] }}
        source={require("../assets/IT_Logo.png")}
        />
        <Animated.Text style={{color:'orange',
         fontWeight: 'bold',
         fontSize: 24,
         transform: [{ translateX: rotate }],
        }}>Welcome to Faculty of IT !!</Animated.Text>
        </View>
        <View style={  styles.button} >
           <Button title="Run Parallel" onPress={animateParallel}/>
        </View>
    </View>
  );
};
export default Spring;
const styles = StyleSheet.create({
    container: {

      flex: 1,
      backgroundColor: "white",
      alignContent: "center",
      alignItems: "center",
        // justifyContent: "center",
      justifyContent: "space-between",
    },
    button:{
      width:"100%",
      marginBottom:"10%",
    }
  });
