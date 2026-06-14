import { View, Text } from 'react-native'

export default function Content() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Contents</Text>

      <Text style={{ marginTop: 15 }}>1. Introduction</Text>
      <Text style={{ marginTop: 10 }}>2. Basics</Text>
      <Text style={{ marginTop: 10 }}>3. Advanced Topics</Text>
    </View>
  )
}