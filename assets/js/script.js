// Button element variables
let openChatBox = document.getElementById("open_chatbox")
let closeChatBox = document.getElementById("close_chatbox")
let openSideBar = document.getElementById("btn_sidebar")
let openMenu = document.getElementById("open_menu")
let openModal = document.getElementById("view_modal")
let closeModal = document.getElementById("close_modal")

// Component variable
let chatBox = document.querySelector(".chat-box")
let main = document.querySelector(".main")
let sideBar = document.querySelector(".sidebar")
let vMenu = document.querySelector(".v-menu")
const modal = document.getElementsByClassName("modal-container")[0]

// Chat send textarea auto resize function
const tx = document.getElementsByTagName("textarea")
for (let i = 0; i < tx.length; i++) {
  tx[i].addEventListener("input", OnInput, false)
}

function OnInput() {
  this.style.height = "auto"
  this.style.height = this.scrollHeight - 30 + "px"
}

// Chart data get function
function getData() {
  return [
    ["0", 16.9, 12.2],
    ["1", 17, 17.8],
    ["2", 26.5, 23.8],
    ["3", 28.7, 22],
    ["4", 35.7, 24],
    ["5", 37.2, 24.6],
    ["6", 36.5, 26.2],
    ["7", 40, 34.4],
  ]
}

// Chatbox hide and show function
openChatBox.addEventListener("click", () => {
  if (getComputedStyle(chatBox).right == "0px") {
    chatBox.style.right = "-30rem"
    if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)"
    else main.style.width = "calc(100% - 118px)"
  } else {
    chatBox.style.right = "0rem"
    if (window.innerWidth > 1366) main.style.width = "calc(100% - 440px)"
    else if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)"
    else main.style.width = "calc(100% - 118px)"
  }
})

closeChatBox.addEventListener("click", () => {
  chatBox.style.right = "-30rem"
  if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)"
  else main.style.width = "calc(100% - 118px)"
})

// Sidebar hide and show function
openSideBar.addEventListener("click", () => {
  let titleElement = document.getElementsByClassName("title")
  if (getComputedStyle(sideBar).display == "flex") {
    sideBar.style.display = "none"
    if (!titleElement) {
      main.style.width = "calc(100% - 48px)"
    } else {
      if (getComputedStyle(checkout).display != "none")
        withDrawPanel.style.width = "calc(100% - 48px - 260px)"
      else withDrawPanel.style.width = "100%"
    }
    main.style.left = "0px"
  } else {
    sideBar.style.display = "flex"
  }
})

openMenu.addEventListener("click", () => {
  if (getComputedStyle(vMenu).display == "none") {
    vMenu.style.display = "block"
  } else {
    vMenu.style.display = "none"
  }
})

// Modal hide and show function
openModal.addEventListener("click", () => {
  // Clear chart
  while (document.getElementById("chart_panel").hasChildNodes()) {
    document
      .getElementById("chart_panel")
      .removeChild(document.getElementById("chart_panel").firstChild)
  }

  // Chart data get function
  // create a data set on our data
  var dataSet = anychart.data.set(getData())

  // map data for the first series,
  // take x from the zero column and value from the first column
  var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 })

  // map data for the second series,
  // take x from the zero column and value from the second column
  var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 })

  // create a line chart
  var chart = anychart.line()
  chart.background().fill("transparent")

  var xlabels = chart.xAxis().labels()
  xlabels.enabled(false)

  chart.xScale().mode("continuous")

  // create the first series with the mapped data
  var firstSeries = chart.line(firstSeriesData)
  firstSeries.name("A")

  // create the second series with the mapped data
  var secondSeries = chart.line(secondSeriesData)
  secondSeries.name("B")

  // turn the legend on
  chart.legend().enabled(false)

  // set the container id for the line chart
  chart.container("chart_panel")

  // draw the line chart
  chart.draw()
  modal.classList.toggle("toggle-modal")
})

closeModal.addEventListener("click", () => {
  modal.classList.toggle("toggle-modal")
})
