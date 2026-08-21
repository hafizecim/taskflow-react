import { useEffect, useState } from 'react'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const loadData = async () => {
      try {
        if (!cancelled) {
          setLoading(true)
          setError(null)
        }

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result: T = await response.json()

        if (!cancelled) {
          setData(result)
          setLoading(false)
        }
      } catch (error) {
        if (!cancelled) {
          setError(
            error instanceof Error
              ? error.message
              : 'An unexpected error occurred',
          )
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      cancelled = true
    }
  }, [url])

  const refetch = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const result: T = await response.json()

      setData(result)
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred',
      )
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    loading,
    error,
    refetch,
  }
}

export default useFetch