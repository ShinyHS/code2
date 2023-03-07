            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file);
        //start ---
            reader.onload = function (event) {
            const svgCode = event.target.result;
            console.log(svgCode);
            document.querySelector(".svvg").innerHTML = `${svgCode}`;
            let svg = document.querySelector(".svvg");
            console.log(svg);
            const ids = svg.querySelectorAll("*[id]");
            let allIds = [];
            ids.forEach((elements) => {
                allIds.push(elements.id);
            });
            console.log(allIds);
            for (let i = 0; i < allIds.length; i++) {
                let firstLetter = allIds[i].charAt(0);
                const isAlphabet = /^[A-Za-z]/.test(firstLetter);
                if (!isAlphabet) {
                    flags=1;
                    break;
                } else {
                console.log("true");
                }
            }
            }
        //end