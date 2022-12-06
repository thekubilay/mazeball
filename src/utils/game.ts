export const setMotionDetection = (): Promise<boolean> => {
  return new Promise(resolve => {
    (DeviceMotionEvent as any).requestPermission().then((response: NotificationPermission) => {
      if (response == "granted") {
        resolve(true)
      } else {
        window.location.reload();
      }
    });

  })
};