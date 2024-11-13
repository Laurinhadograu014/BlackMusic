import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Biblioteca() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/imagens/banner.png')}
                    style={styles.headerImage}
                />
                <Text style={styles.headerTitle}>Tasha & Tracie</Text>
                <Text style={styles.headerSubtitle}>Populares</Text>
            </View>

            <View style={styles.songList}>
                <TouchableOpacity style={styles.songItem}>
                    <Image
                        source={require('../assets/imagens/image 3.png')} 
                        style={styles.songImage}
                    />
                    <Text style={styles.songNumber}>1</Text>
                    <Text style={styles.songTitle}>Disk P@#$%&!</Text>
                    <Text style={styles.songPlays}>6.078.300</Text>
                    <TouchableOpacity>
                        <Text style={styles.heartIcon}>♡</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.songItem}>
                    <Image
                        source={require('../assets/imagens/image 4.png')}
                        style={styles.songImage}
                    />
                    <Text style={styles.songNumber}>2</Text>
                    <Text style={styles.songTitle}>tipo, sonho de consumo!</Text>
                    <Text style={styles.songPlays}>18.820.780</Text>
                    <TouchableOpacity>
                        <Text style={styles.heartIcon}>♡</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.songItem}>
                    <Image
                        source={require('../assets/imagens/image 5.png')}
                        style={styles.songImage}
                    />
                    <Text style={styles.songNumber}>3</Text>
                    <Text style={styles.songTitle}>DESCE LICOR</Text>
                    <Text style={styles.songPlays}>15.918.621</Text>
                    <TouchableOpacity>
                        <Text style={styles.heartIcon}>♡</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.songItem}>
                    <Image
                        source={require('../assets/imagens/image 6.png')}
                        style={styles.songImage}
                    />
                    <Text style={styles.songNumber}>4</Text>
                    <Text style={styles.songTitle}>Set da Menorzinha 1.0</Text>
                    <Text style={styles.songPlays}>3.001.705</Text>
                    <TouchableOpacity>
                        <Text style={styles.heartIcon}>♡</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.songItem}>
                    <Image
                        source={require('../assets/imagens/image 7.png')}
                        style={styles.songImage}
                    />
                    <Text style={styles.songNumber}>5</Text>
                    <Text style={styles.songTitle}>TANG</Text>
                    <Text style={styles.songPlays}>21.896.595</Text>
                    <TouchableOpacity>
                        <Text style={styles.heartIcon}>♡</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <View style={styles.nowPlaying}>
                <Text style={styles.nowPlayingText}>Ouça agora</Text>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.nowPlayingThumbs}
                >
                    <Image
                        source={require('../assets/imagens/image 13.png')}
                        style={styles.thumbnail}
                    />
                    <Image
                        source={require('../assets/imagens/image 14.png')}
                        style={styles.thumbnail}
                    />
                    <Image
                        source={require('../assets/imagens/image 15.png')}
                        style={styles.thumbnail}
                    />
                    <Image
                        source={require('../assets/imagens/image 18.png')}
                        style={styles.thumbnail}
                    />
                    <Image
                        source={require('../assets/imagens/image 20.png')}
                        style={styles.thumbnail}
                    />
                    <Image
                        source={require('../assets/imagens/image 26.png')}
                        style={styles.thumbnail}
                    />
                    <Image
                        source={require('../assets/imagens/image 27.png')}
                        style={styles.thumbnail}
                    />
                    <Image
                        source={require('../assets/imagens/image 28.png')}
                        style={styles.thumbnail}
                    />
                    <Image
                        source={require('../assets/imagens/image 29.png')}
                        style={styles.thumbnail}
                    />
                </ScrollView>
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
    headerImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 15,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
    },
    songList: {
        marginBottom: 30,
    },
    songItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    songImage: {
        width: 40,
        height: 40,
        borderRadius: 4,
        marginRight: 10,
    },
    songNumber: {
        width: 30,
        fontSize: 16,
        color: '#666',
    },
    songTitle: {
        flex: 1,
        fontSize: 16,
        marginRight: 10,
    },
    songPlays: {
        fontSize: 14,
        color: '#666',
        marginRight: 15,
    },
    heartIcon: {
        fontSize: 20,
        color: '#666',
    },
    nowPlaying: {
        marginBottom: 30,
    },
    nowPlayingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    nowPlayingThumbs: {
        flexDirection: 'row',
    },
    thumbnail: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginRight: 15,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});
