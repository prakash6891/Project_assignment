const handleDynamicHeight = (sectionId) => {
  const sectionBox = document.getElementById(sectionId);  //etrieve the element by its ID
  const sectionBoxItem = sectionBox.querySelector(".item-size"); // Find the first element with class 'item-size'
  const radioButton = sectionBox.querySelector('input[type="radio"]');
  const sections = document.querySelectorAll(".sectionClass");
  

  if (!sectionBox) { // Check if the sectionBox element does not exist
    return;          // Exit the function if the element is not found
  }

  if (!sectionBoxItem) { 
    return;
  }

  sections.forEach((section) => {
    // Remove the 'selected' class from all sections
    section.style.height = "100px";
    const sectionBoxItem = section.querySelector(".item-size");
    const sectionRadioButton = section.querySelector('input[type="radio"]');
    sectionBoxItem.style.display = "none";
    sectionRadioButton.checked = false;
    section.style.border = "1px solid black";
    section.style.backgroundColor = "white";
  });

  // Add the 'selected' class to the clicked section
  if (sectionBox.clientHeight === 98) { // checked sectionBox height 
    if (                                              
      sectionBoxItem.style.display === "none" ||
      sectionBoxItem.style.display === ""
    ) { 
      sectionBox.style.height = "250px";
      sectionBoxItem.style.display = "block";
      radioButton.checked = true;
      sectionBox.style.border = "2px solid #f05159";
      sectionBox.style.backgroundColor = "#fae6e7";
      sectionBox.style.transition = "0.2s ease";
    }
  }
};
