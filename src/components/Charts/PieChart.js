import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const PieChartPeople = () => {
  const browserUsage = [
    { symbol: "SAFARI", amount: 290, color: "#615EFF",opacity:"#E5E5E5"},
    { symbol: "MOZILLA", amount: 540, color: "#A3A3A3",opacity:"#E5E5E5" },
    { symbol: "CHROME", amount: 400, color: "#FF5BB2",opacity:"#E5E5E5" },
  ];
  const borderRadius = 20
  const width = 140;
  const half = width / 2;
  const [active, setActive] = useState(null);
  return (
    <div>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={browserUsage}
            cornerRadius={borderRadius}
            pieValue={(data) => data.amount}
            outerRadius={half}
            innerRadius={60}
            padAngle={0.1}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.symbol}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                        <path d={pie.path(arc)} fill={arc.data.color}></path>

                  </g>
                );
              });
            }}
          </Pie>
          {active ? (
            <>
              <Text textAnchor="middle" fill="#aaa" fontSize={12} dy={-15}>
                {`${active.symbol}`}
              </Text>
              <Text textAnchor="middle" fill="blue" fontSize={20} dy={10}>
                {` ${Math.floor(active.amount)}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#aaa" fontSize={12} dy={-15}>
                {`TOTAL`}
              </Text>
              <Text textAnchor="middle" fill="blue" fontSize={20} dy={10}>
                {` ${Math.floor(
                  browserUsage.reduce((acc, coin) => acc + coin.amount, 0)
                )}`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </div>
  );
};

const CompaignPie = ()=>{
  const width = 140;
  const half = width / 2;
  const data = [
    {value:10,color:'#88FFFF'},
    {value:30,color:'#77C0FF'},
    {value:60,color:'#616A78'},
  ]
  return(
    <div>
    <svg width={width} height={width}>
      <Group top={half} left={half}>
        <Pie
          data={data}
          pieValue={(data) => data.value}
          outerRadius={half}
        >
          {(pie) => {
            return pie.arcs.map((arc) => {
              return (
                <g
                  key={arc.data.value}
                >
                      <path d={pie.path(arc)} fill={arc.data.color}></path>
                </g>
              );
            });
          }}
        </Pie>
       
      </Group>
    </svg>
  </div>
  )
}

export {
  PieChartPeople,CompaignPie
}
// const data = [
//   { value: 60,color:'red' },
//   { value: 30,color:'yellow' },
//   { value: 10,color:'cyan' },
 
// ];
// return(
//   <ResponsiveContainer width="100%" height="100%">
//       <PieChart width={400} height={400}>
//         <PIE data={data} dataKey="value"  outerRadius={60} fill="color" />
//       </PieChart>
//     </ResponsiveContainer>
// )
// }