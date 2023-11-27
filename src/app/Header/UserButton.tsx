import { FiUser } from "react-icons/fi";
import { getEmail, getUserName, handleLogout, isAuthenticated } from "../sign-in/auth";
import Link from "next/link";

const renderAuthButton = () => {
    if (isAuthenticated()) {
      return (
        <div className="relative">
          <FiUser
            id="avatarButton"
            className="w-10 h-10 rounded-full cursor-pointer"
            data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"
            type="button"
          />

          <div
            id="userDropdown"
            className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-0 mt-2"
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div className="font-medium truncate">{getUserName()}</div>
              <div className="font-medium truncate">{getEmail()}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bookings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rewards</a>
              </li>
            </ul>
            <div className="py-1">
              <a href="#" onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>
          </div>
        </div>
      );
    } else {
      return <Link href="/sign-in" className="btn-outline mr-8">Login</Link>;
    }
  };