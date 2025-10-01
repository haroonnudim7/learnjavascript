let age = 15;
switch (age) {
    case 10:
        console.log("Age is 10");
        break;
        case 20:
            console.log("Age is 20");
            break;
            default:
                console.log("Age is neither 10 nor 20");
}

let num = 0;
switch (num === 0) {
  case true:
    console.log("Hello True!");
    break;
  case false:
    console.log("Bonjour False!");
    break;
  default:
    console.log("No matching case");
}

let weekdayNumber = 1;
switch (weekdayNumber) {
    case 0:
        console.log("Sunday");
        break;
        case 1:
            console.log("Monday");
            break;
            case 2:
                console.log("Tuesday");
                break;
                case 3:
                    console.log("Wednesday");
                    break;  
                    case 4:
                        console.log("Thursday");
                        break;
                        case 5:
                            console.log("Friday");
                            break;
                            case 6:
                                console.log("Saturday");
                                break;
                                default:
                                    console.log("The weekday number is invalid");
}