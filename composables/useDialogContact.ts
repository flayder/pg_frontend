export default function () {
    const dialogContact = useState('dialogContact')

    return {
        open() {
            if(dialogContact.value != 'Opened')
                dialogContact.value = 'Opened'
            else
                dialogContact.value = 'Opened1'
        },
        close() {
            dialogContact.value = 'Close'
        }
    }
}