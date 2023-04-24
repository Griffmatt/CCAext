const reprintInput = document.getElementById("ctl00_ctl00_ctl00_c_c_c_cbxSubmitFlag")
const selectInput = document.getElementById("ctl00_ctl00_ctl00_c_c_c_ddlSubmission")
const eClaimsButton = document.querySelector("#ctl00_ctl00_ctl00_c_tsTop > div > ul > li:nth-child(4) > a")

reprintInput.checked = true

selectInput.value = 1

console.log(eClaimsButton)

eClaimsButton.click()
