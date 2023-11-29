import React from 'react';
import { getEmail, getPhoneNumber, getUserName, getfullname } from '../sign-in/auth';
import Image from 'next/image';

const Profile = () => {
  const username = getUserName();
  const email = getEmail();
  const fullname = getfullname();
  const phone = getPhoneNumber();

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/3 w-full">
          <div className="bg-white rounded-lg shadow-lg py-6">
            <div className="photo-wrapper p-2 flex justify-center">
              <div className="rounded-full overflow-hidden border-4 border-emerald-500">
                <Image
                  className="w-32 h-32 object-cover"
                  src="https://avatars.githubusercontent.com/u/52039279?v=4"
                  alt="John Doe"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="p-2 text-center">
              <h3 className="text-2xl text-gray-900 font-semibold">{username}</h3>
              <table className=" my-3 text-xl mx-auto">
                <tbody> <tr>
                    <td className="px-2 py-2 text-left text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2 text-left">{email}</td>
                  </tr>
               <tr>
                    <td className="px-2 py-2 text-left text-gray-500 font-semibold">Full Name</td>
                    <td className="px-2 py-2 text-left">{fullname}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-left text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2 text-left">{phone}</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
