import { useState, useEffect } from 'react';
import Card from './components/CardList';


function App() {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchLatLong(){
    try {
      let lat, long;
      await navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude.toFixed(2);
        long = position.coords.longitude.toFixed(2);
        console.log(lat, long)
        return [lat, long]
      });
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let x,y;
        
        const myPromise = new Promise((resolve, reject) =>{
          let lat, long;
          navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude.toFixed(2);
            long = position.coords.longitude.toFixed(2);
            console.log(lat, long)
            if(lat)
              resolve([lat, long]);
          });
        })
        await myPromise
          .then(data => {
            [x, y] = data
          })
          .catch(e => console.log(e))


        console.log(x,y)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${x}&lon=${y}&appid=e39182f6789f4a68b2b890b761fad6d2`);
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=12.93&lon=77.63&appid=e39182f6789f4a68b2b890b761fad6d2`);
        const data = await response.json();
        // const filteredCardData = data.list.filter((card) => card.dt_txt.includes("18:00:00"));
        const filteredCardData = data.list.filter((card) => card.dt_txt.includes("12:00:00"));
        console.log(data);
        setData(data);
        setFilteredData(filteredCardData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className='loader'>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='main'>
      <h1>Weather</h1>
      <Card data={filteredData} allData={data.list} />
      {/* {console.log(data.list)} */}
    </div>
  );
}

export default App;
