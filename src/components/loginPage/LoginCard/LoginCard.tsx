import { useContext } from "react";
import styles from "./LoginCardStyle.module.css";
import loginImg from "../../../assets/images/login1.jpg";
import FacebookLogin from "react-facebook-login";
import AuthContext from "../../../context/AuthContext/AuthContext";
import GoogleLogin from "react-google-login";
import swal from "sweetalert";
function LoginCard() {
  const values = useContext(AuthContext);
  const responseFacebook = (response: any) => {
    console.log(response);
    if (response.status !== "unknown") {
      values.onLogin();
    } else {
      swal("Error", response, "error");
    }
  };

  const responseGoogleSuccess = (response: any) => {
    console.log(response);
    values.onLogin();
  };
  const responseGoogleFailer = (response: any) => {
    console.log(response.error);
    swal("Error", response.error, "error");
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left_col}>
          <img src={loginImg} alt="" />
        </div>
        <div className={styles.right_col}>
          <h1>تسجيل الدخول الى دفتري</h1>

          <div className={styles.facebook}>
            <FacebookLogin
              appId="1097359364077663" //APP ID NOT CREATED YET
              fields="name,email,picture"
              callback={responseFacebook}
              textButton="سجل الدخول باستخدام الفيس بوك"
              size="small"
            />
          </div>

          <br />
          <br />
          <div className={styles.google}>
            <GoogleLogin
              clientId="1026310507383-ianfdjo1og4gu3ir3bn7nksrvrecj71s.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
