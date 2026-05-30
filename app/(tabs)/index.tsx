import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native'
import React, { useState, useRef } from 'react'

import Hero from '@/components/Hero'
import Topbar from '@/components/Topbar'
import PdfCard from '@/components/PdfCard'
import FilterBar from '@/components/FilterBar'

const pdfs = [
  {
    id: '1',
    name: 'React Notes.pdf',
    size: '2.4 MB',
    date: '28/5/26',
    time: '10:30 AM',
    image: 'https://picsum.photos/200/300',
    sizeBytes: 2.4,
  },
  {
    id: '2',
    name: 'JavaScript Guide.pdf',
    size: '5.1 MB',
    date: '27/5/26',
    time: '2:15 PM',
    image: 'https://picsum.photos/200/301',
    sizeBytes: 5.1,
  },
  {
    id: '3',
    name: 'TypeScript Handbook.pdf',
    size: '3.8 MB',
    date: '26/5/26',
    time: '9:45 AM',
    image: 'https://picsum.photos/200/302',
    sizeBytes: 3.8,
  },
  {
    id: '4',
    name: 'Node.js Best Practices.pdf',
    size: '4.2 MB',
    date: '25/5/26',
    time: '11:20 AM',
    image: 'https://picsum.photos/200/303',
    sizeBytes: 4.2,
  },
  {
    id: '5',
    name: 'CSS Tricks.pdf',
    size: '1.9 MB',
    date: '24/5/26',
    time: '3:10 PM',
    image: 'https://picsum.photos/200/304',
    sizeBytes: 1.9,
  },
]

const getSortedPdfs = (data: any[], sortBy: string, sortDir: string) => {
  return [...data].sort((a, b) => {
    let valA, valB

    if (sortBy === 'name') {
      valA = a.name.toLowerCase()
      valB = b.name.toLowerCase()
      return sortDir === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA)
    }

    if (sortBy === 'size') {
      valA = a.sizeBytes
      valB = b.sizeBytes
      return sortDir === 'asc' ? valA - valB : valB - valA
    }

    if (sortBy === 'date') {
      const parse = (d: string) => {
        const [day, month, year] = d.split('/')
        return new Date(+`20${year}`, +month - 1, +day).getTime()
      }
      valA = parse(a.date)
      valB = parse(b.date)
      return sortDir === 'asc' ? valA - valB : valB - valA
    }

    return 0
  })
}

const Index = () => {
  const [layout, setLayout] = useState('list')
  const [showMenu, setShowMenu] = useState(false)
  const [page, setPage] = useState<'main' | 'view' | 'sort'>('main')
  const [sortBy, setSortBy] = useState('date')
  const [sortDir, setSortDir] = useState('asc')
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 })

  const filterBtnRef = useRef<View>(null)

  const closeMenu = () => {
    setShowMenu(false)
    setPage('main')
  }

  const openMenu = () => {
    filterBtnRef.current?.measure((_x, _y, width, height, pageX, pageY) => {
      setMenuPos({ top: pageY + height + 4, right: 20 })
      setShowMenu(true)
    })
  }

  const sortedPdfs = getSortedPdfs(pdfs, sortBy, sortDir)

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={sortedPdfs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PdfCard
            pdf={item}
            viewMode={layout}
          />
        )}

        ListHeaderComponent={
          <>
            <View style={{ marginTop: 40 }}>
              <Topbar />
              <Hero />
              <FilterBar
                layout={layout}
                setLayout={setLayout}
                showMenu={showMenu}
                openMenu={openMenu}
                page={page}
                setPage={setPage}
                sortBy={sortBy}
                setSortBy={setSortBy}
                filterBtnRef={filterBtnRef}
              />
            </View>
          </>
        }

        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      {showMenu && (
        <>
          <Pressable style={styles.backdrop} onPress={closeMenu} />

          <View style={[styles.menu, { top: menuPos.top, right: menuPos.right }]}>
            {page === 'main' && (
              <>
                <Pressable style={styles.item} onPress={() => setPage('view')}>
                  <Text>View ›</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={() => setPage('sort')}>
                  <Text>Sort ›</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={closeMenu}>
                  <Text>Reload</Text>
                </Pressable>
              </>
            )}

            {page === 'view' && (
              <>
                <Pressable style={styles.item} onPress={() => setPage('main')}>
                  <Text>← Back</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={() => { setLayout('list'); closeMenu() }}>
                  <Text>{layout === 'list' ? '● List' : '○ List'}</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={() => { setLayout('grid2'); closeMenu() }}>
                  <Text>{layout === 'grid2' ? '● Grid 2' : '○ Grid 2'}</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={() => { setLayout('grid3'); closeMenu() }}>
                  <Text>{layout === 'grid3' ? '● Grid 3' : '○ Grid 3'}</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={() => { setLayout('grid4'); closeMenu() }}>
                  <Text>{layout === 'grid4' ? '● Grid 4' : '○ Grid 4'}</Text>
                </Pressable>
              </>
            )}

            {page === 'sort' && (
              <>
                <Pressable style={styles.item} onPress={() => setPage('main')}>
                  <Text>← Back</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={() => setSortBy('name')}>
                  <Text>{sortBy === 'name' ? '● Name' : '○ Name'}</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={() => setSortBy('date')}>
                  <Text>{sortBy === 'date' ? '● Date Modified' : '○ Date Modified'}</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={() => setSortBy('size')}>
                  <Text>{sortBy === 'size' ? '● Size' : '○ Size'}</Text>
                </Pressable>

                <View style={styles.divider} />

                <Pressable style={styles.item} onPress={() => setSortDir('asc')}>
                  <Text>{sortDir === 'asc' ? '● Ascending' : '○ Ascending'}</Text>
                </Pressable>

                <Pressable style={styles.item} onPress={() => setSortDir('desc')}>
                  <Text>{sortDir === 'desc' ? '● Descending' : '○ Descending'}</Text>
                </Pressable>
              </>
            )}
          </View>
        </>
      )}
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    overflow: 'hidden',
    zIndex: 9999,
    elevation: 8,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  divider: {
    height: 6,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9998,
  },
}) 