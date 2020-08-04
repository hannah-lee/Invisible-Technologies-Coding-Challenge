import axios from 'axios'

//function returns an array of location and postal code
function retLocationArr(locations){
    //Figure out the type of the parameter
    if (typeof locations === 'string'){
        if (locations.split(' ',1)[0] === './weather'){ //if the first word of the string is './weather', then remove it 
            let new_str = locations.substr(locations.indexOf("r") + 1)
            if(new_str.length != 0){ //if the new_str is not an empty string, we can split it 
                return new_str.split(', ')
            }
            else{ //however, if the new_str is an empty string, log an error
                throw new Error('locations cannot be empty')   
            }
        }

        let locations_arr = locations.split(', ') //split the string of locations into an array
        return locations_arr 
    }
    else if (!Array.isArray(locations)){ //else if locations is not an array of locations, throw new error
        throw new Error('Input of locations cannot be parsed')
    }
    return locations
} 



//loop through the array and log current weather & time
function logTimeandWeather(location_array: string[]){

    //test to make sure location_array is not empty
    if(location_array.length === 0){
        throw new Error('Location array cannot be empty')
    }

    const URL = 'http://api.weatherapi.com/v1/current.json?key=c455ae9d79bb4465ab545702200308&q=' //current weather and time API
    
    let i: number
    for (i=0;i<location_array.length;i++){

        axios.get(URL + location_array[i]) //use axios for simple get request
        .then(function (response) {
        // handle success

            console.log('Location: ' + response.data.location['name'])
            console.log('Local time: ' + response.data.location.localtime)
            console.log('Current weather: ')
            console.log(response.data.current)
            //this will log the local time and current weather for each location
            
        })
        .catch(function (error) {
         // handle error 
           console.log(error.response.data); //error code & message : i.e. 'No matching location found' if location is invalid
        })
         .then(function () {
          // always executed
      })
    } 
}



function main(mainInput){
    return logTimeandWeather(retLocationArr(mainInput))
}

//testcase 1
//main('./weather') 
//expected: Error: locations cannot be empty

//testcase 2
//main(123)
//expected: Error: Input of locations cannot be parsed

//testcase 3
//main('./weather 123')
//expected: { error: { code: 1006, message: 'No matching location found.' } }

//testcase 4
//main([])
//expected: Error: Location array cannot be empty

//testcase 5
main("./weather New York, 10005, Tokyo, Sao Paulo, Pluto")
//expected:
/* Location: Tokyo
Local time: 2020-08-05 3:00
Current weather: 
{ last_updated_epoch: 1596553243,
  last_updated: '2020-08-05 00:00',
  temp_c: 26,
  temp_f: 78.8,
  is_day: 0,
  condition:
   { text: 'Overcast',
     icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
     code: 1009 },
  wind_mph: 0,
  wind_kph: 0,
  wind_degree: 0,
  wind_dir: 'N',
  pressure_mb: 1016,
  pressure_in: 30.5,
  precip_mm: 0.5,
  precip_in: 0.02,
  humidity: 89,
  cloud: 100,
  feelslike_c: 28.7,
  feelslike_f: 83.6,
  vis_km: 16,
  vis_miles: 9,
  uv: 1,
  gust_mph: 2.9,
  gust_kph: 4.7 }
Location: New York
Local time: 2020-08-04 14:00
Current weather: 
{ last_updated_epoch: 1596564028,
  last_updated: '2020-08-04 14:00',
  temp_c: 26.6,
  temp_f: 79.9,
  is_day: 1,
  condition:
   { text: 'Mist',
     icon: '//cdn.weatherapi.com/weather/64x64/day/143.png',
     code: 1030 },
  wind_mph: 31.1,
  wind_kph: 50,
  wind_degree: 150,
  wind_dir: 'SSE',
  pressure_mb: 1000,
  pressure_in: 30,
  precip_mm: 1.2,
  precip_in: 0.05,
  humidity: 67,
  cloud: 100,
  feelslike_c: 28.3,
  feelslike_f: 82.9,
  vis_km: 8,
  vis_miles: 4,
  uv: 6,
  gust_mph: 61.1,
  gust_kph: 98.3 }
Location: New York
Local time: 2020-08-04 14:00
Current weather: 
{ last_updated_epoch: 1596564028,
  last_updated: '2020-08-04 14:00',
  temp_c: 27.2,
  temp_f: 81,
  is_day: 1,
  condition:
   { text: 'Mist',
     icon: '//cdn.weatherapi.com/weather/64x64/day/143.png',
     code: 1030 },
  wind_mph: 31.1,
  wind_kph: 50,
  wind_degree: 150,
  wind_dir: 'SSE',
  pressure_mb: 1000,
  pressure_in: 30,
  precip_mm: 0,
  precip_in: 0,
  humidity: 59,
  cloud: 100,
  feelslike_c: 28.5,
  feelslike_f: 83.3,
  vis_km: 8,
  vis_miles: 4,
  uv: 7,
  gust_mph: 60.8,
  gust_kph: 97.9 }
Location: Sao Paulo
Local time: 2020-08-04 15:05
Current weather: 
{ last_updated_epoch: 1596564026,
  last_updated: '2020-08-04 15:00',
  temp_c: 22,
  temp_f: 71.6,
  is_day: 1,
  condition:
   { text: 'Sunny',
     icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
     code: 1000 },
  wind_mph: 5.6,
  wind_kph: 9,
  wind_degree: 90,
  wind_dir: 'E',
  pressure_mb: 1028,
  pressure_in: 30.8,
  precip_mm: 0,
  precip_in: 0,
  humidity: 43,
  cloud: 0,
  feelslike_c: 23.6,
  feelslike_f: 74.5,
  vis_km: 10,
  vis_miles: 6,
  uv: 6,
  gust_mph: 7.6,
  gust_kph: 12.2 }
Location: Pluto
Local time: 2020-08-05 2:00
Current weather: 
{ last_updated_epoch: 1596556835,
  last_updated: '2020-08-05 00:00',
  temp_c: 25,
  temp_f: 77,
  is_day: 0,
  condition:
   { text: 'Partly cloudy',
     icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
     code: 1003 },
  wind_mph: 5.6,
  wind_kph: 9,
  wind_degree: 80,
  wind_dir: 'E',
  pressure_mb: 1007,
  pressure_in: 30.2,
  precip_mm: 0,
  precip_in: 0,
  humidity: 94,
  cloud: 75,
  feelslike_c: 27.1,
  feelslike_f: 80.7,
  vis_km: 10,
  vis_miles: 6,
  uv: 1,
  gust_mph: 9.4,
  gust_kph: 15.1 } */