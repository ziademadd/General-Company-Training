document.addEventListener("DOMContentLoaded", function() {
    const dnaForm = document.getElementById("dnaForm");
    const output = document.getElementById("output");

    dnaForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const dnaSequence = document.getElementById("dnaSequence").value;
        if (validateDNA(dnaSequence)) {
            const rnaSequence = DNAtoRNA(dnaSequence);
            output.innerHTML = `RNA  is : ${rnaSequence}`;
        } else {
            output.innerHTML = " (A, C, G, T) لازم تدخل من الحروف دي بس ";
        }
    });

    function validateDNA(dnaSequence) {
        const validChars = /^[ACGT]+$/;
        return validChars.test(dnaSequence);
    }

    function DNAtoRNA(dnaSequence) {
        return dnaSequence.replace(/T/g, "U");
    }
});
