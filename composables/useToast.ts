export default function () {
    const toast = useState('toast')

    return {
        error(message: string) {
            toast.value = { type: 'error', message }
        },
        success(message: string) {
            toast.value = { type: 'success', message }
        }
    }
}