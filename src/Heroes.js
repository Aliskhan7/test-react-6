const {useState} = require("react");

function Heroes(){

    const nameItem = [
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ]

    const [names, setNames] = useState(nameItem);

    return(
        names.map((item, index) => {
            return(
                <ul key={index}>
                    <li >{item}</li>
                </ul>
            )
        })
    )
}

export default Heroes;