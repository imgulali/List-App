import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from "@/constants/Colors";


const TopBar = ({total, clearAll}) => {

    const clearHandler = () => {
        clearAll();
    };

  return (
    <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.heading}>Your List</Text>
          <Text style={styles.secondary}>{total} things in total</Text>
        </View>
        <Pressable onLongPress={clearHandler}>
            <Text style={styles.clear}>Clear All</Text>
        </Pressable>
      </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width: "88%",
        alignSelf: "center",
        marginTop: 25,
      },
      heading:{
        fontSize: 34,
        fontFamily: 'Black',
      },
      secondary: {
        fontSize: 18,
        fontFamily: 'Medium',
        color: Colors.gray,
      },
      clear: {
        textDecorationLine: "underline",
        color: Colors.primary,
        fontSize: 20,
        fontFamily: "Bold",
      },
})