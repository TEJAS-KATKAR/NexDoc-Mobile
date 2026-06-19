import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ToolRow({ icon, label, desc, hot }: any) {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
      }}
    >
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 12,
          backgroundColor: '#F7F7F7',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Ionicons name={icon} size={18} color="#111827" />
      </View>

      <View style={{ flex: 1, marginLeft: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '600',
              color: '#111827',
            }}
          >
            {label}
          </Text>

          {hot && (
            <View
              style={{
                marginLeft: 8,
                backgroundColor: '#FEF3C7',
                borderRadius: 6,
                paddingHorizontal: 6,
                paddingVertical: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 9,
                  fontWeight: '700',
                  color: '#D97706',
                }}
              >
                NEW
              </Text>
            </View>
          )}
        </View>

        <Text
          style={{
            marginTop: 2,
            fontSize: 11,
            color: '#9CA3AF',
          }}
        >
          {desc}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={18}
        color="#D1D5DB"
      />
    </Pressable>
  )
}