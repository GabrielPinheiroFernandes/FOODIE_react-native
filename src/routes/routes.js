//dependências
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importação das screens de Rotas
import Login from '../screens/login/login';
import Register from '../screens/register/register';
import Register2 from '../screens/register2/register2';
import Home from '../screens/home/home';
import Favoritos from '../screens/favoritos/favoritos';
import Pedidos from '../screens/pedidos/pedidos';
import Perfil from '../screens/perfil/perfil';

const Stack = createNativeStackNavigator();
function Routes(){
    return <>
        <NavigationContainer >
            {/* executa por padrão  primeira rota */}
            
            <Stack.Navigator initialRouteName=''>

                <Stack.Screen name='perfil' component={Perfil} options={{
                    headerShown:true,
                    title:"Meu Perfil",
                    headerTitleAlign:"center",
                    headerShadowVisible:false
                    }}/>

                <Stack.Screen name='pedidos' component={Pedidos} options={{
                    headerShown:true,
                    title:"Meus Pedidos",
                    headerTitleAlign:"center",
                    headerShadowVisible:false
                    }} />

                <Stack.Screen name='favoritos' component={Favoritos} options={{
                    headerShown:true,
                    title:"Favoritos",
                    headerTitleAlign:"center",
                    headerShadowVisible:false
                    }}/>

                <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>

                <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>

                <Stack.Screen name='registro' component={Register} options={{
                    // headerShown:false,
                    headerShadowVisible:false,
                    title:"",
                    //somente funciona para o IOS
                    headerBackTitle:"voltar"
                    
                }}/>

                <Stack.Screen name='registro2' component={Register2}options={{
                    // headerShown:false,
                    headerShadowVisible:false,
                    title:"",
                    //somente funciona para o IOS
                    headerBackTitle:"voltar"
                    
                }}/>
                
            </Stack.Navigator>



        </NavigationContainer>

    </>
}

export default Routes;
