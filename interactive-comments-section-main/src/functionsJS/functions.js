let testing = false

export function downConfigurationWindow(){
    if(testing){
        testing = false
        popUpSettings.style.transform = "translateY(-198px)"
    }
}

export function updatingFontSize(size){
    const textSize = getTextSizeElements()
    textSize.forEach((Element)=>{
        Element.style.fontSize = size
        currentSize = size
        console.log(size)
    })

    let newSize = size
    localStorage.setItem("size", newSize)
}

export function configurationWindow(){
    updatingFontSize(selectOptionSize.value)
    updatingSettingsWindowSize()
}

export function updatingSettingsWindowSize(){
    if(localStorage.getItem("size") === "18px" || localStorage.getItem("size") === "19px"){
        popUpSettings.style.width = "174px"
        popUpSettings.style.height = "150px"
        listPopUpSettingsAuxFont.style.height = "23.5px"
        listPopUpSettingsAuxLanguage.style.height = "21.5px"
        listPopUpSettingsAuxLanguage.style.top = "171.5px"
    }else if(localStorage.getItem("size") === "17px"){
        listPopUpSettingsAuxLanguage.style.height = "20.5px"
        listPopUpSettingsAuxLanguage.style.top = "168.5px"
    }else if(localStorage.getItem("size") === "16px"){
        listPopUpSettingsAuxLanguage.style.height = "19.5px"
        listPopUpSettingsAuxLanguage.style.top = "167.5px"
    }
    else{
        popUpSettings.style.width = "159px"
        popUpSettings.style.height = "140px"
        listPopUpSettingsAuxFont.style.height = "19.5px"
        listPopUpSettingsAuxLanguage.style.height = "18.5px"
        listPopUpSettingsAuxLanguage.style.top = "166.5px"
    }
}

export function getTextSizeElements() {
    return document.querySelectorAll('.textSize');
}

export {
    testing
}

