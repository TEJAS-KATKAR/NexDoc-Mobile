import { ScrollView, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import AiBanner from '@/components/Actions/AiBanner'
import AiCards from '@/components/Actions/AiCards'
import ToolSection from '@/components/Actions/ToolSection'
import RecentActivity from '@/components/Actions/RecentActivity'

import { TOOL_SECTIONS } from '@/components/Actions/Data'

export default function Actions() {
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
        backgroundColor: '#F8F9FC',
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#F8F9FC',
        }}
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingTop: 12,
          paddingBottom: 140,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View
          style={{
            marginBottom: 22,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: '800',
              color: '#111827',
            }}
          >
            Tools
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: '#9CA3AF',
              marginTop: 4,
            }}
          >
            Everything you need to work with PDFs
          </Text>
        </View>

        {/* AI Banner */}

        <AiBanner />

        {/* AI Cards */}

        <AiCards />

        {/* Tool Sections */}

        {TOOL_SECTIONS.map(section => (
          <ToolSection
            key={section.title}
            title={section.title}
            tools={section.tools}
          />
        ))}

        {/* Recent Activity */}

        <RecentActivity />

      </ScrollView>
    </SafeAreaView>
  )
}