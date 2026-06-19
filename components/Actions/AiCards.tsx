import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FEATURED } from './Data'

export default function AiCards() {
  return (
    <View style={{ marginBottom: 26 }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '700',
          color: '#111827',
          marginBottom: 10,
        }}
      >
        AI Powered
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {FEATURED.map(item => (
          <Pressable
            key={item.title}
            style={{
              width: '49%',
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#E5E7EB',
              padding: 14,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  backgroundColor: `${item.color}15`,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name={item.icon as any}
                  size={18}
                  color={item.color}
                />
              </View>

              <View
                style={{
                  backgroundColor: `${item.color}15`,
                  borderRadius: 999,
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                }}
              >
                <Text
                  style={{
                    color: item.color,
                    fontSize: 9,
                    fontWeight: '700',
                  }}
                >
                  {item.tag}
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontSize: 13,
                fontWeight: '700',
                color: '#111827',
              }}
            >
              {item.title}
            </Text>

            <Text
              style={{
                fontSize: 11,
                color: '#9CA3AF',
                marginTop: 4,
                lineHeight: 16,
              }}
            >
              {item.desc}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '600',
                  color: '#111827',
                }}
              >
                Try now
              </Text>

              <Ionicons
                name="chevron-forward"
                size={12}
                color="#111827"
              />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}