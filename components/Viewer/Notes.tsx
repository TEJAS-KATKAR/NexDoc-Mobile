import { View, Text } from 'react-native'

export default function Notes() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Notes</Text>

      <Text style={{ marginTop: 15 }}>
        No notes available
      </Text>
    </View>
  )
}