import { useRouter } from 'next/navigation'

type DeleteFn<T> = (arg: T) => { unwrap: () => Promise<any> }

interface Options {
    onSuccess?: () => void

    redirectTo?: string

    confirmMessage?: string
}

export function useHandleDelete<T>(deleteFn: DeleteFn<T>, options: Options = {}) {
    const router = useRouter()
    const { onSuccess, redirectTo, confirmMessage = 'Бажаєте видалити цей пост?' } = options

    return async (id: T) => {
        if (!confirm(confirmMessage)) return

        try {
            await deleteFn(id).unwrap()
            if (onSuccess) {
                onSuccess()
            } else if (redirectTo) {
                router.push(redirectTo)
            }
        } catch (err) {
            console.error('Ошибка при удалении:', err)
        }
    }
}
