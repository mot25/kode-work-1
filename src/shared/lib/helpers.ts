export const thousand = (str: string) => {
    const a = parseInt(str).toString().split('.')[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    const b = parseInt(str).toString().split('.')[1]
    return !!b ? `${a}.${b}` : `${a}`
}


export const getProcent = (procent: number, sum: string = '0 ') => {
    if (!sum) return ''
    return (+(sum || '')?.split(' ').join('')) / 100 * procent || '0'
}


export function convertMsToHM(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;
    minutes = minutes % 60;
    hours = hours % 24;

    return hours
}