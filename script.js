function getRentCost() {
    let liczba_dni = Number(document.getElementById('dni').value);
    
    if (isNaN(liczba_dni) || liczba_dni <= 0) {
        alert("Proszę podać prawidłową liczbę dni.");
        return;
    }

    let rabat = 50 * Math.trunc(liczba_dni / 7);

    function rentCost(days) {
        let x = 1;
        if (days === 1) x = 200;
        else if (days === 3 || days === 2) x = 180 * days;
        else if (days >= 4 && days <= 7) x = 160 * days;
        else if (days >= 8) x = 150 * days;
        else alert("Wartość niepoprawna");

        if (days >= 7) x = x - rabat;
        return x;
    }

    let totalCost = rentCost(liczba_dni);
    document.getElementById('result').innerHTML = `Cena za wynajem wynosi: ${totalCost} zł. W tym rabat: ${rabat} zł.`;
}
