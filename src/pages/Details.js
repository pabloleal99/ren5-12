import React, {Component} from 'react';
import {View, Text, Button,Alert,TextInput} from 'react-native';

export default class Details extends Component{
    static navigationOptions = {
        title:'Details',
        headerStyle:{
            backgroundColor:'#1565c0'
        },
        headerTintColor:'#fff',
        headerTitletStyle:{
            fontWeight:'bold',
        },

    };


    render (){
        return(
            <View style={{padding:40}}>
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Nombre'
          />
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Apellido'
          />
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Rut'
          />
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Direccion'
          />
          <TextInput 
             style= {{height:50, fontSize:30, borderColor:'black'}}
             placeholder='Email'
          />
        <Button
          title="Guardar"
          color="red"
          onPress={() => Alert.alert('Se ha guardado con exito!')}
        />
        <Button
          title="Cancelar"
          color="purple"
          onPress={() => Alert.alert('Se ha Cancelado con exito!')}
        /> 
        <Button
                   title='volver a Home' onPress = {()=>{
                       this.props.navigation.goBack();
                   }}
        />    
        </View>
        );
    }
}