export interface Fireable {

    /**
     * Fire the toaster notification
     * @param {any}    options
     * @param {string} title
     * @param {string} body
     */
    fire(options: any, title: string, body: string): void
}
