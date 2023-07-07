// Sessions.tsx
import { FunctionComponent } from "preact";

const Sessions: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-lg mx-5 sm:mx-0 mt-10">
      <p className="lg:my-5 my-3">Sessions are 60 minutes long with at least 40 minutes of table time with hands on healing.</p>
      <p className="lg:my-5 my-3">Comfortable clothing suggested, you will not need to undress.</p>
      <p className="lg:my-5 my-3">We can play music or work in silence, up to you {":)"}</p>
      <p className="lg:my-5 my-3">Cost for 60 minute appt $80</p>
      <p className="lg:my-5 my-3">Cash or Venmo accepted.</p>
      <p className="lg:my-5 my-3">I am located in the and am accepting new clients on Sundays and Monday & Friday evenings.</p>
      <p className="lg:my-5 my-3">Please reach out if you are interested in learning more and want to schedule an appointment.</p>
    </div>
  );
};

export default Sessions;
