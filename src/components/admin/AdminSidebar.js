import { useEffect, useState } from "react";
import { Link, Location, useLocation } from "react-router-dom";


const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <i class="fa-solid fa-bars"></i>
        </button>
      )}

      <aside
        id="sidebar"
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <DivOne location={location} />
        <DivTwo location={location} />
        <DivThree location={location} />

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const DivOne = ({location }) =>(
  <div className="board">
    <h4>Managment</h4>
    <ul>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={<i class="fa-solid fa-boxes-stacked"></i>}
        location={location}
      />
      <Li
        url="/admin/product"
        text="Product"
        Icon={<i class="fa-solid fa-bag-shopping"></i>}
        location={location}
      />
      <Li
        url="/admin/customer"
        text="Customer"
        Icon={<i class="fa-solid fa-users"></i>}
        location={location}
      />
      <Li
        url="/admin/transaction"
        text="Transaction"
        Icon={<i class="fa-solid fa-file-lines"></i>}
        location={location}
      />
    </ul>
  </div>
);

const DivTwo = ({location }) => (
  <div className="charts">
    <h4>Charts</h4>
    <ul>
      <Li
        url="/admin/chart/bar"
        text="Bar"
        Icon={<i class="fa-solid fa-chart-column"></i>}
        location={location}
      />
      <Li
        url="/admin/chart/pie"
        text="Pie"
        Icon={<i class="fa-solid fa-chart-pie"></i>}
        location={location}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        Icon={<i class="fa-solid fa-chart-line"></i>}
        location={location}
      />
    </ul>
  </div>
);

const DivThree =  ({location })  => (
  <div className="apps">
    <h4>Apps</h4>
    <ul>
      <Li
        url="/admin/app/stopwatch"
        text="Stopwatch"
        Icon={<i class="fa-solid fa-stopwatch"></i>}
        location={location}
      />
      <Li
        url="/admin/app/coupon"
        text="Coupon"
        Icon={<i class="fa-solid fa-ticket"></i>}
        location={location}
      />
      <Li
        url="/admin/app/toss"
        text="Toss"
        Icon={<i class="fa-solid fa-gamepad"></i>}
        location={location}
      />
    </ul>
  </div>
);


const Li = ({ url, text, location, Icon }) =>(
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      className="link"
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      {Icon}
      {text}
    </Link>
  </li>
);



export default AdminSidebar;
