//mT=modeToggle  aT=accountToggle
const body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        header = document.querySelector("header"),
        modeToggle = document.querySelector(".dark-mode"),
        accountToggle = document.querySelector(".accountToggle"),
        side = document.querySelector(".side"),
        sideO = document.querySelector(".sideO");
        section = document.querySelector("section"),
        box = document.querySelector(".box"),
        box1 = document.querySelector(".box1"),
        siginn = document.querySelector(".siginn"),
        loginn = document.querySelector(".loginn"),
        eye = document.querySelector(".eye"),
        input = document.querySelector(".inputt");


        let getMode = localStorage.getItem("mode");
            if (getMode && getMode === "dark-mod") {
                body.classList.add("dark")
            }
        modeToggle.addEventListener("click" , () =>{
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark");
            if(!body.classList.contains("dark")){
                localStorage.setItem("mode", "light-mod")
            }else{
                localStorage.setItem("mode", "dark-mod")
            }

        });
        accountToggle.addEventListener("click" , () =>{
            accountToggle.classList.toggle("active");
            box.classList.toggle("show");
            box1.classList.remove("show");
            section.classList.toggle("active");
            
        });
        sideO.addEventListener("click" , () =>{
            nav.classList.add("active");
        });
        body.addEventListener("click" , e =>{
            let click = e.target;
            if(!click.classList.contains("sideO") && !click.classList.contains("menu")){
                nav.classList.remove("active");
            }
        });

        sideO.addEventListener("click" , () =>{
            header.classList.add("active");
        })
        body.addEventListener("click" , e =>{
            let click = e.target;
            if(!click.classList.contains("sideO") && !click.classList.contains("menu")){
                header.classList.remove("active");
            }
        });

         siginn.addEventListener("click" , (e) =>{
            e.preventDefault();
            box1.classList.toggle("show");
            box.classList.remove("show");
        });
        loginn.addEventListener("click" , (e) =>{
            e.preventDefault();
            box1.classList.remove("show");
            box.classList.toggle("show");
        });

        eye.addEventListener("click", () => {
                if(input.type === "password"){
                    input.type = "text";
                    eye.classList.replace("fa-eye-slash","fa-eye");
                }else{
                    input.type = "password";
                    eye.classList.replace("fa-eye","fa-eye-slash");
                }
        });