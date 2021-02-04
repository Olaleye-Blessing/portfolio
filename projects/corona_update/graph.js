export const graphContainer = document.querySelector('.graph__cont');

export function graph(recovered, active, deaths, cases) {
    // graphContainer.innerHTML = ``;
    let graphCont = document.createElement('div');
    graphCont.classList.add('graph');

    let fractionHeight = (100 / cases);

    let recoveredHeight = (recovered * fractionHeight).toFixed(1);

    let activeHeight = (active * fractionHeight).toFixed(1);
    
    let deathsHeight = (deaths * fractionHeight).toFixed(1);

    let recoveredCont = document.createElement('div');
    recoveredCont.classList.add('recovered');
    recoveredCont.textContent = `${recoveredHeight}%`;
    recoveredCont.style.height = `${recoveredHeight}%`;

    let activeCont = document.createElement('div');
    activeCont.classList.add('active');
    activeCont.textContent = `${activeHeight}%`;
    activeCont.style.height = `${activeHeight}%`;

    let deathsCont = document.createElement('div');
    deathsCont.classList.add('death');
    deathsCont.textContent = `${deathsHeight}%`;
    deathsCont.style.height = `${deathsHeight}%`;
    graphCont.append(recoveredCont, activeCont, deathsCont);
    graphContainer.append(graphCont);
}