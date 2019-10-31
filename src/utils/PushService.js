import PushNotification from 'react-native-push-notification'
import firebase from 'react-native-firebase';

export default class PushService {
  static init() {
    PushService.onNotification = (notification) => {
      console.log('notification -------------------------------')
      console.log(notification)
      console.log('notification -------------------------------')
      if (notification.title && notification.data) {
        PushNotification.localNotification({
          title: notification.title,
          message: notification.data.message
        })
      }
    }
    PushService.onRegistration = null
    PushService.tab = null
  }
  static setCallbacks(onRegistration, onNotification) {
    PushService.onRegistration = onRegistration
    PushService.onNotification = onNotification
  }
  static saveNotification(type, notification) {
    
  }
  static configure() {
    PushNotification.configure({
      onRegister: function(token) {
        if (PushService.onRegistration) {
          PushService.onRegistration(token)
        }
      },
      onNotification: function(notification) {
        if (PushService.onNotification) {
          PushService.saveNotification('insert', notification)
          PushService.onNotification(notification)
        }
      },
      //novo sender by matheus
      senderID: "463804130018",
      //antigo sender firebase
      // senderID: "63477722176",
      permissions: {
          alert: true,
          badge: true,
          sound: true
      },
      popInitialNotification: true,
      requestPermissions: true,
    })
  }

  static firebase = async () => {
    const messaging = firebase.messaging();
    let device = null;

     await messaging.hasPermission()
      .then( async (enable) => {
        if(enable) {
          await messaging.getToken()
            .then(token => {
              device = token;
            })
            .catch(error => {
              console.log(error);
            })
        }
      })
      .catch(error => {
        console.log('errorr fire',error);
       });

    firebase.notifications().onNotification((notification) => {
      const { title, body} = notification;
      PushNotification.localNotification({
        title: title,
        message: body,
      });
    });

    return device;
  }
}

export function getDeviceToken(params) {
  
}

export function getNotification() {
  PushNotification.localNotification({
    title: "My Notification Title",
    message: "My Notification Message",
  });
}

PushService.init()