import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'

const Topbar = () => {
  return (
    <View style={{backgroundColor: '#ffffff', height: 80, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10,marginTop:10,}}>
      <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 60,backgroundColor: '#f0f0f0', padding:12, borderWidth: 1,height:40, width:40, borderColor: '#a8a8a8'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>L</Text>
      </View>
      <View>
        <TextInput placeholder='Search' style={{backgroundColor: '#f0f0f0', height: 40, width: 280, borderRadius: 20,borderWidth: 1, borderColor: '#a8a8a8', paddingHorizontal: 20}} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 60,backgroundColor: '#f0f0f0', padding:12, borderWidth: 1,height:40, width:40, borderColor: '#a8a8a8'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>U</Text>
      </View>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({})