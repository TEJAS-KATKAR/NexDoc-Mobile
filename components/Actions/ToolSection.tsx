import { View, Text } from 'react-native'
import ToolRow from './ToolRow'

export default function ToolSection({ title, tools }: any) {
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
        {tools.map((tool: any, index: number) => (
          <View key={tool.label}>
            <ToolRow {...tool} />

            {index !== tools.length - 1 && (
              <View
                style={{
                  height: 1,
                  backgroundColor: '#F3F4F6',
                  marginLeft: 70,
                }}
              />
            )}
          </View>
        ))}
      </View>
    </View>
  )
}