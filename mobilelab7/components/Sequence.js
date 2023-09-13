import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button ,Easing } from "react-native";
const Sequence = (props) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;
  // animatedVal
  const spin = spinAnim.interpolate({
    inputRange: [0, 0.5,1],
    outputRange: ["0deg", "360deg","0deg"],
  });

  const fade = fadeAnim.interpolate({
    inputRange: [0,0.5, 1],
    outputRange: [1, 0,1],
    });
    const sequenceAnimation = ()=>{Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start(()=>{spinAnim.setValue(0),fadeAnim.setValue(0)});
  }

  return (
        <View style={styles.container}>
            <View></View>
          <View style={{  alignItems:"center", backgroundColor: "white",}}>
      <Animated.Image
      
        style={ [ styles.it_logo,
            {opacity: fade,transform: [{ rotate: spin }]} ] }
        source={require("../assets/IT_Logo.png")}
        />
        </View>
        <View style={  styles.button} >
           <Button  title="Run Sequence" onPress={sequenceAnimation} />
           </View>
    </View>
  );
};
export default Sequence;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-between",
    
    },
    it_logo:{
        width: 180, height: 150
    }
    ,button:{
      width:"100%",
      marginBottom:"10%",
    }
  });
