import { Ref, ref, toValue } from "vue"

import { BaseError } from "./types"

/**
 * A simple errors reshaper, usefull for when your errors look like:
 * 
 * const errors = { 
 *   email: ["The Email Address has already been taken."], 
 *   phone: ["Invalid Phone Number"] 
 * };
 * 
 * But you want them to look like this instead:
 * 
 * const errors = { 
 *   email: "The Email Address has already been taken.", 
 *   phone: "Invalid Phone Number" 
 * };
 * 
 * @param errors 
 * @returns 
 */
export const reshapeError = (errors: BaseError['errors']) => {
    return Object.fromEntries(
        Object.entries(errors || {}).map(([key, value]) => [
            key,
            value[0],
        ]),
    )
}

/**
 * Create a countdown from a simple timeout value
 * @param timeout 
 * @param callback 
 * @returns 
 */
export const createCountdown = (
    timeout?: number | Ref<number | undefined>,
    callback?: (val: number) => void
) => {
    const countdown = ref<number>(0)
    const timeoutValue = toValue(timeout)

    if (timeoutValue && timeoutValue > 0) {
        countdown.value = timeoutValue
        const intval = setInterval(() => {
            countdown.value -= 1000
            if (callback) {
                callback(countdown.value)
            }
            if (countdown.value <= 0) {
                clearInterval(intval)
            }
        }, 1000)
    }

    return countdown
}
