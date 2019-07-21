import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Colors, Fonts, Metrics } from "../Themes";
import VideoPlayer from "react-native-video-player";

export default class CardVideo extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <View style={styles.videoBox}>
        <View style={styles.videoPlayer}>
          <VideoPlayer
            endWithThumbnail
            thumbnail={{
              uri: "http://i3.ytimg.com/vi/7jIBEUNuv6k/hqdefault.jpg"
            }}
            video={{ uri: "https://www.youtube.com/watch?v=7jIBEUNuv6k" }}
            videoWidth={Metrics.screenWidth - 50}
            videoHeight={Metrics.screenWidth - 50}
            duration={120}
            ref={r => (this.player = r)}
          />
          <Button onPress={() => this.player.stop()} title="Stop" />
          <Button onPress={() => this.player.pause()} title="Pause" />
          <Button onPress={() => this.player.resume()} title="Resume" />
        </View>
        <View style={styles.videoTitle}>
          <Text style={styles.videoTitleTxt}>How do you do XYZ ?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  videoBox: {
    alignSelf: "baseline",
    backgroundColor: Colors.cloud,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    marginRight: 5,
    elevation: 1,
    width: Metrics.screenWidth - 20
  },
  videoPlayer: {
    width: Metrics.screenWidth - 40
  },
  videoTitle: {
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  videoTxt: {
    fontSize: Fonts.size.medium,
    color: Colors.gray
  }
});
