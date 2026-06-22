import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function UpgradeCard() {
  return (
    <View
      style={{
        backgroundColor: '#141414',
        borderRadius: 22,
        padding: 18,
        marginBottom: 24,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 46,
            height: 46,
            borderRadius: 14,
            backgroundColor: 'rgba(99,102,241,0.25)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ionicons
            name="sparkles"
            size={20}
            color="#818CF8"
          />
        </View>

        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: '700',
            }}
          >
            NexDoc Pro
          </Text>

          <Text
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 11,
              marginTop: 2,
            }}
          >
            AI tools and premium productivity features
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 16,
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 12,
            marginBottom: 6,
          }}
        >
          • Chat with PDF
        </Text>

        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 12,
            marginBottom: 6,
          }}
        >
          • AI Summary
        </Text>

        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 12,
          }}
        >
          • Smart Insights
        </Text>
      </View>

      <Pressable
        style={{
          marginTop: 18,
          backgroundColor: '#FFFFFF',
          borderRadius: 14,
          alignItems: 'center',
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            fontWeight: '700',
            color: '#111827',
          }}
        >
          Coming Soon
        </Text>
      </Pressable>
    </View>
  )
}