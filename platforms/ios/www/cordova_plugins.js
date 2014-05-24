cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.urbanairship.phonegap.PushNotification/www/PushNotification.js",
        "id": "com.urbanairship.phonegap.PushNotification.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.urbanairship.phonegap.PushNotification": "2.4.0",
    "org.apache.cordova.device": "0.2.10-dev"
}
// BOTTOM OF METADATA
});