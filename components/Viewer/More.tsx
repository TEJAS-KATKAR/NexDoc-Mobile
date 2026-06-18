import { View, Text, Pressable } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const actions = [
  {
    title: 'Share PDF',
    icon: 'share-variant-outline',
    color: '#22C55E',
    bg: '#ECFDF3',
  },
  {
    title: 'Rename',
    icon: 'pencil-outline',
    color: '#3B82F6',
    bg: '#EFF6FF',
  },
  {
    title: 'Reading Mode',
    icon: 'white-balance-sunny',
    color: '#F59E0B',
    bg: '#FEF3C7',
  },
  {
    title: 'Zoom & Display',
    icon: 'magnify-plus-outline',
    color: '#A855F7',
    bg: '#F3E8FF',
  },
  {
    title: 'PDF Info',
    icon: 'information-outline',
    color: '#6366F1',
    bg: '#EEF2FF',
  },
  {
    title: 'Delete PDF',
    icon: 'trash-can-outline',
    color: '#EF4444',
    bg: '#FEE2E2',
  },
]

export default function More() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F8F9FC',
        padding: 16,
      }}
    >
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 18,
          padding: 14,
          borderWidth: 1,
          borderColor: '#E8ECF3',
          marginBottom: 16,
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
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: '#EEF2FF',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 12,
            }}
          >
            <MaterialCommunityIcons
              name="file-document-outline"
              size={22}
              color="#6366F1"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#111827',
              }}
            >
              Machine Learning Fundamentals
            </Text>

            <Text
              style={{
                marginTop: 3,
                fontSize: 11,
                color: '#9CA3AF',
              }}
            >
              120 pages • 4.2 MB • PDF
            </Text>
          </View>

          <MaterialCommunityIcons
            name="chevron-down"
            size={22}
            color="#9CA3AF"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {actions.map((item) => (
          <Pressable
            key={item.title}
            android_ripple={{ color: '#E5E7EB' }}
            style={({ pressed }) => ({
              width: '31%',
              height: 100,
              backgroundColor: '#FFFFFF',
              borderRadius: 18,
              borderWidth: 1,
              borderColor: '#E8ECF3',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 12,
              opacity: pressed ? 0.8 : 1,
            })}
          >
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                backgroundColor: item.bg,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <MaterialCommunityIcons
                name={item.icon as any}
                size={20}
                color={item.color}
              />
            </View>

            <Text
              style={{
                fontSize: 10,
                fontWeight: '600',
                color: '#374151',
                textAlign: 'center',
              }}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}