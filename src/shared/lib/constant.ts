
import { Dimensions,  Platform } from "react-native";

export enum ApiConfig {
    BASE_URL = 'http://88.198.56.78:8125/',
    WS_URL = 'ws://88.198.56.78:8127'
}

export const PLATFORM_OS = Platform.OS;

export const IS_IOS = PLATFORM_OS === "ios";
export const IS_ANDROID = PLATFORM_OS === "android";

export const IS_LEGACY_ANDROID = !IS_IOS && Platform.Version <= 23;

const { height, width } = Dimensions.get("window");
export const IS_SE_1 = IS_IOS && width === 326;
export const IS_IPHONE_12 = IS_IOS && height === 844 && width === 390;
export const IS_IPHONE_X_OR_XS = IS_IOS && height === 812 && width === 375;
export const IS_IPHONE_12_PRO_MAX = IS_IOS && height === 926 && width === 428;
export const IS_IPHONE_XS_MAX_OR_XR = IS_IOS && height === 896 && width === 414;

export const IS_IPHONE_X =
  IS_IPHONE_12 ||
  IS_IPHONE_X_OR_XS ||
  IS_IPHONE_XS_MAX_OR_XR ||
  IS_IPHONE_12_PRO_MAX;
  
export const STATUS_BAR_HEIGHT = IS_IPHONE_X ? 40 : IS_IOS ? 20 : 10;
export const IOS_BOTTOM_MARGIN = IS_IPHONE_X ? 24 : 0;