import { View, Text, Pressable, BackHandler} from 'react-native'
import React, { useState , useEffect} from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet'
import { useMemo, useRef } from 'react'

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
  const [sheetOpen, setSheetOpen] = useState(false)

const bottomSheetRef = useRef<BottomSheet>(null)

const snapPoints = useMemo(() => ['55%'], [])

const renderBackdrop = (props: any) => (
  <BottomSheetBackdrop
    {...props}
    disappearsOnIndex={-1}
    appearsOnIndex={0}
    pressBehavior="close"
  />
)

const openTab = (tab: string) => {
  setActiveTab(tab)
  setSheetOpen(true)
  bottomSheetRef.current?.expand()
}
useEffect(() => {
  const backAction = () => {

    if (sheetOpen) {
      bottomSheetRef.current?.close()
      return true
    }

    return false
  }

  const subscription = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction
  )

  return () => subscription.remove()
}, [sheetOpen])

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#fff' }}>

      {/* Header */}

      <View style={{ paddingHorizontal: 18, paddingTop: 12, paddingBottom: 14, borderBottomWidth: 1, borderColor: '#f1f1f1' }}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Pressable onPress={() => router.back()} style={{ marginRight: 10 }}>
          <Ionicons name="chevron-back" size={28} color="black" />
          </Pressable>

          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: '700', color: '#111' }}>
              {name || 'Machine Learning Fundamentals'}
            </Text>

            <Text style={{ fontSize: 13, color: '#8b8b8b', marginTop: 2, marginLeft:10}}>
              PDF • 120 pages
            </Text>
          </View>

          <Pressable style={{ padding: 8,margin:4 }}>
            <Ionicons name="search" size={26} color="#111" />
          </Pressable>

          <Pressable style={{ padding: 8, margin:0}}>
            <Ionicons name="bookmark-outline" size={26} color="#111" />
          </Pressable>


        </View>

      </View>

      {/* PDF Area */}

      <View style={{ flex: 1, padding: 0 }}>

        <View
          style={{
            flex: 1,
            backgroundColor: '#f7f7f7',
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOpacity: 0.08,
              shadowRadius: 10,
              elevation: 4,
            }}
          >

            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
              }}
            >
              <ScrollView
                  style={{ flex: 1 }}
                  showsVerticalScrollIndicator={false}
                >
              <View style={{ padding: 20, }}>
                <Text style={{ fontSize: 24, fontWeight: '700', width:'100%', backgroundColor:'lightblue' }}>
                  Machine Learning Fundamentals
                </Text>

                <Text style={{ marginTop: 12 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium tenetur eum similique magni repellat voluptate nostrum in esse ea facilis nihil quae tempora exercitationem molestias, saepe corrupti molestiae fuga.
                </Text>

                <Text style={{ marginTop: 12 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet fugit assumenda laudantium perspiciatis debitis, repellat repudiandae libero quidem vitae vero id facere, hic accusamus, nobis voluptates saepe at aliquam animi!
                </Text>

                <Text style={{ marginTop: 12 }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quae nulla exercitationem dolore deleniti iste sint eius ab molestiae asperiores? Accusamus rem, illum alias voluptas cumque hic. Odio, numquam minima.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi veritatis expedita fugit odit dolor reprehenderit cum, aliquid deserunt dolore possimus voluptatem cupiditate consectetur, voluptatum sint vel eveniet aliquam laborum accusantium.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi quia dolorum, nulla perferendis laborum quaerat omnis velit! Iste debitis fugiat ab distinctio minus aut magnam. Architecto cumque dignissimos eveniet.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quod blanditiis, rem nesciunt asperiores illo est provident dolor deleniti ratione, illum repellat, excepturi repellendus quae nulla. Nulla numquam repellat inventore.
                </Text>
                <Text style={{ marginTop: 12 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet fugit assumenda laudantium perspiciatis debitis, repellat repudiandae libero quidem vitae vero id facere, hic accusamus, nobis voluptates saepe at aliquam animi!
                </Text>
                <Text style={{ marginTop: 12 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet fugit assumenda laudantium perspiciatis debitis, repellat repudiandae libero quidem vitae vero id facere, hic accusamus, nobis voluptates saepe at aliquam animi!
                </Text>



              </View>
              </ScrollView>
            </View>

          </View>

          {/* Page Indicator */}

          <View
            style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              backgroundColor: '#111',
              borderRadius: 999,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}>
              5 / 120
            </Text>
          </View>

        </View>

      </View>

      {/* Bottom Toolbar */}

      <View
        style={{
          borderTopWidth: 1,
          borderColor: '#f1f1f1',
          flexDirection: 'row',
          paddingTop: 10,
          paddingBottom: Math.max(insets.bottom, 12),
          backgroundColor: '#fff',
        }}
      >

        <BottomItem
          active={activeTab === 'pages'}
          onPress={() => openTab('pages')}
          icon={<MaterialIcons name="grid-view" size={22} color={activeTab === 'pages' ? '#2563eb' : '#777'} />}
          label="Pages"
        />

        <BottomItem
          active={activeTab === 'contents'}
          onPress={() => openTab('contents')}
          icon={<Ionicons name="list-outline" size={22} color={activeTab === 'contents' ? '#2563eb' : '#777'} />}
          label="Contents"
        />

        <BottomItem
          active={activeTab === 'notes'}
          onPress={() => openTab('notes')}
          icon={<Ionicons name="document-text-outline" size={22} color={activeTab === 'notes' ? '#2563eb' : '#777'} />}
          label="Notes"
        />

        <BottomItem
          active={activeTab === 'ai'}
          onPress={() => openTab('ai')}
          icon={<FontAwesome6 name="sparkles" size={18} color={activeTab === 'ai' ? '#2563eb' : '#777'} />}
          label="AI"
        />

        <BottomItem
          active={activeTab === 'more'}
          onPress={() => openTab('more')}
          icon={<Ionicons name="ellipsis-horizontal" size={22} color={activeTab === 'more' ? '#2563eb' : '#777'} />}
          label="More"
        />

      </View>
      <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          enablePanDownToClose
          backgroundStyle={{ backgroundColor: '#fff' }}
          handleIndicatorStyle={{ backgroundColor: '#999' }}
          onClose={() => setSheetOpen(false)}
        >
          <BottomSheetView style={{ flex: 1 }}>
            {activeTab === 'pages' && <Pages />}
            {activeTab === 'contents' && <Content />}
            {activeTab === 'notes' && <Notes />}
            {activeTab === 'ai' && <Ai />}
            {activeTab === 'more' && <More />}
          </BottomSheetView>
        </BottomSheet>
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