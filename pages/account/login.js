import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrease, increase } from '../../redux/counterSlice';

export default function Login() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="bg-dark-blue1 min-h-full flex items-center justify-center font-sans-overpass">
      <form className="bg-gray-100 rounded-md p-6 text-dark-blue1 flex flex-col max-w-[400px] w-full">
        <h1 className="title  text-2xl font-bold mb-5 text-center">Login</h1>
        <div className="form-control flex flex-col mb-4">
          <label className="text-lg font-bold" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            className="rounded-md p-2"
            type="text"
            name="username"
            placeholder="nauvalsh"
          />
        </div>
        <div className="form-control flex flex-col mb-4">
          <label className="text-lg font-bold" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="rounded-md p-2"
            name="password"
            placeholder="******"
            type="password"
          />
        </div>

        <div className="form-control flex flex-col mt-4">
          <button className="btn-mod-light min-w-full">Login</button>
        </div>
      </form>
      {/*       
      <div className="bg-white p-4">
        <button onClick={() => dispatch(increase(2))}>Increase</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
      </div> */}

      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
