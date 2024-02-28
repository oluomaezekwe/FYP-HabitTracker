import React, { useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import {
  BottomModal,
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";

function Tips() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={{
            width: Dimensions.get("screen").width * 0.85,
            height: 150,
            backgroundColor: "lightgray",
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, padding: 50 }}>Daily Tip</Text>
        </Pressable>
      </View>

      <BottomModal
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        onHardwareBackPress={() => setModalVisible(!isModalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalTitle={<ModalTitle title="Daily Tip" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        visible={isModalVisible}
        onTouchOutside={() => setModalVisible(!isModalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 600 }}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18 }}>Read Today's Tip Here!</Text>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
}

export default Tips;
