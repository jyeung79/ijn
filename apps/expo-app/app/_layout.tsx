import { Provider } from '@ijn/app/provider'
import { Stack } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
