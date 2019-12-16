// Main JS for the Macbeth Choose Your Own Adventure

//******************** HTML Components ********************//
var storyDiv = document.getElementById("story")
var buttonDiv = document.getElementById("buttons")
var question = document.getElementById("question")

//******************** Load Scene Button ********************//
function loadScene(scene) {
    // Add new row to the story div
    var newDiv = document.createElement("div")
    newDiv.setAttribute("class", "row")
    // newDiv.setAttribute("aria-expanded", "false")   // For transition
    var storyText = document.createElement("p")
    storyText.innerHTML = scene.description
    newDiv.append(storyText)
    newDiv.append(document.createElement("hr"))
    storyDiv.append(newDiv)
    // storyDiv.lastChild.setAttribute("aria-expanded", "true")  // For transition

    // Set the question to the new question
    question.innerHTML = scene.question;

    // Set buttons in the buttons div
    buttonDiv.innerHTML = ""
    for (let i = 0; i < scene.options.length; i++) {
        let option = document.createElement("button")
        option.innerHTML = scene.options[i]
        option.setAttribute("onclick", ("loadScene(scenes['" + scene.links[i] + "'])"))
        buttonDiv.append(option)
    }

    // Move down the page
    buttonDiv.scrollIntoView()
}

loadScene(scenes.testScene)
loadScene(scenes.testScene)
loadScene(scenes.testScene)