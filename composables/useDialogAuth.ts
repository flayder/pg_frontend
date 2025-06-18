export default function () {
    const dialogAuth = useState('dialogAuth')

    return {
        open(type: 'Register' | 'Log in') {
            dialogAuth.value = type
        },
        close() {
            dialogAuth.value = 'Close'
        }
    }
}