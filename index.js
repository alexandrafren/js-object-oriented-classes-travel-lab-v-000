class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  startDate() {
    time = this.startString.split(" ");
    switch(time[0]) {
      case "January":
        month = 0;
        break;
      case "Jan":
        month = 0;
        break;
      case ""

    }
    let d = new Date(time[2], time[0], time[1].split(",")[0])
  }

}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
}
