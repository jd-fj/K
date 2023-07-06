// Sessions.tsx
import { FunctionComponent } from "preact";

const Sessions: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-start m-20 text-xs sm:text-sm md:text-md lg:text-3xl">
      <p className="lg:my-5 my-2">My appointments will generally be 60 minutes long with at least 40 minutes of table time with hands on healing.</p>
      <p className="lg:my-5 my-2">Comfortable clothing suggested, you will not need to undress.</p>
      <p className="lg:my-5 my-2">We can play music or work in silence, up to you {":)"}</p>
      <p className="lg:my-5 my-2">Cost for 60 minute appt $80</p>
      <p className="lg:my-5 my-2">Cash or Venmo accepted.</p>
      <p className="lg:my-5 my-2">I am located in the and am accepting new clients on Sundays and Monday & Friday evenings.</p>
      <p className="lg:my-5 my-2">Please reach out if you are interested in learning more and want to schedule an appointment.</p>
    </div>
  );
};

export default Sessions;
