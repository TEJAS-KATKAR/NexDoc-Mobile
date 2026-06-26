import { View, Text, Pressable, Switch } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function SettingsRow({
  icon,
  title,
  subtitle,
  rightText,
  switchValue,
  onSwitchChange,
  onPress,
}: any) {

  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
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
        <Ionicons name={icon} size={18} color="#111827" />
      </View>

      <View
        style={{
          flex: 1,
          marginLeft: 12,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: '600',
            color: '#111827',
          }}
        >
          {title}
        </Text>

        {subtitle && (
          <Text
            style={{
              fontSize: 11,
              color: '#9CA3AF',
              marginTop: 2,
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>

      {rightText && (
        <Text
          style={{
            fontSize: 11,
            color: '#9CA3AF',
            marginRight: 6,
          }}
        >
          {rightText}
        </Text>
      )}

      {typeof switchValue === 'boolean' ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
        />
      ) : (
        <Ionicons
          name="chevron-forward"
          size={18}
          color="#D1D5DB"
        />
      )}
    </Pressable>
  )
}