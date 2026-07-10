import { Linking, Platform } from 'react-native'

export const hasFilePermission = async () => {
  // We'll implement the real permission check next.
  return false
}

export const requestFilePermission = async () => {
  if (Platform.OS !== 'android') return

  await Linking.openSettings()
}