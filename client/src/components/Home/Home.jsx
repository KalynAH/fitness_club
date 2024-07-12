import "./Home.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/exercise-1.jpg";
import image2 from "../../assets/exercise-2.jpg";
import image3 from "../../assets/exercise-3.jpg";

const Home = () => {
  return (
    <div className={`container fade-in`}>
      <div className="d-flex mt-5 fitness-container-1">
        <main className="">
          <h3 className="mt-4 mb-4">Join the Ultimate Virtual Fitness Club!</h3>
          <p className="text-wrap w-75 mt-5 mb-5">
            Welcome to our Virtual Fitness Club! Our goal is to inspire lifelong
            fitness and activity, not just through short-term challenges but as
            a permanent part of your lifestyle. We understand that not everyone
            has time for strict gym routines, and that's okay. Whether you have
            a busy schedule or limited resources, we encourage finding ways to
            incorporate health and fitness into your daily life.
          </p>
          <Link className="btn-color" to={"/new"}>
            <i className="fa-solid fa-dumbbell text-light"></i>
            <p>Add New Routine</p>
          </Link>
        </main>
        <aside>
          <img src={image1} alt="Workout" className="workout-img" />
        </aside>
      </div>
      <div className="d-flex mb-5 fitness-container-2">
        <main className="">
          <img src={image2} alt="Workout" className="workout-img" />
        </main>
        <aside className="d-flex flex-column justify-content-lg-start">
          <h3>It's time to make your fitness goals come true!!</h3>
          <p className="mt-4 mb-5">
            You can start now! It’s free of charge, with no commitment or fees.
            Join us and make fitness a fun, lifelong journey in a supportive
            community where you can share your progress, get motivated by
            others, and explore new ways to stay active and healthy!
          </p>
          <Link className="btn-color" id="btn-2" to={"/routines"}>
            <i className="fa-solid fa-person-walking text-light"></i>
            <p>Checkout our Workout Routines</p>
          </Link>
        </aside>
      </div>
      <div className="fitness-container-3">
        <h2 className="mb-4">Why use Virtual Fitness Club?</h2>
        <div className="d-flex gap-5">
          <main>
            <ul>
              <li>
                <i className="fa-solid fa-check"></i>It’s a convenient way to
                share, track, and update your fitness goals.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>No time commitment—it's
                built around your lifestyle and needs.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Easily track your progress
                and update it as necessary.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Get inspired by others when
                you need ideas and motivation.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Add a fun and healthy hobby
                to your daily routine.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Avoid gym anxiety by
                skipping in-person memberships.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>It's free with no financial
                commitments—just commit to yourself!
              </li>
            </ul>
          </main>
          <aside>
            <img src={image3} alt="" className="exercise-3-img" />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
