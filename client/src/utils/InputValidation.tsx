export const isNumberOnly = (value: string): string => {
    const regex = /^[\u0030-\u0039.]*$/;
    if(!regex.test(value)) {
        return '半角数字のみを入力してください.';
    }

    return '';
}
