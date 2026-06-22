import { Modal, View, Text, Pressable, TextInput, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

const ICONS = [
  'book-outline',
  'school-outline',
  'briefcase-outline',
  'wallet-outline',
  'heart-outline',
  'home-outline',
  'document-text-outline',
  'create-outline',
  'flask-outline',
  'musical-notes-outline',
]

export default function HoldCategory({
  visible,
  onClose,
  onRename,
  onChangeIcon,
  onMoveToFirst,
  onDelete,
}: any) {
  const [screen, setScreen] = useState('menu')
  const [name, setName] = useState('')

  const closeAll = () => {
    setScreen('menu')
    onClose()
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeAll}
    >
      <Pressable
        onPress={closeAll}
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.25)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 280,
            backgroundColor: '#FFFFFF',
            borderRadius: 18,
            overflow: 'hidden',
          }}
        >

          {/* MENU */}

          {screen === 'menu' && (
            <>
              <Pressable
                onPress={() => setScreen('rename')}
                style={{
                  padding: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: '#F3F4F6',
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                  }}
                >
                  Rename
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setScreen('icon')}
                style={{
                  padding: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: '#F3F4F6',
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                  }}
                >
                  Change Icon
                </Text>
              </Pressable>

              <Pressable
                onPress={onMoveToFirst}
                style={{
                  padding: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: '#F3F4F6',
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                  }}
                >
                  Move To First
                </Text>
              </Pressable>

              <Pressable
                onPress={onDelete}
                style={{
                  padding: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#DC2626',
                  }}
                >
                  Delete
                </Text>
              </Pressable>
            </>
          )}

          {/* RENAME */}

          {screen === 'rename' && (
            <View
              style={{
                padding: 18,
              }}
            >
              <Pressable
                onPress={() => setScreen('menu')}
              >
                <Text
                  style={{
                    color: '#6668E9',
                    marginBottom: 14,
                  }}
                >
                  ← Back
                </Text>
              </Pressable>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  marginBottom: 14,
                }}
              >
                Rename Category
              </Text>

              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Category Name"
                style={{
                  borderWidth: 1,
                  borderColor: '#E5E7EB',
                  borderRadius: 12,
                  paddingHorizontal: 12,
                  height: 48,
                  marginBottom: 16,
                }}
              />

              <Pressable
                onPress={() => {
                  onRename(name)
                  closeAll()
                }}
                style={{
                  backgroundColor: '#6668E9',
                  borderRadius: 12,
                  height: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontWeight: '700',
                  }}
                >
                  Save
                </Text>
              </Pressable>
            </View>
          )}

          {/* ICONS */}

          {screen === 'icon' && (
            <View
              style={{
                padding: 18,
              }}
            >
              <Pressable
                onPress={() => setScreen('menu')}
              >
                <Text
                  style={{
                    color: '#6668E9',
                    marginBottom: 14,
                  }}
                >
                  ← Back
                </Text>
              </Pressable>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  marginBottom: 14,
                }}
              >
                Change Icon
              </Text>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {ICONS.map(icon => (
                  <Pressable
                    key={icon}
                    onPress={() => {
                      onChangeIcon(icon)
                      closeAll()
                    }}
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: '#E5E7EB',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 10,
                    }}
                  >
                    <Ionicons
                      name={icon as any}
                      size={22}
                      color="#374151"
                    />
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      </Pressable>
    </Modal>
  )
}