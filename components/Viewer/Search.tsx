import React, { useState } from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'

export default function Search() {
  const [query, setQuery] = useState('')

  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search in PDF..."
          placeholderTextColor="#9CA3AF"
          style={{
            flex: 1,
            height: 42,
            backgroundColor: '#F8F9FC',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#E5E7EB',
            paddingHorizontal: 14,
            fontSize: 13,
          }}
        />

        <Pressable
          style={{
            marginLeft: 8,
            height: 42,
            paddingHorizontal: 18,
            backgroundColor: '#6366F1',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: 13,
            }}
          >
            Find
          </Text>
        </Pressable>
      </View>
    </View>
  )
}