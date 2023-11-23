import { queryKey } from '@/constants/queryKey'
import { TPost } from '@/types'
import { useQuery } from '@tanstack/react-query'

const usePostsQuery = () => {
  const { data } = useQuery({
    queryKey: queryKey.posts(),
    initialData: [] as TPost[],
    enabled: false,
  })

  if (!data) throw new Error('Posts data is not found')

  return data
}

export default usePostsQuery
