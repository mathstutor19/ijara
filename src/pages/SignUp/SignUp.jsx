import React from 'react';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../components/Container/Container';
import OAuth from '../../components/OAuth/OAuth';
import Section from '../../components/Section/Section';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { db } from '../../firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: '',
    password: '',
  });
  const { name, email, area, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      toast.success('Sign up was successful');
      navigate('/');
    } catch (error) {
      toast.error('Nimadir hatolik yuz berdi');
    }
  }
  return (
    <Section>
      <Container>
        <h1 className="text-3xl text-center  font-bold">Ro'yhatdan o'tish</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
          <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
            <img
              src="https://d8vlfmb7h3xtl.cloudfront.net/wp-content/uploads/2019/07/What-Are.png"
              alt="key"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                id="name"
                value={name}
                onChange={onChange}
                placeholder="Ism Familiya"
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              />
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Elektron Pochta"
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              />
              <input
                type="text"
                id="area"
                value={area}
                onChange={onChange}
                placeholder="Yashash Manzilingiz"
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              />
              <div className="relative mb-6">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Parol"
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="absolute right-3 top-3 text-xl cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-3 text-xl cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6">
                  Have a account?
                  <Link
                    to="/sign-in"
                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                  >
                    Sign in
                  </Link>
                </p>
                <p>
                  <Link
                    to="/forgot-password"
                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                  >
                    Forgot password?
                  </Link>
                </p>
              </div>
              <button
                className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
                type="submit"
              >
                Ruyhatdan otish
              </button>
              <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                <p className="text-center font-semibold mx-4">Yoki</p>
              </div>
              <OAuth />
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SignUp;
