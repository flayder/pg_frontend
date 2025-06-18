export default function () {
    return useState<boolean>('user', () => false)
}