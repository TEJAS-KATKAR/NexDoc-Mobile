import React, { useState } from 'react'
import {View,Text,Pressable,ScrollView,TextInput,KeyboardAvoidingView,Platform,} from 'react-native'

const colors = [
  { bg: '#FFF7E6', border: '#F59E0B' },
  { bg: '#ECFDF5', border: '#10B981' },
  { bg: '#EEF2FF', border: '#6366F1' },
  { bg: '#FDF2F8', border: '#EC4899' },
  { bg: '#F3E8FF', border: '#8B5CF6' },
]

export default function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'Gradient descent minimizes loss by iteratively adjusting weights.',
      page: 5,
      color: '#FFF7E6',
      border: '#F59E0B',
    },
    {
      id: 2,
      text: 'Review backpropagation before next revision.',
      page: 12,
      color: '#ECFDF5',
      border: '#10B981',
    },
  ])

  const [showInput, setShowInput] = useState(false)
  const [noteText, setNoteText] = useState('')

  const addNote = () => {
    if (!noteText.trim()) return
  
    if (editingId) {
      setNotes(prev =>
        prev.map(item =>
          item.id === editingId
            ? { ...item, text: noteText }
            : item
        )
      )
  
      setEditingId(null)
    } else {
      const randomColor =
        colors[Math.floor(Math.random() * colors.length)]
  
      const newNote = {
        id: Date.now(),
        text: noteText,
        page: Math.floor(Math.random() * 100) + 1,
        color: randomColor.bg,
        border: randomColor.border,
      }
  
      setNotes(prev => [newNote, ...prev])
    }
  
    setNoteText('')
    setShowInput(false)
  }

  const [selectedNote, setSelectedNote] = useState<any>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null)
  const editNote = () => {
    if (!selectedNote) return
  
    setEditingId(selectedNote.id)
    setNoteText(selectedNote.text)
    setShowInput(true)
  
    setSelectedNote(null)
    setSelectedId(null)
  }
  
  const deleteNote = () => {
    if (!selectedNote) return
  
    setNotes(prev =>
      prev.filter(item => item.id !== selectedNote.id)
    )
  
    setSelectedNote(null)
    setSelectedId(null)
  }

  return (
    <Pressable
  style={{ flex: 1 }}
  onPress={() => {
    setSelectedId(null)
    setSelectedNote(null)
  }}
>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#F8F9FC',
        }}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 18,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: '#111827',
            }}
          >
            My Notes
          </Text>

          <View
            style={{
              marginLeft: 8,
              backgroundColor: '#EEF2FF',
              borderRadius: 999,
              paddingHorizontal: 8,
              paddingVertical: 2,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: '#6366F1',
              }}
            >
              {notes.length}
            </Text>
          </View>

          <View style={{ flex: 1 }} />

          <Pressable
            onPress={() => setShowInput(true)}
            style={{
              backgroundColor: '#EEF2FF',
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: '#6366F1',
                fontSize: 12.2,
                fontWeight: '600',
              }}
            >
              + New Note
            </Text>
          </Pressable>
        </View>

        {showInput && (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 14,
              marginBottom: 16,
              borderWidth: 1,
              borderColor: '#E5E7EB',
            }}
          >
            <TextInput
              value={noteText}
              onChangeText={setNoteText}
              placeholder="Write your note..."
              multiline
              autoFocus
              style={{
                minHeight: 90,
                textAlignVertical: 'top',
                fontSize: 14,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 12,
              }}
            >
              <Pressable
                onPress={() => {
                  setShowInput(false)
                  setNoteText('')
                }}
                style={{
                  marginRight: 10,
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                }}
              >
                <Text style={{ color: '#6B7280' }}>
                  Cancel
                </Text>
              </Pressable>

              <Pressable
                onPress={addNote}
                style={{
                  backgroundColor: '#6366F1',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontWeight: '600',
                  }}
                >
                  {editingId ? 'Update' : 'Send'}
                </Text>
              </Pressable>
            </View>
          </View>
        )}

        {notes.length === 0 && (
          <View
            style={{
              alignItems: 'center',
              marginTop: 50,
            }}
          >
            <Text
              style={{
                color: '#9CA3AF',
              }}
            >
              No notes available
            </Text>
          </View>
        )}

{notes.map((note) => (
  <View key={note.id}>
    
    <Pressable
      onLongPress={() => {
        setSelectedNote(note)
        setSelectedId(note.id)
      }}
      style={{
        backgroundColor: note.color,
        borderRadius: 16,
        padding: 16,
        marginBottom: 4,
        borderLeftWidth: 5,
        borderLeftColor: note.border,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}
      >
        <Text
          style={{
            flex: 1,
            color: '#374151',
            fontSize: 12,
            lineHeight: 18,
          }}
        >
          {note.text}
        </Text>

        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.06)',
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 999,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: '#6B7280',
            }}
          >
            p.{note.page}
          </Text>
        </View>
      </View>
    </Pressable>

    {selectedId === note.id && (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 99,
          marginBottom: 12,
          overflow: 'hidden',
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#E5E7EB',
          marginHorizontal:40,
        }}
      >
        <Pressable
          onPress={() => {
            // copy logic
          }}
          style={{
            flex: 1,
            paddingVertical: 12,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#374151',
              fontWeight: '600',
            }}
          >
            Copy
          </Text>
        </Pressable>

        <View style={{ width: 1, backgroundColor: '#E5E7EB' }} />

        <Pressable
          onPress={editNote}
          style={{
            flex: 1,
            paddingVertical: 12,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#374151',
              fontWeight: '600',
            }}
          >
            Edit
          </Text>
        </Pressable>

        <View style={{ width: 1, backgroundColor: '#E5E7EB' }} />

        <Pressable
          onPress={deleteNote}
          style={{
            flex: 1,
            paddingVertical: 12,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#DC2626',
              fontWeight: '600',
            }}
          >
            Delete
          </Text>
        </Pressable>
      </View>
    )}

  </View>
))}
        
      </ScrollView>
      
      
    </KeyboardAvoidingView>
    </Pressable>
  )
}