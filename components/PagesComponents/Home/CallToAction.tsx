import Image from "next/legacy/image";

const CallToAction = () => {
  return (
    <div className="call_to_action_bg">
      <div className="call_to_action_sec_bg">
        <div className="writeup_bg">
          <div className="writeup_sec_bg">
            <p className="writeup_one">Designing Better Experience</p>
            <p className="writeup_two">
              Problems trying to resolve <br />
              the conflict between
            </p>
            <p className="writeup_three">
              Problems trying to resolve the conflict between the two major realms of Classical
              physics:
            </p>
            <p className="writeup_four">$16.48</p>
            <button>ADD YOUR CALL TO ACTION</button>
          </div>
        </div>
        <Image
          src="/assets/images/big-screen-call-to-action.png"
          alt="kitchen utensil"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default CallToAction;
