import {
    Modal,
    View,
    Text,
    Pressable,
    ScrollView,
  } from 'react-native'
  
  const themes = [
    {
      id: 'light',
      name: 'Light',
      preview: '#FFFFFF',
      premium: false,
    },
    {
      id: 'dark',
      name: 'Dark',
      preview: '#1E1E1E',
      premium: false,
    },
    {
      id: 'amoled',
      name: 'Midnight AMOLED',
      preview: '#000000',
      premium: false,
    },
    {
      id: 'ocean',
      name: 'Blue Sky',
      preview: '#60A5FA',
      premium: false,
    },
    {
      id: 'forest',
      name: 'Forest',
      preview: '#34B27B',
      premium: false,
    },
    {
      id: 'royalPurple',
      name: 'Royal Purple',
      preview: '#8B5CF6',
      premium: true,
    },
    {
      id: 'sunsetGold',
      name: 'Sunset Gold',
      preview: '#F59E0B',
      premium: true,
    },
  ]
  
  export default function ThemeModal({
    visible,
    onClose,
    currentTheme,
    onSelectTheme,
  }: any) {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={onClose}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Pressable
            onPress={onClose}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
  
          <View
            style={{
              width: '92%',
              maxHeight: '80%',
              backgroundColor: '#FFFFFF',
              borderRadius: 24,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: '700',
                color: '#111827',
                marginBottom: 20,
              }}
            >
              Themes
            </Text>
  
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              {themes.map(item => (
                <Pressable
                  key={item.id}
                  onPress={() =>
                    !item.premium &&
                    onSelectTheme(item.id)
                  }
                  style={{
                    height: 72,
                    borderRadius: 18,
                    borderWidth:
                      currentTheme === item.id
                        ? 2
                        : 1,
                    borderColor:
                      currentTheme === item.id
                        ? '#2563EB'
                        : '#E5E7EB',
                    marginBottom: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 14,
                  }}
                >
                  <View
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      backgroundColor:
                        item.preview,
                    }}
                  />
  
                  <View
                    style={{
                      marginLeft: 12,
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 15,
                        color: '#111827',
                      }}
                    >
                      {item.name}
                    </Text>
  
                    {item.premium && (
                      <Text
                        style={{
                          color: '#F59E0B',
                          fontSize: 12,
                          marginTop: 2,
                        }}
                      >
                        Premium
                      </Text>
                    )}
                  </View>
  
                  {currentTheme === item.id && (
                    <Text
                      style={{
                        color: '#2563EB',
                        fontWeight: '700',
                      }}
                    >
                      Selected
                    </Text>
                  )}
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    )
  }