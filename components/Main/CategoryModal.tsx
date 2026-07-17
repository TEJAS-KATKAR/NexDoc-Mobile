import { Modal, View, Text, Pressable, FlatList, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { pickPdf } from '@/services/pdfService'

const dummyPdfs = [
  { id: '1', name: 'HTML5 Guide.pdf' },
  { id: '2', name: 'Machine Learning.pdf' },
  { id: '3', name: 'React Native Notes.pdf' },
  { id: '4', name: 'Java Handbook.pdf' },
  { id: '5', name: 'Statistics.pdf' },
  { id: '6', name: 'Machine Learning.pdf' },
  { id: '7', name: 'React Native Notes.pdf' },
  { id: '8', name: 'Java Handbook.pdf' },
  { id: '9', name: 'Statistics.pdf' },
  { id: '12 ', name: 'Statistics.pdf' },
]

const COLORS = [
    {
      bgColor: '#EEF4FF',
      iconColor: '#5B8DEF',
    },
    {
      bgColor: '#F4EEFF',
      iconColor: '#8B6BFF',
    },
    {
      bgColor: '#EEFFF6',
      iconColor: '#34B27B',
    },
    {
      bgColor: '#FFF6EA',
      iconColor: '#F0A53A',
    },
    {
      bgColor: '#FFEFEF',
      iconColor: '#E06262',
    },
    {
      bgColor: '#F3F4F6',
      iconColor: '#4B5563',
    },
  ]

export default function CategoryModal({
  visible,
  onClose,
  category,
  onColorChange,
  onPdfAdded,
}: any) {

  const handleAddFiles = async () => {
    const pdfs = await pickPdf()
  
    if (pdfs.length > 0) {
      onPdfAdded?.(pdfs)
    }
  }
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
        <View style={{ flex:1,backgroundColor: 'rgba(0,0,0,0.4)', }}>

        <Pressable
        onPress={onClose}
        style={{
            position:'absolute',
            top:0,
            left:0,
            right:0,
            bottom:0,
        }}
        
        />
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        
        >
        <View
          
            style={{
                width: '92%',
                height: '70%',
                backgroundColor:
                    category?.bgColor || '#FFFFFF',
                borderRadius: 24,
                
          }}
        >
          {/* Header */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 18,
              borderBottomWidth: 1,
              borderColor: '#F3F4F6',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#111827',
              }}
            >
              {category?.name}
            </Text>

            <Pressable onPress={onClose}>
              <Ionicons
                name="close"
                size={24}
                color="#6B7280"
              />
            </Pressable>
          </View>

          {/* PDF List */}

          <ScrollView
  style={{ flex: 1 }}
  contentContainerStyle={{
    padding: 16,
  }}
  showsVerticalScrollIndicator
>
  {dummyPdfs.map(item => (
    <View
      key={item.id}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 12,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          backgroundColor: '#E5E7EB',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="document-text-outline"
          size={20}
          color="#374151"
        />
      </View>

      <Text
        style={{
          marginLeft: 12,
          flex: 1,
          fontSize: 14,
          fontWeight: '600',
          color: '#111827',
        }}
      >
        {item.name}
      </Text>
    </View>
  ))}
</ScrollView>

          {/* Bottom Button */}

          <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingBottom: 12,
                paddingTop: 6,
            }}
            >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {COLORS.map(color => (
                <Pressable
                    key={color.bgColor}
                    onPress={() => {
                    onColorChange(
                        category.id,
                        color.bgColor,
                        color.iconColor,
                    )
                    }}
                    style={{
                    width: 34,
                    height: 34,
                    borderRadius: 999,
                    backgroundColor: color.bgColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                    borderWidth:
                        category?.bgColor === color.bgColor
                        ? 3
                        : 1,
                    borderColor:
                        category?.bgColor === color.bgColor
                        ? '#2563EB'
                        : '#D1D5DB',
                    }}
                >
                <View
                style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    backgroundColor: color.iconColor,
                }}
                />
            </Pressable>
                ))}
                </ScrollView>

                <Pressable
                  onPress={handleAddFiles}
                    style={{
                    paddingVertical: 12,
                    paddingHorizontal: 4,
                    }}
                >
                    <Text
                    style={{
                        color: '#6668E9',
                        fontWeight: '700',
                    }}
                    >
                    + Add Files
                    </Text>
                </Pressable>
                </View>
            </View>
        </View>
      </View>
    </Modal>
  )
}
