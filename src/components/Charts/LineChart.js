import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from "recharts";
const  LineChartHome=()=>{
    const data = [
        {x:2011,visit:45,sales:75},
        {x:2012,visit:130,sales:110},
        {x:2013,visit:80,sales:60},
        {x:2014,visit:78,sales:205},
        {x:2015,visit:180,sales:124},
        {x:2016,visit:105,sales:100},
        {x:2017,y:300,visit:210,sales:180},
    
    ]
    return(
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
      
        >
          <CartesianGrid vertical={false}  />
          <XAxis dataKey="x" padding={{ left: 10, right: 0 }} axisLine={false} tickLine={false} tickMargin='18' />
          <YAxis dataKey="y" axisLine={false} tickLine={false} tickMargin='10'  />
          <Tooltip  contentStyle = { { background : '#4C4C4C',border:"none" } } wrapperStyle={ { color: '#fff', fontWeight : 'bold',fontSize:'15px'  }  } itemStyle={ { color:'#fff', fontWeight:'normal'  } } />
          
          <Line type="monotone" dataKey="visit" stroke="#07090C" activeDot={{ r: 7 }} dot={{ stroke: '#07090C', r:2,strokeWidth:4 }} strokeWidth={2} />
          <Line type="monotone" dataKey="sales" stroke="#6C7787" activeDot={{ r: 7 }} dot={{ stroke: '#6C7787', r:2,strokeWidth:4 }} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    )
}
const LineChartPerson = () => {
      const data = [
        {x:"2011",uv:45,pv:75},
        {x:"2012",uv:130,pv:110},
        {x:"2013",uv:80,pv:60},
        {x:"2014",uv:78,pv:205},
        {x:"2015",uv:180,pv:124},
        {x:"2016",uv:105,pv:100},
        {x:"2017",uv:210,pv:180},
    
    ]
    return(
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
        >
          <Line type="monotone" dataKey="pv" stroke="#F96332" activeDot={{ r: 7 }} dot={{ stroke: '#F96332', r:2,strokeWidth:4 }}  />
          <Line type="monotone" dataKey="uv" stroke="#55B84E" activeDot={{ r: 7 }} dot={{ stroke: '#55B84E', r:2,strokeWidth:4 }}  />
{/*         
          <Line type="monotone" dataKey="pv" stroke="#F96332" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#55B84E" /> */}

        </LineChart>
      </ResponsiveContainer>
    )
}
const PageView = () =>{
  const data = [
    {a:8},
    {a:2},
    {a:3},
    {a:7},
    {a:6},
    {a:5},
    {a:2},
    {a:1},
    {a:4},
    {a:4},
  ]
  return(
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={data}
    >
      <Line type="monotone" dataKey="a" stroke="#7AA5D7" dot={{ r:1  }} activeDot={{  r: 10,stroke:'red',strokeWidth:5 }} />
    </LineChart>
  </ResponsiveContainer>
)
}

const BounceRate = () =>{
  const data = [
    {a:2},
    {a:3},
    {a:9},
    {a:1},
    {a:2},
    {a:5},
    {a:4},
    {a:7},
    {a:8},
    {a:2},
  ]
  return(
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={data}
    >
      <Line type="monotone" dataKey="a" stroke="#F3B4C8" dot={{ r:1  }} activeDot={{  r: 10,stroke:'red',strokeWidth:5 }} />
    </LineChart>
  </ResponsiveContainer>
)
}
export {
  LineChartPerson,LineChartHome,PageView,BounceRate
}
