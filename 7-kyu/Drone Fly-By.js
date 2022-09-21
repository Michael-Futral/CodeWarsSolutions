function flyBy(lamps, drone){
    return lamps.length < drone.length
                ?
                'o'.repeat(lamps.length)
                :
                'o'.repeat(drone.length) + lamps.slice(drone.length)
  }