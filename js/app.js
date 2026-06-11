console.log(
    "Quantity Measurement Frontend Started"
);

let selectedCategory = null;

let selectedOperation = null;

/*
----------------------------------
Category Selection
----------------------------------
*/

const categoryCards =
    document.querySelectorAll(
        ".category-card"
    );

categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            categoryCards.forEach(c =>
                c.classList.remove(
                    "active"
                )
            );

            card.classList.add(
                "active"
            );

            selectedCategory =
                card.dataset.category;

            console.log(
                "Selected Category:",
                selectedCategory
            );
        }
    );
});

/*
----------------------------------
Operation Selection
----------------------------------
*/

const operationButtons =
    document.querySelectorAll(
        ".action-buttons button"
    );

operationButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            operationButtons.forEach(btn =>
                btn.classList.remove(
                    "active"
                )
            );

            button.classList.add(
                "active"
            );

            selectedOperation =
                button.dataset.operation;

            console.log(
                "Selected Operation:",
                selectedOperation
            );
        }
    );
});