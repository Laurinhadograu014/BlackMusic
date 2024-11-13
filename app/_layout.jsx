import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Login from './login';
import Cadastro from './cadastro';
import Inicio from './inicio';
import Biblioteca from './biblioteca';
import Perfil from './perfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#222',
                    borderTopColor: '#333',
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#666',
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Biblioteca"
                component={Biblioteca}
                options={{
                    tabBarLabel: 'Biblioteca',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="library" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Layout() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="TabRoutes" component={TabRoutes} />
        </Stack.Navigator>
    );
}
