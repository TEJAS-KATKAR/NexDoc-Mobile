import { View, Text, Pressable, ScrollView, TextInput } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const chapters = [
  { title: 'Introduction', page: 1, active: true },
  { title: 'Machine Learning Basics', page: 12 },
  { title: 'Neural Networks', page: 35 },
  { title: 'Deep Learning', page: 58 },
  { title: 'Model Evaluation', page: 84 },
  { title: 'Case Studies', page: 110 },
]

export default function Content() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F8F9FC',
      }}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 36,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#111827',
          marginBottom: 12,
        }}
      >
        Table of Contents
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#E5E7EB',
          borderRadius: 14,
          paddingHorizontal: 12,
          marginBottom: 16,
          height: 48,
        }}
      >
        <MaterialCommunityIcons
          name="magnify"
          size={20}
          color="#9CA3AF"
        />

        <TextInput
          placeholder="Search chapters..."
          placeholderTextColor="#9CA3AF"
          style={{
            flex: 1,
            marginLeft: 8,
            fontSize: 13,
          }}
        />
      </View>

      {chapters.map((item) => (
        <Pressable
          key={item.title}
          style={{
            backgroundColor: item.active ? '#EEF2FF' : '#FFFFFF',
            borderWidth: 1,
            borderColor: item.active ? '#6366F1' : '#E5E7EB',
            borderRadius: 16,
            padding: 14,
            marginBottom: 10,
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
                width: 34,
                height: 34,
                borderRadius: 10,
                backgroundColor: item.active
                  ? '#6366F1'
                  : '#F3F4F6',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 12,
              }}
            >
              <MaterialCommunityIcons
                name="file-document-outline"
                size={16}
                color={item.active ? '#FFFFFF' : '#6B7280'}
              />
            </View>

            <Text
              style={{
                flex: 1,
                fontSize: 13,
                fontWeight: '600',
                color: '#111827',
              }}
            >
              {item.title}
            </Text>

            <View
              style={{
                backgroundColor: item.active
                  ? '#6366F1'
                  : '#F3F4F6',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 999,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '600',
                  color: item.active
                    ? '#FFFFFF'
                    : '#6B7280',
                }}
              >
                {item.page}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  )
}