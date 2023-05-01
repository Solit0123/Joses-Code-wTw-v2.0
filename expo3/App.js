import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Share, Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import tw from 'twrnc';

// import { Share as RNShare } from 'react-native-share';


// function shareToInstagram() {
//   const message = 'Check out this awesome app!';
//   const url = 'https://example.com';
//   const instagramHandle = 'instagram'; // replace with the Instagram handle of the user you want to share with
//   const shareOptions = {
//     message: message,
//     url: url,
//     social: Share.Social.INSTAGRAM,
//     // Note: the following options are only available on Android
//     // packageName: 'com.instagram.android',
//     // appId: '1234567890',
//     // activityType: 'Share',
//     // filename: 'test.jpg',
//     // mimeType: 'image/jpeg',
//     // excludedActivityTypes: ['com.facebook.katana', 'com.twitter.android'],
//   };
//   Share.shareSingle(shareOptions, instagramHandle)
//     .then(result => {
//       if (result.action === Share.sharedAction) {
//         console.log('Shared successfully');
//       } else if (result.action === Share.dismissedAction) {
//         console.log('Share dismissed');
//       }
//     })
//     .catch(error => console.log('Error sharing:', error));
// }

import * as Sharing from 'expo-sharing';






const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        `React Native | A framework for building native apps using React `,
        url: 'www.google.com',
        title: 'this is the title of this thing for android'
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

const shareText = async () => {
  try {
    const result = await Sharing.shareAsync("", {dialogTitle: 'dialog text dude'});
    if (result.action === Sharing.sharedAction) {
      console.log('Shared successfully');
    } else if (result.action === Sharing.dismissedAction) {
      console.log('Share dismissed');
    }
  } catch (error) {
    console.log('Error sharing:', error);
  }
};

function HomeScreen({navigation}) {
  
console.log(Share);
  return (
    <View>
      <Text style={tw.style("text-xl md:text-3xl xl:text-3xl")}>Home Screens</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail Screen')}
      />
      <Button onPress={onShare} title="Share" />
      {/* <Button onPress={shareToInstagram} title="Share to Instagram" />
       */}
        <Button onPress={shareText} title="Share using expo" />
      
      <StatusBar style="auto" />
    </View>
  );
}

function DetailScreen() {
 return (
    <View style={tw`flex justify-center items-center h-full`}>
      <View style={tw`bg-blue-500 p-4 rounded-lg`}>
        <Text style={tw`text-white font-bold text-lg py-[40%] max-w-[500px]  px-[15%]`}>Nothing is swifter than our years.</Text>
 
<Button style={tw`w-1/2 `}  onPress={onShare} title="Share" />  
<View>
  
</View>
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail Screen" component={DetailScreen} />
      </Stack.Navigator>
     </NavigationContainer>
    
  );
}
