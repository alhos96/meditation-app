import axios from "axios";

export const changeHandler = (e, userInput, setUserInput) => {
  setUserInput({ ...userInput, [e.target.name]: e.target.value });
};

export const onSubmit = (e, dispatch, action, url, userInput, method, token) => {
  e.preventDefault();
  dispatch(action(url, userInput, method, token));
};

export const popoverOpen = (e, setAnchorEl) => {
  setAnchorEl(e.currentTarget);
};

export const popoverClose = (setAnchorEl) => {
  setAnchorEl(null);
};

export const average = (arr) => {
  let average = arr.reduce((a, b) => +a + +b, 0) / arr.length;
  return average.toFixed(2);
};

export const getSomething = (method, url, setState, token) => {
  axios({
    method,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    url: `http://localhost:5000${url}`,
  }).then((response) => {
    setState(response.data.data);
  });
};

export const postSomething = (method, url, data, token, setState) => {
  axios({
    method,
    data,
    headers: { Authorization: `Bearer ${token}` },
    url: `http://localhost:5000${url}`,
  }).then((response) => {
    setState(response.data.data);
  });
};
export const windowSizeTracker = (setState) => {
  if (window.innerWidth > 767) {
    setState(true);
  }
  if (window.innerWidth < 767) {
    setState(false);
  }
};

export const formatDuration = (duration) => {
  const minute = Math.floor(duration / 60);
  const second = duration.toString().substring(1, 3);
  return `${minute}:${second}`;
};

export const formatPosition = (position) => {
  const minute = Math.floor(position / 60);
  const secondLeft = position - minute * 60;
  return `${minute}:${secondLeft < 9 ? `0${Math.floor(secondLeft)}` : Math.floor(secondLeft)}`;
};

export const methods = {
  get: "GET",
  post: "POST",
  patch: "PATCH",
  put: "PUT",
  remove: "DELETE",
};
