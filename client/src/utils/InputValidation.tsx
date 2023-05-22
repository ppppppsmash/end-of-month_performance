export const isNumberOnly = (time: string): string => {
    const regex = /^[\u0030-\u0039.]*$/;
    if(!regex.test(time)) {
        return '半角数字のみを入力してください.';
    }

    return '';
}
