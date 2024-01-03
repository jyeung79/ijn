import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text } from '@ijn/app/design/typography'
import { View } from '@ijn/app/design/view'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/auth/apple-auth">👈 Go Home</TextLink>
    </View>
  )
}
