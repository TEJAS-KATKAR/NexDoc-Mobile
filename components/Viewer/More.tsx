import { View, Text, Pressable } from 'react-native'

export default function More() {
  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 16 }}>
        More
      </Text>

      <Pressable style={{ paddingVertical: 14 }}>
        <Text>Share PDF</Text>
      </Pressable>

      <Pressable style={{ paddingVertical: 14 }}>
        <Text>Rename PDF</Text>
      </Pressable>

      <Pressable style={{ paddingVertical: 14 }}>
        <Text>PDF Info</Text>
      </Pressable>

    </View>
  )
}