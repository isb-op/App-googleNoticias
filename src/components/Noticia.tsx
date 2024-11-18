import { Text, View, StyleSheet, Image } from "react-native";

type NoticiaProps = {
    logo: string;
    titulo: string;
    hora: string;
    imagem: string;
};

export function Noticia({ logo, titulo, hora, imagem }: NoticiaProps) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: logo }} style={styles.logo} />
            <View style={styles.row}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Image source={{ uri: imagem }} style={styles.figura} />
            </View>
            <View style={styles.row}>
                <Text style={styles.hora}>{hora}</Text>
            </View>
            <View style={styles.linha} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        width: 40,
        height: 40, 
        resizeMode: "contain", 
    },
    titulo: {
        flex: 1,
        fontSize: 20,
        fontWeight: "600",
        marginHorizontal: 2,
    },
    hora: {
        color: "gray",
        fontSize: 12,
    },
    figura: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    linha: {
        height: 1,
        backgroundColor: "#e0e0e0", 
        marginTop: 10, 
    },
});