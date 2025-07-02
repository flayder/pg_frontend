export default function () {
    const dialogCookie = useState('dialogCookie')

    return {
        open() {
            dialogCookie.value = true
        },
        close() {
            dialogCookie.value = 'Close'
        }
    }
}