export function throwHttpErrors(response) {
    if (response.ok) {
        return response;
    } else {
        throw Error(`HTTP ${response.status} ${response.statusText}`)
    }
}