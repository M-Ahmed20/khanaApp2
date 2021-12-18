import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView
  } from "react-native";
  import moment from "moment";
  import { Button, Menu, Divider, Provider,visible,closeMenu,openMenu } from 'react-native-paper'; 
   import DatePicker from 'react-native-datepicker';
  import logo1 from "../../image/logo1.png" 

  export default function Needy1(){
    const [name, setName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [Noofperson, setNoofperson] = useState("");
    const [cnic, setCnic] = useState()
    const [dob, setDob] = useState()
    const [numofMem, setNumofMem] = useState()
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

   

    return(
        <ScrollView>
        <View style={styles.view}>

<Image style={styles.image} source={logo1} />

        <View style={styles.inputView}>

        <TextInput
          keyboardType="default"
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="white"
          onChangeText={ text => setName(text) }  />
      </View>
      <View style={styles.inputView}>

        <TextInput
         keyboardType="default"
          style={styles.TextInput}
          placeholder="Father Name"
          placeholderTextColor="white"
          onChangeText={text => setFatherName(text)}  />
      </View>

      <View style={styles.inputView}>
      <TextInput
         keyboardType="number-pad"
          style={styles.TextInput}
          placeholder="No. of Person in your Family"
          placeholderTextColor="white"
          onChangeText={text => setNoofperson(text)}  />
      </View>

      <select  name="role" style={{color:"green",width:"335px",height:"40px",border:"2px",borderColor:"green", marginLeft:"15px"}} onChange={(e) => { setUserRole(e.target.value) }}>
                <option value='branchManager'>BranchManager</option>
                <option value='NeedyPeople'>Needy People</option>
            </select>
 
 
      <View style={styles.inputView}>
        <TextInput
        keyboardType="number-pad"
          style={styles.TextInput}
          placeholder="CNIC.No"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={text => setCnic(text)}
        />
      </View>      

      <View>
      <DatePicker
          showIcon={false}
          androidMode="spinner"
          style={{ width: 300 }}
          date={dob}
          mode="date"
          placeholder="DOB"
          format="DD-MM-YYYY"
          maxDate={moment().format('DD-MM-YYYY')}
          confirmBtnText="Chọn"
          cancelBtnText="Hủy"
          customStyles={{
          dateInput: {
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'black',
            },
          }}
          onDateChange={(date) => {
            setDob(date);
          }}
        />

      {/* <View style={styles.inputView}>
        <TextInput
        keyboardType="number-pad"
          style={styles.TextInput}
          placeholder="CNIC."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => numofMem(text)}
        />
      </View>  */}

</View>

</View>
</ScrollView>
    )
        }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  
      // padding:"100"
    },
   
    image: {
        marginBottom: 30,
        width: 300,
        height: 250,
        padding: 50
      },

    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    inputView: {
      backgroundColor: "white",
      borderRadius: 30,
      width: "95%",
      marginBottom: 20,
      textAlign:'center',
      alignItems: "center",
      borderWidth: 3,
      backgroundColor:"green",
      color:"white"
  },

  view:{
alignItems:"center",
  },
    TextInput: {
      width: "100%",
      borderRadius: 30,
      padding: 10,
      color:"white"
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    image: {
      marginBottom: 30,
      width: 300,
      height: 250,
      padding: 50
    },
   
   signupBtn: {
      width: "%",
      borderRadius: 25,
      height: 50,
      borderWidth: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
    },
  });