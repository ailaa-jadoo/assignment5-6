import Card from "./Card";

function CardList({allData, data}){
    const uniqueDates = [...new Set(data.map(cardData => cardData.dt_txt.split(' ')[0]))];
    // console.log(uniqueDates)
    // const filteredDataToDate = 
    // console.log(filteredDataToDate)
    return (
    <div className="container">
        {/* {console.log(data)} */}
        {data.map((cardData, index) => (
          // console.log(cardData.dt_txt.split(' ')[0])
          // <div>{cardData.dt_txt.split(' ')[0]}</div>
          <Card 
                allData={allData.filter(item => {
                  if(item.dt_txt.split(' ')[0] == uniqueDates[index])
                      return true;
                  else
                      return false;
                })}
                key={index} 
                idx={index}
                temp={cardData.main.temp} 
                humidity={cardData.main.humidity}
                minTemp={cardData.main.temp_min} 
                maxTemp={cardData.main.temp_max} 
                weather={cardData.weather[0].main} 
                windSpeed={cardData.wind.speed}
                date={uniqueDates[index]}
          />
        ))}
    </div>
    )
}

export default CardList;