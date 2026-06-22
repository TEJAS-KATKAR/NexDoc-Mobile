import { View, Text } from 'react-native'

export default function SettingsSection({
  title,
  children,
}: any) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '700',
          color: '#111827',
          marginBottom: 10,
        }}
      >
        {title}
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
        {children}
      </View>
    </View>
  )
}