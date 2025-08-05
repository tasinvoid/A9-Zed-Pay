


function setItemToLC(Id, name) {
    let currentData = getItemFromLC();
  
    console.log(name);
    if (currentData.includes(Id)) {
      localStorage.setItem("bookingNotification", `Appointment Already Exist`);
      return false;
    } else {
      currentData.push(Id);
      let dataStringified = JSON.stringify(currentData);
      localStorage.setItem("billId", dataStringified);
      // localStorage.setItem(
      //   "bookingNotification",
      //   `Appointment booked successfully with ${name}!`
      // );
      return true;
    }
  }
  
  function getItemFromLC(email) {
  
    let storedDataStr = localStorage.getItem(email);
    if (storedDataStr) {
      let storedData = JSON.parse(storedDataStr);
      return storedData;
    } else {
      return [];
    }
  }
  export { setItemToLC, getItemFromLC };
  