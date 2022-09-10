import http from "http";
import {setCookie} from "@src/utils/cookie/set-cookie";
import {signData} from "@src/utils/sign-verify/sign-data";

export const setSignedCookie = (jwtSecret: string) => <Data>(name: string) => (data: Data) => (res: http.ServerResponse): void => (
  void setCookie(res, name, signData(jwtSecret)(data))
)