import {Dimensions} from "react-native";
export function degToRad(deg) {
    return deg * Math.PI / 180;
}
export function radToDeg(rad) {
    return rad*180/Math.PI;
}
export function isWeb() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return windowHeight / windowWidth < 1;
}
