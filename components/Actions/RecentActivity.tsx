import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RECENT_ACTIVITY } from './Data'

export default function RecentActivity() {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '700',
          color: '#111827',
          marginBottom: 10,
        }}
      >
        Recent Activity
      </Text>

      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#E5E7EB',
          overflow: 'hidden',
        }}
      >
        {RECENT_ACTIVITY.map((item, index) => (
          <View key={index}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 14,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: '#F7F7F7',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name={item.icon as any}
                  size={18}
                  color="#111827"
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
                    fontSize: 12,
                    fontWeight: '600',
                    color: '#111827',
                  }}
                >
                  {item.action}
                </Text>

                <Text
                  style={{
                    fontSize: 11,
                    color: '#9CA3AF',
                    marginTop: 2,
                  }}
                >
                  {item.result}
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 10,
                  color: '#C4C4C4',
                }}
              >
                {item.time}
              </Text>
            </View>

            {index !== RECENT_ACTIVITY.length - 1 && (
              <View
                style={{
                  height: 1,
                  backgroundColor: '#F3F4F6',
                  marginLeft: 66,
                }}
              />
            )}
          </View>
        ))}
      </View>
    </View>
  )
}