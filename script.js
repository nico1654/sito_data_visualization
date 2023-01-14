const svg = d3.select('#SvgViewer')


function createDiv(name, surname, postContent) {
    let div = document.createElement('div');
    div.innerText = "autore \n " + name.value + "  " + surname.value 
    
    let innerDiv = document.createElement('div');
    div.appendChild(innerDiv);
    innerDiv.innerText = postContent.value
    innerDiv.className = "innerPostDiv"
    //+ "\n" + postContent.value
    div.className = "postDiv"
    document.body.appendChild(div);
    document.getElementById("postDiv").appendChild(div);
  }

  function createSvg(fradius, fcolor, fcx, fcy) {
    //d3.select("svg").remove()
    svg.selectAll("*").remove()
    svg.append("circle").attr("cx",fcx.value).attr("cy", fcy.value).attr("r", fradius.value).style("fill", fcolor.value)
  }

