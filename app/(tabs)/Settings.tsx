import { ScrollView, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import UpgradeCard from '@/components/Settings/UpgradeCard'
import SettingsSection from '@/components/Settings/SettingsSection'
import SettingsRow from '@/components/Settings/SettingsRow'

export default function Settings() {
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
        backgroundColor: '#F8F9FC',
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingTop: 12,
          paddingBottom: 140,
        }}
      >
        <View style={{ marginBottom: 22 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '800',
              color: '#111827',
            }}
          >
            Settings
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: '#9CA3AF',
              marginTop: 4,
            }}
          >
            Personalize your reading experience
          </Text>
        </View>

        <UpgradeCard />

        <SettingsSection title="Reader">
          <SettingsRow
            icon="moon-outline"
            title="Dark Mode"
            subtitle="Reader appearance"
          />

          <SettingsRow
            icon="eye-outline"
            title="Show Page Numbers"
            subtitle="Display page indicators"
          />

          <SettingsRow
            icon="expand-outline"
            title="Default Zoom"
            subtitle="Reading zoom level"
            rightText="100%"
          />

          <SettingsRow
            icon="swap-vertical-outline"
            title="Continuous Scroll"
            subtitle="Vertical page scrolling"
          />
        </SettingsSection>

        <SettingsSection title="AI">
          <SettingsRow
            icon="sparkles-outline"
            title="AI Features"
            subtitle="Summary and PDF chat"
          />

          <SettingsRow
            icon="language-outline"
            title="AI Language"
            subtitle="Output language"
            rightText="English"
          />

          <SettingsRow
            icon="trash-outline"
            title="Clear AI History"
            subtitle="Remove previous chats"
          />
        </SettingsSection>

        <SettingsSection title="Storage">
          <SettingsRow
            icon="folder-open-outline"
            title="Cache Size"
            subtitle="Temporary storage"
            rightText="42 MB"
          />

          <SettingsRow
            icon="broom-outline"
            title="Clear Cache"
            subtitle="Free device storage"
          />
        </SettingsSection>

        <SettingsSection title="About">
          <SettingsRow
            icon="star-outline"
            title="Rate NexDoc"
          />

          <SettingsRow
            icon="shield-checkmark-outline"
            title="Privacy Policy"
          />

          <SettingsRow
            icon="information-circle-outline"
            title="Version"
            rightText="1.0.0"
          />
        </SettingsSection>

      </ScrollView>
    </SafeAreaView>
  )
}