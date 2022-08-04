function handleClick(id) {
    const element = document.getElementById(id)
    if (element.dataset.heart === 'false'){
        element.style.fill = "#ef2020"
        element.dataset.heart = 'true'
    }
    else {
        element.style.fill = 'transparent';
        element.dataset.heart = 'false'
    }

}