import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function PermissionCard({
  onGrant,
}: {
  onGrant: () => void
}) {
  return (
    <View
      style={{
        margin: 20,
        marginBottom: 125,
        padding: 18,
        borderRadius: 18,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E7EB',
      }}
    >
      <Ionicons
        name="document-text-outline"
        size={58}
        color="#6366F1"
      />

      <Text
        style={{
          marginTop: 10,
          fontSize: 22,
          fontWeight: '700',
        }}
      >
        Access your PDFs
      </Text>

      <Text
        style={{
          marginTop: 10,
          paddingHorizontal:20,
          textAlign: 'center',
          color: '#6B7280',
          lineHeight: 18,
        }}
      >
        Allow NexDoc to access PDFs from
        your Device.
      </Text>

      <Pressable
        onPress={onGrant}
        style={{
          marginTop: 22,
          backgroundColor: '#6366F1',
          paddingHorizontal: 28,
          paddingVertical: 14,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: 15,
          }}
        >
          Grant File Access
        </Text>
      </Pressable>
    </View>
  )
}