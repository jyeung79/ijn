import {
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { configureGoogleSignin, initiateGoogleSignIn } from "@ijn/app/utils/auth";

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
