import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/imagens/logo.png')}
        style={styles.logo}
      />
      
      <Text style={styles.title}>BLACK'S MUSIC</Text>

      <Text style={styles.subtitle}>Gêneros</Text>
      
      <View style={styles.genreContainer}>
        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>POP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>MPB</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>RAP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>BLUES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>HIPHOP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>R&B</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.albumGrid}>
        <View style={styles.albumRow}>
          <TouchableOpacity style={styles.albumItem}>
            <Image 
              source={require('../assets/imagens/image 18.png')}
              style={styles.albumImage}
            />
            <Text style={styles.albumTitle}>All Eyez on Me</Text>
            <Text style={styles.albumArtist}>2Pac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image 
              source={require('../assets/imagens/image 20.png')}
              style={styles.albumImage}
            />
            <Text style={styles.albumTitle}>Ready to Die</Text>
            <Text style={styles.albumArtist}>The Notorious B.I.G.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image 
              source={require('../assets/imagens/image 26.png')}
              style={styles.albumImage}
            />
            <Text style={styles.albumTitle}>The Chronic</Text>
            <Text style={styles.albumArtist}>Dr. Dre</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.albumRow}>
          <TouchableOpacity style={styles.albumItem}>
            <Image 
              source={require('../assets/imagens/image 27.png')}
              style={styles.albumImage}
            />
            <Text style={styles.albumTitle}>Enter the Wu-Tang</Text>
            <Text style={styles.albumArtist}>Wu-Tang Clan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image 
              source={require('../assets/imagens/image 28.png')}
              style={styles.albumImage}
            />
            <Text style={styles.albumTitle}>Illmatic</Text>
            <Text style={styles.albumArtist}>Nas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image 
              source={require('../assets/imagens/image 29.png')}
              style={styles.albumImage}
            />
            <Text style={styles.albumTitle}>Me Against The World</Text>
            <Text style={styles.albumArtist}>2Pac</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.playerBar}>
        <View style={styles.songInfo}>
          <Image 
            source={require('../assets/imagens/image 30.png')}
            style={styles.albumCover}
          />
          <View>
            <Text style={styles.songTitle}>Hit 'Em Up</Text>
            <Text style={styles.artistName}>2pac</Text>
          </View>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>⏮</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>⏯</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>⏭</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 15,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  genreButton: {
    backgroundColor: '#666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '48%',
  },
  genreText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  albumGrid: {
    flex: 1,
    marginBottom: 20,
  },
  albumRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  albumItem: {
    width: '30%',
    alignItems: 'center',
  },
  albumImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  albumTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 4,
  },
  albumArtist: {
    color: '#999',
    fontSize: 12,
    textAlign: 'center',
  },
  playerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#222',
    borderRadius: 8,
  },
  songInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  albumCover: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  artistName: {
    color: '#999',
    fontSize: 14,
  },
  controls: {
    flexDirection: 'row',
    gap: 24,
  },
  controlButton: {
    padding: 8,
  },
  controlIcon: {
    color: '#fff',
    fontSize: 20,
  }
});
