/* eslint-disable @typescript-eslint/no-explicit-any */
export default function (callee: (...args: any[]) => any, timeoutMs: number) {
    let lastCall: number, lastCallTimer: ReturnType<typeof setTimeout>
    return function (...args: any[]) {
        const previousCall = lastCall
        lastCall = Date.now()

        if (previousCall && lastCall - previousCall <= timeoutMs) {
            clearTimeout(lastCallTimer)
        }

        return new Promise<any>(
            (resolve) =>
                (lastCallTimer = setTimeout(
                    () => resolve(callee(...args)),
                    timeoutMs
                ))
        )
    }
}
