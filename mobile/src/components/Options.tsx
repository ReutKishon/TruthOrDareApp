import React, { useContext, useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Modal,
  TouchableHighlight,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setAskedChoice } from "../app/game";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconAntDesign from "react-native-vector-icons/AntDesign";

function TruthDarePopUp({ visible }) {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <Modal transparent={true} visible={isVisible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.modalView}>
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight
              style={[styles.button, { backgroundColor: "green" }]}
              onPress={() => {
                dispatch(setAskedChoice("truth"));
                setIsVisible(false);
              }}
            >
              <View>
                <Text style={styles.textButton}>TRUTH</Text>
                <IconAntDesign style={styles.icon} name="hearto" size={40} />
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={[styles.button, { backgroundColor: "red" }]}
              onPress={() => {
                dispatch(setAskedChoice("dare"));
                setIsVisible(false);
              }}
            >
              <View>
                <Text style={styles.textButton}>DARE</Text>
                <IconFontAwesome5
                  style={styles.icon}
                  name="fist-raised"
                  size={40}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0ffff",
    width: 400,
    height: 180,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 180,
    flex: 1,
  },
  icon: {
    color: "white",
    marginStart: 28,
    marginTop: 20,
  },
});
export default TruthDarePopUp;
