export const createFormData = (data: Record<string, any>): FormData => {
    const form = new FormData();
    for (const key in data) {
        data.append(key, data[key]);
    }
    return form;
}
