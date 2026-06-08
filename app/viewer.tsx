import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

const Viewer = () => {
  const { name } = useLocalSearchParams()

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderBottomWidth: 1, borderColor: '#e5e5e5' }}>

        <Pressable onPress={() => router.back()} style={{ padding: 8 }}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </Pressable>

        <Text numberOfLines={1} style={{ flex: 1, marginHorizontal: 12, fontSize: 16, fontWeight: '600' }}>
          {name}
        </Text>

        <Pressable style={{ padding: 8 }}>
          <Ionicons name="search" size={22} color="#111" />
        </Pressable>

        <Pressable style={{ padding: 8 }}>
          <Ionicons name="ellipsis-vertical" size={22} color="#111" />
        </Pressable>

      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>PDF Viewer Coming Soon</Text>
      </View>

    </View>
  )
}

export default Viewer