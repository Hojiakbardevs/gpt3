
import Person1 from "./../img/1.svg";
import Person2 from "./../img/2.svg";
import Person3 from "./../img/3.svg";
import Person4 from "./../img/4.svg";
import Person5 from "./../img/5.svg";
import Person6 from "./../img/6.svg";
import Person7 from "./../img/7.svg";
import {PersonalImg, Divimg} from "./../style.js"

const Personal = () => {
  return (
    <div>
      <PersonalImg>
        <Divimg>
          <img src={Person1} alt="Person1" />
          <img src={Person2} alt="Person2" />
          <img src={Person3} alt="Person3" />
          <img src={Person4} alt="Person4" />
          <img src={Person5} alt="Person5" />
          <img src={Person6} alt="Person6" />
          <img src={Person7} alt="Person7" />
        </Divimg>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </PersonalImg>
    </div>
  );
};

export default Personal;
