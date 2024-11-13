import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/imagens/foto-perfil.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Letis</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>20 seguidores</Text>
          <Text style={styles.statsText}>35 seguindo</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Suas Playlists</Text>
      <View style={styles.playlistsContainer}>
        <TouchableOpacity style={styles.playlistItem}>
          <Image
            source={require('../assets/imagens/image 23.png')}
            style={styles.playlistImage}
          />
          <Text style={styles.playlistName}>Só as mais top 🔥</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playlistItem}>
          <Image
            source={require('../assets/imagens/image 24.png')} 
            style={styles.playlistImage}
          />
          <Text style={styles.playlistName}>rap/trap/hiphop 🎵</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Artistas mais tocados</Text>
      <View style={styles.artistsGrid}>
        <Image source={require('../assets/imagens/image 16.png')} style={styles.artistImage} />
        <Image source={require('../assets/imagens/image 17.png')} style={styles.artistImage} />
        <Image source={require('../assets/imagens/image 19.png')} style={styles.artistImage} />
        <Image source={require('../assets/imagens/image 16-1.png')} style={styles.artistImage} />
        <Image source={require('../assets/imagens/image 21.png')} style={styles.artistImage} />
        <Image source={require('../assets/imagens/image 22.png')} style={styles.artistImage} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 15,
  },
  statsText: {
    color: '#666',
    fontSize: 14,
  },
  editButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#666',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  playlistsContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },
  playlistItem: {
    flex: 1,
  },
  playlistImage: {
    width: '100%',
    height: 175,
    borderRadius: 8,
    marginBottom: 8,
  },
  playlistName: {
    fontSize: 14,
    fontWeight: '500',
  },
  artistsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'space-between',
  },
  artistImage: {
    width: '30%',
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
