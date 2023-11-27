"use client";

const isLocalStorageAvailable = typeof window !== 'undefined';

export const setToken = (token: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('token', token);
    console.log('Token set:', token);
  }
};

export const getToken = () => {
  if (isLocalStorageAvailable) {
    const token = localStorage.getItem('token');
    console.log('Get token:', token);
    return token;
  }
  return null;
};

export const isAuthenticated = () => {
  const token = getToken();
  const isAuth = !!token;
  console.log('Is authenticated:', isAuth);
  return isAuth;
};

export const setUser = (user: any): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('user', JSON.stringify(user));
    console.log('User set:', user);
  }
};

export const getUser = (): any | null => {
  if (isLocalStorageAvailable) {
    const user = localStorage.getItem('user');
    console.log('Get user:', user ? JSON.parse(user) : null);
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const setUserName = (username: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('username', username);
    console.log('Username set:', username);
  }
};

export const getUserName = (): string | null => {
  if (isLocalStorageAvailable) {
    const username = localStorage.getItem('username');
    console.log('Get username:', username);
    return username;
  }
  return null;
};

export const setEmail = (email: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('email', email);
    console.log('Email set:', email);
  }
};

export const getEmail = () => {
  if (isLocalStorageAvailable) {
    const email = localStorage.getItem('email');
    console.log('Get email:', email);
    return email;
  }
  return null;
};

export const setPhoneNumber = (phoneNumber: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('phoneNumber', phoneNumber);
    console.log('Phone number set:', phoneNumber);
  }
};

export const getPhoneNumber = (): string | null => {
  if (isLocalStorageAvailable) {
    const phoneNumber = localStorage.getItem('phoneNumber');
    console.log('Get phone number:', phoneNumber);
    return phoneNumber;
  }
  return null;
};

export const handleLogout = (): void => {
  if (isLocalStorageAvailable) {
    localStorage.clear();
    console.log('Logged out');
    window.location.href = "/sign-in";
  }
};
