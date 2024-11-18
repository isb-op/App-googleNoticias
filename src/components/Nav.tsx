import { View, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Nav() {
    return(
        <View style={styles.footerNav}>
            <View style={styles.nav}>
                <MaterialCommunityIcons name="star-four-points-outline" size={24} color="gray" />
                <Text>Para você</Text>
            </View>
            <View style={styles.nav}>
                <Fontisto name="world-o" size={24} color="gray" />
                <Text>Manchetes</Text>
            </View>
            <View style={styles.nav}>
                <Feather name="star" size={24} color="gray" />
                <Text>Seguindo</Text>
            </View>
            <View style={styles.nav}>
                <Ionicons name="library-outline" size={24} color="gray" />
                <Text>Banca</Text>
            </View>
      </View>
    );
  }

  const styles= StyleSheet.create({
    footerNav:{
        flex: 4,
        flexDirection: "row",
        backgroundColor:"#faf3f2",
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
      },
      nav:{
        alignItems: "center",
        padding: 15,
      },
});