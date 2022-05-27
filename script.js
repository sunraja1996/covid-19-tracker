var div = document.createElement("div");
div.innerHTML = `<input type ="text" id="txt">
<button type="button" onclick="foo()"> Search </button>
<div id = "active"></div>
<div id = "recovered"></div>
<div id = "death"></div>`;
div.style.textAlign="center";
document.body.append(div);


async function foo(){
      let cname = document.getElementById("txt").value;
      let res = await fetch(`https://api.covid19api.com/dayone/country/${cname}`);
      let res1 = await res.json();
      console.log(res1);

      let index = res1.length-1;
      var active = res1[index].Active;
      var recovered = res1[index].Recovered;
      var death = res1[index].Deaths;
      console.log(active, recovered, death);

      document.getElementById("active").innerText = `Total Active Cases : ${active}`;
      document.getElementById("recovered").innerText = `Total Recovered : ${recovered}`;
      document.getElementById("death").innerText = `Total Deaths : ${death}`;
}