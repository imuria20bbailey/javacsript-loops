const activityInput     = document.getElementById("activity")
const timeInput         = document.getElementById("time")

const saveBtn   = document.getElementById("save")
const listBody  = document.getElementById("listBody")

const getElementValue= (element) => {
    return element.value

}

saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const activityValue = getElementValue(activityInput)
    const timeValue = getElementValue(timeInput)
    
    const listRow = document.createElement("ul")

    const activityTd = document.createElement("li")
    activityTd.innerHTML = (activityValue + " at " + timeValue).toUpperCase()
    listRow.appendChild(activityTd)

    //const timeTd = document.createElement("li")
    //timeTd.innerHTML = timeValue
    //listRow.appendChild(timeTd)

    listBody.appendChild(listRow)


})


