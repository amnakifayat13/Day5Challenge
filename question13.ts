/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a 
 list that stores several examples. Use your list to print a series of statements about these items, such as
  “I would like to own a Honda motorcycle.”*/

let favVehicle : Array<[vehicle : string , brand : string]> =[]
favVehicle.push(["car", " KIA"])
favVehicle.push(["car", " Toyota"])
favVehicle.push(["Landcruiser", " Toyota"])
favVehicle.push(["motorbike", " Unique"])

favVehicle.forEach(([vehicle, brand])=>
{console.log (`I would like to own ${vehicle} ${brand} `)}
)
