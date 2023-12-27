import {
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { configureGoogleSignin, initiateGoogleSignIn } from "app/utils/auth.native";

export const GoogleSigninComponent = () => {
  configureGoogleSignin();

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={initiateGoogleSignIn}
    />
  );
};
