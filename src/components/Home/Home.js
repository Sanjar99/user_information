import "./Home.css";
import { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import search from "../../assets/images/search.svg";
import profile from "../../assets/images/profile.jpg";
import tg from "../../assets/images/telegramIco.svg";
import insta from "../../assets/images/instagramIco.svg";
import face from "../../assets/images/facebookIco.svg";
import home from "../../assets/images/home.svg";
import newEmployes from "../../assets/images/new-employes.png";
import totalRevenue from "../../assets/images/total-revenue.png";
import totalOrders from "../../assets/images/total-orders.png";
import totalSales from "../../assets/images/total-sales.png";
import { CompaignPie, PieChartPeople } from "../Charts/PieChart";
import { BounceRate, LineChartHome, PageView } from "../Charts/LineChart";
import homeMap from "../../assets/images/home_map.png";
import {
  PageViewsChart,
  SiteVisitors,
  TotalClicks,
  TotalReturns,
} from "../Charts/BarChart";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();
  const hendleSubmit = (evt) => {
    evt.preventDefault();
    history.push("/person");
    console.log(inputValue);
    setInputValue("");
  };

  // const [iframeUrl, setIframeUrl] = useState(
  //   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49105.26648573175!2d69.18268309343331!3d41.359885054620754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c479e45ded7%3A0xb0939da2a41a79de!2z0JDQu9C80LDQt9Cw0YDRgdC60LjQuSDRgNCw0LnQvtC9LCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1632986807453!5m2!1sru!2s"
  // );

  // const hendle = (e) => {
  //   setIframeUrl(`${e.currentTarget.dataset.url}`);
  // };
  return (
    <div className="home  ">
      <div className="home-left">
        <div className=" governor-profile ">
          <img src={profile} width="150" alt="img" className="governor-img" />
          <h2 className="governor-name">Governor</h2>
          <Link to="#" className="governor-email ">
            governor@gmail.com
          </Link>
          <ul className="socialNet">
            <li className="socialNet-item">
              <Link to="#" className="socialNet-link">
                <img
                  src={face}
                  alt="socialNet-img"
                  className="socialNet-icon"
                  width="20"
                />
              </Link>
            </li>
            <li className="socialNet-item">
              <Link to="#" className="socialNet-link">
                <img
                  src={insta}
                  alt="socialNet-img"
                  className="socialNet-icon"
                  width="20"
                />
              </Link>
            </li>
            <li className="socialNet-item">
              <Link to="#" className="socialNet-link">
                <img
                  src={tg}
                  alt="socialNet-img"
                  className="socialNet-icon"
                  width="20"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-right ">
        <form onSubmit={hendleSubmit} className="home-form ">
          <div className="home-form-left">
            <p className="home-dash">Dashboard</p>
            <div className="home-dash-div ">
              <img src={home} alt="icon" width="16" className="home-ico" />
              <span>/  Dashboard</span>
            </div>
          </div>

          <input
            onChange={(e) => {
              setInputValue(e.currentTarget.value);
            }}
            type="text"
            className=" search-person "
            placeholder="Pasport series or JSHSHR"
            required
          />
          <img
            src={search}
            width="13"
            alt="search-img"
            className="search-icon"
          />
        </form>
        <div className="map template-card ">
          <div className="map-iframe">
            <img className= "map" src={homeMap} alt="map" />
          </div>
          <ul className="neighborhood ">
            <li className=" neighborhood-item">
              <div className="circle green-circle"></div>
              <p className="mahalla">Abu Bakr Shoshiy</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li
              className=" neighborhood-item"
              data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18362.274568372923!2d69.20410624593715!3d41.341717823395676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c0d23e8a515%3A0xc1e81e68afc79c4b!2z0JzQsNGF0LDQu9C70Y8g0JDQu9C70L7QvQ!5e0!3m2!1sru!2s!4v1632991032372!5m2!1sru!2s"
              // onClick={hendle}
            >
              <div className="circle black-circle"></div>
              <p className="mahalla"> Allon</p>
              <p className="records">421 Records</p>
              <p>15%</p>
              <div className="triangle"></div>
            </li>
            <li className="   neighborhood-item">
              <div className="circle orange-circle"></div>
              <p className="mahalla">Ahil</p>
              <p className="records">502 Records</p>
              <p>20%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle blue-circle"></div>
              <p className="mahalla"> Achaobod</p>
              <p className="records">502 Records</p>
              <p>20%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle black-circle"></div>
              <p className="mahalla">Beruniy</p>
              <p className="records">237 Records</p>
              <p>10%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle black-circle"></div>
              <p className="mahalla"> G‘alaba </p>
              <p className="records">237 Records</p>
              <p>10%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle black-circle"></div>
              <p className="mahalla">G‘ani A’zamov</p>
              <p className="records">237 Records</p>
              <p>10%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle red-circle"></div>
              <p className="mahalla">Guzarboshi</p>
              <p className="records">237 Records</p>
              <p>10%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle purple-circle"></div>
              <p className="mahalla">Gulzor</p>
              <p className="records">356 Records</p>
              <p>20%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Gulsaroy</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Guruchariq</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Yoshlik</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Jiydali</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Ziyo</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Ibrohim ota</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Islom ota</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Istiqbol</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Qichqiriq</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Qorasaroy</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Quyosh</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Qo‘shtut</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Mirza G‘olib</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Miskin</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Moyariq</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Mustaqillik</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Namuna</p>
              <p className="records">566 Records</p>
              <p>25%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Nihol</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Olimpiya</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Oltinsoy</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Orzu</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Paxta</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Sebzor</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Tabassum</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Taraqqiyot</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Tepaguzar</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Umid</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Universitet</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Xastimom</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Xislat</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Xonchorbog‘</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Xofiz Ko‘xakiy </p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Hazrati Imom </p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Chamanbog‘</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Chig‘atoy Darboza </p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Chig‘atoy Oqtepa </p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Chilto‘g‘on</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Chimboy</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Chuqursoy</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Chustiy</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Shifokorlar</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Shodiyona</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Shon-shuhrat</p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Eski Shahar </p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Yuqori Beshqo‘rg‘on </p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Yuqori Sebzor </p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Yangi Sebzor </p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
            <li className=" neighborhood-item">
              <div className="circle pinkCircle"></div>
              <p className="mahalla">Yangi Toshkent </p>
              <p className="records">862 Records</p>
              <p>35%</p>
              <div className="triangle"></div>
            </li>
          </ul>
        </div>

        <div className="statistics-innumber">
          <div className=" population">
            <img
              src={totalRevenue}
              className="population-img"
              alt="img"
              width="50"
            />
            <p className="population-title">Total Revenue</p>
            <p className="population-num ">$2078</p>
            <p className="population-prosent">27% lower growth</p>
          </div>
          <div className=" population ">
            <img
              src={totalOrders}
              className="population-img  "
              alt="img"
              width="50"
            />
            <p className="population-title">Total Orders</p>
            <p className="population-num ">865</p>
            <p className="population-prosent">88% lower growth</p>
          </div>
          <div className=" population">
            <img
              src={totalSales}
              className="population-img"
              alt="img"
              width="50"
            />
            <p className="population-title">Total Sales</p>
            <p className="population-num ">3502</p>
            <p className="population-prosent">38% lower growth</p>
          </div>
          <div className=" population">
            <img
              src={newEmployes}
              className="population-img"
              alt="img"
              width="50"
            />
            <p className="population-title">New Employ50s</p>
            <p className="population-num ">78</p>
            <p className="population-prosent">78% lower growth</p>
          </div>
        </div>
        <p className="lineStatistics-title">Visit & Sales Statistics</p>
        <div className="lineStatistic template-card ">
          <LineChartHome />
        </div>
        <div className="statistic-datas">
          <div className="compaign-performance">
            <div className="">
            <div className="social-statistics template-card">
              <div className="social-title color-grey ">
                <p className="social-name ">FACEBOOK COMPAIGN</p>
                <p>68%</p>
              </div>
              <div className="total total-facebook ">
                <div className="prosent prosent-facebook "></div>
              </div>
            </div>
            <div className="social-statistics template-card">
              <div className="social-title color-blue  ">
                <p className="social-name ">GOOGLE ADSENSE</p>
                <p>68%</p>
              </div>
              <div className="total total-google ">
                <div className="prosent prosent-google color-blue"></div>
              </div>
            </div>
            <div className="social-statistics template-card">
              <div className="social-title color-yellow ">
                <p className="social-name ">LINKIDEN COMPAIGN</p>
                <p>68%</p>
              </div>
              <div className="total total-linked ">
                <div className="prosent prosent-linked color-yellow "></div>
              </div>
            </div>
            </div>
            <div className="compaign-piechart template-card">
              <div className="compaign-piechart-top">
                <div className="">
                  <p className="compaign-prosent">60%</p>
                  <p className="compaign-date">Mothly</p>
                </div>
                <div className="">
                  <p className="compaign-prosent">20%</p>
                  <p className="compaign-date">Weekly</p>
                </div>
                <div className="">
                  <p className="compaign-prosent">30%</p>
                  <p className="compaign-date">Daily</p>
                </div>
              </div>
              <CompaignPie />
            </div>
          </div>
          <div className="browser-usage template-card ">
            <PieChartPeople />
            <ul className="browserUsage-list">
              <li className="browserUsage-list-item">
                <div>
                  <p className="page-view">Page Views</p>
                  <p className="page-view-num">32.211</p>
                </div>
                <div className="bar-diagram">
                  <PageViewsChart />
                </div>
              </li>
              <li className="browserUsage-list-item">
                <div>
                  <p className="page-view">Site Visitors</p>
                  <p className="page-view-num">2,516</p>
                </div>
                <div className="bar-diagram">
                  <SiteVisitors />
                </div>
              </li>
              <li className="browserUsage-list-item">
                <div>
                  <p className="page-view">Total Clicks</p>
                  <p className="page-view-num">4.536</p>
                </div>
                <div className="bar-diagram">
                  <TotalClicks />
                </div>
              </li>
              <li className="browserUsage-list-item">
                <div>
                  <p className="page-view">Total Returns</p>
                  <p className="page-view-num">516</p>
                </div>
                <div className="bar-diagram">
                  <TotalReturns />
                </div>
              </li>
            </ul>
          </div>
          <div className="site-traffics-block">
            <div className=" site-traffics site-traffics-top template-card">
              <p className="site-traffic-num  ">2651</p>
              <div className="site-traffics-prosent ">
                <p className="site-traffics-type">Direct</p>
                <p className="site-direct">48%</p>
              </div>
              <div className="site-total mb-site-total">
                <div className="site-prosent"></div>
              </div>

              <p className="site-traffic-num  ">2651</p>
              <div className="site-traffics-prosent  ">
                <p className="site-traffics-type">Referrals</p>
                <p className="site-direct">18%</p>
              </div>
              <div className="site-total mb-site-total">
                <div className="site-prosent referrals-bg"></div>
              </div>

              <p className="site-traffic-num">2651</p>
              <div className="site-traffics-prosent">
                <p className="site-traffics-type">Search Engines</p>
                <p className="site-direct">67%</p>
              </div>
              <div className="site-total">
                <div className="site-prosent engine-bg "></div>
              </div>
            </div>
            <div className=" site-traffics site-traffics-bottom template-card">
              <div className="site-traffics-bottom-block">
                <p className="site-traffics-bottom-text">Page View</p>
                <p className="site-traffics-bottom-text">3.665</p>
              </div>
              <div className="site-traffics-linechart">
                <PageView />
              </div>
              <div className="site-traffics-bottom-block block-second">
                <p className="site-traffics-bottom-text">Bounce Rate</p>
                <p className="site-traffics-bottom-text">2.925</p>
              </div>
              <div className="site-traffics-linechart">
                <BounceRate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
