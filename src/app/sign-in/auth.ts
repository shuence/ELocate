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
    return token;
  }
  return null;
};

export const isAuthenticated = () => {
  const token = getToken();
  const isAuth = !!token;
  return isAuth;
};

export const setUser = (user: any): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const getUser = (): any | null => {
  if (isLocalStorageAvailable) {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const setUserName = (username: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('username', username);
  }
};

export const getUserName = (): string | null => {
  if (isLocalStorageAvailable) {
    const username = localStorage.getItem('username');
    return username;
  }
  return null;
};

export const setEmail = (email: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('email', email);
  }
};

export const getEmail = () => {
  if (isLocalStorageAvailable) {
    const email = localStorage.getItem('email');
    return email;
  }
  return null;
};

export const setPhoneNumber = (phoneNumber: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('phoneNumber', phoneNumber);
  }
};

export const getPhoneNumber = (): string | null => {
  if (isLocalStorageAvailable) {
    const phoneNumber = localStorage.getItem('phoneNumber');
    return phoneNumber;
  }
  return null;
};

export const handleLogout = (): void => {
  if (isLocalStorageAvailable) {
    localStorage.clear();
    window.location.href = "/sign-in";
  }
};
