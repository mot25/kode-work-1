export const secondToTime = (timer: number) => {
  ``
  const minutes = (Math.floor(timer / 60).toString()).padStart(2, '0')
  const second = (timer - (Math.floor(timer / 60) * 60)).toString().padStart(2, '0')
  return timer < 1 ? '00:00' : `${minutes}:${second}`
}

export const getSecondFromMinutes = (min: number, time: number) => parseInt(((min * 60) + (time - Date.now()) / 1000).toString())