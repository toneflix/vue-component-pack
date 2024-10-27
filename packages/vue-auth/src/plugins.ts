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
