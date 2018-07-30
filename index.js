let store = {drivers: [], passengers:[], trips:[]}

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver{
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
}

class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  
  drivers(){
    return store.drivers.filter()
  }
}

//join table model 
class Trip{
  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driver.id
    if(passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  driver(){
    return store.drivers.find((driver) => {
      return driver.id === this.driverId
    })
  }
  
  
  setPassenger(passenger){
    this.passengerId = passenger.id
  }
  passenger(){
    return store.passengers.find((passenger) => {
      return passenger.id === this.passengerId
    })
  }
}