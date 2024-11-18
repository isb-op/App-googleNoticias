// import { View } from "react-native"
import { ScrollView, View,  StyleSheet, Text  } from "react-native";
import { Noticia } from "./src/components/Noticia";
import { dados } from "./src/components/dados";
import AntDesign from '@expo/vector-icons/AntDesign';
import Nav from "./src/components/Nav";

export default function App() {
  return(

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titulo}>  
              <Text style={styles.titulo_texto}> 
                Notícias locais
              </Text>
              <AntDesign name="rightcircle" size={24} color="#176e7f"/>
        </View>
        <View style={styles.linha} />
      {dados.map((noticia, index) => 
        (<Noticia 
        key={index}
        logo={noticia.logo}
        titulo={noticia.titulo} 
        hora={noticia.hora}
        imagem={noticia.imagem}
        />
        ))}
         <View style={styles.linha} />
         <View style={styles.linha} />
         <View style={styles.linha} />
         <View style={styles.linha} />
         <View style={styles.linha} />
        <View style={styles.footer}>
          <Nav />
        </View>
      </ScrollView>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor: "white",
  },
  titulo:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingRight: 13,
  },
  titulo_texto:{
    color: "#176e7f",
    fontSize:25, 
    padding: 15,
    fontFamily: "Roboto",
    fontWeight: 700,
  },
  footer:{
    position: "absolute",  
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#faf3f2",
  },
  linha: {
    height: 1,
    backgroundColor: "#e0e0e0", 
    marginTop: 10, 
},

});