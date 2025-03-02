let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".es"];

function generateDomains() {
    let domains = [];
    
    for (let p of pronoun) {
        for (let a of adj) {
            for (let n of noun) {
                for (let ext of extensions) {
                    // Dominio normal
                    domains.push(`${p}${a}${n}${ext}`);

                    // Domain hack: si el sustantivo termina con la extensión
                    if (n.endsWith(ext.replace(".", ""))) {
                        domains.push(`${p}${a}${n.slice(0, -ext.length + 1)}${ext}`);
                    }
                }
            }
        }
    }
    
    return domains;
}

// Función para mostrar dominios en la página
function displayDomains() {
    let domainList = document.getElementById("domains");
    domainList.innerHTML = ""; // Limpiar lista antes de agregar nuevos
    
    let domains = generateDomains();
    
    domains.forEach(domain => {
        let li = document.createElement("li");
        li.textContent = domain;
        domainList.appendChild(li);
    });
}

// Agregar evento al botón para generar dominios
document.getElementById("generateBtn").addEventListener("click", displayDomains);
