import { View, Text, FlatList, Pressable, TextInput } from 'react-native'

const pages = Array.from({ length: 50 }, (_, i) => i + 1)

export default function Pages() {
  return (
    <FlatList
      data={pages}
      numColumns={5}
      key="pages-grid-5"
      keyExtractor={(item) => item.toString()}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 30,
      }}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginBottom: 12,
      }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
          }}
        >
          <TextInput
            placeholder="# Jump to page..."
            placeholderTextColor="#9CA3AF"
            style={{
              flex: 1,
              height: 40,
              backgroundColor: '#FFFFFF',
              borderRadius: 12,
              paddingHorizontal: 12,
              borderWidth: 1,
              borderColor: '#E5E7EB',
              fontSize: 12,
            }}
          />

          <Pressable
            style={{
              marginLeft: 8,
              backgroundColor: '#6366F1',
              borderRadius: 12,
              width: 42,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 12,
                fontWeight: '600',
              }}
            >
              Go
            </Text>
          </Pressable>
        </View>
      }
      renderItem={({ item }) => {
        const isCurrentPage = item === 2

        return (
          <Pressable
            style={{
              width: '18%',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: '100%',
                aspectRatio: 0.72,
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                borderWidth: isCurrentPage ? 2 : 1,
                borderColor: isCurrentPage
                  ? '#6366F1'
                  : '#E5E7EB',
                padding: 4,
              }}
            >
              <View
                style={{
                  height: 3,
                  backgroundColor: '#6B7280',
                  borderRadius: 2,
                  marginBottom: 3,
                }}
              />

              <View
                style={{
                  height: 2,
                  backgroundColor: '#D1D5DB',
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              />

              <View
                style={{
                  height: 2,
                  width: '85%',
                  backgroundColor: '#D1D5DB',
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              />

              <View
                style={{
                  height: 2,
                  width: '70%',
                  backgroundColor: '#D1D5DB',
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              />

              <View
                style={{
                  height: 2,
                  backgroundColor: '#D1D5DB',
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              />

              <View
                style={{
                  height: 2,
                  width: '90%',
                  backgroundColor: '#D1D5DB',
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              />

              <View
                style={{
                  height: 2,
                  width: '75%',
                  backgroundColor: '#D1D5DB',
                  borderRadius: 2,
                }}
              />
            </View>

            <Text
              style={{
                marginTop: 4,
                fontSize: 10,
                fontWeight: isCurrentPage ? '700' : '500',
                color: isCurrentPage
                  ? '#6366F1'
                  : '#9CA3AF',
              }}
            >
              {item}
            </Text>
          </Pressable>
        )
      }}
    />
  )
}