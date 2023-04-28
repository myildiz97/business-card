export default function Buttons() {
  return (
    <div className="btns">
      <a
        href="mailto:myildizwork@gmail.com?subject=Subject Line&body=Body Text"
        target="_blank"
        rel="noreferrer"
      >
        <button className="mail--btn">
          <img
            src="https://img.freepik.com/free-icon/simple-envelope_318-9799.jpg?w=826&t=st=1682692705~exp=1682693305~hmac=6af9d64be95bd287965ffb1cc23331968b0657d72dac559c09bbcb2a0a408c85"
            alt="gmail--img"
            className="btn--img"
          />
          <span>Email</span>
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/mehmetyildizz/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="linkedin--btn">
          <img
            src="https://i.imgyukle.com/2023/04/28/QwLnbI.png"
            alt="linkedin--img"
            className="btn--img"
          />
          <span>LinkedIn</span>
        </button>
      </a>
    </div>
  );
}
