export default function auth_reducer(
  state = {
    token: null,
    error: null,
    isLoading: false,
    login_response: {},
    register_response: {},
    get_otp_response: {},
    otp_response: {},
    confirm_response: {},
    wallet_response: {}
  },
  action
) {
  let _error = {
    message: "Failed! Please try again Later.",
    status: false
  };
  switch (action.type) {
    case "LOGIN_USER_PENDING":
      return { ...state, isLoading: true, error: null, login_response: {} };
    case "LOGIN_USER_FULFILLED":
      if (action.payload.data.status === "success") {
        localStorage.setItem("token", action.payload.data.data.token);
      }
      return {
        ...state,
        isLoading: false,
        login_response: action.payload.data
      };
    case "LOGIN_USER_REJECTED":
      return { ...state, isLoading: false, error: _error };

    case "REGISTER_USER_PENDING":
      return { ...state, isLoading: true, error: null, register_response: {} };
    case "REGISTER_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        register_response: action.payload.data
      };
    case "REGISTER_USER_REJECTED":
      return { ...state, isLoading: false, error: _error };

    case "GET_OTP_PENDING":
      return { ...state, isLoading: true, error: null, get_otp_response: {} };
    case "GET_OTP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        get_otp_response: action.payload.data
      };
    case "GET_OTP_REJECTED":
      return { ...state, isLoading: false, error: _error };

    case "VALIDATE_OTP_PENDING":
      return { ...state, isLoading: true, error: null, otp_response: {} };
    case "VALIDATE_OTP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        otp_response: action.payload.data
      };
    case "VALIDATE_OTP_REJECTED":
      return { ...state, isLoading: false, error: _error };

    case "CONFIRM_REGISTER_PENDING":
      return { ...state, isLoading: true, error: null, confirm_response: {} };
    case "CONFIRM_REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        confirm_response: action.payload.data
      };
    case "CONFIRM_REGISTER_REJECTED":
      return { ...state, isLoading: false, error: _error };

    case "WALLET_PENDING":
      return { ...state, isLoading: true, error: null, wallet_response: {} };
    case "WALLET_FULFILLED":
      return {
        ...state,
        isLoading: false,
        wallet_response: action.payload.data
      };
    case "WALLET_REJECTED":
      return { ...state, isLoading: false, error: _error };

    default:
  }

  return state;
}
