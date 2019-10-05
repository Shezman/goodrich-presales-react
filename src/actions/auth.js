// import { API_URL } from "../config";
import axios from 'axios';
import qs from 'qs';
let API_URL =
  'http://localhost:5000';

export function loginUser(params) {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params),
    // url: "http://ec2-52-221-50-135.ap-southeast-1.compute.amazonaws.com:3000/auth"
    url:
      'http://localhost:5000/auth'
  };
  return {
    type: `LOGIN_USER`,
    payload: axios(options)
  };
}

export function registerUser(params) {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params),
    url:
      'localhost:5000/user/register'
  };
  return {
    type: `REGISTER_USER`,

    payload: axios(options)
  };
}

export function getOtp(params) {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params),
    url:
      'http://localhost:5000/auth/otp'
  };
  return {
    type: `GET_OTP`,
    payload: axios(options)
  };
}

export function validateOtp(params) {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params),
    url:
      'http://localhost:5000/auth/otp/verify'
  };
  return {
    type: `VALIDATE_OTP`,
    payload: axios(options)
  };
}

export function confirmRegister(params) {
  return {
    type: `CONFIRM_REGISTER`,
    payload: axios.get(
      `http://localhost:5000/auth/confirm/${params}`
    )
    // payload: axios.get(
    //   `http://ec2-52-221-50-135.ap-southeast-1.compute.amazonaws.com:3000/auth/confirm/${params}`
    // )
  };
}

export function wallet(params) {
  return {
    type: `WALLET`,
    payload: axios.get(
      // `http://ec2-52-221-50-135.ap-southeast-1.compute.amazonaws.com:3000/wallet/`,
      `http://localhost:5000/wallet/`,
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
    )
  };
}
