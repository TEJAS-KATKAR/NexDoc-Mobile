import { View, Text, Pressable } from 'react-native'

export default function Ai() {
  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 16 }}>
        AI Assistant
      </Text>

      <Pressable style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 14, marginBottom: 12 }}>
        <Text style={{ fontWeight: '600' }}>Summarize Chapter</Text>
      </Pressable>

      <Pressable style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 14, marginBottom: 12 }}>
        <Text style={{ fontWeight: '600' }}>Chat with PDF</Text>
      </Pressable>

      <Pressable style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 14, marginBottom: 12 }}>
        <Text style={{ fontWeight: '600' }}>Explain Selection</Text>
      </Pressable>

      <Pressable style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 14 }}>
        <Text style={{ fontWeight: '600' }}>Extract Key Points</Text>
      </Pressable>

    </View>
  )
}