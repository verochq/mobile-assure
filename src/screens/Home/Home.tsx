import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

const Home = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Home component!</Text>
            </View>


            <View style={styles.content}>
                <Text>Top: {insets.top}</Text>
                <Text>Bottom: {insets.bottom}</Text>
                <Text>Left: {insets.left}</Text>
                <Text>Right: {insets.right}</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Digital Academy 2025
                </Text>
            </View>
        </View>

        
    )
}



export default Home;