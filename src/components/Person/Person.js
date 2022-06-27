import "./Person.css";
import { NavLink, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
// Components
import Asosiy from "../Asosiy/Asosiy";
import Daftar from "../Daftar/Daftar";
import Ishjoyi from "../Ishjoyi/Ishjoyi";
import Komunal from "../Komunal/Komunal";
import Portal from "../Portal/Portal";
import Shtraflar from "../Shtraflar/Shtraflar";
import Talim from "../Talim/Talim";
import Family from "../Family/Family";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import { family, work, komunal, schools } from "../Database/Database";

// import LineChartPerson from "../Charts/LineChart";
import { LineChartPerson } from "../Charts/LineChart";

// imgs
import PersonImg from "../../assets/images/profile.jpg";

const Person = () => {
  const Money = [
    { total: 452, color: "#F96332", inUSD: 30.6 },
    { total: 2138, color: "#55B84E", inUSD: 1.48 },
  ];
  const width = 150;
  const half = width / 2;
  const [active, setActive] = useState();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="person-main">
      <Modal active={active} setActive={setActive} />
      <Header />
      <section className="person">
        <div className="person-top">
          <div className="person-statistica">
            <div className="left">
              <h2>Toxir Po'latov</h2>
              <h5>07.07.2000</h5>
              <div className="statistica">
                <LineChartPerson />
              </div>
            </div>
            <div className="right">
              <h2>Bank data</h2>
              <svg width={width} height={width}>
                <Group top={half} left={half} key={(data) => data.total}>
                  <Pie
                    data={Money}
                    key={(data) => data.total}
                    pieValue={(data) => data.total}
                    outerRadius={half}
                    innerRadius={2}
                    padAngle={0.09}
                    rounded={true}
                  >
                    {(pie) => {
                      return pie.arcs.map((arc) => {
                        return (
                          <g key={arc.data.total}>
                            <path
                              d={pie.path(arc)}
                              fill={arc.data.color}
                            ></path>
                          </g>
                        );
                      });
                    }}
                  </Pie>
                  <Text
                    textAnchor="end"
                    fill="#fff"
                    fontSize={20}
                    dx={-10}
                    dy={-35}
                  >{`$${Money[0].total}`}</Text>

                  <Text
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={30}
                    dy={30}
                  >{`$${Money[1].total}`}</Text>
                </Group>
              </svg>
            </div>
          </div>
          <img className="person-img" src={PersonImg} alt="person" />
        </div>
        <div className="buttons">
          <NavLink
            className="person-btn"
            activeClassName="person-btn-active"
            to="/person"
            exact
          >
            asosiy
          </NavLink>
          <NavLink
            className="person-btn"
            activeClassName="person-btn-active"
            to="/person/daftar"
          >
            daftar
          </NavLink>
          <NavLink
            className="person-btn"
            activeClassName="person-btn-active"
            to="/person/ish"
          >
            ish joyi
          </NavLink>
          <NavLink
            className="person-btn"
            activeClassName="person-btn-active"
            to="/person/shtraf"
          >
            shtraf
          </NavLink>
          <NavLink
            className="person-btn"
            activeClassName="person-btn-active"
            to="/person/talim"
          >
            ta'lim
          </NavLink>
          <NavLink
            className="person-btn"
            activeClassName="person-btn-active"
            to="/person/komunal"
          >
            komunal
          </NavLink>
          <NavLink
            className="person-btn"
            activeClassName="person-btn-active"
            to="/person/portal"
          >
            portal
          </NavLink>
          <NavLink
            className="person-btn"
            activeClassName="person-btn-active"
            to="/person/family"
          >
            oila a'zolar
          </NavLink>
        </div>
        <div className="person-box">
          <Switch>
            <Route path="/person" exact>
              {arr?.map((item, i) => (
                <Asosiy key={i} setActive={setActive} />
              ))}
            </Route>
            <Route path="/person/daftar">
              {arr.map((item, i) => (
                <Daftar key={i} setActive={setActive} />
              ))}
            </Route>
            <Route path="/person/ish">
              {work.map((item, i) => (
                <Ishjoyi key={i} setActive={setActive} item={item} />
              ))}
            </Route>
            <Route path="/person/komunal">
              {komunal.map((item, i) => (
                <Komunal key={i} setActive={setActive} item={item} />
              ))}
            </Route>
            <Route path="/person/portal">
              {arr.map((item, i) => (
                <Portal key={i} setActive={setActive} />
              ))}
            </Route>
            <Route path="/person/shtraf">
              {arr.map((item, i) => (
                <Shtraflar key={i} setActive={setActive} />
              ))}
            </Route>
            <Route path="/person/talim">
              {schools.map((item, i) => (
                <Talim key={i} setActive={setActive} item={item} />
              ))}
            </Route>
            <Route path="/person/family">
              {family.map((item, i) => (
                <Family key={i} setActive={setActive} item={item} />
              ))}
            </Route>
          </Switch>
        </div>
      </section>
    </div>
  );
};

export default Person;
