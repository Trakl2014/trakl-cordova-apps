trakl-cordova-apps
==================

Uses cordova 3.4.1 for iOS and 3.4 for android, cordova Urbanairship(UA) plugin

TODO: test with cordova 3.5 and UA plugin

If you are testing the html UI you need ot do it in a server like node or use fenix(http://fenixwebserver.com/) on the www folder

May remove the platforms folder at later point since its rebuilt all the time any ways, to save time pushing git..

Here is code for cordova config.xml that's removed from repo.  Depending on whether clone this, or build a cordova app from scratch then imoport some of this it need to have the extra UA stuff below:

<?xml version='6.0' encoding='utf-8'?>
<widget id="com.berzerk.trakl" version="1.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>trakl</name>
    <description>
        Trakl
    </description>
    <author email="info@berzerk.co.nz" href="http://berzerk.co.nz">
        Berzerk
    </author>
    <content src="index.html" />
    <access origin="*" subdomains="true"/>
    <access origin="http://trakl.herokuapp.com" />
    <feature name="PushNotificationPlugin">
            <param name="ios-package" value="PushNotificationPlugin" />
            <param name="onload" value="true" />
        </feature>
        
         <!-- Urban Airship app credentials -->
        <preference name="com.urbanairship.production_app_key" value="######" />
        <preference name="com.urbanairship.production_app_secret" value="#######" />
        <preference name="com.urbanairship.development_app_key" value="######" />
        <preference name="com.urbanairship.development_app_secret" value="######" />
		<preference name="com.urbanairship.gcm_sender" value="######" />

        
        <!-- If the app is in production or not -->
        <preference name="com.urbanairship.in_production" value="false" />

        <!-- Enable push when the application launches (instead of waiting for enablePush js call).  Defaults to false -->
        <preference name="com.urbanairship.enable_push_onlaunch" value="true" />


</widget>
