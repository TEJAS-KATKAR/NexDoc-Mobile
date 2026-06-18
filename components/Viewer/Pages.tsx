import { View, Text, FlatList, Pressable } from 'react-native'

const pages = Array.from({ length: 50 }, (_, i) => i + 1)

export default function Pages() {
  return (
    <FlatList
      data={pages}
      numColumns={3}
      keyExtractor={(item) => item.toString()}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 30,
      }}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        const isCurrentPage = item === 12
      
        return (
          <Pressable
            style={{
              width: '31%',
              marginBottom: 18,
            }}
          >
            <View
              style={{
                height: 170,
                backgroundColor: '#FFFFFF',
                borderRadius: 12,
                borderWidth: isCurrentPage ? 2 : 1,
                borderColor: isCurrentPage
                  ? '#6366F1'
                  : '#E5E7EB',
                overflow: 'hidden',
      
                shadowColor: '#000',
                shadowOpacity: 0.08,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 3 },
                elevation: 3,
              }}
            >
              <View
                style={{
                  flex: 1,
                  padding: 8,
                }}
              >
                <View
                  style={{
                    height: 8,
                    backgroundColor: '#E5E7EB',
                    borderRadius: 3,
                    marginBottom: 8,
                  }}
                />
      
                <View
                  style={{
                    height: 6,
                    backgroundColor: '#F3F4F6',
                    borderRadius: 3,
                    marginBottom: 6,
                  }}
                />
      
                <View
                  style={{
                    height: 6,
                    width: '90%',
                    backgroundColor: '#F3F4F6',
                    borderRadius: 3,
                    marginBottom: 6,
                  }}
                />
      
                <View
                  style={{
                    height: 6,
                    width: '70%',
                    backgroundColor: '#F3F4F6',
                    borderRadius: 3,
                    marginBottom: 16,
                  }}
                />
      
                <View
                  style={{
                    height: 60,
                    backgroundColor: '#F9FAFB',
                    borderRadius: 8,
                    marginBottom: 10,
                  }}
                />
      
                <View
                  style={{
                    height: 6,
                    backgroundColor: '#F3F4F6',
                    borderRadius: 3,
                    marginBottom: 6,
                  }}
                />
      
                <View
                  style={{
                    height: 6,
                    width: '80%',
                    backgroundColor: '#F3F4F6',
                    borderRadius: 3,
                  }}
                />
              </View>
            </View>
      
            <View
              style={{
                alignSelf: 'center',
                marginTop: 8,
                backgroundColor: isCurrentPage
                  ? '#6366F1'
                  : '#EEF2F7',
                borderRadius: 999,
                paddingHorizontal: 12,
                paddingVertical: 4,
              }}
            >
              <Text
                style={{
                  color: isCurrentPage
                    ? '#FFFFFF'
                    : '#6B7280',
                  fontSize: 11,
                  fontWeight: '600',
                }}
              >
                {item}
              </Text>
            </View>
          </Pressable>
        )
      }}
      
    />
  )
}