
import { BarChart, Bar,Tooltip,ResponsiveContainer } from 'recharts';

const pageViews = [
  { uv: .5},
  { uv: 3},
  { uv: 5},
  { uv: 6},
  { uv: 9},
  { uv: 8},
  { uv: 7},
  { uv: 8},
  { uv: 7},
];
const siteVisitors = [
    { uv: 8},
    { uv: 5},
    { uv: 3},
    { uv: .5},
    { uv: .5},
    { uv: 3},
    { uv: 5},
    { uv: 6},
    { uv: 4},
  ];
  const totalClicks = [
    { uv: 6},
    { uv: 5},
    { uv: 4},
    { uv: 6},
    { uv: 5},
    { uv: 1},
    { uv: 8},
    { uv: 4},
    { uv: .5},
  ];
  const totalReturns = [
    { uv: 8},
    { uv: .5},
    { uv: 3},
    { uv: 5},
    { uv: 6},
    { uv: 4},
    { uv: 5},
    { uv: 7},
    { uv: 4},
  ];

const PageViewsChart = () =>{
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart  data={pageViews}>
        <Tooltip  contentStyle = { { background : '#4C4C4C' } } wrapperStyle={ { color: '#fff', fontWeight : 'normal',fontSize:'12px' ,border:'1px solid #fff'  }  } itemStyle={ { display:'none' } } />
          <Bar dataKey="uv" fill="#2B314A" barSize={3} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  const SiteVisitors = () =>{
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart  data={siteVisitors}>
        <Tooltip  contentStyle = { { background : '#4C4C4C' } } wrapperStyle={ { color: '#fff', fontWeight : 'normal',fontSize:'12px' ,border:'1px solid #fff'  }  } itemStyle={ { display:'none' } } />
          <Bar dataKey="uv" fill="#2B314A" barSize={3} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  const TotalClicks = () =>{
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart  data={totalClicks}>
        <Tooltip  contentStyle = { { background : '#4C4C4C' } } wrapperStyle={ {color: '#fff', fontWeight : 'normal',fontSize:'12px' ,border:'1px solid #fff'  }  } itemStyle={ { color:'#fff',fontSize:'10px',display:'block' } } />
          <Bar dataKey="uv" fill="#2B314A" barSize={3} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  const TotalReturns = () =>{
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart  data={totalReturns}>

        <Tooltip  contentStyle = { { background : '#4C4C4C' } } wrapperStyle={ { color: '#fff', fontWeight : 'normal',fontSize:'12px' ,border:'1px solid #fff'  }  } itemStyle={ { display:'none' } } />
          <Bar dataKey="uv" fill="#2B314A" barSize={3} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
export{
    PageViewsChart,SiteVisitors,TotalClicks,TotalReturns
}
