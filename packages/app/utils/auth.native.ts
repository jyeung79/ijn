import {
  AppleAuthenticationScope,
  signInAsync,
} from "expo-apple-authentication";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import {
  CryptoDigestAlgorithm,
  digestStringAsync,
  randomUUID,
} from "expo-crypto";

import { supabase } from "./supabase.native";

/**
 * Initiates the auth flow for the native Apple Sign In.
 * Returns the token and nonce that will later be passed
 * to Supabase to complete the sign in.
 */
export async function initiateAppleSignIn() {
  const rawNonce = randomUUID();
  const hashedNonce = await digestStringAsync(
    CryptoDigestAlgorithm.SHA256,
    rawNonce,
  );

  const credential = await signInAsync({
    requestedScopes: [
      AppleAuthenticationScope.FULL_NAME,
      AppleAuthenticationScope.EMAIL,
    ],
    nonce: hashedNonce,
  });

  const token = credential.identityToken;
  if (!token) throw new Error("No id token");

  return { token, nonce: rawNonce };
}

/**
 * Initiates the auth flor for google sing in
export async function initiateGoogleSignIn() {
 * 
 */
export async function configureGoogleSignin() {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: "", // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: "", // [Android] specifies an account name on the device that should be used
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
}

export async function initiateGoogleSignIn() {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    if (userInfo.idToken) {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: userInfo.idToken,
      });
      console.log(error, data);
    } else {
      throw new Error("no ID token present!");
    }
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
}
