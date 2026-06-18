import { View, Text, Pressable, BackHandler} from 'react-native'
import React, { useState , useEffect} from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'


import Pages from '@/components/Viewer/Pages'
import Content from '@/components/Viewer/Content'
import Notes from '@/components/Viewer/Notes'
import Ai from '@/components/Viewer/Ai'
import More from '@/components/Viewer/More'

const Viewer = () => {
  const { name } = useLocalSearchParams()
  const insets = useSafeAreaInsets()
  const { source } = useLocalSearchParams()
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const panelHeights = {
    pages: '75%',
    contents: '55%',
    notes: '80%',
    ai: '45%',
    more: '50%',
  }

  useEffect(() => {

    const backAction = () => {
  
      if (activeTab) {
        setActiveTab(null)
        return true
      }
  
      return false
    }
  
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )
  
    return () => subscription.remove()
  
  }, [activeTab])


return (
  <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#fff' }}>

    {/* Header */}

    <View
      style={{
        paddingHorizontal: 18,
        paddingTop: 12,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderColor: '#f1f1f1',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <Pressable onPress={() => router.back()} style={{ marginRight: 10 }}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </Pressable>

        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={1}
            style={{ fontSize: 17, fontWeight: '700', color: '#111' }}
          >
            {name || 'Machine Learning Fundamentals'}
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: '#8b8b8b',
              marginTop: 2,
            }}
          >
            PDF • 120 Pages
          </Text>
        </View>

        <Pressable style={{ padding: 8 }}>
          <Ionicons name="search" size={24} color="#111" />
        </Pressable>

        <Pressable style={{ padding: 8 }}>
          <Ionicons name="bookmark-outline" size={24} color="#111" />
        </Pressable>

      </View>
    </View>

    {/* PDF Area */}

    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 80 + insets.bottom,
      }}
    >

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>

          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
            }}
          >
            Machine Learning Fundamentals
          </Text>

          <Text style={{ marginTop: 16, fontSize:48 }}>
            PDF content placeholder...
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa delectus quis hic ex expedita tempore voluptates facere nostrum accusamus fugiat, deserunt nemo, consequatur veniam ea aperiam labore, doloremque iure quia.
          </Text>

        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          left: 16,
          bottom: 130,
          backgroundColor: '#111',
          borderRadius: 999,
          paddingHorizontal: 12,
          paddingVertical: 6,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
            fontWeight: '600',
          }}
        >
          5 / 120
        </Text>
      </View>

    </View>
    {activeTab && (
      <Pressable
        pointerEvents="box-only"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 72 + insets.bottom,
          zIndex: 997,
        }}
        onPress={() => setActiveTab(null)}
      />
    )}
        
    {activeTab && (
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 72 + insets.bottom,
          height:
            activeTab === 'pages' ? '50%' :
            activeTab === 'contents' ? '50%' :
            activeTab === 'notes' ? '50%' :
            activeTab === 'ai' ? '30%' :
            activeTab === 'more' ? '40%' :
            '50%',
          backgroundColor: '#fff',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderWidth: 1,
          borderColor: '#e5e5e5',
          zIndex: 998,
        }}
      >
        <View
          style={{
            width: 40,
            height: 5,
            borderRadius: 999,
            backgroundColor: '#ccc',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />

        {activeTab === 'pages' && <Pages />}
        {activeTab === 'contents' && <Content />}
        {activeTab === 'notes' && <Notes />}
        {activeTab === 'ai' && <Ai />}
        {activeTab === 'more' && <More />}
      </View>
    )}
    {/* Bottom Nav */}

    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: insets.bottom,
        height: 72,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#f1f1f1',
      }}
    >

      <BottomItem
        active={activeTab === 'pages'}
        onPress={() => setActiveTab(activeTab === 'pages' ? null : 'pages')}
        icon={<MaterialIcons name="grid-view" size={22} color={activeTab === 'pages' ? '#2563eb' : '#777'} />}
        label="Pages"
      />

      <BottomItem
        active={activeTab === 'contents'}
        onPress={() => setActiveTab(activeTab === 'contents' ? null : 'contents')}
        icon={<Ionicons name="list-outline" size={22} color={activeTab === 'contents' ? '#2563eb' : '#777'} />}
        label="Contents"
      />

      <BottomItem
        active={activeTab === 'notes'}
        onPress={() => setActiveTab(activeTab === 'notes' ? null : 'notes')}
        icon={<Ionicons name="document-text-outline" size={22} color={activeTab === 'notes' ? '#2563eb' : '#777'} />}
        label="Notes"
      />

      <BottomItem
        active={activeTab === 'ai'}
        onPress={() => setActiveTab(activeTab === 'ai' ? null : 'ai')}
        icon={<FontAwesome6 name="sparkles" size={18} color={activeTab === 'ai' ? '#2563eb' : '#777'} />}
        label="AI"
      />

      <BottomItem
        active={activeTab === 'more'}
        onPress={() => setActiveTab(activeTab === 'more' ? null : 'more')}
        icon={<Ionicons name="ellipsis-horizontal" size={22} color={activeTab === 'more' ? '#2563eb' : '#777'} />}
        label="More"
      />

      
      

    </View>

  </SafeAreaView>
)
}

const BottomItem = ({ icon, label, active, onPress }: any) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}

      <Text
        style={{
          marginTop: 4,
          fontSize: 12,
          fontWeight: active ? '600' : '400',
          color: active ? '#2563eb' : '#777',
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export default Viewer