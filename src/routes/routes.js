//dependências
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importação das screens de Rotas
import Login from '../screens/login/login';
import Register from '../screens/register/register';
import Register2 from '../screens/register2/register2';

const Stack = createNativeStackNavigator();
function Routes(){
    return <>
        <NavigationContainer>
            {/* executa por padrão  primeira rota */}
            <Stack.Navigator >
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
