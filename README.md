# README



function retLocationArr(locations) 
- This function takes locations and first determines the parameter type.
- If the given parameter was string, then we first remove "./weather".
	- I took this into consideration because the example input included it. 
- Then, I split the string and return an array. If the given input is of type array, then I simply return the array
- There are two errors that are thrown in this function - one for if the string is empty and one for if the input value is neither string or an array. 


function logTimeandWeather(location_array: string[])
- This function logs the time and weather for the locations. I used axios to get request API because it is simple and handles errors easily. 
- The URL variable is a string with the URL of the API, which is used to log location, time, and weather.
- The for loop loops through the location_array to find the key location to match its value to. Once a match is found, the location name, time, and weather are logged. However, if there is an invalid location, then an error message is logged.


