import { View, Text, FlatList, Pressable } from 'react-native'

const pages = Array.from({ length: 24 }, (_, i) => i + 1)

export default function Pages() {
  return (
    <FlatList
      data={pages}
      numColumns={3}
      keyExtractor={(item) => item.toString()}
      contentContainerStyle={{ padding: 16 }}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable
          style={{
            width: '31%',
            marginBottom: 12,
            alignItems: 'center',
          }}
        >

          <View
            style={{
              width: '100%',
              height: 140,
              backgroundColor: '#fff',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#e5e5e5',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical:10,
            }}
          >
            <Text style={{ color: '#bbb', fontSize: 12 }}>
              Page Preview
            </Text>
          </View>

          <View
            style={{
              position:'absolute',
              bottom:-3,
              backgroundColor: '#d9d9d9',
              borderRadius: 8,
              paddingVertical: 6,
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                
              }}
            >
              {item}
            </Text>
          </View>

        </Pressable>
      )}
    />
  )
}