import * as Notifications from 'expo-notifications';

export const schedulePushNotification = async (
    title: string,
    body: string = '',
) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title,
            body
        },
        trigger: { seconds: 2 },
    });
}