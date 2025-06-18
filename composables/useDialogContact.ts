export default function () {
    const dialogContact = useState('dialogContact')

    return {
        open() {
            dialogContact.value = 'Opened'
        },
        close() {
            dialogContact.value = 'Close'
        }
    }
}