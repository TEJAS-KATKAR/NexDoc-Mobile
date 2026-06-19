import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function AiBanner() {
  return (
    <View
      style={{
        backgroundColor: '#141414',
        borderRadius: 20,
        padding: 16,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 14,
          backgroundColor: 'rgba(99,102,241,0.25)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="sparkles"
          size={18}
          color="#818CF8"
        />
      </View>

      <View
        style={{
          flex: 1,
          marginLeft: 12,
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 14,
            fontWeight: '700',
          }}
        >
          AI Features Unlocked
        </Text>

        <Text
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 11,
            marginTop: 2,
          }}
        >
          Summaries, Q&A and text extraction
        </Text>
      </View>

      <Pressable
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          paddingHorizontal: 12,
          paddingVertical: 7,
          borderRadius: 999,
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 11,
            fontWeight: '600',
          }}
        >
          Try
        </Text>
      </Pressable>
    </View>
  )
}